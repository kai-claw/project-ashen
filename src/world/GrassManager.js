import * as THREE from 'three';

/**
 * GrassManager — Near-player grass tufts for ground detail (Phase 31)
 * Pool of small green cones repositioned around the player as they move.
 * MeshBasicMaterial only — no .emissive, no lighting dependency.
 */
export class GrassManager {
  constructor(scene, terrain) {
    this.scene = scene;
    this.terrain = terrain;
    
    this.poolSize = 200;
    this.renderRadius = 28;       // Grass only within this distance of camera
    this.spacing = 2.5;           // Minimum spacing between tufts
    this.lastUpdateX = Infinity;  // Force initial placement
    this.lastUpdateZ = Infinity;
    this.updateThreshold = 8;     // Reposition when player moves this far
    
    // Shared geometries — a few sizes for variety
    this.geometries = [
      new THREE.ConeGeometry(0.08, 0.35, 3),
      new THREE.ConeGeometry(0.10, 0.45, 3),
      new THREE.ConeGeometry(0.06, 0.30, 3),
      new THREE.ConeGeometry(0.12, 0.50, 4),
    ];
    
    // Shared materials — slightly varied greens
    this.materials = [
      new THREE.MeshBasicMaterial({ color: 0x3a7a30 }),
      new THREE.MeshBasicMaterial({ color: 0x2e6e28 }),
      new THREE.MeshBasicMaterial({ color: 0x458a3a }),
      new THREE.MeshBasicMaterial({ color: 0x4a9040 }),
      new THREE.MeshBasicMaterial({ color: 0x336828 }),
    ];
    
    // Create mesh pool
    this.pool = [];
    this._createPool();
  }
  
  _createPool() {
    for (let i = 0; i < this.poolSize; i++) {
      const geo = this.geometries[i % this.geometries.length];
      const mat = this.materials[i % this.materials.length];
      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      // Random Y rotation for variety
      mesh.rotation.y = Math.random() * Math.PI * 2;
      // Slight tilt for natural look
      mesh.rotation.x = (Math.random() - 0.5) * 0.3;
      mesh.rotation.z = (Math.random() - 0.5) * 0.3;
      this.scene.add(mesh);
      this.pool.push(mesh);
    }
  }
  
  /**
   * Update grass positions around the player.
   * Call each frame — early-exits if player hasn't moved enough.
   */
  update(playerX, playerZ) {
    const dx = playerX - this.lastUpdateX;
    const dz = playerZ - this.lastUpdateZ;
    if (dx * dx + dz * dz < this.updateThreshold * this.updateThreshold) return;
    
    this.lastUpdateX = playerX;
    this.lastUpdateZ = playerZ;
    
    // Deterministic hash for consistent placement per position
    let poolIdx = 0;
    const step = this.spacing;
    const halfRadius = this.renderRadius;
    
    // Grid of candidate positions around the player
    const startX = Math.floor((playerX - halfRadius) / step) * step;
    const startZ = Math.floor((playerZ - halfRadius) / step) * step;
    
    for (let gx = startX; gx < playerX + halfRadius && poolIdx < this.poolSize; gx += step) {
      for (let gz = startZ; gz < playerZ + halfRadius && poolIdx < this.poolSize; gz += step) {
        // Distance check (circular)
        const ddx = gx - playerX, ddz = gz - playerZ;
        if (ddx * ddx + ddz * ddz > halfRadius * halfRadius) continue;
        
        // Deterministic jitter from position hash
        const hash = this._hash(gx, gz);
        if ((hash & 0xff) > 140) continue; // ~55% density
        
        // Skip castle area
        const distFromOrigin = Math.sqrt(gx * gx + gz * gz);
        if (distFromOrigin < 35) continue;
        
        // Skip rocky highlands (elevation check)
        if (!this.terrain) continue;
        const terrainY = this.terrain.getTerrainHeight(gx, gz);
        if (terrainY > 18) continue;      // Too high = rocky
        if (terrainY < -1.5) continue;     // Below water
        
        // Place grass
        const jitterX = ((hash >> 8 & 0xff) / 255 - 0.5) * step * 0.7;
        const jitterZ = ((hash >> 16 & 0xff) / 255 - 0.5) * step * 0.7;
        const wx = gx + jitterX;
        const wz = gz + jitterZ;
        const wy = this.terrain.getTerrainHeight(wx, wz);
        
        const mesh = this.pool[poolIdx];
        mesh.position.set(wx, wy + 0.15, wz);
        mesh.visible = true;
        poolIdx++;
      }
    }
    
    // Hide unused pool meshes
    for (let i = poolIdx; i < this.poolSize; i++) {
      this.pool[i].visible = false;
    }
  }
  
  /**
   * Wind sway for grass tufts (Phase 35).
   * Faster oscillation than trees, with position-based phase offset.
   * Call every frame from game loop.
   * @param {number} time - elapsed time in seconds
   */
  updateWind(time) {
    for (let i = 0; i < this.pool.length; i++) {
      const mesh = this.pool[i];
      if (!mesh.visible) continue;
      // Phase offset based on position for organic feel
      const phase = mesh.position.x * 1.1 + mesh.position.z * 0.7;
      // Amplitude 0.05-0.08 range, faster than trees
      mesh.rotation.z = Math.sin(time * 2.5 + phase) * 0.06
                       + Math.sin(time * 3.8 + phase * 0.5) * 0.02;
    }
  }
  
  /**
   * Simple deterministic integer hash from grid coords
   */
  _hash(x, z) {
    let h = (Math.floor(x * 374761) + Math.floor(z * 668265)) | 0;
    h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
    h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
    return ((h >> 16) ^ h) & 0x7fffffff;
  }
  
  dispose() {
    for (const mesh of this.pool) {
      this.scene.remove(mesh);
    }
    this.pool = [];
    this.geometries.forEach(g => g.dispose());
    this.materials.forEach(m => m.dispose());
  }
}
