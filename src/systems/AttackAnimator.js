/**
 * AttackAnimator.js - Per-Weapon Attack Animation System
 * Phase 19: Weapon Variety & Animations
 * 
 * Handles visual weapon animations for each weapon type:
 * - Swords: horizontal slash (light), overhead chop (heavy)
 * - Axes: wide horizontal swing (light), overhead slam (heavy)
 * - Spears: forward thrust (light), sweeping spin (heavy)
 * - Daggers: quick stab (light), rapid multi-stab (heavy)
 * - Greatswords: horizontal sweep (light), vertical slam (heavy)
 * 
 * Animation timing syncs with WeaponData movesets for proper hit windows.
 */

import * as THREE from 'three';

// Animation state machine
const ANIM_STATE = {
  IDLE: 'idle',
  WINDUP: 'windup',
  ACTIVE: 'active',
  RECOVERY: 'recovery',
};

// Idle weapon positions by category (rest position in hand)
const IDLE_POSITIONS = {
  sword: { pos: new THREE.Vector3(0.5, 0.2, 0.3), rot: new THREE.Euler(0, 0, -Math.PI / 6) },
  axe: { pos: new THREE.Vector3(0.55, 0.15, 0.25), rot: new THREE.Euler(0, 0, -Math.PI / 5) },
  spear: { pos: new THREE.Vector3(0.4, 0.4, 0.2), rot: new THREE.Euler(-Math.PI / 8, 0, -Math.PI / 4) },
  dagger: { pos: new THREE.Vector3(0.4, 0.1, 0.35), rot: new THREE.Euler(0, 0, -Math.PI / 8) },
  greatsword: { pos: new THREE.Vector3(0.6, 0.1, 0.2), rot: new THREE.Euler(0, -Math.PI / 6, -Math.PI / 5) },
};

// Attack animation keyframes per weapon type
// Each animation has: start, peak (hit frame), end positions/rotations
const ATTACK_ANIMATIONS = {
  // ========== SWORDS ==========
  sword: {
    light: {
      name: 'Horizontal Slash',
      // Wind-up: pull back to the right
      windup: {
        pos: new THREE.Vector3(0.7, 0.6, -0.2),
        rot: new THREE.Euler(0, Math.PI / 4, -Math.PI / 2),
      },
      // Active: sweep across to the left
      active: {
        pos: new THREE.Vector3(-0.4, 0.4, 0.6),
        rot: new THREE.Euler(0, -Math.PI / 3, Math.PI / 4),
      },
      // Recovery: return toward idle
      recovery: {
        pos: new THREE.Vector3(0.3, 0.3, 0.4),
        rot: new THREE.Euler(0, -Math.PI / 6, -Math.PI / 8),
      },
      trailColor: 0x88ccff,
    },
    heavy: {
      name: 'Overhead Chop',
      // Wind-up: raise above head
      windup: {
        pos: new THREE.Vector3(0.2, 1.2, -0.3),
        rot: new THREE.Euler(-Math.PI / 3, 0, 0),
      },
      // Active: slam down in front
      active: {
        pos: new THREE.Vector3(0.2, -0.2, 0.8),
        rot: new THREE.Euler(Math.PI / 4, 0, 0),
      },
      // Recovery: slow lift
      recovery: {
        pos: new THREE.Vector3(0.4, 0.4, 0.5),
        rot: new THREE.Euler(0, 0, -Math.PI / 6),
      },
      trailColor: 0xff8844,
      screenShake: true,
    },
  },
  
  // ========== AXES ==========
  axe: {
    light: {
      name: 'Wide Swing',
      windup: {
        pos: new THREE.Vector3(0.8, 0.5, -0.3),
        rot: new THREE.Euler(0, Math.PI / 3, -Math.PI / 2),
      },
      active: {
        pos: new THREE.Vector3(-0.5, 0.3, 0.7),
        rot: new THREE.Euler(0, -Math.PI / 2, Math.PI / 3),
      },
      recovery: {
        pos: new THREE.Vector3(0.2, 0.2, 0.4),
        rot: new THREE.Euler(0, -Math.PI / 4, -Math.PI / 6),
      },
      trailColor: 0xaa6633,
    },
    heavy: {
      name: 'Overhead Slam',
      windup: {
        pos: new THREE.Vector3(0.3, 1.4, -0.4),
        rot: new THREE.Euler(-Math.PI / 2.5, 0, 0),
      },
      active: {
        pos: new THREE.Vector3(0.2, -0.3, 0.9),
        rot: new THREE.Euler(Math.PI / 3, 0, 0),
      },
      recovery: {
        pos: new THREE.Vector3(0.4, 0.3, 0.5),
        rot: new THREE.Euler(Math.PI / 8, 0, -Math.PI / 8),
      },
      trailColor: 0xff4400,
      screenShake: true,
      groundImpact: true,
    },
  },
  
  // ========== SPEARS ==========
  spear: {
    light: {
      name: 'Forward Thrust',
      windup: {
        pos: new THREE.Vector3(0.3, 0.4, -0.4),
        rot: new THREE.Euler(-Math.PI / 6, 0, -Math.PI / 4),
      },
      active: {
        pos: new THREE.Vector3(0.2, 0.5, 1.2),
        rot: new THREE.Euler(0, 0, -Math.PI / 6),
      },
      recovery: {
        pos: new THREE.Vector3(0.35, 0.45, 0.4),
        rot: new THREE.Euler(-Math.PI / 10, 0, -Math.PI / 5),
      },
      trailColor: 0x44aaff,
    },
    heavy: {
      name: 'Sweeping Spin',
      windup: {
        pos: new THREE.Vector3(0.8, 0.5, 0.0),
        rot: new THREE.Euler(0, Math.PI / 2, -Math.PI / 3),
      },
      active: {
        pos: new THREE.Vector3(-0.6, 0.5, 0.4),
        rot: new THREE.Euler(0, -Math.PI / 2, Math.PI / 4),
      },
      recovery: {
        pos: new THREE.Vector3(0.3, 0.45, 0.3),
        rot: new THREE.Euler(-Math.PI / 8, 0, -Math.PI / 4),
      },
      trailColor: 0x00ccff,
      spin: true, // Full rotation effect
    },
  },
  
  // ========== DAGGERS ==========
  dagger: {
    light: {
      name: 'Quick Stab',
      windup: {
        pos: new THREE.Vector3(0.35, 0.2, -0.1),
        rot: new THREE.Euler(-Math.PI / 8, 0, -Math.PI / 6),
      },
      active: {
        pos: new THREE.Vector3(0.3, 0.3, 0.7),
        rot: new THREE.Euler(0, 0, -Math.PI / 10),
      },
      recovery: {
        pos: new THREE.Vector3(0.38, 0.15, 0.3),
        rot: new THREE.Euler(0, 0, -Math.PI / 8),
      },
      trailColor: 0xcccccc,
    },
    heavy: {
      name: 'Rapid Multi-Stab',
      // Multi-hit animation - oscillates during active phase
      windup: {
        pos: new THREE.Vector3(0.3, 0.25, -0.1),
        rot: new THREE.Euler(-Math.PI / 10, 0, -Math.PI / 8),
      },
      active: {
        pos: new THREE.Vector3(0.25, 0.3, 0.6),
        rot: new THREE.Euler(0, 0, -Math.PI / 12),
      },
      recovery: {
        pos: new THREE.Vector3(0.35, 0.12, 0.32),
        rot: new THREE.Euler(0, 0, -Math.PI / 8),
      },
      trailColor: 0xff66ff,
      multiStab: true,
      stabCount: 4,
    },
  },
  
  // ========== GREATSWORDS ==========
  greatsword: {
    light: {
      name: 'Horizontal Sweep',
      windup: {
        pos: new THREE.Vector3(0.9, 0.6, -0.4),
        rot: new THREE.Euler(0, Math.PI / 3, -Math.PI / 2.5),
      },
      active: {
        pos: new THREE.Vector3(-0.6, 0.4, 0.7),
        rot: new THREE.Euler(0, -Math.PI / 2, Math.PI / 3),
      },
      recovery: {
        pos: new THREE.Vector3(0.3, 0.3, 0.4),
        rot: new THREE.Euler(0, -Math.PI / 4, -Math.PI / 6),
      },
      trailColor: 0xffcc44,
      screenShake: true,
    },
    heavy: {
      name: 'Vertical Slam',
      windup: {
        pos: new THREE.Vector3(0.3, 1.6, -0.5),
        rot: new THREE.Euler(-Math.PI / 2.2, 0, 0),
      },
      active: {
        pos: new THREE.Vector3(0.2, -0.4, 1.0),
        rot: new THREE.Euler(Math.PI / 2.8, 0, 0),
      },
      recovery: {
        pos: new THREE.Vector3(0.5, 0.2, 0.5),
        rot: new THREE.Euler(Math.PI / 10, 0, -Math.PI / 6),
      },
      trailColor: 0xff6600,
      screenShake: true,
      groundImpact: true,
    },
  },
};

/**
 * Easing functions for smooth animation
 */
const Easing = {
  // Quick start, slow end (good for windup)
  easeOutQuad: (t) => t * (2 - t),
  // Slow start, quick end (good for strikes)
  easeInQuad: (t) => t * t,
  // Smooth both ends
  easeInOutQuad: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // Overshoot effect (good for heavy attacks)
  easeOutBack: (t) => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  // Elastic bounce (good for impact)
  easeOutElastic: (t) => {
    if (t === 0 || t === 1) return t;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (2 * Math.PI) / 3) + 1;
  },
};

export class AttackAnimator {
  constructor(equipmentManager, weaponManager, particleManager, cameraController) {
    this.equipmentManager = equipmentManager;
    this.weaponManager = weaponManager;
    this.particleManager = particleManager;
    this.cameraController = cameraController;
    
    // Current animation state
    this.state = ANIM_STATE.IDLE;
    this.currentWeaponType = 'sword';
    this.currentAttackType = null;
    this.animProgress = 0;
    
    // Timing from weapon moveset
    this.windupDuration = 0;
    this.activeDuration = 0;
    this.recoveryDuration = 0;
    this.totalDuration = 0;
    
    // Cached references
    this.weaponMesh = null;
    this.trailMesh = null;
    this.trailPositions = [];
    
    // Trail effect settings
    this.maxTrailPoints = 12;
    this.trailFadeSpeed = 8;
    
    // Multi-stab tracking (for daggers)
    this.stabIndex = 0;
    this.stabDirection = 1;
    
    // Store original idle position for return
    this.idlePosition = new THREE.Vector3();
    this.idleRotation = new THREE.Euler();
    
    console.log('[AttackAnimator] Initialized');
  }
  
  /**
   * Start an attack animation
   * @param {string} attackType - 'light' or 'heavy'
   * @param {number} speedMultiplier - From player DEX stat
   */
  startAttack(attackType, speedMultiplier = 1.0) {
    // Get weapon type from current weapon
    const weaponInfo = this.weaponManager?.getActiveWeaponInfo();
    if (weaponInfo && weaponInfo.category) {
      this.currentWeaponType = weaponInfo.category.toLowerCase();
    } else {
      this.currentWeaponType = 'sword';
    }
    
    // Ensure we have a valid weapon type
    if (!ATTACK_ANIMATIONS[this.currentWeaponType]) {
      this.currentWeaponType = 'sword';
    }
    
    this.currentAttackType = attackType;
    this.state = ANIM_STATE.WINDUP;
    this.animProgress = 0;
    
    // Get timing from weapon moveset
    const attackInfo = this.weaponManager?.getAttackInfo(attackType);
    if (attackInfo) {
      this.windupDuration = attackInfo.windupTime / speedMultiplier;
      this.activeDuration = (attackInfo.duration - attackInfo.windupTime - attackInfo.recoveryTime) / speedMultiplier;
      this.recoveryDuration = attackInfo.recoveryTime / speedMultiplier;
    } else {
      // Fallback timing
      const isHeavy = attackType === 'heavy';
      this.windupDuration = isHeavy ? 0.25 : 0.08;
      this.activeDuration = isHeavy ? 0.25 : 0.12;
      this.recoveryDuration = isHeavy ? 0.35 : 0.15;
    }
    
    this.totalDuration = this.windupDuration + this.activeDuration + this.recoveryDuration;
    
    // Cache weapon mesh reference
    this.weaponMesh = this.equipmentManager?.weaponMesh;
    
    // Store current idle position
    if (this.weaponMesh) {
      const idleData = IDLE_POSITIONS[this.currentWeaponType] || IDLE_POSITIONS.sword;
      this.idlePosition.copy(idleData.pos);
      this.idleRotation.copy(idleData.rot);
    }
    
    // Reset trail
    this.trailPositions = [];
    this.stabIndex = 0;
    this.stabDirection = 1;
    
    // Create trail effect
    this._createTrail();
    
    console.log(`[AttackAnimator] Starting ${this.currentWeaponType} ${attackType} attack`);
  }
  
  /**
   * Update animation state
   * @param {number} delta - Delta time in seconds
   */
  update(delta) {
    if (this.state === ANIM_STATE.IDLE) {
      this._updateIdleAnimation(delta);
      return;
    }
    
    this.animProgress += delta;
    
    // Determine current phase
    if (this.animProgress < this.windupDuration) {
      this.state = ANIM_STATE.WINDUP;
      this._animateWindup();
    } else if (this.animProgress < this.windupDuration + this.activeDuration) {
      this.state = ANIM_STATE.ACTIVE;
      this._animateActive();
    } else if (this.animProgress < this.totalDuration) {
      this.state = ANIM_STATE.RECOVERY;
      this._animateRecovery();
    } else {
      // Animation complete
      this._finishAnimation();
    }
    
    // Update trail
    this._updateTrail(delta);
  }
  
  /**
   * Cancel current animation and return to idle
   */
  cancel() {
    this.state = ANIM_STATE.IDLE;
    this.currentAttackType = null;
    this._resetToIdle();
    this._removeTrail();
  }
  
  /**
   * Idle breathing animation for weapon
   */
  _updateIdleAnimation(delta) {
    if (!this.weaponMesh) {
      this.weaponMesh = this.equipmentManager?.weaponMesh;
      if (!this.weaponMesh) return;
    }
    
    const time = Date.now() * 0.001;
    const breathe = Math.sin(time * 2) * 0.02;
    const sway = Math.sin(time * 1.5) * 0.01;
    
    // Get base idle position for current weapon
    const weaponInfo = this.weaponManager?.getActiveWeaponInfo();
    if (weaponInfo && weaponInfo.category) {
      this.currentWeaponType = weaponInfo.category.toLowerCase();
    }
    const idleData = IDLE_POSITIONS[this.currentWeaponType] || IDLE_POSITIONS.sword;
    
    this.weaponMesh.position.set(
      idleData.pos.x + sway,
      idleData.pos.y + breathe,
      idleData.pos.z
    );
    this.weaponMesh.rotation.set(
      idleData.rot.x,
      idleData.rot.y + sway * 0.5,
      idleData.rot.z
    );
  }
  
  /**
   * Animate windup phase
   */
  _animateWindup() {
    if (!this.weaponMesh) return;
    
    const anim = ATTACK_ANIMATIONS[this.currentWeaponType]?.[this.currentAttackType];
    if (!anim) return;
    
    // Progress within windup phase (0 to 1)
    const t = this.animProgress / this.windupDuration;
    const eased = Easing.easeOutQuad(t);
    
    // Interpolate from idle to windup position
    const startPos = this.idlePosition;
    const startRot = this.idleRotation;
    const endPos = anim.windup.pos;
    const endRot = anim.windup.rot;
    
    this.weaponMesh.position.lerpVectors(startPos, endPos, eased);
    this._lerpEuler(this.weaponMesh.rotation, startRot, endRot, eased);
  }
  
  /**
   * Animate active (strike) phase
   */
  _animateActive() {
    if (!this.weaponMesh) return;
    
    const anim = ATTACK_ANIMATIONS[this.currentWeaponType]?.[this.currentAttackType];
    if (!anim) return;
    
    // Progress within active phase (0 to 1)
    const activeStart = this.windupDuration;
    const t = (this.animProgress - activeStart) / this.activeDuration;
    
    // Use faster easing for strike
    const eased = Easing.easeInQuad(t);
    
    const startPos = anim.windup.pos;
    const startRot = anim.windup.rot;
    const endPos = anim.active.pos;
    const endRot = anim.active.rot;
    
    // Multi-stab handling for daggers
    if (anim.multiStab && anim.stabCount > 1) {
      const stabProgress = t * anim.stabCount;
      const stabPhase = stabProgress % 1;
      
      // Oscillate between windup and active positions
      if (Math.floor(stabProgress) % 2 === 0) {
        // Forward stab
        this.weaponMesh.position.lerpVectors(startPos, endPos, Easing.easeInQuad(stabPhase));
      } else {
        // Retract
        this.weaponMesh.position.lerpVectors(endPos, startPos, Easing.easeOutQuad(stabPhase));
      }
      this._lerpEuler(this.weaponMesh.rotation, startRot, endRot, 0.5 + Math.sin(stabProgress * Math.PI) * 0.3);
    } else {
      // Standard attack interpolation
      this.weaponMesh.position.lerpVectors(startPos, endPos, eased);
      this._lerpEuler(this.weaponMesh.rotation, startRot, endRot, eased);
    }
    
    // Screen shake on impact for heavy attacks
    if (anim.screenShake && t > 0.7 && t < 0.8) {
      if (this.cameraController) {
        this.cameraController.shakeLight();
      }
    }
    
    // Ground impact particles
    if (anim.groundImpact && t > 0.9 && this.particleManager) {
      // Spawn impact particles (only once per attack)
      if (!this._groundImpactSpawned) {
        // Get player world position
        const playerMesh = this.equipmentManager?.gameManager?.playerMesh;
        if (playerMesh) {
          const impactPos = playerMesh.position.clone();
          impactPos.y = 0.1;
          impactPos.z += 0.8; // In front of player
          this.particleManager.spawnGroundImpact?.(impactPos, anim.trailColor);
        }
        this._groundImpactSpawned = true;
      }
    }
    
    // Add trail point during active phase
    this._addTrailPoint();
  }
  
  /**
   * Animate recovery phase
   */
  _animateRecovery() {
    if (!this.weaponMesh) return;
    
    const anim = ATTACK_ANIMATIONS[this.currentWeaponType]?.[this.currentAttackType];
    if (!anim) return;
    
    // Progress within recovery phase (0 to 1)
    const recoveryStart = this.windupDuration + this.activeDuration;
    const t = (this.animProgress - recoveryStart) / this.recoveryDuration;
    const eased = Easing.easeInOutQuad(t);
    
    const startPos = anim.active.pos;
    const startRot = anim.active.rot;
    const endPos = anim.recovery.pos;
    const endRot = anim.recovery.rot;
    
    this.weaponMesh.position.lerpVectors(startPos, endPos, eased);
    this._lerpEuler(this.weaponMesh.rotation, startRot, endRot, eased);
  }
  
  /**
   * Finish animation and return to idle
   */
  _finishAnimation() {
    this.state = ANIM_STATE.IDLE;
    this.currentAttackType = null;
    this._groundImpactSpawned = false;
    
    // Smooth return to idle
    if (this.weaponMesh) {
      const idleData = IDLE_POSITIONS[this.currentWeaponType] || IDLE_POSITIONS.sword;
      this.weaponMesh.position.copy(idleData.pos);
      this.weaponMesh.rotation.copy(idleData.rot);
    }
    
    // Fade out trail
    this._fadeTrail();
  }
  
  /**
   * Reset weapon to idle position immediately
   */
  _resetToIdle() {
    if (!this.weaponMesh) return;
    
    const idleData = IDLE_POSITIONS[this.currentWeaponType] || IDLE_POSITIONS.sword;
    this.weaponMesh.position.copy(idleData.pos);
    this.weaponMesh.rotation.copy(idleData.rot);
  }
  
  /**
   * Interpolate between two Euler angles
   */
  _lerpEuler(target, start, end, t) {
    target.x = THREE.MathUtils.lerp(start.x, end.x, t);
    target.y = THREE.MathUtils.lerp(start.y, end.y, t);
    target.z = THREE.MathUtils.lerp(start.z, end.z, t);
  }
  
  // ========== TRAIL EFFECTS ==========
  
  /**
   * Create trail mesh for attack visuals
   */
  _createTrail() {
    if (this.trailMesh) {
      this._removeTrail();
    }
    
    const anim = ATTACK_ANIMATIONS[this.currentWeaponType]?.[this.currentAttackType];
    if (!anim) return;
    
    // Create line geometry for trail
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.maxTrailPoints * 3);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.LineBasicMaterial({
      color: anim.trailColor || 0xffffff,
      transparent: true,
      opacity: 0.6,
      linewidth: 2,
    });
    
    this.trailMesh = new THREE.Line(geometry, material);
    
    // Add to scene
    const playerMesh = this.equipmentManager?.gameManager?.playerMesh;
    if (playerMesh && playerMesh.parent) {
      playerMesh.parent.add(this.trailMesh);
    }
  }
  
  /**
   * Add current weapon tip position to trail
   */
  _addTrailPoint() {
    if (!this.weaponMesh || !this.trailMesh) return;
    
    // Get weapon tip world position
    const weaponTip = new THREE.Vector3(0, 0.5, 0); // Tip offset in local space
    this.weaponMesh.localToWorld(weaponTip);
    
    // Get player mesh to convert to world space properly
    const playerMesh = this.equipmentManager?.gameManager?.playerMesh;
    if (playerMesh) {
      // Transform through player's world matrix
      const worldPos = weaponTip.clone();
      playerMesh.localToWorld(worldPos);
      this.trailPositions.push(worldPos.clone());
    } else {
      this.trailPositions.push(weaponTip.clone());
    }
    
    // Limit trail length
    while (this.trailPositions.length > this.maxTrailPoints) {
      this.trailPositions.shift();
    }
    
    // Update geometry
    this._updateTrailGeometry();
  }
  
  /**
   * Update trail geometry from positions
   */
  _updateTrailGeometry() {
    if (!this.trailMesh || this.trailPositions.length < 2) return;
    
    const positions = this.trailMesh.geometry.attributes.position.array;
    
    for (let i = 0; i < this.maxTrailPoints; i++) {
      if (i < this.trailPositions.length) {
        const pos = this.trailPositions[i];
        positions[i * 3] = pos.x;
        positions[i * 3 + 1] = pos.y;
        positions[i * 3 + 2] = pos.z;
      } else {
        // Empty points
        const lastPos = this.trailPositions[this.trailPositions.length - 1];
        if (lastPos) {
          positions[i * 3] = lastPos.x;
          positions[i * 3 + 1] = lastPos.y;
          positions[i * 3 + 2] = lastPos.z;
        }
      }
    }
    
    this.trailMesh.geometry.attributes.position.needsUpdate = true;
    this.trailMesh.geometry.setDrawRange(0, this.trailPositions.length);
  }
  
  /**
   * Update trail fade
   */
  _updateTrail(delta) {
    if (!this.trailMesh) return;
    
    // Fade out when not in active state
    if (this.state !== ANIM_STATE.ACTIVE) {
      this.trailMesh.material.opacity -= delta * this.trailFadeSpeed;
      if (this.trailMesh.material.opacity <= 0) {
        this._removeTrail();
      }
    }
  }
  
  /**
   * Fade trail out
   */
  _fadeTrail() {
    // Trail will fade in update loop
  }
  
  /**
   * Remove trail from scene
   */
  _removeTrail() {
    if (this.trailMesh) {
      if (this.trailMesh.parent) {
        this.trailMesh.parent.remove(this.trailMesh);
      }
      this.trailMesh.geometry.dispose();
      this.trailMesh.material.dispose();
      this.trailMesh = null;
    }
    this.trailPositions = [];
  }
  
  // ========== GETTERS ==========
  
  /**
   * Check if currently animating
   */
  get isAnimating() {
    return this.state !== ANIM_STATE.IDLE;
  }
  
  /**
   * Get current attack animation info
   */
  getCurrentAnimation() {
    if (!this.currentAttackType) return null;
    return ATTACK_ANIMATIONS[this.currentWeaponType]?.[this.currentAttackType] || null;
  }
  
  /**
   * Get hitbox info for current attack (adjusted by weapon type)
   */
  getHitboxInfo() {
    const attackInfo = this.weaponManager?.getAttackInfo(this.currentAttackType);
    if (!attackInfo) return null;
    
    return {
      width: attackInfo.hitboxWidth,
      depth: attackInfo.hitboxDepth,
      knockback: attackInfo.knockback || 0,
      piercing: attackInfo.piercing || false,
      areaAttack: attackInfo.areaAttack || false,
    };
  }
}
