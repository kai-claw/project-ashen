# Open World System Design
## Project Ashen — Phase 12 Technical Specification

**Created:** 2026-02-14  
**Author:** Worker 1 (AI)  
**Status:** Design Document  
**Vision:** "Like Azeroth" — procedural open world with exploration, scaling difficulty, and organic discovery

---

## 1. Executive Summary

Transform Project Ashen from a linear dungeon crawler into an open-world exploration game. The player spawns in a castle (safe zone) and ventures into procedurally generated terrain where enemy difficulty scales with distance from origin.

### Key Principles
- **Grounded**: No floating structures. Everything sits naturally on terrain.
- **Seamless**: No loading screens between areas (chunk streaming).
- **Scalable**: Difficulty increases organically as players explore farther.
- **Performant**: 60 FPS target on mid-range hardware.

---

## 2. Terrain Generation System

### 2.1 Heightmap-Based Terrain

Use multi-octave **Simplex Noise** (faster than Perlin, fewer directional artifacts) to generate continuous terrain.

```
Height(x, z) = Σ [amplitude_i * simplex(x * frequency_i, z * frequency_i)]
```

**Noise Parameters:**
| Octave | Frequency | Amplitude | Purpose |
|--------|-----------|-----------|---------|
| 1 | 0.002 | 40.0 | Major hills, valleys |
| 2 | 0.008 | 15.0 | Medium terrain features |
| 3 | 0.02 | 5.0 | Small bumps, variation |
| 4 | 0.06 | 1.5 | Micro-detail |

**Height Range:** -10 to +60 units (sea level at 0)

### 2.2 Terrain Mesh Generation

```javascript
// Per-chunk mesh generation
class TerrainChunk {
  constructor(chunkX, chunkZ) {
    this.size = CHUNK_SIZE; // 64 units
    this.resolution = CHUNK_VERTS; // 65 vertices per edge (64 quads)
    this.geometry = this.generateGeometry(chunkX, chunkZ);
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  }
  
  generateGeometry(cx, cz) {
    const geo = new THREE.PlaneGeometry(
      this.size, this.size, 
      this.resolution - 1, this.resolution - 1
    );
    geo.rotateX(-Math.PI / 2);
    
    const positions = geo.attributes.position.array;
    for (let i = 0; i < positions.length; i += 3) {
      const worldX = cx * this.size + positions[i];
      const worldZ = cz * this.size + positions[i + 2];
      positions[i + 1] = getTerrainHeight(worldX, worldZ);
    }
    
    geo.computeVertexNormals();
    return geo;
  }
}
```

### 2.3 Ground Following Collision

Replace `World.getFloorY()` with terrain height sampling:

```javascript
getTerrainHeight(x, z) {
  // Sample heightmap at world position
  // Returns interpolated height for smooth movement
  const height = sampleHeightmap(x, z);
  return height;
}
```

**Collision Requirements:**
- Player Y follows terrain height + offset
- Physics raycast for accurate slope detection
- Smooth interpolation to prevent jitter

---

## 3. Chunk System (Infinite Terrain)

### 3.1 Chunk Architecture

```
CHUNK_SIZE = 64 units (64x64 world units)
VIEW_DISTANCE = 5 chunks (320 units visible radius)
LOAD_DISTANCE = 6 chunks (preload buffer)
UNLOAD_DISTANCE = 8 chunks (memory cleanup)
```

### 3.2 Chunk Manager

```javascript
class ChunkManager {
  constructor() {
    this.chunks = new Map(); // key: "cx,cz" -> TerrainChunk
    this.loadQueue = [];
    this.playerChunk = { x: 0, z: 0 };
  }
  
  update(playerPosition) {
    const cx = Math.floor(playerPosition.x / CHUNK_SIZE);
    const cz = Math.floor(playerPosition.z / CHUNK_SIZE);
    
    if (cx !== this.playerChunk.x || cz !== this.playerChunk.z) {
      this.playerChunk = { x: cx, z: cz };
      this.updateVisibleChunks();
    }
    
    this.processLoadQueue(); // Load 1-2 chunks per frame
  }
  
  updateVisibleChunks() {
    // Mark chunks to load/unload based on distance
    for (let dx = -LOAD_DISTANCE; dx <= LOAD_DISTANCE; dx++) {
      for (let dz = -LOAD_DISTANCE; dz <= LOAD_DISTANCE; dz++) {
        const key = `${this.playerChunk.x + dx},${this.playerChunk.z + dz}`;
        if (!this.chunks.has(key)) {
          this.loadQueue.push({ x: this.playerChunk.x + dx, z: this.playerChunk.z + dz });
        }
      }
    }
    
    // Unload distant chunks
    for (const [key, chunk] of this.chunks) {
      const [cx, cz] = key.split(',').map(Number);
      const dist = Math.max(Math.abs(cx - this.playerChunk.x), Math.abs(cz - this.playerChunk.z));
      if (dist > UNLOAD_DISTANCE) {
        chunk.dispose();
        this.chunks.delete(key);
      }
    }
  }
}
```

### 3.3 Chunk Contents

Each chunk contains:
- **Terrain mesh** (64x64 units)
- **Foliage instances** (trees, grass, rocks)
- **Enemy spawn points** (based on distance from origin)
- **Structure placements** (if applicable)

---

## 4. Biome System

### 4.1 Starting Biome: Grassland with Castle

**Origin (0, 0) = Castle Courtyard**

| Distance Range | Biome | Features |
|----------------|-------|----------|
| 0-30 | Castle Interior | Stone walls, courtyard, bonfire |
| 30-100 | Safe Meadow | Gentle hills, flowers, no enemies |
| 100-300 | Open Grassland | Rolling terrain, scattered trees, weak enemies |
| 300-600 | Dense Woods | Forest density increases, medium enemies |
| 600+ | Dark Frontier | Darker atmosphere, elite enemies, ruins |

### 4.2 Biome Determination

```javascript
function getBiome(x, z) {
  const distance = Math.sqrt(x * x + z * z);
  
  if (distance < 30) return 'castle';
  if (distance < 100) return 'safe_meadow';
  if (distance < 300) return 'grassland';
  if (distance < 600) return 'dense_woods';
  return 'dark_frontier';
}
```

### 4.3 Biome Visual Parameters

| Biome | Ground Color | Fog Density | Ambient Light | Tree Density |
|-------|--------------|-------------|---------------|--------------|
| Castle | Gray stone | 0.0 | 1.0 | 0 |
| Safe Meadow | Bright green | 0.001 | 0.9 | 0.05 |
| Grassland | Green | 0.002 | 0.7 | 0.15 |
| Dense Woods | Dark green | 0.004 | 0.4 | 0.5 |
| Dark Frontier | Gray-green | 0.008 | 0.2 | 0.3 |

---

## 5. Starting Castle Design

### 5.1 Castle Layout

```
                    NORTH
                      |
        +-------------+-------------+
        |             |             |
        |   TOWER     |   TOWER     |
        |   (NW)      |   (NE)      |
        +------+------+------+------+
               |      |
               | GATE |  <-- Exit to open world
               |      |
        +------+------+------+------+
        |             |             |
        |  COURTYARD  |  COURTYARD  |
        |  (bonfire)  |  (storage)  |
        |             |             |
        +------+------+------+------+
        |             |             |
        |   TOWER     |   TOWER     |
        |   (SW)      |   (SE)      |
        +-------------+-------------+
                      |
                   SOUTH
```

### 5.2 Castle Specifications

- **Footprint:** 40x50 units
- **Wall Height:** 8 units
- **Wall Thickness:** 2 units
- **Towers:** 4 corner towers (8x8 base, 12 units tall)
- **Gate:** Northern wall, 6 units wide, portcullis visual
- **Interior:** Flat stone floor (elevation 0)
- **Placement:** Centered at origin, terrain flattened underneath

### 5.3 Castle Collision

```javascript
class Castle {
  constructor() {
    this.bounds = new THREE.Box3(
      new THREE.Vector3(-20, 0, -25),
      new THREE.Vector3(20, 8, 25)
    );
    this.wallColliders = this.generateWallColliders();
    this.gateOpen = false;
  }
  
  generateWallColliders() {
    return [
      // West wall
      { min: [-21, 0, -25], max: [-19, 8, 25] },
      // East wall
      { min: [19, 0, -25], max: [21, 8, 25] },
      // South wall
      { min: [-20, 0, -26], max: [20, 8, -24] },
      // North wall (with gate gap)
      { min: [-20, 0, 24], max: [-3, 8, 26] },
      { min: [3, 0, 24], max: [20, 8, 26] },
    ];
  }
}
```

### 5.4 Terrain Flattening Under Castle

```javascript
getTerrainHeight(x, z) {
  // Flatten terrain under castle
  const castleDist = Math.max(Math.abs(x), Math.abs(z));
  if (castleDist < 25) {
    return 0; // Castle floor level
  }
  
  // Smooth transition from castle to terrain
  if (castleDist < 35) {
    const t = (castleDist - 25) / 10; // 0 to 1
    const naturalHeight = sampleNoise(x, z);
    return THREE.MathUtils.lerp(0, naturalHeight, smoothstep(t));
  }
  
  return sampleNoise(x, z);
}
```

---

## 6. Foliage System

### 6.1 Tree Placement Rules

```javascript
function shouldPlaceTree(x, z, biome) {
  // No trees in castle
  if (biome === 'castle') return false;
  
  // Distance from origin
  const dist = Math.sqrt(x * x + z * z);
  if (dist < 40) return false; // Keep castle surroundings clear
  
  // Slope check - no trees on steep terrain
  const slope = getTerrainSlope(x, z);
  if (slope > 0.6) return false;
  
  // Density noise (prevents uniform distribution)
  const density = getBiomeDensity(biome);
  const noise = simplex2D(x * 0.1, z * 0.1);
  
  return noise > (1 - density);
}
```

### 6.2 Tree Types

| Type | Biome | Height | Crown Radius | Collision Radius |
|------|-------|--------|--------------|------------------|
| Oak | Grassland | 8-12 | 4-6 | 0.8 |
| Pine | Dense Woods | 12-18 | 3-5 | 0.6 |
| Dead Oak | Dark Frontier | 6-10 | 2-4 | 0.8 |
| Willow | Near water | 6-10 | 5-7 | 0.6 |

### 6.3 Tree LOD System

```javascript
class TreeLOD {
  static getLOD(distance) {
    if (distance < 50) return 'high';    // Full geometry
    if (distance < 150) return 'medium'; // Simplified
    if (distance < 300) return 'low';    // Billboard
    return 'billboard';                   // 2D sprite
  }
}
```

### 6.4 Grass/Ground Cover

- **Instanced rendering** for performance (1 draw call for thousands of grass blades)
- **Density:** 0-100 per square unit based on biome
- **Culling distance:** 60 units
- **Wind animation:** Vertex shader displacement

```javascript
// Grass instancing
const grassGeometry = new THREE.PlaneGeometry(0.3, 0.5);
const grassMaterial = new THREE.MeshStandardMaterial({
  color: 0x3a5a30,
  side: THREE.DoubleSide,
  alphaTest: 0.5,
});
const grassMesh = new THREE.InstancedMesh(grassGeometry, grassMaterial, MAX_GRASS_INSTANCES);
```

---

## 7. Enemy Distance Scaling

### 7.1 Difficulty Zones

| Distance | Zone Name | Enemy Level | HP Multiplier | Damage Multiplier | Enemy Types |
|----------|-----------|-------------|---------------|-------------------|-------------|
| 0-50 | Safe Haven | N/A | N/A | N/A | None |
| 50-100 | Training | 1-3 | 0.5x | 0.5x | Hollow (weak) |
| 100-200 | Frontier | 4-8 | 1.0x | 1.0x | Hollow, Skeleton |
| 200-400 | Wilds | 9-15 | 1.5x | 1.3x | All common types |
| 400-600 | Danger Zone | 16-25 | 2.0x | 1.6x | Common + Elite variants |
| 600+ | Abyss | 26+ | 3.0x | 2.0x | Elite, Mini-bosses |

### 7.2 Enemy Spawn Formula

```javascript
function getEnemyLevel(spawnX, spawnZ) {
  const distance = Math.sqrt(spawnX * spawnX + spawnZ * spawnZ);
  
  if (distance < 50) return 0; // No enemies
  
  const baseLevel = Math.floor((distance - 50) / 20);
  const variance = Math.floor(Math.random() * 3) - 1; // -1 to +1
  
  return Math.max(1, baseLevel + variance);
}

function getEnemyStats(baseStats, level) {
  const scaling = 1 + (level - 1) * 0.15; // 15% per level
  
  return {
    hp: Math.floor(baseStats.hp * scaling),
    damage: Math.floor(baseStats.damage * scaling),
    souls: Math.floor(baseStats.souls * scaling * 1.2), // Rewards scale faster
  };
}
```

### 7.3 Spawn Density

```javascript
function getSpawnDensity(distance) {
  if (distance < 50) return 0;
  if (distance < 100) return 0.5;   // 0.5 enemies per chunk
  if (distance < 300) return 1.5;   // 1-2 per chunk
  if (distance < 600) return 2.5;   // 2-3 per chunk
  return 4.0;                        // 3-5 per chunk
}
```

### 7.4 Terrain-Aware Spawning

```javascript
function findValidSpawnPoint(chunkX, chunkZ) {
  const maxAttempts = 10;
  
  for (let i = 0; i < maxAttempts; i++) {
    const x = chunkX * CHUNK_SIZE + Math.random() * CHUNK_SIZE;
    const z = chunkZ * CHUNK_SIZE + Math.random() * CHUNK_SIZE;
    const y = getTerrainHeight(x, z);
    
    // Check slope
    if (getTerrainSlope(x, z) > 0.5) continue;
    
    // Check not in water
    if (y < 0) continue;
    
    // Check not too close to castle
    if (Math.sqrt(x * x + z * z) < 50) continue;
    
    return new THREE.Vector3(x, y, z);
  }
  
  return null; // Failed to find valid point
}
```

---

## 8. Performance Optimization

### 8.1 LOD (Level of Detail)

| Object Type | High LOD | Medium LOD | Low LOD | Cull Distance |
|-------------|----------|------------|---------|---------------|
| Terrain | 64 verts/edge | 32 | 16 | ∞ |
| Trees | Full mesh | Simplified | Billboard | 400 |
| Enemies | Full anim | Reduced bones | N/A | 200 |
| Grass | Instanced | Fewer instances | None | 60 |

### 8.2 Frustum Culling

```javascript
// Already handled by Three.js, but ensure:
mesh.frustumCulled = true;
```

### 8.3 Object Pooling

```javascript
class EnemyPool {
  constructor(maxSize = 100) {
    this.pool = [];
    this.active = new Set();
    this.maxSize = maxSize;
  }
  
  acquire(type) {
    let enemy = this.pool.find(e => e.type === type && !this.active.has(e));
    if (!enemy && this.pool.length < this.maxSize) {
      enemy = this.createEnemy(type);
      this.pool.push(enemy);
    }
    if (enemy) {
      this.active.add(enemy);
      enemy.reset();
    }
    return enemy;
  }
  
  release(enemy) {
    this.active.delete(enemy);
    enemy.deactivate();
  }
}
```

### 8.4 Chunk Loading Budget

- **Target:** Max 2 chunks loaded per frame
- **Priority:** Closer chunks first (Manhattan distance)
- **Background:** Use requestIdleCallback for non-critical loads

### 8.5 Memory Budget

| Resource | Max Loaded | Est. Memory |
|----------|------------|-------------|
| Terrain Chunks | 121 (11x11) | ~50 MB |
| Tree Instances | 5000 | ~10 MB |
| Grass Instances | 50000 | ~15 MB |
| Enemies (active) | 50 | ~5 MB |
| **Total** | | **~80 MB** |

---

## 9. Implementation Phases

### Phase 1: Core Terrain (This Sprint)
1. ✅ Design document (this file)
2. Heightmap noise generator
3. Single terrain chunk rendering
4. Player ground collision on terrain
5. Replace World.js cathedral with terrain + castle

### Phase 2: Chunk System
1. ChunkManager implementation
2. Dynamic load/unload
3. Chunk seaming (no gaps)
4. Performance profiling

### Phase 3: Foliage
1. Tree placement algorithm
2. Tree LOD system
3. Grass instancing
4. Collision for trees

### Phase 4: Enemy Integration
1. Distance-based spawning
2. Stat scaling
3. Terrain pathfinding
4. Object pooling

---

## 10. File Structure

```
src/
├── world/
│   ├── World.js              # Main world container (refactored)
│   ├── TerrainGenerator.js   # Heightmap noise + mesh generation
│   ├── ChunkManager.js       # Chunk loading/unloading
│   ├── TerrainChunk.js       # Individual chunk class
│   ├── Castle.js             # Starting castle structure
│   ├── FoliageManager.js     # Trees, grass, rocks
│   └── BiomeManager.js       # Biome determination + parameters
├── entities/
│   ├── EnemyManager.js       # Updated for terrain spawning
│   └── EnemyPool.js          # Object pooling (new)
└── systems/
    └── LODManager.js         # Level of detail control (new)
```

---

## 11. Dependencies

### Required Libraries
- **simplex-noise**: Terrain generation (`npm install simplex-noise`)
- **three** (existing): Rendering

### No New Dependencies Needed
Three.js includes:
- InstancedMesh (for grass/trees)
- BufferGeometry (for terrain)
- LOD (built-in LOD support)

---

## 12. Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Performance on low-end devices | High | Aggressive LOD, quality settings |
| Chunk seaming artifacts | Medium | Overlap vertices at chunk edges |
| Enemy pathfinding on terrain | Medium | NavMesh generation per chunk |
| Memory pressure | Medium | Strict unload policy |
| Terrain looks flat/boring | Low | Add noise variation, props |

---

## 13. Success Metrics

- [ ] 60 FPS with 5+ enemies visible
- [ ] No pop-in within 50 units
- [ ] Seamless chunk transitions
- [ ] Player can walk for 1000+ units without issues
- [ ] Enemies spawn correctly by distance
- [ ] Castle feels like a safe home base

---

## 14. References

- Dark Souls overworld design (Firelink Shrine as hub)
- World of Warcraft terrain system (Azeroth inspiration)
- Minecraft chunk loading
- Three.js InstancedMesh documentation
- Simplex noise algorithms

---

**Next Step:** Implement `TerrainGenerator.js` with basic heightmap and single-chunk rendering.
