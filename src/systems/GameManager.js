import * as THREE from 'three';

export class GameManager {
  constructor() {
    // Progression
    this.remnant = 0;
    this.heldRemnant = 0;
    this.deathCount = 0;
    this.deathLessons = {}; // damageType -> resistance (0-0.25)

    // Infusions (4 tracks: Strength, Vitality, Stamina, Spirit)
    this.infusions = { strength: 0, vitality: 0, stamina: 0, spirit: 0 };
    this.MAX_TOTAL_DEPTH = 20;
    this.MAX_TRACK_DEPTH = 5;
    
    // Bonfire position for crucible proximity check
    this.bonfirePosition = new THREE.Vector3(0, 0, 5);

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

    // Entity references (set via setEntities)
    this.player = null;
    this.enemyManager = null;

    // Bloodstain (remnant recovery at death location)
    this.bloodstain = null;
    this.bloodstainMesh = null;

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

    // Store death position for bloodstain
    const deathPos = this.player ? this.player.mesh.position.clone() : this.checkpoint.clone();

    // Remove old bloodstain if exists
    if (this.bloodstainMesh && this.scene) {
      this.scene.remove(this.bloodstainMesh);
      this.bloodstainMesh = null;
    }

    // If player had remnant, create bloodstain
    if (this.remnant > 0 && this.scene) {
      this.heldRemnant = this.remnant;
      this.remnant = 0;
      this.bloodstain = deathPos.clone();
      this.bloodstain.y = 0.05; // Slightly above ground

      // Create visual bloodstain marker
      const geometry = new THREE.CircleGeometry(0.5, 16);
      const material = new THREE.MeshBasicMaterial({
        color: 0xaa3333,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      this.bloodstainMesh = new THREE.Mesh(geometry, material);
      this.bloodstainMesh.rotation.x = -Math.PI / 2;
      this.bloodstainMesh.position.copy(this.bloodstain);
      this.scene.add(this.bloodstainMesh);
      console.log(`[REMNANT] Dropped ${this.heldRemnant} remnant at bloodstain`);
    } else {
      // No remnant to drop, but previous bloodstain is now lost
      this.heldRemnant = 0;
      this.bloodstain = null;
    }

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

    // Reset player position
    if (this.player) {
      this.player.resetPosition();
      console.log('[RESPAWN] Player reset to checkpoint');
    }

    // Reset all enemies
    if (this.enemyManager) {
      this.enemyManager.resetAll();
    }

    // Hide death screen
    if (this.deathScreenEl) this.deathScreenEl.classList.remove('visible');
  }

  setCheckpoint(pos) {
    this.checkpoint.copy(pos);
  }

  // Set entity references for respawn coordination
  setEntities(player, enemyManager, scene) {
    this.player = player;
    this.enemyManager = enemyManager;
    this.scene = scene;
  }

  // --- Remnant ---
  addRemnant(amount) {
    this.remnant += amount;
  }

  // Collect bloodstain remnant
  collectBloodstain() {
    if (!this.bloodstain || !this.player) return false;
    const dist = this.player.mesh.position.distanceTo(this.bloodstain);
    if (dist < 2.0) {
      this.remnant += this.heldRemnant;
      console.log(`[REMNANT] Recovered ${this.heldRemnant} remnant from bloodstain!`);
      this.heldRemnant = 0;
      if (this.bloodstainMesh && this.scene) {
        this.scene.remove(this.bloodstainMesh);
      }
      this.bloodstain = null;
      this.bloodstainMesh = null;
      return true;
    }
    return false;
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
      // Strength: +10% damage per level
      damageMult: 1.0 + (this.infusions.strength * 0.1),
      // Vitality: +20 max HP per level
      bonusHealth: this.infusions.vitality * 20,
      // Stamina: +15 max stamina per level, +10% regen
      bonusStamina: this.infusions.stamina * 15,
      staminaRegenMult: 1.0 + (this.infusions.stamina * 0.1),
      // Spirit: +5% posture resistance, faster posture regen
      postureResist: this.infusions.spirit * 0.05,
      postureRegenMult: 1.0 + (this.infusions.spirit * 0.15),
    };
  }
  
  // Apply infusion bonuses to stats (call after infusing)
  applyInfusionBonuses() {
    const bonuses = this.getInfusionBonuses();
    this.maxHealth = 100 + bonuses.bonusHealth;
    this.maxStamina = 100 + bonuses.bonusStamina;
    // Keep current ratio if alive
    if (!this.isDead) {
      this.health = Math.min(this.health, this.maxHealth);
      this.stamina = Math.min(this.stamina, this.maxStamina);
    }
  }
  
  // Check if player is near bonfire
  isNearBonfire() {
    if (!this.player) return false;
    const dist = this.player.mesh.position.distanceTo(this.bonfirePosition);
    return dist < 3.0;
  }
  
  // Get info about a specific track
  getTrackInfo(track) {
    const level = this.infusions[track] || 0;
    const nextLevel = level + 1;
    const cost = nextLevel <= this.MAX_TRACK_DEPTH ? this.getInfusionCost(track, nextLevel) : null;
    const canAfford = cost !== null && this.remnant >= cost;
    const maxed = level >= this.MAX_TRACK_DEPTH;
    
    const descriptions = {
      strength: { name: 'Strength', desc: '+10% damage per level', bonus: `+${level * 10}% damage` },
      vitality: { name: 'Vitality', desc: '+20 max HP per level', bonus: `+${level * 20} HP` },
      stamina: { name: 'Stamina', desc: '+15 max stamina, +10% regen per level', bonus: `+${level * 15} stamina` },
      spirit: { name: 'Spirit', desc: '+5% posture resist, +15% posture regen per level', bonus: `+${level * 5}% resist` },
    };
    
    return {
      level,
      nextLevel,
      cost,
      canAfford,
      maxed,
      ...descriptions[track],
    };
  }
}
