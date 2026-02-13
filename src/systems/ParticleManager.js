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
    this.dustMotes = [];
    
    // Shared geometries and materials for performance
    this._initSharedAssets();
    
    // Start ember system
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

  _initDustMotes() {
    // Floating dust particles visible in light shafts
    // These make light feel tangible and add atmosphere
    const dustCount = 80;
    
    // Dust mote geometry - tiny plane that always faces camera
    this.dustGeo = new THREE.PlaneGeometry(0.03, 0.03);
    
    // Subtle white/gold dust material
    this.dustMat = new THREE.MeshBasicMaterial({
      color: 0xffffee,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      side: THREE.DoubleSide,
    });
    
    for (let i = 0; i < dustCount; i++) {
      const mesh = new THREE.Mesh(this.dustGeo, this.dustMat.clone());
      
      // Spread throughout playable area
      mesh.position.set(
        (Math.random() - 0.5) * 40,
        0.5 + Math.random() * 5, // Float at various heights
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
        // Glow pulse
        const pulse = 0.6 + Math.sin(p.life * 5) * 0.4;
        p.mesh.material.opacity = pulse * (1 - p.life / p.maxLife);
      }

      // Death mist expands and fades
      if (p.type === 'deathMist') {
        const expandScale = 1 + p.life * 0.5;
        p.mesh.scale.setScalar(expandScale);
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
    
    // Update dust motes - gentle floating animation
    const time = Date.now() * 0.001; // Current time in seconds
    for (const dust of this.dustMotes) {
      // Gentle vertical bob
      dust.mesh.position.y = dust.baseY + Math.sin(time * dust.driftSpeed + dust.phase) * dust.driftAmplitude;
      
      // Slow horizontal drift
      dust.mesh.position.x += Math.sin(time * 0.5 + dust.phase) * 0.002;
      dust.mesh.position.z += Math.cos(time * 0.3 + dust.phase) * 0.002;
      
      // Gentle rotation to catch light
      dust.mesh.rotation.z += dust.rotateSpeed * delta;
      
      // Subtle opacity flicker (like dust catching light)
      const flicker = 0.3 + Math.sin(time * 3 + dust.phase * 5) * 0.15;
      dust.mesh.material.opacity = flicker;
    }
  }

  /**
   * Spawn player death effect (dramatic soul escape + vignette)
   */
  spawnPlayerDeathEffect(position, camera) {
    // Large soul burst escaping upward
    for (let i = 0; i < 15; i++) {
      const soulGeo = new THREE.SphereGeometry(0.15 + Math.random() * 0.1, 8, 8);
      const soulMat = new THREE.MeshBasicMaterial({
        color: 0x88ccff,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const soul = new THREE.Mesh(soulGeo, soulMat);
      soul.position.copy(position);
      soul.position.y += 0.5 + Math.random() * 0.8;
      soul.position.x += (Math.random() - 0.5) * 0.6;
      soul.position.z += (Math.random() - 0.5) * 0.6;

      this.scene.add(soul);
      this.particles.push({
        mesh: soul,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 1.5,
          3 + Math.random() * 2,
          (Math.random() - 0.5) * 1.5
        ),
        gravity: -0.5, // Slow gravity for ethereal float
        life: 0,
        maxLife: 2.5 + Math.random() * 1.5,
        type: 'playerSoul',
      });
    }

    // Create a red-black blood mist burst
    for (let i = 0; i < 20; i++) {
      const mistGeo = new THREE.SphereGeometry(0.2 + Math.random() * 0.15, 6, 6);
      const mistMat = new THREE.MeshBasicMaterial({
        color: 0x440011,
        transparent: true,
        opacity: 0.7,
      });
      const mist = new THREE.Mesh(mistGeo, mistMat);
      mist.position.copy(position);
      mist.position.y += Math.random() * 1.5;

      const angle = Math.random() * Math.PI * 2;
      const speed = 1 + Math.random() * 2;

      this.scene.add(mist);
      this.particles.push({
        mesh: mist,
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
      });
    }

    // Screen vignette effect (fullscreen quad that fades in)
    this._createDeathVignette(camera);

    // Camera shake
    if (camera) {
      this._triggerCameraShake(camera);
    }
  }

  _createDeathVignette(camera) {
    // Create a fullscreen vignette overlay that fades to red-black edges
    const vignetteGeo = new THREE.PlaneGeometry(2, 2);
    
    // Custom shader for vignette
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
          
          // Dark red vignette
          float vignette = smoothstep(0.3, 1.2, dist);
          vec3 color = mix(vec3(0.0), vec3(0.3, 0.0, 0.0), vignette);
          
          // Pulsing effect
          float pulse = sin(uTime * 2.0) * 0.1 + 0.9;
          float alpha = vignette * uIntensity * pulse;
          
          gl_FragColor = vec4(color, alpha * 0.85);
        }
      `,
    });

    const vignette = new THREE.Mesh(vignetteGeo, vignetteMat);
    vignette.frustumCulled = false;
    vignette.renderOrder = 999;

    // Add to scene as screen-space overlay
    this.scene.add(vignette);

    // Animate the vignette
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

  /**
   * Update death vignette and camera shake
   */
  _updateDeathEffects(delta) {
    // Update vignette
    if (this.deathVignette) {
      const v = this.deathVignette;
      v.life += delta;
      v.material.uniforms.uTime.value = v.life;

      const totalDuration = v.fadeInDuration + v.holdDuration + v.fadeOutDuration;

      if (v.life < v.fadeInDuration) {
        // Fade in
        v.material.uniforms.uIntensity.value = v.life / v.fadeInDuration;
      } else if (v.life < v.fadeInDuration + v.holdDuration) {
        // Hold
        v.material.uniforms.uIntensity.value = 1.0;
      } else if (v.life < totalDuration) {
        // Fade out
        const fadeProgress = (v.life - v.fadeInDuration - v.holdDuration) / v.fadeOutDuration;
        v.material.uniforms.uIntensity.value = 1.0 - fadeProgress;
      } else {
        // Remove vignette
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
    
    this.dustMotes.forEach(d => {
      this.scene.remove(d.mesh);
      d.mesh.geometry?.dispose();
      d.mesh.material?.dispose();
    });
    this.dustMotes = [];
  }
}
