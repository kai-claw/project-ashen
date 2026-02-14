/**
 * WeatherData.js - Weather Type Definitions & Rare Events (Phase 24)
 * 
 * Centralized weather data including:
 * - Weather type configurations
 * - Biome probabilities
 * - Rare celestial events (blood moon, meteor shower)
 * - Gameplay flags per weather
 */

import * as THREE from 'three';

// Weather types enum
export const WEATHER_TYPES = {
  CLEAR: 'clear',
  CLOUDY: 'cloudy',
  OVERCAST: 'overcast',
  RAIN: 'rain',
  HEAVY_RAIN: 'heavy_rain',
  STORM: 'storm',
  FOG: 'fog',
  SNOW: 'snow',
  BLIZZARD: 'blizzard'
};

// Complete weather configuration with gameplay flags
export const WEATHER_CONFIG = {
  [WEATHER_TYPES.CLEAR]: {
    name: 'Clear',
    ambientColor: new THREE.Color(0.9, 0.9, 0.95),
    fogDensity: 0.0005,
    fogColor: new THREE.Color(0.7, 0.8, 0.95),
    skyTint: new THREE.Color(1, 1, 1),
    particleType: null,
    soundLoop: null,
    lightIntensity: 1.0,
    // Gameplay flags
    wetGround: false,
    coldDebuff: false,
    reducedVisibility: false,
    movementPenalty: 0,
    staminaDrain: 0
  },
  [WEATHER_TYPES.CLOUDY]: {
    name: 'Cloudy',
    ambientColor: new THREE.Color(0.75, 0.75, 0.8),
    fogDensity: 0.001,
    fogColor: new THREE.Color(0.6, 0.65, 0.75),
    skyTint: new THREE.Color(0.9, 0.9, 0.95),
    particleType: null,
    soundLoop: 'wind_light',
    lightIntensity: 0.7,
    wetGround: false,
    coldDebuff: false,
    reducedVisibility: false,
    movementPenalty: 0,
    staminaDrain: 0
  },
  [WEATHER_TYPES.OVERCAST]: {
    name: 'Overcast',
    ambientColor: new THREE.Color(0.6, 0.6, 0.65),
    fogDensity: 0.0015,
    fogColor: new THREE.Color(0.5, 0.55, 0.6),
    skyTint: new THREE.Color(0.7, 0.7, 0.75),
    particleType: null,
    soundLoop: 'wind_medium',
    lightIntensity: 0.4,
    wetGround: false,
    coldDebuff: false,
    reducedVisibility: true,
    movementPenalty: 0,
    staminaDrain: 0
  },
  [WEATHER_TYPES.RAIN]: {
    name: 'Rain',
    ambientColor: new THREE.Color(0.5, 0.55, 0.6),
    fogDensity: 0.002,
    fogColor: new THREE.Color(0.45, 0.5, 0.55),
    skyTint: new THREE.Color(0.6, 0.65, 0.7),
    particleType: 'rain',
    soundLoop: 'rain_light',
    lightIntensity: 0.3,
    wetGround: true,
    coldDebuff: false,
    reducedVisibility: true,
    movementPenalty: 0.1,
    staminaDrain: 0.1
  },
  [WEATHER_TYPES.HEAVY_RAIN]: {
    name: 'Heavy Rain',
    ambientColor: new THREE.Color(0.4, 0.45, 0.5),
    fogDensity: 0.003,
    fogColor: new THREE.Color(0.35, 0.4, 0.45),
    skyTint: new THREE.Color(0.5, 0.55, 0.6),
    particleType: 'rain',
    soundLoop: 'rain_heavy',
    lightIntensity: 0.2,
    wetGround: true,
    coldDebuff: true,
    reducedVisibility: true,
    movementPenalty: 0.2,
    staminaDrain: 0.25
  },
  [WEATHER_TYPES.STORM]: {
    name: 'Storm',
    ambientColor: new THREE.Color(0.3, 0.35, 0.4),
    fogDensity: 0.004,
    fogColor: new THREE.Color(0.25, 0.3, 0.35),
    skyTint: new THREE.Color(0.4, 0.4, 0.5),
    particleType: 'rain',
    soundLoop: 'storm',
    lightIntensity: 0.1,
    hasLightning: true,
    wetGround: true,
    coldDebuff: true,
    reducedVisibility: true,
    movementPenalty: 0.3,
    staminaDrain: 0.4
  },
  [WEATHER_TYPES.FOG]: {
    name: 'Fog',
    ambientColor: new THREE.Color(0.6, 0.6, 0.65),
    fogDensity: 0.008,
    fogColor: new THREE.Color(0.7, 0.7, 0.75),
    skyTint: new THREE.Color(0.8, 0.8, 0.82),
    particleType: 'fog_wisps',
    soundLoop: null,
    lightIntensity: 0.3,
    wetGround: false,
    coldDebuff: false,
    reducedVisibility: true, // Major visibility reduction
    movementPenalty: 0,
    staminaDrain: 0
  },
  [WEATHER_TYPES.SNOW]: {
    name: 'Snow',
    ambientColor: new THREE.Color(0.7, 0.75, 0.85),
    fogDensity: 0.0015,
    fogColor: new THREE.Color(0.8, 0.82, 0.9),
    skyTint: new THREE.Color(0.85, 0.88, 0.95),
    particleType: 'snow',
    soundLoop: 'wind_light',
    lightIntensity: 0.6,
    wetGround: true,
    coldDebuff: true,
    reducedVisibility: false,
    movementPenalty: 0.15,
    staminaDrain: 0.15
  },
  [WEATHER_TYPES.BLIZZARD]: {
    name: 'Blizzard',
    ambientColor: new THREE.Color(0.5, 0.55, 0.65),
    fogDensity: 0.006,
    fogColor: new THREE.Color(0.7, 0.72, 0.8),
    skyTint: new THREE.Color(0.75, 0.78, 0.85),
    particleType: 'snow',
    soundLoop: 'blizzard',
    lightIntensity: 0.2,
    wetGround: true,
    coldDebuff: true,
    reducedVisibility: true,
    movementPenalty: 0.4,
    staminaDrain: 0.6
  }
};

// Biome-specific weather probabilities
export const BIOME_WEATHER_PROBABILITIES = {
  default: {
    [WEATHER_TYPES.CLEAR]: 0.4,
    [WEATHER_TYPES.CLOUDY]: 0.25,
    [WEATHER_TYPES.OVERCAST]: 0.15,
    [WEATHER_TYPES.RAIN]: 0.1,
    [WEATHER_TYPES.HEAVY_RAIN]: 0.05,
    [WEATHER_TYPES.FOG]: 0.05
  },
  forest: {
    [WEATHER_TYPES.CLEAR]: 0.3,
    [WEATHER_TYPES.CLOUDY]: 0.2,
    [WEATHER_TYPES.OVERCAST]: 0.2,
    [WEATHER_TYPES.RAIN]: 0.15,
    [WEATHER_TYPES.HEAVY_RAIN]: 0.08,
    [WEATHER_TYPES.FOG]: 0.07
  },
  mountain: {
    [WEATHER_TYPES.CLEAR]: 0.35,
    [WEATHER_TYPES.CLOUDY]: 0.2,
    [WEATHER_TYPES.OVERCAST]: 0.15,
    [WEATHER_TYPES.SNOW]: 0.15,
    [WEATHER_TYPES.FOG]: 0.1,
    [WEATHER_TYPES.BLIZZARD]: 0.05
  },
  swamp: {
    [WEATHER_TYPES.FOG]: 0.35,
    [WEATHER_TYPES.OVERCAST]: 0.25,
    [WEATHER_TYPES.RAIN]: 0.2,
    [WEATHER_TYPES.HEAVY_RAIN]: 0.1,
    [WEATHER_TYPES.CLOUDY]: 0.1
  },
  desert: {
    [WEATHER_TYPES.CLEAR]: 0.7,
    [WEATHER_TYPES.CLOUDY]: 0.2,
    [WEATHER_TYPES.OVERCAST]: 0.1
  },
  tundra: {
    [WEATHER_TYPES.CLEAR]: 0.25,
    [WEATHER_TYPES.CLOUDY]: 0.15,
    [WEATHER_TYPES.SNOW]: 0.3,
    [WEATHER_TYPES.BLIZZARD]: 0.15,
    [WEATHER_TYPES.FOG]: 0.15
  }
};

// Weather duration range (in game hours)
export const WEATHER_DURATION = {
  min: 5,
  max: 30
};

// Transition time between weather types (in real seconds)
export const WEATHER_TRANSITION_TIME = 60;

// =====================================
// RARE CELESTIAL EVENTS
// =====================================

export const RARE_EVENTS = {
  BLOOD_MOON: {
    id: 'blood_moon',
    name: 'Blood Moon',
    description: 'The moon turns crimson, empowering creatures of the night',
    // Trigger conditions
    triggerConditions: {
      moonPhase: 4, // Full moon
      chance: 0.05, // 5% chance on any full moon night
      minHour: 21, // Must be night
      maxHour: 4
    },
    // Duration in game hours
    duration: 6,
    // Visual effects
    visuals: {
      moonColor: new THREE.Color(0.9, 0.2, 0.1),
      moonGlow: new THREE.Color(1, 0.3, 0.2),
      ambientTint: new THREE.Color(0.3, 0.1, 0.1),
      fogColor: new THREE.Color(0.4, 0.15, 0.1),
      skyTint: new THREE.Color(0.5, 0.2, 0.2)
    },
    // Gameplay effects
    effects: {
      enemyDamageMultiplier: 1.5,
      enemyHealthMultiplier: 1.3,
      nightEnemySpawnMultiplier: 3.0,
      lootQualityMultiplier: 2.0,
      playerDetectionMultiplier: 0.5, // Harder to hide
      specialDrops: ['blood_essence', 'crimson_moon_shard', 'lunar_blood'],
      // Unique spawns during blood moon
      uniqueSpawns: ['blood_wraith', 'crimson_hunter', 'moon_beast']
    },
    // Sound
    soundLoop: 'blood_moon_ambient',
    startSound: 'blood_moon_rise'
  },
  
  METEOR_SHOWER: {
    id: 'meteor_shower',
    name: 'Meteor Shower',
    description: 'Stars fall from the heavens, leaving precious materials',
    triggerConditions: {
      weather: [WEATHER_TYPES.CLEAR], // Only during clear weather
      dayPhase: 'NIGHT',
      chance: 0.03, // 3% chance per night
      minHour: 22,
      maxHour: 3
    },
    duration: 4, // Game hours
    visuals: {
      particleType: 'meteor',
      particleCount: 30,
      trailColor: new THREE.Color(1, 0.8, 0.4),
      impactFlash: new THREE.Color(1, 0.9, 0.7)
    },
    effects: {
      // Meteors can be collected
      meteoritesDropped: { min: 3, max: 8 },
      meteoriteTypes: ['iron_meteorite', 'star_metal', 'celestial_ore'],
      // Small chance of rare meteorite
      rareMeteoriteChance: 0.1,
      rareMeteoriteTypes: ['void_crystal', 'fallen_star_core'],
      // Impact zones glow and can be tracked
      impactGlowDuration: 300, // Seconds
      // Environmental
      lightIntensityPulses: true
    },
    soundLoop: 'meteor_ambient',
    impactSound: 'meteor_impact'
  },
  
  AURORA: {
    id: 'aurora',
    name: 'Aurora Borealis',
    description: 'Mystical lights dance across the sky, enhancing magical power',
    triggerConditions: {
      biomes: ['mountain', 'tundra'],
      dayPhase: 'NIGHT',
      chance: 0.08,
      weather: [WEATHER_TYPES.CLEAR, WEATHER_TYPES.SNOW]
    },
    duration: 8,
    visuals: {
      colors: [
        new THREE.Color(0.2, 0.8, 0.4),  // Green
        new THREE.Color(0.3, 0.4, 0.9),  // Blue
        new THREE.Color(0.6, 0.2, 0.8)   // Purple
      ],
      waveSpeed: 0.5,
      intensity: 0.7
    },
    effects: {
      magicDamageMultiplier: 1.25,
      manaCostReduction: 0.2,
      manaRegenMultiplier: 1.5,
      // Rare herbs bloom
      rareHerbSpawns: ['aurora_flower', 'starlight_moss', 'frost_bloom'],
      // Peaceful - reduces enemy aggression
      enemyAggroRangeMultiplier: 0.7
    },
    soundLoop: 'aurora_hum'
  },
  
  SOLAR_ECLIPSE: {
    id: 'solar_eclipse',
    name: 'Solar Eclipse',
    description: 'The sun is devoured, bringing unnatural darkness at noon',
    triggerConditions: {
      dayPhase: 'DAY',
      hourRange: { min: 10, max: 14 }, // Around noon
      chance: 0.01, // Very rare, 1% per day
      dayInterval: 30 // Can only occur once every 30 game days
    },
    duration: 2, // Short but intense
    visuals: {
      sunColor: new THREE.Color(0.1, 0.1, 0.1),
      coronaColor: new THREE.Color(0.8, 0.3, 0.1),
      ambientDarkness: 0.2,
      skyColor: new THREE.Color(0.1, 0.05, 0.15)
    },
    effects: {
      // Night creatures can spawn during day
      nightCreaturesActive: true,
      // Shadow magic empowered
      shadowDamageMultiplier: 2.0,
      lightDamageMultiplier: 0.5,
      // Special boss spawn
      bossSpawn: 'eclipse_devourer',
      // Time-sensitive crafting
      unlockRecipes: ['eclipse_blade', 'corona_shield', 'twilight_essence']
    },
    soundLoop: 'eclipse_ambient',
    startSound: 'eclipse_begin'
  },
  
  SPIRIT_NIGHT: {
    id: 'spirit_night',
    name: 'Night of Spirits',
    description: 'The veil between worlds thins, allowing spirits to wander',
    triggerConditions: {
      moonPhase: 0, // New moon
      chance: 0.08,
      dayPhase: 'NIGHT'
    },
    duration: 10, // Whole night
    visuals: {
      spiritGlow: new THREE.Color(0.4, 0.6, 0.9),
      fogType: 'ethereal',
      ambientParticles: 'spirit_wisps'
    },
    effects: {
      // Ghost NPCs appear
      ghostNPCsActive: true,
      ghostQuests: ['lost_soul', 'unfinished_business', 'ancestral_blessing'],
      // Spirit enemies
      spiritEnemyMultiplier: 2.0,
      physicalDamageReduction: 0.3, // Physical less effective vs spirits
      // Can communicate with dead NPCs
      deadNPCDialogue: true,
      // Rare drops
      spiritDrops: ['ectoplasm', 'spirit_essence', 'soul_fragment', 'ghost_lantern']
    },
    soundLoop: 'spirit_whispers'
  }
};

// Helper to check if rare event should trigger
export function checkRareEventTrigger(eventId, gameState) {
  const event = RARE_EVENTS[eventId];
  if (!event) return false;
  
  const conditions = event.triggerConditions;
  
  // Check moon phase
  if (conditions.moonPhase !== undefined) {
    if (gameState.moonPhase !== conditions.moonPhase) return false;
  }
  
  // Check day phase
  if (conditions.dayPhase) {
    if (gameState.dayPhase !== conditions.dayPhase) return false;
  }
  
  // Check hour range
  if (conditions.minHour !== undefined) {
    const hour = gameState.currentHour;
    if (conditions.minHour > conditions.maxHour) {
      // Wraps around midnight
      if (hour < conditions.minHour && hour > conditions.maxHour) return false;
    } else {
      if (hour < conditions.minHour || hour > conditions.maxHour) return false;
    }
  }
  
  // Check weather
  if (conditions.weather) {
    if (!conditions.weather.includes(gameState.currentWeather)) return false;
  }
  
  // Check biome
  if (conditions.biomes) {
    if (!conditions.biomes.includes(gameState.currentBiome)) return false;
  }
  
  // Check day interval (for rare events like eclipse)
  if (conditions.dayInterval) {
    if (gameState.currentDay % conditions.dayInterval !== 0) return false;
  }
  
  // Random chance
  return Math.random() < conditions.chance;
}

// Get all possible events for current conditions
export function getPossibleRareEvents(gameState) {
  const possible = [];
  
  for (const [id, event] of Object.entries(RARE_EVENTS)) {
    const conditions = event.triggerConditions;
    let valid = true;
    
    // Check all conditions except random chance
    if (conditions.moonPhase !== undefined && gameState.moonPhase !== conditions.moonPhase) {
      valid = false;
    }
    if (conditions.dayPhase && gameState.dayPhase !== conditions.dayPhase) {
      valid = false;
    }
    if (conditions.weather && !conditions.weather.includes(gameState.currentWeather)) {
      valid = false;
    }
    if (conditions.biomes && !conditions.biomes.includes(gameState.currentBiome)) {
      valid = false;
    }
    
    if (valid) {
      possible.push({ id, event, chance: conditions.chance });
    }
  }
  
  return possible;
}

export default {
  WEATHER_TYPES,
  WEATHER_CONFIG,
  BIOME_WEATHER_PROBABILITIES,
  WEATHER_DURATION,
  WEATHER_TRANSITION_TIME,
  RARE_EVENTS,
  checkRareEventTrigger,
  getPossibleRareEvents
};
