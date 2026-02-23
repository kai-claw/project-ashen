/**
 * SettingsUI — Esc-key settings overlay with tabbed categories.
 *
 * Tabs: Audio | Display | Controls
 *
 * Audio:    5 volume sliders (master, sfx, ambient, ui, music) + mute checkbox
 * Display:  minimap opacity slider, HUD scale radio buttons
 * Controls: read-only keybinding reference grid
 *
 * Phase 42 — Settings Menu & Audio Controls
 */

import audioEngine from '../audio/AudioEngine.js';

const LS_AUDIO = 'ashen-audio-settings';
const LS_DISPLAY = 'ashen-display-settings';

const TABS = ['Audio', 'Display', 'Controls'];

const KEYBINDS = [
  ['WASD',      'Move'],
  ['Left Click','Attack'],
  ['Shift',     'Dodge Roll'],
  ['Space',     'Jump'],
  ['E',         'Interact'],
  ['Tab',       'World Map'],
  ['I',         'Inventory'],
  ['J',         'Quest Log'],
  ['C',         'Character'],
  ['K',         'Crafting'],
  ['1-4',       'Switch Weapon'],
  ['F1-F6',     'Cast Spell'],
  ['Ctrl+1/2/3','Use Potion'],
  ['M',         'Toggle Mute'],
  ['Esc',       'Settings'],
];

export class SettingsUI {
  constructor() {
    this.isOpen = false;
    this._activeTab = 0;

    // Saved prefs (loaded from localStorage)
    this._audioPrefs = { master: 70, sfx: 85, ambient: 50, ui: 60, music: 35, muted: false };
    this._displayPrefs = { minimapOpacity: 100, hudScale: 'normal' };

    this._loadPrefs();
    this._buildDOM();
    this._applyAudioPrefs();
    this._applyDisplayPrefs();
  }

  /* ================================================================
   *  PREFS PERSISTENCE
   * ================================================================ */

  _loadPrefs() {
    try {
      const a = JSON.parse(localStorage.getItem(LS_AUDIO));
      if (a) Object.assign(this._audioPrefs, a);
    } catch (_) {}
    try {
      const d = JSON.parse(localStorage.getItem(LS_DISPLAY));
      if (d) Object.assign(this._displayPrefs, d);
    } catch (_) {}
  }

  _saveAudioPrefs() {
    localStorage.setItem(LS_AUDIO, JSON.stringify(this._audioPrefs));
  }

  _saveDisplayPrefs() {
    localStorage.setItem(LS_DISPLAY, JSON.stringify(this._displayPrefs));
  }

  _applyAudioPrefs() {
    const p = this._audioPrefs;
    audioEngine.setVolume('master', p.master / 100);
    audioEngine.setVolume('sfx', p.sfx / 100);
    audioEngine.setVolume('ambient', p.ambient / 100);
    audioEngine.setVolume('ui', p.ui / 100);
    audioEngine.setVolume('music', p.music / 100);
    if (p.muted && !audioEngine.muted) audioEngine.toggleMute();
    if (!p.muted && audioEngine.muted) audioEngine.toggleMute();
  }

  _applyDisplayPrefs() {
    const p = this._displayPrefs;
    // Minimap opacity
    const mc = document.getElementById('minimap-container');
    if (mc) mc.style.opacity = String(p.minimapOpacity / 100);
    // HUD scale
    const scaleMap = { small: 0.8, normal: 1.0, large: 1.2 };
    const s = scaleMap[p.hudScale] || 1.0;
    document.documentElement.style.setProperty('--hud-scale', String(s));
    // Apply scale to HUD elements
    for (const id of ['health-bar', 'stamina-bar', 'xp-container', 'ability-container', 'mana-container']) {
      const el = document.getElementById(id);
      if (el) el.style.transform = `scale(${s})`;
    }
  }

  /* ================================================================
   *  DOM CONSTRUCTION
   * ================================================================ */

  _buildDOM() {
    // Overlay
    this._overlay = document.createElement('div');
    this._overlay.id = 'settings-overlay';
    this._overlay.style.cssText = `
      display:none; position:fixed; inset:0; z-index:1000;
      background:rgba(0,0,0,0.85); justify-content:center; align-items:center;
      font-family:'Cinzel',serif; color:#e0d0b0;
    `;

    // Panel
    const panel = document.createElement('div');
    panel.style.cssText = `
      width:500px; max-width:92vw; max-height:85vh; background:#1a1a1a;
      border:1px solid rgba(218,165,32,0.4); border-radius:8px;
      display:flex; flex-direction:column; overflow:hidden;
      box-shadow:0 0 40px rgba(0,0,0,0.7);
    `;

    // Header
    const header = document.createElement('div');
    header.style.cssText = `
      display:flex; justify-content:space-between; align-items:center;
      padding:14px 20px 0; flex-shrink:0;
    `;
    const title = document.createElement('span');
    title.textContent = 'SETTINGS';
    title.style.cssText = 'font-size:20px; letter-spacing:3px; color:#DAA520;';
    const closeBtn = document.createElement('button');
    closeBtn.textContent = '✕';
    closeBtn.style.cssText = `
      background:none; border:none; color:#e0d0b0; font-size:20px;
      cursor:pointer; padding:0 4px; font-family:'Cinzel',serif;
    `;
    closeBtn.onclick = () => this.close();
    header.appendChild(title);
    header.appendChild(closeBtn);

    // Tabs
    const tabBar = document.createElement('div');
    tabBar.style.cssText = `
      display:flex; gap:0; padding:12px 20px 0; flex-shrink:0;
      border-bottom:1px solid rgba(218,165,32,0.2);
    `;
    this._tabButtons = TABS.map((name, i) => {
      const btn = document.createElement('button');
      btn.textContent = name;
      btn.style.cssText = `
        flex:1; background:none; border:none; border-bottom:2px solid transparent;
        color:#888; font-family:'Cinzel',serif; font-size:14px;
        padding:8px 0 10px; cursor:pointer; letter-spacing:1px;
        transition:color 0.2s, border-color 0.2s;
      `;
      btn.onclick = () => this._switchTab(i);
      tabBar.appendChild(btn);
      return btn;
    });

    // Content area
    this._content = document.createElement('div');
    this._content.style.cssText = `
      flex:1; padding:18px 24px 20px; overflow-y:auto; min-height:280px;
    `;

    panel.appendChild(header);
    panel.appendChild(tabBar);
    panel.appendChild(this._content);
    this._overlay.appendChild(panel);
    document.body.appendChild(this._overlay);

    this._switchTab(0);
  }

  /* ================================================================
   *  TAB SWITCHING
   * ================================================================ */

  _switchTab(index) {
    this._activeTab = index;
    this._tabButtons.forEach((btn, i) => {
      const active = i === index;
      btn.style.color = active ? '#DAA520' : '#888';
      btn.style.borderBottomColor = active ? '#DAA520' : 'transparent';
    });
    this._content.innerHTML = '';
    if (index === 0) this._buildAudioTab();
    else if (index === 1) this._buildDisplayTab();
    else this._buildControlsTab();
  }

  /* ================================================================
   *  AUDIO TAB
   * ================================================================ */

  _buildAudioTab() {
    const cats = [
      { key: 'master',  label: 'Master Volume' },
      { key: 'sfx',     label: 'SFX' },
      { key: 'ambient', label: 'Ambient' },
      { key: 'ui',      label: 'UI' },
      { key: 'music',   label: 'Music' },
    ];

    cats.forEach(({ key, label }) => {
      const row = this._makeSliderRow(label, this._audioPrefs[key], 0, 100, (v) => {
        this._audioPrefs[key] = v;
        audioEngine.setVolume(key, v / 100);
        this._saveAudioPrefs();
      });
      this._content.appendChild(row);
    });

    // Mute checkbox
    const muteRow = document.createElement('div');
    muteRow.style.cssText = 'display:flex; align-items:center; gap:10px; margin-top:16px; padding-top:12px; border-top:1px solid rgba(218,165,32,0.15);';
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.checked = this._audioPrefs.muted;
    cb.id = 'settings-mute-all';
    cb.style.cssText = 'width:16px; height:16px; accent-color:#DAA520; cursor:pointer;';
    cb.onchange = () => {
      this._audioPrefs.muted = cb.checked;
      if (cb.checked && !audioEngine.muted) audioEngine.toggleMute();
      if (!cb.checked && audioEngine.muted) audioEngine.toggleMute();
      this._saveAudioPrefs();
    };
    const lbl = document.createElement('label');
    lbl.htmlFor = 'settings-mute-all';
    lbl.textContent = 'Mute All';
    lbl.style.cssText = 'font-size:14px; cursor:pointer;';
    muteRow.appendChild(cb);
    muteRow.appendChild(lbl);
    this._content.appendChild(muteRow);
  }

  /* ================================================================
   *  DISPLAY TAB
   * ================================================================ */

  _buildDisplayTab() {
    // Minimap opacity
    const mmRow = this._makeSliderRow('Minimap Opacity', this._displayPrefs.minimapOpacity, 30, 100, (v) => {
      this._displayPrefs.minimapOpacity = v;
      const mc = document.getElementById('minimap-container');
      if (mc) mc.style.opacity = String(v / 100);
      this._saveDisplayPrefs();
    });
    this._content.appendChild(mmRow);

    // HUD Scale
    const scaleLabel = document.createElement('div');
    scaleLabel.textContent = 'HUD Scale';
    scaleLabel.style.cssText = 'font-size:14px; margin-top:18px; margin-bottom:10px;';
    this._content.appendChild(scaleLabel);

    const scaleRow = document.createElement('div');
    scaleRow.style.cssText = 'display:flex; gap:12px;';
    ['small', 'normal', 'large'].forEach((size) => {
      const btn = document.createElement('button');
      btn.textContent = size.charAt(0).toUpperCase() + size.slice(1);
      const active = this._displayPrefs.hudScale === size;
      btn.style.cssText = `
        flex:1; padding:8px 0; border:1px solid ${active ? '#DAA520' : 'rgba(218,165,32,0.3)'};
        background:${active ? 'rgba(218,165,32,0.15)' : 'rgba(0,0,0,0.3)'};
        color:${active ? '#DAA520' : '#888'}; font-family:'Cinzel',serif;
        font-size:13px; border-radius:4px; cursor:pointer; letter-spacing:1px;
      `;
      btn.onclick = () => {
        this._displayPrefs.hudScale = size;
        this._applyDisplayPrefs();
        this._saveDisplayPrefs();
        // Re-render tab to update button states
        this._switchTab(1);
      };
      scaleRow.appendChild(btn);
    });
    this._content.appendChild(scaleRow);
  }

  /* ================================================================
   *  CONTROLS TAB
   * ================================================================ */

  _buildControlsTab() {
    const heading = document.createElement('div');
    heading.style.cssText = 'display:flex; font-size:12px; color:#888; letter-spacing:1px; padding-bottom:6px; border-bottom:1px solid rgba(218,165,32,0.15); margin-bottom:4px;';
    const h1 = document.createElement('span'); h1.textContent = 'KEY'; h1.style.cssText = 'width:100px;';
    const h2 = document.createElement('span'); h2.textContent = 'ACTION'; h2.style.cssText = 'flex:1;';
    heading.appendChild(h1);
    heading.appendChild(h2);
    this._content.appendChild(heading);

    KEYBINDS.forEach(([key, action], i) => {
      const row = document.createElement('div');
      row.style.cssText = `
        display:flex; align-items:center; padding:6px 0;
        background:${i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent'};
        font-size:13px;
      `;
      const kSpan = document.createElement('span');
      kSpan.textContent = key;
      kSpan.style.cssText = 'width:100px; color:#DAA520; font-size:12px; letter-spacing:0.5px;';
      const aSpan = document.createElement('span');
      aSpan.textContent = action;
      aSpan.style.cssText = 'flex:1; color:#c0b090;';
      row.appendChild(kSpan);
      row.appendChild(aSpan);
      this._content.appendChild(row);
    });
  }

  /* ================================================================
   *  SLIDER HELPER
   * ================================================================ */

  _makeSliderRow(label, value, min, max, onChange) {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex; align-items:center; margin-bottom:12px; gap:10px;';

    const lbl = document.createElement('span');
    lbl.textContent = label;
    lbl.style.cssText = 'width:130px; font-size:13px; flex-shrink:0;';

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = String(min);
    slider.max = String(max);
    slider.value = String(value);
    slider.style.cssText = `
      flex:1; height:6px; -webkit-appearance:none; appearance:none;
      background:rgba(218,165,32,0.25); border-radius:3px; outline:none;
      cursor:pointer;
    `;
    // Thumb styling via a <style> tag (injected once)
    this._ensureSliderStyles();

    const valSpan = document.createElement('span');
    valSpan.textContent = `${value}%`;
    valSpan.style.cssText = 'width:40px; text-align:right; font-size:12px; color:#888; flex-shrink:0;';

    slider.oninput = () => {
      const v = parseInt(slider.value, 10);
      valSpan.textContent = `${v}%`;
      onChange(v);
    };

    row.appendChild(lbl);
    row.appendChild(slider);
    row.appendChild(valSpan);
    return row;
  }

  _ensureSliderStyles() {
    if (document.getElementById('settings-slider-styles')) return;
    const style = document.createElement('style');
    style.id = 'settings-slider-styles';
    style.textContent = `
      #settings-overlay input[type=range]::-webkit-slider-thumb {
        -webkit-appearance:none; appearance:none;
        width:14px; height:14px; border-radius:50%;
        background:#DAA520; cursor:pointer; border:2px solid #1a1a1a;
      }
      #settings-overlay input[type=range]::-moz-range-thumb {
        width:14px; height:14px; border-radius:50%;
        background:#DAA520; cursor:pointer; border:2px solid #1a1a1a;
      }
      #settings-overlay input[type=range]::-webkit-slider-runnable-track {
        height:6px; border-radius:3px; background:rgba(218,165,32,0.25);
      }
    `;
    document.head.appendChild(style);
  }

  /* ================================================================
   *  OPEN / CLOSE
   * ================================================================ */

  open() {
    if (this.isOpen) return;
    this.isOpen = true;
    this._overlay.style.display = 'flex';
    this._switchTab(this._activeTab);
  }

  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this._overlay.style.display = 'none';
  }

  toggle() {
    if (this.isOpen) this.close();
    else this.open();
  }

  /* ================================================================
   *  MUTE TOAST (called from main.js M-key handler)
   * ================================================================ */

  showMuteToast(muted) {
    let toast = document.getElementById('mute-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'mute-toast';
      toast.style.cssText = `
        position:fixed; top:70px; left:50%; transform:translateX(-50%);
        font-family:'Cinzel',serif; font-size:14px; color:#e0d0b0;
        background:rgba(0,0,0,0.7); padding:8px 24px;
        border:1px solid rgba(218,165,32,0.3); border-radius:6px;
        z-index:1100; pointer-events:none; opacity:0;
        transition:opacity 0.3s; letter-spacing:1px;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = muted ? '🔇 Muted' : '🔊 Unmuted';
    toast.style.opacity = '1';
    clearTimeout(this._muteToastTimer);
    this._muteToastTimer = setTimeout(() => { toast.style.opacity = '0'; }, 1500);
  }
}
