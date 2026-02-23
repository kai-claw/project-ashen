import * as THREE from 'three';

/**
 * BlobShadowManager — Simple circular shadow sprites under all entities.
 * Grounds entities visually without requiring shadow maps.
 *
 * Phase 43 — Entity Blob Shadows & Improved Ground Textures
 */

const SHADOW_MAT = new THREE.MeshBasicMaterial({
  color: 0x000000,
  transparent: true,
  opacity: 0.3,
  depthWrite: false,
  side: THREE.DoubleSide,
});

// Shared geometry (unit plane, oriented XZ)
const SHADOW_GEO = new THREE.PlaneGeometry(1, 1);
SHADOW_GEO.rotateX(-Math.PI / 2);

export class BlobShadowManager {
  /**
   * @param {THREE.Scene} scene
   * @param {{ getTerrainHeight(x:number,z:number):number }} terrain
   */
  constructor(scene, terrain) {
    this.scene = scene;
    this.terrain = terrain;

    /** @type {THREE.Mesh|null} Player shadow */
    this._playerShadow = null;

    /** @type {Map<object, THREE.Mesh>} NPC → shadow mesh */
    this._npcShadows = new Map();

    /** @type {THREE.Mesh[]} Pool of enemy shadow meshes */
    this._enemyPool = [];
    this._enemyPoolIdx = 0;
    this._maxPool = 80;

    // Pre-fill enemy pool
    for (let i = 0; i < this._maxPool; i++) {
      const m = new THREE.Mesh(SHADOW_GEO, SHADOW_MAT);
      m.visible = false;
      m.renderOrder = -1; // Render before other transparent objects
      scene.add(m);
      this._enemyPool.push(m);
    }
  }

  /* ---------- one-time setup ---------- */

  /**
   * Create player shadow
   * @param {THREE.Mesh} playerMesh
   */
  initPlayer(playerMesh) {
    this._playerMesh = playerMesh;
    this._playerShadow = new THREE.Mesh(SHADOW_GEO, SHADOW_MAT);
    this._playerShadow.scale.set(1.3, 1, 1.3);
    this._playerShadow.renderOrder = -1;
    this.scene.add(this._playerShadow);
  }

  /**
   * Create shadows for static NPCs (called once after NPC init)
   * @param {Array<{mesh:{position:THREE.Vector3}}>} npcs
   */
  initNPCs(npcs) {
    for (const npc of npcs) {
      if (this._npcShadows.has(npc)) continue;
      const m = new THREE.Mesh(SHADOW_GEO, SHADOW_MAT);
      m.scale.set(1.0, 1, 1.0);
      m.renderOrder = -1;
      this.scene.add(m);
      this._npcShadows.set(npc, m);
    }
  }

  /* ---------- per-frame ---------- */

  /**
   * Call every frame from game loop.
   * @param {number} _delta
   * @param {Array} enemies  — enemyManager.enemies
   */
  update(_delta, enemies) {
    // Player
    if (this._playerShadow && this._playerMesh) {
      this._place(this._playerShadow, this._playerMesh.position);
    }

    // NPCs
    for (const [npc, shadow] of this._npcShadows) {
      const pos = npc.mesh ? npc.mesh.position : npc.position;
      if (pos) this._place(shadow, pos);
    }

    // Enemies (pooled)
    this._enemyPoolIdx = 0;
    if (enemies) {
      for (let i = 0; i < enemies.length; i++) {
        const e = enemies[i];
        if (e.isDead || e.state === 'dead') continue;
        if (this._enemyPoolIdx >= this._maxPool) break;

        const shadow = this._enemyPool[this._enemyPoolIdx++];
        shadow.visible = true;
        // Scale based on enemy level/type (bigger enemies → bigger shadow)
        const s = e.isBoss ? 2.0 : (e.config?.scale || 1.0) * 0.9;
        shadow.scale.set(s, 1, s);
        this._place(shadow, e.mesh.position);
      }
    }
    // Hide unused pool entries
    for (let i = this._enemyPoolIdx; i < this._maxPool; i++) {
      this._enemyPool[i].visible = false;
    }
  }

  /* ---------- internal ---------- */

  _place(shadow, pos) {
    const y = this.terrain
      ? this.terrain.getTerrainHeight(pos.x, pos.z)
      : 0;
    shadow.position.set(pos.x, (isNaN(y) ? 0 : y) + 0.06, pos.z);
  }
}
