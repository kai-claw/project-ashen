import * as THREE from 'three';

/**
 * DamageNumberManager - Floating damage numbers when attacks connect.
 * Numbers float upward and fade out over 1s.
 * Color: white=normal, yellow=critical, red=player-damage-taken
 * Pool max 10 DOM elements with CSS animations.
 */

const MAX_NUMBERS = 10;
const FLOAT_DURATION = 1.0; // seconds
const FLOAT_SPEED = 3.0;   // world-units/sec upward

export class DamageNumberManager {
  constructor(camera) {
    this.camera = camera;
    
    // DOM container
    this.container = document.createElement('div');
    this.container.id = 'damage-numbers';
    this.container.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      z-index: 450;
      overflow: hidden;
    `;
    document.body.appendChild(this.container);
    
    // Inject CSS
    const style = document.createElement('style');
    style.textContent = `
      .dmg-num {
        position: absolute;
        font-family: 'Cinzel', serif;
        font-weight: bold;
        transform: translate(-50%, -50%);
        pointer-events: none;
        opacity: 0;
        white-space: nowrap;
        will-change: transform, opacity;
      }
    `;
    document.head.appendChild(style);
    
    // Pool of number elements
    this.pool = [];
    for (let i = 0; i < MAX_NUMBERS; i++) {
      const el = document.createElement('div');
      el.className = 'dmg-num';
      this.container.appendChild(el);
      this.pool.push({
        element: el,
        active: false,
        worldPos: new THREE.Vector3(),
        age: 0,
        duration: FLOAT_DURATION,
        floatSpeed: FLOAT_SPEED,
      });
    }
    
    // Reusable vec
    this._screenPos = new THREE.Vector3();
  }
  
  /**
   * Spawn a damage number.
   * @param {number} amount - Damage dealt
   * @param {THREE.Vector3} worldPos - World position of hit
   * @param {'normal'|'critical'|'player-hit'} type - Determines color
   */
  spawn(amount, worldPos, type = 'normal') {
    // Find an inactive slot (or the oldest one)
    let slot = null;
    let oldestAge = -1;
    let oldestSlot = null;
    
    for (const s of this.pool) {
      if (!s.active) { slot = s; break; }
      if (s.age > oldestAge) { oldestAge = s.age; oldestSlot = s; }
    }
    
    if (!slot) slot = oldestSlot; // Recycle oldest
    
    // Configure
    slot.active = true;
    slot.age = 0;
    slot.duration = FLOAT_DURATION;
    slot.floatSpeed = FLOAT_SPEED;
    slot.worldPos.copy(worldPos);
    // Add slight random horizontal offset to avoid stacking
    slot.worldPos.x += (Math.random() - 0.5) * 0.6;
    slot.worldPos.z += (Math.random() - 0.5) * 0.6;
    slot.worldPos.y += 1.5; // Start above enemy center
    
    const dmgText = Math.round(amount);
    
    let color, fontSize, extraStyle;
    switch (type) {
      case 'critical':
        color = '#ffdd00';
        fontSize = 22;
        extraStyle = 'text-shadow: 0 0 6px #ffaa00, 0 0 12px rgba(255,200,0,0.5), 0 1px 3px #000;';
        slot.element.textContent = `${dmgText}!`;
        slot.floatSpeed = 3.5;
        break;
      case 'player-hit':
        color = '#ff4444';
        fontSize = 20;
        extraStyle = 'text-shadow: 0 0 6px #cc0000, 0 1px 3px #000;';
        slot.element.textContent = `-${dmgText}`;
        slot.floatSpeed = 2.5;
        break;
      default: // normal
        color = '#ffffff';
        fontSize = 18;
        extraStyle = 'text-shadow: 0 0 4px rgba(0,0,0,0.9), 0 1px 2px #000;';
        slot.element.textContent = `${dmgText}`;
        break;
    }
    
    slot.element.style.color = color;
    slot.element.style.fontSize = `${fontSize}px`;
    slot.element.style.cssText += extraStyle;
    slot.element.style.opacity = '1';
  }
  
  update(delta) {
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    
    for (const slot of this.pool) {
      if (!slot.active) continue;
      
      slot.age += delta;
      slot.worldPos.y += slot.floatSpeed * delta;
      
      // Fade out
      const progress = slot.age / slot.duration;
      if (progress >= 1) {
        slot.active = false;
        slot.element.style.opacity = '0';
        continue;
      }
      
      // Ease-out opacity: fully visible for 50%, then fade
      const fadeStart = 0.4;
      const opacity = progress < fadeStart ? 1 : 1 - ((progress - fadeStart) / (1 - fadeStart));
      slot.element.style.opacity = String(Math.max(0, opacity));
      
      // Scale: slight pop-in, then shrink
      const scale = progress < 0.1 ? 0.5 + progress * 5 : 1.0 - progress * 0.2;
      
      // Project to screen
      this._screenPos.copy(slot.worldPos).project(this.camera);
      
      if (this._screenPos.z > 1) {
        slot.element.style.opacity = '0';
        continue;
      }
      
      const x = (this._screenPos.x * 0.5 + 0.5) * screenW;
      const y = (-this._screenPos.y * 0.5 + 0.5) * screenH;
      
      if (x < -50 || x > screenW + 50 || y < -50 || y > screenH + 50) {
        slot.element.style.opacity = '0';
        continue;
      }
      
      slot.element.style.left = `${x}px`;
      slot.element.style.top = `${y}px`;
      slot.element.style.transform = `translate(-50%, -50%) scale(${scale.toFixed(2)})`;
    }
  }
  
  dispose() {
    for (const slot of this.pool) {
      slot.element.remove();
    }
    this.pool = [];
    this.container.remove();
  }
}
