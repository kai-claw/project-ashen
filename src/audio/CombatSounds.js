/**
 * CombatSounds — Procedural combat audio using Web Audio API.
 * All sounds are synthesised in real-time with oscillators, noise buffers & filters.
 *
 * Sounds:
 *   swordSwing  — bandpass-filtered noise sweep 2000→200 Hz (0.15 s)
 *   hitImpact   — 80 Hz osc + noise burst, fast exponential decay
 *   enemyDeath  — descending osc 400→100 Hz (0.3 s) + filtered noise
 *   playerHurt  — two detuned oscillators 200 / 250 Hz (0.1 s)
 *
 * Phase 41 — Procedural Audio & Sound Design
 */

import audioEngine from './AudioEngine.js';

export class CombatSounds {
  constructor() {
    /** Shared noise buffer (1 s white noise) — created lazily */
    this._noiseBuf = null;
    this._cooldowns = {};
  }

  /* ---- internal helpers ---- */

  _noise() {
    if (!this._noiseBuf && audioEngine.ctx) {
      this._noiseBuf = audioEngine.createNoiseBuffer(1);
    }
    return this._noiseBuf;
  }

  /** Simple cooldown gate (ms) */
  _cd(key, ms) {
    const now = performance.now();
    if (this._cooldowns[key] && now - this._cooldowns[key] < ms) return false;
    this._cooldowns[key] = now;
    return true;
  }

  /* ================================================================
   *  SWORD SWING — noise through bandpass filter sweeping 2 kHz → 200 Hz
   * ================================================================ */
  playSwordSwing() {
    if (!audioEngine.ready) return;
    if (!this._cd('swing', 100)) return;

    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dur = 0.15;

    // Noise source
    const src = ctx.createBufferSource();
    src.buffer = this._noise();
    src.loop = false;

    // Bandpass filter with frequency sweep
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.Q.value = 2;
    bp.frequency.setValueAtTime(2000, t);
    bp.frequency.exponentialRampToValueAtTime(200, t + dur);

    // Envelope
    const env = ctx.createGain();
    env.gain.setValueAtTime(0.35, t);
    env.gain.linearRampToValueAtTime(0.4, t + 0.02);
    env.gain.exponentialRampToValueAtTime(0.001, t + dur);

    src.connect(bp);
    bp.connect(env);
    env.connect(audioEngine.getCategoryGain('sfx'));

    src.start(t);
    src.stop(t + dur + 0.01);
  }

  /* ================================================================
   *  HIT IMPACT — 80 Hz oscillator + noise burst, quick exponential decay
   * ================================================================ */
  playHitImpact(heavy = false) {
    if (!audioEngine.ready) return;
    if (!this._cd('hit', 60)) return;

    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dur = heavy ? 0.15 : 0.1;
    const vol = heavy ? 0.55 : 0.4;

    // Low-frequency thump oscillator
    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(heavy ? 60 : 80, t);
    osc.frequency.exponentialRampToValueAtTime(40, t + dur);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(vol, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    // Noise burst
    const nSrc = ctx.createBufferSource();
    nSrc.buffer = this._noise();

    const nHp = ctx.createBiquadFilter();
    nHp.type = 'highpass';
    nHp.frequency.value = 800;

    const nGain = ctx.createGain();
    nGain.gain.setValueAtTime(vol * 0.5, t);
    nGain.gain.exponentialRampToValueAtTime(0.001, t + dur * 0.7);

    const dest = audioEngine.getCategoryGain('sfx');

    osc.connect(oscGain).connect(dest);
    nSrc.connect(nHp).connect(nGain).connect(dest);

    osc.start(t);
    osc.stop(t + dur + 0.01);
    nSrc.start(t);
    nSrc.stop(t + dur + 0.01);
  }

  /* ================================================================
   *  ENEMY DEATH — descending osc 400→100 Hz (0.3 s) + filtered noise
   * ================================================================ */
  playEnemyDeath() {
    if (!audioEngine.ready) return;

    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dur = 0.3;

    // Descending tone
    const osc = ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(400, t);
    osc.frequency.exponentialRampToValueAtTime(100, t + dur);

    const oscGain = ctx.createGain();
    oscGain.gain.setValueAtTime(0.3, t);
    oscGain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    // Noise layer
    const nSrc = ctx.createBufferSource();
    nSrc.buffer = this._noise();

    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.setValueAtTime(1200, t);
    lp.frequency.exponentialRampToValueAtTime(200, t + dur);

    const nGain = ctx.createGain();
    nGain.gain.setValueAtTime(0.2, t);
    nGain.gain.exponentialRampToValueAtTime(0.001, t + dur);

    const dest = audioEngine.getCategoryGain('sfx');

    osc.connect(oscGain).connect(dest);
    nSrc.connect(lp).connect(nGain).connect(dest);

    osc.start(t);
    osc.stop(t + dur + 0.02);
    nSrc.start(t);
    nSrc.stop(t + dur + 0.02);
  }

  /* ================================================================
   *  PLAYER HURT — two detuned oscillators 200 Hz & 250 Hz (0.1 s)
   * ================================================================ */
  playPlayerHurt() {
    if (!audioEngine.ready) return;
    if (!this._cd('hurt', 150)) return;

    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dur = 0.1;

    const dest = audioEngine.getCategoryGain('sfx');

    for (const freq of [200, 250]) {
      const osc = ctx.createOscillator();
      osc.type = 'square';
      osc.frequency.value = freq;

      const g = ctx.createGain();
      g.gain.setValueAtTime(0.2, t);
      g.gain.exponentialRampToValueAtTime(0.001, t + dur);

      osc.connect(g).connect(dest);
      osc.start(t);
      osc.stop(t + dur + 0.01);
    }
  }

  /* ================================================================
   *  PARRY — metallic clang (high sine + noise)
   * ================================================================ */
  playParry() {
    if (!audioEngine.ready) return;

    const ctx = audioEngine.ctx;
    const t = ctx.currentTime;
    const dur = 0.2;

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, t);
    osc.frequency.exponentialRampToValueAtTime(600, t + dur);

    const g = ctx.createGain();
    g.gain.setValueAtTime(0.35, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);

    osc.connect(g).connect(audioEngine.getCategoryGain('sfx'));
    osc.start(t);
    osc.stop(t + dur + 0.01);
  }
}
