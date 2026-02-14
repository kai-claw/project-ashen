/**
 * CraftingUI.js - Crafting Interface
 * Phase 23: Crafting System
 * 
 * Features:
 * - Open with C key or when interacting with crafting station
 * - Left panel: recipe list (filterable by category)
 * - Right panel: selected recipe details (name, materials, result, craft button)
 * - Material display: show owned/required (green if enough, red if not)
 * - Result preview: show item stats/description
 * - Craft button: grayed if can't craft, animated progress if crafting
 * - Tabs for categories (All, Weapons, Armor, Potions, etc)
 * - Search bar to filter recipes by name
 * - Locked recipes show as '???' with hint on how to unlock
 * - Dark Souls-inspired aesthetic consistent with InventoryUI
 */

import { RECIPE_CATEGORY, CRAFTING_STATION, UNLOCK_METHOD, getRecipe, getRecipeRarityColor, RECIPES } from '../data/RecipeData.js';
import { getMaterial, MATERIAL_RARITY } from '../data/MaterialData.js';

export class CraftingUI {
  constructor(gameManager, craftingManager, inputManager) {
    this.gm = gameManager;
    this.craftingManager = craftingManager;
    this.inputManager = inputManager;
    
    this.isOpen = false;
    this.activeCategory = 'all'; // 'all', 'weapon', 'armor', 'potion', 'accessory', 'upgrade', 'material'
    this.selectedRecipe = null;
    this.searchQuery = '';
    this.craftQuantity = 1;
    
    this.container = null;
    this.tooltipEl = null;
    
    // Bind crafting callbacks
    this._onCraftComplete = this._onCraftComplete.bind(this);
    this._onCraftProgress = this._onCraftProgress.bind(this);
    this._onCraftFail = this._onCraftFail.bind(this);
    this._onRecipeUnlock = this._onRecipeUnlock.bind(this);
    
    this.createUI();
    this.createStyles();
    this.registerCallbacks();
    
    console.log('[CraftingUI] Initialized');
  }
  
  /**
   * Register crafting manager callbacks
   */
  registerCallbacks() {
    if (!this.craftingManager) return;
    
    this.craftingManager.onCraft(this._onCraftComplete);
    this.craftingManager.onCraftProgress(this._onCraftProgress);
    this.craftingManager.onCraftFail(this._onCraftFail);
    this.craftingManager.onRecipeUnlock(this._onRecipeUnlock);
  }
  
  _onCraftComplete(recipe, itemId, qty) {
    if (this.isOpen) {
      this.render();
      this._showNotification(`Crafted ${qty}x ${recipe.name}!`, 'success');
    }
  }
  
  _onCraftProgress(recipe, progress, qty) {
    // Update progress bar
    const progressBar = this.container?.querySelector('.craft-progress-fill');
    if (progressBar) {
      progressBar.style.width = `${progress * 100}%`;
    }
    
    const progressText = this.container?.querySelector('.craft-progress-text');
    if (progressText) {
      progressText.textContent = `Crafting... ${Math.floor(progress * 100)}%`;
    }
  }
  
  _onCraftFail(recipeId, reason) {
    this._showNotification(reason, 'error');
  }
  
  _onRecipeUnlock(recipe, source) {
    this._showNotification(`New recipe discovered: ${recipe.name}!`, 'unlock');
    if (this.isOpen) {
      this.render();
    }
  }
  
  _showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `crafting-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      background: ${type === 'success' ? 'rgba(50, 120, 50, 0.95)' : 
                   type === 'error' ? 'rgba(120, 50, 50, 0.95)' : 
                   type === 'unlock' ? 'rgba(150, 120, 50, 0.95)' : 
                   'rgba(50, 50, 80, 0.95)'};
      border: 1px solid ${type === 'success' ? 'rgba(100, 200, 100, 0.5)' : 
                         type === 'error' ? 'rgba(200, 100, 100, 0.5)' : 
                         type === 'unlock' ? 'rgba(255, 200, 100, 0.5)' :
                         'rgba(100, 100, 150, 0.5)'};
      padding: 12px 24px;
      border-radius: 4px;
      color: #fff;
      font-family: 'Cinzel', 'Georgia', serif;
      font-size: 14px;
      z-index: 4000;
      animation: craftNotifyFade 2s ease-out forwards;
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 2000);
  }
  
  /**
   * Create the main UI container
   */
  createUI() {
    // Main container
    this.container = document.createElement('div');
    this.container.id = 'crafting-ui';
    this.container.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 900px;
      max-height: 85vh;
      background: linear-gradient(145deg, rgba(15, 15, 20, 0.97), rgba(8, 8, 12, 0.99));
      border: 2px solid rgba(200, 170, 100, 0.4);
      border-radius: 6px;
      padding: 0;
      color: #ddd;
      font-family: 'Cinzel', 'Georgia', serif;
      display: none;
      z-index: 2000;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.9), inset 0 0 80px rgba(0, 0, 0, 0.4);
      overflow: hidden;
    `;
    
    document.body.appendChild(this.container);
    
    // Tooltip element
    this.tooltipEl = document.createElement('div');
    this.tooltipEl.id = 'crafting-tooltip';
    this.tooltipEl.style.cssText = `
      position: fixed;
      background: rgba(10, 10, 15, 0.98);
      border: 1px solid rgba(200, 170, 100, 0.5);
      border-radius: 4px;
      padding: 12px 16px;
      color: #ccc;
      font-family: 'Cinzel', 'Georgia', serif;
      font-size: 13px;
      max-width: 320px;
      z-index: 3000;
      pointer-events: none;
      display: none;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
    `;
    document.body.appendChild(this.tooltipEl);
  }
  
  /**
   * Create CSS styles
   */
  createStyles() {
    if (document.getElementById('crafting-ui-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'crafting-ui-styles';
    style.textContent = `
      @keyframes craftNotifyFade {
        0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
        10% { opacity: 1; transform: translateX(-50%) translateY(0); }
        80% { opacity: 1; }
        100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
      }
      
      @keyframes craftPulse {
        0%, 100% { box-shadow: 0 0 5px rgba(255, 200, 100, 0.3); }
        50% { box-shadow: 0 0 15px rgba(255, 200, 100, 0.6); }
      }
      
      #crafting-ui .cat-tab {
        background: rgba(30, 30, 40, 0.8);
        border: none;
        border-bottom: 2px solid transparent;
        color: #888;
        padding: 10px 16px;
        font-family: 'Cinzel', 'Georgia', serif;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
      }
      
      #crafting-ui .cat-tab:hover {
        color: #ccc;
        background: rgba(50, 50, 60, 0.8);
      }
      
      #crafting-ui .cat-tab.active {
        color: #ffc864;
        border-bottom-color: #ffc864;
        background: rgba(40, 35, 30, 0.8);
      }
      
      #crafting-ui .recipe-item {
        padding: 10px 12px;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(80, 80, 80, 0.3);
        border-radius: 4px;
        margin-bottom: 6px;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      
      #crafting-ui .recipe-item:hover {
        border-color: rgba(200, 170, 100, 0.5);
        background: rgba(40, 35, 30, 0.4);
      }
      
      #crafting-ui .recipe-item.selected {
        border-color: rgba(255, 200, 100, 0.6);
        background: rgba(50, 45, 35, 0.5);
        box-shadow: 0 0 10px rgba(255, 200, 100, 0.15);
      }
      
      #crafting-ui .recipe-item.locked {
        opacity: 0.5;
        border-style: dashed;
      }
      
      #crafting-ui .recipe-item.can-craft {
        border-left: 3px solid rgba(100, 200, 100, 0.6);
      }
      
      #crafting-ui .recipe-item.cannot-craft {
        border-left: 3px solid rgba(200, 100, 100, 0.4);
      }
      
      #crafting-ui .material-row {
        display: flex;
        align-items: center;
        padding: 8px 10px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
        margin-bottom: 4px;
      }
      
      #crafting-ui .material-row.sufficient {
        border-left: 3px solid rgba(100, 200, 100, 0.6);
      }
      
      #crafting-ui .material-row.insufficient {
        border-left: 3px solid rgba(200, 100, 100, 0.6);
      }
      
      #crafting-ui .craft-btn {
        padding: 12px 24px;
        border: 1px solid rgba(200, 170, 100, 0.5);
        border-radius: 4px;
        background: linear-gradient(180deg, rgba(80, 70, 50, 0.8), rgba(60, 50, 35, 0.9));
        color: #ffc864;
        font-family: 'Cinzel', 'Georgia', serif;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      
      #crafting-ui .craft-btn:hover:not(:disabled) {
        background: linear-gradient(180deg, rgba(100, 90, 60, 0.9), rgba(80, 70, 50, 0.95));
        box-shadow: 0 0 15px rgba(255, 200, 100, 0.3);
        transform: translateY(-1px);
      }
      
      #crafting-ui .craft-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
        color: #666;
        border-color: rgba(100, 100, 100, 0.3);
        background: rgba(40, 40, 50, 0.6);
      }
      
      #crafting-ui .craft-btn.crafting {
        animation: craftPulse 1s ease-in-out infinite;
      }
      
      #crafting-ui .search-input {
        width: 100%;
        padding: 8px 12px;
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid rgba(100, 100, 100, 0.3);
        border-radius: 4px;
        color: #ccc;
        font-family: 'Cinzel', 'Georgia', serif;
        font-size: 12px;
        outline: none;
        transition: border-color 0.2s ease;
      }
      
      #crafting-ui .search-input:focus {
        border-color: rgba(200, 170, 100, 0.5);
      }
      
      #crafting-ui .search-input::placeholder {
        color: #555;
      }
      
      #crafting-ui .qty-btn {
        width: 28px;
        height: 28px;
        background: rgba(50, 50, 60, 0.8);
        border: 1px solid rgba(100, 100, 100, 0.4);
        border-radius: 4px;
        color: #aaa;
        font-size: 16px;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      
      #crafting-ui .qty-btn:hover {
        background: rgba(70, 70, 80, 0.9);
        color: #fff;
        border-color: rgba(150, 150, 150, 0.5);
      }
      
      #crafting-ui .qty-btn:disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
      
      #crafting-ui .station-indicator {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 4px;
        font-size: 12px;
      }
      
      #crafting-ui .station-indicator.available {
        border: 1px solid rgba(100, 200, 100, 0.4);
        color: #8f8;
      }
      
      #crafting-ui .station-indicator.unavailable {
        border: 1px solid rgba(200, 100, 100, 0.3);
        color: #f88;
      }
      
      #crafting-ui .progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(0, 0, 0, 0.4);
        border-radius: 4px;
        overflow: hidden;
        margin-top: 10px;
      }
      
      #crafting-ui .progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #ffc864, #ffaa44);
        transition: width 0.1s linear;
      }
    `;
    document.head.appendChild(style);
  }
  
  /**
   * Toggle UI open/closed
   */
  toggle() {
    this.isOpen = !this.isOpen;
    this.container.style.display = this.isOpen ? 'block' : 'none';
    this.tooltipEl.style.display = 'none';
    
    if (this.isOpen) {
      this.render();
    }
  }
  
  /**
   * Open the UI
   */
  open() {
    if (!this.isOpen) {
      this.isOpen = true;
      this.container.style.display = 'block';
      this.render();
    }
  }
  
  /**
   * Close the UI
   */
  close() {
    if (this.isOpen) {
      this.isOpen = false;
      this.container.style.display = 'none';
      this.tooltipEl.style.display = 'none';
    }
  }
  
  /**
   * Main render method
   */
  render() {
    const nearbyStation = this.craftingManager?.getNearbyStation();
    const unlockedRecipes = this.craftingManager?.getUnlockedRecipes() || [];
    const lockedRecipes = this.craftingManager?.getLockedRecipes() || [];
    
    // Filter recipes
    const filteredRecipes = this.getFilteredRecipes(unlockedRecipes, lockedRecipes);
    
    this.container.innerHTML = `
      <!-- Header -->
      <div style="
        background: linear-gradient(90deg, rgba(40, 35, 25, 0.9), rgba(30, 28, 22, 0.95), rgba(40, 35, 25, 0.9));
        padding: 15px 20px;
        border-bottom: 1px solid rgba(200, 170, 100, 0.3);
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <h2 style="margin: 0; color: #ffc864; font-size: 20px; text-shadow: 0 0 15px rgba(255, 200, 100, 0.4);">
          🔨 Crafting
        </h2>
        <div class="station-indicator ${nearbyStation ? 'available' : 'unavailable'}">
          ${nearbyStation ? `
            <span>📍 ${nearbyStation.name}</span>
          ` : `
            <span>No station nearby</span>
          `}
        </div>
      </div>
      
      <!-- Category Tabs -->
      <div style="
        display: flex;
        background: rgba(20, 20, 25, 0.8);
        border-bottom: 1px solid rgba(80, 80, 80, 0.3);
        overflow-x: auto;
      ">
        <button class="cat-tab ${this.activeCategory === 'all' ? 'active' : ''}" data-category="all">
          📋 All
        </button>
        ${Object.values(RECIPE_CATEGORY).map(cat => `
          <button class="cat-tab ${this.activeCategory === cat.id ? 'active' : ''}" data-category="${cat.id}">
            ${cat.icon} ${cat.name}
          </button>
        `).join('')}
      </div>
      
      <!-- Main Content -->
      <div style="display: flex; height: calc(85vh - 140px);">
        <!-- Left Panel: Recipe List -->
        <div style="
          width: 320px;
          border-right: 1px solid rgba(80, 80, 80, 0.3);
          display: flex;
          flex-direction: column;
        ">
          <!-- Search Bar -->
          <div style="padding: 12px;">
            <input 
              type="text" 
              class="search-input" 
              placeholder="🔍 Search recipes..." 
              value="${this.searchQuery}"
            >
          </div>
          
          <!-- Recipe List -->
          <div style="flex: 1; overflow-y: auto; padding: 0 12px 12px;">
            ${filteredRecipes.length === 0 ? `
              <div style="color: #555; text-align: center; padding: 20px; font-size: 13px;">
                No recipes found
              </div>
            ` : ''}
            ${filteredRecipes.map(({ recipe, isLocked }) => 
              this.renderRecipeItem(recipe, isLocked)
            ).join('')}
          </div>
        </div>
        
        <!-- Right Panel: Recipe Details -->
        <div style="flex: 1; overflow-y: auto; padding: 20px;">
          ${this.selectedRecipe ? this.renderRecipeDetails() : `
            <div style="
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100%;
              color: #555;
            ">
              <div style="font-size: 48px; margin-bottom: 15px;">🔨</div>
              <div style="font-size: 14px;">Select a recipe to view details</div>
            </div>
          `}
        </div>
      </div>
      
      <!-- Footer -->
      <div style="
        padding: 10px 20px;
        background: rgba(15, 15, 20, 0.9);
        border-top: 1px solid rgba(80, 80, 80, 0.3);
        text-align: center;
        color: #666;
        font-size: 12px;
      ">
        <span style="color: #ffc864;">[C]</span> Close • 
        <span style="color: #ffc864;">[Click]</span> Select Recipe • 
        <span style="color: #8f8;">Green</span> = Craftable • 
        <span style="color: #f88;">Red</span> = Missing Materials
      </div>
    `;
    
    this.attachEventListeners();
  }
  
  /**
   * Get filtered recipes based on category and search
   */
  getFilteredRecipes(unlockedRecipes, lockedRecipes) {
    const results = [];
    
    // Add unlocked recipes
    for (const recipe of unlockedRecipes) {
      if (this.matchesFilter(recipe)) {
        results.push({ recipe, isLocked: false });
      }
    }
    
    // Add locked recipes (shown as ???)
    for (const recipe of lockedRecipes) {
      if (this.matchesFilter(recipe)) {
        results.push({ recipe, isLocked: true });
      }
    }
    
    // Sort: craftable first, then by name
    results.sort((a, b) => {
      if (a.isLocked !== b.isLocked) return a.isLocked ? 1 : -1;
      
      const aCanCraft = !a.isLocked && this.craftingManager?.canCraft(a.recipe.id).canCraft;
      const bCanCraft = !b.isLocked && this.craftingManager?.canCraft(b.recipe.id).canCraft;
      
      if (aCanCraft !== bCanCraft) return aCanCraft ? -1 : 1;
      
      return a.recipe.name.localeCompare(b.recipe.name);
    });
    
    return results;
  }
  
  /**
   * Check if recipe matches current filter
   */
  matchesFilter(recipe) {
    // Category filter
    if (this.activeCategory !== 'all' && recipe.category.id !== this.activeCategory) {
      return false;
    }
    
    // Search filter
    if (this.searchQuery) {
      const query = this.searchQuery.toLowerCase();
      return recipe.name.toLowerCase().includes(query) ||
             recipe.description?.toLowerCase().includes(query);
    }
    
    return true;
  }
  
  /**
   * Render a recipe item in the list
   */
  renderRecipeItem(recipe, isLocked) {
    const isSelected = this.selectedRecipe?.id === recipe.id;
    const canCraftCheck = !isLocked ? this.craftingManager?.canCraft(recipe.id) : { canCraft: false };
    const canCraft = canCraftCheck?.canCraft;
    const rarityColor = getRecipeRarityColor(recipe.id);
    
    if (isLocked) {
      return `
        <div class="recipe-item locked" data-recipe-id="${recipe.id}" data-locked="true">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="color: #666; font-size: 13px;">??? Unknown Recipe ???</div>
              <div style="color: #444; font-size: 11px; margin-top: 4px;">
                ${this.getUnlockHint(recipe.unlockMethod)}
              </div>
            </div>
            <span style="color: #555; font-size: 16px;">🔒</span>
          </div>
        </div>
      `;
    }
    
    return `
      <div class="recipe-item ${isSelected ? 'selected' : ''} ${canCraft ? 'can-craft' : 'cannot-craft'}" 
           data-recipe-id="${recipe.id}">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="color: ${rarityColor}; font-size: 13px;">
              ${recipe.category.icon} ${recipe.name}
            </div>
            <div style="color: #666; font-size: 11px; margin-top: 3px;">
              ${recipe.category.name} • Lv.${recipe.requiredLevel}
              ${recipe.station?.id !== 'none' ? ` • ${recipe.station.name}` : ''}
            </div>
          </div>
          <span style="color: ${canCraft ? '#8f8' : '#f88'}; font-size: 10px;">
            ${canCraft ? '✓ Ready' : '✗'}
          </span>
        </div>
      </div>
    `;
  }
  
  /**
   * Get unlock hint text
   */
  getUnlockHint(unlockMethod) {
    switch (unlockMethod) {
      case UNLOCK_METHOD.FOUND_IN_CHEST:
        return 'Found in treasure chests';
      case UNLOCK_METHOD.BOUGHT_FROM_NPC:
        return 'Sold by merchants';
      case UNLOCK_METHOD.BOSS_DROP:
        return 'Dropped by a powerful foe';
      case UNLOCK_METHOD.EXPLORATION:
        return 'Discovered through exploration';
      case UNLOCK_METHOD.QUEST_REWARD:
        return 'Quest reward';
      case UNLOCK_METHOD.LEVEL_UP:
        return 'Unlocks at higher level';
      default:
        return 'Unknown source';
    }
  }
  
  /**
   * Render recipe details panel
   */
  renderRecipeDetails() {
    const recipe = this.selectedRecipe;
    if (!recipe) return '';
    
    const isLocked = !this.craftingManager?.isRecipeUnlocked(recipe.id);
    const canCraftCheck = this.craftingManager?.canCraft(recipe.id, this.craftQuantity);
    const canCraft = canCraftCheck?.canCraft;
    const maxCraftable = this.craftingManager?.getMaxCraftable(recipe.id) || 0;
    const materialInfo = this.craftingManager?.getRecipeMaterialInfo(recipe.id) || [];
    const rarityColor = getRecipeRarityColor(recipe.id);
    const nearbyStation = this.craftingManager?.getNearbyStation();
    const isCrafting = this.craftingManager?.isCrafting;
    
    // Station check
    const needsStation = recipe.station?.id !== 'none';
    const hasStation = !needsStation || (nearbyStation?.id === recipe.station?.id);
    
    if (isLocked) {
      return `
        <div style="text-align: center; padding: 40px;">
          <div style="font-size: 48px; margin-bottom: 20px;">🔒</div>
          <div style="color: #888; font-size: 16px; margin-bottom: 10px;">Recipe Locked</div>
          <div style="color: #666; font-size: 13px;">
            ${this.getUnlockHint(recipe.unlockMethod)}
          </div>
        </div>
      `;
    }
    
    return `
      <!-- Recipe Header -->
      <div style="margin-bottom: 20px;">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
          <span style="font-size: 28px;">${recipe.category.icon}</span>
          <div>
            <h3 style="margin: 0; color: ${rarityColor}; font-size: 18px;">${recipe.name}</h3>
            <div style="color: #888; font-size: 12px;">
              ${recipe.rarity?.name || 'Common'} ${recipe.category.name} • Level ${recipe.requiredLevel}
            </div>
          </div>
        </div>
        <p style="color: #aaa; font-size: 13px; margin: 10px 0; line-height: 1.5;">
          ${recipe.description || 'No description available.'}
        </p>
      </div>
      
      <!-- Station Requirement -->
      ${needsStation ? `
        <div style="
          padding: 10px 14px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid ${hasStation ? 'rgba(100, 200, 100, 0.3)' : 'rgba(200, 100, 100, 0.3)'};
          border-radius: 4px;
          margin-bottom: 15px;
          display: flex;
          align-items: center;
          gap: 10px;
        ">
          <span style="font-size: 16px;">🏭</span>
          <div>
            <div style="color: ${hasStation ? '#8f8' : '#f88'}; font-size: 12px;">
              Requires: ${recipe.station.name}
            </div>
            ${!hasStation ? `
              <div style="color: #666; font-size: 11px; margin-top: 2px;">
                Find a ${recipe.station.name.toLowerCase()} to craft this item
              </div>
            ` : ''}
          </div>
          <span style="margin-left: auto; color: ${hasStation ? '#8f8' : '#f88'};">
            ${hasStation ? '✓' : '✗'}
          </span>
        </div>
      ` : ''}
      
      <!-- Materials Required -->
      <div style="margin-bottom: 20px;">
        <h4 style="color: #ffc864; font-size: 13px; margin: 0 0 10px 0;">
          Materials Required ${this.craftQuantity > 1 ? `(×${this.craftQuantity})` : ''}
        </h4>
        ${materialInfo.map(mat => {
          const required = mat.required * this.craftQuantity;
          const sufficient = mat.owned >= required;
          const matDef = getMaterial(mat.materialId);
          const colorHex = '#' + (mat.iconColor || 0x888888).toString(16).padStart(6, '0');
          
          return `
            <div class="material-row ${sufficient ? 'sufficient' : 'insufficient'}">
              <div style="
                width: 24px;
                height: 24px;
                background: radial-gradient(circle at 30% 30%, ${colorHex}, ${colorHex}66);
                border-radius: 4px;
                margin-right: 10px;
              "></div>
              <div style="flex: 1;">
                <div style="color: ${colorHex}; font-size: 12px;">${mat.name}</div>
                <div style="color: #666; font-size: 10px; text-transform: capitalize;">${mat.rarity}</div>
              </div>
              <div style="text-align: right;">
                <span style="color: ${sufficient ? '#8f8' : '#f88'};">${mat.owned}</span>
                <span style="color: #666;"> / ${required}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      
      <!-- Result Preview -->
      <div style="margin-bottom: 20px;">
        <h4 style="color: #ffc864; font-size: 13px; margin: 0 0 10px 0;">Result</h4>
        <div style="
          padding: 12px;
          background: rgba(40, 35, 25, 0.4);
          border: 1px solid rgba(200, 170, 100, 0.3);
          border-radius: 4px;
        ">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 24px;">${recipe.category.icon}</span>
            <div>
              <div style="color: ${rarityColor}; font-size: 14px;">
                ${recipe.result.qty * this.craftQuantity}× ${recipe.name}
              </div>
              ${recipe.resultStats ? `
                <div style="color: #8f8; font-size: 11px; margin-top: 4px;">
                  ${Object.entries(recipe.resultStats).map(([stat, val]) => 
                    `+${val} ${this.formatStatName(stat)}`
                  ).join(' • ')}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Crafting Time -->
      <div style="color: #888; font-size: 12px; margin-bottom: 15px;">
        ⏱️ Crafting time: ${(recipe.craftingTime * this.craftQuantity).toFixed(1)}s
      </div>
      
      <!-- Quantity Selector -->
      <div style="
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
        padding: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 4px;
      ">
        <span style="color: #aaa; font-size: 12px;">Quantity:</span>
        <button class="qty-btn" data-qty-action="decrease" ${this.craftQuantity <= 1 ? 'disabled' : ''}>−</button>
        <span style="color: #fff; font-size: 16px; min-width: 40px; text-align: center;">
          ${this.craftQuantity}
        </span>
        <button class="qty-btn" data-qty-action="increase" ${this.craftQuantity >= maxCraftable ? 'disabled' : ''}>+</button>
        <button class="qty-btn" data-qty-action="max" style="width: auto; padding: 0 10px; font-size: 11px;"
                ${maxCraftable <= 0 ? 'disabled' : ''}>
          Max (${maxCraftable})
        </button>
      </div>
      
      <!-- Craft Button -->
      <div style="text-align: center;">
        <button 
          class="craft-btn ${isCrafting ? 'crafting' : ''}" 
          ${!canCraft || isCrafting ? 'disabled' : ''}
        >
          ${isCrafting ? 'Crafting...' : `Craft ${this.craftQuantity > 1 ? `(×${this.craftQuantity})` : ''}`}
        </button>
        
        ${!canCraft && canCraftCheck?.reason ? `
          <div style="color: #f88; font-size: 11px; margin-top: 10px;">
            ${canCraftCheck.reason}
          </div>
        ` : ''}
        
        ${isCrafting ? `
          <div class="progress-bar" style="margin-top: 15px;">
            <div class="progress-fill craft-progress-fill" style="width: 0%;"></div>
          </div>
          <div class="craft-progress-text" style="color: #888; font-size: 11px; margin-top: 5px;">
            Crafting... 0%
          </div>
        ` : ''}
      </div>
    `;
  }
  
  /**
   * Format stat name for display
   */
  formatStatName(stat) {
    const names = {
      damage: 'DMG',
      defense: 'DEF',
      health: 'HP',
      stamina: 'STA',
      mana: 'MP',
      critChance: 'CRIT%',
      critDamage: 'CRIT DMG',
      attackSpeed: 'ATK SPD',
      healthRegen: 'HP/s',
      staminaRegen: 'STA REG',
      strength: 'STR',
      intelligence: 'INT',
      dexterity: 'DEX',
    };
    return names[stat] || stat.toUpperCase();
  }
  
  /**
   * Attach event listeners
   */
  attachEventListeners() {
    // Expose for event handlers
    window.craftingUI = this;
    
    // Category tabs
    this.container.querySelectorAll('.cat-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        this.activeCategory = tab.dataset.category;
        this.selectedRecipe = null;
        this.craftQuantity = 1;
        this.render();
      });
    });
    
    // Search input
    const searchInput = this.container.querySelector('.search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.render();
        // Refocus search after render
        const newInput = this.container.querySelector('.search-input');
        if (newInput) {
          newInput.focus();
          newInput.setSelectionRange(this.searchQuery.length, this.searchQuery.length);
        }
      });
    }
    
    // Recipe items
    this.container.querySelectorAll('.recipe-item').forEach(item => {
      item.addEventListener('click', () => {
        const recipeId = item.dataset.recipeId;
        const isLocked = item.dataset.locked === 'true';
        
        if (isLocked) {
          this._showNotification('Recipe not yet discovered!', 'error');
          return;
        }
        
        this.selectedRecipe = getRecipe(recipeId);
        this.craftQuantity = 1;
        this.render();
      });
    });
    
    // Quantity buttons
    this.container.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const action = btn.dataset.qtyAction;
        const maxCraftable = this.craftingManager?.getMaxCraftable(this.selectedRecipe?.id) || 1;
        
        switch (action) {
          case 'decrease':
            this.craftQuantity = Math.max(1, this.craftQuantity - 1);
            break;
          case 'increase':
            this.craftQuantity = Math.min(maxCraftable, this.craftQuantity + 1);
            break;
          case 'max':
            this.craftQuantity = Math.max(1, maxCraftable);
            break;
        }
        this.render();
      });
    });
    
    // Craft button
    const craftBtn = this.container.querySelector('.craft-btn');
    if (craftBtn) {
      craftBtn.addEventListener('click', () => {
        if (!this.selectedRecipe || this.craftingManager?.isCrafting) return;
        
        const started = this.craftingManager.startCraft(
          this.selectedRecipe.id, 
          this.craftQuantity
        );
        
        if (started) {
          this.render();
        }
      });
    }
  }
  
  /**
   * Show material tooltip
   */
  showTooltip(event, materialId) {
    const mat = getMaterial(materialId);
    if (!mat) return;
    
    const colorHex = '#' + (mat.iconColor || 0x888888).toString(16).padStart(6, '0');
    
    this.tooltipEl.innerHTML = `
      <div style="color: ${colorHex}; font-weight: bold; margin-bottom: 4px;">${mat.name}</div>
      <div style="color: #888; font-size: 11px; text-transform: capitalize;">${mat.rarity?.name || 'Common'} ${mat.category?.name || 'Material'}</div>
      <div style="margin-top: 8px; color: #aaa; line-height: 1.4;">${mat.description || ''}</div>
    `;
    
    this.tooltipEl.style.display = 'block';
    this.positionTooltip(event);
  }
  
  /**
   * Position tooltip
   */
  positionTooltip(event) {
    const x = event.clientX + 15;
    const y = event.clientY + 10;
    const maxX = window.innerWidth - 340;
    const maxY = window.innerHeight - 200;
    
    this.tooltipEl.style.left = Math.min(x, maxX) + 'px';
    this.tooltipEl.style.top = Math.min(y, maxY) + 'px';
  }
  
  /**
   * Hide tooltip
   */
  hideTooltip() {
    this.tooltipEl.style.display = 'none';
  }
  
  /**
   * Update method (called from game loop)
   */
  update() {
    // Check for C key toggle
    if (this.inputManager?.craftingToggle) {
      this.toggle();
      this.inputManager.craftingToggle = false;
    }
    
    // Close on Escape
    if (this.isOpen && this.inputManager?.escape) {
      this.close();
    }
  }
  
  /**
   * Cleanup
   */
  dispose() {
    if (this.container) {
      this.container.remove();
    }
    if (this.tooltipEl) {
      this.tooltipEl.remove();
    }
    window.craftingUI = null;
  }
}
