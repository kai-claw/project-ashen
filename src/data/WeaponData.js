/**
 * WeaponData.js - Comprehensive Weapon System
 * Phase 19: Weapon Variety & Animations
 * 
 * Defines weapon categories, stats, movesets, and scaling.
 * Integrates with MerchantData.js and EquipmentManager.js
 */

// ========== WEAPON CATEGORIES ==========
export const WEAPON_CATEGORY = {
  SWORD: {
    id: 'sword',
    name: 'Sword',
    description: 'Balanced weapons with good speed and damage.',
    icon: '⚔️',
    baseSpeed: 1.0,
    baseRange: 1.0,
    baseDamage: 1.0,
    staminaMult: 1.0,
    primaryScaling: 'STR',  // Strength
    secondaryScaling: 'DEX', // Dexterity
    scalingRatio: [0.6, 0.4], // 60% STR, 40% DEX
  },
  AXE: {
    id: 'axe',
    name: 'Axe',
    description: 'Slow but devastating weapons that cleave through armor.',
    icon: '🪓',
    baseSpeed: 0.7,
    baseRange: 0.9,
    baseDamage: 1.4,
    staminaMult: 1.3,
    primaryScaling: 'STR',
    secondaryScaling: null,
    scalingRatio: [1.0, 0],
  },
  SPEAR: {
    id: 'spear',
    name: 'Spear',
    description: 'Long reach weapons for keeping enemies at distance.',
    icon: '🔱',
    baseSpeed: 0.9,
    baseRange: 1.5,
    baseDamage: 0.9,
    staminaMult: 0.9,
    primaryScaling: 'DEX',
    secondaryScaling: 'STR',
    scalingRatio: [0.6, 0.4],
  },
  DAGGER: {
    id: 'dagger',
    name: 'Dagger',
    description: 'Very fast weapons with lower damage but high crit potential.',
    icon: '🗡️',
    baseSpeed: 1.5,
    baseRange: 0.6,
    baseDamage: 0.6,
    staminaMult: 0.6,
    primaryScaling: 'DEX',
    secondaryScaling: null,
    scalingRatio: [1.0, 0],
  },
  GREATSWORD: {
    id: 'greatsword',
    name: 'Greatsword',
    description: 'Massive blades dealing tremendous damage but very slow.',
    icon: '⚔️',
    baseSpeed: 0.5,
    baseRange: 1.3,
    baseDamage: 1.8,
    staminaMult: 1.6,
    primaryScaling: 'STR',
    secondaryScaling: null,
    scalingRatio: [1.0, 0],
  },
};

// ========== RARITY MODIFIERS ==========
export const WEAPON_RARITY = {
  COMMON: {
    id: 'common',
    name: 'Common',
    color: '#888888',
    hexColor: 0x888888,
    statMult: 1.0,
    critBonus: 0,
    glowIntensity: 0,
  },
  UNCOMMON: {
    id: 'uncommon',
    name: 'Uncommon',
    color: '#4ade80',
    hexColor: 0x4ade80,
    statMult: 1.2,
    critBonus: 2,
    glowIntensity: 0.15,
  },
  RARE: {
    id: 'rare',
    name: 'Rare',
    color: '#60a5fa',
    hexColor: 0x60a5fa,
    statMult: 1.5,
    critBonus: 5,
    glowIntensity: 0.3,
  },
  EPIC: {
    id: 'epic',
    name: 'Epic',
    color: '#c084fc',
    hexColor: 0xc084fc,
    statMult: 1.8,
    critBonus: 8,
    glowIntensity: 0.5,
  },
  LEGENDARY: {
    id: 'legendary',
    name: 'Legendary',
    color: '#f97316',
    hexColor: 0xf97316,
    statMult: 2.2,
    critBonus: 12,
    glowIntensity: 0.8,
  },
};

// ========== ATTACK MOVESETS ==========
export const MOVESETS = {
  // ===== SWORDS =====
  sword: {
    light: {
      name: 'Horizontal Slash',
      animation: 'sword_slash_h',
      damageMultiplier: 1.0,
      staminaCost: 10,
      duration: 0.4,      // seconds
      windupTime: 0.1,    // before damage
      recoveryTime: 0.2,  // after damage
      hitboxWidth: 1.2,
      hitboxDepth: 0.8,
      canCombo: true,
      comboWindow: 0.3,
    },
    heavy: {
      name: 'Overhead Chop',
      animation: 'sword_chop',
      damageMultiplier: 1.8,
      staminaCost: 25,
      duration: 0.7,
      windupTime: 0.25,
      recoveryTime: 0.35,
      hitboxWidth: 0.8,
      hitboxDepth: 1.0,
      canCombo: false,
      knockback: 2.0,
    },
  },
  
  // ===== AXES =====
  axe: {
    light: {
      name: 'Wide Swing',
      animation: 'axe_swing',
      damageMultiplier: 1.2,
      staminaCost: 15,
      duration: 0.55,
      windupTime: 0.2,
      recoveryTime: 0.25,
      hitboxWidth: 1.6,
      hitboxDepth: 0.7,
      canCombo: true,
      comboWindow: 0.25,
    },
    heavy: {
      name: 'Overhead Slam',
      animation: 'axe_slam',
      damageMultiplier: 2.2,
      staminaCost: 35,
      duration: 0.9,
      windupTime: 0.35,
      recoveryTime: 0.4,
      hitboxWidth: 1.0,
      hitboxDepth: 1.2,
      canCombo: false,
      knockback: 3.5,
      groundPound: true, // Creates small AoE
    },
  },
  
  // ===== SPEARS =====
  spear: {
    light: {
      name: 'Forward Thrust',
      animation: 'spear_thrust',
      damageMultiplier: 0.9,
      staminaCost: 8,
      duration: 0.35,
      windupTime: 0.08,
      recoveryTime: 0.18,
      hitboxWidth: 0.4,
      hitboxDepth: 2.0,
      canCombo: true,
      comboWindow: 0.35,
      piercing: true, // Can hit multiple enemies
    },
    heavy: {
      name: 'Sweeping Spin',
      animation: 'spear_spin',
      damageMultiplier: 1.5,
      staminaCost: 28,
      duration: 0.75,
      windupTime: 0.2,
      recoveryTime: 0.3,
      hitboxWidth: 2.2,
      hitboxDepth: 2.2,
      canCombo: false,
      knockback: 2.0,
      areaAttack: true,
    },
  },
  
  // ===== DAGGERS =====
  dagger: {
    light: {
      name: 'Quick Stab',
      animation: 'dagger_stab',
      damageMultiplier: 0.6,
      staminaCost: 5,
      duration: 0.2,
      windupTime: 0.04,
      recoveryTime: 0.1,
      hitboxWidth: 0.5,
      hitboxDepth: 0.6,
      canCombo: true,
      comboWindow: 0.4,
      critBonus: 5, // Extra crit chance
    },
    heavy: {
      name: 'Rapid Multi-Stab',
      animation: 'dagger_flurry',
      damageMultiplier: 1.6, // Total (multiple small hits)
      staminaCost: 20,
      duration: 0.5,
      windupTime: 0.05,
      recoveryTime: 0.2,
      hitboxWidth: 0.6,
      hitboxDepth: 0.8,
      canCombo: false,
      multiHit: 4, // Number of hits
      critBonus: 10,
    },
  },
  
  // ===== GREATSWORDS =====
  greatsword: {
    light: {
      name: 'Horizontal Sweep',
      animation: 'gs_sweep',
      damageMultiplier: 1.4,
      staminaCost: 20,
      duration: 0.7,
      windupTime: 0.25,
      recoveryTime: 0.35,
      hitboxWidth: 2.0,
      hitboxDepth: 1.0,
      canCombo: true,
      comboWindow: 0.2,
      knockback: 1.5,
    },
    heavy: {
      name: 'Vertical Slam',
      animation: 'gs_slam',
      damageMultiplier: 2.5,
      staminaCost: 45,
      duration: 1.1,
      windupTime: 0.45,
      recoveryTime: 0.5,
      hitboxWidth: 1.2,
      hitboxDepth: 1.5,
      canCombo: false,
      knockback: 4.0,
      groundPound: true,
      stagger: true, // Guaranteed stagger on hit
    },
  },
};

// ========== WEAPON DEFINITIONS ==========
// These integrate with existing shop/loot systems
export const WEAPONS = {
  // ========== STARTING WEAPON ==========
  iron_sword: {
    id: 'iron_sword',
    name: 'Iron Sword',
    category: WEAPON_CATEGORY.SWORD,
    baseDamage: 10,
    baseSpeed: 1.0,
    baseRange: 1.0,
    baseCritChance: 5,
    staminaCost: 10,
    moveset: MOVESETS.sword,
    description: 'A sturdy iron blade. The standard weapon of soldiers.',
    visualModel: 'sword',
    levelRequired: 1,
  },
  
  // ========== SWORDS ==========
  steel_sword: {
    id: 'steel_sword',
    name: 'Steel Sword',
    category: WEAPON_CATEGORY.SWORD,
    baseDamage: 18,
    baseSpeed: 1.05,
    baseRange: 1.0,
    baseCritChance: 6,
    staminaCost: 10,
    moveset: MOVESETS.sword,
    description: 'Tempered steel, sharp and reliable.',
    visualModel: 'longsword',
    levelRequired: 5,
  },
  knight_blade: {
    id: 'knight_blade',
    name: "Knight's Blade",
    category: WEAPON_CATEGORY.SWORD,
    baseDamage: 25,
    baseSpeed: 1.1,
    baseRange: 1.1,
    baseCritChance: 8,
    staminaCost: 12,
    moveset: MOVESETS.sword,
    description: "A finely crafted sword bearing a knight's crest.",
    visualModel: 'longsword',
    levelRequired: 10,
  },
  dark_edge: {
    id: 'dark_edge',
    name: 'Dark Edge',
    category: WEAPON_CATEGORY.SWORD,
    baseDamage: 35,
    baseSpeed: 0.95,
    baseRange: 1.15,
    baseCritChance: 12,
    staminaCost: 14,
    moveset: MOVESETS.sword,
    description: 'A blade forged in shadow. Hungers for souls.',
    visualModel: 'longsword',
    specialEffect: 'lifesteal', // 5% damage healed
    levelRequired: 15,
  },
  
  // ========== AXES ==========
  hand_axe: {
    id: 'hand_axe',
    name: 'Hand Axe',
    category: WEAPON_CATEGORY.AXE,
    baseDamage: 14,
    baseSpeed: 0.75,
    baseRange: 0.85,
    baseCritChance: 3,
    staminaCost: 14,
    moveset: MOVESETS.axe,
    description: 'A simple woodcutter turned weapon.',
    visualModel: 'axe',
    levelRequired: 1,
  },
  battle_axe: {
    id: 'battle_axe',
    name: 'Battle Axe',
    category: WEAPON_CATEGORY.AXE,
    baseDamage: 26,
    baseSpeed: 0.7,
    baseRange: 0.9,
    baseCritChance: 4,
    staminaCost: 18,
    moveset: MOVESETS.axe,
    description: 'Heavy and brutal. Cleaves through armor.',
    visualModel: 'axe',
    levelRequired: 6,
  },
  executioner_axe: {
    id: 'executioner_axe',
    name: "Executioner's Axe",
    category: WEAPON_CATEGORY.AXE,
    baseDamage: 38,
    baseSpeed: 0.6,
    baseRange: 0.95,
    baseCritChance: 6,
    staminaCost: 22,
    moveset: MOVESETS.axe,
    description: 'Once used for grim justice. Still eager.',
    visualModel: 'axe',
    specialEffect: 'execute', // +50% damage vs enemies below 30% HP
    levelRequired: 12,
  },
  
  // ========== SPEARS ==========
  wooden_spear: {
    id: 'wooden_spear',
    name: 'Wooden Spear',
    category: WEAPON_CATEGORY.SPEAR,
    baseDamage: 8,
    baseSpeed: 0.95,
    baseRange: 1.4,
    baseCritChance: 4,
    staminaCost: 7,
    moveset: MOVESETS.spear,
    description: 'Simple but effective. Keeps enemies at distance.',
    visualModel: 'spear',
    levelRequired: 1,
  },
  iron_spear: {
    id: 'iron_spear',
    name: 'Iron Spear',
    category: WEAPON_CATEGORY.SPEAR,
    baseDamage: 16,
    baseSpeed: 0.9,
    baseRange: 1.5,
    baseCritChance: 5,
    staminaCost: 9,
    moveset: MOVESETS.spear,
    description: 'Iron-tipped for piercing strikes.',
    visualModel: 'spear',
    levelRequired: 4,
  },
  halberd: {
    id: 'halberd',
    name: 'Halberd',
    category: WEAPON_CATEGORY.SPEAR,
    baseDamage: 28,
    baseSpeed: 0.8,
    baseRange: 1.6,
    baseCritChance: 7,
    staminaCost: 14,
    moveset: MOVESETS.spear,
    description: 'Versatile polearm with axe blade and spike.',
    visualModel: 'spear',
    specialEffect: 'armorPierce', // Ignores 20% defense
    levelRequired: 11,
  },
  
  // ========== DAGGERS ==========
  rusty_dagger: {
    id: 'rusty_dagger',
    name: 'Rusty Dagger',
    category: WEAPON_CATEGORY.DAGGER,
    baseDamage: 5,
    baseSpeed: 1.5,
    baseRange: 0.55,
    baseCritChance: 8,
    staminaCost: 4,
    moveset: MOVESETS.dagger,
    description: 'A worn blade, still quick.',
    visualModel: 'dagger',
    levelRequired: 1,
  },
  steel_dagger: {
    id: 'steel_dagger',
    name: 'Steel Dagger',
    category: WEAPON_CATEGORY.DAGGER,
    baseDamage: 10,
    baseSpeed: 1.55,
    baseRange: 0.6,
    baseCritChance: 12,
    staminaCost: 5,
    moveset: MOVESETS.dagger,
    description: 'A well-balanced throwing knife.',
    visualModel: 'dagger',
    levelRequired: 4,
  },
  shadow_fang: {
    id: 'shadow_fang',
    name: 'Shadow Fang',
    category: WEAPON_CATEGORY.DAGGER,
    baseDamage: 15,
    baseSpeed: 1.6,
    baseRange: 0.65,
    baseCritChance: 18,
    staminaCost: 6,
    moveset: MOVESETS.dagger,
    description: 'A dagger forged in darkness. Strikes from the shadows.',
    visualModel: 'dagger',
    specialEffect: 'backstab', // +100% damage from behind
    levelRequired: 10,
  },
  
  // ========== GREATSWORDS ==========
  claymore: {
    id: 'claymore',
    name: 'Claymore',
    category: WEAPON_CATEGORY.GREATSWORD,
    baseDamage: 30,
    baseSpeed: 0.55,
    baseRange: 1.25,
    baseCritChance: 4,
    staminaCost: 22,
    moveset: MOVESETS.greatsword,
    description: 'A massive two-handed sword.',
    visualModel: 'greatsword',
    levelRequired: 6,
  },
  executioner_blade: {
    id: 'executioner_blade',
    name: 'Executioner Blade',
    category: WEAPON_CATEGORY.GREATSWORD,
    baseDamage: 42,
    baseSpeed: 0.5,
    baseRange: 1.35,
    baseCritChance: 5,
    staminaCost: 28,
    moveset: MOVESETS.greatsword,
    description: 'Heavy blade meant to end lives.',
    visualModel: 'greatsword',
    levelRequired: 12,
  },
  void_reaver: {
    id: 'void_reaver',
    name: 'Void Reaver',
    category: WEAPON_CATEGORY.GREATSWORD,
    baseDamage: 55,
    baseSpeed: 0.45,
    baseRange: 1.4,
    baseCritChance: 8,
    staminaCost: 32,
    moveset: MOVESETS.greatsword,
    description: 'A blade forged in the void. Reality bends around its edge.',
    visualModel: 'greatsword',
    specialEffect: 'voidRift', // Attacks leave damaging void zones
    levelRequired: 18,
  },
};

// ========== STAT SCALING ==========
/**
 * Calculate weapon damage with stat scaling
 * @param {object} weapon - Weapon definition
 * @param {object} playerStats - Player's stats (STR, DEX, etc.)
 * @param {object} rarity - Rarity tier
 * @returns {number} Final damage value
 */
export function calculateWeaponDamage(weapon, playerStats, rarity = WEAPON_RARITY.COMMON) {
  const category = weapon.category;
  let baseDamage = weapon.baseDamage * rarity.statMult;
  
  // Apply category damage modifier
  baseDamage *= category.baseDamage;
  
  // Apply stat scaling
  const scalingRatio = category.scalingRatio;
  let scalingBonus = 0;
  
  // Primary stat scaling (e.g., STR for swords)
  if (category.primaryScaling && playerStats[category.primaryScaling]) {
    const statValue = playerStats[category.primaryScaling];
    // Each point above 10 adds 2% damage (diminishing returns formula)
    const bonusPercent = Math.max(0, (statValue - 10) * 0.02);
    scalingBonus += baseDamage * bonusPercent * scalingRatio[0];
  }
  
  // Secondary stat scaling (e.g., DEX for swords)
  if (category.secondaryScaling && playerStats[category.secondaryScaling]) {
    const statValue = playerStats[category.secondaryScaling];
    const bonusPercent = Math.max(0, (statValue - 10) * 0.02);
    scalingBonus += baseDamage * bonusPercent * scalingRatio[1];
  }
  
  return Math.round(baseDamage + scalingBonus);
}

/**
 * Calculate final attack speed
 * @param {object} weapon - Weapon definition
 * @param {object} playerStats - Player stats
 * @returns {number} Speed multiplier (1.0 = normal)
 */
export function calculateAttackSpeed(weapon, playerStats) {
  let speed = weapon.baseSpeed * weapon.category.baseSpeed;
  
  // DEX adds attack speed (each point above 10 = +1% speed)
  if (playerStats.DEX) {
    const dexBonus = Math.max(0, (playerStats.DEX - 10) * 0.01);
    speed *= (1 + dexBonus);
  }
  
  return speed;
}

/**
 * Calculate stamina cost for attack
 * @param {object} weapon - Weapon definition
 * @param {string} attackType - 'light' or 'heavy'
 * @returns {number} Stamina cost
 */
export function calculateStaminaCost(weapon, attackType) {
  const moveset = weapon.moveset[attackType];
  if (!moveset) return weapon.staminaCost;
  
  let cost = moveset.staminaCost * weapon.category.staminaMult;
  return Math.round(cost);
}

/**
 * Calculate effective range
 * @param {object} weapon - Weapon definition
 * @returns {number} Range multiplier
 */
export function calculateRange(weapon) {
  return weapon.baseRange * weapon.category.baseRange;
}

/**
 * Calculate crit chance
 * @param {object} weapon - Weapon definition
 * @param {object} playerStats - Player stats
 * @param {object} rarity - Rarity tier
 * @param {string} attackType - 'light' or 'heavy' for moveset bonuses
 * @returns {number} Crit chance percentage
 */
export function calculateCritChance(weapon, playerStats, rarity = WEAPON_RARITY.COMMON, attackType = 'light') {
  let crit = weapon.baseCritChance + rarity.critBonus;
  
  // Moveset crit bonus
  const moveset = weapon.moveset[attackType];
  if (moveset && moveset.critBonus) {
    crit += moveset.critBonus;
  }
  
  // DEX adds crit chance (each point above 10 = +0.5% crit)
  if (playerStats.DEX) {
    crit += Math.max(0, (playerStats.DEX - 10) * 0.5);
  }
  
  return Math.min(crit, 75); // Cap at 75%
}

/**
 * Get weapon by ID
 * @param {string} weaponId - Weapon ID
 * @returns {object|null} Weapon definition or null
 */
export function getWeapon(weaponId) {
  return WEAPONS[weaponId] || null;
}

/**
 * Get all weapons of a specific category
 * @param {string} categoryId - Category ID (sword, axe, etc.)
 * @returns {Array} Array of weapon definitions
 */
export function getWeaponsByCategory(categoryId) {
  return Object.values(WEAPONS).filter(w => w.category.id === categoryId);
}

/**
 * Get weapons available at player level
 * @param {number} playerLevel - Player's current level
 * @returns {Array} Array of weapon definitions
 */
export function getWeaponsForLevel(playerLevel) {
  return Object.values(WEAPONS).filter(w => w.levelRequired <= playerLevel);
}
