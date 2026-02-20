import * as THREE from 'three';

/**
 * RuinsManager - Creates ancient ruins with dynamic region loading
 * Phase 13/15-HOTFIX: Infinite world ruins generation
 * 
 * Places ruins in medium-to-hard zones using region-based generation.
 * Enemy camps spawn near ruins (tracked via getRuins() for EnemyManager integration).
 */
export class RuinsManager {
  constructor(scene, terrainGenerator, colliders = []) {
    this.scene = scene;
    this.terrain = terrainGenerator;
    this.colliders = colliders;
    
    // Region-based generation
    this.regionSize = 150;
    this.loadDistance = 2;
    this.unloadDistance = 3;
    
    // Ruins settings
    this.minDistFromCastle = 80;
    this.ruinsPerRegion = 1;
    this.maxSlopeForRuins = 0.4;
    this.minRuinsSpacing = 60;
    
    // Materials
    this.materials = this._createMaterials();
    
    // Storage
    this.regions = new Map();
    this.ruins = [];
    
    // Track player
    this.lastPlayerRegionX = null;
    this.lastPlayerRegionZ = null;
    
    // Initial load
    this.update(0, 0);
    
    console.log(`[RuinsManager] Initialized with region-based generation`);
  }
  
  _seededRandom(seed) {
    const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
    return x - Math.floor(x);
  }
  
  _regionKey(rx, rz) {
    return `${rx},${rz}`;
  }
  
  _worldToRegion(x, z) {
    return {
      rx: Math.floor(x / this.regionSize),
      rz: Math.floor(z / this.regionSize),
    };
  }
  
  update(playerX, playerZ) {
    const { rx, rz } = this._worldToRegion(playerX, playerZ);
    
    if (rx === this.lastPlayerRegionX && rz === this.lastPlayerRegionZ) {
      return;
    }
    
    this.lastPlayerRegionX = rx;
    this.lastPlayerRegionZ = rz;
    
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
  
  _loadRegion(rx, rz) {
    const key = this._regionKey(rx, rz);
    if (this.regions.has(key)) return;
    
    const regionData = {
      ruins: [],
      meshes: [],
      localColliders: [],
    };
    
    const worldOffsetX = rx * this.regionSize;
    const worldOffsetZ = rz * this.regionSize;
    const regionSeed = rx * 48271 + rz * 16807;
    
    const attempts = 15;
    for (let i = 0; i < attempts; i++) {
      const rand1 = this._seededRandom(regionSeed + i * 3);
      const rand2 = this._seededRandom(regionSeed + i * 3 + 1);
      
      const x = worldOffsetX + rand1 * this.regionSize;
      const z = worldOffsetZ + rand2 * this.regionSize;
      
      const distFromOrigin = Math.sqrt(x * x + z * z);
      if (distFromOrigin < this.minDistFromCastle) continue;
      
      const slope = this.terrain.getTerrainSlope(x, z);
      if (slope > this.maxSlopeForRuins) continue;
      
      let tooClose = false;
      for (const r of this.ruins) {
        const dx = x - r.x;
        const dz = z - r.z;
        if (Math.sqrt(dx * dx + dz * dz) < this.minRuinsSpacing) {
          tooClose = true;
          break;
        }
      }
      if (tooClose) continue;
      
      // Skip safe meadow - ruins should be in harder areas
      const biome = this.terrain.getBiome(x, z);
      if (biome === 'safe_meadow' || biome === 'castle') continue;
      
      const y = this.terrain.getTerrainHeight(x, z);
      const types = ['temple', 'monument', 'shrine', 'graveyard'];
      const ruin = {
        x,
        y,
        z,
        rotation: this._seededRandom(regionSeed + i * 7) * Math.PI * 2,
        type: types[Math.floor(this._seededRandom(regionSeed + i * 11) * types.length)],
        enemyCampRadius: 15 + this._seededRandom(regionSeed + i * 13) * 10,
        regionKey: key,
      };
      
      this._buildRuin(ruin, regionData);
      regionData.ruins.push(ruin);
      this.ruins.push(ruin);
      
      break;
    }
    
    this.regions.set(key, regionData);
  }
  
  _unloadRegion(key) {
    const region = this.regions.get(key);
    if (!region) return;
    
    for (const mesh of region.meshes) {
      this.scene.remove(mesh);
      mesh.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
      });
    }
    
    // Remove colliders added by this region
    for (const collider of region.localColliders) {
      const idx = this.colliders.indexOf(collider);
      if (idx >= 0) this.colliders.splice(idx, 1);
    }
    
    this.ruins = this.ruins.filter(r => r.regionKey !== key);
    this.regions.delete(key);
  }
  
  _createMaterials() {
    return {
      ancientStone: new THREE.MeshBasicMaterial({
        color: 0x5a5a5a,
      }),
      mossyStone: new THREE.MeshBasicMaterial({
        color: 0x4a5040,
      }),
      crackedStone: new THREE.MeshBasicMaterial({
        color: 0x6a6860,
      }),
      altarStone: new THREE.MeshBasicMaterial({
        color: 0x3a3535,
      }),
      runeGlow: new THREE.MeshBasicMaterial({
        color: 0x4488aa,
      }),
    };
  }
  
  _buildRuin(ruin, regionData) {
    const group = new THREE.Group();
    group.position.set(ruin.x, 0, ruin.z);
    group.rotation.y = ruin.rotation;
    
    switch (ruin.type) {
      case 'temple':
        this._createTempleRuin(group, ruin, regionData);
        break;
      case 'monument':
        this._createMonumentRuin(group, ruin, regionData);
        break;
      case 'shrine':
        this._createShrineRuin(group, ruin, regionData);
        break;
      case 'graveyard':
        this._createGraveyardRuin(group, ruin, regionData);
        break;
    }
    
    this.scene.add(group);
    regionData.meshes.push(group);
  }
  
  _createTempleRuin(group, ruin, regionData) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    
    this._createAltar(group, 0, 0, ruin, regionData);
    
    const columnPositions = [
      [-6, -4], [-6, 4], [6, -4], [6, 4],
      [-6, 0], [6, 0],
      [-3, -4], [-3, 4], [3, -4], [3, 4],
    ];
    
    for (const [lx, lz] of columnPositions) {
      const worldX = ruin.x + lx * cos - lz * sin;
      const worldZ = ruin.z + lx * sin + lz * cos;
      const terrainY = this.terrain.getTerrainHeight(worldX, worldZ);
      
      const broken = Math.random() > 0.4;
      const height = broken ? 1 + Math.random() * 2 : 3.5 + Math.random();
      this._createColumn(group, lx, lz, height, terrainY, ruin, regionData);
    }
    
    this._createCollapsedWall(group, -8, 0, Math.PI / 2, ruin, regionData);
    this._createCollapsedWall(group, 8, 0, -Math.PI / 2, ruin, regionData);
  }
  
  _createMonumentRuin(group, ruin, regionData) {
    const terrainY = this.terrain.getTerrainHeight(ruin.x, ruin.z);
    this._createObelisk(group, 0, 0, terrainY, regionData, ruin);
    
    const columnCount = 6;
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    
    for (let i = 0; i < columnCount; i++) {
      const angle = (i / columnCount) * Math.PI * 2;
      const dist = 5;
      const lx = Math.cos(angle) * dist;
      const lz = Math.sin(angle) * dist;
      
      const wx = ruin.x + lx * cos - lz * sin;
      const wz = ruin.z + lx * sin + lz * cos;
      const ty = this.terrain.getTerrainHeight(wx, wz);
      
      const height = Math.random() > 0.2 ? 0.8 + Math.random() * 1.5 : 3 + Math.random();
      this._createColumn(group, lx, lz, height, ty, ruin, regionData);
    }
    
    this._createDebris(group, 3, 2, ruin);
    this._createDebris(group, -2, 4, ruin);
  }
  
  _createShrineRuin(group, ruin, regionData) {
    this._createSmallAltar(group, 0, 0, ruin, regionData);
    
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    
    for (const side of [-1, 1]) {
      const lx = side * 3;
      const wx = ruin.x + lx * cos;
      const wz = ruin.z + lx * sin;
      const ty = this.terrain.getTerrainHeight(wx, wz);
      
      const height = 2 + Math.random() * 1.5;
      this._createColumn(group, lx, 0, height, ty, ruin, regionData);
    }
    
    this._createOfferingStones(group, 0, 2, ruin);
  }
  
  _createGraveyardRuin(group, ruin, regionData) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    
    this._createMausoleum(group, 0, 0, ruin, regionData);
    
    const headstoneCount = 8 + Math.floor(Math.random() * 5);
    for (let i = 0; i < headstoneCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 4 + Math.random() * 6;
      const lx = Math.cos(angle) * dist;
      const lz = Math.sin(angle) * dist;
      
      const wx = ruin.x + lx * cos - lz * sin;
      const wz = ruin.z + lx * sin + lz * cos;
      const ty = this.terrain.getTerrainHeight(wx, wz);
      
      this._createHeadstone(group, lx, lz, ty);
    }
  }
  
  _createColumn(group, lx, lz, height, terrainY, ruin, regionData) {
    const column = new THREE.Group();
    column.position.set(lx, terrainY, lz);
    
    const baseGeo = new THREE.CylinderGeometry(0.7, 0.8, 0.4, 8);
    const base = new THREE.Mesh(baseGeo, this.materials.ancientStone);
    base.position.y = 0.2;
    base.castShadow = true;
    base.receiveShadow = true;
    column.add(base);
    
    const shaftGeo = new THREE.CylinderGeometry(0.5, 0.55, height, 8);
    const shaft = new THREE.Mesh(shaftGeo, this.materials.mossyStone);
    shaft.position.y = 0.4 + height / 2;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    column.add(shaft);
    
    if (height > 2.5) {
      const capGeo = new THREE.CylinderGeometry(0.65, 0.55, 0.3, 8);
      const cap = new THREE.Mesh(capGeo, this.materials.crackedStone);
      cap.position.y = 0.4 + height + 0.15;
      cap.castShadow = true;
      column.add(cap);
    }
    
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const worldX = ruin.x + lx * cos - lz * sin;
    const worldZ = ruin.z + lx * sin + lz * cos;
    
    const collider = {
      type: 'cylinder',
      position: new THREE.Vector3(worldX, terrainY, worldZ),
      radius: 0.6,
      height: height + 0.5,
    };
    this.colliders.push(collider);
    regionData.localColliders.push(collider);
    
    group.add(column);
  }
  
  _createCollapsedWall(group, lx, lz, angle, ruin, regionData) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const wx = ruin.x + lx * cos - lz * sin;
    const wz = ruin.z + lx * sin + lz * cos;
    const terrainY = this.terrain.getTerrainHeight(wx, wz);
    
    const wall = new THREE.Group();
    wall.position.set(lx, terrainY, lz);
    wall.rotation.y = angle;
    
    const wallHeight = 1.5 + Math.random();
    const wallLength = 4 + Math.random() * 2;
    const wallGeo = new THREE.BoxGeometry(wallLength, wallHeight, 0.6);
    const wallMesh = new THREE.Mesh(wallGeo, this.materials.mossyStone);
    wallMesh.position.y = wallHeight / 2;
    wallMesh.castShadow = true;
    wallMesh.receiveShadow = true;
    wall.add(wallMesh);
    
    for (let i = 0; i < 3; i++) {
      const rubbleSize = 0.3 + Math.random() * 0.4;
      const rubbleGeo = new THREE.BoxGeometry(rubbleSize, rubbleSize * 0.7, rubbleSize);
      const rubble = new THREE.Mesh(rubbleGeo, this.materials.crackedStone);
      rubble.position.set(
        (Math.random() - 0.5) * wallLength,
        rubbleSize * 0.35,
        0.6 + Math.random() * 0.5
      );
      rubble.rotation.set(Math.random() * 0.3, Math.random() * Math.PI, Math.random() * 0.3);
      rubble.castShadow = true;
      wall.add(rubble);
    }
    
    const collider = {
      type: 'box',
      bounds: new THREE.Box3(
        new THREE.Vector3(wx - wallLength / 2, terrainY, wz - 0.5),
        new THREE.Vector3(wx + wallLength / 2, terrainY + wallHeight, wz + 0.5)
      ),
    };
    this.colliders.push(collider);
    regionData.localColliders.push(collider);
    
    group.add(wall);
  }
  
  _createAltar(group, lx, lz, ruin, regionData) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const wx = ruin.x + lx * cos - lz * sin;
    const wz = ruin.z + lx * sin + lz * cos;
    const terrainY = this.terrain.getTerrainHeight(wx, wz);
    
    const altar = new THREE.Group();
    altar.position.set(lx, terrainY, lz);
    
    const platformGeo = new THREE.BoxGeometry(3, 0.4, 2.5);
    const platform = new THREE.Mesh(platformGeo, this.materials.altarStone);
    platform.position.y = 0.2;
    platform.castShadow = true;
    platform.receiveShadow = true;
    altar.add(platform);
    
    const altarGeo = new THREE.BoxGeometry(2, 0.6, 1.5);
    const altarMesh = new THREE.Mesh(altarGeo, this.materials.altarStone);
    altarMesh.position.y = 0.7;
    altarMesh.castShadow = true;
    altarMesh.receiveShadow = true;
    altar.add(altarMesh);
    
    const runeGeo = new THREE.PlaneGeometry(1.2, 0.8);
    const rune = new THREE.Mesh(runeGeo, this.materials.runeGlow);
    rune.rotation.x = -Math.PI / 2;
    rune.position.y = 1.01;
    altar.add(rune);
    
    const glowLight = new THREE.PointLight(0x4488aa, 0.5, 8);
    glowLight.position.y = 1.5;
    altar.add(glowLight);
    
    const collider = {
      type: 'box',
      bounds: new THREE.Box3(
        new THREE.Vector3(wx - 1.5, terrainY, wz - 1.25),
        new THREE.Vector3(wx + 1.5, terrainY + 1.2, wz + 1.25)
      ),
    };
    this.colliders.push(collider);
    regionData.localColliders.push(collider);
    
    group.add(altar);
  }
  
  _createSmallAltar(group, lx, lz, ruin, regionData) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const wx = ruin.x + lx * cos - lz * sin;
    const wz = ruin.z + lx * sin + lz * cos;
    const terrainY = this.terrain.getTerrainHeight(wx, wz);
    
    const altar = new THREE.Group();
    altar.position.set(lx, terrainY, lz);
    
    const pedestalGeo = new THREE.CylinderGeometry(0.6, 0.8, 0.8, 8);
    const pedestal = new THREE.Mesh(pedestalGeo, this.materials.altarStone);
    pedestal.position.y = 0.4;
    pedestal.castShadow = true;
    pedestal.receiveShadow = true;
    altar.add(pedestal);
    
    const bowlGeo = new THREE.TorusGeometry(0.3, 0.08, 8, 12);
    const bowl = new THREE.Mesh(bowlGeo, this.materials.ancientStone);
    bowl.rotation.x = Math.PI / 2;
    bowl.position.y = 0.85;
    altar.add(bowl);
    
    const glowLight = new THREE.PointLight(0x4488aa, 0.3, 5);
    glowLight.position.y = 1.2;
    altar.add(glowLight);
    
    const collider = {
      type: 'cylinder',
      position: new THREE.Vector3(wx, terrainY, wz),
      radius: 0.9,
      height: 1,
    };
    this.colliders.push(collider);
    regionData.localColliders.push(collider);
    
    group.add(altar);
  }
  
  _createOfferingStones(group, lx, lz, ruin) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    
    for (let i = 0; i < 3; i++) {
      const angle = (i / 3) * Math.PI * 2;
      const dist = 1.2;
      const ox = lx + Math.cos(angle) * dist;
      const oz = lz + Math.sin(angle) * dist;
      
      const wx = ruin.x + ox * cos - oz * sin;
      const wz = ruin.z + ox * sin + oz * cos;
      const terrainY = this.terrain.getTerrainHeight(wx, wz);
      
      const stoneGeo = new THREE.SphereGeometry(0.15 + Math.random() * 0.1, 6, 6);
      const stone = new THREE.Mesh(stoneGeo, this.materials.crackedStone);
      stone.position.set(ox, terrainY + 0.1, oz);
      stone.scale.y = 0.6;
      stone.castShadow = true;
      group.add(stone);
    }
  }
  
  _createObelisk(group, lx, lz, terrainY, regionData, ruin) {
    const obelisk = new THREE.Group();
    obelisk.position.set(lx, terrainY, lz);
    
    const baseGeo = new THREE.BoxGeometry(2.5, 0.6, 2.5);
    const base = new THREE.Mesh(baseGeo, this.materials.altarStone);
    base.position.y = 0.3;
    base.castShadow = true;
    base.receiveShadow = true;
    obelisk.add(base);
    
    const obeliskHeight = 6 + Math.random() * 2;
    const shaftGeo = new THREE.CylinderGeometry(0.3, 0.8, obeliskHeight, 4);
    const shaft = new THREE.Mesh(shaftGeo, this.materials.ancientStone);
    shaft.position.y = 0.6 + obeliskHeight / 2;
    shaft.rotation.y = Math.PI / 4;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    obelisk.add(shaft);
    
    const apexGeo = new THREE.ConeGeometry(0.4, 0.6, 4);
    const apex = new THREE.Mesh(apexGeo, this.materials.runeGlow);
    apex.position.y = 0.6 + obeliskHeight + 0.3;
    apex.rotation.y = Math.PI / 4;
    obelisk.add(apex);
    
    const glowLight = new THREE.PointLight(0x4488aa, 0.8, 12);
    glowLight.position.y = obeliskHeight + 1;
    obelisk.add(glowLight);
    
    const collider = {
      type: 'box',
      bounds: new THREE.Box3(
        new THREE.Vector3(ruin.x + lx - 1.25, terrainY, ruin.z + lz - 1.25),
        new THREE.Vector3(ruin.x + lx + 1.25, terrainY + obeliskHeight + 1, ruin.z + lz + 1.25)
      ),
    };
    this.colliders.push(collider);
    regionData.localColliders.push(collider);
    
    group.add(obelisk);
  }
  
  _createDebris(group, lx, lz, ruin) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const wx = ruin.x + lx * cos - lz * sin;
    const wz = ruin.z + lx * sin + lz * cos;
    const terrainY = this.terrain.getTerrainHeight(wx, wz);
    
    const debris = new THREE.Group();
    debris.position.set(lx, terrainY, lz);
    
    const pieceCount = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < pieceCount; i++) {
      const size = 0.2 + Math.random() * 0.4;
      const geo = new THREE.BoxGeometry(size, size * 0.6, size * 0.8);
      const piece = new THREE.Mesh(geo, this.materials.crackedStone);
      piece.position.set(
        (Math.random() - 0.5) * 2,
        size * 0.3,
        (Math.random() - 0.5) * 2
      );
      piece.rotation.set(Math.random() * 0.4, Math.random() * Math.PI, Math.random() * 0.4);
      piece.castShadow = true;
      debris.add(piece);
    }
    
    group.add(debris);
  }
  
  _createMausoleum(group, lx, lz, ruin, regionData) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const wx = ruin.x + lx * cos - lz * sin;
    const wz = ruin.z + lx * sin + lz * cos;
    const terrainY = this.terrain.getTerrainHeight(wx, wz);
    
    const mauso = new THREE.Group();
    mauso.position.set(lx, terrainY, lz);
    
    const baseGeo = new THREE.BoxGeometry(5, 0.3, 4);
    const base = new THREE.Mesh(baseGeo, this.materials.altarStone);
    base.position.y = 0.15;
    base.castShadow = true;
    base.receiveShadow = true;
    mauso.add(base);
    
    const backWallGeo = new THREE.BoxGeometry(5, 2.5, 0.4);
    const backWall = new THREE.Mesh(backWallGeo, this.materials.mossyStone);
    backWall.position.set(0, 1.55, -1.8);
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    mauso.add(backWall);
    
    const leftWallGeo = new THREE.BoxGeometry(0.4, 1.8, 3.2);
    const leftWall = new THREE.Mesh(leftWallGeo, this.materials.mossyStone);
    leftWall.position.set(-2.3, 1.2, -0.2);
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    mauso.add(leftWall);
    
    const rightWallGeo = new THREE.BoxGeometry(0.4, 2.2, 3.2);
    const rightWall = new THREE.Mesh(rightWallGeo, this.materials.mossyStone);
    rightWall.position.set(2.3, 1.4, -0.2);
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    mauso.add(rightWall);
    
    const sarcGeo = new THREE.BoxGeometry(2.2, 0.8, 1.2);
    const sarc = new THREE.Mesh(sarcGeo, this.materials.altarStone);
    sarc.position.set(0, 0.7, -0.5);
    sarc.castShadow = true;
    sarc.receiveShadow = true;
    mauso.add(sarc);
    
    const lidGeo = new THREE.BoxGeometry(2.3, 0.2, 1.3);
    const lid = new THREE.Mesh(lidGeo, this.materials.ancientStone);
    lid.position.set(0.1, 1.2, -0.4);
    lid.rotation.y = 0.08;
    lid.castShadow = true;
    mauso.add(lid);
    
    const collider = {
      type: 'box',
      bounds: new THREE.Box3(
        new THREE.Vector3(wx - 2.5, terrainY, wz - 2),
        new THREE.Vector3(wx + 2.5, terrainY + 2.8, wz + 2)
      ),
    };
    this.colliders.push(collider);
    regionData.localColliders.push(collider);
    
    group.add(mauso);
  }
  
  _createHeadstone(group, lx, lz, terrainY) {
    const headstone = new THREE.Group();
    headstone.position.set(lx, terrainY, lz);
    headstone.rotation.y = Math.random() * 0.4 - 0.2;
    
    const height = 0.6 + Math.random() * 0.4;
    const width = 0.4 + Math.random() * 0.3;
    const stoneGeo = new THREE.BoxGeometry(width, height, 0.12);
    const stone = new THREE.Mesh(stoneGeo, this.materials.mossyStone);
    stone.position.y = height / 2;
    
    if (Math.random() > 0.6) {
      stone.rotation.x = (Math.random() - 0.5) * 0.3;
      stone.rotation.z = (Math.random() - 0.5) * 0.2;
    }
    
    stone.castShadow = true;
    headstone.add(stone);
    group.add(headstone);
  }
  
  getRuins() {
    return this.ruins;
  }
  
  isNearRuin(x, z, radius = 15) {
    for (const ruin of this.ruins) {
      const dx = x - ruin.x;
      const dz = z - ruin.z;
      if (Math.sqrt(dx * dx + dz * dz) < radius) {
        return true;
      }
    }
    return false;
  }
  
  getNearbyRuin(x, z, radius = 20) {
    for (const ruin of this.ruins) {
      const dx = x - ruin.x;
      const dz = z - ruin.z;
      if (Math.sqrt(dx * dx + dz * dz) < radius) {
        return ruin;
      }
    }
    return null;
  }
  
  getLoadedRegionCount() {
    return this.regions.size;
  }
  
  dispose() {
    for (const [key] of this.regions) {
      this._unloadRegion(key);
    }
    
    for (const mat of Object.values(this.materials)) {
      mat.dispose();
    }
  }
}
