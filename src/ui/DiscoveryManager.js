/**
 * DiscoveryManager - Track explored areas and fog of war
 * Phase 27: Minimap & World Map
 * 
 * Features:
 * - Track explored chunks/areas
 * - Reveal map as player explores (50m reveal radius)
 * - 'Location Discovered' notification when finding new POIs
 * - Discovery XP bonus for new areas
 * - Percentage explored stat per region
 * - Save/load discovery state with save system
 * - Different fog levels: unexplored (1), seen (0.5), current (0)
 * - Auto-reveal villages when entering
 * - Map completion rewards
 */

// Region definitions matching WorldMapUI
const REGIONS = [
  { id: 'castle', name: 'The Forsaken Keep', center: { x: 0, z: 0 }, radius: 50 },
  { id: 'meadow', name: 'Verdant Meadows', center: { x: 100, z: 50 }, radius: 150 },
  { id: 'woods', name: 'The Darkwood', center: { x: -150, z: 100 }, radius: 200 },
  { id: 'frontier', name: 'Ashen Frontier', center: { x: 200, z: -100 }, radius: 250 },
  { id: 'ruins', name: 'Ancient Ruins', center: { x: -50, z: -200 }, radius: 100 },
  { id: 'lake', name: 'Mirror Lake', center: { x: 150, z: 200 }, radius: 80 },
  { id: 'mountains', name: 'Shattered Peaks', center: { x: -200, z: -150 }, radius: 180 },
  { id: 'swamp', name: 'The Mire', center: { x: 300, z: 150 }, radius: 120 },
];

// POI types that can be discovered
const DISCOVERABLE_POI_TYPES = [
  'village',
  'dungeon',
  'cave',
  'ruins',
  'bonfire',
  'crucible',
  'landmark',
  'shrine',
  'boss_arena',
];

// Discovery XP rewards
const DISCOVERY_REWARDS = {
  chunk: 5,           // Per newly explored chunk
  region_first: 100,  // First time entering a region
  poi_village: 50,
  poi_dungeon: 75,
  poi_cave: 30,
  poi_ruins: 40,
  poi_bonfire: 25,
  poi_crucible: 25,
  poi_landmark: 35,
  poi_shrine: 50,
  poi_boss_arena: 100,
  region_complete: 250, // 100% region exploration
  world_complete: 1000, // 100% world exploration
};

export class DiscoveryManager {
  constructor(options = {}) {
    // Chunk size for tracking exploration (in world units)
    this.chunkSize = options.chunkSize || 20;
    
    // Reveal radius around player
    this.revealRadius = options.revealRadius || 50;
    
    // World bounds
    this.worldBounds = {
      minX: -500,
      maxX: 500,
      minZ: -500,
      maxZ: 500
    };
    
    // Explored chunks: Map<"x,z" => fogLevel>
    // fogLevel: 1 = unexplored, 0.5 = previously seen, 0 = currently visible
    this.exploredChunks = new Map();
    
    // Currently visible chunks (within reveal radius)
    this.currentlyVisibleChunks = new Set();
    
    // Discovered POIs: Set<poiId>
    this.discoveredPOIs = new Set();
    
    // Discovered regions: Map<regionId => { firstVisit: timestamp, percentExplored: number }>
    this.discoveredRegions = new Map();
    
    // Region completion status
    this.completedRegions = new Set();
    
    // References
    this.player = null;
    this.gameManager = null;
    this.questManager = null;
    this.villageManager = null;
    this.dungeonManager = null;
    
    // Notification callback
    this.onDiscovery = options.onDiscovery || null;
    
    // Update throttling
    this.lastUpdateTime = 0;
    this.updateInterval = 200; // ms
    
    // Stats
    this.totalChunksExplored = 0;
    this.totalPOIsDiscovered = 0;
    
    // Notification queue (for batching)
    this.notificationQueue = [];
    this.notificationTimeout = null;
    
    // Create notification DOM
    this._createNotificationDOM();
  }
  
  /**
   * Initialize with game systems
   */
  init(systems) {
    this.player = systems.player;
    this.gameManager = systems.gameManager;
    this.questManager = systems.questManager;
    this.villageManager = systems.villageManager;
    this.dungeonManager = systems.dungeonManager;
    
    // Update world bounds from terrain if available
    if (systems.terrain) {
      const terrainSize = systems.terrain.terrainSize || 1000;
      this.worldBounds = {
        minX: -terrainSize / 2,
        maxX: terrainSize / 2,
        minZ: -terrainSize / 2,
        maxZ: terrainSize / 2
      };
    }
    
    // Calculate total explorable chunks
    this._calculateTotalChunks();
    
    // Initial reveal around player
    if (this.player) {
      this._revealAroundPlayer();
    }
  }
  
  /**
   * Calculate total number of explorable chunks
   */
  _calculateTotalChunks() {
    const width = this.worldBounds.maxX - this.worldBounds.minX;
    const height = this.worldBounds.maxZ - this.worldBounds.minZ;
    this.totalChunks = Math.ceil(width / this.chunkSize) * Math.ceil(height / this.chunkSize);
    
    // Calculate chunks per region
    this.chunksPerRegion = {};
    REGIONS.forEach(region => {
      const chunksInRadius = Math.ceil((region.radius * 2) / this.chunkSize);
      this.chunksPerRegion[region.id] = chunksInRadius * chunksInRadius * 0.785; // ~circle area
    });
  }
  
  /**
   * Create notification DOM elements
   */
  _createNotificationDOM() {
    // Notification container (centered top)
    this.notificationContainer = document.createElement('div');
    this.notificationContainer.id = 'discovery-notifications';
    this.notificationContainer.style.cssText = `
      position: fixed;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      z-index: 1500;
      pointer-events: none;
    `;
    document.body.appendChild(this.notificationContainer);
  }
  
  /**
   * Show discovery notification (queued — max 1 visible at a time)
   */
  _showNotification(type, name, xpReward = 0) {
    // Queue the notification
    if (!this._notifQueue) this._notifQueue = [];
    if (!this._notifActive) this._notifActive = false;
    
    this._notifQueue.push({ type, name, xpReward });
    
    // Only show if nothing is currently displayed
    if (!this._notifActive) {
      this._showNextNotification();
    }
  }
  
  _showNextNotification() {
    if (!this._notifQueue || this._notifQueue.length === 0) {
      this._notifActive = false;
      return;
    }
    
    this._notifActive = true;
    const { type, name, xpReward } = this._notifQueue.shift();
    
    const notification = document.createElement('div');
    notification.style.cssText = `
      padding: 12px 24px;
      background: linear-gradient(to right, rgba(30, 25, 20, 0.95), rgba(40, 35, 25, 0.95), rgba(30, 25, 20, 0.95));
      border: 2px solid rgba(255, 200, 100, 0.6);
      border-radius: 4px;
      color: #ffd088;
      font-family: 'Cinzel', serif;
      text-align: center;
      opacity: 0;
      transform: translateY(-20px) scale(0.9);
      transition: all 0.4s ease;
      box-shadow: 0 0 20px rgba(255, 180, 0, 0.3);
    `;
    
    let icon = '🗺️';
    let title = 'Location Discovered';
    
    switch (type) {
      case 'region':
        icon = '🌍';
        title = 'New Region Discovered';
        break;
      case 'village':
        icon = '🏠';
        title = 'Village Discovered';
        break;
      case 'dungeon':
        icon = '💀';
        title = 'Dungeon Discovered';
        break;
      case 'cave':
        icon = '🕳️';
        title = 'Cave Discovered';
        break;
      case 'ruins':
        icon = '🏛️';
        title = 'Ancient Ruins Discovered';
        break;
      case 'bonfire':
      case 'crucible':
        icon = '🔥';
        title = 'Rest Point Discovered';
        break;
      case 'boss_arena':
        icon = '⚔️';
        title = 'Boss Arena Discovered';
        break;
      case 'landmark':
        icon = '🗿';
        title = 'Landmark Discovered';
        break;
      case 'region_complete':
        icon = '✨';
        title = 'Region Fully Explored';
        break;
      case 'world_complete':
        icon = '🏆';
        title = 'World Fully Explored';
        break;
    }
    
    // Show remaining queue count if > 0
    const queueRemaining = this._notifQueue.length;
    const queueBadge = queueRemaining > 0 
      ? `<div style="font-size: 10px; color: #886644; margin-top: 4px;">+${queueRemaining} more</div>` 
      : '';
    
    notification.innerHTML = `
      <div style="font-size: 24px; margin-bottom: 4px;">${icon}</div>
      <div style="font-size: 12px; color: #a08060; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;">${title}</div>
      <div style="font-size: 16px; color: #fff; text-shadow: 0 0 10px rgba(255, 200, 100, 0.5);">${name}</div>
      ${xpReward > 0 ? `<div style="font-size: 11px; color: #8aff8a; margin-top: 6px;">+${xpReward} XP</div>` : ''}
      ${queueBadge}
    `;
    
    // Clear container before showing (only 1 at a time)
    this.notificationContainer.innerHTML = '';
    this.notificationContainer.appendChild(notification);
    
    // Animate in
    requestAnimationFrame(() => {
      notification.style.opacity = '1';
      notification.style.transform = 'translateY(0) scale(1)';
    });
    
    // Play discovery sound if available
    this._playDiscoverySound(type);
    
    // Auto-dismiss after 3 seconds, then show next
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transform = 'translateY(-20px) scale(0.9)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
        // Show next queued notification
        this._showNextNotification();
      }, 400);
    }, 3000);
  }
  
  /**
   * Play discovery sound
   */
  _playDiscoverySound(type) {
    // Would integrate with audio system
    // For now, just log
    // console.log(`[Discovery] Sound: ${type}`);
  }
  
  /**
   * Update method (called from game loop)
   */
  update(deltaTime) {
    const now = performance.now();
    if (now - this.lastUpdateTime < this.updateInterval) return;
    this.lastUpdateTime = now;
    
    if (!this.player) return;
    
    // Grace period: skip discovery checks for first 5 seconds to avoid
    // notification spam during spawn (player falls through multiple regions)
    if (!this._startTime) this._startTime = now;
    const elapsed = now - this._startTime;
    
    // Update visible chunks and check for discoveries
    this._revealAroundPlayer();
    if (elapsed < 5000) return; // Skip POI/region checks during grace period
    this._checkPOIDiscoveries();
    this._checkRegionDiscoveries();
    this._updateRegionProgress();
  }
  
  /**
   * Reveal chunks around player
   */
  _revealAroundPlayer() {
    if (!this.player) return;
    
    const playerX = this.player.position.x;
    const playerZ = this.player.position.z;
    
    // Clear current visibility
    const oldVisible = new Set(this.currentlyVisibleChunks);
    this.currentlyVisibleChunks.clear();
    
    // Calculate chunk range to check
    const minChunkX = Math.floor((playerX - this.revealRadius) / this.chunkSize);
    const maxChunkX = Math.ceil((playerX + this.revealRadius) / this.chunkSize);
    const minChunkZ = Math.floor((playerZ - this.revealRadius) / this.chunkSize);
    const maxChunkZ = Math.ceil((playerZ + this.revealRadius) / this.chunkSize);
    
    let newChunksRevealed = 0;
    
    for (let cx = minChunkX; cx <= maxChunkX; cx++) {
      for (let cz = minChunkZ; cz <= maxChunkZ; cz++) {
        const worldX = cx * this.chunkSize + this.chunkSize / 2;
        const worldZ = cz * this.chunkSize + this.chunkSize / 2;
        
        // Check if within reveal radius
        const dx = worldX - playerX;
        const dz = worldZ - playerZ;
        const dist = Math.sqrt(dx * dx + dz * dz);
        
        if (dist <= this.revealRadius) {
          const key = `${cx},${cz}`;
          this.currentlyVisibleChunks.add(key);
          
          // Check if newly revealed
          if (!this.exploredChunks.has(key)) {
            this.exploredChunks.set(key, 0); // Currently visible
            newChunksRevealed++;
            this.totalChunksExplored++;
          } else {
            // Update to currently visible
            this.exploredChunks.set(key, 0);
          }
        }
      }
    }
    
    // Mark old visible chunks as "previously seen"
    for (const key of oldVisible) {
      if (!this.currentlyVisibleChunks.has(key)) {
        this.exploredChunks.set(key, 0.5); // Previously seen
      }
    }
    
    // Award XP for new chunks
    if (newChunksRevealed > 0 && this.gameManager) {
      const xp = newChunksRevealed * DISCOVERY_REWARDS.chunk;
      // this.gameManager.addXP?.(xp); // Silent XP for chunk exploration
    }
  }
  
  /**
   * Check for POI discoveries near player
   */
  _checkPOIDiscoveries() {
    if (!this.player) return;
    
    const playerX = this.player.position.x;
    const playerZ = this.player.position.z;
    const discoveryRadius = 30; // Closer than reveal radius
    
    // Check villages
    if (this.villageManager && this.villageManager.getVillagePositions) {
      const villages = this.villageManager.getVillagePositions();
      villages.forEach(village => {
        const poiId = `village_${village.x}_${village.z}`;
        if (this.discoveredPOIs.has(poiId)) return;
        
        const dx = village.x - playerX;
        const dz = village.z - playerZ;
        if (Math.sqrt(dx * dx + dz * dz) < discoveryRadius) {
          this._discoverPOI('village', village.name || 'Village', poiId);
          
          // Auto-reveal area around village
          this._revealArea(village.x, village.z, 50);
        }
      });
    }
    
    // Check dungeons
    if (this.dungeonManager && this.dungeonManager.getDungeonEntrances) {
      const dungeons = this.dungeonManager.getDungeonEntrances();
      dungeons.forEach(dungeon => {
        const poiId = `dungeon_${dungeon.x}_${dungeon.z}`;
        if (this.discoveredPOIs.has(poiId)) return;
        
        const dx = dungeon.x - playerX;
        const dz = dungeon.z - playerZ;
        if (Math.sqrt(dx * dx + dz * dz) < discoveryRadius) {
          this._discoverPOI('dungeon', dungeon.name || 'Dungeon', poiId);
        }
      });
    }
    
    // Check bonfires/crucibles via gameManager
    if (this.gameManager && this.gameManager.getDiscoveredBonfires) {
      const bonfires = this.gameManager.getDiscoveredBonfires();
      bonfires.forEach(bonfire => {
        const poiId = `bonfire_${bonfire.x}_${bonfire.z}`;
        if (this.discoveredPOIs.has(poiId)) return;
        
        const dx = bonfire.x - playerX;
        const dz = bonfire.z - playerZ;
        if (Math.sqrt(dx * dx + dz * dz) < discoveryRadius) {
          this._discoverPOI(bonfire.type || 'bonfire', bonfire.name || 'Bonfire', poiId);
        }
      });
    }
  }
  
  /**
   * Discover a POI
   */
  _discoverPOI(type, name, poiId) {
    if (this.discoveredPOIs.has(poiId)) return;
    
    this.discoveredPOIs.add(poiId);
    this.totalPOIsDiscovered++;
    
    // Get XP reward
    const xpKey = `poi_${type}`;
    const xpReward = DISCOVERY_REWARDS[xpKey] || 25;
    
    // Award XP
    if (this.gameManager && this.gameManager.addXP) {
      this.gameManager.addXP(xpReward);
    }
    
    // Show notification
    this._showNotification(type, name, xpReward);
    
    // Trigger callback
    if (this.onDiscovery) {
      this.onDiscovery({ type, name, poiId, xpReward });
    }
    
    // Check for exploration quests
    if (this.questManager && this.questManager.checkDiscovery) {
      this.questManager.checkDiscovery(type, name, poiId);
    }
  }
  
  /**
   * Reveal area around a point
   */
  _revealArea(centerX, centerZ, radius) {
    const minChunkX = Math.floor((centerX - radius) / this.chunkSize);
    const maxChunkX = Math.ceil((centerX + radius) / this.chunkSize);
    const minChunkZ = Math.floor((centerZ - radius) / this.chunkSize);
    const maxChunkZ = Math.ceil((centerZ + radius) / this.chunkSize);
    
    for (let cx = minChunkX; cx <= maxChunkX; cx++) {
      for (let cz = minChunkZ; cz <= maxChunkZ; cz++) {
        const worldX = cx * this.chunkSize + this.chunkSize / 2;
        const worldZ = cz * this.chunkSize + this.chunkSize / 2;
        
        const dx = worldX - centerX;
        const dz = worldZ - centerZ;
        if (Math.sqrt(dx * dx + dz * dz) <= radius) {
          const key = `${cx},${cz}`;
          if (!this.exploredChunks.has(key)) {
            this.exploredChunks.set(key, 0.5); // Mark as seen
            this.totalChunksExplored++;
          }
        }
      }
    }
  }
  
  /**
   * Check for region discoveries
   */
  _checkRegionDiscoveries() {
    if (!this.player) return;
    
    const playerX = this.player.position.x;
    const playerZ = this.player.position.z;
    
    REGIONS.forEach(region => {
      if (this.discoveredRegions.has(region.id)) return;
      
      const dx = region.center.x - playerX;
      const dz = region.center.z - playerZ;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      // Discover when entering region
      if (dist < region.radius) {
        this.discoveredRegions.set(region.id, {
          firstVisit: Date.now(),
          percentExplored: 0
        });
        
        const xpReward = DISCOVERY_REWARDS.region_first;
        
        if (this.gameManager && this.gameManager.addXP) {
          this.gameManager.addXP(xpReward);
        }
        
        this._showNotification('region', region.name, xpReward);
      }
    });
  }
  
  /**
   * Update region exploration progress
   */
  _updateRegionProgress() {
    REGIONS.forEach(region => {
      if (!this.discoveredRegions.has(region.id)) return;
      
      // Count explored chunks in region
      let exploredInRegion = 0;
      let totalInRegion = 0;
      
      const minChunkX = Math.floor((region.center.x - region.radius) / this.chunkSize);
      const maxChunkX = Math.ceil((region.center.x + region.radius) / this.chunkSize);
      const minChunkZ = Math.floor((region.center.z - region.radius) / this.chunkSize);
      const maxChunkZ = Math.ceil((region.center.z + region.radius) / this.chunkSize);
      
      for (let cx = minChunkX; cx <= maxChunkX; cx++) {
        for (let cz = minChunkZ; cz <= maxChunkZ; cz++) {
          const worldX = cx * this.chunkSize + this.chunkSize / 2;
          const worldZ = cz * this.chunkSize + this.chunkSize / 2;
          
          const dx = worldX - region.center.x;
          const dz = worldZ - region.center.z;
          if (Math.sqrt(dx * dx + dz * dz) <= region.radius) {
            totalInRegion++;
            const key = `${cx},${cz}`;
            if (this.exploredChunks.has(key)) {
              exploredInRegion++;
            }
          }
        }
      }
      
      const percentExplored = totalInRegion > 0 ? (exploredInRegion / totalInRegion) * 100 : 0;
      
      const regionData = this.discoveredRegions.get(region.id);
      regionData.percentExplored = percentExplored;
      
      // Check for region completion
      if (percentExplored >= 100 && !this.completedRegions.has(region.id)) {
        this.completedRegions.add(region.id);
        
        const xpReward = DISCOVERY_REWARDS.region_complete;
        
        if (this.gameManager && this.gameManager.addXP) {
          this.gameManager.addXP(xpReward);
        }
        
        this._showNotification('region_complete', region.name, xpReward);
        
        // Check for world completion
        if (this.completedRegions.size >= REGIONS.length) {
          this._onWorldComplete();
        }
      }
    });
  }
  
  /**
   * Handle world completion
   */
  _onWorldComplete() {
    const xpReward = DISCOVERY_REWARDS.world_complete;
    
    if (this.gameManager && this.gameManager.addXP) {
      this.gameManager.addXP(xpReward);
    }
    
    this._showNotification('world_complete', 'The Ashen Lands', xpReward);
    
    // Could trigger achievement or special reward
    if (this.gameManager && this.gameManager.unlockAchievement) {
      this.gameManager.unlockAchievement('world_explorer');
    }
  }
  
  /**
   * Get fog level at world position
   * Returns: 1 = unexplored, 0.5 = previously seen, 0 = currently visible
   */
  getFogLevel(worldX, worldZ) {
    const chunkX = Math.floor(worldX / this.chunkSize);
    const chunkZ = Math.floor(worldZ / this.chunkSize);
    const key = `${chunkX},${chunkZ}`;
    
    if (this.currentlyVisibleChunks.has(key)) {
      return 0; // Currently visible
    }
    
    if (this.exploredChunks.has(key)) {
      return this.exploredChunks.get(key);
    }
    
    return 1; // Unexplored
  }
  
  /**
   * Check if region is discovered
   */
  isRegionDiscovered(regionId) {
    return this.discoveredRegions.has(regionId);
  }
  
  /**
   * Get exploration stats
   */
  getExplorationStats() {
    const totalPercent = this.totalChunks > 0 
      ? (this.totalChunksExplored / this.totalChunks) * 100 
      : 0;
    
    const regionStats = [];
    REGIONS.forEach(region => {
      const data = this.discoveredRegions.get(region.id);
      regionStats.push({
        id: region.id,
        name: region.name,
        discovered: data !== undefined,
        percentExplored: data?.percentExplored || 0,
        complete: this.completedRegions.has(region.id)
      });
    });
    
    return {
      totalPercent: Math.min(100, totalPercent),
      chunksExplored: this.totalChunksExplored,
      totalChunks: this.totalChunks,
      poisDiscovered: this.totalPOIsDiscovered,
      regionsExplored: this.discoveredRegions.size,
      totalRegions: REGIONS.length,
      regionsComplete: this.completedRegions.size,
      regions: regionStats
    };
  }
  
  /**
   * Get region info by player position
   */
  getCurrentRegion() {
    if (!this.player) return null;
    
    const playerX = this.player.position.x;
    const playerZ = this.player.position.z;
    
    let closest = null;
    let closestDist = Infinity;
    
    REGIONS.forEach(region => {
      const dx = region.center.x - playerX;
      const dz = region.center.z - playerZ;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      if (dist < region.radius && dist < closestDist) {
        closest = region;
        closestDist = dist;
      }
    });
    
    return closest;
  }
  
  /**
   * Manually mark POI as discovered (for loading, quests, etc.)
   */
  markPOIDiscovered(type, name, x, z, silent = false) {
    const poiId = `${type}_${x}_${z}`;
    
    if (this.discoveredPOIs.has(poiId)) return;
    
    this.discoveredPOIs.add(poiId);
    this.totalPOIsDiscovered++;
    
    if (!silent) {
      const xpKey = `poi_${type}`;
      const xpReward = DISCOVERY_REWARDS[xpKey] || 25;
      this._showNotification(type, name, xpReward);
    }
  }
  
  /**
   * Reveal entire map (cheat/debug)
   */
  revealAll() {
    const minChunkX = Math.floor(this.worldBounds.minX / this.chunkSize);
    const maxChunkX = Math.ceil(this.worldBounds.maxX / this.chunkSize);
    const minChunkZ = Math.floor(this.worldBounds.minZ / this.chunkSize);
    const maxChunkZ = Math.ceil(this.worldBounds.maxZ / this.chunkSize);
    
    for (let cx = minChunkX; cx <= maxChunkX; cx++) {
      for (let cz = minChunkZ; cz <= maxChunkZ; cz++) {
        const key = `${cx},${cz}`;
        if (!this.exploredChunks.has(key)) {
          this.exploredChunks.set(key, 0.5);
          this.totalChunksExplored++;
        }
      }
    }
    
    // Discover all regions
    REGIONS.forEach(region => {
      if (!this.discoveredRegions.has(region.id)) {
        this.discoveredRegions.set(region.id, {
          firstVisit: Date.now(),
          percentExplored: 100
        });
      }
    });
    
    console.log('[DiscoveryManager] Map fully revealed');
  }
  
  /**
   * Get save data
   */
  getSaveData() {
    // Convert explored chunks to array for JSON
    const exploredArray = [];
    this.exploredChunks.forEach((fogLevel, key) => {
      exploredArray.push({ key, fogLevel });
    });
    
    // Convert regions map
    const regionsArray = [];
    this.discoveredRegions.forEach((data, id) => {
      regionsArray.push({ id, ...data });
    });
    
    return {
      exploredChunks: exploredArray,
      discoveredPOIs: Array.from(this.discoveredPOIs),
      discoveredRegions: regionsArray,
      completedRegions: Array.from(this.completedRegions),
      totalChunksExplored: this.totalChunksExplored,
      totalPOIsDiscovered: this.totalPOIsDiscovered
    };
  }
  
  /**
   * Load save data
   */
  loadSaveData(data) {
    // Clear existing
    this.exploredChunks.clear();
    this.discoveredPOIs.clear();
    this.discoveredRegions.clear();
    this.completedRegions.clear();
    this.currentlyVisibleChunks.clear();
    
    // Load explored chunks
    if (data.exploredChunks) {
      data.exploredChunks.forEach(item => {
        this.exploredChunks.set(item.key, item.fogLevel);
      });
    }
    
    // Load discovered POIs
    if (data.discoveredPOIs) {
      data.discoveredPOIs.forEach(poiId => {
        this.discoveredPOIs.add(poiId);
      });
    }
    
    // Load discovered regions
    if (data.discoveredRegions) {
      data.discoveredRegions.forEach(item => {
        this.discoveredRegions.set(item.id, {
          firstVisit: item.firstVisit,
          percentExplored: item.percentExplored
        });
      });
    }
    
    // Load completed regions
    if (data.completedRegions) {
      data.completedRegions.forEach(id => {
        this.completedRegions.add(id);
      });
    }
    
    // Restore stats
    this.totalChunksExplored = data.totalChunksExplored || this.exploredChunks.size;
    this.totalPOIsDiscovered = data.totalPOIsDiscovered || this.discoveredPOIs.size;
    
    console.log(`[DiscoveryManager] Loaded: ${this.totalChunksExplored} chunks, ${this.totalPOIsDiscovered} POIs`);
  }
  
  /**
   * Cleanup
   */
  dispose() {
    if (this.notificationContainer && this.notificationContainer.parentNode) {
      this.notificationContainer.parentNode.removeChild(this.notificationContainer);
    }
    
    if (this.notificationTimeout) {
      clearTimeout(this.notificationTimeout);
    }
  }
}

// Singleton pattern
let discoveryInstance = null;

export function createDiscoveryManager(options) {
  if (!discoveryInstance) {
    discoveryInstance = new DiscoveryManager(options);
  }
  return discoveryInstance;
}

export function getDiscoveryManager() {
  return discoveryInstance;
}
