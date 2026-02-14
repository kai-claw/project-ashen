/**
 * CraftingManager.js - Core Crafting System
 * Phase 23: Crafting System
 * 
 * Features:
 * - Track unlocked recipes per player (localStorage persistence)
 * - canCraft(recipeId): check materials, level, and station requirements
 * - craft(recipeId): consume materials, create items, add to inventory
 * - Crafting time with progress bar (optional instant for simple items)
 * - Batch crafting: craft multiple of same item
 * - Recipe discovery: unlock via scrolls, NPCs, exploration
 * - Crafting stations: certain recipes only work near specific stations
 * - Events: onCraft, onRecipeUnlock for UI updates
 * - Full persistence with save/load
 */

import { 
  RECIPES, 
  RECIPE_CATEGORY, 
  CRAFTING_STATION, 
  UNLOCK_METHOD,
  getRecipe, 
  getDefaultUnlockedRecipes,
  getRecipesByCategory,
  calculateBatchCost,
  getRecipeRarityColor,
} from '../data/RecipeData.js';
import { getMaterial, MATERIALS } from '../data/MaterialData.js';

export class CraftingManager {
  constructor(gameManager, inventoryUI = null) {
    this.gm = gameManager;
    this.inventoryUI = inventoryUI;
    
    // Unlocked recipes (Set of recipe IDs)
    this.unlockedRecipes = new Set();
    
    // Crafting state
    this.isCrafting = false;
    this.craftingProgress = 0;
    this.craftingTarget = null;
    this.craftingQuantity = 1;
    this.craftingTimer = null;
    
    // Current station proximity (null = no station nearby)
    this.nearbyStation = null;
    this.nearbyStationPosition = null;
    
    // Statistics
    this.stats = {
      totalCrafted: 0,
      recipesCrafted: {},
    };
    
    // Event callbacks
    this.onCraftCallbacks = [];
    this.onRecipeUnlockCallbacks = [];
    this.onCraftProgressCallbacks = [];
    this.onCraftFailCallbacks = [];
    
    // Load saved state
    this._loadState();
    
    // Initialize default recipes
    this._initializeDefaultRecipes();
    
    console.log(`[CraftingManager] Initialized with ${this.unlockedRecipes.size} unlocked recipes`);
  }
  
  // ========== INITIALIZATION ==========
  
  _initializeDefaultRecipes() {
    const defaults = getDefaultUnlockedRecipes();
    defaults.forEach(recipe => {
      this.unlockedRecipes.add(recipe.id);
    });
    this._saveState();
  }
  
  // ========== PERSISTENCE ==========
  
  _loadState() {
    try {
      const saved = localStorage.getItem('ashen-crafting');
      if (saved) {
        const data = JSON.parse(saved);
        this.unlockedRecipes = new Set(data.unlockedRecipes || []);
        this.stats = data.stats || this.stats;
      }
    } catch (e) {
      console.warn('[CraftingManager] Failed to load saved state:', e);
    }
  }
  
  _saveState() {
    try {
      const data = {
        unlockedRecipes: Array.from(this.unlockedRecipes),
        stats: this.stats,
      };
      localStorage.setItem('ashen-crafting', JSON.stringify(data));
    } catch (e) {
      console.warn('[CraftingManager] Failed to save state:', e);
    }
  }
  
  // ========== RECIPE MANAGEMENT ==========
  
  /**
   * Check if a recipe is unlocked
   */
  isRecipeUnlocked(recipeId) {
    return this.unlockedRecipes.has(recipeId);
  }
  
  /**
   * Unlock a new recipe
   */
  unlockRecipe(recipeId, source = 'unknown') {
    if (this.unlockedRecipes.has(recipeId)) {
      return false; // Already unlocked
    }
    
    const recipe = getRecipe(recipeId);
    if (!recipe) {
      console.warn(`[CraftingManager] Cannot unlock unknown recipe: ${recipeId}`);
      return false;
    }
    
    this.unlockedRecipes.add(recipeId);
    this._saveState();
    
    // Fire unlock callbacks
    this.onRecipeUnlockCallbacks.forEach(cb => cb(recipe, source));
    
    console.log(`[CraftingManager] Unlocked recipe: ${recipe.name} (via ${source})`);
    return true;
  }
  
  /**
   * Get all unlocked recipes
   */
  getUnlockedRecipes() {
    return Array.from(this.unlockedRecipes)
      .map(id => getRecipe(id))
      .filter(r => r !== null);
  }
  
  /**
   * Get unlocked recipes by category
   */
  getUnlockedRecipesByCategory(categoryId) {
    return this.getUnlockedRecipes().filter(r => r.category.id === categoryId);
  }
  
  /**
   * Get all locked recipes (for showing ??? in UI)
   */
  getLockedRecipes() {
    return Object.values(RECIPES).filter(r => !this.unlockedRecipes.has(r.id));
  }
  
  // ========== MATERIAL QUERIES ==========
  
  /**
   * Get player's current material count
   */
  getMaterialCount(materialId) {
    // Try GatheringManager first
    if (this.gm?.gatheringManager?.getMaterialCount) {
      return this.gm.gatheringManager.getMaterialCount(materialId);
    }
    // Fallback to localStorage
    const materials = JSON.parse(localStorage.getItem('ashen-materials') || '{}');
    return materials[materialId] || 0;
  }
  
  /**
   * Get all player materials
   */
  getAllMaterials() {
    if (this.gm?.gatheringManager?.getAllMaterials) {
      return this.gm.gatheringManager.getAllMaterials();
    }
    return JSON.parse(localStorage.getItem('ashen-materials') || '{}');
  }
  
  /**
   * Consume materials from player inventory
   */
  _consumeMaterials(materials) {
    const stored = JSON.parse(localStorage.getItem('ashen-materials') || '{}');
    
    for (const mat of materials) {
      if ((stored[mat.materialId] || 0) < mat.qty) {
        return false; // Not enough materials
      }
      stored[mat.materialId] -= mat.qty;
      if (stored[mat.materialId] <= 0) {
        delete stored[mat.materialId];
      }
    }
    
    localStorage.setItem('ashen-materials', JSON.stringify(stored));
    return true;
  }
  
  /**
   * Add materials to player inventory
   */
  _addMaterial(materialId, quantity) {
    const stored = JSON.parse(localStorage.getItem('ashen-materials') || '{}');
    stored[materialId] = (stored[materialId] || 0) + quantity;
    localStorage.setItem('ashen-materials', JSON.stringify(stored));
  }
  
  // ========== CRAFTING CHECKS ==========
  
  /**
   * Get player level
   */
  _getPlayerLevel() {
    return this.gm?.player?.level || this.gm?.getPlayerLevel?.() || 1;
  }
  
  /**
   * Check if player can craft a recipe
   * @returns {{ canCraft: boolean, reason: string, missingMaterials?: array }}
   */
  canCraft(recipeId, quantity = 1) {
    const recipe = getRecipe(recipeId);
    if (!recipe) {
      return { canCraft: false, reason: 'Recipe does not exist.' };
    }
    
    // Check if unlocked
    if (!this.isRecipeUnlocked(recipeId)) {
      return { canCraft: false, reason: 'Recipe not yet discovered.' };
    }
    
    // Check player level
    const playerLevel = this._getPlayerLevel();
    if (playerLevel < recipe.requiredLevel) {
      return { 
        canCraft: false, 
        reason: `Requires level ${recipe.requiredLevel} (you are level ${playerLevel}).` 
      };
    }
    
    // Check crafting station
    if (recipe.station && recipe.station.id !== 'none') {
      if (!this.nearbyStation || this.nearbyStation.id !== recipe.station.id) {
        return { 
          canCraft: false, 
          reason: `Requires a ${recipe.station.name}.` 
        };
      }
    }
    
    // Phase 24: Check time-locked recipes
    const timeWeatherGameplay = this.gm?.timeWeatherGameplay;
    if (timeWeatherGameplay) {
      const timeCheck = timeWeatherGameplay.canCraftTimeLocked(recipeId);
      if (!timeCheck.allowed) {
        return {
          canCraft: false,
          reason: timeCheck.reason || 'Cannot craft at this time.',
          timeLocked: true
        };
      }
    }
    
    // Check materials
    const missingMaterials = [];
    for (const mat of recipe.materials) {
      const required = mat.qty * quantity;
      const owned = this.getMaterialCount(mat.materialId);
      if (owned < required) {
        const matDef = getMaterial(mat.materialId);
        missingMaterials.push({
          materialId: mat.materialId,
          name: matDef?.name || mat.materialId,
          required,
          owned,
          missing: required - owned,
        });
      }
    }
    
    if (missingMaterials.length > 0) {
      return { 
        canCraft: false, 
        reason: 'Missing required materials.', 
        missingMaterials 
      };
    }
    
    return { canCraft: true, reason: 'Ready to craft.' };
  }
  
  /**
   * Get max craftable quantity based on materials
   */
  getMaxCraftable(recipeId) {
    const recipe = getRecipe(recipeId);
    if (!recipe) return 0;
    
    let maxQty = Infinity;
    
    for (const mat of recipe.materials) {
      const owned = this.getMaterialCount(mat.materialId);
      const possible = Math.floor(owned / mat.qty);
      maxQty = Math.min(maxQty, possible);
    }
    
    return maxQty === Infinity ? 0 : maxQty;
  }
  
  // ========== CRAFTING ==========
  
  /**
   * Start crafting a recipe
   * @returns {boolean} True if crafting started
   */
  startCraft(recipeId, quantity = 1) {
    if (this.isCrafting) {
      return false; // Already crafting
    }
    
    const check = this.canCraft(recipeId, quantity);
    if (!check.canCraft) {
      this._fireCraftFail(recipeId, check.reason);
      return false;
    }
    
    const recipe = getRecipe(recipeId);
    
    this.isCrafting = true;
    this.craftingProgress = 0;
    this.craftingTarget = recipe;
    this.craftingQuantity = quantity;
    
    // For instant crafts (very short time), complete immediately
    const totalTime = recipe.craftingTime * quantity;
    if (totalTime <= 0.5) {
      this._completeCraft();
      return true;
    }
    
    // Start progress-based crafting
    const startTime = Date.now();
    const endTime = startTime + totalTime * 1000;
    
    const updateProgress = () => {
      if (!this.isCrafting || this.craftingTarget !== recipe) {
        return;
      }
      
      const now = Date.now();
      const elapsed = (now - startTime) / 1000;
      this.craftingProgress = Math.min(elapsed / totalTime, 1);
      
      // Fire progress callbacks
      this.onCraftProgressCallbacks.forEach(cb => 
        cb(recipe, this.craftingProgress, quantity)
      );
      
      if (now >= endTime) {
        this._completeCraft();
      } else {
        this.craftingTimer = requestAnimationFrame(updateProgress);
      }
    };
    
    this.craftingTimer = requestAnimationFrame(updateProgress);
    return true;
  }
  
  /**
   * Cancel current crafting
   */
  cancelCraft() {
    if (!this.isCrafting) return;
    
    if (this.craftingTimer) {
      cancelAnimationFrame(this.craftingTimer);
      this.craftingTimer = null;
    }
    
    this.isCrafting = false;
    this.craftingProgress = 0;
    this.craftingTarget = null;
    this.craftingQuantity = 1;
  }
  
  /**
   * Complete crafting and deliver results
   */
  _completeCraft() {
    const recipe = this.craftingTarget;
    const quantity = this.craftingQuantity;
    
    if (!recipe) {
      this.cancelCraft();
      return;
    }
    
    // Double-check we can still craft
    const check = this.canCraft(recipe.id, quantity);
    if (!check.canCraft) {
      this._fireCraftFail(recipe.id, check.reason);
      this.cancelCraft();
      return;
    }
    
    // Consume materials
    const batchCost = calculateBatchCost(recipe.id, quantity);
    if (!this._consumeMaterials(batchCost)) {
      this._fireCraftFail(recipe.id, 'Failed to consume materials.');
      this.cancelCraft();
      return;
    }
    
    // Create result items
    const resultQty = recipe.result.qty * quantity;
    const resultItemId = recipe.result.itemId;
    
    // Add to inventory based on category
    this._addCraftedItem(recipe, resultItemId, resultQty);
    
    // Update stats
    this.stats.totalCrafted += quantity;
    this.stats.recipesCrafted[recipe.id] = 
      (this.stats.recipesCrafted[recipe.id] || 0) + quantity;
    this._saveState();
    
    // Fire craft callbacks
    this.onCraftCallbacks.forEach(cb => 
      cb(recipe, resultItemId, resultQty)
    );
    
    // Play sound
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('itemPickup', { volume: 0.6 });
    }
    
    // Reset crafting state
    this.isCrafting = false;
    this.craftingProgress = 0;
    this.craftingTarget = null;
    this.craftingQuantity = 1;
    
    if (this.craftingTimer) {
      cancelAnimationFrame(this.craftingTimer);
      this.craftingTimer = null;
    }
    
    console.log(`[CraftingManager] Crafted ${resultQty}x ${recipe.name}`);
  }
  
  /**
   * Add crafted item to appropriate inventory
   */
  _addCraftedItem(recipe, itemId, quantity) {
    const category = recipe.category.id;
    
    switch (category) {
      case 'potion':
        // Add to consumables/potions inventory
        if (this.gm?.lootManager?.addConsumable) {
          for (let i = 0; i < quantity; i++) {
            this.gm.lootManager.addConsumable({
              id: itemId,
              name: recipe.name,
              description: recipe.description,
              type: 'potion',
              effect: this._getItemEffect(recipe),
            });
          }
        } else {
          // Fallback: store in localStorage
          const potions = JSON.parse(localStorage.getItem('ashen-potions') || '{}');
          potions[itemId] = (potions[itemId] || 0) + quantity;
          localStorage.setItem('ashen-potions', JSON.stringify(potions));
        }
        break;
        
      case 'material':
        // Refined materials go back to material storage
        this._addMaterial(itemId, quantity);
        break;
        
      case 'weapon':
      case 'armor':
      case 'accessory':
        // Add to equipment inventory via LootManager
        if (this.gm?.lootManager?.addItem) {
          for (let i = 0; i < quantity; i++) {
            this.gm.lootManager.addItem({
              id: itemId,
              name: recipe.name,
              description: recipe.description,
              type: category,
              rarity: recipe.rarity,
              stats: recipe.resultStats || {},
            });
          }
        } else {
          // Fallback: store in localStorage
          const equipment = JSON.parse(localStorage.getItem('ashen-crafted-equipment') || '[]');
          for (let i = 0; i < quantity; i++) {
            equipment.push({
              id: `${itemId}-${Date.now()}-${i}`,
              recipeId: recipe.id,
              name: recipe.name,
              type: category,
              rarity: recipe.rarity,
              stats: recipe.resultStats || {},
            });
          }
          localStorage.setItem('ashen-crafted-equipment', JSON.stringify(equipment));
        }
        break;
        
      case 'upgrade':
        // Add to upgrade materials inventory
        const upgrades = JSON.parse(localStorage.getItem('ashen-upgrades') || '{}');
        upgrades[itemId] = (upgrades[itemId] || 0) + quantity;
        localStorage.setItem('ashen-upgrades', JSON.stringify(upgrades));
        break;
        
      default:
        console.warn(`[CraftingManager] Unknown item category: ${category}`);
    }
  }
  
  _getItemEffect(recipe) {
    // Parse effect from description or set defaults
    const name = recipe.name.toLowerCase();
    if (name.includes('health')) return { type: 'heal', value: 50 };
    if (name.includes('mana')) return { type: 'mana', value: 40 };
    if (name.includes('stamina')) return { type: 'stamina', value: 100 };
    if (name.includes('strength')) return { type: 'buff', stat: 'strength', value: 5, duration: 90 };
    if (name.includes('speed')) return { type: 'buff', stat: 'speed', value: 0.3, duration: 45 };
    if (name.includes('fire resist')) return { type: 'buff', stat: 'fireResist', value: 0.5, duration: 60 };
    if (name.includes('antidote')) return { type: 'cure', ailment: 'poison' };
    return { type: 'unknown' };
  }
  
  _fireCraftFail(recipeId, reason) {
    this.onCraftFailCallbacks.forEach(cb => cb(recipeId, reason));
    
    // Play error sound
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('menuBack', { volume: 0.5 });
    }
  }
  
  // ========== STATION MANAGEMENT ==========
  
  /**
   * Set nearby crafting station
   */
  setNearbyStation(station, position = null) {
    this.nearbyStation = station;
    this.nearbyStationPosition = position;
  }
  
  /**
   * Clear nearby station
   */
  clearNearbyStation() {
    this.nearbyStation = null;
    this.nearbyStationPosition = null;
  }
  
  /**
   * Get current nearby station
   */
  getNearbyStation() {
    return this.nearbyStation;
  }
  
  /**
   * Check if near any crafting station
   */
  isNearStation() {
    return this.nearbyStation !== null;
  }
  
  /**
   * Check if near a specific station type
   */
  isNearStationType(stationId) {
    return this.nearbyStation?.id === stationId;
  }
  
  // ========== RECIPE DISCOVERY ==========
  
  /**
   * Handle recipe scroll pickup
   */
  handleRecipeScroll(recipeId) {
    return this.unlockRecipe(recipeId, 'scroll');
  }
  
  /**
   * Handle NPC teaching a recipe
   */
  handleNPCTeach(recipeId, npcName = 'merchant') {
    return this.unlockRecipe(recipeId, `npc:${npcName}`);
  }
  
  /**
   * Handle boss drop recipe
   */
  handleBossDropRecipe(recipeId, bossName) {
    return this.unlockRecipe(recipeId, `boss:${bossName}`);
  }
  
  /**
   * Handle exploration discovery
   */
  handleExplorationDiscovery(recipeId, location = 'unknown') {
    return this.unlockRecipe(recipeId, `exploration:${location}`);
  }
  
  // ========== EVENT SYSTEM ==========
  
  /**
   * Register callback for craft completion
   */
  onCraft(callback) {
    this.onCraftCallbacks.push(callback);
    return () => {
      const idx = this.onCraftCallbacks.indexOf(callback);
      if (idx !== -1) this.onCraftCallbacks.splice(idx, 1);
    };
  }
  
  /**
   * Register callback for recipe unlock
   */
  onRecipeUnlock(callback) {
    this.onRecipeUnlockCallbacks.push(callback);
    return () => {
      const idx = this.onRecipeUnlockCallbacks.indexOf(callback);
      if (idx !== -1) this.onRecipeUnlockCallbacks.splice(idx, 1);
    };
  }
  
  /**
   * Register callback for craft progress updates
   */
  onCraftProgress(callback) {
    this.onCraftProgressCallbacks.push(callback);
    return () => {
      const idx = this.onCraftProgressCallbacks.indexOf(callback);
      if (idx !== -1) this.onCraftProgressCallbacks.splice(idx, 1);
    };
  }
  
  /**
   * Register callback for craft failures
   */
  onCraftFail(callback) {
    this.onCraftFailCallbacks.push(callback);
    return () => {
      const idx = this.onCraftFailCallbacks.indexOf(callback);
      if (idx !== -1) this.onCraftFailCallbacks.splice(idx, 1);
    };
  }
  
  // ========== UTILITY ==========
  
  /**
   * Get recipe material info with ownership data
   */
  getRecipeMaterialInfo(recipeId) {
    const recipe = getRecipe(recipeId);
    if (!recipe) return null;
    
    return recipe.materials.map(mat => {
      const matDef = getMaterial(mat.materialId);
      const owned = this.getMaterialCount(mat.materialId);
      return {
        materialId: mat.materialId,
        name: matDef?.name || mat.materialId,
        required: mat.qty,
        owned,
        sufficient: owned >= mat.qty,
        iconColor: matDef?.iconColor || 0x888888,
        rarity: matDef?.rarity?.id || 'common',
      };
    });
  }
  
  /**
   * Get crafting stats
   */
  getStats() {
    return { ...this.stats };
  }
  
  /**
   * Reset all crafting progress (for new game)
   */
  resetProgress() {
    this.unlockedRecipes.clear();
    this.stats = {
      totalCrafted: 0,
      recipesCrafted: {},
    };
    this.cancelCraft();
    this._initializeDefaultRecipes();
    this._saveState();
    console.log('[CraftingManager] Progress reset');
  }
  
  /**
   * Cleanup
   */
  dispose() {
    this.cancelCraft();
    this.onCraftCallbacks = [];
    this.onRecipeUnlockCallbacks = [];
    this.onCraftProgressCallbacks = [];
    this.onCraftFailCallbacks = [];
  }
}
