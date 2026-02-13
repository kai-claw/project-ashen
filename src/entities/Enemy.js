import * as THREE from 'three';

const STATES = {
  IDLE: 'idle',
  PATROL: 'patrol',
  CHASE: 'chase',
  ATTACK: 'attack',
  STAGGERED: 'staggered',
  DEAD: 'dead',
};

export class Enemy {
  constructor(scene, position, config = {}) {
    this.scene = scene;
    this.config = {
      name: config.name || 'Enemy',
      health: config.health || 50,
      damage: config.damage || 20,
      postureDmg: config.postureDmg || 15,
      moveSpeed: config.moveSpeed || 2.5,
      detectionRange: config.detectionRange || 10,
      attackRange: config.attackRange || 2.2,
      attackCooldown: config.attackCooldown || 1.5,
      remnantDrop: config.remnantDrop || 50,
      patrolRadius: config.patrolRadius || 3,
    };

    this.maxHealth = this.config.health;
    this.health = this.maxHealth;
    this.maxPosture = 60;
    this.posture = 0;
    this.state = STATES.IDLE;
    this.stateTimer = 0;
    this.hitThisSwing = false;
    this.activeAttack = null;

    this.spawnPos = position.clone();
    this.patrolTarget = position.clone();
    this.patrolWait = 0;

    // Create mesh
    this.mesh = new THREE.Group();
    this.mesh.position.copy(position);

    // Body - red-tinted capsule
    const bodyGeo = new THREE.CapsuleGeometry(0.35, 0.9, 8, 16);
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0x4a2a2a,
      roughness: 0.7,
      metalness: 0.2,
    });
    this.body = new THREE.Mesh(bodyGeo, bodyMat);
    this.body.position.y = 1.0;
    this.body.castShadow = true;
    this.mesh.add(this.body);

    // Eyes (glowing red)
    const eyeGeo = new THREE.BoxGeometry(0.25, 0.05, 0.05);
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0xff3333,
      emissive: 0xcc0000,
      emissiveIntensity: 3,
    });
    const eye = new THREE.Mesh(eyeGeo, eyeMat);
    eye.position.set(0, 1.6, 0.3);
    this.mesh.add(eye);

    // Weapon
    const weaponGeo = new THREE.BoxGeometry(0.06, 0.7, 0.06);
    const weaponMat = new THREE.MeshStandardMaterial({
      color: 0x666666,
      metalness: 0.6,
      roughness: 0.4,
    });
    this.weapon = new THREE.Mesh(weaponGeo, weaponMat);
    this.weapon.position.set(0.4, 1.0, 0);
    this.weapon.castShadow = true;
    this.mesh.add(this.weapon);

    // Health bar (floating above)
    this.healthBarGroup = new THREE.Group();
    this.healthBarGroup.position.y = 2.4;

    const bgGeo = new THREE.PlaneGeometry(1.0, 0.08);
    const bgMat = new THREE.MeshBasicMaterial({ color: 0x111111, side: THREE.DoubleSide });
    const bg = new THREE.Mesh(bgGeo, bgMat);
    this.healthBarGroup.add(bg);

    const fillGeo = new THREE.PlaneGeometry(0.98, 0.06);
    const fillMat = new THREE.MeshBasicMaterial({ color: 0xcc3333, side: THREE.DoubleSide });
    this.healthFill = new THREE.Mesh(fillGeo, fillMat);
    this.healthFill.position.z = 0.001;
    this.healthBarGroup.add(this.healthFill);

    this.mesh.add(this.healthBarGroup);
    this.healthBarGroup.visible = false;

    scene.add(this.mesh);
  }

  update(delta, player) {
    if (this.state === STATES.DEAD) return;

    this.stateTimer += delta;
    const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);

    // Billboard health bar
    if (this.healthBarGroup.visible) {
      const cam = this.scene.getObjectByProperty('type', 'PerspectiveCamera');
      if (cam) this.healthBarGroup.lookAt(cam.position);
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
        if (distToPlayer <= this.config.attackRange) {
          this._changeState(STATES.ATTACK);
          break;
        }
        this._moveToward(player.mesh.position, this.config.moveSpeed, delta);
        this._faceTarget(player.mesh.position, delta);
        break;

      case STATES.ATTACK:
        this._processAttack(delta, player);
        break;

      case STATES.STAGGERED:
        if (this.stateTimer >= 1.5) {
          this.posture = 0;
          this._changeState(distToPlayer < this.config.detectionRange ? STATES.CHASE : STATES.IDLE);
        }
        break;
    }

    // Posture regen (when not attacked recently)
    if (this.state !== STATES.STAGGERED && this.posture > 0) {
      this.posture = Math.max(0, this.posture - 8 * delta);
    }
  }

  _processAttack(delta, player) {
    // Wind up (0 - 0.5s)
    if (this.stateTimer < 0.5) {
      this._faceTarget(player.mesh.position, delta * 2);
      // Wind up animation
      this.weapon.rotation.z = -this.stateTimer * 3;
      return;
    }

    // Strike (0.5 - 0.7s)
    if (this.stateTimer >= 0.5 && this.stateTimer < 0.7) {
      if (!this.hitThisSwing) {
        this.activeAttack = {
          position: this.mesh.position.clone().add(
            new THREE.Vector3(
              Math.sin(this.body.rotation.y),
              1,
              Math.cos(this.body.rotation.y)
            ).multiplyScalar(1.0)
          ),
          range: this.config.attackRange,
          damage: this.config.damage,
          postureDmg: this.config.postureDmg,
        };
      }
      // Swing animation
      this.weapon.rotation.z = Math.sin((this.stateTimer - 0.5) / 0.2 * Math.PI) * 2;
    }

    // Recovery (0.7 - cooldown)
    if (this.stateTimer >= 0.7) {
      this.activeAttack = null;
      this.weapon.rotation.z *= 0.9; // Return to rest
    }

    // End attack
    if (this.stateTimer >= this.config.attackCooldown) {
      this.hitThisSwing = false;
      this.activeAttack = null;
      this.weapon.rotation.z = 0;

      const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
      if (distToPlayer <= this.config.attackRange) {
        this._changeState(STATES.ATTACK);
      } else {
        this._changeState(STATES.CHASE);
      }
    }
  }

  takeDamage(amount, postureDmg = 0) {
    if (this.state === STATES.DEAD) return 'dead';

    // Extra posture damage if staggered
    if (this.state === STATES.STAGGERED) postureDmg *= 2;

    this.health -= amount;
    this.posture = Math.min(this.maxPosture, this.posture + postureDmg);

    // Update health bar
    const ratio = Math.max(0, this.health / this.maxHealth);
    this.healthFill.scale.x = ratio;
    this.healthFill.position.x = -(1 - ratio) * 0.49 * 0.5;
    this.healthBarGroup.visible = true;

    // Flash red on hit
    this.body.material.emissive.setHex(0x440000);
    setTimeout(() => this.body.material.emissive.setHex(0x000000), 100);

    if (this.health <= 0) {
      this._die();
      return 'died';
    }

    if (this.posture >= this.maxPosture && this.state !== STATES.STAGGERED) {
      this._changeState(STATES.STAGGERED);
      return 'staggered';
    }

    // Aggro
    if (this.state === STATES.IDLE || this.state === STATES.PATROL) {
      this._changeState(STATES.CHASE);
    }

    return 'hit';
  }

  _die() {
    this.state = STATES.DEAD;
    this.health = 0;
    this.activeAttack = null;

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
    this.mesh.position.copy(this.spawnPos);
    this.body.rotation.x = 0;
    this.body.position.y = 1.0;
    this.body.material.opacity = 1;
    this.body.material.transparent = false;
    this.mesh.visible = true;
    this.healthBarGroup.visible = false;
    this.healthFill.scale.x = 1;
    this.healthFill.position.x = 0;
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
    this.state = newState;
    this.stateTimer = 0;
  }
}
