/**
 * WeatherManager.js - Dynamic Weather System (Phase 24)
 * 
 * Manages weather states, transitions, and visual effects.
 * Integrates with TimeManager and DayNightLighting for cohesive atmosphere.
 */

import * as THREE from 'three';
import { getTimeManager, DAY_PHASES } from './TimeManager.js';
import { getDayNightLighting } from './DayNightLighting.js';

// Weather types
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

// Weather configurations
const WEATHER_CONFIG = {
  [WEATHER_TYPES.CLEAR]: {
    fogMultiplier: 0.8,
    ambientMultiplier: 1.0,
    sunMultiplier: 1.0,
    skyTint: new THREE.Color(1, 1, 1),
    particleType: null,
    particleCount: 0,
    windStrength: 0.1,
    soundLoop: null
  },
  [WEATHER_TYPES.CLOUDY]: {
    fogMultiplier: 1.2,
    ambientMultiplier: 0.85,
    sunMultiplier: 0.7,
    skyTint: new THREE.Color(0.9, 0.9, 0.95),
    particleType: null,
    particleCount: 0,
    windStrength: 0.3,
    soundLoop: 'wind_light'
  },
  [WEATHER_TYPES.OVERCAST]: {
    fogMultiplier: 1.5,
    ambientMultiplier: 0.7,
    sunMultiplier: 0.4,
    skyTint: new THREE.Color(0.7, 0.7, 0.75),
    particleType: null,
    particleCount: 0,
    windStrength: 0.4,
    soundLoop: 'wind_medium'
  },
  [WEATHER_TYPES.RAIN]: {
    fogMultiplier: 1.8,
    ambientMultiplier: 0.6,
    sunMultiplier: 0.3,
    skyTint: new THREE.Color(0.6, 0.65, 0.7),
    particleType: 'rain',
    particleCount: 500,
    windStrength: 0.5,
    soundLoop: 'rain_light'
  },
  [WEATHER_TYPES.HEAVY_RAIN]: {
    fogMultiplier: 2.2,
    ambientMultiplier: 0.5,
    sunMultiplier: 0.2,
    skyTint: new THREE.Color(0.5, 0.55, 0.6),
    particleType: 'rain',
    particleCount: 1500,
    windStrength: 0.7,
    soundLoop: 'rain_heavy'
  },
  [WEATHER_TYPES.STORM]: {
    fogMultiplier: 2.5,
    ambientMultiplier: 0.4,
    sunMultiplier: 0.1,
    skyTint: new THREE.Color(0.4, 0.4, 0.5),
    particleType: 'rain',
    particleCount: 2000,
    windStrength: 1.0,
    soundLoop: 'storm',
    hasLightning: true
  },
  [WEATHER_TYPES.FOG]: {
    fogMultiplier: 4.0,
    ambientMultiplier: 0.65,
    sunMultiplier: 0.3,
    skyTint: new THREE.Color(0.8, 0.8, 0.82),
    particleType: 'fog_wisps',
    particleCount: 100,
    windStrength: 0.1,
    soundLoop: null
  },
  [WEATHER_TYPES.SNOW]: {
    fogMultiplier: 1.5,
    ambientMultiplier: 0.8,
    sunMultiplier: 0.6,
    skyTint: new THREE.Color(0.85, 0.88, 0.95),
    particleType: 'snow',
    particleCount: 800,
    windStrength: 0.3,
    soundLoop: 'wind_light'
  },
  [WEATHER_TYPES.BLIZZARD]: {
    fogMultiplier: 3.0,
    ambientMultiplier: 0.5,
    sunMultiplier: 0.2,
    skyTint: new THREE.Color(0.75, 0.78, 0.85),
    particleType: 'snow',
    particleCount: 2500,
    windStrength: 1.2,
    soundLoop: 'blizzard'
  }
};

// Biome-specific weather probabilities
const BIOME_WEATHER = {
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
  }
};

// Transition duration in seconds
const TRANSITION_DURATION = 60;

// Weather change interval range (game hours)
const WEATHER_CHANGE_MIN_HOURS = 2;
const WEATHER_CHANGE_MAX_HOURS = 8;

export class WeatherManager {
  constructor(scene, particleManager, audioManager) {
    this.scene = scene;
    this.particleManager = particleManager;
    this.audioManager = audioManager;
    
    // Current state
    this.currentWeather = WEATHER_TYPES.CLEAR;
    this.currentBiome = 'default';
    this.weatherQueue = [];
    
    // Transition state
    this.transitionProgress = 1; // 1 = complete
    this.transitionSpeed = 1 / TRANSITION_DURATION;
    this.previousWeather = null;
    
    // Current interpolated multipliers
    this.currentFogMult = 1.0;
    this.currentAmbientMult = 1.0;
    this.currentSunMult = 1.0;
    this.currentSkyTint = new THREE.Color(1, 1, 1);
    this.currentWindStrength = 0.1;
    
    // Target values
    this.targetFogMult = 1.0;
    this.targetAmbientMult = 1.0;
    this.targetSunMult = 1.0;
    this.targetSkyTint = new THREE.Color(1, 1, 1);
    this.targetWindStrength = 0.1;
    
    // Weather change timing
    this.nextWeatherChangeHour = 0;
    this.hoursUntilChange = this.getRandomChangeInterval();
    
    // Particle system for weather effects
    this.weatherParticles = null;
    this.currentParticleType = null;
    
    // Lightning state (for storms)
    this.lightningTimer = 0;
    this.lightningFlash = null;
    this.isLightningFlashing = false;
    
    // Event callbacks
    this.onWeatherChange = null;
    
    // Create lightning flash light
    this.createLightningLight();
    
    // Load saved weather
    this.load();
  }
  
  /**
   * Create the lightning flash light
   */
  createLightningLight() {
    this.lightningFlash = new THREE.PointLight(0xaaccff, 0, 200);
    this.lightningFlash.position.set(0, 100, 0);
    this.scene.add(this.lightningFlash);
  }
  
  /**
   * Get random interval until next weather change
   */
  getRandomChangeInterval() {
    return WEATHER_CHANGE_MIN_HOURS + Math.random() * (WEATHER_CHANGE_MAX_HOURS - WEATHER_CHANGE_MIN_HOURS);
  }
  
  /**
   * Select random weather based on biome probabilities
   */
  selectRandomWeather(biome = 'default') {
    const weights = BIOME_WEATHER[biome] || BIOME_WEATHER.default;
    const total = Object.values(weights).reduce((a, b) => a + b, 0);
    let random = Math.random() * total;
    
    for (const [weather, weight] of Object.entries(weights)) {
      random -= weight;
      if (random <= 0) {
        return weather;
      }
    }
    
    return WEATHER_TYPES.CLEAR;
  }
  
  /**
   * Initialize with TimeManager events
   */
  initialize(timeManager) {
    // Listen for hour changes to potentially change weather
    const originalOnHourChange = timeManager.onHourChange;
    timeManager.onHourChange = (hour) => {
      if (originalOnHourChange) originalOnHourChange(hour);
      this.onHourChanged(hour);
    };
  }
  
  /**
   * Handle hour change - check for weather changes
   */
  onHourChanged(hour) {
    this.hoursUntilChange--;
    
    if (this.hoursUntilChange <= 0) {
      // Time for weather change
      const newWeather = this.selectRandomWeather(this.currentBiome);
      if (newWeather !== this.currentWeather) {
        this.startWeatherTransition(newWeather);
      }
      this.hoursUntilChange = this.getRandomChangeInterval();
    }
  }
  
  /**
   * Force a specific weather (for scripting/events)
   */
  forceWeather(weatherType, immediate = false) {
    if (!WEATHER_CONFIG[weatherType]) {
      console.warn(`[WeatherManager] Unknown weather type: ${weatherType}`);
      return;
    }
    
    if (immediate) {
      this.setWeatherImmediate(weatherType);
    } else {
      this.startWeatherTransition(weatherType);
    }
  }
  
  /**
   * Set weather immediately (no transition)
   */
  setWeatherImmediate(weatherType) {
    const config = WEATHER_CONFIG[weatherType];
    if (!config) return;
    
    this.currentWeather = weatherType;
    this.previousWeather = null;
    this.transitionProgress = 1;
    
    this.currentFogMult = config.fogMultiplier;
    this.currentAmbientMult = config.ambientMultiplier;
    this.currentSunMult = config.sunMultiplier;
    this.currentSkyTint.copy(config.skyTint);
    this.currentWindStrength = config.windStrength;
    
    this.targetFogMult = config.fogMultiplier;
    this.targetAmbientMult = config.ambientMultiplier;
    this.targetSunMult = config.sunMultiplier;
    this.targetSkyTint.copy(config.skyTint);
    this.targetWindStrength = config.windStrength;
    
    // Update particles
    this.updateWeatherParticles(weatherType);
    
    // Update audio
    this.updateWeatherAudio(weatherType);
    
    // Fire event
    if (this.onWeatherChange) {
      this.onWeatherChange(weatherType, null);
    }
    
    console.log(`[WeatherManager] Weather set to ${weatherType}`);
  }
  
  /**
   * Start transition to new weather
   */
  startWeatherTransition(newWeather) {
    if (newWeather === this.currentWeather) return;
    
    const config = WEATHER_CONFIG[newWeather];
    if (!config) return;
    
    this.previousWeather = this.currentWeather;
    this.currentWeather = newWeather;
    this.transitionProgress = 0;
    
    // Set targets
    this.targetFogMult = config.fogMultiplier;
    this.targetAmbientMult = config.ambientMultiplier;
    this.targetSunMult = config.sunMultiplier;
    this.targetSkyTint.copy(config.skyTint);
    this.targetWindStrength = config.windStrength;
    
    // Start transitioning particles
    this.updateWeatherParticles(newWeather);
    
    // Crossfade audio
    this.updateWeatherAudio(newWeather);
    
    // Fire event
    if (this.onWeatherChange) {
      this.onWeatherChange(newWeather, this.previousWeather);
    }
    
    console.log(`[WeatherManager] Weather transitioning to ${newWeather}`);
  }
  
  /**
   * Update weather particle effects
   */
  updateWeatherParticles(weatherType) {
    const config = WEATHER_CONFIG[weatherType];
    
    // Clear existing weather particles
    if (this.weatherParticles) {
      this.scene.remove(this.weatherParticles);
      this.weatherParticles.geometry.dispose();
      this.weatherParticles.material.dispose();
      this.weatherParticles = null;
    }
    
    if (!config.particleType || config.particleCount === 0) {
      this.currentParticleType = null;
      return;
    }
    
    this.currentParticleType = config.particleType;
    
    // Create weather particles based on type
    if (config.particleType === 'rain') {
      this.createRainParticles(config.particleCount);
    } else if (config.particleType === 'snow') {
      this.createSnowParticles(config.particleCount);
    } else if (config.particleType === 'fog_wisps') {
      this.createFogWisps(config.particleCount);
    }
  }
  
  /**
   * Create rain particle system
   */
  createRainParticles(count) {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = Math.random() * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      
      velocities[i * 3] = (Math.random() - 0.5) * 2; // X drift
      velocities[i * 3 + 1] = -15 - Math.random() * 10; // Fall speed
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 2; // Z drift
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    
    const material = new THREE.PointsMaterial({
      color: 0x99aacc,
      size: 0.15,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    
    this.weatherParticles = new THREE.Points(geometry, material);
    this.weatherParticles.userData.type = 'rain';
    this.scene.add(this.weatherParticles);
  }
  
  /**
   * Create snow particle system
   */
  createSnowParticles(count) {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 80;
      positions[i * 3 + 1] = Math.random() * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;
      
      velocities[i * 3] = (Math.random() - 0.5) * 1;
      velocities[i * 3 + 1] = -2 - Math.random() * 2; // Slower fall
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 1;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    
    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.3,
      transparent: true,
      opacity: 0.8,
      blending: THREE.NormalBlending
    });
    
    this.weatherParticles = new THREE.Points(geometry, material);
    this.weatherParticles.userData.type = 'snow';
    this.scene.add(this.weatherParticles);
  }
  
  /**
   * Create fog wisp particles
   */
  createFogWisps(count) {
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = Math.random() * 5 + 1; // Low to ground
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.5;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.1;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    
    const material = new THREE.PointsMaterial({
      color: 0xaabbcc,
      size: 3,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true
    });
    
    this.weatherParticles = new THREE.Points(geometry, material);
    this.weatherParticles.userData.type = 'fog_wisps';
    this.scene.add(this.weatherParticles);
  }
  
  /**
   * Update weather audio
   */
  updateWeatherAudio(weatherType) {
    if (!this.audioManager) return;
    
    const config = WEATHER_CONFIG[weatherType];
    
    // Stop current weather sounds
    // (Audio manager would handle crossfading)
    
    // Start new weather sound if any
    if (config.soundLoop) {
      // this.audioManager.playLoop(config.soundLoop, { volume: 0.3 });
    }
  }
  
  /**
   * Set current biome for weather probabilities
   */
  setBiome(biome) {
    this.currentBiome = biome;
  }
  
  /**
   * Update weather particles animation
   */
  updateParticles(delta, playerPosition) {
    if (!this.weatherParticles) return;
    
    const positions = this.weatherParticles.geometry.attributes.position;
    const velocities = this.weatherParticles.geometry.attributes.velocity;
    
    const windX = Math.sin(performance.now() * 0.001) * this.currentWindStrength;
    const windZ = Math.cos(performance.now() * 0.0007) * this.currentWindStrength * 0.5;
    
    for (let i = 0; i < positions.count; i++) {
      let x = positions.array[i * 3];
      let y = positions.array[i * 3 + 1];
      let z = positions.array[i * 3 + 2];
      
      // Apply velocity + wind
      x += (velocities.array[i * 3] + windX) * delta;
      y += velocities.array[i * 3 + 1] * delta;
      z += (velocities.array[i * 3 + 2] + windZ) * delta;
      
      // Keep particles near player
      if (playerPosition) {
        const dx = x - playerPosition.x;
        const dz = z - playerPosition.z;
        
        if (Math.abs(dx) > 40) x = playerPosition.x + (Math.random() - 0.5) * 80;
        if (Math.abs(dz) > 40) z = playerPosition.z + (Math.random() - 0.5) * 80;
      }
      
      // Reset particles that fall below ground
      if (y < 0) {
        y = 50 + Math.random() * 10;
        x = (playerPosition?.x || 0) + (Math.random() - 0.5) * 80;
        z = (playerPosition?.z || 0) + (Math.random() - 0.5) * 80;
      }
      
      positions.array[i * 3] = x;
      positions.array[i * 3 + 1] = y;
      positions.array[i * 3 + 2] = z;
    }
    
    positions.needsUpdate = true;
  }
  
  /**
   * Update lightning effects (for storms)
   */
  updateLightning(delta) {
    const config = WEATHER_CONFIG[this.currentWeather];
    
    if (!config || !config.hasLightning) {
      this.lightningFlash.intensity = 0;
      return;
    }
    
    // Random lightning strikes
    this.lightningTimer -= delta;
    
    if (this.lightningTimer <= 0 && !this.isLightningFlashing) {
      // Random chance of lightning
      if (Math.random() < 0.01) { // Low chance per frame
        this.triggerLightning();
      }
      this.lightningTimer = 0.5 + Math.random() * 2;
    }
    
    // Fade out lightning flash
    if (this.isLightningFlashing) {
      this.lightningFlash.intensity *= 0.85;
      if (this.lightningFlash.intensity < 0.1) {
        this.lightningFlash.intensity = 0;
        this.isLightningFlashing = false;
      }
    }
  }
  
  /**
   * Trigger a lightning flash
   */
  triggerLightning() {
    this.isLightningFlashing = true;
    this.lightningFlash.intensity = 3 + Math.random() * 2;
    this.lightningFlash.position.set(
      (Math.random() - 0.5) * 100,
      80 + Math.random() * 40,
      (Math.random() - 0.5) * 100
    );
    
    // Play thunder sound
    if (this.audioManager) {
      const delay = 0.5 + Math.random() * 2; // Thunder delay
      setTimeout(() => {
        // this.audioManager.play('thunder', { volume: 0.6 + Math.random() * 0.4 });
      }, delay * 1000);
    }
  }
  
  /**
   * Get current weather multipliers for lighting system
   */
  getMultipliers() {
    return {
      fog: this.currentFogMult,
      ambient: this.currentAmbientMult,
      sun: this.currentSunMult,
      skyTint: this.currentSkyTint,
      wind: this.currentWindStrength
    };
  }
  
  /**
   * Apply weather effects to lighting
   */
  applyToLighting(lighting) {
    if (!lighting) return;
    
    // Modulate lighting based on weather
    // The lighting system's base values get multiplied by weather
    // This is handled in the update integration
  }
  
  /**
   * Update weather system (call each frame)
   */
  update(delta, playerPosition = null) {
    // Handle transitions
    if (this.transitionProgress < 1) {
      this.transitionProgress += this.transitionSpeed * delta;
      this.transitionProgress = Math.min(1, this.transitionProgress);
      
      const t = this.transitionProgress;
      
      // Lerp multipliers
      this.currentFogMult += (this.targetFogMult - this.currentFogMult) * t * 0.05;
      this.currentAmbientMult += (this.targetAmbientMult - this.currentAmbientMult) * t * 0.05;
      this.currentSunMult += (this.targetSunMult - this.currentSunMult) * t * 0.05;
      this.currentSkyTint.lerp(this.targetSkyTint, t * 0.05);
      this.currentWindStrength += (this.targetWindStrength - this.currentWindStrength) * t * 0.05;
    }
    
    // Update particles
    this.updateParticles(delta, playerPosition);
    
    // Update lightning
    this.updateLightning(delta);
    
    // Apply to lighting system
    const lighting = getDayNightLighting();
    if (lighting) {
      // Weather modulates the base lighting values
      // This is a simplified integration - in production you'd want
      // the lighting system to query weather multipliers
    }
  }
  
  /**
   * Save weather state
   */
  save() {
    const saveData = {
      weather: this.currentWeather,
      biome: this.currentBiome,
      hoursUntilChange: this.hoursUntilChange
    };
    localStorage.setItem('ashen-weather', JSON.stringify(saveData));
  }
  
  /**
   * Load weather state
   */
  load() {
    try {
      const data = localStorage.getItem('ashen-weather');
      if (data) {
        const saveData = JSON.parse(data);
        this.currentWeather = saveData.weather || WEATHER_TYPES.CLEAR;
        this.currentBiome = saveData.biome || 'default';
        this.hoursUntilChange = saveData.hoursUntilChange ?? this.getRandomChangeInterval();
        
        // Apply loaded weather immediately
        this.setWeatherImmediate(this.currentWeather);
        
        console.log(`[WeatherManager] Loaded weather: ${this.currentWeather}, biome: ${this.currentBiome}`);
      }
    } catch (e) {
      console.warn('[WeatherManager] Failed to load saved weather:', e);
    }
  }
  
  /**
   * Get debug info
   */
  getDebugInfo() {
    return {
      weather: this.currentWeather,
      biome: this.currentBiome,
      fogMult: this.currentFogMult.toFixed(2),
      sunMult: this.currentSunMult.toFixed(2),
      wind: this.currentWindStrength.toFixed(2),
      hoursUntilChange: Math.ceil(this.hoursUntilChange),
      transitioning: this.transitionProgress < 1
    };
  }
}

// Singleton instance
let weatherManagerInstance = null;

export function createWeatherManager(scene, particleManager, audioManager) {
  if (!weatherManagerInstance) {
    weatherManagerInstance = new WeatherManager(scene, particleManager, audioManager);
  }
  return weatherManagerInstance;
}

export function getWeatherManager() {
  return weatherManagerInstance;
}

export default WeatherManager;
