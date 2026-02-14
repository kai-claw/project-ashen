import * as THREE from 'three';

/**
 * VillageManager - Creates villages with dynamic chunk loading
 * Phase 13/15-HOTFIX: Infinite world village generation
 * 
 * Places villages in safe/medium zones using region-based generation.
 * Regions are larger than terrain chunks to ensure proper village spacing.
 */
export class VillageManager {
  constructor(scene, terrainGenerator) {
    this.scene = scene;
    this.terrain = terrainGenerator;
    
    // Region-based generation (larger than terrain chunks)
    this.regionSize = 200;      // 200x200 units per region
    this.loadDistance = 2;      // Load regions within 2 of player
    this.unloadDistance = 3;    // Unload beyond 3
    
    // Village settings
    this.minDistFromCastle = 60;    // Safe zone boundary
    this.villagesPerRegion = 1;     // Max 1 village per region
    this.maxSlopeForVillage = 0.3;  // Max terrain slope for flat ground
    this.minVillageSpacing = 80;    // Min spacing between villages
    
    // Building materials (reused)
    this.materials = this._createMaterials();
    
    // Region storage
    this.regions = new Map();
    
    // All villages (for queries)
    this.villages = [];
    
    // Track player position
    this.lastPlayerRegionX = null;
    this.lastPlayerRegionZ = null;
    
    // Initial generation
    this.update(0, 0);
    
    console.log(`[VillageManager] Initialized with region-based generation`);
  }
  
  /**
   * Seeded random for consistent generation
   */
  _seededRandom(seed) {
    const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
    return x - Math.floor(x);
  }
  
  /**
   * Get region key
   */
  _regionKey(rx, rz) {
    return `${rx},${rz}`;
  }
  
  /**
   * Convert world position to region coords
   */
  _worldToRegion(x, z) {
    return {
      rx: Math.floor(x / this.regionSize),
      rz: Math.floor(z / this.regionSize),
    };
  }
  
  /**
   * Update villages based on player position
   */
  update(playerX, playerZ) {
    const { rx, rz } = this._worldToRegion(playerX, playerZ);
    
    if (rx === this.lastPlayerRegionX && rz === this.lastPlayerRegionZ) {
      return;
    }
    
    this.lastPlayerRegionX = rx;
    this.lastPlayerRegionZ = rz;
    
    // Load needed regions
    const neededRegions = new Set();
    
    for (let dx = -this.loadDistance; dx <= this.loadDistance; dx++) {
      for (let dz = -this.loadDistance; dz <= this.loadDistance; dz++) {
        const regionX = rx + dx;
        const regionZ = rz + dz;
        const key = this._regionKey(regionX, regionZ);
        neededRegions.add(key);
        
        if (!this.regions.has(key)) {
          this._loadRegion(regionX, regionZ);
        }
      }
    }
    
    // Unload distant regions
    const toUnload = [];
    for (const [key] of this.regions) {
      const [regionX, regionZ] = key.split(',').map(Number);
      const dx = Math.abs(regionX - rx);
      const dz = Math.abs(regionZ - rz);
      if (dx > this.unloadDistance || dz > this.unloadDistance) {
        toUnload.push(key);
      }
    }
    
    for (const key of toUnload) {
      this._unloadRegion(key);
    }
  }
  
  /**
   * Generate village for a region
   */
  _loadRegion(rx, rz) {
    const key = this._regionKey(rx, rz);
    if (this.regions.has(key)) return;
    
    const regionData = {
      villages: [],
      meshes: [],
    };
    
    const worldOffsetX = rx * this.regionSize;
    const worldOffsetZ = rz * this.regionSize;
    const regionSeed = rx * 73856093 + rz * 19349663;
    
    // Try to place one village in this region
    const attempts = 20;
    for (let i = 0; i < attempts; i++) {
      const rand1 = this._seededRandom(regionSeed + i * 3);
      const rand2 = this._seededRandom(regionSeed + i * 3 + 1);
      
      // Random position within region
      const x = worldOffsetX + rand1 * this.regionSize;
      const z = worldOffsetZ + rand2 * this.regionSize;
      
      // Check distance from castle
      const distFromOrigin = Math.sqrt(x * x + z * z);
      if (distFromOrigin < this.minDistFromCastle) continue;
      
      // Check terrain slope
      const slope = this.terrain.getTerrainSlope(x, z);
      if (slope > this.maxSlopeForVillage) continue;
      
      // Check spacing from existing villages
      let tooClose = false;
      for (const v of this.villages) {
        const dx = x - v.x;
        const dz = z - v.z;
        if (Math.sqrt(dx * dx + dz * dz) < this.minVillageSpacing) {
          tooClose = true;
          break;
        }
      }
      if (tooClose) continue;
      
      // Check biome - prefer grassland and safe meadow
      const biome = this.terrain.getBiome(x, z);
      if (biome === 'dark_frontier') continue; // No villages in dangerous areas
      
      // Valid spot - create village
      const y = this.terrain.getTerrainHeight(x, z);
      const village = {
        x,
        y,
        z,
        rotation: this._seededRandom(regionSeed + i * 7) * Math.PI * 2,
        size: 2 + Math.floor(this._seededRandom(regionSeed + i * 11) * 2),
        regionKey: key,
      };
      
      this._buildVillage(village, regionData);
      regionData.villages.push(village);
      this.villages.push(village);
      
      break; // One village per region
    }
    
    this.regions.set(key, regionData);
  }
  
  /**
   * Unload a region
   */
  _unloadRegion(key) {
    const region = this.regions.get(key);
    if (!region) return;
    
    // Remove meshes
    for (const mesh of region.meshes) {
      this.scene.remove(mesh);
      mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
      });
    }
    
    // Remove villages from global list
    this.villages = this.villages.filter(v => v.regionKey !== key);
    
    this.regions.delete(key);
  }
  
  /**
   * Create shared materials for all village buildings
   */
  _createMaterials() {
    return {
      hutWall: new THREE.MeshStandardMaterial({
        color: 0x8B7355,
        roughness: 0.9,
        metalness: 0.0,
      }),
      hutRoof: new THREE.MeshStandardMaterial({
        color: 0xA0855C,
        roughness: 1.0,
        metalness: 0.0,
      }),
      marketWood: new THREE.MeshStandardMaterial({
        color: 0x6B5344,
        roughness: 0.85,
        metalness: 0.0,
      }),
      wellStone: new THREE.MeshStandardMaterial({
        color: 0x707070,
        roughness: 0.95,
        metalness: 0.0,
      }),
      wellWood: new THREE.MeshStandardMaterial({
        color: 0x5C4033,
        roughness: 0.9,
        metalness: 0.0,
      }),
      fenceWood: new THREE.MeshStandardMaterial({
        color: 0x7A6452,
        roughness: 0.9,
        metalness: 0.0,
      }),
    };
  }
  
  /**
   * Build a single village
   */
  _buildVillage(village, regionData) {
    const group = new THREE.Group();
    group.position.set(village.x, 0, village.z);
    group.rotation.y = village.rotation;
    
    // Central well
    this._createWell(group, 0, 0);
    
    // Huts in a circle
    const hutCount = village.size;
    for (let i = 0; i < hutCount; i++) {
      const angle = (i / hutCount) * Math.PI * 2 + Math.random() * 0.5;
      const dist = 8 + Math.random() * 5;
      const hx = Math.cos(angle) * dist;
      const hz = Math.sin(angle) * dist;
      this._createHut(group, hx, hz, village);
    }
    
    // Market stalls
    const stallCount = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < stallCount; i++) {
      const angle = (i / stallCount) * Math.PI * 2 + Math.PI / 4 + Math.random() * 0.3;
      const dist = 5 + Math.random() * 3;
      this._createMarketStall(group, Math.cos(angle) * dist, Math.sin(angle) * dist, village);
    }
    
    // Fences
    const fenceCount = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < fenceCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 12 + Math.random() * 5;
      this._createFence(group, Math.cos(angle) * dist, Math.sin(angle) * dist, angle, village);
    }
    
    this.scene.add(group);
    regionData.meshes.push(group);
  }
  
  /**
   * Create a simple hut
   */
  _createHut(group, localX, localZ, village) {
    const cos = Math.cos(village.rotation);
    const sin = Math.sin(village.rotation);
    const worldX = village.x + localX * cos - localZ * sin;
    const worldZ = village.z + localX * sin + localZ * cos;
    const terrainY = this.terrain.getTerrainHeight(worldX, worldZ);
    
    const hut = new THREE.Group();
    hut.position.set(localX, terrainY, localZ);
    
    const bodyHeight = 2.5 + Math.random() * 0.5;
    const bodyRadius = 1.5 + Math.random() * 0.3;
    const bodyGeom = new THREE.CylinderGeometry(bodyRadius, bodyRadius * 1.1, bodyHeight, 12);
    const body = new THREE.Mesh(bodyGeom, this.materials.hutWall);
    body.position.y = bodyHeight / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    hut.add(body);
    
    const roofHeight = 1.8;
    const roofGeom = new THREE.ConeGeometry(bodyRadius * 1.4, roofHeight, 12);
    const roof = new THREE.Mesh(roofGeom, this.materials.hutRoof);
    roof.position.y = bodyHeight + roofHeight / 2 - 0.1;
    roof.castShadow = true;
    hut.add(roof);
    
    const doorGeom = new THREE.BoxGeometry(0.6, 1.5, 0.1);
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x2a2015 });
    const door = new THREE.Mesh(doorGeom, doorMat);
    door.position.set(0, 0.75, bodyRadius + 0.05);
    hut.add(door);
    
    hut.rotation.y = Math.random() * Math.PI * 2;
    group.add(hut);
  }
  
  /**
   * Create a market stall
   */
  _createMarketStall(group, localX, localZ, village) {
    const cos = Math.cos(village.rotation);
    const sin = Math.sin(village.rotation);
    const worldX = village.x + localX * cos - localZ * sin;
    const worldZ = village.z + localX * sin + localZ * cos;
    const terrainY = this.terrain.getTerrainHeight(worldX, worldZ);
    
    const stall = new THREE.Group();
    stall.position.set(localX, terrainY, localZ);
    
    const postHeight = 2.2;
    const postGeom = new THREE.CylinderGeometry(0.08, 0.08, postHeight, 6);
    const stallWidth = 2.0;
    const stallDepth = 1.5;
    
    const postPositions = [
      [-stallWidth / 2, -stallDepth / 2],
      [stallWidth / 2, -stallDepth / 2],
      [-stallWidth / 2, stallDepth / 2],
      [stallWidth / 2, stallDepth / 2],
    ];
    
    for (const [px, pz] of postPositions) {
      const post = new THREE.Mesh(postGeom, this.materials.marketWood);
      post.position.set(px, postHeight / 2, pz);
      post.castShadow = true;
      stall.add(post);
    }
    
    const counterGeom = new THREE.BoxGeometry(stallWidth, 0.1, stallDepth);
    const counter = new THREE.Mesh(counterGeom, this.materials.marketWood);
    counter.position.y = 0.9;
    counter.castShadow = true;
    counter.receiveShadow = true;
    stall.add(counter);
    
    const canopyGeom = new THREE.PlaneGeometry(stallWidth * 1.2, stallDepth * 1.3);
    const canopyColors = [0xB85450, 0x5475B8, 0x6B9954, 0xC9A953];
    const canopyMat = new THREE.MeshStandardMaterial({
      color: canopyColors[Math.floor(Math.random() * canopyColors.length)],
      roughness: 0.8,
      side: THREE.DoubleSide,
    });
    const canopy = new THREE.Mesh(canopyGeom, canopyMat);
    canopy.position.y = postHeight + 0.05;
    canopy.rotation.x = -Math.PI / 2 + 0.15;
    canopy.castShadow = true;
    stall.add(canopy);
    
    stall.rotation.y = Math.random() * Math.PI * 2;
    group.add(stall);
  }
  
  /**
   * Create a village well
   */
  _createWell(group, localX, localZ) {
    const well = new THREE.Group();
    well.position.set(localX, 0, localZ);
    
    const baseGeom = new THREE.TorusGeometry(1.0, 0.3, 8, 16);
    const base = new THREE.Mesh(baseGeom, this.materials.wellStone);
    base.rotation.x = Math.PI / 2;
    base.position.y = 0.3;
    base.castShadow = true;
    base.receiveShadow = true;
    well.add(base);
    
    const wallGeom = new THREE.CylinderGeometry(1.0, 1.0, 0.8, 12, 1, true);
    const wall = new THREE.Mesh(wallGeom, this.materials.wellStone);
    wall.position.y = 0.4;
    wall.castShadow = true;
    well.add(wall);
    
    const postGeom = new THREE.CylinderGeometry(0.08, 0.08, 2.5, 6);
    const post1 = new THREE.Mesh(postGeom, this.materials.wellWood);
    post1.position.set(0.7, 1.25, 0);
    post1.castShadow = true;
    well.add(post1);
    
    const post2 = new THREE.Mesh(postGeom, this.materials.wellWood);
    post2.position.set(-0.7, 1.25, 0);
    post2.castShadow = true;
    well.add(post2);
    
    const crossbarGeom = new THREE.CylinderGeometry(0.06, 0.06, 1.6, 6);
    const crossbar = new THREE.Mesh(crossbarGeom, this.materials.wellWood);
    crossbar.position.y = 2.5;
    crossbar.rotation.z = Math.PI / 2;
    crossbar.castShadow = true;
    well.add(crossbar);
    
    const roofGeom = new THREE.ConeGeometry(1.2, 0.6, 4);
    const roof = new THREE.Mesh(roofGeom, this.materials.hutRoof);
    roof.position.y = 2.9;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    well.add(roof);
    
    const waterGeom = new THREE.CircleGeometry(0.85, 12);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x1a3050,
      roughness: 0.3,
      metalness: 0.1,
    });
    const water = new THREE.Mesh(waterGeom, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0.1;
    well.add(water);
    
    group.add(well);
  }
  
  /**
   * Create a fence section
   */
  _createFence(group, localX, localZ, angle, village) {
    const cos = Math.cos(village.rotation);
    const sin = Math.sin(village.rotation);
    const worldX = village.x + localX * cos - localZ * sin;
    const worldZ = village.z + localX * sin + localZ * cos;
    const terrainY = this.terrain.getTerrainHeight(worldX, worldZ);
    
    const fence = new THREE.Group();
    fence.position.set(localX, terrainY, localZ);
    fence.rotation.y = angle;
    
    const fenceLength = 3 + Math.random() * 2;
    const postCount = Math.ceil(fenceLength / 1.2);
    const postSpacing = fenceLength / (postCount - 1);
    
    const postGeom = new THREE.CylinderGeometry(0.06, 0.07, 1.0, 6);
    for (let i = 0; i < postCount; i++) {
      const post = new THREE.Mesh(postGeom, this.materials.fenceWood);
      post.position.set(i * postSpacing - fenceLength / 2, 0.5, 0);
      post.castShadow = true;
      fence.add(post);
    }
    
    const railGeom = new THREE.BoxGeometry(fenceLength, 0.08, 0.06);
    
    const rail1 = new THREE.Mesh(railGeom, this.materials.fenceWood);
    rail1.position.y = 0.3;
    rail1.castShadow = true;
    fence.add(rail1);
    
    const rail2 = new THREE.Mesh(railGeom, this.materials.fenceWood);
    rail2.position.y = 0.7;
    rail2.castShadow = true;
    fence.add(rail2);
    
    group.add(fence);
  }
  
  /**
   * Get village data
   */
  getVillages() {
    return this.villages;
  }
  
  /**
   * Check if position is near a village
   */
  isNearVillage(x, z, radius = 20) {
    for (const village of this.villages) {
      const dx = x - village.x;
      const dz = z - village.z;
      if (Math.sqrt(dx * dx + dz * dz) < radius) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Get loaded region count (debugging)
   */
  getLoadedRegionCount() {
    return this.regions.size;
  }
  
  /**
   * Cleanup
   */
  dispose() {
    for (const [key] of this.regions) {
      this._unloadRegion(key);
    }
    
    for (const mat of Object.values(this.materials)) {
      mat.dispose();
    }
  }
}
