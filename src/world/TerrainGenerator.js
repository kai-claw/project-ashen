import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';

/**
 * TerrainGenerator - Infinite Procedural Terrain with Chunking
 * Phase 12/15: Open World with Dynamic Chunk Loading
 * 
 * Creates continuous terrain using multi-octave simplex noise.
 * Chunks are dynamically loaded/unloaded based on player position.
 */
export class TerrainGenerator {
  constructor(scene) {
    this.scene = scene;
    
    // Chunk parameters
    this.chunkSize = 64;       // 64x64 units per chunk
    this.chunkResolution = 32; // 32x32 vertices per chunk (2 units per vertex)
    this.loadDistance = 3;     // Load chunks within 3 chunks of player
    this.unloadDistance = 5;   // Unload chunks beyond 5 chunks from player
    
    // Terrain parameters  
    this.heightScale = 25;     // Max terrain height variation
    this.baseHeight = 0;       // Sea level
    
    // Castle flattening (origin is castle center)
    this.castleRadius = 30;    // Flat zone radius
    this.castleBlendRadius = 45; // Transition zone
    
    // Noise generators (seeded for reproducibility)
    this.seed = 12345;
    this.noise2D = createNoise2D(() => this.seed / 10000);
    
    // Separate noise for biome moisture (different seed so it's independent of height)
    this.moistureNoise = createNoise2D(() => (this.seed + 7777) / 10000);
    
    // Noise octaves for natural terrain
    this.octaves = [
      { frequency: 0.003, amplitude: 1.0 },    // Large hills
      { frequency: 0.01, amplitude: 0.4 },     // Medium features
      { frequency: 0.03, amplitude: 0.15 },    // Small bumps
      { frequency: 0.08, amplitude: 0.05 },    // Micro detail
    ];
    
    // Chunk storage: key = "chunkX,chunkZ", value = { mesh, geometry }
    this.chunks = new Map();
    
    // Track player position for chunk management
    this.lastPlayerChunkX = null;
    this.lastPlayerChunkZ = null;
    
    // Shared material for all chunks
    this.terrainMaterial = this._createTerrainMaterial();
    
    // Generate initial chunks around origin
    this._updateChunks(0, 0);
  }
  
  /**
   * Sample raw noise at world position (multi-octave)
   */
  _sampleNoise(x, z) {
    let height = 0;
    let totalAmplitude = 0;
    
    for (const octave of this.octaves) {
      height += this.noise2D(x * octave.frequency, z * octave.frequency) * octave.amplitude;
      totalAmplitude += octave.amplitude;
    }
    
    // Normalize to -1 to 1
    height /= totalAmplitude;
    
    // Scale to actual height
    return height * this.heightScale + this.baseHeight;
  }
  
  /**
   * Get terrain height at world position with castle flattening
   * This is the main collision function - works for ANY world position
   * P0 TERRAIN SPAWN FIX: Critical for player/camera spawn height calculation
   */
  getTerrainHeight(x, z) {
    const distFromOrigin = Math.sqrt(x * x + z * z);
    
    // Inside castle - completely flat
    if (distFromOrigin < this.castleRadius) {
      return this.baseHeight;
    }
    
    // Sample natural terrain height
    const naturalHeight = this._sampleNoise(x, z);
    
    // In blend zone - smooth transition
    if (distFromOrigin < this.castleBlendRadius) {
      const t = (distFromOrigin - this.castleRadius) / (this.castleBlendRadius - this.castleRadius);
      // Smooth step for nice transition
      const smoothT = t * t * (3 - 2 * t);
      return THREE.MathUtils.lerp(this.baseHeight, naturalHeight, smoothT);
    }
    
    // Full natural terrain
    return naturalHeight;
  }
  
  /**
   * Get terrain slope at position (for tree placement, pathfinding)
   * Returns slope magnitude (0 = flat, 1 = 45 degrees, >1 = steep)
   */
  getTerrainSlope(x, z) {
    const step = 1.0; // Sample step for gradient
    const hCenter = this.getTerrainHeight(x, z);
    const hRight = this.getTerrainHeight(x + step, z);
    const hForward = this.getTerrainHeight(x, z + step);
    
    const dX = (hRight - hCenter) / step;
    const dZ = (hForward - hCenter) / step;
    
    return Math.sqrt(dX * dX + dZ * dZ);
  }
  
  /**
   * Get terrain normal at position (for proper object orientation)
   */
  getTerrainNormal(x, z) {
    const step = 1.0;
    const hCenter = this.getTerrainHeight(x, z);
    const hRight = this.getTerrainHeight(x + step, z);
    const hForward = this.getTerrainHeight(x, z + step);
    
    // Cross product of tangent vectors
    const tangentX = new THREE.Vector3(step, hRight - hCenter, 0);
    const tangentZ = new THREE.Vector3(0, hForward - hCenter, step);
    
    return new THREE.Vector3().crossVectors(tangentZ, tangentX).normalize();
  }
  
  /**
   * Convert world position to chunk coordinates
   */
  _worldToChunk(x, z) {
    return {
      chunkX: Math.floor(x / this.chunkSize),
      chunkZ: Math.floor(z / this.chunkSize),
    };
  }
  
  /**
   * Get chunk key for Map storage
   */
  _chunkKey(chunkX, chunkZ) {
    return `${chunkX},${chunkZ}`;
  }
  
  /**
   * Update chunks based on player world position
   * Call this every frame from GameManager
   */
  update(playerX, playerZ) {
    const { chunkX, chunkZ } = this._worldToChunk(playerX, playerZ);
    
    // Only update if player moved to different chunk
    if (chunkX === this.lastPlayerChunkX && chunkZ === this.lastPlayerChunkZ) {
      return;
    }
    
    this.lastPlayerChunkX = chunkX;
    this.lastPlayerChunkZ = chunkZ;
    
    this._updateChunks(chunkX, chunkZ);
  }
  
  /**
   * Load/unload chunks around player
   */
  _updateChunks(playerChunkX, playerChunkZ) {
    // Calculate which chunks should be loaded
    const neededChunks = new Set();
    
    for (let dx = -this.loadDistance; dx <= this.loadDistance; dx++) {
      for (let dz = -this.loadDistance; dz <= this.loadDistance; dz++) {
        const cx = playerChunkX + dx;
        const cz = playerChunkZ + dz;
        neededChunks.add(this._chunkKey(cx, cz));
        
        // Load chunk if not already loaded
        if (!this.chunks.has(this._chunkKey(cx, cz))) {
          this._loadChunk(cx, cz);
        }
      }
    }
    
    // Unload distant chunks
    const chunksToUnload = [];
    for (const [key, chunk] of this.chunks) {
      const [cx, cz] = key.split(',').map(Number);
      const dx = Math.abs(cx - playerChunkX);
      const dz = Math.abs(cz - playerChunkZ);
      
      if (dx > this.unloadDistance || dz > this.unloadDistance) {
        chunksToUnload.push(key);
      }
    }
    
    for (const key of chunksToUnload) {
      this._unloadChunk(key);
    }
  }
  
  /**
   * Generate and load a single terrain chunk
   */
  _loadChunk(chunkX, chunkZ) {
    const key = this._chunkKey(chunkX, chunkZ);
    if (this.chunks.has(key)) return;
    
    const worldOffsetX = chunkX * this.chunkSize;
    const worldOffsetZ = chunkZ * this.chunkSize;
    
    // Create geometry
    const geometry = new THREE.PlaneGeometry(
      this.chunkSize,
      this.chunkSize,
      this.chunkResolution,
      this.chunkResolution
    );
    
    // Rotate to XZ plane
    geometry.rotateX(-Math.PI / 2);
    
    // Modify vertices to match heightmap
    const positions = geometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 3) {
      // Local position within chunk
      const localX = positions[i];
      const localZ = positions[i + 2];
      
      // Convert to world position
      const worldX = localX + worldOffsetX + this.chunkSize / 2;
      const worldZ = localZ + worldOffsetZ + this.chunkSize / 2;
      
      // Get height at world position
      const height = this.getTerrainHeight(worldX, worldZ);
      positions[i + 1] = height;
    }
    
    // Mark position buffer as needing GPU re-upload after height modification
    geometry.attributes.position.needsUpdate = true;
    
    // Biome-aware vertex colors (MeshBasicMaterial — lighting-independent)
    // Uses height + moisture noise to blend between biome palettes
    const vertCount = positions.length / 3;
    const colors = new Float32Array(vertCount * 3);
    for (let i = 0; i < vertCount; i++) {
      const wx = positions[i * 3] + worldOffsetX + this.chunkSize / 2;
      const wz = positions[i * 3 + 2] + worldOffsetZ + this.chunkSize / 2;
      const h = positions[i * 3 + 1]; // Y = height
      
      // Moisture: low-frequency noise → 0..1 (dry plains vs lush forest)
      const moisture = (this.moistureNoise(wx * 0.005, wz * 0.005) + 1) * 0.5;
      // Height normalized: -5..25 → 0..1
      const ht = Math.max(0, Math.min(1, (h + 5) / 30));
      // Distance from castle (for safe-meadow brightening)
      const dist = Math.sqrt(wx * wx + wz * wz);
      
      let r, g, b;
      
      if (dist < this.castleRadius) {
        // Castle courtyard — gray stone
        r = 0.35; g = 0.33; b = 0.30;
      } else if (ht > 0.75) {
        // Rocky highlands — gray-brown, less vegetation
        const rock = (ht - 0.75) / 0.25; // 0..1 within highland range
        r = 0.40 + rock * 0.15;
        g = 0.38 + rock * 0.08;
        b = 0.30 + rock * 0.10;
      } else if (moisture < 0.35) {
        // Dry plains — yellow-brown grass
        r = 0.50 + ht * 0.15;
        g = 0.45 + ht * 0.10;
        b = 0.20 + ht * 0.05;
      } else if (moisture > 0.65) {
        // Dense forest — dark rich green
        r = 0.10 + ht * 0.12;
        g = 0.28 + ht * 0.15;
        b = 0.08 + ht * 0.06;
      } else {
        // Grassland — medium green (default, blends between biomes)
        const blend = (moisture - 0.35) / 0.30; // 0..1 within grassland range
        // Dry side
        const dr = 0.45 + ht * 0.15;
        const dg = 0.45 + ht * 0.10;
        const db = 0.20 + ht * 0.05;
        // Lush side
        const lr = 0.12 + ht * 0.15;
        const lg = 0.32 + ht * 0.18;
        const lb = 0.10 + ht * 0.06;
        r = dr + (lr - dr) * blend;
        g = dg + (lg - dg) * blend;
        b = db + (lb - db) * blend;
      }
      
      // Near-castle meadow brightening (warm gentle green)
      if (dist > this.castleRadius && dist < 80) {
        const meadow = 1 - (dist - this.castleRadius) / (80 - this.castleRadius);
        r = r + (0.35 - r) * meadow * 0.4;
        g = g + (0.55 - g) * meadow * 0.4;
        b = b + (0.20 - b) * meadow * 0.4;
      }
      
      // Micro-variation: subtle per-vertex noise to break uniformity
      const micro = this.noise2D(wx * 0.15, wz * 0.15) * 0.04;
      r = Math.max(0, Math.min(1, r + micro));
      g = Math.max(0, Math.min(1, g + micro * 0.7));
      b = Math.max(0, Math.min(1, b + micro * 0.5));
      
      colors[i * 3]     = r;
      colors[i * 3 + 1] = g;
      colors[i * 3 + 2] = b;
    }
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    // Recompute normals for potential future lit material use
    geometry.computeVertexNormals();
    
    // Create mesh
    const mesh = new THREE.Mesh(geometry, this.terrainMaterial);
    mesh.position.set(
      worldOffsetX + this.chunkSize / 2,
      0,
      worldOffsetZ + this.chunkSize / 2
    );
    mesh.receiveShadow = true;
    mesh.castShadow = false;
    
    // Recompute bounding sphere after height modification — rotateX() computed it
    // for the flat plane BEFORE heights were applied, causing stale frustum culling
    geometry.computeBoundingSphere();
    
    this.scene.add(mesh);
    
    // Add foliage (trees + rocks) to this chunk
    const foliageGroup = this._addFoliage(chunkX, chunkZ);
    if (foliageGroup) {
      this.scene.add(foliageGroup);
    }
    
    // Store chunk data
    this.chunks.set(key, { mesh, geometry, foliageGroup });
  }
  
  /**
   * Unload a chunk to free memory
   */
  _unloadChunk(key) {
    const chunk = this.chunks.get(key);
    if (!chunk) return;
    
    this.scene.remove(chunk.mesh);
    chunk.geometry.dispose();
    
    // Remove foliage
    if (chunk.foliageGroup) {
      this.scene.remove(chunk.foliageGroup);
      chunk.foliageGroup.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
      });
    }
    
    this.chunks.delete(key);
  }
  
  // ========================================
  // FOLIAGE (trees + rocks)
  // ========================================
  
  /**
   * Deterministic hash for foliage placement — consistent per chunk
   */
  _foliageHash(x, z, salt) {
    let h = (x * 374761 + z * 668265 + (salt || 0) * 982451) | 0;
    h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
    h = ((h >> 16) ^ h) * 0x45d9f3b | 0;
    return ((h >> 16) ^ h) & 0x7fffffff;
  }
  
  /**
   * Add trees and rocks to a terrain chunk
   */
  _addFoliage(chunkX, chunkZ) {
    const worldOffsetX = chunkX * this.chunkSize;
    const worldOffsetZ = chunkZ * this.chunkSize;
    const centerX = worldOffsetX + this.chunkSize / 2;
    const centerZ = worldOffsetZ + this.chunkSize / 2;
    
    // Skip chunks far from player (LOD — only decorate within 2 chunk-distances)
    const pChunkX = this.lastPlayerChunkX || 0;
    const pChunkZ = this.lastPlayerChunkZ || 0;
    if (Math.abs(chunkX - pChunkX) > 2 || Math.abs(chunkZ - pChunkZ) > 2) {
      return null;
    }
    
    const group = new THREE.Group();
    
    // Shared materials (reuse across all foliage)
    if (!this._foliageMats) {
      this._foliageMats = {
        trunk:   new THREE.MeshBasicMaterial({ color: 0x553311 }),
        canopy1: new THREE.MeshBasicMaterial({ color: 0x227722 }),
        canopy2: new THREE.MeshBasicMaterial({ color: 0x2a8a2a }),
        canopy3: new THREE.MeshBasicMaterial({ color: 0x1a6620 }),
        rock1:   new THREE.MeshBasicMaterial({ color: 0x777777 }),
        rock2:   new THREE.MeshBasicMaterial({ color: 0x666655 }),
        rock3:   new THREE.MeshBasicMaterial({ color: 0x888880 }),
      };
      this._foliageGeo = {
        trunk:   new THREE.CylinderGeometry(0.15, 0.25, 3, 5),
        canopyA: new THREE.ConeGeometry(1.8, 3.5, 6),
        canopyB: new THREE.SphereGeometry(1.6, 6, 5),
        canopyC: new THREE.ConeGeometry(1.2, 4, 5),  // Tall pine
        rockA:   new THREE.DodecahedronGeometry(1, 0),
        rockB:   new THREE.DodecahedronGeometry(0.6, 1),
      };
    }
    
    const m = this._foliageMats;
    const g = this._foliageGeo;
    
    // Determine tree/rock count from biome
    const distFromOrigin = Math.sqrt(centerX * centerX + centerZ * centerZ);
    if (distFromOrigin < this.castleRadius) return null; // No foliage in castle
    
    const biome = this.getBiome(centerX, centerZ);
    let treeCount, rockCount;
    switch (biome) {
      case 'safe_meadow':  treeCount = 4;  rockCount = 2; break;
      case 'grassland':    treeCount = 8;  rockCount = 4; break;
      case 'dense_woods':  treeCount = 14; rockCount = 3; break;
      case 'dark_frontier': treeCount = 10; rockCount = 6; break;
      default:             treeCount = 0;  rockCount = 0;
    }
    
    // Place trees
    for (let i = 0; i < treeCount; i++) {
      const hash = this._foliageHash(chunkX, chunkZ, i);
      const lx = (hash % 1000) / 1000 * this.chunkSize;
      const lz = ((hash >> 10) % 1000) / 1000 * this.chunkSize;
      const wx = worldOffsetX + lx;
      const wz = worldOffsetZ + lz;
      
      // Skip if inside castle blend zone
      const d = Math.sqrt(wx * wx + wz * wz);
      if (d < this.castleBlendRadius) continue;
      
      // Skip steep slopes
      const slope = this.getTerrainSlope(wx, wz);
      if (slope > 0.6) continue;
      
      const h = this.getTerrainHeight(wx, wz);
      const treeType = hash % 3;
      const scale = 0.7 + (hash % 100) / 100 * 0.6; // 0.7 - 1.3
      
      // Trunk
      const trunk = new THREE.Mesh(g.trunk, m.trunk);
      trunk.position.set(wx, h + 1.5 * scale, wz);
      trunk.scale.set(scale, scale, scale);
      group.add(trunk);
      
      // Canopy
      let canopy;
      if (treeType === 0) {
        canopy = new THREE.Mesh(g.canopyA, m.canopy1);
        canopy.position.set(wx, h + 3.8 * scale, wz);
      } else if (treeType === 1) {
        canopy = new THREE.Mesh(g.canopyB, m.canopy2);
        canopy.position.set(wx, h + 3.5 * scale, wz);
      } else {
        canopy = new THREE.Mesh(g.canopyC, m.canopy3);
        canopy.position.set(wx, h + 4.0 * scale, wz);
      }
      canopy.scale.set(scale, scale, scale);
      group.add(canopy);
    }
    
    // Place rocks
    for (let i = 0; i < rockCount; i++) {
      const hash = this._foliageHash(chunkX, chunkZ, 1000 + i);
      const lx = (hash % 1000) / 1000 * this.chunkSize;
      const lz = ((hash >> 10) % 1000) / 1000 * this.chunkSize;
      const wx = worldOffsetX + lx;
      const wz = worldOffsetZ + lz;
      
      const d = Math.sqrt(wx * wx + wz * wz);
      if (d < this.castleBlendRadius) continue;
      
      const h = this.getTerrainHeight(wx, wz);
      const rockType = hash % 2;
      const scale = 0.5 + (hash % 100) / 100 * 1.5; // 0.5 - 2.0
      const matChoice = [m.rock1, m.rock2, m.rock3][hash % 3];
      
      const rock = new THREE.Mesh(rockType === 0 ? g.rockA : g.rockB, matChoice);
      rock.position.set(wx, h + 0.3 * scale, wz);
      rock.scale.set(scale, scale * (0.5 + (hash % 50) / 100), scale); // Flatten some
      rock.rotation.y = (hash % 628) / 100; // Random rotation
      group.add(rock);
    }
    
    return group.children.length > 0 ? group : null;
  }
  
  /**
   * Create terrain material with grass/dirt texturing
   */
  _createTerrainMaterial() {
    // Procedural terrain texture
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext('2d');
    
    // Base grass color
    ctx.fillStyle = '#3a5a30';
    ctx.fillRect(0, 0, 512, 512);
    
    // Add grass variation
    for (let i = 0; i < 10000; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const brightness = Math.floor(Math.random() * 30);
      const green = 80 + brightness;
      const red = 50 + Math.floor(Math.random() * 20);
      const blue = 40 + Math.floor(Math.random() * 15);
      ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
      ctx.fillRect(x, y, 2 + Math.random() * 3, 2 + Math.random() * 3);
    }
    
    // Add some dirt patches
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const radius = 10 + Math.random() * 30;
      ctx.fillStyle = `rgba(90, 70, 50, ${0.2 + Math.random() * 0.3})`;
      ctx.beginPath();
      ctx.ellipse(x, y, radius, radius * 0.7, 0, 0, Math.PI * 2);
      ctx.fill();
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4); // Tile across each chunk
    
    // Terrain material — MeshBasicMaterial with vertex colors for height-based shading
    // Lighting-independent: vertex colors provide depth cues without lighting dependency
    // (MeshStandardMaterial/LambertMaterial were washed gray-teal by light color interactions)
    return new THREE.MeshBasicMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
    });
  }
  
  /**
   * Biome detection based on distance from origin
   * Used for enemy spawning, foliage density, etc.
   */
  getBiome(x, z) {
    const distance = Math.sqrt(x * x + z * z);
    
    if (distance < this.castleRadius) return 'castle';
    if (distance < 100) return 'safe_meadow';
    if (distance < 300) return 'grassland';
    if (distance < 600) return 'dense_woods';
    return 'dark_frontier';
  }
  
  /**
   * Get biome parameters for a position
   */
  getBiomeParams(x, z) {
    const biome = this.getBiome(x, z);
    
    const params = {
      castle: {
        treeDensity: 0,
        grassDensity: 0,
        fogDensity: 0,
        ambientLight: 1.0,
        groundColor: 0x555555,
      },
      safe_meadow: {
        treeDensity: 0.05,
        grassDensity: 0.8,
        fogDensity: 0.001,
        ambientLight: 0.9,
        groundColor: 0x7aaa60,
      },
      grassland: {
        treeDensity: 0.15,
        grassDensity: 0.6,
        fogDensity: 0.002,
        ambientLight: 0.7,
        groundColor: 0x5a8a40,
      },
      dense_woods: {
        treeDensity: 0.5,
        grassDensity: 0.4,
        fogDensity: 0.004,
        ambientLight: 0.4,
        groundColor: 0x3a6030,
      },
      dark_frontier: {
        treeDensity: 0.3,
        grassDensity: 0.2,
        fogDensity: 0.008,
        ambientLight: 0.2,
        groundColor: 0x4a5a40,
      },
    };
    
    return params[biome] || params.grassland;
  }
  
  /**
   * Find a valid spawn position (for enemies, items, etc.)
   * Avoids steep slopes and castle area
   */
  findValidSpawnPoint(minDist = 50, maxDist = 200) {
    const maxAttempts = 20;
    
    for (let i = 0; i < maxAttempts; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = minDist + Math.random() * (maxDist - minDist);
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist;
      const y = this.getTerrainHeight(x, z);
      
      // Check slope
      const slope = this.getTerrainSlope(x, z);
      if (slope > 0.5) continue; // Too steep
      
      // Check not underwater (if we add water later)
      if (y < -2) continue;
      
      return new THREE.Vector3(x, y, z);
    }
    
    // Fallback to origin edge
    return new THREE.Vector3(60, this.getTerrainHeight(60, 0), 0);
  }
  
  /**
   * Alias for getTerrainHeight (for compatibility)
   */
  getHeightAt(x, z) {
    return this.getTerrainHeight(x, z);
  }
  
  /**
   * Force-generate terrain chunk at a specific world position.
   * Unlike update(), this doesn't check if player moved chunks - it always loads.
   * Critical for autostart mode where we need terrain ready before first render.
   */
  forceGenerateAt(worldX, worldZ) {
    const { chunkX, chunkZ } = this._worldToChunk(worldX, worldZ);
    
    // Force load this chunk and surrounding chunks
    for (let dx = -1; dx <= 1; dx++) {
      for (let dz = -1; dz <= 1; dz++) {
        const cx = chunkX + dx;
        const cz = chunkZ + dz;
        if (!this.chunks.has(this._chunkKey(cx, cz))) {
          this._loadChunk(cx, cz);
        }
      }
    }
    
    // Update tracking to prevent redundant updates
    this.lastPlayerChunkX = chunkX;
    this.lastPlayerChunkZ = chunkZ;
  }
  
  /**
   * Raycast to terrain for UI/interaction
   * Returns intersection point or null
   */
  raycast(raycaster) {
    // Check all loaded chunks
    for (const [key, chunk] of this.chunks) {
      const intersects = raycaster.intersectObject(chunk.mesh);
      if (intersects.length > 0) {
        return intersects[0].point;
      }
    }
    return null;
  }
  
  /**
   * Get loaded chunk count (for debugging)
   */
  getLoadedChunkCount() {
    return this.chunks.size;
  }
  
  /**
   * Cleanup
   */
  dispose() {
    for (const [key, chunk] of this.chunks) {
      this.scene.remove(chunk.mesh);
      chunk.geometry.dispose();
    }
    this.chunks.clear();
    this.terrainMaterial.dispose();
  }
}
