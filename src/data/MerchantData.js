/**
 * MerchantData.js - Comprehensive Shop Inventories
 * Phase 18: Village Interaction & Trading
 * 
 * Contains all shop item definitions and merchant inventories.
 * Items have level requirements - some only appear after player reaches certain levels.
 */

import { RARITY, EQUIPMENT_SLOTS } from '../systems/EquipmentManager.js';

// ========== PRICE SCALING ==========
export const RARITY_PRICE_MULT = {
  common: 1.0,
  uncommon: 1.5,
  rare: 2.5,
  epic: 4.0,
};

// Sell price ratio (50% of buy price)
export const SELL_RATIO = 0.5;

// ========== SHOP ITEM DEFINITIONS ==========
export const SHOP_ITEMS = {
  // ===================================
  // WEAPONS - Blacksmith Primary Stock
  // ===================================
  
  // --- SWORDS ---
  iron_sword: {
    id: 'iron_sword',
    name: 'Iron Sword',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.WEAPON,
    basePrice: 150,
    rarity: RARITY.COMMON,
    description: 'A sturdy iron blade. Good for beginners.',
    stats: { damage: 10 },
    weaponModel: 'sword',
    levelRequired: 1,
    category: 'weapon',
  },
  steel_sword: {
    id: 'steel_sword',
    name: 'Steel Sword',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.WEAPON,
    basePrice: 350,
    rarity: RARITY.UNCOMMON,
    description: 'Tempered steel, sharp and reliable.',
    stats: { damage: 18, critChance: 3 },
    weaponModel: 'longsword',
    levelRequired: 5,
    category: 'weapon',
  },
  knight_blade: {
    id: 'knight_blade',
    name: "Knight's Blade",
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.WEAPON,
    basePrice: 800,
    rarity: RARITY.RARE,
    description: "A finely crafted sword bearing a knight's crest.",
    stats: { damage: 25, critChance: 5, attackSpeed: 5 },
    weaponModel: 'longsword',
    levelRequired: 10,
    category: 'weapon',
  },
  dark_edge: {
    id: 'dark_edge',
    name: 'Dark Edge',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.WEAPON,
    basePrice: 1500,
    rarity: RARITY.EPIC,
    description: 'A blade forged in shadow. Hungers for souls.',
    stats: { damage: 35, critChance: 8, critDamage: 20 },
    weaponModel: 'longsword',
    levelRequired: 15,
    category: 'weapon',
  },
  
  // --- AXES ---
  hand_axe: {
    id: 'hand_axe',
    name: 'Hand Axe',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.WEAPON,
    basePrice: 120,
    rarity: RARITY.COMMON,
    description: 'A simple woodcutter turned weapon.',
    stats: { damage: 12 },
    weaponModel: 'axe',
    levelRequired: 1,
    category: 'weapon',
  },
  battle_axe: {
    id: 'battle_axe',
    name: 'Battle Axe',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.WEAPON,
    basePrice: 400,
    rarity: RARITY.UNCOMMON,
    description: 'Heavy and brutal. Cleaves through armor.',
    stats: { damage: 22, critDamage: 15 },
    weaponModel: 'axe',
    levelRequired: 6,
    category: 'weapon',
  },
  executioner_axe: {
    id: 'executioner_axe',
    name: "Executioner's Axe",
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.WEAPON,
    basePrice: 1200,
    rarity: RARITY.RARE,
    description: 'Once used for grim justice. Still eager.',
    stats: { damage: 30, critChance: 3, critDamage: 25 },
    weaponModel: 'axe',
    levelRequired: 12,
    category: 'weapon',
  },
  
  // --- SPEARS ---
  wooden_spear: {
    id: 'wooden_spear',
    name: 'Wooden Spear',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.WEAPON,
    basePrice: 80,
    rarity: RARITY.COMMON,
    description: 'Simple but effective. Keeps enemies at distance.',
    stats: { damage: 8, attackSpeed: 10 },
    weaponModel: 'spear',
    levelRequired: 1,
    category: 'weapon',
  },
  iron_spear: {
    id: 'iron_spear',
    name: 'Iron Spear',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.WEAPON,
    basePrice: 280,
    rarity: RARITY.UNCOMMON,
    description: 'Iron-tipped for piercing strikes.',
    stats: { damage: 15, attackSpeed: 8 },
    weaponModel: 'spear',
    levelRequired: 4,
    category: 'weapon',
  },
  halberd: {
    id: 'halberd',
    name: 'Halberd',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.WEAPON,
    basePrice: 900,
    rarity: RARITY.RARE,
    description: 'Versatile polearm with axe blade and spike.',
    stats: { damage: 26, attackSpeed: 5, critChance: 4 },
    weaponModel: 'spear',
    levelRequired: 11,
    category: 'weapon',
  },
  
  // ===================================
  // ARMOR - Blacksmith Secondary Stock
  // ===================================
  
  leather_armor: {
    id: 'leather_armor',
    name: 'Leather Armor',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.ARMOR,
    basePrice: 100,
    rarity: RARITY.COMMON,
    description: 'Light armor for mobility.',
    stats: { defense: 8, stamina: 10 },
    levelRequired: 1,
    category: 'armor',
  },
  chainmail_armor: {
    id: 'chainmail_armor',
    name: 'Chainmail',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.ARMOR,
    basePrice: 300,
    rarity: RARITY.UNCOMMON,
    description: 'Interlocking metal rings provide solid protection.',
    stats: { defense: 15, health: 15 },
    levelRequired: 5,
    category: 'armor',
  },
  knight_armor: {
    id: 'knight_armor',
    name: "Knight's Plate",
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.ARMOR,
    basePrice: 750,
    rarity: RARITY.RARE,
    description: 'Full plate armor worn by knights of the realm.',
    stats: { defense: 25, health: 30 },
    levelRequired: 10,
    category: 'armor',
  },
  obsidian_mail: {
    id: 'obsidian_mail',
    name: 'Obsidian Mail',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.ARMOR,
    basePrice: 1800,
    rarity: RARITY.EPIC,
    description: 'Armor of volcanic glass. Absorbs fire damage.',
    stats: { defense: 35, health: 50, fireResist: 20 },
    levelRequired: 18,
    category: 'armor',
  },
  
  // --- SHIELDS / ACCESSORIES ---
  iron_shield: {
    id: 'iron_shield',
    name: 'Iron Shield',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.ACCESSORY,
    basePrice: 200,
    rarity: RARITY.COMMON,
    description: 'A sturdy shield for blocking attacks.',
    stats: { defense: 12 },
    levelRequired: 1,
    category: 'shield',
  },
  steel_shield: {
    id: 'steel_shield',
    name: 'Steel Kite Shield',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.ACCESSORY,
    basePrice: 450,
    rarity: RARITY.UNCOMMON,
    description: 'Large shield offering excellent coverage.',
    stats: { defense: 20, stamina: 5 },
    levelRequired: 7,
    category: 'shield',
  },
  tower_shield: {
    id: 'tower_shield',
    name: 'Tower Shield',
    type: 'equipment',
    slot: EQUIPMENT_SLOTS.ACCESSORY,
    basePrice: 1000,
    rarity: RARITY.RARE,
    description: 'Massive shield. Nearly impenetrable but heavy.',
    stats: { defense: 35, health: 20 },
    levelRequired: 13,
    category: 'shield',
  },
  
  // ===================================
  // POTIONS - Healer Stock
  // ===================================
  
  health_potion_s: {
    id: 'health_potion_s',
    name: 'Small Health Potion',
    type: 'consumable',
    itemId: 'health-potion',
    basePrice: 50,
    rarity: RARITY.COMMON,
    description: 'Restores 50 HP.',
    effect: { healAmount: 50 },
    levelRequired: 1,
    category: 'potion',
  },
  health_potion_m: {
    id: 'health_potion_m',
    name: 'Medium Health Potion',
    type: 'consumable',
    itemId: 'health-potion-m',
    basePrice: 120,
    rarity: RARITY.UNCOMMON,
    description: 'Restores 100 HP.',
    effect: { healAmount: 100 },
    levelRequired: 5,
    category: 'potion',
  },
  health_potion_l: {
    id: 'health_potion_l',
    name: 'Large Health Potion',
    type: 'consumable',
    itemId: 'health-potion-l',
    basePrice: 250,
    rarity: RARITY.RARE,
    description: 'Restores 200 HP.',
    effect: { healAmount: 200 },
    levelRequired: 10,
    category: 'potion',
  },
  health_potion_xl: {
    id: 'health_potion_xl',
    name: 'Greater Health Potion',
    type: 'consumable',
    itemId: 'health-potion-xl',
    basePrice: 500,
    rarity: RARITY.EPIC,
    description: 'Restores 400 HP and grants regen.',
    effect: { healAmount: 400, regen: 10 },
    levelRequired: 15,
    category: 'potion',
  },
  stamina_potion: {
    id: 'stamina_potion',
    name: 'Stamina Potion',
    type: 'consumable',
    itemId: 'stamina-potion',
    basePrice: 40,
    rarity: RARITY.COMMON,
    description: 'Restores 75 Stamina.',
    effect: { staminaAmount: 75 },
    levelRequired: 1,
    category: 'potion',
  },
  stamina_potion_l: {
    id: 'stamina_potion_l',
    name: 'Large Stamina Potion',
    type: 'consumable',
    itemId: 'stamina-potion-l',
    basePrice: 100,
    rarity: RARITY.UNCOMMON,
    description: 'Restores 150 Stamina.',
    effect: { staminaAmount: 150 },
    levelRequired: 8,
    category: 'potion',
  },
  antidote: {
    id: 'antidote',
    name: 'Antidote',
    type: 'consumable',
    itemId: 'antidote',
    basePrice: 75,
    rarity: RARITY.COMMON,
    description: 'Cures poison effects.',
    effect: { curePoison: true },
    levelRequired: 1,
    category: 'potion',
  },
  elixir_of_strength: {
    id: 'elixir_of_strength',
    name: 'Elixir of Strength',
    type: 'consumable',
    itemId: 'elixir-strength',
    basePrice: 300,
    rarity: RARITY.RARE,
    description: '+20% damage for 60 seconds.',
    effect: { buff: 'strength', duration: 60 },
    levelRequired: 12,
    category: 'potion',
  },
  elixir_of_iron: {
    id: 'elixir_of_iron',
    name: 'Elixir of Iron',
    type: 'consumable',
    itemId: 'elixir-iron',
    basePrice: 300,
    rarity: RARITY.RARE,
    description: '+25% defense for 60 seconds.',
    effect: { buff: 'defense', duration: 60 },
    levelRequired: 12,
    category: 'potion',
  },
  
  // ===================================
  // MISC ITEMS - General Merchant Stock
  // ===================================
  
  torch: {
    id: 'torch',
    name: 'Torch',
    type: 'misc',
    itemId: 'torch',
    basePrice: 15,
    rarity: RARITY.COMMON,
    description: 'Lights the way in dark places.',
    levelRequired: 1,
    category: 'misc',
  },
  rope: {
    id: 'rope',
    name: 'Rope',
    type: 'misc',
    itemId: 'rope',
    basePrice: 25,
    rarity: RARITY.COMMON,
    description: 'Useful for climbing and exploration.',
    levelRequired: 1,
    category: 'misc',
  },
  map_fragment: {
    id: 'map_fragment',
    name: 'Map Fragment',
    type: 'misc',
    itemId: 'map-fragment',
    basePrice: 100,
    rarity: RARITY.UNCOMMON,
    description: 'Reveals a section of the world map.',
    levelRequired: 3,
    category: 'misc',
  },
  rusty_key: {
    id: 'rusty_key',
    name: 'Rusty Key',
    type: 'misc',
    itemId: 'rusty-key',
    basePrice: 150,
    rarity: RARITY.UNCOMMON,
    description: 'Opens old locks. Consumable.',
    levelRequired: 1,
    category: 'misc',
  },
  skeleton_key: {
    id: 'skeleton_key',
    name: 'Skeleton Key',
    type: 'misc',
    itemId: 'skeleton-key',
    basePrice: 400,
    rarity: RARITY.RARE,
    description: 'Opens most locked chests and doors.',
    levelRequired: 8,
    category: 'misc',
  },
  homeward_bone: {
    id: 'homeward_bone',
    name: 'Homeward Bone',
    type: 'misc',
    itemId: 'homeward-bone',
    basePrice: 200,
    rarity: RARITY.UNCOMMON,
    description: 'Returns you to the last checkpoint.',
    levelRequired: 5,
    category: 'misc',
  },
  repair_powder: {
    id: 'repair_powder',
    name: 'Repair Powder',
    type: 'misc',
    itemId: 'repair-powder',
    basePrice: 100,
    rarity: RARITY.COMMON,
    description: 'Restores weapon durability.',
    levelRequired: 1,
    category: 'misc',
  },
  throwing_knife: {
    id: 'throwing_knife',
    name: 'Throwing Knife',
    type: 'misc',
    itemId: 'throwing-knife',
    basePrice: 30,
    rarity: RARITY.COMMON,
    description: 'Deals ranged damage. Stackable.',
    levelRequired: 1,
    category: 'misc',
  },
  firebomb: {
    id: 'firebomb',
    name: 'Firebomb',
    type: 'misc',
    itemId: 'firebomb',
    basePrice: 80,
    rarity: RARITY.UNCOMMON,
    description: 'Throwable explosive. Deals fire damage.',
    levelRequired: 4,
    category: 'misc',
  },
  
  // ===================================
  // CRAFTING MATERIALS - Phase 23
  // ===================================
  
  iron_ore_stack: {
    id: 'iron_ore_stack',
    name: 'Iron Ore',
    type: 'material',
    materialId: 'iron_ore',
    basePrice: 15,
    rarity: RARITY.COMMON,
    description: 'Raw iron for forging weapons and armor.',
    levelRequired: 1,
    category: 'material',
    quantity: 1,
  },
  copper_ore_stack: {
    id: 'copper_ore_stack',
    name: 'Copper Ore',
    type: 'material',
    materialId: 'copper_ore',
    basePrice: 10,
    rarity: RARITY.COMMON,
    description: 'Soft metal for basic crafting.',
    levelRequired: 1,
    category: 'material',
    quantity: 1,
  },
  healing_herb: {
    id: 'healing_herb',
    name: 'Healing Herb',
    type: 'material',
    materialId: 'healing_leaf',
    basePrice: 8,
    rarity: RARITY.COMMON,
    description: 'Basic herb for health potions.',
    levelRequired: 1,
    category: 'material',
    quantity: 1,
  },
  mana_bloom: {
    id: 'mana_bloom',
    name: 'Mana Bloom',
    type: 'material',
    materialId: 'mana_bloom',
    basePrice: 12,
    rarity: RARITY.COMMON,
    description: 'Mystical flower for mana potions.',
    levelRequired: 3,
    category: 'material',
    quantity: 1,
  },
  leather_scrap: {
    id: 'leather_scrap',
    name: 'Leather',
    type: 'material',
    materialId: 'crude_leather',
    basePrice: 10,
    rarity: RARITY.COMMON,
    description: 'Basic leather for armor crafting.',
    levelRequired: 1,
    category: 'material',
    quantity: 1,
  },
  cloth_bundle: {
    id: 'cloth_bundle',
    name: 'Cloth',
    type: 'material',
    materialId: 'cloth',
    basePrice: 6,
    rarity: RARITY.COMMON,
    description: 'Fabric for light armor and accessories.',
    levelRequired: 1,
    category: 'material',
    quantity: 1,
  },
  thread_spool: {
    id: 'thread_spool',
    name: 'Thread',
    type: 'material',
    materialId: 'thread',
    basePrice: 4,
    rarity: RARITY.COMMON,
    description: 'For sewing and crafting accessories.',
    levelRequired: 1,
    category: 'material',
    quantity: 1,
  },
  
  // ===================================
  // RECIPE SCROLLS - Phase 23
  // ===================================
  
  recipe_health_potion: {
    id: 'recipe_health_potion',
    name: 'Recipe: Health Potion',
    type: 'recipe',
    recipeId: 'health_potion',
    basePrice: 100,
    rarity: RARITY.UNCOMMON,
    description: 'Learn to craft Health Potions.',
    levelRequired: 1,
    category: 'recipe',
  },
  recipe_mana_potion: {
    id: 'recipe_mana_potion',
    name: 'Recipe: Mana Potion',
    type: 'recipe',
    recipeId: 'mana_potion',
    basePrice: 120,
    rarity: RARITY.UNCOMMON,
    description: 'Learn to craft Mana Potions.',
    levelRequired: 5,
    category: 'recipe',
  },
  recipe_stamina_potion: {
    id: 'recipe_stamina_potion',
    name: 'Recipe: Stamina Potion',
    type: 'recipe',
    recipeId: 'stamina_potion',
    basePrice: 100,
    rarity: RARITY.UNCOMMON,
    description: 'Learn to craft Stamina Potions.',
    levelRequired: 3,
    category: 'recipe',
  },
  recipe_iron_sword: {
    id: 'recipe_iron_sword',
    name: 'Recipe: Iron Sword',
    type: 'recipe',
    recipeId: 'iron_sword',
    basePrice: 150,
    rarity: RARITY.UNCOMMON,
    description: 'Learn to forge Iron Swords.',
    levelRequired: 3,
    category: 'recipe',
  },
  recipe_leather_armor: {
    id: 'recipe_leather_armor',
    name: 'Recipe: Leather Armor',
    type: 'recipe',
    recipeId: 'leather_armor',
    basePrice: 180,
    rarity: RARITY.UNCOMMON,
    description: 'Learn to craft Leather Armor.',
    levelRequired: 5,
    category: 'recipe',
  },
  recipe_strength_elixir: {
    id: 'recipe_strength_elixir',
    name: 'Recipe: Strength Elixir',
    type: 'recipe',
    recipeId: 'strength_elixir',
    basePrice: 300,
    rarity: RARITY.RARE,
    description: 'Learn to brew Strength Elixirs.',
    levelRequired: 10,
    category: 'recipe',
  },
};

// ========== MERCHANT INVENTORIES ==========
// Each merchant has a specific inventory based on their type.
// Items are filtered by player level at runtime.

export const MERCHANT_INVENTORIES = {
  blacksmith: {
    title: 'Blacksmith',
    icon: '⚒️',
    greeting: "Need something forged? I have the finest steel in the realm.",
    farewell: "May your blade strike true.",
    items: [
      // Swords
      'iron_sword', 'steel_sword', 'knight_blade', 'dark_edge',
      // Axes
      'hand_axe', 'battle_axe', 'executioner_axe',
      // Spears
      'wooden_spear', 'iron_spear', 'halberd',
      // Armor
      'leather_armor', 'chainmail_armor', 'knight_armor', 'obsidian_mail',
      // Shields
      'iron_shield', 'steel_shield', 'tower_shield',
      // Utility
      'repair_powder',
      // Phase 23: Crafting materials and recipes
      'iron_ore_stack', 'copper_ore_stack', 'leather_scrap',
      'recipe_iron_sword', 'recipe_leather_armor',
    ],
    specialStock: {
      // Items that only appear after certain conditions
      14: ['dark_edge', 'obsidian_mail'], // Level 14+ unlocks epic gear
    },
  },
  
  healer: {
    title: 'Healer',
    icon: '💚',
    greeting: "Rest your weary soul. I have remedies for all ailments.",
    farewell: "Go forth, and may these potions keep you whole.",
    items: [
      // Health potions
      'health_potion_s', 'health_potion_m', 'health_potion_l', 'health_potion_xl',
      // Stamina potions
      'stamina_potion', 'stamina_potion_l',
      // Curatives
      'antidote',
      // Elixirs (high level)
      'elixir_of_strength', 'elixir_of_iron',
      // Phase 23: Alchemy materials and recipes
      'healing_herb', 'mana_bloom',
      'recipe_health_potion', 'recipe_mana_potion', 'recipe_stamina_potion',
      'recipe_strength_elixir',
    ],
    specialStock: {
      10: ['elixir_of_strength', 'elixir_of_iron', 'recipe_strength_elixir'],
      15: ['health_potion_xl'],
    },
  },
  
  merchant: {
    title: 'General Merchant',
    icon: '🛒',
    greeting: "Welcome, traveler! I have all manner of goods.",
    farewell: "Safe travels, and come back anytime!",
    items: [
      // Basic consumables
      'health_potion_s', 'stamina_potion',
      // Exploration items
      'torch', 'rope', 'map_fragment',
      // Keys
      'rusty_key', 'skeleton_key',
      // Utility
      'homeward_bone', 'repair_powder',
      // Combat consumables
      'throwing_knife', 'firebomb',
      // Basic equipment for those without a blacksmith
      'leather_armor',
      // Phase 23: Basic crafting materials
      'iron_ore_stack', 'copper_ore_stack', 'healing_herb',
      'leather_scrap', 'cloth_bundle', 'thread_spool',
    ],
    specialStock: {
      5: ['homeward_bone', 'map_fragment'],
      8: ['skeleton_key'],
    },
  },
  
  elder: {
    title: 'Village Elder',
    icon: '📜',
    greeting: "Ah, a traveler. Perhaps I have something of use...",
    farewell: "The road ahead is perilous. Be cautious.",
    items: [
      // Knowledge items
      'map_fragment',
      // Rare keys
      'skeleton_key',
      // Teleport items
      'homeward_bone',
    ],
    specialStock: {},
  },
};

// ========== HELPER FUNCTIONS ==========

/**
 * Get items available for a merchant based on player level
 * @param {string} merchantType - Type of merchant (blacksmith, healer, merchant, elder)
 * @param {number} playerLevel - Current player level
 * @returns {Array} Array of available item IDs
 */
export function getAvailableItems(merchantType, playerLevel) {
  const inventory = MERCHANT_INVENTORIES[merchantType];
  if (!inventory) return [];
  
  // Filter items by level requirement
  const available = inventory.items.filter(itemId => {
    const item = SHOP_ITEMS[itemId];
    if (!item) return false;
    return item.levelRequired <= playerLevel;
  });
  
  return available;
}

/**
 * Get price of an item with rarity multiplier
 * @param {object} item - Item definition from SHOP_ITEMS
 * @param {boolean} forSale - If true, returns sell price (50% of buy)
 * @returns {number} Final price
 */
export function getItemPrice(item, forSale = false) {
  const basePrice = item.basePrice || 100;
  const rarityMult = RARITY_PRICE_MULT[item.rarity?.id || 'common'] || 1.0;
  const price = Math.round(basePrice * rarityMult);
  
  return forSale ? Math.round(price * SELL_RATIO) : price;
}

/**
 * Check if an item is unlocked for a player
 * @param {string} itemId - Item ID
 * @param {number} playerLevel - Player's current level
 * @returns {boolean}
 */
export function isItemUnlocked(itemId, playerLevel) {
  const item = SHOP_ITEMS[itemId];
  if (!item) return false;
  return item.levelRequired <= playerLevel;
}

/**
 * Get all items of a specific category
 * @param {string} category - Category (weapon, armor, shield, potion, misc)
 * @returns {Array} Array of item definitions
 */
export function getItemsByCategory(category) {
  return Object.values(SHOP_ITEMS).filter(item => item.category === category);
}

// Price reference for balancing:
// Early game (Lv1-5):   50-200 gold
// Mid game (Lv6-12):    200-1000 gold  
// Late game (Lv13+):    1000+ gold
// Epic items:           1500-2000+ gold
