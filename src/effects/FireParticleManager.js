import * as THREE from 'three';

/**
 * FireParticleManager — Phase 35
 * Lightweight fire particles at bonfire and torch positions.
 * Uses small PlaneGeometry quads with AdditiveBlending for glow.
 */
export class FireParticleManager {
  constructor(scene) {
    this.scene = scene;
    this.sources = [];       // { position, isBonfire }
    this.particles = [];     // active particle objects
    
    // Shared geometry (small quad)
    this.geo = new THREE.PlaneGeometry(0.15, 0.15);
    
    // Pre-create a few fire color materials
    this.materials = [
      this._makeMat(0xff4400),
      this._makeMat(0xff8800),
      this._makeMat(0xffcc00),
      this._makeMat(0xff6600),
    ];
  }
  
  _makeMat(color) {
    return new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
  }
  
  /**
   * Register fire sources from world data.
   * Call once after World is constructed.
   * @param {THREE.Vector3} bonfirePos
   * @param {THREE.Vector3[]} torchPositions
   */
  init(bonfirePos, torchPositions) {
    // Bonfire — larger, more particles
    if (bonfirePos) {
      this.sources.push({ position: bonfirePos.clone(), isBonfire: true });
    }
    // Torches
    for (const tp of torchPositions) {
      this.sources.push({ position: tp.clone(), isBonfire: false });
    }
    
    // Pre-spawn particles for each source
    for (const src of this.sources) {
      const count = src.isBonfire ? 28 : 14;
      for (let i = 0; i < count; i++) {
        this._spawnParticle(src, true);
      }
    }
    
    console.log(`[FireParticleManager] ${this.sources.length} fire sources, ${this.particles.length} particles`);
  }
  
  _spawnParticle(source, randomAge) {
    const mat = this.materials[Math.floor(Math.random() * this.materials.length)];
    const mesh = new THREE.Mesh(this.geo, mat);
    
    const isBig = source.isBonfire;
    const spread = isBig ? 0.6 : 0.25;
    const baseScale = isBig ? (0.3 + Math.random() * 0.5) : (0.1 + Math.random() * 0.3);
    const lifetime = 0.5 + Math.random() * 1.0;
    
    const p = {
      mesh,
      source,
      // Velocity
      vx: (Math.random() - 0.5) * 0.4,
      vy: 1.0 + Math.random() * 2.0,
      vz: (Math.random() - 0.5) * 0.4,
      // Timing
      age: randomAge ? Math.random() * lifetime : 0,
      lifetime,
      // Visual
      baseScale,
    };
    
    // Initial position near source
    mesh.position.set(
      source.position.x + (Math.random() - 0.5) * spread,
      source.position.y + 0.3 + (randomAge ? p.age * p.vy * 0.3 : 0),
      source.position.z + (Math.random() - 0.5) * spread,
    );
    mesh.scale.setScalar(baseScale);
    // Random billboard rotation so they don't all look identical
    mesh.rotation.z = Math.random() * Math.PI;
    
    this.scene.add(mesh);
    this.particles.push(p);
  }
  
  /**
   * Update every frame. Call from game loop.
   * @param {number} dt - delta time in seconds
   */
  update(dt) {
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.age += dt;
      
      if (p.age >= p.lifetime) {
        // Reset particle back to source (recycle, don't destroy)
        this._resetParticle(p);
        continue;
      }
      
      const t = p.age / p.lifetime; // 0..1
      
      // Move upward with slight drift
      p.mesh.position.x += p.vx * dt * 0.3;
      p.mesh.position.y += p.vy * dt;
      p.mesh.position.z += p.vz * dt * 0.3;
      
      // Shrink as it ages
      const scale = p.baseScale * (1 - t * 0.8);
      p.mesh.scale.setScalar(Math.max(0.02, scale));
      
      // Fade out
      p.mesh.material.opacity = 0.85 * (1 - t * t);
      
      // Billboard: face camera (approximation — rotate Y toward camera)
      // Skip full billboarding for perf; random z-rotation is enough
    }
  }
  
  _resetParticle(p) {
    const src = p.source;
    const spread = src.isBonfire ? 0.6 : 0.25;
    
    p.age = 0;
    p.lifetime = 0.5 + Math.random() * 1.0;
    p.baseScale = src.isBonfire ? (0.3 + Math.random() * 0.5) : (0.1 + Math.random() * 0.3);
    p.vx = (Math.random() - 0.5) * 0.4;
    p.vy = 1.0 + Math.random() * 2.0;
    p.vz = (Math.random() - 0.5) * 0.4;
    
    p.mesh.position.set(
      src.position.x + (Math.random() - 0.5) * spread,
      src.position.y + 0.3,
      src.position.z + (Math.random() - 0.5) * spread,
    );
    p.mesh.scale.setScalar(p.baseScale);
    p.mesh.rotation.z = Math.random() * Math.PI;
  }
  
  dispose() {
    for (const p of this.particles) {
      this.scene.remove(p.mesh);
    }
    this.particles = [];
    this.geo.dispose();
    for (const m of this.materials) m.dispose();
  }
}
