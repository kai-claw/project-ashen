import * as THREE from 'three';

/**
 * RuinsManager - Creates ancient ruins and monuments as POIs
 * Phase 13: Villages and Landmarks
 * 
 * Places ruins in medium-to-hard zones for exploration. Ruins include
 * broken pillars, collapsed walls, and ancient altars. Enemy camps
 * spawn near ruins (tracked via getRuins() for EnemyManager integration).
 */
export class RuinsManager {
  constructor(scene, terrainGenerator, colliders = []) {
    this.scene = scene;
    this.terrain = terrainGenerator;
    this.colliders = colliders; // World's collision array
    
    // Ruins placement settings
    this.minDistFromCastle = 100;  // Medium zone start
    this.maxDistFromCastle = 250;  // Hard zone
    this.ruinsCount = 4;           // Number of ruin sites
    this.maxSlopeForRuins = 0.4;   // Can be on rougher terrain than villages
    
    // Materials (shared across all ruins)
    this.materials = this._createMaterials();
    
    // Store ruins data
    this.ruins = [];
    this.meshes = [];
    
    // Generate ruins
    this._generateRuins();
  }
  
  /**
   * Create shared materials for ruins
   */
  _createMaterials() {
    return {
      // Ancient weathered stone
      ancientStone: new THREE.MeshStandardMaterial({
        color: 0x5a5a5a,
        roughness: 0.95,
        metalness: 0.0,
      }),
      // Darker moss-covered stone
      mossyStone: new THREE.MeshStandardMaterial({
        color: 0x4a5040,
        roughness: 1.0,
        metalness: 0.0,
      }),
      // Cracked worn stone (lighter)
      crackedStone: new THREE.MeshStandardMaterial({
        color: 0x6a6860,
        roughness: 0.9,
        metalness: 0.0,
      }),
      // Altar stone (darker, ancient)
      altarStone: new THREE.MeshStandardMaterial({
        color: 0x3a3535,
        roughness: 0.85,
        metalness: 0.05,
      }),
      // Glowing runes (emissive)
      runeGlow: new THREE.MeshStandardMaterial({
        color: 0x4488aa,
        emissive: 0x4488aa,
        emissiveIntensity: 0.3,
        roughness: 0.5,
        metalness: 0.2,
      }),
    };
  }
  
  /**
   * Find suitable locations and generate ruins
   */
  _generateRuins() {
    const ruins = [];
    const minRuinsSpacing = 50; // Ruins should be spread out
    
    let attempts = 0;
    const maxAttempts = 150;
    
    while (ruins.length < this.ruinsCount && attempts < maxAttempts) {
      attempts++;
      
      // Random position in medium-to-hard zone
      const angle = Math.random() * Math.PI * 2;
      const dist = this.minDistFromCastle + Math.random() * (this.maxDistFromCastle - this.minDistFromCastle);
      const x = Math.cos(angle) * dist;
      const z = Math.sin(angle) * dist;
      
      // Check terrain slope
      const slope = this.terrain.getTerrainSlope(x, z);
      if (slope > this.maxSlopeForRuins) continue;
      
      // Check spacing from other ruins
      let tooClose = false;
      for (const r of ruins) {
        const dx = x - r.x;
        const dz = z - r.z;
        if (Math.sqrt(dx * dx + dz * dz) < minRuinsSpacing) {
          tooClose = true;
          break;
        }
      }
      if (tooClose) continue;
      
      // Good spot - create ruin
      const y = this.terrain.getTerrainHeight(x, z);
      const ruin = {
        x,
        y,
        z,
        rotation: Math.random() * Math.PI * 2,
        type: this._pickRuinType(),
        enemyCampRadius: 15 + Math.random() * 10, // Enemies spawn within this radius
      };
      ruins.push(ruin);
    }
    
    this.ruins = ruins;
    console.log(`[RuinsManager] Placed ${ruins.length} ruin sites`);
    
    // Build each ruin
    for (const ruin of ruins) {
      this._buildRuin(ruin);
    }
  }
  
  /**
   * Pick a random ruin type
   */
  _pickRuinType() {
    const types = ['temple', 'monument', 'shrine', 'graveyard'];
    return types[Math.floor(Math.random() * types.length)];
  }
  
  /**
   * Build a single ruin site
   */
  _buildRuin(ruin) {
    const group = new THREE.Group();
    group.position.set(ruin.x, 0, ruin.z);
    group.rotation.y = ruin.rotation;
    
    switch (ruin.type) {
      case 'temple':
        this._createTempleRuin(group, ruin);
        break;
      case 'monument':
        this._createMonumentRuin(group, ruin);
        break;
      case 'shrine':
        this._createShrineRuin(group, ruin);
        break;
      case 'graveyard':
        this._createGraveyardRuin(group, ruin);
        break;
    }
    
    this.scene.add(group);
    this.meshes.push(group);
  }
  
  /**
   * Temple Ruin - Broken columns in a rectangular arrangement with central altar
   */
  _createTempleRuin(group, ruin) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    
    // Central altar
    this._createAltar(group, 0, 0, ruin);
    
    // Columns in a grid pattern (some broken)
    const columnPositions = [
      [-6, -4], [-6, 4], [6, -4], [6, 4],  // Outer corners
      [-6, 0], [6, 0],                      // Side centers
      [-3, -4], [-3, 4], [3, -4], [3, 4],  // Inner columns
    ];
    
    for (const [lx, lz] of columnPositions) {
      const worldX = ruin.x + lx * cos - lz * sin;
      const worldZ = ruin.z + lx * sin + lz * cos;
      const terrainY = this.terrain.getTerrainHeight(worldX, worldZ);
      
      // Some columns intact, some broken at different heights
      const broken = Math.random() > 0.4;
      const height = broken ? 1 + Math.random() * 2 : 3.5 + Math.random() * 1;
      
      this._createColumn(group, lx, lz, height, terrainY, ruin);
    }
    
    // Collapsed wall sections
    this._createCollapsedWall(group, -8, 0, Math.PI / 2, ruin);
    this._createCollapsedWall(group, 8, 0, -Math.PI / 2, ruin);
    
    // Fallen column debris
    this._createFallenColumn(group, 2, -6, Math.PI * 0.1, ruin);
  }
  
  /**
   * Monument Ruin - Single large obelisk or statue base surrounded by pillars
   */
  _createMonumentRuin(group, ruin) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    
    // Large central obelisk
    const worldX = ruin.x;
    const worldZ = ruin.z;
    const terrainY = this.terrain.getTerrainHeight(worldX, worldZ);
    this._createObelisk(group, 0, 0, terrainY);
    
    // Surrounding broken columns in a circle
    const columnCount = 6;
    for (let i = 0; i < columnCount; i++) {
      const angle = (i / columnCount) * Math.PI * 2;
      const dist = 5;
      const lx = Math.cos(angle) * dist;
      const lz = Math.sin(angle) * dist;
      
      const wx = ruin.x + lx * cos - lz * sin;
      const wz = ruin.z + lx * sin + lz * cos;
      const ty = this.terrain.getTerrainHeight(wx, wz);
      
      // Most columns broken
      const height = Math.random() > 0.2 ? 0.8 + Math.random() * 1.5 : 3 + Math.random();
      this._createColumn(group, lx, lz, height, ty, ruin);
    }
    
    // Stone debris around the base
    this._createDebris(group, 3, 2, ruin);
    this._createDebris(group, -2, 4, ruin);
    this._createDebris(group, -4, -3, ruin);
  }
  
  /**
   * Shrine Ruin - Small worship site with altar and offerings
   */
  _createShrineRuin(group, ruin) {
    // Central altar (smaller)
    this._createSmallAltar(group, 0, 0, ruin);
    
    // Two columns flanking
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    
    for (const side of [-1, 1]) {
      const lx = side * 3;
      const lz = 0;
      const wx = ruin.x + lx * cos - lz * sin;
      const wz = ruin.z + lx * sin + lz * cos;
      const ty = this.terrain.getTerrainHeight(wx, wz);
      
      const height = 2 + Math.random() * 1.5;
      this._createColumn(group, lx, lz, height, ty, ruin);
    }
    
    // Offering stones
    this._createOfferingStones(group, 0, 2, ruin);
    
    // Collapsed back wall
    this._createCollapsedWall(group, 0, -3, 0, ruin);
  }
  
  /**
   * Graveyard Ruin - Ancient burial ground with headstones and mausoleums
   */
  _createGraveyardRuin(group, ruin) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    
    // Central mausoleum (ruined)
    this._createMausoleum(group, 0, 0, ruin);
    
    // Headstones scattered around
    const headstoneCount = 8 + Math.floor(Math.random() * 5);
    for (let i = 0; i < headstoneCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 4 + Math.random() * 6;
      const lx = Math.cos(angle) * dist;
      const lz = Math.sin(angle) * dist;
      
      const wx = ruin.x + lx * cos - lz * sin;
      const wz = ruin.z + lx * sin + lz * cos;
      const ty = this.terrain.getTerrainHeight(wx, wz);
      
      this._createHeadstone(group, lx, lz, ty, ruin);
    }
  }
  
  /**
   * Create a standing column (pillar)
   */
  _createColumn(group, lx, lz, height, terrainY, ruin) {
    const column = new THREE.Group();
    column.position.set(lx, terrainY, lz);
    
    // Column base
    const baseGeo = new THREE.CylinderGeometry(0.7, 0.8, 0.4, 8);
    const base = new THREE.Mesh(baseGeo, this.materials.ancientStone);
    base.position.y = 0.2;
    base.castShadow = true;
    base.receiveShadow = true;
    column.add(base);
    
    // Column shaft
    const shaftGeo = new THREE.CylinderGeometry(0.5, 0.55, height, 8);
    const shaft = new THREE.Mesh(shaftGeo, this.materials.mossyStone);
    shaft.position.y = 0.4 + height / 2;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    column.add(shaft);
    
    // If tall enough, add capital
    if (height > 2.5) {
      const capGeo = new THREE.CylinderGeometry(0.65, 0.55, 0.3, 8);
      const cap = new THREE.Mesh(capGeo, this.materials.crackedStone);
      cap.position.y = 0.4 + height + 0.15;
      cap.castShadow = true;
      column.add(cap);
    }
    
    // Add column collision
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const worldX = ruin.x + lx * cos - lz * sin;
    const worldZ = ruin.z + lx * sin + lz * cos;
    
    this.colliders.push({
      type: 'cylinder',
      position: new THREE.Vector3(worldX, terrainY, worldZ),
      radius: 0.6,
      height: height + 0.5,
    });
    
    group.add(column);
  }
  
  /**
   * Create a fallen column on its side
   */
  _createFallenColumn(group, lx, lz, angle, ruin) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const wx = ruin.x + lx * cos - lz * sin;
    const wz = ruin.z + lx * sin + lz * cos;
    const terrainY = this.terrain.getTerrainHeight(wx, wz);
    
    const fallen = new THREE.Group();
    fallen.position.set(lx, terrainY + 0.3, lz);
    fallen.rotation.set(Math.PI / 2 - 0.1, angle, 0);
    
    const shaftGeo = new THREE.CylinderGeometry(0.45, 0.5, 3, 8);
    const shaft = new THREE.Mesh(shaftGeo, this.materials.mossyStone);
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    fallen.add(shaft);
    
    // Broken end
    const brokenGeo = new THREE.CylinderGeometry(0.2, 0.45, 0.3, 8);
    const broken = new THREE.Mesh(brokenGeo, this.materials.crackedStone);
    broken.position.y = 1.65;
    fallen.add(broken);
    
    // Add collision for fallen column (box approximation)
    this.colliders.push({
      type: 'box',
      bounds: new THREE.Box3(
        new THREE.Vector3(wx - 1.5, terrainY, wz - 0.6),
        new THREE.Vector3(wx + 1.5, terrainY + 1, wz + 0.6)
      ),
    });
    
    group.add(fallen);
  }
  
  /**
   * Create collapsed wall section
   */
  _createCollapsedWall(group, lx, lz, angle, ruin) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const wx = ruin.x + lx * cos - lz * sin;
    const wz = ruin.z + lx * sin + lz * cos;
    const terrainY = this.terrain.getTerrainHeight(wx, wz);
    
    const wall = new THREE.Group();
    wall.position.set(lx, terrainY, lz);
    wall.rotation.y = angle;
    
    // Main wall section (broken top)
    const wallHeight = 1.5 + Math.random() * 1;
    const wallLength = 4 + Math.random() * 2;
    const wallGeo = new THREE.BoxGeometry(wallLength, wallHeight, 0.6);
    const wallMesh = new THREE.Mesh(wallGeo, this.materials.mossyStone);
    wallMesh.position.y = wallHeight / 2;
    wallMesh.castShadow = true;
    wallMesh.receiveShadow = true;
    wall.add(wallMesh);
    
    // Rubble at the base
    for (let i = 0; i < 3; i++) {
      const rubbleSize = 0.3 + Math.random() * 0.4;
      const rubbleGeo = new THREE.BoxGeometry(rubbleSize, rubbleSize * 0.7, rubbleSize);
      const rubble = new THREE.Mesh(rubbleGeo, this.materials.crackedStone);
      rubble.position.set(
        (Math.random() - 0.5) * wallLength,
        rubbleSize * 0.35,
        0.6 + Math.random() * 0.5
      );
      rubble.rotation.set(
        Math.random() * 0.3,
        Math.random() * Math.PI,
        Math.random() * 0.3
      );
      rubble.castShadow = true;
      wall.add(rubble);
    }
    
    // Add wall collision
    const wallCos = Math.cos(ruin.rotation + angle);
    const wallSin = Math.sin(ruin.rotation + angle);
    
    this.colliders.push({
      type: 'box',
      bounds: new THREE.Box3(
        new THREE.Vector3(wx - wallLength/2 * Math.abs(wallCos) - 0.3, terrainY, wz - wallLength/2 * Math.abs(wallSin) - 0.3),
        new THREE.Vector3(wx + wallLength/2 * Math.abs(wallCos) + 0.3, terrainY + wallHeight, wz + wallLength/2 * Math.abs(wallSin) + 0.3)
      ),
    });
    
    group.add(wall);
  }
  
  /**
   * Create central altar (for future loot/interaction)
   */
  _createAltar(group, lx, lz, ruin) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const wx = ruin.x + lx * cos - lz * sin;
    const wz = ruin.z + lx * sin + lz * cos;
    const terrainY = this.terrain.getTerrainHeight(wx, wz);
    
    const altar = new THREE.Group();
    altar.position.set(lx, terrainY, lz);
    
    // Large stone platform
    const platformGeo = new THREE.BoxGeometry(3, 0.4, 2.5);
    const platform = new THREE.Mesh(platformGeo, this.materials.altarStone);
    platform.position.y = 0.2;
    platform.castShadow = true;
    platform.receiveShadow = true;
    altar.add(platform);
    
    // Altar stone (on top)
    const altarGeo = new THREE.BoxGeometry(2, 0.6, 1.5);
    const altarMesh = new THREE.Mesh(altarGeo, this.materials.altarStone);
    altarMesh.position.y = 0.7;
    altarMesh.castShadow = true;
    altarMesh.receiveShadow = true;
    altar.add(altarMesh);
    
    // Glowing rune inlay
    const runeGeo = new THREE.PlaneGeometry(1.2, 0.8);
    const rune = new THREE.Mesh(runeGeo, this.materials.runeGlow);
    rune.rotation.x = -Math.PI / 2;
    rune.position.y = 1.01;
    altar.add(rune);
    
    // Soft glow light
    const glowLight = new THREE.PointLight(0x4488aa, 0.5, 8);
    glowLight.position.y = 1.5;
    altar.add(glowLight);
    
    // Add collision
    this.colliders.push({
      type: 'box',
      bounds: new THREE.Box3(
        new THREE.Vector3(wx - 1.5, terrainY, wz - 1.25),
        new THREE.Vector3(wx + 1.5, terrainY + 1.2, wz + 1.25)
      ),
    });
    
    group.add(altar);
  }
  
  /**
   * Create smaller shrine altar
   */
  _createSmallAltar(group, lx, lz, ruin) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const wx = ruin.x + lx * cos - lz * sin;
    const wz = ruin.z + lx * sin + lz * cos;
    const terrainY = this.terrain.getTerrainHeight(wx, wz);
    
    const altar = new THREE.Group();
    altar.position.set(lx, terrainY, lz);
    
    // Simple stone pedestal
    const pedestalGeo = new THREE.CylinderGeometry(0.6, 0.8, 0.8, 8);
    const pedestal = new THREE.Mesh(pedestalGeo, this.materials.altarStone);
    pedestal.position.y = 0.4;
    pedestal.castShadow = true;
    pedestal.receiveShadow = true;
    altar.add(pedestal);
    
    // Offering bowl
    const bowlGeo = new THREE.TorusGeometry(0.3, 0.08, 8, 12);
    const bowl = new THREE.Mesh(bowlGeo, this.materials.ancientStone);
    bowl.rotation.x = Math.PI / 2;
    bowl.position.y = 0.85;
    altar.add(bowl);
    
    // Subtle glow
    const glowLight = new THREE.PointLight(0x4488aa, 0.3, 5);
    glowLight.position.y = 1.2;
    altar.add(glowLight);
    
    // Add collision
    this.colliders.push({
      type: 'cylinder',
      position: new THREE.Vector3(wx, terrainY, wz),
      radius: 0.9,
      height: 1,
    });
    
    group.add(altar);
  }
  
  /**
   * Create offering stones around shrine
   */
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
      stone.scale.y = 0.6; // Flatten
      stone.castShadow = true;
      group.add(stone);
    }
  }
  
  /**
   * Create tall obelisk monument
   */
  _createObelisk(group, lx, lz, terrainY) {
    const obelisk = new THREE.Group();
    obelisk.position.set(lx, terrainY, lz);
    
    // Base
    const baseGeo = new THREE.BoxGeometry(2.5, 0.6, 2.5);
    const base = new THREE.Mesh(baseGeo, this.materials.altarStone);
    base.position.y = 0.3;
    base.castShadow = true;
    base.receiveShadow = true;
    obelisk.add(base);
    
    // Obelisk shaft (tapered)
    const obeliskHeight = 6 + Math.random() * 2;
    const shaftGeo = new THREE.CylinderGeometry(0.3, 0.8, obeliskHeight, 4);
    const shaft = new THREE.Mesh(shaftGeo, this.materials.ancientStone);
    shaft.position.y = 0.6 + obeliskHeight / 2;
    shaft.rotation.y = Math.PI / 4;
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    obelisk.add(shaft);
    
    // Glowing apex
    const apexGeo = new THREE.ConeGeometry(0.4, 0.6, 4);
    const apex = new THREE.Mesh(apexGeo, this.materials.runeGlow);
    apex.position.y = 0.6 + obeliskHeight + 0.3;
    apex.rotation.y = Math.PI / 4;
    obelisk.add(apex);
    
    // Glow light
    const glowLight = new THREE.PointLight(0x4488aa, 0.8, 12);
    glowLight.position.y = obeliskHeight + 1;
    obelisk.add(glowLight);
    
    // Add collision
    this.colliders.push({
      type: 'box',
      bounds: new THREE.Box3(
        new THREE.Vector3(lx - 1.25, terrainY, lz - 1.25),
        new THREE.Vector3(lx + 1.25, terrainY + obeliskHeight + 1, lz + 1.25)
      ),
    });
    
    group.add(obelisk);
  }
  
  /**
   * Create stone debris
   */
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
      piece.rotation.set(
        Math.random() * 0.4,
        Math.random() * Math.PI,
        Math.random() * 0.4
      );
      piece.castShadow = true;
      debris.add(piece);
    }
    
    group.add(debris);
  }
  
  /**
   * Create ruined mausoleum
   */
  _createMausoleum(group, lx, lz, ruin) {
    const cos = Math.cos(ruin.rotation);
    const sin = Math.sin(ruin.rotation);
    const wx = ruin.x + lx * cos - lz * sin;
    const wz = ruin.z + lx * sin + lz * cos;
    const terrainY = this.terrain.getTerrainHeight(wx, wz);
    
    const mauso = new THREE.Group();
    mauso.position.set(lx, terrainY, lz);
    
    // Base/floor
    const baseGeo = new THREE.BoxGeometry(5, 0.3, 4);
    const base = new THREE.Mesh(baseGeo, this.materials.altarStone);
    base.position.y = 0.15;
    base.castShadow = true;
    base.receiveShadow = true;
    mauso.add(base);
    
    // Ruined walls (partially standing)
    // Back wall
    const backWallGeo = new THREE.BoxGeometry(5, 2.5, 0.4);
    const backWall = new THREE.Mesh(backWallGeo, this.materials.mossyStone);
    backWall.position.set(0, 1.25 + 0.3, -1.8);
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    mauso.add(backWall);
    
    // Side walls (partial)
    const leftWallGeo = new THREE.BoxGeometry(0.4, 1.8, 3.2);
    const leftWall = new THREE.Mesh(leftWallGeo, this.materials.mossyStone);
    leftWall.position.set(-2.3, 0.9 + 0.3, -0.2);
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    mauso.add(leftWall);
    
    const rightWallGeo = new THREE.BoxGeometry(0.4, 2.2, 3.2);
    const rightWall = new THREE.Mesh(rightWallGeo, this.materials.mossyStone);
    rightWall.position.set(2.3, 1.1 + 0.3, -0.2);
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    mauso.add(rightWall);
    
    // Sarcophagus in center
    const sarcGeo = new THREE.BoxGeometry(2.2, 0.8, 1.2);
    const sarc = new THREE.Mesh(sarcGeo, this.materials.altarStone);
    sarc.position.set(0, 0.7, -0.5);
    sarc.castShadow = true;
    sarc.receiveShadow = true;
    mauso.add(sarc);
    
    // Lid (slightly askew)
    const lidGeo = new THREE.BoxGeometry(2.3, 0.2, 1.3);
    const lid = new THREE.Mesh(lidGeo, this.materials.ancientStone);
    lid.position.set(0.1, 1.2, -0.4);
    lid.rotation.y = 0.08;
    lid.castShadow = true;
    mauso.add(lid);
    
    // Add collision for the structure
    this.colliders.push({
      type: 'box',
      bounds: new THREE.Box3(
        new THREE.Vector3(wx - 2.5, terrainY, wz - 2),
        new THREE.Vector3(wx + 2.5, terrainY + 2.8, wz + 2)
      ),
    });
    
    group.add(mauso);
  }
  
  /**
   * Create a headstone
   */
  _createHeadstone(group, lx, lz, terrainY, ruin) {
    const headstone = new THREE.Group();
    headstone.position.set(lx, terrainY, lz);
    headstone.rotation.y = Math.random() * 0.4 - 0.2; // Slight tilt
    
    // Stone slab (varied shapes)
    const height = 0.6 + Math.random() * 0.4;
    const width = 0.4 + Math.random() * 0.3;
    const stoneGeo = new THREE.BoxGeometry(width, height, 0.12);
    const stone = new THREE.Mesh(stoneGeo, this.materials.mossyStone);
    stone.position.y = height / 2;
    
    // Tilt some headstones
    if (Math.random() > 0.6) {
      stone.rotation.x = (Math.random() - 0.5) * 0.3;
      stone.rotation.z = (Math.random() - 0.5) * 0.2;
    }
    
    stone.castShadow = true;
    headstone.add(stone);
    
    group.add(headstone);
  }
  
  /**
   * Get ruins data (for enemy spawning, quests)
   */
  getRuins() {
    return this.ruins;
  }
  
  /**
   * Check if position is near a ruin site (for spawning)
   */
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
  
  /**
   * Get nearby ruin for enemy camp spawning
   */
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
