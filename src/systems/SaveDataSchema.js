/**
 * SaveDataSchema.js - Complete Save Data Structure Definition
 * Phase 26: Save System & Persistence
 * 
 * Defines the complete schema for game saves including:
 * - Player stats, position, abilities
 * - Inventory, equipment, hotbar
 * - Quest state (active, completed, available)
 * - World state (time, weather, discoveries)
 * - Crafting, gathering, reputation
 * - Combat statistics
 * - Save metadata for UI display
 * - Version control for migration support
 */

// ========== CURRENT SCHEMA VERSION ==========
export const SAVE_VERSION = 1;

// ========== SAVE SLOT TYPES ==========
export const SAVE_SLOT_TYPE = {
  MANUAL: 'manual',
  AUTOSAVE: 'autosave',
};

// ========== DEFAULT VALUES ==========

/**
 * Default player data structure
 */
export function getDefaultPlayerData() {
  return {
    // Position & Rotation
    // NOTE: Y is set to 50 as safe default well above terrain (terrain at origin is ~0)
    // The actual spawn height will be recalculated by spawn safety systems
    // High initial value prevents "green blob" bug in autostart mode
    position: { x: 0, y: 50, z: 5 },
    rotation: { x: 0, y: 0, z: 0 },
    checkpoint: { x: 0, y: 50, z: 5 },
    
    // Core Stats
    health: 100,
    maxHealth: 100,
    stamina: 100,
    maxStamina: 100,
    mana: 50,
    maxMana: 50,
    posture: 0,
    maxPosture: 100,
    
    // Progression
    level: 1,
    currentXP: 0,
    totalXPEarned: 0,
    remnant: 0,
    heldRemnant: 0,
    
    // Stat Points (allocated)
    stats: {
      vigor: 0,
      endurance: 0,
      strength: 0,
      dexterity: 0,
      mind: 0,
      intelligence: 0,
    },
    spentStatPoints: 0,
    
    // Infusions (Crucible)
    infusions: {
      strength: 0,
      vitality: 0,
      stamina: 0,
      spirit: 0,
    },
    
    // Abilities
    unlockedAbilities: [], // ['dash', 'heavyCharge', ...]
    abilityCooldowns: {
      dash: 0,
      heavyCharge: 0,
      parry: 0,
      warCry: 0,
    },
    
    // Spells unlocked
    unlockedSpells: ['fireball'], // Default starting spell
    equippedSpells: ['fireball', null, null, null], // 4 spell slots
    spellCooldowns: {},
    
    // Death tracking
    deathCount: 0,
    deathLessons: {}, // damageType -> resistance bonus
    
    // Bloodstain (remnant recovery location)
    bloodstain: null, // { position: {x,y,z}, remnant: number } or null
  };
}

/**
 * Default inventory data structure
 */
export function getDefaultInventoryData() {
  return {
    // Gold currency
    gold: 0,
    
    // General items (materials, consumables, keys, quest items)
    items: [], // [{ id, quantity, ... }]
    
    // Equipment in inventory (not equipped)
    equipment: [], // [{ id, baseId, rarity, stats, ... }]
    
    // Weapons in inventory
    weapons: [], // [{ id, baseId, rarity, stats, ... }]
    
    // Boss souls collected
    bossSouls: [], // ['golem_soul', 'wraith_soul', ...]
    
    // Boss trophies
    bossTrophies: [], // ['golem_trophy', ...]
    
    // Keys collected
    keys: [], // ['dungeon_key', 'boss_room_key', ...]
  };
}

/**
 * Default equipment data structure
 */
export function getDefaultEquipmentData() {
  return {
    // Currently equipped items per slot
    equipped: {
      weapon: null,    // { id, baseId, rarity, stats, ... }
      armor: null,
      accessory: null,
    },
    
    // Weapon quick-slots (keys 1-4)
    weaponSlots: [null, null, null, null],
    activeWeaponSlot: 0,
    
    // Potion quick-slots (Ctrl+1/2)
    potionSlots: [null, null],
  };
}

/**
 * Default quest data structure
 */
export function getDefaultQuestData() {
  return {
    // Active quests with state
    activeQuests: [], // [{ questId, status, objectives: [{...progress}], startTime, ... }]
    
    // Completed quest IDs
    completedQuests: [],
    
    // Failed quest IDs
    failedQuests: [],
    
    // Available quests (unlocked but not accepted)
    availableQuests: [],
    
    // Quest cooldowns for repeatable quests
    questCooldowns: {}, // { questId: cooldownEndTime }
    
    // Quest-specific tracking
    questStats: {
      totalCompleted: 0,
      totalFailed: 0,
      totalAbandoned: 0,
      questsCompletedByType: {}, // { 'kill': 5, 'gather': 3, ... }
    },
    
    // Tracked quests for HUD (up to 3)
    trackedQuests: [],
  };
}

/**
 * Default reputation data structure
 */
export function getDefaultReputationData() {
  return {
    // Reputation per faction
    factions: {
      village: 0,
      hunters_guild: 0,
      mages_circle: 0,
      merchants_union: 0,
      shadow_brokers: 0,
    },
    
    // Unlocked titles
    titles: [],
    
    // Active title for display
    activeTitle: null,
    
    // Unlocked milestones
    unlockedMilestones: [], // ['village_shop_tier2', ...]
    
    // Achievements
    achievements: [], // ['quest_novice', 'boss_slayer', ...]
    
    // Reputation stats
    repStats: {
      totalRepEarned: 0,
      highestTierReached: {}, // { village: 'honored', ... }
    },
  };
}

/**
 * Default world state data structure
 */
export function getDefaultWorldData() {
  return {
    // Time of day
    time: {
      currentHour: 10,
      currentMinute: 0,
      currentDay: 1,
      dayPhase: 'day', // 'night', 'dawn', 'day', 'dusk'
      moonPhase: 4,
      isPaused: false,
    },
    
    // Weather state
    weather: {
      currentWeather: 'clear', // 'clear', 'cloudy', 'rain', 'storm', 'fog', 'snow'
      intensity: 0,
      transitionProgress: 0,
      lastWeatherChange: 0,
    },
    
    // Discovered locations
    discoveredLocations: [], // ['ashvale_village', 'ancient_ruins', ...]
    
    // Unlocked fast travel points
    fastTravelPoints: ['ashvale_village'], // Start with village unlocked
    
    // World state flags
    worldFlags: {}, // { 'bridge_repaired': true, 'gate_opened': false, ... }
    
    // Boss defeat states
    bossesDefeated: [], // ['ancient_golem', 'shadow_wraith', ...]
    
    // Dungeon states
    dungeons: {}, // { 'crypt': { cleared: false, chestsOpened: [], puzzlesSolved: [] } }
    
    // NPC states
    npcStates: {}, // { 'elder_marcus': { dialogueIndex: 2, questsGiven: [...] } }
    
    // Rare event flags
    rareEvents: {
      triggeredEvents: [],
      lastRareEventTime: 0,
    },
  };
}

/**
 * Default crafting data structure
 */
export function getDefaultCraftingData() {
  return {
    // Unlocked recipe IDs
    unlockedRecipes: [], // Defaults added by CraftingManager
    
    // Crafting statistics
    craftingStats: {
      totalCrafted: 0,
      recipesCrafted: {}, // { 'health_potion': 10, ... }
    },
    
    // Station unlock states
    unlockedStations: ['basic_workbench'], // Start with basic
  };
}

/**
 * Default gathering data structure
 */
export function getDefaultGatheringData() {
  return {
    // Node cooldowns (respawn timers)
    nodeCooldowns: {}, // { 'node_123': cooldownEndTime }
    
    // Gathering statistics
    gatheringStats: {
      totalGathered: 0,
      gatheredByType: {}, // { 'ore': 50, 'herb': 30, ... }
    },
    
    // Rare node discoveries
    rareNodesFound: [],
  };
}

/**
 * Default combat data structure
 */
export function getDefaultCombatData() {
  return {
    // Kill counts per enemy type
    killCounts: {}, // { 'skeleton': 15, 'wolf': 8, ... }
    
    // Boss kill counts
    bossKillCounts: {}, // { 'ancient_golem': 2, ... }
    
    // Damage statistics
    damageStats: {
      totalDamageDealt: 0,
      totalDamageTaken: 0,
      highestHit: 0,
      criticalHits: 0,
    },
    
    // Combat records
    records: {
      longestCombo: 0,
      perfectParries: 0,
      noHitBossKills: [], // Boss IDs defeated without taking damage
    },
  };
}

/**
 * Default shop data structure
 */
export function getDefaultShopData() {
  return {
    // Purchased items tracking (for limited stock)
    purchasedItems: {}, // { 'merchant_lydia': { 'rare_sword': 1 } }
    
    // Shop refresh timers
    shopRefreshTimes: {}, // { 'merchant_lydia': lastRefreshTime }
    
    // Total gold spent
    totalGoldSpent: 0,
    
    // Haggle success count (if implemented)
    haggleSuccesses: 0,
  };
}

/**
 * Default settings data (saved separately but can be included)
 */
export function getDefaultSettingsData() {
  return {
    // Audio
    masterVolume: 1.0,
    musicVolume: 0.7,
    sfxVolume: 0.8,
    ambientVolume: 0.6,
    
    // Graphics
    shadowQuality: 'medium', // 'low', 'medium', 'high'
    particleDensity: 1.0,
    viewDistance: 1.0,
    
    // Gameplay
    cameraInvertY: false,
    cameraSensitivity: 1.0,
    autoTargetLock: true,
    showDamageNumbers: true,
    showMinimap: true,
    
    // UI
    hudScale: 1.0,
    showTutorialTips: true,
  };
}

/**
 * Save metadata for UI display (quick load info)
 */
export function createSaveMetadata(saveData) {
  const playerData = saveData.player || getDefaultPlayerData();
  const worldData = saveData.world || getDefaultWorldData();
  const questData = saveData.quest || getDefaultQuestData();
  
  return {
    // Slot identification
    slotId: saveData.slotId || 0,
    slotType: saveData.slotType || SAVE_SLOT_TYPE.MANUAL,
    
    // Save info
    timestamp: Date.now(),
    playtime: saveData.playtime || 0, // Total seconds played
    
    // Quick display info
    playerLevel: playerData.level,
    playerName: saveData.playerName || 'Ashen One',
    locationName: saveData.locationName || 'Unknown',
    
    // Progress indicators
    questsCompleted: questData.completedQuests?.length || 0,
    bossesDefeated: worldData.bossesDefeated?.length || 0,
    
    // Visual preview data
    currentHour: worldData.time?.currentHour || 10,
    dayCount: worldData.time?.currentDay || 1,
    
    // Schema version for migration
    version: SAVE_VERSION,
  };
}

// ========== COMPLETE SAVE DATA STRUCTURE ==========

/**
 * Create a complete save data object with all defaults
 */
export function createDefaultSaveData(slotId = 0, slotType = SAVE_SLOT_TYPE.MANUAL) {
  return {
    // Schema version for migration
    version: SAVE_VERSION,
    
    // Slot info
    slotId,
    slotType,
    
    // Timestamps
    createdAt: Date.now(),
    updatedAt: Date.now(),
    
    // Playtime tracking
    playtime: 0, // Total seconds
    sessionStartTime: Date.now(),
    
    // Player name (can be customized)
    playerName: 'Ashen One',
    
    // Current location for display
    locationName: 'Ashvale Village',
    
    // All game state sections
    player: getDefaultPlayerData(),
    inventory: getDefaultInventoryData(),
    equipment: getDefaultEquipmentData(),
    quest: getDefaultQuestData(),
    reputation: getDefaultReputationData(),
    world: getDefaultWorldData(),
    crafting: getDefaultCraftingData(),
    gathering: getDefaultGatheringData(),
    combat: getDefaultCombatData(),
    shop: getDefaultShopData(),
    
    // Settings (optional, can be saved separately)
    settings: null, // Use null to indicate "use global settings"
  };
}

// ========== VALIDATION ==========

/**
 * Validate save data structure
 * Returns { valid: boolean, errors: string[], warnings: string[] }
 */
export function validateSaveData(saveData) {
  const errors = [];
  const warnings = [];
  
  // Check version
  if (!saveData.version) {
    errors.push('Missing save version');
  } else if (saveData.version > SAVE_VERSION) {
    errors.push(`Save version ${saveData.version} is newer than supported ${SAVE_VERSION}`);
  } else if (saveData.version < SAVE_VERSION) {
    warnings.push(`Save version ${saveData.version} will be migrated to ${SAVE_VERSION}`);
  }
  
  // Check required sections
  const requiredSections = ['player', 'inventory', 'equipment', 'quest', 'world'];
  for (const section of requiredSections) {
    if (!saveData[section]) {
      errors.push(`Missing required section: ${section}`);
    }
  }
  
  // Validate player data
  if (saveData.player) {
    if (typeof saveData.player.level !== 'number' || saveData.player.level < 1) {
      errors.push('Invalid player level');
    }
    if (typeof saveData.player.health !== 'number' || saveData.player.health < 0) {
      errors.push('Invalid player health');
    }
    if (!saveData.player.position || typeof saveData.player.position.x !== 'number') {
      errors.push('Invalid player position');
    }
  }
  
  // Validate inventory
  if (saveData.inventory) {
    if (!Array.isArray(saveData.inventory.items)) {
      warnings.push('Inventory items should be an array');
    }
    if (typeof saveData.inventory.gold !== 'number') {
      warnings.push('Inventory gold should be a number');
    }
  }
  
  // Validate world
  if (saveData.world) {
    if (!saveData.world.time || typeof saveData.world.time.currentHour !== 'number') {
      warnings.push('Invalid world time data');
    }
  }
  
  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}

// ========== MIGRATION SUPPORT ==========

/**
 * Migrate save data from older versions
 */
export function migrateSaveData(saveData) {
  let currentData = { ...saveData };
  let migrationsApplied = [];
  
  // Handle missing version (pre-versioning saves)
  if (!currentData.version) {
    currentData.version = 0;
  }
  
  // Version 0 -> 1: Initial structure
  if (currentData.version < 1) {
    // Ensure all sections exist with defaults
    currentData.player = { ...getDefaultPlayerData(), ...currentData.player };
    currentData.inventory = { ...getDefaultInventoryData(), ...currentData.inventory };
    currentData.equipment = { ...getDefaultEquipmentData(), ...currentData.equipment };
    currentData.quest = { ...getDefaultQuestData(), ...currentData.quest };
    currentData.reputation = { ...getDefaultReputationData(), ...currentData.reputation };
    currentData.world = { ...getDefaultWorldData(), ...currentData.world };
    currentData.crafting = { ...getDefaultCraftingData(), ...currentData.crafting };
    currentData.gathering = { ...getDefaultGatheringData(), ...currentData.gathering };
    currentData.combat = { ...getDefaultCombatData(), ...currentData.combat };
    currentData.shop = { ...getDefaultShopData(), ...currentData.shop };
    
    currentData.version = 1;
    migrationsApplied.push('v0 -> v1: Added missing sections');
  }
  
  // Future migrations would go here:
  // if (currentData.version < 2) { ... }
  
  return {
    data: currentData,
    migrationsApplied,
  };
}

// ========== DELTA COMPRESSION UTILITIES ==========

/**
 * Create a delta between two save states (for optimized storage)
 * Returns only changed fields
 */
export function createSaveDelta(oldSave, newSave) {
  const delta = {
    version: newSave.version,
    updatedAt: newSave.updatedAt,
    playtime: newSave.playtime,
    _isDelta: true,
    _baseTimestamp: oldSave.updatedAt,
  };
  
  // Compare and include only changed sections
  const sections = ['player', 'inventory', 'equipment', 'quest', 'reputation', 
                    'world', 'crafting', 'gathering', 'combat', 'shop'];
  
  for (const section of sections) {
    if (JSON.stringify(oldSave[section]) !== JSON.stringify(newSave[section])) {
      delta[section] = newSave[section];
    }
  }
  
  return delta;
}

/**
 * Apply a delta to a base save
 */
export function applySaveDelta(baseSave, delta) {
  if (!delta._isDelta) {
    return delta; // Not a delta, return as-is
  }
  
  const result = { ...baseSave };
  
  const sections = ['player', 'inventory', 'equipment', 'quest', 'reputation', 
                    'world', 'crafting', 'gathering', 'combat', 'shop'];
  
  for (const section of sections) {
    if (delta[section] !== undefined) {
      result[section] = delta[section];
    }
  }
  
  result.version = delta.version;
  result.updatedAt = delta.updatedAt;
  result.playtime = delta.playtime;
  
  return result;
}

// ========== HELPERS ==========

/**
 * Deep clone save data safely
 */
export function cloneSaveData(saveData) {
  return JSON.parse(JSON.stringify(saveData));
}

/**
 * Calculate save data size in bytes
 */
export function getSaveDataSize(saveData) {
  return new Blob([JSON.stringify(saveData)]).size;
}

/**
 * Format playtime for display (returns "HH:MM:SS")
 */
export function formatPlaytime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  
  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Format timestamp for display
 */
export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

// ========== EXPORTS ==========
export default {
  SAVE_VERSION,
  SAVE_SLOT_TYPE,
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
  getDefaultSettingsData,
  createSaveMetadata,
  createDefaultSaveData,
  validateSaveData,
  migrateSaveData,
  createSaveDelta,
  applySaveDelta,
  cloneSaveData,
  getSaveDataSize,
  formatPlaytime,
  formatTimestamp,
};
