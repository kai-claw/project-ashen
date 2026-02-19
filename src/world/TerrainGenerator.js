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
    
    // Recompute normals for proper lighting
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
    
    // Store chunk data
    this.chunks.set(key, { mesh, geometry });
  }
  
  /**
   * Unload a chunk to free memory
   */
  _unloadChunk(key) {
    const chunk = this.chunks.get(key);
    if (!chunk) return;
    
    this.scene.remove(chunk.mesh);
    chunk.geometry.dispose();
    
    this.chunks.delete(key);
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
    
    // Terrain material with texture
    return new THREE.MeshStandardMaterial({
      map: texture,
      color: 0x6a8a50,
      roughness: 0.9,
      metalness: 0.0,
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
