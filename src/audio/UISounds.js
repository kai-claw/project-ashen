/**
 * UISounds — Procedural UI feedback audio using Web Audio API.
 *
 *   questAccept   — ascending C5 → E5 → G5 sine (100 ms each)
 *   levelUp       — major chord (C4+E4+G4) 0.5 s + high shimmer sweep
 *   menuClick     — 1 ms noise burst through highpass
 *   discoveryChime — two sine notes G4, C5 (150 ms each)
 *   itemPickup    — sine 300→600 Hz in 50 ms
 *
 * Phase 41 — Procedural Audio & Sound Design
 */

import audioEngine from './AudioEngine.js';

// Note frequencies (Hz)
const NOTE = {
  C4: 261.63, E4: 329.63, G4: 392.00,
  C5: 523.25, E5: 659.25, G5: 783.99,
  C6: 1046.50,
};

export class UISounds {
  constructor() {
    this._noiseBuf = null;
    this._cooldowns = {};
  }

  _cd(key, ms) {
    const now = performance.now();
    if (this._cooldowns[key] && now - this._cooldowns[key] < ms) return false;
    this._cooldowns[key] = now;
    return true;
  }

  _noise() {
    if (!this._noiseBuf && audioEngine.ctx) {
      this._noiseBuf = audioEngine.createNoiseBuffer(0.05);
    }
    return this._noiseBuf;
  }

  /* ================================================================
   *  QUEST ACCEPT — ascending arpeggio C5 → E5 → G5 (100 ms each)
   * ================================================================ */
  playQuestAccept() {
    if (!audioEngine.ready) return;
    if (!this._cd('quest', 500)) return;

    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dest = audioEngine.getCategoryGain('ui');
    const notes = [NOTE.C5, NOTE.E5, NOTE.G5];
    const noteDur = 0.1;

    notes.forEach((freq, i) => {
      const start = t + i * noteDur;
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;

      const env = ctx.createGain();
      env.gain.setValueAtTime(0.25, start);
      env.gain.exponentialRampToValueAtTime(0.001, start + noteDur * 1.8);

      osc.connect(env).connect(dest);
      osc.start(start);
      osc.stop(start + noteDur * 2);
    });
  }

  /* ================================================================
   *  LEVEL UP — major chord C4+E4+G4 sustained 0.5 s + shimmer sweep
   * ================================================================ */
  playLevelUp() {
    if (!audioEngine.ready) return;

    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dest = audioEngine.getCategoryGain('ui');
    const dur = 0.6;

    // Major chord
    [NOTE.C4, NOTE.E4, NOTE.G4].forEach((freq) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;

      // Slight vibrato
      const vib = ctx.createOscillator();
      vib.type = 'sine';
      vib.frequency.value = 5;
      const vibG = ctx.createGain();
      vibG.gain.value = 2;
      vib.connect(vibG).connect(osc.frequency);
      vib.start(t);
      vib.stop(t + dur + 0.1);

      const env = ctx.createGain();
      env.gain.setValueAtTime(0.2, t);
      env.gain.setValueAtTime(0.2, t + dur * 0.6);
      env.gain.exponentialRampToValueAtTime(0.001, t + dur);

      osc.connect(env).connect(dest);
      osc.start(t);
      osc.stop(t + dur + 0.05);
    });

    // High shimmer sweep (C6 → up)
    const shimmer = ctx.createOscillator();
    shimmer.type = 'sine';
    shimmer.frequency.setValueAtTime(NOTE.C6, t + 0.15);
    shimmer.frequency.linearRampToValueAtTime(NOTE.C6 * 2, t + dur);

    const sEnv = ctx.createGain();
    sEnv.gain.setValueAtTime(0, t);
    sEnv.gain.linearRampToValueAtTime(0.12, t + 0.2);
    sEnv.gain.exponentialRampToValueAtTime(0.001, t + dur);

    shimmer.connect(sEnv).connect(dest);
    shimmer.start(t + 0.1);
    shimmer.stop(t + dur + 0.05);
  }

  /* ================================================================
   *  MENU CLICK — 1 ms noise burst through highpass
   * ================================================================ */
  playMenuClick() {
    if (!audioEngine.ready) return;
    if (!this._cd('click', 50)) return;

    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dur = 0.008; // ~8 ms for a crisp tick

    const buf = this._noise();
    if (!buf) return;
    const src = ctx.createBufferSource();
    src.buffer = buf;

    const hp = ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 4000;

    const env = ctx.createGain();
    env.gain.setValueAtTime(0.3, t);
    env.gain.exponentialRampToValueAtTime(0.001, t + dur);

    src.connect(hp).connect(env).connect(audioEngine.getCategoryGain('ui'));
    src.start(t);
    src.stop(t + dur + 0.005);
  }

  /* ================================================================
   *  DISCOVERY CHIME — two sine notes G4, C5 (150 ms each)
   * ================================================================ */
  playDiscoveryChime() {
    if (!audioEngine.ready) return;
    if (!this._cd('discover', 1000)) return;

    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dest = audioEngine.getCategoryGain('ui');
    const noteDur = 0.15;

    [NOTE.G4, NOTE.C5].forEach((freq, i) => {
      const start = t + i * noteDur;
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;

      const env = ctx.createGain();
      env.gain.setValueAtTime(0.22, start);
      env.gain.exponentialRampToValueAtTime(0.001, start + noteDur * 2.5);

      osc.connect(env).connect(dest);
      osc.start(start);
      osc.stop(start + noteDur * 3);
    });
  }

  /* ================================================================
   *  ITEM PICKUP — sine 300→600 Hz in 50 ms
   * ================================================================ */
  playItemPickup() {
    if (!audioEngine.ready) return;
    if (!this._cd('pickup', 80)) return;

    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dur = 0.05;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, t);
    osc.frequency.exponentialRampToValueAtTime(600, t + dur);

    const env = ctx.createGain();
    env.gain.setValueAtTime(0.25, t);
    env.gain.exponentialRampToValueAtTime(0.001, t + dur * 1.5);

    osc.connect(env).connect(audioEngine.getCategoryGain('ui'));
    osc.start(t);
    osc.stop(t + dur * 2);
  }

  /* ================================================================
   *  QUEST COMPLETE — descending triumphant chord G5 → E5 → C5
   * ================================================================ */
  playQuestComplete() {
    if (!audioEngine.ready) return;
    if (!this._cd('qcomplete', 500)) return;

    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dest = audioEngine.getCategoryGain('ui');
    const notes = [NOTE.G5, NOTE.E5, NOTE.C5];
    const noteDur = 0.12;

    // Play chord first
    [NOTE.C5, NOTE.E5, NOTE.G5].forEach((freq) => {
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const env = ctx.createGain();
      env.gain.setValueAtTime(0.15, t);
      env.gain.exponentialRampToValueAtTime(0.001, t + 0.5);
      osc.connect(env).connect(dest);
      osc.start(t);
      osc.stop(t + 0.55);
    });
  }
}
