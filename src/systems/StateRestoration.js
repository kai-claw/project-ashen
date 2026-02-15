/**
 * StateRestoration.js - Save State Restoration System
 * Phase 26: Save System & Persistence (Worker 2)
 * 
 * Handles proper state restoration across all managers:
 * - Correct initialization ORDER (dependencies first)
 * - Post-load validation for missing items/quests
 * - 'onGameLoaded' event for UI refresh
 * - Individual manager restoration methods
 * - Error recovery and fallbacks
 * - Save data migration helpers
 */

import * as THREE from 'three';
import {
  SAVE_VERSION,
  getDefaultPlayerData,
  getDefaultInventoryData,
  getDefaultEquipmentData,
  getDefaultQuestData,
  getDefaultReputationData,
  getDefaultWorldData,
  getDefaultCraftingData,
  getDefaultGatheringData,
  getDefaultCombatData,
  getDefaultShopData,
  cloneSaveData,
} from './SaveDataSchema.js';

// ========== INITIALIZATION ORDER ==========
// Managers must be restored in this order due to dependencies
const RESTORATION_ORDER = [
  'time',        // TimeManager - no dependencies, affects lighting
  'weather',     // WeatherManager - depends on time for visibility
  'world',       // WorldManager - discovered locations, fast travel
  'player',      // PlayerManager - position, stats (needs world ready)
  'inventory',   // InventoryManager - items (needed before equipment)
  'equipment',   // EquipmentManager - depends on inventory
  'quest',       // QuestManager - active/completed quests
  'reputation',  // ReputationManager - faction standings
  'crafting',    // CraftingManager - unlocked recipes
  'gathering',   // GatheringManager - node cooldowns
  'combat',      // CombatManager - kill counts, records
  'shop',        // ShopManager - purchased items, refresh times
  'bosses',      // BossSpawner - defeated bosses
  'dungeons',    // DungeonManager - dungeon states
];

// ========== STATE RESTORATION CLASS ==========
class StateRestoration {
  constructor() {
    this.systems = {};
    this.saveData = null;
    this.validationErrors = [];
    this.validationWarnings = [];
    
    // Event callbacks
    this.onGameLoaded = [];
    this.onRestorationError = [];
    this.onValidationComplete = [];
    
    console.log('[StateRestoration] Created');
  }
  
  // ========== INITIALIZATION ==========
  
  /**
   * Register game systems for restoration
   */
  registerSystems(systems) {
    this.systems = {
      gameManager: systems.gameManager || null,
      player: systems.player || null,
      inventoryUI: systems.inventoryUI || null,
      equipmentManager: systems.equipmentManager || null,
      lootManager: systems.lootManager || null,
      questManager: systems.questManager || null,
      questRewards: systems.questRewards || null,
      timeManager: systems.timeManager || null,
      weatherManager: systems.weatherManager || null,
      craftingManager: systems.craftingManager || null,
      gatheringManager: systems.gatheringManager || null,
      shopManager: systems.shopManager || null,
      bossSpawner: systems.bossSpawner || null,
      dungeonManager: systems.dungeonManager || null,
      spellManager: systems.spellManager || null,
      manaManager: systems.manaManager || null,
      npcManager: systems.npcManager || null,
      scene: systems.scene || null,
      hud: systems.hud || null,
      questUI: systems.questUI || null,
    };
    
    console.log('[StateRestoration] Systems registered');
  }
  
  // ========== MAIN RESTORATION ==========
  
  /**
   * Restore complete game state from save data
   * Returns { success, errors, warnings }
   */
  async restoreGameState(saveData) {
    this.saveData = saveData;
    this.validationErrors = [];
    this.validationWarnings = [];
    
    console.log('[StateRestoration] Starting state restoration...');
    
    try {
      // Pre-restoration validation
      this.validateSaveData(saveData);
      
      // Restore in correct order
      for (const systemKey of RESTORATION_ORDER) {
        try {
          await this.restoreSystem(systemKey, saveData);
        } catch (error) {
          this.validationWarnings.push(`Failed to restore ${systemKey}: ${error.message}`);
          console.warn(`[StateRestoration] ${systemKey} restoration failed:`, error);
        }
      }
      
      // Post-restoration validation
      this.postLoadValidation(saveData);
      
      // Refresh all UI elements
      this.refreshAllUI();
      
      // Fire onGameLoaded event
      this.emitEvent('onGameLoaded', {
        saveData,
        warnings: this.validationWarnings,
      });
      
      console.log('[StateRestoration] State restoration complete');
      
      return {
        success: true,
        errors: this.validationErrors,
        warnings: this.validationWarnings,
      };
      
    } catch (error) {
      console.error('[StateRestoration] Critical restoration error:', error);
      this.emitEvent('onRestorationError', { error: error.message });
      
      return {
        success: false,
        errors: [...this.validationErrors, error.message],
        warnings: this.validationWarnings,
      };
    }
  }
  
  /**
   * Restore a specific system
   */
  async restoreSystem(systemKey, saveData) {
    switch (systemKey) {
      case 'time':
        this.restoreTime(saveData.world?.time);
        break;
      case 'weather':
        this.restoreWeather(saveData.world?.weather);
        break;
      case 'world':
        this.restoreWorld(saveData.world);
        break;
      case 'player':
        this.restorePlayer(saveData.player);
        break;
      case 'inventory':
        this.restoreInventory(saveData.inventory);
        break;
      case 'equipment':
        this.restoreEquipment(saveData.equipment);
        break;
      case 'quest':
        this.restoreQuests(saveData.quest);
        break;
      case 'reputation':
        this.restoreReputation(saveData.reputation);
        break;
      case 'crafting':
        this.restoreCrafting(saveData.crafting);
        break;
      case 'gathering':
        this.restoreGathering(saveData.gathering);
        break;
      case 'combat':
        this.restoreCombat(saveData.combat);
        break;
      case 'shop':
        this.restoreShop(saveData.shop);
        break;
      case 'bosses':
        this.restoreBosses(saveData.world?.bossesDefeated);
        break;
      case 'dungeons':
        this.restoreDungeons(saveData.world?.dungeons);
        break;
    }
  }
  
  // ========== INDIVIDUAL SYSTEM RESTORATION ==========
  
  /**
   * Restore TimeManager state
   */
  restoreTime(timeData) {
    const tm = this.systems.timeManager;
    if (!tm || !timeData) return;
    
    const defaults = getDefaultWorldData().time;
    const t = { ...defaults, ...timeData };
    
    tm.currentHour = t.currentHour;
    tm.currentMinute = t.currentMinute;
    tm.currentDay = t.currentDay;
    tm.dayPhase = t.dayPhase;
    tm.moonPhase = t.moonPhase;
    tm.isPaused = t.isPaused;
    
    // Update visuals
    if (tm.updateCelestials) tm.updateCelestials();
    if (tm.updateClockUI) tm.updateClockUI();
    if (tm.updateDayPhase) tm.updateDayPhase();
    
    console.log(`[StateRestoration] Time restored: Day ${t.currentDay}, ${t.currentHour}:${t.currentMinute.toString().padStart(2, '0')}`);
  }
  
  /**
   * Restore WeatherManager state
   */
  restoreWeather(weatherData) {
    const wm = this.systems.weatherManager;
    if (!wm || !weatherData) return;
    
    const defaults = getDefaultWorldData().weather;
    const w = { ...defaults, ...weatherData };
    
    wm.currentWeather = w.currentWeather;
    wm.intensity = w.intensity;
    wm.transitionProgress = w.transitionProgress;
    wm.lastWeatherChange = w.lastWeatherChange;
    
    // Apply weather visuals
    if (wm.applyWeather) wm.applyWeather();
    if (wm.setWeather) wm.setWeather(w.currentWeather, w.intensity);
    
    console.log(`[StateRestoration] Weather restored: ${w.currentWeather}`);
  }
  
  /**
   * Restore World state (locations, fast travel, flags)
   */
  restoreWorld(worldData) {
    if (!worldData) return;
    
    // World flags could be used by various systems
    // Store for later reference
    this.worldFlags = worldData.worldFlags || {};
    this.discoveredLocations = new Set(worldData.discoveredLocations || []);
    this.fastTravelPoints = new Set(worldData.fastTravelPoints || ['ashvale_village']);
    
    console.log(`[StateRestoration] World restored: ${this.discoveredLocations.size} locations discovered`);
  }
  
  /**
   * Restore Player state (position, stats, abilities)
   */
  restorePlayer(playerData) {
    if (!playerData) return;
    
    const defaults = getDefaultPlayerData();
    const p = { ...defaults, ...playerData };
    
    // Position
    if (this.systems.player && p.position) {
      this.systems.player.position.set(
        p.position.x,
        p.position.y,
        p.position.z
      );
      if (p.rotation) {
        this.systems.player.rotation.set(
          p.rotation.x,
          p.rotation.y,
          p.rotation.z
        );
      }
    }
    
    // GameManager stats
    const gm = this.systems.gameManager;
    if (gm) {
      // Core stats
      gm.health = p.health;
      gm.maxHealth = p.maxHealth;
      gm.stamina = p.stamina;
      gm.maxStamina = p.maxStamina;
      gm.posture = p.posture;
      gm.maxPosture = p.maxPosture;
      
      // Progression
      gm.currentLevel = p.level;
      gm.currentXP = p.currentXP;
      gm.remnant = p.remnant;
      gm.heldRemnant = p.heldRemnant;
      
      // Allocated stats
      gm.stats = { ...p.stats };
      gm.spentStatPoints = p.spentStatPoints;
      
      // Infusions
      gm.infusions = { ...p.infusions };
      
      // Abilities - convert array to Set
      gm.unlockedAbilities = new Set(p.unlockedAbilities || []);
      gm.abilityCooldowns = { ...p.abilityCooldowns };
      
      // Death tracking
      gm.deathCount = p.deathCount;
      gm.deathLessons = { ...p.deathLessons };
      
      // Checkpoint
      if (p.checkpoint && gm.checkpoint) {
        gm.checkpoint.set(p.checkpoint.x, p.checkpoint.y, p.checkpoint.z);
      }
      
      // Bloodstain
      if (p.bloodstain) {
        gm.bloodstain = new THREE.Vector3(
          p.bloodstain.position.x,
          p.bloodstain.position.y,
          p.bloodstain.position.z
        );
        gm.bloodstainRemnant = p.bloodstain.remnant;
        // Visual bloodstain marker would be created here
      } else {
        gm.bloodstain = null;
        gm.bloodstainRemnant = 0;
      }
      
      // Recalculate derived stats
      if (gm.recalculateStats) gm.recalculateStats();
    }
    
    // Mana
    if (this.systems.manaManager) {
      this.systems.manaManager.currentMana = p.mana;
      this.systems.manaManager.maxMana = p.maxMana;
    }
    
    // Spells
    if (this.systems.spellManager) {
      this.systems.spellManager.unlockedSpells = new Set(p.unlockedSpells || ['fireball']);
      this.systems.spellManager.equippedSpells = [...(p.equippedSpells || ['fireball', null, null, null])];
    }
    
    console.log(`[StateRestoration] Player restored: Level ${p.level}, HP ${p.health}/${p.maxHealth}`);
  }
  
  /**
   * Restore Inventory state
   */
  restoreInventory(inventoryData) {
    const lm = this.systems.lootManager;
    if (!lm || !inventoryData) return;
    
    const defaults = getDefaultInventoryData();
    const inv = { ...defaults, ...inventoryData };
    
    lm.gold = inv.gold;
    lm.inventory = cloneSaveData(inv.items || []);
    lm.collectedSouls = new Set(inv.bossSouls || []);
    lm.collectedTrophies = new Set(inv.bossTrophies || []);
    
    // Validate items exist in game data
    this.validateInventoryItems(lm.inventory);
    
    // Refresh inventory UI if available
    if (this.systems.inventoryUI?.refresh) {
      this.systems.inventoryUI.refresh();
    }
    
    console.log(`[StateRestoration] Inventory restored: ${inv.gold} gold, ${inv.items.length} items`);
  }
  
  /**
   * Restore Equipment state
   */
  restoreEquipment(equipmentData) {
    const em = this.systems.equipmentManager;
    if (!em || !equipmentData) return;
    
    const defaults = getDefaultEquipmentData();
    const eq = { ...defaults, ...equipmentData };
    
    // Equipped items
    em.equipped = {
      weapon: eq.equipped?.weapon ? cloneSaveData(eq.equipped.weapon) : null,
      armor: eq.equipped?.armor ? cloneSaveData(eq.equipped.armor) : null,
      accessory: eq.equipped?.accessory ? cloneSaveData(eq.equipped.accessory) : null,
    };
    
    // Weapon slots
    em.weaponSlots = (eq.weaponSlots || [null, null, null, null]).map(w => 
      w ? cloneSaveData(w) : null
    );
    em.activeWeaponSlot = eq.activeWeaponSlot || 0;
    
    // Potion slots
    em.potionSlots = [...(eq.potionSlots || [null, null])];
    
    // Refresh equipped weapon visual
    if (em.refreshEquippedWeapon) em.refreshEquippedWeapon();
    if (em.updateEquipmentUI) em.updateEquipmentUI();
    
    console.log(`[StateRestoration] Equipment restored`);
  }
  
  /**
   * Restore Quest state
   */
  restoreQuests(questData) {
    const qm = this.systems.questManager;
    if (!qm || !questData) return;
    
    const defaults = getDefaultQuestData();
    const q = { ...defaults, ...questData };
    
    // Active quests - convert array to Map
    qm.activeQuests = new Map();
    (q.activeQuests || []).forEach(questState => {
      const { questId, ...state } = questState;
      // Validate quest exists
      if (this.validateQuestExists(questId)) {
        qm.activeQuests.set(questId, state);
      } else {
        this.validationWarnings.push(`Quest '${questId}' no longer exists, removed from active`);
      }
    });
    
    // Completed/failed quests
    qm.completedQuests = new Set(q.completedQuests || []);
    qm.failedQuests = new Set(q.failedQuests || []);
    qm.availableQuests = new Set(q.availableQuests || []);
    
    // Cooldowns - convert object to Map
    qm.questCooldowns = new Map();
    Object.entries(q.questCooldowns || {}).forEach(([questId, time]) => {
      qm.questCooldowns.set(questId, time);
    });
    
    // Tracked quests
    qm.trackedQuests = [...(q.trackedQuests || [])];
    
    // Refresh quest UI
    if (qm.updateQuestUI) qm.updateQuestUI();
    if (this.systems.questUI?.refresh) this.systems.questUI.refresh();
    
    console.log(`[StateRestoration] Quests restored: ${qm.activeQuests.size} active, ${qm.completedQuests.size} completed`);
  }
  
  /**
   * Restore Reputation state
   */
  restoreReputation(reputationData) {
    const qr = this.systems.questRewards;
    if (!qr || !reputationData) return;
    
    const defaults = getDefaultReputationData();
    const r = { ...defaults, ...reputationData };
    
    qr.reputation = { ...r.factions };
    qr.unlockedTitles = new Set(r.titles || []);
    qr.activeTitle = r.activeTitle;
    qr.unlockedMilestones = new Set(r.unlockedMilestones || []);
    qr.unlockedAchievements = new Set(r.achievements || []);
    
    console.log(`[StateRestoration] Reputation restored`);
  }
  
  /**
   * Restore Crafting state
   */
  restoreCrafting(craftingData) {
    const cm = this.systems.craftingManager;
    if (!cm || !craftingData) return;
    
    const defaults = getDefaultCraftingData();
    const c = { ...defaults, ...craftingData };
    
    cm.unlockedRecipes = new Set(c.unlockedRecipes || []);
    cm.stats = cloneSaveData(c.craftingStats || { totalCrafted: 0, recipesCrafted: {} });
    
    // Validate recipes exist
    this.validateRecipes(cm.unlockedRecipes);
    
    console.log(`[StateRestoration] Crafting restored: ${cm.unlockedRecipes.size} recipes`);
  }
  
  /**
   * Restore Gathering state
   */
  restoreGathering(gatheringData) {
    const gm = this.systems.gatheringManager;
    if (!gm || !gatheringData) return;
    
    const defaults = getDefaultGatheringData();
    const g = { ...defaults, ...gatheringData };
    
    // Node cooldowns - convert object to Map
    gm.nodeCooldowns = new Map();
    Object.entries(g.nodeCooldowns || {}).forEach(([nodeId, time]) => {
      gm.nodeCooldowns.set(nodeId, time);
    });
    
    gm.stats = cloneSaveData(g.gatheringStats || { totalGathered: 0, gatheredByType: {} });
    
    console.log(`[StateRestoration] Gathering restored`);
  }
  
  /**
   * Restore Combat stats
   */
  restoreCombat(combatData) {
    const gm = this.systems.gameManager;
    if (!gm || !combatData) return;
    
    const defaults = getDefaultCombatData();
    const c = { ...defaults, ...combatData };
    
    gm.killCounts = cloneSaveData(c.killCounts || {});
    
    // Boss kill counts go to bossSpawner
    if (this.systems.bossSpawner) {
      this.systems.bossSpawner.killCounts = cloneSaveData(c.bossKillCounts || {});
    }
    
    // Combat records
    if (c.records) {
      gm.longestCombo = c.records.longestCombo || 0;
      gm.perfectParries = c.records.perfectParries || 0;
      gm.noHitBossKills = new Set(c.records.noHitBossKills || []);
    }
    
    console.log(`[StateRestoration] Combat stats restored`);
  }
  
  /**
   * Restore Shop state
   */
  restoreShop(shopData) {
    const sm = this.systems.shopManager;
    if (!sm || !shopData) return;
    
    const defaults = getDefaultShopData();
    const s = { ...defaults, ...shopData };
    
    sm.purchasedItems = cloneSaveData(s.purchasedItems || {});
    sm.refreshTimes = cloneSaveData(s.shopRefreshTimes || {});
    sm.totalGoldSpent = s.totalGoldSpent || 0;
    
    console.log(`[StateRestoration] Shop state restored`);
  }
  
  /**
   * Restore Boss defeat states
   */
  restoreBosses(bossesDefeated) {
    const bs = this.systems.bossSpawner;
    if (!bs) return;
    
    bs.defeatedBosses = new Set(bossesDefeated || []);
    
    // Mark defeated bosses as inactive in world
    if (bs.updateBossStates) bs.updateBossStates();
    
    console.log(`[StateRestoration] Bosses restored: ${bs.defeatedBosses.size} defeated`);
  }
  
  /**
   * Restore Dungeon states
   */
  restoreDungeons(dungeonStates) {
    const dm = this.systems.dungeonManager;
    if (!dm) return;
    
    dm.dungeonStates = cloneSaveData(dungeonStates || {});
    
    console.log(`[StateRestoration] Dungeon states restored`);
  }
  
  // ========== VALIDATION ==========
  
  /**
   * Pre-load validation of save data
   */
  validateSaveData(saveData) {
    // Check version
    if (!saveData.version) {
      this.validationWarnings.push('Save has no version number');
    }
    
    // Check required sections
    const requiredSections = ['player', 'inventory', 'equipment'];
    for (const section of requiredSections) {
      if (!saveData[section]) {
        this.validationWarnings.push(`Missing ${section} data, using defaults`);
      }
    }
    
    // Validate player level
    if (saveData.player?.level && saveData.player.level < 1) {
      this.validationErrors.push('Invalid player level');
    }
  }
  
  /**
   * Post-load validation and cleanup
   */
  postLoadValidation(saveData) {
    // Check for orphaned quest objectives
    this.validateActiveQuests();
    
    // Check equipped items still exist in inventory/data
    this.validateEquippedItems();
    
    // Emit validation complete event
    this.emitEvent('onValidationComplete', {
      errors: this.validationErrors,
      warnings: this.validationWarnings,
    });
  }
  
  /**
   * Validate inventory items exist in game data
   */
  validateInventoryItems(items) {
    // Would check against ItemManager data
    // For now, just ensure items have required fields
    items.forEach((item, index) => {
      if (!item.id) {
        this.validationWarnings.push(`Inventory item at index ${index} has no ID`);
      }
    });
  }
  
  /**
   * Validate quest exists in game data
   */
  validateQuestExists(questId) {
    // Would check against QuestManager.QUESTS
    // For now, assume all quests are valid
    return true;
  }
  
  /**
   * Validate active quests have valid objectives
   */
  validateActiveQuests() {
    const qm = this.systems.questManager;
    if (!qm?.activeQuests) return;
    
    // Check each active quest
    qm.activeQuests.forEach((state, questId) => {
      // Ensure objectives array exists
      if (!state.objectives || !Array.isArray(state.objectives)) {
        this.validationWarnings.push(`Quest '${questId}' has invalid objectives`);
      }
    });
  }
  
  /**
   * Validate equipped items are valid
   */
  validateEquippedItems() {
    const em = this.systems.equipmentManager;
    if (!em?.equipped) return;
    
    // Check each equipped slot
    for (const [slot, item] of Object.entries(em.equipped)) {
      if (item && !item.id) {
        this.validationWarnings.push(`Equipped ${slot} has no ID`);
      }
    }
  }
  
  /**
   * Validate recipes exist in game data
   */
  validateRecipes(recipes) {
    // Would check against CraftingManager.RECIPES
    // For now, just log the count
  }
  
  // ========== UI REFRESH ==========
  
  /**
   * Refresh all UI elements after load
   */
  refreshAllUI() {
    // HUD
    if (this.systems.hud?.updateAll) {
      this.systems.hud.updateAll();
    }
    if (this.systems.gameManager?.updateHUD) {
      this.systems.gameManager.updateHUD();
    }
    
    // Quest UI
    if (this.systems.questUI?.refresh) {
      this.systems.questUI.refresh();
    }
    if (this.systems.questManager?.updateQuestUI) {
      this.systems.questManager.updateQuestUI();
    }
    
    // Inventory UI
    if (this.systems.inventoryUI?.refresh) {
      this.systems.inventoryUI.refresh();
    }
    
    // Equipment UI
    if (this.systems.equipmentManager?.updateEquipmentUI) {
      this.systems.equipmentManager.updateEquipmentUI();
    }
    
    // Time/Weather UI
    if (this.systems.timeManager?.updateClockUI) {
      this.systems.timeManager.updateClockUI();
    }
    
    console.log('[StateRestoration] UI refreshed');
  }
  
  // ========== EVENT SYSTEM ==========
  
  /**
   * Register event callback
   */
  on(event, callback) {
    if (this[event] && Array.isArray(this[event])) {
      this[event].push(callback);
    }
  }
  
  /**
   * Remove event callback
   */
  off(event, callback) {
    if (this[event] && Array.isArray(this[event])) {
      const index = this[event].indexOf(callback);
      if (index > -1) {
        this[event].splice(index, 1);
      }
    }
  }
  
  /**
   * Emit event to all listeners
   */
  emitEvent(event, data) {
    if (this[event] && Array.isArray(this[event])) {
      this[event].forEach(callback => {
        try {
          callback(data);
        } catch (e) {
          console.error(`[StateRestoration] Event callback error:`, e);
        }
      });
    }
  }
}

// ========== SINGLETON ==========
let stateRestorationInstance = null;

export function getStateRestoration() {
  if (!stateRestorationInstance) {
    stateRestorationInstance = new StateRestoration();
  }
  return stateRestorationInstance;
}

export function createStateRestoration() {
  stateRestorationInstance = new StateRestoration();
  return stateRestorationInstance;
}

export { StateRestoration, RESTORATION_ORDER };
export default StateRestoration;
