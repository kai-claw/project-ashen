import * as THREE from 'three';
import { createNoise2D } from 'simplex-noise';

/**
 * TerrainGenerator - Procedural heightmap-based terrain
 * Phase 12: Open World Foundation
 * 
 * Creates continuous terrain using multi-octave simplex noise.
 * Single 256x256 unit chunk for initial implementation.
 */
export class TerrainGenerator {
  constructor(scene) {
    this.scene = scene;
    
    // Terrain parameters
    this.size = 256;           // 256x256 units
    this.resolution = 128;     // 128x128 vertices (2 units per vertex for performance)
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
    
    // Terrain mesh and data
    this.mesh = null;
    this.heightData = null;  // 2D array for fast lookup
    this.geometry = null;
    
    // Collision data
    this.colliders = [];
    
    // Generate on construction
    this._generateTerrain();
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
   * This is the main collision function
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
   * Generate the terrain mesh
   */
  _generateTerrain() {
    const halfSize = this.size / 2;
    const segmentSize = this.size / this.resolution;
    
    // Create geometry
    this.geometry = new THREE.PlaneGeometry(
      this.size,
      this.size,
      this.resolution,
      this.resolution
    );
    
    // Rotate to XZ plane (Three.js PlaneGeometry is in XY by default)
    this.geometry.rotateX(-Math.PI / 2);
    
    // Modify vertices to match heightmap
    const positions = this.geometry.attributes.position.array;
    const vertexCount = (this.resolution + 1) * (this.resolution + 1);
    
    // Also store height data for fast collision lookup
    this.heightData = new Float32Array(vertexCount);
    
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const z = positions[i + 2];
      
      // Get height at this position
      const height = this.getTerrainHeight(x, z);
      positions[i + 1] = height;
      
      // Store in height data array
      this.heightData[i / 3] = height;
    }
    
    // Recompute normals for proper lighting
    this.geometry.computeVertexNormals();
    
    // Create material with grass/dirt based on slope
    const material = this._createTerrainMaterial();
    
    // Create mesh
    this.mesh = new THREE.Mesh(this.geometry, material);
    this.mesh.receiveShadow = true;
    this.mesh.castShadow = false; // Terrain doesn't cast shadows (performance)
    
    this.scene.add(this.mesh);
    
    console.log(`[TerrainGenerator] Created ${this.size}x${this.size} terrain with ${vertexCount} vertices`);
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
    texture.repeat.set(16, 16); // Tile across terrain
    
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
   * Raycast to terrain for UI/interaction
   * Returns intersection point or null
   */
  raycast(raycaster) {
    const intersects = raycaster.intersectObject(this.mesh);
    return intersects.length > 0 ? intersects[0].point : null;
  }
  
  /**
   * Cleanup
   */
  dispose() {
    if (this.mesh) {
      this.scene.remove(this.mesh);
      this.geometry.dispose();
      this.mesh.material.dispose();
    }
  }
}
