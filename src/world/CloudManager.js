import * as THREE from 'three';

/**
 * CloudManager — Procedural sky clouds (Phase 31)
 * Flat white planes at high altitude, slowly drifting.
 * Pure MeshBasicMaterial — no lighting dependency.
 */
export class CloudManager {
  constructor(scene) {
    this.scene = scene;
    this.clouds = [];
    
    // Cloud field parameters
    this.cloudCount = 18;
    this.minY = 180;
    this.maxY = 280;
    this.fieldRadius = 400;   // Clouds spread around player
    this.driftSpeed = 0.3;    // Base drift speed (units/sec)
    
    // Shared materials (a few opacity variants for depth)
    this.materials = [
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55, side: THREE.DoubleSide, depthWrite: false }),
      new THREE.MeshBasicMaterial({ color: 0xeeeeee, transparent: true, opacity: 0.45, side: THREE.DoubleSide, depthWrite: false }),
      new THREE.MeshBasicMaterial({ color: 0xf8f8ff, transparent: true, opacity: 0.65, side: THREE.DoubleSide, depthWrite: false }),
    ];
    
    // Shared geometries (a few sizes)
    this.geometries = [
      new THREE.PlaneGeometry(40, 18),
      new THREE.PlaneGeometry(55, 22),
      new THREE.PlaneGeometry(30, 14),
      new THREE.PlaneGeometry(65, 28),
    ];
    
    this._createClouds();
  }
  
  _createClouds() {
    for (let i = 0; i < this.cloudCount; i++) {
      const geo = this.geometries[i % this.geometries.length];
      const mat = this.materials[i % this.materials.length];
      
      // Each cloud is 1-3 overlapping planes for volume
      const group = new THREE.Group();
      const planeCount = 1 + Math.floor(Math.random() * 2); // 1-2 planes
      
      for (let p = 0; p < planeCount; p++) {
        const mesh = new THREE.Mesh(geo, mat);
        mesh.rotation.x = -Math.PI / 2; // Face downward (horizontal)
        mesh.position.set(
          (Math.random() - 0.5) * 10,
          p * 3,                          // Stack slightly
          (Math.random() - 0.5) * 8
        );
        mesh.scale.set(
          0.8 + Math.random() * 0.4,
          1,
          0.8 + Math.random() * 0.4
        );
        group.add(mesh);
      }
      
      // Random position in sky
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * this.fieldRadius;
      group.position.set(
        Math.cos(angle) * dist,
        this.minY + Math.random() * (this.maxY - this.minY),
        Math.sin(angle) * dist
      );
      
      // Random initial rotation for variety
      group.rotation.y = Math.random() * Math.PI;
      
      // Store drift data
      group.userData.driftX = (0.15 + Math.random() * 0.35) * (Math.random() > 0.5 ? 1 : -1);
      group.userData.driftZ = (Math.random() - 0.5) * 0.1;
      
      this.scene.add(group);
      this.clouds.push(group);
    }
  }
  
  /**
   * Update cloud positions — call each frame
   * Clouds drift and wrap around the player position
   */
  update(delta, playerX = 0, playerZ = 0) {
    for (const cloud of this.clouds) {
      // Drift
      cloud.position.x += cloud.userData.driftX * delta;
      cloud.position.z += cloud.userData.driftZ * delta;
      
      // Wrap around player: if cloud drifts too far, teleport to other side
      const dx = cloud.position.x - playerX;
      const dz = cloud.position.z - playerZ;
      
      if (dx > this.fieldRadius) cloud.position.x -= this.fieldRadius * 2;
      if (dx < -this.fieldRadius) cloud.position.x += this.fieldRadius * 2;
      if (dz > this.fieldRadius) cloud.position.z -= this.fieldRadius * 2;
      if (dz < -this.fieldRadius) cloud.position.z += this.fieldRadius * 2;
    }
  }
  
  dispose() {
    for (const cloud of this.clouds) {
      this.scene.remove(cloud);
      cloud.traverse(child => {
        if (child.geometry) child.geometry.dispose();
      });
    }
    this.clouds = [];
    this.materials.forEach(m => m.dispose());
    this.geometries.forEach(g => g.dispose());
  }
}
