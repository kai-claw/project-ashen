import * as THREE from 'three';
import { AssetManager } from '../systems/AssetManager.js';

const STATES = {
  DORMANT: 'dormant',
  AWAKENING: 'awakening',
  IDLE: 'idle',
  WALK: 'walk',
  ATTACK: 'attack',
  HEAVY_ATTACK: 'heavy_attack',
  AOE_ATTACK: 'aoe_attack',
  COMBO: 'combo',
  STAGGERED: 'staggered',
  PHASE_TRANSITION: 'phase_transition',
  DEAD: 'dead',
};

// Animation map for boss states (if GLTF has animations)
const BOSS_ANIM_MAP = {
  [STATES.DORMANT]: 'Idle',
  [STATES.AWAKENING]: 'Idle',
  [STATES.IDLE]: 'Idle',
  [STATES.WALK]: 'Walking',
  [STATES.ATTACK]: 'Punch',
  [STATES.HEAVY_ATTACK]: 'Punch',
  [STATES.AOE_ATTACK]: 'Jump',
  [STATES.COMBO]: 'Punch',
  [STATES.STAGGERED]: 'No',
  [STATES.PHASE_TRANSITION]: 'Death',
  [STATES.DEAD]: 'Death',
};

export class Boss {
  constructor(scene, position, gameManager) {
    this.scene = scene;
    this.gm = gameManager;
    
    this.name = 'The Failed Experiment';
    this.maxHealth = 500;
    this.health = this.maxHealth;
    this.maxPosture = 150;
    this.posture = 0;
    
    this.phase = 1;
    this.state = STATES.DORMANT;
    this.stateTimer = 0;
    this.hitThisSwing = false;
    this.activeAttack = null;
    this.comboCount = 0;
    this.isActive = false;
    this.isDead = false;
    
    // Animation system
    this.mixer = null;
    this.animations = {};
    this.currentAction = null;
    this.gltfModel = null;
    this.gltfLoaded = false;
    
    // Phase 1: Slow, telegraphed
    // Phase 2: Faster, adds AoE
    this.phaseConfigs = {
      1: {
        moveSpeed: 2.0,
        attackCooldown: 2.5,
        attackWindup: 1.0,
        damage: 35,
        postureDmg: 30,
        canCombo: false,
        canAoE: false,
        modelTint: 0x3a2040, // Dark purple
        emissiveColor: 0x220022,
      },
      2: {
        moveSpeed: 3.5,
        attackCooldown: 1.5,
        attackWindup: 0.6,
        damage: 45,
        postureDmg: 40,
        canCombo: true,
        maxCombo: 3,
        canAoE: true,
        aoeCooldown: 8.0,
        modelTint: 0x5a1020, // Dark red
        emissiveColor: 0x440011,
      },
    };
    
    this.config = this.phaseConfigs[1];
    this.attackCooldownTimer = 0;
    this.aoeCooldownTimer = 0;
    this.detectionRange = 15;
    this.attackRange = 3.5;
    
    this.spawnPos = position.clone();
    
    // Create main mesh container
    this.mesh = new THREE.Group();
    this.mesh.position.copy(position);
    
    // Create body group for transformations
    this.body = new THREE.Group();
    this.mesh.add(this.body);
    
    // Create fallback primitive mesh while GLTF loads
    this._createFallbackMesh();
    
    // Eye glow lights array
    this.eyeLights = [];
    
    // Create multiple glowing eye orbs
    this.eyes = [];
    this._createEyes();
    
    // Create weapon (procedural - massive claw/appendage)
    this.weapon = this._createWeapon();
    this.mesh.add(this.weapon);
    
    // AoE indicator
    this._createAoEIndicator();
    
    // Aura particles
    this._createAuraParticles();
    
    // Mutated arm for Phase 2
    this.mutatedArm = null;
    
    scene.add(this.mesh);
    
    // Load GLTF model
    this._loadGLTFModel();
    
    // Start dormant
    this._setDormant();
  }
  
  _createFallbackMesh() {
    // Primitive fallback - massive twisted torso
    const torsoGeo = new THREE.IcosahedronGeometry(1.2, 2);
    const torsoMat = new THREE.MeshStandardMaterial({
      color: 0x1a1520,
      roughness: 0.75,
      metalness: 0.25,
      flatShading: true,
    });
    this.fallbackMesh = new THREE.Mesh(torsoGeo, torsoMat);
    this.fallbackMesh.position.y = 2.0;
    this.fallbackMesh.scale.set(1.3, 1.6, 1.2);
    this.fallbackMesh.castShadow = true;
    this.body.add(this.fallbackMesh);
    
    // Secondary mass - hunched back
    const backGeo = new THREE.IcosahedronGeometry(0.7, 1);
    const backMesh = new THREE.Mesh(backGeo, torsoMat.clone());
    backMesh.position.set(0, 2.8, -0.6);
    backMesh.scale.set(1.3, 1.0, 0.9);
    this.body.add(backMesh);
    
    // Tumorous growths
    for (let i = 0; i < 12; i++) {
      const size = 0.12 + Math.random() * 0.2;
      const tumorGeo = new THREE.SphereGeometry(size, 6, 6);
      const tumorMat = new THREE.MeshStandardMaterial({
        color: 0x2a1a25,
        roughness: 0.9,
        emissive: 0x110008,
        emissiveIntensity: 0.3,
      });
      const tumor = new THREE.Mesh(tumorGeo, tumorMat);
      const angle = (i / 12) * Math.PI * 2;
      const yOff = 1.3 + Math.random() * 2.0;
      const radius = 0.8 + Math.random() * 0.4;
      tumor.position.set(
        Math.cos(angle) * radius + (Math.random() - 0.5) * 0.3,
        yOff,
        Math.sin(angle) * (radius * 0.7) + (Math.random() - 0.5) * 0.3
      );
      this.body.add(tumor);
    }
    
    // Exposed ribcage/bone structure
    const ribMat = new THREE.MeshStandardMaterial({
      color: 0x8a7a6a,
      roughness: 0.6,
      metalness: 0.3,
    });
    for (let i = 0; i < 6; i++) {
      const ribGeo = new THREE.TorusGeometry(0.4 - i * 0.035, 0.035, 6, 16, Math.PI * 0.75);
      const rib = new THREE.Mesh(ribGeo, ribMat);
      rib.position.set(0, 1.4 + i * 0.18, 0.7);
      rib.rotation.x = Math.PI / 2;
      rib.rotation.y = Math.PI;
      this.body.add(rib);
    }
    
    // Head - twisted skull
    const headGeo = new THREE.DodecahedronGeometry(0.5, 1);
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x1a1420,
      roughness: 0.7,
      metalness: 0.25,
    });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 3.6, 0.35);
    head.scale.set(1.0, 1.2, 0.85);
    this.body.add(head);
    
    // Twisted legs
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x1a1520,
      roughness: 0.75,
      metalness: 0.2,
    });
    
    const leftLegGeo = new THREE.CapsuleGeometry(0.22, 1.0, 10, 12);
    const leftLeg = new THREE.Mesh(leftLegGeo, legMat);
    leftLeg.position.set(-0.45, 0.6, 0);
    leftLeg.rotation.z = 0.15;
    this.body.add(leftLeg);
    
    const rightLegGeo = new THREE.CapsuleGeometry(0.24, 0.95, 10, 12);
    const rightLeg = new THREE.Mesh(rightLegGeo, legMat);
    rightLeg.position.set(0.45, 0.6, 0);
    rightLeg.rotation.z = -0.12;
    this.body.add(rightLeg);
    
    // Clawed feet
    const clawMat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      roughness: 0.4,
      metalness: 0.6,
    });
    for (let side of [-1, 1]) {
      for (let i = 0; i < 3; i++) {
        const clawGeo = new THREE.ConeGeometry(0.05, 0.18, 6);
        const claw = new THREE.Mesh(clawGeo, clawMat);
        claw.position.set(side * 0.45 + (i - 1) * 0.1, 0.05, 0.25);
        claw.rotation.x = Math.PI / 3;
        this.body.add(claw);
      }
    }
  }
  
  async _loadGLTFModel() {
    try {
      // Load brainstem model - perfect for "The Failed Experiment"
      const { scene: model, animations } = await AssetManager.loadModel(
        'assets/models/brainrobot.glb', // Use brainrobot - more complex model
        { scale: 2.5 } // Boss is large
      );
      
      if (!model) {
        console.warn('[BOSS] GLTF model failed to load, using fallback');
        return;
      }
      
      this.gltfModel = model;
      this.gltfLoaded = true;
      
      // Position and scale the model
      model.position.set(0, 0.5, 0);
      model.scale.setScalar(2.5);
      
      // Apply boss tinting to all materials
      this._applyModelTint(this.config.modelTint, this.config.emissiveColor);
      
      // Set up shadows
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      
      // Set up animation mixer if animations exist
      if (animations && animations.length > 0) {
        this.mixer = new THREE.AnimationMixer(model);
        
        // Store all animations by name
        animations.forEach((clip) => {
          this.animations[clip.name] = this.mixer.clipAction(clip);
          console.log(`[BOSS] Animation loaded: ${clip.name}`);
        });
        
        // Play idle animation
        this._playAnimation(STATES.IDLE);
      }
      
      // Add GLTF model to body group
      this.body.add(model);
      
      // Hide fallback mesh
      if (this.fallbackMesh) {
        this.fallbackMesh.visible = false;
      }
      
      console.log(`[BOSS] GLTF model loaded: brainrobot.glb with ${animations?.length || 0} animations`);
      
    } catch (error) {
      console.warn('[BOSS] GLTF loading failed:', error);
      // Fallback already visible
    }
  }
  
  _applyModelTint(tintColor, emissiveColor) {
    if (!this.gltfModel) return;
    
    const tint = new THREE.Color(tintColor);
    const emissive = new THREE.Color(emissiveColor);
    
    this.gltfModel.traverse((child) => {
      if (child.isMesh && child.material) {
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        materials.forEach((mat) => {
          if (mat.color) {
            // Blend original color with tint
            mat.color.lerp(tint, 0.4);
          }
          if (mat.emissive !== undefined) {
            mat.emissive.copy(emissive);
            mat.emissiveIntensity = 0.5;
          }
          mat.needsUpdate = true;
        });
      }
    });
    
    // Also tint fallback mesh
    this.body.traverse((child) => {
      if (child.isMesh && child.material && child !== this.gltfModel) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach((mat) => {
          if (mat.color) mat.color.lerp(tint, 0.3);
          if (mat.emissive !== undefined) {
            mat.emissive.copy(emissive);
            mat.emissiveIntensity = 0.4;
          }
        });
      }
    });
  }
  
  _playAnimation(stateName, speed = 1.0) {
    if (!this.mixer) return;
    
    const animName = BOSS_ANIM_MAP[stateName];
    if (!animName) return;
    
    // Try to find animation (case-insensitive)
    let action = this.animations[animName];
    if (!action) {
      // Try lowercase
      const lower = animName.toLowerCase();
      for (const name of Object.keys(this.animations)) {
        if (name.toLowerCase().includes(lower)) {
          action = this.animations[name];
          break;
        }
      }
    }
    
    if (!action) return;
    
    // Cross-fade to new animation
    if (this.currentAction && this.currentAction !== action) {
      action.reset();
      action.setEffectiveTimeScale(speed);
      action.setEffectiveWeight(1);
      action.crossFadeFrom(this.currentAction, 0.3, true);
      action.play();
    } else if (!this.currentAction) {
      action.reset();
      action.setEffectiveTimeScale(speed);
      action.play();
    }
    
    this.currentAction = action;
  }
  
  _createEyes() {
    // Multiple glowing eyes - the failed experiment's signature
    const eyePositions = [
      // Main eyes
      { x: -0.18, y: 3.55, z: 0.6, size: 0.11 },
      { x: 0.18, y: 3.55, z: 0.6, size: 0.11 },
      // Third eye
      { x: 0, y: 3.75, z: 0.55, size: 0.085 },
      // Side eyes
      { x: -0.38, y: 3.35, z: 0.45, size: 0.06 },
      { x: 0.38, y: 3.35, z: 0.45, size: 0.06 },
      // Cluster on shoulder
      { x: -0.85, y: 3.1, z: 0.3, size: 0.05 },
      { x: -0.95, y: 2.9, z: 0.35, size: 0.04 },
      // Eye on back growth
      { x: 0.12, y: 2.85, z: -0.35, size: 0.07 },
    ];
    
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xff2200,
      emissive: 0xff2200,
      emissiveIntensity: 5,
    });
    
    eyePositions.forEach((pos) => {
      const eyeGeo = new THREE.SphereGeometry(pos.size, 12, 12);
      const eye = new THREE.Mesh(eyeGeo, eyeMat.clone());
      eye.position.set(pos.x, pos.y, pos.z);
      this.eyes.push(eye);
      this.body.add(eye);
      
      // Add point light for main eyes
      if (pos.size >= 0.08) {
        const light = new THREE.PointLight(0xff2200, 0.5, 3);
        light.position.copy(eye.position);
        this.eyeLights.push(light);
        this.body.add(light);
      }
    });
  }
  
  _createWeapon() {
    // Massive twisted cleaver/scythe appendage
    const weaponGroup = new THREE.Group();
    
    // Handle - fleshy appendage
    const handleGeo = new THREE.CylinderGeometry(0.08, 0.1, 2.0, 12);
    const handleMat = new THREE.MeshStandardMaterial({
      color: 0x3a2a20,
      roughness: 0.85,
      metalness: 0.15,
    });
    const handle = new THREE.Mesh(handleGeo, handleMat);
    weaponGroup.add(handle);
    
    // Flesh wrappings
    for (let i = 0; i < 5; i++) {
      const wrapGeo = new THREE.TorusGeometry(0.11, 0.025, 6, 14);
      const wrap = new THREE.Mesh(wrapGeo, new THREE.MeshStandardMaterial({
        color: 0x4a2a28,
        roughness: 0.9,
      }));
      wrap.position.y = -0.7 + i * 0.35;
      wrap.rotation.x = Math.PI / 2;
      weaponGroup.add(wrap);
    }
    
    // Massive blade - jagged and cruel
    const bladeGeo = new THREE.BoxGeometry(0.1, 1.8, 0.6);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a2a,
      roughness: 0.25,
      metalness: 0.95,
    });
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.set(0, 1.5, 0.18);
    blade.rotation.z = 0.12;
    weaponGroup.add(blade);
    
    // Blade edge glow - corrupted energy
    const edgeGeo = new THREE.BoxGeometry(0.025, 1.75, 0.025);
    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0xff3300,
      emissive: 0xff2200,
      emissiveIntensity: 3,
    });
    const edge = new THREE.Mesh(edgeGeo, edgeMat);
    edge.position.set(0, 1.5, 0.5);
    edge.rotation.z = 0.12;
    weaponGroup.add(edge);
    
    // Serrated spikes along blade back
    for (let i = 0; i < 6; i++) {
      const spikeGeo = new THREE.ConeGeometry(0.04, 0.15, 6);
      const spike = new THREE.Mesh(spikeGeo, bladeMat);
      spike.position.set(0, 0.85 + i * 0.22, -0.1);
      spike.rotation.x = -Math.PI / 4;
      weaponGroup.add(spike);
    }
    
    weaponGroup.position.set(1.6, 1.9, 0);
    weaponGroup.rotation.z = 0.4;
    weaponGroup.castShadow = true;
    
    return weaponGroup;
  }
  
  _createAoEIndicator() {
    const aoeGeo = new THREE.RingGeometry(0.5, 6, 32);
    const aoeMat = new THREE.MeshBasicMaterial({
      color: 0xff4400,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });
    this.aoeIndicator = new THREE.Mesh(aoeGeo, aoeMat);
    this.aoeIndicator.rotation.x = -Math.PI / 2;
    this.aoeIndicator.position.y = 0.1;
    this.mesh.add(this.aoeIndicator);
  }
  
  _createAuraParticles() {
    this.auraParticles = [];
    for (let i = 0; i < 8; i++) {
      const particleGeo = new THREE.SphereGeometry(0.1, 6, 6);
      const particleMat = new THREE.MeshStandardMaterial({
        color: 0x220022,
        emissive: 0x110011,
        emissiveIntensity: 1.5,
        transparent: true,
        opacity: 0.7,
      });
      const particle = new THREE.Mesh(particleGeo, particleMat);
      particle.userData.angle = (i / 8) * Math.PI * 2;
      particle.userData.yOffset = Math.random() * 2;
      particle.userData.radius = 0.9 + Math.random() * 0.5;
      this.auraParticles.push(particle);
      this.mesh.add(particle);
    }
  }
  
  _setDormant() {
    this.eyes.forEach((eye) => {
      eye.material.emissiveIntensity = 0.5;
    });
    this.eyeLights.forEach((light) => {
      light.intensity = 0.1;
    });
  }
  
  _awaken() {
    if (this.state !== STATES.DORMANT) return;
    
    this.isActive = true;
    this._changeState(STATES.AWAKENING);
    
    // Play boss roar and start boss music
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('bossRoar', {
        position: this.mesh.position,
        volume: 0.8,
      });
      this.gm.audioManager.startBossMusic();
    }
    
    // Eyes flare up sequence
    let delay = 0;
    this.eyes.forEach((eye, i) => {
      setTimeout(() => {
        eye.material.emissiveIntensity = 7;
        setTimeout(() => {
          eye.material.emissiveIntensity = 4.5;
        }, 200);
      }, delay);
      delay += 120;
    });
    
    this.eyeLights.forEach((light, i) => {
      setTimeout(() => {
        light.intensity = 0.8;
      }, i * 100);
    });
  }
  
  update(delta, player) {
    if (this.state === STATES.DEAD) return;
    
    // Update animation mixer
    if (this.mixer) {
      this.mixer.update(delta);
    }
    
    this.stateTimer += delta;
    this.attackCooldownTimer = Math.max(0, this.attackCooldownTimer - delta);
    this.aoeCooldownTimer = Math.max(0, this.aoeCooldownTimer - delta);
    
    const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
    
    // Wake up when player approaches
    if (this.state === STATES.DORMANT && distToPlayer < this.detectionRange) {
      this._awaken();
      return;
    }
    
    switch (this.state) {
      case STATES.AWAKENING:
        // Rise up animation
        if (this.stateTimer < 2.0) {
          this.body.position.y = Math.sin(this.stateTimer * Math.PI) * 0.4;
          this.body.rotation.z = Math.sin(this.stateTimer * 3) * 0.05;
        } else {
          this.body.position.y = 0;
          this.body.rotation.z = 0;
          this._changeState(STATES.IDLE);
        }
        break;
        
      case STATES.IDLE:
        this._faceTarget(player.mesh.position, delta);
        
        // Idle breathing animation
        this.body.position.y = Math.sin(this.stateTimer * 2) * 0.08;
        this.body.scale.y = 1 + Math.sin(this.stateTimer * 2.5) * 0.02;
        
        // Decide next action
        if (distToPlayer <= this.attackRange && this.attackCooldownTimer <= 0) {
          this._startAttack(player);
        } else if (distToPlayer > this.attackRange) {
          this._changeState(STATES.WALK);
        }
        break;
        
      case STATES.WALK:
        this._moveToward(player.mesh.position, delta);
        this._faceTarget(player.mesh.position, delta);
        
        // Walking animation - heavy footfalls
        this.body.position.y = Math.sin(this.stateTimer * 8) * 0.12;
        this.body.rotation.z = Math.sin(this.stateTimer * 4) * 0.03;
        
        if (distToPlayer <= this.attackRange) {
          if (this.attackCooldownTimer <= 0) {
            this._startAttack(player);
          } else {
            this._changeState(STATES.IDLE);
          }
        }
        break;
        
      case STATES.ATTACK:
        this._processAttack(delta, player, false);
        break;
        
      case STATES.HEAVY_ATTACK:
        this._processAttack(delta, player, true);
        break;
        
      case STATES.AOE_ATTACK:
        this._processAoEAttack(delta, player);
        break;
        
      case STATES.COMBO:
        this._processCombo(delta, player);
        break;
        
      case STATES.STAGGERED:
        // Wobble during stagger
        this.body.rotation.z = Math.sin(this.stateTimer * 14) * 0.18 * (1 - this.stateTimer / 2.5);
        this.body.position.y = Math.sin(this.stateTimer * 8) * 0.1;
        
        if (this.stateTimer >= 2.5) {
          this.posture = 0;
          this.body.rotation.z = 0;
          this.body.position.y = 0;
          this._changeState(STATES.IDLE);
        }
        break;
        
      case STATES.PHASE_TRANSITION:
        this._processPhaseTransition(delta);
        break;
    }
    
    // Posture regen (slow for boss)
    if (this.state !== STATES.STAGGERED && this.posture > 0) {
      this.posture = Math.max(0, this.posture - 3 * delta);
    }
    
    // Eye pulsing based on health
    const healthRatio = this.health / this.maxHealth;
    const pulseSpeed = 2 + (1 - healthRatio) * 5;
    const pulseIntensity = 3.5 + Math.sin(Date.now() * 0.001 * pulseSpeed) * (1.5 + (1 - healthRatio) * 2.5);
    this.eyes.forEach((eye) => {
      eye.material.emissiveIntensity = pulseIntensity;
    });
    this.eyeLights.forEach((light) => {
      light.intensity = 0.3 + pulseIntensity * 0.1;
    });
    
    // Animate aura particles
    if (this.auraParticles && this.isActive) {
      const time = Date.now() * 0.001;
      this.auraParticles.forEach((particle, i) => {
        const angle = particle.userData.angle + time * 0.6;
        const yOff = particle.userData.yOffset + Math.sin(time + i) * 0.4;
        const radius = particle.userData.radius;
        particle.position.set(
          Math.cos(angle) * radius,
          1.6 + yOff,
          Math.sin(angle) * radius
        );
        particle.material.opacity = 0.35 + Math.sin(time * 2.5 + i) * 0.25;
      });
    }
  }
  
  _startAttack(player) {
    // Phase 2: chance for AoE if off cooldown
    if (this.phase === 2 && this.config.canAoE && this.aoeCooldownTimer <= 0 && Math.random() < 0.3) {
      this._changeState(STATES.AOE_ATTACK);
      return;
    }
    
    // Phase 2: chance for combo
    if (this.phase === 2 && this.config.canCombo && Math.random() < 0.4) {
      this.comboCount = 0;
      this._changeState(STATES.COMBO);
      return;
    }
    
    // Regular attack (50/50 light vs heavy)
    if (Math.random() < 0.5) {
      this._changeState(STATES.ATTACK);
    } else {
      this._changeState(STATES.HEAVY_ATTACK);
    }
  }
  
  _processAttack(delta, player, isHeavy) {
    const windupTime = isHeavy ? this.config.attackWindup * 1.5 : this.config.attackWindup;
    const strikeTime = windupTime + 0.3;
    const recoveryTime = strikeTime + (isHeavy ? 1.0 : 0.6);
    
    // Windup
    if (this.stateTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta * 2);
      const progress = this.stateTimer / windupTime;
      
      if (isHeavy) {
        // Raise weapon high
        this.weapon.rotation.z = -progress * 2.8;
        this.weapon.position.y = 1.9 + progress * 1.6;
        this.body.rotation.x = progress * 0.15;
      } else {
        // Pull back
        this.weapon.rotation.z = 0.4 - progress * 1.6;
        this.body.rotation.z = progress * 0.1;
      }
      return;
    }
    
    // Strike
    if (this.stateTimer >= windupTime && this.stateTimer < strikeTime) {
      if (!this.hitThisSwing) {
        const attackDir = new THREE.Vector3(
          Math.sin(this.body.rotation.y),
          0,
          Math.cos(this.body.rotation.y)
        );
        this.activeAttack = {
          position: this.mesh.position.clone().add(attackDir.multiplyScalar(2.2)).add(new THREE.Vector3(0, 1.6, 0)),
          range: this.attackRange,
          damage: isHeavy ? this.config.damage * 1.5 : this.config.damage,
          postureDmg: isHeavy ? this.config.postureDmg * 1.5 : this.config.postureDmg,
          isHeavy,
        };
        
        // Play swing sound
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('swordSwing', {
            position: this.mesh.position,
            volume: 0.7,
            pitch: isHeavy ? 0.6 : 0.8,
          });
        }
      }
      
      // Swing animation
      const strikeProgress = (this.stateTimer - windupTime) / 0.3;
      if (isHeavy) {
        this.weapon.rotation.z = -2.8 + strikeProgress * 4.5;
        this.weapon.position.y = 3.5 - strikeProgress * 2.8;
        this.body.rotation.x = 0.15 - strikeProgress * 0.25;
      } else {
        this.weapon.rotation.z = -1.2 + strikeProgress * 2.8;
        this.body.rotation.z = 0.1 - strikeProgress * 0.15;
      }
    }
    
    // Recovery
    if (this.stateTimer >= strikeTime) {
      this.activeAttack = null;
      this.weapon.rotation.z = THREE.MathUtils.lerp(this.weapon.rotation.z, 0.4, 0.12);
      this.weapon.position.y = THREE.MathUtils.lerp(this.weapon.position.y, 1.9, 0.12);
      this.body.rotation.x = THREE.MathUtils.lerp(this.body.rotation.x, 0, 0.15);
      this.body.rotation.z = THREE.MathUtils.lerp(this.body.rotation.z, 0, 0.15);
    }
    
    // End attack
    if (this.stateTimer >= recoveryTime) {
      this.hitThisSwing = false;
      this.activeAttack = null;
      this.attackCooldownTimer = this.config.attackCooldown;
      this._resetWeapon();
      this._changeState(STATES.IDLE);
    }
  }
  
  _processCombo(delta, player) {
    const windupTime = this.config.attackWindup * 0.7;
    const strikeTime = windupTime + 0.2;
    const nextComboTime = strikeTime + 0.3;
    
    // Windup (faster in combo)
    if (this.stateTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta * 3);
      const progress = this.stateTimer / windupTime;
      const swingDir = this.comboCount % 2 === 0 ? 1 : -1;
      this.weapon.rotation.z = swingDir * progress * 1.8;
      this.body.rotation.z = swingDir * progress * 0.08;
      return;
    }
    
    // Strike
    if (this.stateTimer >= windupTime && this.stateTimer < strikeTime) {
      if (!this.hitThisSwing) {
        const attackDir = new THREE.Vector3(
          Math.sin(this.body.rotation.y),
          0,
          Math.cos(this.body.rotation.y)
        );
        this.activeAttack = {
          position: this.mesh.position.clone().add(attackDir.multiplyScalar(2.2)).add(new THREE.Vector3(0, 1.6, 0)),
          range: this.attackRange * 0.9,
          damage: this.config.damage * 0.7,
          postureDmg: this.config.postureDmg * 0.6,
          isCombo: true,
        };
        
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('swordSwing', {
            position: this.mesh.position,
            volume: 0.6,
            pitch: 0.9 + this.comboCount * 0.1,
          });
        }
      }
      
      const strikeProgress = (this.stateTimer - windupTime) / 0.2;
      const swingDir = this.comboCount % 2 === 0 ? 1 : -1;
      this.weapon.rotation.z = swingDir * (1.8 - strikeProgress * 3.5);
      this.body.rotation.z = swingDir * (0.08 - strikeProgress * 0.12);
    }
    
    // Check for next combo hit
    if (this.stateTimer >= nextComboTime) {
      this.comboCount++;
      this.hitThisSwing = false;
      this.activeAttack = null;
      
      const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
      
      if (this.comboCount < this.config.maxCombo && distToPlayer < this.attackRange * 1.2) {
        this.stateTimer = 0;
        // Step forward during combo
        const fwd = new THREE.Vector3(Math.sin(this.body.rotation.y), 0, Math.cos(this.body.rotation.y));
        this.mesh.position.addScaledVector(fwd, 0.6);
      } else {
        // End combo
        this.comboCount = 0;
        this.attackCooldownTimer = this.config.attackCooldown * 1.5;
        this._resetWeapon();
        this._changeState(STATES.IDLE);
      }
    }
  }
  
  _processAoEAttack(delta, player) {
    const chargeTime = 1.5;
    const explosionTime = chargeTime + 0.3;
    const recoveryTime = explosionTime + 1.0;
    
    // Charge up - show indicator
    if (this.stateTimer < chargeTime) {
      const progress = this.stateTimer / chargeTime;
      this.aoeIndicator.material.opacity = progress * 0.65;
      this.aoeIndicator.scale.setScalar(1 + progress * 0.35);
      
      // Raise weapon overhead
      this.weapon.rotation.z = -progress * 3.2;
      this.weapon.position.y = 1.9 + progress * 2.2;
      
      // Body glow
      this._flashModel(progress * 0.5, 0xff2200);
      
      // Eyes intensify
      this.eyes.forEach((eye) => {
        eye.material.emissiveIntensity = 4 + progress * 7;
      });
      
      // Rumble
      this.body.position.y = Math.sin(this.stateTimer * 20) * 0.05 * progress;
      
      return;
    }
    
    // Explosion
    if (this.stateTimer >= chargeTime && this.stateTimer < explosionTime) {
      if (!this.hitThisSwing) {
        this.hitThisSwing = true;
        this.aoeIndicator.material.opacity = 1;
        this.aoeIndicator.material.color.setHex(0xff6600);
        
        // Play explosion sound
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('explosion', {
            position: this.mesh.position,
            volume: 0.9,
          });
        }
        
        // AoE damage check
        const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
        if (distToPlayer < 6 && !player.isInvincible) {
          this.activeAttack = {
            position: this.mesh.position.clone(),
            range: 6,
            damage: this.config.damage * 1.2,
            postureDmg: this.config.postureDmg,
            isAoE: true,
          };
        }
        
        // Slam weapon down
        this.weapon.rotation.z = 0.6;
        this.weapon.position.y = 0.6;
      }
    }
    
    // Recovery
    if (this.stateTimer >= explosionTime) {
      this.activeAttack = null;
      this.aoeIndicator.material.opacity *= 0.88;
      this._flashModel(0, 0x000000);
    }
    
    if (this.stateTimer >= recoveryTime) {
      this.hitThisSwing = false;
      this.aoeIndicator.material.opacity = 0;
      this.aoeIndicator.material.color.setHex(0xff4400);
      this.aoeCooldownTimer = this.config.aoeCooldown;
      this.attackCooldownTimer = this.config.attackCooldown;
      this._resetWeapon();
      this._changeState(STATES.IDLE);
    }
  }
  
  _processPhaseTransition(delta) {
    const transitionDuration = 3.0;
    
    if (this.stateTimer < transitionDuration) {
      // Dramatic convulsions
      this.body.rotation.z = Math.sin(this.stateTimer * 22) * 0.25;
      this.body.scale.y = 1 + Math.sin(this.stateTimer * 12) * 0.15;
      this.body.scale.x = 1 + Math.sin(this.stateTimer * 10) * 0.08;
      
      // Eyes go crazy
      this.eyes.forEach((eye, i) => {
        eye.material.emissiveIntensity = 6 + Math.sin(this.stateTimer * 18 + i) * 5;
      });
      
      // Color shift to Phase 2
      const progress = this.stateTimer / transitionDuration;
      const tintColor = new THREE.Color(this.phaseConfigs[1].modelTint);
      const targetColor = new THREE.Color(this.phaseConfigs[2].modelTint);
      tintColor.lerp(targetColor, progress);
      this._applyModelTint(tintColor.getHex(), this.phaseConfigs[2].emissiveColor);
      
      // Create mutated arm at halfway point
      if (this.stateTimer > 1.5 && !this.mutatedArm) {
        this._createMutatedArm();
      }
      return;
    }
    
    // Transition complete
    this.body.rotation.z = 0;
    this.body.scale.set(1, 1, 1);
    
    // Final tint application
    this._applyModelTint(this.phaseConfigs[2].modelTint, this.phaseConfigs[2].emissiveColor);
    
    this.eyes.forEach((eye) => {
      eye.material.color.setHex(0xff4400);
      eye.material.emissive.setHex(0xff4400);
    });
    
    this._changeState(STATES.IDLE);
  }
  
  _createMutatedArm() {
    this.mutatedArm = new THREE.Group();
    
    // Main tentacle arm
    const armGeo = new THREE.CapsuleGeometry(0.18, 1.2, 12, 16);
    const armMat = new THREE.MeshStandardMaterial({
      color: 0x3a1528,
      roughness: 0.85,
      metalness: 0.15,
    });
    const arm = new THREE.Mesh(armGeo, armMat);
    arm.position.set(0, 0, 0);
    arm.rotation.z = 0.7;
    arm.rotation.x = 0.45;
    this.mutatedArm.add(arm);
    
    // Clawed tips
    const clawMat = new THREE.MeshStandardMaterial({
      color: 0x222222,
      roughness: 0.35,
      metalness: 0.75,
    });
    for (let i = 0; i < 4; i++) {
      const clawGeo = new THREE.ConeGeometry(0.04, 0.25, 6);
      const claw = new THREE.Mesh(clawGeo, clawMat);
      claw.position.set(-0.5 + (i - 1.5) * 0.1, 0.7, 0.8);
      claw.rotation.x = -0.85;
      this.mutatedArm.add(claw);
    }
    
    // Pustules on mutated arm
    for (let i = 0; i < 4; i++) {
      const pustuleGeo = new THREE.SphereGeometry(0.07 + Math.random() * 0.05, 6, 6);
      const pustuleMat = new THREE.MeshStandardMaterial({
        color: 0x4a2838,
        roughness: 0.9,
        emissive: 0x110008,
        emissiveIntensity: 0.4,
      });
      const pustule = new THREE.Mesh(pustuleGeo, pustuleMat);
      pustule.position.set(-0.25 + i * 0.18, 0.25 + i * 0.18, 0.4);
      this.mutatedArm.add(pustule);
    }
    
    this.mutatedArm.position.set(-1.1, 2.7, 0.25);
    this.mesh.add(this.mutatedArm);
    
    // Extra eyes on mutated area - Phase 2 grows more eyes
    const extraEyeMat = new THREE.MeshStandardMaterial({
      color: 0xff4400,
      emissive: 0xff4400,
      emissiveIntensity: 5,
    });
    
    const extraEyePositions = [
      { x: -1.3, y: 2.9, z: 0.55, size: 0.07 },
      { x: -1.1, y: 2.5, z: 0.65, size: 0.055 },
      { x: 0.55, y: 3.1, z: 0.4, size: 0.045 },
    ];
    
    extraEyePositions.forEach((pos) => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(pos.size, 10, 10), extraEyeMat.clone());
      eye.position.set(pos.x, pos.y, pos.z);
      this.eyes.push(eye);
      this.mesh.add(eye);
    });
  }
  
  _flashModel(intensity, color) {
    const flashColor = new THREE.Color(color);
    
    // Flash GLTF model
    if (this.gltfModel) {
      this.gltfModel.traverse((child) => {
        if (child.isMesh && child.material && child.material.emissive !== undefined) {
          child.material.emissive.lerp(flashColor, intensity);
          child.material.emissiveIntensity = intensity * 2;
        }
      });
    }
    
    // Flash fallback
    this.body.traverse((child) => {
      if (child.isMesh && child.material && child.material.emissive !== undefined) {
        child.material.emissive.lerp(flashColor, intensity);
      }
    });
  }
  
  takeDamage(amount, postureDmg = 0, attackerPos = null) {
    if (this.state === STATES.DEAD || this.state === STATES.PHASE_TRANSITION || this.state === STATES.DORMANT) return 'immune';
    
    // Reduced damage during awakening
    if (this.state === STATES.AWAKENING) {
      amount = Math.floor(amount * 0.5);
      postureDmg = Math.floor(postureDmg * 0.5);
    }
    
    // Extra posture damage if staggered
    if (this.state === STATES.STAGGERED) {
      postureDmg *= 2;
    }
    
    this.health -= amount;
    this.posture = Math.min(this.maxPosture, this.posture + postureDmg);
    
    // Play hit sounds
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('criticalHit', {
        position: this.mesh.position,
        volume: 0.7,
      });
    }
    
    // Flash on hit
    this._flashModel(0.6, 0xff2200);
    setTimeout(() => {
      if (this.state !== STATES.AOE_ATTACK) {
        this._flashModel(0, 0x000000);
      }
    }, 100);
    
    // Hit recoil
    this._applyHitRecoil(attackerPos, amount);
    
    // Check for death
    if (this.health <= 0) {
      this._die();
      return 'died';
    }
    
    // Check for phase transition at 50% HP
    if (this.phase === 1 && this.health <= this.maxHealth * 0.5) {
      this._enterPhase2();
      return 'phase_transition';
    }
    
    // Check for posture break
    if (this.posture >= this.maxPosture && this.state !== STATES.STAGGERED) {
      this._triggerPostureBreak();
      return 'staggered';
    }
    
    return 'hit';
  }
  
  _applyHitRecoil(attackerPos, damage) {
    let knockDir;
    if (attackerPos) {
      knockDir = new THREE.Vector3().subVectors(this.mesh.position, attackerPos);
      knockDir.y = 0;
      knockDir.normalize();
    } else {
      const faceAngle = this.body.rotation.y;
      knockDir = new THREE.Vector3(-Math.sin(faceAngle), 0, -Math.cos(faceAngle));
    }
    
    // Boss recoil is smaller
    const recoilStrength = Math.min(0.25, damage * 0.006);
    
    const startPos = this.mesh.position.clone();
    const recoilPos = startPos.clone().add(knockDir.multiplyScalar(recoilStrength));
    
    const originalTiltZ = this.body.rotation.z || 0;
    const tiltDirection = Math.random() > 0.5 ? 1 : -1;
    this.body.rotation.z = originalTiltZ + tiltDirection * 0.1;
    
    let recoilTime = 0;
    const recoilDuration = 0.15;
    
    const animateRecoil = () => {
      recoilTime += 0.016;
      const t = Math.min(1, recoilTime / recoilDuration);
      const easeOut = 1 - Math.pow(1 - t, 3);
      
      this.mesh.position.lerpVectors(recoilPos, startPos, easeOut);
      this.body.rotation.z = THREE.MathUtils.lerp(
        originalTiltZ + tiltDirection * 0.1,
        originalTiltZ,
        easeOut
      );
      
      if (t < 1) {
        requestAnimationFrame(animateRecoil);
      }
    };
    
    this.mesh.position.copy(recoilPos);
    requestAnimationFrame(animateRecoil);
  }
  
  _triggerPostureBreak() {
    this._changeState(STATES.STAGGERED);
    this.activeAttack = null;
    
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('postureBreak', {
        position: this.mesh.position,
        volume: 0.9,
      });
    }
    
    // Big flash
    this._flashModel(1.0, 0xffcc00);
    this.eyes.forEach((eye) => {
      eye.material.emissive.setHex(0xffcc00);
    });
    
    setTimeout(() => {
      if (this.state === STATES.STAGGERED) {
        this._flashModel(0, 0x000000);
        this.eyes.forEach((eye) => {
          eye.material.emissive.setHex(this.phase === 2 ? 0xff4400 : 0xff2200);
        });
      }
    }, 300);
    
    console.log(`[BOSS] ${this.name} POSTURE BROKEN!`);
  }
  
  _enterPhase2() {
    this.phase = 2;
    this.config = this.phaseConfigs[2];
    this.posture = 0;
    this.activeAttack = null;
    this._changeState(STATES.PHASE_TRANSITION);
    
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('bossRoar', {
        position: this.mesh.position,
        volume: 1.0,
      });
    }
    
    console.log(`[BOSS] ${this.name} enters PHASE 2!`);
  }
  
  _die() {
    this.state = STATES.DEAD;
    this.isDead = true;
    this.health = 0;
    this.activeAttack = null;
    this.isActive = false;
    
    // Play death animation
    this._playAnimation(STATES.DEAD, 0.8);
    
    if (this.gm?.audioManager) {
      this.gm.audioManager.startAmbientMusic();
    }
    
    console.log(`[BOSS] ${this.name} DEFEATED!`);
    
    // Death animation - collapse
    let deathProgress = 0;
    const deathAnim = () => {
      deathProgress += 0.018;
      this.body.position.y = -deathProgress * 1.8;
      this.body.rotation.x = deathProgress * 0.6;
      this.body.rotation.z = deathProgress * 0.3;
      
      this.eyes.forEach((eye) => {
        eye.material.emissiveIntensity *= 0.94;
      });
      this.eyeLights.forEach((light) => {
        light.intensity *= 0.92;
      });
      
      if (deathProgress < 1.0) {
        requestAnimationFrame(deathAnim);
      } else {
        this._fadeOut();
      }
    };
    deathAnim();
    
    // Award remnants
    if (this.gm) {
      this.gm.collectRemnants(2000);
    }
  }
  
  _fadeOut() {
    let opacity = 1;
    const fade = () => {
      opacity -= 0.008;
      
      // Fade all meshes
      const fadeFunc = (child) => {
        if (child.isMesh && child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach((mat) => {
            mat.transparent = true;
            mat.opacity = opacity;
          });
        }
      };
      
      this.body.traverse(fadeFunc);
      this.weapon.traverse(fadeFunc);
      
      this.eyes.forEach((eye) => {
        eye.material.transparent = true;
        eye.material.opacity = opacity;
      });
      
      if (this.auraParticles) {
        this.auraParticles.forEach((p) => {
          p.material.opacity = opacity * 0.6;
        });
      }
      
      if (this.mutatedArm) {
        this.mutatedArm.traverse(fadeFunc);
      }
      
      if (opacity > 0) {
        requestAnimationFrame(fade);
      } else {
        this.mesh.visible = false;
      }
    };
    setTimeout(fade, 3000);
  }
  
  _moveToward(target, delta) {
    const dir = new THREE.Vector3().subVectors(target, this.mesh.position);
    dir.y = 0;
    if (dir.length() > 0.5) {
      dir.normalize();
      this.mesh.position.addScaledVector(dir, this.config.moveSpeed * delta);
    }
  }
  
  _faceTarget(target, delta) {
    const dir = new THREE.Vector3().subVectors(target, this.mesh.position);
    dir.y = 0;
    if (dir.length() > 0.1) {
      const angle = Math.atan2(dir.x, dir.z);
      this.body.rotation.y = THREE.MathUtils.lerp(this.body.rotation.y, angle, 5 * delta);
    }
  }
  
  _resetWeapon() {
    this.weapon.rotation.z = 0.4;
    this.weapon.position.set(1.6, 1.9, 0);
    this.body.rotation.x = 0;
    this.body.rotation.z = 0;
  }
  
  _changeState(newState) {
    if (this.state === newState) return;
    
    if (this.state === STATES.ATTACK || this.state === STATES.HEAVY_ATTACK ||
        this.state === STATES.AOE_ATTACK || this.state === STATES.COMBO) {
      this.activeAttack = null;
      this.hitThisSwing = false;
    }
    
    this.state = newState;
    this.stateTimer = 0;
    
    // Trigger animation for new state
    this._playAnimation(newState);
  }
  
  respawn() {
    this.health = this.maxHealth;
    this.posture = 0;
    this.phase = 1;
    this.config = this.phaseConfigs[1];
    this.state = STATES.DORMANT;
    this.stateTimer = 0;
    this.isActive = false;
    this.isDead = false;
    this.comboCount = 0;
    this.attackCooldownTimer = 0;
    this.aoeCooldownTimer = 0;
    
    this.mesh.position.copy(this.spawnPos);
    this.mesh.visible = true;
    this.body.position.set(0, 0, 0);
    this.body.rotation.set(0, 0, 0);
    this.body.scale.set(1, 1, 1);
    
    // Reset all meshes
    const resetFunc = (child) => {
      if (child.isMesh && child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach((mat) => {
          mat.opacity = 1;
          mat.transparent = false;
          if (mat.emissive) {
            mat.emissive.setHex(0x000000);
          }
        });
      }
    };
    
    this.body.traverse(resetFunc);
    this.weapon.traverse(resetFunc);
    
    this._resetWeapon();
    
    // Reset eyes - remove extra Phase 2 eyes
    while (this.eyes.length > 8) {
      const extraEye = this.eyes.pop();
      if (extraEye) this.mesh.remove(extraEye);
    }
    
    this.eyes.forEach((eye) => {
      eye.material.opacity = 1;
      eye.material.transparent = false;
      eye.material.color.setHex(0xff2200);
      eye.material.emissive.setHex(0xff2200);
    });
    
    this.eyeLights.forEach((light) => {
      light.intensity = 0.1;
    });
    
    // Remove mutated arm
    if (this.mutatedArm) {
      this.mesh.remove(this.mutatedArm);
      this.mutatedArm = null;
    }
    
    // Reset tint to Phase 1
    this._applyModelTint(this.phaseConfigs[1].modelTint, this.phaseConfigs[1].emissiveColor);
    
    this.aoeIndicator.material.opacity = 0;
    
    this._setDormant();
    this._playAnimation(STATES.IDLE);
  }
}
