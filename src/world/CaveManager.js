import * as THREE from 'three';

/**
 * CaveManager - Creates cave entrance POIs with dynamic chunk loading
 * Phase 13/15-HOTFIX: Infinite world cave generation
 * 
 * Places cave entrance landmarks in frontier zones (200+ units from castle).
 * Uses region-based generation for infinite world support.
 * Visual only for now - dark openings built into hillsides, marked with
 * glowing crystals or torches. Future: will be mini-dungeons.
 */
export class CaveManager {
  constructor(scene, terrainGenerator) {
    this.scene = scene;
    this.terrain = terrainGenerator;
    
    // Region-based generation (larger than terrain chunks)
    this.regionSize = 150;      // 150x150 units per region
    this.loadDistance = 2;      // Load regions within 2 of player
    this.unloadDistance = 4;    // Unload beyond 4
    
    // Cave placement settings
    this.minDistFromCastle = 150;  // Frontier zone begins (caves in medium+ danger)
    this.cavesPerRegion = 1;       // Max 1 cave per region
    this.minCaveSpacing = 80;      // Caves shouldn't cluster
    this.minSlopeForCave = 0.25;   // Need some slope for hillside
    this.maxSlopeForCave = 0.9;    // Not too steep
    
    // Create shared materials
    this.materials = this._createMaterials();
    
    // Region storage
    this.regions = new Map();
    
    // Store all cave data (for queries)
    this.caves = [];
    
    // Track player position
    this.lastPlayerRegionX = null;
    this.lastPlayerRegionZ = null;
    
    // Initial generation around origin
    this.update(0, 0);
    
    console.log('[CaveManager] Initialized with region-based generation');
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
   * Update caves based on player position - call every frame
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
   * Generate cave for a region
   */
  _loadRegion(rx, rz) {
    const key = this._regionKey(rx, rz);
    if (this.regions.has(key)) return;
    
    const regionData = {
      caves: [],
      meshes: [],
    };
    
    const worldOffsetX = rx * this.regionSize;
    const worldOffsetZ = rz * this.regionSize;
    const regionSeed = rx * 73856093 + rz * 19349663 + 54321; // Different seed than villages
    
    // Try to place one cave in this region
    const attempts = 25;
    for (let i = 0; i < attempts; i++) {
      const rand1 = this._seededRandom(regionSeed + i * 3);
      const rand2 = this._seededRandom(regionSeed + i * 3 + 1);
      
      // Random position within region
      const x = worldOffsetX + rand1 * this.regionSize;
      const z = worldOffsetZ + rand2 * this.regionSize;
      
      // Check distance from castle (caves only in frontier areas)
      const distFromOrigin = Math.sqrt(x * x + z * z);
      if (distFromOrigin < this.minDistFromCastle) continue;
      
      // Check terrain slope - need hillside (but not too steep)
      const slope = this.terrain.getTerrainSlope(x, z);
      if (slope < this.minSlopeForCave || slope > this.maxSlopeForCave) continue;
      
      // Check spacing from existing caves
      let tooClose = false;
      for (const c of this.caves) {
        const dx = x - c.x;
        const dz = z - c.z;
        if (Math.sqrt(dx * dx + dz * dz) < this.minCaveSpacing) {
          tooClose = true;
          break;
        }
      }
      if (tooClose) continue;
      
      // Good spot! Calculate cave orientation (face downhill toward origin)
      const y = this.terrain.getTerrainHeight(x, z);
      const rotationToOrigin = Math.atan2(-x, -z);
      
      // Determine cave type based on seed
      const caveType = this._seededRandom(regionSeed + i * 7) < 0.5 ? 'crystal' : 'torch';
      
      const cave = {
        x,
        y,
        z,
        rotation: rotationToOrigin,
        type: caveType,
        size: 1.5 + this._seededRandom(regionSeed + i * 11) * 0.5,
        regionKey: key,
      };
      
      this._buildCaveEntrance(cave, regionData);
      regionData.caves.push(cave);
      this.caves.push(cave);
      
      break; // One cave per region
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
    
    // Remove caves from global list
    this.caves = this.caves.filter(c => c.regionKey !== key);
    
    this.regions.delete(key);
  }
  
  /**
   * Create shared materials for cave elements
   */
  _createMaterials() {
    return {
      // Dark cave rock - interior
      caveRock: new THREE.MeshBasicMaterial({
        color: 0x1a1a1a,
      }),
      // Exterior rocky frame
      frameRock: new THREE.MeshBasicMaterial({
        color: 0x3a3530,
      }),
      // Mossy accent
      moss: new THREE.MeshBasicMaterial({
        color: 0x2a4020,
      }),
      // Glowing crystal - cyan/blue
      crystalCyan: new THREE.MeshBasicMaterial({
        color: 0x00ffff,
      }),
      // Glowing crystal - purple
      crystalPurple: new THREE.MeshBasicMaterial({
        color: 0xaa66ff,
      }),
      // Torch wood
      torchWood: new THREE.MeshBasicMaterial({
        color: 0x4a3020,
      }),
    };
  }
  
  /**
   * Build a single cave entrance landmark
   */
  _buildCaveEntrance(cave, regionData) {
    const group = new THREE.Group();
    group.position.set(cave.x, cave.y, cave.z);
    group.rotation.y = cave.rotation;
    
    const scale = cave.size;
    
    // === CAVE OPENING (dark void) ===
    this._createCaveOpening(group, scale);
    
    // === ROCKY FRAME ===
    this._createRockyFrame(group, scale);
    
    // === GROUND DEBRIS ===
    this._createDebris(group, scale);
    
    // === MARKERS (crystals or torches) ===
    if (cave.type === 'crystal') {
      this._createCrystalMarkers(group, scale);
    } else {
      this._createTorchMarkers(group, scale);
    }
    
    // === ATMOSPHERIC EFFECTS ===
    this._createAtmosphere(group, cave);
    
    this.scene.add(group);
    regionData.meshes.push(group);
  }
  
  /**
   * Create the dark cave opening (visual depth illusion)
   */
  _createCaveOpening(group, scale) {
    // Outer arch shape (extruded ellipse)
    const archWidth = 3.5 * scale;
    const archHeight = 4 * scale;
    const archDepth = 5 * scale;
    
    // Dark interior plane (gives illusion of depth)
    const innerGeom = new THREE.CircleGeometry(archWidth * 0.8, 16, 0, Math.PI);
    const inner = new THREE.Mesh(innerGeom, this.materials.caveRock);
    inner.rotation.x = -0.2; // Slight tilt
    inner.position.set(0, archHeight * 0.5, -archDepth * 0.5);
    inner.scale.y = 1.2;
    group.add(inner);
    
    // Deeper interior (layered for depth)
    const deeperGeom = new THREE.CircleGeometry(archWidth * 0.5, 12, 0, Math.PI);
    const deepMat = new THREE.MeshBasicMaterial({ color: 0x050505 }); // Pure black
    const deeper = new THREE.Mesh(deeperGeom, deepMat);
    deeper.rotation.x = -0.3;
    deeper.position.set(0, archHeight * 0.45, -archDepth * 0.8);
    deeper.scale.y = 1.1;
    group.add(deeper);
    
    // Ground leading into cave
    const floorGeom = new THREE.PlaneGeometry(archWidth * 1.5, archDepth);
    const floor = new THREE.Mesh(floorGeom, this.materials.caveRock);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0.02, -archDepth * 0.3);
    floor.receiveShadow = true;
    group.add(floor);
  }
  
  /**
   * Create the rocky frame around the cave opening
   */
  _createRockyFrame(group, scale) {
    const archWidth = 3.5 * scale;
    const archHeight = 4 * scale;
    
    // Left pillar/rock formation
    this._createRockFormation(group, -archWidth * 0.7, 0, 0, scale * 1.2, archHeight * 0.9);
    
    // Right pillar/rock formation
    this._createRockFormation(group, archWidth * 0.7, 0, 0, scale * 1.0, archHeight * 0.85);
    
    // Top arch rocks (irregular boulders)
    const topBoulders = 4 + Math.floor(Math.random() * 3);
    for (let i = 0; i < topBoulders; i++) {
      const t = i / (topBoulders - 1);
      const bx = THREE.MathUtils.lerp(-archWidth * 0.6, archWidth * 0.6, t);
      const by = archHeight * (0.6 + Math.sin(t * Math.PI) * 0.35);
      const bz = -0.5 + Math.random() * 0.5;
      const bScale = 0.4 + Math.random() * 0.4;
      this._createBoulder(group, bx, by, bz, bScale * scale);
    }
    
    // Overhanging rocks
    this._createOverhang(group, scale);
  }
  
  /**
   * Create a rock pillar formation
   */
  _createRockFormation(group, x, y, z, scale, height) {
    const formation = new THREE.Group();
    formation.position.set(x, y, z);
    
    // Stack of rocks for natural look
    const rocks = 3 + Math.floor(Math.random() * 2);
    let currentY = 0;
    
    for (let i = 0; i < rocks; i++) {
      const rockHeight = (height / rocks) * (0.8 + Math.random() * 0.4);
      const rockWidth = scale * (0.8 - i * 0.1) * (0.8 + Math.random() * 0.3);
      
      const geo = new THREE.DodecahedronGeometry(rockWidth, 0);
      const rock = new THREE.Mesh(geo, this.materials.frameRock);
      rock.position.y = currentY + rockHeight * 0.5;
      rock.rotation.set(Math.random(), Math.random(), Math.random());
      rock.scale.y = rockHeight / rockWidth;
      rock.castShadow = true;
      rock.receiveShadow = true;
      formation.add(rock);
      
      currentY += rockHeight * 0.7; // Overlap slightly
    }
    
    group.add(formation);
  }
  
  /**
   * Create a single boulder
   */
  _createBoulder(group, x, y, z, size) {
    const geo = new THREE.DodecahedronGeometry(size, 0);
    const boulder = new THREE.Mesh(geo, this.materials.frameRock);
    boulder.position.set(x, y, z);
    boulder.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
    boulder.scale.set(
      0.8 + Math.random() * 0.4,
      0.6 + Math.random() * 0.3,
      0.8 + Math.random() * 0.4
    );
    boulder.castShadow = true;
    boulder.receiveShadow = true;
    group.add(boulder);
  }
  
  /**
   * Create overhanging rock/cliff above entrance
   */
  _createOverhang(group, scale) {
    const archHeight = 4 * scale;
    
    // Large overhanging slab
    const slabGeo = new THREE.BoxGeometry(5 * scale, 0.8 * scale, 3 * scale);
    const slab = new THREE.Mesh(slabGeo, this.materials.frameRock);
    slab.position.set(0, archHeight + 0.5 * scale, -1 * scale);
    slab.rotation.x = 0.15; // Tilt forward slightly
    slab.rotation.z = (Math.random() - 0.5) * 0.1;
    slab.castShadow = true;
    group.add(slab);
    
    // Moss patches on overhang
    const mossGeo = new THREE.PlaneGeometry(1.5 * scale, 1 * scale);
    const moss = new THREE.Mesh(mossGeo, this.materials.moss);
    moss.position.set(-1 * scale, archHeight + 0.1 * scale, 0.5 * scale);
    moss.rotation.x = -Math.PI / 2 + 0.3;
    group.add(moss);
  }
  
  /**
   * Create debris around entrance
   */
  _createDebris(group, scale) {
    const debrisCount = 8 + Math.floor(Math.random() * 6);
    
    for (let i = 0; i < debrisCount; i++) {
      const angle = Math.random() * Math.PI - Math.PI / 2; // Fan in front
      const dist = 2 + Math.random() * 4;
      const dx = Math.sin(angle) * dist * scale;
      const dz = Math.cos(angle) * dist * scale;
      const dSize = 0.15 + Math.random() * 0.35;
      
      this._createBoulder(group, dx, dSize * scale * 0.3, dz, dSize * scale);
    }
    
    // Bones scattered (simple white/gray cylinders)
    if (Math.random() < 0.7) {
      this._createBoneScatter(group, scale);
    }
  }
  
  /**
   * Create scattered bones near entrance (ominous decoration)
   */
  _createBoneScatter(group, scale) {
    const boneMat = new THREE.MeshBasicMaterial({
      color: 0xd0c8b8,
    });
    
    const boneCount = 3 + Math.floor(Math.random() * 4);
    
    for (let i = 0; i < boneCount; i++) {
      const bx = (Math.random() - 0.5) * 3 * scale;
      const bz = 1 + Math.random() * 2 * scale;
      
      const boneGeo = new THREE.CylinderGeometry(0.03 * scale, 0.04 * scale, 0.4 * scale, 6);
      const bone = new THREE.Mesh(boneGeo, boneMat);
      bone.position.set(bx, 0.02, bz);
      bone.rotation.x = Math.PI / 2;
      bone.rotation.z = Math.random() * Math.PI;
      group.add(bone);
    }
  }
  
  /**
   * Create glowing crystal markers
   */
  _createCrystalMarkers(group, scale) {
    const crystalPositions = [
      { x: -2.2, y: 0.3, z: 0.5, size: 0.6, angle: 0.4 },
      { x: 2.5, y: 0.5, z: 0.8, size: 0.5, angle: -0.3 },
      { x: -1.5, y: 2.5, z: -0.3, size: 0.35, angle: 0.6 },
      { x: 1.8, y: 2.8, z: -0.5, size: 0.4, angle: -0.5 },
      { x: 0, y: 0.2, z: 2, size: 0.45, angle: 0.2 },
    ];
    
    for (const pos of crystalPositions) {
      if (Math.random() < 0.7) { // Some variation
        this._createCrystal(
          group,
          pos.x * scale,
          pos.y * scale,
          pos.z * scale,
          pos.size * scale,
          pos.angle
        );
      }
    }
    
    // Crystal cluster at base
    this._createCrystalCluster(group, -1.8 * scale, 0, 1.5 * scale, scale * 0.7);
  }
  
  /**
   * Create a single crystal
   */
  _createCrystal(group, x, y, z, size, tiltAngle) {
    const material = Math.random() < 0.6 ? this.materials.crystalCyan : this.materials.crystalPurple;
    
    // Crystal shape (elongated octahedron)
    const geo = new THREE.OctahedronGeometry(size, 0);
    geo.scale(1, 2.5, 1); // Elongate
    
    const crystal = new THREE.Mesh(geo, material);
    crystal.position.set(x, y + size * 1.2, z);
    crystal.rotation.z = tiltAngle;
    crystal.rotation.y = Math.random() * Math.PI;
    crystal.castShadow = true;
    group.add(crystal);
    
    // Point light for glow
    const lightColor = material === this.materials.crystalCyan ? 0x00ffff : 0xaa66ff;
    const light = new THREE.PointLight(lightColor, 0.5, 5 * size);
    light.position.copy(crystal.position);
    group.add(light);
  }
  
  /**
   * Create a cluster of crystals
   */
  _createCrystalCluster(group, x, y, z, scale) {
    const cluster = new THREE.Group();
    cluster.position.set(x, y, z);
    
    const crystalCount = 4 + Math.floor(Math.random() * 3);
    
    for (let i = 0; i < crystalCount; i++) {
      const cx = (Math.random() - 0.5) * scale;
      const cz = (Math.random() - 0.5) * scale;
      const cSize = (0.15 + Math.random() * 0.25) * scale;
      const tilt = (Math.random() - 0.5) * 0.8;
      
      const material = Math.random() < 0.5 ? this.materials.crystalCyan : this.materials.crystalPurple;
      const geo = new THREE.OctahedronGeometry(cSize, 0);
      geo.scale(1, 2 + Math.random(), 1);
      
      const crystal = new THREE.Mesh(geo, material);
      crystal.position.set(cx, cSize * 1.2, cz);
      crystal.rotation.z = tilt;
      crystal.rotation.y = Math.random() * Math.PI * 2;
      cluster.add(crystal);
    }
    
    // Single light for cluster
    const clusterLight = new THREE.PointLight(0x44dddd, 1, 8);
    clusterLight.position.set(0, scale * 0.5, 0);
    cluster.add(clusterLight);
    
    group.add(cluster);
  }
  
  /**
   * Create torch markers
   */
  _createTorchMarkers(group, scale) {
    const torchPositions = [
      { x: -2.5, y: 0, z: 1, wallMount: false },
      { x: 2.5, y: 0, z: 1, wallMount: false },
      { x: -1.5, y: 2.5, z: 0, wallMount: true },
      { x: 1.5, y: 2.5, z: 0, wallMount: true },
    ];
    
    for (const pos of torchPositions) {
      this._createTorch(
        group,
        pos.x * scale,
        pos.y * scale,
        pos.z * scale,
        scale,
        pos.wallMount
      );
    }
  }
  
  /**
   * Create a single torch
   */
  _createTorch(group, x, y, z, scale, wallMount) {
    const torch = new THREE.Group();
    torch.position.set(x, y, z);
    
    if (wallMount) {
      // Wall-mounted bracket
      const bracketGeo = new THREE.BoxGeometry(0.1 * scale, 0.1 * scale, 0.3 * scale);
      const bracket = new THREE.Mesh(bracketGeo, this.materials.torchWood);
      torch.add(bracket);
    }
    
    // Torch pole
    const poleHeight = wallMount ? 0.6 * scale : 1.2 * scale;
    const poleGeo = new THREE.CylinderGeometry(0.05 * scale, 0.07 * scale, poleHeight, 6);
    const pole = new THREE.Mesh(poleGeo, this.materials.torchWood);
    pole.position.y = poleHeight / 2;
    pole.castShadow = true;
    torch.add(pole);
    
    // Torch head (wrapped in cloth)
    const headGeo = new THREE.CylinderGeometry(0.08 * scale, 0.12 * scale, 0.25 * scale, 8);
    const headMat = new THREE.MeshBasicMaterial({ color: 0x332211 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = poleHeight + 0.1 * scale;
    torch.add(head);
    
    // Fire glow (point light)
    const fireLight = new THREE.PointLight(0xff6622, 1.5, 10);
    fireLight.position.y = poleHeight + 0.2 * scale;
    fireLight.castShadow = false;
    torch.add(fireLight);
    
    // Fire particles (glowing spheres)
    const fireGeo = new THREE.SphereGeometry(0.06 * scale, 8, 8);
    const fireMat = new THREE.MeshBasicMaterial({ color: 0xff4400 });
    
    for (let i = 0; i < 4; i++) {
      const particle = new THREE.Mesh(fireGeo, fireMat);
      particle.position.set(
        (Math.random() - 0.5) * 0.1 * scale,
        poleHeight + 0.15 * scale + Math.random() * 0.15 * scale,
        (Math.random() - 0.5) * 0.1 * scale
      );
      torch.add(particle);
    }
    
    // Animate fire flicker
    const animate = () => {
      requestAnimationFrame(animate);
      fireLight.intensity = 1.3 + Math.sin(Date.now() * 0.015) * 0.4 + Math.random() * 0.2;
    };
    animate();
    
    group.add(torch);
  }
  
  /**
   * Create atmospheric effects (mist, ambient light)
   */
  _createAtmosphere(group, cave) {
    // Dim ambient light inside entrance
    const ambientLight = new THREE.PointLight(0x222233, 0.3, 8);
    ambientLight.position.set(0, 2, -2);
    group.add(ambientLight);
    
    // Mist/fog plane at entrance
    const mistGeo = new THREE.PlaneGeometry(6 * cave.size, 3 * cave.size);
    const mistMat = new THREE.MeshBasicMaterial({
      color: 0x888899,
      transparent: true,
      opacity: 0.15,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const mist = new THREE.Mesh(mistGeo, mistMat);
    mist.position.set(0, 1.5 * cave.size, -1);
    mist.rotation.y = Math.PI;
    group.add(mist);
    
    // Add subtle wind animation to mist
    const animateMist = () => {
      requestAnimationFrame(animateMist);
      mist.position.x = Math.sin(Date.now() * 0.0005) * 0.2;
      mist.material.opacity = 0.1 + Math.sin(Date.now() * 0.001) * 0.05;
    };
    animateMist();
  }
  
  // ========================================
  // PUBLIC API
  // ========================================
  
  /**
   * Get all cave data (for future quests, mini-dungeons)
   */
  getCaves() {
    return this.caves;
  }
  
  /**
   * Check if position is near a cave entrance
   */
  isNearCave(x, z, radius = 15) {
    for (const cave of this.caves) {
      const dx = x - cave.x;
      const dz = z - cave.z;
      if (Math.sqrt(dx * dx + dz * dz) < radius) {
        return true;
      }
    }
    return false;
  }
  
  /**
   * Get nearest cave (for future interactions)
   */
  getNearestCave(x, z) {
    let nearest = null;
    let nearestDist = Infinity;
    
    for (const cave of this.caves) {
      const dx = x - cave.x;
      const dz = z - cave.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = cave;
      }
    }
    
    return nearest ? { cave: nearest, distance: nearestDist } : null;
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
    // Unload all regions
    for (const [key] of this.regions) {
      this._unloadRegion(key);
    }
    
    for (const mat of Object.values(this.materials)) {
      mat.dispose();
    }
  }
}
