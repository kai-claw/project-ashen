import * as THREE from 'three';
import { AssetManager } from '../systems/AssetManager.js';

const STATES = {
  IDLE: 'idle',
  PATROL: 'patrol',
  CHASE: 'chase',
  CIRCLE: 'circle',
  RETREAT: 'retreat',
  ATTACK: 'attack',
  STAGGERED: 'staggered',
  DEAD: 'dead',
  DORMANT: 'dormant',  // Ambush enemies waiting to be triggered
  RISING: 'rising',    // Ambush enemies emerging from sarcophagus
};

// Animation name mapping for robot_expressive.glb
const ENEMY_ANIM_MAP = {
  [STATES.IDLE]: 'Idle',
  [STATES.PATROL]: 'Walking',
  [STATES.CHASE]: 'Running',
  [STATES.CIRCLE]: 'Walking',
  [STATES.RETREAT]: 'Walking',
  [STATES.ATTACK]: 'Punch',
  [STATES.STAGGERED]: 'No',
  [STATES.DEAD]: 'Death',
  [STATES.DORMANT]: 'Idle',   // Hidden/inactive
  [STATES.RISING]: 'ThumbsUp', // Rising from sarcophagus (reuse standing animation)
};

// Enemy type presets with model info
export const ENEMY_TYPES = {
  HOLLOW_SOLDIER: {
    name: 'Hollow Soldier',
    health: 50,
    damage: 15,
    postureDmg: 15,
    moveSpeed: 2.5,
    detectionRange: 10,
    attackRange: 2.2,
    attackCooldown: 1.5,
    attackWindup: 0.5,
    attackDuration: 0.2,
    remnantDrop: 40,
    patrolRadius: 3,
    bodyColor: 0x4a2a2a,
    eyeColor: 0xff3333,
    canChainAttacks: false,
    maxPosture: 60,
    hasShield: false,
    // GLTF settings - use relative path, BASE_URL added at load time
    modelPath: 'assets/models/robot_expressive.glb',
    modelScale: 0.5,
    modelTint: 0x4a5a3a, // Greenish undead tint
    animSpeedMult: 1.0,
  },
  BERSERKER: {
    name: 'Berserker',
    health: 35,
    damage: 20,
    postureDmg: 10,
    moveSpeed: 4.0,
    detectionRange: 12,
    attackRange: 2.0,
    attackCooldown: 0.8,
    attackWindup: 0.3,
    attackDuration: 0.15,
    remnantDrop: 60,
    patrolRadius: 5,
    bodyColor: 0x662222,
    eyeColor: 0xff6600,
    canChainAttacks: true,
    maxChainAttacks: 3,
    maxPosture: 40,
    hasShield: false,
    // GLTF settings - use relative path, BASE_URL added at load time
    modelPath: 'assets/models/robot_expressive.glb',
    modelScale: 0.55,
    modelTint: 0x8a2222, // Red aggressive tint
    animSpeedMult: 1.5,
  },
  SENTINEL: {
    name: 'Sentinel',
    health: 100,
    damage: 30,
    postureDmg: 25,
    moveSpeed: 1.5,
    detectionRange: 8,
    attackRange: 2.5,
    attackCooldown: 2.5,
    attackWindup: 0.8,
    attackDuration: 0.3,
    remnantDrop: 100,
    patrolRadius: 2,
    bodyColor: 0x333344,
    eyeColor: 0x4444ff,
    canChainAttacks: false,
    maxPosture: 100,
    hasShield: true,
    shieldBlockChance: 0.4,
    // GLTF settings - use relative path, BASE_URL added at load time
    modelPath: 'assets/models/soldier.glb',
    modelScale: 0.9,
    modelTint: 0x3a3a5a, // Blue-gray armored tint
    animSpeedMult: 0.8,
  },
  
  // Elite crypt enemy - mini-boss guarding the ritual chamber
  CRYPT_GUARDIAN: {
    name: 'Crypt Guardian',
    health: 200,           // Double normal sentinel
    damage: 40,            // Powerful hits
    postureDmg: 30,        // Heavy posture damage
    moveSpeed: 1.8,        // Slightly faster than sentinel
    detectionRange: 12,    // Larger aggro range
    attackRange: 3.0,      // Long reach
    attackCooldown: 2.0,   // Faster recovery
    attackWindup: 0.6,     // Faster windup
    attackDuration: 0.4,   // Longer active frames
    remnantDrop: 500,      // Big reward
    patrolRadius: 3,
    bodyColor: 0x1a1a2a,   // Dark blue-black
    eyeColor: 0xff2222,    // Menacing red eyes
    canChainAttacks: true, // Can combo
    maxChainAttacks: 2,
    maxPosture: 150,       // Hard to stagger
    hasShield: false,      // No shield, pure aggression
    isElite: true,         // Flag for special behaviors
    // GLTF settings
    modelPath: 'assets/models/soldier.glb',
    modelScale: 1.2,       // Larger than normal
    modelTint: 0x2a1a3a,   // Purple-black undead tint
    animSpeedMult: 0.9,
  },
  
  // Bone Revenant - fast ambush enemy from sarcophagi
  BONE_REVENANT: {
    name: 'Bone Revenant',
    health: 40,
    damage: 18,
    postureDmg: 12,
    moveSpeed: 3.5,        // Fast
    detectionRange: 8,
    attackRange: 2.0,
    attackCooldown: 0.9,   // Quick attacks
    attackWindup: 0.25,    // Fast windup
    attackDuration: 0.15,
    remnantDrop: 70,
    patrolRadius: 4,
    bodyColor: 0x8a7a5a,   // Bone color
    eyeColor: 0x44ff44,    // Eerie green glow
    canChainAttacks: true,
    maxChainAttacks: 2,
    maxPosture: 45,
    hasShield: false,
    isAmbush: true,        // Flag for dormant start
    // GLTF settings
    modelPath: 'assets/models/robot_expressive.glb',
    modelScale: 0.45,      // Slightly smaller
    modelTint: 0x8a7a5a,   // Bone-colored tint
    animSpeedMult: 1.4,    // Fast animations
  },
};

export class Enemy {
  constructor(scene, position, config = {}, gameManager = null) {
    this.scene = scene;
    this.gm = gameManager;
    
    const typePreset = config.type ? ENEMY_TYPES[config.type] : {};
    this.config = {
      ...ENEMY_TYPES.HOLLOW_SOLDIER,
      ...typePreset,
      ...config,
    };

    this.maxHealth = this.config.health;
    this.health = this.maxHealth;
    this.maxPosture = this.config.maxPosture || 60;
    this.posture = 0;
    
    // Check if this enemy should start dormant (ambush behavior)
    this.isDormant = this.config.behavior === 'ambush' || this.config.isAmbush;
    this.triggerZone = this.config.triggerZone || null;
    this.triggerRadius = this.config.triggerRadius || 6; // Default trigger distance
    this.state = this.isDormant ? STATES.DORMANT : STATES.IDLE;
    this.stateTimer = 0;
    this.hitThisSwing = false;
    this.activeAttack = null;
    this.isBlocking = false;
    this.isDead = false;
    
    this.chainAttackCount = 0;
    this.lastAttackTime = 0;
    
    this.circleDirection = Math.random() > 0.5 ? 1 : -1;
    this.circleTimer = 0;

    this.spawnPos = position.clone();
    this.patrolTarget = position.clone();
    this.patrolWait = 0;

    // GLTF model state
    this.modelLoaded = false;
    this.animSystem = null;
    this.currentAnim = null;
    this.gltfModel = null;

    // Create mesh container
    this.mesh = new THREE.Group();
    this.mesh.position.copy(position);

    // Create fallback primitive mesh
    this._createFallbackMesh();
    
    // Create health bar
    this._createHealthBar(2.1);

    scene.add(this.mesh);
    
    // Hide dormant enemies (ambush behavior)
    if (this.isDormant) {
      this.mesh.visible = false;
    }

    // Load GLTF model asynchronously
    this._loadGLTFModel();
  }
  
  /**
   * Wake up a dormant enemy (called by trigger system)
   */
  wake() {
    if (this.state !== STATES.DORMANT) return;
    
    this.mesh.visible = true;
    this.isDormant = false;
    this._changeState(STATES.RISING);
    
    // Play rising sound if available
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('ambush', { 
        position: this.mesh.position, 
        volume: 0.7 
      });
    }
  }
  
  /**
   * Check if player is in trigger range for dormant enemies
   */
  checkTrigger(playerPos) {
    if (this.state !== STATES.DORMANT) return false;
    
    const dx = playerPos.x - this.mesh.position.x;
    const dz = playerPos.z - this.mesh.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    
    return dist < this.triggerRadius;
  }

  _createFallbackMesh() {
    // Simple placeholder body
    const bodyMat = new THREE.MeshStandardMaterial({
      color: this.config.bodyColor,
      roughness: 0.7,
      metalness: 0.2,
    });

    const bodyGeo = new THREE.CapsuleGeometry(0.3, 0.5, 8, 16);
    this.fallbackBody = new THREE.Mesh(bodyGeo, bodyMat);
    this.fallbackBody.position.y = 1.0;
    this.fallbackBody.castShadow = true;
    this.mesh.add(this.fallbackBody);

    // Glowing eyes
    const eyeMat = new THREE.MeshStandardMaterial({
      color: this.config.eyeColor,
      emissive: this.config.eyeColor,
      emissiveIntensity: 4,
    });
    const eyeGeo = new THREE.SphereGeometry(0.08, 8, 8);
    this.eye = new THREE.Mesh(eyeGeo, eyeMat);
    this.eye.position.set(0, 1.5, 0.25);
    this.mesh.add(this.eye);

    this.body = this.fallbackBody;
  }

  async _loadGLTFModel() {
    try {
      const basePath = import.meta.env.BASE_URL || '/';
      const modelPath = this.config.modelPath || 'assets/models/robot_expressive.glb';
      const fullPath = `${basePath}${modelPath}`;
      const modelScale = this.config.modelScale || 0.5;
      
      const { scene: model, animations } = await AssetManager.loadModel(
        fullPath,
        { scale: modelScale }
      );

      this.gltfModel = model;
      this.gltfModel.position.y = 0;
      this.gltfModel.rotation.y = Math.PI;

      // Apply tint to distinguish enemy types
      if (this.config.modelTint) {
        this._applyModelTint(this.config.modelTint);
      }

      // Set up shadows and store original materials
      this.gltfModel.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.userData.originalMaterial = child.material.clone();
        }
      });

      // Hide fallback mesh
      if (this.fallbackBody) this.fallbackBody.visible = false;
      // Keep glowing eye as indicator

      this.mesh.add(this.gltfModel);

      // Set up animation system
      if (animations && animations.length > 0) {
        this.animSystem = AssetManager.createAnimationSystem(this.gltfModel, animations);
        this._playAnimation(this.state, { loop: true });
      }

      this.modelLoaded = true;
      this.body = this.gltfModel;

    } catch (error) {
      console.error(`[Enemy:${this.config.name}] Failed to load GLTF:`, error);
    }
  }

  _applyModelTint(tintColor) {
    const tint = new THREE.Color(tintColor);
    
    this.gltfModel.traverse((child) => {
      if (child.isMesh && child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach(mat => {
          if (mat.color) {
            mat.color.lerp(tint, 0.3);
          }
          if (mat.emissive) {
            mat.emissive.copy(tint).multiplyScalar(0.1);
            mat.emissiveIntensity = 0.2;
          }
        });
      }
    });
  }

  _playAnimation(state, options = {}) {
    if (!this.animSystem) return;

    const animName = ENEMY_ANIM_MAP[state];
    if (!animName) return;

    if (this.currentAnim === animName && state !== STATES.ATTACK) return;

    const speedMult = this.config.animSpeedMult || 1.0;
    
    const defaultOptions = {
      loop: state === STATES.IDLE || state === STATES.PATROL || 
            state === STATES.CHASE || state === STATES.CIRCLE || state === STATES.RETREAT,
      fadeIn: 0.2,
      timeScale: speedMult,
      clampWhenFinished: state === STATES.DEAD,
    };

    if (state === STATES.ATTACK) {
      defaultOptions.loop = false;
      defaultOptions.timeScale = speedMult * 1.2;
    } else if (state === STATES.CHASE) {
      defaultOptions.timeScale = speedMult * 1.3;
    }

    const mergedOptions = { ...defaultOptions, ...options };

    if (this.currentAnim) {
      this.animSystem.crossFade(this.currentAnim, animName, mergedOptions.fadeIn);
    } else {
      this.animSystem.play(animName, mergedOptions);
    }

    this.currentAnim = animName;
  }
  
  _createHealthBar(heightOffset) {
    this.healthBarGroup = new THREE.Group();
    this.healthBarGroup.position.y = heightOffset;

    const bgGeo = new THREE.PlaneGeometry(1.0, 0.08);
    const bgMat = new THREE.MeshBasicMaterial({ color: 0x111111, side: THREE.DoubleSide });
    const bg = new THREE.Mesh(bgGeo, bgMat);
    this.healthBarGroup.add(bg);

    const fillGeo = new THREE.PlaneGeometry(0.98, 0.06);
    const fillMat = new THREE.MeshBasicMaterial({ color: 0xcc3333, side: THREE.DoubleSide });
    this.healthFill = new THREE.Mesh(fillGeo, fillMat);
    this.healthFill.position.z = 0.001;
    this.healthBarGroup.add(this.healthFill);
    
    const postureBgGeo = new THREE.PlaneGeometry(1.0, 0.04);
    const postureBgMat = new THREE.MeshBasicMaterial({ color: 0x222211, side: THREE.DoubleSide });
    const postureBg = new THREE.Mesh(postureBgGeo, postureBgMat);
    postureBg.position.y = -0.08;
    this.healthBarGroup.add(postureBg);
    
    const postureFillGeo = new THREE.PlaneGeometry(0.98, 0.03);
    const postureFillMat = new THREE.MeshBasicMaterial({ color: 0xffcc00, side: THREE.DoubleSide });
    this.postureFill = new THREE.Mesh(postureFillGeo, postureFillMat);
    this.postureFill.position.set(0, -0.08, 0.001);
    this.postureFill.scale.x = 0;
    this.healthBarGroup.add(this.postureFill);

    this.mesh.add(this.healthBarGroup);
    this.healthBarGroup.visible = false;
    
    this.breakIndicator = this._createBreakIndicator();
    this.breakIndicator.visible = false;
    this.mesh.add(this.breakIndicator);
  }
  
  _createBreakIndicator() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffcc00';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('BREAK!', 64, 32);
    
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ 
      map: texture, 
      transparent: true,
      depthTest: false,
    });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(1.5, 0.75, 1);
    sprite.position.y = 3.0;
    return sprite;
  }

  update(delta, player) {
    if (this.state === STATES.DEAD) return;

    // Update animation mixer
    if (this.animSystem) {
      this.animSystem.update(delta);
    }

    this.stateTimer += delta;
    const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
    const healthPercent = this.health / this.maxHealth;

    // Billboard health bar
    if (this.healthBarGroup.visible) {
      const cam = this.scene.getObjectByProperty('type', 'PerspectiveCamera');
      if (cam) this.healthBarGroup.lookAt(cam.position);
    }
    
    // Shield blocking logic
    if (this.config.hasShield && this.state === STATES.CHASE && distToPlayer < this.config.attackRange * 1.5) {
      this.isBlocking = Math.random() < this.config.shieldBlockChance;
    } else {
      this.isBlocking = false;
    }

    switch (this.state) {
      case STATES.IDLE:
        this.patrolWait += delta;
        if (distToPlayer < this.config.detectionRange) {
          this._changeState(STATES.CHASE);
          this.healthBarGroup.visible = true;
        } else if (this.patrolWait > 2) {
          this.patrolWait = 0;
          this._pickPatrolTarget();
          this._changeState(STATES.PATROL);
        }
        break;

      case STATES.PATROL:
        if (distToPlayer < this.config.detectionRange) {
          this._changeState(STATES.CHASE);
          this.healthBarGroup.visible = true;
          break;
        }
        this._moveToward(this.patrolTarget, this.config.moveSpeed * 0.5, delta);
        if (this.mesh.position.distanceTo(this.patrolTarget) < 0.5) {
          this._changeState(STATES.IDLE);
        }
        break;

      case STATES.CHASE:
        if (distToPlayer > this.config.detectionRange * 1.5) {
          this._changeState(STATES.IDLE);
          this.healthBarGroup.visible = false;
          break;
        }
        
        if (healthPercent < 0.3 && !this.config.canChainAttacks && Math.random() < 0.01) {
          this._changeState(STATES.RETREAT);
          break;
        }
        
        if (distToPlayer <= this.config.attackRange) {
          this._changeState(STATES.ATTACK);
          break;
        }
        
        if (distToPlayer < this.config.attackRange * 2 && Math.random() < 0.005) {
          this._changeState(STATES.CIRCLE);
          break;
        }
        
        this._moveToward(player.mesh.position, this.config.moveSpeed, delta);
        this._faceTarget(player.mesh.position, delta);
        break;
        
      case STATES.CIRCLE:
        this.circleTimer += delta;
        if (this.circleTimer > 1.5 || distToPlayer > this.config.detectionRange) {
          this._changeState(STATES.CHASE);
          break;
        }
        if (distToPlayer <= this.config.attackRange) {
          this._changeState(STATES.ATTACK);
          break;
        }
        this._circleStrafe(player.mesh.position, delta);
        this._faceTarget(player.mesh.position, delta);
        break;
        
      case STATES.RETREAT:
        if (this.stateTimer > 2.0 || distToPlayer > this.config.detectionRange) {
          this._changeState(STATES.CHASE);
          break;
        }
        const awayDir = new THREE.Vector3().subVectors(this.mesh.position, player.mesh.position);
        awayDir.y = 0;
        awayDir.normalize();
        const retreatTarget = this.mesh.position.clone().add(awayDir.multiplyScalar(3));
        this._moveToward(retreatTarget, this.config.moveSpeed * 0.8, delta);
        this._faceTarget(player.mesh.position, delta);
        break;

      case STATES.ATTACK:
        this._processAttack(delta, player);
        break;

      case STATES.STAGGERED:
        // Wobble effect on the model
        if (this.gltfModel) {
          this.gltfModel.rotation.z = Math.sin(this.stateTimer * 15) * 0.1 * (1 - this.stateTimer / 1.5);
        } else if (this.fallbackBody) {
          this.fallbackBody.rotation.z = Math.sin(this.stateTimer * 15) * 0.1 * (1 - this.stateTimer / 1.5);
        }
        
        if (this.stateTimer >= 1.5) {
          this.posture = 0;
          if (this.gltfModel) this.gltfModel.rotation.z = 0;
          if (this.fallbackBody) this.fallbackBody.rotation.z = 0;
          this.breakIndicator.visible = false;
          this._updatePostureBar();
          this._changeState(distToPlayer < this.config.detectionRange ? STATES.CHASE : STATES.IDLE);
        }
        break;
        
      case STATES.DORMANT:
        // Dormant enemies don't do anything until triggered
        // Trigger check happens in EnemyManager
        break;
        
      case STATES.RISING:
        // Rising from sarcophagus - animate emergence
        if (this.stateTimer < 0.5) {
          // First half: rising motion
          const targetModel = this.gltfModel || this.fallbackBody;
          if (targetModel) {
            // Rise up from below
            const riseProgress = this.stateTimer / 0.5;
            targetModel.position.y = THREE.MathUtils.lerp(-0.8, 0, riseProgress);
          }
        } else if (this.stateTimer >= 0.8) {
          // Emergence complete - start chasing
          const targetModel = this.gltfModel || this.fallbackBody;
          if (targetModel) targetModel.position.y = 0;
          this.healthBarGroup.visible = true;
          this._changeState(STATES.CHASE);
        }
        // Face player while rising
        this._faceTarget(player.mesh.position, delta * 2);
        break;
    }

    // Posture regen
    if (this.state !== STATES.STAGGERED && this.posture > 0) {
      this.posture = Math.max(0, this.posture - 8 * delta);
      this._updatePostureBar();
    }
  }
  
  _circleStrafe(targetPos, delta) {
    const toTarget = new THREE.Vector3().subVectors(targetPos, this.mesh.position);
    toTarget.y = 0;
    const dist = toTarget.length();
    toTarget.normalize();
    
    const perp = new THREE.Vector3(-toTarget.z, 0, toTarget.x).multiplyScalar(this.circleDirection);
    const idealDist = this.config.attackRange * 1.5;
    const distCorrection = new THREE.Vector3().copy(toTarget).multiplyScalar((dist - idealDist) * 0.5);
    
    const moveDir = perp.add(distCorrection).normalize();
    this.mesh.position.addScaledVector(moveDir, this.config.moveSpeed * 0.7 * delta);
  }

  _processAttack(delta, player) {
    const windupTime = this.config.attackWindup;
    const strikeTime = windupTime + this.config.attackDuration;
    
    if (this.stateTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta * 2);
      return;
    }

    if (this.stateTimer >= windupTime && this.stateTimer < strikeTime) {
      if (!this.hitThisSwing) {
        const attackDir = new THREE.Vector3(
          Math.sin(this.mesh.rotation.y),
          0,
          Math.cos(this.mesh.rotation.y)
        );
        this.activeAttack = {
          position: this.mesh.position.clone().add(attackDir.multiplyScalar(1.0)).add(new THREE.Vector3(0, 1, 0)),
          range: this.config.attackRange,
          damage: this.config.damage,
          postureDmg: this.config.postureDmg,
        };
      }
    }

    if (this.stateTimer >= this.config.attackCooldown) {
      this.hitThisSwing = false;
      this.activeAttack = null;

      const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
      
      if (this.config.canChainAttacks && distToPlayer <= this.config.attackRange * 1.3) {
        this.chainAttackCount++;
        if (this.chainAttackCount < this.config.maxChainAttacks) {
          this._changeState(STATES.ATTACK);
          return;
        }
      }
      
      this.chainAttackCount = 0;
      
      if (distToPlayer <= this.config.attackRange) {
        this._changeState(STATES.ATTACK);
      } else {
        this._changeState(STATES.CHASE);
      }
    }
  }

  takeDamage(amount, postureDmg = 0, attackerPos = null) {
    if (this.state === STATES.DEAD) return 'dead';
    
    if (this.isBlocking) {
      amount = Math.floor(amount * 0.3);
      postureDmg = Math.floor(postureDmg * 0.5);
      this._flashModel(0x444466, 100);
    }

    if (this.state === STATES.STAGGERED) postureDmg *= 2;

    this.health -= amount;
    this.posture = Math.min(this.maxPosture, this.posture + postureDmg);
    
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('hitImpact', { 
        position: this.mesh.position, 
        volume: 0.6,
        variation: 0.15
      });
      this.gm.audioManager.playEnemyGrunt(this.mesh.position);
    }

    const ratio = Math.max(0, this.health / this.maxHealth);
    this.healthFill.scale.x = ratio;
    this.healthFill.position.x = -(1 - ratio) * 0.49 * 0.5;
    this.healthBarGroup.visible = true;
    
    this._updatePostureBar();

    this._flashModel(0x440000, 100);
    this._applyHitRecoil(attackerPos, amount);

    if (this.health <= 0) {
      this._die();
      return 'died';
    }

    if (this.posture >= this.maxPosture && this.state !== STATES.STAGGERED) {
      this._triggerPostureBreak();
      return 'staggered';
    }

    if (this.state === STATES.IDLE || this.state === STATES.PATROL) {
      this._changeState(STATES.CHASE);
    }

    return 'hit';
  }

  _flashModel(color, duration) {
    if (this.gltfModel) {
      this.gltfModel.traverse((child) => {
        if (child.isMesh && child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach(mat => {
            if (mat.emissive) {
              mat.emissive.setHex(color);
              mat.emissiveIntensity = 0.5;
            }
          });
        }
      });
      
      setTimeout(() => {
        this.gltfModel.traverse((child) => {
          if (child.isMesh && child.material) {
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            mats.forEach(mat => {
              if (mat.emissive) {
                mat.emissive.setHex(0x000000);
                mat.emissiveIntensity = 0;
              }
            });
          }
        });
      }, duration);
    } else if (this.fallbackBody && this.fallbackBody.material) {
      this.fallbackBody.material.emissive.setHex(color);
      setTimeout(() => this.fallbackBody.material.emissive.setHex(0x000000), duration);
    }
    
    if (this.eye && this.eye.material) {
      const origColor = this.eye.material.emissive.getHex();
      this.eye.material.emissive.setHex(color);
      setTimeout(() => this.eye.material.emissive.setHex(origColor), duration);
    }
  }
  
  _applyHitRecoil(attackerPos, damage) {
    let knockDir;
    if (attackerPos) {
      knockDir = new THREE.Vector3().subVectors(this.mesh.position, attackerPos);
      knockDir.y = 0;
      knockDir.normalize();
    } else {
      const faceAngle = this.mesh.rotation.y;
      knockDir = new THREE.Vector3(-Math.sin(faceAngle), 0, -Math.cos(faceAngle));
    }
    
    const recoilStrength = Math.min(0.5, damage * 0.015);
    const startPos = this.mesh.position.clone();
    const recoilPos = startPos.clone().add(knockDir.multiplyScalar(recoilStrength));
    
    const targetModel = this.gltfModel || this.fallbackBody;
    const originalTiltZ = targetModel ? targetModel.rotation.z : 0;
    const tiltDirection = Math.random() > 0.5 ? 1 : -1;
    if (targetModel) targetModel.rotation.z = originalTiltZ + tiltDirection * 0.15;
    
    let recoilTime = 0;
    const recoilDuration = 0.12;
    
    const animateRecoil = () => {
      recoilTime += 0.016;
      const t = Math.min(1, recoilTime / recoilDuration);
      const easeOut = 1 - Math.pow(1 - t, 3);
      
      this.mesh.position.lerpVectors(recoilPos, startPos, easeOut);
      
      if (targetModel) {
        targetModel.rotation.z = THREE.MathUtils.lerp(
          originalTiltZ + tiltDirection * 0.15,
          originalTiltZ,
          easeOut
        );
      }
      
      if (t < 1) {
        requestAnimationFrame(animateRecoil);
      }
    };
    
    this.mesh.position.copy(recoilPos);
    requestAnimationFrame(animateRecoil);
  }
  
  _triggerPostureBreak() {
    this._changeState(STATES.STAGGERED);
    this.breakIndicator.visible = true;
    
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('postureBreak', { 
        position: this.mesh.position, 
        volume: 0.7 
      });
    }
    
    this._flashModel(0xffcc00, 300);
    this.postureFill.material.color.setHex(0xff4400);
    setTimeout(() => this.postureFill.material.color.setHex(0xffcc00), 300);
  }
  
  _updatePostureBar() {
    const ratio = this.posture / this.maxPosture;
    this.postureFill.scale.x = ratio;
    this.postureFill.position.x = -(1 - ratio) * 0.49 * 0.5;
  }

  _die() {
    this.state = STATES.DEAD;
    this.isDead = true;
    this.health = 0;
    this.activeAttack = null;
    this.breakIndicator.visible = false;

    this._playAnimation(STATES.DEAD, { loop: false, clampWhenFinished: true });
    this.healthBarGroup.visible = false;

    // Fade out after death animation
    setTimeout(() => {
      this._fadeOutModel();
    }, 2000);
  }

  _fadeOutModel() {
    const targetModel = this.gltfModel || this.fallbackBody;
    if (!targetModel) return;

    // Make materials transparent
    targetModel.traverse((child) => {
      if (child.isMesh && child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach(mat => {
          mat.transparent = true;
        });
      }
    });

    const fadeOut = () => {
      let allFaded = true;
      targetModel.traverse((child) => {
        if (child.isMesh && child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach(mat => {
            if (mat.opacity > 0) {
              mat.opacity -= 0.02;
              allFaded = false;
            }
          });
        }
      });
      
      if (!allFaded) {
        requestAnimationFrame(fadeOut);
      } else {
        this.mesh.visible = false;
      }
    };
    
    fadeOut();
  }

  respawn() {
    this.health = this.maxHealth;
    this.posture = 0;
    this.isDead = false;
    this.stateTimer = 0;
    this.chainAttackCount = 0;
    this.circleTimer = 0;
    this.isBlocking = false;
    this.mesh.position.copy(this.spawnPos);
    
    // Check if this enemy should respawn dormant (ambush behavior)
    const shouldBeDormant = this.config.behavior === 'ambush' || this.config.isAmbush;
    this.isDormant = shouldBeDormant;
    this.state = shouldBeDormant ? STATES.DORMANT : STATES.IDLE;
    
    // Reset model
    const targetModel = this.gltfModel || this.fallbackBody;
    if (targetModel) {
      targetModel.rotation.x = 0;
      targetModel.rotation.z = 0;
      targetModel.position.y = 0;
      targetModel.traverse((child) => {
        if (child.isMesh && child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach(mat => {
            mat.opacity = 1;
            mat.transparent = false;
          });
        }
      });
    }
    
    // Dormant enemies stay hidden until triggered again
    this.mesh.visible = !shouldBeDormant;
    this.healthBarGroup.visible = false;
    this.breakIndicator.visible = false;
    this.healthFill.scale.x = 1;
    this.healthFill.position.x = 0;
    this.postureFill.scale.x = 0;
    this.postureFill.position.x = 0;
    
    this._playAnimation(shouldBeDormant ? STATES.DORMANT : STATES.IDLE, { loop: true });
  }

  _moveToward(target, speed, delta) {
    const dir = new THREE.Vector3().subVectors(target, this.mesh.position);
    dir.y = 0;
    if (dir.length() > 0.5) {
      dir.normalize();
      this.mesh.position.addScaledVector(dir, speed * delta);
    }
  }

  _faceTarget(target, delta) {
    const dir = new THREE.Vector3().subVectors(target, this.mesh.position);
    dir.y = 0;
    if (dir.length() > 0.1) {
      const angle = Math.atan2(dir.x, dir.z);
      this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, angle, 5 * delta);
    }
  }

  _pickPatrolTarget() {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * this.config.patrolRadius;
    this.patrolTarget.set(
      this.spawnPos.x + Math.cos(angle) * dist,
      0,
      this.spawnPos.z + Math.sin(angle) * dist
    );
  }

  _changeState(newState) {
    if (this.state === newState) return;
    if (this.state === STATES.ATTACK) {
      this.activeAttack = null;
      this.hitThisSwing = false;
    }
    if (newState === STATES.CIRCLE) {
      this.circleTimer = 0;
      this.circleDirection = Math.random() > 0.5 ? 1 : -1;
    }
    this.state = newState;
    this.stateTimer = 0;
    
    this._playAnimation(newState);
  }
}
