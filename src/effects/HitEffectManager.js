import * as THREE from 'three';

/**
 * HitEffectManager - Visual impact effects when attacks connect.
 * Spawns 3-5 small MeshBasicMaterial spheres at hit point that expand+fade over 0.3s.
 * Subtle screen shake on player damage (camera offset 0.1s).
 * Pools effect meshes for performance.
 */

const POOL_SIZE = 30;         // 5 particles × 6 simultaneous bursts
const BURST_COUNT = 4;        // particles per burst
const BURST_DURATION = 0.3;   // seconds
const SPHERE_SEGMENTS = 4;    // low-poly spheres for perf
const MAX_SCALE = 0.35;       // max sphere scale
const SPREAD_SPEED = 4.0;     // world units/sec

export class HitEffectManager {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    
    // Shared geometry for all hit particles
    this.geometry = new THREE.SphereGeometry(0.08, SPHERE_SEGMENTS, SPHERE_SEGMENTS);
    
    // Materials: warm hit colors
    this.materials = [
      new THREE.MeshBasicMaterial({ color: 0xffffcc, transparent: true, opacity: 1 }),
      new THREE.MeshBasicMaterial({ color: 0xffdd88, transparent: true, opacity: 1 }),
      new THREE.MeshBasicMaterial({ color: 0xffaa44, transparent: true, opacity: 1 }),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 1 }),
    ];
    
    // Pool of particle meshes
    this.pool = [];
    for (let i = 0; i < POOL_SIZE; i++) {
      const mat = this.materials[i % this.materials.length].clone();
      const mesh = new THREE.Mesh(this.geometry, mat);
      mesh.visible = false;
      scene.add(mesh);
      this.pool.push({
        mesh,
        active: false,
        age: 0,
        duration: BURST_DURATION,
        velocity: new THREE.Vector3(),
        startPos: new THREE.Vector3(),
      });
    }
    
    // Screen shake state
    this._shakeActive = false;
    this._shakeTimer = 0;
    this._shakeDuration = 0.1;
    this._shakeIntensity = 0.15;
    this._origCamPos = new THREE.Vector3();
  }
  
  /**
   * Spawn a burst of particles at the given world position.
   */
  spawnBurst(worldPos) {
    let spawned = 0;
    
    for (const p of this.pool) {
      if (p.active) continue;
      if (spawned >= BURST_COUNT) break;
      
      p.active = true;
      p.age = 0;
      p.duration = BURST_DURATION + Math.random() * 0.1;
      
      // Start position at hit point with slight offset
      p.startPos.set(
        worldPos.x + (Math.random() - 0.5) * 0.3,
        worldPos.y + 0.8 + Math.random() * 0.5,
        worldPos.z + (Math.random() - 0.5) * 0.3
      );
      p.mesh.position.copy(p.startPos);
      
      // Random outward velocity
      p.velocity.set(
        (Math.random() - 0.5) * SPREAD_SPEED,
        Math.random() * SPREAD_SPEED * 0.8 + 1.0,
        (Math.random() - 0.5) * SPREAD_SPEED
      );
      
      // Reset scale and visibility
      p.mesh.scale.setScalar(0.5);
      p.mesh.material.opacity = 1;
      p.mesh.visible = true;
      
      spawned++;
    }
  }
  
  /**
   * Trigger a subtle screen shake on player damage.
   */
  screenShake() {
    this._shakeActive = true;
    this._shakeTimer = 0;
  }
  
  update(delta) {
    // Update particles
    for (const p of this.pool) {
      if (!p.active) continue;
      
      p.age += delta;
      const progress = p.age / p.duration;
      
      if (progress >= 1) {
        p.active = false;
        p.mesh.visible = false;
        continue;
      }
      
      // Move outward
      p.mesh.position.x += p.velocity.x * delta;
      p.mesh.position.y += p.velocity.y * delta;
      p.mesh.position.z += p.velocity.z * delta;
      
      // Gravity
      p.velocity.y -= 8 * delta;
      
      // Scale: expand then shrink
      const scale = progress < 0.3
        ? 0.5 + progress * (MAX_SCALE / 0.3)
        : MAX_SCALE * (1 - (progress - 0.3) / 0.7);
      p.mesh.scale.setScalar(Math.max(0.01, scale));
      
      // Fade out
      p.mesh.material.opacity = 1 - progress;
    }
    
    // Screen shake
    if (this._shakeActive) {
      this._shakeTimer += delta;
      
      if (this._shakeTimer >= this._shakeDuration) {
        this._shakeActive = false;
        // Camera will be reset by CameraController each frame, no need to undo
      } else {
        // Apply random offset to camera
        const intensity = this._shakeIntensity * (1 - this._shakeTimer / this._shakeDuration);
        this.camera.position.x += (Math.random() - 0.5) * intensity;
        this.camera.position.y += (Math.random() - 0.5) * intensity * 0.5;
      }
    }
  }
  
  dispose() {
    for (const p of this.pool) {
      this.scene.remove(p.mesh);
      p.mesh.geometry.dispose();
      p.mesh.material.dispose();
    }
    this.pool = [];
    this.geometry.dispose();
    for (const m of this.materials) m.dispose();
  }
}
