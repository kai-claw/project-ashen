/**
 * ManaManager.js - Phase 20: Magic System
 * 
 * Handles mana resource: pool, consumption, regeneration, and events.
 * Mana is used to cast spells. INT stat increases max mana and regen.
 */

import * as THREE from 'three';

export class ManaManager {
  constructor(gameManager) {
    this.gm = gameManager;
    
    // Base mana values (before INT scaling)
    this.baseMaxMana = 100;
    this.baseManaRegen = 3; // Mana per second
    
    // Current state
    this.maxMana = this.baseMaxMana;
    this.currentMana = this.maxMana;
    
    // Regen delay after casting (like stamina)
    this.manaRegenDelay = 1.5; // seconds before regen starts
    this.manaRegenTimer = 0;
    
    // Event callbacks
    this.onManaChanged = null; // (current, max) => void
    this.onManaInsufficient = null; // () => void - when trying to cast without enough
    
    // Load saved mana
    this._loadMana();
    
    // Apply INT scaling
    this.recalculateMaxMana();
  }
  
  /**
   * Load mana from localStorage
   */
  _loadMana() {
    try {
      const saved = localStorage.getItem('ashen_mana');
      if (saved) {
        const data = JSON.parse(saved);
        this.currentMana = data.currentMana || this.maxMana;
      }
    } catch (e) {
      console.warn('[ManaManager] Failed to load mana:', e);
    }
  }
  
  /**
   * Save mana to localStorage
   */
  _saveMana() {
    try {
      const data = {
        currentMana: this.currentMana,
      };
      localStorage.setItem('ashen_mana', JSON.stringify(data));
    } catch (e) {
      console.warn('[ManaManager] Failed to save mana:', e);
    }
  }
  
  /**
   * Recalculate max mana based on INT stat
   * Called when stats change
   */
  recalculateMaxMana() {
    const intStat = this.gm.stats?.intelligence || 0;
    
    // INT scaling: +10 max mana per point
    const bonusMana = intStat * 10;
    
    // Equipment bonus (if any)
    const equipBonus = this.gm.equipmentBonuses?.mana || 0;
    
    this.maxMana = this.baseMaxMana + bonusMana + equipBonus;
    
    // Cap current to max
    this.currentMana = Math.min(this.currentMana, this.maxMana);
    
    this._fireOnManaChanged();
  }
  
  /**
   * Get current mana regen rate (affected by INT)
   */
  getManaRegenRate() {
    const intStat = this.gm.stats?.intelligence || 0;
    
    // INT scaling: +5% regen per point
    const regenMult = 1.0 + (intStat * 0.05);
    
    return this.baseManaRegen * regenMult;
  }
  
  /**
   * Update mana regeneration
   * Call each frame
   */
  update(delta) {
    if (this.gm.isDead) return;
    
    // Regen delay countdown
    this.manaRegenTimer += delta;
    
    // Regenerate mana if delay passed and not full
    if (this.manaRegenTimer >= this.manaRegenDelay && this.currentMana < this.maxMana) {
      const regenAmount = this.getManaRegenRate() * delta;
      this.currentMana = Math.min(this.maxMana, this.currentMana + regenAmount);
      this._fireOnManaChanged();
    }
  }
  
  /**
   * Check if player has enough mana to cast
   * @param {number} cost - Mana cost of the spell
   * @returns {boolean}
   */
  canUseMana(cost) {
    if (this.currentMana >= cost) {
      return true;
    }
    
    // Fire insufficient mana event
    if (this.onManaInsufficient) {
      this.onManaInsufficient();
    }
    
    return false;
  }
  
  /**
   * Consume mana for a spell
   * @param {number} cost - Mana cost
   * @returns {boolean} - True if successful
   */
  useMana(cost) {
    if (!this.canUseMana(cost)) {
      return false;
    }
    
    this.currentMana -= cost;
    this.manaRegenTimer = 0; // Reset regen delay
    
    this._saveMana();
    this._fireOnManaChanged();
    
    return true;
  }
  
  /**
   * Restore mana (from potions, resting, etc.)
   * @param {number} amount - Mana to restore
   */
  restoreMana(amount) {
    const previous = this.currentMana;
    this.currentMana = Math.min(this.maxMana, this.currentMana + amount);
    
    if (this.currentMana !== previous) {
      this._saveMana();
      this._fireOnManaChanged();
    }
    
    return this.currentMana - previous; // Actual amount restored
  }
  
  /**
   * Fully restore mana (on rest, level up, etc.)
   */
  fullRestore() {
    this.currentMana = this.maxMana;
    this._saveMana();
    this._fireOnManaChanged();
  }
  
  /**
   * Get mana as percentage (0-1)
   */
  getManaPercent() {
    return this.currentMana / this.maxMana;
  }
  
  /**
   * Fire mana changed event
   */
  _fireOnManaChanged() {
    if (this.onManaChanged) {
      this.onManaChanged(this.currentMana, this.maxMana);
    }
  }
  
  /**
   * Reset mana on respawn
   */
  onRespawn() {
    this.fullRestore();
    this.manaRegenTimer = 0;
  }
  
  /**
   * Set event callback for mana changes (for HUD updates)
   */
  setOnManaChanged(callback) {
    this.onManaChanged = callback;
  }
  
  /**
   * Set event callback for insufficient mana (for HUD flash)
   */
  setOnManaInsufficient(callback) {
    this.onManaInsufficient = callback;
  }
}
