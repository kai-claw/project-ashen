import * as THREE from 'three';

/**
 * AmbientParticleManager — Phase 35
 * Atmospheric particles: dust motes near player + fireflies near water.
 * Lightweight: small meshes recycled around player position.
 */
export class AmbientParticleManager {
  constructor(scene, terrain) {
    this.scene = scene;
    this.terrain = terrain;
    
    // --- Dust motes ---
    this.dustCount = 50;
    this.dustRadius = 28;
    this.dusts = [];
    this._initDust();
    
    // --- Fireflies ---
    this.fireflyCount = 20;
    this.fireflyRadius = 35;
    this.fireflies = [];
    this._initFireflies();
    
    this.elapsed = 0;
    
    console.log(`[AmbientParticleManager] ${this.dustCount} dust motes, ${this.fireflyCount} fireflies`);
  }
  
  _initDust() {
    const geo = new THREE.PlaneGeometry(0.06, 0.06);
    const colors = [0xffffff, 0xffe8cc, 0xeeddbb, 0xddccaa];
    
    for (let i = 0; i < this.dustCount; i++) {
      const mat = new THREE.MeshBasicMaterial({
        color: colors[i % colors.length],
        transparent: true,
        opacity: 0.15 + Math.random() * 0.2,
        depthWrite: false,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      this.scene.add(mesh);
      
      this.dusts.push({
        mesh,
        // Slow random drift velocity
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.15,
        vz: (Math.random() - 0.5) * 0.3,
        phase: Math.random() * Math.PI * 2,
        baseOpacity: 0.15 + Math.random() * 0.2,
      });
    }
    this._dustGeo = geo;
  }
  
  _initFireflies() {
    const geo = new THREE.SphereGeometry(0.05, 4, 4);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xbbff44,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    for (let i = 0; i < this.fireflyCount; i++) {
      const mesh = new THREE.Mesh(geo, mat.clone());
      mesh.visible = false;
      this.scene.add(mesh);
      
      this.fireflies.push({
        mesh,
        // World position (set during placement)
        wx: 0, wz: 0,
        baseY: 0,
        // Bob parameters
        bobPhase: Math.random() * Math.PI * 2,
        bobSpeed: 1.5 + Math.random() * 1.5,
        bobAmp: 0.3 + Math.random() * 0.5,
        // Drift
        driftX: (Math.random() - 0.5) * 0.6,
        driftZ: (Math.random() - 0.5) * 0.6,
        // Glow pulse
        glowPhase: Math.random() * Math.PI * 2,
        placed: false,
      });
    }
    this._fireflyGeo = geo;
    this._fireflyBaseMat = mat;
  }
  
  /**
   * Call every frame from game loop.
   * @param {number} dt
   * @param {number} playerX
   * @param {number} playerZ
   */
  update(dt, playerX, playerZ) {
    this.elapsed += dt;
    
    this._updateDust(dt, playerX, playerZ);
    this._updateFireflies(dt, playerX, playerZ);
  }
  
  _updateDust(dt, px, pz) {
    for (let i = 0; i < this.dusts.length; i++) {
      const d = this.dusts[i];
      const m = d.mesh;
      
      // Initialize or re-wrap if too far from player
      const dx = m.position.x - px;
      const dz = m.position.z - pz;
      const distSq = dx * dx + dz * dz;
      
      if (!m.visible || distSq > this.dustRadius * this.dustRadius * 1.5) {
        // Place randomly within radius of player
        const angle = Math.random() * Math.PI * 2;
        const dist = Math.random() * this.dustRadius;
        m.position.x = px + Math.cos(angle) * dist;
        m.position.z = pz + Math.sin(angle) * dist;
        const ty = this.terrain ? this.terrain.getTerrainHeight(m.position.x, m.position.z) : 0;
        m.position.y = ty + 1 + Math.random() * 4;
        m.visible = true;
      }
      
      // Gentle drift
      m.position.x += d.vx * dt;
      m.position.y += d.vy * dt + Math.sin(this.elapsed * 0.7 + d.phase) * 0.002;
      m.position.z += d.vz * dt;
      
      // Slow rotation for shimmer
      m.rotation.z += dt * 0.3;
      
      // Pulse opacity
      m.material.opacity = d.baseOpacity * (0.6 + 0.4 * Math.sin(this.elapsed * 1.2 + d.phase));
    }
  }
  
  _updateFireflies(dt, px, pz) {
    for (let i = 0; i < this.fireflies.length; i++) {
      const f = this.fireflies[i];
      const m = f.mesh;
      
      // Place near water (terrain Y near or below water level = -2)
      if (!f.placed) {
        // Try random positions near player until we find one near water
        for (let attempt = 0; attempt < 5; attempt++) {
          const angle = Math.random() * Math.PI * 2;
          const dist = 8 + Math.random() * this.fireflyRadius;
          const testX = px + Math.cos(angle) * dist;
          const testZ = pz + Math.sin(angle) * dist;
          const ty = this.terrain ? this.terrain.getTerrainHeight(testX, testZ) : 0;
          
          // Near water: terrain is near or below water level (-2)
          if (ty < 0) {
            f.wx = testX;
            f.wz = testZ;
            f.baseY = Math.max(ty, -2) + 0.5 + Math.random() * 1.5;
            f.placed = true;
            m.visible = true;
            m.position.set(f.wx, f.baseY, f.wz);
            break;
          }
        }
        if (!f.placed) {
          m.visible = false;
          continue;
        }
      }
      
      // Re-place if too far from player
      const fdx = f.wx - px;
      const fdz = f.wz - pz;
      if (fdx * fdx + fdz * fdz > this.fireflyRadius * this.fireflyRadius * 2) {
        f.placed = false;
        m.visible = false;
        continue;
      }
      
      // Drift slowly
      f.wx += f.driftX * dt;
      f.wz += f.driftZ * dt;
      
      // Bobbing sin wave
      const bobY = Math.sin(this.elapsed * f.bobSpeed + f.bobPhase) * f.bobAmp;
      m.position.set(f.wx, f.baseY + bobY, f.wz);
      
      // Glow pulse (blink on/off slowly)
      const glow = 0.3 + 0.7 * Math.max(0, Math.sin(this.elapsed * 2.0 + f.glowPhase));
      m.material.opacity = glow;
      m.scale.setScalar(0.6 + glow * 0.5);
    }
  }
  
  dispose() {
    for (const d of this.dusts) this.scene.remove(d.mesh);
    for (const f of this.fireflies) this.scene.remove(f.mesh);
    this.dusts = [];
    this.fireflies = [];
    if (this._dustGeo) this._dustGeo.dispose();
    if (this._fireflyGeo) this._fireflyGeo.dispose();
  }
}
