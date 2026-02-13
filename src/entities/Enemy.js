import * as THREE from 'three';

const STATES = {
  IDLE: 'idle',
  PATROL: 'patrol',
  CHASE: 'chase',
  CIRCLE: 'circle',     // New: circle strafe around player
  RETREAT: 'retreat',   // New: back away when low health
  ATTACK: 'attack',
  STAGGERED: 'staggered',
  DEAD: 'dead',
};

// Enemy type presets
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
  },
  BERSERKER: {
    name: 'Berserker',
    health: 35,           // Low health
    damage: 20,           // High damage
    postureDmg: 10,       // Lower posture damage
    moveSpeed: 4.0,       // Fast
    detectionRange: 12,
    attackRange: 2.0,
    attackCooldown: 0.8,  // Fast attacks
    attackWindup: 0.3,    // Quick windup
    attackDuration: 0.15,
    remnantDrop: 60,
    patrolRadius: 5,
    bodyColor: 0x662222,  // Dark red
    eyeColor: 0xff6600,   // Orange eyes
    canChainAttacks: true, // Can chain 2-3 attacks
    maxChainAttacks: 3,
    maxPosture: 40,       // Staggers easily
    hasShield: false,
  },
  SENTINEL: {
    name: 'Sentinel',
    health: 100,          // Tanky
    damage: 30,           // Heavy hits
    postureDmg: 25,       // High posture damage
    moveSpeed: 1.5,       // Slow
    detectionRange: 8,
    attackRange: 2.5,
    attackCooldown: 2.5,  // Slow attacks
    attackWindup: 0.8,    // Long telegraph
    attackDuration: 0.3,
    remnantDrop: 100,
    patrolRadius: 2,
    bodyColor: 0x333344,  // Dark blue-gray
    eyeColor: 0x4444ff,   // Blue eyes
    canChainAttacks: false,
    maxPosture: 100,      // Hard to stagger
    hasShield: true,      // Can block
    shieldBlockChance: 0.4,
  },
};

export class Enemy {
  constructor(scene, position, config = {}) {
    this.scene = scene;
    
    // Merge with type preset if specified
    const typePreset = config.type ? ENEMY_TYPES[config.type] : {};
    this.config = {
      ...ENEMY_TYPES.HOLLOW_SOLDIER, // Default base
      ...typePreset,
      ...config, // Custom overrides
    };

    this.maxHealth = this.config.health;
    this.health = this.maxHealth;
    this.maxPosture = this.config.maxPosture || 60;
    this.posture = 0;
    this.state = STATES.IDLE;
    this.stateTimer = 0;
    this.hitThisSwing = false;
    this.activeAttack = null;
    this.isBlocking = false;
    
    // Chain attack tracking
    this.chainAttackCount = 0;
    this.lastAttackTime = 0;
    
    // Circle strafe state
    this.circleDirection = Math.random() > 0.5 ? 1 : -1;
    this.circleTimer = 0;

    this.spawnPos = position.clone();
    this.patrolTarget = position.clone();
    this.patrolWait = 0;

    // Create mesh
    this.mesh = new THREE.Group();
    this.mesh.position.copy(position);

    // Body - size varies by type
    const bodyScale = this.config.hasShield ? 1.2 : (this.config.type === 'BERSERKER' ? 0.85 : 1.0);
    const bodyGeo = new THREE.CapsuleGeometry(0.35 * bodyScale, 0.9 * bodyScale, 8, 16);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: this.config.bodyColor,
      roughness: 0.7,
      metalness: 0.2,
    });
    this.body = new THREE.Mesh(bodyGeo, bodyMat);
    this.body.position.y = 1.0 * bodyScale;
    this.body.castShadow = true;
    this.mesh.add(this.body);

    // Eyes (glowing)
    const eyeGeo = new THREE.BoxGeometry(0.25 * bodyScale, 0.05, 0.05);
    const eyeMat = new THREE.MeshStandardMaterial({
      color: this.config.eyeColor,
      emissive: this.config.eyeColor,
      emissiveIntensity: 3,
    });
    this.eye = new THREE.Mesh(eyeGeo, eyeMat);
    this.eye.position.set(0, 1.6 * bodyScale, 0.3 * bodyScale);
    this.mesh.add(this.eye);

    // Weapon - varies by type
    let weaponGeo, weaponMat;
    if (this.config.type === 'BERSERKER') {
      // Dual claws
      weaponGeo = new THREE.BoxGeometry(0.04, 0.5, 0.04);
      weaponMat = new THREE.MeshStandardMaterial({
        color: 0x884444,
        metalness: 0.8,
        roughness: 0.3,
      });
      this.weapon = new THREE.Mesh(weaponGeo, weaponMat);
      this.weapon.position.set(0.35, 0.9, 0.15);
      
      this.weapon2 = new THREE.Mesh(weaponGeo, weaponMat);
      this.weapon2.position.set(-0.35, 0.9, 0.15);
      this.mesh.add(this.weapon2);
    } else if (this.config.hasShield) {
      // Heavy weapon
      weaponGeo = new THREE.BoxGeometry(0.1, 1.0, 0.1);
      weaponMat = new THREE.MeshStandardMaterial({
        color: 0x555566,
        metalness: 0.7,
        roughness: 0.3,
      });
      this.weapon = new THREE.Mesh(weaponGeo, weaponMat);
      this.weapon.position.set(0.5, 1.1, 0);
      
      // Shield
      const shieldGeo = new THREE.BoxGeometry(0.1, 0.8, 0.6);
      const shieldMat = new THREE.MeshStandardMaterial({
        color: 0x444455,
        metalness: 0.6,
        roughness: 0.4,
      });
      this.shield = new THREE.Mesh(shieldGeo, shieldMat);
      this.shield.position.set(-0.45, 1.0, 0.2);
      this.mesh.add(this.shield);
    } else {
      // Standard sword
      weaponGeo = new THREE.BoxGeometry(0.06, 0.7, 0.06);
      weaponMat = new THREE.MeshStandardMaterial({
        color: 0x666666,
        metalness: 0.6,
        roughness: 0.4,
      });
      this.weapon = new THREE.Mesh(weaponGeo, weaponMat);
      this.weapon.position.set(0.4, 1.0, 0);
    }
    this.weapon.castShadow = true;
    this.mesh.add(this.weapon);

    // Health bar (floating above)
    this.healthBarGroup = new THREE.Group();
    this.healthBarGroup.position.y = 2.4 * bodyScale;

    const bgGeo = new THREE.PlaneGeometry(1.0, 0.08);
    const bgMat = new THREE.MeshBasicMaterial({ color: 0x111111, side: THREE.DoubleSide });
    const bg = new THREE.Mesh(bgGeo, bgMat);
    this.healthBarGroup.add(bg);

    const fillGeo = new THREE.PlaneGeometry(0.98, 0.06);
    const fillMat = new THREE.MeshBasicMaterial({ color: 0xcc3333, side: THREE.DoubleSide });
    this.healthFill = new THREE.Mesh(fillGeo, fillMat);
    this.healthFill.position.z = 0.001;
    this.healthBarGroup.add(this.healthFill);
    
    // Posture bar (below health)
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
    
    // "BREAK" indicator (hidden until posture break)
    this.breakIndicator = this._createBreakIndicator();
    this.breakIndicator.visible = false;
    this.mesh.add(this.breakIndicator);

    scene.add(this.mesh);
  }
  
  _createBreakIndicator() {
    // Create a simple "BREAK" text sprite effect
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

    this.stateTimer += delta;
    const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
    const healthPercent = this.health / this.maxHealth;

    // Billboard health bar
    if (this.healthBarGroup.visible) {
      const cam = this.scene.getObjectByProperty('type', 'PerspectiveCamera');
      if (cam) this.healthBarGroup.lookAt(cam.position);
    }
    
    // Shield blocking logic for Sentinel
    if (this.config.hasShield && this.state === STATES.CHASE && distToPlayer < this.config.attackRange * 1.5) {
      this.isBlocking = Math.random() < this.config.shieldBlockChance;
      if (this.shield) {
        this.shield.position.z = this.isBlocking ? 0.35 : 0.2;
      }
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
        
        // Low health retreat (non-berserkers)
        if (healthPercent < 0.3 && !this.config.canChainAttacks && Math.random() < 0.01) {
          this._changeState(STATES.RETREAT);
          break;
        }
        
        if (distToPlayer <= this.config.attackRange) {
          this._changeState(STATES.ATTACK);
          break;
        }
        
        // Circle strafe when close but not in attack range (adds variety)
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
        // Move away from player
        const awayDir = new THREE.Vector3().subVectors(this.mesh.position, player.mesh.position);
        awayDir.y = 0;
        awayDir.normalize();
        const retreatTarget = this.mesh.position.clone().add(awayDir.multiplyScalar(3));
        this._moveToward(retreatTarget, this.config.moveSpeed * 0.8, delta);
        this._faceTarget(player.mesh.position, delta); // Keep facing player while retreating
        break;

      case STATES.ATTACK:
        this._processAttack(delta, player);
        break;

      case STATES.STAGGERED:
        // Wobble effect
        this.body.rotation.z = Math.sin(this.stateTimer * 15) * 0.1 * (1 - this.stateTimer / 1.5);
        
        if (this.stateTimer >= 1.5) {
          this.posture = 0;
          this.body.rotation.z = 0;
          this.breakIndicator.visible = false;
          this._updatePostureBar();
          this._changeState(distToPlayer < this.config.detectionRange ? STATES.CHASE : STATES.IDLE);
        }
        break;
    }

    // Posture regen (when not attacked recently)
    if (this.state !== STATES.STAGGERED && this.posture > 0) {
      this.posture = Math.max(0, this.posture - 8 * delta);
      this._updatePostureBar();
    }
  }
  
  _circleStrafe(targetPos, delta) {
    // Move perpendicular to the target
    const toTarget = new THREE.Vector3().subVectors(targetPos, this.mesh.position);
    toTarget.y = 0;
    const dist = toTarget.length();
    toTarget.normalize();
    
    // Perpendicular vector
    const perp = new THREE.Vector3(-toTarget.z, 0, toTarget.x).multiplyScalar(this.circleDirection);
    
    // Also maintain distance
    const idealDist = this.config.attackRange * 1.5;
    const distCorrection = new THREE.Vector3().copy(toTarget).multiplyScalar((dist - idealDist) * 0.5);
    
    const moveDir = perp.add(distCorrection).normalize();
    this.mesh.position.addScaledVector(moveDir, this.config.moveSpeed * 0.7 * delta);
  }

  _processAttack(delta, player) {
    const windupTime = this.config.attackWindup;
    const strikeTime = windupTime + this.config.attackDuration;
    
    // Wind up
    if (this.stateTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta * 2);
      // Wind up animation
      const windupProgress = this.stateTimer / windupTime;
      this.weapon.rotation.z = -windupProgress * 3;
      if (this.weapon2) this.weapon2.rotation.z = -windupProgress * 3;
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
          position: this.mesh.position.clone().add(attackDir.multiplyScalar(1.0)).add(new THREE.Vector3(0, 1, 0)),
          range: this.config.attackRange,
          damage: this.config.damage,
          postureDmg: this.config.postureDmg,
        };
      }
      // Swing animation
      const strikeProgress = (this.stateTimer - windupTime) / this.config.attackDuration;
      this.weapon.rotation.z = Math.sin(strikeProgress * Math.PI) * 2;
      if (this.weapon2) this.weapon2.rotation.z = Math.sin(strikeProgress * Math.PI) * 2;
    }

    // Recovery
    if (this.stateTimer >= strikeTime) {
      this.activeAttack = null;
      this.weapon.rotation.z *= 0.9;
      if (this.weapon2) this.weapon2.rotation.z *= 0.9;
    }

    // End attack
    if (this.stateTimer >= this.config.attackCooldown) {
      this.hitThisSwing = false;
      this.activeAttack = null;
      this.weapon.rotation.z = 0;
      if (this.weapon2) this.weapon2.rotation.z = 0;

      const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
      
      // Chain attack logic for berserkers
      if (this.config.canChainAttacks && distToPlayer <= this.config.attackRange * 1.3) {
        this.chainAttackCount++;
        if (this.chainAttackCount < this.config.maxChainAttacks) {
          // Chain another attack immediately
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

  takeDamage(amount, postureDmg = 0) {
    if (this.state === STATES.DEAD) return 'dead';
    
    // Shield block reduces damage
    if (this.isBlocking) {
      amount = Math.floor(amount * 0.3);
      postureDmg = Math.floor(postureDmg * 0.5);
      console.log(`[COMBAT] ${this.config.name} blocked! Reduced damage.`);
      // Shield flash
      if (this.shield) {
        this.shield.material.emissive.setHex(0x444466);
        setTimeout(() => this.shield.material.emissive.setHex(0x000000), 100);
      }
    }

    // Extra posture damage if staggered
    if (this.state === STATES.STAGGERED) postureDmg *= 2;

    this.health -= amount;
    this.posture = Math.min(this.maxPosture, this.posture + postureDmg);

    // Update health bar
    const ratio = Math.max(0, this.health / this.maxHealth);
    this.healthFill.scale.x = ratio;
    this.healthFill.position.x = -(1 - ratio) * 0.49 * 0.5;
    this.healthBarGroup.visible = true;
    
    // Update posture bar
    this._updatePostureBar();

    // Flash red on hit
    this.body.material.emissive.setHex(0x440000);
    setTimeout(() => this.body.material.emissive.setHex(0x000000), 100);

    if (this.health <= 0) {
      this._die();
      return 'died';
    }

    if (this.posture >= this.maxPosture && this.state !== STATES.STAGGERED) {
      this._triggerPostureBreak();
      return 'staggered';
    }

    // Aggro
    if (this.state === STATES.IDLE || this.state === STATES.PATROL) {
      this._changeState(STATES.CHASE);
    }

    return 'hit';
  }
  
  _triggerPostureBreak() {
    this._changeState(STATES.STAGGERED);
    this.breakIndicator.visible = true;
    
    // Big flash effect
    this.body.material.emissive.setHex(0xffcc00);
    this.eye.material.emissive.setHex(0xffcc00);
    setTimeout(() => {
      this.body.material.emissive.setHex(0x000000);
      this.eye.material.emissive.setHex(this.config.eyeColor);
    }, 300);
    
    // Posture bar flash
    this.postureFill.material.color.setHex(0xff4400);
    setTimeout(() => this.postureFill.material.color.setHex(0xffcc00), 300);
    
    console.log(`[COMBAT] ${this.config.name} POSTURE BROKEN!`);
  }
  
  _updatePostureBar() {
    const ratio = this.posture / this.maxPosture;
    this.postureFill.scale.x = ratio;
    this.postureFill.position.x = -(1 - ratio) * 0.49 * 0.5;
  }

  _die() {
    this.state = STATES.DEAD;
    this.health = 0;
    this.activeAttack = null;
    this.breakIndicator.visible = false;

    // Death visual: fall over
    this.body.rotation.x = Math.PI / 2;
    this.body.position.y = 0.4;
    this.healthBarGroup.visible = false;

    // Fade out
    this.body.material.transparent = true;
    const fadeOut = () => {
      this.body.material.opacity -= 0.02;
      if (this.body.material.opacity > 0) {
        requestAnimationFrame(fadeOut);
      } else {
        this.mesh.visible = false;
      }
    };
    setTimeout(fadeOut, 2000);
  }

  respawn() {
    this.health = this.maxHealth;
    this.posture = 0;
    this.state = STATES.IDLE;
    this.stateTimer = 0;
    this.chainAttackCount = 0;
    this.circleTimer = 0;
    this.isBlocking = false;
    this.mesh.position.copy(this.spawnPos);
    this.body.rotation.x = 0;
    this.body.rotation.z = 0;
    this.body.position.y = 1.0 * (this.config.hasShield ? 1.2 : (this.config.type === 'BERSERKER' ? 0.85 : 1.0));
    this.body.material.opacity = 1;
    this.body.material.transparent = false;
    this.mesh.visible = true;
    this.healthBarGroup.visible = false;
    this.breakIndicator.visible = false;
    this.healthFill.scale.x = 1;
    this.healthFill.position.x = 0;
    this.postureFill.scale.x = 0;
    this.postureFill.position.x = 0;
    if (this.shield) {
      this.shield.position.z = 0.2;
    }
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
      this.body.rotation.y = THREE.MathUtils.lerp(this.body.rotation.y, angle, 5 * delta);
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
  }
}
