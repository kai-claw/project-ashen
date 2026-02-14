/**
 * SpellData.js - Phase 20: Magic System
 * 
 * Comprehensive spell definitions for Project Ashen.
 * Spells are categorized into: Offensive, Defensive, Healing, Buff
 * 
 * Scaling:
 * - Damage spells scale with INT stat
 * - Healing spells scale with INT/WIS hybrid
 * - Buff durations and effects scale with INT
 */

/**
 * Spell categories
 */
export const SPELL_CATEGORIES = {
  OFFENSIVE: 'offensive',
  DEFENSIVE: 'defensive',
  HEALING: 'healing',
  BUFF: 'buff'
};

/**
 * Spell targeting types
 */
export const SPELL_TARGET = {
  SELF: 'self',           // Affects caster only
  ENEMY: 'enemy',         // Single enemy target
  DIRECTION: 'direction', // Fires in facing direction (projectile)
  AOE: 'aoe',             // Area around target point
  AOE_SELF: 'aoe_self'    // Area around caster
};

/**
 * Spell damage types
 */
export const SPELL_DAMAGE_TYPE = {
  FIRE: 'fire',
  LIGHTNING: 'lightning',
  ICE: 'ice',
  ARCANE: 'arcane',
  HOLY: 'holy',
  DARK: 'dark'
};

/**
 * Base spell definitions
 * damage/healing are base values before INT scaling
 */
export const SPELL_DATA = {
  
  // ===== OFFENSIVE SPELLS =====
  
  fireball: {
    id: 'fireball',
    name: 'Fireball',
    category: SPELL_CATEGORIES.OFFENSIVE,
    targetType: SPELL_TARGET.DIRECTION,
    damageType: SPELL_DAMAGE_TYPE.FIRE,
    manaCost: 25,
    cooldown: 3.0,    // seconds
    castTime: 0.3,    // seconds (brief pause)
    baseDamage: 45,
    range: 20,        // units
    projectileSpeed: 18,
    aoeRadius: 3,     // explosion radius
    description: 'Hurl a blazing fireball that explodes on impact, dealing fire damage to all nearby enemies.',
    unlockLevel: 1,   // Available from start
    icon: '🔥',
    effects: ['burn'] // Can apply burn DoT
  },
  
  lightningBolt: {
    id: 'lightningBolt',
    name: 'Lightning Bolt',
    category: SPELL_CATEGORIES.OFFENSIVE,
    targetType: SPELL_TARGET.DIRECTION,
    damageType: SPELL_DAMAGE_TYPE.LIGHTNING,
    manaCost: 30,
    cooldown: 4.0,
    castTime: 0.5,
    baseDamage: 60,
    range: 25,
    projectileSpeed: 35, // Faster than fireball
    aoeRadius: 0,        // Single target
    description: 'Call down a bolt of lightning that strikes instantly, dealing heavy lightning damage.',
    unlockLevel: 5,
    icon: '⚡',
    effects: ['stun']    // Brief stun chance
  },
  
  iceShard: {
    id: 'iceShard',
    name: 'Ice Shard',
    category: SPELL_CATEGORIES.OFFENSIVE,
    targetType: SPELL_TARGET.DIRECTION,
    damageType: SPELL_DAMAGE_TYPE.ICE,
    manaCost: 15,
    cooldown: 1.5,
    castTime: 0.2,
    baseDamage: 25,
    range: 18,
    projectileSpeed: 22,
    aoeRadius: 0,
    description: 'Launch a razor-sharp shard of ice. Quick to cast, moderate damage.',
    unlockLevel: 1,
    icon: '❄️',
    effects: ['slow']    // Slows enemy movement
  },
  
  arcaneMissile: {
    id: 'arcaneMissile',
    name: 'Arcane Missile',
    category: SPELL_CATEGORIES.OFFENSIVE,
    targetType: SPELL_TARGET.DIRECTION,
    damageType: SPELL_DAMAGE_TYPE.ARCANE,
    manaCost: 20,
    cooldown: 2.0,
    castTime: 0.1,
    baseDamage: 35,
    range: 22,
    projectileSpeed: 25,
    aoeRadius: 0,
    description: 'Fire a bolt of pure arcane energy. Fast, reliable, always hits.',
    unlockLevel: 3,
    icon: '✨',
    effects: []
  },
  
  darkOrb: {
    id: 'darkOrb',
    name: 'Dark Orb',
    category: SPELL_CATEGORIES.OFFENSIVE,
    targetType: SPELL_TARGET.DIRECTION,
    damageType: SPELL_DAMAGE_TYPE.DARK,
    manaCost: 35,
    cooldown: 5.0,
    castTime: 0.8,
    baseDamage: 75,
    range: 15,
    projectileSpeed: 10, // Slow but powerful
    aoeRadius: 4,
    description: 'Conjure a slow-moving orb of darkness that devastates anything it touches.',
    unlockLevel: 8,
    icon: '🌑',
    effects: ['weaken']  // Reduces enemy damage
  },
  
  flameWave: {
    id: 'flameWave',
    name: 'Flame Wave',
    category: SPELL_CATEGORIES.OFFENSIVE,
    targetType: SPELL_TARGET.AOE_SELF,
    damageType: SPELL_DAMAGE_TYPE.FIRE,
    manaCost: 40,
    cooldown: 6.0,
    castTime: 0.6,
    baseDamage: 55,
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 6,        // Around caster
    description: 'Release a wave of fire in all directions, scorching nearby enemies.',
    unlockLevel: 6,
    icon: '🌊',
    effects: ['burn']
  },
  
  spark: {
    id: 'spark',
    name: 'Spark',
    category: SPELL_CATEGORIES.OFFENSIVE,
    targetType: SPELL_TARGET.DIRECTION,
    damageType: SPELL_DAMAGE_TYPE.LIGHTNING,
    manaCost: 8,
    cooldown: 0.8,
    castTime: 0,         // Instant
    baseDamage: 12,
    range: 12,
    projectileSpeed: 30,
    aoeRadius: 0,
    description: 'A quick spark of electricity. Low damage but nearly instant.',
    unlockLevel: 1,      // Starter spell
    icon: '⚡',
    effects: []
  },
  
  // ===== DEFENSIVE SPELLS =====
  
  magicShield: {
    id: 'magicShield',
    name: 'Magic Shield',
    category: SPELL_CATEGORIES.DEFENSIVE,
    targetType: SPELL_TARGET.SELF,
    damageType: null,
    manaCost: 30,
    cooldown: 15.0,
    castTime: 0.4,
    baseDamage: 0,
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 0,
    shieldAmount: 50,    // Absorbs this much damage (scales with INT)
    duration: 10.0,      // seconds
    description: 'Conjure a magical barrier that absorbs incoming damage.',
    unlockLevel: 2,
    icon: '🛡️',
    effects: ['shield']
  },
  
  ward: {
    id: 'ward',
    name: 'Ward',
    category: SPELL_CATEGORIES.DEFENSIVE,
    targetType: SPELL_TARGET.SELF,
    damageType: null,
    manaCost: 20,
    cooldown: 8.0,
    castTime: 0.2,
    baseDamage: 0,
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 0,
    damageReduction: 0.3, // 30% damage reduction
    duration: 6.0,
    description: 'Cast a protective ward that reduces all incoming damage.',
    unlockLevel: 4,
    icon: '🔮',
    effects: ['ward']
  },
  
  iceArmor: {
    id: 'iceArmor',
    name: 'Ice Armor',
    category: SPELL_CATEGORIES.DEFENSIVE,
    targetType: SPELL_TARGET.SELF,
    damageType: SPELL_DAMAGE_TYPE.ICE,
    manaCost: 35,
    cooldown: 20.0,
    castTime: 0.5,
    baseDamage: 0,
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 0,
    shieldAmount: 40,
    duration: 15.0,
    reflectDamage: 10,   // Damages attackers
    description: 'Encase yourself in ice armor. Absorbs damage and hurts melee attackers.',
    unlockLevel: 7,
    icon: '🧊',
    effects: ['shield', 'reflect']
  },
  
  // ===== HEALING SPELLS =====
  
  minorHeal: {
    id: 'minorHeal',
    name: 'Minor Heal',
    category: SPELL_CATEGORIES.HEALING,
    targetType: SPELL_TARGET.SELF,
    damageType: null,
    manaCost: 20,
    cooldown: 5.0,
    castTime: 0.8,       // Longer cast = interruptible
    baseDamage: 0,
    baseHealing: 30,     // Scales with INT
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 0,
    description: 'Channel healing energy to restore a small amount of health.',
    unlockLevel: 1,      // Starter spell option
    icon: '💚',
    effects: ['heal']
  },
  
  healSelf: {
    id: 'healSelf',
    name: 'Heal',
    category: SPELL_CATEGORIES.HEALING,
    targetType: SPELL_TARGET.SELF,
    damageType: null,
    manaCost: 40,
    cooldown: 10.0,
    castTime: 1.2,
    baseDamage: 0,
    baseHealing: 60,
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 0,
    description: 'A powerful healing spell that restores a significant amount of health.',
    unlockLevel: 5,
    icon: '💖',
    effects: ['heal']
  },
  
  regeneration: {
    id: 'regeneration',
    name: 'Regeneration',
    category: SPELL_CATEGORIES.HEALING,
    targetType: SPELL_TARGET.SELF,
    damageType: null,
    manaCost: 35,
    cooldown: 20.0,
    castTime: 0.5,
    baseDamage: 0,
    baseHealing: 8,      // Per second
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 0,
    duration: 15.0,
    description: 'Gradually restore health over time.',
    unlockLevel: 4,
    icon: '🌿',
    effects: ['regen']
  },
  
  lifeSteal: {
    id: 'lifeSteal',
    name: 'Life Steal',
    category: SPELL_CATEGORIES.HEALING,
    targetType: SPELL_TARGET.DIRECTION,
    damageType: SPELL_DAMAGE_TYPE.DARK,
    manaCost: 30,
    cooldown: 8.0,
    castTime: 0.6,
    baseDamage: 25,
    baseHealing: 20,     // Heals for portion of damage
    range: 15,
    projectileSpeed: 12,
    aoeRadius: 0,
    description: 'Drain life force from an enemy, damaging them and healing yourself.',
    unlockLevel: 9,
    icon: '🩸',
    effects: ['heal', 'damage']
  },
  
  // ===== BUFF SPELLS =====
  
  haste: {
    id: 'haste',
    name: 'Haste',
    category: SPELL_CATEGORIES.BUFF,
    targetType: SPELL_TARGET.SELF,
    damageType: null,
    manaCost: 25,
    cooldown: 30.0,
    castTime: 0.3,
    baseDamage: 0,
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 0,
    speedBonus: 0.4,     // +40% movement speed
    duration: 8.0,
    description: 'Temporarily increase your movement speed.',
    unlockLevel: 3,
    icon: '💨',
    effects: ['speed']
  },
  
  strengthBoost: {
    id: 'strengthBoost',
    name: 'Might',
    category: SPELL_CATEGORIES.BUFF,
    targetType: SPELL_TARGET.SELF,
    damageType: null,
    manaCost: 30,
    cooldown: 25.0,
    castTime: 0.4,
    baseDamage: 0,
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 0,
    damageBonus: 0.5,    // +50% melee damage
    duration: 10.0,
    description: 'Infuse yourself with magical strength, boosting melee damage.',
    unlockLevel: 4,
    icon: '💪',
    effects: ['damage_boost']
  },
  
  magicBarrier: {
    id: 'magicBarrier',
    name: 'Magic Barrier',
    category: SPELL_CATEGORIES.BUFF,
    targetType: SPELL_TARGET.SELF,
    damageType: null,
    manaCost: 45,
    cooldown: 40.0,
    castTime: 0.6,
    baseDamage: 0,
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 0,
    magicResist: 0.5,    // +50% magic resist
    duration: 12.0,
    description: 'Create a barrier that greatly reduces incoming magic damage.',
    unlockLevel: 6,
    icon: '🔷',
    effects: ['magic_resist']
  },
  
  focus: {
    id: 'focus',
    name: 'Focus',
    category: SPELL_CATEGORIES.BUFF,
    targetType: SPELL_TARGET.SELF,
    damageType: null,
    manaCost: 20,
    cooldown: 20.0,
    castTime: 0.2,
    baseDamage: 0,
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 0,
    spellDamageBonus: 0.35, // +35% spell damage
    duration: 8.0,
    description: 'Enter a state of intense focus, increasing spell damage.',
    unlockLevel: 5,
    icon: '🎯',
    effects: ['spell_boost']
  },
  
  battleCry: {
    id: 'battleCry',
    name: 'Battle Cry',
    category: SPELL_CATEGORIES.BUFF,
    targetType: SPELL_TARGET.SELF,
    damageType: null,
    manaCost: 40,
    cooldown: 45.0,
    castTime: 0.3,
    baseDamage: 0,
    range: 0,
    projectileSpeed: 0,
    aoeRadius: 0,
    damageBonus: 0.25,
    speedBonus: 0.2,
    attackSpeedBonus: 0.3,
    duration: 12.0,
    description: 'A mighty battle cry that boosts all combat abilities temporarily.',
    unlockLevel: 10,
    icon: '📣',
    effects: ['damage_boost', 'speed', 'attack_speed']
  }
};

/**
 * Get all spells in a category
 * @param {string} category - SPELL_CATEGORIES value
 * @returns {Object[]} Array of spell objects
 */
export function getSpellsByCategory(category) {
  return Object.values(SPELL_DATA).filter(spell => spell.category === category);
}

/**
 * Get all spells available at or below a given level
 * @param {number} level - Player level
 * @returns {Object[]} Array of spell objects
 */
export function getSpellsForLevel(level) {
  return Object.values(SPELL_DATA).filter(spell => spell.unlockLevel <= level);
}

/**
 * Get starter spells (level 1)
 * @returns {Object[]}
 */
export function getStarterSpells() {
  return getSpellsForLevel(1);
}

/**
 * Calculate scaled damage for a spell
 * @param {Object} spell - Spell data object
 * @param {number} intStat - Player's INT stat
 * @returns {number} Scaled damage
 */
export function calculateSpellDamage(spell, intStat) {
  if (!spell.baseDamage) return 0;
  
  // INT scaling: +3% damage per INT point
  const intMultiplier = 1.0 + (intStat * 0.03);
  
  return Math.floor(spell.baseDamage * intMultiplier);
}

/**
 * Calculate scaled healing for a spell
 * @param {Object} spell - Spell data object
 * @param {number} intStat - Player's INT stat
 * @param {number} wisStat - Player's WIS stat (if available)
 * @returns {number} Scaled healing
 */
export function calculateSpellHealing(spell, intStat, wisStat = 0) {
  if (!spell.baseHealing) return 0;
  
  // Healing scales with average of INT and WIS, or just INT if no WIS
  const avgStat = wisStat > 0 ? (intStat + wisStat) / 2 : intStat;
  
  // +3% healing per stat point
  const statMultiplier = 1.0 + (avgStat * 0.03);
  
  return Math.floor(spell.baseHealing * statMultiplier);
}

/**
 * Calculate scaled shield amount for defensive spells
 * @param {Object} spell - Spell data object
 * @param {number} intStat - Player's INT stat
 * @returns {number} Scaled shield amount
 */
export function calculateShieldAmount(spell, intStat) {
  if (!spell.shieldAmount) return 0;
  
  // INT scaling: +5% shield per INT point
  const intMultiplier = 1.0 + (intStat * 0.05);
  
  return Math.floor(spell.shieldAmount * intMultiplier);
}

/**
 * Calculate scaled buff duration
 * @param {Object} spell - Spell data object
 * @param {number} intStat - Player's INT stat
 * @returns {number} Duration in seconds
 */
export function calculateBuffDuration(spell, intStat) {
  if (!spell.duration) return 0;
  
  // INT scaling: +2% duration per INT point
  const intMultiplier = 1.0 + (intStat * 0.02);
  
  return spell.duration * intMultiplier;
}

/**
 * Get spells that can be found as drops/rewards
 * (Spells above level 1 that must be discovered)
 */
export function getDroppableSpells() {
  return Object.values(SPELL_DATA).filter(spell => spell.unlockLevel > 1);
}

/**
 * All spell IDs
 */
export const SPELL_IDS = Object.keys(SPELL_DATA);

export default SPELL_DATA;
