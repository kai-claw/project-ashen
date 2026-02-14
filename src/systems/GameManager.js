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

// Ability definitions with unlock levels and base cooldowns
const ABILITIES = {
  dash: {
    name: 'Dash',
    description: 'Quick dodge in any direction',
    unlockLevel: 3,
    baseCooldown: 3.0, // seconds
    hotkey: 'R',
    staminaCost: 15,
  },
  heavyCharge: {
    name: 'Heavy Charge',
    description: 'Hold for a powerful charged strike',
    unlockLevel: 5,
    baseCooldown: 0, // No cooldown, resource-based
    hotkey: 'HOLD LMB',
    staminaCost: 35,
  },
  parry: {
    name: 'Parry',
    description: 'Perfect timed block for riposte',
    unlockLevel: 8,
    baseCooldown: 1.5,
    hotkey: 'F',
    staminaCost: 10,
  },
  warCry: {
    name: 'War Cry',
    description: 'Damage buff, scares weak enemies',
    unlockLevel: 12,
    baseCooldown: 20.0,
    hotkey: 'G',
    staminaCost: 25,
  },
};

export class GameManager {
  constructor() {
    // === XP & LEVELING SYSTEM ===
    this.currentXP = 0;
    this.currentLevel = 1;
    this.maxLevel = 20;
    this.xpThresholds = XP_THRESHOLDS;
    
    // === STAT POINT SYSTEM ===
    // 3 points earned per level (starting at level 1 = 0 points, level 2 = 3, etc.)
    this.statPointsPerLevel = 3;
    this.stats = {
      vigor: 0,        // +5 Max HP per point
      endurance: 0,    // +5 Max Stamina, +5% regen per point
      strength: 0,     // +5% melee damage per point
      dexterity: 0,    // +3% attack speed per point
      mind: 0,         // +5% cooldown reduction per point
      intelligence: 0, // +10 Max Mana, +5% mana regen per point (Phase 20)
    };
    this.spentStatPoints = 0;
    
    // Mana manager reference (set via main.js)
    this.manaManager = null;
    
    // === ABILITY SYSTEM ===
    this.abilities = ABILITIES;
    this.abilityCooldowns = {
      dash: 0,
      heavyCharge: 0,
      parry: 0,
      warCry: 0,
    };
    this.unlockedAbilities = new Set();
    this.warCryActive = false;
    this.warCryDuration = 8.0; // seconds
    this.warCryTimer = 0;
    this.warCryDamageBonus = 0.5; // +50% damage
    
    // Mind stat (affects cooldowns) - default 0
    this.mindStat = 0;
    
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
   * Load saved XP/Level/Stats from localStorage
   */
  _loadProgression() {
    try {
      const saved = localStorage.getItem('ashen_progression');
      if (saved) {
        const data = JSON.parse(saved);
        this.currentXP = data.currentXP || 0;
        this.currentLevel = data.currentLevel || 1;
        
        // Load stats
        if (data.stats) {
          this.stats = {
            vigor: data.stats.vigor || 0,
            endurance: data.stats.endurance || 0,
            strength: data.stats.strength || 0,
            dexterity: data.stats.dexterity || 0,
            mind: data.stats.mind || 0,
            intelligence: data.stats.intelligence || 0,
          };
        }
        this.spentStatPoints = data.spentStatPoints || 0;
        
        // Apply stat bonuses to max health/stamina
        this._applyStatBonuses();
        
        console.log(`[GameManager] Loaded progression: Level ${this.currentLevel}, XP ${this.currentXP}, Stats: ${JSON.stringify(this.stats)}`);
      }
    } catch (e) {
      console.warn('[GameManager] Failed to load progression:', e);
    }
  }
  
  /**
   * Save XP/Level/Stats to localStorage
   */
  _saveProgression() {
    try {
      const data = {
        currentXP: this.currentXP,
        currentLevel: this.currentLevel,
        stats: this.stats,
        spentStatPoints: this.spentStatPoints,
      };
      localStorage.setItem('ashen_progression', JSON.stringify(data));
    } catch (e) {
      console.warn('[GameManager] Failed to save progression:', e);
    }
  }
  
  // === STAT POINT METHODS ===
  
  /**
   * Get total stat points earned (3 per level after level 1)
   */
  getTotalStatPoints() {
    return Math.max(0, (this.currentLevel - 1) * this.statPointsPerLevel);
  }
  
  /**
   * Get available (unspent) stat points
   */
  getAvailableStatPoints() {
    return this.getTotalStatPoints() - this.spentStatPoints;
  }
  
  /**
   * Spend a stat point on a specific stat
   */
  spendStatPoint(statId) {
    if (this.getAvailableStatPoints() <= 0) {
      console.warn('[GameManager] No stat points available');
      return false;
    }
    
    if (!this.stats.hasOwnProperty(statId)) {
      console.warn(`[GameManager] Invalid stat: ${statId}`);
      return false;
    }
    
    this.stats[statId]++;
    this.spentStatPoints++;
    
    // Apply new bonuses
    this._applyStatBonuses();
    
    // Save progression
    this._saveProgression();
    
    console.log(`[GameManager] Spent point on ${statId}: now ${this.stats[statId]}`);
    return true;
  }
  
  /**
   * Get all stat bonuses calculated from current stats
   */
  getStatBonuses() {
    return {
      // Vigor: +5 Max HP per point
      bonusHealth: this.stats.vigor * 5,
      // Endurance: +5 Max Stamina per point, +5% regen per point
      bonusStamina: this.stats.endurance * 5,
      staminaRegenMult: 1.0 + (this.stats.endurance * 0.05),
      // Strength: +5% damage per point (stacks with infusions)
      damageMult: 1.0 + (this.stats.strength * 0.05),
      // Dexterity: +3% attack speed per point
      attackSpeedMult: 1.0 + (this.stats.dexterity * 0.03),
      // Mind: +5% cooldown reduction per point (0.95^n style, or just multiplier)
      cooldownMult: Math.max(0.5, 1.0 - (this.stats.mind * 0.05)),
      // Intelligence: +10 Max Mana per point, +5% mana regen per point (Phase 20)
      bonusMana: this.stats.intelligence * 10,
      manaRegenMult: 1.0 + (this.stats.intelligence * 0.05),
    };
  }
  
  /**
   * Apply stat bonuses to derived stats (max HP, stamina, mana, etc.)
   */
  _applyStatBonuses() {
    const statBonuses = this.getStatBonuses();
    const infusionBonuses = this.getInfusionBonuses();
    
    // Get equipment bonuses
    const equipBonuses = this.equipmentBonuses || { health: 0, stamina: 0 };
    
    // Combine stat + infusion + equipment bonuses for max health/stamina
    this.maxHealth = 100 + statBonuses.bonusHealth + infusionBonuses.bonusHealth + (equipBonuses.health || 0);
    this.maxStamina = 100 + statBonuses.bonusStamina + infusionBonuses.bonusStamina + (equipBonuses.stamina || 0);
    
    // Update mind stat for cooldown modifier
    this.mindStat = this.stats.mind;
    
    // Keep current values capped
    if (!this.isDead) {
      this.health = Math.min(this.health, this.maxHealth);
      this.stamina = Math.min(this.stamina, this.maxStamina);
    }
    
    // Recalculate mana if ManaManager exists (Phase 20)
    if (this.manaManager) {
      this.manaManager.recalculateMaxMana();
    }
  }
  
  /**
   * Shorthand wrapper for external callers like EquipmentManager
   */
  applyStatBonuses() {
    this._applyStatBonuses();
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
    
    // Full health/stamina/mana restore
    this.health = this.maxHealth;
    this.stamina = this.maxStamina;
    this.posture = 0;
    
    // Full mana restore on level up (Phase 20)
    if (this.manaManager) {
      this.manaManager.fullRestore();
    }
    
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
      
      // Show stat points earned notification
      setTimeout(() => {
        this._spawnFloatingText(`+${this.statPointsPerLevel} Stat Points!`, 
          this.player.mesh.position.clone().add(new THREE.Vector3(0, 2.2, 0)), 
          0x88ccff, false);
      }, 600);
    }
    
    // Show notification for stat points
    if (this.itemManager && this.itemManager.showNotification) {
      setTimeout(() => {
        this.itemManager.showNotification(
          `+${this.statPointsPerLevel} Stat Points! Press TAB to allocate`,
          'levelup'
        );
      }, 800);
    }
    
    // Flash HUD
    if (this.hud && this.hud.flashLevelUp) {
      this.hud.flashLevelUp();
    }
    
    // Check for new ability unlocks
    this._checkAbilityUnlocks(this.currentLevel);
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
  
  // === ABILITY SYSTEM METHODS ===
  
  /**
   * Check if an ability is unlocked based on level
   */
  isAbilityUnlocked(abilityId) {
    const ability = this.abilities[abilityId];
    if (!ability) return false;
    return this.currentLevel >= ability.unlockLevel;
  }
  
  /**
   * Get all unlocked abilities
   */
  getUnlockedAbilities() {
    const unlocked = [];
    for (const [id, ability] of Object.entries(this.abilities)) {
      if (this.currentLevel >= ability.unlockLevel) {
        unlocked.push({ id, ...ability });
      }
    }
    return unlocked;
  }
  
  /**
   * Get cooldown modifier based on Mind stat (reduces cooldowns)
   */
  getCooldownModifier() {
    // Use stats system - each point of Mind reduces cooldowns by 5% (max 50%)
    return this.getStatBonuses().cooldownMult;
  }
  
  /**
   * Check if ability is ready (off cooldown)
   */
  isAbilityReady(abilityId) {
    if (!this.isAbilityUnlocked(abilityId)) return false;
    return this.abilityCooldowns[abilityId] <= 0;
  }
  
  /**
   * Use an ability - puts it on cooldown
   */
  useAbility(abilityId) {
    const ability = this.abilities[abilityId];
    if (!ability) return false;
    
    const cooldown = ability.baseCooldown * this.getCooldownModifier();
    this.abilityCooldowns[abilityId] = cooldown;
    
    // Track usage for notifications
    if (!this.unlockedAbilities.has(abilityId)) {
      this.unlockedAbilities.add(abilityId);
    }
    
    return true;
  }
  
  /**
   * Get remaining cooldown for ability
   */
  getAbilityCooldown(abilityId) {
    return Math.max(0, this.abilityCooldowns[abilityId] || 0);
  }
  
  /**
   * Get cooldown progress (0-1, 1 = ready)
   */
  getAbilityCooldownProgress(abilityId) {
    const ability = this.abilities[abilityId];
    if (!ability || ability.baseCooldown === 0) return 1;
    
    const current = this.abilityCooldowns[abilityId] || 0;
    const max = ability.baseCooldown * this.getCooldownModifier();
    return 1 - (current / max);
  }
  
  /**
   * Activate War Cry buff
   */
  activateWarCry() {
    this.warCryActive = true;
    this.warCryTimer = this.warCryDuration;
    
    // Play war cry sound
    if (this.audioManager) {
      this.audioManager.play('warCry', { volume: 0.8 });
    }
    
    // Spawn effect at player
    if (this.particleManager && this.player) {
      this.particleManager.spawnWarCryEffect(this.player.mesh.position.clone());
    }
    
    // Show floating text
    if (this.player) {
      this._spawnFloatingText('WAR CRY!', 
        this.player.mesh.position.clone().add(new THREE.Vector3(0, 2.5, 0)), 
        0xff6600, true);
    }
  }
  
  /**
   * Get current damage multiplier (includes stats, infusions, equipment, and War Cry)
   */
  getDamageMultiplier() {
    // Base from infusions
    let mult = this.getInfusionBonuses().damageMult;
    // Add stat bonus (strength)
    const statBonus = this.getStatBonuses();
    mult += (statBonus.damageMult - 1.0); // Add the bonus portion
    // War Cry buff
    if (this.warCryActive) {
      mult += this.warCryDamageBonus;
    }
    return mult;
  }
  
  /**
   * Get flat damage bonus from equipment
   */
  getEquipmentDamageBonus() {
    if (!this.equipmentBonuses) return 0;
    return this.equipmentBonuses.damage || 0;
  }
  
  /**
   * Get defense value from equipment (reduces incoming damage)
   */
  getEquipmentDefense() {
    if (!this.equipmentBonuses) return 0;
    return this.equipmentBonuses.defense || 0;
  }
  
  /**
   * Get crit chance from equipment (0-100)
   */
  getEquipmentCritChance() {
    if (!this.equipmentBonuses) return 0;
    return this.equipmentBonuses.critChance || 0;
  }
  
  /**
   * Get crit damage bonus from equipment (percentage)
   */
  getEquipmentCritDamage() {
    if (!this.equipmentBonuses) return 0;
    return this.equipmentBonuses.critDamage || 0;
  }
  
  /**
   * Get attack speed multiplier from dexterity stat
   */
  getAttackSpeedMultiplier() {
    return this.getStatBonuses().attackSpeedMult;
  }
  
  /**
   * Check abilities unlocked on level up
   */
  _checkAbilityUnlocks(newLevel) {
    for (const [id, ability] of Object.entries(this.abilities)) {
      if (ability.unlockLevel === newLevel) {
        // New ability unlocked!
        this._showAbilityUnlockNotification(id, ability);
      }
    }
  }
  
  /**
   * Show ability unlock notification
   */
  _showAbilityUnlockNotification(abilityId, ability) {
    // Use itemManager notification if available
    if (this.itemManager && this.itemManager.showNotification) {
      this.itemManager.showNotification(
        `NEW ABILITY: ${ability.name}`,
        'ability'
      );
    }
    
    // Spawn floating text
    if (this.player) {
      setTimeout(() => {
        this._spawnFloatingText(`${ability.name} Unlocked!`, 
          this.player.mesh.position.clone().add(new THREE.Vector3(0, 3, 0)), 
          0x44aaff, true);
      }, 500);
      
      // Show description after a delay
      setTimeout(() => {
        this._spawnFloatingText(`[${ability.hotkey}] ${ability.description}`, 
          this.player.mesh.position.clone().add(new THREE.Vector3(0, 2.5, 0)), 
          0x88ccff, false);
      }, 1200);
    }
    
    // Play unlock sound
    if (this.audioManager) {
      this.audioManager.play('abilityUnlock', { volume: 0.7 });
    }
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

    // Stamina regen (affected by endurance stat + infusions)
    this.staminaRegenTimer += delta;
    if (this.staminaRegenTimer >= this.staminaRegenDelay && this.stamina < this.maxStamina) {
      const statBonus = this.getStatBonuses();
      const infusionBonus = this.getInfusionBonuses();
      const regenMult = statBonus.staminaRegenMult * infusionBonus.staminaRegenMult;
      this.stamina = Math.min(this.maxStamina, this.stamina + this.staminaRegenRate * regenMult * delta);
    }

    // Posture regen
    this.postureRegenTimer += delta;
    if (this.postureRegenTimer >= this.postureRegenDelay && this.posture > 0) {
      this.posture = Math.max(0, this.posture - this.postureRegenRate * delta);
    }
    
    // Ability cooldowns
    for (const abilityId in this.abilityCooldowns) {
      if (this.abilityCooldowns[abilityId] > 0) {
        this.abilityCooldowns[abilityId] -= delta;
      }
    }
    
    // War Cry timer
    if (this.warCryActive) {
      this.warCryTimer -= delta;
      if (this.warCryTimer <= 0) {
        this.warCryActive = false;
        this.warCryTimer = 0;
        
        // Show buff ended notification
        if (this.player) {
          this._spawnFloatingText('War Cry ended', 
            this.player.mesh.position.clone().add(new THREE.Vector3(0, 2, 0)), 
            0x888888, false);
        }
      }
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
    
    // Apply equipment defense (flat reduction, minimum 1 damage)
    const defense = this.getEquipmentDefense();
    if (defense > 0) {
      finalDamage = Math.max(1, finalDamage - defense);
    }

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

    // Restore mana on respawn (Phase 20)
    if (this.manaManager) {
      this.manaManager.onRespawn();
    }

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
    return this.infusions.strength + this.infusions.vitality + this.infusions.stamina + this.infusions.spirit;
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
