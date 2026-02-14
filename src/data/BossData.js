/**
 * BossData.js - World Boss Definitions
 * Phase 21: Boss Encounters
 * 
 * Defines world bosses with unique mechanics, phases, abilities, and loot tables.
 * Integrates with BossAI.js, BossSpawner.js, and LootManager.js
 */

// ========== BOSS ABILITY TYPES ==========
export const ABILITY_TYPE = {
  MELEE: 'melee',
  RANGED: 'ranged',
  AOE: 'aoe',
  SUMMON: 'summon',
  BUFF: 'buff',
  SPECIAL: 'special',
};

// ========== BOSS DAMAGE TYPES ==========
export const DAMAGE_TYPE = {
  PHYSICAL: 'physical',
  FIRE: 'fire',
  ICE: 'ice',
  LIGHTNING: 'lightning',
  SHADOW: 'shadow',
  NATURE: 'nature',
  HOLY: 'holy',
};

// ========== BOSS ABILITIES ==========
// Reusable ability definitions for bosses
export const BOSS_ABILITIES = {
  // Ancient Golem abilities
  GROUND_POUND: {
    id: 'ground_pound',
    name: 'Ground Pound',
    type: ABILITY_TYPE.AOE,
    damageType: DAMAGE_TYPE.PHYSICAL,
    damage: 60,
    postureDamage: 40,
    range: 8,
    windupTime: 1.8,
    recoveryTime: 2.0,
    cooldown: 8,
    description: 'Slams fists into ground, creating shockwave',
    telegraphType: 'circle',
    telegraphColor: 0xaa6622,
  },
  BOULDER_THROW: {
    id: 'boulder_throw',
    name: 'Boulder Throw',
    type: ABILITY_TYPE.RANGED,
    damageType: DAMAGE_TYPE.PHYSICAL,
    damage: 45,
    postureDamage: 50,
    range: 20,
    windupTime: 1.5,
    recoveryTime: 1.0,
    cooldown: 6,
    description: 'Rips boulder from ground and hurls at player',
    projectileSpeed: 12,
  },
  STOMP: {
    id: 'stomp',
    name: 'Earthshatter Stomp',
    type: ABILITY_TYPE.AOE,
    damageType: DAMAGE_TYPE.PHYSICAL,
    damage: 35,
    postureDamage: 60,
    range: 5,
    windupTime: 0.8,
    recoveryTime: 0.6,
    cooldown: 4,
    description: 'Rapid stomp that staggers nearby enemies',
    telegraphType: 'circle',
    telegraphColor: 0x886644,
  },
  CRYSTAL_ARMOR: {
    id: 'crystal_armor',
    name: 'Crystal Armor',
    type: ABILITY_TYPE.BUFF,
    damageType: null,
    damage: 0,
    duration: 15,
    cooldown: 30,
    description: 'Encases in crystal, reducing damage taken by 50%',
    buffEffect: { damageReduction: 0.5 },
  },

  // Shadow Wraith abilities
  SHADOW_BOLT: {
    id: 'shadow_bolt',
    name: 'Shadow Bolt',
    type: ABILITY_TYPE.RANGED,
    damageType: DAMAGE_TYPE.SHADOW,
    damage: 40,
    postureDamage: 20,
    range: 25,
    windupTime: 0.6,
    recoveryTime: 0.4,
    cooldown: 2,
    description: 'Fires a bolt of dark energy',
    projectileSpeed: 18,
  },
  SHADOW_DASH: {
    id: 'shadow_dash',
    name: 'Shadow Dash',
    type: ABILITY_TYPE.SPECIAL,
    damageType: DAMAGE_TYPE.SHADOW,
    damage: 30,
    postureDamage: 15,
    range: 12,
    windupTime: 0.3,
    recoveryTime: 0.5,
    cooldown: 5,
    description: 'Dashes through shadows, damaging anything in path',
  },
  VOID_ERUPTION: {
    id: 'void_eruption',
    name: 'Void Eruption',
    type: ABILITY_TYPE.AOE,
    damageType: DAMAGE_TYPE.SHADOW,
    damage: 55,
    postureDamage: 35,
    range: 10,
    windupTime: 2.0,
    recoveryTime: 1.5,
    cooldown: 12,
    description: 'Creates expanding ring of shadow energy',
    telegraphType: 'ring',
    telegraphColor: 0x330066,
  },
  TELEPORT: {
    id: 'teleport',
    name: 'Shadow Step',
    type: ABILITY_TYPE.SPECIAL,
    damageType: null,
    damage: 0,
    range: 15,
    windupTime: 0.5,
    recoveryTime: 0.3,
    cooldown: 8,
    description: 'Teleports to a random location around player',
  },
  SOUL_DRAIN: {
    id: 'soul_drain',
    name: 'Soul Drain',
    type: ABILITY_TYPE.SPECIAL,
    damageType: DAMAGE_TYPE.SHADOW,
    damage: 25,
    range: 6,
    windupTime: 1.0,
    recoveryTime: 1.0,
    cooldown: 15,
    description: 'Drains life from player, healing self',
    healPercent: 0.5, // Heals 50% of damage dealt
  },

  // Forest Guardian abilities
  VINE_WHIP: {
    id: 'vine_whip',
    name: 'Vine Whip',
    type: ABILITY_TYPE.MELEE,
    damageType: DAMAGE_TYPE.NATURE,
    damage: 35,
    postureDamage: 25,
    range: 6,
    windupTime: 0.5,
    recoveryTime: 0.4,
    cooldown: 2,
    description: 'Strikes with thorny vine extensions',
    hitCount: 2,
  },
  ROOT_PRISON: {
    id: 'root_prison',
    name: 'Root Prison',
    type: ABILITY_TYPE.SPECIAL,
    damageType: DAMAGE_TYPE.NATURE,
    damage: 20,
    postureDamage: 10,
    range: 15,
    windupTime: 1.2,
    recoveryTime: 0.8,
    cooldown: 10,
    description: 'Roots erupt from ground, trapping player',
    rootDuration: 2.5,
    telegraphType: 'target',
    telegraphColor: 0x228822,
  },
  SUMMON_TREANTS: {
    id: 'summon_treants',
    name: 'Summon Treants',
    type: ABILITY_TYPE.SUMMON,
    damageType: null,
    damage: 0,
    windupTime: 2.0,
    recoveryTime: 1.5,
    cooldown: 25,
    description: 'Summons 2-3 treant minions to fight',
    summonCount: { min: 2, max: 3 },
    summonType: 'treant',
  },
  NATURE_WRATH: {
    id: 'nature_wrath',
    name: "Nature's Wrath",
    type: ABILITY_TYPE.AOE,
    damageType: DAMAGE_TYPE.NATURE,
    damage: 70,
    postureDamage: 45,
    range: 12,
    windupTime: 2.5,
    recoveryTime: 2.0,
    cooldown: 20,
    description: 'Channels nature energy into devastating AOE blast',
    telegraphType: 'circle',
    telegraphColor: 0x44aa44,
  },
  REGENERATION: {
    id: 'regeneration',
    name: 'Natural Regeneration',
    type: ABILITY_TYPE.BUFF,
    damageType: null,
    damage: 0,
    duration: 10,
    cooldown: 30,
    description: 'Rapidly regenerates health for a short time',
    buffEffect: { healPerSecond: 25 },
  },

  // Corrupted Knight abilities
  SWORD_COMBO: {
    id: 'sword_combo',
    name: 'Corrupted Combo',
    type: ABILITY_TYPE.MELEE,
    damageType: DAMAGE_TYPE.PHYSICAL,
    damage: 30,
    postureDamage: 20,
    range: 3.5,
    windupTime: 0.4,
    recoveryTime: 0.3,
    cooldown: 0,
    description: '3-hit sword combo with varied timing',
    hitCount: 3,
    comboDelays: [0.3, 0.4, 0.6], // Delay between hits
  },
  CHARGE_ATTACK: {
    id: 'charge_attack',
    name: 'Corrupted Charge',
    type: ABILITY_TYPE.SPECIAL,
    damageType: DAMAGE_TYPE.PHYSICAL,
    damage: 50,
    postureDamage: 60,
    range: 15,
    windupTime: 1.0,
    recoveryTime: 1.5,
    cooldown: 8,
    description: 'Charges at player with shield raised',
    chargeSpeed: 20,
  },
  DARK_SLAM: {
    id: 'dark_slam',
    name: 'Dark Slam',
    type: ABILITY_TYPE.AOE,
    damageType: DAMAGE_TYPE.SHADOW,
    damage: 55,
    postureDamage: 40,
    range: 6,
    windupTime: 1.5,
    recoveryTime: 1.2,
    cooldown: 10,
    description: 'Slams sword creating dark shockwave',
    telegraphType: 'cone',
    telegraphColor: 0x550055,
  },
  SHIELD_BASH: {
    id: 'shield_bash',
    name: 'Shield Bash',
    type: ABILITY_TYPE.MELEE,
    damageType: DAMAGE_TYPE.PHYSICAL,
    damage: 25,
    postureDamage: 80,
    range: 2.5,
    windupTime: 0.3,
    recoveryTime: 0.5,
    cooldown: 6,
    description: 'Bashes with shield, massive posture damage',
    stunDuration: 1.0,
  },
  ENRAGE: {
    id: 'enrage',
    name: 'Dark Enrage',
    type: ABILITY_TYPE.BUFF,
    damageType: null,
    damage: 0,
    duration: 20,
    cooldown: 45,
    description: 'Enters enraged state, +50% damage and speed',
    buffEffect: { damageBoost: 1.5, speedBoost: 1.5 },
  },
};

// ========== PHASE CONFIGURATIONS ==========
// Defines what changes at each phase
const PHASE_MODIFIERS = {
  // Generic modifiers applied to boss stats per phase
  AGGRESSIVE: {
    moveSpeedMult: 1.3,
    attackCooldownMult: 0.7,
    damageMult: 1.2,
  },
  DESPERATE: {
    moveSpeedMult: 1.5,
    attackCooldownMult: 0.5,
    damageMult: 1.4,
    canEnrage: true,
  },
  DEFENSIVE: {
    moveSpeedMult: 0.8,
    attackCooldownMult: 1.2,
    damageReduction: 0.3,
  },
};

// ========== WORLD BOSS DEFINITIONS ==========
export const WORLD_BOSSES = {
  // ========== ANCIENT GOLEM ==========
  ANCIENT_GOLEM: {
    id: 'ancient_golem',
    name: 'Gormund',
    title: 'The Ancient Golem',
    fullTitle: 'Gormund, The Ancient Golem',
    description: 'A massive stone construct awakened from centuries of slumber. Its crystalline core pulses with ancient magic.',
    
    // Base stats (much higher than regular enemies: Hollow Soldier has 50 HP, 15 dmg)
    stats: {
      maxHealth: 1500,
      health: 1500,
      maxPosture: 200,
      posture: 0,
      damage: 45,
      defense: 30,
      moveSpeed: 2.0,
      attackRange: 4.0,
      detectionRange: 18,
    },
    
    // Boss characteristics
    scale: 3.5,           // 3.5x normal enemy size
    poise: 100,           // Resistance to stagger
    weaknesses: [DAMAGE_TYPE.LIGHTNING, DAMAGE_TYPE.NATURE],
    resistances: [DAMAGE_TYPE.PHYSICAL, DAMAGE_TYPE.FIRE],
    immunities: [DAMAGE_TYPE.SHADOW],
    
    // Visual settings
    bodyColor: 0x5a5a6a,
    accentColor: 0x4488ff,
    eyeColor: 0x44aaff,
    glowColor: 0x4488ff,
    auraColor: 0x223366,
    modelType: 'golem',   // References BossRenderer model builder
    
    // Phase system - triggers at HP thresholds
    phases: [
      {
        id: 1,
        name: 'Awakened',
        threshold: 1.0,    // 100% HP - starts here
        abilities: ['GROUND_POUND', 'STOMP'],
        attackPattern: 'methodical',
        modifiers: {},     // No modifiers at phase 1
        music: 'boss_phase1',
      },
      {
        id: 2,
        name: 'Enraged',
        threshold: 0.6,    // 60% HP
        abilities: ['GROUND_POUND', 'STOMP', 'BOULDER_THROW'],
        attackPattern: 'aggressive',
        modifiers: PHASE_MODIFIERS.AGGRESSIVE,
        newAbility: 'BOULDER_THROW',
        visualChange: { glowIntensity: 1.5, colorShift: 0xff6644 },
        transitionDuration: 3.0,
        transitionRoar: true,
        music: 'boss_phase2',
      },
      {
        id: 3,
        name: 'Crystalline Fury',
        threshold: 0.25,   // 25% HP
        abilities: ['GROUND_POUND', 'STOMP', 'BOULDER_THROW', 'CRYSTAL_ARMOR'],
        attackPattern: 'desperate',
        modifiers: PHASE_MODIFIERS.DESPERATE,
        newAbility: 'CRYSTAL_ARMOR',
        visualChange: { glowIntensity: 2.5, colorShift: 0xff2200, sizeScale: 1.1 },
        transitionDuration: 4.0,
        transitionRoar: true,
        music: 'boss_phase3',
      },
    ],
    
    // Loot table
    lootTable: {
      guaranteed: [
        { id: 'golem_soul', name: "Gormund's Soul", type: 'boss_soul', quantity: 1 },
        { id: 'ancient_core', name: 'Ancient Core', type: 'material', quantity: 1 },
      ],
      common: [
        { id: 'stone_chunk', name: 'Enchanted Stone', type: 'material', quantity: { min: 3, max: 6 }, chance: 1.0 },
        { id: 'crystal_shard', name: 'Crystal Shard', type: 'material', quantity: { min: 2, max: 4 }, chance: 0.8 },
      ],
      rare: [
        { id: 'golem_fist', name: "Gormund's Fist", type: 'weapon', rarity: 'legendary', chance: 0.15 },
        { id: 'crystal_armor', name: 'Crystalline Plate', type: 'armor', rarity: 'epic', chance: 0.25 },
      ],
      remnants: 3000,      // XP/currency drop
      firstKillBonus: {
        remnants: 2000,
        items: [{ id: 'golem_trophy', name: "Golem Slayer's Trophy", type: 'trophy' }],
      },
    },
    
    // Spawn location (coordinates in world)
    spawnLocation: {
      x: 150,
      z: 200,
      y: 0,               // Ground level
      areaName: 'Stone Circle Ruins',
      landmarkType: 'ancient_ruins',
    },
    
    // Arena configuration
    arena: {
      radius: 25,
      boundaryType: 'stone_pillars',
      fogDensity: 0.02,
      ambientColor: 0x334455,
      props: ['broken_pillars', 'stone_debris', 'crystal_formations'],
    },
    
    respawnTime: 600,      // 10 minutes in seconds
  },

  // ========== SHADOW WRAITH ==========
  SHADOW_WRAITH: {
    id: 'shadow_wraith',
    name: 'Vexaris',
    title: 'The Shadow Wraith',
    fullTitle: 'Vexaris, The Shadow Wraith',
    description: 'A being of pure darkness, this wraith moves between shadows with terrifying speed. Its touch drains the very life from its victims.',
    
    stats: {
      maxHealth: 1000,
      health: 1000,
      maxPosture: 120,
      posture: 0,
      damage: 40,
      defense: 10,         // Low defense - glass cannon
      moveSpeed: 5.0,      // Very fast
      attackRange: 3.0,
      detectionRange: 25,
    },
    
    scale: 2.5,
    poise: 40,             // Easy to stagger but teleports
    weaknesses: [DAMAGE_TYPE.HOLY, DAMAGE_TYPE.FIRE],
    resistances: [DAMAGE_TYPE.SHADOW, DAMAGE_TYPE.ICE],
    immunities: [],
    
    bodyColor: 0x1a1a2a,
    accentColor: 0x6622aa,
    eyeColor: 0xaa22ff,
    glowColor: 0x6622aa,
    auraColor: 0x220033,
    modelType: 'wraith',
    
    phases: [
      {
        id: 1,
        name: 'Stalking',
        threshold: 1.0,
        abilities: ['SHADOW_BOLT', 'SHADOW_DASH', 'TELEPORT'],
        attackPattern: 'hit_and_run',
        modifiers: {},
        music: 'boss_wraith_phase1',
      },
      {
        id: 2,
        name: 'Unleashed',
        threshold: 0.5,
        abilities: ['SHADOW_BOLT', 'SHADOW_DASH', 'TELEPORT', 'VOID_ERUPTION'],
        attackPattern: 'aggressive',
        modifiers: { ...PHASE_MODIFIERS.AGGRESSIVE, teleportFrequency: 2.0 },
        newAbility: 'VOID_ERUPTION',
        visualChange: { opacity: 0.7, trailEffect: true, colorShift: 0xaa44ff },
        transitionDuration: 2.5,
        transitionRoar: false,
        transitionEffect: 'shadow_explosion',
        music: 'boss_wraith_phase2',
      },
      {
        id: 3,
        name: 'Void Form',
        threshold: 0.2,
        abilities: ['SHADOW_BOLT', 'SHADOW_DASH', 'TELEPORT', 'VOID_ERUPTION', 'SOUL_DRAIN'],
        attackPattern: 'desperate',
        modifiers: { ...PHASE_MODIFIERS.DESPERATE, invulnerableDuringTeleport: true },
        newAbility: 'SOUL_DRAIN',
        visualChange: { opacity: 0.4, sizeScale: 1.3, colorShift: 0xff00ff },
        transitionDuration: 3.0,
        transitionEffect: 'void_collapse',
        music: 'boss_wraith_phase3',
      },
    ],
    
    lootTable: {
      guaranteed: [
        { id: 'wraith_soul', name: "Vexaris's Soul", type: 'boss_soul', quantity: 1 },
        { id: 'shadow_essence', name: 'Shadow Essence', type: 'material', quantity: 1 },
      ],
      common: [
        { id: 'dark_fragment', name: 'Dark Fragment', type: 'material', quantity: { min: 4, max: 8 }, chance: 1.0 },
        { id: 'void_dust', name: 'Void Dust', type: 'material', quantity: { min: 2, max: 5 }, chance: 0.9 },
      ],
      rare: [
        { id: 'shadow_blade', name: "Vexaris's Shadow Blade", type: 'weapon', rarity: 'legendary', chance: 0.15 },
        { id: 'wraith_cloak', name: 'Cloak of Shadows', type: 'armor', rarity: 'epic', chance: 0.25 },
      ],
      remnants: 2500,
      firstKillBonus: {
        remnants: 1500,
        items: [{ id: 'wraith_trophy', name: "Wraith Hunter's Trophy", type: 'trophy' }],
      },
    },
    
    spawnLocation: {
      x: -180,
      z: 280,
      y: 0,
      areaName: 'The Void Hollow',
      landmarkType: 'dark_cave',
    },
    
    arena: {
      radius: 30,
      boundaryType: 'shadow_barrier',
      fogDensity: 0.05,
      ambientColor: 0x110022,
      props: ['shadow_pillars', 'void_cracks', 'floating_debris'],
      specialMechanic: 'darkness_zones', // Areas of shadow that heal the boss
    },
    
    respawnTime: 480,      // 8 minutes
  },

  // ========== FOREST GUARDIAN ==========
  FOREST_GUARDIAN: {
    id: 'forest_guardian',
    name: 'Thornwood',
    title: 'The Forest Guardian',
    fullTitle: 'Thornwood, Guardian of the Ancient Grove',
    description: 'A towering treant that has protected this forest for millennia. Its bark is harder than iron, and it commands the very plants around it.',
    
    stats: {
      maxHealth: 2000,     // Highest HP - tanky boss
      health: 2000,
      maxPosture: 250,
      posture: 0,
      damage: 38,
      defense: 35,         // High defense
      moveSpeed: 1.5,      // Slow
      attackRange: 6.0,    // Long reach with vines
      detectionRange: 20,
    },
    
    scale: 4.0,            // Largest boss
    poise: 150,
    weaknesses: [DAMAGE_TYPE.FIRE],
    resistances: [DAMAGE_TYPE.NATURE, DAMAGE_TYPE.PHYSICAL, DAMAGE_TYPE.ICE],
    immunities: [],
    
    bodyColor: 0x3a4a2a,
    accentColor: 0x66aa44,
    eyeColor: 0x88ff44,
    glowColor: 0x44aa22,
    auraColor: 0x224411,
    modelType: 'treant',
    
    phases: [
      {
        id: 1,
        name: 'Rooted',
        threshold: 1.0,
        abilities: ['VINE_WHIP', 'ROOT_PRISON'],
        attackPattern: 'defensive',
        modifiers: PHASE_MODIFIERS.DEFENSIVE,
        music: 'boss_guardian_phase1',
      },
      {
        id: 2,
        name: 'Awakened Grove',
        threshold: 0.65,
        abilities: ['VINE_WHIP', 'ROOT_PRISON', 'SUMMON_TREANTS'],
        attackPattern: 'summoner',
        modifiers: {},
        newAbility: 'SUMMON_TREANTS',
        visualChange: { leafParticles: true, glowIntensity: 1.3 },
        transitionDuration: 3.5,
        transitionRoar: true,
        music: 'boss_guardian_phase2',
      },
      {
        id: 3,
        name: "Nature's Wrath",
        threshold: 0.3,
        abilities: ['VINE_WHIP', 'ROOT_PRISON', 'SUMMON_TREANTS', 'NATURE_WRATH', 'REGENERATION'],
        attackPattern: 'aggressive',
        modifiers: { ...PHASE_MODIFIERS.AGGRESSIVE, summonOnDamage: true },
        newAbility: 'NATURE_WRATH',
        visualChange: { leafParticles: true, glowIntensity: 2.0, colorShift: 0xff8844, thornsVisible: true },
        transitionDuration: 4.0,
        transitionRoar: true,
        music: 'boss_guardian_phase3',
      },
    ],
    
    lootTable: {
      guaranteed: [
        { id: 'guardian_soul', name: "Thornwood's Soul", type: 'boss_soul', quantity: 1 },
        { id: 'heartwood', name: 'Ancient Heartwood', type: 'material', quantity: 1 },
      ],
      common: [
        { id: 'enchanted_bark', name: 'Enchanted Bark', type: 'material', quantity: { min: 4, max: 8 }, chance: 1.0 },
        { id: 'verdant_essence', name: 'Verdant Essence', type: 'material', quantity: { min: 2, max: 5 }, chance: 0.9 },
        { id: 'thornvine', name: 'Thornvine', type: 'material', quantity: { min: 3, max: 6 }, chance: 0.85 },
      ],
      rare: [
        { id: 'guardian_staff', name: "Thornwood's Staff", type: 'weapon', rarity: 'legendary', chance: 0.15 },
        { id: 'bark_armor', name: 'Ironbark Armor', type: 'armor', rarity: 'epic', chance: 0.25 },
        { id: 'ring_of_nature', name: 'Ring of the Grove', type: 'accessory', rarity: 'epic', chance: 0.2 },
      ],
      remnants: 3500,
      firstKillBonus: {
        remnants: 2500,
        items: [{ id: 'guardian_trophy', name: "Grove Protector's Trophy", type: 'trophy' }],
      },
    },
    
    spawnLocation: {
      x: 80,
      z: -220,
      y: 0,
      areaName: 'The Ancient Grove',
      landmarkType: 'sacred_grove',
    },
    
    arena: {
      radius: 35,
      boundaryType: 'thick_vegetation',
      fogDensity: 0.01,
      ambientColor: 0x446633,
      props: ['giant_trees', 'glowing_mushrooms', 'moss_covered_stones'],
      specialMechanic: 'healing_zones', // Pockets of nature that heal the boss
    },
    
    respawnTime: 720,      // 12 minutes
  },

  // ========== CORRUPTED KNIGHT ==========
  CORRUPTED_KNIGHT: {
    id: 'corrupted_knight',
    name: 'Sir Aldric',
    title: 'The Corrupted Knight',
    fullTitle: 'Sir Aldric, The Fallen Paladin',
    description: 'Once a noble defender of the realm, this knight fell to dark corruption. His skills remain formidable, twisted now by shadow magic.',
    
    stats: {
      maxHealth: 1200,
      health: 1200,
      maxPosture: 180,
      posture: 0,
      damage: 50,          // High damage
      defense: 25,
      moveSpeed: 3.5,
      attackRange: 3.5,
      detectionRange: 16,
    },
    
    scale: 2.0,            // Human-sized but imposing
    poise: 80,
    weaknesses: [DAMAGE_TYPE.HOLY],
    resistances: [DAMAGE_TYPE.PHYSICAL, DAMAGE_TYPE.SHADOW],
    immunities: [],
    
    bodyColor: 0x2a2a35,
    accentColor: 0x880044,
    eyeColor: 0xff2244,
    glowColor: 0x880044,
    auraColor: 0x330022,
    modelType: 'knight',
    
    phases: [
      {
        id: 1,
        name: 'Disciplined',
        threshold: 1.0,
        abilities: ['SWORD_COMBO', 'SHIELD_BASH'],
        attackPattern: 'tactical',
        modifiers: {},
        music: 'boss_knight_phase1',
      },
      {
        id: 2,
        name: 'Aggressive',
        threshold: 0.6,
        abilities: ['SWORD_COMBO', 'SHIELD_BASH', 'CHARGE_ATTACK'],
        attackPattern: 'aggressive',
        modifiers: PHASE_MODIFIERS.AGGRESSIVE,
        newAbility: 'CHARGE_ATTACK',
        visualChange: { corruptionAura: true, eyeGlow: 1.5 },
        transitionDuration: 2.5,
        transitionRoar: true,
        music: 'boss_knight_phase2',
      },
      {
        id: 3,
        name: 'Corrupted',
        threshold: 0.3,
        abilities: ['SWORD_COMBO', 'SHIELD_BASH', 'CHARGE_ATTACK', 'DARK_SLAM', 'ENRAGE'],
        attackPattern: 'desperate',
        modifiers: { ...PHASE_MODIFIERS.DESPERATE, shieldDisabled: true },
        newAbility: 'DARK_SLAM',
        visualChange: { corruptionAura: true, eyeGlow: 2.5, armorCracked: true, colorShift: 0xff0044 },
        transitionDuration: 3.0,
        transitionRoar: true,
        transitionEffect: 'corruption_burst',
        music: 'boss_knight_phase3',
      },
    ],
    
    lootTable: {
      guaranteed: [
        { id: 'knight_soul', name: "Sir Aldric's Soul", type: 'boss_soul', quantity: 1 },
        { id: 'corrupted_sigil', name: 'Corrupted Sigil', type: 'material', quantity: 1 },
      ],
      common: [
        { id: 'dark_metal', name: 'Dark Metal Shard', type: 'material', quantity: { min: 3, max: 6 }, chance: 1.0 },
        { id: 'corrupt_essence', name: 'Corrupt Essence', type: 'material', quantity: { min: 2, max: 4 }, chance: 0.9 },
      ],
      rare: [
        { id: 'aldric_sword', name: "Aldric's Corrupted Blade", type: 'weapon', rarity: 'legendary', chance: 0.15 },
        { id: 'fallen_shield', name: 'Shield of the Fallen', type: 'shield', rarity: 'epic', chance: 0.2 },
        { id: 'knight_armor', name: 'Corrupted Paladin Armor', type: 'armor', rarity: 'epic', chance: 0.25 },
      ],
      remnants: 2800,
      firstKillBonus: {
        remnants: 2000,
        items: [{ id: 'knight_trophy', name: "Knight Slayer's Trophy", type: 'trophy' }],
      },
    },
    
    spawnLocation: {
      x: -100,
      z: -150,
      y: 0,
      areaName: 'Ruined Chapel',
      landmarkType: 'ruined_church',
    },
    
    arena: {
      radius: 20,
      boundaryType: 'ruined_walls',
      fogDensity: 0.015,
      ambientColor: 0x332233,
      props: ['broken_altar', 'fallen_statues', 'corrupted_banners'],
      specialMechanic: 'corruption_zones', // Standing in corruption damages player
    },
    
    respawnTime: 540,      // 9 minutes
  },
};

// ========== BOSS SOULS - Special items for NPC exchange ==========
export const BOSS_SOULS = {
  golem_soul: {
    id: 'golem_soul',
    name: "Gormund's Soul",
    description: 'The crystalline essence of the Ancient Golem. Radiates ancient power.',
    bossId: 'ancient_golem',
    exchangeOptions: [
      { id: 'golem_fist_weapon', name: "Golem's Wrath", type: 'weapon', category: 'fist' },
      { id: 'stone_skin_spell', name: 'Stone Skin', type: 'spell' },
      { id: 'remnants', quantity: 5000 },
    ],
  },
  wraith_soul: {
    id: 'wraith_soul',
    name: "Vexaris's Soul",
    description: 'Dark energy swirls within this ephemeral essence.',
    bossId: 'shadow_wraith',
    exchangeOptions: [
      { id: 'shadow_blade_weapon', name: 'Shadow Blade', type: 'weapon', category: 'dagger' },
      { id: 'shadow_step_spell', name: 'Shadow Step', type: 'spell' },
      { id: 'remnants', quantity: 4500 },
    ],
  },
  guardian_soul: {
    id: 'guardian_soul',
    name: "Thornwood's Soul",
    description: 'Pulsing with the life force of the ancient forest.',
    bossId: 'forest_guardian',
    exchangeOptions: [
      { id: 'guardian_staff_weapon', name: "Nature's Warden", type: 'weapon', category: 'staff' },
      { id: 'entangle_spell', name: 'Entangle', type: 'spell' },
      { id: 'remnants', quantity: 6000 },
    ],
  },
  knight_soul: {
    id: 'knight_soul',
    name: "Sir Aldric's Soul",
    description: 'A tortured soul seeking redemption... or vengeance.',
    bossId: 'corrupted_knight',
    exchangeOptions: [
      { id: 'aldric_blade_weapon', name: "Paladin's Fall", type: 'weapon', category: 'greatsword' },
      { id: 'dark_aura_spell', name: 'Dark Aura', type: 'spell' },
      { id: 'remnants', quantity: 5500 },
    ],
  },
};

// ========== HELPER FUNCTIONS ==========

/**
 * Get boss data by ID
 */
export function getBossById(bossId) {
  const upperKey = bossId.toUpperCase();
  if (WORLD_BOSSES[upperKey]) {
    return WORLD_BOSSES[upperKey];
  }
  // Try matching by id field
  for (const key of Object.keys(WORLD_BOSSES)) {
    if (WORLD_BOSSES[key].id === bossId) {
      return WORLD_BOSSES[key];
    }
  }
  return null;
}

/**
 * Get all boss spawn locations for world placement
 */
export function getAllBossSpawnLocations() {
  return Object.values(WORLD_BOSSES).map(boss => ({
    bossId: boss.id,
    name: boss.name,
    title: boss.title,
    ...boss.spawnLocation,
    arena: boss.arena,
  }));
}

/**
 * Get boss phase by current health percentage
 */
export function getCurrentPhase(bossId, healthPercent) {
  const boss = getBossById(bossId);
  if (!boss) return null;
  
  // Find the phase with the highest threshold that's still >= healthPercent
  let currentPhase = boss.phases[0];
  for (const phase of boss.phases) {
    if (healthPercent <= phase.threshold) {
      currentPhase = phase;
    }
  }
  return currentPhase;
}

/**
 * Get abilities for a boss at their current phase
 */
export function getAbilitiesForPhase(bossId, phaseId) {
  const boss = getBossById(bossId);
  if (!boss) return [];
  
  const phase = boss.phases.find(p => p.id === phaseId);
  if (!phase) return [];
  
  return phase.abilities.map(abilityKey => BOSS_ABILITIES[abilityKey]).filter(Boolean);
}

/**
 * Get boss loot for drop generation
 */
export function generateBossLoot(bossId, isFirstKill = false) {
  const boss = getBossById(bossId);
  if (!boss) return { items: [], remnants: 0 };
  
  const loot = { items: [], remnants: boss.lootTable.remnants };
  
  // Add guaranteed drops
  loot.items.push(...boss.lootTable.guaranteed);
  
  // Roll common drops
  for (const item of boss.lootTable.common) {
    if (Math.random() < item.chance) {
      const quantity = typeof item.quantity === 'object'
        ? Math.floor(Math.random() * (item.quantity.max - item.quantity.min + 1)) + item.quantity.min
        : item.quantity;
      loot.items.push({ ...item, quantity });
    }
  }
  
  // Roll rare drops
  for (const item of boss.lootTable.rare) {
    if (Math.random() < item.chance) {
      loot.items.push({ ...item, quantity: 1 });
    }
  }
  
  // First kill bonus
  if (isFirstKill && boss.lootTable.firstKillBonus) {
    loot.remnants += boss.lootTable.firstKillBonus.remnants;
    loot.items.push(...boss.lootTable.firstKillBonus.items);
  }
  
  return loot;
}

/**
 * List all bosses (for UI/debug)
 */
export function listAllBosses() {
  return Object.values(WORLD_BOSSES).map(boss => ({
    id: boss.id,
    name: boss.name,
    title: boss.title,
    location: boss.spawnLocation.areaName,
    difficulty: boss.stats.maxHealth > 1500 ? 'Hard' : boss.stats.maxHealth > 1000 ? 'Medium' : 'Normal',
  }));
}
