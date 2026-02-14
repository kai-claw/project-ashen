/**
 * RareEventManager.js - Handles Rare Celestial Events (Phase 24)
 * 
 * Manages triggering, visual effects, and gameplay impact of:
 * - Blood Moon
 * - Meteor Shower
 * - Aurora Borealis
 * - Solar Eclipse
 * - Spirit Night
 */

import * as THREE from 'three';
import { getTimeManager, DAY_PHASES } from './TimeManager.js';
import { getWeatherManager, WEATHER_TYPES } from './WeatherManager.js';
import { getDayNightLighting } from './DayNightLighting.js';
import { RARE_EVENTS, checkRareEventTrigger, getPossibleRareEvents } from '../data/WeatherData.js';

export class RareEventManager {
  constructor(scene) {
    this.scene = scene;
    this.timeManager = null;
    this.weatherManager = null;
    this.lighting = null;
    
    // Active event state
    this.activeEvent = null;
    this.eventStartTime = 0;
    this.eventDuration = 0;
    
    // Event check cooldown (prevent immediate re-triggers)
    this.lastEventCheck = 0;
    this.eventCheckInterval = 300000; // 5 minutes real time
    
    // Event cooldowns (when each event was last active)
    this.eventCooldowns = new Map();
    this.eventCooldownDuration = 3600000; // 1 hour real time between same events
    
    // Visual effect objects
    this.eventParticles = null;
    this.eventLights = [];
    this.meteorites = []; // Trackable meteor impact locations
    
    // Callbacks
    this.onEventStart = null;
    this.onEventEnd = null;
    
    // Create event notification UI
    this.createEventUI();
    
    // Stored effects for active event
    this.originalLightingState = null;
    
    console.log('[RareEventManager] Initialized');
  }
  
  /**
   * Initialize with managers
   */
  initialize() {
    this.timeManager = getTimeManager();
    this.weatherManager = getWeatherManager();
    this.lighting = getDayNightLighting();
    
    // Hook into hour changes to check for events
    if (this.timeManager) {
      const originalOnHourChange = this.timeManager.onHourChange;
      this.timeManager.onHourChange = (hour) => {
        if (originalOnHourChange) originalOnHourChange(hour);
        this.checkForRareEvents();
      };
    }
    
    this.load();
  }
  
  /**
   * Create event notification UI
   */
  createEventUI() {
    if (document.getElementById('rare-event-banner')) return;
    
    const banner = document.createElement('div');
    banner.id = 'rare-event-banner';
    banner.className = 'hidden';
    banner.innerHTML = `
      <div class="event-icon">🌑</div>
      <div class="event-content">
        <div class="event-name">Event Name</div>
        <div class="event-desc">Event description...</div>
      </div>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      #rare-event-banner {
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%) translateY(-20px);
        background: linear-gradient(135deg, rgba(60, 20, 40, 0.95), rgba(80, 30, 50, 0.9));
        border: 3px solid rgba(200, 100, 100, 0.7);
        border-radius: 12px;
        padding: 16px 32px;
        display: flex;
        align-items: center;
        gap: 16px;
        z-index: 300;
        opacity: 0;
        transition: opacity 0.5s, transform 0.5s;
        box-shadow: 0 0 40px rgba(200, 50, 50, 0.4);
      }
      
      #rare-event-banner.visible {
        opacity: 1;
        transform: translateX(-50%) translateY(0);
      }
      
      #rare-event-banner.hidden {
        pointer-events: none;
      }
      
      #rare-event-banner .event-icon {
        font-size: 48px;
        filter: drop-shadow(0 0 10px rgba(255, 100, 100, 0.5));
        animation: event-pulse 2s infinite;
      }
      
      @keyframes event-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      
      #rare-event-banner .event-name {
        font-family: 'Cinzel', serif;
        font-size: 24px;
        color: #ffd0a0;
        text-shadow: 0 0 10px rgba(255, 150, 100, 0.5);
        margin-bottom: 4px;
      }
      
      #rare-event-banner .event-desc {
        font-family: 'Crimson Text', serif;
        font-size: 14px;
        color: #c4a080;
        font-style: italic;
      }
      
      /* Blood Moon specific */
      #rare-event-banner.blood-moon {
        background: linear-gradient(135deg, rgba(100, 20, 20, 0.95), rgba(60, 10, 10, 0.9));
        border-color: rgba(200, 50, 50, 0.8);
        box-shadow: 0 0 60px rgba(200, 30, 30, 0.6);
      }
      
      /* Meteor Shower specific */
      #rare-event-banner.meteor-shower {
        background: linear-gradient(135deg, rgba(40, 40, 80, 0.95), rgba(20, 20, 50, 0.9));
        border-color: rgba(150, 150, 255, 0.8);
        box-shadow: 0 0 40px rgba(100, 100, 200, 0.4);
      }
      
      /* Aurora specific */
      #rare-event-banner.aurora {
        background: linear-gradient(135deg, rgba(20, 60, 40, 0.95), rgba(20, 40, 60, 0.9));
        border-color: rgba(100, 200, 150, 0.8);
        box-shadow: 0 0 40px rgba(50, 200, 100, 0.4);
      }
      
      /* Eclipse specific */
      #rare-event-banner.solar-eclipse {
        background: linear-gradient(135deg, rgba(10, 10, 20, 0.95), rgba(30, 20, 40, 0.9));
        border-color: rgba(255, 200, 100, 0.8);
        box-shadow: 0 0 60px rgba(255, 150, 50, 0.5);
      }
      
      /* Spirit Night specific */
      #rare-event-banner.spirit-night {
        background: linear-gradient(135deg, rgba(40, 50, 80, 0.95), rgba(30, 40, 70, 0.9));
        border-color: rgba(150, 180, 255, 0.8);
        box-shadow: 0 0 40px rgba(100, 150, 255, 0.4);
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(banner);
  }
  
  /**
   * Show event banner
   */
  showEventBanner(event) {
    const banner = document.getElementById('rare-event-banner');
    if (!banner) return;
    
    const icons = {
      blood_moon: '🌑',
      meteor_shower: '☄️',
      aurora: '🌌',
      solar_eclipse: '🌘',
      spirit_night: '👻'
    };
    
    banner.querySelector('.event-icon').textContent = icons[event.id] || '⭐';
    banner.querySelector('.event-name').textContent = event.name;
    banner.querySelector('.event-desc').textContent = event.description;
    
    // Set class for styling
    banner.className = event.id.replace(/_/g, '-');
    
    // Show with animation
    setTimeout(() => banner.classList.add('visible'), 50);
    
    // Auto-hide after 8 seconds
    setTimeout(() => {
      banner.classList.remove('visible');
      setTimeout(() => banner.classList.add('hidden'), 500);
    }, 8000);
  }
  
  /**
   * Check for rare events
   */
  checkForRareEvents() {
    // Don't check if an event is already active
    if (this.activeEvent) return;
    
    // Rate limit checks
    const now = Date.now();
    if (now - this.lastEventCheck < this.eventCheckInterval) return;
    this.lastEventCheck = now;
    
    if (!this.timeManager) return;
    
    // Build game state for event checking
    const gameState = {
      currentHour: this.timeManager.currentHour,
      currentDay: this.timeManager.currentDay,
      moonPhase: this.timeManager.moonPhase,
      dayPhase: this.timeManager.dayPhase,
      currentWeather: this.weatherManager?.currentWeather || WEATHER_TYPES.CLEAR,
      currentBiome: this.weatherManager?.currentBiome || 'default'
    };
    
    // Check each event
    for (const [eventId, event] of Object.entries(RARE_EVENTS)) {
      // Check cooldown
      const lastActive = this.eventCooldowns.get(eventId) || 0;
      if (now - lastActive < this.eventCooldownDuration) continue;
      
      if (checkRareEventTrigger(eventId, gameState)) {
        this.startEvent(eventId);
        break; // Only one event at a time
      }
    }
  }
  
  /**
   * Start a rare event
   */
  startEvent(eventId) {
    const event = RARE_EVENTS[eventId];
    if (!event) return;
    
    this.activeEvent = event;
    this.eventStartTime = Date.now();
    // Convert game hours to real seconds (1 game hour = 60 real seconds at default speed)
    this.eventDuration = event.duration * 60 * 1000;
    
    console.log(`[RareEventManager] Starting rare event: ${event.name}`);
    
    // Show banner
    this.showEventBanner(event);
    
    // Store current lighting state
    this.storeLightingState();
    
    // Apply event visuals
    this.applyEventVisuals(eventId);
    
    // Set cooldown
    this.eventCooldowns.set(eventId, Date.now());
    
    // Fire callback
    if (this.onEventStart) {
      this.onEventStart(event);
    }
    
    this.save();
  }
  
  /**
   * End the active event
   */
  endEvent() {
    if (!this.activeEvent) return;
    
    const event = this.activeEvent;
    
    console.log(`[RareEventManager] Ending rare event: ${event.name}`);
    
    // Clear event visuals
    this.clearEventVisuals();
    
    // Restore lighting
    this.restoreLightingState();
    
    // Fire callback
    if (this.onEventEnd) {
      this.onEventEnd(event);
    }
    
    this.activeEvent = null;
    this.save();
  }
  
  /**
   * Store current lighting state for restoration
   */
  storeLightingState() {
    if (!this.lighting) return;
    
    // Store what we can restore later
    this.originalLightingState = {
      // We'd store fog, ambient, etc. here
    };
  }
  
  /**
   * Restore lighting state after event
   */
  restoreLightingState() {
    // Lighting system will naturally transition back
    // based on current time/weather
  }
  
  /**
   * Apply visual effects for an event
   */
  applyEventVisuals(eventId) {
    const event = RARE_EVENTS[eventId];
    if (!event?.visuals) return;
    
    switch (eventId) {
      case 'BLOOD_MOON':
        this.applyBloodMoonVisuals(event.visuals);
        break;
      case 'METEOR_SHOWER':
        this.applyMeteorShowerVisuals(event.visuals);
        break;
      case 'AURORA':
        this.applyAuroraVisuals(event.visuals);
        break;
      case 'SOLAR_ECLIPSE':
        this.applyEclipseVisuals(event.visuals);
        break;
      case 'SPIRIT_NIGHT':
        this.applySpiritNightVisuals(event.visuals);
        break;
    }
  }
  
  /**
   * Blood Moon visual effects
   */
  applyBloodMoonVisuals(visuals) {
    // Create red ambient light
    const bloodLight = new THREE.AmbientLight(visuals.ambientTint, 0.3);
    bloodLight.name = 'bloodMoonAmbient';
    this.scene.add(bloodLight);
    this.eventLights.push(bloodLight);
    
    // Adjust fog to red tint
    if (this.scene.fog) {
      this.scene.fog.color.copy(visuals.fogColor);
    }
    
    // Moon color would be handled by DayNightLighting integration
  }
  
  /**
   * Meteor Shower visual effects
   */
  applyMeteorShowerVisuals(visuals) {
    // Create meteor particle system
    const count = visuals.particleCount || 30;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    const delays = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      // Random start positions high in sky
      positions[i * 3] = (Math.random() - 0.5) * 200;
      positions[i * 3 + 1] = 100 + Math.random() * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200;
      
      // Diagonal fall velocity
      velocities[i * 3] = (Math.random() - 0.5) * 20;
      velocities[i * 3 + 1] = -30 - Math.random() * 20;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 20;
      
      // Staggered delays for continuous shower
      delays[i] = Math.random() * 10;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geometry.setAttribute('delay', new THREE.BufferAttribute(delays, 1));
    
    const material = new THREE.PointsMaterial({
      color: visuals.trailColor,
      size: 2,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    
    this.eventParticles = new THREE.Points(geometry, material);
    this.eventParticles.userData.type = 'meteor';
    this.eventParticles.userData.elapsed = 0;
    this.scene.add(this.eventParticles);
  }
  
  /**
   * Aurora visual effects
   */
  applyAuroraVisuals(visuals) {
    // Create aurora light bands (simplified - would be shader in production)
    const colors = visuals.colors || [
      new THREE.Color(0.2, 0.8, 0.4),
      new THREE.Color(0.3, 0.4, 0.9)
    ];
    
    for (let i = 0; i < colors.length; i++) {
      const light = new THREE.RectAreaLight(colors[i], visuals.intensity || 0.5, 100, 20);
      light.position.set((i - 0.5) * 50, 80, -50);
      light.lookAt(0, 0, 0);
      light.name = `auroraLight${i}`;
      this.scene.add(light);
      this.eventLights.push(light);
    }
  }
  
  /**
   * Solar Eclipse visual effects
   */
  applyEclipseVisuals(visuals) {
    // Dramatically reduce ambient light
    const darkLight = new THREE.AmbientLight(0x111122, 0.1);
    darkLight.name = 'eclipseAmbient';
    this.scene.add(darkLight);
    this.eventLights.push(darkLight);
    
    // Corona ring effect around sun position
    const coronaLight = new THREE.PointLight(visuals.coronaColor, 2, 200);
    coronaLight.position.set(0, 100, 0);
    coronaLight.name = 'coronaLight';
    this.scene.add(coronaLight);
    this.eventLights.push(coronaLight);
    
    // Adjust scene to near-darkness
    if (this.scene.fog) {
      this.scene.fog.color.copy(visuals.skyColor);
    }
  }
  
  /**
   * Spirit Night visual effects
   */
  applySpiritNightVisuals(visuals) {
    // Create spirit wisp particles
    const count = 50;
    const positions = new Float32Array(count * 3);
    const velocities = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = 1 + Math.random() * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 60;
      
      velocities[i * 3] = (Math.random() - 0.5) * 0.5;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.3;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    
    const material = new THREE.PointsMaterial({
      color: visuals.spiritGlow,
      size: 1.5,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    
    this.eventParticles = new THREE.Points(geometry, material);
    this.eventParticles.userData.type = 'spirit';
    this.scene.add(this.eventParticles);
    
    // Ethereal ambient
    const spiritLight = new THREE.AmbientLight(visuals.spiritGlow, 0.2);
    spiritLight.name = 'spiritAmbient';
    this.scene.add(spiritLight);
    this.eventLights.push(spiritLight);
  }
  
  /**
   * Clear all event visuals
   */
  clearEventVisuals() {
    // Remove particles
    if (this.eventParticles) {
      this.scene.remove(this.eventParticles);
      this.eventParticles.geometry.dispose();
      this.eventParticles.material.dispose();
      this.eventParticles = null;
    }
    
    // Remove lights
    for (const light of this.eventLights) {
      this.scene.remove(light);
      if (light.dispose) light.dispose();
    }
    this.eventLights = [];
    
    // Clear meteorites
    for (const meteorite of this.meteorites) {
      this.scene.remove(meteorite);
    }
    this.meteorites = [];
  }
  
  /**
   * Get current event effects for gameplay
   */
  getEventEffects() {
    if (!this.activeEvent) return null;
    return this.activeEvent.effects;
  }
  
  /**
   * Check if specific event is active
   */
  isEventActive(eventId) {
    return this.activeEvent?.id === eventId;
  }
  
  /**
   * Get meteorite locations (for meteor shower)
   */
  getMeteoriteLocations() {
    return this.meteorites.map(m => ({
      position: m.position.clone(),
      type: m.userData.type,
      collected: m.userData.collected
    }));
  }
  
  /**
   * Collect a meteorite
   */
  collectMeteorite(index) {
    if (index < 0 || index >= this.meteorites.length) return null;
    
    const meteorite = this.meteorites[index];
    if (meteorite.userData.collected) return null;
    
    meteorite.userData.collected = true;
    meteorite.visible = false;
    
    return {
      type: meteorite.userData.type,
      position: meteorite.position.clone()
    };
  }
  
  /**
   * Update meteor particles
   */
  updateMeteorParticles(delta) {
    if (!this.eventParticles || this.eventParticles.userData.type !== 'meteor') return;
    
    const positions = this.eventParticles.geometry.attributes.position;
    const velocities = this.eventParticles.geometry.attributes.velocity;
    const delays = this.eventParticles.geometry.attributes.delay;
    
    this.eventParticles.userData.elapsed += delta;
    
    for (let i = 0; i < positions.count; i++) {
      // Check delay
      if (this.eventParticles.userData.elapsed < delays.array[i]) continue;
      
      let y = positions.array[i * 3 + 1];
      
      // Apply velocity
      positions.array[i * 3] += velocities.array[i * 3] * delta;
      positions.array[i * 3 + 1] += velocities.array[i * 3 + 1] * delta;
      positions.array[i * 3 + 2] += velocities.array[i * 3 + 2] * delta;
      
      // Check for ground impact
      if (positions.array[i * 3 + 1] < 0) {
        // Spawn meteorite at impact location
        this.spawnMeteorite(
          positions.array[i * 3],
          positions.array[i * 3 + 2]
        );
        
        // Reset meteor to sky
        positions.array[i * 3] = (Math.random() - 0.5) * 200;
        positions.array[i * 3 + 1] = 100 + Math.random() * 50;
        positions.array[i * 3 + 2] = (Math.random() - 0.5) * 200;
        delays.array[i] = this.eventParticles.userData.elapsed + Math.random() * 5;
      }
    }
    
    positions.needsUpdate = true;
  }
  
  /**
   * Spawn a collectible meteorite
   */
  spawnMeteorite(x, z) {
    if (!this.activeEvent?.effects?.meteoritesDropped) return;
    
    const maxMeteors = this.activeEvent.effects.meteoritesDropped.max || 8;
    if (this.meteorites.length >= maxMeteors) return;
    
    // Determine meteorite type
    const effects = this.activeEvent.effects;
    let type;
    
    if (Math.random() < (effects.rareMeteoriteChance || 0)) {
      // Rare meteorite
      const types = effects.rareMeteoriteTypes || ['void_crystal'];
      type = types[Math.floor(Math.random() * types.length)];
    } else {
      // Normal meteorite
      const types = effects.meteoriteTypes || ['iron_meteorite'];
      type = types[Math.floor(Math.random() * types.length)];
    }
    
    // Create glowing marker
    const geometry = new THREE.SphereGeometry(0.5, 8, 8);
    const material = new THREE.MeshBasicMaterial({
      color: 0xffaa00,
      transparent: true,
      opacity: 0.8
    });
    
    const meteorite = new THREE.Mesh(geometry, material);
    meteorite.position.set(x, 0.5, z);
    meteorite.userData = {
      type,
      collected: false,
      spawnTime: Date.now()
    };
    
    this.scene.add(meteorite);
    this.meteorites.push(meteorite);
    
    // Flash effect at impact
    const flash = new THREE.PointLight(0xffcc00, 3, 20);
    flash.position.set(x, 2, z);
    this.scene.add(flash);
    
    // Fade flash
    const fadeFlash = () => {
      flash.intensity *= 0.9;
      if (flash.intensity > 0.1) {
        requestAnimationFrame(fadeFlash);
      } else {
        this.scene.remove(flash);
        flash.dispose();
      }
    };
    fadeFlash();
  }
  
  /**
   * Update spirit particles
   */
  updateSpiritParticles(delta, playerPosition) {
    if (!this.eventParticles || this.eventParticles.userData.type !== 'spirit') return;
    
    const positions = this.eventParticles.geometry.attributes.position;
    const velocities = this.eventParticles.geometry.attributes.velocity;
    
    const time = performance.now() * 0.001;
    
    for (let i = 0; i < positions.count; i++) {
      // Wandering motion
      positions.array[i * 3] += (velocities.array[i * 3] + Math.sin(time + i) * 0.3) * delta;
      positions.array[i * 3 + 1] += (velocities.array[i * 3 + 1] + Math.cos(time * 0.7 + i) * 0.2) * delta;
      positions.array[i * 3 + 2] += (velocities.array[i * 3 + 2] + Math.sin(time * 0.5 + i) * 0.3) * delta;
      
      // Keep near player
      if (playerPosition) {
        const dx = positions.array[i * 3] - playerPosition.x;
        const dz = positions.array[i * 3 + 2] - playerPosition.z;
        
        if (Math.abs(dx) > 30) {
          positions.array[i * 3] = playerPosition.x + (Math.random() - 0.5) * 60;
        }
        if (Math.abs(dz) > 30) {
          positions.array[i * 3 + 2] = playerPosition.z + (Math.random() - 0.5) * 60;
        }
      }
      
      // Keep in height range
      if (positions.array[i * 3 + 1] < 1) positions.array[i * 3 + 1] = 1;
      if (positions.array[i * 3 + 1] > 10) positions.array[i * 3 + 1] = 10;
    }
    
    positions.needsUpdate = true;
    
    // Pulse opacity
    this.eventParticles.material.opacity = 0.4 + Math.sin(time * 2) * 0.2;
  }
  
  /**
   * Main update
   */
  update(delta, playerPosition = null) {
    if (!this.activeEvent) return;
    
    // Check if event should end
    if (Date.now() - this.eventStartTime > this.eventDuration) {
      this.endEvent();
      return;
    }
    
    // Update event-specific particles
    switch (this.activeEvent.id) {
      case 'meteor_shower':
        this.updateMeteorParticles(delta);
        break;
      case 'spirit_night':
        this.updateSpiritParticles(delta, playerPosition);
        break;
    }
    
    // Pulse event lights
    const time = performance.now() * 0.001;
    for (const light of this.eventLights) {
      if (light.name?.includes('aurora')) {
        // Aurora wave effect
        light.intensity = 0.3 + Math.sin(time * 0.5 + parseFloat(light.name.slice(-1)) * 2) * 0.2;
      } else if (light.name === 'coronaLight') {
        // Eclipse corona pulse
        light.intensity = 1.5 + Math.sin(time * 3) * 0.5;
      }
    }
    
    // Fade meteorite glows over time
    for (const meteorite of this.meteorites) {
      if (meteorite.userData.collected) continue;
      
      const age = (Date.now() - meteorite.userData.spawnTime) / 1000;
      const glowDuration = this.activeEvent.effects?.impactGlowDuration || 300;
      
      if (age > glowDuration) {
        meteorite.visible = false;
      } else {
        // Pulse glow
        meteorite.material.opacity = 0.4 + Math.sin(age * 3) * 0.3;
      }
    }
  }
  
  /**
   * Force start an event (for testing/scripting)
   */
  forceEvent(eventId) {
    if (this.activeEvent) {
      this.endEvent();
    }
    this.startEvent(eventId);
  }
  
  /**
   * Save state
   */
  save() {
    const data = {
      cooldowns: Object.fromEntries(this.eventCooldowns),
      activeEvent: this.activeEvent?.id || null,
      eventStartTime: this.eventStartTime
    };
    localStorage.setItem('ashen-rare-events', JSON.stringify(data));
  }
  
  /**
   * Load state
   */
  load() {
    try {
      const data = localStorage.getItem('ashen-rare-events');
      if (data) {
        const parsed = JSON.parse(data);
        
        // Restore cooldowns
        if (parsed.cooldowns) {
          for (const [id, time] of Object.entries(parsed.cooldowns)) {
            this.eventCooldowns.set(id, time);
          }
        }
        
        // Check if event was active and should continue
        if (parsed.activeEvent && parsed.eventStartTime) {
          const event = RARE_EVENTS[parsed.activeEvent];
          if (event) {
            const elapsed = Date.now() - parsed.eventStartTime;
            const duration = event.duration * 60 * 1000;
            
            if (elapsed < duration) {
              // Resume event
              this.activeEvent = event;
              this.eventStartTime = parsed.eventStartTime;
              this.eventDuration = duration;
              this.applyEventVisuals(parsed.activeEvent);
              console.log(`[RareEventManager] Resumed event: ${event.name}`);
            }
          }
        }
      }
    } catch (e) {
      console.warn('[RareEventManager] Failed to load state:', e);
    }
  }
  
  /**
   * Get debug info
   */
  getDebugInfo() {
    return {
      activeEvent: this.activeEvent?.name || 'None',
      timeRemaining: this.activeEvent 
        ? Math.ceil((this.eventDuration - (Date.now() - this.eventStartTime)) / 1000) + 's'
        : 'N/A',
      meteorites: this.meteorites.filter(m => !m.userData.collected).length,
      cooldowns: Object.fromEntries(
        [...this.eventCooldowns.entries()].map(([id, time]) => [
          id,
          Math.max(0, Math.ceil((this.eventCooldownDuration - (Date.now() - time)) / 60000)) + 'm'
        ])
      )
    };
  }
}

// Singleton
let rareEventManagerInstance = null;

export function createRareEventManager(scene) {
  if (!rareEventManagerInstance) {
    rareEventManagerInstance = new RareEventManager(scene);
  }
  return rareEventManagerInstance;
}

export function getRareEventManager() {
  return rareEventManagerInstance;
}

export default RareEventManager;
