import * as THREE from 'three';

/**
 * FoliageManager - Procedural vegetation with dynamic chunk loading
 * Phase 12/15-HOTFIX: Infinite world foliage generation
 * 
 * Places trees, grass, and bushes per-chunk as player explores.
 * Uses seeded random for consistent vegetation across sessions.
 */
export class FoliageManager {
  constructor(scene, terrain) {
    this.scene = scene;
    this.terrain = terrain;
    
    // Chunk configuration (match terrain)
    this.chunkSize = 64;
    this.loadDistance = 3;      // Load foliage within 3 chunks
    this.unloadDistance = 5;    // Unload beyond 5 chunks
    
    // Tree configuration
    this.treesPerChunk = 15;        // Trees per chunk (density varies by biome)
    this.treeMinDistance = 4;       // Minimum spacing between trees
    this.treeMaxSlope = 0.4;        // Max slope for tree placement
    this.castleExclusionRadius = 35; // No trees near castle
    this.trunkCollisionRadius = 0.4;
    
    // Grass/bush config
    this.grassPerChunk = 100;
    this.bushesPerChunk = 12;
    
    // Chunk storage
    this.chunks = new Map(); // key = "cx,cz", value = { trees: [], meshes: [] }
    
    // Global tree colliders (for collision detection)
    this.treeColliders = [];
    
    // Shared geometries and materials (reused across chunks)
    this._createSharedAssets();
    
    // Track player position
    this.lastPlayerChunkX = null;
    this.lastPlayerChunkZ = null;
    
    // Track foliage InstancedMesh refs for wind sway animation (Phase 35)
    this._foliageMeshes = []; // { mesh, chunkKey, phaseOffset }
    
    // Initial generation around origin
    this.update(0, 0);
    
    console.log(`[FoliageManager] Initialized with chunk-based generation`);
  }
  
  /**
   * Create shared geometries and materials
   */
  _createSharedAssets() {
    // Oak tree geometries
    this.oakTrunkGeo = new THREE.CylinderGeometry(0.15, 0.25, 3, 6);
    this.oakTrunkGeo.translate(0, 1.5, 0);
    
    this.oakFoliageGeo = new THREE.IcosahedronGeometry(1.8, 1);
    this.oakFoliageGeo.translate(0, 4.2, 0);
    
    // Pine tree geometries
    this.pineTrunkGeo = new THREE.CylinderGeometry(0.12, 0.2, 4, 6);
    this.pineTrunkGeo.translate(0, 2, 0);
    
    this.pineFoliageGeo = new THREE.ConeGeometry(1.5, 3, 6);
    this.pineFoliageGeo.translate(0, 5.5, 0);
    
    // Grass geometry
    this.grassGeo = new THREE.PlaneGeometry(0.3, 0.5);
    this.grassGeo.translate(0, 0.25, 0);
    
    // Bush geometry
    this.bushGeo = new THREE.IcosahedronGeometry(0.5, 1);
    this.bushGeo.scale(1, 0.7, 1);
    this.bushGeo.translate(0, 0.35, 0);
    
    // Materials
    this.oakTrunkMat = new THREE.MeshStandardMaterial({
      color: 0x4a3525,
      roughness: 0.95,
    });
    
    this.oakFoliageMat = new THREE.MeshStandardMaterial({
      color: 0x2d5a1e,
      roughness: 0.9,
    });
    
    this.pineTrunkMat = new THREE.MeshStandardMaterial({
      color: 0x3a2a1a,
      roughness: 0.95,
    });
    
    this.pineFoliageMat = new THREE.MeshStandardMaterial({
      color: 0x1a4a18,
      roughness: 0.85,
    });
    
    this.grassMat = new THREE.MeshStandardMaterial({
      color: 0x4a7a30,
      roughness: 0.9,
      side: THREE.DoubleSide,
      alphaTest: 0.5,
    });
    
    this.bushMat = new THREE.MeshStandardMaterial({
      color: 0x3a6a28,
      roughness: 0.9,
    });
  }
  
  /**
   * Seeded random number generator for consistent world generation
   */
  _seededRandom(seed) {
    const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
    return x - Math.floor(x);
  }
  
  /**
   * Get chunk key for Map storage
   */
  _chunkKey(cx, cz) {
    return `${cx},${cz}`;
  }
  
  /**
   * Convert world position to chunk coordinates
   */
  _worldToChunk(x, z) {
    return {
      cx: Math.floor(x / this.chunkSize),
      cz: Math.floor(z / this.chunkSize),
    };
  }
  
  /**
   * Update foliage based on player position - call every frame
   */
  update(playerX, playerZ) {
    const { cx, cz } = this._worldToChunk(playerX, playerZ);
    
    // Only update if player moved to different chunk
    if (cx === this.lastPlayerChunkX && cz === this.lastPlayerChunkZ) {
      return;
    }
    
    this.lastPlayerChunkX = cx;
    this.lastPlayerChunkZ = cz;
    
    // Calculate needed chunks
    const neededChunks = new Set();
    
    for (let dx = -this.loadDistance; dx <= this.loadDistance; dx++) {
      for (let dz = -this.loadDistance; dz <= this.loadDistance; dz++) {
        const chunkX = cx + dx;
        const chunkZ = cz + dz;
        const key = this._chunkKey(chunkX, chunkZ);
        neededChunks.add(key);
        
        // Load if not already loaded
        if (!this.chunks.has(key)) {
          this._loadChunk(chunkX, chunkZ);
        }
      }
    }
    
    // Unload distant chunks
    const toUnload = [];
    for (const [key] of this.chunks) {
      if (!neededChunks.has(key)) {
        const [chunkX, chunkZ] = key.split(',').map(Number);
        const dx = Math.abs(chunkX - cx);
        const dz = Math.abs(chunkZ - cz);
        if (dx > this.unloadDistance || dz > this.unloadDistance) {
          toUnload.push(key);
        }
      }
    }
    
    for (const key of toUnload) {
      this._unloadChunk(key);
    }
  }
  
  /**
   * Generate foliage for a specific chunk
   */
  _loadChunk(cx, cz) {
    const key = this._chunkKey(cx, cz);
    if (this.chunks.has(key)) return;
    
    const chunkData = {
      trees: [],
      colliders: [],
      meshes: [],
    };
    
    const worldOffsetX = cx * this.chunkSize;
    const worldOffsetZ = cz * this.chunkSize;
    
    // Generate seed for this chunk
    const chunkSeed = cx * 73856093 + cz * 19349663;
    
    // === GENERATE TREES ===
    const treePositions = [];
    const attempts = this.treesPerChunk * 5;
    
    for (let i = 0; i < attempts && treePositions.length < this.treesPerChunk; i++) {
      // Seeded random position within chunk
      const rand1 = this._seededRandom(chunkSeed + i * 3);
      const rand2 = this._seededRandom(chunkSeed + i * 3 + 1);
      
      const localX = rand1 * this.chunkSize;
      const localZ = rand2 * this.chunkSize;
      const worldX = worldOffsetX + localX;
      const worldZ = worldOffsetZ + localZ;
      
      // Castle exclusion
      const distFromOrigin = Math.sqrt(worldX * worldX + worldZ * worldZ);
      if (distFromOrigin < this.castleExclusionRadius) continue;
      
      // Slope check
      const slope = this.terrain.getTerrainSlope(worldX, worldZ);
      if (slope > this.treeMaxSlope) continue;
      
      // Biome density check
      const biomeParams = this.terrain.getBiomeParams(worldX, worldZ);
      const densityRand = this._seededRandom(chunkSeed + i * 3 + 2);
      if (densityRand > biomeParams.treeDensity * 3) continue;
      
      // Minimum distance from other trees in this chunk
      let tooClose = false;
      for (const pos of treePositions) {
        const dx = worldX - pos.x;
        const dz = worldZ - pos.z;
        if (dx * dx + dz * dz < this.treeMinDistance * this.treeMinDistance) {
          tooClose = true;
          break;
        }
      }
      if (tooClose) continue;
      
      // Valid position
      const worldY = this.terrain.getTerrainHeight(worldX, worldZ);
      const biome = this.terrain.getBiome(worldX, worldZ);
      const isPine = (biome === 'dense_woods' || biome === 'dark_frontier') && 
                     this._seededRandom(chunkSeed + i * 7) > 0.3;
      
      const scale = 0.7 + this._seededRandom(chunkSeed + i * 5) * 0.6;
      const rotation = this._seededRandom(chunkSeed + i * 11) * Math.PI * 2;
      
      treePositions.push({ x: worldX, y: worldY, z: worldZ, scale, rotation, isPine });
    }
    
    // Create tree meshes
    if (treePositions.length > 0) {
      this._createTreeMeshes(chunkData, treePositions);
    }
    
    // === GENERATE GRASS ===
    this._createGrassMesh(chunkData, cx, cz, chunkSeed);
    
    // === GENERATE BUSHES ===
    this._createBushMesh(chunkData, cx, cz, chunkSeed + 999);
    
    // Store chunk data
    this.chunks.set(key, chunkData);
    
    // Add colliders to global list
    this.treeColliders.push(...chunkData.colliders);
  }
  
  /**
   * Create tree instance meshes for a chunk
   */
  _createTreeMeshes(chunkData, positions) {
    const oakTrees = positions.filter(t => !t.isPine);
    const pineTrees = positions.filter(t => t.isPine);
    
    const matrix = new THREE.Matrix4();
    
    // Oak trees
    if (oakTrees.length > 0) {
      const oakTrunks = new THREE.InstancedMesh(this.oakTrunkGeo, this.oakTrunkMat, oakTrees.length);
      const oakFoliage = new THREE.InstancedMesh(this.oakFoliageGeo, this.oakFoliageMat, oakTrees.length);
      
      oakTrunks.castShadow = true;
      oakTrunks.receiveShadow = true;
      oakFoliage.castShadow = true;
      oakFoliage.receiveShadow = true;
      
      oakTrees.forEach((tree, i) => {
        matrix.makeRotationY(tree.rotation);
        matrix.scale(new THREE.Vector3(tree.scale, tree.scale, tree.scale));
        matrix.setPosition(tree.x, tree.y, tree.z);
        
        oakTrunks.setMatrixAt(i, matrix);
        oakFoliage.setMatrixAt(i, matrix);
        
        chunkData.colliders.push({
          x: tree.x,
          z: tree.z,
          radius: this.trunkCollisionRadius * tree.scale,
          height: 4 * tree.scale,
          baseY: tree.y,
          chunkKey: null, // Will be set by caller
        });
      });
      
      oakTrunks.instanceMatrix.needsUpdate = true;
      oakFoliage.instanceMatrix.needsUpdate = true;
      
      this.scene.add(oakTrunks);
      this.scene.add(oakFoliage);
      
      chunkData.meshes.push(oakTrunks, oakFoliage);
      
      // Track foliage mesh for wind sway (Phase 35)
      const oakPhase = oakTrees[0] ? (oakTrees[0].x * 0.7 + oakTrees[0].z * 1.3) : 0;
      this._foliageMeshes.push({ mesh: oakFoliage, chunkKey: null, phaseOffset: oakPhase });
    }
    
    // Pine trees
    if (pineTrees.length > 0) {
      const pineTrunks = new THREE.InstancedMesh(this.pineTrunkGeo, this.pineTrunkMat, pineTrees.length);
      const pineFoliage = new THREE.InstancedMesh(this.pineFoliageGeo, this.pineFoliageMat, pineTrees.length);
      
      pineTrunks.castShadow = true;
      pineTrunks.receiveShadow = true;
      pineFoliage.castShadow = true;
      pineFoliage.receiveShadow = true;
      
      pineTrees.forEach((tree, i) => {
        matrix.makeRotationY(tree.rotation);
        matrix.scale(new THREE.Vector3(tree.scale, tree.scale, tree.scale));
        matrix.setPosition(tree.x, tree.y, tree.z);
        
        pineTrunks.setMatrixAt(i, matrix);
        pineFoliage.setMatrixAt(i, matrix);
        
        chunkData.colliders.push({
          x: tree.x,
          z: tree.z,
          radius: this.trunkCollisionRadius * tree.scale * 0.9,
          height: 5 * tree.scale,
          baseY: tree.y,
        });
      });
      
      pineTrunks.instanceMatrix.needsUpdate = true;
      pineFoliage.instanceMatrix.needsUpdate = true;
      
      this.scene.add(pineTrunks);
      this.scene.add(pineFoliage);
      
      chunkData.meshes.push(pineTrunks, pineFoliage);
      
      // Track foliage mesh for wind sway (Phase 35)
      const pinePhase = pineTrees[0] ? (pineTrees[0].x * 0.9 + pineTrees[0].z * 0.6) : 0;
      this._foliageMeshes.push({ mesh: pineFoliage, chunkKey: null, phaseOffset: pinePhase });
    }
    
    chunkData.trees = positions;
  }
  
  /**
   * Create grass instances for a chunk
   */
  _createGrassMesh(chunkData, cx, cz, seed) {
    const worldOffsetX = cx * this.chunkSize;
    const worldOffsetZ = cz * this.chunkSize;
    
    const grassMesh = new THREE.InstancedMesh(this.grassGeo, this.grassMat, this.grassPerChunk * 3);
    grassMesh.receiveShadow = true;
    
    const matrix = new THREE.Matrix4();
    let instanceIndex = 0;
    
    for (let i = 0; i < this.grassPerChunk; i++) {
      const rand1 = this._seededRandom(seed + i * 2);
      const rand2 = this._seededRandom(seed + i * 2 + 1);
      
      const worldX = worldOffsetX + rand1 * this.chunkSize;
      const worldZ = worldOffsetZ + rand2 * this.chunkSize;
      
      // Skip castle area
      if (worldX * worldX + worldZ * worldZ < this.castleExclusionRadius * this.castleExclusionRadius) continue;
      
      // Check biome grass density
      const biomeParams = this.terrain.getBiomeParams(worldX, worldZ);
      const densityRand = this._seededRandom(seed + i * 3);
      if (densityRand > biomeParams.grassDensity) continue;
      
      const worldY = this.terrain.getTerrainHeight(worldX, worldZ);
      
      // Place 3 grass blades per patch
      for (let j = 0; j < 3; j++) {
        const offsetX = (this._seededRandom(seed + i * 10 + j) - 0.5) * 0.3;
        const offsetZ = (this._seededRandom(seed + i * 10 + j + 5) - 0.5) * 0.3;
        const rotY = (j / 3) * Math.PI + this._seededRandom(seed + i * 20 + j) * 0.5;
        const scale = 0.5 + this._seededRandom(seed + i * 30 + j) * 0.5;
        
        matrix.makeRotationY(rotY);
        matrix.scale(new THREE.Vector3(scale, scale, scale));
        matrix.setPosition(worldX + offsetX, worldY, worldZ + offsetZ);
        
        grassMesh.setMatrixAt(instanceIndex, matrix);
        instanceIndex++;
        
        if (instanceIndex >= this.grassPerChunk * 3) break;
      }
      if (instanceIndex >= this.grassPerChunk * 3) break;
    }
    
    grassMesh.instanceMatrix.needsUpdate = true;
    grassMesh.count = instanceIndex;
    
    this.scene.add(grassMesh);
    chunkData.meshes.push(grassMesh);
  }
  
  /**
   * Create bush instances for a chunk
   */
  _createBushMesh(chunkData, cx, cz, seed) {
    const worldOffsetX = cx * this.chunkSize;
    const worldOffsetZ = cz * this.chunkSize;
    
    const bushMesh = new THREE.InstancedMesh(this.bushGeo, this.bushMat, this.bushesPerChunk);
    bushMesh.castShadow = true;
    bushMesh.receiveShadow = true;
    
    const matrix = new THREE.Matrix4();
    let placed = 0;
    
    for (let i = 0; i < this.bushesPerChunk * 3 && placed < this.bushesPerChunk; i++) {
      const rand1 = this._seededRandom(seed + i * 2);
      const rand2 = this._seededRandom(seed + i * 2 + 1);
      
      const worldX = worldOffsetX + rand1 * this.chunkSize;
      const worldZ = worldOffsetZ + rand2 * this.chunkSize;
      
      // Skip castle area
      const exclusionRadiusSq = (this.castleExclusionRadius + 5) * (this.castleExclusionRadius + 5);
      if (worldX * worldX + worldZ * worldZ < exclusionRadiusSq) continue;
      
      // Prefer areas with grass
      const biomeParams = this.terrain.getBiomeParams(worldX, worldZ);
      const densityRand = this._seededRandom(seed + i * 3);
      if (densityRand > biomeParams.grassDensity * 0.8) continue;
      
      // Not too steep
      if (this.terrain.getTerrainSlope(worldX, worldZ) > 0.3) continue;
      
      const worldY = this.terrain.getTerrainHeight(worldX, worldZ);
      const scale = 0.6 + this._seededRandom(seed + i * 4) * 0.8;
      const rotY = this._seededRandom(seed + i * 5) * Math.PI * 2;
      
      matrix.makeRotationY(rotY);
      matrix.scale(new THREE.Vector3(scale, scale, scale));
      matrix.setPosition(worldX, worldY, worldZ);
      
      bushMesh.setMatrixAt(placed, matrix);
      placed++;
    }
    
    bushMesh.instanceMatrix.needsUpdate = true;
    bushMesh.count = placed;
    
    this.scene.add(bushMesh);
    chunkData.meshes.push(bushMesh);
  }
  
  /**
   * Unload a foliage chunk
   */
  _unloadChunk(key) {
    const chunk = this.chunks.get(key);
    if (!chunk) return;
    
    // Remove meshes from scene
    for (const mesh of chunk.meshes) {
      this.scene.remove(mesh);
      mesh.geometry.dispose();
      // Don't dispose shared materials
      
      // Remove from wind-sway tracking (Phase 35)
      this._foliageMeshes = this._foliageMeshes.filter(f => f.mesh !== mesh);
    }
    
    // Remove colliders from global list
    this.treeColliders = this.treeColliders.filter(c => {
      // Check if collider belongs to this chunk
      for (const cc of chunk.colliders) {
        if (c === cc) return false;
      }
      return true;
    });
    
    this.chunks.delete(key);
  }
  
  /**
   * Wind sway animation for tree canopies (Phase 35).
   * Apply a gentle rotation.z oscillation to foliage InstancedMesh groups.
   * Call every frame from game loop.
   * @param {number} time - elapsed time in seconds
   */
  updateWind(time) {
    for (let i = 0; i < this._foliageMeshes.length; i++) {
      const entry = this._foliageMeshes[i];
      // Gentle sway: sin wave with per-chunk phase offset, amplitude 0.03
      entry.mesh.rotation.z = Math.sin(time * 1.2 + entry.phaseOffset) * 0.03;
    }
  }
  
  // ========================================
  // COLLISION DETECTION
  // ========================================
  
  /**
   * Check if position collides with any tree trunk
   * Returns push-out vector or null
   */
  checkTreeCollision(position, radius = 0.4) {
    for (const tree of this.treeColliders) {
      // Check if player Y is within tree height
      if (position.y < tree.baseY - 1 || position.y > tree.baseY + tree.height) continue;
      
      const dx = position.x - tree.x;
      const dz = position.z - tree.z;
      const distSq = dx * dx + dz * dz;
      const minDist = tree.radius + radius;
      
      if (distSq < minDist * minDist) {
        const dist = Math.sqrt(distSq);
        if (dist > 0.001) {
          const overlap = minDist - dist;
          return new THREE.Vector3(
            (dx / dist) * overlap,
            0,
            (dz / dist) * overlap
          );
        }
      }
    }
    return null;
  }
  
  /**
   * Get all tree colliders (for external systems like EnemyManager)
   */
  getTreeColliders() {
    return this.treeColliders;
  }
  
  /**
   * Check if position is too close to trees (for spawn points)
   */
  isNearTree(x, z, minDistance = 3) {
    for (const tree of this.treeColliders) {
      const dx = x - tree.x;
      const dz = z - tree.z;
      if (dx * dx + dz * dz < minDistance * minDistance) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Get loaded chunk count (for debugging)
   */
  getLoadedChunkCount() {
    return this.chunks.size;
  }
  
  // ========================================
  // CLEANUP
  // ========================================
  
  dispose() {
    // Unload all chunks
    for (const [key] of this.chunks) {
      this._unloadChunk(key);
    }
    
    // Dispose shared geometries
    this.oakTrunkGeo.dispose();
    this.oakFoliageGeo.dispose();
    this.pineTrunkGeo.dispose();
    this.pineFoliageGeo.dispose();
    this.grassGeo.dispose();
    this.bushGeo.dispose();
    
    // Dispose shared materials
    this.oakTrunkMat.dispose();
    this.oakFoliageMat.dispose();
    this.pineTrunkMat.dispose();
    this.pineFoliageMat.dispose();
    this.grassMat.dispose();
    this.bushMat.dispose();
  }
}
