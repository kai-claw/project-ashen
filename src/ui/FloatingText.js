import * as THREE from 'three';

/**
 * FloatingText - CSS-based floating text for XP gains and level ups
 * Uses screen-space overlays for performance
 */
export class FloatingText {
  constructor(camera) {
    this.camera = camera;
    this.texts = [];
    
    // Create container for floating texts
    this.container = document.createElement('div');
    this.container.id = 'floating-text-container';
    this.container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 500;
      overflow: hidden;
    `;
    document.body.appendChild(this.container);
  }
  
  /**
   * Spawn floating text at world position
   * @param {string} text - Text to display
   * @param {THREE.Vector3} worldPos - World position
   * @param {object} options - Styling options
   */
  spawn(text, worldPos, options = {}) {
    const {
      color = '#00ff88',
      fontSize = 18,
      duration = 1.5,
      isLevelUp = false,
    } = options;
    
    // Create text element
    const el = document.createElement('div');
    el.className = 'floating-text';
    el.textContent = text;
    el.style.cssText = `
      position: absolute;
      font-family: 'Cinzel', serif;
      font-size: ${isLevelUp ? 28 : fontSize}px;
      font-weight: ${isLevelUp ? 'bold' : 'normal'};
      color: ${color};
      text-shadow: 
        0 0 4px rgba(0,0,0,0.9),
        0 0 8px ${color}44,
        ${isLevelUp ? '0 0 20px ' + color + '88' : ''};
      white-space: nowrap;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease-out;
      opacity: 1;
      ${isLevelUp ? 'animation: levelUpPulse 0.5s ease-out;' : ''}
    `;
    
    this.container.appendChild(el);
    
    this.texts.push({
      element: el,
      worldPos: worldPos.clone(),
      startY: worldPos.y,
      age: 0,
      duration,
      isLevelUp,
      floatSpeed: isLevelUp ? 1.5 : 2.5,
    });
  }
  
  /**
   * Update all floating texts
   */
  update(delta) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    for (let i = this.texts.length - 1; i >= 0; i--) {
      const ft = this.texts[i];
      ft.age += delta;
      
      // Float upward
      ft.worldPos.y += ft.floatSpeed * delta;
      
      // Project world position to screen
      const screenPos = ft.worldPos.clone().project(this.camera);
      const x = (screenPos.x * 0.5 + 0.5) * screenWidth;
      const y = (-screenPos.y * 0.5 + 0.5) * screenHeight;
      
      // Check if behind camera or off screen
      if (screenPos.z > 1 || x < -100 || x > screenWidth + 100 || y < -100 || y > screenHeight + 100) {
        ft.element.style.display = 'none';
      } else {
        ft.element.style.display = 'block';
        ft.element.style.left = `${x}px`;
        ft.element.style.top = `${y}px`;
      }
      
      // Fade out near end of life
      const fadeStart = ft.duration * 0.6;
      if (ft.age > fadeStart) {
        const fadeProgress = (ft.age - fadeStart) / (ft.duration - fadeStart);
        ft.element.style.opacity = 1 - fadeProgress;
      }
      
      // Remove dead texts
      if (ft.age >= ft.duration) {
        this.container.removeChild(ft.element);
        this.texts.splice(i, 1);
      }
    }
  }
  
  /**
   * Clean up
   */
  dispose() {
    this.texts.forEach(ft => {
      if (ft.element.parentNode) {
        ft.element.parentNode.removeChild(ft.element);
      }
    });
    this.texts = [];
    
    if (this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
  }
}

// Add CSS animation for level up
const style = document.createElement('style');
style.textContent = `
  @keyframes levelUpPulse {
    0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
    50% { transform: translate(-50%, -50%) scale(1.3); }
    100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }
`;
document.head.appendChild(style);
