/**
 * RecipeData.js - Crafting Recipe Definitions
 * Phase 23: Crafting System
 * 
 * Defines all craftable recipes: weapons, armor, potions, accessories, upgrades.
 * Recipes are unlocked via exploration, NPCs, chests, and boss drops.
 * 
 * NOTE: Worker 1 will expand this with 40+ recipes as per Phase 23 specs.
 */

import { MATERIALS, getMaterial, MATERIAL_RARITY } from './MaterialData.js';

// ========== RECIPE CATEGORIES ==========
export const RECIPE_CATEGORY = {
  WEAPON: {
    id: 'weapon',
    name: 'Weapons',
    description: 'Swords, axes, daggers, and implements of war.',
    icon: '⚔️',
    color: 0xcc4444,
    station: 'forge',
  },
  ARMOR: {
    id: 'armor',
    name: 'Armor',
    description: 'Protection for head, chest, hands, and feet.',
    icon: '🛡️',
    color: 0x4488cc,
    station: 'forge',
  },
  POTION: {
    id: 'potion',
    name: 'Potions',
    description: 'Consumable brews for health, mana, and buffs.',
    icon: '🧪',
    color: 0x44cc88,
    station: 'alchemy_table',
  },
  ACCESSORY: {
    id: 'accessory',
    name: 'Accessories',
    description: 'Rings, amulets, and charms for bonus effects.',
    icon: '💍',
    color: 0xccaa44,
    station: 'workbench',
  },
  UPGRADE: {
    id: 'upgrade',
    name: 'Upgrades',
    description: 'Materials to enhance weapons and armor.',
    icon: '✨',
    color: 0xaa44cc,
    station: 'forge',
  },
  MATERIAL: {
    id: 'material',
    name: 'Refined Materials',
    description: 'Processed materials for advanced crafting.',
    icon: '🔧',
    color: 0x888888,
    station: 'workbench',
  },
};

// ========== UNLOCK METHODS ==========
export const UNLOCK_METHOD = {
  KNOWN_BY_DEFAULT: 'known_by_default',
  FOUND_IN_CHEST: 'found_in_chest',
  BOUGHT_FROM_NPC: 'bought_from_npc',
  BOSS_DROP: 'boss_drop',
  EXPLORATION: 'exploration',
  QUEST_REWARD: 'quest_reward',
  LEVEL_UP: 'level_up',
};

// ========== CRAFTING STATIONS ==========
export const CRAFTING_STATION = {
  NONE: {
    id: 'none',
    name: 'Anywhere',
    description: 'Can be crafted without a station.',
  },
  FORGE: {
    id: 'forge',
    name: 'Forge',
    description: 'Required for metalworking and weapon crafting.',
    modelType: 'forge',
  },
  ALCHEMY_TABLE: {
    id: 'alchemy_table',
    name: 'Alchemy Table',
    description: 'Required for brewing potions and elixirs.',
    modelType: 'table',
  },
  WORKBENCH: {
    id: 'workbench',
    name: 'Workbench',
    description: 'Required for general crafting and accessories.',
    modelType: 'bench',
  },
  ENCHANTING_ALTAR: {
    id: 'enchanting_altar',
    name: 'Enchanting Altar',
    description: 'Required for magical enhancements.',
    modelType: 'altar',
  },
};

// ========== RECIPE DEFINITIONS ==========
export const RECIPES = {
  // ==================== POTIONS (Basic - known by default) ====================
  health_potion: {
    id: 'health_potion',
    name: 'Health Potion',
    category: RECIPE_CATEGORY.POTION,
    description: 'Restores 50 HP instantly.',
    materials: [
      { materialId: 'healing_leaf', qty: 3 },
      { materialId: 'glass', qty: 1 },
    ],
    result: { itemId: 'health_potion', qty: 1 },
    craftingTime: 2.0,
    requiredLevel: 1,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.ALCHEMY_TABLE,
    rarity: 'common',
  },
  
  mana_potion: {
    id: 'mana_potion',
    name: 'Mana Potion',
    category: RECIPE_CATEGORY.POTION,
    description: 'Restores 40 MP instantly.',
    materials: [
      { materialId: 'mana_bloom', qty: 2 },
      { materialId: 'glass', qty: 1 },
    ],
    result: { itemId: 'mana_potion', qty: 1 },
    craftingTime: 2.0,
    requiredLevel: 1,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.ALCHEMY_TABLE,
    rarity: 'common',
  },
  
  stamina_potion: {
    id: 'stamina_potion',
    name: 'Stamina Potion',
    category: RECIPE_CATEGORY.POTION,
    description: 'Instantly refills stamina.',
    materials: [
      { materialId: 'vitality_root', qty: 2 },
      { materialId: 'glass', qty: 1 },
    ],
    result: { itemId: 'stamina_potion', qty: 1 },
    craftingTime: 2.0,
    requiredLevel: 3,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.ALCHEMY_TABLE,
    rarity: 'common',
  },
  
  greater_health_potion: {
    id: 'greater_health_potion',
    name: 'Greater Health Potion',
    category: RECIPE_CATEGORY.POTION,
    description: 'Restores 120 HP instantly.',
    materials: [
      { materialId: 'healing_leaf', qty: 5 },
      { materialId: 'vitality_root', qty: 2 },
      { materialId: 'glass', qty: 1 },
    ],
    result: { itemId: 'greater_health_potion', qty: 1 },
    craftingTime: 3.5,
    requiredLevel: 8,
    unlockMethod: UNLOCK_METHOD.FOUND_IN_CHEST,
    station: CRAFTING_STATION.ALCHEMY_TABLE,
    rarity: 'uncommon',
  },
  
  antidote: {
    id: 'antidote',
    name: 'Antidote',
    category: RECIPE_CATEGORY.POTION,
    description: 'Cures poison and grants temporary immunity.',
    materials: [
      { materialId: 'poison_ivy', qty: 2 },
      { materialId: 'healing_leaf', qty: 1 },
      { materialId: 'glass', qty: 1 },
    ],
    result: { itemId: 'antidote', qty: 1 },
    craftingTime: 2.5,
    requiredLevel: 5,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.ALCHEMY_TABLE,
    rarity: 'common',
  },
  
  fire_resistance_potion: {
    id: 'fire_resistance_potion',
    name: 'Fire Resistance Potion',
    category: RECIPE_CATEGORY.POTION,
    description: 'Reduces fire damage by 50% for 60 seconds.',
    materials: [
      { materialId: 'fire_petal', qty: 2 },
      { materialId: 'frost_moss', qty: 1 },
      { materialId: 'glass', qty: 1 },
    ],
    result: { itemId: 'fire_resistance_potion', qty: 1 },
    craftingTime: 4.0,
    requiredLevel: 10,
    unlockMethod: UNLOCK_METHOD.FOUND_IN_CHEST,
    station: CRAFTING_STATION.ALCHEMY_TABLE,
    rarity: 'uncommon',
  },
  
  strength_elixir: {
    id: 'strength_elixir',
    name: 'Strength Elixir',
    category: RECIPE_CATEGORY.POTION,
    description: 'Increases STR by 5 for 90 seconds.',
    materials: [
      { materialId: 'vitality_root', qty: 3 },
      { materialId: 'wolf_fang', qty: 2 },
      { materialId: 'glass', qty: 1 },
    ],
    result: { itemId: 'strength_elixir', qty: 1 },
    craftingTime: 5.0,
    requiredLevel: 12,
    unlockMethod: UNLOCK_METHOD.BOUGHT_FROM_NPC,
    station: CRAFTING_STATION.ALCHEMY_TABLE,
    rarity: 'rare',
  },
  
  speed_potion: {
    id: 'speed_potion',
    name: 'Speed Potion',
    category: RECIPE_CATEGORY.POTION,
    description: 'Increases movement speed by 30% for 45 seconds.',
    materials: [
      { materialId: 'mana_bloom', qty: 2 },
      { materialId: 'spider_silk', qty: 1 },
      { materialId: 'glass', qty: 1 },
    ],
    result: { itemId: 'speed_potion', qty: 1 },
    craftingTime: 3.0,
    requiredLevel: 6,
    unlockMethod: UNLOCK_METHOD.EXPLORATION,
    station: CRAFTING_STATION.ALCHEMY_TABLE,
    rarity: 'uncommon',
  },
  
  // ==================== REFINED MATERIALS ====================
  refined_steel: {
    id: 'refined_steel',
    name: 'Refined Steel',
    category: RECIPE_CATEGORY.MATERIAL,
    description: 'Purified steel ingot for advanced forging.',
    materials: [
      { materialId: 'iron_ore', qty: 3 },
      { materialId: 'copper_ore', qty: 1 },
    ],
    result: { itemId: 'refined_steel', qty: 1 },
    craftingTime: 4.0,
    requiredLevel: 5,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.FORGE,
    rarity: 'uncommon',
  },
  
  treated_leather: {
    id: 'treated_leather',
    name: 'Treated Leather',
    category: RECIPE_CATEGORY.MATERIAL,
    description: 'Hardened leather for quality armor.',
    materials: [
      { materialId: 'leather', qty: 2 },
      { materialId: 'beast_hide', qty: 2 },
    ],
    result: { itemId: 'treated_leather', qty: 1 },
    craftingTime: 3.0,
    requiredLevel: 4,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.WORKBENCH,
    rarity: 'uncommon',
  },
  
  enchanted_thread: {
    id: 'enchanted_thread',
    name: 'Enchanted Thread',
    category: RECIPE_CATEGORY.MATERIAL,
    description: 'Magically infused thread for robes.',
    materials: [
      { materialId: 'thread', qty: 3 },
      { materialId: 'spider_silk', qty: 2 },
      { materialId: 'enchanted_dust', qty: 1 },
    ],
    result: { itemId: 'enchanted_thread', qty: 1 },
    craftingTime: 5.0,
    requiredLevel: 10,
    unlockMethod: UNLOCK_METHOD.FOUND_IN_CHEST,
    station: CRAFTING_STATION.WORKBENCH,
    rarity: 'rare',
  },
  
  // ==================== WEAPONS ====================
  iron_sword: {
    id: 'iron_sword',
    name: 'Iron Sword',
    category: RECIPE_CATEGORY.WEAPON,
    description: 'A reliable sword forged from iron. Solid damage with balanced scaling.',
    materials: [
      { materialId: 'iron_ore', qty: 5 },
      { materialId: 'wood', qty: 2 },
      { materialId: 'leather', qty: 1 },
    ],
    result: { itemId: 'iron_sword', qty: 1 },
    craftingTime: 6.0,
    requiredLevel: 3,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.FORGE,
    rarity: 'common',
    resultStats: {
      damage: 25,
      scaling: { strength: 'C', dexterity: 'D' },
    },
  },
  
  steel_sword: {
    id: 'steel_sword',
    name: 'Steel Sword',
    category: RECIPE_CATEGORY.WEAPON,
    description: 'Refined steel blade with improved damage.',
    materials: [
      { materialId: 'refined_steel', qty: 4 },
      { materialId: 'wood', qty: 2 },
      { materialId: 'leather', qty: 2 },
    ],
    result: { itemId: 'steel_sword', qty: 1 },
    craftingTime: 8.0,
    requiredLevel: 8,
    unlockMethod: UNLOCK_METHOD.BOUGHT_FROM_NPC,
    station: CRAFTING_STATION.FORGE,
    rarity: 'uncommon',
    resultStats: {
      damage: 38,
      scaling: { strength: 'B', dexterity: 'D' },
    },
  },
  
  hunter_dagger: {
    id: 'hunter_dagger',
    name: "Hunter's Dagger",
    category: RECIPE_CATEGORY.WEAPON,
    description: 'Quick blade favored by scouts. High crit chance.',
    materials: [
      { materialId: 'iron_ore', qty: 3 },
      { materialId: 'wolf_fang', qty: 2 },
      { materialId: 'leather', qty: 1 },
    ],
    result: { itemId: 'hunter_dagger', qty: 1 },
    craftingTime: 4.0,
    requiredLevel: 4,
    unlockMethod: UNLOCK_METHOD.EXPLORATION,
    station: CRAFTING_STATION.FORGE,
    rarity: 'common',
    resultStats: {
      damage: 18,
      scaling: { strength: 'D', dexterity: 'B' },
      critBonus: 15,
    },
  },
  
  battle_axe: {
    id: 'battle_axe',
    name: 'Battle Axe',
    category: RECIPE_CATEGORY.WEAPON,
    description: 'Heavy two-handed axe with devastating cleave damage.',
    materials: [
      { materialId: 'iron_ore', qty: 8 },
      { materialId: 'wood', qty: 4 },
      { materialId: 'leather', qty: 2 },
    ],
    result: { itemId: 'battle_axe', qty: 1 },
    craftingTime: 10.0,
    requiredLevel: 6,
    unlockMethod: UNLOCK_METHOD.FOUND_IN_CHEST,
    station: CRAFTING_STATION.FORGE,
    rarity: 'uncommon',
    resultStats: {
      damage: 45,
      scaling: { strength: 'A', dexterity: 'E' },
    },
  },
  
  mythril_blade: {
    id: 'mythril_blade',
    name: 'Mythril Blade',
    category: RECIPE_CATEGORY.WEAPON,
    description: 'Light yet deadly blade forged from mythril. Excellent magic scaling.',
    materials: [
      { materialId: 'mythril_ore', qty: 5 },
      { materialId: 'refined_steel', qty: 2 },
      { materialId: 'magic_crystal', qty: 1 },
    ],
    result: { itemId: 'mythril_blade', qty: 1 },
    craftingTime: 15.0,
    requiredLevel: 15,
    unlockMethod: UNLOCK_METHOD.BOSS_DROP,
    station: CRAFTING_STATION.FORGE,
    rarity: 'rare',
    resultStats: {
      damage: 52,
      scaling: { strength: 'C', dexterity: 'B', intelligence: 'B' },
      magicDamage: 20,
    },
  },
  
  shadow_blade: {
    id: 'shadow_blade',
    name: 'Shadow Blade',
    category: RECIPE_CATEGORY.WEAPON,
    description: 'Blade forged from darksteel. Drains life on hit.',
    materials: [
      { materialId: 'darksteel_ore', qty: 4 },
      { materialId: 'shadow_essence', qty: 3 },
      { materialId: 'corrupted_heart', qty: 1 },
    ],
    result: { itemId: 'shadow_blade', qty: 1 },
    craftingTime: 20.0,
    requiredLevel: 20,
    unlockMethod: UNLOCK_METHOD.BOSS_DROP,
    station: CRAFTING_STATION.FORGE,
    rarity: 'epic',
    resultStats: {
      damage: 65,
      scaling: { strength: 'B', dexterity: 'A' },
      lifesteal: 5,
    },
  },
  
  // ==================== ARMOR ====================
  leather_chest: {
    id: 'leather_chest',
    name: 'Leather Chestpiece',
    category: RECIPE_CATEGORY.ARMOR,
    description: 'Basic leather armor. Light and flexible.',
    materials: [
      { materialId: 'leather', qty: 4 },
      { materialId: 'thread', qty: 2 },
    ],
    result: { itemId: 'leather_chest', qty: 1 },
    craftingTime: 5.0,
    requiredLevel: 2,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.WORKBENCH,
    rarity: 'common',
    resultStats: {
      defense: 8,
      weight: 3,
    },
  },
  
  chainmail_helm: {
    id: 'chainmail_helm',
    name: 'Chainmail Helm',
    category: RECIPE_CATEGORY.ARMOR,
    description: 'Interlocked rings provide good protection.',
    materials: [
      { materialId: 'iron_ore', qty: 6 },
      { materialId: 'leather', qty: 1 },
    ],
    result: { itemId: 'chainmail_helm', qty: 1 },
    craftingTime: 6.0,
    requiredLevel: 5,
    unlockMethod: UNLOCK_METHOD.BOUGHT_FROM_NPC,
    station: CRAFTING_STATION.FORGE,
    rarity: 'common',
    resultStats: {
      defense: 12,
      weight: 4,
    },
  },
  
  steel_plate_boots: {
    id: 'steel_plate_boots',
    name: 'Steel Plate Boots',
    category: RECIPE_CATEGORY.ARMOR,
    description: 'Heavy boots offering solid protection.',
    materials: [
      { materialId: 'refined_steel', qty: 3 },
      { materialId: 'leather', qty: 2 },
    ],
    result: { itemId: 'steel_plate_boots', qty: 1 },
    craftingTime: 7.0,
    requiredLevel: 10,
    unlockMethod: UNLOCK_METHOD.FOUND_IN_CHEST,
    station: CRAFTING_STATION.FORGE,
    rarity: 'uncommon',
    resultStats: {
      defense: 18,
      weight: 6,
      poise: 5,
    },
  },
  
  mage_robe: {
    id: 'mage_robe',
    name: "Mage's Robe",
    category: RECIPE_CATEGORY.ARMOR,
    description: 'Enchanted cloth that boosts magic power.',
    materials: [
      { materialId: 'cloth', qty: 5 },
      { materialId: 'enchanted_thread', qty: 2 },
      { materialId: 'mana_bloom', qty: 3 },
    ],
    result: { itemId: 'mage_robe', qty: 1 },
    craftingTime: 10.0,
    requiredLevel: 12,
    unlockMethod: UNLOCK_METHOD.EXPLORATION,
    station: CRAFTING_STATION.WORKBENCH,
    rarity: 'rare',
    resultStats: {
      defense: 6,
      magicDefense: 25,
      weight: 2,
      manaBonus: 30,
    },
  },
  
  // ==================== ACCESSORIES ====================
  iron_ring: {
    id: 'iron_ring',
    name: 'Iron Ring',
    category: RECIPE_CATEGORY.ACCESSORY,
    description: 'Simple ring that slightly boosts defense.',
    materials: [
      { materialId: 'iron_ore', qty: 2 },
    ],
    result: { itemId: 'iron_ring', qty: 1 },
    craftingTime: 2.0,
    requiredLevel: 1,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.WORKBENCH,
    rarity: 'common',
    resultStats: {
      defense: 2,
    },
  },
  
  ruby_amulet: {
    id: 'ruby_amulet',
    name: 'Ruby Amulet',
    category: RECIPE_CATEGORY.ACCESSORY,
    description: 'Amulet infused with fire magic. +15% fire damage.',
    materials: [
      { materialId: 'ruby', qty: 1 },
      { materialId: 'gold_ore', qty: 2 },
      { materialId: 'thread', qty: 1 },
    ],
    result: { itemId: 'ruby_amulet', qty: 1 },
    craftingTime: 8.0,
    requiredLevel: 12,
    unlockMethod: UNLOCK_METHOD.FOUND_IN_CHEST,
    station: CRAFTING_STATION.WORKBENCH,
    rarity: 'rare',
    resultStats: {
      fireDamageBonus: 15,
    },
  },
  
  sapphire_ring: {
    id: 'sapphire_ring',
    name: 'Sapphire Ring',
    category: RECIPE_CATEGORY.ACCESSORY,
    description: 'Ring that enhances mana regeneration.',
    materials: [
      { materialId: 'sapphire', qty: 1 },
      { materialId: 'refined_steel', qty: 1 },
    ],
    result: { itemId: 'sapphire_ring', qty: 1 },
    craftingTime: 6.0,
    requiredLevel: 10,
    unlockMethod: UNLOCK_METHOD.EXPLORATION,
    station: CRAFTING_STATION.WORKBENCH,
    rarity: 'rare',
    resultStats: {
      manaRegen: 3,
    },
  },
  
  wolf_fang_charm: {
    id: 'wolf_fang_charm',
    name: 'Wolf Fang Charm',
    category: RECIPE_CATEGORY.ACCESSORY,
    description: 'Tribal charm that increases attack speed.',
    materials: [
      { materialId: 'wolf_fang', qty: 5 },
      { materialId: 'leather', qty: 1 },
      { materialId: 'thread', qty: 1 },
    ],
    result: { itemId: 'wolf_fang_charm', qty: 1 },
    craftingTime: 4.0,
    requiredLevel: 6,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.WORKBENCH,
    rarity: 'uncommon',
    resultStats: {
      attackSpeedBonus: 8,
    },
  },
  
  void_pendant: {
    id: 'void_pendant',
    name: 'Void Pendant',
    category: RECIPE_CATEGORY.ACCESSORY,
    description: 'Mysterious pendant that grants shadow damage and phasing.',
    materials: [
      { materialId: 'void_crystal', qty: 1 },
      { materialId: 'shadow_essence', qty: 3 },
      { materialId: 'ancient_rune', qty: 1 },
    ],
    result: { itemId: 'void_pendant', qty: 1 },
    craftingTime: 15.0,
    requiredLevel: 25,
    unlockMethod: UNLOCK_METHOD.BOSS_DROP,
    station: CRAFTING_STATION.ENCHANTING_ALTAR,
    rarity: 'legendary',
    resultStats: {
      shadowDamageBonus: 25,
      phaseChance: 10,
    },
  },
  
  // ==================== UPGRADES ====================
  weapon_sharpening_stone: {
    id: 'weapon_sharpening_stone',
    name: 'Sharpening Stone',
    category: RECIPE_CATEGORY.UPGRADE,
    description: 'Use at forge to upgrade weapon damage by +5.',
    materials: [
      { materialId: 'stone', qty: 5 },
      { materialId: 'iron_ore', qty: 2 },
    ],
    result: { itemId: 'sharpening_stone', qty: 1 },
    craftingTime: 3.0,
    requiredLevel: 3,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.WORKBENCH,
    rarity: 'common',
  },
  
  armor_reinforcement_kit: {
    id: 'armor_reinforcement_kit',
    name: 'Reinforcement Kit',
    category: RECIPE_CATEGORY.UPGRADE,
    description: 'Use at forge to upgrade armor defense by +3.',
    materials: [
      { materialId: 'iron_ore', qty: 3 },
      { materialId: 'leather', qty: 2 },
    ],
    result: { itemId: 'reinforcement_kit', qty: 1 },
    craftingTime: 3.0,
    requiredLevel: 4,
    unlockMethod: UNLOCK_METHOD.KNOWN_BY_DEFAULT,
    station: CRAFTING_STATION.WORKBENCH,
    rarity: 'common',
  },
  
  fire_enchantment_scroll: {
    id: 'fire_enchantment_scroll',
    name: 'Fire Enchantment Scroll',
    category: RECIPE_CATEGORY.UPGRADE,
    description: 'Imbue weapon with fire damage.',
    materials: [
      { materialId: 'fire_petal', qty: 3 },
      { materialId: 'ruby', qty: 1 },
      { materialId: 'ancient_rune', qty: 1 },
    ],
    result: { itemId: 'fire_enchantment_scroll', qty: 1 },
    craftingTime: 10.0,
    requiredLevel: 15,
    unlockMethod: UNLOCK_METHOD.BOSS_DROP,
    station: CRAFTING_STATION.ENCHANTING_ALTAR,
    rarity: 'epic',
  },
  
  ice_enchantment_scroll: {
    id: 'ice_enchantment_scroll',
    name: 'Ice Enchantment Scroll',
    category: RECIPE_CATEGORY.UPGRADE,
    description: 'Imbue weapon with ice damage and slow effect.',
    materials: [
      { materialId: 'frost_moss', qty: 3 },
      { materialId: 'sapphire', qty: 1 },
      { materialId: 'ancient_rune', qty: 1 },
    ],
    result: { itemId: 'ice_enchantment_scroll', qty: 1 },
    craftingTime: 10.0,
    requiredLevel: 15,
    unlockMethod: UNLOCK_METHOD.BOSS_DROP,
    station: CRAFTING_STATION.ENCHANTING_ALTAR,
    rarity: 'epic',
  },
  
  dragon_scale_reinforcement: {
    id: 'dragon_scale_reinforcement',
    name: 'Dragon Scale Reinforcement',
    category: RECIPE_CATEGORY.UPGRADE,
    description: 'Ultimate armor upgrade. +15 defense, +10 fire resistance.',
    materials: [
      { materialId: 'dragon_scale', qty: 2 },
      { materialId: 'mythril_ore', qty: 3 },
      { materialId: 'magic_crystal', qty: 2 },
    ],
    result: { itemId: 'dragon_reinforcement', qty: 1 },
    craftingTime: 25.0,
    requiredLevel: 30,
    unlockMethod: UNLOCK_METHOD.BOSS_DROP,
    station: CRAFTING_STATION.FORGE,
    rarity: 'legendary',
  },
};

// ========== UTILITY FUNCTIONS ==========

/**
 * Get a recipe by ID
 */
export function getRecipe(recipeId) {
  return RECIPES[recipeId] || null;
}

/**
 * Get all recipes by category
 */
export function getRecipesByCategory(categoryId) {
  return Object.values(RECIPES).filter(r => r.category.id === categoryId);
}

/**
 * Get all recipes that can be crafted at a specific station
 */
export function getRecipesByStation(stationId) {
  return Object.values(RECIPES).filter(r => r.station.id === stationId);
}

/**
 * Get all default-unlocked recipes
 */
export function getDefaultUnlockedRecipes() {
  return Object.values(RECIPES).filter(r => r.unlockMethod === UNLOCK_METHOD.KNOWN_BY_DEFAULT);
}

/**
 * Get recipes unlockable via a specific method
 */
export function getRecipesByUnlockMethod(method) {
  return Object.values(RECIPES).filter(r => r.unlockMethod === method);
}

/**
 * Check if a recipe can be crafted at player's level
 */
export function canCraftAtLevel(recipeId, playerLevel) {
  const recipe = getRecipe(recipeId);
  return recipe ? playerLevel >= recipe.requiredLevel : false;
}

/**
 * Calculate total material cost for batch crafting
 */
export function calculateBatchCost(recipeId, quantity) {
  const recipe = getRecipe(recipeId);
  if (!recipe) return null;
  
  return recipe.materials.map(mat => ({
    materialId: mat.materialId,
    qty: mat.qty * quantity,
  }));
}

/**
 * Get recipe rarity color
 */
export function getRecipeRarityColor(recipeId) {
  const recipe = getRecipe(recipeId);
  if (!recipe) return '#888888';
  
  const rarityColors = {
    common: '#888888',
    uncommon: '#4ade80',
    rare: '#60a5fa',
    epic: '#c084fc',
    legendary: '#f97316',
  };
  
  return rarityColors[recipe.rarity] || '#888888';
}

// Export collections
export const ALL_RECIPES = Object.values(RECIPES);
export const RECIPE_COUNT = ALL_RECIPES.length;
