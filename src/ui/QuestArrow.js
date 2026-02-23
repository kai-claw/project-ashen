/**
 * QuestArrow — Phase 40
 * Shows a golden directional arrow on screen edge pointing toward
 * the active quest objective (nearest enemy for kill quests, 
 * turn-in NPC for completed quests, or Elder Marcus if no quest).
 */
export class QuestArrow {
  constructor() {
    this.el = document.createElement('div');
    this.el.id = 'quest-arrow';
    this.el.style.cssText = `
      position: fixed;
      width: 0; height: 0;
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      border-bottom: 20px solid #DAA520;
      filter: drop-shadow(0 0 6px rgba(218, 165, 32, 0.6));
      z-index: 700;
      pointer-events: none;
      display: none;
      transition: transform 0.1s ease;
    `;
    document.body.appendChild(this.el);
    
    this.camera = null;
    this.targetPos = null;
  }
  
  init({ camera }) {
    this.camera = camera;
  }
  
  /**
   * Call each frame with a target world position.
   * @param {THREE.Vector3|null} target - world position to point toward, or null to hide
   */
  update(target) {
    if (!target || !this.camera) {
      this.el.style.display = 'none';
      return;
    }
    
    // Project target to screen space
    const projected = target.clone().project(this.camera);
    
    // If target is behind camera, invert
    const behind = projected.z > 1;
    if (behind) {
      projected.x = -projected.x;
      projected.y = -projected.y;
    }
    
    // NDC to screen pixels
    const hw = window.innerWidth / 2;
    const hh = window.innerHeight / 2;
    let sx = projected.x * hw;
    let sy = -projected.y * hh;
    
    // If target is on screen (within center 70%), hide arrow
    const margin = 0.3;
    if (!behind && Math.abs(projected.x) < (1 - margin) && Math.abs(projected.y) < (1 - margin)) {
      this.el.style.display = 'none';
      return;
    }
    
    // Calculate angle and clamp to screen edge with padding
    const angle = Math.atan2(sy, sx);
    const pad = 40;
    const maxX = hw - pad;
    const maxY = hh - pad;
    
    // Scale to fit on screen edge
    const scale = Math.min(
      Math.abs(maxX / (Math.cos(angle) || 0.001)),
      Math.abs(maxY / (Math.sin(angle) || 0.001))
    );
    
    const ex = Math.cos(angle) * scale;
    const ey = Math.sin(angle) * scale;
    
    this.el.style.display = 'block';
    this.el.style.left = `${hw + ex - 12}px`;
    this.el.style.top = `${hh + ey - 10}px`;
    // Rotate arrow to point in direction
    const deg = (angle * 180 / Math.PI) - 90;
    this.el.style.transform = `rotate(${deg}deg)`;
  }
  
  dispose() {
    this.el.remove();
  }
}
