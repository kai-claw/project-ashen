/**
 * DayNightLighting.js - Dynamic Lighting & Sky System (Phase 24)
 * 
 * Manages ambient/directional lighting, sky colors, fog, stars,
 * sun/moon visuals based on TimeManager state.
 * 
 * Provides smooth transitions between day phases with lerped colors.
 */

import * as THREE from 'three';
import { DAY_PHASES, getTimeManager } from './TimeManager.js';

// Color palettes for each phase
const PHASE_COLORS = {
  [DAY_PHASES.NIGHT]: {
    ambient: new THREE.Color(0x0a0a1a),        // Very dark blue
    sun: new THREE.Color(0x000000),             // No sun light
    moon: new THREE.Color(0x4466aa),            // Blue-white moonlight
    sky: new THREE.Color(0x050510),             // Near black with blue tint
    fog: new THREE.Color(0x080818),             // Dark blue fog
    fogDensity: 0.025,
    ambientIntensity: 0.15,
    sunIntensity: 0,
    moonIntensity: 0.3
  },
  [DAY_PHASES.DAWN]: {
    ambient: new THREE.Color(0x886644),         // Warm amber (was 0x4a3525 too dark)
    sun: new THREE.Color(0xff8844),             // Orange sunrise
    moon: new THREE.Color(0x2244aa),            // Fading moon
    sky: new THREE.Color(0xff9966),             // Orange-pink sky
    fog: new THREE.Color(0xaa7744),             // Warm amber fog (was 0xaa6644)
    fogDensity: 0.012,
    ambientIntensity: 0.4,
    sunIntensity: 0.8,                          // Bumped from 0.6 for better dawn visibility
    moonIntensity: 0.1
  },
  [DAY_PHASES.DAY]: {
    ambient: new THREE.Color(0xfff8e8),         // Warm neutral (was 0x8899aa blue-gray → tinted green terrain teal)
    sun: new THREE.Color(0xfff4dd),             // Warm white sun (slight warmth preserves green)
    moon: new THREE.Color(0x000000),            // No moon
    sky: new THREE.Color(0x87ceeb),             // Sky blue
    fog: new THREE.Color(0xc8d8c0),             // Warm green-gray fog (was 0xaabbcc blue → teal bleed)
    fogDensity: 0.003,
    ambientIntensity: 0.5,                      // Reduced from 0.6 — less ambient = less color tint
    sunIntensity: 1.4,                          // Bumped from 1.2 — sun is white, drives true color
    moonIntensity: 0
  },
  [DAY_PHASES.DUSK]: {
    ambient: new THREE.Color(0x553344),         // Purple-red
    sun: new THREE.Color(0xff4422),             // Deep red sunset
    moon: new THREE.Color(0x3355aa),            // Rising moon
    sky: new THREE.Color(0xcc5588),             // Pink-purple sky
    fog: new THREE.Color(0x664455),             // Purple fog
    fogDensity: 0.018,
    ambientIntensity: 0.35,
    sunIntensity: 0.4,
    moonIntensity: 0.15
  }
};

// Transition times in seconds
const TRANSITION_DURATION = 30;

export class DayNightLighting {
  constructor(scene, renderer) {
    this.scene = scene;
    this.renderer = renderer;
    this.timeManager = null;
    
    // Current interpolated values
    this.currentAmbientColor = new THREE.Color(0x8899aa);
    this.currentSunColor = new THREE.Color(0xffffff);
    this.currentMoonColor = new THREE.Color(0x4466aa);
    this.currentSkyColor = new THREE.Color(0x87ceeb);
    this.currentFogColor = new THREE.Color(0xaabbcc);
    this.currentFogDensity = 0.008;
    this.currentAmbientIntensity = 0.6;
    this.currentSunIntensity = 1.2;
    this.currentMoonIntensity = 0;
    
    // Target values (for smooth transitions)
    this.targetAmbientColor = new THREE.Color();
    this.targetSunColor = new THREE.Color();
    this.targetMoonColor = new THREE.Color();
    this.targetSkyColor = new THREE.Color();
    this.targetFogColor = new THREE.Color();
    this.targetFogDensity = 0.008;
    this.targetAmbientIntensity = 0.6;
    this.targetSunIntensity = 1.2;
    this.targetMoonIntensity = 0;
    
    // Transition state
    this.transitionProgress = 1; // 1 = complete
    this.transitionSpeed = 1 / TRANSITION_DURATION;
    
    // Lights
    this.ambientLight = null;
    this.sunLight = null;
    this.moonLight = null;
    
    // Celestial meshes
    this.sunMesh = null;
    this.moonMesh = null;
    this.starField = null;
    
    // Indoor zone tracking
    this.indoorZones = [];
    this.isIndoors = false;
    
    // Torch references for night-time enhancement
    this.torches = [];
    
    // Initialize
    this.createLights();
    this.createCelestialBodies();
    this.createStarField();
    
    // Apply initial state
    this.setPhaseImmediate(DAY_PHASES.DAY);
  }
  
  /**
   * Create the main lights
   */
  createLights() {
    // Ambient light (fills all shadows)
    this.ambientLight = new THREE.AmbientLight(0xcccccc, 0.5);  // Neutral white ambient (was blue 0x8899aa, washed terrain green→cyan)
    this.scene.add(this.ambientLight);
    
    // Sun directional light
    this.sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
    this.sunLight.position.set(50, 80, 30);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.width = 2048;
    this.sunLight.shadow.mapSize.height = 2048;
    this.sunLight.shadow.camera.near = 0.5;
    this.sunLight.shadow.camera.far = 200;
    this.sunLight.shadow.camera.left = -60;
    this.sunLight.shadow.camera.right = 60;
    this.sunLight.shadow.camera.top = 60;
    this.sunLight.shadow.camera.bottom = -60;
    this.sunLight.shadow.bias = -0.0005;
    this.sunLight.target.position.set(0, 0, 0);
    this.scene.add(this.sunLight);
    this.scene.add(this.sunLight.target);
    
    // Moon directional light (dimmer, blue-tinted)
    this.moonLight = new THREE.DirectionalLight(0x4466aa, 0);
    this.moonLight.position.set(-50, 60, -30);
    this.moonLight.castShadow = true;
    this.moonLight.shadow.mapSize.width = 1024;
    this.moonLight.shadow.mapSize.height = 1024;
    this.moonLight.shadow.camera.near = 0.5;
    this.moonLight.shadow.camera.far = 150;
    this.moonLight.shadow.camera.left = -40;
    this.moonLight.shadow.camera.right = 40;
    this.moonLight.shadow.camera.top = 40;
    this.moonLight.shadow.camera.bottom = -40;
    this.moonLight.target.position.set(0, 0, 0);
    this.scene.add(this.moonLight);
    this.scene.add(this.moonLight.target);
  }
  
  /**
   * Create sun and moon visual meshes
   */
  createCelestialBodies() {
    // Sun mesh - glowing sphere
    const sunGeom = new THREE.SphereGeometry(4, 16, 16);
    const sunMat = new THREE.MeshBasicMaterial({
      color: 0xffdd88,
      transparent: true,
      opacity: 0.9
    });
    this.sunMesh = new THREE.Mesh(sunGeom, sunMat);
    this.sunMesh.position.set(50, 80, 30);
    this.scene.add(this.sunMesh);
    
    // Sun glow (larger, more transparent)
    const sunGlowGeom = new THREE.SphereGeometry(8, 16, 16);
    const sunGlowMat = new THREE.MeshBasicMaterial({
      color: 0xffaa44,
      transparent: true,
      opacity: 0.3,
      side: THREE.BackSide
    });
    this.sunGlow = new THREE.Mesh(sunGlowGeom, sunGlowMat);
    this.sunMesh.add(this.sunGlow);
    
    // Moon mesh
    const moonGeom = new THREE.SphereGeometry(2.5, 16, 16);
    const moonMat = new THREE.MeshBasicMaterial({
      color: 0xeeeeff,
      transparent: true,
      opacity: 0.95
    });
    this.moonMesh = new THREE.Mesh(moonGeom, moonMat);
    this.moonMesh.position.set(-50, 60, -30);
    this.moonMesh.visible = false;
    this.scene.add(this.moonMesh);
    
    // Moon glow
    const moonGlowGeom = new THREE.SphereGeometry(4, 16, 16);
    const moonGlowMat = new THREE.MeshBasicMaterial({
      color: 0x8899cc,
      transparent: true,
      opacity: 0.2,
      side: THREE.BackSide
    });
    this.moonGlow = new THREE.Mesh(moonGlowGeom, moonGlowMat);
    this.moonMesh.add(this.moonGlow);
  }
  
  /**
   * Create star field for night sky
   */
  createStarField() {
    const starCount = 2000;
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);
    const sizes = new Float32Array(starCount);
    
    for (let i = 0; i < starCount; i++) {
      // Distribute stars on a dome
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI * 0.5; // Only upper hemisphere
      const radius = 150 + Math.random() * 50;
      
      positions[i * 3] = Math.sin(phi) * Math.cos(theta) * radius;
      positions[i * 3 + 1] = Math.cos(phi) * radius + 20; // Offset up
      positions[i * 3 + 2] = Math.sin(phi) * Math.sin(theta) * radius;
      
      // Slightly varied star colors (white to blue-white)
      const colorVariant = 0.9 + Math.random() * 0.1;
      colors[i * 3] = colorVariant;
      colors[i * 3 + 1] = colorVariant;
      colors[i * 3 + 2] = 1;
      
      // Random star sizes
      sizes[i] = 0.5 + Math.random() * 1.5;
    }
    
    const starGeom = new THREE.BufferGeometry();
    starGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeom.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    starGeom.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    
    // Star material with point sprites
    const starMat = new THREE.PointsMaterial({
      size: 1,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      sizeAttenuation: false,
      blending: THREE.AdditiveBlending
    });
    
    this.starField = new THREE.Points(starGeom, starMat);
    this.starField.visible = false;
    this.scene.add(this.starField);
  }
  
  /**
   * Initialize with TimeManager
   */
  initialize(timeManager) {
    this.timeManager = timeManager;
    
    // Register for time events
    timeManager.onPhaseChange = (newPhase, oldPhase) => {
      this.startPhaseTransition(newPhase);
    };
    
    // Set up sun/moon position updates
    timeManager.setSunLight(this.sunLight, this.sunMesh);
    timeManager.setMoonLight(this.moonLight, this.moonMesh);
    
    // Apply current phase immediately
    this.setPhaseImmediate(timeManager.dayPhase);
  }
  
  /**
   * Set phase colors immediately (no transition)
   */
  setPhaseImmediate(phase) {
    const colors = PHASE_COLORS[phase] || PHASE_COLORS[DAY_PHASES.DAY];
    
    this.currentAmbientColor.copy(colors.ambient);
    this.currentSunColor.copy(colors.sun);
    this.currentMoonColor.copy(colors.moon);
    this.currentSkyColor.copy(colors.sky);
    this.currentFogColor.copy(colors.fog);
    this.currentFogDensity = colors.fogDensity;
    this.currentAmbientIntensity = colors.ambientIntensity;
    this.currentSunIntensity = colors.sunIntensity;
    this.currentMoonIntensity = colors.moonIntensity;
    
    // Copy to targets (no transition needed)
    this.targetAmbientColor.copy(colors.ambient);
    this.targetSunColor.copy(colors.sun);
    this.targetMoonColor.copy(colors.moon);
    this.targetSkyColor.copy(colors.sky);
    this.targetFogColor.copy(colors.fog);
    this.targetFogDensity = colors.fogDensity;
    this.targetAmbientIntensity = colors.ambientIntensity;
    this.targetSunIntensity = colors.sunIntensity;
    this.targetMoonIntensity = colors.moonIntensity;
    
    this.transitionProgress = 1;
    this.applyCurrentColors();
  }
  
  /**
   * Start smooth transition to new phase
   */
  startPhaseTransition(newPhase) {
    const colors = PHASE_COLORS[newPhase] || PHASE_COLORS[DAY_PHASES.DAY];
    
    // Set target colors
    this.targetAmbientColor.copy(colors.ambient);
    this.targetSunColor.copy(colors.sun);
    this.targetMoonColor.copy(colors.moon);
    this.targetSkyColor.copy(colors.sky);
    this.targetFogColor.copy(colors.fog);
    this.targetFogDensity = colors.fogDensity;
    this.targetAmbientIntensity = colors.ambientIntensity;
    this.targetSunIntensity = colors.sunIntensity;
    this.targetMoonIntensity = colors.moonIntensity;
    
    // Start transition
    this.transitionProgress = 0;
    
    console.log(`[DayNightLighting] Transitioning to ${newPhase}`);
  }
  
  /**
   * Apply current interpolated colors to lights/scene
   */
  applyCurrentColors() {
    // Don't apply if indoors
    if (this.isIndoors) return;
    
    // Ambient light
    if (this.ambientLight) {
      this.ambientLight.color.copy(this.currentAmbientColor);
      this.ambientLight.intensity = this.currentAmbientIntensity;
    }
    
    // Sun light
    if (this.sunLight) {
      this.sunLight.color.copy(this.currentSunColor);
      this.sunLight.intensity = this.currentSunIntensity;
    }
    
    // Moon light
    if (this.moonLight) {
      this.moonLight.color.copy(this.currentMoonColor);
      // Apply moon brightness from TimeManager
      let moonIntensity = this.currentMoonIntensity;
      if (this.timeManager) {
        moonIntensity *= this.timeManager.getMoonBrightness();
      }
      this.moonLight.intensity = moonIntensity;
    }
    
    // Sky background
    if (this.scene.background && this.scene.background.isColor) {
      this.scene.background.copy(this.currentSkyColor);
    } else {
      this.scene.background = this.currentSkyColor.clone();
    }
    
    // Fog — re-enabled with warm colors (was disabled when blue fog washed terrain teal)
    if (!this.scene.fog) {
      this.scene.fog = new THREE.FogExp2(this.currentFogColor, this.currentFogDensity);
    } else {
      this.scene.fog.color.copy(this.currentFogColor);
      this.scene.fog.density = this.currentFogDensity;
    }
    
    // Sun mesh color
    if (this.sunMesh) {
      const sunVisible = this.currentSunIntensity > 0.1;
      this.sunMesh.visible = sunVisible;
      if (sunVisible) {
        this.sunMesh.material.color.copy(this.currentSunColor);
        this.sunMesh.material.opacity = Math.min(1, this.currentSunIntensity);
      }
    }
    
    // Moon mesh visibility
    if (this.moonMesh) {
      const moonVisible = this.currentMoonIntensity > 0.05;
      this.moonMesh.visible = moonVisible;
    }
    
    // Star field visibility (only at night)
    if (this.starField) {
      const isNight = this.timeManager && this.timeManager.isNighttime();
      const isDusk = this.timeManager && this.timeManager.dayPhase === DAY_PHASES.DUSK;
      
      this.starField.visible = isNight || isDusk;
      
      if (this.starField.visible) {
        // Fade stars in during dusk, full at night
        let starOpacity = 0;
        if (isNight) {
          starOpacity = 0.8;
        } else if (isDusk) {
          starOpacity = this.timeManager.getPhaseProgress() * 0.5;
        }
        this.starField.material.opacity = starOpacity;
      }
    }
    
    // Update torch visibility
    this.updateTorches();
  }
  
  /**
   * Update torch emissive intensity based on time
   */
  updateTorches() {
    const isNight = this.timeManager && this.timeManager.isNighttime();
    const isDusk = this.timeManager && this.timeManager.dayPhase === DAY_PHASES.DUSK;
    
    // Base torch intensity (always visible, but brighter at night)
    let torchIntensity = 0.3; // Day
    if (isDusk) {
      torchIntensity = 0.5 + this.timeManager.getPhaseProgress() * 0.5;
    } else if (isNight) {
      torchIntensity = 1.0;
    }
    
    // Apply to registered torches
    for (const torch of this.torches) {
      if (torch.light) {
        torch.light.intensity = torch.baseIntensity * torchIntensity;
      }
      if (torch.mesh && torch.mesh.material) {
        const emissive = torch.mesh.material.emissive;
        if (emissive) {
          emissive.setRGB(
            torch.baseEmissive.r * torchIntensity,
            torch.baseEmissive.g * torchIntensity,
            torch.baseEmissive.b * torchIntensity
          );
        }
      }
    }
  }
  
  /**
   * Register a torch for night-time enhancement
   */
  registerTorch(mesh, light = null, baseIntensity = 1, baseEmissive = new THREE.Color(1, 0.5, 0.1)) {
    this.torches.push({
      mesh,
      light,
      baseIntensity,
      baseEmissive: baseEmissive.clone()
    });
  }
  
  /**
   * Add an indoor zone (areas unaffected by day/night)
   */
  addIndoorZone(bounds) {
    this.indoorZones.push(bounds);
  }
  
  /**
   * Check if a position is indoors
   */
  checkIndoors(position) {
    for (const zone of this.indoorZones) {
      if (position.x >= zone.minX && position.x <= zone.maxX &&
          position.z >= zone.minZ && position.z <= zone.maxZ) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Update indoor state based on player position
   */
  updateIndoorState(playerPosition) {
    const wasIndoors = this.isIndoors;
    this.isIndoors = this.checkIndoors(playerPosition);
    
    if (wasIndoors !== this.isIndoors) {
      if (this.isIndoors) {
        // Apply indoor lighting (constant, warm)
        this.applyIndoorLighting();
      } else {
        // Re-apply outdoor lighting
        this.applyCurrentColors();
      }
    }
  }
  
  /**
   * Apply constant indoor lighting
   */
  applyIndoorLighting() {
    if (this.ambientLight) {
      this.ambientLight.color.set(0x886655);
      this.ambientLight.intensity = 0.5;
    }
    
    if (this.sunLight) {
      this.sunLight.intensity = 0.2; // Minimal outside light
    }
    
    if (this.moonLight) {
      this.moonLight.intensity = 0;
    }
    
    // Hide celestial objects
    if (this.sunMesh) this.sunMesh.visible = false;
    if (this.moonMesh) this.moonMesh.visible = false;
    if (this.starField) this.starField.visible = false;
    
    // Indoor fog (less dense)
    if (this.scene.fog) {
      // Fog disabled for terrain visibility fix
      // this.scene.fog.color.set(0x222222);
      // this.scene.fog.density = 0.005;
    }
  }
  
  /**
   * Get current light intensity (for other systems)
   */
  getLightIntensity() {
    if (this.isIndoors) return 0.5;
    return this.currentAmbientIntensity + this.currentSunIntensity * 0.5;
  }
  
  /**
   * Get whether it's dark enough for special effects
   */
  isDark() {
    return this.getLightIntensity() < 0.4;
  }
  
  /**
   * Update lighting system (call each frame)
   */
  update(delta, playerPosition = null) {
    // Update indoor state
    if (playerPosition) {
      this.updateIndoorState(playerPosition);
    }
    
    // Handle phase transitions
    if (this.transitionProgress < 1) {
      this.transitionProgress += this.transitionSpeed * delta;
      this.transitionProgress = Math.min(1, this.transitionProgress);
      
      // Lerp all colors
      const t = this.transitionProgress;
      this.currentAmbientColor.lerpColors(this.currentAmbientColor, this.targetAmbientColor, t * 0.1);
      this.currentSunColor.lerpColors(this.currentSunColor, this.targetSunColor, t * 0.1);
      this.currentMoonColor.lerpColors(this.currentMoonColor, this.targetMoonColor, t * 0.1);
      this.currentSkyColor.lerpColors(this.currentSkyColor, this.targetSkyColor, t * 0.1);
      this.currentFogColor.lerpColors(this.currentFogColor, this.targetFogColor, t * 0.1);
      
      // Lerp numeric values
      this.currentFogDensity += (this.targetFogDensity - this.currentFogDensity) * t * 0.1;
      this.currentAmbientIntensity += (this.targetAmbientIntensity - this.currentAmbientIntensity) * t * 0.1;
      this.currentSunIntensity += (this.targetSunIntensity - this.currentSunIntensity) * t * 0.1;
      this.currentMoonIntensity += (this.targetMoonIntensity - this.currentMoonIntensity) * t * 0.1;
      
      // Apply the interpolated values
      if (!this.isIndoors) {
        this.applyCurrentColors();
      }
    }
    
    // Subtle star twinkle animation
    if (this.starField && this.starField.visible) {
      const time = performance.now() * 0.001;
      const sizes = this.starField.geometry.attributes.size;
      for (let i = 0; i < sizes.count; i += 10) { // Only update some for performance
        const base = 0.5 + (i % 3) * 0.5;
        sizes.array[i] = base + Math.sin(time * 2 + i) * 0.3;
      }
      sizes.needsUpdate = true;
    }
  }
  
  /**
   * Force immediate dark (for caves/dungeons)
   */
  forceDark() {
    this.isIndoors = true;
    this.applyIndoorLighting();
    // Make it even darker
    if (this.ambientLight) {
      this.ambientLight.intensity = 0.15;
    }
  }
  
  /**
   * Return to normal lighting
   */
  forceNormal() {
    this.isIndoors = false;
    this.applyCurrentColors();
  }
  
  /**
   * Get debug info
   */
  getDebugInfo() {
    return {
      ambientIntensity: this.currentAmbientIntensity.toFixed(2),
      sunIntensity: this.currentSunIntensity.toFixed(2),
      moonIntensity: this.currentMoonIntensity.toFixed(2),
      fogDensity: this.currentFogDensity.toFixed(4),
      isIndoors: this.isIndoors,
      transitionProgress: this.transitionProgress.toFixed(2)
    };
  }
}

// Singleton instance
let lightingInstance = null;

export function createDayNightLighting(scene, renderer) {
  if (!lightingInstance) {
    lightingInstance = new DayNightLighting(scene, renderer);
  }
  return lightingInstance;
}

export function getDayNightLighting() {
  return lightingInstance;
}

export default DayNightLighting;
