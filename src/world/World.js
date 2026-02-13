import * as THREE from 'three';

export class World {
  constructor(scene) {
    this.scene = scene;
    this.colliders = []; // For collision detection
    this.doors = []; // Locked doors
    this.hiddenWalls = []; // Illusory walls
    this.bonfirePosition = new THREE.Vector3(0, 0, 5);
    
    this._createSkybox();
    this._createCathedral();
    this._createLighting();
    this._createEnvironmentProps();
  }
  
  _createSkybox() {
    // Create a dramatic fantasy sky using a large dome/sphere
    const skyGeo = new THREE.SphereGeometry(180, 32, 32);
    
    // Shader material for gradient sky with stars - BRIGHTER twilight colors
    const skyMat = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x1a2040) },  // Rich deep blue (brighter)
        midColor: { value: new THREE.Color(0x4a2858) },  // Vibrant purple horizon
        botColor: { value: new THREE.Color(0x6a4020) },  // Warm amber/orange glow
        starDensity: { value: 0.003 },
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 midColor;
        uniform vec3 botColor;
        uniform float starDensity;
        varying vec3 vWorldPosition;
        
        // Simple hash for stars
        float hash(vec2 p) {
          return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
        }
        
        void main() {
          float h = normalize(vWorldPosition).y;
          
          // Sky gradient
          vec3 sky;
          if (h > 0.0) {
            sky = mix(midColor, topColor, pow(h, 0.5));
          } else {
            sky = mix(midColor, botColor, pow(-h, 0.3));
          }
          
          // Add stars in upper sky
          if (h > 0.1) {
            vec2 starUV = vWorldPosition.xz * 0.02;
            float star = hash(floor(starUV * 100.0));
            if (star > 0.997) {
              float twinkle = 0.5 + 0.5 * sin(star * 1000.0 + vWorldPosition.x * 0.1);
              sky += vec3(twinkle * (h - 0.1) * 2.0);
            }
          }
          
          // Subtle aurora effect near horizon
          float aurora = sin(vWorldPosition.x * 0.03 + vWorldPosition.z * 0.02) * 0.5 + 0.5;
          aurora *= smoothstep(0.0, 0.3, h) * smoothstep(0.5, 0.2, h);
          sky += vec3(0.1, 0.2, 0.3) * aurora * 0.3;
          
          gl_FragColor = vec4(sky, 1.0);
        }
      `,
      side: THREE.BackSide,
    });
    
    const sky = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(sky);
    
    // Add a subtle moon
    const moonGeo = new THREE.CircleGeometry(8, 32);
    const moonMat = new THREE.MeshBasicMaterial({
      color: 0xeeeedd,
      transparent: true,
      opacity: 0.8,
    });
    const moon = new THREE.Mesh(moonGeo, moonMat);
    moon.position.set(-50, 80, -100);
    moon.lookAt(0, 0, 0);
    this.scene.add(moon);
    
    // Moon glow
    const glowGeo = new THREE.CircleGeometry(15, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xaaaacc,
      transparent: true,
      opacity: 0.15,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.copy(moon.position);
    glow.lookAt(0, 0, 0);
    this.scene.add(glow);
  }
  
  _createEnvironmentProps() {
    // Add atmospheric details outside the cathedral
    
    // Dead trees around the courtyard
    const treePositions = [
      [-12, 8], [14, 6], [-10, -5], [12, -8],
      [-15, -15], [16, -20], [-14, -35], [15, -45],
    ];
    
    treePositions.forEach(([x, z]) => {
      this._createDeadTree(x, z);
    });
    
    // Gravestones scattered outside
    const gravePositions = [
      [-11, 0], [-13, -2], [13, 2], [11, -3],
      [-16, -10], [14, -12], [-15, -40], [17, -38],
    ];
    
    gravePositions.forEach(([x, z]) => {
      this._createGravestone(x, z);
    });
    
    // Grass tufts for ground coverage
    this._scatterGrass(0, -40, 35, 90, 200);
    
    // Glowing runes on the floor
    this._createFloorRunes();
    
    // Add glowing mushrooms and crystals for magical atmosphere
    this._createGlowingMushrooms();
    this._createMagicalCrystals();
  }
  
  _createGlowingMushrooms() {
    // Bioluminescent mushrooms scattered in dark corners
    const mushroomPositions = [
      // Near trees and gravestones
      { pos: [-11, 0, 7], color: 0x44ffaa, scale: 0.8 },
      { pos: [13, 0, 5], color: 0x66ff88, scale: 0.6 },
      { pos: [-12, 0, -6], color: 0x44ffaa, scale: 0.7 },
      { pos: [11, 0, -4], color: 0x88ffbb, scale: 0.5 },
      // Along walls of cathedral
      { pos: [-8, 0, -18], color: 0x44ddff, scale: 0.9 },
      { pos: [8, 0, -18], color: 0x44ddff, scale: 0.7 },
      { pos: [-8, 0, -38], color: 0x66aaff, scale: 0.6 },
      { pos: [8, 0, -38], color: 0x66aaff, scale: 0.8 },
      // In crypt area
      { pos: [-5, 0, -68], color: 0xaa66ff, scale: 0.9 },
      { pos: [5, 0, -72], color: 0xaa66ff, scale: 0.7 },
      { pos: [-3, 0, -80], color: 0xcc88ff, scale: 0.6 },
      { pos: [4, 0, -78], color: 0xcc88ff, scale: 0.5 },
    ];
    
    mushroomPositions.forEach(({ pos, color, scale }) => {
      const group = new THREE.Group();
      group.position.set(...pos);
      group.scale.setScalar(scale);
      
      // Mushroom stem
      const stemGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.3, 8);
      const stemMat = new THREE.MeshStandardMaterial({
        color: 0xccccaa,
        roughness: 0.8,
        emissive: color,
        emissiveIntensity: 0.2,
      });
      const stem = new THREE.Mesh(stemGeo, stemMat);
      stem.position.y = 0.15;
      group.add(stem);
      
      // Glowing cap
      const capGeo = new THREE.SphereGeometry(0.2, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
      const capMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.8,
        roughness: 0.3,
        transparent: true,
        opacity: 0.9,
      });
      const cap = new THREE.Mesh(capGeo, capMat);
      cap.position.y = 0.3;
      group.add(cap);
      
      // Light from mushroom
      const light = new THREE.PointLight(color, 0.6, 4);
      light.position.y = 0.4;
      group.add(light);
      
      this.scene.add(group);
    });
  }
  
  _createMagicalCrystals() {
    // Glowing crystals emerging from ground/walls
    const crystalPositions = [
      // Main hall pillars
      { pos: [-4, 0, -15], color: 0x6688ff, scale: 1.2, rot: 0.2 },
      { pos: [4, 0, -15], color: 0x6688ff, scale: 1.0, rot: -0.3 },
      { pos: [-4, 0, -30], color: 0x8866ff, scale: 0.9, rot: 0.15 },
      { pos: [4, 0, -30], color: 0x8866ff, scale: 1.1, rot: -0.2 },
      // Near altar
      { pos: [-3, 0, -52], color: 0xffaa44, scale: 1.3, rot: 0.1 },
      { pos: [3, 0, -52], color: 0xffaa44, scale: 1.1, rot: -0.1 },
      // Boss arena corners
      { pos: [-6, 0, -88], color: 0xff4466, scale: 1.5, rot: 0.25 },
      { pos: [6, 0, -88], color: 0xff4466, scale: 1.4, rot: -0.2 },
      { pos: [-6, 0, -102], color: 0xff6644, scale: 1.2, rot: 0.3 },
      { pos: [6, 0, -102], color: 0xff6644, scale: 1.3, rot: -0.25 },
    ];
    
    crystalPositions.forEach(({ pos, color, scale, rot }) => {
      const group = new THREE.Group();
      group.position.set(...pos);
      group.scale.setScalar(scale);
      group.rotation.z = rot;
      
      // Main crystal shard
      const crystalGeo = new THREE.ConeGeometry(0.15, 0.8, 6);
      const crystalMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 1.0,
        roughness: 0.1,
        metalness: 0.3,
        transparent: true,
        opacity: 0.85,
      });
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      crystal.position.y = 0.4;
      group.add(crystal);
      
      // Smaller side shards
      for (let i = 0; i < 3; i++) {
        const smallGeo = new THREE.ConeGeometry(0.08, 0.4, 5);
        const small = new THREE.Mesh(smallGeo, crystalMat);
        const angle = (i / 3) * Math.PI * 2;
        small.position.set(
          Math.cos(angle) * 0.15,
          0.2,
          Math.sin(angle) * 0.15
        );
        small.rotation.z = Math.random() * 0.4 - 0.2;
        small.rotation.x = Math.random() * 0.3;
        group.add(small);
      }
      
      // Crystal light
      const light = new THREE.PointLight(color, 1.2, 6);
      light.position.y = 0.5;
      group.add(light);
      
      this.scene.add(group);
    });
  }
  
  _createDeadTree(x, z) {
    const group = new THREE.Group();
    group.position.set(x, 0, z);
    group.rotation.y = Math.random() * Math.PI * 2;
    
    // Trunk - gnarled wood
    const trunkMat = new THREE.MeshStandardMaterial({
      color: 0x2a1a10,
      roughness: 0.95,
    });
    
    const trunkGeo = new THREE.CylinderGeometry(0.2, 0.4, 4, 6);
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 2;
    trunk.rotation.z = (Math.random() - 0.5) * 0.2;
    trunk.castShadow = true;
    group.add(trunk);
    
    // Branches
    for (let i = 0; i < 4; i++) {
      const branchGeo = new THREE.CylinderGeometry(0.03, 0.12, 2, 4);
      const branch = new THREE.Mesh(branchGeo, trunkMat);
      branch.position.set(0, 3 + i * 0.3, 0);
      branch.rotation.z = 0.3 + Math.random() * 0.8;
      branch.rotation.y = i * Math.PI / 2 + Math.random() * 0.5;
      branch.castShadow = true;
      group.add(branch);
    }
    
    this.scene.add(group);
  }
  
  _createGravestone(x, z) {
    const mat = new THREE.MeshStandardMaterial({
      color: 0x3a3a40,
      roughness: 0.9,
    });
    
    // Random style
    const style = Math.floor(Math.random() * 3);
    let geo;
    
    if (style === 0) {
      // Simple rectangle
      geo = new THREE.BoxGeometry(0.6, 1.2, 0.15);
    } else if (style === 1) {
      // Rounded top (approximate with box + sphere)
      geo = new THREE.BoxGeometry(0.5, 1.0, 0.12);
    } else {
      // Cross shape
      geo = new THREE.BoxGeometry(0.15, 1.4, 0.1);
    }
    
    const stone = new THREE.Mesh(geo, mat);
    stone.position.set(x, style === 2 ? 0.7 : 0.5, z);
    stone.rotation.y = Math.random() * 0.4 - 0.2;
    stone.rotation.x = Math.random() * 0.1 - 0.05;
    stone.castShadow = true;
    stone.receiveShadow = true;
    this.scene.add(stone);
    
    // Cross arm for style 2
    if (style === 2) {
      const armGeo = new THREE.BoxGeometry(0.5, 0.1, 0.08);
      const arm = new THREE.Mesh(armGeo, mat);
      arm.position.set(x, 1.0, z);
      arm.rotation.y = stone.rotation.y;
      arm.castShadow = true;
      this.scene.add(arm);
    }
  }
  
  _scatterGrass(cx, cz, w, h, count) {
    const grassMat = new THREE.MeshStandardMaterial({
      color: 0x2a3a20,
      roughness: 0.9,
      side: THREE.DoubleSide,
    });
    
    for (let i = 0; i < count; i++) {
      const x = cx + (Math.random() - 0.5) * w;
      const z = cz + (Math.random() - 0.5) * h;
      
      // Simple grass blade using plane
      const bladeGeo = new THREE.PlaneGeometry(0.1, 0.3 + Math.random() * 0.3);
      const blade = new THREE.Mesh(bladeGeo, grassMat);
      blade.position.set(x, 0.15, z);
      blade.rotation.y = Math.random() * Math.PI;
      blade.rotation.x = -0.1;
      this.scene.add(blade);
    }
  }
  
  _createFloorRunes() {
    // Glowing runes at key locations - ENHANCED for visibility
    const runePositions = [
      { pos: [0, 0.02, -25], size: 4, color: 0x6666cc },   // Main hall center
      { pos: [0, 0.02, -55], size: 3, color: 0xcc8833 },   // Altar
      { pos: [0, 0.02, -95], size: 5, color: 0xcc3333 },   // Boss arena
      // Additional runes for better environment visibility
      { pos: [0, 0.02, 0], size: 3, color: 0x44aa88 },     // Bonfire area
      { pos: [0, 0.02, -42], size: 2.5, color: 0x8866aa }, // Transition hall
      { pos: [0, 0.02, -72], size: 2.5, color: 0x5588cc }, // Crypt area
    ];
    
    runePositions.forEach(({ pos, size, color }) => {
      // Outer rune circle - brighter
      const ringGeo = new THREE.RingGeometry(size - 0.1, size, 32);
      const runeMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.6,  // Increased from 0.3
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(ringGeo, runeMat);
      ring.rotation.x = -Math.PI / 2;
      ring.position.set(...pos);
      this.scene.add(ring);
      
      // Inner hexagon pattern
      const innerGeo = new THREE.RingGeometry(size * 0.4, size * 0.5, 6);
      const inner = new THREE.Mesh(innerGeo, runeMat);
      inner.rotation.x = -Math.PI / 2;
      inner.position.set(...pos);
      this.scene.add(inner);
      
      // Innermost glow disc
      const discGeo = new THREE.CircleGeometry(size * 0.3, 16);
      const discMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
      });
      const disc = new THREE.Mesh(discGeo, discMat);
      disc.rotation.x = -Math.PI / 2;
      disc.position.set(pos[0], pos[1] + 0.01, pos[2]);
      this.scene.add(disc);
      
      // Stronger floor glow light
      const light = new THREE.PointLight(color, 1.5, size * 3);  // Increased intensity and range
      light.position.set(pos[0], pos[1] + 0.5, pos[2]);
      this.scene.add(light);
    });
  }

  _createCathedral() {
    // Create procedural stone texture
    const stoneCanvas = document.createElement('canvas');
    stoneCanvas.width = 256;
    stoneCanvas.height = 256;
    const ctx = stoneCanvas.getContext('2d');
    
    // Base color with noise
    ctx.fillStyle = '#3a3840';
    ctx.fillRect(0, 0, 256, 256);
    
    // Add stone texture variation
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * 256;
      const y = Math.random() * 256;
      const size = Math.random() * 3 + 1;
      const brightness = Math.floor(Math.random() * 30);
      ctx.fillStyle = `rgb(${50 + brightness}, ${48 + brightness}, ${55 + brightness})`;
      ctx.fillRect(x, y, size, size);
    }
    
    // Add mortar lines (grid pattern for bricks)
    ctx.strokeStyle = '#252228';
    ctx.lineWidth = 2;
    for (let y = 0; y < 256; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(256, y);
      ctx.stroke();
    }
    for (let x = 0; x < 256; x += 64) {
      for (let y = 0; y < 256; y += 64) {
        ctx.beginPath();
        ctx.moveTo(x + (y % 64 === 0 ? 0 : 32), y);
        ctx.lineTo(x + (y % 64 === 0 ? 0 : 32), y + 32);
        ctx.stroke();
      }
    }
    
    const stoneTexture = new THREE.CanvasTexture(stoneCanvas);
    stoneTexture.wrapS = THREE.RepeatWrapping;
    stoneTexture.wrapT = THREE.RepeatWrapping;
    stoneTexture.repeat.set(2, 2);
    
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x4a4850,
      roughness: 0.85,
      metalness: 0.1,
      map: stoneTexture,
    });
    
    // Dark crypt stone - purplish tint
    const darkStoneMat = new THREE.MeshStandardMaterial({
      color: 0x2a2535,
      roughness: 0.9,
      metalness: 0.05,
      map: stoneTexture,
    });
    
    // Floor with different texture
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 256;
    floorCanvas.height = 256;
    const fctx = floorCanvas.getContext('2d');
    
    // Cobblestone pattern
    fctx.fillStyle = '#2a2830';
    fctx.fillRect(0, 0, 256, 256);
    
    // Random stone shapes
    for (let i = 0; i < 25; i++) {
      const x = (i % 5) * 52 + Math.random() * 10;
      const y = Math.floor(i / 5) * 52 + Math.random() * 10;
      const w = 40 + Math.random() * 10;
      const h = 40 + Math.random() * 10;
      const brightness = Math.floor(Math.random() * 20);
      fctx.fillStyle = `rgb(${38 + brightness}, ${36 + brightness}, ${42 + brightness})`;
      fctx.beginPath();
      fctx.roundRect(x, y, w, h, 5);
      fctx.fill();
      fctx.strokeStyle = '#1a1820';
      fctx.lineWidth = 2;
      fctx.stroke();
    }
    
    const floorTexture = new THREE.CanvasTexture(floorCanvas);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(4, 4);
    
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x3a3840,
      roughness: 0.95,
      metalness: 0.05,
      map: floorTexture,
    });

    // === ENTRANCE COURTYARD (Spawn Area) ===
    this._createFloorSection(0, 0, 16, 16, floorMat);
    this._createBonfire(this.bonfirePosition);
    
    // Courtyard walls with archway to cathedral
    this._createWall(-8, 2, -8, 1, 6, 16, stoneMat); // Left wall
    this._createWall(8, 2, -8, 1, 6, 16, stoneMat);  // Right wall
    this._createWall(0, 2, 0, 16, 6, 1, stoneMat);   // Back wall (behind spawn)
    
    // === MAIN CATHEDRAL HALL ===
    this._createFloorSection(0, -30, 20, 40, floorMat);
    
    // Main hall pillars (Gothic style - 2 rows)
    const pillarPositions = [
      [-6, -12], [6, -12],
      [-6, -22], [6, -22],
      [-6, -32], [6, -32],
      [-6, -42], [6, -42],
    ];
    pillarPositions.forEach(([x, z]) => {
      this._createPillar(x, z, stoneMat);
    });
    
    // Main hall walls
    this._createWall(-10, 4, -30, 1, 10, 44, stoneMat); // Left wall
    this._createWall(10, 4, -30, 1, 10, 44, stoneMat);  // Right wall
    
    // === LEFT SIDE CHAPEL (accessible from main hall) ===
    this._createFloorSection(-18, -25, 12, 14, floorMat);
    // Opening in main hall left wall for chapel access
    this._createWall(-10, 4, -18, 1, 10, 6, stoneMat);  // Wall before opening
    this._createWall(-10, 4, -38, 1, 10, 10, stoneMat); // Wall after opening
    // Chapel outer walls
    this._createWall(-24, 3, -25, 1, 8, 14, stoneMat);
    this._createWall(-18, 3, -32, 12, 8, 1, stoneMat);
    this._createWall(-18, 3, -18, 12, 8, 1, stoneMat);
    
    // Chapel altar
    const altarGeo = new THREE.BoxGeometry(3, 1.2, 1.5);
    const altarMat = new THREE.MeshStandardMaterial({ color: 0x333340, roughness: 0.7 });
    const altar = new THREE.Mesh(altarGeo, altarMat);
    altar.position.set(-21, 0.6, -25);
    altar.castShadow = true;
    altar.receiveShadow = true;
    this.scene.add(altar);
    
    // === RIGHT SIDE CHAPEL (hidden path inside) ===
    this._createFloorSection(18, -25, 12, 14, floorMat);
    this._createWall(10, 4, -18, 1, 10, 6, stoneMat);
    this._createWall(10, 4, -38, 1, 10, 10, stoneMat);
    this._createWall(24, 3, -25, 1, 8, 14, stoneMat);
    this._createWall(18, 3, -32, 12, 8, 1, stoneMat);
    this._createWall(18, 3, -18, 12, 8, 1, stoneMat);
    
    // HIDDEN PATH: Illusory wall in right chapel leading to secret room
    this._createHiddenWall(21, 3, -32, 4, 6, 0.5, stoneMat, 'chapel-secret');
    this._createFloorSection(21, -38, 6, 8, floorMat); // Secret room behind
    this._createWall(18, 3, -42, 6, 6, 1, stoneMat);
    this._createWall(24, 3, -38, 1, 6, 8, stoneMat);
    
    // === ALTAR ROOM (end of main hall) ===
    this._createFloorSection(0, -55, 16, 10, floorMat);
    this._createWall(-8, 5, -55, 1, 12, 10, stoneMat);
    this._createWall(8, 5, -55, 1, 12, 10, stoneMat);
    this._createWall(0, 5, -60, 16, 12, 1, stoneMat);
    
    // Grand altar
    const grandAltarGeo = new THREE.BoxGeometry(6, 1.5, 2);
    const grandAltar = new THREE.Mesh(grandAltarGeo, altarMat);
    grandAltar.position.set(0, 0.75, -58);
    grandAltar.castShadow = true;
    grandAltar.receiveShadow = true;
    this.scene.add(grandAltar);
    
    // Altar candles
    for (let i = -2; i <= 2; i++) {
      this._createCandle(i * 1.2, -57.5);
    }
    
    // === CRYPT ENTRANCE (locked door from altar room) ===
    this._createLockedDoor(0, 2.5, -50.5, 3, 5, 0.3, 'crypt-key', 'Crypt Door');
    
    // === CRYPT (below/behind altar) ===
    this._createFloorSection(0, -70, 20, 20, darkStoneMat);
    
    // Crypt pillars
    const cryptPillars = [
      [-6, -65], [6, -65],
      [-6, -75], [6, -75],
    ];
    cryptPillars.forEach(([x, z]) => {
      this._createPillar(x, z, darkStoneMat, 4);
    });
    
    // Crypt walls
    this._createWall(-10, 3, -70, 1, 6, 20, darkStoneMat);
    this._createWall(10, 3, -70, 1, 6, 20, darkStoneMat);
    this._createWall(0, 3, -80, 20, 6, 1, darkStoneMat);
    
    // Crypt tombs
    for (let i = 0; i < 6; i++) {
      const tombGeo = new THREE.BoxGeometry(1.8, 0.8, 3);
      const tombMat = new THREE.MeshStandardMaterial({ color: 0x222228 });
      const tomb = new THREE.Mesh(tombGeo, tombMat);
      const side = i % 2 === 0 ? -1 : 1;
      tomb.position.set(side * 7, 0.4, -62 - Math.floor(i / 2) * 6);
      tomb.castShadow = true;
      tomb.receiveShadow = true;
      this.scene.add(tomb);
    }
    
    // BOSS ARENA (at back of crypt)
    this._createFloorSection(0, -95, 24, 16, darkStoneMat);
    this._createWall(-12, 4, -95, 1, 10, 16, darkStoneMat);
    this._createWall(12, 4, -95, 1, 10, 16, darkStoneMat);
    this._createWall(0, 4, -103, 24, 10, 1, darkStoneMat);
    
    // Boss arena pillars
    const bossPillars = [
      [-8, -88], [8, -88],
      [-8, -102], [8, -102],
    ];
    bossPillars.forEach(([x, z]) => {
      this._createPillar(x, z, darkStoneMat, 6);
    });
    
    // === SCATTERED DEBRIS ===
    this._scatterDebris(0, -30, 40, 60, 30, stoneMat);
  }
  
  _createFloorSection(x, z, width, depth, mat) {
    const geo = new THREE.PlaneGeometry(width, depth, Math.floor(width), Math.floor(depth));
    
    // Subtle height variation
    const pos = geo.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const px = pos.getX(i);
      const pz = pos.getY(i);
      pos.setZ(i, (Math.sin(px * 0.3) * Math.cos(pz * 0.3) * 0.05));
    }
    geo.computeVertexNormals();
    
    const floor = new THREE.Mesh(geo, mat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(x, 0, z);
    floor.receiveShadow = true;
    this.scene.add(floor);
  }
  
  _createWall(x, y, z, width, height, depth, mat) {
    const geo = new THREE.BoxGeometry(width, height, depth);
    const wall = new THREE.Mesh(geo, mat);
    wall.position.set(x, y, z);
    wall.castShadow = true;
    wall.receiveShadow = true;
    this.scene.add(wall);
    
    // Add to colliders for future collision detection
    this.colliders.push({
      type: 'box',
      mesh: wall,
      bounds: new THREE.Box3().setFromObject(wall),
    });
  }
  
  _createPillar(x, z, mat, height = 8) {
    // Base
    const baseGeo = new THREE.CylinderGeometry(0.8, 0.9, 0.5, 8);
    const base = new THREE.Mesh(baseGeo, mat);
    base.position.set(x, 0.25, z);
    base.castShadow = true;
    base.receiveShadow = true;
    this.scene.add(base);
    
    // Main shaft
    const shaftGeo = new THREE.CylinderGeometry(0.5, 0.6, height - 1, 8);
    const shaft = new THREE.Mesh(shaftGeo, mat);
    shaft.position.set(x, height / 2, z);
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    this.scene.add(shaft);
    
    // Capital
    const capGeo = new THREE.CylinderGeometry(0.9, 0.5, 0.6, 8);
    const cap = new THREE.Mesh(capGeo, mat);
    cap.position.set(x, height - 0.3, z);
    cap.castShadow = true;
    cap.receiveShadow = true;
    this.scene.add(cap);
    
    this.colliders.push({
      type: 'cylinder',
      position: new THREE.Vector3(x, height / 2, z),
      radius: 0.6,
    });
  }
  
  _createCandle(x, z) {
    const candleGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.3, 6);
    const candleMat = new THREE.MeshStandardMaterial({ color: 0xeeeecc });
    const candle = new THREE.Mesh(candleGeo, candleMat);
    candle.position.set(x, 1.65, z);
    this.scene.add(candle);
    
    // Flame light
    const light = new THREE.PointLight(0xff6622, 0.5, 4);
    light.position.set(x, 1.9, z);
    this.scene.add(light);
    
    // Animate flame
    const baseIntensity = 0.4;
    const animate = () => {
      requestAnimationFrame(animate);
      light.intensity = baseIntensity + Math.sin(Date.now() * 0.015 + x * 100) * 0.15 + Math.random() * 0.1;
    };
    animate();
  }
  
  _createHiddenWall(x, y, z, width, height, depth, mat, id) {
    const geo = new THREE.BoxGeometry(width, height, depth);
    const hiddenMat = mat.clone();
    const wall = new THREE.Mesh(geo, hiddenMat);
    wall.position.set(x, y, z);
    wall.castShadow = true;
    wall.receiveShadow = true;
    wall.userData.isHidden = true;
    wall.userData.hiddenId = id;
    this.scene.add(wall);
    
    this.hiddenWalls.push({
      id,
      mesh: wall,
      revealed: false,
      bounds: new THREE.Box3().setFromObject(wall),
    });
    
    return wall;
  }
  
  _createLockedDoor(x, y, z, width, height, depth, keyId, name) {
    const doorGeo = new THREE.BoxGeometry(width, height, depth);
    const doorMat = new THREE.MeshStandardMaterial({
      color: 0x3a2a1a,
      roughness: 0.7,
      metalness: 0.2,
    });
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.set(x, y, z);
    door.castShadow = true;
    door.receiveShadow = true;
    this.scene.add(door);
    
    // Door frame
    const frameGeo = new THREE.BoxGeometry(width + 0.4, height + 0.4, depth + 0.1);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x222228 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.set(x, y, z - 0.05);
    this.scene.add(frame);
    
    // Lock indicator (red gem when locked)
    const lockGeo = new THREE.SphereGeometry(0.15, 8, 8);
    const lockMat = new THREE.MeshStandardMaterial({
      color: 0xff2222,
      emissive: 0x660000,
      emissiveIntensity: 0.5,
    });
    const lock = new THREE.Mesh(lockGeo, lockMat);
    lock.position.set(x, y + 0.5, z + 0.2);
    this.scene.add(lock);
    
    const doorData = {
      id: keyId,
      name,
      mesh: door,
      lock,
      isOpen: false,
      bounds: new THREE.Box3().setFromObject(door),
    };
    
    this.doors.push(doorData);
    this.colliders.push({
      type: 'door',
      door: doorData,
      bounds: doorData.bounds,
    });
    
    return doorData;
  }
  
  // Try to open a door if player has the key
  tryOpenDoor(doorId, inventory) {
    const door = this.doors.find(d => d.id === doorId);
    if (!door || door.isOpen) return false;
    
    if (inventory && inventory.hasKey(doorId)) {
      door.isOpen = true;
      door.mesh.visible = false;
      door.lock.material.color.setHex(0x22ff22);
      door.lock.material.emissive.setHex(0x006600);
      
      // Remove from colliders
      const idx = this.colliders.findIndex(c => c.door === door);
      if (idx >= 0) this.colliders.splice(idx, 1);
      
      return true;
    }
    return false;
  }
  
  // Check if near a door
  getNearbyDoor(position, maxDist = 2.5) {
    for (const door of this.doors) {
      if (door.isOpen) continue;
      const dist = position.distanceTo(door.mesh.position);
      if (dist < maxDist) return door;
    }
    return null;
  }
  
  // Reveal hidden wall when attacked
  revealHiddenWall(wallId) {
    const wall = this.hiddenWalls.find(w => w.id === wallId);
    if (!wall || wall.revealed) return false;
    
    wall.revealed = true;
    
    // Fade out effect
    const mat = wall.mesh.material;
    mat.transparent = true;
    let opacity = 1;
    const fadeOut = () => {
      opacity -= 0.05;
      mat.opacity = opacity;
      if (opacity > 0) {
        requestAnimationFrame(fadeOut);
      } else {
        this.scene.remove(wall.mesh);
      }
    };
    fadeOut();
    
    return true;
  }
  
  // Check if attack hits a hidden wall
  checkHiddenWallHit(attackPos, range) {
    for (const wall of this.hiddenWalls) {
      if (wall.revealed) continue;
      const dist = attackPos.distanceTo(wall.mesh.position);
      if (dist < range + 2) {
        return wall;
      }
    }
    return null;
  }
  
  _scatterDebris(centerX, centerZ, width, depth, count, mat) {
    for (let i = 0; i < count; i++) {
      const size = 0.15 + Math.random() * 0.4;
      const geo = new THREE.BoxGeometry(size, size * 0.5, size);
      const debris = new THREE.Mesh(geo, mat);
      debris.position.set(
        centerX + (Math.random() - 0.5) * width,
        size * 0.25,
        centerZ + (Math.random() - 0.5) * depth
      );
      debris.rotation.y = Math.random() * Math.PI;
      debris.rotation.x = (Math.random() - 0.5) * 0.3;
      debris.castShadow = true;
      this.scene.add(debris);
    }
  }
  
  _createLighting() {
    // Hemisphere light for natural sky/ground bounce - EXTREME for visibility
    const hemiLight = new THREE.HemisphereLight(0xaaaadd, 0x887766, 8.0);
    this.scene.add(hemiLight);
    
    // Ambient for base visibility - VERY HIGH to see environment
    const ambient = new THREE.AmbientLight(0x8888bb, 6.0);
    this.scene.add(ambient);
    
    // Global overhead fill - ensures entire scene is lit
    const overheadFill = new THREE.DirectionalLight(0xccccee, 4.0);
    overheadFill.position.set(0, 100, 0);
    this.scene.add(overheadFill);
    
    // GLOBAL fill light - massive coverage for environment visibility
    const globalFill = new THREE.DirectionalLight(0x8888aa, 3.0);
    globalFill.position.set(0, 50, 0);
    globalFill.target.position.set(0, 0, -50);
    this.scene.add(globalFill);
    this.scene.add(globalFill.target);
    
    // Moonlight - main directional (silvery blue) - boosted
    const moonLight = new THREE.DirectionalLight(0xaabbee, 3.0);
    moonLight.position.set(-50, 80, -100);
    moonLight.castShadow = true;
    moonLight.shadow.mapSize.set(4096, 4096);
    moonLight.shadow.camera.near = 10;
    moonLight.shadow.camera.far = 200;
    moonLight.shadow.camera.left = -60;
    moonLight.shadow.camera.right = 60;
    moonLight.shadow.camera.top = 60;
    moonLight.shadow.camera.bottom = -60;
    moonLight.shadow.bias = -0.0001;
    this.scene.add(moonLight);
    
    // Secondary fill light (warm, from opposite direction) - boosted
    const fillLight = new THREE.DirectionalLight(0xcc8866, 0.8);
    fillLight.position.set(30, 20, 50);
    this.scene.add(fillLight);
    
    // Third fill light from front for player visibility
    const frontFill = new THREE.DirectionalLight(0x9999bb, 0.6);
    frontFill.position.set(0, 30, 100);
    this.scene.add(frontFill);
    
    // Accent lights throughout cathedral - BOOSTED for visibility
    const accents = [
      // Entrance courtyard - warm bonfire glow
      { pos: [0, 3, 5], color: 0xff6622, intensity: 4, dist: 20 },
      { pos: [0, 1, 5], color: 0xff4400, intensity: 3, dist: 12 }, // Low fire glow
      
      // Main hall - ethereal blue - BOOSTED
      { pos: [-6, 5, -12], color: 0x6688ee, intensity: 2.5, dist: 18 },
      { pos: [6, 5, -12], color: 0x6688ee, intensity: 2.5, dist: 18 },
      { pos: [-6, 5, -32], color: 0x5577dd, intensity: 2.0, dist: 18 },
      { pos: [6, 5, -32], color: 0x5577dd, intensity: 2.0, dist: 18 },
      { pos: [0, 4, -22], color: 0x6688cc, intensity: 2.0, dist: 20 }, // Center hall fill
      
      // Left chapel - blood red (corrupted altar) - BOOSTED
      { pos: [-21, 3, -25], color: 0xdd4444, intensity: 3, dist: 15 },
      { pos: [-18, 6, -25], color: 0xaa3333, intensity: 1.5, dist: 20 },
      
      // Right chapel - sickly green (poison/nature) - BOOSTED  
      { pos: [21, 3, -25], color: 0x66cc77, intensity: 3, dist: 15 },
      { pos: [18, 6, -25], color: 0x44aa55, intensity: 1.5, dist: 20 },
      
      // Secret room - golden treasure glow
      { pos: [21, 2, -40], color: 0xffdd66, intensity: 3.5, dist: 12 },
      
      // Altar room - holy golden light - BOOSTED
      { pos: [0, 4, -58], color: 0xffcc66, intensity: 4, dist: 20 },
      { pos: [-2, 2, -57], color: 0xffaa44, intensity: 2, dist: 8 }, // Candles
      { pos: [2, 2, -57], color: 0xffaa44, intensity: 2, dist: 8 },
      
      // Crypt - cold, deathly blue - BOOSTED
      { pos: [-6, 2, -65], color: 0x4466cc, intensity: 2, dist: 15 },
      { pos: [6, 2, -75], color: 0x4466cc, intensity: 2, dist: 15 },
      { pos: [0, 3, -70], color: 0x5577aa, intensity: 1.5, dist: 25 },
      
      // Boss arena - ominous red/purple - BOOSTED
      { pos: [-8, 4, -95], color: 0xaa3355, intensity: 3, dist: 20 },
      { pos: [8, 4, -95], color: 0xaa3355, intensity: 3, dist: 20 },
      { pos: [0, 8, -98], color: 0xcc4477, intensity: 4, dist: 30 }, // Central dramatic
      { pos: [0, 1, -95], color: 0x882244, intensity: 2.5, dist: 20 }, // Floor glow
    ];
    
    accents.forEach(({ pos, color, intensity, dist }) => {
      const light = new THREE.PointLight(color, intensity, dist);
      light.position.set(...pos);
      this.scene.add(light);
    });
    
    // Animated torch flames at pillar locations - BOOSTED for visibility
    const torchPositions = [
      [-6, 6, -12], [6, 6, -12],
      [-6, 6, -22], [6, 6, -22],
      [-6, 6, -32], [6, 6, -32],
      [-6, 6, -42], [6, 6, -42], // Added more torches
    ];
    
    torchPositions.forEach(pos => {
      const torch = new THREE.PointLight(0xff8844, 3.0, 16);
      torch.position.set(...pos);
      this.scene.add(torch);
      
      // Animate flicker - higher base intensity
      const baseIntensity = 3.0;
      const offset = Math.random() * 1000;
      const animate = () => {
        requestAnimationFrame(animate);
        torch.intensity = baseIntensity + 
          Math.sin(Date.now() * 0.01 + offset) * 0.5 + 
          Math.sin(Date.now() * 0.023 + offset) * 0.4 +
          Math.random() * 0.3;
      };
      animate();
    });
  }

  _createBonfire(position) {
    const group = new THREE.Group();
    group.position.copy(position);

    // Stone base
    const baseGeo = new THREE.CylinderGeometry(0.5, 0.6, 0.4, 12);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = 0.2;
    base.castShadow = true;
    group.add(base);
    
    // Inner ring
    const innerGeo = new THREE.TorusGeometry(0.35, 0.08, 8, 16);
    const innerMat = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    inner.rotation.x = Math.PI / 2;
    inner.position.y = 0.4;
    group.add(inner);

    // Fire light (animated separately)
    const fireLight = new THREE.PointLight(0xff6622, 2, 10);
    fireLight.position.y = 1;
    fireLight.castShadow = true;
    group.add(fireLight);

    // Fire particles
    const particleCount = 50;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 0.4;
      positions[i * 3 + 1] = Math.random() * 2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.4;

      const t = Math.random();
      colors[i * 3] = 1;
      colors[i * 3 + 1] = 0.2 + t * 0.5;
      colors[i * 3 + 2] = t * 0.1;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      const posAttr = particleGeo.attributes.position;
      for (let i = 0; i < particleCount; i++) {
        let y = posAttr.getY(i) + 0.025;
        if (y > 2) {
          y = 0;
          posAttr.setX(i, (Math.random() - 0.5) * 0.4);
          posAttr.setZ(i, (Math.random() - 0.5) * 0.4);
        }
        posAttr.setY(i, y);
        posAttr.setX(i, posAttr.getX(i) + (Math.random() - 0.5) * 0.008);
      }
      posAttr.needsUpdate = true;

      // Flicker
      fireLight.intensity = 1.8 + Math.sin(Date.now() * 0.012) * 0.4 + Math.random() * 0.3;
    };
    animate();

    this.scene.add(group);
  }
  
  // Get boss spawn position (in crypt boss arena)
  getBossPosition() {
    return new THREE.Vector3(0, 0, -95);
  }
  
  // Get enemy spawn positions for the cathedral
  getEnemySpawns() {
    return [
      // Entrance - easy enemy
      { pos: new THREE.Vector3(0, 0, -6), type: 'HOLLOW_SOLDIER' },
      
      // Main hall - scattered enemies
      { pos: new THREE.Vector3(-4, 0, -15), type: 'HOLLOW_SOLDIER' },
      { pos: new THREE.Vector3(5, 0, -22), type: 'BERSERKER' },
      { pos: new THREE.Vector3(0, 0, -35), type: 'SENTINEL' },
      
      // Left chapel - ambush
      { pos: new THREE.Vector3(-18, 0, -23), type: 'BERSERKER' },
      { pos: new THREE.Vector3(-20, 0, -27), type: 'HOLLOW_SOLDIER' },
      
      // Right chapel - guardian
      { pos: new THREE.Vector3(18, 0, -25), type: 'SENTINEL' },
      
      // Secret room reward guard
      { pos: new THREE.Vector3(21, 0, -38), type: 'BERSERKER' },
      
      // Altar room
      { pos: new THREE.Vector3(-3, 0, -54), type: 'HOLLOW_SOLDIER' },
      { pos: new THREE.Vector3(3, 0, -54), type: 'HOLLOW_SOLDIER' },
      
      // Crypt
      { pos: new THREE.Vector3(-5, 0, -68), type: 'SENTINEL' },
      { pos: new THREE.Vector3(5, 0, -72), type: 'BERSERKER' },
      { pos: new THREE.Vector3(0, 0, -78), type: 'BERSERKER' },
    ];
  }
  
  // Get item spawn positions
  getItemSpawns() {
    return [
      // Courtyard - healing item
      { pos: new THREE.Vector3(6, 0.5, 2), type: 'remnant', value: 50 },
      
      // Main hall - scattered remnants
      { pos: new THREE.Vector3(-6, 0.5, -18), type: 'remnant', value: 100 },
      { pos: new THREE.Vector3(7, 0.5, -30), type: 'remnant', value: 100 },
      
      // Left chapel altar
      { pos: new THREE.Vector3(-21, 1.3, -25), type: 'remnant', value: 200 },
      
      // Right chapel - crypt key hidden behind enemy
      { pos: new THREE.Vector3(20, 0.5, -28), type: 'key', keyId: 'crypt-key', name: 'Crypt Key' },
      
      // Secret room behind hidden wall - big reward
      { pos: new THREE.Vector3(21, 0.5, -40), type: 'remnant', value: 500 },
      
      // Altar room
      { pos: new THREE.Vector3(0, 1.6, -58), type: 'remnant', value: 300 },
      
      // Crypt tombs
      { pos: new THREE.Vector3(-7, 0.9, -62), type: 'remnant', value: 150 },
      { pos: new THREE.Vector3(7, 0.9, -74), type: 'remnant', value: 150 },
    ];
  }
}
