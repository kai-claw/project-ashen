/**
 * SaveManager.js - Complete Save/Load System
 * Phase 26: Save System & Persistence
 * 
 * Features:
 * - 3 manual save slots + 1 autosave slot
 * - LZString compression for localStorage efficiency
 * - Gather state from all game managers
 * - Distribute loaded state to all managers
 * - Import/export saves as downloadable JSON
 * - Autosave triggers (village entry, quest complete, timer)
 * - Save size optimization with delta compression
 * - Corrupt save recovery
 * - Cloud save structure ready (localStorage now)
 */

import LZString from 'lz-string';
import {
  SAVE_VERSION,
  SAVE_SLOT_TYPE,
  createDefaultSaveData,
  createSaveMetadata,
  validateSaveData,
  migrateSaveData,
  cloneSaveData,
  getSaveDataSize,
  formatPlaytime,
  formatTimestamp,
} from './SaveDataSchema.js';
import { getStateRestoration } from './StateRestoration.js';

// ========== CONSTANTS ==========
const STORAGE_PREFIX = 'ashen_save_';
const METADATA_KEY = 'ashen_save_meta';
const SETTINGS_KEY = 'ashen_settings';
const AUTOSAVE_SLOT = 0;
const MAX_MANUAL_SLOTS = 3;
const AUTOSAVE_INTERVAL_MS = 5 * 60 * 1000; // 5 minutes
const MAX_SAVE_SIZE_BYTES = 5 * 1024 * 1024; // 5MB per save
const STORAGE_WARNING_THRESHOLD = 0.8; // Warn at 80% capacity

// ========== SAVE MANAGER CLASS ==========
class SaveManager {
  constructor() {
    // System references (set via init)
    this.systems = {};
    
    // Save state
    this.currentSlot = null;
    this.lastSaveTime = 0;
    this.sessionStartTime = Date.now();
    this.totalPlaytime = 0; // Loaded from save
    
    // Autosave state
    this.autosaveEnabled = true;
    this.autosaveTimer = null;
    this.lastAutosaveTime = 0;
    
    // Flags
    this.isSaving = false;
    this.isLoading = false;
    this.saveBlocked = false; // Block during combat/cutscenes
    this.saveBlockReason = null;
    
    // Event callbacks
    this.onSaveStart = [];
    this.onSaveComplete = [];
    this.onSaveError = [];
    this.onLoadStart = [];
    this.onLoadComplete = [];
    this.onLoadError = [];
    this.onAutosaveTrigger = [];
    
    // Cache for slot metadata
    this.slotMetadataCache = {};
    
    // Initialize
    this.loadSlotMetadata();
    
    console.log('[SaveManager] Initialized');
  }
  
  // ========== INITIALIZATION ==========
  
  /**
   * Initialize with game system references
   */
  init(systems) {
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
      renderer: systems.renderer || null,
      camera: systems.camera || null,
      audioManager: systems.audioManager || null,
    };
    
    // Initialize StateRestoration with systems
    this.stateRestoration = getStateRestoration();
    this.stateRestoration.registerSystems(this.systems);
    
    // Start autosave timer
    this.startAutosaveTimer();
    
    console.log('[SaveManager] Systems registered');
  }
  
  // ========== CORE SAVE/LOAD ==========
  
  /**
   * Save game to specified slot
   */
  async save(slotId, options = {}) {
    const { silent = false, isAutosave = false } = options;
    
    // Check if save is blocked
    if (this.saveBlocked && !options.force) {
      console.warn(`[SaveManager] Save blocked: ${this.saveBlockReason}`);
      this.emitEvent('onSaveError', { 
        slotId, 
        error: `Cannot save: ${this.saveBlockReason}` 
      });
      return { success: false, error: this.saveBlockReason };
    }
    
    // Prevent concurrent saves
    if (this.isSaving) {
      console.warn('[SaveManager] Save already in progress');
      return { success: false, error: 'Save in progress' };
    }
    
    this.isSaving = true;
    this.emitEvent('onSaveStart', { slotId, isAutosave });
    
    try {
      // Gather all game state
      const saveData = this.gatherGameState(slotId, isAutosave);
      
      // Validate before saving
      const validation = validateSaveData(saveData);
      if (!validation.valid) {
        throw new Error(`Invalid save data: ${validation.errors.join(', ')}`);
      }
      
      // Compress and store
      const compressed = this.compressSaveData(saveData);
      const storageKey = `${STORAGE_PREFIX}${slotId}`;
      
      // Check size
      const size = compressed.length * 2; // UTF-16 chars = 2 bytes each
      if (size > MAX_SAVE_SIZE_BYTES) {
        throw new Error(`Save size (${(size / 1024).toFixed(1)}KB) exceeds limit`);
      }
      
      // Write to localStorage with quota handling
      const storageResult = this.safeStorageSet(storageKey, compressed);
      if (!storageResult.success) {
        throw new Error(storageResult.error);
      }
      
      // Update metadata cache
      const metadata = createSaveMetadata(saveData);
      this.slotMetadataCache[slotId] = metadata;
      this.saveSlotMetadata();
      
      // Update state
      this.currentSlot = slotId;
      this.lastSaveTime = Date.now();
      if (isAutosave) {
        this.lastAutosaveTime = Date.now();
      }
      
      this.emitEvent('onSaveComplete', { 
        slotId, 
        isAutosave,
        size,
        timestamp: metadata.timestamp,
      });
      
      if (!silent) {
        console.log(`[SaveManager] Saved to slot ${slotId} (${(size / 1024).toFixed(1)}KB)`);
      }
      
      return { success: true, slotId, size };
      
    } catch (error) {
      console.error('[SaveManager] Save failed:', error);
      this.emitEvent('onSaveError', { slotId, error: error.message });
      return { success: false, error: error.message };
      
    } finally {
      this.isSaving = false;
    }
  }
  
  /**
   * Load game from specified slot
   */
  async load(slotId) {
    // Prevent concurrent loads
    if (this.isLoading) {
      console.warn('[SaveManager] Load already in progress');
      return { success: false, error: 'Load in progress' };
    }
    
    this.isLoading = true;
    this.emitEvent('onLoadStart', { slotId });
    
    try {
      // Read from localStorage
      const storageKey = `${STORAGE_PREFIX}${slotId}`;
      const compressed = localStorage.getItem(storageKey);
      
      if (!compressed) {
        throw new Error('Save slot is empty');
      }
      
      // Decompress
      let saveData;
      try {
        saveData = this.decompressSaveData(compressed);
      } catch (e) {
        // Try recovery
        console.warn('[SaveManager] Attempting corrupt save recovery...');
        saveData = this.attemptRecovery(compressed);
        if (!saveData) {
          throw new Error('Save data corrupted and unrecoverable');
        }
      }
      
      // Validate and migrate if needed
      const validation = validateSaveData(saveData);
      if (validation.warnings.length > 0) {
        console.warn('[SaveManager] Save warnings:', validation.warnings);
      }
      
      if (!validation.valid && validation.errors.some(e => e.includes('newer'))) {
        throw new Error('Save from newer game version');
      }
      
      // Migrate if needed
      if (saveData.version < SAVE_VERSION) {
        const migration = migrateSaveData(saveData);
        saveData = migration.data;
        console.log('[SaveManager] Migrations applied:', migration.migrationsApplied);
      }
      
      // Use StateRestoration for proper initialization order
      if (this.stateRestoration) {
        const restoreResult = await this.stateRestoration.restoreGameState(saveData);
        if (restoreResult.warnings.length > 0) {
          console.warn('[SaveManager] Restoration warnings:', restoreResult.warnings);
        }
      } else {
        // Fallback to direct distribution
        this.distributeGameState(saveData);
      }
      
      // Update local state
      this.currentSlot = slotId;
      this.totalPlaytime = saveData.playtime || 0;
      this.sessionStartTime = Date.now();
      
      this.emitEvent('onLoadComplete', { 
        slotId,
        playerLevel: saveData.player?.level,
        playtime: saveData.playtime,
      });
      
      console.log(`[SaveManager] Loaded from slot ${slotId}`);
      
      return { success: true, slotId, saveData };
      
    } catch (error) {
      console.error('[SaveManager] Load failed:', error);
      this.emitEvent('onLoadError', { slotId, error: error.message });
      return { success: false, error: error.message };
      
    } finally {
      this.isLoading = false;
    }
  }
  
  /**
   * Delete a save slot
   */
  deleteSave(slotId) {
    try {
      const storageKey = `${STORAGE_PREFIX}${slotId}`;
      localStorage.removeItem(storageKey);
      
      delete this.slotMetadataCache[slotId];
      this.saveSlotMetadata();
      
      if (this.currentSlot === slotId) {
        this.currentSlot = null;
      }
      
      console.log(`[SaveManager] Deleted slot ${slotId}`);
      return { success: true };
      
    } catch (error) {
      console.error('[SaveManager] Delete failed:', error);
      return { success: false, error: error.message };
    }
  }
  
  // ========== STATE GATHERING ==========
  
  /**
   * Gather complete game state from all managers
   */
  gatherGameState(slotId, isAutosave = false) {
    const saveData = createDefaultSaveData(
      slotId,
      isAutosave ? SAVE_SLOT_TYPE.AUTOSAVE : SAVE_SLOT_TYPE.MANUAL
    );
    
    // Calculate current playtime
    const sessionDuration = (Date.now() - this.sessionStartTime) / 1000;
    saveData.playtime = this.totalPlaytime + sessionDuration;
    saveData.updatedAt = Date.now();
    
    // ===== PLAYER DATA =====
    if (this.systems.player) {
      const p = this.systems.player;
      saveData.player.position = { 
        x: p.position?.x || 0, 
        y: p.position?.y || 0, 
        z: p.position?.z || 5 
      };
      saveData.player.rotation = { 
        x: p.rotation?.x || 0, 
        y: p.rotation?.y || 0, 
        z: p.rotation?.z || 0 
      };
    }
    
    if (this.systems.gameManager) {
      const gm = this.systems.gameManager;
      
      // Stats
      saveData.player.health = gm.health || 100;
      saveData.player.maxHealth = gm.maxHealth || 100;
      saveData.player.stamina = gm.stamina || 100;
      saveData.player.maxStamina = gm.maxStamina || 100;
      saveData.player.posture = gm.posture || 0;
      saveData.player.maxPosture = gm.maxPosture || 100;
      
      // Progression
      saveData.player.level = gm.currentLevel || 1;
      saveData.player.currentXP = gm.currentXP || 0;
      saveData.player.remnant = gm.remnant || 0;
      saveData.player.heldRemnant = gm.heldRemnant || 0;
      
      // Stat points
      saveData.player.stats = { ...gm.stats };
      saveData.player.spentStatPoints = gm.spentStatPoints || 0;
      
      // Infusions
      saveData.player.infusions = { ...gm.infusions };
      
      // Abilities
      saveData.player.unlockedAbilities = Array.from(gm.unlockedAbilities || []);
      saveData.player.abilityCooldowns = { ...gm.abilityCooldowns };
      
      // Death tracking
      saveData.player.deathCount = gm.deathCount || 0;
      saveData.player.deathLessons = { ...gm.deathLessons };
      
      // Checkpoint
      if (gm.checkpoint) {
        saveData.player.checkpoint = {
          x: gm.checkpoint.x,
          y: gm.checkpoint.y,
          z: gm.checkpoint.z,
        };
      }
      
      // Bloodstain
      if (gm.bloodstain) {
        saveData.player.bloodstain = {
          position: {
            x: gm.bloodstain.x,
            y: gm.bloodstain.y,
            z: gm.bloodstain.z,
          },
          remnant: gm.bloodstainRemnant || 0,
        };
      }
    }
    
    // Mana
    if (this.systems.manaManager) {
      const mm = this.systems.manaManager;
      saveData.player.mana = mm.currentMana || 50;
      saveData.player.maxMana = mm.maxMana || 50;
    }
    
    // Spells
    if (this.systems.spellManager) {
      const sm = this.systems.spellManager;
      saveData.player.unlockedSpells = Array.from(sm.unlockedSpells || ['fireball']);
      saveData.player.equippedSpells = [...(sm.equippedSpells || ['fireball', null, null, null])];
    }
    
    // ===== INVENTORY DATA =====
    if (this.systems.lootManager) {
      const lm = this.systems.lootManager;
      saveData.inventory.gold = lm.gold || 0;
      saveData.inventory.items = cloneSaveData(lm.inventory || []);
      saveData.inventory.bossSouls = Array.from(lm.collectedSouls || []);
      saveData.inventory.bossTrophies = Array.from(lm.collectedTrophies || []);
    }
    
    // ===== EQUIPMENT DATA =====
    if (this.systems.equipmentManager) {
      const em = this.systems.equipmentManager;
      
      saveData.equipment.equipped = {
        weapon: em.equipped?.weapon ? cloneSaveData(em.equipped.weapon) : null,
        armor: em.equipped?.armor ? cloneSaveData(em.equipped.armor) : null,
        accessory: em.equipped?.accessory ? cloneSaveData(em.equipped.accessory) : null,
      };
      
      saveData.equipment.weaponSlots = (em.weaponSlots || []).map(w => 
        w ? cloneSaveData(w) : null
      );
      saveData.equipment.activeWeaponSlot = em.activeWeaponSlot || 0;
      saveData.equipment.potionSlots = [...(em.potionSlots || [null, null])];
    }
    
    // ===== QUEST DATA =====
    if (this.systems.questManager) {
      const qm = this.systems.questManager;
      
      // Active quests (serialize Map to array)
      saveData.quest.activeQuests = [];
      if (qm.activeQuests) {
        qm.activeQuests.forEach((state, questId) => {
          saveData.quest.activeQuests.push({
            questId,
            ...cloneSaveData(state),
          });
        });
      }
      
      saveData.quest.completedQuests = Array.from(qm.completedQuests || []);
      saveData.quest.failedQuests = Array.from(qm.failedQuests || []);
      saveData.quest.availableQuests = Array.from(qm.availableQuests || []);
      
      // Cooldowns (serialize Map)
      saveData.quest.questCooldowns = {};
      if (qm.questCooldowns) {
        qm.questCooldowns.forEach((time, questId) => {
          saveData.quest.questCooldowns[questId] = time;
        });
      }
      
      saveData.quest.trackedQuests = [...(qm.trackedQuests || [])];
    }
    
    // ===== REPUTATION DATA =====
    if (this.systems.questRewards) {
      const qr = this.systems.questRewards;
      
      saveData.reputation.factions = { ...qr.reputation };
      saveData.reputation.titles = Array.from(qr.unlockedTitles || []);
      saveData.reputation.activeTitle = qr.activeTitle || null;
      saveData.reputation.unlockedMilestones = Array.from(qr.unlockedMilestones || []);
      saveData.reputation.achievements = Array.from(qr.unlockedAchievements || []);
    }
    
    // ===== WORLD DATA =====
    if (this.systems.timeManager) {
      const tm = this.systems.timeManager;
      saveData.world.time = {
        currentHour: tm.currentHour || 10,
        currentMinute: tm.currentMinute || 0,
        currentDay: tm.currentDay || 1,
        dayPhase: tm.dayPhase || 'day',
        moonPhase: tm.moonPhase || 4,
        isPaused: tm.isPaused || false,
      };
    }
    
    if (this.systems.weatherManager) {
      const wm = this.systems.weatherManager;
      saveData.world.weather = {
        currentWeather: wm.currentWeather || 'clear',
        intensity: wm.intensity || 0,
        transitionProgress: wm.transitionProgress || 0,
        lastWeatherChange: wm.lastWeatherChange || 0,
      };
    }
    
    // Boss defeats
    if (this.systems.bossSpawner) {
      saveData.world.bossesDefeated = Array.from(
        this.systems.bossSpawner.defeatedBosses || []
      );
    }
    
    // Dungeon states
    if (this.systems.dungeonManager) {
      const dm = this.systems.dungeonManager;
      saveData.world.dungeons = cloneSaveData(dm.dungeonStates || {});
    }
    
    // ===== CRAFTING DATA =====
    if (this.systems.craftingManager) {
      const cm = this.systems.craftingManager;
      saveData.crafting.unlockedRecipes = Array.from(cm.unlockedRecipes || []);
      saveData.crafting.craftingStats = cloneSaveData(cm.stats || {});
    }
    
    // ===== GATHERING DATA =====
    if (this.systems.gatheringManager) {
      const gm = this.systems.gatheringManager;
      
      // Cooldowns (serialize Map if needed)
      saveData.gathering.nodeCooldowns = {};
      if (gm.nodeCooldowns) {
        if (gm.nodeCooldowns instanceof Map) {
          gm.nodeCooldowns.forEach((time, nodeId) => {
            saveData.gathering.nodeCooldowns[nodeId] = time;
          });
        } else {
          saveData.gathering.nodeCooldowns = { ...gm.nodeCooldowns };
        }
      }
      
      saveData.gathering.gatheringStats = cloneSaveData(gm.stats || {});
    }
    
    // ===== SHOP DATA =====
    if (this.systems.shopManager) {
      const sm = this.systems.shopManager;
      saveData.shop.purchasedItems = cloneSaveData(sm.purchasedItems || {});
      saveData.shop.shopRefreshTimes = cloneSaveData(sm.refreshTimes || {});
      saveData.shop.totalGoldSpent = sm.totalGoldSpent || 0;
    }
    
    // ===== COMBAT DATA =====
    // Gathered from various sources
    saveData.combat.killCounts = cloneSaveData(
      this.systems.gameManager?.killCounts || {}
    );
    saveData.combat.bossKillCounts = cloneSaveData(
      this.systems.bossSpawner?.killCounts || {}
    );
    
    // ===== METADATA =====
    saveData.locationName = this.getCurrentLocationName();
    
    return saveData;
  }
  
  // ========== STATE DISTRIBUTION ==========
  
  /**
   * Distribute loaded state to all game managers
   */
  distributeGameState(saveData) {
    // ===== PLAYER DATA =====
    if (this.systems.player && saveData.player.position) {
      this.systems.player.position.set(
        saveData.player.position.x,
        saveData.player.position.y,
        saveData.player.position.z
      );
      if (saveData.player.rotation) {
        this.systems.player.rotation.set(
          saveData.player.rotation.x,
          saveData.player.rotation.y,
          saveData.player.rotation.z
        );
      }
    }
    
    if (this.systems.gameManager) {
      const gm = this.systems.gameManager;
      const p = saveData.player;
      
      // Stats
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
      
      // Stats
      gm.stats = { ...p.stats };
      gm.spentStatPoints = p.spentStatPoints;
      
      // Infusions
      gm.infusions = { ...p.infusions };
      
      // Abilities
      gm.unlockedAbilities = new Set(p.unlockedAbilities || []);
      gm.abilityCooldowns = { ...p.abilityCooldowns };
      
      // Death tracking
      gm.deathCount = p.deathCount;
      gm.deathLessons = { ...p.deathLessons };
      
      // Checkpoint
      if (p.checkpoint) {
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
      } else {
        gm.bloodstain = null;
        gm.bloodstainRemnant = 0;
      }
      
      // Trigger UI updates
      if (gm.updateHUD) gm.updateHUD();
    }
    
    // Mana
    if (this.systems.manaManager && saveData.player) {
      this.systems.manaManager.currentMana = saveData.player.mana;
      this.systems.manaManager.maxMana = saveData.player.maxMana;
    }
    
    // Spells
    if (this.systems.spellManager && saveData.player) {
      this.systems.spellManager.unlockedSpells = new Set(saveData.player.unlockedSpells);
      this.systems.spellManager.equippedSpells = [...saveData.player.equippedSpells];
    }
    
    // ===== INVENTORY =====
    if (this.systems.lootManager && saveData.inventory) {
      const lm = this.systems.lootManager;
      const inv = saveData.inventory;
      
      lm.gold = inv.gold;
      lm.inventory = cloneSaveData(inv.items);
      lm.collectedSouls = new Set(inv.bossSouls);
      lm.collectedTrophies = new Set(inv.bossTrophies);
    }
    
    // ===== EQUIPMENT =====
    if (this.systems.equipmentManager && saveData.equipment) {
      const em = this.systems.equipmentManager;
      const eq = saveData.equipment;
      
      em.equipped = {
        weapon: eq.equipped.weapon ? cloneSaveData(eq.equipped.weapon) : null,
        armor: eq.equipped.armor ? cloneSaveData(eq.equipped.armor) : null,
        accessory: eq.equipped.accessory ? cloneSaveData(eq.equipped.accessory) : null,
      };
      
      em.weaponSlots = eq.weaponSlots.map(w => w ? cloneSaveData(w) : null);
      em.activeWeaponSlot = eq.activeWeaponSlot;
      em.potionSlots = [...eq.potionSlots];
      
      // Re-render equipped weapon if method exists
      if (em.refreshEquippedWeapon) em.refreshEquippedWeapon();
    }
    
    // ===== QUESTS =====
    if (this.systems.questManager && saveData.quest) {
      const qm = this.systems.questManager;
      const q = saveData.quest;
      
      // Restore active quests as Map
      qm.activeQuests = new Map();
      (q.activeQuests || []).forEach(qs => {
        const { questId, ...state } = qs;
        qm.activeQuests.set(questId, state);
      });
      
      qm.completedQuests = new Set(q.completedQuests);
      qm.failedQuests = new Set(q.failedQuests);
      qm.availableQuests = new Set(q.availableQuests);
      
      // Restore cooldowns
      qm.questCooldowns = new Map();
      Object.entries(q.questCooldowns || {}).forEach(([id, time]) => {
        qm.questCooldowns.set(id, time);
      });
      
      qm.trackedQuests = [...(q.trackedQuests || [])];
      
      // Refresh UI
      if (qm.updateQuestUI) qm.updateQuestUI();
    }
    
    // ===== REPUTATION =====
    if (this.systems.questRewards && saveData.reputation) {
      const qr = this.systems.questRewards;
      const r = saveData.reputation;
      
      qr.reputation = { ...r.factions };
      qr.unlockedTitles = new Set(r.titles);
      qr.activeTitle = r.activeTitle;
      qr.unlockedMilestones = new Set(r.unlockedMilestones);
      qr.unlockedAchievements = new Set(r.achievements);
    }
    
    // ===== TIME =====
    if (this.systems.timeManager && saveData.world?.time) {
      const tm = this.systems.timeManager;
      const t = saveData.world.time;
      
      tm.currentHour = t.currentHour;
      tm.currentMinute = t.currentMinute;
      tm.currentDay = t.currentDay;
      tm.dayPhase = t.dayPhase;
      tm.moonPhase = t.moonPhase;
      tm.isPaused = t.isPaused;
      
      // Update celestial bodies
      if (tm.updateCelestials) tm.updateCelestials();
      if (tm.updateClockUI) tm.updateClockUI();
    }
    
    // ===== WEATHER =====
    if (this.systems.weatherManager && saveData.world?.weather) {
      const wm = this.systems.weatherManager;
      const w = saveData.world.weather;
      
      wm.currentWeather = w.currentWeather;
      wm.intensity = w.intensity;
      wm.transitionProgress = w.transitionProgress;
      wm.lastWeatherChange = w.lastWeatherChange;
      
      // Apply weather visuals
      if (wm.applyWeather) wm.applyWeather();
    }
    
    // ===== BOSSES =====
    if (this.systems.bossSpawner && saveData.world?.bossesDefeated) {
      this.systems.bossSpawner.defeatedBosses = new Set(saveData.world.bossesDefeated);
    }
    
    // ===== DUNGEONS =====
    if (this.systems.dungeonManager && saveData.world?.dungeons) {
      this.systems.dungeonManager.dungeonStates = cloneSaveData(saveData.world.dungeons);
    }
    
    // ===== CRAFTING =====
    if (this.systems.craftingManager && saveData.crafting) {
      const cm = this.systems.craftingManager;
      cm.unlockedRecipes = new Set(saveData.crafting.unlockedRecipes);
      cm.stats = cloneSaveData(saveData.crafting.craftingStats);
    }
    
    // ===== GATHERING =====
    if (this.systems.gatheringManager && saveData.gathering) {
      const gm = this.systems.gatheringManager;
      
      // Restore cooldowns
      gm.nodeCooldowns = new Map();
      Object.entries(saveData.gathering.nodeCooldowns || {}).forEach(([id, time]) => {
        gm.nodeCooldowns.set(id, time);
      });
      
      gm.stats = cloneSaveData(saveData.gathering.gatheringStats);
    }
    
    // ===== SHOP =====
    if (this.systems.shopManager && saveData.shop) {
      const sm = this.systems.shopManager;
      sm.purchasedItems = cloneSaveData(saveData.shop.purchasedItems);
      sm.refreshTimes = cloneSaveData(saveData.shop.shopRefreshTimes);
      sm.totalGoldSpent = saveData.shop.totalGoldSpent;
    }
    
    // ===== COMBAT STATS =====
    if (this.systems.gameManager && saveData.combat) {
      this.systems.gameManager.killCounts = cloneSaveData(saveData.combat.killCounts);
    }
    if (this.systems.bossSpawner && saveData.combat) {
      this.systems.bossSpawner.killCounts = cloneSaveData(saveData.combat.bossKillCounts);
    }
    
    console.log('[SaveManager] Game state distributed to all systems');
  }
  
  // ========== COMPRESSION ==========
  
  /**
   * Compress save data using LZString
   */
  compressSaveData(saveData) {
    const json = JSON.stringify(saveData);
    return LZString.compressToUTF16(json);
  }
  
  /**
   * Decompress save data
   */
  decompressSaveData(compressed) {
    const json = LZString.decompressFromUTF16(compressed);
    if (!json) {
      throw new Error('Failed to decompress save data');
    }
    return JSON.parse(json);
  }
  
  /**
   * Attempt to recover corrupted save
   */
  attemptRecovery(compressed) {
    try {
      // Try different decompression methods
      let json = LZString.decompressFromUTF16(compressed);
      if (!json) json = LZString.decompress(compressed);
      if (!json) json = compressed; // Maybe it wasn't compressed
      
      const data = JSON.parse(json);
      console.log('[SaveManager] Recovery successful with alternate method');
      return data;
    } catch (e) {
      console.error('[SaveManager] Recovery failed:', e);
      return null;
    }
  }
  
  // ========== SLOT MANAGEMENT ==========
  
  /**
   * Get save info for a slot without full load
   */
  getSaveInfo(slotId) {
    return this.slotMetadataCache[slotId] || null;
  }
  
  /**
   * List all save slots with metadata
   */
  listSaves() {
    const slots = [];
    
    // Autosave slot
    slots.push({
      slotId: AUTOSAVE_SLOT,
      slotType: SAVE_SLOT_TYPE.AUTOSAVE,
      label: 'Autosave',
      metadata: this.slotMetadataCache[AUTOSAVE_SLOT] || null,
      isEmpty: !this.slotMetadataCache[AUTOSAVE_SLOT],
    });
    
    // Manual slots
    for (let i = 1; i <= MAX_MANUAL_SLOTS; i++) {
      slots.push({
        slotId: i,
        slotType: SAVE_SLOT_TYPE.MANUAL,
        label: `Save Slot ${i}`,
        metadata: this.slotMetadataCache[i] || null,
        isEmpty: !this.slotMetadataCache[i],
      });
    }
    
    return slots;
  }
  
  /**
   * Get most recent save slot
   */
  getMostRecentSave() {
    let mostRecent = null;
    let mostRecentTime = 0;
    
    for (const [slotId, metadata] of Object.entries(this.slotMetadataCache)) {
      if (metadata.timestamp > mostRecentTime) {
        mostRecentTime = metadata.timestamp;
        mostRecent = { slotId: parseInt(slotId), metadata };
      }
    }
    
    return mostRecent;
  }
  
  /**
   * Check if any saves exist
   */
  hasSaves() {
    return Object.keys(this.slotMetadataCache).length > 0;
  }
  
  // ========== AUTOSAVE ==========
  
  /**
   * Start autosave timer
   */
  startAutosaveTimer() {
    if (this.autosaveTimer) {
      clearInterval(this.autosaveTimer);
    }
    
    this.autosaveTimer = setInterval(() => {
      if (this.autosaveEnabled && !this.saveBlocked) {
        this.triggerAutosave('timer');
      }
    }, AUTOSAVE_INTERVAL_MS);
    
    console.log(`[SaveManager] Autosave timer started (every ${AUTOSAVE_INTERVAL_MS / 60000} min)`);
  }
  
  /**
   * Stop autosave timer
   */
  stopAutosaveTimer() {
    if (this.autosaveTimer) {
      clearInterval(this.autosaveTimer);
      this.autosaveTimer = null;
    }
  }
  
  /**
   * Trigger autosave with reason
   */
  async triggerAutosave(reason = 'manual') {
    console.log(`[SaveManager] Autosave triggered: ${reason}`);
    this.emitEvent('onAutosaveTrigger', { reason });
    
    return this.save(AUTOSAVE_SLOT, { 
      silent: false, 
      isAutosave: true 
    });
  }
  
  // ========== SAVE BLOCKING ==========
  
  /**
   * Block saving (during combat, cutscenes, etc.)
   */
  blockSaving(reason) {
    this.saveBlocked = true;
    this.saveBlockReason = reason;
    console.log(`[SaveManager] Saving blocked: ${reason}`);
  }
  
  /**
   * Unblock saving
   */
  unblockSaving() {
    this.saveBlocked = false;
    this.saveBlockReason = null;
    console.log('[SaveManager] Saving unblocked');
  }
  
  /**
   * Check if saving is allowed
   */
  canSave() {
    return !this.saveBlocked && !this.isSaving;
  }
  
  // ========== IMPORT/EXPORT ==========
  
  /**
   * Export save as downloadable JSON file
   */
  exportSave(slotId) {
    try {
      const storageKey = `${STORAGE_PREFIX}${slotId}`;
      const compressed = localStorage.getItem(storageKey);
      
      if (!compressed) {
        throw new Error('Save slot is empty');
      }
      
      const saveData = this.decompressSaveData(compressed);
      const json = JSON.stringify(saveData, null, 2);
      
      // Create download
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      
      const a = document.createElement('a');
      a.href = url;
      a.download = `ashen_save_slot${slotId}_${Date.now()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      console.log(`[SaveManager] Exported slot ${slotId}`);
      return { success: true };
      
    } catch (error) {
      console.error('[SaveManager] Export failed:', error);
      return { success: false, error: error.message };
    }
  }
  
  /**
   * Import save from JSON file
   */
  async importSave(slotId, file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      
      reader.onload = (e) => {
        try {
          const saveData = JSON.parse(e.target.result);
          
          // Validate
          const validation = validateSaveData(saveData);
          if (!validation.valid) {
            throw new Error(`Invalid save: ${validation.errors.join(', ')}`);
          }
          
          // Migrate if needed
          let finalData = saveData;
          if (saveData.version < SAVE_VERSION) {
            finalData = migrateSaveData(saveData).data;
          }
          
          // Update slot info
          finalData.slotId = slotId;
          finalData.updatedAt = Date.now();
          
          // Compress and store
          const compressed = this.compressSaveData(finalData);
          const storageKey = `${STORAGE_PREFIX}${slotId}`;
          localStorage.setItem(storageKey, compressed);
          
          // Update metadata
          const metadata = createSaveMetadata(finalData);
          this.slotMetadataCache[slotId] = metadata;
          this.saveSlotMetadata();
          
          console.log(`[SaveManager] Imported to slot ${slotId}`);
          resolve({ success: true, slotId });
          
        } catch (error) {
          console.error('[SaveManager] Import failed:', error);
          resolve({ success: false, error: error.message });
        }
      };
      
      reader.onerror = () => {
        resolve({ success: false, error: 'Failed to read file' });
      };
      
      reader.readAsText(file);
    });
  }
  
  // ========== METADATA PERSISTENCE ==========
  
  /**
   * Load slot metadata from localStorage
   */
  loadSlotMetadata() {
    try {
      const saved = localStorage.getItem(METADATA_KEY);
      if (saved) {
        this.slotMetadataCache = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('[SaveManager] Failed to load metadata:', e);
      this.slotMetadataCache = {};
    }
  }
  
  /**
   * Save slot metadata to localStorage
   */
  saveSlotMetadata() {
    try {
      localStorage.setItem(METADATA_KEY, JSON.stringify(this.slotMetadataCache));
    } catch (e) {
      console.warn('[SaveManager] Failed to save metadata:', e);
    }
  }
  
  // ========== HELPERS ==========
  
  /**
   * Get current location name for save display
   */
  getCurrentLocationName() {
    // Could be expanded with actual location detection
    if (this.systems.dungeonManager?.currentDungeon) {
      return this.systems.dungeonManager.currentDungeon.name || 'Unknown Dungeon';
    }
    
    // Default to village or world location
    return 'Ashvale Village';
  }
  
  /**
   * Get current playtime in seconds
   */
  getCurrentPlaytime() {
    const sessionDuration = (Date.now() - this.sessionStartTime) / 1000;
    return this.totalPlaytime + sessionDuration;
  }
  
  /**
   * Format current playtime for display
   */
  getFormattedPlaytime() {
    return formatPlaytime(this.getCurrentPlaytime());
  }
  
  // ========== STORAGE MANAGEMENT ==========
  
  /**
   * Get localStorage usage information
   */
  getStorageInfo() {
    try {
      let totalUsed = 0;
      let savesUsed = 0;
      
      // Count all localStorage usage
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const size = (key.length + value.length) * 2; // UTF-16 chars = 2 bytes
        totalUsed += size;
        
        if (key.startsWith(STORAGE_PREFIX) || key === METADATA_KEY) {
          savesUsed += size;
        }
      }
      
      // Estimate available (most browsers allow ~5-10MB)
      const estimatedTotal = 5 * 1024 * 1024; // 5MB conservative estimate
      const available = Math.max(0, estimatedTotal - totalUsed);
      const usagePercent = totalUsed / estimatedTotal;
      
      return {
        totalUsed,
        savesUsed,
        available,
        usagePercent,
        isNearLimit: usagePercent > STORAGE_WARNING_THRESHOLD,
        formatted: {
          totalUsed: this.formatBytes(totalUsed),
          savesUsed: this.formatBytes(savesUsed),
          available: this.formatBytes(available),
        },
      };
    } catch (e) {
      console.warn('[SaveManager] Failed to get storage info:', e);
      return null;
    }
  }
  
  /**
   * Format bytes to human readable string
   */
  formatBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }
  
  /**
   * Check if storage is near capacity
   */
  isStorageNearLimit() {
    const info = this.getStorageInfo();
    return info?.isNearLimit || false;
  }
  
  /**
   * Try to free up storage space
   * Returns bytes freed
   */
  freeStorageSpace() {
    let bytesFreed = 0;
    
    try {
      // Remove old screenshots first (they're nice-to-have)
      const screenshotKey = 'ashen_save_screenshots';
      const screenshots = localStorage.getItem(screenshotKey);
      if (screenshots) {
        bytesFreed += screenshots.length * 2;
        localStorage.removeItem(screenshotKey);
        console.log('[SaveManager] Cleared screenshots to free space');
      }
      
      // If still needed, could remove oldest autosave here
      // But we prioritize keeping saves intact
      
    } catch (e) {
      console.warn('[SaveManager] Failed to free storage:', e);
    }
    
    return bytesFreed;
  }
  
  /**
   * Safely write to localStorage with quota handling
   */
  safeStorageSet(key, value) {
    try {
      localStorage.setItem(key, value);
      return { success: true };
    } catch (e) {
      // QuotaExceededError
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        console.warn('[SaveManager] Storage quota exceeded, attempting cleanup...');
        
        // Try to free space
        const freed = this.freeStorageSpace();
        
        if (freed > 0) {
          // Retry
          try {
            localStorage.setItem(key, value);
            return { success: true, freedSpace: freed };
          } catch (e2) {
            return { 
              success: false, 
              error: 'Storage full. Please delete old saves to continue.',
              quotaExceeded: true,
            };
          }
        }
        
        return { 
          success: false, 
          error: 'Storage full. Please delete old saves or export to file.',
          quotaExceeded: true,
        };
      }
      
      return { success: false, error: e.message };
    }
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
          console.error(`[SaveManager] Event callback error:`, e);
        }
      });
    }
  }
  
  // ========== CLEANUP ==========
  
  /**
   * Cleanup resources
   */
  dispose() {
    this.stopAutosaveTimer();
    this.systems = {};
    console.log('[SaveManager] Disposed');
  }
}

// ========== SINGLETON ==========
let saveManagerInstance = null;

export function getSaveManager() {
  if (!saveManagerInstance) {
    saveManagerInstance = new SaveManager();
  }
  return saveManagerInstance;
}

export function createSaveManager() {
  saveManagerInstance = new SaveManager();
  return saveManagerInstance;
}

// THREE.js import for Vector3
import * as THREE from 'three';

export { SaveManager, AUTOSAVE_SLOT, MAX_MANUAL_SLOTS, formatPlaytime, formatTimestamp };
export default SaveManager;
