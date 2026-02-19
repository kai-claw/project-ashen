import * as THREE from 'three';
import { TerrainGenerator } from './TerrainGenerator.js';
import { FoliageManager } from './FoliageManager.js';
import { VillageManager } from './VillageManager.js';
import { RuinsManager } from './RuinsManager.js';
import { CaveManager } from './CaveManager.js';
import { NPCManager } from './NPCManager.js';

/**
 * World - Open World Environment
 * Phase 12: Procedural terrain + starting castle + foliage
 * 
 * Replaces the cathedral dungeon with open world terrain.
 */
export class World {
  constructor(scene) {
    this.scene = scene;
    
    // Collision systems
    this.colliders = [];      // Wall/structure colliders
    this.floorZones = [];     // (Legacy - unused with terrain)
    this.stairs = [];         // (Legacy - unused with terrain)
    this.doors = [];          // Interactive doors
    this.hiddenWalls = [];    // Illusory walls (future)
    this.ladders = [];        // Climbable ladders (future)
    this.shortcuts = [];      // Unlockable shortcuts (future)
    
    // Player spawn/checkpoint
    this.bonfirePosition = new THREE.Vector3(0, 0, 0);
    
    // Boss arena state (placeholder for future bosses)
    this.bossArena = {
      active: false,
      phase: 'idle',
    };
    
    // === CREATE WORLD COMPONENTS ===
    this._createSkybox();
    this.terrain = new TerrainGenerator(scene);
    this._createStartingCastle();
    this.foliage = new FoliageManager(scene, this.terrain);
    this.villages = new VillageManager(scene, this.terrain);
    this.npcManager = new NPCManager(scene, this.terrain, this.villages);
    this.ruinsManager = new RuinsManager(scene, this.terrain, this.colliders);
    this.caveManager = new CaveManager(scene, this.terrain);
    this._createLighting();
    
    // Update bonfire position to be on terrain
    this.bonfirePosition.y = this.terrain.getTerrainHeight(0, 0);
  }
  
  // ========================================
  // TERRAIN COLLISION (Main collision API)
  // ========================================
  
  /**
   * Get floor Y at position - follows terrain
   * This is the main ground collision function
   */
  getFloorY(x, z) {
    return this.terrain.getTerrainHeight(x, z);
  }
  
  /**
   * Get terrain slope at position
   */
  getTerrainSlope(x, z) {
    return this.terrain.getTerrainSlope(x, z);
  }
  
  /**
   * Get current biome at position
   */
  getBiome(x, z) {
    return this.terrain.getBiome(x, z);
  }
  
  // ========================================
  // WALL COLLISION
  // ========================================
  
  /**
   * Check collision with walls/structures
   * Returns push-out vector if colliding
   */
  checkWallCollision(position, radius = 0.4) {
    const pushOut = new THREE.Vector3();
    let collided = false;
    
    for (const collider of this.colliders) {
      if (collider.type === 'box') {
        const bounds = collider.bounds;
        if (!bounds) continue;
        
        // Expand bounds by player radius
        const minX = bounds.min.x - radius;
        const maxX = bounds.max.x + radius;
        const minZ = bounds.min.z - radius;
        const maxZ = bounds.max.z + radius;
        
        // Check if position is inside expanded bounds
        if (position.x > minX && position.x < maxX &&
            position.z > minZ && position.z < maxZ &&
            position.y > bounds.min.y - 1 && position.y < bounds.max.y) {
          
          // Calculate push-out direction (shortest path out)
          const distToMinX = position.x - minX;
          const distToMaxX = maxX - position.x;
          const distToMinZ = position.z - minZ;
          const distToMaxZ = maxZ - position.z;
          
          const minDist = Math.min(distToMinX, distToMaxX, distToMinZ, distToMaxZ);
          
          if (minDist === distToMinX) pushOut.x -= distToMinX;
          else if (minDist === distToMaxX) pushOut.x += distToMaxX;
          else if (minDist === distToMinZ) pushOut.z -= distToMinZ;
          else pushOut.z += distToMaxZ;
          
          collided = true;
        }
      } else if (collider.type === 'cylinder') {
        // Pillar/tower collision
        const dx = position.x - collider.position.x;
        const dz = position.z - collider.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const minDist = collider.radius + radius;
        
        if (dist < minDist && position.y > collider.position.y - 4 && position.y < collider.position.y + collider.height) {
          const overlap = minDist - dist;
          if (dist > 0.001) {
            pushOut.x += (dx / dist) * overlap;
            pushOut.z += (dz / dist) * overlap;
          }
          collided = true;
        }
      }
    }
    
    return collided ? pushOut : null;
  }
  
  /**
   * Check collision with trees (foliage system)
   * Returns push-out vector if colliding
   */
  checkTreeCollision(position, radius = 0.4) {
    if (!this.foliage) return null;
    return this.foliage.checkTreeCollision(position, radius);
  }
  
  /**
   * Combined collision check - walls + trees
   * Returns object { collides: boolean, pushVector: Vector3 }
   */
  checkCollision(position, radius = 0.4) {
    const pushVector = new THREE.Vector3();
    let collides = false;
    
    // Check wall collision
    const wallPush = this.checkWallCollision(position, radius);
    if (wallPush) {
      pushVector.add(wallPush);
      collides = true;
    }
    
    // Check tree collision
    const treePush = this.checkTreeCollision(position, radius);
    if (treePush) {
      pushVector.add(treePush);
      collides = true;
    }
    
    return { collides, pushVector };
  }
  
  /**
   * Check if position is near a tree (for spawn validation)
   */
  isNearTree(x, z, minDistance = 3) {
    if (!this.foliage) return false;
    return this.foliage.isNearTree(x, z, minDistance);
  }
  
  /**
   * Check if position is near a village (for spawn validation)
   */
  isNearVillage(x, z, radius = 25) {
    if (!this.villages) return false;
    return this.villages.isNearVillage(x, z, radius);
  }
  
  /**
   * Get village data (for NPCs, quests, etc.)
   */
  getVillages() {
    if (!this.villages) return [];
    return this.villages.getVillages();
  }
  
  /**
   * Check if position is near ancient ruins (for spawn validation)
   */
  isNearRuin(x, z, radius = 15) {
    if (!this.ruinsManager) return false;
    return this.ruinsManager.isNearRuin(x, z, radius);
  }
  
  /**
   * Get ruins data (for enemy camps, quests)
   */
  getRuins() {
    if (!this.ruinsManager) return [];
    return this.ruinsManager.getRuins();
  }
  
  /**
   * Get nearby ruin for enemy camp spawning
   */
  getNearbyRuin(x, z, radius = 20) {
    if (!this.ruinsManager) return null;
    return this.ruinsManager.getNearbyRuin(x, z, radius);
  }
  
  /**
   * Check if position is near a cave entrance
   */
  isNearCave(x, z, radius = 15) {
    if (!this.caveManager) return false;
    return this.caveManager.isNearCave(x, z, radius);
  }
  
  /**
   * Get all cave entrance data (for future mini-dungeons)
   */
  getCaves() {
    if (!this.caveManager) return [];
    return this.caveManager.getCaves();
  }
  
  /**
   * Get nearest cave (for interactions/quests)
   */
  getNearestCave(x, z) {
    if (!this.caveManager) return null;
    return this.caveManager.getNearestCave(x, z);
  }
  
  /**
   * Check if position is near an NPC
   */
  isNearNPC(x, z, radius = 2) {
    if (!this.npcManager) return false;
    return this.npcManager.isNearNPC(x, z, radius);
  }
  
  /**
   * Get NPC at position (for interaction)
   */
  getNPCAt(x, z, radius = 1.5) {
    if (!this.npcManager) return null;
    return this.npcManager.getNPCAt(x, z, radius);
  }
  
  /**
   * Get all NPCs
   */
  getNPCs() {
    if (!this.npcManager) return [];
    return this.npcManager.getNPCs();
  }
  
  // ========================================
  // SKYBOX & LIGHTING
  // ========================================
  
  _createSkybox() {
    // Bright daytime sky for open world
    const skyGeo = new THREE.SphereGeometry(500, 32, 32);
    
    const skyMat = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x4488cc) },    // Sky blue
        horizonColor: { value: new THREE.Color(0x88aacc) }, // Lighter horizon
        bottomColor: { value: new THREE.Color(0x667744) },  // Green-ish for ground reflection
        sunDirection: { value: new THREE.Vector3(0.5, 0.7, 0.3).normalize() },
        sunColor: { value: new THREE.Color(0xffffdd) },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 horizonColor;
        uniform vec3 bottomColor;
        uniform vec3 sunDirection;
        uniform vec3 sunColor;
        varying vec3 vWorldPosition;
        
        void main() {
          vec3 viewDir = normalize(vWorldPosition);
          float h = viewDir.y;
          
          // Sky gradient
          vec3 sky;
          if (h > 0.0) {
            sky = mix(horizonColor, topColor, pow(h, 0.6));
          } else {
            sky = mix(horizonColor, bottomColor, pow(-h, 0.4));
          }
          
          // Sun glow
          float sunDot = max(0.0, dot(viewDir, sunDirection));
          float sunGlow = pow(sunDot, 128.0) * 2.0 + pow(sunDot, 16.0) * 0.3;
          sky += sunColor * sunGlow;
          
          // Atmospheric haze near horizon
          float haze = 1.0 - abs(h);
          haze = pow(haze, 3.0) * 0.3;
          sky = mix(sky, vec3(0.8, 0.85, 0.9), haze);
          
          gl_FragColor = vec4(sky, 1.0);
        }
      `,
      side: THREE.BackSide,
    });
    
    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(sky);
    
    // Sun disc
    const sunGeo = new THREE.CircleGeometry(20, 32);
    const sunMat = new THREE.MeshBasicMaterial({
      color: 0xffffee,
      transparent: true,
      opacity: 0.9,
    });
    const sun = new THREE.Mesh(sunGeo, sunMat);
    sun.position.set(150, 200, 100);
    sun.lookAt(0, 0, 0);
    this.scene.add(sun);
  }
  
  _createLighting() {
    // NOTE: All scene lighting is now managed by DayNightLighting (Phase 24).
    // It creates sun, moon, and ambient lights with phase-based transitions.
    // Hemisphere + fill lights provide extra bounce that DayNightLighting doesn't cover.
    const hemiLight = new THREE.HemisphereLight(0x99bbdd, 0x556644, 0.4);
    this.scene.add(hemiLight);
  }
  
  // ========================================
  // STARTING CASTLE
  // ========================================
  
  _createStartingCastle() {
    // Castle dimensions (per design doc)
    const CASTLE_WIDTH = 40;   // X dimension
    const CASTLE_DEPTH = 50;   // Z dimension
    const WALL_HEIGHT = 8;
    const WALL_THICKNESS = 2;
    const TOWER_SIZE = 8;
    const TOWER_HEIGHT = 12;
    const GATE_WIDTH = 6;
    
    // Castle materials
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x555555,
      roughness: 0.9,
      metalness: 0.1,
    });
    
    const darkStoneMat = new THREE.MeshStandardMaterial({
      color: 0x444444,
      roughness: 0.95,
      metalness: 0.05,
    });
    
    // Castle floor (flat stone courtyard)
    const floorGeo = new THREE.PlaneGeometry(CASTLE_WIDTH - 4, CASTLE_DEPTH - 4);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x3a3a40,
      roughness: 0.95,
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0.05;
    floor.receiveShadow = true;
    this.scene.add(floor);
    
    // Helper to create walls
    const createWall = (x, y, z, width, height, depth) => {
      const geo = new THREE.BoxGeometry(width, height, depth);
      const mesh = new THREE.Mesh(geo, stoneMat);
      mesh.position.set(x, y + height / 2, z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      this.scene.add(mesh);
      
      // Add collision
      this.colliders.push({
        type: 'box',
        bounds: new THREE.Box3(
          new THREE.Vector3(x - width/2, y, z - depth/2),
          new THREE.Vector3(x + width/2, y + height, z + depth/2)
        ),
      });
    };
    
    // Helper to create corner towers
    const createTower = (x, z) => {
      // Tower base
      const towerGeo = new THREE.CylinderGeometry(TOWER_SIZE / 2 - 0.5, TOWER_SIZE / 2, TOWER_HEIGHT, 8);
      const tower = new THREE.Mesh(towerGeo, darkStoneMat);
      tower.position.set(x, TOWER_HEIGHT / 2, z);
      tower.castShadow = true;
      tower.receiveShadow = true;
      this.scene.add(tower);
      
      // Tower top (crenellations)
      const topGeo = new THREE.CylinderGeometry(TOWER_SIZE / 2 + 0.2, TOWER_SIZE / 2 - 0.3, 1.5, 8);
      const top = new THREE.Mesh(topGeo, stoneMat);
      top.position.set(x, TOWER_HEIGHT + 0.75, z);
      top.castShadow = true;
      this.scene.add(top);
      
      // Tower collision
      this.colliders.push({
        type: 'cylinder',
        position: new THREE.Vector3(x, 0, z),
        radius: TOWER_SIZE / 2,
        height: TOWER_HEIGHT,
      });
      
      // Add torch to tower (facing inward toward courtyard)
      const torchX = x > 0 ? x - TOWER_SIZE / 2 - 0.5 : x + TOWER_SIZE / 2 + 0.5;
      const torchZ = z > 0 ? z - TOWER_SIZE / 2 - 0.5 : z + TOWER_SIZE / 2 + 0.5;
      this._createTorch(torchX, WALL_HEIGHT - 1, torchZ);
    };
    
    const halfW = CASTLE_WIDTH / 2;
    const halfD = CASTLE_DEPTH / 2;
    
    // WALLS
    // South wall (back, continuous)
    createWall(0, 0, -halfD, CASTLE_WIDTH, WALL_HEIGHT, WALL_THICKNESS);
    
    // North wall (front, with gate gap)
    const northWallHalf = (CASTLE_WIDTH - GATE_WIDTH) / 2;
    createWall(-halfW + northWallHalf / 2 + WALL_THICKNESS / 2, 0, halfD, northWallHalf - WALL_THICKNESS, WALL_HEIGHT, WALL_THICKNESS);
    createWall(halfW - northWallHalf / 2 - WALL_THICKNESS / 2, 0, halfD, northWallHalf - WALL_THICKNESS, WALL_HEIGHT, WALL_THICKNESS);
    
    // West wall
    createWall(-halfW, 0, 0, WALL_THICKNESS, WALL_HEIGHT, CASTLE_DEPTH);
    
    // East wall
    createWall(halfW, 0, 0, WALL_THICKNESS, WALL_HEIGHT, CASTLE_DEPTH);
    
    // TOWERS (at corners)
    createTower(-halfW + TOWER_SIZE / 2, -halfD + TOWER_SIZE / 2);  // SW
    createTower(halfW - TOWER_SIZE / 2, -halfD + TOWER_SIZE / 2);   // SE
    createTower(-halfW + TOWER_SIZE / 2, halfD - TOWER_SIZE / 2);   // NW
    createTower(halfW - TOWER_SIZE / 2, halfD - TOWER_SIZE / 2);    // NE
    
    // BONFIRE in center of courtyard
    this._createBonfire(0, 0, -5);
    
    // Wall torches for better courtyard lighting
    // South wall torches (back wall)
    this._createTorch(-12, 5, -halfD + WALL_THICKNESS + 0.5);
    this._createTorch(12, 5, -halfD + WALL_THICKNESS + 0.5);
    
    // West wall torches
    this._createTorch(-halfW + WALL_THICKNESS + 0.5, 5, -10);
    this._createTorch(-halfW + WALL_THICKNESS + 0.5, 5, 10);
    
    // East wall torches
    this._createTorch(halfW - WALL_THICKNESS - 0.5, 5, -10);
    this._createTorch(halfW - WALL_THICKNESS - 0.5, 5, 10);
    
    // Near gate torches (flanking the entrance)
    this._createTorch(-GATE_WIDTH/2 - 1, 5, halfD - WALL_THICKNESS - 0.5);
    this._createTorch(GATE_WIDTH/2 + 1, 5, halfD - WALL_THICKNESS - 0.5);
    
    console.log('[World] Castle torches added for starting area visibility');
    
    // Gate visual (open archway)
    const gateArchGeo = new THREE.BoxGeometry(GATE_WIDTH + 1, 1.5, WALL_THICKNESS + 0.5);
    const gateArch = new THREE.Mesh(gateArchGeo, darkStoneMat);
    gateArch.position.set(0, WALL_HEIGHT - 0.25, halfD);
    gateArch.castShadow = true;
    this.scene.add(gateArch);
    
    console.log('[World] Starting castle created');
  }
  
  _createBonfire(x, y, z) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    
    // Stone ring base
    const ringGeo = new THREE.TorusGeometry(0.8, 0.15, 8, 16);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.9 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.1;
    ring.castShadow = true;
    group.add(ring);
    
    // Logs
    const logMat = new THREE.MeshStandardMaterial({ color: 0x3a2010, roughness: 0.95 });
    for (let i = 0; i < 6; i++) {
      const logGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.8, 6);
      const log = new THREE.Mesh(logGeo, logMat);
      const angle = (i / 6) * Math.PI * 2;
      log.position.set(Math.cos(angle) * 0.3, 0.15, Math.sin(angle) * 0.3);
      log.rotation.x = Math.PI / 2;
      log.rotation.z = angle + Math.PI / 2;
      log.rotation.y = 0.3;
      group.add(log);
    }
    
    // Fire light
    const fireLight = new THREE.PointLight(0xff8833, 3, 15);
    fireLight.position.y = 0.8;
    fireLight.castShadow = true;
    group.add(fireLight);
    
    // Fire flicker animation
    const animate = () => {
      requestAnimationFrame(animate);
      fireLight.intensity = 2.5 + Math.sin(Date.now() * 0.01) * 0.5 + Math.random() * 0.3;
    };
    animate();
    
    // Fire particles (simple glowing spheres)
    const particleGeo = new THREE.SphereGeometry(0.05, 8, 8);
    const particleMat = new THREE.MeshBasicMaterial({ color: 0xff6600 });
    for (let i = 0; i < 8; i++) {
      const particle = new THREE.Mesh(particleGeo, particleMat);
      particle.position.set(
        (Math.random() - 0.5) * 0.4,
        0.3 + Math.random() * 0.5,
        (Math.random() - 0.5) * 0.4
      );
      group.add(particle);
    }
    
    this.scene.add(group);
    
    // Update bonfire position
    this.bonfirePosition.set(x, y, z);
  }
  
  _createTorch(x, y, z) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    
    // Torch bracket (metal holder on wall)
    const bracketMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.8, metalness: 0.5 });
    const bracketGeo = new THREE.BoxGeometry(0.15, 0.4, 0.15);
    const bracket = new THREE.Mesh(bracketGeo, bracketMat);
    bracket.position.y = -0.1;
    group.add(bracket);
    
    // Torch handle (wooden)
    const handleMat = new THREE.MeshStandardMaterial({ color: 0x4a3020, roughness: 0.9 });
    const handleGeo = new THREE.CylinderGeometry(0.05, 0.06, 0.6, 6);
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.y = 0.2;
    group.add(handle);
    
    // Torch head (burning part)
    const headMat = new THREE.MeshStandardMaterial({ 
      color: 0x331100, 
      emissive: 0xff4400, 
      emissiveIntensity: 0.5 
    });
    const headGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 0.55;
    head.scale.y = 1.3;
    group.add(head);
    
    // Torch light (warm flickering glow)
    const torchLight = new THREE.PointLight(0xff7733, 2.5, 18);
    torchLight.position.y = 0.6;
    group.add(torchLight);
    
    // Store light reference for flickering
    this.torchLights = this.torchLights || [];
    this.torchLights.push(torchLight);
    
    // Start flicker animation if not already running
    if (!this._torchFlickerStarted) {
      this._torchFlickerStarted = true;
      const flickerTorches = () => {
        requestAnimationFrame(flickerTorches);
        const time = Date.now() * 0.001;
        for (let i = 0; i < this.torchLights.length; i++) {
          const light = this.torchLights[i];
          // Each torch flickers slightly differently
          light.intensity = 2.0 + Math.sin(time * 8 + i * 1.7) * 0.4 + Math.random() * 0.3;
        }
      };
      flickerTorches();
    }
    
    this.scene.add(group);
    return group;
  }
  
  // ========================================
  // ITEM SPAWNS (for ItemManager)
  // ========================================
  
  getItemSpawns() {
    // Return empty for now - items will spawn based on exploration
    // Future: spawn items at points of interest
    return [];
  }
  
  // ========================================
  // DOOR/LADDER/SHORTCUT STUBS (Legacy API)
  // ========================================
  
  getNearbyDoor(position) { return null; }
  tryOpenDoor(id, itemManager) { return false; }
  getNearbyLadder(position) { return null; }
  getNearbyShortcut(position) { return null; }
  unlockShortcut(id) { return false; }
  checkHiddenWallHit(position, range) { return null; }
  revealHiddenWall(id) {}
  checkInsideIllusoryWall(position) { return null; }
  
  // ========================================
  // BOSS ARENA STUBS (Legacy API - Phase 11)
  // ========================================
  
  activateBossArena() { return false; }
  setBossArenaPhase(phase) { return null; }
  updateBossArena(dt, playerPos) { return 0; }
  deactivateBossArena() { return false; }
  isBlockedByFogGate(position) { return false; }
  getBossArenaState() { return { active: false, phase: 'idle' }; }
  
  // ========================================
  // CLEANUP
  // ========================================
  
  dispose() {
    if (this.terrain) {
      this.terrain.dispose();
    }
    if (this.foliage) {
      this.foliage.dispose();
    }
    if (this.villages) {
      this.villages.dispose();
    }
    if (this.npcManager) {
      this.npcManager.dispose();
    }
    if (this.ruinsManager) {
      this.ruinsManager.dispose();
    }
    if (this.caveManager) {
      this.caveManager.dispose();
    }
  }
}
