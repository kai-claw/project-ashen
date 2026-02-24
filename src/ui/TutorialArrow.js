import * as THREE from 'three';

/**
 * TutorialArrow — On-screen directional indicator pointing toward Elder Marcus.
 * Shows when the NPC is behind the camera. Fades after player faces NPC or 30s.
 *
 * Phase 46 — Starting View Faces the Open World
 */

export class TutorialArrow {
  /**
   * @param {THREE.Vector3} npcPosition — world position of the target NPC
   */
  constructor(npcPosition) {
    this._npcPos = npcPosition;
    this._dismissed = false;
    this._elapsed = 0;

    // DOM element
    this._el = document.createElement('div');
    this._el.id = 'tutorial-arrow';
    this._el.style.cssText = `
      position:fixed; bottom:18%; left:50%; transform:translateX(-50%);
      color:#DAA520; font-family:'Cinzel',Georgia,serif;
      font-size:16px; text-align:center; z-index:500;
      pointer-events:none; opacity:0; transition:opacity 0.4s;
      text-shadow:0 0 12px rgba(218,165,32,0.5);
    `;
    this._el.innerHTML = `
      <div style="font-size:28px; margin-bottom:6px;">⬇</div>
      <div>Turn around — Elder Marcus has a quest!</div>
    `;
    document.body.appendChild(this._el);
  }

  /**
   * Call each frame.
   * @param {number} delta
   * @param {THREE.Camera} camera
   */
  update(delta, camera) {
    if (this._dismissed) return;

    this._elapsed += delta;

    // Auto-dismiss after 45 seconds
    if (this._elapsed > 45) {
      this.dismiss();
      return;
    }

    // Camera forward (world space, XZ only)
    const fwd = new THREE.Vector3();
    camera.getWorldDirection(fwd);
    fwd.y = 0;
    fwd.normalize();

    // Direction from camera to NPC (XZ only)
    const toNpc = new THREE.Vector3();
    toNpc.subVectors(this._npcPos, camera.position);
    toNpc.y = 0;
    toNpc.normalize();

    const dot = fwd.dot(toNpc);

    // If player faces NPC → dismiss
    if (dot > 0.4) {
      this.dismiss();
      return;
    }

    // Show arrow when NPC is behind camera
    this._el.style.opacity = dot < 0.2 ? '1' : '0';

    // Rotate arrow indicator based on relative angle
    const cross = fwd.x * toNpc.z - fwd.z * toNpc.x; // cross product Y
    let arrowChar = '⬇';
    if (cross > 0.3) arrowChar = '⬅';
    else if (cross < -0.3) arrowChar = '➡';
    else arrowChar = '⬇'; // Behind
    this._el.children[0].textContent = arrowChar;
  }

  dismiss() {
    if (this._dismissed) return;
    this._dismissed = true;
    this._el.style.opacity = '0';
    setTimeout(() => this._el.remove(), 500);
  }

  get isDismissed() {
    return this._dismissed;
  }
}
