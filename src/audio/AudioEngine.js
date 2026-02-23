/**
 * AudioEngine — Web Audio API core with master volume and sound categories.
 * Singleton. Handles AudioContext lifecycle (autoplay policy), category gains,
 * mute toggle, and shared utilities for all sound modules.
 *
 * Phase 41 — Procedural Audio & Sound Design
 */

class AudioEngine {
  constructor() {
    /** @type {AudioContext|null} */
    this.ctx = null;

    // Gain hierarchy: source → category → master → destination
    /** @type {GainNode|null} */
    this.masterGain = null;
    /** @type {Record<string,GainNode>} */
    this.categories = {}; // sfx, ambient, ui, music

    this._muted = false;
    this._prevMasterVol = 0.7;
    this._ready = false;

    // Volume defaults per category (0-1)
    this._volumes = {
      master: 0.7,
      sfx: 0.85,
      ambient: 0.5,
      ui: 0.6,
      music: 0.35,
    };

    // Bind resume handler once
    this._onGesture = this._handleGesture.bind(this);
    if (typeof document !== 'undefined') {
      document.addEventListener('click', this._onGesture, { once: false });
      document.addEventListener('keydown', this._onGesture, { once: false });
      document.addEventListener('touchstart', this._onGesture, { once: false });
    }
  }

  /* ---------- lifecycle ---------- */

  /** Create/resume AudioContext on first user gesture */
  _handleGesture() {
    if (!this.ctx) {
      try {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) {
        console.warn('[AudioEngine] Failed to create AudioContext:', e);
        return;
      }
      this._buildGraph();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    if (this.ctx.state === 'running' && !this._ready) {
      this._ready = true;
      // Remove extra listeners — keep one click for potential future suspensions
      document.removeEventListener('keydown', this._onGesture);
      document.removeEventListener('touchstart', this._onGesture);
    }
  }

  _buildGraph() {
    const c = this.ctx;
    this.masterGain = c.createGain();
    this.masterGain.gain.value = this._volumes.master;
    this.masterGain.connect(c.destination);

    for (const cat of ['sfx', 'ambient', 'ui', 'music']) {
      const g = c.createGain();
      g.gain.value = this._volumes[cat];
      g.connect(this.masterGain);
      this.categories[cat] = g;
    }
  }

  /** @returns {boolean} true when AudioContext is created and running */
  get ready() {
    return this._ready && this.ctx && this.ctx.state === 'running';
  }

  /** Explicitly resume (e.g. from main.js click listener) */
  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    // Also trigger initial creation if not yet done
    if (!this.ctx) this._handleGesture();
  }

  /* ---------- volume & mute ---------- */

  /** Set volume for a category or 'master'. value 0-1 */
  setVolume(category, value) {
    const v = Math.max(0, Math.min(1, value));
    this._volumes[category] = v;
    if (category === 'master') {
      if (this.masterGain) this.masterGain.gain.value = v;
    } else if (this.categories[category]) {
      this.categories[category].gain.value = v;
    }
  }

  getVolume(category) {
    return this._volumes[category] ?? 0;
  }

  /** Toggle global mute */
  toggleMute() {
    this._muted = !this._muted;
    if (!this.masterGain) return;
    if (this._muted) {
      this._prevMasterVol = this.masterGain.gain.value;
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
    } else {
      this.masterGain.gain.setValueAtTime(this._prevMasterVol, this.ctx.currentTime);
    }
    return this._muted;
  }

  get muted() {
    return this._muted;
  }

  /* ---------- shared helpers ---------- */

  /** Get category GainNode */
  getCategoryGain(cat) {
    return this.categories[cat] || this.masterGain;
  }

  /** Create a white-noise AudioBuffer of given duration (seconds) */
  createNoiseBuffer(duration) {
    if (!this.ctx) return null;
    const sr = this.ctx.sampleRate;
    const len = Math.floor(sr * duration);
    const buf = this.ctx.createBuffer(1, len, sr);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    return buf;
  }

  /** Shorthand: current time */
  get now() {
    return this.ctx ? this.ctx.currentTime : 0;
  }
}

// Singleton
const audioEngine = new AudioEngine();
export default audioEngine;
