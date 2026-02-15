import * as THREE from 'three';

/**
 * FastTravelManager - Fast travel between discovered locations
 * Phase 27: Minimap & World Map
 * 
 * Features:
 * - Track discovered fast travel points (bonfires, crucibles)
 * - Click-to-travel from minimap/world map
 * - Confirmation dialog with distance/time info
 * - Loading screen with gameplay tips
 * - Combat/dungeon restrictions
 * - Fade out/in transitions
 * - Chunk refresh after travel
 * - Autosave after arrival
 */

// Gameplay tips for loading screens
const LOADING_TIPS = [
  "Rest at bonfires to fully restore health and mana.",
  "Dodge rolling grants brief invincibility frames.",
  "Heavy attacks break enemy guard faster.",
  "Infuse your stats at crucibles to grow stronger.",
  "Explore ruins for hidden chests and rare equipment.",
  "Weather affects combat - rain reduces fire damage.",
  "Night brings stronger enemies but better loot.",
  "Crafting stations in villages offer powerful recipes.",
  "Quest NPCs have golden markers above their heads.",
  "Parrying at the right moment staggers enemies.",
  "Gathering nodes respawn after time passes.",
  "Dungeons contain unique bosses and rewards.",
  "Your stamina regenerates faster while standing still.",
  "Spells consume mana - choose wisely in combat.",
  "Explore caves to find dungeon entrances.",
  "Check your quest log with J for objectives.",
  "Villages are safe zones where enemies won't follow.",
  "Equip better gear to increase your stats.",
  "World bosses drop legendary equipment.",
  "Save often - the world is dangerous.",
];

// Travel states
const TRAVEL_STATE = {
  IDLE: 'idle',
  CONFIRMING: 'confirming',
  TRANSITIONING: 'transitioning',
  LOADING: 'loading',
  ARRIVING: 'arriving',
};

export class FastTravelManager {
  constructor() {
    this.state = TRAVEL_STATE.IDLE;
    
    // Discovered locations
    this.discoveredLocations = new Map(); // id -> { x, z, name, type, discovered: timestamp }
    
    // Current travel target
    this.targetLocation = null;
    
    // References (set during init)
    this.player = null;
    this.gameManager = null;
    this.saveManager = null;
    this.dungeonManager = null;
    this.enemyManager = null;
    this.terrain = null;
    this.world = null;
    this.audioManager = null;
    this.minimapManager = null;
    
    // Transition timing
    this.fadeOutDuration = 1000;  // ms
    this.loadingMinDuration = 1500; // ms minimum loading screen
    this.fadeInDuration = 1000;   // ms
    
    // Animation state
    this.transitionStartTime = 0;
    this.loadingStartTime = 0;
    this.currentTip = '';
    
    // Create UI elements
    this._createUI();
    
    // Load discovered locations from localStorage
    this._loadDiscovered();
    
    console.log('[FastTravelManager] Initialized');
  }
  
  /**
   * Initialize with game systems
   */
  init(systems) {
    this.player = systems.player;
    this.gameManager = systems.gameManager;
    this.saveManager = systems.saveManager || null;
    this.dungeonManager = systems.dungeonManager || null;
    this.enemyManager = systems.enemyManager || null;
    this.terrain = systems.terrain || null;
    this.world = systems.world || null;
    this.audioManager = systems.audioManager || null;
    this.minimapManager = systems.minimapManager || null;
    
    // Discover starting bonfire
    if (this.gameManager && this.gameManager.bonfirePosition) {
      this.discoverLocation('starting_bonfire', {
        x: this.gameManager.bonfirePosition.x,
        z: this.gameManager.bonfirePosition.z,
        name: 'Starting Bonfire',
        type: 'bonfire',
      });
    }
  }
  
  /**
   * Create UI elements
   */
  _createUI() {
    // Confirmation dialog
    this.confirmDialog = document.createElement('div');
    this.confirmDialog.id = 'fast-travel-confirm';
    this.confirmDialog.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(20, 15, 10, 0.95);
      border: 2px solid rgba(180, 140, 80, 0.7);
      border-radius: 8px;
      padding: 20px 30px;
      color: #ddd;
      font-family: 'Crimson Text', Georgia, serif;
      z-index: 2000;
      display: none;
      min-width: 300px;
      text-align: center;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.8);
    `;
    
    this.confirmDialog.innerHTML = `
      <h3 style="color: #ffd700; margin: 0 0 15px; font-size: 18px;">Fast Travel</h3>
      <p id="travel-destination" style="margin: 10px 0; font-size: 16px;">Destination</p>
      <p id="travel-distance" style="margin: 10px 0; font-size: 13px; color: #aaa;">Distance: 0m</p>
      <div style="margin-top: 20px; display: flex; gap: 15px; justify-content: center;">
        <button id="travel-confirm-btn" style="
          background: rgba(80, 140, 80, 0.8);
          border: 1px solid rgba(120, 180, 120, 0.6);
          color: #fff;
          padding: 8px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-family: inherit;
        ">Travel</button>
        <button id="travel-cancel-btn" style="
          background: rgba(140, 80, 80, 0.8);
          border: 1px solid rgba(180, 120, 120, 0.6);
          color: #fff;
          padding: 8px 20px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-family: inherit;
        ">Cancel</button>
      </div>
      <p id="travel-warning" style="margin-top: 15px; font-size: 12px; color: #ff8888; display: none;"></p>
    `;
    
    document.body.appendChild(this.confirmDialog);
    
    // Button handlers
    document.getElementById('travel-confirm-btn').addEventListener('click', () => this._confirmTravel());
    document.getElementById('travel-cancel-btn').addEventListener('click', () => this._cancelTravel());
    
    // Transition overlay (fade)
    this.transitionOverlay = document.createElement('div');
    this.transitionOverlay.id = 'fast-travel-transition';
    this.transitionOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0a0806;
      z-index: 2500;
      opacity: 0;
      pointer-events: none;
      display: none;
    `;
    document.body.appendChild(this.transitionOverlay);
    
    // Loading screen
    this.loadingScreen = document.createElement('div');
    this.loadingScreen.id = 'fast-travel-loading';
    this.loadingScreen.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #0a0806;
      z-index: 2600;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: #ddd;
      font-family: 'Crimson Text', Georgia, serif;
    `;
    
    this.loadingScreen.innerHTML = `
      <div style="text-align: center; max-width: 500px; padding: 20px;">
        <h2 style="color: #ffd700; margin-bottom: 20px; font-size: 24px;">Traveling...</h2>
        <div id="loading-destination" style="font-size: 18px; margin-bottom: 30px;">to Destination</div>
        
        <div style="width: 200px; height: 4px; background: rgba(100, 80, 60, 0.5); border-radius: 2px; margin: 20px auto;">
          <div id="loading-progress" style="width: 0%; height: 100%; background: linear-gradient(90deg, #ffd700, #ffaa00); border-radius: 2px; transition: width 0.3s;"></div>
        </div>
        
        <div style="margin-top: 40px; padding: 15px; background: rgba(50, 40, 30, 0.6); border-radius: 6px; border-left: 3px solid #ffd700;">
          <div style="font-size: 11px; color: #888; margin-bottom: 5px;">TIP</div>
          <div id="loading-tip" style="font-size: 14px; line-height: 1.5;"></div>
        </div>
      </div>
    `;
    
    document.body.appendChild(this.loadingScreen);
    
    // Keyboard handler for ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.state === TRAVEL_STATE.CONFIRMING) {
        this._cancelTravel();
      }
    });
  }
  
  /**
   * Load discovered locations from storage
   */
  _loadDiscovered() {
    try {
      const stored = localStorage.getItem('ashen-fast-travel');
      if (stored) {
        const data = JSON.parse(stored);
        for (const [id, loc] of Object.entries(data)) {
          this.discoveredLocations.set(id, loc);
        }
        console.log(`[FastTravelManager] Loaded ${this.discoveredLocations.size} discovered locations`);
      }
    } catch (e) {
      console.warn('[FastTravelManager] Failed to load discovered locations:', e);
    }
  }
  
  /**
   * Save discovered locations to storage
   */
  _saveDiscovered() {
    try {
      const data = Object.fromEntries(this.discoveredLocations);
      localStorage.setItem('ashen-fast-travel', JSON.stringify(data));
    } catch (e) {
      console.warn('[FastTravelManager] Failed to save discovered locations:', e);
    }
  }
  
  /**
   * Discover a new fast travel location
   */
  discoverLocation(id, location) {
    if (this.discoveredLocations.has(id)) return;
    
    this.discoveredLocations.set(id, {
      ...location,
      discovered: Date.now(),
    });
    
    this._saveDiscovered();
    
    // Show discovery notification
    this._showDiscoveryNotification(location.name);
    
    console.log(`[FastTravelManager] Discovered: ${location.name}`);
  }
  
  /**
   * Show discovery notification
   */
  _showDiscoveryNotification(name) {
    const notif = document.createElement('div');
    notif.style.cssText = `
      position: fixed;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(20, 15, 10, 0.9);
      border: 1px solid rgba(180, 140, 80, 0.6);
      border-radius: 6px;
      padding: 12px 25px;
      color: #ffd700;
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 16px;
      z-index: 1500;
      animation: slideDown 0.3s ease-out, fadeOut 0.5s 2.5s forwards;
    `;
    notif.innerHTML = `<span style="color: #ff8800;">✦</span> Fast Travel Unlocked: <strong>${name}</strong>`;
    
    // Add animation keyframes if not present
    if (!document.getElementById('fast-travel-animations')) {
      const style = document.createElement('style');
      style.id = 'fast-travel-animations';
      style.textContent = `
        @keyframes slideDown {
          from { transform: translateX(-50%) translateY(-20px); opacity: 0; }
          to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes fadeOut {
          to { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 3000);
  }
  
  /**
   * Get all discovered locations
   */
  getDiscoveredLocations() {
    return Array.from(this.discoveredLocations.values());
  }
  
  /**
   * Check if a location is discovered
   */
  isDiscovered(id) {
    return this.discoveredLocations.has(id);
  }
  
  /**
   * Check if fast travel is allowed
   */
  canFastTravel() {
    // Cannot travel in combat
    if (this.gameManager && this.gameManager.inCombat) {
      return { allowed: false, reason: 'Cannot fast travel while in combat' };
    }
    
    // Cannot travel in dungeons
    if (this.dungeonManager && this.dungeonManager.isInDungeon()) {
      return { allowed: false, reason: 'Cannot fast travel inside dungeons' };
    }
    
    // Cannot travel while dead
    if (this.gameManager && this.gameManager.isDead) {
      return { allowed: false, reason: 'Cannot fast travel while dead' };
    }
    
    // Cannot travel during boss fights
    if (this.gameManager && this.gameManager.bossSpawner) {
      const currentBoss = this.gameManager.bossSpawner.getCurrentBossFight();
      if (currentBoss) {
        return { allowed: false, reason: 'Cannot fast travel during boss fight' };
      }
    }
    
    return { allowed: true };
  }
  
  /**
   * Start fast travel to a location (opens confirmation)
   */
  startTravel(locationId) {
    const location = this.discoveredLocations.get(locationId);
    if (!location) {
      console.warn(`[FastTravelManager] Unknown location: ${locationId}`);
      return;
    }
    
    const check = this.canFastTravel();
    if (!check.allowed) {
      this._showWarning(check.reason);
      return;
    }
    
    // Calculate distance
    let distance = 0;
    if (this.player) {
      const playerPos = this.player.position || this.player;
      const dx = location.x - playerPos.x;
      const dz = location.z - playerPos.z;
      distance = Math.sqrt(dx * dx + dz * dz);
    }
    
    // Check if already at location
    if (distance < 10) {
      this._showWarning('You are already at this location');
      return;
    }
    
    this.targetLocation = { ...location, id: locationId };
    this.state = TRAVEL_STATE.CONFIRMING;
    
    // Update dialog
    document.getElementById('travel-destination').textContent = location.name;
    document.getElementById('travel-distance').textContent = `Distance: ${Math.round(distance)}m`;
    document.getElementById('travel-warning').style.display = 'none';
    
    this.confirmDialog.style.display = 'block';
    
    // Play UI sound
    if (this.audioManager) {
      this.audioManager.play('uiOpen', { volume: 0.4 });
    }
  }
  
  /**
   * Show warning in dialog
   */
  _showWarning(message) {
    const warning = document.getElementById('travel-warning');
    warning.textContent = message;
    warning.style.display = 'block';
    
    // Also show as toast if dialog not open
    if (this.state !== TRAVEL_STATE.CONFIRMING) {
      const toast = document.createElement('div');
      toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(80, 40, 40, 0.9);
        border: 1px solid rgba(180, 100, 100, 0.6);
        border-radius: 4px;
        padding: 10px 20px;
        color: #ff8888;
        font-size: 14px;
        z-index: 1500;
      `;
      toast.textContent = message;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 2500);
    }
  }
  
  /**
   * Confirm travel
   */
  _confirmTravel() {
    if (!this.targetLocation) return;
    
    this.confirmDialog.style.display = 'none';
    this.state = TRAVEL_STATE.TRANSITIONING;
    this.transitionStartTime = performance.now();
    
    // Play travel sound
    if (this.audioManager) {
      this.audioManager.play('crucibleActivate', { volume: 0.5 });
    }
    
    // Start fade out
    this.transitionOverlay.style.display = 'block';
    this.transitionOverlay.style.opacity = '0';
    this.transitionOverlay.style.pointerEvents = 'auto';
    
    this._animateFadeOut();
  }
  
  /**
   * Cancel travel
   */
  _cancelTravel() {
    this.confirmDialog.style.display = 'none';
    this.targetLocation = null;
    this.state = TRAVEL_STATE.IDLE;
    
    if (this.audioManager) {
      this.audioManager.play('uiClose', { volume: 0.3 });
    }
  }
  
  /**
   * Animate fade out
   */
  _animateFadeOut() {
    const elapsed = performance.now() - this.transitionStartTime;
    const progress = Math.min(elapsed / this.fadeOutDuration, 1);
    
    this.transitionOverlay.style.opacity = progress.toString();
    
    if (progress < 1) {
      requestAnimationFrame(() => this._animateFadeOut());
    } else {
      // Fade complete, show loading
      this._showLoading();
    }
  }
  
  /**
   * Show loading screen
   */
  _showLoading() {
    this.state = TRAVEL_STATE.LOADING;
    this.loadingStartTime = performance.now();
    
    // Pick random tip
    this.currentTip = LOADING_TIPS[Math.floor(Math.random() * LOADING_TIPS.length)];
    
    document.getElementById('loading-destination').textContent = `to ${this.targetLocation.name}`;
    document.getElementById('loading-tip').textContent = this.currentTip;
    document.getElementById('loading-progress').style.width = '0%';
    
    this.loadingScreen.style.display = 'flex';
    this.transitionOverlay.style.display = 'none';
    
    this._animateLoading();
  }
  
  /**
   * Animate loading progress
   */
  _animateLoading() {
    const elapsed = performance.now() - this.loadingStartTime;
    const progress = Math.min(elapsed / this.loadingMinDuration, 1);
    
    document.getElementById('loading-progress').style.width = `${progress * 100}%`;
    
    if (progress < 1) {
      requestAnimationFrame(() => this._animateLoading());
    } else {
      // Loading complete, perform teleport
      this._performTeleport();
    }
  }
  
  /**
   * Perform the actual teleportation
   */
  _performTeleport() {
    if (!this.targetLocation || !this.player) return;
    
    const target = this.targetLocation;
    
    // Get terrain height at target
    let y = 0;
    if (this.terrain) {
      y = this.terrain.getTerrainHeight(target.x, target.z);
    }
    
    // Teleport player
    if (this.player.position) {
      this.player.position.set(target.x, y + 0.5, target.z);
    } else if (this.player.x !== undefined) {
      this.player.x = target.x;
      this.player.y = y + 0.5;
      this.player.z = target.z;
    }
    
    // Reset velocity if player has it
    if (this.player.velocity) {
      this.player.velocity.set(0, 0, 0);
    }
    
    // Update terrain chunks
    if (this.terrain && this.terrain.update) {
      this.terrain.update(target.x, target.z);
    }
    
    // Update world systems
    if (this.world) {
      if (this.world.foliage && this.world.foliage.update) {
        this.world.foliage.update(target.x, target.z);
      }
      if (this.world.villages && this.world.villages.update) {
        this.world.villages.update(target.x, target.z);
      }
      if (this.world.ruinsManager && this.world.ruinsManager.update) {
        this.world.ruinsManager.update(target.x, target.z);
      }
      if (this.world.caveManager && this.world.caveManager.update) {
        this.world.caveManager.update(target.x, target.z);
      }
    }
    
    // Refresh enemies
    if (this.enemyManager && this.enemyManager.respawnEnemies) {
      this.enemyManager.respawnEnemies(target.x, target.z);
    }
    
    // Short delay then fade in
    setTimeout(() => this._startFadeIn(), 200);
  }
  
  /**
   * Start fade in
   */
  _startFadeIn() {
    this.state = TRAVEL_STATE.ARRIVING;
    this.transitionStartTime = performance.now();
    
    this.loadingScreen.style.display = 'none';
    this.transitionOverlay.style.display = 'block';
    this.transitionOverlay.style.opacity = '1';
    
    this._animateFadeIn();
  }
  
  /**
   * Animate fade in
   */
  _animateFadeIn() {
    const elapsed = performance.now() - this.transitionStartTime;
    const progress = Math.min(elapsed / this.fadeInDuration, 1);
    
    this.transitionOverlay.style.opacity = (1 - progress).toString();
    
    if (progress < 1) {
      requestAnimationFrame(() => this._animateFadeIn());
    } else {
      // Travel complete
      this._completeTravel();
    }
  }
  
  /**
   * Complete travel
   */
  _completeTravel() {
    this.transitionOverlay.style.display = 'none';
    this.transitionOverlay.style.pointerEvents = 'none';
    this.state = TRAVEL_STATE.IDLE;
    
    const destination = this.targetLocation?.name || 'destination';
    this.targetLocation = null;
    
    // Show arrival notification
    this._showArrivalNotification(destination);
    
    // Play arrival sound
    if (this.audioManager) {
      this.audioManager.play('levelUp', { volume: 0.4 });
    }
    
    // Trigger autosave
    if (this.saveManager && this.saveManager.autosave) {
      setTimeout(() => {
        this.saveManager.autosave('fast_travel');
      }, 500);
    }
    
    console.log(`[FastTravelManager] Arrived at ${destination}`);
  }
  
  /**
   * Show arrival notification
   */
  _showArrivalNotification(destination) {
    const notif = document.createElement('div');
    notif.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(20, 15, 10, 0.9);
      border: 2px solid rgba(180, 140, 80, 0.6);
      border-radius: 8px;
      padding: 20px 40px;
      color: #ffd700;
      font-family: 'Crimson Text', Georgia, serif;
      font-size: 20px;
      z-index: 1500;
      animation: arrivalPulse 2s forwards;
      text-align: center;
    `;
    notif.innerHTML = `
      <div style="font-size: 12px; color: #888; margin-bottom: 5px;">ARRIVED AT</div>
      <div>${destination}</div>
    `;
    
    // Add animation
    if (!document.getElementById('arrival-animation')) {
      const style = document.createElement('style');
      style.id = 'arrival-animation';
      style.textContent = `
        @keyframes arrivalPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
          20% { transform: translate(-50%, -50%) scale(1.05); opacity: 1; }
          30% { transform: translate(-50%, -50%) scale(1); }
          80% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0; }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(notif);
    setTimeout(() => notif.remove(), 2000);
  }
  
  /**
   * Travel directly to coordinates (for minimap waypoint travel)
   */
  travelToCoordinates(x, z, name = 'Waypoint') {
    const check = this.canFastTravel();
    if (!check.allowed) {
      this._showWarning(check.reason);
      return;
    }
    
    // Create temporary location
    this.targetLocation = {
      x,
      z,
      name,
      type: 'waypoint',
    };
    
    // Calculate distance
    let distance = 0;
    if (this.player) {
      const playerPos = this.player.position || this.player;
      const dx = x - playerPos.x;
      const dz = z - playerPos.z;
      distance = Math.sqrt(dx * dx + dz * dz);
    }
    
    this.state = TRAVEL_STATE.CONFIRMING;
    
    document.getElementById('travel-destination').textContent = name;
    document.getElementById('travel-distance').textContent = `Distance: ${Math.round(distance)}m`;
    document.getElementById('travel-warning').style.display = 'none';
    
    this.confirmDialog.style.display = 'block';
  }
  
  /**
   * Check if currently traveling
   */
  isTraveling() {
    return this.state !== TRAVEL_STATE.IDLE && this.state !== TRAVEL_STATE.CONFIRMING;
  }
  
  /**
   * Update (called each frame - for animations)
   */
  update(delta) {
    // Currently animations are handled via requestAnimationFrame
    // This is available for future state-based updates
  }
  
  /**
   * Get save data
   */
  getSaveData() {
    return {
      discoveredLocations: Object.fromEntries(this.discoveredLocations),
    };
  }
  
  /**
   * Load save data
   */
  loadSaveData(data) {
    if (data && data.discoveredLocations) {
      this.discoveredLocations.clear();
      for (const [id, loc] of Object.entries(data.discoveredLocations)) {
        this.discoveredLocations.set(id, loc);
      }
      this._saveDiscovered();
    }
  }
  
  /**
   * Reset (for new game)
   */
  reset() {
    this.discoveredLocations.clear();
    this._saveDiscovered();
    this.state = TRAVEL_STATE.IDLE;
    this.targetLocation = null;
    
    // Re-discover starting bonfire
    if (this.gameManager && this.gameManager.bonfirePosition) {
      this.discoverLocation('starting_bonfire', {
        x: this.gameManager.bonfirePosition.x,
        z: this.gameManager.bonfirePosition.z,
        name: 'Starting Bonfire',
        type: 'bonfire',
      });
    }
  }
  
  /**
   * Cleanup
   */
  dispose() {
    if (this.confirmDialog && this.confirmDialog.parentNode) {
      this.confirmDialog.parentNode.removeChild(this.confirmDialog);
    }
    if (this.transitionOverlay && this.transitionOverlay.parentNode) {
      this.transitionOverlay.parentNode.removeChild(this.transitionOverlay);
    }
    if (this.loadingScreen && this.loadingScreen.parentNode) {
      this.loadingScreen.parentNode.removeChild(this.loadingScreen);
    }
  }
}

// Singleton pattern
let fastTravelInstance = null;

export function createFastTravelManager() {
  if (!fastTravelInstance) {
    fastTravelInstance = new FastTravelManager();
  }
  return fastTravelInstance;
}

export function getFastTravelManager() {
  return fastTravelInstance;
}
