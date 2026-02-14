/**
 * DungeonManager.js - World-to-Dungeon Transition System
 * Phase 22: Dungeon Instances
 * 
 * Handles detection of dungeon entrances, transition effects,
 * dungeon generation/loading, player teleportation, state tracking,
 * exit portals, and save/load persistence.
 */

import * as THREE from 'three';
import { DungeonGenerator } from '../world/DungeonGenerator.js';
import { dungeonRenderer } from '../world/DungeonRenderer.js';
import { getDungeonById, DUNGEONS, DUNGEON_MODIFIER } from '../data/DungeonData.js';

// ========== DUNGEON STATE ==========
const DUNGEON_STATE = {
  OVERWORLD: 'overworld',
  ENTERING: 'entering',
  LOADING: 'loading',
  IN_DUNGEON: 'in_dungeon',
  EXITING: 'exiting',
};

// ========== ENTRANCE DETECTION SETTINGS ==========
const ENTRANCE_SETTINGS = {
  promptDistance: 5,          // Distance to show "Enter" prompt
  triggerDistance: 2.5,       // Auto-enter if player walks this close
  interactCooldown: 0.5,      // Seconds between interact attempts
};

// ========== TRANSITION SETTINGS ==========
const TRANSITION = {
  fadeInDuration: 0.8,        // Seconds for fade to black
  loadingMinTime: 0.5,        // Minimum loading screen time
  fadeOutDuration: 0.6,       // Seconds for fade from black
};

/**
 * DungeonManager - Manages dungeon instance lifecycle
 */
export class DungeonManager {
  constructor(scene, world, player, gameManager, inputManager, audioManager = null) {
    this.scene = scene;
    this.world = world;
    this.player = player;
    this.gameManager = gameManager;
    this.inputManager = inputManager;
    this.audioManager = audioManager;
    
    // Core state
    this.state = DUNGEON_STATE.OVERWORLD;
    this.currentDungeon = null;       // Active dungeon instance
    this.currentDungeonId = null;     // ID of current dungeon type
    this.currentModifier = 'none';    // Current dungeon modifier
    
    // Dungeon generator
    this.generator = new DungeonGenerator();
    
    // Save overworld state when entering dungeon
    this.overworldState = null;
    
    // Nearby entrance tracking
    this.nearestEntrance = null;
    this.entranceDistance = Infinity;
    this.interactCooldown = 0;
    
    // Dungeon progress tracking
    this.dungeonProgress = new Map();  // dungeonId -> progress data
    
    // Exit portal
    this.exitPortal = null;
    this.exitPortalMesh = null;
    
    // Transition overlay
    this.transitionOverlay = null;
    this.transitionProgress = 0;
    this.transitionCallback = null;
    
    // UI elements
    this.promptElement = null;
    this.loadingElement = null;
    
    // Create UI
    this._createUI();
    
    // Load saved progress
    this._loadProgress();
    
    console.log('[DungeonManager] Initialized');
  }
  
  // ========================================
  // UI CREATION
  // ========================================
  
  /**
   * Create dungeon prompt and loading screen UI
   */
  _createUI() {
    // Create dungeon entrance prompt
    this.promptElement = document.createElement('div');
    this.promptElement.id = 'dungeon-prompt';
    this.promptElement.innerHTML = `
      <div class="dungeon-prompt-inner">
        <div class="dungeon-name">Forgotten Catacombs</div>
        <div class="dungeon-level">Recommended Lv. <span class="level-num">10</span></div>
        <div class="dungeon-modifier"></div>
        <div class="dungeon-action">[E] Enter Dungeon</div>
      </div>
    `;
    this.promptElement.style.cssText = `
      position: fixed;
      bottom: 180px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(180deg, rgba(20,15,25,0.95) 0%, rgba(10,8,15,0.98) 100%);
      border: 2px solid rgba(160, 120, 80, 0.7);
      border-radius: 8px;
      padding: 16px 24px;
      text-align: center;
      font-family: 'Times New Roman', serif;
      color: #e8dcc8;
      display: none;
      z-index: 100;
      box-shadow: 0 0 30px rgba(0,0,0,0.8), inset 0 0 20px rgba(160,120,80,0.1);
      min-width: 220px;
    `;
    document.body.appendChild(this.promptElement);
    
    // Style inner elements
    const style = document.createElement('style');
    style.textContent = `
      #dungeon-prompt .dungeon-name {
        font-size: 22px;
        font-weight: bold;
        color: #d4a055;
        text-shadow: 0 0 10px rgba(212,160,85,0.5);
        margin-bottom: 6px;
      }
      #dungeon-prompt .dungeon-level {
        font-size: 14px;
        color: #aaa;
        margin-bottom: 4px;
      }
      #dungeon-prompt .dungeon-level .level-num {
        color: #ff9944;
        font-weight: bold;
      }
      #dungeon-prompt .dungeon-modifier {
        font-size: 13px;
        color: #cc66ff;
        font-style: italic;
        margin-bottom: 8px;
      }
      #dungeon-prompt .dungeon-modifier.elite { color: #ff6644; }
      #dungeon-prompt .dungeon-modifier.cursed { color: #aa44ff; }
      #dungeon-prompt .dungeon-modifier.blessed { color: #44ff88; }
      #dungeon-prompt .dungeon-modifier.timed { color: #44aaff; }
      #dungeon-prompt .dungeon-action {
        font-size: 16px;
        color: #88cc88;
        margin-top: 10px;
      }
      #dungeon-prompt.in-progress .dungeon-action::after {
        content: ' (Resume)';
        color: #ffcc44;
      }
      
      #dungeon-loading {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease;
      }
      #dungeon-loading.active {
        opacity: 1;
        pointer-events: auto;
      }
      #dungeon-loading .loading-title {
        font-family: 'Times New Roman', serif;
        font-size: 36px;
        color: #d4a055;
        text-shadow: 0 0 20px rgba(212,160,85,0.6);
        margin-bottom: 20px;
      }
      #dungeon-loading .loading-subtitle {
        font-family: 'Times New Roman', serif;
        font-size: 18px;
        color: #888;
        font-style: italic;
        margin-bottom: 40px;
      }
      #dungeon-loading .loading-spinner {
        width: 60px;
        height: 60px;
        border: 4px solid rgba(160,120,80,0.3);
        border-top: 4px solid #d4a055;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      #dungeon-transition {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 999;
        opacity: 0;
        pointer-events: none;
        transition: none;
      }
      
      #dungeon-exit-prompt {
        position: fixed;
        bottom: 150px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(15,12,20,0.9);
        border: 2px solid rgba(100,180,255,0.6);
        border-radius: 6px;
        padding: 12px 20px;
        font-family: 'Times New Roman', serif;
        color: #88ccff;
        text-align: center;
        display: none;
        z-index: 100;
        box-shadow: 0 0 20px rgba(100,180,255,0.3);
      }
      #dungeon-exit-prompt .exit-title {
        font-size: 18px;
        margin-bottom: 4px;
      }
      #dungeon-exit-prompt .exit-action {
        font-size: 14px;
        color: #88cc88;
      }
    `;
    document.head.appendChild(style);
    
    // Create loading screen
    this.loadingElement = document.createElement('div');
    this.loadingElement.id = 'dungeon-loading';
    this.loadingElement.innerHTML = `
      <div class="loading-title">Entering Dungeon</div>
      <div class="loading-subtitle">Prepare yourself...</div>
      <div class="loading-spinner"></div>
    `;
    document.body.appendChild(this.loadingElement);
    
    // Create transition overlay (black screen)
    this.transitionOverlay = document.createElement('div');
    this.transitionOverlay.id = 'dungeon-transition';
    document.body.appendChild(this.transitionOverlay);
    
    // Create exit portal prompt
    this.exitPromptElement = document.createElement('div');
    this.exitPromptElement.id = 'dungeon-exit-prompt';
    this.exitPromptElement.innerHTML = `
      <div class="exit-title">Exit Portal</div>
      <div class="exit-action">[E] Return to Overworld</div>
    `;
    document.body.appendChild(this.exitPromptElement);
  }
  
  // ========================================
  // ENTRANCE DETECTION
  // ========================================
  
  /**
   * Check for nearby dungeon entrances and update prompt
   */
  _checkEntrances() {
    if (!this.world.caveManager) return;
    
    const playerPos = this.player.mesh.position;
    const caves = this.world.caveManager.caves;
    
    this.nearestEntrance = null;
    this.entranceDistance = Infinity;
    
    // Find nearest cave entrance
    for (const cave of caves) {
      const dx = playerPos.x - cave.x;
      const dz = playerPos.z - cave.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      if (dist < this.entranceDistance) {
        this.entranceDistance = dist;
        this.nearestEntrance = cave;
      }
    }
    
    // Update prompt visibility
    if (this.nearestEntrance && this.entranceDistance < ENTRANCE_SETTINGS.promptDistance) {
      this._showEntrancePrompt();
    } else {
      this._hideEntrancePrompt();
    }
  }
  
  /**
   * Show entrance prompt with dungeon details
   */
  _showEntrancePrompt() {
    if (!this.nearestEntrance) return;
    
    // Determine dungeon type based on cave location/properties
    const dungeonId = this._getDungeonIdForCave(this.nearestEntrance);
    const dungeon = getDungeonById(dungeonId);
    
    if (!dungeon) {
      this.promptElement.style.display = 'none';
      return;
    }
    
    // Check for in-progress
    const progress = this.dungeonProgress.get(dungeonId);
    const inProgress = progress && !progress.completed;
    
    // Update prompt content
    const nameEl = this.promptElement.querySelector('.dungeon-name');
    const levelEl = this.promptElement.querySelector('.level-num');
    const modifierEl = this.promptElement.querySelector('.dungeon-modifier');
    
    nameEl.textContent = dungeon.name;
    levelEl.textContent = dungeon.recommendedLevel;
    
    // Show modifier if applicable
    if (this.currentModifier !== 'none') {
      const mod = DUNGEON_MODIFIER[this.currentModifier.toUpperCase()];
      modifierEl.textContent = mod ? mod.name : '';
      modifierEl.className = `dungeon-modifier ${this.currentModifier}`;
    } else {
      modifierEl.textContent = '';
      modifierEl.className = 'dungeon-modifier';
    }
    
    // Show in-progress indicator
    if (inProgress) {
      this.promptElement.classList.add('in-progress');
    } else {
      this.promptElement.classList.remove('in-progress');
    }
    
    this.promptElement.style.display = 'block';
  }
  
  /**
   * Hide entrance prompt
   */
  _hideEntrancePrompt() {
    this.promptElement.style.display = 'none';
  }
  
  /**
   * Get dungeon ID based on cave properties/location
   */
  _getDungeonIdForCave(cave) {
    // Use cave position as seed to consistently assign dungeon type
    const seed = Math.floor(cave.x * 7 + cave.z * 13);
    const dungeonIds = Object.keys(DUNGEONS);
    const index = Math.abs(seed) % dungeonIds.length;
    
    // Convert key to dungeon ID
    const dungeonKey = dungeonIds[index];
    const dungeon = DUNGEONS[dungeonKey];
    return dungeon ? dungeon.id : 'forgotten_catacombs';
  }
  
  // ========================================
  // DUNGEON TRANSITIONS
  // ========================================
  
  /**
   * Begin entering a dungeon
   */
  enterDungeon(dungeonId, modifier = 'none') {
    if (this.state !== DUNGEON_STATE.OVERWORLD) {
      console.warn('[DungeonManager] Cannot enter dungeon - not in overworld');
      return;
    }
    
    const dungeon = getDungeonById(dungeonId);
    if (!dungeon) {
      console.error(`[DungeonManager] Unknown dungeon: ${dungeonId}`);
      return;
    }
    
    console.log(`[DungeonManager] Entering ${dungeon.name} (${modifier})`);
    
    this.state = DUNGEON_STATE.ENTERING;
    this.currentDungeonId = dungeonId;
    this.currentModifier = modifier;
    
    // Hide entrance prompt
    this._hideEntrancePrompt();
    
    // Play sound
    if (this.audioManager) {
      this.audioManager.play('doorOpen', { volume: 0.6 });
    }
    
    // Save overworld state
    this._saveOverworldState();
    
    // Start fade transition
    this._startTransition('enter', () => {
      this._loadDungeon(dungeonId, modifier);
    });
  }
  
  /**
   * Exit current dungeon and return to overworld
   */
  exitDungeon() {
    if (this.state !== DUNGEON_STATE.IN_DUNGEON) {
      console.warn('[DungeonManager] Cannot exit - not in dungeon');
      return;
    }
    
    console.log('[DungeonManager] Exiting dungeon, returning to overworld');
    
    this.state = DUNGEON_STATE.EXITING;
    
    // Hide exit prompt
    this.exitPromptElement.style.display = 'none';
    
    // Play sound
    if (this.audioManager) {
      this.audioManager.play('teleport', { volume: 0.6 });
    }
    
    // Save dungeon progress
    this._saveDungeonProgress();
    
    // Start fade transition
    this._startTransition('exit', () => {
      this._unloadDungeon();
      this._restoreOverworldState();
    });
  }
  
  /**
   * Start fade transition
   */
  _startTransition(type, callback) {
    this.transitionProgress = 0;
    this.transitionCallback = callback;
    
    const duration = type === 'enter' ? TRANSITION.fadeInDuration : TRANSITION.fadeOutDuration;
    
    // Update loading screen title
    const titleEl = this.loadingElement.querySelector('.loading-title');
    const subtitleEl = this.loadingElement.querySelector('.loading-subtitle');
    
    if (type === 'enter') {
      const dungeon = getDungeonById(this.currentDungeonId);
      titleEl.textContent = dungeon ? `Entering ${dungeon.name}` : 'Entering Dungeon';
      subtitleEl.textContent = 'Prepare yourself...';
    } else {
      titleEl.textContent = 'Returning to Overworld';
      subtitleEl.textContent = 'The light awaits...';
    }
    
    // Animate fade
    const startTime = performance.now();
    
    const animateFade = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      this.transitionProgress = Math.min(elapsed / duration, 1);
      
      this.transitionOverlay.style.opacity = this.transitionProgress;
      
      if (this.transitionProgress >= 1) {
        // Fade complete, show loading screen
        this.loadingElement.classList.add('active');
        
        // Call callback after minimum loading time
        setTimeout(() => {
          if (this.transitionCallback) {
            this.transitionCallback();
          }
        }, TRANSITION.loadingMinTime * 1000);
      } else {
        requestAnimationFrame(animateFade);
      }
    };
    
    requestAnimationFrame(animateFade);
  }
  
  /**
   * Fade out from black (after load complete)
   */
  _endTransition() {
    const duration = TRANSITION.fadeOutDuration;
    const startTime = performance.now();
    
    // Hide loading screen
    this.loadingElement.classList.remove('active');
    
    const animateFade = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      
      this.transitionOverlay.style.opacity = 1 - progress;
      
      if (progress < 1) {
        requestAnimationFrame(animateFade);
      } else {
        this.transitionOverlay.style.opacity = 0;
      }
    };
    
    requestAnimationFrame(animateFade);
  }
  
  // ========================================
  // DUNGEON LOADING / UNLOADING
  // ========================================
  
  /**
   * Save overworld state before entering dungeon
   */
  _saveOverworldState() {
    this.overworldState = {
      playerPosition: this.player.mesh.position.clone(),
      playerRotation: this.player.mesh.rotation.y,
      // Store any other relevant state
      worldVisible: true,
    };
    
    console.log('[DungeonManager] Saved overworld state');
  }
  
  /**
   * Restore overworld state after exiting dungeon
   */
  _restoreOverworldState() {
    if (!this.overworldState) return;
    
    // Restore player position (near cave entrance)
    this.player.mesh.position.copy(this.overworldState.playerPosition);
    this.player.mesh.position.y = this.world.terrain.getTerrainHeight(
      this.overworldState.playerPosition.x,
      this.overworldState.playerPosition.z
    );
    
    this.player.mesh.rotation.y = this.overworldState.playerRotation + Math.PI; // Face away from cave
    this.player.velocity.set(0, 0, 0);
    
    // Re-enable overworld rendering
    this._setOverworldVisible(true);
    
    // Clear dungeon state
    this.currentDungeon = null;
    this.currentDungeonId = null;
    this.currentModifier = 'none';
    this.state = DUNGEON_STATE.OVERWORLD;
    
    // End transition
    this._endTransition();
    
    console.log('[DungeonManager] Restored overworld state');
  }
  
  /**
   * Load and generate dungeon instance
   */
  _loadDungeon(dungeonId, modifier) {
    this.state = DUNGEON_STATE.LOADING;
    
    // Check for existing progress
    const progress = this.dungeonProgress.get(dungeonId);
    let seed = null;
    
    if (progress && !progress.completed) {
      // Resume existing dungeon
      seed = progress.seed;
      console.log(`[DungeonManager] Resuming dungeon with seed ${seed}`);
    }
    
    // Generate dungeon layout
    this.generator = new DungeonGenerator(seed);
    this.currentDungeon = this.generator.generate(dungeonId, modifier);
    
    if (!this.currentDungeon) {
      console.error('[DungeonManager] Failed to generate dungeon');
      this._restoreOverworldState();
      return;
    }
    
    // Hide overworld
    this._setOverworldVisible(false);
    
    // Render dungeon geometry
    dungeonRenderer.initialize(this.scene);
    dungeonRenderer.renderDungeon(this.currentDungeon);
    
    // Set up dungeon lighting
    this._setupDungeonLighting();
    
    // Find entrance room and spawn player there
    const entranceRoom = this.currentDungeon.rooms.find(r => r.type === 'entrance');
    if (entranceRoom) {
      const spawnX = entranceRoom.worldX + entranceRoom.width / 2;
      const spawnZ = entranceRoom.worldZ + entranceRoom.depth / 2;
      const spawnY = 0.5; // Dungeon floor level
      
      this.player.mesh.position.set(spawnX, spawnY, spawnZ);
      this.player.mesh.rotation.y = 0;
      this.player.velocity.set(0, 0, 0);
    }
    
    // Create exit portal in boss room
    this._createExitPortal();
    
    // Initialize or restore progress
    if (!progress || progress.completed) {
      // New dungeon run
      this.dungeonProgress.set(dungeonId, {
        seed: this.generator.seed,
        modifier: modifier,
        roomsCleared: new Set(),
        chestsLooted: new Set(),
        puzzlesSolved: new Set(),
        minibossDefeated: false,
        bossDefeated: false,
        completed: false,
        startedAt: Date.now(),
        timeSpent: 0,
        enemiesKilled: 0,
      });
    }
    
    // Update state
    this.state = DUNGEON_STATE.IN_DUNGEON;
    
    // End transition (fade in)
    this._endTransition();
    
    console.log(`[DungeonManager] Dungeon loaded - ${this.currentDungeon.rooms.length} rooms`);
    
    // Play dungeon ambient
    if (this.audioManager) {
      this.audioManager.stopAmbientMusic();
      this.audioManager.play('dungeonAmbient', { volume: 0.4, loop: true });
    }
  }
  
  /**
   * Unload current dungeon
   */
  _unloadDungeon() {
    if (!this.currentDungeon) return;
    
    // Clear dungeon geometry
    dungeonRenderer.clearDungeon();
    
    // Remove exit portal
    if (this.exitPortalMesh) {
      this.scene.remove(this.exitPortalMesh);
      if (this.exitPortalMesh.geometry) this.exitPortalMesh.geometry.dispose();
      this.exitPortalMesh = null;
    }
    this.exitPortal = null;
    
    // Restore dungeon lighting (remove dungeon lights)
    this._removeDungeonLighting();
    
    // Resume overworld ambient
    if (this.audioManager) {
      this.audioManager.stop('dungeonAmbient');
      this.audioManager.startAmbientMusic();
    }
    
    console.log('[DungeonManager] Dungeon unloaded');
  }
  
  /**
   * Set overworld visibility (hide/show during dungeon)
   */
  _setOverworldVisible(visible) {
    // Hide terrain chunks
    if (this.world.terrain && this.world.terrain.chunkGroup) {
      this.world.terrain.chunkGroup.visible = visible;
    }
    
    // Hide foliage
    if (this.world.foliage && this.world.foliage.foliageGroup) {
      this.world.foliage.foliageGroup.visible = visible;
    }
    
    // Hide villages
    if (this.world.villages && this.world.villages.regions) {
      this.world.villages.regions.forEach(region => {
        region.meshes.forEach(mesh => mesh.visible = visible);
      });
    }
    
    // Hide caves
    if (this.world.caveManager && this.world.caveManager.regions) {
      this.world.caveManager.regions.forEach(region => {
        region.meshes.forEach(mesh => mesh.visible = visible);
      });
    }
    
    // Hide ruins
    if (this.world.ruinsManager && this.world.ruinsManager.regions) {
      this.world.ruinsManager.regions.forEach(region => {
        region.meshes.forEach(mesh => mesh.visible = visible);
      });
    }
    
    // Update skybox / background
    if (visible) {
      this.scene.background = new THREE.Color(0x87CEEB); // Sky blue
      this.scene.fog = null;
    } else {
      // Dark dungeon background
      this.scene.background = new THREE.Color(0x050508);
      this.scene.fog = new THREE.FogExp2(0x050508, 0.04);
    }
  }
  
  /**
   * Set up dungeon lighting
   */
  _setupDungeonLighting() {
    const dungeon = getDungeonById(this.currentDungeonId);
    if (!dungeon) return;
    
    // Store reference to dungeon lights for cleanup
    this.dungeonLights = [];
    
    // Dim ambient light for dungeon
    const ambient = new THREE.AmbientLight(dungeon.ambientColor || 0x151520, 0.3);
    ambient.name = 'dungeon-ambient';
    this.scene.add(ambient);
    this.dungeonLights.push(ambient);
    
    // Add point lights at key locations (torch positions from DungeonRenderer)
    // These will be handled by DungeonRenderer
  }
  
  /**
   * Remove dungeon lighting
   */
  _removeDungeonLighting() {
    if (!this.dungeonLights) return;
    
    for (const light of this.dungeonLights) {
      this.scene.remove(light);
    }
    this.dungeonLights = [];
  }
  
  // ========================================
  // EXIT PORTAL
  // ========================================
  
  /**
   * Create exit portal in boss room
   */
  _createExitPortal() {
    if (!this.currentDungeon) return;
    
    // Find boss room
    const bossRoom = this.currentDungeon.rooms.find(r => r.type === 'boss');
    if (!bossRoom) {
      console.warn('[DungeonManager] No boss room found for exit portal');
      return;
    }
    
    // Position portal at back of boss room
    const portalX = bossRoom.worldX + bossRoom.width / 2;
    const portalZ = bossRoom.worldZ + bossRoom.depth - 2;
    const portalY = 0;
    
    this.exitPortal = {
      x: portalX,
      y: portalY,
      z: portalZ,
      active: false, // Only active after boss defeat
    };
    
    // Create portal mesh
    const portalGroup = new THREE.Group();
    portalGroup.position.set(portalX, portalY, portalZ);
    
    // Portal ring
    const ringGeom = new THREE.TorusGeometry(1.5, 0.15, 16, 32);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x4488ff,
      emissive: 0x2244aa,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.7,
    });
    const ring = new THREE.Mesh(ringGeom, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 1.8;
    portalGroup.add(ring);
    
    // Portal surface (initially inactive - dark)
    const surfaceGeom = new THREE.CircleGeometry(1.4, 32);
    const surfaceMat = new THREE.MeshBasicMaterial({
      color: 0x1a1a30,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    });
    const surface = new THREE.Mesh(surfaceGeom, surfaceMat);
    surface.rotation.x = Math.PI / 2;
    surface.position.y = 1.8;
    surface.name = 'portal-surface';
    portalGroup.add(surface);
    
    // Portal base pedestal
    const baseGeom = new THREE.CylinderGeometry(0.8, 1.0, 0.3, 16);
    const baseMat = new THREE.MeshStandardMaterial({
      color: 0x3a3a50,
      roughness: 0.8,
      metalness: 0.2,
    });
    const base = new THREE.Mesh(baseGeom, baseMat);
    base.position.y = 0.15;
    portalGroup.add(base);
    
    // Point light (dim until active)
    const light = new THREE.PointLight(0x4488ff, 0.3, 5);
    light.position.y = 2;
    light.name = 'portal-light';
    portalGroup.add(light);
    
    this.exitPortalMesh = portalGroup;
    this.scene.add(portalGroup);
  }
  
  /**
   * Activate exit portal (called when boss defeated)
   */
  activateExitPortal() {
    if (!this.exitPortal || !this.exitPortalMesh) return;
    
    this.exitPortal.active = true;
    
    // Update portal visuals
    const surface = this.exitPortalMesh.getObjectByName('portal-surface');
    if (surface) {
      surface.material.color.setHex(0x44aaff);
      surface.material.opacity = 0.9;
    }
    
    // Brighten light
    const light = this.exitPortalMesh.getObjectByName('portal-light');
    if (light) {
      light.intensity = 2;
    }
    
    console.log('[DungeonManager] Exit portal activated');
  }
  
  /**
   * Check if player is near exit portal
   */
  _checkExitPortal() {
    if (!this.exitPortal || !this.exitPortal.active) {
      this.exitPromptElement.style.display = 'none';
      return;
    }
    
    const playerPos = this.player.mesh.position;
    const dx = playerPos.x - this.exitPortal.x;
    const dz = playerPos.z - this.exitPortal.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    
    if (dist < 3) {
      this.exitPromptElement.style.display = 'block';
      
      // Check for interact
      if (this.inputManager.interact && this.interactCooldown <= 0) {
        this.interactCooldown = ENTRANCE_SETTINGS.interactCooldown;
        this.exitDungeon();
      }
    } else {
      this.exitPromptElement.style.display = 'none';
    }
  }
  
  // ========================================
  // PROGRESS TRACKING
  // ========================================
  
  /**
   * Mark a room as cleared
   */
  markRoomCleared(roomId) {
    if (!this.currentDungeonId) return;
    
    const progress = this.dungeonProgress.get(this.currentDungeonId);
    if (progress) {
      progress.roomsCleared.add(roomId);
      this._saveProgress();
    }
  }
  
  /**
   * Mark a chest as looted
   */
  markChestLooted(chestId) {
    if (!this.currentDungeonId) return;
    
    const progress = this.dungeonProgress.get(this.currentDungeonId);
    if (progress) {
      progress.chestsLooted.add(chestId);
      this._saveProgress();
    }
  }
  
  /**
   * Mark a puzzle as solved
   */
  markPuzzleSolved(puzzleId) {
    if (!this.currentDungeonId) return;
    
    const progress = this.dungeonProgress.get(this.currentDungeonId);
    if (progress) {
      progress.puzzlesSolved.add(puzzleId);
      this._saveProgress();
    }
  }
  
  /**
   * Mark miniboss as defeated
   */
  markMinibossDefeated() {
    if (!this.currentDungeonId) return;
    
    const progress = this.dungeonProgress.get(this.currentDungeonId);
    if (progress) {
      progress.minibossDefeated = true;
      this._saveProgress();
    }
  }
  
  /**
   * Mark boss as defeated (enables exit portal)
   */
  markBossDefeated() {
    if (!this.currentDungeonId) return;
    
    const progress = this.dungeonProgress.get(this.currentDungeonId);
    if (progress) {
      progress.bossDefeated = true;
      progress.completed = true;
      progress.completedAt = Date.now();
      this._saveProgress();
    }
    
    // Activate exit portal
    this.activateExitPortal();
  }
  
  /**
   * Increment enemy kill count
   */
  incrementEnemyKills() {
    if (!this.currentDungeonId) return;
    
    const progress = this.dungeonProgress.get(this.currentDungeonId);
    if (progress) {
      progress.enemiesKilled++;
    }
  }
  
  /**
   * Get current dungeon progress
   */
  getProgress() {
    if (!this.currentDungeonId) return null;
    return this.dungeonProgress.get(this.currentDungeonId);
  }
  
  /**
   * Save dungeon progress to localStorage
   */
  _saveDungeonProgress() {
    if (!this.currentDungeonId) return;
    
    const progress = this.dungeonProgress.get(this.currentDungeonId);
    if (progress) {
      // Update time spent
      const now = Date.now();
      progress.timeSpent += (now - (progress.lastUpdateTime || progress.startedAt));
      progress.lastUpdateTime = now;
    }
    
    this._saveProgress();
  }
  
  /**
   * Save all progress to localStorage
   */
  _saveProgress() {
    try {
      const data = {};
      
      this.dungeonProgress.forEach((progress, dungeonId) => {
        data[dungeonId] = {
          ...progress,
          roomsCleared: Array.from(progress.roomsCleared),
          chestsLooted: Array.from(progress.chestsLooted),
          puzzlesSolved: Array.from(progress.puzzlesSolved),
        };
      });
      
      localStorage.setItem('ashen_dungeon_progress', JSON.stringify(data));
    } catch (e) {
      console.warn('[DungeonManager] Failed to save progress:', e);
    }
  }
  
  /**
   * Load progress from localStorage
   */
  _loadProgress() {
    try {
      const saved = localStorage.getItem('ashen_dungeon_progress');
      if (saved) {
        const data = JSON.parse(saved);
        
        for (const [dungeonId, progress] of Object.entries(data)) {
          this.dungeonProgress.set(dungeonId, {
            ...progress,
            roomsCleared: new Set(progress.roomsCleared || []),
            chestsLooted: new Set(progress.chestsLooted || []),
            puzzlesSolved: new Set(progress.puzzlesSolved || []),
          });
        }
        
        console.log(`[DungeonManager] Loaded progress for ${this.dungeonProgress.size} dungeons`);
      }
    } catch (e) {
      console.warn('[DungeonManager] Failed to load progress:', e);
    }
  }
  
  // ========================================
  // UPDATE LOOP
  // ========================================
  
  /**
   * Update dungeon manager - call every frame
   */
  update(delta) {
    // Update cooldown
    if (this.interactCooldown > 0) {
      this.interactCooldown -= delta;
    }
    
    switch (this.state) {
      case DUNGEON_STATE.OVERWORLD:
        this._updateOverworld(delta);
        break;
        
      case DUNGEON_STATE.IN_DUNGEON:
        this._updateInDungeon(delta);
        break;
        
      case DUNGEON_STATE.ENTERING:
      case DUNGEON_STATE.LOADING:
      case DUNGEON_STATE.EXITING:
        // Transitions handled by animation frames
        break;
    }
    
    // Animate exit portal
    if (this.exitPortalMesh && this.exitPortal && this.exitPortal.active) {
      this._animateExitPortal(delta);
    }
  }
  
  /**
   * Update when in overworld
   */
  _updateOverworld(delta) {
    // Check for nearby entrances
    this._checkEntrances();
    
    // Check for interaction
    if (this.nearestEntrance && 
        this.entranceDistance < ENTRANCE_SETTINGS.promptDistance &&
        this.inputManager.interact &&
        this.interactCooldown <= 0) {
      
      this.interactCooldown = ENTRANCE_SETTINGS.interactCooldown;
      
      // Enter dungeon
      const dungeonId = this._getDungeonIdForCave(this.nearestEntrance);
      this.enterDungeon(dungeonId, this.currentModifier);
    }
  }
  
  /**
   * Update when in dungeon
   */
  _updateInDungeon(delta) {
    // Check exit portal proximity
    this._checkExitPortal();
    
    // Update dungeon renderer (animations, particles)
    dungeonRenderer.update(delta);
    
    // Update time tracking
    const progress = this.getProgress();
    if (progress) {
      progress.lastUpdateTime = Date.now();
    }
  }
  
  /**
   * Animate exit portal
   */
  _animateExitPortal(delta) {
    if (!this.exitPortalMesh) return;
    
    const time = performance.now() * 0.001;
    
    // Rotate portal ring slowly
    const ring = this.exitPortalMesh.children[0];
    if (ring) {
      ring.rotation.z = time * 0.5;
    }
    
    // Pulse portal surface
    const surface = this.exitPortalMesh.getObjectByName('portal-surface');
    if (surface) {
      const pulse = 0.7 + Math.sin(time * 3) * 0.2;
      surface.material.opacity = pulse;
    }
    
    // Pulse light
    const light = this.exitPortalMesh.getObjectByName('portal-light');
    if (light) {
      light.intensity = 1.5 + Math.sin(time * 2) * 0.5;
    }
  }
  
  // ========================================
  // PUBLIC API
  // ========================================
  
  /**
   * Check if currently in a dungeon
   */
  isInDungeon() {
    return this.state === DUNGEON_STATE.IN_DUNGEON;
  }
  
  /**
   * Get current dungeon data
   */
  getCurrentDungeon() {
    return this.currentDungeon;
  }
  
  /**
   * Get current dungeon ID
   */
  getCurrentDungeonId() {
    return this.currentDungeonId;
  }
  
  /**
   * Get floor Y at position (dungeon floors are flat at y=0)
   */
  getFloorY(x, z) {
    if (this.state !== DUNGEON_STATE.IN_DUNGEON) return null;
    
    // Find which room the position is in
    if (!this.currentDungeon) return 0;
    
    for (const room of this.currentDungeon.rooms) {
      if (x >= room.worldX && x <= room.worldX + room.width &&
          z >= room.worldZ && z <= room.worldZ + room.depth) {
        return 0; // Dungeon floors at y=0
      }
    }
    
    // Check corridors
    for (const conn of this.currentDungeon.connections || []) {
      if (conn.corridor && 
          x >= conn.corridor.worldX && x <= conn.corridor.worldX + conn.corridor.width &&
          z >= conn.corridor.worldZ && z <= conn.corridor.worldZ + conn.corridor.depth) {
        return 0;
      }
    }
    
    return 0; // Default floor level
  }
  
  /**
   * Check wall collision within dungeon
   */
  checkWallCollision(position, radius = 0.4) {
    if (this.state !== DUNGEON_STATE.IN_DUNGEON || !this.currentDungeon) {
      return null;
    }
    
    // Simple boundary collision - keep player within rooms
    const pushOut = new THREE.Vector3();
    let collided = false;
    
    // Find current room
    let inRoom = false;
    for (const room of this.currentDungeon.rooms) {
      const minX = room.worldX + radius;
      const maxX = room.worldX + room.width - radius;
      const minZ = room.worldZ + radius;
      const maxZ = room.worldZ + room.depth - radius;
      
      if (position.x >= room.worldX && position.x <= room.worldX + room.width &&
          position.z >= room.worldZ && position.z <= room.worldZ + room.depth) {
        inRoom = true;
        
        // Check room boundaries
        if (position.x < minX) {
          pushOut.x = minX - position.x;
          collided = true;
        } else if (position.x > maxX) {
          pushOut.x = maxX - position.x;
          collided = true;
        }
        
        if (position.z < minZ) {
          pushOut.z = minZ - position.z;
          collided = true;
        } else if (position.z > maxZ) {
          pushOut.z = maxZ - position.z;
          collided = true;
        }
        
        break;
      }
    }
    
    return collided ? pushOut : null;
  }
  
  /**
   * Dispose of all resources
   */
  dispose() {
    // Remove UI elements
    if (this.promptElement) {
      this.promptElement.remove();
    }
    if (this.loadingElement) {
      this.loadingElement.remove();
    }
    if (this.transitionOverlay) {
      this.transitionOverlay.remove();
    }
    if (this.exitPromptElement) {
      this.exitPromptElement.remove();
    }
    
    // Clear dungeon if active
    if (this.currentDungeon) {
      this._unloadDungeon();
    }
    
    // Clear references
    this.scene = null;
    this.world = null;
    this.player = null;
    this.gameManager = null;
    this.inputManager = null;
  }
}

// Create singleton for easy import
let dungeonManagerInstance = null;

export function createDungeonManager(scene, world, player, gameManager, inputManager, audioManager) {
  dungeonManagerInstance = new DungeonManager(scene, world, player, gameManager, inputManager, audioManager);
  return dungeonManagerInstance;
}

export function getDungeonManager() {
  return dungeonManagerInstance;
}

export { DUNGEON_STATE };
