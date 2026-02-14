/**
 * DungeonRenderer.js - Dungeon Visual Rendering System
 * Phase 22: Dungeon Instances
 * 
 * Renders enclosed dungeon rooms with walls, floors, ceilings.
 * Features:
 * - Biome-specific textures/colors (Catacombs, Caverns, Hideout, Temple)
 * - Atmospheric lighting (torches, crystals, magic flames)
 * - Props per room type (combat pillars, puzzle pedestals, treasure chests)
 * - Doors between rooms (open, closed, locked states)
 * - Fog and particle effects for atmosphere
 * - Minimap room tracking
 */

import * as THREE from 'three';
import { ROOM_TYPE, ROOM_SIZE, DUNGEONS } from '../data/DungeonData.js';

// ========== DUNGEON COLOR PALETTES ==========
const DUNGEON_PALETTES = {
  catacombs: {
    floor: 0x2a2520,
    wall: 0x3a3530,
    ceiling: 0x252015,
    accent: 0x4a4035,
    trim: 0x1a1510,
    light: 0xff7722,
    fog: 0x0a0810,
    ambient: 0x1a1520,
  },
  caverns: {
    floor: 0x2a3035,
    wall: 0x3a4045,
    ceiling: 0x1a2025,
    accent: 0x4a6080,
    trim: 0x203040,
    light: 0x44aaff,
    fog: 0x0a1520,
    ambient: 0x102030,
  },
  hideout: {
    floor: 0x3a3025,
    wall: 0x4a4035,
    ceiling: 0x2a2520,
    accent: 0x5a4a35,
    trim: 0x2a2015,
    light: 0xff6633,
    fog: 0x1a1510,
    ambient: 0x2a2018,
  },
  temple: {
    floor: 0x2a1a30,
    wall: 0x3a2540,
    ceiling: 0x1a1020,
    accent: 0x5a3060,
    trim: 0x150818,
    light: 0xaa44ff,
    fog: 0x100818,
    ambient: 0x1a0a20,
  },
};

// ========== PROP DEFINITIONS ==========
const PROP_DEFINITIONS = {
  // Catacombs props
  coffins: { geometry: 'box', size: [1.2, 0.5, 0.6], color: 0x3a3025, offset: [0, 0.25, 0] },
  bones: { geometry: 'scattered', color: 0x8a7a5a, count: 5 },
  candles: { geometry: 'cylinder', size: [0.05, 0.15], color: 0xeedd88, emissive: 0xff7722, light: true },
  cobwebs: { geometry: 'plane', size: [1, 1], color: 0x888888, transparent: true },
  skulls: { geometry: 'sphere', size: [0.12], color: 0x9a8a6a },
  broken_tombs: { geometry: 'box', size: [1.5, 0.4, 0.8], color: 0x3a3530, broken: true },
  
  // Cavern props
  crystal_formations: { geometry: 'crystal', color: 0x44aaff, emissive: 0x2288ff, light: true },
  stalactites: { geometry: 'cone', size: [0.2, 0.8], color: 0x4a4a55, ceiling: true },
  mining_equipment: { geometry: 'group', parts: ['pickaxe', 'cart', 'lantern'] },
  glowing_mushrooms: { geometry: 'mushroom', color: 0x44ff88, emissive: 0x22aa44, light: true },
  spider_webs: { geometry: 'plane', size: [2, 2], color: 0xcccccc, transparent: true },
  mine_carts: { geometry: 'box', size: [0.8, 0.5, 0.5], color: 0x5a4a3a, wheels: true },
  
  // Hideout props
  crates: { geometry: 'box', size: [0.7, 0.7, 0.7], color: 0x5a4530 },
  barrels: { geometry: 'cylinder', size: [0.4, 0.8], color: 0x4a3a25 },
  weapon_racks: { geometry: 'rack', color: 0x3a2a20 },
  tables: { geometry: 'table', color: 0x4a3a2a },
  beds: { geometry: 'bed', color: 0x5a5045 },
  treasure_piles: { geometry: 'pile', color: 0xddaa44, metallic: true },
  
  // Temple props
  altars: { geometry: 'altar', color: 0x4a3550, emissive: 0x6622aa },
  statues: { geometry: 'statue', color: 0x5a4a60 },
  ritual_circles: { geometry: 'circle', color: 0x6622aa, emissive: 0x6622aa, floor: true },
  corrupted_banners: { geometry: 'banner', color: 0x3a1040 },
  void_cracks: { geometry: 'crack', color: 0x8844ff, emissive: 0x6622aa, floor: true },
  floating_debris: { geometry: 'debris', color: 0x4a3a50, float: true },
  
  // Universal props
  pillar: { geometry: 'cylinder', size: [0.4, 4], color: 0x5a5a5a },
  torch_holder: { geometry: 'torch', color: 0x3a3a3a },
  chest: { geometry: 'chest', color: 0x5a4530 },
  door_frame: { geometry: 'doorframe', color: 0x3a3530 },
};

/**
 * DungeonRenderer - Renders complete dungeon environments
 */
export class DungeonRenderer {
  constructor(scene) {
    this.scene = scene;
    
    // Root group for all dungeon geometry
    this.dungeonGroup = new THREE.Group();
    this.dungeonGroup.name = 'DungeonInstance';
    scene.add(this.dungeonGroup);
    
    // Sub-groups for organization
    this.roomsGroup = new THREE.Group();
    this.roomsGroup.name = 'Rooms';
    this.dungeonGroup.add(this.roomsGroup);
    
    this.doorsGroup = new THREE.Group();
    this.doorsGroup.name = 'Doors';
    this.dungeonGroup.add(this.doorsGroup);
    
    this.propsGroup = new THREE.Group();
    this.propsGroup.name = 'Props';
    this.dungeonGroup.add(this.propsGroup);
    
    this.lightsGroup = new THREE.Group();
    this.lightsGroup.name = 'Lights';
    this.dungeonGroup.add(this.lightsGroup);
    
    this.effectsGroup = new THREE.Group();
    this.effectsGroup.name = 'Effects';
    this.dungeonGroup.add(this.effectsGroup);
    
    // Current dungeon instance data
    this.currentDungeon = null;
    this.renderedRooms = new Map();
    this.doors = new Map();
    this.activeLights = [];
    this.particleSystems = [];
    
    // Materials cache
    this.materialsCache = new Map();
    
    // Minimap data
    this.minimapRooms = [];
    
    console.log('[DungeonRenderer] Initialized');
  }

  /**
   * Render a complete dungeon instance
   * @param {Object} dungeonInstance - Generated dungeon from DungeonGenerator
   */
  renderDungeon(dungeonInstance) {
    console.log(`[DungeonRenderer] Rendering dungeon: ${dungeonInstance.dungeonData.name}`);
    
    // Clear previous dungeon
    this.clearDungeon();
    
    this.currentDungeon = dungeonInstance;
    const theme = dungeonInstance.dungeonData.theme;
    const palette = DUNGEON_PALETTES[theme] || DUNGEON_PALETTES.catacombs;
    
    // Set up dungeon-wide fog
    this.setupFog(dungeonInstance.dungeonData);
    
    // Render each room
    for (const room of dungeonInstance.rooms) {
      this.renderRoom(room, theme, palette);
    }
    
    // Render connections (corridors and doors)
    for (const connection of dungeonInstance.connections) {
      this.renderConnection(connection, dungeonInstance, theme, palette);
    }
    
    // Add atmospheric particles
    this.addAtmosphericParticles(dungeonInstance.dungeonData, dungeonInstance.bounds);
    
    console.log(`[DungeonRenderer] Rendered ${dungeonInstance.rooms.length} rooms`);
  }

  /**
   * Clear all dungeon geometry
   */
  clearDungeon() {
    // Remove all children from groups
    this.clearGroup(this.roomsGroup);
    this.clearGroup(this.doorsGroup);
    this.clearGroup(this.propsGroup);
    this.clearGroup(this.lightsGroup);
    this.clearGroup(this.effectsGroup);
    
    // Clear tracking
    this.renderedRooms.clear();
    this.doors.clear();
    this.activeLights = [];
    this.particleSystems = [];
    this.minimapRooms = [];
    this.currentDungeon = null;
    
    // Reset fog
    if (this.scene.fog) {
      this.scene.fog = null;
    }
  }

  /**
   * Clear all children from a group
   */
  clearGroup(group) {
    while (group.children.length > 0) {
      const child = group.children[0];
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.dispose());
        } else {
          child.material.dispose();
        }
      }
      group.remove(child);
    }
  }

  /**
   * Set up fog for the dungeon
   */
  setupFog(dungeonData) {
    const fogColor = dungeonData.fogColor || 0x0a0a0a;
    const fogDensity = dungeonData.fogDensity || 0.05;
    
    this.scene.fog = new THREE.FogExp2(fogColor, fogDensity);
  }

  /**
   * Render a single room
   */
  renderRoom(room, theme, palette) {
    const roomGroup = new THREE.Group();
    roomGroup.name = `Room_${room.id}`;
    roomGroup.position.set(room.position.x, room.position.y, room.position.z);
    
    // Room dimensions
    const width = room.width;
    const height = room.height;
    const depth = room.depth;
    
    // Create room geometry
    this.createRoomGeometry(roomGroup, width, height, depth, palette, room.type);
    
    // Add room features (special elements based on room type)
    this.addRoomFeatures(roomGroup, room, theme, palette);
    
    // Add props
    this.addRoomProps(roomGroup, room, theme, palette);
    
    // Add lighting
    this.addRoomLighting(roomGroup, room, theme, palette);
    
    this.roomsGroup.add(roomGroup);
    this.renderedRooms.set(room.id, roomGroup);
    
    // Add to minimap data
    this.minimapRooms.push({
      id: room.id,
      gridX: room.gridX,
      gridZ: room.gridZ,
      type: room.type,
      isExplored: room.isExplored,
      isCleared: room.isCleared,
    });
  }

  /**
   * Create the basic room geometry (floor, walls, ceiling)
   */
  createRoomGeometry(roomGroup, width, height, depth, palette, roomType) {
    const halfWidth = width / 2;
    const halfDepth = depth / 2;
    
    // === FLOOR ===
    const floorMat = this.getMaterial('floor', palette.floor, {
      roughness: 0.9,
      metalness: 0.05,
    });
    
    const floorGeo = new THREE.PlaneGeometry(width, depth, 4, 4);
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    roomGroup.add(floor);
    
    // Add floor details (cracks, tiles pattern)
    this.addFloorDetails(roomGroup, width, depth, palette);
    
    // === CEILING ===
    const ceilingMat = this.getMaterial('ceiling', palette.ceiling, {
      roughness: 0.85,
      metalness: 0.05,
    });
    
    const ceilingGeo = new THREE.PlaneGeometry(width, depth, 2, 2);
    const ceiling = new THREE.Mesh(ceilingGeo, ceilingMat);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = height;
    ceiling.receiveShadow = true;
    roomGroup.add(ceiling);
    
    // Add ceiling details (arches, beams based on theme)
    this.addCeilingDetails(roomGroup, width, height, depth, palette);
    
    // === WALLS ===
    const wallMat = this.getMaterial('wall', palette.wall, {
      roughness: 0.85,
      metalness: 0.1,
    });
    
    // North wall (Z-)
    const northWall = this.createWall(width, height, wallMat);
    northWall.position.set(0, height / 2, -halfDepth);
    roomGroup.add(northWall);
    
    // South wall (Z+)
    const southWall = this.createWall(width, height, wallMat);
    southWall.position.set(0, height / 2, halfDepth);
    southWall.rotation.y = Math.PI;
    roomGroup.add(southWall);
    
    // East wall (X+)
    const eastWall = this.createWall(depth, height, wallMat);
    eastWall.position.set(halfWidth, height / 2, 0);
    eastWall.rotation.y = -Math.PI / 2;
    roomGroup.add(eastWall);
    
    // West wall (X-)
    const westWall = this.createWall(depth, height, wallMat);
    westWall.position.set(-halfWidth, height / 2, 0);
    westWall.rotation.y = Math.PI / 2;
    roomGroup.add(westWall);
    
    // Add wall details (trim, bricks, decorations)
    this.addWallDetails(roomGroup, width, height, depth, palette);
  }

  /**
   * Create a wall mesh
   */
  createWall(wallWidth, wallHeight, material) {
    const wallGeo = new THREE.PlaneGeometry(wallWidth, wallHeight, 2, 2);
    const wall = new THREE.Mesh(wallGeo, material);
    wall.receiveShadow = true;
    wall.castShadow = true;
    return wall;
  }

  /**
   * Add floor details (cracks, tile patterns)
   */
  addFloorDetails(roomGroup, width, depth, palette) {
    // Add floor trim/edges
    const trimMat = this.getMaterial('trim', palette.trim, {
      roughness: 0.8,
      metalness: 0.2,
    });
    
    const trimWidth = 0.3;
    const trimHeight = 0.05;
    
    // Create trim around edges
    const trimGeo = new THREE.BoxGeometry(width + trimWidth * 2, trimHeight, trimWidth);
    
    // North trim
    const northTrim = new THREE.Mesh(trimGeo, trimMat);
    northTrim.position.set(0, trimHeight / 2, -depth / 2 + trimWidth / 2);
    roomGroup.add(northTrim);
    
    // South trim
    const southTrim = new THREE.Mesh(trimGeo, trimMat);
    southTrim.position.set(0, trimHeight / 2, depth / 2 - trimWidth / 2);
    roomGroup.add(southTrim);
    
    // Side trims
    const sideTrimGeo = new THREE.BoxGeometry(trimWidth, trimHeight, depth);
    
    const eastTrim = new THREE.Mesh(sideTrimGeo, trimMat);
    eastTrim.position.set(width / 2 - trimWidth / 2, trimHeight / 2, 0);
    roomGroup.add(eastTrim);
    
    const westTrim = new THREE.Mesh(sideTrimGeo, trimMat);
    westTrim.position.set(-width / 2 + trimWidth / 2, trimHeight / 2, 0);
    roomGroup.add(westTrim);
  }

  /**
   * Add ceiling details (arches, beams)
   */
  addCeilingDetails(roomGroup, width, height, depth, palette) {
    const beamMat = this.getMaterial('beam', palette.accent, {
      roughness: 0.7,
      metalness: 0.15,
    });
    
    // Cross beams
    const beamWidth = 0.3;
    const beamDepth = 0.2;
    
    // Main beam (east-west)
    const mainBeamGeo = new THREE.BoxGeometry(width * 0.9, beamDepth, beamWidth);
    const mainBeam = new THREE.Mesh(mainBeamGeo, beamMat);
    mainBeam.position.set(0, height - beamDepth / 2, 0);
    mainBeam.castShadow = true;
    roomGroup.add(mainBeam);
    
    // Cross beam (north-south) for larger rooms
    if (width > 10) {
      const crossBeamGeo = new THREE.BoxGeometry(beamWidth, beamDepth, depth * 0.9);
      const crossBeam = new THREE.Mesh(crossBeamGeo, beamMat);
      crossBeam.position.set(0, height - beamDepth / 2, 0);
      crossBeam.castShadow = true;
      roomGroup.add(crossBeam);
    }
  }

  /**
   * Add wall details (trim, brick patterns)
   */
  addWallDetails(roomGroup, width, height, depth, palette) {
    const trimMat = this.getMaterial('wall_trim', palette.accent, {
      roughness: 0.75,
      metalness: 0.2,
    });
    
    // Base molding
    const moldingHeight = 0.15;
    const moldingDepth = 0.05;
    
    const moldingGeo = new THREE.BoxGeometry(width, moldingHeight, moldingDepth);
    
    // North base molding
    const northMolding = new THREE.Mesh(moldingGeo, trimMat);
    northMolding.position.set(0, moldingHeight / 2, -depth / 2 + moldingDepth / 2);
    roomGroup.add(northMolding);
    
    // South base molding
    const southMolding = new THREE.Mesh(moldingGeo, trimMat);
    southMolding.position.set(0, moldingHeight / 2, depth / 2 - moldingDepth / 2);
    roomGroup.add(southMolding);
    
    // Side moldings
    const sideMoldingGeo = new THREE.BoxGeometry(moldingDepth, moldingHeight, depth);
    
    const eastMolding = new THREE.Mesh(sideMoldingGeo, trimMat);
    eastMolding.position.set(width / 2 - moldingDepth / 2, moldingHeight / 2, 0);
    roomGroup.add(eastMolding);
    
    const westMolding = new THREE.Mesh(sideMoldingGeo, trimMat);
    westMolding.position.set(-width / 2 + moldingDepth / 2, moldingHeight / 2, 0);
    roomGroup.add(westMolding);
  }

  /**
   * Add room features based on type
   */
  addRoomFeatures(roomGroup, room, theme, palette) {
    switch (room.type) {
      case ROOM_TYPE.ENTRANCE:
        this.addEntranceFeatures(roomGroup, room, palette);
        break;
      case ROOM_TYPE.BOSS:
        this.addBossRoomFeatures(roomGroup, room, palette);
        break;
      case ROOM_TYPE.COMBAT:
        this.addCombatFeatures(roomGroup, room, palette);
        break;
      case ROOM_TYPE.PUZZLE:
        this.addPuzzleFeatures(roomGroup, room, palette);
        break;
      case ROOM_TYPE.TREASURE:
        this.addTreasureFeatures(roomGroup, room, palette);
        break;
      case ROOM_TYPE.REST:
        this.addRestFeatures(roomGroup, room, palette);
        break;
      case ROOM_TYPE.MINIBOSS:
        this.addMinibossFeatures(roomGroup, room, palette);
        break;
    }
    
    // Add features from room data
    if (room.features) {
      for (const feature of room.features) {
        this.addFeature(roomGroup, feature, palette);
      }
    }
  }

  /**
   * Add entrance room features
   */
  addEntranceFeatures(roomGroup, room, palette) {
    // Entrance portal/archway
    const archMat = this.getMaterial('arch', palette.accent, {
      roughness: 0.7,
      metalness: 0.3,
    });
    
    // Stone archway
    const archGeo = new THREE.TorusGeometry(1.5, 0.2, 8, 12, Math.PI);
    const arch = new THREE.Mesh(archGeo, archMat);
    arch.position.set(0, 2.5, room.depth / 2 - 0.5);
    arch.rotation.x = Math.PI / 2;
    arch.castShadow = true;
    roomGroup.add(arch);
    
    // Arch supports
    const pillarGeo = new THREE.CylinderGeometry(0.2, 0.25, 2.5, 8);
    
    const leftPillar = new THREE.Mesh(pillarGeo, archMat);
    leftPillar.position.set(-1.5, 1.25, room.depth / 2 - 0.5);
    leftPillar.castShadow = true;
    roomGroup.add(leftPillar);
    
    const rightPillar = new THREE.Mesh(pillarGeo, archMat);
    rightPillar.position.set(1.5, 1.25, room.depth / 2 - 0.5);
    rightPillar.castShadow = true;
    roomGroup.add(rightPillar);
    
    // Glowing entrance runes
    const runeMat = new THREE.MeshStandardMaterial({
      color: palette.light,
      emissive: palette.light,
      emissiveIntensity: 2,
      transparent: true,
      opacity: 0.8,
    });
    
    const runeGeo = new THREE.RingGeometry(0.8, 1.0, 6);
    const rune = new THREE.Mesh(runeGeo, runeMat);
    rune.position.set(0, 0.01, room.depth / 2 - 1.5);
    rune.rotation.x = -Math.PI / 2;
    roomGroup.add(rune);
  }

  /**
   * Add boss room features
   */
  addBossRoomFeatures(roomGroup, room, palette) {
    // Central boss arena circle
    const arenaGeo = new THREE.RingGeometry(4, 5, 32);
    const arenaMat = new THREE.MeshStandardMaterial({
      color: palette.accent,
      emissive: palette.light,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.4,
    });
    const arena = new THREE.Mesh(arenaGeo, arenaMat);
    arena.position.set(0, 0.02, 0);
    arena.rotation.x = -Math.PI / 2;
    roomGroup.add(arena);
    
    // Boss altar/throne at the back
    const altarMat = this.getMaterial('altar', palette.accent, {
      roughness: 0.5,
      metalness: 0.4,
    });
    
    // Altar base
    const altarGeo = new THREE.BoxGeometry(3, 0.8, 2);
    const altar = new THREE.Mesh(altarGeo, altarMat);
    altar.position.set(0, 0.4, -room.depth / 2 + 3);
    altar.castShadow = true;
    roomGroup.add(altar);
    
    // Altar steps
    const stepGeo = new THREE.BoxGeometry(4, 0.2, 1);
    for (let i = 0; i < 3; i++) {
      const step = new THREE.Mesh(stepGeo, altarMat);
      step.position.set(0, 0.1 + i * 0.2, -room.depth / 2 + 4.5 + i * 0.5);
      step.castShadow = true;
      roomGroup.add(step);
    }
    
    // Corner pillars
    const pillarGeo = new THREE.CylinderGeometry(0.5, 0.6, room.height * 0.9, 8);
    const pillarMat = this.getMaterial('pillar', palette.wall, {
      roughness: 0.7,
      metalness: 0.2,
    });
    
    const pillarPositions = [
      { x: -room.width / 2 + 2, z: -room.depth / 2 + 2 },
      { x: room.width / 2 - 2, z: -room.depth / 2 + 2 },
      { x: -room.width / 2 + 2, z: room.depth / 2 - 2 },
      { x: room.width / 2 - 2, z: room.depth / 2 - 2 },
    ];
    
    for (const pos of pillarPositions) {
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(pos.x, room.height * 0.45, pos.z);
      pillar.castShadow = true;
      roomGroup.add(pillar);
      
      // Pillar top light
      const light = new THREE.PointLight(palette.light, 0.8, 8);
      light.position.set(pos.x, room.height - 0.5, pos.z);
      roomGroup.add(light);
      this.activeLights.push(light);
    }
    
    // Exit portal placeholder (activates on boss defeat)
    const portalGeo = new THREE.TorusGeometry(1.5, 0.15, 8, 24);
    const portalMat = new THREE.MeshStandardMaterial({
      color: 0x44ff88,
      emissive: 0x44ff88,
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.3,
    });
    const portal = new THREE.Mesh(portalGeo, portalMat);
    portal.position.set(0, 2, -room.depth / 2 + 1);
    portal.rotation.x = Math.PI / 2;
    portal.userData.isExitPortal = true;
    portal.userData.isActive = false;
    roomGroup.add(portal);
  }

  /**
   * Add combat room features (pillars for cover)
   */
  addCombatFeatures(roomGroup, room, palette) {
    // Add pillars for tactical combat
    const pillarGeo = new THREE.CylinderGeometry(0.35, 0.4, room.height * 0.8, 8);
    const pillarMat = this.getMaterial('pillar', palette.wall, {
      roughness: 0.75,
      metalness: 0.15,
    });
    
    // Number of pillars based on room size
    const pillarCount = Math.floor(Math.min(room.width, room.depth) / 5);
    
    for (let i = 0; i < pillarCount; i++) {
      const angle = (i / pillarCount) * Math.PI * 2;
      const radius = Math.min(room.width, room.depth) * 0.3;
      
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(
        Math.cos(angle) * radius,
        room.height * 0.4,
        Math.sin(angle) * radius
      );
      pillar.castShadow = true;
      pillar.userData.destructible = true;
      roomGroup.add(pillar);
    }
  }

  /**
   * Add puzzle room features
   */
  addPuzzleFeatures(roomGroup, room, palette) {
    // Central pedestal for puzzle focus
    const pedestalMat = this.getMaterial('pedestal', palette.accent, {
      roughness: 0.6,
      metalness: 0.3,
    });
    
    const pedestalGeo = new THREE.CylinderGeometry(0.5, 0.6, 1.2, 8);
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.set(0, 0.6, 0);
    pedestal.castShadow = true;
    roomGroup.add(pedestal);
    
    // Pedestal top
    const topGeo = new THREE.CylinderGeometry(0.6, 0.5, 0.1, 8);
    const top = new THREE.Mesh(topGeo, pedestalMat);
    top.position.set(0, 1.25, 0);
    top.castShadow = true;
    roomGroup.add(top);
    
    // Glowing runes around puzzle area
    const runeMat = new THREE.MeshStandardMaterial({
      color: palette.light,
      emissive: palette.light,
      emissiveIntensity: 1.5,
      transparent: true,
      opacity: 0.6,
    });
    
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2;
      const radius = 2.5;
      
      const runeGeo = new THREE.CircleGeometry(0.3, 6);
      const rune = new THREE.Mesh(runeGeo, runeMat);
      rune.position.set(
        Math.cos(angle) * radius,
        0.02,
        Math.sin(angle) * radius
      );
      rune.rotation.x = -Math.PI / 2;
      roomGroup.add(rune);
    }
  }

  /**
   * Add treasure room features
   */
  addTreasureFeatures(roomGroup, room, palette) {
    // Treasure pile base
    const pileGeo = new THREE.ConeGeometry(1.5, 0.8, 8);
    const pileMat = new THREE.MeshStandardMaterial({
      color: 0xddaa44,
      roughness: 0.4,
      metalness: 0.8,
    });
    const pile = new THREE.Mesh(pileGeo, pileMat);
    pile.position.set(0, 0.3, -room.depth / 4);
    pile.castShadow = true;
    roomGroup.add(pile);
    
    // Scattered gold coins/gems
    const coinGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.02, 8);
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xffcc44,
      roughness: 0.3,
      metalness: 0.9,
    });
    
    for (let i = 0; i < 20; i++) {
      const coin = new THREE.Mesh(coinGeo, coinMat);
      coin.position.set(
        (Math.random() - 0.5) * room.width * 0.6,
        0.01,
        (Math.random() - 0.5) * room.depth * 0.6
      );
      coin.rotation.x = Math.PI / 2;
      coin.rotation.z = Math.random() * Math.PI;
      roomGroup.add(coin);
    }
    
    // Treasure light
    const treasureLight = new THREE.PointLight(0xffcc44, 1, 6);
    treasureLight.position.set(0, 2, -room.depth / 4);
    roomGroup.add(treasureLight);
    this.activeLights.push(treasureLight);
  }

  /**
   * Add rest room features (bonfire, checkpoint)
   */
  addRestFeatures(roomGroup, room, palette) {
    // Bonfire
    const fireGroup = new THREE.Group();
    fireGroup.position.set(0, 0, 0);
    
    // Log pile
    const logGeo = new THREE.CylinderGeometry(0.15, 0.15, 1, 6);
    const logMat = new THREE.MeshStandardMaterial({
      color: 0x3a2a20,
      roughness: 0.9,
    });
    
    for (let i = 0; i < 4; i++) {
      const log = new THREE.Mesh(logGeo, logMat);
      const angle = (i / 4) * Math.PI * 2;
      log.position.set(Math.cos(angle) * 0.3, 0.1, Math.sin(angle) * 0.3);
      log.rotation.z = Math.PI / 2;
      log.rotation.y = angle;
      fireGroup.add(log);
    }
    
    // Fire glow
    const fireLight = new THREE.PointLight(0xff6622, 2, 8);
    fireLight.position.set(0, 1, 0);
    fireGroup.add(fireLight);
    this.activeLights.push(fireLight);
    
    // Fire particles placeholder (handled by particle system)
    const emberGeo = new THREE.SphereGeometry(0.05, 4, 4);
    const emberMat = new THREE.MeshStandardMaterial({
      color: 0xff4400,
      emissive: 0xff4400,
      emissiveIntensity: 3,
    });
    
    for (let i = 0; i < 8; i++) {
      const ember = new THREE.Mesh(emberGeo, emberMat);
      ember.position.set(
        (Math.random() - 0.5) * 0.5,
        0.3 + Math.random() * 0.5,
        (Math.random() - 0.5) * 0.5
      );
      fireGroup.add(ember);
    }
    
    roomGroup.add(fireGroup);
    
    // Bench for resting
    const benchMat = new THREE.MeshStandardMaterial({
      color: 0x4a3a2a,
      roughness: 0.8,
    });
    
    const benchSeat = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 0.1, 0.5),
      benchMat
    );
    benchSeat.position.set(-2.5, 0.5, 0);
    benchSeat.castShadow = true;
    roomGroup.add(benchSeat);
    
    // Bench legs
    const legGeo = new THREE.BoxGeometry(0.1, 0.5, 0.4);
    const leftLeg = new THREE.Mesh(legGeo, benchMat);
    leftLeg.position.set(-3.1, 0.25, 0);
    roomGroup.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeo, benchMat);
    rightLeg.position.set(-1.9, 0.25, 0);
    roomGroup.add(rightLeg);
  }

  /**
   * Add miniboss room features
   */
  addMinibossFeatures(roomGroup, room, palette) {
    // Similar to boss but smaller scale
    const arenaGeo = new THREE.RingGeometry(2.5, 3, 24);
    const arenaMat = new THREE.MeshStandardMaterial({
      color: palette.accent,
      emissive: palette.light,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.3,
    });
    const arena = new THREE.Mesh(arenaGeo, arenaMat);
    arena.position.set(0, 0.02, 0);
    arena.rotation.x = -Math.PI / 2;
    roomGroup.add(arena);
    
    // Warning pillars
    const pillarGeo = new THREE.CylinderGeometry(0.3, 0.35, room.height * 0.7, 6);
    const pillarMat = this.getMaterial('pillar', palette.wall, { roughness: 0.7 });
    
    for (let i = 0; i < 4; i++) {
      const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
      const radius = 3.5;
      
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(
        Math.cos(angle) * radius,
        room.height * 0.35,
        Math.sin(angle) * radius
      );
      pillar.castShadow = true;
      roomGroup.add(pillar);
    }
  }

  /**
   * Add a feature to the room
   */
  addFeature(roomGroup, feature, palette) {
    const { type, position } = feature;
    
    switch (type) {
      case 'entrance_portal':
        // Already handled in entrance features
        break;
      case 'exit_portal':
        // Already handled in boss features
        break;
      case 'bonfire':
        // Already handled in rest features
        break;
      case 'boss_altar':
        // Already handled in boss features
        break;
      default:
        console.log(`[DungeonRenderer] Unknown feature type: ${type}`);
    }
  }

  /**
   * Add props to the room
   */
  addRoomProps(roomGroup, room, theme, palette) {
    if (!room.props || room.props.length === 0) return;
    
    for (const prop of room.props) {
      const propMesh = this.createProp(prop, theme, palette);
      if (propMesh) {
        propMesh.position.set(
          prop.position?.x || 0,
          prop.position?.y || 0,
          prop.position?.z || 0
        );
        if (prop.rotation) {
          propMesh.rotation.y = prop.rotation;
        }
        if (prop.scale) {
          propMesh.scale.setScalar(prop.scale);
        }
        roomGroup.add(propMesh);
      }
    }
  }

  /**
   * Create a prop mesh
   */
  createProp(prop, theme, palette) {
    const definition = PROP_DEFINITIONS[prop.type];
    if (!definition) {
      return this.createGenericProp(prop, palette);
    }
    
    const color = definition.color || palette.accent;
    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness: 0.8,
      metalness: definition.metallic ? 0.7 : 0.1,
    });
    
    if (definition.emissive) {
      mat.emissive = new THREE.Color(definition.emissive);
      mat.emissiveIntensity = 1.5;
    }
    
    let mesh;
    
    switch (definition.geometry) {
      case 'box':
        mesh = new THREE.Mesh(
          new THREE.BoxGeometry(...(definition.size || [1, 1, 1])),
          mat
        );
        break;
      case 'cylinder':
        mesh = new THREE.Mesh(
          new THREE.CylinderGeometry(
            definition.size?.[0] || 0.5,
            definition.size?.[0] || 0.5,
            definition.size?.[1] || 1,
            8
          ),
          mat
        );
        break;
      case 'sphere':
        mesh = new THREE.Mesh(
          new THREE.SphereGeometry(definition.size?.[0] || 0.5, 8, 6),
          mat
        );
        break;
      case 'cone':
        mesh = new THREE.Mesh(
          new THREE.ConeGeometry(
            definition.size?.[0] || 0.5,
            definition.size?.[1] || 1,
            6
          ),
          mat
        );
        break;
      case 'crystal':
        mesh = this.createCrystal(color, definition.emissive);
        break;
      case 'mushroom':
        mesh = this.createMushroom(color, definition.emissive);
        break;
      default:
        mesh = new THREE.Mesh(
          new THREE.BoxGeometry(0.5, 0.5, 0.5),
          mat
        );
    }
    
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    
    // Add light if prop emits light
    if (definition.light) {
      const light = new THREE.PointLight(definition.emissive || color, 0.5, 4);
      light.position.y = (definition.size?.[1] || 1) / 2;
      mesh.add(light);
      this.activeLights.push(light);
    }
    
    return mesh;
  }

  /**
   * Create a crystal formation
   */
  createCrystal(color, emissiveColor) {
    const group = new THREE.Group();
    
    const crystalMat = new THREE.MeshStandardMaterial({
      color,
      emissive: emissiveColor || color,
      emissiveIntensity: 1.5,
      transparent: true,
      opacity: 0.85,
    });
    
    // Multiple crystal spires
    const crystalGeo = new THREE.OctahedronGeometry(0.2, 0);
    
    for (let i = 0; i < 4; i++) {
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      const angle = (i / 4) * Math.PI * 2;
      const height = 0.3 + Math.random() * 0.4;
      crystal.position.set(
        Math.cos(angle) * 0.2,
        height,
        Math.sin(angle) * 0.2
      );
      crystal.scale.set(0.5 + Math.random() * 0.5, 1.5 + Math.random(), 0.5 + Math.random() * 0.5);
      crystal.rotation.y = Math.random() * Math.PI;
      group.add(crystal);
    }
    
    // Central larger crystal
    const mainCrystal = new THREE.Mesh(crystalGeo, crystalMat);
    mainCrystal.position.y = 0.6;
    mainCrystal.scale.set(1, 2, 1);
    group.add(mainCrystal);
    
    return group;
  }

  /**
   * Create a glowing mushroom
   */
  createMushroom(color, emissiveColor) {
    const group = new THREE.Group();
    
    const stemMat = new THREE.MeshStandardMaterial({
      color: 0x8a7a6a,
      roughness: 0.9,
    });
    
    const capMat = new THREE.MeshStandardMaterial({
      color,
      emissive: emissiveColor || color,
      emissiveIntensity: 1.2,
    });
    
    // Stem
    const stemGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.3, 6);
    const stem = new THREE.Mesh(stemGeo, stemMat);
    stem.position.y = 0.15;
    group.add(stem);
    
    // Cap
    const capGeo = new THREE.SphereGeometry(0.18, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2);
    const cap = new THREE.Mesh(capGeo, capMat);
    cap.position.y = 0.3;
    group.add(cap);
    
    return group;
  }

  /**
   * Create a generic prop
   */
  createGenericProp(prop, palette) {
    const mat = new THREE.MeshStandardMaterial({
      color: palette.accent,
      roughness: 0.8,
    });
    
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      mat
    );
    mesh.castShadow = true;
    
    return mesh;
  }

  /**
   * Add lighting to room
   */
  addRoomLighting(roomGroup, room, theme, palette) {
    // Ambient room light
    const ambientLight = new THREE.PointLight(palette.ambient, 0.3, room.width * 2);
    ambientLight.position.set(0, room.height - 1, 0);
    roomGroup.add(ambientLight);
    this.activeLights.push(ambientLight);
    
    // Process room lights from dungeon data
    if (room.lights) {
      for (const lightData of room.lights) {
        const light = this.createLight(lightData, palette);
        if (light) {
          roomGroup.add(light);
          this.activeLights.push(light);
        }
      }
    }
    
    // Add wall torches for most room types
    if (room.type !== ROOM_TYPE.REST) {
      this.addWallTorches(roomGroup, room, palette);
    }
  }

  /**
   * Create a light from data
   */
  createLight(lightData, palette) {
    const group = new THREE.Group();
    
    const color = lightData.color || palette.light;
    const intensity = lightData.intensity || 1;
    const range = 6;
    
    const light = new THREE.PointLight(color, intensity, range);
    light.position.set(
      lightData.position?.x || 0,
      lightData.position?.y || 2,
      lightData.position?.z || 0
    );
    group.add(light);
    
    // Add visual element for light source
    switch (lightData.type) {
      case 'torch':
        this.addTorchVisual(group, lightData.position, color);
        break;
      case 'crystal':
        this.addCrystalVisual(group, lightData.position, color);
        break;
      case 'magic':
        this.addMagicVisual(group, lightData.position, color);
        break;
    }
    
    // Store for animation
    group.userData.lightData = lightData;
    group.userData.light = light;
    
    return group;
  }

  /**
   * Add torch visual
   */
  addTorchVisual(group, position, color) {
    // Torch holder
    const holderMat = new THREE.MeshStandardMaterial({
      color: 0x3a3a3a,
      roughness: 0.6,
      metalness: 0.4,
    });
    
    const holderGeo = new THREE.CylinderGeometry(0.05, 0.08, 0.3, 6);
    const holder = new THREE.Mesh(holderGeo, holderMat);
    holder.position.set(position?.x || 0, (position?.y || 2) - 0.3, position?.z || 0);
    group.add(holder);
    
    // Flame glow
    const flameMat = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 3,
      transparent: true,
      opacity: 0.8,
    });
    
    const flameGeo = new THREE.SphereGeometry(0.08, 6, 4);
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.set(position?.x || 0, position?.y || 2, position?.z || 0);
    flame.scale.set(1, 1.5, 1);
    group.add(flame);
    
    group.userData.flame = flame;
  }

  /**
   * Add crystal light visual
   */
  addCrystalVisual(group, position, color) {
    const crystalMat = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 2,
      transparent: true,
      opacity: 0.85,
    });
    
    const crystalGeo = new THREE.OctahedronGeometry(0.15, 0);
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    crystal.position.set(position?.x || 0, position?.y || 2, position?.z || 0);
    crystal.rotation.y = Math.random() * Math.PI;
    group.add(crystal);
    
    group.userData.crystal = crystal;
  }

  /**
   * Add magic light visual
   */
  addMagicVisual(group, position, color) {
    const orbMat = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 2.5,
      transparent: true,
      opacity: 0.7,
    });
    
    const orbGeo = new THREE.SphereGeometry(0.2, 12, 8);
    const orb = new THREE.Mesh(orbGeo, orbMat);
    orb.position.set(position?.x || 0, position?.y || 2, position?.z || 0);
    group.add(orb);
    
    // Magic particles ring
    const ringMat = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 1.5,
      transparent: true,
      opacity: 0.4,
    });
    
    const ringGeo = new THREE.TorusGeometry(0.35, 0.02, 6, 16);
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.copy(orb.position);
    ring.rotation.x = Math.PI / 2;
    group.add(ring);
    
    group.userData.orb = orb;
    group.userData.ring = ring;
  }

  /**
   * Add wall torches
   */
  addWallTorches(roomGroup, room, palette) {
    const torchSpacing = 6;
    const torchHeight = 2.5;
    
    // Calculate torch positions
    const numTorchesX = Math.max(1, Math.floor(room.width / torchSpacing));
    const numTorchesZ = Math.max(1, Math.floor(room.depth / torchSpacing));
    
    // North and south walls
    for (let i = 0; i < numTorchesX; i++) {
      const x = (i + 0.5) / numTorchesX * room.width - room.width / 2;
      
      // North wall torch
      const northTorch = this.createWallTorch(palette.light);
      northTorch.position.set(x, torchHeight, -room.depth / 2 + 0.2);
      roomGroup.add(northTorch);
      
      // South wall torch
      const southTorch = this.createWallTorch(palette.light);
      southTorch.position.set(x, torchHeight, room.depth / 2 - 0.2);
      southTorch.rotation.y = Math.PI;
      roomGroup.add(southTorch);
    }
    
    // East and west walls
    for (let i = 0; i < numTorchesZ; i++) {
      const z = (i + 0.5) / numTorchesZ * room.depth - room.depth / 2;
      
      // East wall torch
      const eastTorch = this.createWallTorch(palette.light);
      eastTorch.position.set(room.width / 2 - 0.2, torchHeight, z);
      eastTorch.rotation.y = -Math.PI / 2;
      roomGroup.add(eastTorch);
      
      // West wall torch
      const westTorch = this.createWallTorch(palette.light);
      westTorch.position.set(-room.width / 2 + 0.2, torchHeight, z);
      westTorch.rotation.y = Math.PI / 2;
      roomGroup.add(westTorch);
    }
  }

  /**
   * Create a wall-mounted torch
   */
  createWallTorch(color) {
    const group = new THREE.Group();
    
    // Bracket
    const bracketMat = new THREE.MeshStandardMaterial({
      color: 0x3a3030,
      roughness: 0.6,
      metalness: 0.5,
    });
    
    const bracketGeo = new THREE.BoxGeometry(0.1, 0.15, 0.25);
    const bracket = new THREE.Mesh(bracketGeo, bracketMat);
    bracket.position.z = 0.1;
    group.add(bracket);
    
    // Torch body
    const torchGeo = new THREE.CylinderGeometry(0.04, 0.06, 0.35, 6);
    const torch = new THREE.Mesh(torchGeo, bracketMat);
    torch.position.set(0, 0.15, 0.25);
    torch.rotation.x = -0.3;
    group.add(torch);
    
    // Flame
    const flameMat = new THREE.MeshStandardMaterial({
      color,
      emissive: color,
      emissiveIntensity: 3,
      transparent: true,
      opacity: 0.9,
    });
    
    const flameGeo = new THREE.SphereGeometry(0.06, 6, 4);
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.set(0, 0.35, 0.35);
    flame.scale.set(1, 1.4, 1);
    group.add(flame);
    
    // Point light
    const light = new THREE.PointLight(color, 0.6, 5);
    light.position.copy(flame.position);
    group.add(light);
    this.activeLights.push(light);
    
    group.userData.flame = flame;
    group.userData.light = light;
    
    return group;
  }

  /**
   * Render a connection (corridor or door)
   */
  renderConnection(connection, dungeonInstance, theme, palette) {
    const fromRoom = dungeonInstance.rooms.find(r => r.id === connection.from);
    const toRoom = dungeonInstance.rooms.find(r => r.id === connection.to);
    
    if (!fromRoom || !toRoom) return;
    
    if (connection.type === 'corridor' && connection.corridor) {
      this.renderCorridor(connection.corridor, palette);
    }
    
    // Create door at connection point
    this.renderDoor(fromRoom, toRoom, connection, palette);
  }

  /**
   * Render a corridor
   */
  renderCorridor(corridorData, palette) {
    const corridorGroup = new THREE.Group();
    corridorGroup.name = 'Corridor';
    corridorGroup.position.set(
      corridorData.position.x,
      corridorData.position.y,
      corridorData.position.z
    );
    
    const width = corridorData.width;
    const height = corridorData.height;
    const length = corridorData.length;
    
    // Determine rotation based on direction
    const isNorthSouth = corridorData.direction === 'north' || corridorData.direction === 'south';
    
    // Floor
    const floorMat = this.getMaterial('corridor_floor', palette.floor, { roughness: 0.9 });
    const floorGeo = new THREE.PlaneGeometry(
      isNorthSouth ? width : length,
      isNorthSouth ? length : width
    );
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    corridorGroup.add(floor);
    
    // Ceiling
    const ceilingMat = this.getMaterial('corridor_ceiling', palette.ceiling, { roughness: 0.85 });
    const ceiling = new THREE.Mesh(floorGeo, ceilingMat);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.y = height;
    corridorGroup.add(ceiling);
    
    // Walls
    const wallMat = this.getMaterial('corridor_wall', palette.wall, { roughness: 0.85 });
    
    if (isNorthSouth) {
      // East wall
      const eastWall = this.createWall(length, height, wallMat);
      eastWall.position.set(width / 2, height / 2, 0);
      eastWall.rotation.y = -Math.PI / 2;
      corridorGroup.add(eastWall);
      
      // West wall
      const westWall = this.createWall(length, height, wallMat);
      westWall.position.set(-width / 2, height / 2, 0);
      westWall.rotation.y = Math.PI / 2;
      corridorGroup.add(westWall);
    } else {
      // North wall
      const northWall = this.createWall(length, height, wallMat);
      northWall.position.set(0, height / 2, -width / 2);
      corridorGroup.add(northWall);
      
      // South wall
      const southWall = this.createWall(length, height, wallMat);
      southWall.position.set(0, height / 2, width / 2);
      southWall.rotation.y = Math.PI;
      corridorGroup.add(southWall);
    }
    
    // Corridor lighting
    const light = new THREE.PointLight(palette.light, 0.4, 6);
    light.position.set(0, height - 0.5, 0);
    corridorGroup.add(light);
    this.activeLights.push(light);
    
    // Add trap if present
    if (corridorData.trap) {
      this.addCorridorTrap(corridorGroup, corridorData.trap, palette);
    }
    
    this.roomsGroup.add(corridorGroup);
  }

  /**
   * Add trap to corridor
   */
  addCorridorTrap(group, trap, palette) {
    const trapMat = new THREE.MeshStandardMaterial({
      color: 0x4a4a4a,
      roughness: 0.7,
      metalness: 0.3,
    });
    
    switch (trap.visualType) {
      case 'floor_spikes':
        // Spike plate
        const plateGeo = new THREE.BoxGeometry(2, 0.05, 2);
        const plate = new THREE.Mesh(plateGeo, trapMat);
        plate.position.y = 0.025;
        plate.userData.isTrap = true;
        plate.userData.trapData = trap;
        group.add(plate);
        break;
        
      case 'wall_arrows':
        // Arrow slits
        const slitMat = new THREE.MeshStandardMaterial({
          color: 0x1a1a1a,
          roughness: 0.9,
        });
        const slitGeo = new THREE.BoxGeometry(0.05, 0.3, 0.1);
        for (let i = 0; i < 3; i++) {
          const slit = new THREE.Mesh(slitGeo, slitMat);
          slit.position.set(2, 1.5, (i - 1) * 0.5);
          slit.userData.isTrap = true;
          group.add(slit);
        }
        break;
    }
  }

  /**
   * Render a door between rooms
   */
  renderDoor(fromRoom, toRoom, connection, palette) {
    const doorGroup = new THREE.Group();
    doorGroup.name = `Door_${connection.from}_${connection.to}`;
    
    // Calculate door position (midpoint between rooms)
    const midX = (fromRoom.position.x + toRoom.position.x) / 2;
    const midZ = (fromRoom.position.z + toRoom.position.z) / 2;
    
    doorGroup.position.set(midX, 0, midZ);
    
    // Determine door orientation
    const isNorthSouth = connection.direction === 'north' || connection.direction === 'south';
    if (!isNorthSouth) {
      doorGroup.rotation.y = Math.PI / 2;
    }
    
    // Door frame
    const frameMat = this.getMaterial('door_frame', palette.accent, {
      roughness: 0.7,
      metalness: 0.2,
    });
    
    // Frame sides
    const frameGeo = new THREE.BoxGeometry(0.2, 3, 0.3);
    const leftFrame = new THREE.Mesh(frameGeo, frameMat);
    leftFrame.position.set(-1.1, 1.5, 0);
    doorGroup.add(leftFrame);
    
    const rightFrame = new THREE.Mesh(frameGeo, frameMat);
    rightFrame.position.set(1.1, 1.5, 0);
    doorGroup.add(rightFrame);
    
    // Frame top
    const topFrameGeo = new THREE.BoxGeometry(2.4, 0.2, 0.3);
    const topFrame = new THREE.Mesh(topFrameGeo, frameMat);
    topFrame.position.set(0, 3.1, 0);
    doorGroup.add(topFrame);
    
    // Door panel (can be open/closed)
    const doorMat = this.getMaterial('door', palette.wall, {
      roughness: 0.8,
      metalness: 0.15,
    });
    
    const doorGeo = new THREE.BoxGeometry(1.8, 2.8, 0.1);
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.set(0, 1.5, 0);
    door.userData.isDoor = true;
    door.userData.isOpen = true; // Default open
    door.userData.connection = connection;
    doorGroup.add(door);
    
    // Door handle
    const handleMat = new THREE.MeshStandardMaterial({
      color: 0x5a5a5a,
      roughness: 0.4,
      metalness: 0.7,
    });
    
    const handleGeo = new THREE.SphereGeometry(0.08, 8, 6);
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.set(0.7, 1.5, 0.1);
    doorGroup.add(handle);
    
    this.doorsGroup.add(doorGroup);
    this.doors.set(`${connection.from}_${connection.to}`, {
      group: doorGroup,
      door,
      isOpen: true,
      isLocked: false,
    });
  }

  /**
   * Add atmospheric particles to dungeon
   */
  addAtmosphericParticles(dungeonData, bounds) {
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const width = bounds.maxX - bounds.minX + 20;
    const depth = bounds.maxZ - bounds.minZ + 20;
    const centerX = (bounds.maxX + bounds.minX) / 2;
    const centerZ = (bounds.maxZ + bounds.minZ) / 2;
    
    const particleColor = new THREE.Color(dungeonData.ambientColor || 0x444444);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = centerX + (Math.random() - 0.5) * width;
      positions[i * 3 + 1] = Math.random() * 5 + 1;
      positions[i * 3 + 2] = centerZ + (Math.random() - 0.5) * depth;
      
      colors[i * 3] = particleColor.r;
      colors[i * 3 + 1] = particleColor.g;
      colors[i * 3 + 2] = particleColor.b;
    }
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    const particles = new THREE.Points(geometry, material);
    particles.userData.basePositions = positions.slice();
    particles.userData.time = 0;
    
    this.effectsGroup.add(particles);
    this.particleSystems.push(particles);
  }

  /**
   * Get or create a cached material
   */
  getMaterial(key, color, options = {}) {
    const cacheKey = `${key}_${color}`;
    
    if (this.materialsCache.has(cacheKey)) {
      return this.materialsCache.get(cacheKey);
    }
    
    const material = new THREE.MeshStandardMaterial({
      color,
      roughness: options.roughness ?? 0.8,
      metalness: options.metalness ?? 0.1,
      ...options,
    });
    
    this.materialsCache.set(cacheKey, material);
    return material;
  }

  /**
   * Update dungeon effects (called each frame)
   */
  update(delta) {
    // Animate particles
    for (const particles of this.particleSystems) {
      if (!particles.userData.basePositions) continue;
      
      particles.userData.time += delta;
      const time = particles.userData.time;
      const positions = particles.geometry.attributes.position.array;
      const basePositions = particles.userData.basePositions;
      
      for (let i = 0; i < positions.length / 3; i++) {
        const offset = i * 0.5;
        positions[i * 3] = basePositions[i * 3] + Math.sin(time + offset) * 0.3;
        positions[i * 3 + 1] = basePositions[i * 3 + 1] + Math.sin(time * 0.5 + offset) * 0.2;
        positions[i * 3 + 2] = basePositions[i * 3 + 2] + Math.cos(time + offset) * 0.3;
      }
      
      particles.geometry.attributes.position.needsUpdate = true;
    }
    
    // Animate torch flames
    this.effectsGroup.traverse(child => {
      if (child.userData.flame) {
        const flameScale = 1 + Math.sin(Date.now() * 0.01) * 0.1;
        child.userData.flame.scale.y = 1.4 * flameScale;
      }
      
      if (child.userData.ring) {
        child.userData.ring.rotation.z += delta * 0.5;
      }
      
      if (child.userData.crystal) {
        child.userData.crystal.rotation.y += delta * 0.3;
      }
    });
    
    // Flicker torches
    for (const light of this.activeLights) {
      if (light.userData?.flicker) {
        light.intensity = light.userData.baseIntensity * (0.9 + Math.random() * 0.2);
      }
    }
  }

  /**
   * Open a door
   */
  openDoor(doorKey) {
    const doorData = this.doors.get(doorKey);
    if (doorData && !doorData.isOpen && !doorData.isLocked) {
      doorData.isOpen = true;
      doorData.door.rotation.y = Math.PI / 2;
      doorData.door.position.x = 0.9;
    }
  }

  /**
   * Close a door
   */
  closeDoor(doorKey) {
    const doorData = this.doors.get(doorKey);
    if (doorData && doorData.isOpen) {
      doorData.isOpen = false;
      doorData.door.rotation.y = 0;
      doorData.door.position.x = 0;
    }
  }

  /**
   * Lock a door
   */
  lockDoor(doorKey) {
    const doorData = this.doors.get(doorKey);
    if (doorData) {
      doorData.isLocked = true;
      this.closeDoor(doorKey);
    }
  }

  /**
   * Unlock a door
   */
  unlockDoor(doorKey) {
    const doorData = this.doors.get(doorKey);
    if (doorData) {
      doorData.isLocked = false;
    }
  }

  /**
   * Mark a room as explored (for minimap)
   */
  markRoomExplored(roomId) {
    const room = this.minimapRooms.find(r => r.id === roomId);
    if (room) {
      room.isExplored = true;
    }
    
    // Also update the rendered room visual if needed
    const roomGroup = this.renderedRooms.get(roomId);
    if (roomGroup) {
      roomGroup.userData.isExplored = true;
    }
  }

  /**
   * Mark a room as cleared
   */
  markRoomCleared(roomId) {
    const room = this.minimapRooms.find(r => r.id === roomId);
    if (room) {
      room.isCleared = true;
    }
  }

  /**
   * Get minimap data for UI
   */
  getMinimapData() {
    return {
      rooms: this.minimapRooms,
      bounds: this.currentDungeon?.bounds,
      dungeonName: this.currentDungeon?.dungeonData?.name,
    };
  }

  /**
   * Activate exit portal (after boss defeat)
   */
  activateExitPortal() {
    if (!this.currentDungeon) return;
    
    const bossRoom = this.renderedRooms.get(this.currentDungeon.bossRoom?.id);
    if (!bossRoom) return;
    
    bossRoom.traverse(child => {
      if (child.userData.isExitPortal) {
        child.userData.isActive = true;
        child.material.opacity = 0.8;
        child.material.emissiveIntensity = 2;
        
        // Add portal light
        const portalLight = new THREE.PointLight(0x44ff88, 2, 8);
        portalLight.position.copy(child.position);
        bossRoom.add(portalLight);
        this.activeLights.push(portalLight);
      }
    });
  }

  /**
   * Dispose of all resources
   */
  dispose() {
    this.clearDungeon();
    this.materialsCache.forEach(mat => mat.dispose());
    this.materialsCache.clear();
    
    if (this.dungeonGroup.parent) {
      this.dungeonGroup.parent.remove(this.dungeonGroup);
    }
  }
}

// Singleton instance
let dungeonRendererInstance = null;

// Singleton export with passthrough methods
export const dungeonRenderer = {
  initialize(scene) {
    if (!dungeonRendererInstance) {
      dungeonRendererInstance = new DungeonRenderer(scene);
    }
    return dungeonRendererInstance;
  },
  
  getInstance() {
    return dungeonRendererInstance;
  },
  
  renderDungeon(dungeonData) {
    if (dungeonRendererInstance) {
      return dungeonRendererInstance.renderDungeon(dungeonData);
    }
    console.warn('[DungeonRenderer] Not initialized');
    return null;
  },
  
  clearDungeon() {
    if (dungeonRendererInstance) {
      dungeonRendererInstance.clearDungeon();
    }
  },
  
  update(delta) {
    if (dungeonRendererInstance) {
      dungeonRendererInstance.update(delta);
    }
  },
  
  openDoor(doorKey) {
    if (dungeonRendererInstance) {
      dungeonRendererInstance.openDoor(doorKey);
    }
  },
  
  unlockDoor(doorKey) {
    if (dungeonRendererInstance) {
      dungeonRendererInstance.unlockDoor(doorKey);
    }
  },
  
  markRoomExplored(roomId) {
    if (dungeonRendererInstance) {
      dungeonRendererInstance.markRoomExplored(roomId);
    }
  },
  
  markRoomCleared(roomId) {
    if (dungeonRendererInstance) {
      dungeonRendererInstance.markRoomCleared(roomId);
    }
  },
  
  getMinimapData() {
    if (dungeonRendererInstance) {
      return dungeonRendererInstance.getMinimapData();
    }
    return null;
  },
  
  activateExitPortal() {
    if (dungeonRendererInstance) {
      dungeonRendererInstance.activateExitPortal();
    }
  },
  
  dispose() {
    if (dungeonRendererInstance) {
      dungeonRendererInstance.dispose();
      dungeonRendererInstance = null;
    }
  },
};
