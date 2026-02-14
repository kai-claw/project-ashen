/**
 * DungeonManager.js - World-to-Dungeon Instance Management
 * Phase 22: Dungeon Instances
 * 
 * Manages transitions between the open world and dungeon instances:
 * - Detects player entering cave/dungeon entrances
 * - Transition effects (fade to black, loading screen)
 * - Generates or loads dungeon instances
 * - Teleports player to dungeon spawn points
 * - Tracks dungeon state (rooms cleared, chests looted)
 * - Exit portal returns player to overworld
 * - Saves/loads dungeon progress
 * - Entrance prompts with dungeon info
 */

import * as THREE from 'three';
import { DungeonGenerator, createDungeon } from '../world/DungeonGenerator.js';
import { dungeonRenderer } from '../world/DungeonRenderer.js';
import { getDungeonForCave, getDungeonById, listAllDungeons, DUNGEON_MODIFIER } from '../data/DungeonData.js';

// ========== CONSTANTS ==========
const ENTRANCE_INTERACTION_RANGE = 4;
const EXIT_PORTAL_RANGE = 2;
const TRANSITION_DURATION = 1000; // ms
const SAVE_KEY = 'ashen_dungeon_progress';

/**
 * DungeonManager - Handles all dungeon instance management
 */
export class DungeonManager {
  constructor(gameManager) {
    this.game = gameManager;
    this.scene = gameManager.scene;
    this.player = gameManager.player;
    
    // Current state
    this.isInDungeon = false;
    this.currentDungeon = null;
    this.currentRoomId = null;
    this.dungeonEntryPoint = null; // World position to return to
    
    // Dungeon progress tracking
    this.dungeonProgress = new Map(); // dungeonInstanceId -> progress data
    
    // Transition state
    this.isTransitioning = false;
    this.transitionOverlay = null;
    
    // Entrance prompt UI
    this.entrancePrompt = null;
    this.nearestEntrance = null;
    
    // World state storage (to restore when exiting dungeon)
    this.worldState = null;
    
    // Cave entrances from CaveManager
    this.caveEntrances = [];
    
    // Load saved progress
    this.loadProgress();
    
    // Create UI elements
    this.createTransitionOverlay();
    this.createEntrancePrompt();
    
    console.log('[DungeonManager] Initialized');
  }

  /**
   * Initialize with references to other managers
   */
  init(caveManager, enemyManager, worldManager) {
    this.caveManager = caveManager;
    this.enemyManager = enemyManager;
    this.worldManager = worldManager;
    
    // Initialize dungeon renderer
    if (this.scene) {
      dungeonRenderer.init(this.scene);
    }
    
    console.log('[DungeonManager] Linked to CaveManager and initialized renderer');
  }

  /**
   * Create the transition overlay (fade to black)
   */
  createTransitionOverlay() {
    // Create a full-screen overlay div
    this.transitionOverlay = document.createElement('div');
    this.transitionOverlay.id = 'dungeon-transition-overlay';
    this.transitionOverlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0;
      pointer-events: none;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      transition: opacity ${TRANSITION_DURATION / 2}ms ease-in-out;
    `;
    
    // Loading text
    const loadingText = document.createElement('div');
    loadingText.id = 'dungeon-loading-text';
    loadingText.style.cssText = `
      color: #aa8866;
      font-family: 'Cinzel', serif;
      font-size: 28px;
      text-transform: uppercase;
      letter-spacing: 4px;
      opacity: 0;
      transition: opacity 300ms ease-in-out;
    `;
    loadingText.textContent = 'Entering...';
    this.transitionOverlay.appendChild(loadingText);
    
    // Dungeon name
    const dungeonName = document.createElement('div');
    dungeonName.id = 'dungeon-name-display';
    dungeonName.style.cssText = `
      color: #cc9966;
      font-family: 'Cinzel', serif;
      font-size: 48px;
      text-transform: uppercase;
      letter-spacing: 6px;
      margin-top: 20px;
      opacity: 0;
      transition: opacity 300ms ease-in-out 200ms;
    `;
    this.transitionOverlay.appendChild(dungeonName);
    
    // Subtext (recommended level)
    const subtext = document.createElement('div');
    subtext.id = 'dungeon-subtext';
    subtext.style.cssText = `
      color: #886644;
      font-family: 'Cinzel', serif;
      font-size: 18px;
      margin-top: 10px;
      opacity: 0;
      transition: opacity 300ms ease-in-out 400ms;
    `;
    this.transitionOverlay.appendChild(subtext);
    
    document.body.appendChild(this.transitionOverlay);
  }

  /**
   * Create the entrance prompt UI
   */
  createEntrancePrompt() {
    this.entrancePrompt = document.createElement('div');
    this.entrancePrompt.id = 'dungeon-entrance-prompt';
    this.entrancePrompt.style.cssText = `
      position: fixed;
      bottom: 200px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.85);
      border: 2px solid #aa8866;
      border-radius: 8px;
      padding: 20px 30px;
      text-align: center;
      z-index: 1000;
      display: none;
      min-width: 350px;
    `;
    
    // Dungeon name
    const nameDiv = document.createElement('div');
    nameDiv.id = 'entrance-dungeon-name';
    nameDiv.style.cssText = `
      color: #cc9966;
      font-family: 'Cinzel', serif;
      font-size: 24px;
      text-transform: uppercase;
      letter-spacing: 3px;
      margin-bottom: 8px;
    `;
    this.entrancePrompt.appendChild(nameDiv);
    
    // Description
    const descDiv = document.createElement('div');
    descDiv.id = 'entrance-description';
    descDiv.style.cssText = `
      color: #888;
      font-family: 'Georgia', serif;
      font-size: 14px;
      font-style: italic;
      margin-bottom: 12px;
      max-width: 400px;
    `;
    this.entrancePrompt.appendChild(descDiv);
    
    // Level recommendation
    const levelDiv = document.createElement('div');
    levelDiv.id = 'entrance-level';
    levelDiv.style.cssText = `
      color: #aa8866;
      font-family: 'Georgia', serif;
      font-size: 16px;
      margin-bottom: 15px;
    `;
    this.entrancePrompt.appendChild(levelDiv);
    
    // Enter prompt
    const enterDiv = document.createElement('div');
    enterDiv.id = 'entrance-key-prompt';
    enterDiv.style.cssText = `
      color: #ffcc88;
      font-family: 'Courier New', monospace;
      font-size: 16px;
    `;
    enterDiv.innerHTML = 'Press <span style="color: #ffdd99; background: rgba(255,255,255,0.1); padding: 2px 8px; border-radius: 4px;">E</span> to Enter';
    this.entrancePrompt.appendChild(enterDiv);
    
    document.body.appendChild(this.entrancePrompt);
  }

  /**
   * Update dungeon manager - call each frame
   */
  update(delta, playerPosition) {
    if (this.isTransitioning) return;
    
    if (this.isInDungeon) {
      this.updateDungeonState(delta, playerPosition);
    } else {
      this.checkEntranceProximity(playerPosition);
    }
  }

  /**
   * Check if player is near a dungeon entrance
   */
  checkEntranceProximity(playerPosition) {
    // Get cave entrances from CaveManager
    if (this.caveManager) {
      this.caveEntrances = this.caveManager.caves || [];
    }
    
    let nearestCave = null;
    let nearestDistance = ENTRANCE_INTERACTION_RANGE;
    
    for (const cave of this.caveEntrances) {
      const dx = playerPosition.x - cave.x;
      const dz = playerPosition.z - cave.z;
      const distance = Math.sqrt(dx * dx + dz * dz);
      
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestCave = cave;
      }
    }
    
    if (nearestCave) {
      this.showEntrancePrompt(nearestCave);
      this.nearestEntrance = nearestCave;
    } else {
      this.hideEntrancePrompt();
      this.nearestEntrance = null;
    }
  }

  /**
   * Show the entrance prompt with dungeon info
   */
  showEntrancePrompt(cave) {
    const dungeonData = getDungeonForCave(cave.x, cave.z);
    if (!dungeonData) return;
    
    const nameEl = this.entrancePrompt.querySelector('#entrance-dungeon-name');
    const descEl = this.entrancePrompt.querySelector('#entrance-description');
    const levelEl = this.entrancePrompt.querySelector('#entrance-level');
    
    nameEl.textContent = dungeonData.name;
    descEl.textContent = dungeonData.description;
    
    // Color level recommendation based on player level
    const playerLevel = this.player?.level || 1;
    const recLevel = dungeonData.recommendedLevel;
    let levelColor = '#88cc88'; // Green - appropriate level
    
    if (playerLevel < recLevel - 3) {
      levelColor = '#ff6644'; // Red - too hard
    } else if (playerLevel < recLevel) {
      levelColor = '#ffcc44'; // Yellow - challenging
    } else if (playerLevel > recLevel + 5) {
      levelColor = '#888888'; // Gray - too easy
    }
    
    levelEl.innerHTML = `Recommended Level: <span style="color: ${levelColor}">${recLevel}</span>`;
    
    this.entrancePrompt.style.display = 'block';
  }

  /**
   * Hide the entrance prompt
   */
  hideEntrancePrompt() {
    this.entrancePrompt.style.display = 'none';
  }

  /**
   * Handle interaction key press (E)
   */
  handleInteract() {
    if (this.isTransitioning) return false;
    
    if (this.isInDungeon) {
      // Check for exit portal interaction
      return this.checkExitPortalInteraction();
    } else if (this.nearestEntrance) {
      // Enter dungeon
      this.enterDungeon(this.nearestEntrance);
      return true;
    }
    
    return false;
  }

  /**
   * Enter a dungeon from a cave entrance
   */
  async enterDungeon(cave, modifier = 'none') {
    if (this.isTransitioning || this.isInDungeon) return;
    
    const dungeonData = getDungeonForCave(cave.x, cave.z);
    if (!dungeonData) {
      console.error('[DungeonManager] No dungeon data for cave at', cave.x, cave.z);
      return;
    }
    
    console.log(`[DungeonManager] Entering ${dungeonData.name}`);
    
    // Store entry point for return
    this.dungeonEntryPoint = {
      x: cave.x,
      y: this.player?.mesh?.position.y || 0,
      z: cave.z + 5, // Slightly behind the entrance
    };
    
    // Start transition
    await this.transitionToDungeon(dungeonData, modifier);
  }

  /**
   * Transition to dungeon with fade effect
   */
  async transitionToDungeon(dungeonData, modifier) {
    this.isTransitioning = true;
    this.hideEntrancePrompt();
    
    // Set up transition overlay
    const nameEl = this.transitionOverlay.querySelector('#dungeon-name-display');
    const subtextEl = this.transitionOverlay.querySelector('#dungeon-subtext');
    const loadingEl = this.transitionOverlay.querySelector('#dungeon-loading-text');
    
    nameEl.textContent = dungeonData.name;
    subtextEl.textContent = `Recommended Level ${dungeonData.recommendedLevel}`;
    loadingEl.textContent = 'Entering...';
    
    // Fade to black
    this.transitionOverlay.style.opacity = '1';
    this.transitionOverlay.style.pointerEvents = 'auto';
    
    await this.sleep(TRANSITION_DURATION / 2);
    
    // Show loading text
    loadingEl.style.opacity = '1';
    nameEl.style.opacity = '1';
    subtextEl.style.opacity = '1';
    
    // Store world state
    this.saveWorldState();
    
    // Generate or load dungeon
    const instanceId = `${dungeonData.id}_${Date.now()}`;
    let dungeonInstance;
    
    // Check for saved progress
    const savedProgress = this.getProgress(dungeonData.id);
    if (savedProgress && savedProgress.instance) {
      dungeonInstance = savedProgress.instance;
      console.log('[DungeonManager] Resuming saved dungeon');
    } else {
      dungeonInstance = createDungeon(dungeonData.id, modifier);
    }
    
    this.currentDungeon = dungeonInstance;
    
    // Hide world geometry
    this.hideWorld();
    
    // Render dungeon
    const renderer = dungeonRenderer.get();
    if (renderer) {
      renderer.renderDungeon(dungeonInstance);
    }
    
    // Teleport player to entrance room
    this.teleportToRoom(dungeonInstance.entranceRoom);
    
    // Mark entrance room as explored
    this.markRoomExplored(dungeonInstance.entranceRoom.id);
    
    await this.sleep(800);
    
    // Update loading text
    loadingEl.textContent = 'Prepare yourself...';
    
    await this.sleep(600);
    
    // Fade in
    loadingEl.style.opacity = '0';
    nameEl.style.opacity = '0';
    subtextEl.style.opacity = '0';
    
    await this.sleep(300);
    
    this.transitionOverlay.style.opacity = '0';
    this.transitionOverlay.style.pointerEvents = 'none';
    
    this.isInDungeon = true;
    this.isTransitioning = false;
    
    // Initialize dungeon progress tracking
    this.initDungeonProgress(dungeonInstance);
    
    console.log('[DungeonManager] Dungeon entry complete');
  }

  /**
   * Initialize progress tracking for a dungeon instance
   */
  initDungeonProgress(dungeonInstance) {
    const progress = {
      instanceId: dungeonInstance.id,
      dungeonId: dungeonInstance.dungeonId,
      instance: dungeonInstance,
      enteredAt: Date.now(),
      roomsExplored: new Set([dungeonInstance.entranceRoom.id]),
      roomsCleared: new Set([dungeonInstance.entranceRoom.id]),
      chestsLooted: new Set(),
      enemiesKilled: 0,
      bossDefeated: false,
      puzzlesSolved: new Set(),
      currentRoomId: dungeonInstance.entranceRoom.id,
    };
    
    this.dungeonProgress.set(dungeonInstance.id, progress);
    this.currentRoomId = dungeonInstance.entranceRoom.id;
  }

  /**
   * Save world state before entering dungeon
   */
  saveWorldState() {
    this.worldState = {
      playerPosition: this.player?.mesh?.position.clone(),
      cameraPosition: this.game?.camera?.position.clone(),
      fogSettings: this.scene?.fog ? {
        color: this.scene.fog.color.getHex(),
        density: this.scene.fog.density,
      } : null,
    };
    
    console.log('[DungeonManager] World state saved');
  }

  /**
   * Hide world geometry
   */
  hideWorld() {
    if (!this.scene) return;
    
    // Find and hide world objects
    const worldObjects = ['Terrain', 'Foliage', 'Villages', 'Ruins', 'Caves', 'World'];
    
    this.scene.traverse(child => {
      if (worldObjects.some(name => child.name?.includes(name))) {
        child.visible = false;
      }
    });
    
    // Hide enemies
    if (this.enemyManager) {
      this.enemyManager.hideAllEnemies?.();
    }
    
    console.log('[DungeonManager] World hidden');
  }

  /**
   * Show world geometry
   */
  showWorld() {
    if (!this.scene) return;
    
    const worldObjects = ['Terrain', 'Foliage', 'Villages', 'Ruins', 'Caves', 'World'];
    
    this.scene.traverse(child => {
      if (worldObjects.some(name => child.name?.includes(name))) {
        child.visible = true;
      }
    });
    
    // Show enemies
    if (this.enemyManager) {
      this.enemyManager.showAllEnemies?.();
    }
    
    console.log('[DungeonManager] World shown');
  }

  /**
   * Teleport player to a room
   */
  teleportToRoom(room) {
    if (!this.player?.mesh || !room) return;
    
    // Position player at room center
    this.player.mesh.position.set(
      room.position.x,
      room.position.y + 1, // Slightly above floor
      room.position.z
    );
    
    // Reset player velocity if needed
    if (this.player.velocity) {
      this.player.velocity.set(0, 0, 0);
    }
    
    this.currentRoomId = room.id;
    
    console.log(`[DungeonManager] Teleported to room ${room.id}`);
  }

  /**
   * Update dungeon state while in dungeon
   */
  updateDungeonState(delta, playerPosition) {
    if (!this.currentDungeon) return;
    
    // Update dungeon renderer effects
    const renderer = dungeonRenderer.get();
    if (renderer) {
      renderer.update(delta);
    }
    
    // Check which room player is in
    this.updateCurrentRoom(playerPosition);
    
    // Check for exit portal proximity
    this.checkExitPortalProximity(playerPosition);
  }

  /**
   * Update current room based on player position
   */
  updateCurrentRoom(playerPosition) {
    for (const room of this.currentDungeon.rooms) {
      const dx = Math.abs(playerPosition.x - room.position.x);
      const dz = Math.abs(playerPosition.z - room.position.z);
      
      if (dx < room.width / 2 && dz < room.depth / 2) {
        if (room.id !== this.currentRoomId) {
          this.onEnterRoom(room);
        }
        return;
      }
    }
  }

  /**
   * Handle entering a new room
   */
  onEnterRoom(room) {
    const previousRoomId = this.currentRoomId;
    this.currentRoomId = room.id;
    
    // Mark as explored
    this.markRoomExplored(room.id);
    
    // Trigger room events
    this.triggerRoomEvents(room);
    
    console.log(`[DungeonManager] Entered room ${room.id} (${room.type})`);
  }

  /**
   * Trigger events when entering a room
   */
  triggerRoomEvents(room) {
    const progress = this.dungeonProgress.get(this.currentDungeon.id);
    if (!progress) return;
    
    // Spawn enemies if room not cleared
    if (!progress.roomsCleared.has(room.id)) {
      if (room.enemies && room.enemies.length > 0) {
        this.spawnRoomEnemies(room);
      }
      
      if (room.miniboss) {
        this.spawnMiniboss(room);
      }
      
      if (room.boss) {
        this.spawnBoss(room);
      }
    }
    
    // Close doors for combat rooms (arena fights)
    if (room.type === 'combat' || room.type === 'miniboss' || room.type === 'boss') {
      this.lockRoomDoors(room);
    }
  }

  /**
   * Spawn enemies in a room
   */
  spawnRoomEnemies(room) {
    if (!this.enemyManager) return;
    
    const dungeonData = this.currentDungeon.dungeonData;
    const modifier = this.currentDungeon.modifier;
    const modEffects = DUNGEON_MODIFIER[modifier.toUpperCase()]?.effects || {};
    
    for (const enemyData of room.enemies) {
      // Calculate spawn position (relative to room)
      const spawnPos = new THREE.Vector3(
        room.position.x + (enemyData.spawnPosition?.x || 0),
        room.position.y + 0.5,
        room.position.z + (enemyData.spawnPosition?.z || 0)
      );
      
      // Determine enemy level
      const levelRange = enemyData.levelRange || dungeonData.enemyLevelRange;
      const level = Math.floor(
        levelRange.min + Math.random() * (levelRange.max - levelRange.min)
      );
      
      // Spawn via enemy manager
      // Note: Actual spawning depends on EnemyManager implementation
      console.log(`[DungeonManager] Would spawn ${enemyData.type} at ${spawnPos.x}, ${spawnPos.z} (level ${level})`);
    }
  }

  /**
   * Spawn miniboss in a room
   */
  spawnMiniboss(room) {
    if (!room.miniboss) return;
    
    const spawnPos = new THREE.Vector3(
      room.position.x + (room.miniboss.spawnPosition?.x || 0),
      room.position.y + 0.5,
      room.position.z + (room.miniboss.spawnPosition?.z || 0)
    );
    
    console.log(`[DungeonManager] Would spawn miniboss ${room.miniboss.name} at ${spawnPos.x}, ${spawnPos.z}`);
  }

  /**
   * Spawn boss in a room
   */
  spawnBoss(room) {
    if (!room.boss) return;
    
    const spawnPos = new THREE.Vector3(
      room.position.x + (room.boss.spawnPosition?.x || 0),
      room.position.y + 0.5,
      room.position.z + (room.boss.spawnPosition?.z || 0)
    );
    
    console.log(`[DungeonManager] Would spawn boss ${room.boss.name} at ${spawnPos.x}, ${spawnPos.z}`);
  }

  /**
   * Lock doors for a room (combat arena)
   */
  lockRoomDoors(room) {
    const renderer = dungeonRenderer.get();
    if (!renderer) return;
    
    for (const connId of room.connections) {
      const doorKey = `${room.id}_${connId}`;
      const reverseDoorKey = `${connId}_${room.id}`;
      
      renderer.lockDoor(doorKey);
      renderer.lockDoor(reverseDoorKey);
    }
  }

  /**
   * Unlock doors for a room (after clearing)
   */
  unlockRoomDoors(room) {
    const renderer = dungeonRenderer.get();
    if (!renderer) return;
    
    for (const connId of room.connections) {
      const doorKey = `${room.id}_${connId}`;
      const reverseDoorKey = `${connId}_${room.id}`;
      
      renderer.unlockDoor(doorKey);
      renderer.openDoor(doorKey);
      renderer.unlockDoor(reverseDoorKey);
      renderer.openDoor(reverseDoorKey);
    }
  }

  /**
   * Mark a room as cleared (all enemies defeated)
   */
  markRoomCleared(roomId) {
    const progress = this.dungeonProgress.get(this.currentDungeon?.id);
    if (!progress) return;
    
    progress.roomsCleared.add(roomId);
    
    // Update renderer
    const renderer = dungeonRenderer.get();
    if (renderer) {
      renderer.markRoomCleared(roomId);
    }
    
    // Find room and unlock doors
    const room = this.currentDungeon.rooms.find(r => r.id === roomId);
    if (room) {
      this.unlockRoomDoors(room);
    }
    
    // Save progress
    this.saveProgress();
    
    console.log(`[DungeonManager] Room ${roomId} cleared`);
  }

  /**
   * Mark a room as explored
   */
  markRoomExplored(roomId) {
    const progress = this.dungeonProgress.get(this.currentDungeon?.id);
    if (!progress) return;
    
    progress.roomsExplored.add(roomId);
    
    // Update renderer
    const renderer = dungeonRenderer.get();
    if (renderer) {
      renderer.markRoomExplored(roomId);
    }
  }

  /**
   * Mark boss as defeated
   */
  markBossDefeated() {
    const progress = this.dungeonProgress.get(this.currentDungeon?.id);
    if (!progress) return;
    
    progress.bossDefeated = true;
    
    // Mark boss room as cleared
    if (this.currentDungeon.bossRoom) {
      this.markRoomCleared(this.currentDungeon.bossRoom.id);
    }
    
    // Activate exit portal
    const renderer = dungeonRenderer.get();
    if (renderer) {
      renderer.activateExitPortal();
    }
    
    // Save progress
    this.saveProgress();
    
    console.log('[DungeonManager] Boss defeated! Exit portal activated.');
  }

  /**
   * Mark a chest as looted
   */
  markChestLooted(chestId) {
    const progress = this.dungeonProgress.get(this.currentDungeon?.id);
    if (!progress) return;
    
    progress.chestsLooted.add(chestId);
    this.saveProgress();
  }

  /**
   * Mark a puzzle as solved
   */
  markPuzzleSolved(puzzleId) {
    const progress = this.dungeonProgress.get(this.currentDungeon?.id);
    if (!progress) return;
    
    progress.puzzlesSolved.add(puzzleId);
    this.saveProgress();
  }

  /**
   * Check exit portal proximity
   */
  checkExitPortalProximity(playerPosition) {
    if (!this.currentDungeon?.bossRoom) return;
    
    const progress = this.dungeonProgress.get(this.currentDungeon.id);
    if (!progress?.bossDefeated) return;
    
    const bossRoom = this.currentDungeon.bossRoom;
    
    // Exit portal is at the back of boss room
    const portalX = bossRoom.position.x;
    const portalZ = bossRoom.position.z - bossRoom.depth / 2 + 1;
    
    const dx = playerPosition.x - portalX;
    const dz = playerPosition.z - portalZ;
    const distance = Math.sqrt(dx * dx + dz * dz);
    
    if (distance < EXIT_PORTAL_RANGE) {
      this.showExitPrompt();
    } else {
      this.hideExitPrompt();
    }
  }

  /**
   * Show exit prompt
   */
  showExitPrompt() {
    if (!this.entrancePrompt) return;
    
    const nameEl = this.entrancePrompt.querySelector('#entrance-dungeon-name');
    const descEl = this.entrancePrompt.querySelector('#entrance-description');
    const levelEl = this.entrancePrompt.querySelector('#entrance-level');
    const keyEl = this.entrancePrompt.querySelector('#entrance-key-prompt');
    
    nameEl.textContent = 'Exit Portal';
    descEl.textContent = 'Return to the overworld.';
    levelEl.textContent = '';
    keyEl.innerHTML = 'Press <span style="color: #ffdd99; background: rgba(255,255,255,0.1); padding: 2px 8px; border-radius: 4px;">E</span> to Exit';
    
    this.entrancePrompt.style.display = 'block';
  }

  /**
   * Hide exit prompt
   */
  hideExitPrompt() {
    // Only hide if we're showing exit prompt (not entrance prompt)
    const nameEl = this.entrancePrompt?.querySelector('#entrance-dungeon-name');
    if (nameEl?.textContent === 'Exit Portal') {
      this.entrancePrompt.style.display = 'none';
    }
  }

  /**
   * Check for exit portal interaction
   */
  checkExitPortalInteraction() {
    const progress = this.dungeonProgress.get(this.currentDungeon?.id);
    if (!progress?.bossDefeated) return false;
    
    const playerPos = this.player?.mesh?.position;
    if (!playerPos) return false;
    
    const bossRoom = this.currentDungeon.bossRoom;
    const portalX = bossRoom.position.x;
    const portalZ = bossRoom.position.z - bossRoom.depth / 2 + 1;
    
    const dx = playerPos.x - portalX;
    const dz = playerPos.z - portalZ;
    const distance = Math.sqrt(dx * dx + dz * dz);
    
    if (distance < EXIT_PORTAL_RANGE) {
      this.exitDungeon();
      return true;
    }
    
    return false;
  }

  /**
   * Exit the dungeon and return to overworld
   */
  async exitDungeon() {
    if (this.isTransitioning || !this.isInDungeon) return;
    
    console.log('[DungeonManager] Exiting dungeon');
    
    this.isTransitioning = true;
    this.hideEntrancePrompt();
    
    // Set up transition
    const loadingEl = this.transitionOverlay.querySelector('#dungeon-loading-text');
    const nameEl = this.transitionOverlay.querySelector('#dungeon-name-display');
    const subtextEl = this.transitionOverlay.querySelector('#dungeon-subtext');
    
    loadingEl.textContent = 'Returning...';
    nameEl.textContent = 'Overworld';
    subtextEl.textContent = '';
    
    // Fade to black
    this.transitionOverlay.style.opacity = '1';
    this.transitionOverlay.style.pointerEvents = 'auto';
    
    await this.sleep(TRANSITION_DURATION / 2);
    
    loadingEl.style.opacity = '1';
    nameEl.style.opacity = '1';
    
    // Clear dungeon
    const renderer = dungeonRenderer.get();
    if (renderer) {
      renderer.clearDungeon();
    }
    
    // Restore world
    this.showWorld();
    this.restoreWorldState();
    
    // Teleport player back to entry point
    if (this.player?.mesh && this.dungeonEntryPoint) {
      this.player.mesh.position.set(
        this.dungeonEntryPoint.x,
        this.dungeonEntryPoint.y,
        this.dungeonEntryPoint.z
      );
    }
    
    await this.sleep(600);
    
    // Fade in
    loadingEl.style.opacity = '0';
    nameEl.style.opacity = '0';
    
    await this.sleep(300);
    
    this.transitionOverlay.style.opacity = '0';
    this.transitionOverlay.style.pointerEvents = 'none';
    
    // Reset state
    this.isInDungeon = false;
    this.currentDungeon = null;
    this.currentRoomId = null;
    this.isTransitioning = false;
    
    console.log('[DungeonManager] Exit complete, back in overworld');
  }

  /**
   * Restore world state after dungeon exit
   */
  restoreWorldState() {
    if (!this.worldState) return;
    
    // Restore fog
    if (this.worldState.fogSettings && this.scene) {
      this.scene.fog = new THREE.FogExp2(
        this.worldState.fogSettings.color,
        this.worldState.fogSettings.density || 0.015
      );
    }
    
    console.log('[DungeonManager] World state restored');
  }

  /**
   * Save dungeon progress to localStorage
   */
  saveProgress() {
    try {
      const saveData = {};
      
      for (const [id, progress] of this.dungeonProgress) {
        saveData[id] = {
          dungeonId: progress.dungeonId,
          roomsExplored: Array.from(progress.roomsExplored),
          roomsCleared: Array.from(progress.roomsCleared),
          chestsLooted: Array.from(progress.chestsLooted),
          puzzlesSolved: Array.from(progress.puzzlesSolved),
          bossDefeated: progress.bossDefeated,
          // Note: We don't save the full instance to avoid huge saves
        };
      }
      
      localStorage.setItem(SAVE_KEY, JSON.stringify(saveData));
    } catch (e) {
      console.warn('[DungeonManager] Failed to save progress:', e);
    }
  }

  /**
   * Load dungeon progress from localStorage
   */
  loadProgress() {
    try {
      const saveData = localStorage.getItem(SAVE_KEY);
      if (!saveData) return;
      
      const parsed = JSON.parse(saveData);
      
      for (const [id, data] of Object.entries(parsed)) {
        this.dungeonProgress.set(id, {
          ...data,
          roomsExplored: new Set(data.roomsExplored),
          roomsCleared: new Set(data.roomsCleared),
          chestsLooted: new Set(data.chestsLooted),
          puzzlesSolved: new Set(data.puzzlesSolved),
        });
      }
      
      console.log(`[DungeonManager] Loaded progress for ${this.dungeonProgress.size} dungeons`);
    } catch (e) {
      console.warn('[DungeonManager] Failed to load progress:', e);
    }
  }

  /**
   * Get saved progress for a dungeon type
   */
  getProgress(dungeonId) {
    for (const [id, progress] of this.dungeonProgress) {
      if (progress.dungeonId === dungeonId && !progress.bossDefeated) {
        return progress;
      }
    }
    return null;
  }

  /**
   * Get dungeon completion stats
   */
  getCompletionStats() {
    if (!this.currentDungeon) return null;
    
    const progress = this.dungeonProgress.get(this.currentDungeon.id);
    if (!progress) return null;
    
    const totalRooms = this.currentDungeon.rooms.length;
    const exploredRooms = progress.roomsExplored.size;
    const clearedRooms = progress.roomsCleared.size;
    
    return {
      dungeonName: this.currentDungeon.dungeonData.name,
      roomsExplored: exploredRooms,
      roomsCleared: clearedRooms,
      totalRooms,
      explorationPercent: Math.floor((exploredRooms / totalRooms) * 100),
      clearPercent: Math.floor((clearedRooms / totalRooms) * 100),
      chestsLooted: progress.chestsLooted.size,
      puzzlesSolved: progress.puzzlesSolved.size,
      bossDefeated: progress.bossDefeated,
      elapsedTime: Date.now() - progress.enteredAt,
    };
  }

  /**
   * Get minimap data for UI
   */
  getMinimapData() {
    const renderer = dungeonRenderer.get();
    return renderer?.getMinimapData() || null;
  }

  /**
   * Sleep utility for async transitions
   */
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /**
   * Check if player is currently in a dungeon
   */
  isPlayerInDungeon() {
    return this.isInDungeon;
  }

  /**
   * Get current dungeon data
   */
  getCurrentDungeon() {
    return this.currentDungeon;
  }

  /**
   * Get current room data
   */
  getCurrentRoom() {
    if (!this.currentDungeon || !this.currentRoomId) return null;
    return this.currentDungeon.rooms.find(r => r.id === this.currentRoomId);
  }

  /**
   * Force exit (for debugging/emergencies)
   */
  forceExit() {
    if (!this.isInDungeon) return;
    
    // Immediately exit without transition
    const renderer = dungeonRenderer.get();
    if (renderer) {
      renderer.clearDungeon();
    }
    
    this.showWorld();
    this.restoreWorldState();
    
    if (this.player?.mesh && this.dungeonEntryPoint) {
      this.player.mesh.position.set(
        this.dungeonEntryPoint.x,
        this.dungeonEntryPoint.y,
        this.dungeonEntryPoint.z
      );
    }
    
    this.isInDungeon = false;
    this.currentDungeon = null;
    this.currentRoomId = null;
    this.isTransitioning = false;
    
    console.log('[DungeonManager] Force exit complete');
  }

  /**
   * Dispose of resources
   */
  dispose() {
    // Remove UI elements
    if (this.transitionOverlay?.parentNode) {
      this.transitionOverlay.parentNode.removeChild(this.transitionOverlay);
    }
    
    if (this.entrancePrompt?.parentNode) {
      this.entrancePrompt.parentNode.removeChild(this.entrancePrompt);
    }
    
    // Clear dungeon
    const renderer = dungeonRenderer.get();
    if (renderer) {
      renderer.dispose();
    }
    
    // Clear progress
    this.dungeonProgress.clear();
    
    console.log('[DungeonManager] Disposed');
  }
}

// Factory function
export function createDungeonManager(gameManager) {
  return new DungeonManager(gameManager);
}
