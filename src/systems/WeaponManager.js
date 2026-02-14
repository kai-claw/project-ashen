/**
 * WeaponManager.js - Weapon State & Combat Integration
 * Phase 19: Weapon Variety & Animations
 * 
 * Manages equipped weapons, weapon switching, stat calculations,
 * and combat integration with the attack system.
 */

import {
  WEAPONS,
  WEAPON_CATEGORY,
  WEAPON_RARITY,
  MOVESETS,
  calculateWeaponDamage,
  calculateAttackSpeed,
  calculateStaminaCost,
  calculateRange,
  calculateCritChance,
  getWeapon,
} from '../data/WeaponData.js';

// Maximum weapons in quick-switch slots
const MAX_QUICK_SLOTS = 4;

// Default starting weapon
const DEFAULT_WEAPON_ID = 'iron_sword';

export class WeaponManager {
  constructor(gameManager, equipmentManager) {
    this.gameManager = gameManager;
    this.equipmentManager = equipmentManager;
    
    // Currently active weapon (the one being used)
    this.activeWeapon = null;
    this.activeRarity = WEAPON_RARITY.COMMON;
    
    // Quick-switch weapon slots (indices 0-3 for keys 1-4)
    this.quickSlots = [null, null, null, null];
    this.activeSlot = 0;
    
    // Current attack state
    this.isAttacking = false;
    this.attackType = null; // 'light' or 'heavy'
    this.attackProgress = 0;
    this.comboCount = 0;
    this.comboTimer = 0;
    this.lastAttackTime = 0;
    
    // Weapon switching
    this.isSwitching = false;
    this.switchTimer = 0;
    this.switchDuration = 0.2; // seconds
    
    // Attack callbacks
    this.onAttackStart = null;
    this.onAttackHit = null;
    this.onAttackEnd = null;
    
    // Load saved state
    this.loadState();
    
    // Initialize with default weapon if none equipped
    if (!this.activeWeapon) {
      this.equipWeapon(DEFAULT_WEAPON_ID, WEAPON_RARITY.COMMON, 0);
    }
    
    console.log('[WeaponManager] Initialized with weapon:', this.activeWeapon?.name);
  }
  
  // ========== WEAPON EQUIPPING ==========
  
  /**
   * Equip a weapon to a quick slot
   * @param {string} weaponId - Weapon ID from WeaponData
   * @param {object} rarity - Rarity tier
   * @param {number} slot - Quick slot index (0-3), -1 for active slot only
   * @returns {boolean} Success
   */
  equipWeapon(weaponId, rarity = WEAPON_RARITY.COMMON, slot = -1) {
    const weaponDef = getWeapon(weaponId);
    if (!weaponDef) {
      console.warn('[WeaponManager] Unknown weapon:', weaponId);
      return false;
    }
    
    // Create weapon instance
    const weapon = {
      ...weaponDef,
      rarity: rarity,
      instanceId: `${weaponId}_${Date.now()}`,
    };
    
    // Place in quick slot if specified
    if (slot >= 0 && slot < MAX_QUICK_SLOTS) {
      this.quickSlots[slot] = weapon;
      
      // If this is the active slot, update active weapon
      if (slot === this.activeSlot) {
        this.activeWeapon = weapon;
        this.activeRarity = rarity;
      }
    } else {
      // Just set as active weapon
      this.activeWeapon = weapon;
      this.activeRarity = rarity;
      this.quickSlots[this.activeSlot] = weapon;
    }
    
    this.saveState();
    this.updateEquipmentBonuses();
    
    console.log(`[WeaponManager] Equipped ${weapon.name} (${rarity.name})`);
    return true;
  }
  
  /**
   * Equip weapon from equipment manager (shop/loot integration)
   * @param {object} equipmentItem - Equipment item from EquipmentManager
   * @param {number} slot - Quick slot to equip to
   */
  equipFromInventory(equipmentItem, slot = -1) {
    if (!equipmentItem || equipmentItem.slot !== 'weapon') return false;
    
    // Map equipment item to weapon data
    const weaponId = equipmentItem.baseId || equipmentItem.id;
    
    // Determine rarity from equipment
    const rarityMap = {
      'common': WEAPON_RARITY.COMMON,
      'uncommon': WEAPON_RARITY.UNCOMMON,
      'rare': WEAPON_RARITY.RARE,
      'epic': WEAPON_RARITY.EPIC,
      'legendary': WEAPON_RARITY.LEGENDARY,
    };
    const rarity = rarityMap[equipmentItem.rarity?.id] || WEAPON_RARITY.COMMON;
    
    // Check if we have this weapon's definition
    const weaponDef = getWeapon(weaponId);
    if (!weaponDef) {
      // If weapon isn't in WeaponData, create a basic sword entry
      console.log('[WeaponManager] Creating dynamic weapon entry for:', weaponId);
      return this.equipDynamicWeapon(equipmentItem, rarity, slot);
    }
    
    return this.equipWeapon(weaponId, rarity, slot);
  }
  
  /**
   * Create and equip a dynamic weapon from equipment data
   * (For weapons from loot that aren't in static WeaponData)
   */
  equipDynamicWeapon(equipmentItem, rarity, slot) {
    // Determine category from visual model
    const modelToCategory = {
      'sword': WEAPON_CATEGORY.SWORD,
      'longsword': WEAPON_CATEGORY.SWORD,
      'dagger': WEAPON_CATEGORY.DAGGER,
      'axe': WEAPON_CATEGORY.AXE,
      'spear': WEAPON_CATEGORY.SPEAR,
      'greatsword': WEAPON_CATEGORY.GREATSWORD,
    };
    
    const category = modelToCategory[equipmentItem.weaponModel] || WEAPON_CATEGORY.SWORD;
    const moveset = MOVESETS[category.id] || MOVESETS.sword;
    
    const weapon = {
      id: equipmentItem.id,
      name: equipmentItem.name,
      category: category,
      baseDamage: equipmentItem.stats?.damage || 10,
      baseSpeed: 1.0,
      baseRange: 1.0,
      baseCritChance: equipmentItem.stats?.critChance || 5,
      staminaCost: 10,
      moveset: moveset,
      description: equipmentItem.description || 'A weapon.',
      visualModel: equipmentItem.weaponModel || 'sword',
      rarity: rarity,
      instanceId: equipmentItem.id,
      isDynamic: true, // Flag for dynamic weapons
    };
    
    // Place in slot
    if (slot >= 0 && slot < MAX_QUICK_SLOTS) {
      this.quickSlots[slot] = weapon;
      if (slot === this.activeSlot) {
        this.activeWeapon = weapon;
        this.activeRarity = rarity;
      }
    } else {
      this.activeWeapon = weapon;
      this.activeRarity = rarity;
      this.quickSlots[this.activeSlot] = weapon;
    }
    
    this.saveState();
    this.updateEquipmentBonuses();
    
    console.log(`[WeaponManager] Equipped dynamic weapon: ${weapon.name}`);
    return true;
  }
  
  // ========== WEAPON SWITCHING ==========
  
  /**
   * Switch to weapon in quick slot
   * @param {number} slot - Slot index (0-3)
   */
  switchToSlot(slot) {
    if (slot < 0 || slot >= MAX_QUICK_SLOTS) return;
    if (slot === this.activeSlot) return;
    if (this.isSwitching || this.isAttacking) return;
    
    const weapon = this.quickSlots[slot];
    if (!weapon) {
      console.log(`[WeaponManager] Slot ${slot + 1} is empty`);
      return;
    }
    
    // Start switch animation
    this.isSwitching = true;
    this.switchTimer = 0;
    
    // Change weapon mid-switch
    setTimeout(() => {
      this.activeSlot = slot;
      this.activeWeapon = weapon;
      this.activeRarity = weapon.rarity;
      this.updateEquipmentBonuses();
      this.saveState();
      
      console.log(`[WeaponManager] Switched to: ${weapon.name}`);
      
      // Notify UI
      if (this.gameManager.hud) {
        this.gameManager.hud.showNotification(`Equipped: ${weapon.name}`, weapon.rarity.color);
      }
    }, (this.switchDuration / 2) * 1000);
  }
  
  /**
   * Cycle to next weapon in quick slots
   */
  cycleWeapon() {
    // Find next non-empty slot
    let nextSlot = (this.activeSlot + 1) % MAX_QUICK_SLOTS;
    let attempts = 0;
    
    while (!this.quickSlots[nextSlot] && attempts < MAX_QUICK_SLOTS) {
      nextSlot = (nextSlot + 1) % MAX_QUICK_SLOTS;
      attempts++;
    }
    
    if (this.quickSlots[nextSlot]) {
      this.switchToSlot(nextSlot);
    }
  }
  
  // ========== COMBAT STATS ==========
  
  /**
   * Get current weapon's effective damage
   */
  getDamage(attackType = 'light') {
    if (!this.activeWeapon) return 10;
    
    const playerStats = this.getPlayerStats();
    let damage = calculateWeaponDamage(this.activeWeapon, playerStats, this.activeRarity);
    
    // Apply attack type multiplier
    const moveset = this.activeWeapon.moveset[attackType];
    if (moveset) {
      damage *= moveset.damageMultiplier;
    }
    
    // Apply combo bonus (5% per combo hit, max 25%)
    if (this.comboCount > 0) {
      damage *= 1 + Math.min(this.comboCount * 0.05, 0.25);
    }
    
    return Math.round(damage);
  }
  
  /**
   * Get current attack speed multiplier
   */
  getAttackSpeed() {
    if (!this.activeWeapon) return 1.0;
    return calculateAttackSpeed(this.activeWeapon, this.getPlayerStats());
  }
  
  /**
   * Get stamina cost for attack
   */
  getStaminaCost(attackType = 'light') {
    if (!this.activeWeapon) return 10;
    return calculateStaminaCost(this.activeWeapon, attackType);
  }
  
  /**
   * Get weapon range multiplier
   */
  getRange() {
    if (!this.activeWeapon) return 1.0;
    return calculateRange(this.activeWeapon);
  }
  
  /**
   * Get crit chance percentage
   */
  getCritChance(attackType = 'light') {
    if (!this.activeWeapon) return 5;
    return calculateCritChance(
      this.activeWeapon,
      this.getPlayerStats(),
      this.activeRarity,
      attackType
    );
  }
  
  /**
   * Get current moveset attack info
   */
  getAttackInfo(attackType = 'light') {
    if (!this.activeWeapon) return null;
    return this.activeWeapon.moveset[attackType] || null;
  }
  
  /**
   * Roll for critical hit
   * @returns {boolean} True if crit
   */
  rollCrit(attackType = 'light') {
    const chance = this.getCritChance(attackType);
    return Math.random() * 100 < chance;
  }
  
  /**
   * Get player stats from game manager
   */
  getPlayerStats() {
    // Check if player has stat allocation
    if (this.gameManager && this.gameManager.stats) {
      const stats = this.gameManager.stats;
      return {
        STR: stats.strength || 10,
        DEX: stats.dexterity || 10,
        VIT: stats.vitality || 10,
        END: stats.endurance || 10,
        LCK: stats.luck || 10,
      };
    }
    
    // Default stats
    return { STR: 10, DEX: 10, VIT: 10, END: 10, LCK: 10 };
  }
  
  /**
   * Update equipment bonuses from active weapon
   */
  updateEquipmentBonuses() {
    if (!this.gameManager) return;
    
    // Add weapon stats to equipment bonuses
    const damage = this.getDamage('light');
    const critChance = this.getCritChance('light');
    
    // These will be applied through equipment manager
    this.gameManager.weaponDamage = damage;
    this.gameManager.weaponCritChance = critChance;
    this.gameManager.weaponRange = this.getRange();
    this.gameManager.weaponSpeed = this.getAttackSpeed();
  }
  
  // ========== ATTACK EXECUTION ==========
  
  /**
   * Start an attack
   * @param {string} attackType - 'light' or 'heavy'
   * @returns {boolean} Whether attack started
   */
  startAttack(attackType = 'light') {
    if (this.isAttacking || this.isSwitching) return false;
    if (!this.activeWeapon) return false;
    
    const attackInfo = this.getAttackInfo(attackType);
    if (!attackInfo) return false;
    
    // Check stamina
    const cost = this.getStaminaCost(attackType);
    if (this.gameManager && this.gameManager.stamina < cost) {
      console.log('[WeaponManager] Not enough stamina');
      return false;
    }
    
    // Check combo continuation
    const now = Date.now();
    if (attackInfo.canCombo && this.comboTimer > 0 && this.attackType === 'light') {
      this.comboCount++;
    } else {
      this.comboCount = 0;
    }
    
    this.isAttacking = true;
    this.attackType = attackType;
    this.attackProgress = 0;
    this.lastAttackTime = now;
    
    // Consume stamina
    if (this.gameManager) {
      this.gameManager.stamina -= cost;
    }
    
    // Trigger callback
    if (this.onAttackStart) {
      this.onAttackStart({
        weapon: this.activeWeapon,
        attackType: attackType,
        attackInfo: attackInfo,
        comboCount: this.comboCount,
      });
    }
    
    return true;
  }
  
  /**
   * Update attack state (call from game loop)
   * @param {number} delta - Delta time in seconds
   * @returns {object|null} Hit data if attack connects this frame
   */
  update(delta) {
    // Update weapon switch
    if (this.isSwitching) {
      this.switchTimer += delta;
      if (this.switchTimer >= this.switchDuration) {
        this.isSwitching = false;
      }
    }
    
    // Update combo timer
    if (this.comboTimer > 0) {
      this.comboTimer -= delta;
      if (this.comboTimer <= 0) {
        this.comboCount = 0;
      }
    }
    
    // Update attack progress
    if (this.isAttacking) {
      const attackInfo = this.getAttackInfo(this.attackType);
      if (!attackInfo) {
        this.isAttacking = false;
        return null;
      }
      
      const speed = this.getAttackSpeed();
      const duration = attackInfo.duration / speed;
      
      this.attackProgress += delta;
      
      // Check if we've reached the hit frame
      const hitTime = attackInfo.windupTime / speed;
      const wasBeforeHit = (this.attackProgress - delta) < hitTime;
      const isAfterHit = this.attackProgress >= hitTime;
      
      if (wasBeforeHit && isAfterHit) {
        // Attack hits this frame
        const hitData = this.calculateHitData();
        
        // Set combo window
        if (attackInfo.canCombo) {
          this.comboTimer = attackInfo.comboWindow / speed;
        }
        
        if (this.onAttackHit) {
          this.onAttackHit(hitData);
        }
        
        return hitData;
      }
      
      // Check if attack finished
      if (this.attackProgress >= duration) {
        this.isAttacking = false;
        this.attackType = null;
        
        if (this.onAttackEnd) {
          this.onAttackEnd();
        }
      }
    }
    
    return null;
  }
  
  /**
   * Calculate hit data for current attack
   */
  calculateHitData() {
    const attackInfo = this.getAttackInfo(this.attackType);
    const isCrit = this.rollCrit(this.attackType);
    let damage = this.getDamage(this.attackType);
    
    if (isCrit) {
      damage *= 1.5; // 50% crit damage bonus
    }
    
    return {
      damage: Math.round(damage),
      isCrit: isCrit,
      attackType: this.attackType,
      weapon: this.activeWeapon,
      hitboxWidth: attackInfo.hitboxWidth * this.getRange(),
      hitboxDepth: attackInfo.hitboxDepth * this.getRange(),
      knockback: attackInfo.knockback || 0,
      multiHit: attackInfo.multiHit || 1,
      piercing: attackInfo.piercing || false,
      areaAttack: attackInfo.areaAttack || false,
      groundPound: attackInfo.groundPound || false,
      stagger: attackInfo.stagger || false,
      specialEffect: this.activeWeapon.specialEffect || null,
      comboCount: this.comboCount,
    };
  }
  
  /**
   * Cancel current attack (e.g., when hit)
   */
  cancelAttack() {
    if (this.isAttacking) {
      this.isAttacking = false;
      this.attackType = null;
      this.attackProgress = 0;
      this.comboCount = 0;
      this.comboTimer = 0;
    }
  }
  
  /**
   * Get attack animation progress (0-1)
   */
  getAttackProgress() {
    if (!this.isAttacking) return 0;
    
    const attackInfo = this.getAttackInfo(this.attackType);
    if (!attackInfo) return 0;
    
    const duration = attackInfo.duration / this.getAttackSpeed();
    return Math.min(this.attackProgress / duration, 1);
  }
  
  // ========== WEAPON INFO ==========
  
  /**
   * Get active weapon info for UI display
   */
  getActiveWeaponInfo() {
    if (!this.activeWeapon) {
      return {
        name: 'Unarmed',
        category: 'None',
        damage: 5,
        speed: 1.0,
        range: 0.5,
        critChance: 0,
        rarity: WEAPON_RARITY.COMMON,
      };
    }
    
    return {
      name: this.activeWeapon.name,
      category: this.activeWeapon.category.name,
      categoryIcon: this.activeWeapon.category.icon,
      damage: this.getDamage('light'),
      heavyDamage: this.getDamage('heavy'),
      speed: this.getAttackSpeed(),
      range: this.getRange(),
      critChance: this.getCritChance('light'),
      staminaCost: this.getStaminaCost('light'),
      heavyStaminaCost: this.getStaminaCost('heavy'),
      rarity: this.activeRarity,
      description: this.activeWeapon.description,
      specialEffect: this.activeWeapon.specialEffect || null,
      lightAttack: this.activeWeapon.moveset.light.name,
      heavyAttack: this.activeWeapon.moveset.heavy.name,
    };
  }
  
  /**
   * Get quick slot info for UI
   */
  getQuickSlotsInfo() {
    return this.quickSlots.map((weapon, index) => {
      if (!weapon) {
        return { slot: index + 1, empty: true };
      }
      return {
        slot: index + 1,
        empty: false,
        name: weapon.name,
        category: weapon.category.icon,
        rarity: weapon.rarity,
        isActive: index === this.activeSlot,
      };
    });
  }
  
  // ========== PERSISTENCE ==========
  
  saveState() {
    const data = {
      activeSlot: this.activeSlot,
      quickSlots: this.quickSlots.map(w => {
        if (!w) return null;
        return {
          id: w.id,
          rarityId: w.rarity.id,
          instanceId: w.instanceId,
          isDynamic: w.isDynamic || false,
          // For dynamic weapons, save full data
          ...(w.isDynamic ? {
            name: w.name,
            baseDamage: w.baseDamage,
            baseCritChance: w.baseCritChance,
            visualModel: w.visualModel,
            categoryId: w.category.id,
          } : {}),
        };
      }),
    };
    localStorage.setItem('ashen_weapons', JSON.stringify(data));
  }
  
  loadState() {
    try {
      const saved = localStorage.getItem('ashen_weapons');
      if (!saved) return;
      
      const data = JSON.parse(saved);
      this.activeSlot = data.activeSlot || 0;
      
      // Restore quick slots
      if (data.quickSlots) {
        data.quickSlots.forEach((savedWeapon, index) => {
          if (!savedWeapon) return;
          
          const rarity = Object.values(WEAPON_RARITY).find(r => r.id === savedWeapon.rarityId) || WEAPON_RARITY.COMMON;
          
          if (savedWeapon.isDynamic) {
            // Restore dynamic weapon
            const category = Object.values(WEAPON_CATEGORY).find(c => c.id === savedWeapon.categoryId) || WEAPON_CATEGORY.SWORD;
            const weapon = {
              id: savedWeapon.id,
              name: savedWeapon.name,
              category: category,
              baseDamage: savedWeapon.baseDamage,
              baseCritChance: savedWeapon.baseCritChance,
              visualModel: savedWeapon.visualModel,
              moveset: MOVESETS[category.id] || MOVESETS.sword,
              rarity: rarity,
              instanceId: savedWeapon.instanceId,
              isDynamic: true,
              baseSpeed: 1.0,
              baseRange: 1.0,
              staminaCost: 10,
            };
            this.quickSlots[index] = weapon;
          } else {
            // Restore static weapon
            const weaponDef = getWeapon(savedWeapon.id);
            if (weaponDef) {
              this.quickSlots[index] = {
                ...weaponDef,
                rarity: rarity,
                instanceId: savedWeapon.instanceId,
              };
            }
          }
        });
      }
      
      // Set active weapon
      if (this.quickSlots[this.activeSlot]) {
        this.activeWeapon = this.quickSlots[this.activeSlot];
        this.activeRarity = this.activeWeapon.rarity;
      }
      
      console.log('[WeaponManager] Loaded saved weapon state');
    } catch (e) {
      console.error('[WeaponManager] Failed to load state:', e);
    }
  }
  
  // ========== DEBUG ==========
  
  debugInfo() {
    console.log('=== WeaponManager Debug ===');
    console.log('Active Weapon:', this.activeWeapon?.name);
    console.log('Rarity:', this.activeRarity?.name);
    console.log('Damage (light):', this.getDamage('light'));
    console.log('Damage (heavy):', this.getDamage('heavy'));
    console.log('Attack Speed:', this.getAttackSpeed());
    console.log('Range:', this.getRange());
    console.log('Crit Chance:', this.getCritChance('light') + '%');
    console.log('Quick Slots:', this.quickSlots.map(w => w?.name || 'empty'));
  }
}
