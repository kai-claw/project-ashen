/**
 * BossSpawner.js - World Boss Spawn & Arena Management
 * Phase 21: Boss Encounters
 * 
 * Handles:
 * - Boss arena placement in the open world
 * - Boss spawn/respawn mechanics
 * - Arena boundaries during fights
 * - Proximity triggers for boss activation
 * - Visual/audio atmosphere changes
 * - Victory state and arena unlock
 */

import * as THREE from 'three';
import { WORLD_BOSSES, getBossById, getAllBossSpawnLocations } from '../data/BossData.js';
import { bossRenderer } from './BossRenderer.js';

// ========== ARENA CONFIGURATIONS ==========
const ARENA_PROPS = {
  stone_pillars: [
    { type: 'pillar', height: 6, radius: 0.8, count: 8, ringRadius: 22 },
    { type: 'debris', count: 15 },
  ],
  shadow_barrier: [
    { type: 'obelisk', height: 8, count: 6, ringRadius: 28 },
    { type: 'void_crack', count: 8 },
  ],
  thick_vegetation: [
    { type: 'tree', count: 12, ringRadius: 32 },
    { type: 'roots', count: 20 },
  ],
  ruined_walls: [
    { type: 'wall_segment', count: 6, ringRadius: 18 },
    { type: 'rubble', count: 10 },
  ],
};

/**
 * BossSpawner - Manages world boss spawning and arenas
 */
export class BossSpawner {
  constructor(scene, world, enemyManager, saveManager = null) {
    this.scene = scene;
    this.world = world;
    this.enemyManager = enemyManager;
    this.saveManager = saveManager;

    // Active boss instances
    this.activeBosses = new Map(); // bossId -> { mesh, data, state }

    // Arena state
    this.arenas = new Map(); // bossId -> { group, boundary, props, active }

    // Respawn timers
    this.respawnTimers = new Map(); // bossId -> { lastKilledAt, respawnTime }

    // Player reference
    this.player = null;

    // Currently engaged boss
    this.currentBossFight = null;

    // Arena meshes for collision
    this.arenaColliders = [];

    // Event callbacks
    this.onBossActivate = null;
    this.onBossDefeated = null;
    this.onArenaEnter = null;
    this.onArenaExit = null;

    console.log('[BossSpawner] Initialized');
  }

  /**
   * Initialize all boss arenas in the world
   * @param {Player} player - Player reference for proximity checks
   */
  initialize(player) {
    this.player = player;

    // Load saved state
    this.loadState();

    // Create all boss arenas
    const spawnLocations = getAllBossSpawnLocations();
    spawnLocations.forEach((location) => {
      this.createBossArena(location);
    });

    console.log(`[BossSpawner] Created ${spawnLocations.length} boss arenas`);
  }

  /**
   * Create a boss arena at the specified location
   */
  createBossArena(spawnLocation) {
    const { bossId, name, title, x, z, areaName, arena } = spawnLocation;
    const bossData = getBossById(bossId);
    if (!bossData) {
      console.warn(`[BossSpawner] Unknown boss: ${bossId}`);
      return;
    }

    // Get terrain height at spawn location
    const y = this.world ? this.world.getFloorY(x, z) : 0;

    // Create arena group
    const arenaGroup = new THREE.Group();
    arenaGroup.position.set(x, y, z);
    arenaGroup.userData.bossId = bossId;
    this.scene.add(arenaGroup);

    // Create arena visual elements
    this.createArenaVisuals(arenaGroup, bossData, arena);

    // Create invisible arena boundary
    const boundary = this.createArenaBoundary(arena.radius, arena.boundaryType);
    boundary.visible = false; // Only shown during fight
    arenaGroup.add(boundary);

    // Create arena fog/atmosphere
    const atmosphere = this.createArenaAtmosphere(arena);
    arenaGroup.add(atmosphere);

    // Create boss spawn marker
    const spawnMarker = this.createSpawnMarker(bossData);
    arenaGroup.add(spawnMarker);

    // Store arena data
    this.arenas.set(bossId, {
      group: arenaGroup,
      boundary: boundary,
      atmosphere: atmosphere,
      spawnMarker: spawnMarker,
      active: false,
      position: new THREE.Vector3(x, y, z),
      radius: arena.radius,
      bossData: bossData,
    });

    // Check if boss should be spawned (not defeated or respawned)
    if (this.shouldSpawnBoss(bossId)) {
      this.spawnBoss(bossId);
    }
  }

  /**
   * Create visual props for the arena
   */
  createArenaVisuals(arenaGroup, bossData, arenaConfig) {
    const props = ARENA_PROPS[arenaConfig.boundaryType] || ARENA_PROPS.stone_pillars;
    const palette = this.getBossPalette(bossData.modelType);

    props.forEach((propConfig) => {
      switch (propConfig.type) {
        case 'pillar':
          this.createPillars(arenaGroup, propConfig, palette);
          break;
        case 'obelisk':
          this.createObelisks(arenaGroup, propConfig, palette);
          break;
        case 'debris':
          this.createDebris(arenaGroup, propConfig, palette);
          break;
        case 'tree':
          this.createArenaTrees(arenaGroup, propConfig);
          break;
        case 'wall_segment':
          this.createWallSegments(arenaGroup, propConfig, palette);
          break;
        case 'rubble':
          this.createRubble(arenaGroup, propConfig, palette);
          break;
        case 'void_crack':
          this.createVoidCracks(arenaGroup, propConfig, palette);
          break;
        case 'roots':
          this.createRoots(arenaGroup, propConfig);
          break;
      }
    });
  }

  createPillars(group, config, palette) {
    const pillarMat = new THREE.MeshStandardMaterial({
      color: 0x5a5a6a,
      roughness: 0.85,
      metalness: 0.1,
    });

    for (let i = 0; i < config.count; i++) {
      const angle = (i / config.count) * Math.PI * 2;
      const x = Math.cos(angle) * config.ringRadius;
      const z = Math.sin(angle) * config.ringRadius;

      // Pillar base
      const pillarGeo = new THREE.CylinderGeometry(
        config.radius * 0.8,
        config.radius,
        config.height,
        8
      );
      const pillar = new THREE.Mesh(pillarGeo, pillarMat);
      pillar.position.set(x, config.height / 2, z);
      pillar.castShadow = true;
      pillar.receiveShadow = true;
      group.add(pillar);

      // Random damage/break
      if (Math.random() > 0.6) {
        pillar.scale.y = 0.4 + Math.random() * 0.4;
        pillar.position.y = (config.height * pillar.scale.y) / 2;
      }
    }
  }

  createObelisks(group, config, palette) {
    const obeliskMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a2a,
      roughness: 0.4,
      metalness: 0.3,
      emissive: 0x220033,
      emissiveIntensity: 0.3,
    });

    for (let i = 0; i < config.count; i++) {
      const angle = (i / config.count) * Math.PI * 2;
      const x = Math.cos(angle) * config.ringRadius;
      const z = Math.sin(angle) * config.ringRadius;

      // Tapered obelisk shape
      const obeliskGeo = new THREE.CylinderGeometry(0.3, 0.8, config.height, 4);
      const obelisk = new THREE.Mesh(obeliskGeo, obeliskMat);
      obelisk.position.set(x, config.height / 2, z);
      obelisk.rotation.y = Math.random() * Math.PI;
      obelisk.castShadow = true;
      group.add(obelisk);

      // Glowing runes
      const runeMat = new THREE.MeshStandardMaterial({
        color: 0x6622aa,
        emissive: 0x6622aa,
        emissiveIntensity: 2,
        transparent: true,
        opacity: 0.8,
      });

      const runeGeo = new THREE.PlaneGeometry(0.3, 0.8);
      const rune = new THREE.Mesh(runeGeo, runeMat);
      rune.position.set(x + Math.cos(angle + Math.PI / 2) * 0.35, config.height * 0.6, z + Math.sin(angle + Math.PI / 2) * 0.35);
      rune.rotation.y = -angle;
      group.add(rune);
    }
  }

  createDebris(group, config, palette) {
    const debrisMat = new THREE.MeshStandardMaterial({
      color: 0x6a6a7a,
      roughness: 0.9,
      metalness: 0.05,
    });

    for (let i = 0; i < config.count; i++) {
      const radius = Math.random() * 18 + 3;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const size = 0.3 + Math.random() * 0.5;
      const debrisGeo = new THREE.IcosahedronGeometry(size, 0);
      const debris = new THREE.Mesh(debrisGeo, debrisMat);
      debris.position.set(x, size * 0.5, z);
      debris.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      debris.castShadow = true;
      group.add(debris);
    }
  }

  createArenaTrees(group, config) {
    const barkMat = new THREE.MeshStandardMaterial({
      color: 0x3a4a2a,
      roughness: 0.9,
    });

    for (let i = 0; i < config.count; i++) {
      const angle = (i / config.count) * Math.PI * 2 + Math.random() * 0.3;
      const x = Math.cos(angle) * config.ringRadius;
      const z = Math.sin(angle) * config.ringRadius;

      const height = 6 + Math.random() * 4;
      const trunkGeo = new THREE.CylinderGeometry(0.3, 0.5, height, 6);
      const trunk = new THREE.Mesh(trunkGeo, barkMat);
      trunk.position.set(x, height / 2, z);
      trunk.castShadow = true;
      group.add(trunk);

      // Foliage
      const leafMat = new THREE.MeshStandardMaterial({
        color: 0x446633,
        roughness: 0.8,
      });

      const leafGeo = new THREE.SphereGeometry(2, 8, 6);
      const leaves = new THREE.Mesh(leafGeo, leafMat);
      leaves.position.set(x, height + 1, z);
      leaves.scale.set(1.2, 1, 1.2);
      leaves.castShadow = true;
      group.add(leaves);
    }
  }

  createWallSegments(group, config, palette) {
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x4a4a55,
      roughness: 0.85,
      metalness: 0.1,
    });

    for (let i = 0; i < config.count; i++) {
      const angle = (i / config.count) * Math.PI * 2;
      const x = Math.cos(angle) * config.ringRadius;
      const z = Math.sin(angle) * config.ringRadius;

      const width = 4 + Math.random() * 3;
      const height = 3 + Math.random() * 2;
      const wallGeo = new THREE.BoxGeometry(width, height, 0.8);
      const wall = new THREE.Mesh(wallGeo, wallMat);
      wall.position.set(x, height / 2, z);
      wall.rotation.y = -angle + Math.PI / 2;
      wall.castShadow = true;
      wall.receiveShadow = true;
      group.add(wall);
    }
  }

  createRubble(group, config, palette) {
    const rubbleMat = new THREE.MeshStandardMaterial({
      color: 0x5a5a65,
      roughness: 0.9,
    });

    for (let i = 0; i < config.count; i++) {
      const radius = Math.random() * 15 + 2;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const rubbleGeo = new THREE.BoxGeometry(
        0.5 + Math.random() * 1,
        0.3 + Math.random() * 0.5,
        0.5 + Math.random() * 1
      );
      const rubble = new THREE.Mesh(rubbleGeo, rubbleMat);
      rubble.position.set(x, 0.15, z);
      rubble.rotation.y = Math.random() * Math.PI;
      rubble.castShadow = true;
      group.add(rubble);
    }
  }

  createVoidCracks(group, config, palette) {
    const crackMat = new THREE.MeshStandardMaterial({
      color: 0x110022,
      emissive: 0x330055,
      emissiveIntensity: 1.5,
    });

    for (let i = 0; i < config.count; i++) {
      const radius = 5 + Math.random() * 15;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const length = 2 + Math.random() * 3;
      const crackGeo = new THREE.PlaneGeometry(0.3, length);
      const crack = new THREE.Mesh(crackMat, crackGeo);
      crack.position.set(x, 0.05, z);
      crack.rotation.x = -Math.PI / 2;
      crack.rotation.z = Math.random() * Math.PI;
      group.add(crack);
    }
  }

  createRoots(group, config) {
    const rootMat = new THREE.MeshStandardMaterial({
      color: 0x3a3020,
      roughness: 0.9,
    });

    for (let i = 0; i < config.count; i++) {
      const radius = Math.random() * 20 + 5;
      const angle = Math.random() * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;

      const rootGeo = new THREE.CylinderGeometry(0.1, 0.2, 2 + Math.random() * 2, 5);
      const root = new THREE.Mesh(rootGeo, rootMat);
      root.position.set(x, 0.2, z);
      root.rotation.x = Math.PI / 4;
      root.rotation.y = Math.random() * Math.PI;
      root.castShadow = true;
      group.add(root);
    }
  }

  /**
   * Create invisible arena boundary (becomes solid during fight)
   */
  createArenaBoundary(radius, boundaryType) {
    const boundaryGroup = new THREE.Group();

    // Invisible collision cylinder
    const boundaryGeo = new THREE.CylinderGeometry(radius, radius, 10, 32, 1, true);
    const boundaryMat = new THREE.MeshBasicMaterial({
      color: 0xff0000,
      transparent: true,
      opacity: 0.0,
      side: THREE.DoubleSide,
    });

    const boundary = new THREE.Mesh(boundaryGeo, boundaryMat);
    boundary.position.y = 5;
    boundaryGroup.add(boundary);

    // Visual fog wall (visible when active)
    const fogMat = new THREE.MeshBasicMaterial({
      color: 0x885522,
      transparent: true,
      opacity: 0.0,
      side: THREE.DoubleSide,
    });

    const fogGeo = new THREE.CylinderGeometry(radius - 0.5, radius - 0.5, 8, 32, 1, true);
    const fog = new THREE.Mesh(fogGeo, fogMat);
    fog.position.y = 4;
    boundaryGroup.add(fog);
    boundaryGroup.userData.fog = fog;

    return boundaryGroup;
  }

  /**
   * Create arena atmosphere effects
   */
  createArenaAtmosphere(arenaConfig) {
    const atmosphereGroup = new THREE.Group();

    // Ambient particles
    const particleCount = 50;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color = new THREE.Color(arenaConfig.ambientColor || 0x445566);

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * arenaConfig.radius;
      const angle = Math.random() * Math.PI * 2;
      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = 0.5 + Math.random() * 4;
      positions[i * 3 + 2] = Math.sin(angle) * radius;

      colors[i * 3] = color.r * (0.5 + Math.random() * 0.5);
      colors[i * 3 + 1] = color.g * (0.5 + Math.random() * 0.5);
      colors[i * 3 + 2] = color.b * (0.5 + Math.random() * 0.5);
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    particles.userData.basePositions = positions.slice();
    atmosphereGroup.add(particles);
    atmosphereGroup.userData.particles = particles;

    return atmosphereGroup;
  }

  /**
   * Create boss spawn marker (ominous visual indicator)
   */
  createSpawnMarker(bossData) {
    const markerGroup = new THREE.Group();

    // Ground symbol
    const symbolMat = new THREE.MeshStandardMaterial({
      color: bossData.glowColor || 0xff4400,
      emissive: bossData.glowColor || 0xff4400,
      emissiveIntensity: 1.5,
      transparent: true,
      opacity: 0.6,
    });

    // Outer ring
    const outerRingGeo = new THREE.RingGeometry(3, 3.5, 32);
    const outerRing = new THREE.Mesh(outerRingGeo, symbolMat);
    outerRing.rotation.x = -Math.PI / 2;
    outerRing.position.y = 0.05;
    markerGroup.add(outerRing);

    // Inner symbol (boss-specific shape)
    const innerGeo = new THREE.CircleGeometry(1.5, 6);
    const inner = new THREE.Mesh(innerGeo, symbolMat.clone());
    inner.material.opacity = 0.3;
    inner.rotation.x = -Math.PI / 2;
    inner.position.y = 0.03;
    markerGroup.add(inner);

    // Floating boss name indicator
    // (Would need text rendering - simplified as glow orb)
    const indicatorMat = new THREE.MeshStandardMaterial({
      color: bossData.glowColor || 0xff4400,
      emissive: bossData.glowColor || 0xff4400,
      emissiveIntensity: 2,
      transparent: true,
      opacity: 0.8,
    });

    const indicatorGeo = new THREE.SphereGeometry(0.3, 16, 12);
    const indicator = new THREE.Mesh(indicatorGeo, indicatorMat);
    indicator.position.y = 5;
    markerGroup.add(indicator);

    // Indicator light
    const light = new THREE.PointLight(bossData.glowColor || 0xff4400, 1, 10);
    light.position.y = 5;
    markerGroup.add(light);

    markerGroup.userData.indicator = indicator;
    markerGroup.userData.light = light;

    return markerGroup;
  }

  /**
   * Spawn a boss at its arena
   */
  spawnBoss(bossId) {
    const arena = this.arenas.get(bossId);
    if (!arena) {
      console.warn(`[BossSpawner] No arena for boss: ${bossId}`);
      return null;
    }

    const bossData = arena.bossData;

    // Create boss model using BossRenderer
    const bossModel = bossRenderer.createBossModel(bossData.modelType, bossData);
    bossModel.position.copy(arena.position);
    bossModel.position.y = arena.position.y;
    this.scene.add(bossModel);

    // Create boss instance data
    const bossInstance = {
      id: bossId,
      mesh: bossModel,
      data: bossData,
      state: 'idle', // idle, aggro, fighting, phase_transition, defeated
      currentPhase: 1,
      health: bossData.stats.maxHealth,
      posture: 0,
      isActivated: false,
      target: null,
    };

    this.activeBosses.set(bossId, bossInstance);

    // Hide spawn marker when boss is present
    if (arena.spawnMarker) {
      arena.spawnMarker.visible = false;
    }

    console.log(`[BossSpawner] Spawned boss: ${bossData.name}`);

    return bossInstance;
  }

  /**
   * Check if a boss should spawn (not defeated or respawned)
   */
  shouldSpawnBoss(bossId) {
    // Check respawn timer
    const timer = this.respawnTimers.get(bossId);
    if (timer) {
      const now = Date.now();
      const elapsed = (now - timer.lastKilledAt) / 1000;
      if (elapsed < timer.respawnTime) {
        return false; // Still on cooldown
      }
    }

    // Check if already spawned
    if (this.activeBosses.has(bossId)) {
      return false;
    }

    return true;
  }

  /**
   * Activate boss fight (player enters proximity)
   */
  activateBossFight(bossId) {
    const boss = this.activeBosses.get(bossId);
    const arena = this.arenas.get(bossId);

    if (!boss || !arena || boss.isActivated) return;

    boss.isActivated = true;
    boss.state = 'aggro';
    boss.target = this.player;
    arena.active = true;
    this.currentBossFight = bossId;

    // Show arena boundary (fog wall)
    if (arena.boundary) {
      arena.boundary.visible = true;
      const fog = arena.boundary.userData.fog;
      if (fog) {
        fog.material.opacity = 0.3;
      }
    }

    // Add boundary to collision system
    this.arenaColliders.push({
      type: 'cylinder',
      position: arena.position.clone(),
      radius: arena.radius,
      height: 10,
    });

    // Trigger callbacks
    if (this.onBossActivate) {
      this.onBossActivate(boss.data);
    }

    if (this.onArenaEnter) {
      this.onArenaEnter(bossId, arena);
    }

    console.log(`[BossSpawner] Boss fight activated: ${boss.data.name}`);
  }

  /**
   * Deactivate boss fight (boss defeated or player fled)
   */
  deactivateBossFight(bossId, defeated = false) {
    const boss = this.activeBosses.get(bossId);
    const arena = this.arenas.get(bossId);

    if (!boss || !arena) return;

    arena.active = false;
    this.currentBossFight = null;

    // Hide arena boundary
    if (arena.boundary) {
      arena.boundary.visible = false;
      const fog = arena.boundary.userData.fog;
      if (fog) {
        fog.material.opacity = 0;
      }
    }

    // Remove boundary collision
    this.arenaColliders = this.arenaColliders.filter(
      (c) => !(c.type === 'cylinder' && c.position.equals(arena.position))
    );

    if (defeated) {
      this.onBossDefeated?.(boss.data, arena);
    }

    if (this.onArenaExit) {
      this.onArenaExit(bossId, arena);
    }
  }

  /**
   * Handle boss defeat
   */
  defeatBoss(bossId) {
    const boss = this.activeBosses.get(bossId);
    const arena = this.arenas.get(bossId);

    if (!boss) return;

    boss.state = 'defeated';

    // Play death animation
    bossRenderer.playDeathAnimation(boss.mesh, () => {
      // Remove boss mesh
      this.scene.remove(boss.mesh);
      this.activeBosses.delete(bossId);

      // Show spawn marker again
      if (arena && arena.spawnMarker) {
        arena.spawnMarker.visible = true;
      }
    });

    // Set respawn timer
    const bossData = getBossById(bossId);
    if (bossData) {
      this.respawnTimers.set(bossId, {
        lastKilledAt: Date.now(),
        respawnTime: bossData.respawnTime,
      });
    }

    // Deactivate fight
    this.deactivateBossFight(bossId, true);

    // Save state
    this.saveState();

    console.log(`[BossSpawner] Boss defeated: ${boss.data.name}`);
  }

  /**
   * Update boss phase visuals
   */
  updateBossPhase(bossId, phase, visualChange) {
    const boss = this.activeBosses.get(bossId);
    if (!boss) return;

    boss.currentPhase = phase;
    bossRenderer.applyPhaseVisual(boss.mesh, phase, visualChange);
  }

  /**
   * Update - called each frame
   */
  update(delta) {
    if (!this.player) return;

    const playerPos = this.player.position || this.player.mesh?.position;
    if (!playerPos) return;

    // Check proximity to boss arenas
    this.arenas.forEach((arena, bossId) => {
      const distance = playerPos.distanceTo(arena.position);

      // Check if player entered arena (within radius + buffer)
      if (distance < arena.radius - 5 && !arena.active) {
        const boss = this.activeBosses.get(bossId);
        if (boss && !boss.isActivated) {
          this.activateBossFight(bossId);
        }
      }

      // Update atmosphere particles
      if (arena.atmosphere?.userData.particles) {
        this.updateAtmosphereParticles(arena.atmosphere.userData.particles, delta);
      }

      // Update spawn marker animation
      if (arena.spawnMarker?.visible) {
        this.updateSpawnMarker(arena.spawnMarker, delta);
      }
    });

    // Update active bosses
    this.activeBosses.forEach((boss, bossId) => {
      if (boss.mesh) {
        bossRenderer.updateBossModel(boss.mesh, delta);
      }
    });

    // Update active effects
    bossRenderer.updateEffects(delta);

    // Check respawn timers
    this.checkRespawns();
  }

  updateAtmosphereParticles(particles, delta) {
    if (!particles.userData.basePositions) return;

    const time = Date.now() * 0.001;
    const positions = particles.geometry.attributes.position.array;
    const basePositions = particles.userData.basePositions;

    for (let i = 0; i < positions.length / 3; i++) {
      const offset = i * 0.3;
      positions[i * 3] = basePositions[i * 3] + Math.sin(time + offset) * 0.5;
      positions[i * 3 + 1] = basePositions[i * 3 + 1] + Math.sin(time * 0.5 + offset) * 0.3;
      positions[i * 3 + 2] = basePositions[i * 3 + 2] + Math.cos(time + offset) * 0.5;
    }

    particles.geometry.attributes.position.needsUpdate = true;
  }

  updateSpawnMarker(marker, delta) {
    const time = Date.now() * 0.001;

    // Bob indicator
    if (marker.userData.indicator) {
      marker.userData.indicator.position.y = 5 + Math.sin(time * 2) * 0.3;
    }

    // Pulse light
    if (marker.userData.light) {
      marker.userData.light.intensity = 1 + Math.sin(time * 3) * 0.5;
    }

    // Rotate outer ring
    if (marker.children[0]) {
      marker.children[0].rotation.z += delta * 0.2;
    }
  }

  /**
   * Check and handle boss respawns
   */
  checkRespawns() {
    const now = Date.now();

    this.respawnTimers.forEach((timer, bossId) => {
      const elapsed = (now - timer.lastKilledAt) / 1000;
      if (elapsed >= timer.respawnTime) {
        // Respawn the boss
        if (!this.activeBosses.has(bossId)) {
          this.spawnBoss(bossId);
          this.respawnTimers.delete(bossId);
          console.log(`[BossSpawner] Boss respawned: ${bossId}`);
        }
      }
    });
  }

  /**
   * Check arena boundary collision
   */
  checkArenaBoundaryCollision(position, radius = 0.4) {
    if (!this.currentBossFight) return null;

    const arena = this.arenas.get(this.currentBossFight);
    if (!arena || !arena.active) return null;

    const dx = position.x - arena.position.x;
    const dz = position.z - arena.position.z;
    const distance = Math.sqrt(dx * dx + dz * dz);

    // Check if trying to leave arena
    if (distance > arena.radius - radius) {
      // Push back inside
      const pushDistance = distance - (arena.radius - radius);
      const nx = dx / distance;
      const nz = dz / distance;
      return new THREE.Vector3(-nx * pushDistance, 0, -nz * pushDistance);
    }

    return null;
  }

  /**
   * Get boss palette colors
   */
  getBossPalette(modelType) {
    const palettes = {
      golem: { main: 0x5a5a6a, accent: 0x4488ff, glow: 0x44aaff },
      wraith: { main: 0x1a1a2a, accent: 0x6622aa, glow: 0xaa22ff },
      treant: { main: 0x3a4a2a, accent: 0x66aa44, glow: 0x88ff44 },
      knight: { main: 0x2a2a35, accent: 0x880044, glow: 0xff2244 },
    };
    return palettes[modelType] || palettes.golem;
  }

  /**
   * Save boss state to SaveManager
   */
  saveState() {
    if (!this.saveManager) return;

    const state = {
      respawnTimers: Array.from(this.respawnTimers.entries()),
    };

    this.saveManager.setBossState?.(state);
  }

  /**
   * Load boss state from SaveManager
   */
  loadState() {
    if (!this.saveManager) return;

    const state = this.saveManager.getBossState?.();
    if (state?.respawnTimers) {
      this.respawnTimers = new Map(state.respawnTimers);
    }
  }

  /**
   * Get active boss instance
   */
  getActiveBoss(bossId) {
    return this.activeBosses.get(bossId);
  }

  /**
   * Get current boss fight data
   */
  getCurrentBossFight() {
    if (!this.currentBossFight) return null;
    return this.activeBosses.get(this.currentBossFight);
  }

  /**
   * Is player in a boss fight?
   */
  isInBossFight() {
    return this.currentBossFight !== null;
  }

  /**
   * Cleanup
   */
  dispose() {
    // Remove all boss meshes
    this.activeBosses.forEach((boss) => {
      if (boss.mesh) {
        this.scene.remove(boss.mesh);
      }
    });

    // Remove all arenas
    this.arenas.forEach((arena) => {
      if (arena.group) {
        this.scene.remove(arena.group);
      }
    });

    this.activeBosses.clear();
    this.arenas.clear();
    this.respawnTimers.clear();
    this.arenaColliders = [];

    bossRenderer.dispose();
  }
}

// Export singleton factory
export function createBossSpawner(scene, world, enemyManager, saveManager) {
  return new BossSpawner(scene, world, enemyManager, saveManager);
}
