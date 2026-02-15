import * as THREE from 'three';

/**
 * MinimapManager - Real-time minimap overlay
 * Phase 27: Minimap & World Map
 * 
 * Features:
 * - 150px circular minimap in top-right corner
 * - Top-down orthographic view
 * - Player arrow indicator (rotates with camera)
 * - Configurable zoom levels (50m, 100m, 200m)
 * - Real-time terrain coloring by biome
 * - North indicator
 * - M key toggle visibility
 * - Performance optimized: only renders nearby terrain
 */

// Biome color palette for minimap
const BIOME_COLORS = {
  castle: '#555555',
  safe_meadow: '#7aaa60',
  grassland: '#5a8a40',
  dense_woods: '#3a6030',
  dark_frontier: '#4a5a40',
  water: '#3a5a8a',
  village: '#8a7a60',
  ruins: '#6a6a6a',
  cave: '#3a3a40',
  dungeon: '#2a2a35',
};

// Icon types for phase 2 (minimap-icons)
const ICON_TYPES = {
  player: { color: '#ffffff', size: 8, shape: 'arrow' },
  enemy: { color: '#ff4040', size: 4, shape: 'circle' },
  npc_friendly: { color: '#40ff40', size: 5, shape: 'circle' },
  npc_quest: { color: '#ffdd00', size: 6, shape: 'diamond' },
  quest_objective: { color: '#ffd700', size: 7, shape: 'star' },
  village: { color: '#d4a56a', size: 8, shape: 'house' },
  dungeon: { color: '#8040ff', size: 7, shape: 'skull' },
  gathering: { color: '#40c0c0', size: 4, shape: 'circle' },
  boss: { color: '#ff0000', size: 10, shape: 'skull' },
  waypoint: { color: '#00ffff', size: 6, shape: 'marker' },
  bonfire: { color: '#ff8800', size: 6, shape: 'flame' },
  crucible: { color: '#ffaa00', size: 6, shape: 'diamond' },
};

export class MinimapManager {
  constructor(options = {}) {
    this.enabled = true;
    this.visible = true;
    
    // Minimap dimensions
    this.size = options.size || 150;
    this.padding = options.padding || 15;
    
    // Zoom levels (radius in world units)
    this.zoomLevels = [50, 100, 200];
    this.currentZoomIndex = 1; // Default 100m radius
    this.zoomRadius = this.zoomLevels[this.currentZoomIndex];
    
    // Terrain sampling resolution
    this.gridResolution = 64; // Sample points per axis
    this.sampleCache = new Map(); // Cache terrain samples
    this.cacheChunkSize = 10; // Cache grid chunk size
    
    // References (set during init)
    this.terrain = null;
    this.player = null;
    this.camera = null;
    this.enemyManager = null;
    this.npcManager = null;
    this.questManager = null;
    this.villageManager = null;
    this.dungeonManager = null;
    this.gatheringManager = null;
    this.bossSpawner = null;
    
    // Icon sources to render
    this.iconSources = [];
    this.customWaypoint = null; // Player-placed waypoint
    
    // Create DOM elements
    this._createMinimapDOM();
    
    // Set up key bindings
    this._setupKeyBindings();
    
    // Animation frame tracking
    this.lastUpdateTime = 0;
    this.updateInterval = 50; // Update every 50ms (20 FPS for minimap)
  }
  
  /**
   * Initialize with game systems
   */
  init(systems) {
    this.terrain = systems.terrain;
    this.player = systems.player;
    this.camera = systems.camera;
    this.enemyManager = systems.enemyManager || null;
    this.npcManager = systems.npcManager || null;
    this.questManager = systems.questManager || null;
    this.villageManager = systems.villageManager || null;
    this.dungeonManager = systems.dungeonManager || null;
    this.gatheringManager = systems.gatheringManager || null;
    this.bossSpawner = systems.bossSpawner || null;
    
    // Pre-render initial terrain
    if (this.player && this.terrain) {
      this._renderTerrain();
    }
  }
  
  /**
   * Create minimap DOM structure
   */
  _createMinimapDOM() {
    // Container
    this.container = document.createElement('div');
    this.container.id = 'minimap-container';
    this.container.style.cssText = `
      position: fixed;
      top: ${this.padding}px;
      right: ${this.padding}px;
      width: ${this.size}px;
      height: ${this.size}px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid rgba(30, 20, 10, 0.9);
      box-shadow: 
        0 0 15px rgba(0, 0, 0, 0.6),
        inset 0 0 20px rgba(0, 0, 0, 0.4),
        0 0 0 2px rgba(180, 140, 80, 0.4);
      background: rgba(20, 15, 10, 0.85);
      z-index: 1000;
      pointer-events: auto;
      user-select: none;
    `;
    
    // Terrain canvas (bottom layer)
    this.terrainCanvas = document.createElement('canvas');
    this.terrainCanvas.width = this.size * 2; // Higher res for quality
    this.terrainCanvas.height = this.size * 2;
    this.terrainCanvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
    `;
    this.terrainCtx = this.terrainCanvas.getContext('2d');
    
    // Icons canvas (middle layer)
    this.iconsCanvas = document.createElement('canvas');
    this.iconsCanvas.width = this.size * 2;
    this.iconsCanvas.height = this.size * 2;
    this.iconsCanvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      pointer-events: none;
    `;
    this.iconsCtx = this.iconsCanvas.getContext('2d');
    
    // Player indicator canvas (top layer)
    this.playerCanvas = document.createElement('canvas');
    this.playerCanvas.width = this.size * 2;
    this.playerCanvas.height = this.size * 2;
    this.playerCanvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      pointer-events: none;
    `;
    this.playerCtx = this.playerCanvas.getContext('2d');
    
    // North indicator
    this.northIndicator = document.createElement('div');
    this.northIndicator.style.cssText = `
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      color: #ffd700;
      font-size: 12px;
      font-weight: bold;
      text-shadow: 0 0 3px black, 0 0 5px black;
      pointer-events: none;
      z-index: 10;
    `;
    this.northIndicator.textContent = 'N';
    
    // Zoom indicator
    this.zoomIndicator = document.createElement('div');
    this.zoomIndicator.style.cssText = `
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      color: rgba(255, 255, 255, 0.7);
      font-size: 10px;
      text-shadow: 0 0 3px black;
      pointer-events: none;
      z-index: 10;
    `;
    this._updateZoomIndicator();
    
    // Compass ring (decorative)
    this.compassRing = document.createElement('div');
    this.compassRing.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid rgba(180, 140, 80, 0.3);
      pointer-events: none;
      box-sizing: border-box;
    `;
    
    // Legend toggle button
    this.legendButton = document.createElement('div');
    this.legendButton.style.cssText = `
      position: absolute;
      top: 4px;
      right: 4px;
      width: 16px;
      height: 16px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 3px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      color: #fff;
      z-index: 15;
    `;
    this.legendButton.textContent = '?';
    this.legendButton.title = 'Toggle Legend';
    this.legendButton.addEventListener('click', (e) => {
      e.stopPropagation();
      this._toggleLegend();
    });
    
    // Assemble
    this.container.appendChild(this.terrainCanvas);
    this.container.appendChild(this.iconsCanvas);
    this.container.appendChild(this.playerCanvas);
    this.container.appendChild(this.compassRing);
    this.container.appendChild(this.northIndicator);
    this.container.appendChild(this.zoomIndicator);
    this.container.appendChild(this.legendButton);
    
    // Legend panel (hidden by default)
    this._createLegendPanel();
    
    document.body.appendChild(this.container);
    
    // Click to zoom
    this.container.addEventListener('click', (e) => {
      if (e.target === this.legendButton) return;
      this._cycleZoom();
    });
    
    // Right-click to place waypoint
    this.container.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this._placeWaypoint(e);
    });
  }
  
  /**
   * Create legend panel
   */
  _createLegendPanel() {
    this.legendPanel = document.createElement('div');
    this.legendPanel.style.cssText = `
      position: absolute;
      top: ${this.padding}px;
      right: ${this.size + this.padding + 10}px;
      background: rgba(20, 15, 10, 0.95);
      border: 2px solid rgba(180, 140, 80, 0.6);
      border-radius: 8px;
      padding: 10px 12px;
      color: #ddd;
      font-size: 11px;
      z-index: 999;
      display: none;
      min-width: 120px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    `;
    
    const title = document.createElement('div');
    title.style.cssText = `
      font-weight: bold;
      color: #ffd700;
      margin-bottom: 8px;
      border-bottom: 1px solid rgba(180, 140, 80, 0.4);
      padding-bottom: 4px;
    `;
    title.textContent = 'Map Legend';
    this.legendPanel.appendChild(title);
    
    const legendItems = [
      { icon: ICON_TYPES.player, label: 'You' },
      { icon: ICON_TYPES.enemy, label: 'Enemy' },
      { icon: ICON_TYPES.npc_quest, label: 'Quest NPC' },
      { icon: ICON_TYPES.quest_objective, label: 'Objective' },
      { icon: ICON_TYPES.village, label: 'Village' },
      { icon: ICON_TYPES.dungeon, label: 'Dungeon' },
      { icon: ICON_TYPES.boss, label: 'World Boss' },
      { icon: ICON_TYPES.bonfire, label: 'Bonfire' },
      { icon: ICON_TYPES.waypoint, label: 'Waypoint' },
    ];
    
    for (const item of legendItems) {
      const row = document.createElement('div');
      row.style.cssText = `
        display: flex;
        align-items: center;
        margin: 4px 0;
      `;
      
      const icon = document.createElement('span');
      icon.style.cssText = `
        display: inline-block;
        width: 12px;
        height: 12px;
        background: ${item.icon.color};
        border-radius: ${item.icon.shape === 'circle' ? '50%' : '2px'};
        margin-right: 8px;
      `;
      
      const label = document.createElement('span');
      label.textContent = item.label;
      
      row.appendChild(icon);
      row.appendChild(label);
      this.legendPanel.appendChild(row);
    }
    
    const controls = document.createElement('div');
    controls.style.cssText = `
      margin-top: 10px;
      padding-top: 8px;
      border-top: 1px solid rgba(180, 140, 80, 0.4);
      font-size: 10px;
      color: #999;
    `;
    controls.innerHTML = `
      <div><b>M</b> - Toggle map</div>
      <div><b>Click</b> - Zoom</div>
      <div><b>Right-click</b> - Waypoint</div>
    `;
    this.legendPanel.appendChild(controls);
    
    document.body.appendChild(this.legendPanel);
  }
  
  /**
   * Toggle legend visibility
   */
  _toggleLegend() {
    const isVisible = this.legendPanel.style.display !== 'none';
    this.legendPanel.style.display = isVisible ? 'none' : 'block';
  }
  
  /**
   * Set up keyboard controls
   */
  _setupKeyBindings() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'm' || e.key === 'M') {
        this.toggle();
      }
    });
  }
  
  /**
   * Toggle minimap visibility
   */
  toggle() {
    this.visible = !this.visible;
    this.container.style.display = this.visible ? 'block' : 'none';
    if (!this.visible) {
      this.legendPanel.style.display = 'none';
    }
  }
  
  /**
   * Show minimap
   */
  show() {
    this.visible = true;
    this.container.style.display = 'block';
  }
  
  /**
   * Hide minimap
   */
  hide() {
    this.visible = false;
    this.container.style.display = 'none';
    this.legendPanel.style.display = 'none';
  }
  
  /**
   * Cycle through zoom levels
   */
  _cycleZoom() {
    this.currentZoomIndex = (this.currentZoomIndex + 1) % this.zoomLevels.length;
    this.zoomRadius = this.zoomLevels[this.currentZoomIndex];
    this._updateZoomIndicator();
    // Force terrain re-render at new zoom
    this.sampleCache.clear();
    this._renderTerrain();
  }
  
  /**
   * Set specific zoom level
   */
  setZoom(radiusIndex) {
    if (radiusIndex >= 0 && radiusIndex < this.zoomLevels.length) {
      this.currentZoomIndex = radiusIndex;
      this.zoomRadius = this.zoomLevels[this.currentZoomIndex];
      this._updateZoomIndicator();
      this.sampleCache.clear();
      this._renderTerrain();
    }
  }
  
  /**
   * Update zoom indicator text
   */
  _updateZoomIndicator() {
    this.zoomIndicator.textContent = `${this.zoomRadius}m`;
  }
  
  /**
   * Place custom waypoint
   */
  _placeWaypoint(event) {
    if (!this.player) return;
    
    // Get click position relative to minimap center
    const rect = this.container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const clickX = event.clientX - rect.left - centerX;
    const clickY = event.clientY - rect.top - centerY;
    
    // Convert to world coordinates
    const scale = this.zoomRadius / (this.size / 2);
    const worldOffsetX = clickX * scale;
    const worldOffsetZ = clickY * scale;
    
    // Account for camera rotation
    const cameraAngle = this._getCameraAngle();
    const cos = Math.cos(cameraAngle);
    const sin = Math.sin(cameraAngle);
    
    const rotatedX = worldOffsetX * cos - worldOffsetZ * sin;
    const rotatedZ = worldOffsetX * sin + worldOffsetZ * cos;
    
    const playerPos = this.player.position || this.player;
    this.customWaypoint = new THREE.Vector3(
      playerPos.x + rotatedX,
      0,
      playerPos.z + rotatedZ
    );
    
    // Show feedback
    this._showWaypointFeedback();
  }
  
  /**
   * Clear custom waypoint
   */
  clearWaypoint() {
    this.customWaypoint = null;
  }
  
  /**
   * Show waypoint placement feedback
   */
  _showWaypointFeedback() {
    const feedback = document.createElement('div');
    feedback.style.cssText = `
      position: fixed;
      top: ${this.padding + this.size + 10}px;
      right: ${this.padding}px;
      background: rgba(0, 0, 0, 0.8);
      color: #00ffff;
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 12px;
      z-index: 1001;
      animation: fadeOut 2s forwards;
    `;
    feedback.textContent = 'Waypoint placed (right-click to clear)';
    document.body.appendChild(feedback);
    
    setTimeout(() => feedback.remove(), 2000);
  }
  
  /**
   * Get camera forward angle (for rotation)
   */
  _getCameraAngle() {
    if (!this.camera) return 0;
    
    // Get camera's forward direction
    const forward = new THREE.Vector3(0, 0, -1);
    forward.applyQuaternion(this.camera.quaternion);
    
    // Calculate angle from forward direction (XZ plane)
    return Math.atan2(forward.x, forward.z);
  }
  
  /**
   * Render terrain to canvas
   */
  _renderTerrain() {
    if (!this.terrain || !this.player) return;
    
    const ctx = this.terrainCtx;
    const size = this.size * 2;
    const center = size / 2;
    
    const playerPos = this.player.position || this.player;
    const playerX = playerPos.x;
    const playerZ = playerPos.z;
    
    // Clear with dark background
    ctx.fillStyle = '#1a1510';
    ctx.fillRect(0, 0, size, size);
    
    // Calculate world-to-canvas scale
    const worldRadius = this.zoomRadius;
    const scale = center / worldRadius;
    
    // Get camera rotation for north-up or camera-relative mode
    const cameraAngle = this._getCameraAngle();
    
    // Sample terrain in a grid
    const step = (worldRadius * 2) / this.gridResolution;
    
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(-cameraAngle); // Rotate map so forward is up
    
    for (let i = 0; i <= this.gridResolution; i++) {
      for (let j = 0; j <= this.gridResolution; j++) {
        const localX = (i / this.gridResolution - 0.5) * worldRadius * 2;
        const localZ = (j / this.gridResolution - 0.5) * worldRadius * 2;
        
        const worldX = playerX + localX;
        const worldZ = playerZ + localZ;
        
        // Get biome at position
        const biome = this.terrain.getBiome(worldX, worldZ);
        const height = this.terrain.getTerrainHeight(worldX, worldZ);
        
        // Check for special locations
        let color = BIOME_COLORS[biome] || BIOME_COLORS.grassland;
        
        // Heightmap shading
        const heightNorm = THREE.MathUtils.clamp((height + 10) / 40, 0, 1);
        const shade = 0.6 + heightNorm * 0.4;
        
        // Parse and apply shade
        const baseColor = this._parseColor(color);
        const shadedColor = {
          r: Math.floor(baseColor.r * shade),
          g: Math.floor(baseColor.g * shade),
          b: Math.floor(baseColor.b * shade),
        };
        
        ctx.fillStyle = `rgb(${shadedColor.r}, ${shadedColor.g}, ${shadedColor.b})`;
        
        // Draw cell
        const canvasX = localX * scale;
        const canvasY = localZ * scale;
        const cellSize = Math.ceil((worldRadius * 2 * scale) / this.gridResolution) + 1;
        
        ctx.fillRect(
          canvasX - cellSize / 2,
          canvasY - cellSize / 2,
          cellSize,
          cellSize
        );
      }
    }
    
    ctx.restore();
    
    // Apply circular mask
    this._applyCircularMask(ctx, size);
  }
  
  /**
   * Parse color string to RGB
   */
  _parseColor(colorStr) {
    if (colorStr.startsWith('#')) {
      const hex = colorStr.slice(1);
      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
      };
    }
    return { r: 100, g: 100, b: 100 };
  }
  
  /**
   * Apply circular mask to canvas
   */
  _applyCircularMask(ctx, size) {
    ctx.globalCompositeOperation = 'destination-in';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalCompositeOperation = 'source-over';
  }
  
  /**
   * Render icons (enemies, NPCs, etc.)
   */
  _renderIcons() {
    if (!this.player) return;
    
    const ctx = this.iconsCtx;
    const size = this.size * 2;
    const center = size / 2;
    
    ctx.clearRect(0, 0, size, size);
    
    const playerPos = this.player.position || this.player;
    const cameraAngle = this._getCameraAngle();
    const scale = center / this.zoomRadius;
    
    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(-cameraAngle);
    
    // Render icons from all sources
    const icons = this._collectIcons();
    
    for (const icon of icons) {
      const dx = icon.x - playerPos.x;
      const dz = icon.z - playerPos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      // Skip if too far
      if (dist > this.zoomRadius * 1.2) continue;
      
      const canvasX = dx * scale;
      const canvasY = dz * scale;
      
      // Fade at edges
      let alpha = 1;
      if (dist > this.zoomRadius * 0.8) {
        alpha = 1 - (dist - this.zoomRadius * 0.8) / (this.zoomRadius * 0.4);
      }
      
      ctx.globalAlpha = Math.max(0, alpha);
      this._drawIcon(ctx, canvasX, canvasY, icon.type, icon.size);
    }
    
    // Draw custom waypoint
    if (this.customWaypoint) {
      const dx = this.customWaypoint.x - playerPos.x;
      const dz = this.customWaypoint.z - playerPos.z;
      const canvasX = dx * scale;
      const canvasY = dz * scale;
      ctx.globalAlpha = 1;
      this._drawIcon(ctx, canvasX, canvasY, 'waypoint', 8);
    }
    
    ctx.restore();
    
    // Apply circular mask
    ctx.globalAlpha = 1;
    this._applyCircularMask(ctx, size);
  }
  
  /**
   * Collect all icons to render
   */
  _collectIcons() {
    const icons = [];
    
    // Enemies
    if (this.enemyManager && this.enemyManager.enemies) {
      for (const enemy of this.enemyManager.enemies) {
        if (!enemy.mesh || enemy.isDead) continue;
        icons.push({
          x: enemy.mesh.position.x,
          z: enemy.mesh.position.z,
          type: enemy.isBoss ? 'boss' : 'enemy',
          size: enemy.isBoss ? 10 : (enemy.threat || 1) * 3 + 3,
        });
      }
    }
    
    // NPCs
    if (this.npcManager && this.npcManager.npcs) {
      for (const npc of this.npcManager.npcs) {
        if (!npc.mesh) continue;
        const isQuestGiver = npc.hasQuest || npc.questAvailable;
        icons.push({
          x: npc.mesh.position.x,
          z: npc.mesh.position.z,
          type: isQuestGiver ? 'npc_quest' : 'npc_friendly',
          size: isQuestGiver ? 6 : 5,
        });
      }
    }
    
    // Villages
    if (this.villageManager && this.villageManager.getVillagePositions) {
      const villages = this.villageManager.getVillagePositions();
      for (const village of villages) {
        icons.push({
          x: village.x,
          z: village.z,
          type: 'village',
          size: 8,
        });
      }
    }
    
    // Dungeons
    if (this.dungeonManager && this.dungeonManager.getDungeonEntrances) {
      const dungeons = this.dungeonManager.getDungeonEntrances();
      for (const dungeon of dungeons) {
        icons.push({
          x: dungeon.x,
          z: dungeon.z,
          type: 'dungeon',
          size: 7,
        });
      }
    }
    
    // Quest objectives
    if (this.questManager && this.questManager.getActiveObjectives) {
      const objectives = this.questManager.getActiveObjectives();
      for (const obj of objectives) {
        if (obj.position) {
          icons.push({
            x: obj.position.x,
            z: obj.position.z,
            type: 'quest_objective',
            size: 7,
          });
        }
      }
    }
    
    // Bonfires/crucibles
    if (this.bossSpawner && this.bossSpawner.getDiscoveredBonfires) {
      const bonfires = this.bossSpawner.getDiscoveredBonfires();
      for (const bonfire of bonfires) {
        icons.push({
          x: bonfire.x,
          z: bonfire.z,
          type: 'bonfire',
          size: 6,
        });
      }
    }
    
    // Gathering nodes (optional - can be toggled)
    if (this.showGatheringNodes && this.gatheringManager && this.gatheringManager.getActiveNodes) {
      const nodes = this.gatheringManager.getActiveNodes();
      for (const node of nodes) {
        icons.push({
          x: node.x,
          z: node.z,
          type: 'gathering',
          size: 4,
        });
      }
    }
    
    return icons;
  }
  
  /**
   * Draw individual icon
   */
  _drawIcon(ctx, x, y, type, size) {
    const iconDef = ICON_TYPES[type] || ICON_TYPES.enemy;
    ctx.fillStyle = iconDef.color;
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1;
    
    switch (iconDef.shape) {
      case 'circle':
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        break;
        
      case 'diamond':
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x + size, y);
        ctx.lineTo(x, y + size);
        ctx.lineTo(x - size, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;
        
      case 'star':
        this._drawStar(ctx, x, y, size, 5);
        break;
        
      case 'skull':
        // Simplified skull shape
        ctx.beginPath();
        ctx.arc(x, y - size * 0.2, size * 0.7, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillRect(x - size * 0.3, y + size * 0.2, size * 0.6, size * 0.5);
        break;
        
      case 'house':
        // House shape
        ctx.beginPath();
        ctx.moveTo(x - size * 0.6, y + size * 0.4);
        ctx.lineTo(x - size * 0.6, y - size * 0.2);
        ctx.lineTo(x, y - size * 0.7);
        ctx.lineTo(x + size * 0.6, y - size * 0.2);
        ctx.lineTo(x + size * 0.6, y + size * 0.4);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;
        
      case 'flame':
        // Flame shape
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.quadraticCurveTo(x + size, y - size * 0.3, x + size * 0.5, y + size * 0.5);
        ctx.quadraticCurveTo(x, y + size * 0.2, x - size * 0.5, y + size * 0.5);
        ctx.quadraticCurveTo(x - size, y - size * 0.3, x, y - size);
        ctx.fill();
        ctx.stroke();
        break;
        
      case 'marker':
        // Waypoint marker (pin shape)
        ctx.beginPath();
        ctx.arc(x, y - size * 0.5, size * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x - size * 0.4, y);
        ctx.lineTo(x, y + size);
        ctx.lineTo(x + size * 0.4, y);
        ctx.fill();
        ctx.stroke();
        break;
        
      case 'arrow':
      default:
        // Default arrow shape
        ctx.beginPath();
        ctx.moveTo(x, y - size);
        ctx.lineTo(x + size * 0.6, y + size);
        ctx.lineTo(x, y + size * 0.5);
        ctx.lineTo(x - size * 0.6, y + size);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        break;
    }
  }
  
  /**
   * Draw star shape
   */
  _drawStar(ctx, x, y, size, points) {
    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
      const angle = (i * Math.PI) / points - Math.PI / 2;
      const r = i % 2 === 0 ? size : size * 0.5;
      const px = x + Math.cos(angle) * r;
      const py = y + Math.sin(angle) * r;
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }
  
  /**
   * Render player indicator (always on top)
   */
  _renderPlayer() {
    const ctx = this.playerCtx;
    const size = this.size * 2;
    const center = size / 2;
    
    ctx.clearRect(0, 0, size, size);
    
    // Player is always at center
    // Draw player arrow pointing up (forward direction)
    ctx.save();
    ctx.translate(center, center);
    
    // Player indicator
    const arrowSize = 12;
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(0, -arrowSize);
    ctx.lineTo(arrowSize * 0.6, arrowSize * 0.6);
    ctx.lineTo(0, arrowSize * 0.2);
    ctx.lineTo(-arrowSize * 0.6, arrowSize * 0.6);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    
    // Glow effect
    ctx.shadowColor = '#ffffff';
    ctx.shadowBlur = 5;
    ctx.fill();
    ctx.shadowBlur = 0;
    
    ctx.restore();
  }
  
  /**
   * Main update loop
   */
  update(delta) {
    if (!this.visible || !this.enabled || !this.player) return;
    
    const now = performance.now();
    if (now - this.lastUpdateTime < this.updateInterval) return;
    this.lastUpdateTime = now;
    
    // Update all layers
    this._renderTerrain();
    this._renderIcons();
    this._renderPlayer();
  }
  
  /**
   * Add icon source (for custom icons)
   */
  addIconSource(source) {
    this.iconSources.push(source);
  }
  
  /**
   * Remove icon source
   */
  removeIconSource(source) {
    const idx = this.iconSources.indexOf(source);
    if (idx >= 0) this.iconSources.splice(idx, 1);
  }
  
  /**
   * Toggle gathering nodes visibility
   */
  toggleGatheringNodes() {
    this.showGatheringNodes = !this.showGatheringNodes;
  }
  
  /**
   * Get distance to waypoint
   */
  getWaypointDistance() {
    if (!this.customWaypoint || !this.player) return null;
    const playerPos = this.player.position || this.player;
    const dx = this.customWaypoint.x - playerPos.x;
    const dz = this.customWaypoint.z - playerPos.z;
    return Math.sqrt(dx * dx + dz * dz);
  }
  
  /**
   * Clean up
   */
  dispose() {
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    if (this.legendPanel && this.legendPanel.parentNode) {
      this.legendPanel.parentNode.removeChild(this.legendPanel);
    }
  }
}

// Singleton pattern
let minimapInstance = null;

export function createMinimapManager(options) {
  if (!minimapInstance) {
    minimapInstance = new MinimapManager(options);
  }
  return minimapInstance;
}

export function getMinimapManager() {
  return minimapInstance;
}
