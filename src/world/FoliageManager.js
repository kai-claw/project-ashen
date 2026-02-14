import * as THREE from 'three';

/**
 * FoliageManager - Procedural vegetation placement
 * Phase 12: Open World Foundation
 * 
 * Places trees and grass using instanced meshes for performance.
 * Respects terrain slope, biome density, and castle exclusion zone.
 */
export class FoliageManager {
  constructor(scene, terrain) {
    this.scene = scene;
    this.terrain = terrain;
    
    // Tree configuration
    this.treeCount = 500;           // Total trees to place
    this.treeMinDistance = 4;       // Minimum spacing between trees
    this.treeMaxSlope = 0.4;        // Max slope for tree placement (0=flat, 1=45deg)
    this.castleExclusionRadius = 35; // No trees near castle
    this.trunkCollisionRadius = 0.4; // Collision radius for tree trunks
    
    // Grass configuration
    this.grassPatchCount = 2000;    // Grass patches
    this.bushCount = 200;           // Bush clusters
    
    // Storage
    this.trees = [];                // Tree position data for collision
    this.treeColliders = [];        // Collision data
    this.instancedTrunks = null;    // Instanced trunk mesh
    this.instancedFoliage = null;   // Instanced foliage mesh
    this.instancedPines = null;     // Pine tree foliage (cones)
    this.grassMesh = null;
    this.bushMesh = null;
    
    // Generate vegetation
    this._generateTrees();
    this._generateGrass();
    this._generateBushes();
    
    console.log(`[FoliageManager] Placed ${this.trees.length} trees, ${this.grassPatchCount} grass patches, ${this.bushCount} bushes`);
  }
  
  // ========================================
  // TREE GENERATION
  // ========================================
  
  _generateTrees() {
    // Collect valid tree positions
    const positions = [];
    const maxAttempts = this.treeCount * 5;
    let attempts = 0;
    
    while (positions.length < this.treeCount && attempts < maxAttempts) {
      attempts++;
      
      // Random position within terrain bounds (offset from center)
      const halfSize = this.terrain.size / 2;
      const x = (Math.random() - 0.5) * (this.terrain.size - 20);
      const z = (Math.random() - 0.5) * (this.terrain.size - 20);
      
      // Check castle exclusion
      const distFromOrigin = Math.sqrt(x * x + z * z);
      if (distFromOrigin < this.castleExclusionRadius) continue;
      
      // Check terrain slope
      const slope = this.terrain.getTerrainSlope(x, z);
      if (slope > this.treeMaxSlope) continue;
      
      // Check biome density
      const biomeParams = this.terrain.getBiomeParams(x, z);
      if (Math.random() > biomeParams.treeDensity * 3) continue; // Scaled probability
      
      // Check minimum distance from other trees
      let tooClose = false;
      for (const pos of positions) {
        const dx = x - pos.x;
        const dz = z - pos.z;
        if (dx * dx + dz * dz < this.treeMinDistance * this.treeMinDistance) {
          tooClose = true;
          break;
        }
      }
      if (tooClose) continue;
      
      // Valid position - get terrain height
      const y = this.terrain.getTerrainHeight(x, z);
      
      // Tree type based on biome
      const biome = this.terrain.getBiome(x, z);
      const isPine = (biome === 'dense_woods' || biome === 'dark_frontier') && Math.random() > 0.3;
      
      // Random scale variation
      const scale = 0.7 + Math.random() * 0.6; // 0.7 to 1.3
      const rotation = Math.random() * Math.PI * 2;
      
      positions.push({ x, y, z, scale, rotation, isPine });
    }
    
    this.trees = positions;
    
    // Create instanced meshes
    this._createTreeInstances();
  }
  
  _createTreeInstances() {
    // Separate oak and pine trees
    const oakTrees = this.trees.filter(t => !t.isPine);
    const pineTrees = this.trees.filter(t => t.isPine);
    
    // === OAK TREES ===
    if (oakTrees.length > 0) {
      // Trunk geometry (tapered cylinder)
      const trunkGeo = new THREE.CylinderGeometry(0.15, 0.25, 3, 6);
      trunkGeo.translate(0, 1.5, 0); // Origin at base
      
      const trunkMat = new THREE.MeshStandardMaterial({
        color: 0x4a3525,
        roughness: 0.95,
      });
      
      this.instancedTrunks = new THREE.InstancedMesh(trunkGeo, trunkMat, oakTrees.length);
      this.instancedTrunks.castShadow = true;
      this.instancedTrunks.receiveShadow = true;
      
      // Foliage geometry (sphere cluster)
      const foliageGeo = new THREE.IcosahedronGeometry(1.8, 1);
      foliageGeo.translate(0, 4.2, 0);
      
      const foliageMat = new THREE.MeshStandardMaterial({
        color: 0x2d5a1e,
        roughness: 0.9,
      });
      
      this.instancedFoliage = new THREE.InstancedMesh(foliageGeo, foliageMat, oakTrees.length);
      this.instancedFoliage.castShadow = true;
      this.instancedFoliage.receiveShadow = true;
      
      // Set instance matrices
      const matrix = new THREE.Matrix4();
      oakTrees.forEach((tree, i) => {
        matrix.makeRotationY(tree.rotation);
        matrix.scale(new THREE.Vector3(tree.scale, tree.scale, tree.scale));
        matrix.setPosition(tree.x, tree.y, tree.z);
        
        this.instancedTrunks.setMatrixAt(i, matrix);
        this.instancedFoliage.setMatrixAt(i, matrix);
        
        // Store collision data
        this.treeColliders.push({
          x: tree.x,
          z: tree.z,
          radius: this.trunkCollisionRadius * tree.scale,
          height: 4 * tree.scale,
          baseY: tree.y,
        });
      });
      
      this.instancedTrunks.instanceMatrix.needsUpdate = true;
      this.instancedFoliage.instanceMatrix.needsUpdate = true;
      
      this.scene.add(this.instancedTrunks);
      this.scene.add(this.instancedFoliage);
    }
    
    // === PINE TREES ===
    if (pineTrees.length > 0) {
      // Pine trunk (taller, thinner)
      const pinetrunkGeo = new THREE.CylinderGeometry(0.12, 0.2, 4, 6);
      pinetrunkGeo.translate(0, 2, 0);
      
      const pinetrunkMat = new THREE.MeshStandardMaterial({
        color: 0x3a2a1a,
        roughness: 0.95,
      });
      
      const instancedPineTrunks = new THREE.InstancedMesh(pinetrunkGeo, pinetrunkMat, pineTrees.length);
      instancedPineTrunks.castShadow = true;
      instancedPineTrunks.receiveShadow = true;
      
      // Pine foliage (stacked cones)
      const pineFoliageGeo = new THREE.ConeGeometry(1.5, 3, 6);
      pineFoliageGeo.translate(0, 5.5, 0);
      
      const pineFoliageMat = new THREE.MeshStandardMaterial({
        color: 0x1a4a18,
        roughness: 0.85,
      });
      
      this.instancedPines = new THREE.InstancedMesh(pineFoliageGeo, pineFoliageMat, pineTrees.length);
      this.instancedPines.castShadow = true;
      this.instancedPines.receiveShadow = true;
      
      const matrix = new THREE.Matrix4();
      pineTrees.forEach((tree, i) => {
        matrix.makeRotationY(tree.rotation);
        matrix.scale(new THREE.Vector3(tree.scale, tree.scale, tree.scale));
        matrix.setPosition(tree.x, tree.y, tree.z);
        
        instancedPineTrunks.setMatrixAt(i, matrix);
        this.instancedPines.setMatrixAt(i, matrix);
        
        this.treeColliders.push({
          x: tree.x,
          z: tree.z,
          radius: this.trunkCollisionRadius * tree.scale * 0.9, // Pines slightly thinner
          height: 5 * tree.scale,
          baseY: tree.y,
        });
      });
      
      instancedPineTrunks.instanceMatrix.needsUpdate = true;
      this.instancedPines.instanceMatrix.needsUpdate = true;
      
      this.scene.add(instancedPineTrunks);
      this.scene.add(this.instancedPines);
    }
  }
  
  // ========================================
  // GRASS GENERATION
  // ========================================
  
  _generateGrass() {
    // Grass as instanced small quads/tufts
    const grassGeo = new THREE.PlaneGeometry(0.3, 0.5);
    grassGeo.translate(0, 0.25, 0);
    
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x4a7a30,
      roughness: 0.9,
      side: THREE.DoubleSide,
      alphaTest: 0.5,
    });
    
    this.grassMesh = new THREE.InstancedMesh(grassGeo, grassMat, this.grassPatchCount * 3);
    this.grassMesh.receiveShadow = true;
    
    const matrix = new THREE.Matrix4();
    let instanceIndex = 0;
    
    for (let i = 0; i < this.grassPatchCount; i++) {
      const x = (Math.random() - 0.5) * this.terrain.size * 0.9;
      const z = (Math.random() - 0.5) * this.terrain.size * 0.9;
      
      // Skip castle area
      if (x * x + z * z < this.castleExclusionRadius * this.castleExclusionRadius) continue;
      
      // Check biome grass density
      const biomeParams = this.terrain.getBiomeParams(x, z);
      if (Math.random() > biomeParams.grassDensity) continue;
      
      const y = this.terrain.getTerrainHeight(x, z);
      
      // Place 3 grass blades per patch (crossed for fullness)
      for (let j = 0; j < 3; j++) {
        const offsetX = (Math.random() - 0.5) * 0.3;
        const offsetZ = (Math.random() - 0.5) * 0.3;
        const rotY = (j / 3) * Math.PI + Math.random() * 0.5;
        const scale = 0.5 + Math.random() * 0.5;
        
        matrix.makeRotationY(rotY);
        matrix.scale(new THREE.Vector3(scale, scale, scale));
        matrix.setPosition(x + offsetX, y, z + offsetZ);
        
        this.grassMesh.setMatrixAt(instanceIndex, matrix);
        instanceIndex++;
        
        if (instanceIndex >= this.grassPatchCount * 3) break;
      }
      if (instanceIndex >= this.grassPatchCount * 3) break;
    }
    
    this.grassMesh.instanceMatrix.needsUpdate = true;
    this.grassMesh.count = instanceIndex;
    
    this.scene.add(this.grassMesh);
  }
  
  // ========================================
  // BUSH GENERATION
  // ========================================
  
  _generateBushes() {
    // Bushes as small scaled icosahedrons
    const bushGeo = new THREE.IcosahedronGeometry(0.5, 1);
    bushGeo.scale(1, 0.7, 1); // Flatten slightly
    bushGeo.translate(0, 0.35, 0);
    
    const bushMat = new THREE.MeshStandardMaterial({
      color: 0x3a6a28,
      roughness: 0.9,
    });
    
    this.bushMesh = new THREE.InstancedMesh(bushGeo, bushMat, this.bushCount);
    this.bushMesh.castShadow = true;
    this.bushMesh.receiveShadow = true;
    
    const matrix = new THREE.Matrix4();
    let placed = 0;
    
    for (let i = 0; i < this.bushCount * 3 && placed < this.bushCount; i++) {
      const x = (Math.random() - 0.5) * this.terrain.size * 0.85;
      const z = (Math.random() - 0.5) * this.terrain.size * 0.85;
      
      // Skip castle area
      if (x * x + z * z < (this.castleExclusionRadius + 5) * (this.castleExclusionRadius + 5)) continue;
      
      // Prefer areas with grass
      const biomeParams = this.terrain.getBiomeParams(x, z);
      if (Math.random() > biomeParams.grassDensity * 0.8) continue;
      
      // Not too steep
      if (this.terrain.getTerrainSlope(x, z) > 0.3) continue;
      
      const y = this.terrain.getTerrainHeight(x, z);
      const scale = 0.6 + Math.random() * 0.8;
      const rotY = Math.random() * Math.PI * 2;
      
      matrix.makeRotationY(rotY);
      matrix.scale(new THREE.Vector3(scale, scale, scale));
      matrix.setPosition(x, y, z);
      
      this.bushMesh.setMatrixAt(placed, matrix);
      placed++;
    }
    
    this.bushMesh.instanceMatrix.needsUpdate = true;
    this.bushMesh.count = placed;
    
    this.scene.add(this.bushMesh);
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
  
  // ========================================
  // CLEANUP
  // ========================================
  
  dispose() {
    if (this.instancedTrunks) {
      this.scene.remove(this.instancedTrunks);
      this.instancedTrunks.geometry.dispose();
      this.instancedTrunks.material.dispose();
    }
    if (this.instancedFoliage) {
      this.scene.remove(this.instancedFoliage);
      this.instancedFoliage.geometry.dispose();
      this.instancedFoliage.material.dispose();
    }
    if (this.instancedPines) {
      this.scene.remove(this.instancedPines);
      this.instancedPines.geometry.dispose();
      this.instancedPines.material.dispose();
    }
    if (this.grassMesh) {
      this.scene.remove(this.grassMesh);
      this.grassMesh.geometry.dispose();
      this.grassMesh.material.dispose();
    }
    if (this.bushMesh) {
      this.scene.remove(this.bushMesh);
      this.bushMesh.geometry.dispose();
      this.bushMesh.material.dispose();
    }
  }
}
