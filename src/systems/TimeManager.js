/**
 * TimeManager.js - Game Time & Day/Night Cycle System (Phase 24)
 * 
 * Handles game time progression, day phases, sun/moon positioning,
 * and provides events for systems that need to react to time changes.
 * 
 * Time Scale: 1 real minute = 1 game hour (24 real minutes = 1 game day)
 */

import * as THREE from 'three';

// Day phase definitions
export const DAY_PHASES = {
  NIGHT: 'night',      // 20:00 - 05:00
  DAWN: 'dawn',        // 05:00 - 07:00
  DAY: 'day',          // 07:00 - 18:00
  DUSK: 'dusk'         // 18:00 - 20:00
};

// Phase thresholds (hours)
const PHASE_TIMES = {
  DAWN_START: 5,
  DAY_START: 7,
  DUSK_START: 18,
  NIGHT_START: 20
};

export class TimeManager {
  constructor(scene) {
    this.scene = scene;
    
    // Time state
    this.currentHour = 10;        // Start at 10 AM (nice daytime start)
    this.currentMinute = 0;       // Game minutes (0-59)
    this.currentDay = 1;          // Day counter
    this.dayPhase = DAY_PHASES.DAY;
    
    // Moon phase (0-7, where 0 = new moon, 4 = full moon)
    this.moonPhase = 4;           // Start at full moon for visibility
    this.moonCycleLength = 8;     // 8 game days per lunar cycle
    
    // Time scale: 1 real second = 1 game minute
    // So 1 real minute = 60 game minutes = 1 game hour
    // 24 real minutes = 24 game hours = 1 game day
    this.timeScale = 1.0;         // Game minutes per real second
    this.accumulator = 0;         // Accumulates real time
    
    // Pause state
    this.isPaused = false;
    
    // Event callbacks
    this.onHourChange = null;     // (hour) => {}
    this.onPhaseChange = null;    // (newPhase, oldPhase) => {}
    this.onDayChange = null;      // (day) => {}
    this.onMinuteChange = null;   // (minute) => {}
    
    // Sun/Moon objects (created externally, positioned here)
    this.sunLight = null;
    this.sunMesh = null;
    this.moonLight = null;
    this.moonMesh = null;
    
    // Celestial positioning
    this.sunDistance = 80;        // Distance from origin for sun
    this.moonDistance = 70;       // Distance from origin for moon
    this.celestialTilt = 0.15;    // Tilt angle for realistic arc
    
    // UI element
    this.clockElement = null;
    this.createClockUI();
    
    // Load saved time
    this.load();
  }
  
  /**
   * Create the clock UI element
   */
  createClockUI() {
    // Check if clock already exists
    if (document.getElementById('time-clock')) {
      this.clockElement = document.getElementById('time-clock');
      return;
    }
    
    // Create clock container
    const clock = document.createElement('div');
    clock.id = 'time-clock';
    clock.innerHTML = `
      <div class="clock-face">
        <span class="clock-time">10:00</span>
        <span class="clock-phase">☀️</span>
      </div>
      <div class="clock-day">Day 1</div>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      #time-clock {
        position: fixed;
        top: 10px;
        right: 10px;
        background: linear-gradient(135deg, rgba(20, 15, 10, 0.9), rgba(40, 30, 20, 0.85));
        border: 2px solid rgba(180, 140, 80, 0.6);
        border-radius: 8px;
        padding: 8px 14px;
        font-family: 'Cinzel', 'Times New Roman', serif;
        color: #e8d5b0;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        z-index: 100;
        user-select: none;
        min-width: 85px;
        text-align: center;
        transition: opacity 0.3s, transform 0.3s;
      }
      
      #time-clock:hover {
        transform: scale(1.05);
        border-color: rgba(200, 160, 100, 0.8);
      }
      
      #time-clock .clock-face {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        font-size: 18px;
        font-weight: bold;
      }
      
      #time-clock .clock-time {
        letter-spacing: 1px;
      }
      
      #time-clock .clock-phase {
        font-size: 16px;
        filter: drop-shadow(0 0 4px rgba(255, 200, 100, 0.5));
      }
      
      #time-clock .clock-day {
        font-size: 11px;
        color: rgba(200, 180, 140, 0.8);
        margin-top: 4px;
        letter-spacing: 0.5px;
      }
      
      /* Phase-specific styles */
      #time-clock.phase-night {
        background: linear-gradient(135deg, rgba(10, 10, 25, 0.95), rgba(20, 20, 45, 0.9));
        border-color: rgba(100, 120, 180, 0.6);
        color: #b0c4de;
      }
      
      #time-clock.phase-dawn {
        background: linear-gradient(135deg, rgba(60, 40, 30, 0.9), rgba(100, 60, 40, 0.85));
        border-color: rgba(220, 160, 100, 0.7);
        color: #ffd4a0;
      }
      
      #time-clock.phase-dusk {
        background: linear-gradient(135deg, rgba(50, 30, 50, 0.9), rgba(80, 40, 60, 0.85));
        border-color: rgba(180, 100, 140, 0.7);
        color: #ffb8d0;
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(clock);
    this.clockElement = clock;
    this.updateClockUI();
  }
  
  /**
   * Update the clock UI display
   */
  updateClockUI() {
    if (!this.clockElement) return;
    
    const timeStr = `${String(this.currentHour).padStart(2, '0')}:${String(this.currentMinute).padStart(2, '0')}`;
    const phaseEmoji = this.getPhaseEmoji();
    
    const timeEl = this.clockElement.querySelector('.clock-time');
    const phaseEl = this.clockElement.querySelector('.clock-phase');
    const dayEl = this.clockElement.querySelector('.clock-day');
    
    if (timeEl) timeEl.textContent = timeStr;
    if (phaseEl) phaseEl.textContent = phaseEmoji;
    if (dayEl) dayEl.textContent = `Day ${this.currentDay}`;
    
    // Update phase class
    this.clockElement.className = '';
    this.clockElement.id = 'time-clock';
    this.clockElement.classList.add(`phase-${this.dayPhase}`);
  }
  
  /**
   * Get emoji for current phase
   */
  getPhaseEmoji() {
    switch (this.dayPhase) {
      case DAY_PHASES.DAWN: return '🌅';
      case DAY_PHASES.DAY: return '☀️';
      case DAY_PHASES.DUSK: return '🌆';
      case DAY_PHASES.NIGHT: return this.getMoonEmoji();
      default: return '☀️';
    }
  }
  
  /**
   * Get moon emoji based on phase
   */
  getMoonEmoji() {
    const moonEmojis = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌖', '🌗', '🌘'];
    return moonEmojis[this.moonPhase % 8];
  }
  
  /**
   * Calculate day phase from hour
   */
  calculatePhase(hour) {
    if (hour >= PHASE_TIMES.NIGHT_START || hour < PHASE_TIMES.DAWN_START) {
      return DAY_PHASES.NIGHT;
    } else if (hour >= PHASE_TIMES.DAWN_START && hour < PHASE_TIMES.DAY_START) {
      return DAY_PHASES.DAWN;
    } else if (hour >= PHASE_TIMES.DAY_START && hour < PHASE_TIMES.DUSK_START) {
      return DAY_PHASES.DAY;
    } else {
      return DAY_PHASES.DUSK;
    }
  }
  
  /**
   * Get phase transition progress (0-1) within current phase
   */
  getPhaseProgress() {
    const hour = this.currentHour + this.currentMinute / 60;
    
    switch (this.dayPhase) {
      case DAY_PHASES.DAWN:
        return (hour - PHASE_TIMES.DAWN_START) / (PHASE_TIMES.DAY_START - PHASE_TIMES.DAWN_START);
      case DAY_PHASES.DAY:
        return (hour - PHASE_TIMES.DAY_START) / (PHASE_TIMES.DUSK_START - PHASE_TIMES.DAY_START);
      case DAY_PHASES.DUSK:
        return (hour - PHASE_TIMES.DUSK_START) / (PHASE_TIMES.NIGHT_START - PHASE_TIMES.DUSK_START);
      case DAY_PHASES.NIGHT:
        // Night wraps around midnight
        if (hour >= PHASE_TIMES.NIGHT_START) {
          return (hour - PHASE_TIMES.NIGHT_START) / ((24 - PHASE_TIMES.NIGHT_START) + PHASE_TIMES.DAWN_START);
        } else {
          return ((24 - PHASE_TIMES.NIGHT_START) + hour) / ((24 - PHASE_TIMES.NIGHT_START) + PHASE_TIMES.DAWN_START);
        }
      default:
        return 0;
    }
  }
  
  /**
   * Get sun angle in radians based on time (0 = midnight, π = noon)
   */
  getSunAngle() {
    const hour = this.currentHour + this.currentMinute / 60;
    // Sun rises at 6, peaks at 12, sets at 18
    // Map 6-18 to 0-π for above-horizon arc
    // Map 18-6 to π-2π for below-horizon
    if (hour >= 6 && hour <= 18) {
      return ((hour - 6) / 12) * Math.PI;
    } else if (hour > 18) {
      return Math.PI + ((hour - 18) / 12) * Math.PI;
    } else {
      return Math.PI + ((hour + 6) / 12) * Math.PI;
    }
  }
  
  /**
   * Get moon angle in radians (opposite to sun, offset by moon phase)
   */
  getMoonAngle() {
    const sunAngle = this.getSunAngle();
    // Moon is roughly opposite the sun, with phase offset
    const phaseOffset = (this.moonPhase / this.moonCycleLength) * Math.PI * 0.5;
    return sunAngle + Math.PI + phaseOffset;
  }
  
  /**
   * Calculate sun position in 3D space
   */
  getSunPosition() {
    const angle = this.getSunAngle();
    const x = Math.cos(angle) * this.sunDistance;
    const y = Math.sin(angle) * this.sunDistance;
    // Add east-west movement (rises east, sets west)
    const hourAngle = (this.currentHour / 24) * Math.PI * 2;
    const z = Math.sin(hourAngle) * this.sunDistance * this.celestialTilt;
    
    return new THREE.Vector3(x, Math.max(y, -20), z);
  }
  
  /**
   * Calculate moon position in 3D space
   */
  getMoonPosition() {
    const angle = this.getMoonAngle();
    const x = Math.cos(angle) * this.moonDistance;
    const y = Math.sin(angle) * this.moonDistance;
    // Opposite east-west movement
    const hourAngle = (this.currentHour / 24) * Math.PI * 2;
    const z = -Math.sin(hourAngle) * this.moonDistance * this.celestialTilt;
    
    return new THREE.Vector3(x, Math.max(y, -15), z);
  }
  
  /**
   * Get normalized time of day (0-1, where 0 = midnight, 0.5 = noon)
   */
  getNormalizedTime() {
    return (this.currentHour + this.currentMinute / 60) / 24;
  }
  
  /**
   * Check if it's currently daytime (sun above horizon)
   */
  isDaytime() {
    return this.dayPhase === DAY_PHASES.DAY || this.dayPhase === DAY_PHASES.DAWN || this.dayPhase === DAY_PHASES.DUSK;
  }
  
  /**
   * Check if it's currently nighttime
   */
  isNighttime() {
    return this.dayPhase === DAY_PHASES.NIGHT;
  }
  
  /**
   * Get moon brightness (0-1) based on phase
   */
  getMoonBrightness() {
    // Full moon (phase 4) = 1.0, new moon (phase 0) = 0.1
    const fullMoonPhase = this.moonCycleLength / 2;
    const distance = Math.abs(this.moonPhase - fullMoonPhase);
    return 0.1 + (1 - distance / fullMoonPhase) * 0.9;
  }
  
  /**
   * Set the sun light reference for positioning
   */
  setSunLight(light, mesh = null) {
    this.sunLight = light;
    this.sunMesh = mesh;
    this.updateCelestialPositions();
  }
  
  /**
   * Set the moon light reference for positioning
   */
  setMoonLight(light, mesh = null) {
    this.moonLight = light;
    this.moonMesh = mesh;
    this.updateCelestialPositions();
  }
  
  /**
   * Update sun and moon positions based on current time
   */
  updateCelestialPositions() {
    const sunPos = this.getSunPosition();
    const moonPos = this.getMoonPosition();
    
    if (this.sunLight) {
      this.sunLight.position.copy(sunPos);
      this.sunLight.target.position.set(0, 0, 0);
      if (this.sunLight.target.updateMatrixWorld) {
        this.sunLight.target.updateMatrixWorld();
      }
    }
    
    if (this.sunMesh) {
      this.sunMesh.position.copy(sunPos);
      // Sun visibility based on position
      this.sunMesh.visible = sunPos.y > -10;
    }
    
    if (this.moonLight) {
      this.moonLight.position.copy(moonPos);
      this.moonLight.target.position.set(0, 0, 0);
      if (this.moonLight.target.updateMatrixWorld) {
        this.moonLight.target.updateMatrixWorld();
      }
    }
    
    if (this.moonMesh) {
      this.moonMesh.position.copy(moonPos);
      // Moon visibility based on position
      this.moonMesh.visible = moonPos.y > -10;
    }
  }
  
  /**
   * Pause time progression
   */
  pause() {
    this.isPaused = true;
  }
  
  /**
   * Resume time progression
   */
  resume() {
    this.isPaused = false;
  }
  
  /**
   * Set time immediately
   */
  setTime(hour, minute = 0) {
    const oldPhase = this.dayPhase;
    const oldHour = this.currentHour;
    
    this.currentHour = Math.floor(hour) % 24;
    this.currentMinute = Math.floor(minute) % 60;
    this.dayPhase = this.calculatePhase(this.currentHour);
    
    // Fire events
    if (this.currentHour !== oldHour && this.onHourChange) {
      this.onHourChange(this.currentHour);
    }
    
    if (this.dayPhase !== oldPhase && this.onPhaseChange) {
      this.onPhaseChange(this.dayPhase, oldPhase);
    }
    
    this.updateCelestialPositions();
    this.updateClockUI();
  }
  
  /**
   * Skip to next phase
   */
  skipToNextPhase() {
    switch (this.dayPhase) {
      case DAY_PHASES.NIGHT:
        this.setTime(PHASE_TIMES.DAWN_START);
        break;
      case DAY_PHASES.DAWN:
        this.setTime(PHASE_TIMES.DAY_START);
        break;
      case DAY_PHASES.DAY:
        this.setTime(PHASE_TIMES.DUSK_START);
        break;
      case DAY_PHASES.DUSK:
        this.setTime(PHASE_TIMES.NIGHT_START);
        break;
    }
  }
  
  /**
   * Set time scale multiplier
   */
  setTimeScale(scale) {
    this.timeScale = Math.max(0, scale);
  }
  
  /**
   * Update time system (call each frame)
   */
  update(delta) {
    if (this.isPaused || this.timeScale <= 0) return;
    
    // Accumulate real time
    this.accumulator += delta * this.timeScale;
    
    // Each real second = 1 game minute (at timeScale 1.0)
    while (this.accumulator >= 1) {
      this.accumulator -= 1;
      this.advanceMinute();
    }
    
    // Update celestial positions smoothly
    this.updateCelestialPositions();
  }
  
  /**
   * Advance game time by 1 minute
   */
  advanceMinute() {
    const oldMinute = this.currentMinute;
    const oldHour = this.currentHour;
    const oldPhase = this.dayPhase;
    
    this.currentMinute++;
    
    if (this.currentMinute >= 60) {
      this.currentMinute = 0;
      this.currentHour++;
      
      if (this.currentHour >= 24) {
        this.currentHour = 0;
        this.advanceDay();
      }
      
      // Hour changed
      if (this.onHourChange) {
        this.onHourChange(this.currentHour);
      }
      
      // Check phase change
      const newPhase = this.calculatePhase(this.currentHour);
      if (newPhase !== this.dayPhase) {
        this.dayPhase = newPhase;
        if (this.onPhaseChange) {
          this.onPhaseChange(this.dayPhase, oldPhase);
        }
      }
    }
    
    // Minute changed callback (for fine-grained systems)
    if (this.onMinuteChange) {
      this.onMinuteChange(this.currentMinute);
    }
    
    this.updateClockUI();
  }
  
  /**
   * Advance to next day
   */
  advanceDay() {
    this.currentDay++;
    
    // Advance moon phase
    this.moonPhase = (this.moonPhase + 1) % this.moonCycleLength;
    
    if (this.onDayChange) {
      this.onDayChange(this.currentDay);
    }
  }
  
  /**
   * Save time state to localStorage
   */
  save() {
    const saveData = {
      hour: this.currentHour,
      minute: this.currentMinute,
      day: this.currentDay,
      moonPhase: this.moonPhase
    };
    localStorage.setItem('ashen-time', JSON.stringify(saveData));
  }
  
  /**
   * Load time state from localStorage
   */
  load() {
    try {
      const data = localStorage.getItem('ashen-time');
      if (data) {
        const saveData = JSON.parse(data);
        this.currentHour = saveData.hour ?? 10;
        this.currentMinute = saveData.minute ?? 0;
        this.currentDay = saveData.day ?? 1;
        this.moonPhase = saveData.moonPhase ?? 4;
        this.dayPhase = this.calculatePhase(this.currentHour);
        this.updateClockUI();
        console.log(`[TimeManager] Loaded time: Day ${this.currentDay}, ${this.currentHour}:${String(this.currentMinute).padStart(2, '0')}`);
      }
    } catch (e) {
      console.warn('[TimeManager] Failed to load saved time:', e);
    }
  }
  
  /**
   * Get debug info
   */
  getDebugInfo() {
    return {
      time: `${String(this.currentHour).padStart(2, '0')}:${String(this.currentMinute).padStart(2, '0')}`,
      day: this.currentDay,
      phase: this.dayPhase,
      moonPhase: this.moonPhase,
      sunAngle: (this.getSunAngle() * 180 / Math.PI).toFixed(1) + '°',
      moonBrightness: this.getMoonBrightness().toFixed(2)
    };
  }
}

// Singleton instance
let timeManagerInstance = null;

export function createTimeManager(scene) {
  if (!timeManagerInstance) {
    timeManagerInstance = new TimeManager(scene);
  }
  return timeManagerInstance;
}

export function getTimeManager() {
  return timeManagerInstance;
}

export default TimeManager;
