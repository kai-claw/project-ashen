/**
 * TimeWeatherGameplay.js - Gameplay Integration for Time & Weather (Phase 24)
 * 
 * Connects TimeManager and WeatherManager to gameplay systems:
 * - Night enemy spawns (wraiths, shadows)
 * - NPC schedules and shop hours
 * - Visibility/detection modifiers
 * - Time-locked crafting recipes
 * - Weather debuffs (movement, stamina)
 * - Campfire resting system
 * - Tutorial hints
 */

import { getTimeManager, DAY_PHASES } from './TimeManager.js';
import { getWeatherManager, WEATHER_TYPES } from './WeatherManager.js';

// Night-only enemy types
export const NIGHT_ENEMIES = {
  WRAITH: {
    id: 'wraith',
    name: 'Wraith',
    spawnChance: 0.3,
    minSpawnHour: 21,  // 9 PM
    maxSpawnHour: 4,   // 4 AM
    moonPhaseBonus: { 0: 0.5, 4: 0.2 }, // New moon = +50%, full = +20%
    baseHealth: 80,
    baseDamage: 25,
    special: 'phase_through_walls',
    loot: ['ectoplasm', 'shadow_essence']
  },
  SHADOW_STALKER: {
    id: 'shadow_stalker',
    name: 'Shadow Stalker',
    spawnChance: 0.2,
    minSpawnHour: 22,
    maxSpawnHour: 3,
    moonPhaseBonus: { 0: 0.8 }, // New moon doubles spawn
    baseHealth: 60,
    baseDamage: 35,
    special: 'backstab',
    loot: ['dark_essence', 'shadow_cloak_fragment']
  },
  NIGHT_HOWLER: {
    id: 'night_howler',
    name: 'Night Howler',
    spawnChance: 0.25,
    minSpawnHour: 20,
    maxSpawnHour: 5,
    moonPhaseBonus: { 4: 0.4 }, // Full moon = +40%
    baseHealth: 100,
    baseDamage: 20,
    special: 'howl_fear',
    loot: ['moonstone_shard', 'beast_fang']
  },
  PHANTOM: {
    id: 'phantom',
    name: 'Phantom',
    spawnChance: 0.15,
    minSpawnHour: 23,
    maxSpawnHour: 2,
    moonPhaseBonus: {},
    baseHealth: 50,
    baseDamage: 40,
    special: 'life_drain',
    loot: ['spirit_essence', 'phantom_silk']
  }
};

// Shop operating hours
export const SHOP_HOURS = {
  general_store: { open: 7, close: 20 },
  blacksmith: { open: 6, close: 22 },
  alchemist: { open: 8, close: 19 },
  tavern: { open: 10, close: 2 }, // Late night
  magic_shop: { open: 12, close: 24 }, // Afternoon to midnight
  black_market: { open: 22, close: 4 }, // Night only
};

// NPC schedule types
export const NPC_SCHEDULES = {
  VILLAGER: {
    wake: 6,
    work: 7,
    lunch: 12,
    resume: 13,
    evening: 18,
    home: 20,
    sleep: 22
  },
  GUARD: {
    dayShift: { start: 6, end: 18 },
    nightShift: { start: 18, end: 6 },
    patrolDuringShift: true
  },
  MERCHANT: {
    wake: 5,
    openShop: 7,
    closeShop: 20,
    socialHour: 20,
    sleep: 22
  }
};

// Time-locked crafting recipes
export const TIME_LOCKED_RECIPES = {
  moonlit_blade: {
    requiredPhase: DAY_PHASES.NIGHT,
    moonPhases: [3, 4, 5], // Near full moon
    description: 'Forge under the light of a near-full moon'
  },
  sun_essence: {
    requiredPhase: DAY_PHASES.DAY,
    hourRange: { min: 11, max: 13 }, // High noon
    description: 'Harvest when the sun is at its peak'
  },
  dawn_elixir: {
    requiredPhase: DAY_PHASES.DAWN,
    description: 'Brew at the first light of dawn'
  },
  dusk_potion: {
    requiredPhase: DAY_PHASES.DUSK,
    description: 'Infuse as the sun sets'
  },
  starlight_crystal: {
    requiredPhase: DAY_PHASES.NIGHT,
    hourRange: { min: 0, max: 3 }, // Deepest night
    description: 'Channel starlight in the darkest hours'
  },
  shadow_cloak: {
    requiredPhase: DAY_PHASES.NIGHT,
    moonPhases: [0, 1, 7], // New moon period
    description: 'Weave in the darkness of a new moon'
  }
};

// Weather effects on gameplay
export const WEATHER_EFFECTS = {
  [WEATHER_TYPES.RAIN]: {
    movementMultiplier: 0.9,
    staminaDrainMultiplier: 1.1,
    torchEffectiveness: 0.7,
    fireStartChance: 0.3,
    detectionRange: 0.85,
    debuff: 'wet',
    debuffDuration: 300, // seconds after leaving rain
    sounds: ['squelching_footsteps']
  },
  [WEATHER_TYPES.HEAVY_RAIN]: {
    movementMultiplier: 0.8,
    staminaDrainMultiplier: 1.25,
    torchEffectiveness: 0.4,
    fireStartChance: 0.1,
    detectionRange: 0.7,
    debuff: 'soaked',
    debuffDuration: 600,
    sounds: ['squelching_footsteps', 'heavy_rain_ambient']
  },
  [WEATHER_TYPES.STORM]: {
    movementMultiplier: 0.7,
    staminaDrainMultiplier: 1.4,
    torchEffectiveness: 0.2,
    fireStartChance: 0.05,
    detectionRange: 0.5,
    debuff: 'storm_battered',
    debuffDuration: 900,
    lightningDamageChance: 0.001, // Per second outdoors
    sounds: ['storm_wind', 'thunder_rumble']
  },
  [WEATHER_TYPES.FOG]: {
    movementMultiplier: 1.0,
    staminaDrainMultiplier: 1.0,
    torchEffectiveness: 0.5,
    fireStartChance: 0.8,
    detectionRange: 0.4, // Major visibility reduction
    debuff: null,
    ambushChanceMultiplier: 1.5,
    sounds: ['eerie_fog_ambient']
  },
  [WEATHER_TYPES.SNOW]: {
    movementMultiplier: 0.85,
    staminaDrainMultiplier: 1.15,
    torchEffectiveness: 0.9,
    fireStartChance: 0.6,
    detectionRange: 0.9,
    debuff: 'chilled',
    debuffDuration: 180,
    coldDamage: 0.5, // HP per second without warmth
    sounds: ['crunching_snow']
  },
  [WEATHER_TYPES.BLIZZARD]: {
    movementMultiplier: 0.6,
    staminaDrainMultiplier: 1.6,
    torchEffectiveness: 0.3,
    fireStartChance: 0.2,
    detectionRange: 0.3,
    debuff: 'frostbite',
    debuffDuration: 1200,
    coldDamage: 2, // HP per second without warmth
    sounds: ['blizzard_howl', 'crunching_snow']
  }
};

// Campfire/rest system
export const REST_CONFIG = {
  baseRestDuration: 6, // Game hours
  healthRegenPerHour: 15,
  staminaRegenPerHour: 25,
  warmthBuffDuration: 1800, // 30 real minutes = 30 game hours
  warmthBuffEffects: {
    coldImmunity: true,
    staminaDrainReduction: 0.3,
    healthRegenBonus: 0.2
  }
};

// Detection modifiers by time/weather
export const DETECTION_MODIFIERS = {
  [DAY_PHASES.NIGHT]: 0.6,
  [DAY_PHASES.DAWN]: 0.85,
  [DAY_PHASES.DAY]: 1.0,
  [DAY_PHASES.DUSK]: 0.85
};

// Spawn rate multipliers by phase
export const SPAWN_RATE_MODIFIERS = {
  [DAY_PHASES.NIGHT]: {
    hostile: 1.8,
    passive: 0.3,
    nightOnly: 1.0
  },
  [DAY_PHASES.DAWN]: {
    hostile: 1.2,
    passive: 0.7,
    nightOnly: 0.2
  },
  [DAY_PHASES.DAY]: {
    hostile: 1.0,
    passive: 1.0,
    nightOnly: 0
  },
  [DAY_PHASES.DUSK]: {
    hostile: 1.3,
    passive: 0.6,
    nightOnly: 0.3
  }
};

export class TimeWeatherGameplay {
  constructor(gameManager) {
    this.gm = gameManager;
    this.timeManager = null;
    this.weatherManager = null;
    
    // Active debuffs on player
    this.activeDebuffs = new Map(); // debuffId -> { type, startTime, duration, effects }
    
    // Warmth buff state
    this.hasWarmthBuff = false;
    this.warmthBuffEndTime = 0;
    
    // Rest state
    this.isResting = false;
    this.restStartTime = 0;
    this.restTargetHours = 0;
    
    // Shelter detection
    this.isIndoors = false;
    this.nearCampfire = false;
    this.campfireWarmthRadius = 8;
    
    // Tutorial flags
    this.shownHints = new Set();
    
    // Callbacks
    this.onDebuffApplied = null;
    this.onDebuffRemoved = null;
    this.onRestComplete = null;
    
    // Create weather/time HUD indicator
    this.createWeatherHUD();
    
    console.log('[TimeWeatherGameplay] Initialized');
  }
  
  /**
   * Initialize with managers
   */
  initialize() {
    this.timeManager = getTimeManager();
    this.weatherManager = getWeatherManager();
    
    if (this.timeManager) {
      // Hook into phase changes for gameplay effects
      const originalOnPhaseChange = this.timeManager.onPhaseChange;
      this.timeManager.onPhaseChange = (newPhase, oldPhase) => {
        if (originalOnPhaseChange) originalOnPhaseChange(newPhase, oldPhase);
        this.onPhaseChanged(newPhase, oldPhase);
      };
      
      const originalOnHourChange = this.timeManager.onHourChange;
      this.timeManager.onHourChange = (hour) => {
        if (originalOnHourChange) originalOnHourChange(hour);
        this.onHourChanged(hour);
      };
    }
    
    if (this.weatherManager) {
      const originalOnWeatherChange = this.weatherManager.onWeatherChange;
      this.weatherManager.onWeatherChange = (newWeather, oldWeather) => {
        if (originalOnWeatherChange) originalOnWeatherChange(newWeather, oldWeather);
        this.onWeatherChanged(newWeather, oldWeather);
      };
    }
    
    this.updateWeatherHUD();
  }
  
  /**
   * Create weather HUD indicator
   */
  createWeatherHUD() {
    if (document.getElementById('weather-indicator')) return;
    
    const indicator = document.createElement('div');
    indicator.id = 'weather-indicator';
    indicator.innerHTML = `
      <span class="weather-icon">☀️</span>
      <span class="weather-text">Clear</span>
      <div class="debuff-icons"></div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      #weather-indicator {
        position: fixed;
        top: 60px;
        right: 10px;
        background: linear-gradient(135deg, rgba(20, 25, 30, 0.85), rgba(30, 35, 45, 0.8));
        border: 2px solid rgba(100, 140, 180, 0.5);
        border-radius: 6px;
        padding: 6px 12px;
        font-family: 'Cinzel', serif;
        color: #c4d4e8;
        font-size: 12px;
        z-index: 100;
        display: flex;
        align-items: center;
        gap: 6px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
      }
      
      #weather-indicator .weather-icon {
        font-size: 16px;
        filter: drop-shadow(0 0 3px rgba(255, 255, 255, 0.3));
      }
      
      #weather-indicator .weather-text {
        text-transform: capitalize;
      }
      
      #weather-indicator .debuff-icons {
        display: flex;
        gap: 4px;
        margin-left: 6px;
      }
      
      #weather-indicator .debuff-icon {
        width: 18px;
        height: 18px;
        background: rgba(180, 60, 60, 0.6);
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        animation: debuff-pulse 2s infinite;
      }
      
      @keyframes debuff-pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.6; }
      }
      
      .tutorial-hint {
        position: fixed;
        bottom: 120px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, rgba(40, 30, 20, 0.95), rgba(60, 40, 25, 0.9));
        border: 2px solid rgba(200, 150, 80, 0.7);
        border-radius: 8px;
        padding: 12px 24px;
        font-family: 'Cinzel', serif;
        color: #f0e0c0;
        font-size: 14px;
        z-index: 200;
        text-align: center;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
        animation: hint-appear 0.5s ease-out, hint-fade 0.5s ease-out 4.5s forwards;
      }
      
      @keyframes hint-appear {
        from { opacity: 0; transform: translateX(-50%) translateY(20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
      }
      
      @keyframes hint-fade {
        to { opacity: 0; }
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(indicator);
  }
  
  /**
   * Update weather HUD
   */
  updateWeatherHUD() {
    const indicator = document.getElementById('weather-indicator');
    if (!indicator || !this.weatherManager) return;
    
    const weather = this.weatherManager.currentWeather;
    const icon = this.getWeatherIcon(weather);
    const text = weather.replace(/_/g, ' ');
    
    const iconEl = indicator.querySelector('.weather-icon');
    const textEl = indicator.querySelector('.weather-text');
    
    if (iconEl) iconEl.textContent = icon;
    if (textEl) textEl.textContent = text;
    
    // Update debuff icons
    this.updateDebuffIcons();
  }
  
  /**
   * Get weather icon emoji
   */
  getWeatherIcon(weather) {
    const icons = {
      [WEATHER_TYPES.CLEAR]: '☀️',
      [WEATHER_TYPES.CLOUDY]: '⛅',
      [WEATHER_TYPES.OVERCAST]: '☁️',
      [WEATHER_TYPES.RAIN]: '🌧️',
      [WEATHER_TYPES.HEAVY_RAIN]: '🌧️',
      [WEATHER_TYPES.STORM]: '⛈️',
      [WEATHER_TYPES.FOG]: '🌫️',
      [WEATHER_TYPES.SNOW]: '🌨️',
      [WEATHER_TYPES.BLIZZARD]: '❄️'
    };
    return icons[weather] || '☀️';
  }
  
  /**
   * Update debuff icons in HUD
   */
  updateDebuffIcons() {
    const container = document.querySelector('#weather-indicator .debuff-icons');
    if (!container) return;
    
    container.innerHTML = '';
    
    const debuffIcons = {
      wet: '💧',
      soaked: '💦',
      storm_battered: '💨',
      chilled: '🥶',
      frostbite: '❄️',
      warmth: '🔥'
    };
    
    // Show warmth buff
    if (this.hasWarmthBuff) {
      const icon = document.createElement('div');
      icon.className = 'debuff-icon';
      icon.style.background = 'rgba(220, 120, 40, 0.6)';
      icon.textContent = debuffIcons.warmth;
      icon.title = 'Warmth Buff';
      container.appendChild(icon);
    }
    
    // Show debuffs
    for (const [id, debuff] of this.activeDebuffs) {
      const icon = document.createElement('div');
      icon.className = 'debuff-icon';
      icon.textContent = debuffIcons[debuff.type] || '⚠️';
      icon.title = debuff.type.replace(/_/g, ' ');
      container.appendChild(icon);
    }
  }
  
  /**
   * Show tutorial hint
   */
  showHint(hintId, message) {
    if (this.shownHints.has(hintId)) return;
    this.shownHints.add(hintId);
    
    // Save shown hints
    localStorage.setItem('ashen-hints', JSON.stringify([...this.shownHints]));
    
    const hint = document.createElement('div');
    hint.className = 'tutorial-hint';
    hint.textContent = message;
    document.body.appendChild(hint);
    
    setTimeout(() => hint.remove(), 5000);
  }
  
  /**
   * Handle phase change
   */
  onPhaseChanged(newPhase, oldPhase) {
    // Night danger hint
    if (newPhase === DAY_PHASES.NIGHT) {
      this.showHint('night_danger', '⚠️ Night brings danger. Creatures of shadow stir...');
    }
    
    // Dawn relief hint
    if (newPhase === DAY_PHASES.DAWN && oldPhase === DAY_PHASES.NIGHT) {
      this.showHint('dawn_safe', '🌅 The darkness recedes. You survived the night.');
    }
    
    console.log(`[TimeWeatherGameplay] Phase changed: ${oldPhase} → ${newPhase}`);
  }
  
  /**
   * Handle hour change
   */
  onHourChanged(hour) {
    // Shop opening/closing notifications could go here
    this.updateWeatherHUD();
  }
  
  /**
   * Handle weather change
   */
  onWeatherChanged(newWeather, oldWeather) {
    this.updateWeatherHUD();
    
    // Weather hints
    if (newWeather === WEATHER_TYPES.STORM) {
      this.showHint('storm_warning', '⛈️ A storm approaches! Seek shelter or risk the lightning.');
    }
    
    if (newWeather === WEATHER_TYPES.BLIZZARD) {
      this.showHint('blizzard_warning', '❄️ A blizzard descends! Find warmth quickly.');
    }
    
    if (newWeather === WEATHER_TYPES.FOG) {
      this.showHint('fog_warning', '🌫️ Thick fog rolls in. Enemies may ambush unseen.');
    }
  }
  
  /**
   * Check if a night enemy should spawn
   */
  shouldSpawnNightEnemy(enemyType) {
    if (!this.timeManager) return false;
    
    const enemy = NIGHT_ENEMIES[enemyType];
    if (!enemy) return false;
    
    const hour = this.timeManager.currentHour;
    const moonPhase = this.timeManager.moonPhase;
    
    // Check hour range (handles wrapping around midnight)
    let inTimeRange;
    if (enemy.minSpawnHour > enemy.maxSpawnHour) {
      // Wraps around midnight
      inTimeRange = hour >= enemy.minSpawnHour || hour <= enemy.maxSpawnHour;
    } else {
      inTimeRange = hour >= enemy.minSpawnHour && hour <= enemy.maxSpawnHour;
    }
    
    if (!inTimeRange) return false;
    
    // Calculate spawn chance with moon bonus
    let chance = enemy.spawnChance;
    if (enemy.moonPhaseBonus[moonPhase]) {
      chance += enemy.moonPhaseBonus[moonPhase];
    }
    
    return Math.random() < chance;
  }
  
  /**
   * Get night enemy spawn configuration
   */
  getNightEnemyConfig(enemyType) {
    return NIGHT_ENEMIES[enemyType] || null;
  }
  
  /**
   * Check if shop is open
   */
  isShopOpen(shopType) {
    if (!this.timeManager) return true;
    
    const hours = SHOP_HOURS[shopType];
    if (!hours) return true;
    
    const currentHour = this.timeManager.currentHour;
    
    // Handle shops that close after midnight
    if (hours.close < hours.open) {
      return currentHour >= hours.open || currentHour < hours.close;
    }
    
    return currentHour >= hours.open && currentHour < hours.close;
  }
  
  /**
   * Get shop hours text
   */
  getShopHoursText(shopType) {
    const hours = SHOP_HOURS[shopType];
    if (!hours) return 'Always Open';
    
    const format = (h) => {
      const suffix = h >= 12 ? 'PM' : 'AM';
      const hour = h > 12 ? h - 12 : (h === 0 ? 12 : h);
      return `${hour}${suffix}`;
    };
    
    return `${format(hours.open)} - ${format(hours.close)}`;
  }
  
  /**
   * Get NPC schedule action for current time
   */
  getNPCScheduleAction(scheduleType) {
    if (!this.timeManager) return 'idle';
    
    const schedule = NPC_SCHEDULES[scheduleType];
    if (!schedule) return 'idle';
    
    const hour = this.timeManager.currentHour;
    
    if (scheduleType === 'GUARD') {
      // Guards have shifts
      const { dayShift, nightShift } = schedule;
      if (hour >= dayShift.start && hour < dayShift.end) {
        return 'day_patrol';
      }
      return 'night_patrol';
    }
    
    // Standard schedules
    if (hour < schedule.wake) return 'sleeping';
    if (hour < schedule.work) return 'waking';
    if (hour < schedule.lunch) return 'working';
    if (hour < schedule.resume) return 'eating';
    if (hour < schedule.evening) return 'working';
    if (hour < schedule.home) return 'socializing';
    if (hour < schedule.sleep) return 'at_home';
    return 'sleeping';
  }
  
  /**
   * Check if recipe can be crafted now (time-locked)
   */
  canCraftTimeLocked(recipeId) {
    const recipe = TIME_LOCKED_RECIPES[recipeId];
    if (!recipe) return { allowed: true };
    
    if (!this.timeManager) return { allowed: false, reason: 'Time system unavailable' };
    
    const currentPhase = this.timeManager.dayPhase;
    const currentHour = this.timeManager.currentHour;
    const moonPhase = this.timeManager.moonPhase;
    
    // Check phase requirement
    if (recipe.requiredPhase && currentPhase !== recipe.requiredPhase) {
      return { 
        allowed: false, 
        reason: recipe.description,
        requiredPhase: recipe.requiredPhase
      };
    }
    
    // Check hour range
    if (recipe.hourRange) {
      if (currentHour < recipe.hourRange.min || currentHour > recipe.hourRange.max) {
        return {
          allowed: false,
          reason: recipe.description,
          requiredHours: recipe.hourRange
        };
      }
    }
    
    // Check moon phase
    if (recipe.moonPhases && !recipe.moonPhases.includes(moonPhase)) {
      return {
        allowed: false,
        reason: recipe.description,
        requiredMoonPhases: recipe.moonPhases
      };
    }
    
    return { allowed: true };
  }
  
  /**
   * Get current weather effects
   */
  getCurrentWeatherEffects() {
    if (!this.weatherManager) return null;
    
    const weather = this.weatherManager.currentWeather;
    return WEATHER_EFFECTS[weather] || null;
  }
  
  /**
   * Get current detection modifier (time + weather combined)
   */
  getDetectionModifier() {
    let modifier = 1.0;
    
    // Time-based modifier
    if (this.timeManager) {
      const phase = this.timeManager.dayPhase;
      modifier *= DETECTION_MODIFIERS[phase] || 1.0;
    }
    
    // Weather-based modifier
    const weatherEffects = this.getCurrentWeatherEffects();
    if (weatherEffects && weatherEffects.detectionRange) {
      modifier *= weatherEffects.detectionRange;
    }
    
    return modifier;
  }
  
  /**
   * Get current movement modifier
   */
  getMovementModifier() {
    const weatherEffects = this.getCurrentWeatherEffects();
    if (!weatherEffects) return 1.0;
    
    return weatherEffects.movementMultiplier || 1.0;
  }
  
  /**
   * Get current stamina drain modifier
   */
  getStaminaDrainModifier() {
    let modifier = 1.0;
    
    const weatherEffects = this.getCurrentWeatherEffects();
    if (weatherEffects) {
      modifier *= weatherEffects.staminaDrainMultiplier || 1.0;
    }
    
    // Warmth buff reduces stamina drain
    if (this.hasWarmthBuff) {
      modifier *= (1 - REST_CONFIG.warmthBuffEffects.staminaDrainReduction);
    }
    
    return modifier;
  }
  
  /**
   * Get spawn rate modifier for enemy type
   */
  getSpawnRateModifier(enemyCategory = 'hostile') {
    if (!this.timeManager) return 1.0;
    
    const phase = this.timeManager.dayPhase;
    const modifiers = SPAWN_RATE_MODIFIERS[phase];
    
    if (!modifiers) return 1.0;
    
    return modifiers[enemyCategory] || 1.0;
  }
  
  /**
   * Apply weather debuff to player
   */
  applyWeatherDebuff(debuffType, duration) {
    const debuffId = `weather_${debuffType}_${Date.now()}`;
    
    this.activeDebuffs.set(debuffId, {
      type: debuffType,
      startTime: Date.now(),
      duration: duration * 1000,
      effects: this.getDebuffEffects(debuffType)
    });
    
    this.updateDebuffIcons();
    
    if (this.onDebuffApplied) {
      this.onDebuffApplied(debuffType);
    }
    
    console.log(`[TimeWeatherGameplay] Applied debuff: ${debuffType}`);
  }
  
  /**
   * Get effects for a debuff type
   */
  getDebuffEffects(debuffType) {
    const effects = {
      wet: { fireResist: -0.2, lightningVuln: 0.3 },
      soaked: { fireResist: -0.4, lightningVuln: 0.5, moveSpeed: -0.1 },
      storm_battered: { moveSpeed: -0.2, accuracy: -0.15 },
      chilled: { attackSpeed: -0.15, moveSpeed: -0.1 },
      frostbite: { attackSpeed: -0.3, moveSpeed: -0.25, maxStamina: -0.2 }
    };
    return effects[debuffType] || {};
  }
  
  /**
   * Remove expired debuffs
   */
  cleanupDebuffs() {
    const now = Date.now();
    const expired = [];
    
    for (const [id, debuff] of this.activeDebuffs) {
      if (now - debuff.startTime > debuff.duration) {
        expired.push(id);
      }
    }
    
    for (const id of expired) {
      const debuff = this.activeDebuffs.get(id);
      this.activeDebuffs.delete(id);
      
      if (this.onDebuffRemoved) {
        this.onDebuffRemoved(debuff.type);
      }
    }
    
    if (expired.length > 0) {
      this.updateDebuffIcons();
    }
  }
  
  /**
   * Check if player is sheltered from weather
   */
  isSheltered() {
    return this.isIndoors || this.nearCampfire;
  }
  
  /**
   * Set indoor status
   */
  setIndoors(indoor) {
    this.isIndoors = indoor;
  }
  
  /**
   * Update campfire proximity
   */
  updateCampfireProximity(campfires, playerPosition) {
    this.nearCampfire = false;
    
    if (!campfires || !playerPosition) return;
    
    for (const fire of campfires) {
      if (!fire.isLit) continue;
      
      const dist = playerPosition.distanceTo(fire.position);
      if (dist <= this.campfireWarmthRadius) {
        this.nearCampfire = true;
        break;
      }
    }
  }
  
  /**
   * Start resting at campfire
   */
  startRest(hours = REST_CONFIG.baseRestDuration) {
    if (!this.nearCampfire) {
      console.log('[TimeWeatherGameplay] Cannot rest - not near a campfire');
      return false;
    }
    
    if (this.isResting) {
      console.log('[TimeWeatherGameplay] Already resting');
      return false;
    }
    
    this.isResting = true;
    this.restStartTime = Date.now();
    this.restTargetHours = hours;
    
    // Pause time during rest setup
    if (this.timeManager) {
      // We'll advance time in completeRest
    }
    
    // Show rest UI
    this.showRestUI(hours);
    
    console.log(`[TimeWeatherGameplay] Started resting for ${hours} hours`);
    return true;
  }
  
  /**
   * Show rest progress UI
   */
  showRestUI(hours) {
    const existing = document.getElementById('rest-overlay');
    if (existing) existing.remove();
    
    const overlay = document.createElement('div');
    overlay.id = 'rest-overlay';
    overlay.innerHTML = `
      <div class="rest-content">
        <div class="rest-icon">🔥</div>
        <div class="rest-text">Resting...</div>
        <div class="rest-progress">
          <div class="rest-bar"></div>
        </div>
        <div class="rest-hours">0 / ${hours} hours</div>
      </div>
    `;
    
    const style = document.createElement('style');
    style.id = 'rest-style';
    style.textContent = `
      #rest-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        animation: rest-fade-in 1s ease;
      }
      
      @keyframes rest-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      .rest-content {
        text-align: center;
        color: #f0d0a0;
        font-family: 'Cinzel', serif;
      }
      
      .rest-icon {
        font-size: 64px;
        margin-bottom: 20px;
        animation: fire-flicker 0.5s infinite alternate;
      }
      
      @keyframes fire-flicker {
        from { filter: brightness(1); }
        to { filter: brightness(1.2); }
      }
      
      .rest-text {
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .rest-progress {
        width: 300px;
        height: 12px;
        background: rgba(100, 80, 60, 0.5);
        border-radius: 6px;
        overflow: hidden;
        margin: 0 auto 10px;
      }
      
      .rest-bar {
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #d4a04a, #f0c060);
        transition: width 0.5s;
      }
      
      .rest-hours {
        font-size: 14px;
        color: #a08060;
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(overlay);
    
    // Animate rest progress
    this.animateRest(hours);
  }
  
  /**
   * Animate rest progress
   */
  animateRest(totalHours) {
    const duration = 3000; // 3 seconds real time for rest animation
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const bar = document.querySelector('.rest-bar');
      const hoursText = document.querySelector('.rest-hours');
      
      if (bar) bar.style.width = `${progress * 100}%`;
      if (hoursText) hoursText.textContent = `${Math.floor(progress * totalHours)} / ${totalHours} hours`;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => this.completeRest(), 500);
      }
    };
    
    requestAnimationFrame(animate);
  }
  
  /**
   * Complete resting
   */
  completeRest() {
    // Advance game time
    if (this.timeManager) {
      for (let i = 0; i < this.restTargetHours; i++) {
        // Advance one hour at a time to trigger events
        const newHour = (this.timeManager.currentHour + 1) % 24;
        this.timeManager.setTime(newHour, 0);
      }
    }
    
    // Apply warmth buff
    this.hasWarmthBuff = true;
    this.warmthBuffEndTime = Date.now() + REST_CONFIG.warmthBuffDuration * 1000;
    
    // Clear debuffs
    this.activeDebuffs.clear();
    
    // Hide rest UI
    const overlay = document.getElementById('rest-overlay');
    if (overlay) {
      overlay.style.animation = 'rest-fade-in 1s ease reverse';
      setTimeout(() => overlay.remove(), 1000);
    }
    
    const style = document.getElementById('rest-style');
    if (style) setTimeout(() => style.remove(), 1000);
    
    this.isResting = false;
    
    if (this.onRestComplete) {
      this.onRestComplete({
        hoursRested: this.restTargetHours,
        healthRestored: this.restTargetHours * REST_CONFIG.healthRegenPerHour,
        staminaRestored: this.restTargetHours * REST_CONFIG.staminaRegenPerHour,
        warmthBuff: true
      });
    }
    
    this.updateDebuffIcons();
    
    console.log(`[TimeWeatherGameplay] Rest complete. ${this.restTargetHours} hours passed.`);
  }
  
  /**
   * Apply cold damage (for blizzards, etc.)
   */
  getColdDamage() {
    if (this.hasWarmthBuff || this.isSheltered()) return 0;
    
    const weatherEffects = this.getCurrentWeatherEffects();
    if (!weatherEffects || !weatherEffects.coldDamage) return 0;
    
    return weatherEffects.coldDamage;
  }
  
  /**
   * Check for lightning strike (during storms)
   */
  checkLightningStrike() {
    if (this.isIndoors) return false;
    
    const weatherEffects = this.getCurrentWeatherEffects();
    if (!weatherEffects || !weatherEffects.lightningDamageChance) return false;
    
    return Math.random() < weatherEffects.lightningDamageChance;
  }
  
  /**
   * Main update loop
   */
  update(delta, playerPosition, campfires) {
    // Update campfire proximity
    this.updateCampfireProximity(campfires, playerPosition);
    
    // Clean up expired debuffs
    this.cleanupDebuffs();
    
    // Check warmth buff expiration
    if (this.hasWarmthBuff && Date.now() > this.warmthBuffEndTime) {
      this.hasWarmthBuff = false;
      this.updateDebuffIcons();
      console.log('[TimeWeatherGameplay] Warmth buff expired');
    }
    
    // Apply weather debuffs if not sheltered
    if (!this.isSheltered()) {
      const weatherEffects = this.getCurrentWeatherEffects();
      if (weatherEffects && weatherEffects.debuff) {
        // Check if we already have this debuff
        const hasDebuff = [...this.activeDebuffs.values()].some(d => d.type === weatherEffects.debuff);
        if (!hasDebuff) {
          this.applyWeatherDebuff(weatherEffects.debuff, weatherEffects.debuffDuration);
        }
      }
    }
  }
  
  /**
   * Save state
   */
  save() {
    const data = {
      shownHints: [...this.shownHints],
      hasWarmthBuff: this.hasWarmthBuff,
      warmthBuffEndTime: this.warmthBuffEndTime
    };
    localStorage.setItem('ashen-gameplay-time', JSON.stringify(data));
  }
  
  /**
   * Load state
   */
  load() {
    try {
      const data = localStorage.getItem('ashen-gameplay-time');
      if (data) {
        const parsed = JSON.parse(data);
        this.shownHints = new Set(parsed.shownHints || []);
        this.hasWarmthBuff = parsed.hasWarmthBuff || false;
        this.warmthBuffEndTime = parsed.warmthBuffEndTime || 0;
        
        // Check if warmth buff expired while offline
        if (this.hasWarmthBuff && Date.now() > this.warmthBuffEndTime) {
          this.hasWarmthBuff = false;
        }
      }
    } catch (e) {
      console.warn('[TimeWeatherGameplay] Failed to load state:', e);
    }
  }
}

// Singleton
let gameplayInstance = null;

export function createTimeWeatherGameplay(gameManager) {
  if (!gameplayInstance) {
    gameplayInstance = new TimeWeatherGameplay(gameManager);
    gameplayInstance.load();
  }
  return gameplayInstance;
}

export function getTimeWeatherGameplay() {
  return gameplayInstance;
}

export default TimeWeatherGameplay;
