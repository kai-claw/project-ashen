/**
 * DungeonGenerator.js - Procedural Dungeon Layout Generator
 * Phase 22: Dungeon Instances
 * 
 * Generates dungeon layouts procedurally based on DungeonData templates.
 * Uses graph-based room placement with guaranteed paths from entrance to boss.
 */

import {
  getDungeonById,
  getRoomCount,
  getEnemySpawnConfig,
  getTrapConfig,
  getPuzzleConfig,
  generateChestLoot,
  getRandomRoomTemplate,
  ROOM_TYPE,
  ROOM_SIZE,
  ROOM_TEMPLATES,
} from '../data/DungeonData.js';

// Room grid cell size (units)
const CELL_SIZE = 20;
const CORRIDOR_LENGTH = 10;

/**
 * DungeonGenerator - Creates procedural dungeon layouts
 */
export class DungeonGenerator {
  constructor(seed = null) {
    this.seed = seed || Date.now();
    this.random = this._createSeededRandom(this.seed);
    
    // Grid for room placement (sparse)
    this.grid = new Map();
    
    // All generated rooms
    this.rooms = [];
    
    // Connections between rooms
    this.connections = [];
    
    // Critical path from entrance to boss
    this.criticalPath = [];
    
    // Dungeon bounds
    this.bounds = { minX: 0, maxX: 0, minZ: 0, maxZ: 0 };
  }
  
  /**
   * Create seeded random number generator
   */
  _createSeededRandom(seed) {
    let s = seed;
    return () => {
      s = (s * 9301 + 49297) % 233280;
      return s / 233280;
    };
  }
  
  /**
   * Generate a complete dungeon instance
   * @param {string} dungeonId - ID from DungeonData
   * @param {string} modifier - Dungeon modifier (none, elite, cursed, blessed, timed)
   * @returns {Object} Complete dungeon data for rendering
   */
  generate(dungeonId, modifier = 'none') {
    const dungeonData = getDungeonById(dungeonId);
    if (!dungeonData) {
      console.error(`[DungeonGenerator] Unknown dungeon: ${dungeonId}`);
      return null;
    }
    
    console.log(`[DungeonGenerator] Generating ${dungeonData.name} (${modifier})`);
    
    // Reset state
    this.grid.clear();
    this.rooms = [];
    this.connections = [];
    this.criticalPath = [];
    this.bounds = { minX: 0, maxX: 0, minZ: 0, maxZ: 0 };
    
    // Calculate room count
    const roomCount = getRoomCount(dungeonId, modifier);
    console.log(`[DungeonGenerator] Target room count: ${roomCount}`);
    
    // Generate room types based on distribution
    const roomTypes = this._generateRoomTypes(dungeonData, roomCount);
    
    // Place rooms using graph-based algorithm
    this._placeRooms(roomTypes, dungeonData);
    
    // Generate connections (corridors)
    this._generateConnections(dungeonData);
    
    // Validate path from entrance to boss
    if (!this._validatePath()) {
      console.warn('[DungeonGenerator] Invalid path, regenerating...');
      return this.generate(dungeonId, modifier); // Retry
    }
    
    // Populate rooms with content
    this._populateRooms(dungeonData, modifier);
    
    // Calculate dungeon bounds
    this._calculateBounds();
    
    // Create final dungeon instance data
    const instance = {
      id: `${dungeonId}_${this.seed}`,
      dungeonId,
      dungeonData,
      modifier,
      seed: this.seed,
      rooms: this.rooms,
      connections: this.connections,
      criticalPath: this.criticalPath,
      bounds: this.bounds,
      entranceRoom: this.rooms.find(r => r.type === ROOM_TYPE.ENTRANCE),
      bossRoom: this.rooms.find(r => r.type === ROOM_TYPE.BOSS),
      
      // Aggregate stats
      stats: {
        roomCount: this.rooms.length,
        enemyCount: this.rooms.reduce((sum, r) => sum + (r.enemies?.length || 0), 0),
        trapCount: this.rooms.reduce((sum, r) => sum + (r.traps?.length || 0), 0),
        chestCount: this.rooms.reduce((sum, r) => sum + (r.chests?.length || 0), 0),
        puzzleCount: this.rooms.filter(r => r.puzzle).length,
      },
    };
    
    console.log(`[DungeonGenerator] Generated dungeon with ${instance.stats.roomCount} rooms, ` +
      `${instance.stats.enemyCount} enemies, ${instance.stats.chestCount} chests`);
    
    return instance;
  }
  
  /**
   * Generate list of room types based on dungeon distribution
   */
  _generateRoomTypes(dungeonData, count) {
    const types = [];
    
    // Always include entrance and boss
    types.push(ROOM_TYPE.ENTRANCE);
    types.push(ROOM_TYPE.BOSS);
    
    // Always include miniboss if present
    if (dungeonData.miniboss) {
      types.push(ROOM_TYPE.MINIBOSS);
    }
    
    // Calculate remaining slots
    const remaining = count - types.length;
    
    // Get distribution weights
    const dist = dungeonData.roomDistribution;
    const totalWeight = Object.values(dist).reduce((a, b) => a + b, 0);
    
    // Fill remaining slots based on distribution
    for (let i = 0; i < remaining; i++) {
      const roll = this.random() * totalWeight;
      let cumulative = 0;
      
      for (const [type, weight] of Object.entries(dist)) {
        cumulative += weight;
        if (roll < cumulative) {
          types.push(type);
          break;
        }
      }
    }
    
    // Shuffle middle rooms (keep entrance first, boss last)
    const entrance = types.shift();
    const boss = types.splice(types.indexOf(ROOM_TYPE.BOSS), 1)[0];
    
    // Shuffle remaining
    for (let i = types.length - 1; i > 0; i--) {
      const j = Math.floor(this.random() * (i + 1));
      [types[i], types[j]] = [types[j], types[i]];
    }
    
    // Put entrance at start, boss at end
    types.unshift(entrance);
    types.push(boss);
    
    return types;
  }
  
  /**
   * Place rooms on the grid using graph-based algorithm
   */
  _placeRooms(roomTypes, dungeonData) {
    // Place entrance at origin
    const entranceRoom = this._createRoom(ROOM_TYPE.ENTRANCE, 0, 0, dungeonData);
    this.rooms.push(entranceRoom);
    this.grid.set(`0,0`, entranceRoom);
    this.criticalPath.push(entranceRoom);
    
    // Track frontier (rooms that can have new connections)
    const frontier = [entranceRoom];
    
    // Place remaining rooms
    let currentIndex = 1; // Skip entrance
    const bossIndex = roomTypes.length - 1;
    
    while (currentIndex < roomTypes.length && frontier.length > 0) {
      // Pick a frontier room (prefer ones with fewer connections for variety)
      const fromRoom = this._pickFrontierRoom(frontier);
      
      // Find valid adjacent positions
      const validPositions = this._getValidAdjacentPositions(fromRoom);
      
      if (validPositions.length === 0) {
        // This room is blocked, remove from frontier
        const idx = frontier.indexOf(fromRoom);
        if (idx !== -1) frontier.splice(idx, 1);
        continue;
      }
      
      // Pick a position
      const pos = validPositions[Math.floor(this.random() * validPositions.length)];
      
      // Create room
      const roomType = roomTypes[currentIndex];
      const newRoom = this._createRoom(roomType, pos.x, pos.z, dungeonData);
      newRoom.direction = pos.direction;
      
      this.rooms.push(newRoom);
      this.grid.set(`${pos.x},${pos.z}`, newRoom);
      
      // Connect to parent
      this.connections.push({
        from: fromRoom.id,
        to: newRoom.id,
        direction: pos.direction,
        type: this.random() < dungeonData.corridorChance ? 'corridor' : 'door',
      });
      
      fromRoom.connections.push(newRoom.id);
      newRoom.connections.push(fromRoom.id);
      
      // Add to critical path if not a branch
      if (currentIndex <= bossIndex) {
        this.criticalPath.push(newRoom);
      }
      
      // Add to frontier
      frontier.push(newRoom);
      
      // Maybe branch from other frontier rooms
      if (currentIndex < bossIndex && this.random() < dungeonData.branchingFactor) {
        // Try to add a branch room
        const branchFrom = frontier[Math.floor(this.random() * frontier.length)];
        const branchPositions = this._getValidAdjacentPositions(branchFrom);
        
        if (branchPositions.length > 0) {
          const branchPos = branchPositions[Math.floor(this.random() * branchPositions.length)];
          
          // Branch rooms are usually treasure or combat
          const branchType = this.random() < dungeonData.deadEndChance
            ? ROOM_TYPE.TREASURE
            : ROOM_TYPE.COMBAT;
          
          const branchRoom = this._createRoom(branchType, branchPos.x, branchPos.z, dungeonData);
          branchRoom.isBranch = true;
          branchRoom.isDeadEnd = this.random() < 0.5;
          
          this.rooms.push(branchRoom);
          this.grid.set(`${branchPos.x},${branchPos.z}`, branchRoom);
          
          this.connections.push({
            from: branchFrom.id,
            to: branchRoom.id,
            direction: branchPos.direction,
            type: 'door',
          });
          
          branchFrom.connections.push(branchRoom.id);
          branchRoom.connections.push(branchFrom.id);
          
          if (!branchRoom.isDeadEnd) {
            frontier.push(branchRoom);
          }
        }
      }
      
      currentIndex++;
      
      // Remove rooms with max connections from frontier
      for (let i = frontier.length - 1; i >= 0; i--) {
        if (frontier[i].connections.length >= 3) {
          frontier.splice(i, 1);
        }
      }
    }
  }
  
  /**
   * Create a room object
   */
  _createRoom(type, gridX, gridZ, dungeonData) {
    const template = getRandomRoomTemplate(type, dungeonData.theme) || {};
    const size = template.size || ROOM_SIZE.MEDIUM;
    
    // Boss room is always large
    const actualSize = type === ROOM_TYPE.BOSS ? ROOM_SIZE.BOSS :
                       type === ROOM_TYPE.ENTRANCE ? ROOM_SIZE.MEDIUM :
                       type === ROOM_TYPE.CORRIDOR ? ROOM_SIZE.CORRIDOR :
                       size;
    
    const room = {
      id: `room_${this.rooms.length}`,
      type,
      gridX,
      gridZ,
      
      // World position (center of room)
      position: {
        x: gridX * CELL_SIZE,
        y: 0,
        z: gridZ * CELL_SIZE,
      },
      
      // Dimensions
      width: actualSize.width,
      height: actualSize.height,
      depth: actualSize.depth,
      
      // Template data
      template: template,
      doorPositions: template.doorPositions || ['north', 'south'],
      features: template.features || [],
      propZones: template.propZones || [],
      
      // Connections (room IDs)
      connections: [],
      
      // Content (populated later)
      enemies: [],
      traps: [],
      chests: [],
      props: [],
      lights: [],
      puzzle: null,
      
      // State
      isCleared: false,
      isExplored: false,
      isBranch: false,
      isDeadEnd: false,
      isSecret: template.isSecret || false,
    };
    
    return room;
  }
  
  /**
   * Pick a frontier room for expansion
   */
  _pickFrontierRoom(frontier) {
    // Prefer rooms with fewer connections (creates more interesting layouts)
    const minConnections = Math.min(...frontier.map(r => r.connections.length));
    const candidates = frontier.filter(r => r.connections.length === minConnections);
    return candidates[Math.floor(this.random() * candidates.length)];
  }
  
  /**
   * Get valid adjacent grid positions for a room
   */
  _getValidAdjacentPositions(room) {
    const directions = [
      { dx: 0, dz: -1, direction: 'north' },
      { dx: 0, dz: 1, direction: 'south' },
      { dx: -1, dz: 0, direction: 'west' },
      { dx: 1, dz: 0, direction: 'east' },
    ];
    
    const valid = [];
    
    for (const dir of directions) {
      const newX = room.gridX + dir.dx;
      const newZ = room.gridZ + dir.dz;
      const key = `${newX},${newZ}`;
      
      // Check if position is free
      if (!this.grid.has(key)) {
        // Check door compatibility
        const oppositeDir = this._getOppositeDirection(dir.direction);
        if (room.doorPositions.includes(dir.direction) || room.doorPositions.includes('all')) {
          valid.push({ x: newX, z: newZ, direction: dir.direction });
        }
      }
    }
    
    return valid;
  }
  
  /**
   * Get opposite direction
   */
  _getOppositeDirection(dir) {
    const opposites = { north: 'south', south: 'north', east: 'west', west: 'east' };
    return opposites[dir];
  }
  
  /**
   * Generate corridor connections between rooms
   */
  _generateConnections(dungeonData) {
    // Connections are already created during room placement
    // This method adds corridor geometry data
    
    for (const conn of this.connections) {
      if (conn.type === 'corridor') {
        const fromRoom = this.rooms.find(r => r.id === conn.from);
        const toRoom = this.rooms.find(r => r.id === conn.to);
        
        if (!fromRoom || !toRoom) continue;
        
        // Calculate corridor geometry
        const midX = (fromRoom.position.x + toRoom.position.x) / 2;
        const midZ = (fromRoom.position.z + toRoom.position.z) / 2;
        
        conn.corridor = {
          position: { x: midX, y: 0, z: midZ },
          width: ROOM_SIZE.CORRIDOR.width,
          height: ROOM_SIZE.CORRIDOR.height,
          length: CORRIDOR_LENGTH,
          direction: conn.direction,
          hasDoor: this.random() < 0.3,
          hasTrap: this.random() < dungeonData.trapChance * 0.5,
        };
        
        // Add trap to corridor if flagged
        if (conn.corridor.hasTrap) {
          const trapConfig = getTrapConfig(dungeonData.id, ROOM_TYPE.COMBAT);
          if (trapConfig.length > 0) {
            conn.corridor.trap = trapConfig[0];
          }
        }
      }
    }
  }
  
  /**
   * Validate that a path exists from entrance to boss
   */
  _validatePath() {
    const entrance = this.rooms.find(r => r.type === ROOM_TYPE.ENTRANCE);
    const boss = this.rooms.find(r => r.type === ROOM_TYPE.BOSS);
    
    if (!entrance || !boss) return false;
    
    // BFS to find path
    const visited = new Set();
    const queue = [entrance.id];
    
    while (queue.length > 0) {
      const currentId = queue.shift();
      if (currentId === boss.id) return true;
      if (visited.has(currentId)) continue;
      
      visited.add(currentId);
      
      const room = this.rooms.find(r => r.id === currentId);
      if (room) {
        for (const connId of room.connections) {
          if (!visited.has(connId)) {
            queue.push(connId);
          }
        }
      }
    }
    
    return false;
  }
  
  /**
   * Populate rooms with enemies, traps, chests, etc.
   */
  _populateRooms(dungeonData, modifier) {
    for (const room of this.rooms) {
      switch (room.type) {
        case ROOM_TYPE.ENTRANCE:
          this._populateEntrance(room, dungeonData);
          break;
          
        case ROOM_TYPE.COMBAT:
          this._populateCombatRoom(room, dungeonData, modifier);
          break;
          
        case ROOM_TYPE.PUZZLE:
          this._populatePuzzleRoom(room, dungeonData);
          break;
          
        case ROOM_TYPE.TREASURE:
          this._populateTreasureRoom(room, dungeonData, modifier);
          break;
          
        case ROOM_TYPE.REST:
          this._populateRestRoom(room, dungeonData);
          break;
          
        case ROOM_TYPE.MINIBOSS:
          this._populateMinibossRoom(room, dungeonData, modifier);
          break;
          
        case ROOM_TYPE.BOSS:
          this._populateBossRoom(room, dungeonData);
          break;
      }
      
      // Add props based on dungeon theme
      this._addProps(room, dungeonData);
      
      // Add lighting
      this._addLighting(room, dungeonData);
    }
  }
  
  /**
   * Populate entrance room (safe, tutorial hints)
   */
  _populateEntrance(room, dungeonData) {
    room.isCleared = true; // Entrance is always safe
    room.isExplored = true;
    
    // Add entrance portal/door visual
    room.features.push({
      type: 'entrance_portal',
      position: { x: 0, y: 0, z: room.depth / 2 - 1 },
    });
    
    // Maybe add a hint sign
    if (this.random() < 0.5) {
      room.props.push({
        type: 'sign',
        position: { x: 2, y: 1.5, z: 0 },
        text: `${dungeonData.name}\nBeware: ${dungeonData.boss.name} lurks within`,
      });
    }
  }
  
  /**
   * Populate combat room with enemies and traps
   */
  _populateCombatRoom(room, dungeonData, modifier) {
    // Get enemy configuration
    const enemyConfig = getEnemySpawnConfig(dungeonData.id, room.type, modifier);
    
    // Place enemies at spawn points
    for (let i = 0; i < enemyConfig.enemies.length; i++) {
      const enemy = enemyConfig.enemies[i];
      const angle = (i / enemyConfig.enemies.length) * Math.PI * 2;
      const radius = room.width * 0.3;
      
      room.enemies.push({
        ...enemy,
        id: `enemy_${room.id}_${i}`,
        spawnPosition: {
          x: Math.cos(angle) * radius,
          y: 0,
          z: Math.sin(angle) * radius,
        },
        levelRange: dungeonData.enemyLevelRange,
      });
    }
    
    // Get trap configuration
    const traps = getTrapConfig(dungeonData.id, room.type);
    for (let i = 0; i < traps.length; i++) {
      const trap = traps[i];
      room.traps.push({
        ...trap,
        id: `trap_${room.id}_${i}`,
        position: {
          x: (this.random() - 0.5) * room.width * 0.6,
          y: 0,
          z: (this.random() - 0.5) * room.depth * 0.6,
        },
        isArmed: true,
      });
    }
    
    // Small chance for bonus chest
    if (this.random() < 0.2) {
      const loot = generateChestLoot(dungeonData.id, 'normal', modifier);
      room.chests.push({
        id: `chest_${room.id}_0`,
        type: 'normal',
        position: { x: 0, y: 0, z: -room.depth / 2 + 2 },
        loot,
        isOpen: false,
        isLocked: false,
      });
    }
  }
  
  /**
   * Populate puzzle room
   */
  _populatePuzzleRoom(room, dungeonData) {
    const puzzle = getPuzzleConfig(dungeonData.id);
    if (puzzle) {
      room.puzzle = {
        ...puzzle,
        id: `puzzle_${room.id}`,
        isSolved: false,
        currentState: new Array(puzzle.componentCount).fill(0),
        reward: generateChestLoot(dungeonData.id, 'treasure'),
      };
      
      // Add puzzle components as features
      for (let i = 0; i < puzzle.componentCount; i++) {
        room.features.push({
          type: puzzle.visualType,
          index: i,
          position: this._getPuzzleComponentPosition(i, puzzle.componentCount, room),
        });
      }
    }
    
    // Puzzle rooms have no enemies until failed
    room.enemiesOnFail = [];
    if (puzzle && puzzle.failurePenalty === 'spawn_enemies') {
      const enemyConfig = getEnemySpawnConfig(dungeonData.id, ROOM_TYPE.COMBAT);
      room.enemiesOnFail = enemyConfig.enemies.slice(0, 2); // Fewer enemies on fail
    }
  }
  
  /**
   * Get position for puzzle component
   */
  _getPuzzleComponentPosition(index, total, room) {
    // Arrange in a circle or line based on count
    if (total <= 4) {
      // Line arrangement
      const spacing = room.width / (total + 1);
      return {
        x: spacing * (index + 1) - room.width / 2,
        y: 1,
        z: 0,
      };
    } else {
      // Circle arrangement
      const angle = (index / total) * Math.PI * 2;
      const radius = Math.min(room.width, room.depth) * 0.35;
      return {
        x: Math.cos(angle) * radius,
        y: 1,
        z: Math.sin(angle) * radius,
      };
    }
  }
  
  /**
   * Populate treasure room
   */
  _populateTreasureRoom(room, dungeonData, modifier) {
    // Main treasure chest
    const mainLoot = generateChestLoot(dungeonData.id, 'treasure', modifier);
    room.chests.push({
      id: `chest_${room.id}_main`,
      type: 'treasure',
      position: { x: 0, y: 0, z: -room.depth / 2 + 2 },
      loot: mainLoot,
      isOpen: false,
      isLocked: this.random() < 0.3,
      keyId: room.isSecret ? `key_secret_${room.id}` : null,
    });
    
    // Additional smaller chests
    const extraChests = Math.floor(this.random() * 2) + 1;
    for (let i = 0; i < extraChests; i++) {
      const loot = generateChestLoot(dungeonData.id, 'normal', modifier);
      room.chests.push({
        id: `chest_${room.id}_${i}`,
        type: 'normal',
        position: {
          x: (i === 0 ? -1 : 1) * (room.width / 3),
          y: 0,
          z: -room.depth / 2 + 2,
        },
        loot,
        isOpen: false,
        isLocked: false,
      });
    }
    
    // Treasure rooms may have trap guards
    if (this.random() < 0.4) {
      const traps = getTrapConfig(dungeonData.id, ROOM_TYPE.COMBAT);
      if (traps.length > 0) {
        room.traps.push({
          ...traps[0],
          id: `trap_${room.id}_guard`,
          position: { x: 0, y: 0, z: 0 },
          isArmed: true,
        });
      }
    }
  }
  
  /**
   * Populate rest room (checkpoint)
   */
  _populateRestRoom(room, dungeonData) {
    room.isCleared = true; // Rest rooms are safe
    
    // Add bonfire/checkpoint
    room.features.push({
      type: 'bonfire',
      position: { x: 0, y: 0, z: 0 },
      isLit: true,
    });
    
    // Add bench
    room.props.push({
      type: 'bench',
      position: { x: -3, y: 0, z: 0 },
      rotation: Math.PI / 2,
    });
    
    // Maybe add a merchant
    if (this.random() < 0.3) {
      room.npc = {
        type: 'merchant',
        position: { x: 3, y: 0, z: 0 },
        inventory: 'dungeon_supplies',
      };
    }
  }
  
  /**
   * Populate miniboss room
   */
  _populateMinibossRoom(room, dungeonData, modifier) {
    const miniboss = dungeonData.miniboss;
    if (!miniboss) return;
    
    room.miniboss = {
      ...miniboss,
      id: `miniboss_${room.id}`,
      spawnPosition: { x: 0, y: 0, z: -room.depth / 4 },
      isDefeated: false,
    };
    
    // Add some adds (helper enemies)
    const enemyConfig = getEnemySpawnConfig(dungeonData.id, room.type, modifier);
    room.enemies = enemyConfig.enemies.slice(0, 2).map((e, i) => ({
      ...e,
      id: `miniboss_add_${room.id}_${i}`,
      spawnPosition: {
        x: (i === 0 ? -1 : 1) * 5,
        y: 0,
        z: -room.depth / 4,
      },
    }));
    
    // Miniboss drops good loot
    room.chests.push({
      id: `chest_${room.id}_miniboss`,
      type: 'boss',
      position: { x: 0, y: 0, z: -room.depth / 2 + 2 },
      loot: generateChestLoot(dungeonData.id, 'boss', modifier),
      isOpen: false,
      isLocked: true,
      unlocksOnClear: true,
    });
  }
  
  /**
   * Populate boss room
   */
  _populateBossRoom(room, dungeonData) {
    const boss = dungeonData.boss;
    
    room.boss = {
      ...boss,
      id: `boss_${room.id}`,
      spawnPosition: { x: 0, y: 0, z: -room.depth / 3 },
      isDefeated: false,
      currentPhase: 1,
    };
    
    // Add boss altar/throne
    room.features.push({
      type: 'boss_altar',
      position: { x: 0, y: 0, z: -room.depth / 2 + 3 },
    });
    
    // Add pillars for cover
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
      room.props.push({
        type: 'pillar',
        position: {
          x: Math.cos(angle) * (room.width / 3),
          y: 0,
          z: Math.sin(angle) * (room.depth / 3),
        },
        destructible: true,
      });
    }
    
    // Exit portal (appears after boss defeat)
    room.features.push({
      type: 'exit_portal',
      position: { x: 0, y: 0, z: -room.depth / 2 + 1 },
      isActive: false, // Activates on boss defeat
    });
  }
  
  /**
   * Add decorative props to room
   */
  _addProps(room, dungeonData) {
    const propTypes = dungeonData.props;
    const propCount = Math.floor(this.random() * 5) + 2;
    
    for (let i = 0; i < propCount; i++) {
      const propType = propTypes[Math.floor(this.random() * propTypes.length)];
      
      // Position props along walls or in corners
      let position;
      if (this.random() < 0.5) {
        // Wall position
        const wall = Math.floor(this.random() * 4);
        switch (wall) {
          case 0: // North
            position = { x: (this.random() - 0.5) * room.width * 0.8, y: 0, z: -room.depth / 2 + 1 };
            break;
          case 1: // South
            position = { x: (this.random() - 0.5) * room.width * 0.8, y: 0, z: room.depth / 2 - 1 };
            break;
          case 2: // East
            position = { x: room.width / 2 - 1, y: 0, z: (this.random() - 0.5) * room.depth * 0.8 };
            break;
          case 3: // West
            position = { x: -room.width / 2 + 1, y: 0, z: (this.random() - 0.5) * room.depth * 0.8 };
            break;
        }
      } else {
        // Corner position
        const corner = Math.floor(this.random() * 4);
        const xSign = corner < 2 ? -1 : 1;
        const zSign = corner % 2 === 0 ? -1 : 1;
        position = {
          x: xSign * (room.width / 2 - 2),
          y: 0,
          z: zSign * (room.depth / 2 - 2),
        };
      }
      
      room.props.push({
        type: propType,
        position,
        rotation: this.random() * Math.PI * 2,
        scale: 0.8 + this.random() * 0.4,
      });
    }
  }
  
  /**
   * Add lighting to room
   */
  _addLighting(room, dungeonData) {
    const lightingType = dungeonData.lighting;
    
    // Central ambient light
    room.lights.push({
      type: 'ambient',
      position: { x: 0, y: room.height - 1, z: 0 },
      color: dungeonData.ambientColor,
      intensity: 0.3,
    });
    
    // Light sources based on theme
    switch (lightingType) {
      case 'torches':
      case 'torches_dim':
        // Wall torches
        const torchCount = Math.floor(room.width / 6) * 2;
        for (let i = 0; i < torchCount; i++) {
          const side = i % 2 === 0 ? -1 : 1;
          room.lights.push({
            type: 'torch',
            position: {
              x: side * (room.width / 2 - 0.5),
              y: 2.5,
              z: ((i / 2) / (torchCount / 2 - 1) - 0.5) * room.depth * 0.8,
            },
            color: 0xff6622,
            intensity: lightingType === 'torches_dim' ? 0.6 : 1.0,
            flicker: true,
          });
        }
        break;
        
      case 'crystals':
        // Glowing crystals
        const crystalCount = Math.floor(this.random() * 4) + 3;
        for (let i = 0; i < crystalCount; i++) {
          room.lights.push({
            type: 'crystal',
            position: {
              x: (this.random() - 0.5) * room.width * 0.9,
              y: this.random() * room.height * 0.6 + 1,
              z: (this.random() - 0.5) * room.depth * 0.9,
            },
            color: this.random() < 0.5 ? 0x00ffff : 0xaa66ff,
            intensity: 0.8,
            pulse: true,
          });
        }
        break;
        
      case 'magic_glow':
        // Void magic lighting
        room.lights.push({
          type: 'magic',
          position: { x: 0, y: room.height / 2, z: 0 },
          color: 0x6622aa,
          intensity: 0.5,
          pulse: true,
        });
        
        // Void cracks emit light
        for (let i = 0; i < 3; i++) {
          room.lights.push({
            type: 'void_crack',
            position: {
              x: (this.random() - 0.5) * room.width,
              y: 0.1,
              z: (this.random() - 0.5) * room.depth,
            },
            color: 0x8844ff,
            intensity: 0.4,
            flicker: true,
          });
        }
        break;
    }
  }
  
  /**
   * Calculate dungeon bounds
   */
  _calculateBounds() {
    for (const room of this.rooms) {
      const halfWidth = room.width / 2;
      const halfDepth = room.depth / 2;
      
      this.bounds.minX = Math.min(this.bounds.minX, room.position.x - halfWidth);
      this.bounds.maxX = Math.max(this.bounds.maxX, room.position.x + halfWidth);
      this.bounds.minZ = Math.min(this.bounds.minZ, room.position.z - halfDepth);
      this.bounds.maxZ = Math.max(this.bounds.maxZ, room.position.z + halfDepth);
    }
  }
  
  /**
   * Get room at grid position
   */
  getRoomAt(gridX, gridZ) {
    return this.grid.get(`${gridX},${gridZ}`);
  }
  
  /**
   * Get room by ID
   */
  getRoomById(roomId) {
    return this.rooms.find(r => r.id === roomId);
  }
  
  /**
   * Get connected rooms
   */
  getConnectedRooms(roomId) {
    const room = this.getRoomById(roomId);
    if (!room) return [];
    return room.connections.map(id => this.getRoomById(id)).filter(Boolean);
  }
}

/**
 * Factory function for creating dungeon instances
 */
export function createDungeon(dungeonId, modifier = 'none', seed = null) {
  const generator = new DungeonGenerator(seed);
  return generator.generate(dungeonId, modifier);
}
