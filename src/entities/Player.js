import * as THREE from 'three';
import { AssetManager } from '../systems/AssetManager.js';

const STATES = {
  IDLE: 'idle',
  MOVING: 'moving',
  DODGING: 'dodging',
  ATTACKING: 'attacking',
  HEAVY_ATTACKING: 'heavy_attacking',
  BLOCKING: 'blocking',
  STAGGERED: 'staggered',
  DEAD: 'dead',
};

const COSTS = {
  dodge: 20,
  lightAttack: 15,
  heavyAttack: 30,
};

const TIMINGS = {
  dodgeDuration: 0.45,
  dodgeIframes: 0.3,
  lightAttackDuration: 0.4,
  heavyAttackDuration: 0.7,
  lightHitStart: 0.1,
  lightHitEnd: 0.25,
  heavyHitStart: 0.2,
  heavyHitEnd: 0.4,
  staggerDuration: 0.8,
  comboWindow: 0.15,
};

// Animation name mapping for robot_expressive.glb
const ANIM_MAP = {
  [STATES.IDLE]: 'Idle',
  [STATES.MOVING]: 'Walking',
  [STATES.DODGING]: 'Jump',
  [STATES.ATTACKING]: 'Punch',
  [STATES.HEAVY_ATTACKING]: 'Punch',
  [STATES.BLOCKING]: 'Idle', // Use idle with modified pose
  [STATES.STAGGERED]: 'No',
  [STATES.DEAD]: 'Death',
};

export class Player {
  constructor(scene, gameManager, inputManager) {
    this.scene = scene;
    this.gm = gameManager;
    this.input = inputManager;
    this.cameraController = null;
    this.world = null; // Set by GameManager after world is created

    this.state = STATES.IDLE;
    this.stateTimer = 0;
    this.isInvincible = false;
    this.attackCombo = 0;
    this.hitThisSwing = false;

    // Physics
    this.velocity = new THREE.Vector3();
    this.moveSpeed = 6;
    this.dodgeSpeed = 14;
    this.gravity = -30;
    this.grounded = true;
    this.collisionRadius = 0.4;
    
    // Movement smoothing
    this.currentMoveVelocity = new THREE.Vector3();
    this.moveAcceleration = 35;
    this.moveDeceleration = 25;
    
    // Dodge visual effect tracking
    this.dodgeGhostMeshes = [];
    this.lastGhostSpawnTime = 0;
    this.ghostSpawnInterval = 0.05;

    // Directions
    this.moveDir = new THREE.Vector3();
    this.dodgeDir = new THREE.Vector3();
    this.facingAngle = 0;

    // GLTF model state
    this.modelLoaded = false;
    this.animSystem = null;
    this.currentAnim = null;
    this.gltfModel = null;

    // Create mesh container
    this.mesh = new THREE.Group();
    this.mesh.position.set(0, 0, 5);

    // Create fallback primitive mesh (visible while GLTF loads)
    this._createFallbackMesh();

    // Hitbox stats
    this.attackRange = 2.0;
    this.lightDamage = 15;
    this.heavyDamage = 35;
    this.lightPostureDmg = 10;
    this.heavyPostureDmg = 25;

    scene.add(this.mesh);

    // Load GLTF model asynchronously
    this._loadGLTFModel();
  }

  _createFallbackMesh() {
    // Simple placeholder while model loads
    const armorMat = new THREE.MeshStandardMaterial({
      color: 0x5a5a68,
      roughness: 0.35,
      metalness: 0.85,
    });

    // Body capsule
    const bodyGeo = new THREE.CapsuleGeometry(0.35, 0.6, 8, 16);
    this.fallbackBody = new THREE.Mesh(bodyGeo, armorMat);
    this.fallbackBody.position.y = 1.1;
    this.fallbackBody.castShadow = true;
    this.mesh.add(this.fallbackBody);

    // Head
    const headGeo = new THREE.SphereGeometry(0.22, 16, 12);
    this.fallbackHead = new THREE.Mesh(headGeo, armorMat);
    this.fallbackHead.position.y = 1.7;
    this.mesh.add(this.fallbackHead);

    // Glowing visor
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x66ccff,
      emissive: 0x4488cc,
      emissiveIntensity: 3,
    });
    const visorGeo = new THREE.BoxGeometry(0.2, 0.04, 0.12);
    this.visor = new THREE.Mesh(visorGeo, visorMat);
    this.visor.position.set(0, 1.68, 0.25);
    this.mesh.add(this.visor);

    // Reference for damage flash
    this.body = this.fallbackBody;
  }

  async _loadGLTFModel() {
    try {
      const basePath = import.meta.env.BASE_URL || '/';
      const { scene: model, animations } = await AssetManager.loadModel(
        `${basePath}assets/models/robot_expressive.glb`,
        { scale: 0.8 }
      );

      // Store reference
      this.gltfModel = model;
      this.gltfModel.position.y = 0;
      this.gltfModel.rotation.y = Math.PI; // Face forward

      // Set up materials for damage flash and tone down brightness
      this.gltfModel.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          // Tone down the model's brightness significantly to match dark environment
          if (child.material) {
            // Darken base color substantially
            if (child.material.color) {
              child.material.color.multiplyScalar(0.35);  // Much darker
            }
            // Ensure no accidental emission
            if (child.material.emissive) {
              child.material.emissive.setHex(0x000000);
              child.material.emissiveIntensity = 0;
            }
            // Reduce metalness to prevent excessive reflections
            if (child.material.metalness !== undefined) {
              child.material.metalness = Math.min(0.3, child.material.metalness);
            }
          }
          // Store original material for flash effects
          child.userData.originalMaterial = child.material.clone();
        }
      });

      // Hide all fallback meshes when GLTF loads
      if (this.fallbackBody) this.fallbackBody.visible = false;
      if (this.fallbackHead) this.fallbackHead.visible = false;
      if (this.visor) this.visor.visible = false;

      // Add GLTF model to mesh group
      this.mesh.add(this.gltfModel);

      // Set up animation system
      if (animations && animations.length > 0) {
        this.animSystem = AssetManager.createAnimationSystem(this.gltfModel, animations);
        // Play idle animation
        this._playAnimation(STATES.IDLE, { loop: true });
      }

      this.modelLoaded = true;
      this.body = this.gltfModel; // Update body reference for effects

    } catch (error) {
      console.error('[Player] Failed to load GLTF model:', error);
      // Keep using fallback mesh
    }
  }

  _playAnimation(state, options = {}) {
    if (!this.animSystem) return;

    const animName = ANIM_MAP[state];
    if (!animName) return;

    // Don't restart same animation
    if (this.currentAnim === animName && state !== STATES.ATTACKING) return;

    const defaultOptions = {
      loop: state === STATES.IDLE || state === STATES.MOVING || state === STATES.BLOCKING,
      fadeIn: 0.2,
      timeScale: 1.0,
      clampWhenFinished: state === STATES.DEAD,
    };

    // Speed adjustments per state
    if (state === STATES.ATTACKING) {
      defaultOptions.timeScale = 1.3 + (this.attackCombo * 0.1);
      defaultOptions.loop = false;
    } else if (state === STATES.HEAVY_ATTACKING) {
      defaultOptions.timeScale = 0.9;
      defaultOptions.loop = false;
    } else if (state === STATES.DODGING) {
      defaultOptions.timeScale = 1.5;
      defaultOptions.loop = false;
    } else if (state === STATES.MOVING) {
      defaultOptions.timeScale = 1.2;
    }

    const mergedOptions = { ...defaultOptions, ...options };

    if (this.currentAnim) {
      this.animSystem.crossFade(this.currentAnim, animName, mergedOptions.fadeIn);
    } else {
      this.animSystem.play(animName, mergedOptions);
    }

    this.currentAnim = animName;
  }

  update(delta) {
    if (this.gm.isDead) {
      this.state = STATES.DEAD;
      if (this.currentAnim !== 'Death') {
        this._playAnimation(STATES.DEAD);
      }
      return;
    }

    // Update animation mixer
    if (this.animSystem) {
      this.animSystem.update(delta);
    }

    this.stateTimer += delta;

    switch (this.state) {
      case STATES.IDLE:
      case STATES.MOVING:
        this._processMovement(delta);
        this._processCombatInput();
        break;
      case STATES.DODGING:
        this._processDodge(delta);
        break;
      case STATES.ATTACKING:
      case STATES.HEAVY_ATTACKING:
        this._processAttack(delta);
        break;
      case STATES.BLOCKING:
        this._processBlock(delta);
        break;
      case STATES.STAGGERED:
        if (this.stateTimer >= TIMINGS.staggerDuration) this._changeState(STATES.IDLE);
        break;
      case STATES.DEAD:
        break;
    }

    // Floor collision and gravity
    if (this.world) {
      // Get floor Y at current position
      const floorY = this.world.getFloorY(this.mesh.position.x, this.mesh.position.z);
      
      if (this.mesh.position.y > floorY) {
        // Above floor - apply gravity
        this.velocity.y += this.gravity * delta;
        this.mesh.position.y += this.velocity.y * delta;
        if (this.mesh.position.y <= floorY) {
          this.mesh.position.y = floorY;
          this.velocity.y = 0;
          this.grounded = true;
        } else {
          this.grounded = false;
        }
      } else if (this.mesh.position.y < floorY) {
        // Below floor (going up stairs) - smoothly rise
        this.mesh.position.y = THREE.MathUtils.lerp(this.mesh.position.y, floorY, 8 * delta);
        this.velocity.y = 0;
        this.grounded = true;
      } else {
        // On floor
        this.velocity.y = 0;
        this.grounded = true;
      }
    } else {
      // Fallback: old gravity behavior (Y=0 floor)
      if (this.mesh.position.y > 0) {
        this.velocity.y += this.gravity * delta;
        this.mesh.position.y += this.velocity.y * delta;
        if (this.mesh.position.y <= 0) {
          this.mesh.position.y = 0;
          this.velocity.y = 0;
          this.grounded = true;
        }
      }
    }
  }

  _processMovement(delta) {
    const move = this.input.getMovementVector();

    if (move.x !== 0 || move.z !== 0) {
      const camYaw = this._getCameraYaw();
      const forward = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
      const right = new THREE.Vector3(Math.cos(camYaw), 0, -Math.sin(camYaw));

      this.moveDir.set(0, 0, 0)
        .addScaledVector(forward, -move.z)
        .addScaledVector(right, move.x)
        .normalize();

      const targetVelocity = this.moveDir.clone().multiplyScalar(this.moveSpeed);
      this.currentMoveVelocity.lerp(targetVelocity, this.moveAcceleration * delta);
      this.mesh.position.addScaledVector(this.currentMoveVelocity, delta);

      // Apply wall collision
      this._applyWallCollision();

      this.facingAngle = Math.atan2(this.moveDir.x, this.moveDir.z);
      this.mesh.rotation.y = THREE.MathUtils.lerp(
        this.mesh.rotation.y,
        this.facingAngle,
        10 * delta
      );

      if (this.state !== STATES.MOVING) this._changeState(STATES.MOVING);
    } else {
      if (this.currentMoveVelocity.length() > 0.01) {
        this.currentMoveVelocity.lerp(new THREE.Vector3(0, 0, 0), this.moveDeceleration * delta);
        this.mesh.position.addScaledVector(this.currentMoveVelocity, delta);
        
        // Apply wall collision even when decelerating
        this._applyWallCollision();
      } else {
        this.currentMoveVelocity.set(0, 0, 0);
      }
      
      if (this.state === STATES.MOVING) this._changeState(STATES.IDLE);
    }
  }
  
  /**
   * Apply wall collision - push player out of walls
   */
  _applyWallCollision() {
    if (!this.world) return;
    
    const pushOut = this.world.checkWallCollision(this.mesh.position, this.collisionRadius);
    if (pushOut) {
      this.mesh.position.add(pushOut);
    }
  }
  
  /**
   * Apply floor collision - snap player to correct Y level
   */
  _applyFloorCollision() {
    if (!this.world) return;
    
    const floorY = this.world.getFloorY(this.mesh.position.x, this.mesh.position.z);
    
    // Smooth vertical transition for stairs
    const yDiff = floorY - this.mesh.position.y;
    if (Math.abs(yDiff) < 0.1) {
      // Close enough, snap
      this.mesh.position.y = floorY;
    } else if (yDiff > 0) {
      // Going up (shouldn't happen much)
      this.mesh.position.y = THREE.MathUtils.lerp(this.mesh.position.y, floorY, 0.3);
    } else {
      // Going down (stairs)
      this.mesh.position.y = THREE.MathUtils.lerp(this.mesh.position.y, floorY, 0.2);
    }
  }

  _processCombatInput() {
    if (this.input.lockOn) {
      this._toggleLockOn();
    }
    
    if (this.input.dodge && this.gm.canUseStamina(COSTS.dodge)) {
      this._startDodge();
      return;
    }
    if (this.input.lightAttack && this.gm.canUseStamina(COSTS.lightAttack)) {
      this._startAttack(false);
      return;
    }
    if (this.input.heavyAttack && this.gm.canUseStamina(COSTS.heavyAttack)) {
      this._startAttack(true);
      return;
    }
    if (this.input.block) {
      this._changeState(STATES.BLOCKING);
    }
  }
  
  _toggleLockOn() {
    if (!this.cameraController || !this.gm.enemyManager) return;
    
    const enemies = this.gm.enemyManager.enemies;
    const livingEnemies = enemies.filter(e => !e.isDead);
    
    if (this.gm.enemyManager.boss && !this.gm.enemyManager.boss.isDead) {
      livingEnemies.push(this.gm.enemyManager.boss);
    }
    
    if (livingEnemies.length === 0) {
      this.cameraController.clearLockOn();
      return;
    }
    
    const lockOnRange = 20;
    const playerPos = this.mesh.position;
    const validTargets = livingEnemies
      .map(e => ({
        enemy: e,
        dist: playerPos.distanceTo(e.mesh.position)
      }))
      .filter(t => t.dist <= lockOnRange)
      .sort((a, b) => a.dist - b.dist);
    
    if (validTargets.length === 0) {
      this.cameraController.clearLockOn();
      return;
    }
    
    const currentTarget = this.cameraController.lockOnTarget;
    
    if (currentTarget && !currentTarget.isDead) {
      const currentIdx = validTargets.findIndex(t => t.enemy === currentTarget);
      if (currentIdx !== -1 && validTargets.length > 1) {
        const nextIdx = (currentIdx + 1) % validTargets.length;
        this.cameraController.setLockOnTarget(validTargets[nextIdx].enemy);
        if (this.gm.audioManager) {
          this.gm.audioManager.play('menuSelect', { volume: 0.3 });
        }
      } else {
        this.cameraController.clearLockOn();
        if (this.gm.audioManager) {
          this.gm.audioManager.play('menuBack', { volume: 0.3 });
        }
      }
    } else {
      this.cameraController.setLockOnTarget(validTargets[0].enemy);
      if (this.gm.audioManager) {
        this.gm.audioManager.play('menuSelect', { volume: 0.4 });
      }
    }
  }

  _startDodge() {
    this.gm.useStamina(COSTS.dodge);
    if (this.gm.audioManager) {
      this.gm.audioManager.play('dodge', { 
        position: this.mesh.position, 
        volume: 0.5 
      });
    }
    const move = this.input.getMovementVector();

    if (move.x !== 0 || move.z !== 0) {
      const camYaw = this._getCameraYaw();
      const forward = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
      const right = new THREE.Vector3(-Math.cos(camYaw), 0, Math.sin(camYaw));
      this.dodgeDir.set(0, 0, 0)
        .addScaledVector(forward, -move.z)
        .addScaledVector(right, move.x)
        .normalize();
    } else {
      this.dodgeDir.set(-Math.sin(this.facingAngle), 0, -Math.cos(this.facingAngle));
    }

    this.isInvincible = true;
    this.lastGhostSpawnTime = 0;
    this._flashDodgeStart();
    this._changeState(STATES.DODGING);
  }
  
  _flashDodgeStart() {
    this._flashModel(0x00ffff, 100);
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
    }
    
    // Also flash visor
    if (this.visor && this.visor.material) {
      const origColor = this.visor.material.emissive.getHex();
      this.visor.material.emissive.setHex(color);
      this.visor.material.emissiveIntensity = 8;
      setTimeout(() => {
        this.visor.material.emissive.setHex(origColor);
        this.visor.material.emissiveIntensity = 3;
      }, duration);
    }
  }
  
  _spawnDodgeGhost() {
    const ghostGroup = new THREE.Group();
    
    const ghostMat = new THREE.MeshBasicMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });
    
    // Clone visible meshes for ghost
    if (this.gltfModel) {
      this.gltfModel.traverse((child) => {
        if (child.isMesh && child.visible) {
          const ghostMesh = new THREE.Mesh(child.geometry.clone(), ghostMat);
          ghostMesh.position.copy(child.position);
          ghostMesh.rotation.copy(child.rotation);
          ghostMesh.scale.copy(child.scale);
          ghostGroup.add(ghostMesh);
        }
      });
    } else {
      // Fallback ghost
      const bodyGeo = new THREE.CapsuleGeometry(0.35, 0.6, 4, 8);
      const bodyGhost = new THREE.Mesh(bodyGeo, ghostMat);
      bodyGhost.position.y = 1.1;
      ghostGroup.add(bodyGhost);
    }
    
    ghostGroup.position.copy(this.mesh.position);
    ghostGroup.rotation.y = this.mesh.rotation.y;
    
    this.scene.add(ghostGroup);
    
    this.dodgeGhostMeshes.push({
      mesh: ghostGroup,
      material: ghostMat,
      spawnTime: Date.now(),
      lifetime: 200,
    });
  }
  
  _updateDodgeGhosts() {
    const now = Date.now();
    
    for (let i = this.dodgeGhostMeshes.length - 1; i >= 0; i--) {
      const ghost = this.dodgeGhostMeshes[i];
      const age = now - ghost.spawnTime;
      
      if (age > ghost.lifetime) {
        this.scene.remove(ghost.mesh);
        ghost.mesh.traverse(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
        this.dodgeGhostMeshes.splice(i, 1);
      } else {
        const fadeProgress = age / ghost.lifetime;
        ghost.material.opacity = 0.4 * (1 - fadeProgress);
      }
    }
  }

  _processDodge(delta) {
    const progress = this.stateTimer / TIMINGS.dodgeDuration;
    const speedCurve = Math.sin(progress * Math.PI);

    this.mesh.position.addScaledVector(this.dodgeDir, this.dodgeSpeed * speedCurve * delta);
    
    // Apply wall collision during dodge
    this._applyWallCollision();
    
    this.lastGhostSpawnTime += delta;
    if (this.isInvincible && this.lastGhostSpawnTime >= this.ghostSpawnInterval) {
      this._spawnDodgeGhost();
      this.lastGhostSpawnTime = 0;
    }
    
    this._updateDodgeGhosts();

    if (this.stateTimer >= TIMINGS.dodgeIframes && this.isInvincible) {
      this.isInvincible = false;
      this._flashDodgeEnd();
    }

    if (this.stateTimer >= TIMINGS.dodgeDuration) {
      this.isInvincible = false;
      this._changeState(STATES.IDLE);
    }
  }
  
  _flashDodgeEnd() {
    this._flashModel(0x222222, 50);
  }

  _startAttack(isHeavy) {
    const cost = isHeavy ? COSTS.heavyAttack : COSTS.lightAttack;
    this.gm.useStamina(cost);
    this.hitThisSwing = false;
    
    if (this.gm.audioManager) {
      this.gm.audioManager.play('swordSwing', { 
        position: this.mesh.position, 
        volume: 0.5,
        pitch: isHeavy ? 0.8 : 1.0,
        variation: 0.1
      });
    }
    
    const camYaw = this._getCameraYaw();
    this.facingAngle = camYaw;
    this.mesh.rotation.y = camYaw;
    
    if (this.gm.particleManager) {
      // Slash trail disabled - was creating visual artifacts
      // const attackDir = new THREE.Vector3(Math.sin(camYaw), 0, Math.cos(camYaw));
      // this.gm.particleManager.spawnSlashTrail(this.mesh.position.clone(), attackDir, isHeavy);
    }
    
    this._changeState(isHeavy ? STATES.HEAVY_ATTACKING : STATES.ATTACKING);
  }

  _processAttack(delta) {
    const isHeavy = this.state === STATES.HEAVY_ATTACKING;
    const duration = isHeavy ? TIMINGS.heavyAttackDuration : TIMINGS.lightAttackDuration;
    const hitStart = isHeavy ? TIMINGS.heavyHitStart : TIMINGS.lightHitStart;
    const hitEnd = isHeavy ? TIMINGS.heavyHitEnd : TIMINGS.lightHitEnd;

    if (this.stateTimer >= hitStart && this.stateTimer < hitEnd && !this.hitThisSwing) {
      this._checkHit(isHeavy);
    }

    if (!isHeavy && this.stateTimer > duration - TIMINGS.comboWindow && this.stateTimer < duration) {
      if (this.input.lightAttack && this.gm.canUseStamina(COSTS.lightAttack)) {
        this.attackCombo = (this.attackCombo + 1) % 3;
        this._startAttack(false);
        return;
      }
    }

    // Forward direction must match movement formula (negative sin/cos)
    const fwd = new THREE.Vector3(-Math.sin(this.facingAngle), 0, -Math.cos(this.facingAngle));
    const lungeSpeed = isHeavy ? 3 : 2;
    if (this.stateTimer < hitEnd) {
      this.mesh.position.addScaledVector(fwd, lungeSpeed * delta);
      // Apply wall collision during attack lunge
      this._applyWallCollision();
    }

    if (this.stateTimer >= duration) {
      this.attackCombo = 0;
      this._changeState(STATES.IDLE);
    }
  }

  _checkHit(isHeavy) {
    this.activeAttack = {
      position: this.mesh.position.clone().add(
        new THREE.Vector3(Math.sin(this.facingAngle), 1, Math.cos(this.facingAngle)).multiplyScalar(1.2)
      ),
      range: this.attackRange,
      damage: isHeavy ? this.heavyDamage : this.lightDamage,
      postureDmg: isHeavy ? this.heavyPostureDmg : this.lightPostureDmg,
      isHeavy,
    };
  }

  _processBlock(delta) {
    if (!this.input.block) {
      this._changeState(STATES.IDLE);
    }
    const move = this.input.getMovementVector();
    if (move.x !== 0 || move.z !== 0) {
      const camYaw = this._getCameraYaw();
      const forward = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
      const right = new THREE.Vector3(-Math.cos(camYaw), 0, Math.sin(camYaw));
      const dir = new THREE.Vector3()
        .addScaledVector(forward, -move.z)
        .addScaledVector(right, move.x)
        .normalize();
      this.mesh.position.addScaledVector(dir, this.moveSpeed * 0.3 * delta);
    }
  }

  _changeState(newState) {
    if (this.state === newState) return;
    
    // Cleanup old state
    if (this.state === STATES.ATTACKING || this.state === STATES.HEAVY_ATTACKING) {
      this.activeAttack = null;
    }

    this.state = newState;
    this.stateTimer = 0;

    // Play animation for new state
    this._playAnimation(newState);
  }

  setCameraController(cameraController) {
    this.cameraController = cameraController;
  }

  setWorld(world) {
    this.world = world;
  }

  _getCameraYaw() {
    if (this.cameraController) {
      return this.cameraController.yaw;
    }
    return 0;
  }

  resetPosition() {
    this.mesh.position.copy(this.gm.checkpoint);
    this.velocity.set(0, 0, 0);
    this._changeState(STATES.IDLE);
  }

  get isBlocking() {
    return this.state === STATES.BLOCKING;
  }

  get isAttacking() {
    return this.state === STATES.ATTACKING || this.state === STATES.HEAVY_ATTACKING;
  }

  get isDead() {
    return this.state === STATES.DEAD;
  }

  flashDamage() {
    this._flashModel(0x660000, 150);
  }
}
