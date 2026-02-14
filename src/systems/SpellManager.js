/**
 * SpellManager.js - Phase 20: Magic System
 * 
 * Handles:
 * - Learned spells inventory
 * - Spell cooldown tracking
 * - Active spell selection for hotbar
 * - Spell state persistence
 * - Spell unlock/learn mechanics
 */

import SPELL_DATA, { 
  SPELL_CATEGORIES,
  getStarterSpells,
  calculateSpellDamage,
  calculateSpellHealing,
  calculateShieldAmount,
  calculateBuffDuration
} from '../data/SpellData.js';

export class SpellManager {
  constructor(gameManager) {
    this.gm = gameManager;
    
    // Learned spells (spell IDs that player has)
    this.learnedSpells = new Set();
    
    // Currently equipped spells in hotbar (array of spell IDs, 6 slots)
    this.hotbarSlots = [null, null, null, null, null, null];
    
    // Currently selected hotbar slot (0-5)
    this.activeSlot = 0;
    
    // Cooldown tracking: { spellId: remainingCooldown }
    this.cooldowns = {};
    
    // Active buffs: { spellId: { timeRemaining, effect } }
    this.activeBuffs = {};
    
    // Active shields: { spellId: { remainingShield, timeRemaining } }
    this.activeShields = {};
    
    // DoT/HoT effects: { id: { spellId, type, tickDamage, ticksRemaining, tickInterval, nextTick } }
    this.activeEffects = {};
    this.effectIdCounter = 0;
    
    // Events
    this.onSpellLearned = null;       // (spellId) => void
    this.onCooldownUpdate = null;     // (slotIndex, remaining, total) => void
    this.onHotbarChanged = null;      // (slots) => void
    this.onBuffsChanged = null;       // (activeBuffs) => void
    this.onSpellCast = null;          // (spellId, spell) => void
    this.onBuffExpired = null;        // (spellId) => void
    this.onShieldExpired = null;      // (spellId) => void
    
    // Load saved state
    this._loadState();
    
    // Initialize with starter spells if new player
    if (this.learnedSpells.size === 0) {
      this._initStarterSpells();
    }
  }
  
  /**
   * Initialize starter spells for new player
   * Player gets: Spark (offensive), Minor Heal (healing)
   */
  _initStarterSpells() {
    // Give starter offensive spell
    this.learnSpell('spark');
    
    // Give starter healing spell
    this.learnSpell('minorHeal');
    
    // Equip them to hotbar
    this.equipToHotbar('spark', 0);
    this.equipToHotbar('minorHeal', 1);
    
    console.log('[SpellManager] Initialized starter spells: Spark, Minor Heal');
    this._saveState();
  }
  
  /**
   * Load state from localStorage
   */
  _loadState() {
    try {
      const saved = localStorage.getItem('ashen_spells');
      if (saved) {
        const data = JSON.parse(saved);
        
        // Restore learned spells
        if (data.learnedSpells) {
          this.learnedSpells = new Set(data.learnedSpells);
        }
        
        // Restore hotbar
        if (data.hotbarSlots) {
          this.hotbarSlots = data.hotbarSlots;
        }
        
        // Restore active slot
        if (typeof data.activeSlot === 'number') {
          this.activeSlot = data.activeSlot;
        }
        
        console.log(`[SpellManager] Loaded ${this.learnedSpells.size} learned spells`);
      }
    } catch (e) {
      console.warn('[SpellManager] Failed to load state:', e);
    }
  }
  
  /**
   * Save state to localStorage
   */
  _saveState() {
    try {
      const data = {
        learnedSpells: Array.from(this.learnedSpells),
        hotbarSlots: this.hotbarSlots,
        activeSlot: this.activeSlot
      };
      localStorage.setItem('ashen_spells', JSON.stringify(data));
    } catch (e) {
      console.warn('[SpellManager] Failed to save state:', e);
    }
  }
  
  /**
   * Learn a new spell
   * @param {string} spellId
   * @returns {boolean} True if newly learned
   */
  learnSpell(spellId) {
    if (!SPELL_DATA[spellId]) {
      console.warn(`[SpellManager] Unknown spell: ${spellId}`);
      return false;
    }
    
    if (this.learnedSpells.has(spellId)) {
      return false; // Already known
    }
    
    this.learnedSpells.add(spellId);
    console.log(`[SpellManager] Learned spell: ${SPELL_DATA[spellId].name}`);
    
    if (this.onSpellLearned) {
      this.onSpellLearned(spellId);
    }
    
    this._saveState();
    return true;
  }
  
  /**
   * Check if player knows a spell
   * @param {string} spellId
   * @returns {boolean}
   */
  knowsSpell(spellId) {
    return this.learnedSpells.has(spellId);
  }
  
  /**
   * Get all learned spells as array of spell objects
   * @returns {Object[]}
   */
  getLearnedSpells() {
    return Array.from(this.learnedSpells)
      .filter(id => SPELL_DATA[id])
      .map(id => SPELL_DATA[id]);
  }
  
  /**
   * Get learned spells by category
   * @param {string} category
   * @returns {Object[]}
   */
  getLearnedSpellsByCategory(category) {
    return this.getLearnedSpells().filter(spell => spell.category === category);
  }
  
  /**
   * Equip a spell to a hotbar slot
   * @param {string} spellId
   * @param {number} slot - 0-5
   * @returns {boolean}
   */
  equipToHotbar(spellId, slot) {
    if (slot < 0 || slot > 5) return false;
    
    if (spellId && !this.knowsSpell(spellId)) {
      console.warn(`[SpellManager] Cannot equip unknown spell: ${spellId}`);
      return false;
    }
    
    // Remove spell from any other slot first
    if (spellId) {
      const existingSlot = this.hotbarSlots.indexOf(spellId);
      if (existingSlot !== -1 && existingSlot !== slot) {
        this.hotbarSlots[existingSlot] = null;
      }
    }
    
    this.hotbarSlots[slot] = spellId;
    
    if (this.onHotbarChanged) {
      this.onHotbarChanged(this.hotbarSlots);
    }
    
    this._saveState();
    return true;
  }
  
  /**
   * Remove spell from hotbar slot
   * @param {number} slot
   */
  clearHotbarSlot(slot) {
    if (slot < 0 || slot > 5) return;
    
    this.hotbarSlots[slot] = null;
    
    if (this.onHotbarChanged) {
      this.onHotbarChanged(this.hotbarSlots);
    }
    
    this._saveState();
  }
  
  /**
   * Select active hotbar slot
   * @param {number} slot - 0-5
   */
  selectSlot(slot) {
    if (slot < 0 || slot > 5) return;
    this.activeSlot = slot;
    this._saveState();
  }
  
  /**
   * Get currently selected spell
   * @returns {Object|null}
   */
  getSelectedSpell() {
    const spellId = this.hotbarSlots[this.activeSlot];
    return spellId ? SPELL_DATA[spellId] : null;
  }
  
  /**
   * Get spell in a specific hotbar slot
   * @param {number} slot
   * @returns {Object|null}
   */
  getSpellInSlot(slot) {
    const spellId = this.hotbarSlots[slot];
    return spellId ? SPELL_DATA[spellId] : null;
  }
  
  /**
   * Check if a spell is on cooldown
   * @param {string} spellId
   * @returns {boolean}
   */
  isOnCooldown(spellId) {
    return (this.cooldowns[spellId] || 0) > 0;
  }
  
  /**
   * Get remaining cooldown for a spell
   * @param {string} spellId
   * @returns {number} Seconds remaining
   */
  getCooldownRemaining(spellId) {
    return this.cooldowns[spellId] || 0;
  }
  
  /**
   * Start cooldown for a spell
   * @param {string} spellId
   */
  startCooldown(spellId) {
    const spell = SPELL_DATA[spellId];
    if (!spell) return;
    
    this.cooldowns[spellId] = spell.cooldown;
  }
  
  /**
   * Check if player can cast a spell right now
   * @param {string} spellId
   * @returns {{ canCast: boolean, reason: string }}
   */
  canCastSpell(spellId) {
    const spell = SPELL_DATA[spellId];
    
    if (!spell) {
      return { canCast: false, reason: 'Unknown spell' };
    }
    
    if (!this.knowsSpell(spellId)) {
      return { canCast: false, reason: 'Spell not learned' };
    }
    
    if (this.isOnCooldown(spellId)) {
      const remaining = this.getCooldownRemaining(spellId).toFixed(1);
      return { canCast: false, reason: `On cooldown (${remaining}s)` };
    }
    
    // Check mana
    if (this.gm.manaManager) {
      if (!this.gm.manaManager.canUseMana(spell.manaCost)) {
        return { canCast: false, reason: 'Not enough mana' };
      }
    }
    
    // Check if player is in valid state to cast
    if (this.gm.isDead) {
      return { canCast: false, reason: 'Cannot cast while dead' };
    }
    
    if (this.gm.isRolling) {
      return { canCast: false, reason: 'Cannot cast while dodging' };
    }
    
    if (this.gm.isAttacking) {
      return { canCast: false, reason: 'Cannot cast while attacking' };
    }
    
    return { canCast: true, reason: '' };
  }
  
  /**
   * Begin casting a spell
   * Called by SpellCaster when cast initiated
   * @param {string} spellId
   * @returns {boolean}
   */
  beginCast(spellId) {
    const { canCast, reason } = this.canCastSpell(spellId);
    
    if (!canCast) {
      console.log(`[SpellManager] Cannot cast ${spellId}: ${reason}`);
      return false;
    }
    
    // Consume mana
    const spell = SPELL_DATA[spellId];
    if (this.gm.manaManager) {
      this.gm.manaManager.useMana(spell.manaCost);
    }
    
    // Start cooldown
    this.startCooldown(spellId);
    
    // Fire cast event
    if (this.onSpellCast) {
      this.onSpellCast(spellId, spell);
    }
    
    console.log(`[SpellManager] Casting: ${spell.name}`);
    return true;
  }
  
  /**
   * Get scaled damage for a spell with current stats
   * @param {string} spellId
   * @returns {number}
   */
  getSpellDamage(spellId) {
    const spell = SPELL_DATA[spellId];
    if (!spell) return 0;
    
    const intStat = this.gm.stats?.intelligence || 0;
    return calculateSpellDamage(spell, intStat);
  }
  
  /**
   * Get scaled healing for a spell with current stats
   * @param {string} spellId
   * @returns {number}
   */
  getSpellHealing(spellId) {
    const spell = SPELL_DATA[spellId];
    if (!spell) return 0;
    
    const intStat = this.gm.stats?.intelligence || 0;
    const wisStat = this.gm.stats?.wisdom || 0;
    return calculateSpellHealing(spell, intStat, wisStat);
  }
  
  /**
   * Get scaled shield amount for a spell
   * @param {string} spellId
   * @returns {number}
   */
  getShieldAmount(spellId) {
    const spell = SPELL_DATA[spellId];
    if (!spell) return 0;
    
    const intStat = this.gm.stats?.intelligence || 0;
    return calculateShieldAmount(spell, intStat);
  }
  
  /**
   * Get scaled buff duration for a spell
   * @param {string} spellId
   * @returns {number}
   */
  getBuffDuration(spellId) {
    const spell = SPELL_DATA[spellId];
    if (!spell) return 0;
    
    const intStat = this.gm.stats?.intelligence || 0;
    return calculateBuffDuration(spell, intStat);
  }
  
  /**
   * Apply a buff to the player
   * @param {string} spellId
   */
  applyBuff(spellId) {
    const spell = SPELL_DATA[spellId];
    if (!spell || !spell.duration) return;
    
    const duration = this.getBuffDuration(spellId);
    
    this.activeBuffs[spellId] = {
      timeRemaining: duration,
      spell: spell
    };
    
    console.log(`[SpellManager] Buff applied: ${spell.name} for ${duration.toFixed(1)}s`);
    
    if (this.onBuffsChanged) {
      this.onBuffsChanged(this.activeBuffs);
    }
  }
  
  /**
   * Apply a shield
   * @param {string} spellId
   */
  applyShield(spellId) {
    const spell = SPELL_DATA[spellId];
    if (!spell) return;
    
    const shieldAmount = this.getShieldAmount(spellId);
    const duration = spell.duration || 10;
    
    this.activeShields[spellId] = {
      remainingShield: shieldAmount,
      timeRemaining: duration,
      spell: spell
    };
    
    console.log(`[SpellManager] Shield applied: ${spell.name} (${shieldAmount} HP, ${duration}s)`);
    
    if (this.onBuffsChanged) {
      this.onBuffsChanged(this.activeBuffs);
    }
  }
  
  /**
   * Get active buff by ID
   * @param {string} spellId
   * @returns {Object|null}
   */
  getActiveBuff(spellId) {
    return this.activeBuffs[spellId] || null;
  }
  
  /**
   * Check if a buff is active
   * @param {string} spellId
   * @returns {boolean}
   */
  isBuffActive(spellId) {
    return !!this.activeBuffs[spellId];
  }
  
  /**
   * Get total shield absorption remaining
   * @returns {number}
   */
  getTotalShieldAmount() {
    let total = 0;
    for (const shield of Object.values(this.activeShields)) {
      total += shield.remainingShield;
    }
    return total;
  }
  
  /**
   * Absorb damage through shields
   * @param {number} damage
   * @returns {number} Damage remaining after shields
   */
  absorbDamage(damage) {
    let remaining = damage;
    const brokenShields = [];
    
    for (const [spellId, shield] of Object.entries(this.activeShields)) {
      if (shield.remainingShield > 0 && remaining > 0) {
        const absorbed = Math.min(shield.remainingShield, remaining);
        shield.remainingShield -= absorbed;
        remaining -= absorbed;
        
        console.log(`[SpellManager] Shield absorbed ${absorbed} damage`);
        
        if (shield.remainingShield <= 0) {
          brokenShields.push(spellId);
          delete this.activeShields[spellId];
          console.log(`[SpellManager] Shield broken: ${SPELL_DATA[spellId]?.name}`);
        }
      }
    }
    
    // Fire callbacks for broken shields (for visual cleanup)
    for (const spellId of brokenShields) {
      if (this.onShieldExpired) this.onShieldExpired(spellId);
    }
    
    if (this.onBuffsChanged) {
      this.onBuffsChanged(this.activeBuffs);
    }
    
    return remaining;
  }
  
  /**
   * Get damage bonus from active buffs
   * @returns {number} Multiplier (1.0 = no bonus)
   */
  getDamageBonus() {
    let bonus = 1.0;
    
    for (const buff of Object.values(this.activeBuffs)) {
      if (buff.spell.damageBonus) {
        bonus += buff.spell.damageBonus;
      }
    }
    
    return bonus;
  }
  
  /**
   * Get spell damage bonus from active buffs
   * @returns {number} Multiplier
   */
  getSpellDamageBonus() {
    let bonus = 1.0;
    
    for (const buff of Object.values(this.activeBuffs)) {
      if (buff.spell.spellDamageBonus) {
        bonus += buff.spell.spellDamageBonus;
      }
    }
    
    return bonus;
  }
  
  /**
   * Get speed bonus from active buffs
   * @returns {number} Multiplier
   */
  getSpeedBonus() {
    let bonus = 1.0;
    
    for (const buff of Object.values(this.activeBuffs)) {
      if (buff.spell.speedBonus) {
        bonus += buff.spell.speedBonus;
      }
    }
    
    return bonus;
  }
  
  /**
   * Get damage reduction from active buffs
   * @returns {number} Reduction percentage (0-1)
   */
  getDamageReduction() {
    let reduction = 0;
    
    for (const buff of Object.values(this.activeBuffs)) {
      if (buff.spell.damageReduction) {
        reduction = Math.max(reduction, buff.spell.damageReduction);
      }
    }
    
    return reduction;
  }
  
  /**
   * Update cooldowns and buffs each frame
   * @param {number} delta - Time since last frame
   */
  update(delta) {
    // Update cooldowns
    for (const spellId in this.cooldowns) {
      this.cooldowns[spellId] -= delta;
      
      if (this.cooldowns[spellId] <= 0) {
        delete this.cooldowns[spellId];
      }
      
      // Fire cooldown update for hotbar UI
      if (this.onCooldownUpdate) {
        const slot = this.hotbarSlots.indexOf(spellId);
        if (slot !== -1) {
          const spell = SPELL_DATA[spellId];
          this.onCooldownUpdate(slot, this.cooldowns[spellId] || 0, spell?.cooldown || 0);
        }
      }
    }
    
    // Update buffs
    let buffsChanged = false;
    const expiredBuffs = [];
    for (const spellId in this.activeBuffs) {
      this.activeBuffs[spellId].timeRemaining -= delta;
      
      if (this.activeBuffs[spellId].timeRemaining <= 0) {
        console.log(`[SpellManager] Buff expired: ${SPELL_DATA[spellId]?.name}`);
        expiredBuffs.push(spellId);
        delete this.activeBuffs[spellId];
        buffsChanged = true;
      }
    }
    
    // Update shields
    const expiredShields = [];
    for (const spellId in this.activeShields) {
      this.activeShields[spellId].timeRemaining -= delta;
      
      if (this.activeShields[spellId].timeRemaining <= 0) {
        console.log(`[SpellManager] Shield timed out: ${SPELL_DATA[spellId]?.name}`);
        expiredShields.push(spellId);
        delete this.activeShields[spellId];
        buffsChanged = true;
      }
    }
    
    // Fire expired callbacks for visual cleanup
    for (const spellId of expiredBuffs) {
      if (this.onBuffExpired) this.onBuffExpired(spellId);
    }
    for (const spellId of expiredShields) {
      if (this.onShieldExpired) this.onShieldExpired(spellId);
    }
    
    if (buffsChanged && this.onBuffsChanged) {
      this.onBuffsChanged(this.activeBuffs);
    }
    
    // Update effects (DoT/HoT)
    this._updateEffects(delta);
  }
  
  /**
   * Update active DoT/HoT effects
   */
  _updateEffects(delta) {
    for (const id in this.activeEffects) {
      const effect = this.activeEffects[id];
      effect.nextTick -= delta;
      
      if (effect.nextTick <= 0) {
        // Apply tick
        if (effect.type === 'heal') {
          this.gm.heal(effect.tickDamage);
        } else if (effect.type === 'damage') {
          // Self-damage (burn, etc.) - rare for player
        }
        
        effect.ticksRemaining--;
        effect.nextTick = effect.tickInterval;
        
        if (effect.ticksRemaining <= 0) {
          delete this.activeEffects[id];
        }
      }
    }
  }
  
  /**
   * Apply a regeneration effect
   * @param {number} healPerSecond
   * @param {number} duration
   */
  applyRegen(healPerSecond, duration) {
    const id = ++this.effectIdCounter;
    
    this.activeEffects[id] = {
      type: 'heal',
      tickDamage: healPerSecond,
      ticksRemaining: Math.floor(duration),
      tickInterval: 1.0,
      nextTick: 1.0
    };
    
    console.log(`[SpellManager] Regen applied: ${healPerSecond}/s for ${duration}s`);
  }
  
  /**
   * Clear all buffs and cooldowns (on death)
   */
  clearAllEffects() {
    // Fire expiration callbacks for visual cleanup
    for (const spellId of Object.keys(this.activeBuffs)) {
      if (this.onBuffExpired) this.onBuffExpired(spellId);
    }
    for (const spellId of Object.keys(this.activeShields)) {
      if (this.onShieldExpired) this.onShieldExpired(spellId);
    }
    
    this.activeBuffs = {};
    this.activeShields = {};
    this.activeEffects = {};
    // Keep cooldowns running
    
    if (this.onBuffsChanged) {
      this.onBuffsChanged(this.activeBuffs);
    }
  }
  
  /**
   * Reset cooldowns (on rest/respawn)
   */
  resetCooldowns() {
    this.cooldowns = {};
  }
  
  /**
   * Get unlockable spells at current level
   * @param {number} level
   * @returns {Object[]} Spells that unlock at this level
   */
  getSpellsUnlockedAtLevel(level) {
    return Object.values(SPELL_DATA)
      .filter(spell => spell.unlockLevel === level && !this.knowsSpell(spell.id));
  }
  
  /**
   * Event: Set callback for spell learned
   */
  setOnSpellLearned(callback) {
    this.onSpellLearned = callback;
  }
  
  /**
   * Event: Set callback for cooldown updates (for hotbar UI)
   */
  setOnCooldownUpdate(callback) {
    this.onCooldownUpdate = callback;
  }
  
  /**
   * Event: Set callback for hotbar changes
   */
  setOnHotbarChanged(callback) {
    this.onHotbarChanged = callback;
  }
  
  /**
   * Event: Set callback for buff changes
   */
  setOnBuffsChanged(callback) {
    this.onBuffsChanged = callback;
  }
  
  /**
   * Event: Set callback for spell cast
   */
  setOnSpellCast(callback) {
    this.onSpellCast = callback;
  }
}
