import * as THREE from 'three';

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
  comboWindow: 0.15, // Window after attack to chain combo
};

export class Player {
  constructor(scene, gameManager, inputManager) {
    this.scene = scene;
    this.gm = gameManager;
    this.input = inputManager;
    this.cameraController = null; // Set via setCameraController()

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

    // Directions
    this.moveDir = new THREE.Vector3();
    this.dodgeDir = new THREE.Vector3();
    this.facingAngle = 0;

    // Create mesh
    this.mesh = new THREE.Group();
    this.mesh.position.set(0, 0, 5);

    // Body
    const bodyGeo = new THREE.CapsuleGeometry(0.35, 1.0, 8, 16);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x3a3a44,
      roughness: 0.6,
      metalness: 0.3,
    });
    this.body = new THREE.Mesh(bodyGeo, bodyMat);
    this.body.position.y = 1.1;
    this.body.castShadow = true;
    this.mesh.add(this.body);

    // Visor (glowing eye slit)
    const visorGeo = new THREE.BoxGeometry(0.3, 0.06, 0.08);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x66aaff,
      emissive: 0x3366cc,
      emissiveIntensity: 2,
    });
    this.visor = new THREE.Mesh(visorGeo, visorMat);
    this.visor.position.set(0, 1.75, 0.3);
    this.mesh.add(this.visor);

    // Weapon (sword on right)
    const swordGeo = new THREE.BoxGeometry(0.05, 0.8, 0.05);
    const swordMat = new THREE.MeshStandardMaterial({
      color: 0xaaaaaa,
      metalness: 0.8,
      roughness: 0.2,
    });
    this.sword = new THREE.Mesh(swordGeo, swordMat);
    this.sword.position.set(0.45, 1.2, 0);
    this.sword.castShadow = true;
    this.mesh.add(this.sword);

    // Hitbox (invisible sphere for attack detection)
    this.attackRange = 2.0;
    this.lightDamage = 15;
    this.heavyDamage = 35;
    this.lightPostureDmg = 10;
    this.heavyPostureDmg = 25;

    scene.add(this.mesh);
  }

  update(delta) {
    if (this.gm.isDead) {
      this.state = STATES.DEAD;
      return;
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

    // Gravity
    if (this.mesh.position.y > 0) {
      this.velocity.y += this.gravity * delta;
      this.mesh.position.y += this.velocity.y * delta;
      if (this.mesh.position.y <= 0) {
        this.mesh.position.y = 0;
        this.velocity.y = 0;
        this.grounded = true;
      }
    }

    // Animate sword based on state
    this._animateSword(delta);
  }

  _processMovement(delta) {
    const move = this.input.getMovementVector();

    if (move.x !== 0 || move.z !== 0) {
      // Get camera-relative direction
      const camYaw = this._getCameraYaw();
      const forward = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
      const right = new THREE.Vector3(-Math.cos(camYaw), 0, Math.sin(camYaw));

      this.moveDir.set(0, 0, 0)
        .addScaledVector(forward, -move.z)
        .addScaledVector(right, move.x)
        .normalize();

      this.mesh.position.addScaledVector(this.moveDir, this.moveSpeed * delta);

      // Face movement direction
      this.facingAngle = Math.atan2(this.moveDir.x, this.moveDir.z);
      this.body.rotation.y = THREE.MathUtils.lerp(
        this.body.rotation.y,
        this.facingAngle,
        10 * delta
      );

      if (this.state !== STATES.MOVING) this._changeState(STATES.MOVING);
    } else {
      if (this.state === STATES.MOVING) this._changeState(STATES.IDLE);
    }
  }

  _processCombatInput() {
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

  _startDodge() {
    this.gm.useStamina(COSTS.dodge);
    // Play dodge sound
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
      // Dodge backward
      this.dodgeDir.set(-Math.sin(this.facingAngle), 0, -Math.cos(this.facingAngle));
    }

    this.isInvincible = true;
    this._changeState(STATES.DODGING);
  }

  _processDodge(delta) {
    const progress = this.stateTimer / TIMINGS.dodgeDuration;
    const speedCurve = Math.sin(progress * Math.PI);

    this.mesh.position.addScaledVector(this.dodgeDir, this.dodgeSpeed * speedCurve * delta);

    // End iframes
    if (this.stateTimer >= TIMINGS.dodgeIframes) this.isInvincible = false;

    // End dodge
    if (this.stateTimer >= TIMINGS.dodgeDuration) {
      this.isInvincible = false;
      this._changeState(STATES.IDLE);
    }

    // Visual: lower body during dodge
    this.body.position.y = 1.1 - (speedCurve * 0.4);
  }

  _startAttack(isHeavy) {
    const cost = isHeavy ? COSTS.heavyAttack : COSTS.lightAttack;
    this.gm.useStamina(cost);
    this.hitThisSwing = false;
    
    // Play sword swing sound
    if (this.gm.audioManager) {
      this.gm.audioManager.play('swordSwing', { 
        position: this.mesh.position, 
        volume: 0.5,
        pitch: isHeavy ? 0.8 : 1.0,
        variation: 0.1
      });
    }
    
    // Face camera direction when attacking (so attacks go where you're looking)
    const camYaw = this._getCameraYaw();
    this.facingAngle = camYaw;
    this.body.rotation.y = camYaw;
    
    // Spawn slash trail particle effect
    if (this.gm.particleManager) {
      const attackDir = new THREE.Vector3(Math.sin(camYaw), 0, Math.cos(camYaw));
      this.gm.particleManager.spawnSlashTrail(this.mesh.position.clone(), attackDir, isHeavy);
    }
    
    this._changeState(isHeavy ? STATES.HEAVY_ATTACKING : STATES.ATTACKING);
  }

  _processAttack(delta) {
    const isHeavy = this.state === STATES.HEAVY_ATTACKING;
    const duration = isHeavy ? TIMINGS.heavyAttackDuration : TIMINGS.lightAttackDuration;
    const hitStart = isHeavy ? TIMINGS.heavyHitStart : TIMINGS.lightHitStart;
    const hitEnd = isHeavy ? TIMINGS.heavyHitEnd : TIMINGS.lightHitEnd;

    // Active hitbox window
    if (this.stateTimer >= hitStart && this.stateTimer < hitEnd && !this.hitThisSwing) {
      this._checkHit(isHeavy);
    }

    // Combo window at end of light attack
    if (!isHeavy && this.stateTimer > duration - TIMINGS.comboWindow && this.stateTimer < duration) {
      if (this.input.lightAttack && this.gm.canUseStamina(COSTS.lightAttack)) {
        this.attackCombo = (this.attackCombo + 1) % 3;
        this._startAttack(false);
        return;
      }
    }

    // Slight forward movement during attack
    const fwd = new THREE.Vector3(Math.sin(this.facingAngle), 0, Math.cos(this.facingAngle));
    const lungeSpeed = isHeavy ? 3 : 2;
    if (this.stateTimer < hitEnd) {
      this.mesh.position.addScaledVector(fwd, lungeSpeed * delta);
    }

    if (this.stateTimer >= duration) {
      this.attackCombo = 0;
      this._changeState(STATES.IDLE);
    }
  }

  _checkHit(isHeavy) {
    // Will be called by EnemyManager to check hits
    // Store attack data for external hit checking
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
    // Slow movement while blocking
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

  _animateSword(delta) {
    const t = this.stateTimer;
    switch (this.state) {
      case STATES.ATTACKING: {
        // Quick slash
        const swing = Math.sin(t / TIMINGS.lightAttackDuration * Math.PI);
        this.sword.rotation.z = -swing * 1.5;
        this.sword.rotation.x = swing * 0.5;
        this.sword.position.set(0.45 + swing * 0.3, 1.2 + swing * 0.3, swing * 0.5);
        break;
      }
      case STATES.HEAVY_ATTACKING: {
        // Overhead slam
        const swing = Math.sin(t / TIMINGS.heavyAttackDuration * Math.PI);
        this.sword.rotation.z = -swing * 2.0;
        this.sword.rotation.x = swing * 1.2;
        this.sword.position.set(0.45, 1.2 + swing * 0.6, swing * 0.8);
        break;
      }
      case STATES.BLOCKING: {
        this.sword.rotation.z = -0.3;
        this.sword.position.set(0.2, 1.3, 0.3);
        break;
      }
      default: {
        // Rest position
        this.sword.rotation.z = THREE.MathUtils.lerp(this.sword.rotation.z, 0, 5 * delta);
        this.sword.rotation.x = THREE.MathUtils.lerp(this.sword.rotation.x, 0, 5 * delta);
        this.sword.position.lerp(new THREE.Vector3(0.45, 1.2, 0), 5 * delta);
      }
    }
  }

  _changeState(newState) {
    if (this.state === newState) return;
    // Cleanup old state
    if (this.state === STATES.ATTACKING || this.state === STATES.HEAVY_ATTACKING) {
      this.activeAttack = null;
    }
    if (this.state === STATES.DODGING) {
      this.body.position.y = 1.1;
    }

    this.state = newState;
    this.stateTimer = 0;
  }

  setCameraController(cameraController) {
    this.cameraController = cameraController;
  }

  _getCameraYaw() {
    // Get yaw directly from camera controller
    if (this.cameraController) {
      return this.cameraController.yaw;
    }
    return 0;
  }

  // Called when respawning
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

  // Visual feedback when taking damage
  flashDamage() {
    // Flash body red on hit
    this.body.material.emissive.setHex(0x660000);
    setTimeout(() => this.body.material.emissive.setHex(0x000000), 150);
    
    // Also flash visor white briefly
    const originalVisorColor = this.visor.material.emissive.getHex();
    this.visor.material.emissive.setHex(0xff4444);
    setTimeout(() => this.visor.material.emissive.setHex(originalVisorColor), 100);
  }
}
