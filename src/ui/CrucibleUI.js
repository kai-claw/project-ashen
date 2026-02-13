/**
 * CrucibleUI - Infusion menu that opens near bonfire with E key
 * Shows 4 tracks: Strength, Vitality, Stamina, Spirit
 */

export class CrucibleUI {
  constructor(gameManager, inputManager, player) {
    this.gm = gameManager;
    this.input = inputManager;
    this.player = player;
    this.isOpen = false;
    this.selectedTrack = 0;
    this.tracks = ['strength', 'vitality', 'stamina', 'spirit'];
    
    // Create UI container
    this._createUI();
    
    // Keyboard navigation
    window.addEventListener('keydown', (e) => this._handleKey(e));
  }
  
  _createUI() {
    // Main container
    this.container = document.getElementById('crucible-container');
    if (!this.container) {
      console.warn('CrucibleUI: #crucible-container not found in HTML');
      return;
    }
    
    // Cache references
    this.promptEl = document.getElementById('crucible-prompt');
    this.menuEl = document.getElementById('crucible-menu');
    this.trackEls = this.tracks.map(t => document.getElementById(`track-${t}`));
    this.remnantEl = document.getElementById('crucible-remnant');
  }
  
  update() {
    if (!this.container) return;
    
    const nearBonfire = this.gm.isNearBonfire();
    const isDead = this.gm.isDead;
    
    // Handle opening/closing
    if (!this.isOpen) {
      // Show prompt if near bonfire
      if (nearBonfire && !isDead) {
        this._showPrompt(true);
        if (this.input.interact) {
          this._open();
        }
      } else {
        this._showPrompt(false);
      }
    } else {
      // Check for close conditions
      if (!nearBonfire || isDead || this.input.keys['Escape']) {
        this._close();
      }
    }
    
    // Update menu contents if open
    if (this.isOpen) {
      this._updateMenu();
    }
  }
  
  _showPrompt(show) {
    if (this.promptEl) {
      this.promptEl.style.display = show ? 'block' : 'none';
    }
  }
  
  _open() {
    this.isOpen = true;
    this._showPrompt(false);
    if (this.menuEl) {
      this.menuEl.style.display = 'block';
    }
    // Exit pointer lock so mouse is free
    if (document.pointerLockElement) {
      document.exitPointerLock();
    }
  }
  
  _close() {
    this.isOpen = false;
    if (this.menuEl) {
      this.menuEl.style.display = 'none';
    }
  }
  
  _handleKey(e) {
    if (!this.isOpen) return;
    
    switch (e.code) {
      case 'ArrowUp':
      case 'KeyW':
        e.preventDefault();
        this.selectedTrack = (this.selectedTrack - 1 + this.tracks.length) % this.tracks.length;
        break;
      case 'ArrowDown':
      case 'KeyS':
        e.preventDefault();
        this.selectedTrack = (this.selectedTrack + 1) % this.tracks.length;
        break;
      case 'Enter':
      case 'KeyF':
        e.preventDefault();
        this._purchaseSelected();
        break;
      case 'Escape':
      case 'KeyE':
        e.preventDefault();
        this._close();
        break;
    }
  }
  
  _purchaseSelected() {
    const track = this.tracks[this.selectedTrack];
    const info = this.gm.getTrackInfo(track);
    
    if (info.maxed || !info.canAfford) return;
    
    // Perform infusion
    if (this.gm.infuse(track)) {
      this.gm.applyInfusionBonuses();
      
      // Apply visual changes to player
      this._applyVisualEffect(track);
    }
  }
  
  _applyVisualEffect(track) {
    if (!this.player) return;
    
    const level = this.gm.infusions[track];
    const totalLevel = this.gm.getTotalDepth();
    
    // Scale player slightly based on total infusion
    const scale = 1.0 + (totalLevel * 0.01); // Up to 1.2x at max
    this.player.mesh.scale.setScalar(scale);
    
    // Track-specific effects
    switch (track) {
      case 'strength':
        // Red glow on body
        this._addGlow(this.player.body, 0xff4444, level * 0.1);
        break;
      case 'vitality':
        // Green glow
        this._addGlow(this.player.body, 0x44ff44, level * 0.1);
        break;
      case 'stamina':
        // Yellow glow
        this._addGlow(this.player.body, 0xffff44, level * 0.1);
        break;
      case 'spirit':
        // Blue glow on visor
        this._addGlow(this.player.visor, 0x4488ff, level * 0.3);
        break;
    }
  }
  
  _addGlow(mesh, color, intensity) {
    if (!mesh || !mesh.material) return;
    // Blend emissive color
    const existing = mesh.material.emissive ? mesh.material.emissive.getHex() : 0;
    const blended = this._blendColors(existing, color, 0.5);
    mesh.material.emissive.setHex(blended);
    mesh.material.emissiveIntensity = Math.min(2, (mesh.material.emissiveIntensity || 0) + intensity);
  }
  
  _blendColors(c1, c2, factor) {
    const r1 = (c1 >> 16) & 0xff, g1 = (c1 >> 8) & 0xff, b1 = c1 & 0xff;
    const r2 = (c2 >> 16) & 0xff, g2 = (c2 >> 8) & 0xff, b2 = c2 & 0xff;
    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);
    return (r << 16) | (g << 8) | b;
  }
  
  _updateMenu() {
    // Update remnant display
    if (this.remnantEl) {
      this.remnantEl.textContent = `Remnant: ${this.gm.remnant}`;
    }
    
    // Update each track
    this.tracks.forEach((track, i) => {
      const el = this.trackEls[i];
      if (!el) return;
      
      const info = this.gm.getTrackInfo(track);
      const isSelected = i === this.selectedTrack;
      
      // Update visual state
      el.classList.toggle('selected', isSelected);
      el.classList.toggle('maxed', info.maxed);
      el.classList.toggle('affordable', info.canAfford && !info.maxed);
      
      // Update content
      const nameEl = el.querySelector('.track-name');
      const levelEl = el.querySelector('.track-level');
      const costEl = el.querySelector('.track-cost');
      const bonusEl = el.querySelector('.track-bonus');
      
      if (nameEl) nameEl.textContent = info.name;
      if (levelEl) levelEl.textContent = `Lv. ${info.level}/${this.gm.MAX_TRACK_DEPTH}`;
      if (costEl) costEl.textContent = info.maxed ? 'MAX' : `Cost: ${info.cost}`;
      if (bonusEl) bonusEl.textContent = info.bonus;
    });
  }
}
