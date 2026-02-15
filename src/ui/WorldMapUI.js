/**
 * WorldMapUI - Full-screen world map overlay
 * Phase 27: Minimap & World Map
 * 
 * Features:
 * - Full-screen map overlay (Tab key toggle)
 * - Pan with mouse drag or WASD
 * - Zoom with scroll wheel (4 levels)
 * - Show all discovered terrain with fog of war
 * - Current player position highlighted
 * - Region names displayed
 * - Filter buttons (quests, NPCs, dungeons, etc)
 * - Search function for locations
 * - Close with Tab or Escape
 */

// Biome color palette matching MinimapManager
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
  default: '#4a5a40'
};

// Region definitions with names and approximate centers
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

// Icon definitions for map markers
const MAP_ICONS = {
  player: { emoji: '▲', color: '#00ff88', size: 16 },
  quest: { emoji: '!', color: '#ffd700', size: 14 },
  quest_complete: { emoji: '?', color: '#00ff00', size: 14 },
  npc: { emoji: '●', color: '#40ff40', size: 10 },
  village: { emoji: '🏠', color: '#d4a56a', size: 14 },
  dungeon: { emoji: '💀', color: '#8040ff', size: 14 },
  boss: { emoji: '👹', color: '#ff0000', size: 16 },
  bonfire: { emoji: '🔥', color: '#ff8800', size: 12 },
  crucible: { emoji: '✦', color: '#ffaa00', size: 12 },
  gathering: { emoji: '◆', color: '#40c0c0', size: 8 },
  waypoint: { emoji: '📍', color: '#00ffff', size: 14 },
  cave: { emoji: '⬤', color: '#3a3a40', size: 10 },
  ruins: { emoji: '▣', color: '#6a6a6a', size: 10 },
};

// Filter categories
const FILTER_CATEGORIES = [
  { id: 'quests', label: 'Quests', icon: '!', types: ['quest', 'quest_complete'] },
  { id: 'npcs', label: 'NPCs', icon: '👤', types: ['npc'] },
  { id: 'villages', label: 'Villages', icon: '🏠', types: ['village'] },
  { id: 'dungeons', label: 'Dungeons', icon: '💀', types: ['dungeon', 'cave'] },
  { id: 'bonfires', label: 'Bonfires', icon: '🔥', types: ['bonfire', 'crucible'] },
  { id: 'gathering', label: 'Resources', icon: '◆', types: ['gathering'] },
  { id: 'bosses', label: 'Bosses', icon: '👹', types: ['boss'] },
];

export class WorldMapUI {
  constructor(options = {}) {
    this.visible = false;
    this.enabled = true;
    
    // World bounds (will be updated from terrain)
    this.worldBounds = {
      minX: -500,
      maxX: 500,
      minZ: -500,
      maxZ: 500
    };
    
    // Zoom levels (pixels per world unit)
    this.zoomLevels = [0.5, 1, 2, 4];
    this.currentZoomIndex = 1;
    this.zoom = this.zoomLevels[this.currentZoomIndex];
    
    // Pan offset (in world coordinates, centered on player initially)
    this.panOffset = { x: 0, z: 0 };
    this.targetPanOffset = { x: 0, z: 0 };
    
    // Drag state
    this.isDragging = false;
    this.dragStart = { x: 0, y: 0 };
    this.panStart = { x: 0, z: 0 };
    
    // WASD pan speed
    this.panSpeed = 300; // World units per second
    this.keysPressed = { w: false, a: false, s: false, d: false };
    
    // Filter state
    this.filters = {};
    FILTER_CATEGORIES.forEach(cat => {
      this.filters[cat.id] = true; // All enabled by default
    });
    
    // Search state
    this.searchQuery = '';
    this.searchResults = [];
    
    // References (set during init)
    this.terrain = null;
    this.player = null;
    this.discoveryManager = null;
    this.questManager = null;
    this.villageManager = null;
    this.dungeonManager = null;
    this.npcManager = null;
    this.enemyManager = null;
    this.bossSpawner = null;
    this.gatheringManager = null;
    this.gameManager = null;
    this.minimapManager = null;
    
    // Terrain render cache
    this.terrainCacheCanvas = null;
    this.terrainCacheDirty = true;
    this.lastTerrainRenderZoom = 0;
    
    // POI cache
    this.poiCache = [];
    this.poiCacheDirty = true;
    
    // Animation
    this.animationFrame = null;
    this.lastFrameTime = 0;
    
    // Hover state
    this.hoveredPOI = null;
    this.mouseWorldPos = { x: 0, z: 0 };
    
    // Create DOM
    this._createDOM();
    this._setupEventListeners();
  }
  
  /**
   * Initialize with game systems
   */
  init(systems) {
    this.terrain = systems.terrain;
    this.player = systems.player;
    this.discoveryManager = systems.discoveryManager || null;
    this.questManager = systems.questManager || null;
    this.villageManager = systems.villageManager || null;
    this.dungeonManager = systems.dungeonManager || null;
    this.npcManager = systems.npcManager || null;
    this.enemyManager = systems.enemyManager || null;
    this.bossSpawner = systems.bossSpawner || null;
    this.gatheringManager = systems.gatheringManager || null;
    this.gameManager = systems.gameManager || null;
    this.minimapManager = systems.minimapManager || null;
    
    // Update world bounds from terrain if available
    if (this.terrain) {
      const terrainSize = this.terrain.terrainSize || 1000;
      this.worldBounds = {
        minX: -terrainSize / 2,
        maxX: terrainSize / 2,
        minZ: -terrainSize / 2,
        maxZ: terrainSize / 2
      };
    }
    
    // Pre-render terrain cache
    this._renderTerrainCache();
  }
  
  /**
   * Create DOM structure
   */
  _createDOM() {
    // Full-screen overlay container
    this.overlay = document.createElement('div');
    this.overlay.id = 'world-map-overlay';
    this.overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(10, 8, 6, 0.95);
      z-index: 2000;
      display: none;
      opacity: 0;
      transition: opacity 0.3s ease;
      font-family: 'Cinzel', serif;
    `;
    
    // Header bar
    this._createHeader();
    
    // Main map canvas container
    this.mapContainer = document.createElement('div');
    this.mapContainer.style.cssText = `
      position: absolute;
      top: 60px;
      left: 0;
      right: 250px;
      bottom: 0;
      overflow: hidden;
      cursor: grab;
    `;
    
    // Map canvas
    this.mapCanvas = document.createElement('canvas');
    this.mapCanvas.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    `;
    this.mapCtx = this.mapCanvas.getContext('2d');
    this.mapContainer.appendChild(this.mapCanvas);
    
    // Hover tooltip
    this.tooltip = document.createElement('div');
    this.tooltip.style.cssText = `
      position: absolute;
      padding: 8px 12px;
      background: rgba(20, 15, 10, 0.95);
      border: 1px solid rgba(180, 140, 80, 0.6);
      border-radius: 4px;
      color: #e0d0b8;
      font-size: 12px;
      pointer-events: none;
      display: none;
      z-index: 100;
      max-width: 200px;
    `;
    this.mapContainer.appendChild(this.tooltip);
    
    // Sidebar for filters and legend
    this._createSidebar();
    
    // Coordinates display
    this._createCoordinatesDisplay();
    
    // Assemble
    this.overlay.appendChild(this.mapContainer);
    document.body.appendChild(this.overlay);
  }
  
  /**
   * Create header bar with title, search, and close button
   */
  _createHeader() {
    this.header = document.createElement('div');
    this.header.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 60px;
      background: linear-gradient(to bottom, rgba(40, 30, 20, 0.98), rgba(30, 20, 15, 0.95));
      border-bottom: 2px solid rgba(180, 140, 80, 0.4);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 20px;
      z-index: 10;
    `;
    
    // Title
    const title = document.createElement('div');
    title.style.cssText = `
      font-size: 24px;
      color: #ffd088;
      text-shadow: 0 0 10px rgba(255, 180, 0, 0.3);
      letter-spacing: 2px;
    `;
    title.textContent = 'WORLD MAP';
    
    // Search container
    const searchContainer = document.createElement('div');
    searchContainer.style.cssText = `
      display: flex;
      align-items: center;
      gap: 10px;
    `;
    
    this.searchInput = document.createElement('input');
    this.searchInput.type = 'text';
    this.searchInput.placeholder = 'Search locations...';
    this.searchInput.style.cssText = `
      width: 200px;
      padding: 8px 12px;
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(180, 140, 80, 0.4);
      border-radius: 4px;
      color: #e0d0b8;
      font-family: inherit;
      font-size: 14px;
      outline: none;
    `;
    this.searchInput.addEventListener('input', () => this._handleSearch());
    this.searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.searchInput.value = '';
        this._handleSearch();
        this.searchInput.blur();
      }
    });
    
    // Search results dropdown
    this.searchDropdown = document.createElement('div');
    this.searchDropdown.style.cssText = `
      position: absolute;
      top: 50px;
      width: 200px;
      max-height: 200px;
      overflow-y: auto;
      background: rgba(30, 25, 20, 0.98);
      border: 1px solid rgba(180, 140, 80, 0.4);
      border-radius: 4px;
      display: none;
      z-index: 20;
    `;
    searchContainer.style.position = 'relative';
    searchContainer.appendChild(this.searchInput);
    searchContainer.appendChild(this.searchDropdown);
    
    // Zoom controls
    const zoomControls = document.createElement('div');
    zoomControls.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
    `;
    
    const zoomOut = document.createElement('button');
    zoomOut.textContent = '−';
    zoomOut.style.cssText = this._getButtonStyle();
    zoomOut.addEventListener('click', () => this._zoomOut());
    
    this.zoomLabel = document.createElement('span');
    this.zoomLabel.style.cssText = `
      color: #a0a0a0;
      font-size: 12px;
      min-width: 40px;
      text-align: center;
    `;
    this._updateZoomLabel();
    
    const zoomIn = document.createElement('button');
    zoomIn.textContent = '+';
    zoomIn.style.cssText = this._getButtonStyle();
    zoomIn.addEventListener('click', () => this._zoomIn());
    
    zoomControls.appendChild(zoomOut);
    zoomControls.appendChild(this.zoomLabel);
    zoomControls.appendChild(zoomIn);
    
    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = `
      ${this._getButtonStyle()}
      font-size: 18px;
      width: 36px;
      height: 36px;
    `;
    closeBtn.addEventListener('click', () => this.hide());
    
    // Right side controls
    const rightControls = document.createElement('div');
    rightControls.style.cssText = `
      display: flex;
      align-items: center;
      gap: 20px;
    `;
    rightControls.appendChild(searchContainer);
    rightControls.appendChild(zoomControls);
    rightControls.appendChild(closeBtn);
    
    this.header.appendChild(title);
    this.header.appendChild(rightControls);
    this.overlay.appendChild(this.header);
  }
  
  /**
   * Create sidebar with filters and legend
   */
  _createSidebar() {
    this.sidebar = document.createElement('div');
    this.sidebar.style.cssText = `
      position: absolute;
      top: 60px;
      right: 0;
      width: 250px;
      bottom: 0;
      background: rgba(25, 20, 15, 0.95);
      border-left: 2px solid rgba(180, 140, 80, 0.3);
      padding: 20px;
      overflow-y: auto;
    `;
    
    // Filters section
    const filtersTitle = document.createElement('div');
    filtersTitle.style.cssText = `
      color: #ffd088;
      font-size: 14px;
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 1px;
    `;
    filtersTitle.textContent = 'Filters';
    this.sidebar.appendChild(filtersTitle);
    
    // Filter buttons
    this.filterButtons = {};
    FILTER_CATEGORIES.forEach(cat => {
      const btn = document.createElement('div');
      btn.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        margin-bottom: 8px;
        background: rgba(60, 50, 40, 0.6);
        border: 1px solid rgba(180, 140, 80, 0.3);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
      `;
      btn.innerHTML = `
        <span style="font-size: 16px;">${cat.icon}</span>
        <span style="color: #e0d0b8; font-size: 13px; flex: 1;">${cat.label}</span>
        <span class="filter-check" style="color: #00ff88; font-size: 12px;">✓</span>
      `;
      btn.addEventListener('click', () => this._toggleFilter(cat.id));
      btn.addEventListener('mouseenter', () => {
        btn.style.background = 'rgba(80, 70, 60, 0.6)';
      });
      btn.addEventListener('mouseleave', () => {
        btn.style.background = this.filters[cat.id] ? 'rgba(60, 50, 40, 0.6)' : 'rgba(30, 25, 20, 0.6)';
      });
      this.filterButtons[cat.id] = btn;
      this.sidebar.appendChild(btn);
    });
    
    // Legend section
    const legendTitle = document.createElement('div');
    legendTitle.style.cssText = `
      color: #ffd088;
      font-size: 14px;
      margin: 25px 0 15px 0;
      text-transform: uppercase;
      letter-spacing: 1px;
    `;
    legendTitle.textContent = 'Legend';
    this.sidebar.appendChild(legendTitle);
    
    // Legend items
    const legendItems = [
      { icon: '▲', color: '#00ff88', label: 'Your Position' },
      { icon: '!', color: '#ffd700', label: 'Active Quest' },
      { icon: '🏠', color: '#d4a56a', label: 'Village' },
      { icon: '💀', color: '#8040ff', label: 'Dungeon' },
      { icon: '🔥', color: '#ff8800', label: 'Bonfire' },
      { icon: '👹', color: '#ff0000', label: 'World Boss' },
      { icon: '◆', color: '#40c0c0', label: 'Resource Node' },
      { icon: '●', color: '#40ff40', label: 'Friendly NPC' },
    ];
    
    legendItems.forEach(item => {
      const row = document.createElement('div');
      row.style.cssText = `
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 6px 0;
        color: #a0a0a0;
        font-size: 12px;
      `;
      row.innerHTML = `
        <span style="color: ${item.color}; font-size: 14px; width: 20px; text-align: center;">${item.icon}</span>
        <span>${item.label}</span>
      `;
      this.sidebar.appendChild(row);
    });
    
    // Fog of war legend
    const fogLegend = document.createElement('div');
    fogLegend.style.cssText = `
      margin-top: 20px;
      padding-top: 15px;
      border-top: 1px solid rgba(180, 140, 80, 0.2);
    `;
    fogLegend.innerHTML = `
      <div style="color: #ffd088; font-size: 12px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 1px;">Exploration</div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
        <div style="width: 20px; height: 20px; background: #1a1a1a; border: 1px solid #333;"></div>
        <span style="color: #888; font-size: 11px;">Unexplored</span>
      </div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 6px;">
        <div style="width: 20px; height: 20px; background: rgba(74, 90, 64, 0.5); border: 1px solid #555;"></div>
        <span style="color: #888; font-size: 11px;">Previously Seen</span>
      </div>
      <div style="display: flex; align-items: center; gap: 10px;">
        <div style="width: 20px; height: 20px; background: #5a8a40; border: 1px solid #777;"></div>
        <span style="color: #888; font-size: 11px;">Currently Visible</span>
      </div>
    `;
    this.sidebar.appendChild(fogLegend);
    
    // Exploration stats
    this.explorationStats = document.createElement('div');
    this.explorationStats.style.cssText = `
      margin-top: 20px;
      padding: 15px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 4px;
    `;
    this.explorationStats.innerHTML = `
      <div style="color: #ffd088; font-size: 12px; margin-bottom: 10px;">Exploration Progress</div>
      <div style="color: #888; font-size: 11px;">Loading...</div>
    `;
    this.sidebar.appendChild(this.explorationStats);
    
    // Controls hint
    const controls = document.createElement('div');
    controls.style.cssText = `
      margin-top: 20px;
      padding-top: 15px;
      border-top: 1px solid rgba(180, 140, 80, 0.2);
      color: #666;
      font-size: 10px;
      line-height: 1.6;
    `;
    controls.innerHTML = `
      <div style="color: #888; margin-bottom: 5px;">Controls:</div>
      <div>• Drag or WASD to pan</div>
      <div>• Scroll to zoom</div>
      <div>• Click POI for details</div>
      <div>• Tab or Esc to close</div>
    `;
    this.sidebar.appendChild(controls);
    
    this.overlay.appendChild(this.sidebar);
  }
  
  /**
   * Create coordinates display
   */
  _createCoordinatesDisplay() {
    this.coordsDisplay = document.createElement('div');
    this.coordsDisplay.style.cssText = `
      position: absolute;
      bottom: 15px;
      left: 15px;
      padding: 8px 12px;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(180, 140, 80, 0.3);
      border-radius: 4px;
      color: #888;
      font-size: 11px;
      font-family: monospace;
      pointer-events: none;
    `;
    this.coordsDisplay.textContent = 'X: 0, Z: 0';
    this.mapContainer.appendChild(this.coordsDisplay);
  }
  
  /**
   * Get common button style
   */
  _getButtonStyle() {
    return `
      padding: 8px 12px;
      background: rgba(60, 50, 40, 0.8);
      border: 1px solid rgba(180, 140, 80, 0.4);
      border-radius: 4px;
      color: #e0d0b8;
      font-family: inherit;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
    `;
  }
  
  /**
   * Set up event listeners
   */
  _setupEventListeners() {
    // Keyboard events
    document.addEventListener('keydown', (e) => this._handleKeyDown(e));
    document.addEventListener('keyup', (e) => this._handleKeyUp(e));
    
    // Mouse events on map canvas
    this.mapContainer.addEventListener('mousedown', (e) => this._handleMouseDown(e));
    this.mapContainer.addEventListener('mousemove', (e) => this._handleMouseMove(e));
    this.mapContainer.addEventListener('mouseup', () => this._handleMouseUp());
    this.mapContainer.addEventListener('mouseleave', () => this._handleMouseUp());
    this.mapContainer.addEventListener('wheel', (e) => this._handleWheel(e));
    this.mapContainer.addEventListener('click', (e) => this._handleClick(e));
    this.mapContainer.addEventListener('dblclick', (e) => this._handleDoubleClick(e));
    
    // Resize handler
    window.addEventListener('resize', () => this._handleResize());
  }
  
  /**
   * Handle keyboard input
   */
  _handleKeyDown(e) {
    // Toggle map with Tab
    if (e.key === 'Tab' && !e.ctrlKey && !e.altKey) {
      // Don't toggle if typing in search
      if (document.activeElement === this.searchInput) return;
      
      e.preventDefault();
      this.toggle();
      return;
    }
    
    // Close with Escape
    if (e.key === 'Escape' && this.visible) {
      e.preventDefault();
      this.hide();
      return;
    }
    
    // WASD panning (only when map is visible)
    if (!this.visible) return;
    
    const key = e.key.toLowerCase();
    if (['w', 'a', 's', 'd'].includes(key)) {
      this.keysPressed[key] = true;
    }
    
    // Center on player with C
    if (key === 'c') {
      this._centerOnPlayer();
    }
  }
  
  _handleKeyUp(e) {
    const key = e.key.toLowerCase();
    if (['w', 'a', 's', 'd'].includes(key)) {
      this.keysPressed[key] = false;
    }
  }
  
  /**
   * Mouse handlers
   */
  _handleMouseDown(e) {
    if (e.button !== 0) return;
    this.isDragging = true;
    this.dragStart = { x: e.clientX, y: e.clientY };
    this.panStart = { ...this.panOffset };
    this.mapContainer.style.cursor = 'grabbing';
  }
  
  _handleMouseMove(e) {
    // Update mouse world position
    this._updateMouseWorldPos(e);
    
    if (this.isDragging) {
      const dx = e.clientX - this.dragStart.x;
      const dy = e.clientY - this.dragStart.y;
      
      // Convert screen delta to world delta
      this.panOffset.x = this.panStart.x - dx / this.zoom;
      this.panOffset.z = this.panStart.z - dy / this.zoom;
      
      this._clampPan();
    }
    
    // Update hover state
    this._updateHover();
  }
  
  _handleMouseUp() {
    this.isDragging = false;
    this.mapContainer.style.cursor = 'grab';
  }
  
  _handleWheel(e) {
    e.preventDefault();
    
    if (e.deltaY < 0) {
      this._zoomIn(e);
    } else {
      this._zoomOut(e);
    }
  }
  
  _handleClick(e) {
    // Middle-click or Ctrl+click to ping
    if (e.button === 1 || (e.button === 0 && e.ctrlKey)) {
      this.addPing(this.mouseWorldPos.x, this.mouseWorldPos.z);
      
      // Also ping on minimap if available
      if (this.minimapManager && this.minimapManager.addPing) {
        this.minimapManager.addPing(this.mouseWorldPos.x, this.mouseWorldPos.z);
      }
      return;
    }
    
    if (this.hoveredPOI) {
      this._showPOIDetails(this.hoveredPOI);
    }
  }
  
  _handleDoubleClick(e) {
    if (this.hoveredPOI && this.hoveredPOI.canFastTravel) {
      this._triggerFastTravel(this.hoveredPOI);
    }
  }
  
  // Prevent context menu on middle-click
  _handleContextMenu(e) {
    if (e.button === 1) {
      e.preventDefault();
    }
  }
  
  /**
   * Handle window resize
   */
  _handleResize() {
    if (!this.visible) return;
    
    this.mapCanvas.width = this.mapContainer.clientWidth;
    this.mapCanvas.height = this.mapContainer.clientHeight;
    this.terrainCacheDirty = true;
  }
  
  /**
   * Update mouse world position
   */
  _updateMouseWorldPos(e) {
    const rect = this.mapCanvas.getBoundingClientRect();
    const canvasX = e.clientX - rect.left;
    const canvasY = e.clientY - rect.top;
    
    const centerX = this.mapCanvas.width / 2;
    const centerY = this.mapCanvas.height / 2;
    
    this.mouseWorldPos = {
      x: this.panOffset.x + (canvasX - centerX) / this.zoom,
      z: this.panOffset.z + (canvasY - centerY) / this.zoom
    };
    
    // Update coordinates display
    this.coordsDisplay.textContent = `X: ${Math.round(this.mouseWorldPos.x)}, Z: ${Math.round(this.mouseWorldPos.z)}`;
  }
  
  /**
   * Update hover state
   */
  _updateHover() {
    const threshold = 15 / this.zoom; // Hit radius in world units
    let closest = null;
    let closestDist = Infinity;
    
    for (const poi of this.poiCache) {
      if (!this._isFilterVisible(poi.type)) continue;
      
      const dx = poi.x - this.mouseWorldPos.x;
      const dz = poi.z - this.mouseWorldPos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      if (dist < threshold && dist < closestDist) {
        closest = poi;
        closestDist = dist;
      }
    }
    
    this.hoveredPOI = closest;
    
    // Update tooltip
    if (closest) {
      this._showTooltip(closest);
    } else {
      this.tooltip.style.display = 'none';
    }
  }
  
  /**
   * Show tooltip for POI
   */
  _showTooltip(poi) {
    let content = `<div style="font-weight: bold; color: #ffd088; margin-bottom: 4px;">${poi.name}</div>`;
    
    if (poi.description) {
      content += `<div style="margin-bottom: 4px;">${poi.description}</div>`;
    }
    
    if (poi.canFastTravel) {
      content += `<div style="color: #888; font-size: 10px;">Double-click to fast travel</div>`;
    }
    
    this.tooltip.innerHTML = content;
    this.tooltip.style.display = 'block';
    
    // Position tooltip near mouse
    const rect = this.mapCanvas.getBoundingClientRect();
    let x = this.mouseWorldPos.x - this.panOffset.x;
    let z = this.mouseWorldPos.z - this.panOffset.z;
    
    const screenX = (x * this.zoom) + this.mapCanvas.width / 2 + 15;
    const screenY = (z * this.zoom) + this.mapCanvas.height / 2 - 15;
    
    this.tooltip.style.left = `${screenX}px`;
    this.tooltip.style.top = `${screenY}px`;
  }
  
  /**
   * Show POI details panel
   */
  _showPOIDetails(poi) {
    // Could expand to full details panel
    console.log('POI Details:', poi);
  }
  
  /**
   * Trigger fast travel
   */
  _triggerFastTravel(poi) {
    // Hide map first
    this.hide();
    
    // Trigger fast travel via minimapManager or fastTravelManager
    if (this.minimapManager && this.minimapManager.fastTravelManager) {
      this.minimapManager.fastTravelManager.requestFastTravel({
        x: poi.x,
        z: poi.z,
        name: poi.name
      });
    }
  }
  
  /**
   * Zoom functions
   */
  _zoomIn(e = null) {
    if (this.currentZoomIndex < this.zoomLevels.length - 1) {
      // Zoom toward mouse position if provided
      const mouseWorldBefore = e ? { ...this.mouseWorldPos } : null;
      
      this.currentZoomIndex++;
      this.zoom = this.zoomLevels[this.currentZoomIndex];
      this._updateZoomLabel();
      this.terrainCacheDirty = true;
      
      // Adjust pan to keep mouse position stable
      if (mouseWorldBefore && e) {
        const rect = this.mapCanvas.getBoundingClientRect();
        const canvasX = e.clientX - rect.left;
        const canvasY = e.clientY - rect.top;
        const centerX = this.mapCanvas.width / 2;
        const centerY = this.mapCanvas.height / 2;
        
        this.panOffset.x = mouseWorldBefore.x - (canvasX - centerX) / this.zoom;
        this.panOffset.z = mouseWorldBefore.z - (canvasY - centerY) / this.zoom;
        this._clampPan();
      }
    }
  }
  
  _zoomOut(e = null) {
    if (this.currentZoomIndex > 0) {
      const mouseWorldBefore = e ? { ...this.mouseWorldPos } : null;
      
      this.currentZoomIndex--;
      this.zoom = this.zoomLevels[this.currentZoomIndex];
      this._updateZoomLabel();
      this.terrainCacheDirty = true;
      
      if (mouseWorldBefore && e) {
        const rect = this.mapCanvas.getBoundingClientRect();
        const canvasX = e.clientX - rect.left;
        const canvasY = e.clientY - rect.top;
        const centerX = this.mapCanvas.width / 2;
        const centerY = this.mapCanvas.height / 2;
        
        this.panOffset.x = mouseWorldBefore.x - (canvasX - centerX) / this.zoom;
        this.panOffset.z = mouseWorldBefore.z - (canvasY - centerY) / this.zoom;
        this._clampPan();
      }
    }
  }
  
  _updateZoomLabel() {
    const zoomPercent = Math.round(this.zoom * 100);
    this.zoomLabel.textContent = `${zoomPercent}%`;
  }
  
  /**
   * Clamp pan to world bounds
   */
  _clampPan() {
    const viewWidth = this.mapCanvas.width / this.zoom;
    const viewHeight = this.mapCanvas.height / this.zoom;
    
    this.panOffset.x = Math.max(
      this.worldBounds.minX + viewWidth / 2,
      Math.min(this.worldBounds.maxX - viewWidth / 2, this.panOffset.x)
    );
    this.panOffset.z = Math.max(
      this.worldBounds.minZ + viewHeight / 2,
      Math.min(this.worldBounds.maxZ - viewHeight / 2, this.panOffset.z)
    );
  }
  
  /**
   * Center on player
   */
  _centerOnPlayer() {
    if (this.player) {
      this.panOffset.x = this.player.position.x;
      this.panOffset.z = this.player.position.z;
      this._clampPan();
    }
  }
  
  /**
   * Toggle filter visibility
   */
  _toggleFilter(filterId) {
    this.filters[filterId] = !this.filters[filterId];
    
    const btn = this.filterButtons[filterId];
    const check = btn.querySelector('.filter-check');
    
    if (this.filters[filterId]) {
      btn.style.background = 'rgba(60, 50, 40, 0.6)';
      check.style.display = 'inline';
    } else {
      btn.style.background = 'rgba(30, 25, 20, 0.6)';
      check.style.display = 'none';
    }
  }
  
  /**
   * Check if icon type is visible
   */
  _isFilterVisible(type) {
    for (const cat of FILTER_CATEGORIES) {
      if (cat.types.includes(type)) {
        return this.filters[cat.id];
      }
    }
    return true; // Show if not in any category
  }
  
  /**
   * Handle search input
   */
  _handleSearch() {
    this.searchQuery = this.searchInput.value.toLowerCase().trim();
    
    if (!this.searchQuery) {
      this.searchDropdown.style.display = 'none';
      this.searchResults = [];
      return;
    }
    
    // Search POIs
    this.searchResults = this.poiCache.filter(poi => 
      poi.name.toLowerCase().includes(this.searchQuery)
    );
    
    // Update dropdown
    if (this.searchResults.length > 0) {
      this.searchDropdown.innerHTML = '';
      this.searchResults.slice(0, 10).forEach(poi => {
        const item = document.createElement('div');
        item.style.cssText = `
          padding: 8px 12px;
          cursor: pointer;
          color: #e0d0b8;
          font-size: 12px;
          border-bottom: 1px solid rgba(180, 140, 80, 0.2);
        `;
        item.innerHTML = `
          <span style="color: ${MAP_ICONS[poi.type]?.color || '#fff'}; margin-right: 8px;">
            ${MAP_ICONS[poi.type]?.emoji || '●'}
          </span>
          ${poi.name}
        `;
        item.addEventListener('click', () => {
          this.panOffset.x = poi.x;
          this.panOffset.z = poi.z;
          this._clampPan();
          this.searchDropdown.style.display = 'none';
          this.searchInput.value = '';
          this.searchQuery = '';
        });
        item.addEventListener('mouseenter', () => {
          item.style.background = 'rgba(60, 50, 40, 0.6)';
        });
        item.addEventListener('mouseleave', () => {
          item.style.background = 'transparent';
        });
        this.searchDropdown.appendChild(item);
      });
      this.searchDropdown.style.display = 'block';
    } else {
      this.searchDropdown.innerHTML = '<div style="padding: 8px 12px; color: #888; font-size: 12px;">No results found</div>';
      this.searchDropdown.style.display = 'block';
    }
  }
  
  /**
   * Show the world map
   */
  show() {
    if (this.visible) return;
    
    this.visible = true;
    this.overlay.style.display = 'block';
    
    // Set canvas size
    this.mapCanvas.width = this.mapContainer.clientWidth;
    this.mapCanvas.height = this.mapContainer.clientHeight;
    
    // Center on player
    this._centerOnPlayer();
    
    // Refresh POI cache
    this._refreshPOICache();
    
    // Update exploration stats
    this._updateExplorationStats();
    
    // Fade in
    requestAnimationFrame(() => {
      this.overlay.style.opacity = '1';
    });
    
    // Start render loop
    this._startRenderLoop();
    
    // Mark terrain for re-render
    this.terrainCacheDirty = true;
  }
  
  /**
   * Hide the world map
   */
  hide() {
    if (!this.visible) return;
    
    this.visible = false;
    this.overlay.style.opacity = '0';
    
    // Reset key states
    this.keysPressed = { w: false, a: false, s: false, d: false };
    
    // Stop render loop
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    
    setTimeout(() => {
      this.overlay.style.display = 'none';
    }, 300);
  }
  
  /**
   * Toggle visibility
   */
  toggle() {
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }
  }
  
  /**
   * Start render loop
   */
  _startRenderLoop() {
    const render = (time) => {
      if (!this.visible) return;
      
      const deltaTime = (time - this.lastFrameTime) / 1000;
      this.lastFrameTime = time;
      
      // Handle WASD panning
      this._updatePan(deltaTime);
      
      // Render map
      this._render();
      
      this.animationFrame = requestAnimationFrame(render);
    };
    
    this.lastFrameTime = performance.now();
    this.animationFrame = requestAnimationFrame(render);
  }
  
  /**
   * Update pan from WASD
   */
  _updatePan(deltaTime) {
    let dx = 0, dz = 0;
    
    if (this.keysPressed.w) dz -= this.panSpeed * deltaTime;
    if (this.keysPressed.s) dz += this.panSpeed * deltaTime;
    if (this.keysPressed.a) dx -= this.panSpeed * deltaTime;
    if (this.keysPressed.d) dx += this.panSpeed * deltaTime;
    
    if (dx !== 0 || dz !== 0) {
      this.panOffset.x += dx / this.zoom;
      this.panOffset.z += dz / this.zoom;
      this._clampPan();
    }
  }
  
  /**
   * Refresh POI cache
   */
  _refreshPOICache() {
    this.poiCache = [];
    
    // Villages
    if (this.villageManager && this.villageManager.getVillagePositions) {
      const villages = this.villageManager.getVillagePositions();
      villages.forEach(v => {
        this.poiCache.push({
          type: 'village',
          name: v.name || 'Village',
          x: v.x,
          z: v.z,
          canFastTravel: false
        });
      });
    }
    
    // Dungeons
    if (this.dungeonManager && this.dungeonManager.getDungeonEntrances) {
      const dungeons = this.dungeonManager.getDungeonEntrances();
      dungeons.forEach(d => {
        this.poiCache.push({
          type: 'dungeon',
          name: d.name || 'Dungeon',
          x: d.x,
          z: d.z,
          canFastTravel: false
        });
      });
    }
    
    // Bonfires/Crucibles
    if (this.gameManager && this.gameManager.getDiscoveredBonfires) {
      const bonfires = this.gameManager.getDiscoveredBonfires();
      bonfires.forEach(b => {
        this.poiCache.push({
          type: b.type || 'bonfire',
          name: b.name || 'Bonfire',
          x: b.x,
          z: b.z,
          canFastTravel: true,
          description: 'Fast travel point'
        });
      });
    }
    
    // Quest objectives
    if (this.questManager && this.questManager.getQuestMarkers) {
      const markers = this.questManager.getQuestMarkers();
      markers.forEach(m => {
        this.poiCache.push({
          type: m.complete ? 'quest_complete' : 'quest',
          name: m.questName || 'Quest Objective',
          x: m.x,
          z: m.z,
          description: m.objective,
          canFastTravel: false
        });
      });
    }
    
    // NPCs
    if (this.npcManager && this.npcManager.npcs) {
      this.npcManager.npcs.forEach(npc => {
        if (npc.mesh && npc.mesh.position) {
          this.poiCache.push({
            type: 'npc',
            name: npc.name || 'NPC',
            x: npc.mesh.position.x,
            z: npc.mesh.position.z,
            canFastTravel: false
          });
        }
      });
    }
    
    // World bosses
    if (this.bossSpawner && this.bossSpawner.activeBoss) {
      const boss = this.bossSpawner.activeBoss;
      if (boss.mesh && boss.mesh.position) {
        this.poiCache.push({
          type: 'boss',
          name: boss.name || 'World Boss',
          x: boss.mesh.position.x,
          z: boss.mesh.position.z,
          canFastTravel: false
        });
      }
    }
    
    // Gathering nodes
    if (this.gatheringManager && this.gatheringManager.getActiveNodes) {
      const nodes = this.gatheringManager.getActiveNodes();
      nodes.forEach(n => {
        this.poiCache.push({
          type: 'gathering',
          name: n.name || 'Resource',
          x: n.x,
          z: n.z,
          canFastTravel: false
        });
      });
    }
    
    // Custom waypoint from minimap
    if (this.minimapManager && this.minimapManager.customWaypoint) {
      const wp = this.minimapManager.customWaypoint;
      this.poiCache.push({
        type: 'waypoint',
        name: 'Custom Waypoint',
        x: wp.x,
        z: wp.z,
        canFastTravel: false
      });
    }
    
    // Add region centers as reference points
    REGIONS.forEach(region => {
      this.poiCache.push({
        type: 'region',
        name: region.name,
        x: region.center.x,
        z: region.center.z,
        isRegion: true,
        canFastTravel: false
      });
    });
    
    this.poiCacheDirty = false;
  }
  
  /**
   * Update exploration stats in sidebar
   */
  _updateExplorationStats() {
    if (!this.discoveryManager) {
      this.explorationStats.innerHTML = `
        <div style="color: #ffd088; font-size: 12px; margin-bottom: 10px;">Exploration Progress</div>
        <div style="color: #888; font-size: 11px;">Discovery system loading...</div>
      `;
      return;
    }
    
    const stats = this.discoveryManager.getExplorationStats?.() || { totalPercent: 0, regionsExplored: 0, totalRegions: 8 };
    
    this.explorationStats.innerHTML = `
      <div style="color: #ffd088; font-size: 12px; margin-bottom: 10px;">Exploration Progress</div>
      <div style="color: #e0d0b8; font-size: 14px; margin-bottom: 8px;">${stats.totalPercent.toFixed(1)}%</div>
      <div style="height: 6px; background: rgba(0,0,0,0.4); border-radius: 3px; overflow: hidden;">
        <div style="height: 100%; width: ${stats.totalPercent}%; background: linear-gradient(to right, #4a8040, #6ac040);"></div>
      </div>
      <div style="color: #666; font-size: 10px; margin-top: 8px;">
        Regions: ${stats.regionsExplored}/${stats.totalRegions}
      </div>
    `;
  }
  
  /**
   * Render terrain to cache canvas
   */
  _renderTerrainCache() {
    if (!this.terrain) return;
    
    const size = 1024; // Cache resolution
    
    if (!this.terrainCacheCanvas) {
      this.terrainCacheCanvas = document.createElement('canvas');
      this.terrainCacheCanvas.width = size;
      this.terrainCacheCanvas.height = size;
    }
    
    const ctx = this.terrainCacheCanvas.getContext('2d');
    const worldWidth = this.worldBounds.maxX - this.worldBounds.minX;
    const worldHeight = this.worldBounds.maxZ - this.worldBounds.minZ;
    
    // Sample terrain and render to cache
    for (let py = 0; py < size; py++) {
      for (let px = 0; px < size; px++) {
        const worldX = this.worldBounds.minX + (px / size) * worldWidth;
        const worldZ = this.worldBounds.minZ + (py / size) * worldHeight;
        
        // Get terrain height and biome
        const height = this.terrain.getHeightAt?.(worldX, worldZ) || 0;
        const biome = this.terrain.getBiomeAt?.(worldX, worldZ) || 'default';
        
        // Get base color
        let color = BIOME_COLORS[biome] || BIOME_COLORS.default;
        
        // Apply height shading
        const heightFactor = Math.max(0, Math.min(1, (height + 20) / 60));
        color = this._adjustColorBrightness(color, 0.7 + heightFactor * 0.6);
        
        ctx.fillStyle = color;
        ctx.fillRect(px, py, 1, 1);
      }
    }
    
    this.terrainCacheDirty = false;
    this.lastTerrainRenderZoom = this.zoom;
  }
  
  /**
   * Adjust color brightness
   */
  _adjustColorBrightness(hex, factor) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    
    const nr = Math.round(Math.min(255, r * factor));
    const ng = Math.round(Math.min(255, g * factor));
    const nb = Math.round(Math.min(255, b * factor));
    
    return `rgb(${nr}, ${ng}, ${nb})`;
  }
  
  /**
   * Main render function
   */
  _render() {
    const ctx = this.mapCtx;
    const width = this.mapCanvas.width;
    const height = this.mapCanvas.height;
    
    // Clear
    ctx.fillStyle = '#0a0806';
    ctx.fillRect(0, 0, width, height);
    
    // Calculate view transform
    const centerX = width / 2;
    const centerY = height / 2;
    
    // Render terrain (from cache)
    this._renderTerrain(ctx, centerX, centerY);
    
    // Render fog of war
    this._renderFogOfWar(ctx, centerX, centerY);
    
    // Render quest path lines (before POIs so POIs render on top)
    this._renderQuestPaths(ctx, centerX, centerY);
    
    // Render region names
    this._renderRegionNames(ctx, centerX, centerY);
    
    // Render POIs
    this._renderPOIs(ctx, centerX, centerY);
    
    // Render player
    this._renderPlayer(ctx, centerX, centerY);
    
    // Render grid (optional, subtle)
    this._renderGrid(ctx, centerX, centerY);
    
    // Render map pings
    this._renderPings(ctx, centerX, centerY);
  }
  
  /**
   * Render quest path lines from player to objectives
   */
  _renderQuestPaths(ctx, centerX, centerY) {
    if (!this.questManager || !this.player) return;
    if (!this.filters.quests) return; // Respect filter
    
    const markers = this.questManager.getQuestMarkers?.() || [];
    const playerX = this.player.position.x;
    const playerZ = this.player.position.z;
    
    const playerScreenX = centerX + (playerX - this.panOffset.x) * this.zoom;
    const playerScreenY = centerY + (playerZ - this.panOffset.z) * this.zoom;
    
    ctx.setLineDash([8, 4]);
    ctx.lineWidth = 2;
    
    markers.forEach((marker, idx) => {
      // Check fog
      if (this.discoveryManager) {
        const fogLevel = this.discoveryManager.getFogLevel?.(marker.x, marker.z) ?? 0;
        if (fogLevel === 1) return; // Hidden in fog
      }
      
      const markerScreenX = centerX + (marker.x - this.panOffset.x) * this.zoom;
      const markerScreenY = centerY + (marker.z - this.panOffset.z) * this.zoom;
      
      // Draw dashed line from player to objective
      ctx.beginPath();
      ctx.moveTo(playerScreenX, playerScreenY);
      ctx.lineTo(markerScreenX, markerScreenY);
      
      const gradient = ctx.createLinearGradient(
        playerScreenX, playerScreenY,
        markerScreenX, markerScreenY
      );
      gradient.addColorStop(0, 'rgba(255, 215, 0, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 215, 0, 0.7)');
      
      ctx.strokeStyle = gradient;
      ctx.stroke();
    });
    
    ctx.setLineDash([]);
  }
  
  /**
   * Render map pings
   */
  _renderPings(ctx, centerX, centerY) {
    if (!this.pings || this.pings.length === 0) return;
    
    const now = performance.now();
    
    this.pings = this.pings.filter(ping => {
      const age = now - ping.timestamp;
      if (age > 5000) return false; // 5 second duration
      
      const alpha = 1 - (age / 5000);
      const pulseScale = 1 + Math.sin(age / 100) * 0.3;
      
      const screenX = centerX + (ping.x - this.panOffset.x) * this.zoom;
      const screenY = centerY + (ping.z - this.panOffset.z) * this.zoom;
      
      // Draw ping ring
      ctx.beginPath();
      ctx.arc(screenX, screenY, 12 * pulseScale, 0, Math.PI * 2);
      ctx.strokeStyle = ping.color || '#00ffff';
      ctx.lineWidth = 3;
      ctx.globalAlpha = alpha * 0.8;
      ctx.stroke();
      
      // Inner dot
      ctx.beginPath();
      ctx.arc(screenX, screenY, 4, 0, Math.PI * 2);
      ctx.fillStyle = ping.color || '#00ffff';
      ctx.globalAlpha = alpha;
      ctx.fill();
      
      ctx.globalAlpha = 1;
      return true;
    });
  }
  
  /**
   * Add a ping at world position
   */
  addPing(worldX, worldZ, color = '#00ffff') {
    if (!this.pings) this.pings = [];
    
    this.pings.push({
      x: worldX,
      z: worldZ,
      timestamp: performance.now(),
      color: color
    });
    
    // Limit pings
    if (this.pings.length > 10) {
      this.pings.shift();
    }
  }
  
  /**
   * Render terrain layer
   */
  _renderTerrain(ctx, centerX, centerY) {
    if (!this.terrainCacheCanvas) {
      this._renderTerrainCache();
    }
    
    if (!this.terrainCacheCanvas) return;
    
    const worldWidth = this.worldBounds.maxX - this.worldBounds.minX;
    const worldHeight = this.worldBounds.maxZ - this.worldBounds.minZ;
    
    // Calculate source and destination rectangles
    const destWidth = worldWidth * this.zoom;
    const destHeight = worldHeight * this.zoom;
    
    const destX = centerX - (this.panOffset.x - this.worldBounds.minX) * this.zoom;
    const destY = centerY - (this.panOffset.z - this.worldBounds.minZ) * this.zoom;
    
    ctx.drawImage(
      this.terrainCacheCanvas,
      destX, destY,
      destWidth, destHeight
    );
  }
  
  /**
   * Render fog of war
   */
  _renderFogOfWar(ctx, centerX, centerY) {
    if (!this.discoveryManager) return;
    
    const gridSize = 20; // World units per fog cell
    const width = this.mapCanvas.width;
    const height = this.mapCanvas.height;
    
    // Calculate visible world bounds
    const viewLeft = this.panOffset.x - width / (2 * this.zoom);
    const viewRight = this.panOffset.x + width / (2 * this.zoom);
    const viewTop = this.panOffset.z - height / (2 * this.zoom);
    const viewBottom = this.panOffset.z + height / (2 * this.zoom);
    
    // Render fog cells
    for (let worldX = Math.floor(viewLeft / gridSize) * gridSize; worldX < viewRight; worldX += gridSize) {
      for (let worldZ = Math.floor(viewTop / gridSize) * gridSize; worldZ < viewBottom; worldZ += gridSize) {
        const fogLevel = this.discoveryManager.getFogLevel?.(worldX, worldZ) ?? 1;
        
        if (fogLevel === 0) continue; // Fully revealed
        
        // Calculate screen position
        const screenX = centerX + (worldX - this.panOffset.x) * this.zoom;
        const screenY = centerY + (worldZ - this.panOffset.z) * this.zoom;
        const cellSize = gridSize * this.zoom;
        
        if (fogLevel === 1) {
          // Fully unexplored - black
          ctx.fillStyle = 'rgba(10, 8, 6, 0.95)';
        } else if (fogLevel === 0.5) {
          // Previously seen - dim
          ctx.fillStyle = 'rgba(10, 8, 6, 0.6)';
        }
        
        ctx.fillRect(screenX, screenY, cellSize, cellSize);
      }
    }
  }
  
  /**
   * Render region names
   */
  _renderRegionNames(ctx, centerX, centerY) {
    ctx.font = 'bold 14px Cinzel, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    REGIONS.forEach(region => {
      const screenX = centerX + (region.center.x - this.panOffset.x) * this.zoom;
      const screenY = centerY + (region.center.z - this.panOffset.z) * this.zoom;
      
      // Only render if visible
      if (screenX < -100 || screenX > this.mapCanvas.width + 100) return;
      if (screenY < -50 || screenY > this.mapCanvas.height + 50) return;
      
      // Check if region is discovered (if discoveryManager available)
      let alpha = 0.8;
      if (this.discoveryManager && this.discoveryManager.isRegionDiscovered) {
        if (!this.discoveryManager.isRegionDiscovered(region.id)) {
          alpha = 0.2; // Dim undiscovered regions
        }
      }
      
      // Draw region name with shadow
      ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
      ctx.fillText(region.name, screenX + 1, screenY + 1);
      ctx.fillStyle = `rgba(255, 208, 136, ${alpha})`;
      ctx.fillText(region.name, screenX, screenY);
    });
  }
  
  /**
   * Render POIs
   */
  _renderPOIs(ctx, centerX, centerY) {
    for (const poi of this.poiCache) {
      if (poi.isRegion) continue; // Skip region markers
      if (!this._isFilterVisible(poi.type)) continue;
      
      // Check fog of war
      if (this.discoveryManager) {
        const fogLevel = this.discoveryManager.getFogLevel?.(poi.x, poi.z) ?? 0;
        if (fogLevel === 1) continue; // Hidden in fog
      }
      
      const screenX = centerX + (poi.x - this.panOffset.x) * this.zoom;
      const screenY = centerY + (poi.z - this.panOffset.z) * this.zoom;
      
      // Skip if off screen
      if (screenX < -20 || screenX > this.mapCanvas.width + 20) continue;
      if (screenY < -20 || screenY > this.mapCanvas.height + 20) continue;
      
      const iconDef = MAP_ICONS[poi.type] || MAP_ICONS.npc;
      
      // Highlight if hovered
      if (poi === this.hoveredPOI) {
        ctx.beginPath();
        ctx.arc(screenX, screenY, iconDef.size + 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fill();
      }
      
      // Draw icon
      ctx.font = `${iconDef.size}px sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillText(iconDef.emoji, screenX + 1, screenY + 1);
      
      // Icon
      ctx.fillStyle = iconDef.color;
      ctx.fillText(iconDef.emoji, screenX, screenY);
    }
  }
  
  /**
   * Render player position
   */
  _renderPlayer(ctx, centerX, centerY) {
    if (!this.player) return;
    
    const screenX = centerX + (this.player.position.x - this.panOffset.x) * this.zoom;
    const screenY = centerY + (this.player.position.z - this.panOffset.z) * this.zoom;
    
    // Player direction
    const angle = this.player.rotation?.y || 0;
    
    // Draw player arrow
    ctx.save();
    ctx.translate(screenX, screenY);
    ctx.rotate(-angle + Math.PI);
    
    // Glow
    ctx.beginPath();
    ctx.arc(0, 0, 12, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0, 255, 136, 0.3)';
    ctx.fill();
    
    // Arrow
    ctx.beginPath();
    ctx.moveTo(0, -10);
    ctx.lineTo(-7, 8);
    ctx.lineTo(0, 4);
    ctx.lineTo(7, 8);
    ctx.closePath();
    
    ctx.fillStyle = '#00ff88';
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1;
    ctx.stroke();
    
    ctx.restore();
  }
  
  /**
   * Render subtle grid
   */
  _renderGrid(ctx, centerX, centerY) {
    const gridSize = 100; // World units
    const alpha = 0.1;
    
    ctx.strokeStyle = `rgba(180, 140, 80, ${alpha})`;
    ctx.lineWidth = 1;
    
    const width = this.mapCanvas.width;
    const height = this.mapCanvas.height;
    
    // Calculate visible range
    const startX = Math.floor((this.panOffset.x - width / (2 * this.zoom)) / gridSize) * gridSize;
    const endX = Math.ceil((this.panOffset.x + width / (2 * this.zoom)) / gridSize) * gridSize;
    const startZ = Math.floor((this.panOffset.z - height / (2 * this.zoom)) / gridSize) * gridSize;
    const endZ = Math.ceil((this.panOffset.z + height / (2 * this.zoom)) / gridSize) * gridSize;
    
    ctx.beginPath();
    
    // Vertical lines
    for (let x = startX; x <= endX; x += gridSize) {
      const screenX = centerX + (x - this.panOffset.x) * this.zoom;
      ctx.moveTo(screenX, 0);
      ctx.lineTo(screenX, height);
    }
    
    // Horizontal lines
    for (let z = startZ; z <= endZ; z += gridSize) {
      const screenY = centerY + (z - this.panOffset.z) * this.zoom;
      ctx.moveTo(0, screenY);
      ctx.lineTo(width, screenY);
    }
    
    ctx.stroke();
  }
  
  /**
   * Update method (called from game loop)
   */
  update(deltaTime) {
    // Not needed since we have internal render loop when visible
  }
  
  /**
   * Get save data
   */
  getSaveData() {
    return {
      lastZoomIndex: this.currentZoomIndex,
      lastPanOffset: { ...this.panOffset },
      filters: { ...this.filters }
    };
  }
  
  /**
   * Load save data
   */
  loadSaveData(data) {
    if (data.lastZoomIndex !== undefined) {
      this.currentZoomIndex = data.lastZoomIndex;
      this.zoom = this.zoomLevels[this.currentZoomIndex];
      this._updateZoomLabel();
    }
    if (data.lastPanOffset) {
      this.panOffset = { ...data.lastPanOffset };
    }
    if (data.filters) {
      this.filters = { ...data.filters };
      // Update filter button states
      Object.keys(this.filters).forEach(id => {
        const btn = this.filterButtons[id];
        if (btn) {
          const check = btn.querySelector('.filter-check');
          if (this.filters[id]) {
            btn.style.background = 'rgba(60, 50, 40, 0.6)';
            check.style.display = 'inline';
          } else {
            btn.style.background = 'rgba(30, 25, 20, 0.6)';
            check.style.display = 'none';
          }
        }
      });
    }
  }
  
  /**
   * Cleanup
   */
  dispose() {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
    
    if (this.overlay && this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  }
}

// Singleton pattern
let worldMapInstance = null;

export function createWorldMapUI(options) {
  if (!worldMapInstance) {
    worldMapInstance = new WorldMapUI(options);
  }
  return worldMapInstance;
}

export function getWorldMapUI() {
  return worldMapInstance;
}
