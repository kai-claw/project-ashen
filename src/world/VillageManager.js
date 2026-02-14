import * as THREE from 'three';

/**
 * VillageManager - Creates villages with simple buildings
 * Phase 13: Villages and Landmarks
 * 
 * Places decorative villages in safe/medium zones around the starting castle.
 * Buildings are simple geometry (huts, market stalls, wells) placed on terrain.
 */
export class VillageManager {
  constructor(scene, terrainGenerator) {
    this.scene = scene;
    this.terrain = terrainGenerator;
    
    // Village settings
    this.minDistFromCastle = 60;   // Safe zone boundary
    this.maxDistFromCastle = 180;  // Medium zone  
    this.villageCount = 3;         // Number of villages to generate
    this.maxSlopeForVillage = 0.3; // Max terrain slope for flat ground
    
    // Building materials (reused across all villages)
    this.materials = this._createMaterials();
    
    // Store village data
    this.villages = [];
    this.meshes = [];
    
    // Generate villages
    this._generateVillages();
  }
  
  /**
   * Create shared materials for all village buildings
   */
  _createMaterials() {
    return {
      // Hut walls - tan/brown wood
      hutWall: new THREE.MeshStandardMaterial({
        color: 0x8B7355,
        roughness: 0.9,
        metalness: 0.0,
      }),
      // Hut roof - thatch/straw
      hutRoof: new THREE.MeshStandardMaterial({
        color: 0xA0855C,
        roughness: 1.0,
        metalness: 0.0,
      }),
      // Market stall - aged wood
      marketWood: new THREE.MeshStandardMaterial({
        color: 0x6B5344,
        roughness: 0.85,
        metalness: 0.0,
      }),
      // Market fabric - colorful
      marketFabric: new THREE.MeshStandardMaterial({
        color: 0xB85450,
        roughness: 0.8,
        metalness: 0.0,
        side: THREE.DoubleSide,
      }),
      // Well stone
      wellStone: new THREE.MeshStandardMaterial({
        color: 0x707070,
        roughness: 0.95,
        metalness: 0.0,
      }),
      // Well wood
      wellWood: new THREE.MeshStandardMaterial({
        color: 0x5C4033,
        roughness: 0.9,
        metalness: 0.0,
      }),
      // Fence wood
      fenceWood: new THREE.MeshStandardMaterial({
        color: 0x7A6452,
        roughness: 0.9,
        metalness: 0.0,
      }),
    };
  }
  
  /**
   * Find suitable locations and generate villages
   */
  _generateVillages() {
    const villages = [];
    const minVillageSpacing = 70; // Villages shouldn't be too close
    
    // Try to place requested number of villages
    let attempts = 0;
    const maxAttempts = 100;
    
    while (villages.length < this.villageCount && attempts < maxAttempts) {
      attempts++;
      
      // Random position in safe/medium zone
      const angle = Math.random() * Math.PI * 2;
      const dist = this.minDistFromCastle + Math.random() * (this.maxDistFromCastle - this.minDistFromCastle);
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist;
      
      // Check terrain slope - need flat ground
      const slope = this.terrain.getTerrainSlope(x, z);
      if (slope > this.maxSlopeForVillage) continue;
      
      // Check spacing from other villages
      let tooClose = false;
      for (const v of villages) {
        const dx = x - v.x;
        const dz = z - v.z;
        if (Math.sqrt(dx * dx + dz * dz) < minVillageSpacing) {
          tooClose = true;
          break;
        }
      }
      if (tooClose) continue;
      
      // Good spot! Create village
      const y = this.terrain.getTerrainHeight(x, z);
      const village = {
        x,
        y,
        z,
        rotation: Math.random() * Math.PI * 2, // Random village orientation
        size: 2 + Math.floor(Math.random() * 2), // 2-3 buildings
      };
      villages.push(village);
    }
    
    this.villages = villages;
    console.log(`[VillageManager] Placed ${villages.length} villages`);
    
    // Build each village
    for (const village of villages) {
      this._buildVillage(village);
    }
  }
  
  /**
   * Build a single village with various structures
   */
  _buildVillage(village) {
    const group = new THREE.Group();
    group.position.set(village.x, 0, village.z);
    group.rotation.y = village.rotation;
    
    // Always place a central well
    this._createWell(group, 0, 0);
    
    // Place huts in a rough circle around the well
    const hutCount = village.size;
    for (let i = 0; i < hutCount; i++) {
      const angle = (i / hutCount) * Math.PI * 2 + Math.random() * 0.5;
      const dist = 8 + Math.random() * 5;
      const hx = Math.cos(angle) * dist;
      const hz = Math.sin(angle) * dist;
      this._createHut(group, hx, hz, village);
    }
    
    // Add 1-2 market stalls
    const stallCount = 1 + Math.floor(Math.random() * 2);
    for (let i = 0; i < stallCount; i++) {
      const angle = (i / stallCount) * Math.PI * 2 + Math.PI / 4 + Math.random() * 0.3;
      const dist = 5 + Math.random() * 3;
      const sx = Math.cos(angle) * dist;
      const sz = Math.sin(angle) * dist;
      this._createMarketStall(group, sx, sz, village);
    }
    
    // Add some fence sections
    const fenceCount = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < fenceCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 12 + Math.random() * 5;
      const fx = Math.cos(angle) * dist;
      const fz = Math.sin(angle) * dist;
      this._createFence(group, fx, fz, angle, village);
    }
    
    this.scene.add(group);
    this.meshes.push(group);
  }
  
  /**
   * Create a simple hut (cylindrical body with cone roof)
   */
  _createHut(group, localX, localZ, village) {
    // Calculate world position for terrain height
    const cos = Math.cos(village.rotation);
    const sin = Math.sin(village.rotation);
    const worldX = village.x + localX * cos - localZ * sin;
    const worldZ = village.z + localX * sin + localZ * cos;
    const terrainY = this.terrain.getTerrainHeight(worldX, worldZ);
    
    const hut = new THREE.Group();
    hut.position.set(localX, terrainY, localZ);
    
    // Hut body - cylinder
    const bodyHeight = 2.5 + Math.random() * 0.5;
    const bodyRadius = 1.5 + Math.random() * 0.3;
    const bodyGeom = new THREE.CylinderGeometry(bodyRadius, bodyRadius * 1.1, bodyHeight, 12);
    const body = new THREE.Mesh(bodyGeom, this.materials.hutWall);
    body.position.y = bodyHeight / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    hut.add(body);
    
    // Roof - cone
    const roofHeight = 1.8;
    const roofRadius = bodyRadius * 1.4;
    const roofGeom = new THREE.ConeGeometry(roofRadius, roofHeight, 12);
    const roof = new THREE.Mesh(roofGeom, this.materials.hutRoof);
    roof.position.y = bodyHeight + roofHeight / 2 - 0.1;
    roof.castShadow = true;
    hut.add(roof);
    
    // Door (simple dark rectangle)
    const doorGeom = new THREE.BoxGeometry(0.6, 1.5, 0.1);
    const doorMat = new THREE.MeshStandardMaterial({ color: 0x2a2015 });
    const door = new THREE.Mesh(doorGeom, doorMat);
    door.position.set(0, 0.75, bodyRadius + 0.05);
    hut.add(door);
    
    // Random rotation for variety
    hut.rotation.y = Math.random() * Math.PI * 2;
    
    group.add(hut);
  }
  
  /**
   * Create a market stall (posts with fabric roof)
   */
  _createMarketStall(group, localX, localZ, village) {
    const cos = Math.cos(village.rotation);
    const sin = Math.sin(village.rotation);
    const worldX = village.x + localX * cos - localZ * sin;
    const worldZ = village.z + localX * sin + localZ * cos;
    const terrainY = this.terrain.getTerrainHeight(worldX, worldZ);
    
    const stall = new THREE.Group();
    stall.position.set(localX, terrainY, localZ);
    
    // Four corner posts
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
    
    // Counter/table
    const counterGeom = new THREE.BoxGeometry(stallWidth, 0.1, stallDepth);
    const counter = new THREE.Mesh(counterGeom, this.materials.marketWood);
    counter.position.y = 0.9;
    counter.castShadow = true;
    counter.receiveShadow = true;
    stall.add(counter);
    
    // Fabric canopy (slightly angled)
    const canopyGeom = new THREE.PlaneGeometry(stallWidth * 1.2, stallDepth * 1.3);
    
    // Randomize canopy color
    const canopyColors = [0xB85450, 0x5475B8, 0x6B9954, 0xC9A953];
    const canopyMat = new THREE.MeshStandardMaterial({
      color: canopyColors[Math.floor(Math.random() * canopyColors.length)],
      roughness: 0.8,
      side: THREE.DoubleSide,
    });
    
    const canopy = new THREE.Mesh(canopyGeom, canopyMat);
    canopy.position.y = postHeight + 0.05;
    canopy.rotation.x = -Math.PI / 2 + 0.15; // Slight angle
    canopy.castShadow = true;
    stall.add(canopy);
    
    // Random rotation
    stall.rotation.y = Math.random() * Math.PI * 2;
    
    group.add(stall);
  }
  
  /**
   * Create a village well (stone cylinder with wooden roof)
   */
  _createWell(group, localX, localZ) {
    // Well is at village center, use village's base terrain height
    const well = new THREE.Group();
    well.position.set(localX, 0, localZ);
    
    // Stone base - hollow cylinder look (just outer ring)
    const baseGeom = new THREE.TorusGeometry(1.0, 0.3, 8, 16);
    const base = new THREE.Mesh(baseGeom, this.materials.wellStone);
    base.rotation.x = Math.PI / 2;
    base.position.y = 0.3;
    base.castShadow = true;
    base.receiveShadow = true;
    well.add(base);
    
    // Stone wall cylinder
    const wallGeom = new THREE.CylinderGeometry(1.0, 1.0, 0.8, 12, 1, true);
    const wall = new THREE.Mesh(wallGeom, this.materials.wellStone);
    wall.position.y = 0.4;
    wall.castShadow = true;
    well.add(wall);
    
    // Wooden support posts
    const postGeom = new THREE.CylinderGeometry(0.08, 0.08, 2.5, 6);
    const post1 = new THREE.Mesh(postGeom, this.materials.wellWood);
    post1.position.set(0.7, 1.25, 0);
    post1.castShadow = true;
    well.add(post1);
    
    const post2 = new THREE.Mesh(postGeom, this.materials.wellWood);
    post2.position.set(-0.7, 1.25, 0);
    post2.castShadow = true;
    well.add(post2);
    
    // Crossbar
    const crossbarGeom = new THREE.CylinderGeometry(0.06, 0.06, 1.6, 6);
    const crossbar = new THREE.Mesh(crossbarGeom, this.materials.wellWood);
    crossbar.position.y = 2.5;
    crossbar.rotation.z = Math.PI / 2;
    crossbar.castShadow = true;
    well.add(crossbar);
    
    // Simple roof
    const roofGeom = new THREE.ConeGeometry(1.2, 0.6, 4);
    const roof = new THREE.Mesh(roofGeom, this.materials.hutRoof);
    roof.position.y = 2.9;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    well.add(roof);
    
    // Water inside (dark blue plane)
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
   * Create a simple wooden fence section
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
    
    // Vertical posts
    const postGeom = new THREE.CylinderGeometry(0.06, 0.07, 1.0, 6);
    for (let i = 0; i < postCount; i++) {
      const post = new THREE.Mesh(postGeom, this.materials.fenceWood);
      post.position.set(i * postSpacing - fenceLength / 2, 0.5, 0);
      post.castShadow = true;
      fence.add(post);
    }
    
    // Horizontal rails
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
   * Get village data (for NPCs, interactions later)
   */
  getVillages() {
    return this.villages;
  }
  
  /**
   * Check if position is near a village (for spawning/AI)
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
   * Cleanup
   */
  dispose() {
    for (const mesh of this.meshes) {
      this.scene.remove(mesh);
      mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
      });
    }
    
    for (const mat of Object.values(this.materials)) {
      mat.dispose();
    }
  }
}
