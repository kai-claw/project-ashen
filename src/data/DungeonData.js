/**
 * DungeonData.js - Dungeon Instance Definitions
 * Phase 22: Dungeon Instances
 * 
 * Defines dungeon templates with room layouts, enemies, puzzles, and loot.
 * Integrates with DungeonGenerator.js, DungeonRenderer.js, and DungeonManager.js
 */

// ========== ROOM TYPES ==========
export const ROOM_TYPE = {
  ENTRANCE: 'entrance',     // Starting room, safe
  COMBAT: 'combat',         // Enemy encounter room
  PUZZLE: 'puzzle',         // Puzzle to solve for progression/loot
  TREASURE: 'treasure',     // Bonus loot room (often has puzzle or trap)
  REST: 'rest',             // Safe room with checkpoint/healing
  MINIBOSS: 'miniboss',     // Mini-boss encounter
  BOSS: 'boss',             // Final boss room
  CORRIDOR: 'corridor',     // Connecting hallway
};

// ========== ROOM SIZES ==========
export const ROOM_SIZE = {
  SMALL: { width: 8, height: 4, depth: 8 },
  MEDIUM: { width: 12, height: 5, depth: 12 },
  LARGE: { width: 18, height: 6, depth: 18 },
  CORRIDOR: { width: 4, height: 3.5, depth: 10 },
  BOSS: { width: 24, height: 8, depth: 24 },
};

// ========== DUNGEON MODIFIERS ==========
export const DUNGEON_MODIFIER = {
  NONE: {
    id: 'none',
    name: 'Normal',
    description: 'Standard dungeon difficulty.',
    effects: {},
  },
  ELITE: {
    id: 'elite',
    name: 'Elite',
    description: 'Enemies are stronger and more numerous. Better loot.',
    effects: {
      enemyHealthMult: 1.5,
      enemyDamageMult: 1.3,
      enemyCountMult: 1.25,
      lootRarityBoost: 1,    // +1 rarity tier chance
      xpMult: 1.75,
    },
    requiredItem: 'elite_dungeon_key',
  },
  CURSED: {
    id: 'cursed',
    name: 'Cursed',
    description: 'Dark magic fills this place. Healing reduced, enemies enraged.',
    effects: {
      healingReduction: 0.5,  // Healing 50% effective
      enemyDamageMult: 1.2,
      enemyEnraged: true,     // Enemies have enrage mechanics
      trapDamageMult: 1.5,
      lootRarityBoost: 2,
      xpMult: 2.0,
    },
    requiredItem: 'cursed_dungeon_key',
    playerDebuffs: ['reduced_healing', 'darkness_vision'],
  },
  BLESSED: {
    id: 'blessed',
    name: 'Blessed',
    description: 'Ancient blessings linger. Player empowered, easier enemies.',
    effects: {
      playerDamageMult: 1.25,
      playerDefenseMult: 1.15,
      enemyHealthMult: 0.85,
      healingBonus: 1.25,     // Healing 125% effective
      xpMult: 0.8,            // Less XP since easier
    },
    playerBuffs: ['blessed_strength', 'blessed_ward'],
  },
  TIMED: {
    id: 'timed',
    name: 'Time Trial',
    description: 'Complete within the time limit for bonus rewards.',
    effects: {
      timeLimitSeconds: 600,  // 10 minutes
      bonusLootOnTime: true,
      xpMult: 1.5,
    },
  },
};

// ========== TRAP TYPES ==========
export const TRAP_TYPE = {
  SPIKE: {
    id: 'spike',
    name: 'Spike Trap',
    damage: 25,
    triggerType: 'pressure',  // Triggered by stepping on
    resetTime: 3,
    visualType: 'floor_spikes',
  },
  ARROW: {
    id: 'arrow',
    name: 'Arrow Trap',
    damage: 30,
    triggerType: 'tripwire',
    projectileCount: 3,
    resetTime: 5,
    visualType: 'wall_arrows',
  },
  FIRE: {
    id: 'fire',
    name: 'Fire Jet',
    damage: 40,
    damageType: 'fire',
    triggerType: 'timed',     // Periodic activation
    activeTime: 2,
    cooldownTime: 4,
    visualType: 'fire_grate',
  },
  POISON: {
    id: 'poison',
    name: 'Poison Cloud',
    damage: 15,
    damageType: 'poison',
    triggerType: 'proximity',
    duration: 5,              // DoT duration
    visualType: 'poison_vent',
  },
  FALLING: {
    id: 'falling',
    name: 'Falling Rocks',
    damage: 50,
    triggerType: 'pressure',
    oneShot: true,            // Only triggers once
    visualType: 'cracked_ceiling',
  },
  PIT: {
    id: 'pit',
    name: 'Hidden Pit',
    damage: 35,
    triggerType: 'weight',
    visualType: 'hidden_floor',
    effect: 'fall',           // Player falls, must climb out
  },
};

// ========== PUZZLE TYPES ==========
export const PUZZLE_TYPE = {
  PRESSURE_PLATES: {
    id: 'pressure_plates',
    name: 'Pressure Plate Sequence',
    description: 'Step on plates in the correct order.',
    difficulty: 1,
    componentCount: { min: 3, max: 5 },
    failurePenalty: 'spawn_enemies',
    visualType: 'floor_plates',
  },
  LEVER_SEQUENCE: {
    id: 'lever_sequence',
    name: 'Lever Sequence',
    description: 'Pull levers in the correct order.',
    difficulty: 2,
    componentCount: { min: 3, max: 6 },
    failurePenalty: 'trap_activation',
    visualType: 'wall_levers',
    hint: 'symbols_on_walls',
  },
  CRYSTAL_ALIGNMENT: {
    id: 'crystal_alignment',
    name: 'Crystal Alignment',
    description: 'Rotate crystals to focus light on the target.',
    difficulty: 2,
    componentCount: { min: 4, max: 6 },
    failurePenalty: 'none',
    visualType: 'rotating_crystals',
    hint: 'light_beams',
  },
  KEY_AND_LOCK: {
    id: 'key_and_lock',
    name: 'Key Hunt',
    description: 'Find the key hidden elsewhere in the dungeon.',
    difficulty: 1,
    componentCount: { min: 1, max: 1 },
    failurePenalty: 'none',
    visualType: 'locked_door',
    requiresExploration: true,
  },
  SYMBOL_MATCH: {
    id: 'symbol_match',
    name: 'Symbol Matching',
    description: 'Match symbols on rotating pillars.',
    difficulty: 3,
    componentCount: { min: 4, max: 8 },
    failurePenalty: 'damage_pulse',
    visualType: 'symbol_pillars',
    hint: 'mural_reference',
  },
  TORCH_LIGHTING: {
    id: 'torch_lighting',
    name: 'Torch Sequence',
    description: 'Light torches in a specific pattern.',
    difficulty: 2,
    componentCount: { min: 4, max: 7 },
    failurePenalty: 'extinguish_all',
    visualType: 'wall_torches',
    hint: 'shadow_patterns',
  },
  WEIGHT_BALANCE: {
    id: 'weight_balance',
    name: 'Weight Balance',
    description: 'Place items on scales to balance them.',
    difficulty: 3,
    componentCount: { min: 2, max: 4 }, // Number of scales
    failurePenalty: 'trap_activation',
    visualType: 'balance_scales',
    requiresItems: true,
  },
};

// ========== ENEMY SETS PER DUNGEON TYPE ==========
const DUNGEON_ENEMY_SETS = {
  catacombs: {
    common: ['skeleton_warrior', 'skeleton_archer', 'zombie_shambler'],
    uncommon: ['skeleton_knight', 'wraith', 'ghoul'],
    rare: ['bone_golem', 'lich_apprentice'],
    miniboss: ['crypt_guardian', 'bone_colossus'],
    boss: ['lich_lord'],
  },
  caverns: {
    common: ['cave_spider', 'crystal_bat', 'miner_ghost'],
    uncommon: ['rock_elemental', 'gem_hoarder', 'cave_troll'],
    rare: ['crystal_golem', 'deep_dweller'],
    miniboss: ['spider_queen', 'crystal_guardian'],
    boss: ['ancient_crystal_wurm'],
  },
  hideout: {
    common: ['bandit_thug', 'bandit_archer', 'bandit_brute'],
    uncommon: ['bandit_assassin', 'bandit_mage', 'guard_dog'],
    rare: ['bandit_captain', 'mercenary_veteran'],
    miniboss: ['bandit_lieutenant', 'arena_champion'],
    boss: ['bandit_warlord'],
  },
  temple: {
    common: ['corrupted_acolyte', 'shadow_wisp', 'temple_guardian'],
    uncommon: ['dark_priest', 'void_spawn', 'corrupted_knight'],
    rare: ['shadow_assassin', 'void_walker'],
    miniboss: ['high_priest', 'corrupted_paladin'],
    boss: ['avatar_of_corruption'],
  },
};

// ========== LOOT POOLS PER DUNGEON ==========
const DUNGEON_LOOT_POOLS = {
  catacombs: {
    common: [
      { id: 'bone_dust', name: 'Bone Dust', type: 'material', value: 15 },
      { id: 'grave_moss', name: 'Grave Moss', type: 'material', value: 20 },
      { id: 'tattered_cloth', name: 'Tattered Cloth', type: 'material', value: 10 },
    ],
    uncommon: [
      { id: 'ancient_coin', name: 'Ancient Coin', type: 'treasure', value: 50 },
      { id: 'crypt_key_fragment', name: 'Crypt Key Fragment', type: 'quest', value: 0 },
      { id: 'unholy_essence', name: 'Unholy Essence', type: 'material', value: 75 },
    ],
    rare: [
      { id: 'lich_phylactery', name: 'Lich Phylactery', type: 'rare_material', value: 200 },
      { id: 'death_shard', name: 'Death Shard', type: 'rare_material', value: 150 },
    ],
    equipment: ['bone_sword', 'grave_keeper_helm', 'crypt_walker_boots', 'undead_bane_ring'],
  },
  caverns: {
    common: [
      { id: 'raw_crystal', name: 'Raw Crystal', type: 'material', value: 25 },
      { id: 'cave_fungus', name: 'Cave Fungus', type: 'material', value: 15 },
      { id: 'stone_ore', name: 'Stone Ore', type: 'material', value: 20 },
    ],
    uncommon: [
      { id: 'glowing_gem', name: 'Glowing Gem', type: 'treasure', value: 80 },
      { id: 'spider_silk', name: 'Spider Silk', type: 'material', value: 60 },
      { id: 'crystal_dust', name: 'Crystal Dust', type: 'material', value: 45 },
    ],
    rare: [
      { id: 'perfect_crystal', name: 'Perfect Crystal', type: 'rare_material', value: 250 },
      { id: 'deep_diamond', name: 'Deep Diamond', type: 'rare_material', value: 300 },
    ],
    equipment: ['crystal_blade', 'miners_helm', 'spider_silk_armor', 'cave_delver_ring'],
  },
  hideout: {
    common: [
      { id: 'stolen_goods', name: 'Stolen Goods', type: 'treasure', value: 30 },
      { id: 'leather_scraps', name: 'Leather Scraps', type: 'material', value: 15 },
      { id: 'cheap_lockpick', name: 'Cheap Lockpick', type: 'consumable', value: 10 },
    ],
    uncommon: [
      { id: 'gold_pouch', name: 'Gold Pouch', type: 'treasure', value: 100 },
      { id: 'bandit_map', name: 'Bandit Treasure Map', type: 'quest', value: 0 },
      { id: 'poison_vial', name: 'Poison Vial', type: 'consumable', value: 50 },
    ],
    rare: [
      { id: 'warlord_medallion', name: "Warlord's Medallion", type: 'rare_material', value: 200 },
      { id: 'master_key', name: 'Master Skeleton Key', type: 'tool', value: 175 },
    ],
    equipment: ['bandit_dagger', 'rogues_hood', 'thieves_gloves', 'shadow_step_boots'],
  },
  temple: {
    common: [
      { id: 'corrupted_incense', name: 'Corrupted Incense', type: 'material', value: 20 },
      { id: 'shadow_essence', name: 'Shadow Essence', type: 'material', value: 25 },
      { id: 'ritual_candle', name: 'Ritual Candle', type: 'material', value: 15 },
    ],
    uncommon: [
      { id: 'void_fragment', name: 'Void Fragment', type: 'material', value: 70 },
      { id: 'temple_relic', name: 'Temple Relic', type: 'treasure', value: 90 },
      { id: 'dark_scripture', name: 'Dark Scripture', type: 'quest', value: 0 },
    ],
    rare: [
      { id: 'corruption_heart', name: 'Heart of Corruption', type: 'rare_material', value: 275 },
      { id: 'void_crystal', name: 'Void Crystal', type: 'rare_material', value: 225 },
    ],
    equipment: ['shadow_staff', 'cultist_robes', 'void_touched_amulet', 'temple_guardian_shield'],
  },
};

// ========== DUNGEON DEFINITIONS ==========
export const DUNGEONS = {
  // ========== FORGOTTEN CATACOMBS ==========
  FORGOTTEN_CATACOMBS: {
    id: 'forgotten_catacombs',
    name: 'Forgotten Catacombs',
    shortName: 'Catacombs',
    description: 'Ancient burial chambers where the dead refuse to rest. Filled with undead horrors and deadly traps.',
    
    // Dungeon characteristics
    biome: 'undead',
    theme: 'catacombs',
    ambientColor: 0x1a1520,
    fogColor: 0x0a0810,
    fogDensity: 0.08,
    
    // Layout parameters
    roomCount: { min: 7, max: 10 },
    corridorChance: 0.4,        // 40% chance of corridor between rooms
    branchingFactor: 0.3,       // 30% chance of branching paths
    deadEndChance: 0.2,         // 20% of branches are dead ends (bonus loot)
    
    // Room distribution (ratios, will be normalized)
    roomDistribution: {
      [ROOM_TYPE.COMBAT]: 4,
      [ROOM_TYPE.PUZZLE]: 1,
      [ROOM_TYPE.TREASURE]: 1,
      [ROOM_TYPE.REST]: 1,
      [ROOM_TYPE.MINIBOSS]: 1,
    },
    
    // Difficulty scaling
    recommendedLevel: 10,
    enemyLevelRange: { min: 8, max: 15 },
    
    // Enemies
    enemies: DUNGEON_ENEMY_SETS.catacombs,
    enemiesPerRoom: { min: 2, max: 5 },
    eliteChance: 0.15,          // 15% chance per enemy to be elite
    
    // Traps
    trapTypes: ['spike', 'poison', 'falling', 'pit'],
    trapsPerRoom: { min: 0, max: 2 },
    trapChance: 0.4,            // 40% of combat rooms have traps
    
    // Puzzles
    puzzleTypes: ['pressure_plates', 'lever_sequence', 'torch_lighting'],
    
    // Miniboss
    miniboss: {
      id: 'crypt_guardian',
      name: 'The Crypt Guardian',
      health: 800,
      damage: 45,
      abilities: ['tomb_slam', 'summon_skeletons', 'bone_shield'],
    },
    
    // Final Boss
    boss: {
      id: 'lich_lord_valkorin',
      name: 'Lich Lord Valkorin',
      title: 'The Undying',
      health: 1800,
      damage: 60,
      phases: 3,
      abilities: ['death_bolt', 'raise_dead', 'soul_drain', 'necrotic_burst'],
      loot: {
        guaranteed: [
          { id: 'lich_soul', name: "Valkorin's Soul", type: 'boss_soul' },
          { id: 'lich_crown', name: 'Crown of the Lich', type: 'equipment', rarity: 'legendary' },
        ],
        rare: [
          { id: 'staff_of_undeath', name: 'Staff of Undeath', type: 'weapon', rarity: 'legendary', chance: 0.2 },
        ],
      },
    },
    
    // Loot
    lootPool: DUNGEON_LOOT_POOLS.catacombs,
    lootTier: 2,                // Base loot tier (0-4)
    chestCount: { min: 3, max: 6 },
    
    // Visual elements
    props: ['coffins', 'bones', 'candles', 'cobwebs', 'skulls', 'broken_tombs'],
    lighting: 'torches',
    floorTexture: 'stone_worn',
    wallTexture: 'stone_brick_dark',
    ceilingTexture: 'stone_arch',
    
    // Audio
    ambientSound: 'catacombs_ambient',
    combatMusic: 'undead_battle',
    bossMusic: 'lich_theme',
    
    // Completion rewards
    completionRewards: {
      remnants: 2000,
      xp: 1500,
      firstClearBonus: {
        remnants: 1000,
        items: [{ id: 'catacombs_trophy', name: 'Catacombs Conqueror Trophy', type: 'trophy' }],
      },
    },
    
    // Special mechanics
    specialMechanics: ['darkness_zones', 'respawning_skeletons'],
  },

  // ========== CRYSTAL CAVERNS ==========
  CRYSTAL_CAVERNS: {
    id: 'crystal_caverns',
    name: 'Crystal Caverns',
    shortName: 'Caverns',
    description: 'A network of glittering caves filled with precious crystals and dangerous creatures that guard them.',
    
    biome: 'underground',
    theme: 'caverns',
    ambientColor: 0x102030,
    fogColor: 0x0a1520,
    fogDensity: 0.05,
    
    roomCount: { min: 8, max: 12 },
    corridorChance: 0.5,
    branchingFactor: 0.4,       // More branching - maze-like
    deadEndChance: 0.25,
    
    roomDistribution: {
      [ROOM_TYPE.COMBAT]: 4,
      [ROOM_TYPE.PUZZLE]: 2,    // More puzzles
      [ROOM_TYPE.TREASURE]: 2,  // More treasure (mining theme)
      [ROOM_TYPE.REST]: 1,
      [ROOM_TYPE.MINIBOSS]: 1,
    },
    
    recommendedLevel: 15,
    enemyLevelRange: { min: 12, max: 20 },
    
    enemies: DUNGEON_ENEMY_SETS.caverns,
    enemiesPerRoom: { min: 2, max: 4 },
    eliteChance: 0.12,
    
    trapTypes: ['spike', 'falling', 'pit'],
    trapsPerRoom: { min: 0, max: 3 },
    trapChance: 0.35,
    
    puzzleTypes: ['crystal_alignment', 'weight_balance', 'lever_sequence'],
    
    miniboss: {
      id: 'crystal_guardian',
      name: 'Crystal Guardian',
      health: 1000,
      damage: 50,
      abilities: ['crystal_barrage', 'reflect_shield', 'ground_crystals'],
    },
    
    boss: {
      id: 'ancient_crystal_wurm',
      name: 'Ancient Crystal Wurm',
      title: 'The Deep Terror',
      health: 2200,
      damage: 55,
      phases: 3,
      abilities: ['crystal_breath', 'burrow_strike', 'crystal_storm', 'summon_spiders'],
      loot: {
        guaranteed: [
          { id: 'wurm_soul', name: "Crystal Wurm's Soul", type: 'boss_soul' },
          { id: 'wurm_scale', name: 'Prismatic Wurm Scale', type: 'equipment', rarity: 'legendary' },
        ],
        rare: [
          { id: 'crystal_fang', name: 'Crystal Fang Blade', type: 'weapon', rarity: 'legendary', chance: 0.2 },
        ],
      },
    },
    
    lootPool: DUNGEON_LOOT_POOLS.caverns,
    lootTier: 3,
    chestCount: { min: 4, max: 8 },
    
    props: ['crystal_formations', 'stalactites', 'mining_equipment', 'glowing_mushrooms', 'spider_webs', 'mine_carts'],
    lighting: 'crystals',       // Glowing crystals provide light
    floorTexture: 'cave_rock',
    wallTexture: 'crystal_vein',
    ceilingTexture: 'stalactite',
    
    ambientSound: 'cave_ambient',
    combatMusic: 'cavern_battle',
    bossMusic: 'wurm_theme',
    
    completionRewards: {
      remnants: 2500,
      xp: 2000,
      firstClearBonus: {
        remnants: 1500,
        items: [{ id: 'caverns_trophy', name: 'Crystal Delver Trophy', type: 'trophy' }],
      },
    },
    
    specialMechanics: ['crystal_light_puzzles', 'destructible_walls', 'gem_collection'],
  },

  // ========== BANDIT HIDEOUT ==========
  BANDIT_HIDEOUT: {
    id: 'bandit_hideout',
    name: 'Bandit Hideout',
    shortName: 'Hideout',
    description: 'A fortified outlaw stronghold. The bandits have rigged it with alarms and locked doors.',
    
    biome: 'man_made',
    theme: 'hideout',
    ambientColor: 0x2a2018,
    fogColor: 0x1a1510,
    fogDensity: 0.03,
    
    roomCount: { min: 6, max: 9 },
    corridorChance: 0.6,        // More corridors - building layout
    branchingFactor: 0.25,
    deadEndChance: 0.15,
    
    roomDistribution: {
      [ROOM_TYPE.COMBAT]: 5,    // More combat - lots of bandits
      [ROOM_TYPE.PUZZLE]: 1,    // Key hunts, locked doors
      [ROOM_TYPE.TREASURE]: 2,  // Stolen loot
      [ROOM_TYPE.REST]: 0,      // No rest rooms - hostile territory
      [ROOM_TYPE.MINIBOSS]: 1,
    },
    
    recommendedLevel: 8,
    enemyLevelRange: { min: 6, max: 12 },
    
    enemies: DUNGEON_ENEMY_SETS.hideout,
    enemiesPerRoom: { min: 3, max: 6 },  // More enemies, weaker individually
    eliteChance: 0.1,
    
    trapTypes: ['arrow', 'spike', 'pit'],
    trapsPerRoom: { min: 1, max: 3 },
    trapChance: 0.5,            // More traps - they're protecting their loot
    
    puzzleTypes: ['key_and_lock', 'lever_sequence'],
    
    miniboss: {
      id: 'bandit_lieutenant',
      name: 'Lieutenant Grax',
      health: 600,
      damage: 40,
      abilities: ['dual_strike', 'smoke_bomb', 'call_reinforcements'],
    },
    
    boss: {
      id: 'bandit_warlord',
      name: 'Warlord Krag',
      title: 'The Iron Fist',
      health: 1400,
      damage: 55,
      phases: 2,
      abilities: ['heavy_slam', 'axe_throw', 'rally_troops', 'enrage'],
      loot: {
        guaranteed: [
          { id: 'warlord_soul', name: "Krag's Soul", type: 'boss_soul' },
          { id: 'warlord_axe', name: "Krag's Waraxe", type: 'weapon', rarity: 'epic' },
        ],
        rare: [
          { id: 'bandit_lord_armor', name: 'Bandit Lord Armor', type: 'equipment', rarity: 'legendary', chance: 0.2 },
        ],
      },
    },
    
    lootPool: DUNGEON_LOOT_POOLS.hideout,
    lootTier: 1,
    chestCount: { min: 5, max: 10 },    // Lots of stolen goods
    
    props: ['crates', 'barrels', 'weapon_racks', 'tables', 'beds', 'treasure_piles'],
    lighting: 'torches_dim',
    floorTexture: 'wood_planks',
    wallTexture: 'stone_rough',
    ceilingTexture: 'wood_beams',
    
    ambientSound: 'hideout_ambient',
    combatMusic: 'bandit_battle',
    bossMusic: 'warlord_theme',
    
    completionRewards: {
      remnants: 1500,
      xp: 1200,
      firstClearBonus: {
        remnants: 800,
        items: [{ id: 'hideout_trophy', name: 'Bandit Slayer Trophy', type: 'trophy' }],
      },
    },
    
    specialMechanics: ['alarm_system', 'locked_doors', 'hostage_rescue'],
  },

  // ========== CORRUPTED TEMPLE ==========
  CORRUPTED_TEMPLE: {
    id: 'corrupted_temple',
    name: 'Corrupted Temple',
    shortName: 'Temple',
    description: 'Once a holy sanctuary, now twisted by dark magic. Corrupted priests perform dark rituals within.',
    
    biome: 'corrupted',
    theme: 'temple',
    ambientColor: 0x1a0a20,
    fogColor: 0x100818,
    fogDensity: 0.06,
    
    roomCount: { min: 8, max: 11 },
    corridorChance: 0.35,
    branchingFactor: 0.35,
    deadEndChance: 0.2,
    
    roomDistribution: {
      [ROOM_TYPE.COMBAT]: 3,
      [ROOM_TYPE.PUZZLE]: 3,    // Complex temple puzzles
      [ROOM_TYPE.TREASURE]: 1,
      [ROOM_TYPE.REST]: 1,
      [ROOM_TYPE.MINIBOSS]: 1,
    },
    
    recommendedLevel: 20,
    enemyLevelRange: { min: 18, max: 28 },
    
    enemies: DUNGEON_ENEMY_SETS.temple,
    enemiesPerRoom: { min: 2, max: 4 },
    eliteChance: 0.2,           // More elites - endgame dungeon
    
    trapTypes: ['fire', 'poison', 'spike'],
    trapsPerRoom: { min: 0, max: 2 },
    trapChance: 0.3,
    
    puzzleTypes: ['symbol_match', 'crystal_alignment', 'torch_lighting', 'pressure_plates'],
    
    miniboss: {
      id: 'high_priest',
      name: 'High Priest Malachar',
      health: 1200,
      damage: 60,
      abilities: ['shadow_bolt', 'dark_heal', 'summon_void', 'corruption_wave'],
    },
    
    boss: {
      id: 'avatar_of_corruption',
      name: 'Avatar of Corruption',
      title: 'The Void Made Flesh',
      health: 3000,
      damage: 75,
      phases: 4,
      abilities: ['void_beam', 'corruption_zone', 'dark_tendrils', 'phase_shift', 'reality_tear'],
      loot: {
        guaranteed: [
          { id: 'avatar_soul', name: "Avatar's Soul", type: 'boss_soul' },
          { id: 'void_heart', name: 'Heart of the Void', type: 'equipment', rarity: 'legendary' },
        ],
        rare: [
          { id: 'corruption_blade', name: 'Blade of Corruption', type: 'weapon', rarity: 'legendary', chance: 0.15 },
          { id: 'void_robes', name: 'Robes of the Void', type: 'equipment', rarity: 'legendary', chance: 0.15 },
        ],
      },
    },
    
    lootPool: DUNGEON_LOOT_POOLS.temple,
    lootTier: 4,                // Highest tier loot
    chestCount: { min: 3, max: 5 },
    
    props: ['altars', 'statues', 'ritual_circles', 'corrupted_banners', 'void_cracks', 'floating_debris'],
    lighting: 'magic_glow',     // Purple/void magical lighting
    floorTexture: 'marble_corrupted',
    wallTexture: 'temple_stone_dark',
    ceilingTexture: 'vaulted_corrupted',
    
    ambientSound: 'temple_ambient',
    combatMusic: 'corruption_battle',
    bossMusic: 'avatar_theme',
    
    completionRewards: {
      remnants: 4000,
      xp: 3500,
      firstClearBonus: {
        remnants: 2500,
        items: [
          { id: 'temple_trophy', name: 'Corruption Vanquisher Trophy', type: 'trophy' },
          { id: 'void_blessing', name: 'Blessing of the Void', type: 'permanent_buff' },
        ],
      },
    },
    
    specialMechanics: ['corruption_spread', 'altar_rituals', 'void_portals', 'reality_distortion'],
  },
};

// ========== ROOM TEMPLATES ==========
// Templates define possible room layouts for the generator
export const ROOM_TEMPLATES = {
  // Combat room variations
  combat_basic: {
    type: ROOM_TYPE.COMBAT,
    size: ROOM_SIZE.MEDIUM,
    doorPositions: ['north', 'south'],
    propZones: ['corners', 'walls'],
    enemySpawns: ['center', 'sides'],
  },
  combat_pillars: {
    type: ROOM_TYPE.COMBAT,
    size: ROOM_SIZE.LARGE,
    doorPositions: ['north', 'south', 'east'],
    features: ['pillars'],
    propZones: ['between_pillars'],
    enemySpawns: ['behind_pillars', 'center'],
  },
  combat_arena: {
    type: ROOM_TYPE.COMBAT,
    size: ROOM_SIZE.LARGE,
    doorPositions: ['south'],
    features: ['raised_platform', 'pit'],
    propZones: ['edges'],
    enemySpawns: ['platform', 'pit'],
  },
  
  // Puzzle room variations
  puzzle_shrine: {
    type: ROOM_TYPE.PUZZLE,
    size: ROOM_SIZE.MEDIUM,
    doorPositions: ['south'],
    features: ['central_altar', 'pedestals'],
    propZones: ['altar_area'],
    interactables: ['pedestals', 'altar'],
  },
  puzzle_gallery: {
    type: ROOM_TYPE.PUZZLE,
    size: ROOM_SIZE.LARGE,
    doorPositions: ['north', 'south'],
    features: ['wall_panels', 'floor_tiles'],
    propZones: ['walls'],
    interactables: ['panels', 'tiles'],
  },
  
  // Treasure room variations
  treasure_vault: {
    type: ROOM_TYPE.TREASURE,
    size: ROOM_SIZE.SMALL,
    doorPositions: ['south'],
    features: ['treasure_pile', 'trapped_floor'],
    propZones: ['around_treasure'],
    chestCount: { min: 2, max: 4 },
  },
  treasure_hidden: {
    type: ROOM_TYPE.TREASURE,
    size: ROOM_SIZE.SMALL,
    doorPositions: ['secret'],    // Hidden door
    features: ['single_chest'],
    propZones: ['corners'],
    chestCount: { min: 1, max: 1 },
    isSecret: true,
  },
  
  // Rest room
  rest_checkpoint: {
    type: ROOM_TYPE.REST,
    size: ROOM_SIZE.SMALL,
    doorPositions: ['north', 'south'],
    features: ['bonfire', 'bench'],
    propZones: ['around_bonfire'],
    healsPlayer: true,
    savesProgress: true,
  },
  
  // Boss room
  boss_chamber: {
    type: ROOM_TYPE.BOSS,
    size: ROOM_SIZE.BOSS,
    doorPositions: ['south'],    // Entrance only
    features: ['boss_altar', 'pillars', 'exit_portal'],
    propZones: ['edges', 'altar_area'],
    bossSpawn: 'center_north',
  },
  
  // Corridor variations
  corridor_straight: {
    type: ROOM_TYPE.CORRIDOR,
    size: ROOM_SIZE.CORRIDOR,
    doorPositions: ['north', 'south'],
    propZones: ['walls'],
    trapPositions: ['center'],
  },
  corridor_bend: {
    type: ROOM_TYPE.CORRIDOR,
    size: { width: 4, height: 3.5, depth: 4 },
    doorPositions: ['north', 'east'],
    propZones: ['corner'],
  },
};

// ========== HELPER FUNCTIONS ==========

/**
 * Get dungeon data by ID
 */
export function getDungeonById(dungeonId) {
  const upperKey = dungeonId.toUpperCase().replace(/-/g, '_');
  if (DUNGEONS[upperKey]) {
    return DUNGEONS[upperKey];
  }
  // Try matching by id field
  for (const key of Object.keys(DUNGEONS)) {
    if (DUNGEONS[key].id === dungeonId) {
      return DUNGEONS[key];
    }
  }
  return null;
}

/**
 * Get all dungeon info (for world map/UI)
 */
export function listAllDungeons() {
  return Object.values(DUNGEONS).map(d => ({
    id: d.id,
    name: d.name,
    shortName: d.shortName,
    description: d.description,
    recommendedLevel: d.recommendedLevel,
    biome: d.biome,
    roomCount: d.roomCount,
    lootTier: d.lootTier,
    bossName: d.boss.name,
  }));
}

/**
 * Get dungeon for a cave entrance based on position/seed
 */
export function getDungeonForCave(caveX, caveZ, seed = 12345) {
  // Use cave position to deterministically pick a dungeon
  const dungeonList = Object.values(DUNGEONS);
  const hash = Math.abs((caveX * 73856093 + caveZ * 19349663 + seed) % 1000000);
  const index = hash % dungeonList.length;
  return dungeonList[index];
}

/**
 * Get room count for dungeon instance
 */
export function getRoomCount(dungeonId, modifier = 'none') {
  const dungeon = getDungeonById(dungeonId);
  if (!dungeon) return 5;
  
  let count = dungeon.roomCount.min + 
    Math.floor(Math.random() * (dungeon.roomCount.max - dungeon.roomCount.min + 1));
  
  // Elite modifier adds rooms
  if (modifier === 'elite') {
    count += 2;
  }
  
  return count;
}

/**
 * Get enemy spawn configuration for a room
 */
export function getEnemySpawnConfig(dungeonId, roomType, modifier = 'none') {
  const dungeon = getDungeonById(dungeonId);
  if (!dungeon) return { enemies: [], count: 0 };
  
  const mod = DUNGEON_MODIFIER[modifier.toUpperCase()] || DUNGEON_MODIFIER.NONE;
  const countMult = mod.effects.enemyCountMult || 1;
  
  let count = dungeon.enemiesPerRoom.min + 
    Math.floor(Math.random() * (dungeon.enemiesPerRoom.max - dungeon.enemiesPerRoom.min + 1));
  count = Math.round(count * countMult);
  
  // Select enemy types based on room type
  const enemies = [];
  for (let i = 0; i < count; i++) {
    const roll = Math.random();
    let pool;
    if (roll < 0.6) {
      pool = dungeon.enemies.common;
    } else if (roll < 0.9) {
      pool = dungeon.enemies.uncommon;
    } else {
      pool = dungeon.enemies.rare;
    }
    const enemy = pool[Math.floor(Math.random() * pool.length)];
    const isElite = Math.random() < dungeon.eliteChance;
    enemies.push({ type: enemy, isElite });
  }
  
  return { enemies, count };
}

/**
 * Get trap configuration for a room
 */
export function getTrapConfig(dungeonId, roomType) {
  const dungeon = getDungeonById(dungeonId);
  if (!dungeon || roomType !== ROOM_TYPE.COMBAT) return [];
  
  if (Math.random() > dungeon.trapChance) return [];
  
  const count = dungeon.trapsPerRoom.min + 
    Math.floor(Math.random() * (dungeon.trapsPerRoom.max - dungeon.trapsPerRoom.min + 1));
  
  const traps = [];
  for (let i = 0; i < count; i++) {
    const trapTypeId = dungeon.trapTypes[Math.floor(Math.random() * dungeon.trapTypes.length)];
    const trapData = TRAP_TYPE[trapTypeId.toUpperCase()];
    if (trapData) {
      traps.push({ ...trapData });
    }
  }
  
  return traps;
}

/**
 * Get puzzle configuration for a puzzle room
 */
export function getPuzzleConfig(dungeonId) {
  const dungeon = getDungeonById(dungeonId);
  if (!dungeon) return null;
  
  const puzzleTypeId = dungeon.puzzleTypes[Math.floor(Math.random() * dungeon.puzzleTypes.length)];
  const puzzleData = PUZZLE_TYPE[puzzleTypeId.toUpperCase().replace(/-/g, '_')];
  
  if (!puzzleData) return null;
  
  const componentCount = puzzleData.componentCount.min + 
    Math.floor(Math.random() * (puzzleData.componentCount.max - puzzleData.componentCount.min + 1));
  
  return {
    ...puzzleData,
    componentCount,
    solution: generatePuzzleSolution(puzzleData.id, componentCount),
  };
}

/**
 * Generate a puzzle solution sequence
 */
function generatePuzzleSolution(puzzleType, componentCount) {
  const solution = [];
  
  switch (puzzleType) {
    case 'pressure_plates':
    case 'lever_sequence':
    case 'torch_lighting':
      // Sequence of indices
      for (let i = 0; i < componentCount; i++) {
        let next;
        do {
          next = Math.floor(Math.random() * componentCount);
        } while (solution.includes(next) && solution.length < componentCount);
        solution.push(next);
      }
      break;
      
    case 'crystal_alignment':
      // Rotation angles (0, 90, 180, 270)
      for (let i = 0; i < componentCount; i++) {
        solution.push(Math.floor(Math.random() * 4) * 90);
      }
      break;
      
    case 'symbol_match':
      // Symbol IDs to match
      const symbols = ['sun', 'moon', 'star', 'skull', 'eye', 'hand', 'flame', 'wave'];
      for (let i = 0; i < componentCount; i++) {
        solution.push(symbols[Math.floor(Math.random() * symbols.length)]);
      }
      break;
      
    default:
      // Generic sequence
      for (let i = 0; i < componentCount; i++) {
        solution.push(i);
      }
  }
  
  return solution;
}

/**
 * Get loot drop for dungeon chest
 */
export function generateChestLoot(dungeonId, chestType = 'normal', modifier = 'none') {
  const dungeon = getDungeonById(dungeonId);
  if (!dungeon) return { items: [], remnants: 0 };
  
  const mod = DUNGEON_MODIFIER[modifier.toUpperCase()] || DUNGEON_MODIFIER.NONE;
  const rarityBoost = mod.effects.lootRarityBoost || 0;
  
  const loot = { items: [], remnants: 50 + Math.floor(Math.random() * 100) };
  const pool = dungeon.lootPool;
  
  // Number of items based on chest type
  const itemCount = chestType === 'boss' ? 3 : chestType === 'treasure' ? 2 : 1;
  
  for (let i = 0; i < itemCount; i++) {
    const roll = Math.random() + (rarityBoost * 0.1);
    let itemPool;
    
    if (roll < 0.5) {
      itemPool = pool.common;
    } else if (roll < 0.85) {
      itemPool = pool.uncommon;
    } else {
      itemPool = pool.rare;
    }
    
    const item = itemPool[Math.floor(Math.random() * itemPool.length)];
    loot.items.push({ ...item, quantity: 1 });
  }
  
  // Chance for equipment
  if (Math.random() < 0.2 + (rarityBoost * 0.1)) {
    const equipId = pool.equipment[Math.floor(Math.random() * pool.equipment.length)];
    loot.items.push({ id: equipId, type: 'equipment', quantity: 1 });
  }
  
  return loot;
}

/**
 * Apply dungeon modifier effects to player/enemies
 */
export function getModifierEffects(modifierId) {
  const mod = DUNGEON_MODIFIER[modifierId.toUpperCase()];
  return mod ? mod.effects : {};
}

/**
 * Check if player meets requirements for dungeon modifier
 */
export function canAccessModifier(modifierId, playerInventory) {
  const mod = DUNGEON_MODIFIER[modifierId.toUpperCase()];
  if (!mod || !mod.requiredItem) return true;
  
  return playerInventory.some(item => item.id === mod.requiredItem);
}

/**
 * Get room template for dungeon type
 */
export function getRandomRoomTemplate(roomType, dungeonTheme) {
  const templates = Object.values(ROOM_TEMPLATES).filter(t => t.type === roomType);
  if (templates.length === 0) return null;
  return templates[Math.floor(Math.random() * templates.length)];
}
