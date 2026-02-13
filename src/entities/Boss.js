import * as THREE from 'three';

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
      },
    };
    
    this.config = this.phaseConfigs[1];
    this.attackCooldownTimer = 0;
    this.aoeCooldownTimer = 0;
    this.detectionRange = 15;
    this.attackRange = 3.5;
    
    this.spawnPos = position.clone();
    
    // Create boss mesh (larger, more imposing)
    this.mesh = new THREE.Group();
    this.mesh.position.copy(position);
    
    // Massive twisted body
    const bodyGeo = new THREE.CapsuleGeometry(0.8, 2.0, 12, 24);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a2a,
      roughness: 0.8,
      metalness: 0.4,
    });
    this.body = new THREE.Mesh(bodyGeo, bodyMat);
    this.body.position.y = 2.2;
    this.body.castShadow = true;
    this.mesh.add(this.body);
    
    // Hunched shoulder masses
    const shoulderGeo = new THREE.SphereGeometry(0.5, 16, 16);
    const shoulderMat = new THREE.MeshStandardMaterial({
      color: 0x222233,
      roughness: 0.7,
      metalness: 0.3,
    });
    this.leftShoulder = new THREE.Mesh(shoulderGeo, shoulderMat);
    this.leftShoulder.position.set(-0.7, 3.0, 0);
    this.leftShoulder.scale.set(1, 0.8, 0.9);
    this.mesh.add(this.leftShoulder);
    
    this.rightShoulder = new THREE.Mesh(shoulderGeo, shoulderMat);
    this.rightShoulder.position.set(0.7, 3.0, 0);
    this.rightShoulder.scale.set(1, 0.8, 0.9);
    this.mesh.add(this.rightShoulder);
    
    // Multiple glowing eyes (failed experiment theme)
    this.eyes = [];
    const eyePositions = [
      { x: -0.2, y: 3.6, z: 0.6, size: 0.08 },
      { x: 0.2, y: 3.6, z: 0.6, size: 0.08 },
      { x: 0, y: 3.4, z: 0.65, size: 0.05 },
      { x: -0.35, y: 3.3, z: 0.55, size: 0.04 },
      { x: 0.35, y: 3.3, z: 0.55, size: 0.04 },
    ];
    
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xff2200,
      emissive: 0xff2200,
      emissiveIntensity: 4,
    });
    
    eyePositions.forEach(pos => {
      const eyeGeo = new THREE.SphereGeometry(pos.size, 8, 8);
      const eye = new THREE.Mesh(eyeGeo, eyeMat.clone());
      eye.position.set(pos.x, pos.y, pos.z);
      this.eyes.push(eye);
      this.mesh.add(eye);
    });
    
    // Massive cleaver weapon
    const weaponGeo = new THREE.BoxGeometry(0.15, 2.0, 0.4);
    const weaponMat = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.9,
      roughness: 0.3,
    });
    this.weapon = new THREE.Mesh(weaponGeo, weaponMat);
    this.weapon.position.set(1.0, 1.8, 0);
    this.weapon.rotation.z = 0.3;
    this.weapon.castShadow = true;
    this.mesh.add(this.weapon);
    
    // AoE indicator (hidden by default)
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
    
    // Phase 2 visual change (arm mutation, stored for later)
    this.mutatedArm = null;
    
    scene.add(this.mesh);
    
    // Start dormant (eyes dim)
    this._setDormant();
  }
  
  _setDormant() {
    this.eyes.forEach(eye => {
      eye.material.emissiveIntensity = 0.5;
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
        volume: 0.8 
      });
      this.gm.audioManager.startBossMusic();
    }
    
    // Eyes flare up sequence
    let delay = 0;
    this.eyes.forEach((eye, i) => {
      setTimeout(() => {
        eye.material.emissiveIntensity = 6;
        setTimeout(() => {
          eye.material.emissiveIntensity = 4;
        }, 200);
      }, delay);
      delay += 150;
    });
  }
  
  update(delta, player) {
    if (this.state === STATES.DEAD) return;
    
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
          this.body.position.y = 2.2 + Math.sin(this.stateTimer * Math.PI) * 0.3;
        } else {
          this._changeState(STATES.IDLE);
        }
        break;
        
      case STATES.IDLE:
        this._faceTarget(player.mesh.position, delta);
        
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
        
        // Walking animation
        this.body.position.y = 2.2 + Math.sin(this.stateTimer * 8) * 0.1;
        
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
        this.body.rotation.z = Math.sin(this.stateTimer * 12) * 0.15 * (1 - this.stateTimer / 2.5);
        
        if (this.stateTimer >= 2.5) {
          this.posture = 0;
          this.body.rotation.z = 0;
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
    const pulseSpeed = 2 + (1 - healthRatio) * 4;
    const pulseIntensity = 3 + Math.sin(Date.now() * 0.001 * pulseSpeed) * (1 + (1 - healthRatio) * 2);
    this.eyes.forEach(eye => {
      eye.material.emissiveIntensity = pulseIntensity;
    });
  }
  
  _startAttack(player) {
    const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
    
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
        this.weapon.rotation.z = -progress * 2.5;
        this.weapon.position.y = 1.8 + progress * 1.5;
      } else {
        // Pull back
        this.weapon.rotation.z = 0.3 - progress * 1.5;
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
          position: this.mesh.position.clone().add(attackDir.multiplyScalar(2.0)).add(new THREE.Vector3(0, 1.5, 0)),
          range: this.attackRange,
          damage: isHeavy ? this.config.damage * 1.5 : this.config.damage,
          postureDmg: isHeavy ? this.config.postureDmg * 1.5 : this.config.postureDmg,
          isHeavy,
        };
      }
      
      // Swing animation
      const strikeProgress = (this.stateTimer - windupTime) / 0.3;
      if (isHeavy) {
        this.weapon.rotation.z = -2.5 + strikeProgress * 4.0;
        this.weapon.position.y = 3.3 - strikeProgress * 2.5;
      } else {
        this.weapon.rotation.z = -1.2 + strikeProgress * 2.5;
      }
    }
    
    // Recovery
    if (this.stateTimer >= strikeTime) {
      this.activeAttack = null;
      this.weapon.rotation.z *= 0.9;
      this.weapon.position.y = THREE.MathUtils.lerp(this.weapon.position.y, 1.8, 0.1);
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
      this.weapon.rotation.z = swingDir * progress * 1.5;
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
          position: this.mesh.position.clone().add(attackDir.multiplyScalar(2.0)).add(new THREE.Vector3(0, 1.5, 0)),
          range: this.attackRange * 0.9,
          damage: this.config.damage * 0.7,
          postureDmg: this.config.postureDmg * 0.6,
          isCombo: true,
        };
      }
      
      const strikeProgress = (this.stateTimer - windupTime) / 0.2;
      const swingDir = this.comboCount % 2 === 0 ? 1 : -1;
      this.weapon.rotation.z = swingDir * (1.5 - strikeProgress * 3);
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
        this.mesh.position.addScaledVector(fwd, 0.5);
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
      this.aoeIndicator.material.opacity = progress * 0.6;
      this.aoeIndicator.scale.setScalar(1 + progress * 0.3);
      
      // Raise weapon overhead
      this.weapon.rotation.z = -progress * 3;
      this.weapon.position.y = 1.8 + progress * 2;
      
      // Body glow
      this.body.material.emissive.setHex(Math.floor(0x220000 + progress * 0x110000));
      
      // Eyes intensify
      this.eyes.forEach(eye => {
        eye.material.emissiveIntensity = 4 + progress * 6;
      });
      return;
    }
    
    // Explosion
    if (this.stateTimer >= chargeTime && this.stateTimer < explosionTime) {
      if (!this.hitThisSwing) {
        this.hitThisSwing = true;
        this.aoeIndicator.material.opacity = 1;
        this.aoeIndicator.material.color.setHex(0xff6600);
        
        // AoE damage check
        const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
        if (distToPlayer < 6 && !player.isInvincible) {
          // Create special AoE attack for hit detection
          this.activeAttack = {
            position: this.mesh.position.clone(),
            range: 6,
            damage: this.config.damage * 1.2,
            postureDmg: this.config.postureDmg,
            isAoE: true,
          };
        }
        
        // Slam weapon down
        this.weapon.rotation.z = 0.5;
        this.weapon.position.y = 0.5;
      }
    }
    
    // Recovery
    if (this.stateTimer >= explosionTime) {
      this.activeAttack = null;
      this.aoeIndicator.material.opacity *= 0.9;
      this.body.material.emissive.setHex(0x000000);
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
      // Dramatic pose, body convulses
      this.body.rotation.z = Math.sin(this.stateTimer * 20) * 0.2;
      this.body.scale.y = 1 + Math.sin(this.stateTimer * 10) * 0.1;
      
      // Eyes go crazy
      this.eyes.forEach((eye, i) => {
        eye.material.emissiveIntensity = 5 + Math.sin(this.stateTimer * 15 + i) * 4;
      });
      
      // Create mutated arm at halfway point
      if (this.stateTimer > 1.5 && !this.mutatedArm) {
        this._createMutatedArm();
      }
      return;
    }
    
    // Transition complete
    this.body.rotation.z = 0;
    this.body.scale.y = 1;
    
    // Phase 2 color shift
    this.body.material.color.setHex(0x2a1a2a);
    this.eyes.forEach(eye => {
      eye.material.color.setHex(0xff4400);
      eye.material.emissive.setHex(0xff4400);
    });
    
    this._changeState(STATES.IDLE);
  }
  
  _createMutatedArm() {
    // Extra twisted arm emerges from shoulder
    const armGeo = new THREE.CapsuleGeometry(0.2, 1.2, 8, 12);
    const armMat = new THREE.MeshStandardMaterial({
      color: 0x331122,
      roughness: 0.9,
      metalness: 0.2,
    });
    this.mutatedArm = new THREE.Mesh(armGeo, armMat);
    this.mutatedArm.position.set(-0.9, 2.8, 0.3);
    this.mutatedArm.rotation.z = 0.8;
    this.mutatedArm.rotation.x = 0.3;
    this.mesh.add(this.mutatedArm);
    
    // Extra eye on mutated arm
    const extraEyeMat = new THREE.MeshStandardMaterial({
      color: 0xff4400,
      emissive: 0xff4400,
      emissiveIntensity: 4,
    });
    const extraEye = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), extraEyeMat);
    extraEye.position.set(-1.3, 2.5, 0.5);
    this.eyes.push(extraEye);
    this.mesh.add(extraEye);
  }
  
  takeDamage(amount, postureDmg = 0) {
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
        volume: 0.7 
      });
    }
    
    // Flash on hit
    this.body.material.emissive.setHex(0x440000);
    setTimeout(() => {
      if (this.state !== STATES.AOE_ATTACK) {
        this.body.material.emissive.setHex(0x000000);
      }
    }, 100);
    
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
  
  _triggerPostureBreak() {
    this._changeState(STATES.STAGGERED);
    this.activeAttack = null;
    
    // Play posture break sound
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('postureBreak', { 
        position: this.mesh.position, 
        volume: 0.9 
      });
    }
    
    // Big flash
    this.body.material.emissive.setHex(0xffcc00);
    this.eyes.forEach(eye => {
      eye.material.emissive.setHex(0xffcc00);
    });
    
    setTimeout(() => {
      if (this.state === STATES.STAGGERED) {
        this.body.material.emissive.setHex(0x000000);
        this.eyes.forEach(eye => {
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
    
    // Play boss roar for phase transition
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('bossRoar', { 
        position: this.mesh.position, 
        volume: 1.0 
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
    
    // Return to ambient music
    if (this.gm?.audioManager) {
      this.gm.audioManager.startAmbientMusic();
    }
    
    console.log(`[BOSS] ${this.name} DEFEATED!`);
    
    // Death animation - collapse
    const deathAnim = () => {
      this.body.position.y -= 0.02;
      this.body.rotation.x += 0.02;
      
      this.eyes.forEach(eye => {
        eye.material.emissiveIntensity *= 0.95;
      });
      
      if (this.body.position.y > 0.5) {
        requestAnimationFrame(deathAnim);
      } else {
        // Final state
        this.body.material.transparent = true;
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
    const fade = () => {
      this.body.material.opacity -= 0.01;
      this.weapon.material.opacity -= 0.01;
      this.weapon.material.transparent = true;
      
      this.eyes.forEach(eye => {
        eye.material.opacity -= 0.01;
        eye.material.transparent = true;
      });
      
      if (this.body.material.opacity > 0) {
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
    this.weapon.rotation.z = 0.3;
    this.weapon.position.set(1.0, 1.8, 0);
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
    this.body.position.y = 2.2;
    this.body.rotation.set(0, 0, 0);
    this.body.scale.set(1, 1, 1);
    this.body.material.opacity = 1;
    this.body.material.transparent = false;
    this.body.material.color.setHex(0x1a1a2a);
    this.body.material.emissive.setHex(0x000000);
    
    this._resetWeapon();
    this.weapon.material.opacity = 1;
    
    // Reset eyes
    this.eyes.forEach(eye => {
      eye.material.opacity = 1;
      eye.material.transparent = false;
      eye.material.color.setHex(0xff2200);
      eye.material.emissive.setHex(0xff2200);
    });
    
    // Remove mutated arm if present
    if (this.mutatedArm) {
      this.mesh.remove(this.mutatedArm);
      this.mutatedArm = null;
      // Remove the extra eye added in phase 2
      const extraEye = this.eyes.pop();
      if (extraEye) this.mesh.remove(extraEye);
    }
    
    this.aoeIndicator.material.opacity = 0;
    
    this._setDormant();
  }
}
