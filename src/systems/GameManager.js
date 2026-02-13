import * as THREE from 'three';

export class GameManager {
  constructor() {
    // Progression
    this.remnant = 0;
    this.heldRemnant = 0;
    this.deathCount = 0;
    this.deathLessons = {}; // damageType -> resistance (0-0.25)

    // Infusions
    this.infusions = { bone: 0, blood: 0, stone: 0 };
    this.MAX_TOTAL_DEPTH = 10;
    this.MAX_TRACK_DEPTH = 5;

    // Player stats
    this.maxHealth = 100;
    this.maxStamina = 100;
    this.maxPosture = 100;
    this.health = this.maxHealth;
    this.stamina = this.maxStamina;
    this.posture = 0;

    // State
    this.isDead = false;
    this.checkpoint = new THREE.Vector3(0, 0, 5);
    this.deathScreenEl = document.getElementById('death-screen');

    // Stamina regen
    this.staminaRegenDelay = 0.5;
    this.staminaRegenRate = 25;
    this.staminaRegenTimer = 0;

    // Posture regen
    this.postureRegenDelay = 1.0;
    this.postureRegenRate = 15;
    this.postureRegenTimer = 0;
  }

  update(delta) {
    if (this.isDead) return;

    // Stamina regen
    this.staminaRegenTimer += delta;
    if (this.staminaRegenTimer >= this.staminaRegenDelay && this.stamina < this.maxStamina) {
      this.stamina = Math.min(this.maxStamina, this.stamina + this.staminaRegenRate * delta);
    }

    // Posture regen
    this.postureRegenTimer += delta;
    if (this.postureRegenTimer >= this.postureRegenDelay && this.posture > 0) {
      this.posture = Math.max(0, this.posture - this.postureRegenRate * delta);
    }
  }

  // --- Stamina ---
  canUseStamina(amount) {
    return this.stamina >= amount;
  }

  useStamina(amount) {
    this.stamina = Math.max(0, this.stamina - amount);
    this.staminaRegenTimer = 0;
  }

  // --- Damage ---
  takeDamage(amount, damageType = 'physical', postureDmg = 0, isBlocking = false) {
    if (this.isDead) return;

    // Apply death lesson resistance
    const resistance = this.deathLessons[damageType] || 0;
    let finalDamage = Math.floor(amount * (1 - resistance));

    if (isBlocking) {
      const blockCost = finalDamage * 0.5;
      if (this.canUseStamina(blockCost)) {
        this.useStamina(blockCost);
        finalDamage = Math.floor(finalDamage * 0.2);
        postureDmg *= 0.5;
      } else {
        // Guard broken
        this.stamina = 0;
        this.posture = this.maxPosture;
        return 'guard_broken';
      }
    }

    this.health -= finalDamage;
    this.posture = Math.min(this.maxPosture, this.posture + postureDmg);
    this.postureRegenTimer = 0;

    if (this.health <= 0) {
      this.die(damageType);
      return 'died';
    }

    if (this.posture >= this.maxPosture) {
      return 'posture_broken';
    }

    return 'hit';
  }

  die(damageType = 'unknown') {
    this.isDead = true;
    this.deathCount++;
    this.health = 0;

    // Drop remnant
    this.heldRemnant = this.remnant;
    this.remnant = 0;

    // Learn from death
    if (!this.deathLessons[damageType]) this.deathLessons[damageType] = 0;
    this.deathLessons[damageType] = Math.min(0.25, this.deathLessons[damageType] + 0.005);

    // Show death screen
    if (this.deathScreenEl) this.deathScreenEl.classList.add('visible');

    // Respawn after delay
    setTimeout(() => this.respawn(), 3000);
  }

  respawn() {
    this.isDead = false;
    this.health = this.maxHealth;
    this.stamina = this.maxStamina;
    this.posture = 0;
    if (this.deathScreenEl) this.deathScreenEl.classList.remove('visible');
  }

  setCheckpoint(pos) {
    this.checkpoint.copy(pos);
  }

  // --- Remnant ---
  addRemnant(amount) {
    this.remnant += amount;
  }

  // --- Infusions ---
  getTotalDepth() {
    return this.infusions.bone + this.infusions.blood + this.infusions.stone;
  }

  canInfuse(track) {
    if (!this.infusions.hasOwnProperty(track)) return false;
    if (this.infusions[track] >= this.MAX_TRACK_DEPTH) return false;
    if (this.getTotalDepth() >= this.MAX_TOTAL_DEPTH) return false;
    return true;
  }

  getInfusionCost(track, depth) {
    return 100 * depth * depth;
  }

  infuse(track) {
    if (!this.canInfuse(track)) return false;
    const nextDepth = this.infusions[track] + 1;
    const cost = this.getInfusionCost(track, nextDepth);
    if (this.remnant < cost) return false;
    this.remnant -= cost;
    this.infusions[track] = nextDepth;
    return true;
  }

  getInfusionBonuses() {
    return {
      damageMult: 1.0 + (this.infusions.bone * 0.1),
      critChance: this.infusions.bone * 0.05,
      lifesteal: this.infusions.blood * 0.03,
      rageDamage: this.infusions.blood * 0.15,
      poise: this.infusions.stone * 20,
      resistance: this.infusions.stone * 0.05,
      dodgeIframes: 1.0 - (this.infusions.stone * 0.08),
    };
  }
}
