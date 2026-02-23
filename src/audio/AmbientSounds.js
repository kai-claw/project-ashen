/**
 * AmbientSounds — Continuous procedural world audio.
 *
 *   wind        — looping noise through lowpass ~400 Hz, gentle LFO on gain
 *   birdChirps  — random interval (8-20 s), sine osc with rapid freq envelope
 *   bonfire     — random short noise pops when player near bonfire
 *   footsteps   — filtered noise pulses synced to player movement
 *
 * Phase 41 — Procedural Audio & Sound Design
 */

import audioEngine from './AudioEngine.js';

export class AmbientSounds {
  constructor() {
    // Wind
    this._windSrc = null;
    this._windGain = null;
    this._windStarted = false;

    // Birds
    this._birdTimer = null;

    // Bonfire
    this._bonfirePos = null;       // THREE.Vector3
    this._bonfireInterval = null;
    this._bonfirePlaying = false;

    // Footsteps
    this._lastStepTime = 0;
    this._stepInterval = 0.38;     // seconds between steps at normal walk speed
    this._noiseBuf = null;

    // Crickets (night)
    this._cricketTimer = null;
    this._cricketsActive = false;

    // Torch proximity crackle
    this._torchPositions = [];
    this._torchCrackling = false;
    this._torchInterval = null;

    // State
    this._started = false;
    this._isNight = false;
  }

  /* ---------- public API ---------- */

  /**
   * Call once after world is created.
   * @param {{ bonfirePosition?: {x:number,y:number,z:number} }} opts
   */
  init(opts = {}) {
    if (opts.bonfirePosition) this._bonfirePos = opts.bonfirePosition;
    if (opts.torchPositions) this._torchPositions = opts.torchPositions;
  }

  /** Update time-of-day awareness (call from game loop with timeManager) */
  setTimeOfDay(isNight) {
    if (isNight !== this._isNight) {
      this._isNight = isNight;
      if (isNight && !this._cricketsActive) {
        this._startCrickets();
      } else if (!isNight && this._cricketsActive) {
        this._stopCrickets();
      }
    }
  }

  /** Call every frame from game loop
   * @param {number} delta — seconds
   * @param {{ position: {x:number,y:number,z:number}, velocity?: {x:number,y:number,z:number} }} player
   */
  update(delta, player) {
    if (!audioEngine.ready) return;

    // Lazy-start continuous sounds on first ready frame
    if (!this._started) {
      this._started = true;
      this._startWind();
      this._startBirdScheduler();
    }

    // Footsteps
    this._updateFootsteps(delta, player);

    // Bonfire proximity
    this._updateBonfire(player);

    // Torch proximity crackle
    this._updateTorchProximity(player);
  }

  /** Cleanup on dispose */
  dispose() {
    if (this._windSrc) { try { this._windSrc.stop(); } catch (_) {} }
    if (this._birdTimer) clearTimeout(this._birdTimer);
    if (this._bonfireInterval) clearInterval(this._bonfireInterval);
    this._started = false;
  }

  /* ================================================================
   *  WIND — looping noise → lowpass 400 Hz, LFO modulated gain 0.03-0.08
   * ================================================================ */
  _startWind() {
    const ctx = audioEngine.ctx;
    if (!ctx) return;

    // 2-second noise buffer, looped
    const buf = audioEngine.createNoiseBuffer(2);
    if (!buf) return;
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.loop = true;

    // Lowpass filter
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 400;
    lp.Q.value = 0.5;

    // Output gain
    const gain = ctx.createGain();
    gain.gain.value = 0.05;

    // LFO to modulate gain gently (0.03 – 0.08)
    const lfo = ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.15; // very slow
    const lfoGain = ctx.createGain();
    lfoGain.gain.value = 0.025; // amplitude of modulation
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);

    src.connect(lp).connect(gain).connect(audioEngine.getCategoryGain('ambient'));
    src.start();
    lfo.start();

    this._windSrc = src;
    this._windGain = gain;
    this._windLfo = lfo;
    this._windStarted = true;
  }

  /* ================================================================
   *  BIRD CHIRPS — random interval 8-20 s, sine osc 800→1200→600 Hz (0.2 s)
   * ================================================================ */
  _startBirdScheduler() {
    const schedule = () => {
      const delay = 8000 + Math.random() * 12000; // 8-20 s
      this._birdTimer = setTimeout(() => {
        this._playChirp();
        schedule();
      }, delay);
    };
    schedule();
  }

  _playChirp() {
    if (!audioEngine.ready) return;
    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dur = 0.18 + Math.random() * 0.08; // 0.18-0.26 s

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    // Rapid pitch envelope: 800 → 1200 → 600 Hz
    osc.frequency.setValueAtTime(700 + Math.random() * 200, t);
    osc.frequency.linearRampToValueAtTime(1100 + Math.random() * 200, t + dur * 0.4);
    osc.frequency.linearRampToValueAtTime(500 + Math.random() * 200, t + dur);

    const env = ctx.createGain();
    env.gain.setValueAtTime(0, t);
    env.gain.linearRampToValueAtTime(0.08, t + 0.01);
    env.gain.setValueAtTime(0.08, t + dur * 0.6);
    env.gain.exponentialRampToValueAtTime(0.001, t + dur);

    // Slight stereo pan (random L/R)
    const pan = ctx.createStereoPanner();
    pan.pan.value = Math.random() * 1.6 - 0.8;

    osc.connect(env).connect(pan).connect(audioEngine.getCategoryGain('ambient'));
    osc.start(t);
    osc.stop(t + dur + 0.01);

    // Sometimes do a double chirp
    if (Math.random() < 0.35) {
      const t2 = t + dur + 0.06;
      const osc2 = ctx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(900 + Math.random() * 200, t2);
      osc2.frequency.linearRampToValueAtTime(1300 + Math.random() * 200, t2 + dur * 0.35);
      osc2.frequency.linearRampToValueAtTime(600 + Math.random() * 200, t2 + dur * 0.9);

      const env2 = ctx.createGain();
      env2.gain.setValueAtTime(0.06, t2);
      env2.gain.exponentialRampToValueAtTime(0.001, t2 + dur * 0.9);

      osc2.connect(env2).connect(pan);
      osc2.start(t2);
      osc2.stop(t2 + dur);
    }
  }

  /* ================================================================
   *  BONFIRE CRACKLE — random short noise pops every 100-500 ms
   * ================================================================ */
  _updateBonfire(player) {
    if (!this._bonfirePos) return;
    const dx = player.position.x - this._bonfirePos.x;
    const dz = player.position.z - this._bonfirePos.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    const inRange = dist < 12;

    if (inRange && !this._bonfirePlaying) {
      this._bonfirePlaying = true;
      this._startBonfireCrackle(dist);
    } else if (!inRange && this._bonfirePlaying) {
      this._bonfirePlaying = false;
      if (this._bonfireInterval) {
        clearInterval(this._bonfireInterval);
        this._bonfireInterval = null;
      }
    }
  }

  _startBonfireCrackle(dist) {
    const pop = () => {
      if (!audioEngine.ready || !this._bonfirePlaying) return;
      this._playCracklePop();
    };
    // Random interval pops
    const loop = () => {
      if (!this._bonfirePlaying) return;
      pop();
      this._bonfireInterval = setTimeout(loop, 100 + Math.random() * 400);
    };
    loop();
  }

  _playCracklePop() {
    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dur = 0.02 + Math.random() * 0.03;

    // Tiny noise burst
    if (!this._noiseBuf) this._noiseBuf = audioEngine.createNoiseBuffer(0.1);
    const src = ctx.createBufferSource();
    src.buffer = this._noiseBuf;

    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 1000 + Math.random() * 2000;

    const env = ctx.createGain();
    const vol = 0.06 + Math.random() * 0.08;
    env.gain.setValueAtTime(vol, t);
    env.gain.exponentialRampToValueAtTime(0.001, t + dur);

    src.connect(hp).connect(env).connect(audioEngine.getCategoryGain('ambient'));
    src.start(t);
    src.stop(t + dur + 0.01);
  }

  /* ================================================================
   *  FOOTSTEPS — filtered noise pulses (30 ms) on player movement
   * ================================================================ */
  _updateFootsteps(delta, player) {
    if (!player || !player.velocity) return;

    const vx = player.velocity.x || 0;
    const vz = player.velocity.z || 0;
    const hSpeed = Math.sqrt(vx * vx + vz * vz);

    if (hSpeed < 0.5) {
      this._lastStepTime = 0;
      return;
    }

    this._lastStepTime += delta;

    // Faster movement → shorter interval (min 0.25 s)
    const interval = Math.max(0.25, this._stepInterval / (hSpeed / 3));

    if (this._lastStepTime >= interval) {
      this._lastStepTime = 0;
      this._playStep();
    }
  }

  _playStep() {
    if (!audioEngine.ready) return;
    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dur = 0.03;

    if (!this._noiseBuf) this._noiseBuf = audioEngine.createNoiseBuffer(0.1);
    const src = ctx.createBufferSource();
    src.buffer = this._noiseBuf;

    // Bandpass for earthy footstep
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 200 + Math.random() * 100;
    bp.Q.value = 1;

    const env = ctx.createGain();
    env.gain.setValueAtTime(0.18 + Math.random() * 0.06, t);
    env.gain.exponentialRampToValueAtTime(0.001, t + dur);

    // Tiny pitch variation via playback rate
    src.playbackRate.value = 0.9 + Math.random() * 0.2;

    src.connect(bp).connect(env).connect(audioEngine.getCategoryGain('sfx'));
    src.start(t);
    src.stop(t + dur + 0.01);
  }

  /* ================================================================
   *  CRICKETS — gentle chirping at night (random sine bursts 3-7 kHz)
   * ================================================================ */
  _startCrickets() {
    this._cricketsActive = true;
    const schedule = () => {
      if (!this._cricketsActive) return;
      this._playCricketChirp();
      this._cricketTimer = setTimeout(schedule, 400 + Math.random() * 1200);
    };
    schedule();
  }

  _stopCrickets() {
    this._cricketsActive = false;
    if (this._cricketTimer) {
      clearTimeout(this._cricketTimer);
      this._cricketTimer = null;
    }
  }

  _playCricketChirp() {
    if (!audioEngine.ready) return;
    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;

    // 2-4 rapid pulses at high frequency
    const pulseCount = 2 + Math.floor(Math.random() * 3);
    const baseFreq = 3500 + Math.random() * 2500;
    const pulseDur = 0.015;
    const pulseGap = 0.025;
    const dest = audioEngine.getCategoryGain('ambient');

    // Random stereo position
    const pan = ctx.createStereoPanner();
    pan.pan.value = Math.random() * 2 - 1;
    pan.connect(dest);

    for (let i = 0; i < pulseCount; i++) {
      const start = t + i * (pulseDur + pulseGap);
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = baseFreq + Math.random() * 500;

      const env = ctx.createGain();
      env.gain.setValueAtTime(0.04 + Math.random() * 0.03, start);
      env.gain.exponentialRampToValueAtTime(0.001, start + pulseDur);

      osc.connect(env).connect(pan);
      osc.start(start);
      osc.stop(start + pulseDur + 0.005);
    }
  }

  /* ================================================================
   *  TORCH PROXIMITY — fire crackle when near wall torches
   * ================================================================ */
  _updateTorchProximity(player) {
    if (!player || this._torchPositions.length === 0) return;

    // Check if player is near any torch
    let nearTorch = false;
    for (const tPos of this._torchPositions) {
      const dx = player.position.x - tPos.x;
      const dz = player.position.z - tPos.z;
      if (dx * dx + dz * dz < 100) { // within ~10 units
        nearTorch = true;
        break;
      }
    }

    if (nearTorch && !this._torchCrackling) {
      this._torchCrackling = true;
      this._startTorchCrackle();
    } else if (!nearTorch && this._torchCrackling) {
      this._torchCrackling = false;
      if (this._torchInterval) {
        clearTimeout(this._torchInterval);
        this._torchInterval = null;
      }
    }
  }

  _startTorchCrackle() {
    const loop = () => {
      if (!this._torchCrackling) return;
      this._playTorchPop();
      this._torchInterval = setTimeout(loop, 60 + Math.random() * 250);
    };
    loop();
  }

  _playTorchPop() {
    if (!audioEngine.ready) return;
    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dur = 0.015 + Math.random() * 0.02;

    if (!this._noiseBuf) this._noiseBuf = audioEngine.createNoiseBuffer(0.1);
    const src = ctx.createBufferSource();
    src.buffer = this._noiseBuf;

    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 1500 + Math.random() * 3000;

    const env = ctx.createGain();
    env.gain.setValueAtTime(0.04 + Math.random() * 0.05, t);
    env.gain.exponentialRampToValueAtTime(0.001, t + dur);

    src.connect(hp).connect(env).connect(audioEngine.getCategoryGain('ambient'));
    src.start(t);
    src.stop(t + dur + 0.01);
  }
}
