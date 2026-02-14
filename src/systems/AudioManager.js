import * as THREE from 'three';

/**
 * AudioManager - Handles all game audio with spatial positioning
 * Uses Web Audio API for 3D positional audio
 */
export class AudioManager {
  constructor(camera) {
    this.camera = camera;
    this.context = null;
    this.masterGain = null;
    this.musicGain = null;
    this.sfxGain = null;
    this.initialized = false;
    
    // Volume settings (0-1)
    this.masterVolume = 0.7;
    this.musicVolume = 0.4;
    this.sfxVolume = 0.8;
    
    // Audio listener position (follows camera)
    this.listener = null;
    
    // Currently playing music
    this.currentMusic = null;
    this.musicSource = null;
    
    // Sound cooldowns to prevent spam
    this.soundCooldowns = {};
    
    // Pre-generated sound buffers
    this.soundBuffers = {};
  }
  
  /**
   * Initialize audio context (must be called after user interaction)
   */
  async init() {
    if (this.initialized) return;
    
    try {
      this.context = new (window.AudioContext || window.webkitAudioContext)();
      
      // Create gain nodes
      this.masterGain = this.context.createGain();
      this.masterGain.gain.value = this.masterVolume;
      this.masterGain.connect(this.context.destination);
      
      this.musicGain = this.context.createGain();
      this.musicGain.gain.value = this.musicVolume;
      this.musicGain.connect(this.masterGain);
      
      this.sfxGain = this.context.createGain();
      this.sfxGain.gain.value = this.sfxVolume;
      this.sfxGain.connect(this.masterGain);
      
      // Create panner for 3D audio
      this.listener = this.context.listener;
      
      // Generate sound buffers
      await this.generateSoundBuffers();
      
      this.initialized = true;
    } catch (e) {
      console.warn('[AUDIO] Failed to initialize:', e);
    }
  }
  
  /**
   * Generate procedural sound buffers
   */
  async generateSoundBuffers() {
    // Sword swing - whoosh sound
    this.soundBuffers.swordSwing = this.createNoiseBuffer(0.15, 'highpass', 2000, 0.3);
    
    // Hit impact - thud
    this.soundBuffers.hitImpact = this.createImpactBuffer(0.12, 150, 0.6);
    
    // Critical hit - sharper impact
    this.soundBuffers.criticalHit = this.createImpactBuffer(0.15, 200, 0.8);
    
    // Player damage - low thud
    this.soundBuffers.playerDamage = this.createImpactBuffer(0.2, 80, 0.5);
    
    // Enemy grunt variations
    this.soundBuffers.enemyGrunt1 = this.createGruntBuffer(0.2, 120);
    this.soundBuffers.enemyGrunt2 = this.createGruntBuffer(0.25, 100);
    this.soundBuffers.enemyGrunt3 = this.createGruntBuffer(0.18, 140);
    
    // Dodge whoosh
    this.soundBuffers.dodge = this.createNoiseBuffer(0.2, 'bandpass', 800, 0.25);
    
    // Footsteps
    this.soundBuffers.footstepStone = this.createFootstepBuffer(0.08, 'stone');
    this.soundBuffers.footstepMetal = this.createFootstepBuffer(0.1, 'metal');
    
    // Death sound
    this.soundBuffers.death = this.createDeathBuffer(0.8);
    
    // Posture break
    this.soundBuffers.postureBreak = this.createPostureBreakBuffer(0.3);
    
    // Item pickup
    this.soundBuffers.itemPickup = this.createChimeBuffer(0.3, [523, 659, 784]); // C5-E5-G5
    
    // Door unlock
    this.soundBuffers.doorUnlock = this.createChimeBuffer(0.4, [392, 494, 587]); // G4-B4-D5
    
    // Menu select
    this.soundBuffers.menuSelect = this.createChimeBuffer(0.15, [880]);
    
    // Menu confirm
    this.soundBuffers.menuConfirm = this.createChimeBuffer(0.2, [523, 659]);
    
    // Boss roar
    this.soundBuffers.bossRoar = this.createRoarBuffer(0.6);
    
    // Stamina depleted warning
    this.soundBuffers.staminaDepleted = this.createStaminaDepletedBuffer(0.15);
    
    // Level up fanfare (ascending chime)
    this.soundBuffers.levelUp = this.createLevelUpBuffer(0.8);
    
    // Ability sounds
    this.soundBuffers.dash = this.createNoiseBuffer(0.15, 'highpass', 3000, 0.4);
    this.soundBuffers.chargedSwing = this.createImpactBuffer(0.25, 100, 0.7);
    this.soundBuffers.parryReady = this.createChimeBuffer(0.1, [440]);
    this.soundBuffers.parrySuccess = this.createImpactBuffer(0.15, 300, 0.6);
    this.soundBuffers.riposte = this.createImpactBuffer(0.2, 180, 0.8);
    this.soundBuffers.warCry = this.createRoarBuffer(0.4);
    this.soundBuffers.abilityUnlock = this.createChimeBuffer(0.5, [523, 659, 784, 1047]); // Full chord
    
    // Chest open (creak + unlock chime)
    this.soundBuffers.chestOpen = this.createChestOpenBuffer(0.5);
  }
  
  /**
   * Create chest opening sound (creak + reward chime)
   */
  createChestOpenBuffer(duration) {
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.context.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    // Creaky hinge noise (first 0.2s)
    const creakLength = Math.floor(sampleRate * 0.2);
    for (let i = 0; i < creakLength; i++) {
      const t = i / sampleRate;
      // Descending creaky noise
      const creak = Math.sin(2 * Math.PI * (200 - t * 150) * t) * 0.3;
      const noise = (Math.random() * 2 - 1) * 0.15;
      const env = Math.sin((i / creakLength) * Math.PI) * 0.5;
      data[i] = (creak + noise) * env;
    }
    
    // Reward chime (last 0.3s) - ascending
    const chimeStart = creakLength;
    const chimeLength = length - chimeStart;
    const notes = [392, 494, 587, 784]; // G4, B4, D5, G5
    const noteLength = Math.floor(chimeLength / notes.length);
    
    for (let n = 0; n < notes.length; n++) {
      const freq = notes[n];
      const start = chimeStart + n * noteLength;
      for (let i = 0; i < noteLength; i++) {
        const t = i / sampleRate;
        const env = Math.exp(-t * 4) * 0.5;
        data[start + i] = Math.sin(2 * Math.PI * freq * t) * env;
      }
    }
    
    return buffer;
  }
  
  /**
   * Create level up fanfare (triumphant ascending chime)
   */
  createLevelUpBuffer(duration) {
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.context.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    // Ascending chord progression: C5 -> E5 -> G5 -> C6
    const notes = [523, 659, 784, 1047]; // C5, E5, G5, C6
    const noteLength = length / notes.length;
    
    for (let i = 0; i < length; i++) {
      const noteIndex = Math.min(Math.floor(i / noteLength), notes.length - 1);
      const t = (i % noteLength) / noteLength;
      const globalT = i / length;
      
      // Envelope for each note
      const noteEnvelope = Math.sin(t * Math.PI) * 0.8;
      // Global envelope (fade out at end)
      const globalEnvelope = 1 - Math.pow(globalT, 3) * 0.5;
      
      // Play current note + shimmer
      const freq = notes[noteIndex];
      const tone = Math.sin(2 * Math.PI * freq * (i / sampleRate));
      const octave = Math.sin(2 * Math.PI * freq * 2 * (i / sampleRate)) * 0.3;
      const shimmer = Math.sin(2 * Math.PI * freq * 3 * (i / sampleRate)) * 0.15;
      
      data[i] = (tone + octave + shimmer) * noteEnvelope * globalEnvelope * 0.4;
    }
    
    return { buffer, filterType: null, filterFreq: null };
  }
  
  /**
   * Create noise-based buffer (for whoosh effects)
   */
  createNoiseBuffer(duration, filterType, filterFreq, volume) {
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.context.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < length; i++) {
      // White noise with envelope
      const t = i / length;
      const envelope = Math.sin(t * Math.PI); // Fade in/out
      data[i] = (Math.random() * 2 - 1) * envelope * volume;
    }
    
    return { buffer, filterType, filterFreq };
  }
  
  /**
   * Create impact buffer (for hits)
   */
  createImpactBuffer(duration, freq, volume) {
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.context.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < length; i++) {
      const t = i / length;
      // Exponential decay
      const envelope = Math.exp(-t * 10);
      // Low frequency thump + noise
      const tone = Math.sin(2 * Math.PI * freq * t * (1 - t * 0.5));
      const noise = (Math.random() * 2 - 1) * 0.3;
      data[i] = (tone + noise) * envelope * volume;
    }
    
    return { buffer };
  }
  
  /**
   * Create grunt buffer (for enemy sounds)
   */
  createGruntBuffer(duration, baseFreq) {
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.context.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < length; i++) {
      const t = i / length;
      const envelope = Math.sin(t * Math.PI) * Math.exp(-t * 3);
      // Formant-like sound
      const f1 = Math.sin(2 * Math.PI * baseFreq * i / sampleRate);
      const f2 = Math.sin(2 * Math.PI * baseFreq * 2.5 * i / sampleRate) * 0.5;
      const f3 = Math.sin(2 * Math.PI * baseFreq * 4 * i / sampleRate) * 0.25;
      const noise = (Math.random() * 2 - 1) * 0.2;
      data[i] = (f1 + f2 + f3 + noise) * envelope * 0.4;
    }
    
    return { buffer };
  }
  
  /**
   * Create footstep buffer
   */
  createFootstepBuffer(duration, type) {
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.context.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    const freq = type === 'metal' ? 400 : 200;
    const noiseAmt = type === 'metal' ? 0.6 : 0.4;
    
    for (let i = 0; i < length; i++) {
      const t = i / length;
      const envelope = Math.exp(-t * 20);
      const tone = Math.sin(2 * Math.PI * freq * t);
      const noise = (Math.random() * 2 - 1) * noiseAmt;
      data[i] = (tone * 0.5 + noise) * envelope * 0.3;
    }
    
    return { buffer };
  }
  
  /**
   * Create death sound buffer
   */
  createDeathBuffer(duration) {
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.context.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < length; i++) {
      const t = i / length;
      const envelope = Math.exp(-t * 2) * (1 - t);
      // Descending tone with distortion
      const freq = 150 * (1 - t * 0.5);
      const tone = Math.sin(2 * Math.PI * freq * i / sampleRate);
      const distortion = Math.tanh(tone * 3);
      const noise = (Math.random() * 2 - 1) * 0.3 * (1 - t);
      data[i] = (distortion + noise) * envelope * 0.5;
    }
    
    return { buffer };
  }
  
  /**
   * Create posture break sound
   */
  createPostureBreakBuffer(duration) {
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.context.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < length; i++) {
      const t = i / length;
      const envelope = Math.exp(-t * 5);
      // Glass-like shatter
      const tone1 = Math.sin(2 * Math.PI * 800 * i / sampleRate);
      const tone2 = Math.sin(2 * Math.PI * 1200 * i / sampleRate);
      const noise = (Math.random() * 2 - 1) * 0.5;
      data[i] = (tone1 * 0.3 + tone2 * 0.2 + noise) * envelope * 0.4;
    }
    
    return { buffer };
  }
  
  /**
   * Create chime buffer (for UI/pickups)
   */
  createChimeBuffer(duration, frequencies) {
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.context.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < length; i++) {
      const t = i / length;
      const envelope = Math.exp(-t * 4);
      let sample = 0;
      frequencies.forEach((freq, idx) => {
        const delay = idx * 0.03 * sampleRate;
        if (i > delay) {
          const localT = (i - delay) / sampleRate;
          sample += Math.sin(2 * Math.PI * freq * localT) / frequencies.length;
        }
      });
      data[i] = sample * envelope * 0.3;
    }
    
    return { buffer };
  }
  
  /**
   * Create stamina depleted warning sound (tired gasp/wheeze)
   */
  createStaminaDepletedBuffer(duration) {
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.context.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < length; i++) {
      const t = i / length;
      // Quick attack, fade out
      const envelope = Math.exp(-t * 8) * Math.sin(t * Math.PI * 2);
      // Breathy noise with low tone
      const noise = (Math.random() * 2 - 1) * 0.6;
      const tone = Math.sin(2 * Math.PI * 200 * i / sampleRate) * 0.3;
      data[i] = (noise + tone) * Math.abs(envelope) * 0.25;
    }
    
    return { buffer };
  }
  
  /**
   * Create boss roar buffer
   */
  createRoarBuffer(duration) {
    const sampleRate = this.context.sampleRate;
    const length = sampleRate * duration;
    const buffer = this.context.createBuffer(1, length, sampleRate);
    const data = buffer.getChannelData(0);
    
    for (let i = 0; i < length; i++) {
      const t = i / length;
      // Attack-sustain-release envelope
      let envelope;
      if (t < 0.1) envelope = t / 0.1;
      else if (t < 0.7) envelope = 1;
      else envelope = (1 - t) / 0.3;
      
      // Multiple detuned low frequencies
      const f1 = Math.sin(2 * Math.PI * 60 * i / sampleRate);
      const f2 = Math.sin(2 * Math.PI * 65 * i / sampleRate);
      const f3 = Math.sin(2 * Math.PI * 120 * i / sampleRate) * 0.5;
      const noise = (Math.random() * 2 - 1) * 0.4;
      const distortion = Math.tanh((f1 + f2 + f3 + noise) * 2);
      data[i] = distortion * envelope * 0.5;
    }
    
    return { buffer };
  }
  
  /**
   * Play a sound effect
   */
  play(soundName, options = {}) {
    if (!this.initialized || !this.soundBuffers[soundName]) return;
    
    const {
      position = null,     // THREE.Vector3 for 3D positioning
      volume = 1.0,        // Volume multiplier
      pitch = 1.0,         // Playback rate
      cooldown = 0,        // Minimum time between plays
      variation = 0,       // Random pitch variation
    } = options;
    
    // Check cooldown
    const now = performance.now();
    if (cooldown > 0) {
      const lastPlay = this.soundCooldowns[soundName] || 0;
      if (now - lastPlay < cooldown) return;
      this.soundCooldowns[soundName] = now;
    }
    
    const soundData = this.soundBuffers[soundName];
    const source = this.context.createBufferSource();
    source.buffer = soundData.buffer;
    
    // Apply pitch with variation
    const finalPitch = pitch + (Math.random() * 2 - 1) * variation;
    source.playbackRate.value = Math.max(0.5, Math.min(2.0, finalPitch));
    
    // Create gain for this sound
    const gainNode = this.context.createGain();
    gainNode.gain.value = volume;
    
    // Apply filter if specified
    if (soundData.filterType) {
      const filter = this.context.createBiquadFilter();
      filter.type = soundData.filterType;
      filter.frequency.value = soundData.filterFreq;
      source.connect(filter);
      filter.connect(gainNode);
    } else {
      source.connect(gainNode);
    }
    
    // 3D positioning
    if (position && this.camera) {
      const panner = this.context.createPanner();
      panner.panningModel = 'HRTF';
      panner.distanceModel = 'inverse';
      panner.refDistance = 1;
      panner.maxDistance = 50;
      panner.rolloffFactor = 1;
      
      panner.setPosition(position.x, position.y, position.z);
      gainNode.connect(panner);
      panner.connect(this.sfxGain);
    } else {
      gainNode.connect(this.sfxGain);
    }
    
    source.start();
    return source;
  }
  
  /**
   * Play a random enemy grunt
   */
  playEnemyGrunt(position) {
    const grunts = ['enemyGrunt1', 'enemyGrunt2', 'enemyGrunt3'];
    const grunt = grunts[Math.floor(Math.random() * grunts.length)];
    this.play(grunt, { 
      position, 
      volume: 0.6, 
      pitch: 0.9 + Math.random() * 0.2,
      cooldown: 200 
    });
  }
  
  /**
   * Play footstep
   */
  playFootstep(position, surface = 'stone') {
    const soundName = surface === 'metal' ? 'footstepMetal' : 'footstepStone';
    this.play(soundName, {
      position,
      volume: 0.4,
      pitch: 0.9 + Math.random() * 0.2,
      cooldown: 150
    });
  }
  
  /**
   * Update listener position (call in game loop)
   */
  updateListener() {
    if (!this.initialized || !this.camera || !this.listener) return;
    
    const pos = this.camera.position;
    const forward = new THREE.Vector3();
    this.camera.getWorldDirection(forward);
    const up = this.camera.up;
    
    if (this.listener.positionX) {
      // Modern API
      this.listener.positionX.value = pos.x;
      this.listener.positionY.value = pos.y;
      this.listener.positionZ.value = pos.z;
      this.listener.forwardX.value = forward.x;
      this.listener.forwardY.value = forward.y;
      this.listener.forwardZ.value = forward.z;
      this.listener.upX.value = up.x;
      this.listener.upY.value = up.y;
      this.listener.upZ.value = up.z;
    } else {
      // Legacy API
      this.listener.setPosition(pos.x, pos.y, pos.z);
      this.listener.setOrientation(forward.x, forward.y, forward.z, up.x, up.y, up.z);
    }
  }
  
  /**
   * Start ambient music
   */
  startAmbientMusic() {
    if (!this.initialized) return;
    if (this.currentMusic === 'ambient') return;
    
    this.stopMusic();
    this.currentMusic = 'ambient';
    
    // Create ambient drone
    this.createAmbientDrone();
  }
  
  /**
   * Start boss music
   */
  startBossMusic() {
    if (!this.initialized) return;
    if (this.currentMusic === 'boss') return;
    
    this.stopMusic();
    this.currentMusic = 'boss';
    
    // Create intense boss music
    this.createBossMusic();
  }
  
  /**
   * Create ambient cathedral drone
   */
  createAmbientDrone() {
    // Low drone oscillator
    const osc1 = this.context.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.value = 55; // A1
    
    const osc2 = this.context.createOscillator();
    osc2.type = 'sine';
    osc2.frequency.value = 82.5; // E2 (perfect fifth)
    
    // Subtle modulation
    const lfo = this.context.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.1;
    
    const lfoGain = this.context.createGain();
    lfoGain.gain.value = 2;
    lfo.connect(lfoGain);
    lfoGain.connect(osc1.frequency);
    
    // Mix
    const gain1 = this.context.createGain();
    gain1.gain.value = 0.15;
    const gain2 = this.context.createGain();
    gain2.gain.value = 0.1;
    
    osc1.connect(gain1);
    osc2.connect(gain2);
    gain1.connect(this.musicGain);
    gain2.connect(this.musicGain);
    
    osc1.start();
    osc2.start();
    lfo.start();
    
    this.musicSource = { oscs: [osc1, osc2, lfo] };
  }
  
  /**
   * Create boss fight music
   */
  createBossMusic() {
    // More intense pulsing bass
    const osc1 = this.context.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.value = 55;
    
    // Distortion
    const distortion = this.context.createWaveShaper();
    distortion.curve = this.makeDistortionCurve(20);
    
    // Pulsing LFO
    const lfo = this.context.createOscillator();
    lfo.type = 'square';
    lfo.frequency.value = 2; // 120 BPM feel
    
    const lfoGain = this.context.createGain();
    lfoGain.gain.value = 0.3;
    
    const mainGain = this.context.createGain();
    mainGain.gain.value = 0.2;
    
    lfo.connect(lfoGain);
    lfoGain.connect(mainGain.gain);
    
    osc1.connect(distortion);
    distortion.connect(mainGain);
    mainGain.connect(this.musicGain);
    
    osc1.start();
    lfo.start();
    
    this.musicSource = { oscs: [osc1, lfo] };
  }
  
  /**
   * Make distortion curve
   */
  makeDistortionCurve(amount) {
    const samples = 44100;
    const curve = new Float32Array(samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < samples; ++i) {
      const x = (i * 2) / samples - 1;
      curve[i] = ((3 + amount) * x * 20 * deg) / (Math.PI + amount * Math.abs(x));
    }
    return curve;
  }
  
  /**
   * Stop current music
   */
  stopMusic() {
    if (this.musicSource && this.musicSource.oscs) {
      this.musicSource.oscs.forEach(osc => {
        try { osc.stop(); } catch (e) {}
      });
    }
    this.musicSource = null;
    this.currentMusic = null;
  }
  
  /**
   * Set volume levels
   */
  setMasterVolume(vol) {
    this.masterVolume = Math.max(0, Math.min(1, vol));
    if (this.masterGain) this.masterGain.gain.value = this.masterVolume;
  }
  
  setMusicVolume(vol) {
    this.musicVolume = Math.max(0, Math.min(1, vol));
    if (this.musicGain) this.musicGain.gain.value = this.musicVolume;
  }
  
  setSfxVolume(vol) {
    this.sfxVolume = Math.max(0, Math.min(1, vol));
    if (this.sfxGain) this.sfxGain.gain.value = this.sfxVolume;
  }
  
  /**
   * Resume audio context (required after user interaction)
   */
  resume() {
    if (this.context && this.context.state === 'suspended') {
      this.context.resume();
    }
  }
}
