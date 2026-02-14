import * as THREE from 'three';

// XP thresholds: exponential curve - L2=100, L3=250, L4=500, etc.
// Formula: level N requires sum of (75 * 1.5^(n-2)) from n=2 to N
function getXPForLevel(level) {
  if (level <= 1) return 0;
  let total = 0;
  for (let n = 2; n <= level; n++) {
    total += Math.floor(75 * Math.pow(1.5, n - 2));
  }
  return total;
}

// Pre-calculate XP thresholds for levels 1-20
const XP_THRESHOLDS = [];
for (let i = 0; i <= 20; i++) {
  XP_THRESHOLDS[i] = getXPForLevel(i);
}
// Results: [0, 0, 75, 187, 356, 609, 989, 1559, 2413, 3695, 5617, 8501, 12827, 19315, 29048, 43647, 65545, 98393, 147664, 221571, 332431]

export class GameManager {
  constructor() {
    // === XP & LEVELING SYSTEM ===
    this.currentXP = 0;
    this.currentLevel = 1;
    this.maxLevel = 20;
    this.xpThresholds = XP_THRESHOLDS;
    
    // Floating text queue for XP gains
    this.floatingTexts = [];
    
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
    
    // Audio manager (set via main.js)
    this.audioManager = null;
    
    // Hitstop system - brief freeze frames on impact
    this.hitstopActive = false;
    this.hitstopDuration = 0;
    this.hitstopTimer = 0;
    
    // HUD reference for screen effects (set via main.js)
    this.hud = null;
    
    // Camera controller reference for shake (set via main.js)
    this.cameraController = null;
    
    // Load saved progression from localStorage
    this._loadProgression();
  }
  
  // === XP & LEVELING METHODS ===
  
  /**
   * Load saved XP/Level from localStorage
   */
  _loadProgression() {
    try {
      const saved = localStorage.getItem('ashen_progression');
      if (saved) {
        const data = JSON.parse(saved);
        this.currentXP = data.currentXP || 0;
        this.currentLevel = data.currentLevel || 1;
        console.log(`[GameManager] Loaded progression: Level ${this.currentLevel}, XP ${this.currentXP}`);
      }
    } catch (e) {
      console.warn('[GameManager] Failed to load progression:', e);
    }
  }
  
  /**
   * Save XP/Level to localStorage
   */
  _saveProgression() {
    try {
      const data = {
        currentXP: this.currentXP,
        currentLevel: this.currentLevel,
      };
      localStorage.setItem('ashen_progression', JSON.stringify(data));
    } catch (e) {
      console.warn('[GameManager] Failed to save progression:', e);
    }
  }
  
  /**
   * Gain XP from killing an enemy
   * @param {number} amount - XP amount
   * @param {THREE.Vector3} position - World position for floating text
   */
  gainXP(amount, position = null) {
    if (this.currentLevel >= this.maxLevel) return; // Maxed out
    
    const previousLevel = this.currentLevel;
    this.currentXP += amount;
    
    // Spawn floating XP text
    if (position && this.player) {
      this._spawnFloatingText(`+${amount} XP`, position.clone(), 0x00ff88);
    }
    
    // Check for level up(s)
    while (this.currentLevel < this.maxLevel && 
           this.currentXP >= this.xpThresholds[this.currentLevel + 1]) {
      this._levelUp();
    }
    
    this._saveProgression();
  }
  
  /**
   * Handle level up
   */
  _levelUp() {
    this.currentLevel++;
    
    console.log(`[GameManager] LEVEL UP! Now level ${this.currentLevel}`);
    
    // Full health restore
    this.health = this.maxHealth;
    this.stamina = this.maxStamina;
    this.posture = 0;
    
    // Play level up sound
    if (this.audioManager) {
      this.audioManager.play('levelUp', { volume: 0.8 });
    }
    
    // Spawn level up particles at player
    if (this.particleManager && this.player) {
      this.particleManager.spawnLevelUpEffect(this.player.mesh.position.clone());
    }
    
    // Spawn floating level up text
    if (this.player) {
      this._spawnFloatingText(`LEVEL ${this.currentLevel}!`, 
        this.player.mesh.position.clone().add(new THREE.Vector3(0, 2.5, 0)), 
        0xffdd00, true);
    }
    
    // Flash HUD
    if (this.hud && this.hud.flashLevelUp) {
      this.hud.flashLevelUp();
    }
  }
  
  /**
   * Spawn floating text in world space
   */
  _spawnFloatingText(text, position, color = 0xffffff, isLevelUp = false) {
    // Use floatingText renderer if available
    if (this.floatingText) {
      // Convert hex color to CSS
      const cssColor = typeof color === 'number' 
        ? '#' + color.toString(16).padStart(6, '0')
        : color;
      
      this.floatingText.spawn(text, position, {
        color: cssColor,
        isLevelUp,
        duration: isLevelUp ? 2.5 : 1.5,
      });
    }
  }
  
  /**
   * Get XP progress towards next level (0-1)
   */
  getXPProgress() {
    if (this.currentLevel >= this.maxLevel) return 1;
    
    const currentLevelXP = this.xpThresholds[this.currentLevel];
    const nextLevelXP = this.xpThresholds[this.currentLevel + 1];
    const xpIntoLevel = this.currentXP - currentLevelXP;
    const xpNeeded = nextLevelXP - currentLevelXP;
    
    return xpIntoLevel / xpNeeded;
  }
  
  /**
   * Get XP needed for next level
   */
  getXPToNextLevel() {
    if (this.currentLevel >= this.maxLevel) return 0;
    return this.xpThresholds[this.currentLevel + 1] - this.currentXP;
  }
  
  /**
   * Calculate XP reward for an enemy based on type and distance scaling
   */
  calculateEnemyXP(enemy) {
    // Base XP from enemy config remnant (XP = remnant * 0.5)
    let baseXP = Math.floor((enemy.config?.remnantDrop || 25) * 0.5);
    
    // Elite bonus
    if (enemy.config?.isElite) {
      baseXP = Math.floor(baseXP * 1.5);
    }
    
    // Boss bonus
    if (enemy.isBoss) {
      baseXP = 200; // Bosses give flat 200 XP
    }
    
    return baseXP;
  }
  
  // Hitstop - brief game freeze on impact (makes hits feel powerful)
  triggerHitstop(duration = 0.04) {
    this.hitstopActive = true;
    this.hitstopDuration = duration;
    this.hitstopTimer = 0;
  }
  
  // Light hitstop for normal hits (30-40ms)
  hitstopLight() {
    this.triggerHitstop(0.035);
  }
  
  // Heavy hitstop for heavy attacks (50-70ms) 
  hitstopHeavy() {
    this.triggerHitstop(0.06);
  }
  
  // Check if game is in hitstop (call from update loop)
  isInHitstop() {
    return this.hitstopActive;
  }
  
  // Update hitstop timer
  updateHitstop(delta) {
    if (this.hitstopActive) {
      this.hitstopTimer += delta;
      if (this.hitstopTimer >= this.hitstopDuration) {
        this.hitstopActive = false;
        this.hitstopTimer = 0;
      }
      return true; // Still in hitstop
    }
    return false;
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
    const canUse = this.stamina >= amount;
    // Flash warning if trying to use stamina but can't
    if (!canUse && this.hud) {
      this.hud.flashStaminaDepleted();
      // Play depleted sound
      if (this.audioManager && this.player) {
        this.audioManager.play('staminaDepleted', {
          position: this.player.mesh.position,
          volume: 0.4
        });
      }
    }
    return canUse;
  }

  useStamina(amount) {
    this.stamina = Math.max(0, this.stamina - amount);
    this.staminaRegenTimer = 0;
    
    // Warning when stamina gets very low after use
    if (this.stamina < 15 && this.hud) {
      this.hud.flashStaminaDepleted();
    }
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

    // Play damage sound
    if (this.audioManager && this.player) {
      this.audioManager.play('playerDamage', { 
        position: this.player.mesh.position,
        volume: 0.7 
      });
    }

    if (this.health <= 0) {
      this.die(damageType);
      return 'died';
    }

    if (this.posture >= this.maxPosture) {
      // Play posture break sound
      if (this.audioManager && this.player) {
        this.audioManager.play('postureBreak', { 
          position: this.player.mesh.position,
          volume: 0.8 
        });
      }
      return 'posture_broken';
    }

    return 'hit';
  }

  die(damageType = 'unknown') {
    this.isDead = true;
    this.deathCount++;
    this.health = 0;
    
    // Play death sound
    if (this.audioManager) {
      this.audioManager.play('death', { volume: 0.8 });
    }

    // Store death position for bloodstain
    const deathPos = this.player ? this.player.mesh.position.clone() : this.checkpoint.clone();

    // Spawn player death visual effect
    if (this.particleManager && this.player) {
      this.particleManager.spawnPlayerDeathEffect(deathPos, this.camera);
    }

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
  setEntities(player, enemyManager, scene, camera = null) {
    this.player = player;
    this.enemyManager = enemyManager;
    this.scene = scene;
    this.camera = camera;
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
      // Play pickup sound
      if (this.audioManager) {
        this.audioManager.play('itemPickup', { volume: 0.6 });
      }
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
    // Play infusion sound
    if (this.audioManager) {
      this.audioManager.play('menuConfirm', { volume: 0.5 });
    }
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
