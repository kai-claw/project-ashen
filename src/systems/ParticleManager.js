import * as THREE from 'three';

/**
 * ParticleManager - Handles combat visual effects with OBJECT POOLING
 * - Uses pre-allocated pools to avoid GC pauses
 * - Shared materials (no cloning)
 * - Particles are hidden/shown, not added/removed from scene
 */
export class ParticleManager {
  constructor(scene) {
    this.scene = scene;
    
    // Active particle tracking
    this.particles = [];
    this.slashTrails = [];
    this.embers = [];
    this.dustMotes = [];
    
    // ========== OBJECT POOLS ==========
    // Pre-allocated pools to avoid runtime allocation
    this.sparkPool = [];
    this.bloodPool = [];
    this.wispPool = [];
    this.ringPool = [];
    
    // Pool configuration
    this.POOL_SIZES = {
      spark: 60,      // Hit sparks + death effects
      blood: 40,      // Blood droplets
      wisp: 20,       // Soul wisps
      ring: 5,        // Shockwave rings
    };

    // Shared geometries and materials for performance
    this._initSharedAssets();
    
    // Pre-allocate object pools
    this._initPools();
    
    // Start ember system (recycled, not pooled)
    this._initEmbers();
    
    // Add floating dust motes for atmospheric lighting
    this._initDustMotes();
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
    
    // Soul wisp geometry (pre-created, shared)
    this.wispGeo = new THREE.SphereGeometry(0.1, 8, 8);
    
    // Larger wisp for player death
    this.playerWispGeo = new THREE.SphereGeometry(0.15, 8, 8);
    
    // Death mist geometry
    this.mistGeo = new THREE.SphereGeometry(0.2, 6, 6);

    // ========== SHARED MATERIALS (not cloned) ==========
    // We'll use userData per-mesh for opacity tracking
    
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
    
    this.wispMat = new THREE.MeshBasicMaterial({
      color: 0x88aaff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    
    this.playerSoulMat = new THREE.MeshBasicMaterial({
      color: 0x88ccff,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    
    this.deathMistMat = new THREE.MeshBasicMaterial({
      color: 0x440011,
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

  /**
   * Pre-allocate object pools - avoids runtime allocations
   */
  _initPools() {
    // Spark pool
    for (let i = 0; i < this.POOL_SIZES.spark; i++) {
      const mesh = new THREE.Mesh(this.sparkGeo, this.sparkMat);
      mesh.visible = false;
      mesh.userData.inPool = true;
      this.scene.add(mesh);
      this.sparkPool.push(mesh);
    }
    
    // Blood pool
    for (let i = 0; i < this.POOL_SIZES.blood; i++) {
      const mesh = new THREE.Mesh(this.bloodGeo, this.bloodMat);
      mesh.visible = false;
      mesh.userData.inPool = true;
      this.scene.add(mesh);
      this.bloodPool.push(mesh);
    }
    
    // Wisp pool
    for (let i = 0; i < this.POOL_SIZES.wisp; i++) {
      const mesh = new THREE.Mesh(this.wispGeo, this.wispMat);
      mesh.visible = false;
      mesh.userData.inPool = true;
      this.scene.add(mesh);
      this.wispPool.push(mesh);
    }
    
    // Ring pool (shockwaves)
    for (let i = 0; i < this.POOL_SIZES.ring; i++) {
      const geo = new THREE.RingGeometry(0.1, 0.3, 32);
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffcc44,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.visible = false;
      mesh.userData.inPool = true;
      this.scene.add(mesh);
      this.ringPool.push(mesh);
    }
    
    console.log('[ParticleManager] Pools initialized:', {
      sparks: this.sparkPool.length,
      blood: this.bloodPool.length,
      wisps: this.wispPool.length,
      rings: this.ringPool.length,
    });
  }

  /**
   * Get particle from pool (or null if exhausted)
   */
  _getFromPool(pool) {
    for (const mesh of pool) {
      if (mesh.userData.inPool) {
        mesh.userData.inPool = false;
        mesh.visible = true;
        mesh.scale.set(1, 1, 1);
        mesh.rotation.set(0, 0, 0);
        return mesh;
      }
    }
    return null; // Pool exhausted - skip this particle
  }

  /**
   * Return particle to pool
   */
  _returnToPool(mesh) {
    mesh.visible = false;
    mesh.userData.inPool = true;
  }

  _initEmbers() {
    // Spawn ambient embers floating up from the ground
    const emberCount = 30;
    for (let i = 0; i < emberCount; i++) {
      this._spawnEmber();
    }
  }

  _spawnEmber() {
    // Embers use shared material (single instance)
    const mesh = new THREE.Mesh(this.emberGeo, this.emberMat);
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

  _initDustMotes() {
    // Floating dust particles visible in light shafts
    const dustCount = 80;
    
    // Dust mote geometry - tiny plane that always faces camera
    this.dustGeo = new THREE.PlaneGeometry(0.03, 0.03);
    
    // Single shared dust material
    this.dustMat = new THREE.MeshBasicMaterial({
      color: 0xffffee,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    
    for (let i = 0; i < dustCount; i++) {
      const mesh = new THREE.Mesh(this.dustGeo, this.dustMat);
      
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        0.5 + Math.random() * 5,
        (Math.random() - 0.5) * 80 - 20
      );
      
      this.scene.add(mesh);
      
      this.dustMotes.push({
        mesh,
        baseY: mesh.position.y,
        driftSpeed: 0.1 + Math.random() * 0.2,
        driftAmplitude: 0.3 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        rotateSpeed: (Math.random() - 0.5) * 2,
      });
    }
  }

  /**
   * Create a slash trail effect when sword swings
   */
  spawnSlashTrail(origin, direction, isHeavy = false) {
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
    for (let i = segments; i >= 0; i--) {
      const angle = -arcAngle / 2 + (arcAngle * i) / segments;
      const x = Math.cos(angle) * (arcRadius - thickness);
      const y = Math.sin(angle) * (arcRadius - thickness);
      shape.lineTo(x, y);
    }
    shape.closePath();

    const geometry = new THREE.ShapeGeometry(shape);
    const material = isHeavy ? this.heavySlashMat : this.slashMat;
    const mesh = new THREE.Mesh(geometry, material);

    mesh.position.copy(origin);
    mesh.position.y += 1.2;

    const yaw = Math.atan2(direction.x, direction.z);
    mesh.rotation.y = yaw;
    mesh.rotation.x = isHeavy ? -0.5 : 0.2;

    this.scene.add(mesh);

    this.slashTrails.push({
      mesh,
      life: 0,
      maxLife: isHeavy ? 0.35 : 0.25,
      scaleStart: 0.3,
      scaleEnd: 1.0,
      ownedGeometry: geometry, // Track for cleanup
    });
  }

  /**
   * Spawn spark particles on weapon impact (uses pool)
   */
  spawnHitSparks(position, count = 8, isCritical = false) {
    const sparkCount = isCritical ? Math.min(count * 2, 16) : Math.min(count, 10);

    for (let i = 0; i < sparkCount; i++) {
      const mesh = this._getFromPool(this.sparkPool);
      if (!mesh) continue; // Pool exhausted
      
      // Set critical color via userData flag (material is shared)
      mesh.userData.isCritical = isCritical;
      
      mesh.position.copy(position);
      mesh.position.y += 0.8 + Math.random() * 0.4;

      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4;
      const upSpeed = 2 + Math.random() * 3;

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
        pool: this.sparkPool,
      });
    }
  }

  /**
   * Spawn blood particles on damage (uses pool)
   */
  spawnBlood(position, direction, amount = 6) {
    const count = Math.min(amount, 10); // Cap for performance

    for (let i = 0; i < count; i++) {
      const mesh = this._getFromPool(this.bloodPool);
      if (!mesh) continue; // Pool exhausted

      mesh.position.copy(position);
      mesh.position.y += 0.8 + Math.random() * 0.6;

      const baseAngle = Math.atan2(direction.x, direction.z);
      const angle = baseAngle + (Math.random() - 0.5) * Math.PI * 0.6;
      const speed = 3 + Math.random() * 3;
      const upSpeed = 1 + Math.random() * 3;

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
        pool: this.bloodPool,
      });
    }
  }

  /**
   * Spawn posture break burst (uses pools)
   */
  spawnPostureBreak(position) {
    // Golden sparks
    this.spawnHitSparks(position, 12, true);

    // Shockwave ring from pool
    const ring = this._getFromPool(this.ringPool);
    if (ring) {
      ring.position.copy(position);
      ring.position.y += 1.0;
      ring.rotation.x = -Math.PI / 2;
      ring.scale.set(1, 1, 1);

      this.particles.push({
        mesh: ring,
        velocity: new THREE.Vector3(0, 0, 0),
        gravity: 0,
        life: 0,
        maxLife: 0.5,
        type: 'ring',
        expandRate: 8,
        pool: this.ringPool,
      });
    }
  }

  /**
   * Spawn block sparks (uses pool)
   */
  spawnBlockSparks(position) {
    const sparkCount = 5;
    for (let i = 0; i < sparkCount; i++) {
      const mesh = this._getFromPool(this.sparkPool);
      if (!mesh) continue;

      mesh.position.copy(position);
      mesh.position.y += 1.0;

      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 2;

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
        isBlock: true,
        pool: this.sparkPool,
      });
    }
  }

  /**
   * Spawn death burst (enemy dies) - OPTIMIZED with pools
   * Reduced particle count for performance
   */
  spawnDeathBurst(position) {
    // Blood burst - reduced from 12 to 6
    for (let i = 0; i < 6; i++) {
      const mesh = this._getFromPool(this.bloodPool);
      if (!mesh) continue;

      const angle = (i / 6) * Math.PI * 2;
      mesh.position.copy(position);
      mesh.position.y += 1.0;

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
        pool: this.bloodPool,
      });
    }

    // Soul wisps rising - reduced from 6 to 3
    for (let i = 0; i < 3; i++) {
      const mesh = this._getFromPool(this.wispPool);
      if (!mesh) continue;

      mesh.position.copy(position);
      mesh.position.y += 0.5 + Math.random() * 0.5;
      mesh.position.x += (Math.random() - 0.5) * 0.5;
      mesh.position.z += (Math.random() - 0.5) * 0.5;

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          2 + Math.random() * 1,
          (Math.random() - 0.5) * 0.5
        ),
        gravity: 0,
        life: 0,
        maxLife: 1.5 + Math.random() * 0.5,
        type: 'wisp',
        pool: this.wispPool,
      });
    }
  }

  /**
   * Update all particles
   */
  update(delta) {
    // Update death effects (vignette, camera shake)
    this._updateDeathEffects(delta);

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

      // Player soul wisps spiral upward
      if (p.type === 'playerSoul') {
        const spiralSpeed = 2;
        p.mesh.position.x += Math.sin(p.life * spiralSpeed) * delta * 0.5;
        p.mesh.position.z += Math.cos(p.life * spiralSpeed) * delta * 0.5;
      }

      // Death mist expands
      if (p.type === 'deathMist') {
        const expandScale = 1 + p.life * 0.5;
        p.mesh.scale.setScalar(expandScale);
      }

      // Calculate fade (used for visual but material is shared)
      const fadeRatio = 1 - p.life / p.maxLife;

      // Apply scale if specified
      if (p.scale) {
        const scaleVal = p.scale * fadeRatio;
        p.mesh.scale.setScalar(Math.max(0.1, scaleVal));
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

      // Remove dead particles - return to pool
      if (p.life >= p.maxLife) {
        if (p.pool) {
          this._returnToPool(p.mesh);
        } else {
          // Non-pooled particle (legacy) - dispose
          this.scene.remove(p.mesh);
          p.mesh.geometry?.dispose?.();
        }
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

      if (t.life >= t.maxLife) {
        this.scene.remove(t.mesh);
        t.ownedGeometry?.dispose();
        this.slashTrails.splice(i, 1);
      }
    }

    // Update embers (recycled)
    for (let i = this.embers.length - 1; i >= 0; i--) {
      const e = this.embers[i];
      e.life += delta;
      e.mesh.position.add(e.velocity.clone().multiplyScalar(delta));

      // Gentle sway
      e.mesh.position.x += Math.sin(e.life * 2) * 0.01;
      e.mesh.position.z += Math.cos(e.life * 1.5) * 0.01;

      // Recycle embers (no disposal)
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
    
    // Update dust motes - gentle floating animation
    const time = Date.now() * 0.001;
    for (const dust of this.dustMotes) {
      dust.mesh.position.y = dust.baseY + Math.sin(time * dust.driftSpeed + dust.phase) * dust.driftAmplitude;
      dust.mesh.position.x += Math.sin(time * 0.5 + dust.phase) * 0.002;
      dust.mesh.position.z += Math.cos(time * 0.3 + dust.phase) * 0.002;
      dust.mesh.rotation.z += dust.rotateSpeed * delta;
    }
  }

  /**
   * Spawn player death effect - OPTIMIZED with pools
   * Reduced particle counts for performance
   */
  spawnPlayerDeathEffect(position, camera) {
    // Soul burst - reduced from 15 to 8
    for (let i = 0; i < 8; i++) {
      const mesh = this._getFromPool(this.wispPool);
      if (!mesh) continue;

      mesh.position.copy(position);
      mesh.position.y += 0.5 + Math.random() * 0.8;
      mesh.position.x += (Math.random() - 0.5) * 0.6;
      mesh.position.z += (Math.random() - 0.5) * 0.6;

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 1.5,
          3 + Math.random() * 2,
          (Math.random() - 0.5) * 1.5
        ),
        gravity: -0.5,
        life: 0,
        maxLife: 2.5 + Math.random() * 1.5,
        type: 'playerSoul',
        pool: this.wispPool,
      });
    }

    // Blood mist - reduced from 20 to 10
    for (let i = 0; i < 10; i++) {
      const mesh = this._getFromPool(this.bloodPool);
      if (!mesh) continue;

      mesh.position.copy(position);
      mesh.position.y += Math.random() * 1.5;

      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 2;

      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * speed,
          0.5 + Math.random() * 1,
          Math.sin(angle) * speed
        ),
        gravity: -1,
        life: 0,
        maxLife: 2.0 + Math.random() * 1,
        type: 'deathMist',
        scale: 1.0,
        pool: this.bloodPool,
      });
    }

    // Screen vignette effect
    this._createDeathVignette(camera);

    // Camera shake
    if (camera) {
      this._triggerCameraShake(camera);
    }
  }

  _createDeathVignette(camera) {
    const vignetteGeo = new THREE.PlaneGeometry(2, 2);
    
    const vignetteMat = new THREE.ShaderMaterial({
      transparent: true,
      depthTest: false,
      depthWrite: false,
      uniforms: {
        uTime: { value: 0 },
        uIntensity: { value: 0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform float uIntensity;
        
        void main() {
          vec2 center = vUv - 0.5;
          float dist = length(center) * 1.8;
          
          float vignette = smoothstep(0.3, 1.2, dist);
          vec3 color = mix(vec3(0.0), vec3(0.3, 0.0, 0.0), vignette);
          
          float pulse = sin(uTime * 2.0) * 0.1 + 0.9;
          float alpha = vignette * uIntensity * pulse;
          
          gl_FragColor = vec4(color, alpha * 0.85);
        }
      `,
    });

    const vignette = new THREE.Mesh(vignetteGeo, vignetteMat);
    vignette.frustumCulled = false;
    vignette.renderOrder = 999;

    this.scene.add(vignette);

    this.deathVignette = {
      mesh: vignette,
      material: vignetteMat,
      life: 0,
      fadeInDuration: 0.5,
      holdDuration: 2.5,
      fadeOutDuration: 0.5,
    };
  }

  _triggerCameraShake(camera) {
    if (!this.cameraShake) {
      this.cameraShake = {
        originalPosition: camera.position.clone(),
        intensity: 0.3,
        decay: 0.95,
        duration: 0.8,
        elapsed: 0,
        camera: camera,
      };
    }
  }

  _updateDeathEffects(delta) {
    // Update vignette
    if (this.deathVignette) {
      const v = this.deathVignette;
      v.life += delta;
      v.material.uniforms.uTime.value = v.life;

      const totalDuration = v.fadeInDuration + v.holdDuration + v.fadeOutDuration;

      if (v.life < v.fadeInDuration) {
        v.material.uniforms.uIntensity.value = v.life / v.fadeInDuration;
      } else if (v.life < v.fadeInDuration + v.holdDuration) {
        v.material.uniforms.uIntensity.value = 1.0;
      } else if (v.life < totalDuration) {
        const fadeProgress = (v.life - v.fadeInDuration - v.holdDuration) / v.fadeOutDuration;
        v.material.uniforms.uIntensity.value = 1.0 - fadeProgress;
      } else {
        this.scene.remove(v.mesh);
        v.mesh.geometry.dispose();
        v.material.dispose();
        this.deathVignette = null;
      }
    }

    // Update camera shake
    if (this.cameraShake) {
      const shake = this.cameraShake;
      shake.elapsed += delta;

      if (shake.elapsed < shake.duration) {
        const remaining = 1 - (shake.elapsed / shake.duration);
        const shakeAmount = shake.intensity * remaining;
        
        shake.camera.position.x += (Math.random() - 0.5) * shakeAmount;
        shake.camera.position.y += (Math.random() - 0.5) * shakeAmount * 0.5;
        shake.camera.position.z += (Math.random() - 0.5) * shakeAmount;
      } else {
        this.cameraShake = null;
      }
    }
  }

  /**
   * Spawn level up effect - golden burst with rising particles
   */
  spawnLevelUpEffect(position) {
    // Golden sparks burst outward
    for (let i = 0; i < 20; i++) {
      const mesh = this._getFromPool(this.sparkPool);
      if (!mesh) continue;
      
      mesh.userData.isLevelUp = true; // Mark for golden color
      
      const angle = (i / 20) * Math.PI * 2;
      mesh.position.copy(position);
      mesh.position.y += 1.0;
      
      const speed = 3 + Math.random() * 4;
      const upSpeed = 3 + Math.random() * 4;
      
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * speed,
          upSpeed,
          Math.sin(angle) * speed
        ),
        gravity: -8,
        life: 0,
        maxLife: 0.8 + Math.random() * 0.4,
        type: 'spark',
        isLevelUp: true,
        pool: this.sparkPool,
      });
    }
    
    // Rising golden wisps
    for (let i = 0; i < 8; i++) {
      const mesh = this._getFromPool(this.wispPool);
      if (!mesh) continue;
      
      mesh.position.copy(position);
      mesh.position.y += 0.2;
      mesh.position.x += (Math.random() - 0.5) * 1.5;
      mesh.position.z += (Math.random() - 0.5) * 1.5;
      
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.5,
          4 + Math.random() * 2,
          (Math.random() - 0.5) * 0.5
        ),
        gravity: 0,
        life: 0,
        maxLife: 1.5 + Math.random() * 0.5,
        type: 'wisp',
        isLevelUp: true,
        pool: this.wispPool,
      });
    }
    
    // Expanding golden ring (shockwave)
    const ring = this._getFromPool(this.ringPool);
    if (ring) {
      ring.position.copy(position);
      ring.position.y += 0.1;
      ring.rotation.x = -Math.PI / 2;
      ring.scale.set(0.5, 0.5, 1);
      
      // Override ring color for level up
      ring.userData.isLevelUp = true;
      
      this.particles.push({
        mesh: ring,
        velocity: new THREE.Vector3(0, 0, 0),
        gravity: 0,
        life: 0,
        maxLife: 0.8,
        type: 'ring',
        expandRate: 12,
        isLevelUp: true,
        pool: this.ringPool,
      });
    }
  }
  
  /**
   * Spawn dash ability effect - green/blue trail
   */
  spawnDashEffect(position, direction) {
    // Speed lines in dash direction
    for (let i = 0; i < 12; i++) {
      const mesh = this._getFromPool(this.sparkPool);
      if (!mesh) continue;
      
      mesh.userData.isDash = true;
      
      mesh.position.copy(position);
      mesh.position.y += 0.5 + Math.random() * 1.0;
      mesh.position.x += (Math.random() - 0.5) * 0.8;
      mesh.position.z += (Math.random() - 0.5) * 0.8;
      
      // Particles trail behind the dash
      const oppositeDir = direction.clone().multiplyScalar(-1);
      const spreadAngle = (Math.random() - 0.5) * 0.5;
      
      this.particles.push({
        mesh,
        velocity: oppositeDir.clone().multiplyScalar(5 + Math.random() * 3).add(
          new THREE.Vector3(spreadAngle, Math.random() * 2, spreadAngle)
        ),
        gravity: -2,
        life: 0,
        maxLife: 0.3 + Math.random() * 0.2,
        type: 'spark',
        isDash: true,
        pool: this.sparkPool,
      });
    }
  }
  
  /**
   * Spawn parry success effect - golden sparks burst
   */
  spawnParryEffect(position) {
    // Golden sparks in shield pattern
    for (let i = 0; i < 15; i++) {
      const mesh = this._getFromPool(this.sparkPool);
      if (!mesh) continue;
      
      mesh.userData.isParry = true;
      
      mesh.position.copy(position);
      mesh.position.y += 1.2;
      mesh.position.z += 0.5; // Slightly in front
      
      const angle = (i / 15) * Math.PI * 2;
      const speed = 4 + Math.random() * 3;
      
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * speed * 0.5,
          Math.sin(angle) * speed,
          -2 // Burst forward
        ),
        gravity: -6,
        life: 0,
        maxLife: 0.4 + Math.random() * 0.2,
        type: 'spark',
        isParry: true,
        pool: this.sparkPool,
      });
    }
    
    // Impact ring
    const ring = this._getFromPool(this.ringPool);
    if (ring) {
      ring.position.copy(position);
      ring.position.y += 1.2;
      ring.rotation.x = 0;
      ring.rotation.y = 0;
      ring.scale.set(0.3, 0.3, 1);
      ring.userData.isParry = true;
      
      this.particles.push({
        mesh: ring,
        velocity: new THREE.Vector3(0, 0, 0),
        gravity: 0,
        life: 0,
        maxLife: 0.4,
        type: 'ring',
        expandRate: 8,
        isParry: true,
        pool: this.ringPool,
      });
    }
  }
  
  /**
   * Spawn war cry effect - fiery aura burst
   */
  spawnWarCryEffect(position) {
    // Fire burst outward
    for (let i = 0; i < 25; i++) {
      const mesh = this._getFromPool(this.sparkPool);
      if (!mesh) continue;
      
      mesh.userData.isWarCry = true;
      
      const angle = (i / 25) * Math.PI * 2;
      mesh.position.copy(position);
      mesh.position.y += 0.5;
      
      const radius = 0.5 + Math.random() * 0.3;
      mesh.position.x += Math.cos(angle) * radius;
      mesh.position.z += Math.sin(angle) * radius;
      
      const speed = 5 + Math.random() * 4;
      
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * speed,
          2 + Math.random() * 3,
          Math.sin(angle) * speed
        ),
        gravity: -4,
        life: 0,
        maxLife: 0.6 + Math.random() * 0.4,
        type: 'spark',
        isWarCry: true,
        pool: this.sparkPool,
      });
    }
    
    // Rising fire wisps
    for (let i = 0; i < 6; i++) {
      const mesh = this._getFromPool(this.wispPool);
      if (!mesh) continue;
      
      mesh.userData.isWarCry = true;
      
      const angle = (i / 6) * Math.PI * 2;
      mesh.position.copy(position);
      mesh.position.x += Math.cos(angle) * 0.8;
      mesh.position.z += Math.sin(angle) * 0.8;
      
      this.particles.push({
        mesh,
        velocity: new THREE.Vector3(
          Math.cos(angle) * 2,
          5 + Math.random() * 2,
          Math.sin(angle) * 2
        ),
        gravity: 1, // Rise against gravity
        life: 0,
        maxLife: 1.0 + Math.random() * 0.5,
        type: 'wisp',
        isWarCry: true,
        pool: this.wispPool,
      });
    }
    
    // Expanding fire ring
    const ring = this._getFromPool(this.ringPool);
    if (ring) {
      ring.position.copy(position);
      ring.position.y += 0.1;
      ring.rotation.x = -Math.PI / 2;
      ring.scale.set(1, 1, 1);
      ring.userData.isWarCry = true;
      
      this.particles.push({
        mesh: ring,
        velocity: new THREE.Vector3(0, 0, 0),
        gravity: 0,
        life: 0,
        maxLife: 0.6,
        type: 'ring',
        expandRate: 15,
        isWarCry: true,
        pool: this.ringPool,
      });
    }
  }

  /**
   * Cleanup all particles (for scene reset)
   */
  dispose() {
    // Return all active particles to pools
    this.particles.forEach(p => {
      if (p.pool) {
        this._returnToPool(p.mesh);
      } else {
        this.scene.remove(p.mesh);
        p.mesh.geometry?.dispose?.();
      }
    });
    this.particles = [];

    // Slash trails (not pooled - have unique geometry)
    this.slashTrails.forEach(t => {
      this.scene.remove(t.mesh);
      t.ownedGeometry?.dispose();
    });
    this.slashTrails = [];

    // Embers (not pooled but shared geometry/material)
    this.embers.forEach(e => {
      this.scene.remove(e.mesh);
    });
    this.embers = [];
    
    // Dust motes
    this.dustMotes.forEach(d => {
      this.scene.remove(d.mesh);
    });
    this.dustMotes = [];
    
    // Dispose pools
    [...this.sparkPool, ...this.bloodPool, ...this.wispPool, ...this.ringPool].forEach(mesh => {
      this.scene.remove(mesh);
    });
    this.sparkPool = [];
    this.bloodPool = [];
    this.wispPool = [];
    this.ringPool = [];
    
    // Dispose shared geometries
    this.sparkGeo?.dispose();
    this.bloodGeo?.dispose();
    this.emberGeo?.dispose();
    this.wispGeo?.dispose();
    this.playerWispGeo?.dispose();
    this.mistGeo?.dispose();
    this.dustGeo?.dispose();
    
    // Dispose shared materials
    this.sparkMat?.dispose();
    this.critSparkMat?.dispose();
    this.bloodMat?.dispose();
    this.emberMat?.dispose();
    this.wispMat?.dispose();
    this.playerSoulMat?.dispose();
    this.deathMistMat?.dispose();
    this.slashMat?.dispose();
    this.heavySlashMat?.dispose();
    this.dustMat?.dispose();
  }
}
