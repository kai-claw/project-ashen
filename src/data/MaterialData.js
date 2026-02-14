/**
 * MaterialData.js - Crafting Material System
 * Phase 23: Crafting System
 * 
 * Defines all craftable materials: ores, herbs, monster drops, gems, misc.
 * Materials are gathered from nodes, enemy drops, chests, and shops.
 */

// ========== MATERIAL CATEGORIES ==========
export const MATERIAL_CATEGORY = {
  ORE: {
    id: 'ore',
    name: 'Ores',
    description: 'Metals and minerals for forging weapons and armor.',
    icon: '⛏️',
    color: 0x888888,
  },
  HERB: {
    id: 'herb',
    name: 'Herbs',
    description: 'Plants used in alchemy and potion brewing.',
    icon: '🌿',
    color: 0x44aa44,
  },
  MONSTER_DROP: {
    id: 'monster_drop',
    name: 'Monster Drops',
    description: 'Materials harvested from defeated creatures.',
    icon: '💀',
    color: 0xaa4444,
  },
  GEM: {
    id: 'gem',
    name: 'Gems',
    description: 'Precious stones used for enchanting and high-tier crafting.',
    icon: '💎',
    color: 0x44aaff,
  },
  MISC: {
    id: 'misc',
    name: 'Miscellaneous',
    description: 'Common crafting components and materials.',
    icon: '📦',
    color: 0xaaaa88,
  },
};

// ========== RARITY TIERS ==========
export const MATERIAL_RARITY = {
  COMMON: {
    id: 'common',
    name: 'Common',
    color: '#888888',
    hexColor: 0x888888,
    dropChance: 1.0,
    sellMultiplier: 1.0,
  },
  UNCOMMON: {
    id: 'uncommon',
    name: 'Uncommon',
    color: '#4ade80',
    hexColor: 0x4ade80,
    dropChance: 0.5,
    sellMultiplier: 2.0,
  },
  RARE: {
    id: 'rare',
    name: 'Rare',
    color: '#60a5fa',
    hexColor: 0x60a5fa,
    dropChance: 0.2,
    sellMultiplier: 5.0,
  },
  EPIC: {
    id: 'epic',
    name: 'Epic',
    color: '#c084fc',
    hexColor: 0xc084fc,
    dropChance: 0.08,
    sellMultiplier: 15.0,
  },
  LEGENDARY: {
    id: 'legendary',
    name: 'Legendary',
    color: '#f97316',
    hexColor: 0xf97316,
    dropChance: 0.02,
    sellMultiplier: 50.0,
  },
};

// ========== BIOME SOURCES ==========
export const BIOME_SOURCE = {
  ANY: 'any',
  FOREST: 'forest',
  MOUNTAIN: 'mountain',
  SWAMP: 'swamp',
  DESERT: 'desert',
  SNOW: 'snow',
  CAVE: 'cave',
  RUINS: 'ruins',
  VILLAGE: 'village',
};

// ========== MATERIAL DEFINITIONS ==========
export const MATERIALS = {
  // ==================== ORES ====================
  iron_ore: {
    id: 'iron_ore',
    name: 'Iron Ore',
    category: MATERIAL_CATEGORY.ORE,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Common metal ore. Foundation of most weapons and armor.',
    iconColor: 0x8b8b8b,
    sellValue: 5,
    stackLimit: 99,
    sources: ['gathering', 'chest'],
    biomes: [BIOME_SOURCE.MOUNTAIN, BIOME_SOURCE.CAVE],
    gatherYield: { min: 2, max: 4 },
  },
  copper_ore: {
    id: 'copper_ore',
    name: 'Copper Ore',
    category: MATERIAL_CATEGORY.ORE,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Soft metal, easy to work with. Used in basic crafting.',
    iconColor: 0xb87333,
    sellValue: 3,
    stackLimit: 99,
    sources: ['gathering', 'shop'],
    biomes: [BIOME_SOURCE.ANY],
    gatherYield: { min: 2, max: 5 },
  },
  gold_ore: {
    id: 'gold_ore',
    name: 'Gold Ore',
    category: MATERIAL_CATEGORY.ORE,
    rarity: MATERIAL_RARITY.UNCOMMON,
    description: 'Precious metal ore. Highly valuable but soft.',
    iconColor: 0xffd700,
    sellValue: 25,
    stackLimit: 50,
    sources: ['gathering', 'chest'],
    biomes: [BIOME_SOURCE.MOUNTAIN, BIOME_SOURCE.CAVE],
    gatherYield: { min: 1, max: 2 },
  },
  mythril_ore: {
    id: 'mythril_ore',
    name: 'Mythril Ore',
    category: MATERIAL_CATEGORY.ORE,
    rarity: MATERIAL_RARITY.RARE,
    description: 'Magical silver-blue ore. Light yet incredibly strong.',
    iconColor: 0x88ccff,
    sellValue: 75,
    stackLimit: 30,
    sources: ['gathering', 'boss'],
    biomes: [BIOME_SOURCE.CAVE, BIOME_SOURCE.RUINS],
    gatherYield: { min: 1, max: 2 },
  },
  darksteel_ore: {
    id: 'darksteel_ore',
    name: 'Darksteel Ore',
    category: MATERIAL_CATEGORY.ORE,
    rarity: MATERIAL_RARITY.EPIC,
    description: 'Corrupted metal from the deep. Forged in shadow.',
    iconColor: 0x2a1a3a,
    sellValue: 150,
    stackLimit: 20,
    sources: ['gathering', 'boss'],
    biomes: [BIOME_SOURCE.CAVE, BIOME_SOURCE.SWAMP],
    gatherYield: { min: 1, max: 1 },
  },
  titanium_ore: {
    id: 'titanium_ore',
    name: 'Titanium Ore',
    category: MATERIAL_CATEGORY.ORE,
    rarity: MATERIAL_RARITY.RARE,
    description: 'Extremely hard metal. Difficult to smelt but worth it.',
    iconColor: 0xc0c0c0,
    sellValue: 60,
    stackLimit: 30,
    sources: ['gathering'],
    biomes: [BIOME_SOURCE.MOUNTAIN],
    gatherYield: { min: 1, max: 2 },
  },

  // ==================== HERBS ====================
  healing_leaf: {
    id: 'healing_leaf',
    name: 'Healing Leaf',
    category: MATERIAL_CATEGORY.HERB,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Soft green leaves with restorative properties.',
    iconColor: 0x66cc66,
    sellValue: 3,
    stackLimit: 99,
    sources: ['gathering', 'shop'],
    biomes: [BIOME_SOURCE.FOREST, BIOME_SOURCE.ANY],
    gatherYield: { min: 2, max: 5 },
  },
  mana_bloom: {
    id: 'mana_bloom',
    name: 'Mana Bloom',
    category: MATERIAL_CATEGORY.HERB,
    rarity: MATERIAL_RARITY.UNCOMMON,
    description: 'Blue-petaled flower that pulses with magical energy.',
    iconColor: 0x6688ff,
    sellValue: 12,
    stackLimit: 50,
    sources: ['gathering'],
    biomes: [BIOME_SOURCE.FOREST, BIOME_SOURCE.RUINS],
    gatherYield: { min: 1, max: 3 },
  },
  vitality_root: {
    id: 'vitality_root',
    name: 'Vitality Root',
    category: MATERIAL_CATEGORY.HERB,
    rarity: MATERIAL_RARITY.UNCOMMON,
    description: 'Gnarled red root. Invigorates the body when consumed.',
    iconColor: 0xcc4444,
    sellValue: 15,
    stackLimit: 50,
    sources: ['gathering'],
    biomes: [BIOME_SOURCE.FOREST, BIOME_SOURCE.SWAMP],
    gatherYield: { min: 1, max: 2 },
  },
  poison_ivy: {
    id: 'poison_ivy',
    name: 'Poison Ivy',
    category: MATERIAL_CATEGORY.HERB,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Toxic plant. Handle with care. Used in poisons.',
    iconColor: 0x88aa22,
    sellValue: 8,
    stackLimit: 50,
    sources: ['gathering'],
    biomes: [BIOME_SOURCE.SWAMP, BIOME_SOURCE.FOREST],
    gatherYield: { min: 2, max: 4 },
  },
  fire_petal: {
    id: 'fire_petal',
    name: 'Fire Petal',
    category: MATERIAL_CATEGORY.HERB,
    rarity: MATERIAL_RARITY.RARE,
    description: 'Warm to the touch. Blooms only near volcanic heat.',
    iconColor: 0xff6644,
    sellValue: 40,
    stackLimit: 30,
    sources: ['gathering', 'chest'],
    biomes: [BIOME_SOURCE.DESERT, BIOME_SOURCE.MOUNTAIN],
    gatherYield: { min: 1, max: 2 },
  },
  frost_moss: {
    id: 'frost_moss',
    name: 'Frost Moss',
    category: MATERIAL_CATEGORY.HERB,
    rarity: MATERIAL_RARITY.RARE,
    description: 'Ice-cold moss from frozen peaks. Chills the blood.',
    iconColor: 0xaaddff,
    sellValue: 35,
    stackLimit: 30,
    sources: ['gathering'],
    biomes: [BIOME_SOURCE.SNOW, BIOME_SOURCE.MOUNTAIN],
    gatherYield: { min: 1, max: 2 },
  },
  shadow_fungus: {
    id: 'shadow_fungus',
    name: 'Shadow Fungus',
    category: MATERIAL_CATEGORY.HERB,
    rarity: MATERIAL_RARITY.EPIC,
    description: 'Grows only in absolute darkness. Absorbs light.',
    iconColor: 0x442266,
    sellValue: 80,
    stackLimit: 20,
    sources: ['gathering', 'boss'],
    biomes: [BIOME_SOURCE.CAVE],
    gatherYield: { min: 1, max: 1 },
  },

  // ==================== MONSTER DROPS ====================
  wolf_fang: {
    id: 'wolf_fang',
    name: 'Wolf Fang',
    category: MATERIAL_CATEGORY.MONSTER_DROP,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Sharp canine tooth. Popular in primitive jewelry.',
    iconColor: 0xeeeecc,
    sellValue: 5,
    stackLimit: 99,
    sources: ['enemy'],
    enemyTypes: ['wolf', 'beast'],
    dropChance: 0.4,
  },
  slime_gel: {
    id: 'slime_gel',
    name: 'Slime Gel',
    category: MATERIAL_CATEGORY.MONSTER_DROP,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Gelatinous goo. Surprisingly useful in alchemy.',
    iconColor: 0x88ff88,
    sellValue: 3,
    stackLimit: 99,
    sources: ['enemy'],
    enemyTypes: ['slime'],
    dropChance: 0.6,
  },
  bone_shard: {
    id: 'bone_shard',
    name: 'Bone Shard',
    category: MATERIAL_CATEGORY.MONSTER_DROP,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Fragment of bone. Used in dark rituals and crafting.',
    iconColor: 0xddddbb,
    sellValue: 4,
    stackLimit: 99,
    sources: ['enemy'],
    enemyTypes: ['skeleton', 'undead'],
    dropChance: 0.5,
  },
  shadow_essence: {
    id: 'shadow_essence',
    name: 'Shadow Essence',
    category: MATERIAL_CATEGORY.MONSTER_DROP,
    rarity: MATERIAL_RARITY.RARE,
    description: 'Concentrated darkness from corrupted beings.',
    iconColor: 0x6622aa,
    sellValue: 45,
    stackLimit: 30,
    sources: ['enemy', 'boss'],
    enemyTypes: ['wraith', 'shadow', 'corrupted'],
    dropChance: 0.15,
  },
  dragon_scale: {
    id: 'dragon_scale',
    name: 'Dragon Scale',
    category: MATERIAL_CATEGORY.MONSTER_DROP,
    rarity: MATERIAL_RARITY.LEGENDARY,
    description: 'Nearly indestructible scale from an ancient dragon.',
    iconColor: 0xff4422,
    sellValue: 500,
    stackLimit: 10,
    sources: ['boss'],
    enemyTypes: ['dragon'],
    dropChance: 0.05,
  },
  golem_core: {
    id: 'golem_core',
    name: 'Golem Core',
    category: MATERIAL_CATEGORY.MONSTER_DROP,
    rarity: MATERIAL_RARITY.EPIC,
    description: 'Magical crystalline heart that once animated stone.',
    iconColor: 0x66aaff,
    sellValue: 200,
    stackLimit: 10,
    sources: ['boss'],
    enemyTypes: ['golem'],
    dropChance: 0.2,
  },
  corrupted_heart: {
    id: 'corrupted_heart',
    name: 'Corrupted Heart',
    category: MATERIAL_CATEGORY.MONSTER_DROP,
    rarity: MATERIAL_RARITY.EPIC,
    description: 'Black heart still beating with dark energy.',
    iconColor: 0x440022,
    sellValue: 180,
    stackLimit: 10,
    sources: ['boss', 'enemy'],
    enemyTypes: ['corrupted_knight', 'elite'],
    dropChance: 0.1,
  },
  beast_hide: {
    id: 'beast_hide',
    name: 'Beast Hide',
    category: MATERIAL_CATEGORY.MONSTER_DROP,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Tough animal hide. Good for basic leather armor.',
    iconColor: 0x8b6914,
    sellValue: 6,
    stackLimit: 50,
    sources: ['enemy'],
    enemyTypes: ['wolf', 'beast', 'boar'],
    dropChance: 0.35,
  },
  treant_bark: {
    id: 'treant_bark',
    name: 'Treant Bark',
    category: MATERIAL_CATEGORY.MONSTER_DROP,
    rarity: MATERIAL_RARITY.RARE,
    description: 'Living bark from a forest guardian. Magically hardened.',
    iconColor: 0x556633,
    sellValue: 55,
    stackLimit: 20,
    sources: ['boss', 'enemy'],
    enemyTypes: ['treant', 'forest_guardian'],
    dropChance: 0.12,
  },
  spider_silk: {
    id: 'spider_silk',
    name: 'Spider Silk',
    category: MATERIAL_CATEGORY.MONSTER_DROP,
    rarity: MATERIAL_RARITY.UNCOMMON,
    description: 'Strong yet lightweight thread. Perfect for robes.',
    iconColor: 0xeeeeee,
    sellValue: 18,
    stackLimit: 50,
    sources: ['enemy'],
    enemyTypes: ['spider'],
    dropChance: 0.3,
  },

  // ==================== GEMS ====================
  ruby: {
    id: 'ruby',
    name: 'Ruby',
    category: MATERIAL_CATEGORY.GEM,
    rarity: MATERIAL_RARITY.RARE,
    description: 'Blood-red gem pulsing with fire magic.',
    iconColor: 0xff2244,
    sellValue: 100,
    stackLimit: 20,
    sources: ['gathering', 'chest', 'boss'],
    biomes: [BIOME_SOURCE.CAVE, BIOME_SOURCE.MOUNTAIN],
    gatherYield: { min: 1, max: 1 },
    enchantment: 'fire',
  },
  sapphire: {
    id: 'sapphire',
    name: 'Sapphire',
    category: MATERIAL_CATEGORY.GEM,
    rarity: MATERIAL_RARITY.RARE,
    description: 'Deep blue gem resonating with ice magic.',
    iconColor: 0x2244ff,
    sellValue: 100,
    stackLimit: 20,
    sources: ['gathering', 'chest'],
    biomes: [BIOME_SOURCE.SNOW, BIOME_SOURCE.CAVE],
    gatherYield: { min: 1, max: 1 },
    enchantment: 'ice',
  },
  emerald: {
    id: 'emerald',
    name: 'Emerald',
    category: MATERIAL_CATEGORY.GEM,
    rarity: MATERIAL_RARITY.RARE,
    description: 'Vibrant green gem attuned to nature magic.',
    iconColor: 0x22ff44,
    sellValue: 100,
    stackLimit: 20,
    sources: ['gathering', 'chest'],
    biomes: [BIOME_SOURCE.FOREST, BIOME_SOURCE.SWAMP],
    gatherYield: { min: 1, max: 1 },
    enchantment: 'nature',
  },
  diamond: {
    id: 'diamond',
    name: 'Diamond',
    category: MATERIAL_CATEGORY.GEM,
    rarity: MATERIAL_RARITY.EPIC,
    description: 'Flawless gem of unmatched hardness and purity.',
    iconColor: 0xeeffff,
    sellValue: 300,
    stackLimit: 10,
    sources: ['gathering', 'boss'],
    biomes: [BIOME_SOURCE.CAVE],
    gatherYield: { min: 1, max: 1 },
    enchantment: 'light',
  },
  void_crystal: {
    id: 'void_crystal',
    name: 'Void Crystal',
    category: MATERIAL_CATEGORY.GEM,
    rarity: MATERIAL_RARITY.LEGENDARY,
    description: 'Purple crystal from beyond reality. Bends space.',
    iconColor: 0x8822ff,
    sellValue: 750,
    stackLimit: 5,
    sources: ['boss'],
    biomes: [BIOME_SOURCE.RUINS],
    gatherYield: { min: 1, max: 1 },
    enchantment: 'void',
  },
  topaz: {
    id: 'topaz',
    name: 'Topaz',
    category: MATERIAL_CATEGORY.GEM,
    rarity: MATERIAL_RARITY.UNCOMMON,
    description: 'Golden gem that amplifies lightning magic.',
    iconColor: 0xffcc22,
    sellValue: 50,
    stackLimit: 30,
    sources: ['gathering', 'chest'],
    biomes: [BIOME_SOURCE.DESERT, BIOME_SOURCE.MOUNTAIN],
    gatherYield: { min: 1, max: 2 },
    enchantment: 'lightning',
  },
  amethyst: {
    id: 'amethyst',
    name: 'Amethyst',
    category: MATERIAL_CATEGORY.GEM,
    rarity: MATERIAL_RARITY.UNCOMMON,
    description: 'Purple gem that enhances arcane magic.',
    iconColor: 0xaa44cc,
    sellValue: 45,
    stackLimit: 30,
    sources: ['gathering', 'chest'],
    biomes: [BIOME_SOURCE.CAVE, BIOME_SOURCE.RUINS],
    gatherYield: { min: 1, max: 2 },
    enchantment: 'arcane',
  },

  // ==================== MISCELLANEOUS ====================
  leather: {
    id: 'leather',
    name: 'Leather',
    category: MATERIAL_CATEGORY.MISC,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Tanned animal hide. Basic armor material.',
    iconColor: 0x8b4513,
    sellValue: 8,
    stackLimit: 99,
    sources: ['shop', 'enemy'],
    biomes: [BIOME_SOURCE.VILLAGE],
  },
  cloth: {
    id: 'cloth',
    name: 'Cloth',
    category: MATERIAL_CATEGORY.MISC,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Woven fabric for robes and light armor.',
    iconColor: 0xeeeecc,
    sellValue: 4,
    stackLimit: 99,
    sources: ['shop', 'chest'],
    biomes: [BIOME_SOURCE.VILLAGE],
  },
  thread: {
    id: 'thread',
    name: 'Thread',
    category: MATERIAL_CATEGORY.MISC,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Thin fibers for sewing and crafting.',
    iconColor: 0xccccaa,
    sellValue: 2,
    stackLimit: 99,
    sources: ['shop'],
    biomes: [BIOME_SOURCE.VILLAGE],
  },
  wood: {
    id: 'wood',
    name: 'Wood',
    category: MATERIAL_CATEGORY.MISC,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Sturdy lumber for handles and construction.',
    iconColor: 0x8b6914,
    sellValue: 3,
    stackLimit: 99,
    sources: ['gathering', 'shop'],
    biomes: [BIOME_SOURCE.FOREST, BIOME_SOURCE.ANY],
    gatherYield: { min: 3, max: 6 },
  },
  stone: {
    id: 'stone',
    name: 'Stone',
    category: MATERIAL_CATEGORY.MISC,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Basic rock. Used in simple tools and construction.',
    iconColor: 0x888888,
    sellValue: 1,
    stackLimit: 99,
    sources: ['gathering'],
    biomes: [BIOME_SOURCE.ANY],
    gatherYield: { min: 3, max: 6 },
  },
  glass: {
    id: 'glass',
    name: 'Glass',
    category: MATERIAL_CATEGORY.MISC,
    rarity: MATERIAL_RARITY.COMMON,
    description: 'Transparent material for vials and lenses.',
    iconColor: 0xaaddee,
    sellValue: 5,
    stackLimit: 50,
    sources: ['shop'],
    biomes: [BIOME_SOURCE.VILLAGE],
  },
  enchanted_dust: {
    id: 'enchanted_dust',
    name: 'Enchanted Dust',
    category: MATERIAL_CATEGORY.MISC,
    rarity: MATERIAL_RARITY.UNCOMMON,
    description: 'Magical residue. Essential for enchanting.',
    iconColor: 0xffaaff,
    sellValue: 20,
    stackLimit: 50,
    sources: ['enemy', 'chest'],
    enemyTypes: ['mage', 'elemental', 'magic'],
    dropChance: 0.25,
  },
  ancient_rune: {
    id: 'ancient_rune',
    name: 'Ancient Rune',
    category: MATERIAL_CATEGORY.MISC,
    rarity: MATERIAL_RARITY.RARE,
    description: 'Stone tablet inscribed with forgotten magic.',
    iconColor: 0x66ffaa,
    sellValue: 65,
    stackLimit: 20,
    sources: ['chest', 'boss'],
    biomes: [BIOME_SOURCE.RUINS],
  },
  refined_steel: {
    id: 'refined_steel',
    name: 'Refined Steel',
    category: MATERIAL_CATEGORY.MISC,
    rarity: MATERIAL_RARITY.UNCOMMON,
    description: 'Purified steel ingot. Superior to raw iron.',
    iconColor: 0xaabbcc,
    sellValue: 25,
    stackLimit: 50,
    sources: ['shop', 'crafted'],
    biomes: [BIOME_SOURCE.VILLAGE],
  },
  magic_crystal: {
    id: 'magic_crystal',
    name: 'Magic Crystal',
    category: MATERIAL_CATEGORY.MISC,
    rarity: MATERIAL_RARITY.RARE,
    description: 'Crystallized mana. Powers magical devices.',
    iconColor: 0x88ffff,
    sellValue: 55,
    stackLimit: 30,
    sources: ['gathering', 'boss'],
    biomes: [BIOME_SOURCE.RUINS, BIOME_SOURCE.CAVE],
    gatherYield: { min: 1, max: 1 },
  },
};

// ========== GATHERING NODE TYPES ==========
export const GATHERING_NODE_TYPES = {
  ORE_VEIN: {
    id: 'ore_vein',
    name: 'Ore Vein',
    category: MATERIAL_CATEGORY.ORE,
    model: 'rock',
    gatherTime: 2.0, // seconds
    respawnTime: 180, // 3 minutes
    particles: 'spark',
    biomeDrops: {
      [BIOME_SOURCE.MOUNTAIN]: ['iron_ore', 'copper_ore', 'gold_ore', 'titanium_ore'],
      [BIOME_SOURCE.CAVE]: ['iron_ore', 'mythril_ore', 'darksteel_ore', 'gold_ore'],
      [BIOME_SOURCE.ANY]: ['iron_ore', 'copper_ore', 'stone'],
    },
  },
  HERB_PATCH: {
    id: 'herb_patch',
    name: 'Herb Patch',
    category: MATERIAL_CATEGORY.HERB,
    model: 'plant',
    gatherTime: 1.5,
    respawnTime: 120, // 2 minutes
    particles: 'leaf',
    biomeDrops: {
      [BIOME_SOURCE.FOREST]: ['healing_leaf', 'mana_bloom', 'poison_ivy'],
      [BIOME_SOURCE.SWAMP]: ['poison_ivy', 'vitality_root', 'shadow_fungus'],
      [BIOME_SOURCE.SNOW]: ['frost_moss', 'healing_leaf'],
      [BIOME_SOURCE.DESERT]: ['fire_petal', 'vitality_root'],
      [BIOME_SOURCE.ANY]: ['healing_leaf'],
    },
  },
  WOOD_STUMP: {
    id: 'wood_stump',
    name: 'Wood Stump',
    category: MATERIAL_CATEGORY.MISC,
    model: 'stump',
    gatherTime: 1.8,
    respawnTime: 150,
    particles: 'wood',
    biomeDrops: {
      [BIOME_SOURCE.FOREST]: ['wood', 'treant_bark'],
      [BIOME_SOURCE.ANY]: ['wood'],
    },
  },
  CRYSTAL_NODE: {
    id: 'crystal_node',
    name: 'Crystal Formation',
    category: MATERIAL_CATEGORY.GEM,
    model: 'crystal',
    gatherTime: 2.5,
    respawnTime: 300, // 5 minutes
    particles: 'sparkle',
    biomeDrops: {
      [BIOME_SOURCE.CAVE]: ['amethyst', 'sapphire', 'diamond', 'magic_crystal'],
      [BIOME_SOURCE.RUINS]: ['void_crystal', 'ancient_rune', 'magic_crystal'],
      [BIOME_SOURCE.MOUNTAIN]: ['ruby', 'topaz', 'emerald'],
      [BIOME_SOURCE.ANY]: ['amethyst', 'topaz'],
    },
  },
};

// ========== UTILITY FUNCTIONS ==========

/**
 * Get a material by ID
 * @param {string} materialId - Material ID
 * @returns {object|null} Material definition or null
 */
export function getMaterial(materialId) {
  return MATERIALS[materialId] || null;
}

/**
 * Get all materials by category
 * @param {string} categoryId - Category ID (ore, herb, etc.)
 * @returns {Array} Array of material definitions
 */
export function getMaterialsByCategory(categoryId) {
  return Object.values(MATERIALS).filter(m => m.category.id === categoryId);
}

/**
 * Get all materials by rarity
 * @param {string} rarityId - Rarity ID (common, uncommon, etc.)
 * @returns {Array} Array of material definitions
 */
export function getMaterialsByRarity(rarityId) {
  return Object.values(MATERIALS).filter(m => m.rarity.id === rarityId);
}

/**
 * Get materials that can be gathered in a specific biome
 * @param {string} biome - Biome identifier
 * @returns {Array} Array of material definitions
 */
export function getMaterialsForBiome(biome) {
  return Object.values(MATERIALS).filter(m => {
    if (!m.biomes) return false;
    return m.biomes.includes(biome) || m.biomes.includes(BIOME_SOURCE.ANY);
  });
}

/**
 * Get materials dropped by a specific enemy type
 * @param {string} enemyType - Enemy type identifier
 * @returns {Array} Array of material definitions
 */
export function getMaterialsForEnemyType(enemyType) {
  return Object.values(MATERIALS).filter(m => {
    if (!m.enemyTypes) return false;
    return m.enemyTypes.includes(enemyType);
  });
}

/**
 * Roll for a material drop from an enemy
 * @param {string} enemyType - Enemy type
 * @param {number} luckBonus - Luck bonus (0-1)
 * @returns {Array} Array of {materialId, quantity} drops
 */
export function rollEnemyMaterialDrops(enemyType, luckBonus = 0) {
  const drops = [];
  const possibleMaterials = getMaterialsForEnemyType(enemyType);
  
  possibleMaterials.forEach(mat => {
    const adjustedChance = mat.dropChance * (1 + luckBonus);
    if (Math.random() < adjustedChance) {
      const qty = Math.random() < 0.3 ? 2 : 1; // 30% chance for double drop
      drops.push({ materialId: mat.id, quantity: qty });
    }
  });
  
  return drops;
}

/**
 * Get possible drops from a gathering node in a biome
 * @param {string} nodeTypeId - Node type ID
 * @param {string} biome - Current biome
 * @returns {Array} Array of material IDs
 */
export function getNodeDropsForBiome(nodeTypeId, biome) {
  const nodeType = GATHERING_NODE_TYPES[nodeTypeId];
  if (!nodeType || !nodeType.biomeDrops) return [];
  
  // Check specific biome first, then fallback to ANY
  if (nodeType.biomeDrops[biome]) {
    return nodeType.biomeDrops[biome];
  }
  return nodeType.biomeDrops[BIOME_SOURCE.ANY] || [];
}

/**
 * Roll for gathering node drops
 * @param {string} nodeTypeId - Node type ID
 * @param {string} biome - Current biome
 * @param {number} gatheringBonus - Bonus to yields (0-1)
 * @returns {Array} Array of {materialId, quantity} drops
 */
export function rollGatheringDrops(nodeTypeId, biome, gatheringBonus = 0) {
  const possibleDrops = getNodeDropsForBiome(nodeTypeId, biome);
  if (possibleDrops.length === 0) return [];
  
  const drops = [];
  
  // Pick 1-2 random materials from the possible drops
  const numDrops = Math.random() < 0.3 + gatheringBonus ? 2 : 1;
  
  for (let i = 0; i < numDrops && possibleDrops.length > 0; i++) {
    const idx = Math.floor(Math.random() * possibleDrops.length);
    const materialId = possibleDrops[idx];
    const mat = getMaterial(materialId);
    
    if (mat && mat.gatherYield) {
      const baseQty = mat.gatherYield.min + 
        Math.floor(Math.random() * (mat.gatherYield.max - mat.gatherYield.min + 1));
      const qty = Math.floor(baseQty * (1 + gatheringBonus));
      
      drops.push({ materialId, quantity: Math.max(1, qty) });
    } else {
      drops.push({ materialId, quantity: 1 });
    }
  }
  
  return drops;
}

/**
 * Get total material count by category
 * @returns {object} Counts per category
 */
export function getMaterialCounts() {
  const counts = {};
  Object.values(MATERIAL_CATEGORY).forEach(cat => {
    counts[cat.id] = getMaterialsByCategory(cat.id).length;
  });
  return counts;
}

// Export all materials as array for iteration
export const ALL_MATERIALS = Object.values(MATERIALS);
export const MATERIAL_COUNT = ALL_MATERIALS.length;
