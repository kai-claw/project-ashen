import * as THREE from 'three';

/**
 * ParticleManager - Handles combat visual effects
 * - Slash trails on sword swings
 * - Hit sparks on impact
 * - Blood effects on damage
 * - Ember particles for atmosphere
 */
export class ParticleManager {
  constructor(scene) {
    this.scene = scene;
    this.particles = [];
    this.slashTrails = [];
    this.embers = [];
    
    // Shared geometries and materials for performance
    this._initSharedAssets();
    
    // Start ember system
    this._initEmbers();
  }

  _initSharedAssets() {
    // Spark geometry (small diamond shape)
    this.sparkGeo = new THREE.BufferGeometry();
    const sparkVerts = new Float32Array([
      0, 0.05, 0,
      -0.02, 0, 0,
      0, -0.05, 0,
      0.02, 0, 0,
      0, 0.05, 0,
      0, 0, 0.02,
      0, -0.05, 0,
      0, 0, -0.02,
    ]);
    this.sparkGeo.setAttribute('position', new THREE.BufferAttribute(sparkVerts, 3));

    // Blood drop geometry (tetrahedron-ish)
    this.bloodGeo = new THREE.TetrahedronGeometry(0.06, 0);

    // Ember geometry (small sphere)
    this.emberGeo = new THREE.SphereGeometry(0.02, 4, 4);

    // Materials
    this.sparkMat = new THREE.MeshBasicMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    this.critSparkMat = new THREE.MeshBasicMaterial({
      color: 0xffff88,
      transparent: true,
      opacity: 1,
      side: THREE.DoubleSide,
    });

    this.bloodMat = new THREE.MeshBasicMaterial({
      color: 0x880022,
      transparent: true,
      opacity: 0.9,
    });

    this.emberMat = new THREE.MeshBasicMaterial({
      color: 0xff4400,
      transparent: true,
      opacity: 0.7,
    });

    // Slash trail material (additive for glow effect)
    this.slashMat = new THREE.MeshBasicMaterial({
      color: 0x6688ff,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.heavySlashMat = new THREE.MeshBasicMaterial({
      color: 0xff6644,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
  }

  _initEmbers() {
    // Spawn ambient embers floating up from the ground
    const emberCount = 30;
    for (let i = 0; i < emberCount; i++) {
      this._spawnEmber();
    }
  }

  _spawnEmber() {
    const mesh = new THREE.Mesh(this.emberGeo, this.emberMat.clone());
    mesh.position.set(
      (Math.random() - 0.5) * 60,
      Math.random() * 0.5,
      (Math.random() - 0.5) * 100 - 20
    );
    this.scene.add(mesh);

    this.embers.push({
      mesh,
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.3,
        0.3 + Math.random() * 0.5,
        (Math.random() - 0.5) * 0.3
      ),
      life: Math.random() * 10,
      maxLife: 8 + Math.random() * 6,
    });
  }

  /**
   * Create a slash trail effect when sword swings
   */
  spawnSlashTrail(origin, direction, isHeavy = false) {
    // Create an arc geometry for the slash
    const arcRadius = isHeavy ? 1.8 : 1.4;
    const arcAngle = isHeavy ? Math.PI * 0.7 : Math.PI * 0.5;
    const segments = 12;
    const thickness = isHeavy ? 0.15 : 0.1;

    const shape = new THREE.Shape();
    shape.moveTo(0, 0);
    for (let i = 0; i <= segments; i++) {
      const angle = -arcAngle / 2 + (arcAngle * i) / segments;
      const x = Math.cos(angle) * arcRadius;
      const y = Math.sin(angle) * arcRadius;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    // Close with inner arc
    for (let i = segments; i >= 0; i--) {
      const angle = -arcAngle / 2 + (arcAngle * i) / segments;
      const x = Math.cos(angle) * (arcRadius - thickness);
      const y = Math.sin(angle) * (arcRadius - thickness);
      shape.lineTo(x, y);
    }
    shape.closePath();

    const geometry = new THREE.ShapeGeometry(shape);
    const material = (isHeavy ? this.heavySlashMat : this.slashMat).clone();
    const mesh = new THREE.Mesh(geometry, material);

    // Position and rotate
    mesh.position.copy(origin);
    mesh.position.y += 1.2;

    // Face the direction of the slash
    const yaw = Math.atan2(direction.x, direction.z);
    mesh.rotation.y = yaw;
    mesh.rotation.x = isHeavy ? -0.5 : 0.2; // Tilt based on attack type

    this.scene.add(mesh);

    this.slashTrails.push({
      mesh,
      life: 0,
      maxLife: isHeavy ? 0.35 : 0.25,
      scaleStart: 0.3,
      scaleEnd: 1.0,
    });
  }

  /**
   * Spawn spark particles on weapon impact
   */
  spawnHitSparks(position, count = 8, isCritical = false) {
    const sparkCount = isCritical ? count * 2 : count;
    const material = isCritical ? this.critSparkMat : this.sparkMat;

    for (let i = 0; i < sparkCount; i++) {
      const mesh = new THREE.Mesh(this.sparkGeo, material.clone());
      mesh.position.copy(position);
      mesh.position.y += 0.8 + Math.random() * 0.4;

      // Random spread velocity
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4;
      const upSpeed = 2 + Math.random() * 3;

      this.scene.add(mesh);
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * speed,
          upSpeed,
          Math.sin(angle) * speed
        ),
        gravity: -15,
        life: 0,
        maxLife: 0.3 + Math.random() * 0.2,
        type: 'spark',
      });
    }
  }

  /**
   * Spawn blood particles on damage
   */
  spawnBlood(position, direction, amount = 6) {
    // More blood for higher damage
    const count = Math.min(amount, 15);

    for (let i = 0; i < count; i++) {
      const mesh = new THREE.Mesh(this.bloodGeo, this.bloodMat.clone());
      mesh.position.copy(position);
      mesh.position.y += 0.8 + Math.random() * 0.6;

      // Spray in direction with spread
      const baseAngle = Math.atan2(direction.x, direction.z);
      const angle = baseAngle + (Math.random() - 0.5) * Math.PI * 0.6;
      const speed = 3 + Math.random() * 3;
      const upSpeed = 1 + Math.random() * 3;

      this.scene.add(mesh);
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.sin(angle) * speed,
          upSpeed,
          Math.cos(angle) * speed
        ),
        gravity: -18,
        life: 0,
        maxLife: 0.6 + Math.random() * 0.4,
        type: 'blood',
        scale: 0.8 + Math.random() * 0.4,
      });
    }
  }

  /**
   * Spawn posture break burst (dramatic spark explosion)
   */
  spawnPostureBreak(position) {
    // Large burst of golden sparks
    this.spawnHitSparks(position, 20, true);

    // Add shockwave ring
    const ringGeo = new THREE.RingGeometry(0.1, 0.3, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xffcc44,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.copy(position);
    ring.position.y += 1.0;
    ring.rotation.x = -Math.PI / 2;
    this.scene.add(ring);

    this.particles.push({
      mesh: ring,
      velocity: new THREE.Vector3(0, 0, 0),
      gravity: 0,
      life: 0,
      maxLife: 0.5,
      type: 'ring',
      expandRate: 8,
    });
  }

  /**
   * Spawn block sparks (when attack is blocked)
   */
  spawnBlockSparks(position) {
    const sparkCount = 5;
    for (let i = 0; i < sparkCount; i++) {
      const mesh = new THREE.Mesh(this.sparkGeo, this.sparkMat.clone());
      mesh.material.color.setHex(0x8888ff);
      mesh.position.copy(position);
      mesh.position.y += 1.0;

      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 2;

      this.scene.add(mesh);
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * speed,
          1 + Math.random() * 2,
          Math.sin(angle) * speed
        ),
        gravity: -10,
        life: 0,
        maxLife: 0.25,
        type: 'spark',
      });
    }
  }

  /**
   * Spawn death burst (enemy dies)
   */
  spawnDeathBurst(position) {
    // Large blood burst
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const mesh = new THREE.Mesh(this.bloodGeo, this.bloodMat.clone());
      mesh.position.copy(position);
      mesh.position.y += 1.0;

      this.scene.add(mesh);
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * 4,
          2 + Math.random() * 3,
          Math.sin(angle) * 4
        ),
        gravity: -15,
        life: 0,
        maxLife: 0.8,
        type: 'blood',
        scale: 1.2,
      });
    }

    // Soul wisps rising
    for (let i = 0; i < 6; i++) {
      const wispGeo = new THREE.SphereGeometry(0.1, 8, 8);
      const wispMat = new THREE.MeshBasicMaterial({
        color: 0x88aaff,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });
      const wisp = new THREE.Mesh(wispGeo, wispMat);
      wisp.position.copy(position);
      wisp.position.y += 0.5 + Math.random() * 0.5;
      wisp.position.x += (Math.random() - 0.5) * 0.5;
      wisp.position.z += (Math.random() - 0.5) * 0.5;

      this.scene.add(wisp);
      this.particles.push({
        mesh: wisp,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          2 + Math.random() * 1,
          (Math.random() - 0.5) * 0.5
        ),
        gravity: 0, // Wisps float up
        life: 0,
        maxLife: 1.5 + Math.random() * 0.5,
        type: 'wisp',
      });
    }
  }

  /**
   * Update all particles
   */
  update(delta) {
    // Update regular particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.life += delta;

      // Apply physics
      p.velocity.y += p.gravity * delta;
      p.mesh.position.add(p.velocity.clone().multiplyScalar(delta));

      // Type-specific updates
      if (p.type === 'ring') {
        const scale = 1 + p.expandRate * p.life;
        p.mesh.scale.set(scale, scale, 1);
      }

      // Fade out
      const fadeRatio = 1 - p.life / p.maxLife;
      if (p.mesh.material.opacity !== undefined) {
        p.mesh.material.opacity = fadeRatio * (p.type === 'blood' ? 0.9 : 1);
      }

      // Apply scale if specified
      if (p.scale) {
        const scaleVal = p.scale * fadeRatio;
        p.mesh.scale.setScalar(scaleVal);
      }

      // Ground collision for blood
      if (p.type === 'blood' && p.mesh.position.y < 0.05) {
        p.mesh.position.y = 0.05;
        p.velocity.x *= 0.5;
        p.velocity.z *= 0.5;
        p.velocity.y = 0;
      }

      // Sparks spin
      if (p.type === 'spark') {
        p.mesh.rotation.x += delta * 10;
        p.mesh.rotation.z += delta * 8;
      }

      // Remove dead particles
      if (p.life >= p.maxLife) {
        this.scene.remove(p.mesh);
        p.mesh.geometry.dispose?.();
        p.mesh.material.dispose?.();
        this.particles.splice(i, 1);
      }
    }

    // Update slash trails
    for (let i = this.slashTrails.length - 1; i >= 0; i--) {
      const t = this.slashTrails[i];
      t.life += delta;

      const progress = t.life / t.maxLife;
      const scale = THREE.MathUtils.lerp(t.scaleStart, t.scaleEnd, progress);
      t.mesh.scale.setScalar(scale);
      t.mesh.material.opacity = (1 - progress) * 0.6;

      if (t.life >= t.maxLife) {
        this.scene.remove(t.mesh);
        t.mesh.geometry.dispose();
        t.mesh.material.dispose();
        this.slashTrails.splice(i, 1);
      }
    }

    // Update embers
    for (let i = this.embers.length - 1; i >= 0; i--) {
      const e = this.embers[i];
      e.life += delta;
      e.mesh.position.add(e.velocity.clone().multiplyScalar(delta));

      // Gentle sway
      e.mesh.position.x += Math.sin(e.life * 2) * 0.01;
      e.mesh.position.z += Math.cos(e.life * 1.5) * 0.01;

      // Fade
      const fadeRatio = 1 - (e.life / e.maxLife);
      e.mesh.material.opacity = fadeRatio * 0.7;

      // Recycle embers
      if (e.life >= e.maxLife) {
        e.life = 0;
        e.mesh.position.set(
          (Math.random() - 0.5) * 60,
          Math.random() * 0.3,
          (Math.random() - 0.5) * 100 - 20
        );
        e.maxLife = 8 + Math.random() * 6;
      }
    }
  }

  /**
   * Cleanup all particles (for scene reset)
   */
  dispose() {
    this.particles.forEach(p => {
      this.scene.remove(p.mesh);
      p.mesh.geometry?.dispose();
      p.mesh.material?.dispose();
    });
    this.particles = [];

    this.slashTrails.forEach(t => {
      this.scene.remove(t.mesh);
      t.mesh.geometry?.dispose();
      t.mesh.material?.dispose();
    });
    this.slashTrails = [];

    this.embers.forEach(e => {
      this.scene.remove(e.mesh);
      e.mesh.geometry?.dispose();
      e.mesh.material?.dispose();
    });
    this.embers = [];
  }
}
