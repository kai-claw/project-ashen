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
    
    // Movement smoothing (acceleration/deceleration)
    this.currentMoveVelocity = new THREE.Vector3();
    this.moveAcceleration = 35; // How fast we reach max speed
    this.moveDeceleration = 25; // How fast we stop
    
    // Dodge visual effect tracking
    this.dodgeGhostMeshes = [];
    this.lastGhostSpawnTime = 0;
    this.ghostSpawnInterval = 0.05; // Spawn ghost every 50ms during dodge
    
    // Animation blending for smooth transitions
    this.animationBlend = 0; // 0 = previous pose, 1 = new pose
    this.animationBlendSpeed = 12; // How fast to blend between poses
    this.prevSwordPos = new THREE.Vector3(0.45, 1.2, 0);
    this.prevSwordRotZ = 0;
    this.prevSwordRotX = 0;
    this.targetSwordPos = new THREE.Vector3(0.45, 1.2, 0);
    this.targetSwordRotZ = 0;
    this.targetSwordRotX = 0;
    
    // Body animation tracking
    this.bodyTilt = 0; // Forward/back lean
    this.bodyTwist = 0; // Left/right rotation for attacks
    this.walkBobPhase = 0; // Walking animation cycle

    // Directions
    this.moveDir = new THREE.Vector3();
    this.dodgeDir = new THREE.Vector3();
    this.facingAngle = 0;

    // Create mesh
    this.mesh = new THREE.Group();
    this.mesh.position.set(0, 0, 5);

    // Materials - metallic armor
    const armorMat = new THREE.MeshStandardMaterial({
      color: 0x5a5a68,
      roughness: 0.35,
      metalness: 0.85,
    });
    
    const darkArmorMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a35,
      roughness: 0.5,
      metalness: 0.7,
    });
    
    const goldTrimMat = new THREE.MeshStandardMaterial({
      color: 0xccaa55,
      roughness: 0.3,
      metalness: 0.9,
      emissive: 0x332200,
      emissiveIntensity: 0.2,
    });
    
    const cloakMat = new THREE.MeshStandardMaterial({
      color: 0x1a1520,
      roughness: 0.9,
      metalness: 0.0,
      side: THREE.DoubleSide,
    });

    // === TORSO (armored chestplate) ===
    const torsoGeo = new THREE.CapsuleGeometry(0.35, 0.6, 8, 16);
    this.body = new THREE.Mesh(torsoGeo, armorMat);
    this.body.position.y = 1.1;
    this.body.castShadow = true;
    this.mesh.add(this.body);
    
    // Chest plate detail
    const chestGeo = new THREE.BoxGeometry(0.5, 0.5, 0.25);
    const chest = new THREE.Mesh(chestGeo, darkArmorMat);
    chest.position.set(0, 1.15, 0.18);
    chest.castShadow = true;
    this.mesh.add(chest);
    
    // Gold chest trim
    const trimGeo = new THREE.TorusGeometry(0.25, 0.03, 4, 8);
    const trim = new THREE.Mesh(trimGeo, goldTrimMat);
    trim.position.set(0, 1.15, 0.3);
    trim.rotation.x = Math.PI / 2;
    this.mesh.add(trim);

    // === HEAD (helmet) ===
    const helmetGeo = new THREE.SphereGeometry(0.22, 16, 12);
    const helmet = new THREE.Mesh(helmetGeo, armorMat);
    helmet.position.y = 1.7;
    helmet.scale.set(1, 1.1, 1);
    helmet.castShadow = true;
    this.mesh.add(helmet);
    
    // Helmet face plate
    const faceGeo = new THREE.BoxGeometry(0.25, 0.2, 0.1);
    const face = new THREE.Mesh(faceGeo, darkArmorMat);
    face.position.set(0, 1.65, 0.2);
    this.mesh.add(face);

    // Visor (glowing eye slit) - now more prominent
    const visorGeo = new THREE.BoxGeometry(0.2, 0.04, 0.12);
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x66ccff,
      emissive: 0x4488cc,
      emissiveIntensity: 3,
    });
    this.visor = new THREE.Mesh(visorGeo, visorMat);
    this.visor.position.set(0, 1.68, 0.25);
    this.mesh.add(this.visor);
    
    // Helmet crest/plume
    const crestGeo = new THREE.ConeGeometry(0.08, 0.4, 4);
    const crest = new THREE.Mesh(crestGeo, goldTrimMat);
    crest.position.set(0, 1.95, -0.05);
    crest.rotation.x = 0.3;
    this.mesh.add(crest);

    // === SHOULDERS (pauldrons) ===
    const shoulderGeo = new THREE.SphereGeometry(0.15, 8, 6);
    const leftShoulder = new THREE.Mesh(shoulderGeo, armorMat);
    leftShoulder.position.set(-0.4, 1.4, 0);
    leftShoulder.scale.set(1.2, 0.8, 1);
    leftShoulder.castShadow = true;
    this.mesh.add(leftShoulder);
    
    const rightShoulder = new THREE.Mesh(shoulderGeo, armorMat);
    rightShoulder.position.set(0.4, 1.4, 0);
    rightShoulder.scale.set(1.2, 0.8, 1);
    rightShoulder.castShadow = true;
    this.mesh.add(rightShoulder);

    // === ARMS ===
    const armGeo = new THREE.CapsuleGeometry(0.08, 0.4, 4, 8);
    const leftArm = new THREE.Mesh(armGeo, darkArmorMat);
    leftArm.position.set(-0.45, 1.0, 0);
    leftArm.castShadow = true;
    this.mesh.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeo, darkArmorMat);
    rightArm.position.set(0.45, 1.0, 0);
    rightArm.castShadow = true;
    this.mesh.add(rightArm);
    
    // Gauntlets
    const gauntletGeo = new THREE.BoxGeometry(0.12, 0.15, 0.1);
    const leftGauntlet = new THREE.Mesh(gauntletGeo, armorMat);
    leftGauntlet.position.set(-0.45, 0.7, 0);
    this.mesh.add(leftGauntlet);
    
    const rightGauntlet = new THREE.Mesh(gauntletGeo, armorMat);
    rightGauntlet.position.set(0.45, 0.7, 0);
    this.mesh.add(rightGauntlet);

    // === LEGS ===
    const legGeo = new THREE.CapsuleGeometry(0.1, 0.5, 4, 8);
    const leftLeg = new THREE.Mesh(legGeo, darkArmorMat);
    leftLeg.position.set(-0.15, 0.4, 0);
    leftLeg.castShadow = true;
    this.mesh.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeo, darkArmorMat);
    rightLeg.position.set(0.15, 0.4, 0);
    rightLeg.castShadow = true;
    this.mesh.add(rightLeg);
    
    // Boots
    const bootGeo = new THREE.BoxGeometry(0.14, 0.15, 0.2);
    const leftBoot = new THREE.Mesh(bootGeo, armorMat);
    leftBoot.position.set(-0.15, 0.08, 0.02);
    this.mesh.add(leftBoot);
    
    const rightBoot = new THREE.Mesh(bootGeo, armorMat);
    rightBoot.position.set(0.15, 0.08, 0.02);
    this.mesh.add(rightBoot);

    // === CAPE (flowing behind) ===
    const capeGeo = new THREE.PlaneGeometry(0.6, 1.0, 4, 8);
    this.cape = new THREE.Mesh(capeGeo, cloakMat);
    this.cape.position.set(0, 1.0, -0.3);
    this.cape.rotation.x = 0.2;
    this.mesh.add(this.cape);

    // === WEAPON (proper sword) ===
    // Blade
    const bladeGeo = new THREE.BoxGeometry(0.06, 0.9, 0.02);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0xccccdd,
      metalness: 0.95,
      roughness: 0.1,
    });
    this.sword = new THREE.Group();
    
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.y = 0.45;
    blade.castShadow = true;
    this.sword.add(blade);
    
    // Blade edge glow
    const edgeMat = new THREE.MeshStandardMaterial({
      color: 0x88aaff,
      emissive: 0x4466aa,
      emissiveIntensity: 0.5,
    });
    const edgeGeo = new THREE.BoxGeometry(0.01, 0.85, 0.025);
    const edge = new THREE.Mesh(edgeGeo, edgeMat);
    edge.position.set(0.035, 0.45, 0);
    this.sword.add(edge);
    
    // Guard (crossguard)
    const guardGeo = new THREE.BoxGeometry(0.25, 0.04, 0.06);
    const guard = new THREE.Mesh(guardGeo, goldTrimMat);
    guard.position.y = 0;
    this.sword.add(guard);
    
    // Handle
    const handleGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.2, 8);
    const handleMat = new THREE.MeshStandardMaterial({
      color: 0x3a2a1a,
      roughness: 0.8,
    });
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.y = -0.12;
    this.sword.add(handle);
    
    // Pommel
    const pommelGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const pommel = new THREE.Mesh(pommelGeo, goldTrimMat);
    pommel.position.y = -0.24;
    this.sword.add(pommel);
    
    this.sword.position.set(0.5, 1.1, 0);
    this.sword.rotation.z = -0.2;
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
      const right = new THREE.Vector3(Math.cos(camYaw), 0, -Math.sin(camYaw)); // Fixed: was inverted

      this.moveDir.set(0, 0, 0)
        .addScaledVector(forward, -move.z)
        .addScaledVector(right, move.x)
        .normalize();

      // Target velocity based on input
      const targetVelocity = this.moveDir.clone().multiplyScalar(this.moveSpeed);
      
      // Smoothly accelerate towards target velocity
      this.currentMoveVelocity.lerp(targetVelocity, this.moveAcceleration * delta);
      
      // Apply smoothed velocity
      this.mesh.position.addScaledVector(this.currentMoveVelocity, delta);

      // Face movement direction - rotate the whole mesh, not just body
      this.facingAngle = Math.atan2(this.moveDir.x, this.moveDir.z);
      this.mesh.rotation.y = THREE.MathUtils.lerp(
        this.mesh.rotation.y,
        this.facingAngle,
        10 * delta
      );

      if (this.state !== STATES.MOVING) this._changeState(STATES.MOVING);
    } else {
      // Decelerate to stop (smooth stop, not instant)
      if (this.currentMoveVelocity.length() > 0.01) {
        this.currentMoveVelocity.lerp(new THREE.Vector3(0, 0, 0), this.moveDeceleration * delta);
        this.mesh.position.addScaledVector(this.currentMoveVelocity, delta);
      } else {
        this.currentMoveVelocity.set(0, 0, 0);
      }
      
      if (this.state === STATES.MOVING) this._changeState(STATES.IDLE);
    }
  }

  _processCombatInput() {
    // Lock-on toggle (Q key)
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
  
  // Lock-on system: toggle lock, find target, cycle targets
  _toggleLockOn() {
    if (!this.cameraController || !this.gm.enemyManager) return;
    
    const enemies = this.gm.enemyManager.enemies;
    const livingEnemies = enemies.filter(e => !e.isDead);
    
    // Add boss if exists and alive
    if (this.gm.enemyManager.boss && !this.gm.enemyManager.boss.isDead) {
      livingEnemies.push(this.gm.enemyManager.boss);
    }
    
    if (livingEnemies.length === 0) {
      // No enemies to lock onto
      this.cameraController.clearLockOn();
      return;
    }
    
    // Get enemies in range and sort by distance
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
      // Already locked on - cycle to next target or unlock
      const currentIdx = validTargets.findIndex(t => t.enemy === currentTarget);
      if (currentIdx !== -1 && validTargets.length > 1) {
        // Cycle to next target
        const nextIdx = (currentIdx + 1) % validTargets.length;
        this.cameraController.setLockOnTarget(validTargets[nextIdx].enemy);
        // Play lock-on sound
        if (this.gm.audioManager) {
          this.gm.audioManager.play('menuSelect', { volume: 0.3 });
        }
      } else {
        // Only one target or not found - unlock
        this.cameraController.clearLockOn();
        if (this.gm.audioManager) {
          this.gm.audioManager.play('menuBack', { volume: 0.3 });
        }
      }
    } else {
      // Not locked on - lock to nearest
      this.cameraController.setLockOnTarget(validTargets[0].enemy);
      // Play lock-on sound
      if (this.gm.audioManager) {
        this.gm.audioManager.play('menuSelect', { volume: 0.4 });
      }
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
    this.lastGhostSpawnTime = 0;
    
    // Flash player blue to indicate i-frames started
    this._flashDodgeStart();
    
    this._changeState(STATES.DODGING);
  }
  
  // Visual feedback for dodge i-frame start
  _flashDodgeStart() {
    // Flash visor bright cyan
    const originalColor = this.visor.material.emissive.getHex();
    this.visor.material.emissive.setHex(0x00ffff);
    this.visor.material.emissiveIntensity = 8;
    
    // Flash body with subtle cyan tint
    this.body.material.emissive.setHex(0x004455);
    
    setTimeout(() => {
      this.visor.material.emissive.setHex(originalColor);
      this.visor.material.emissiveIntensity = 3;
      this.body.material.emissive.setHex(0x000000);
    }, 100);
  }
  
  // Spawn a ghost afterimage during dodge
  _spawnDodgeGhost() {
    // Create a semi-transparent clone at current position
    const ghostGroup = new THREE.Group();
    
    // Simple ghost body (just main shapes, not full detail)
    const ghostMat = new THREE.MeshBasicMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });
    
    // Body ghost
    const bodyGeo = new THREE.CapsuleGeometry(0.35, 0.6, 4, 8);
    const bodyGhost = new THREE.Mesh(bodyGeo, ghostMat);
    bodyGhost.position.y = 1.1;
    ghostGroup.add(bodyGhost);
    
    // Head ghost
    const headGeo = new THREE.SphereGeometry(0.22, 8, 6);
    const headGhost = new THREE.Mesh(headGeo, ghostMat);
    headGhost.position.y = 1.7;
    ghostGroup.add(headGhost);
    
    // Position ghost at player's current location
    ghostGroup.position.copy(this.mesh.position);
    ghostGroup.rotation.y = this.mesh.rotation.y;
    
    this.scene.add(ghostGroup);
    
    // Track for cleanup
    this.dodgeGhostMeshes.push({
      mesh: ghostGroup,
      material: ghostMat,
      spawnTime: Date.now(),
      lifetime: 200, // ms
    });
  }
  
  // Update and clean up dodge ghosts
  _updateDodgeGhosts() {
    const now = Date.now();
    
    for (let i = this.dodgeGhostMeshes.length - 1; i >= 0; i--) {
      const ghost = this.dodgeGhostMeshes[i];
      const age = now - ghost.spawnTime;
      
      if (age > ghost.lifetime) {
        // Remove expired ghost
        this.scene.remove(ghost.mesh);
        ghost.mesh.traverse(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
        this.dodgeGhostMeshes.splice(i, 1);
      } else {
        // Fade out ghost
        const fadeProgress = age / ghost.lifetime;
        ghost.material.opacity = 0.4 * (1 - fadeProgress);
      }
    }
  }

  _processDodge(delta) {
    const progress = this.stateTimer / TIMINGS.dodgeDuration;
    const speedCurve = Math.sin(progress * Math.PI);

    this.mesh.position.addScaledVector(this.dodgeDir, this.dodgeSpeed * speedCurve * delta);
    
    // Spawn ghost afterimages during i-frames
    this.lastGhostSpawnTime += delta;
    if (this.isInvincible && this.lastGhostSpawnTime >= this.ghostSpawnInterval) {
      this._spawnDodgeGhost();
      this.lastGhostSpawnTime = 0;
    }
    
    // Update existing ghosts
    this._updateDodgeGhosts();

    // End iframes with visual feedback
    if (this.stateTimer >= TIMINGS.dodgeIframes && this.isInvincible) {
      this.isInvincible = false;
      // Flash to indicate i-frames ended
      this._flashDodgeEnd();
    }

    // End dodge
    if (this.stateTimer >= TIMINGS.dodgeDuration) {
      this.isInvincible = false;
      this._changeState(STATES.IDLE);
    }

    // Visual: lower body during dodge
    this.body.position.y = 1.1 - (speedCurve * 0.4);
    
    // Subtle blue tint while invincible
    if (this.isInvincible) {
      this.body.material.emissive.setHex(0x002233);
    }
  }
  
  // Visual feedback when i-frames end
  _flashDodgeEnd() {
    // Brief white flash to show vulnerability returned
    this.body.material.emissive.setHex(0x222222);
    setTimeout(() => {
      this.body.material.emissive.setHex(0x000000);
    }, 50);
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
    this.mesh.rotation.y = camYaw; // Rotate whole mesh so visor faces correctly
    
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
    
    // Progress animation blend towards 1
    this.animationBlend = Math.min(1, this.animationBlend + this.animationBlendSpeed * delta);
    
    // Calculate target sword pose based on state
    switch (this.state) {
      case STATES.ATTACKING: {
        // Quick slash with wind-up
        const duration = TIMINGS.lightAttackDuration;
        const windUpPhase = 0.15; // First 15% is wind-up
        
        if (t < duration * windUpPhase) {
          // Wind-up: pull sword back
          const windUp = t / (duration * windUpPhase);
          const easeIn = windUp * windUp; // Ease in
          this.targetSwordRotZ = 0.3 * easeIn; // Cock back slightly
          this.targetSwordRotX = -0.3 * easeIn;
          this.targetSwordPos.set(0.5 + easeIn * 0.1, 1.25, -0.1 * easeIn);
          this.bodyTilt = THREE.MathUtils.lerp(this.bodyTilt, -0.08, 8 * delta);
        } else {
          // Swing through
          const swingProgress = (t - duration * windUpPhase) / (duration * (1 - windUpPhase));
          const swing = Math.sin(swingProgress * Math.PI);
          const comboVariation = this.attackCombo * 0.3; // Vary angle for combos
          
          this.targetSwordRotZ = -swing * 1.5 - comboVariation;
          this.targetSwordRotX = swing * 0.5 + comboVariation * 0.5;
          this.targetSwordPos.set(0.45 + swing * 0.3, 1.2 + swing * 0.3, swing * 0.5);
          
          // Body follows through with attack
          this.bodyTilt = THREE.MathUtils.lerp(this.bodyTilt, swing * 0.15, 10 * delta);
          this.bodyTwist = THREE.MathUtils.lerp(this.bodyTwist, -swing * 0.1 - comboVariation * 0.05, 8 * delta);
        }
        break;
      }
      case STATES.HEAVY_ATTACKING: {
        // Overhead slam with dramatic wind-up
        const duration = TIMINGS.heavyAttackDuration;
        const windUpPhase = 0.25; // 25% wind-up for heavy
        
        if (t < duration * windUpPhase) {
          // Wind-up: raise sword overhead
          const windUp = t / (duration * windUpPhase);
          const easeIn = Math.sin(windUp * Math.PI * 0.5); // Smooth ease
          this.targetSwordRotZ = 0.8 * easeIn;
          this.targetSwordRotX = -1.5 * easeIn; // Raise overhead
          this.targetSwordPos.set(0.3, 1.5 + easeIn * 0.5, -0.3 * easeIn);
          this.bodyTilt = THREE.MathUtils.lerp(this.bodyTilt, -0.12, 8 * delta);
        } else {
          // Slam down
          const swingProgress = (t - duration * windUpPhase) / (duration * (1 - windUpPhase));
          const swing = Math.sin(swingProgress * Math.PI);
          const slamProgress = Math.min(1, swingProgress * 2); // Fast slam
          
          this.targetSwordRotZ = THREE.MathUtils.lerp(0.8, -2.0, slamProgress);
          this.targetSwordRotX = THREE.MathUtils.lerp(-1.5, 1.2, slamProgress);
          this.targetSwordPos.set(0.45, 1.2 + (1 - slamProgress) * 0.6, swing * 0.8);
          
          // Body lurches forward with slam
          this.bodyTilt = THREE.MathUtils.lerp(this.bodyTilt, slamProgress * 0.2, 12 * delta);
        }
        break;
      }
      case STATES.BLOCKING: {
        this.targetSwordRotZ = -0.3;
        this.targetSwordRotX = 0;
        this.targetSwordPos.set(0.2, 1.3, 0.3);
        this.bodyTilt = THREE.MathUtils.lerp(this.bodyTilt, -0.05, 8 * delta);
        this.bodyTwist = THREE.MathUtils.lerp(this.bodyTwist, 0, 8 * delta);
        break;
      }
      case STATES.MOVING: {
        // Walking bob animation
        this.walkBobPhase += delta * 12; // Bob speed tied to movement
        const bob = Math.sin(this.walkBobPhase) * 0.02;
        const sway = Math.cos(this.walkBobPhase * 0.5) * 0.05;
        
        this.targetSwordRotZ = sway;
        this.targetSwordRotX = 0;
        this.targetSwordPos.set(0.45 + sway * 0.1, 1.2 + bob, 0);
        this.bodyTilt = THREE.MathUtils.lerp(this.bodyTilt, 0.03, 6 * delta); // Slight forward lean
        this.bodyTwist = THREE.MathUtils.lerp(this.bodyTwist, 0, 6 * delta);
        break;
      }
      case STATES.DODGING: {
        // Sword tucked during dodge
        this.targetSwordRotZ = 0.5;
        this.targetSwordRotX = -0.3;
        this.targetSwordPos.set(0.3, 1.0, -0.2);
        break;
      }
      default: {
        // Rest position
        this.targetSwordRotZ = 0;
        this.targetSwordRotX = 0;
        this.targetSwordPos.set(0.45, 1.2, 0);
        this.bodyTilt = THREE.MathUtils.lerp(this.bodyTilt, 0, 6 * delta);
        this.bodyTwist = THREE.MathUtils.lerp(this.bodyTwist, 0, 6 * delta);
        this.walkBobPhase = 0;
      }
    }
    
    // Blend from previous pose to target pose
    const blendFactor = this._easeOutCubic(this.animationBlend);
    
    // Interpolate sword position and rotation
    this.sword.position.x = THREE.MathUtils.lerp(this.prevSwordPos.x, this.targetSwordPos.x, blendFactor);
    this.sword.position.y = THREE.MathUtils.lerp(this.prevSwordPos.y, this.targetSwordPos.y, blendFactor);
    this.sword.position.z = THREE.MathUtils.lerp(this.prevSwordPos.z, this.targetSwordPos.z, blendFactor);
    
    this.sword.rotation.z = THREE.MathUtils.lerp(this.prevSwordRotZ, this.targetSwordRotZ, blendFactor);
    this.sword.rotation.x = THREE.MathUtils.lerp(this.prevSwordRotX, this.targetSwordRotX, blendFactor);
    
    // Also apply additional smooth lerp for overall fluidity
    if (this.state !== STATES.ATTACKING && this.state !== STATES.HEAVY_ATTACKING) {
      this.sword.rotation.z = THREE.MathUtils.lerp(this.sword.rotation.z, this.targetSwordRotZ, 8 * delta);
      this.sword.rotation.x = THREE.MathUtils.lerp(this.sword.rotation.x, this.targetSwordRotX, 8 * delta);
      this.sword.position.lerp(this.targetSwordPos, 8 * delta);
    }
    
    // Apply body animations
    this.body.rotation.x = this.bodyTilt;
    this.body.rotation.y = this.bodyTwist;
  }
  
  // Easing function for smoother blends
  _easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  _changeState(newState) {
    if (this.state === newState) return;
    
    // Save current sword pose for blending into new state
    this.prevSwordPos.copy(this.sword.position);
    this.prevSwordRotZ = this.sword.rotation.z;
    this.prevSwordRotX = this.sword.rotation.x;
    this.animationBlend = 0; // Reset blend to start from previous pose
    
    // Cleanup old state
    if (this.state === STATES.ATTACKING || this.state === STATES.HEAVY_ATTACKING) {
      this.activeAttack = null;
    }
    if (this.state === STATES.DODGING) {
      this.body.position.y = 1.1;
      this.body.material.emissive.setHex(0x000000); // Clear any dodge tint
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
