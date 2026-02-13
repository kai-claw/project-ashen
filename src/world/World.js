import * as THREE from 'three';

export class World {
  constructor(scene) {
    this.scene = scene;
    this.colliders = []; // For collision detection (walls, pillars)
    this.floorZones = []; // Floor collision zones (walkable areas)
    this.stairs = []; // Stair/ramp zones for Y transitions
    this.doors = []; // Locked doors
    this.hiddenWalls = []; // Illusory walls
    this.ladders = []; // Climbable ladders
    this.shortcuts = []; // Unlockable shortcuts
    this.bonfirePosition = new THREE.Vector3(0, 0, 5);
    
    this._createSkybox();
    this._createCathedral();
    this._createUndergroundCrypt(); // NEW: Underground level
    this._createFloorCollisionZones(); // Floor and stair collision
    this._createLighting();
    this._createEnvironmentProps();
  }
  
  /**
   * Create floor collision zones for walkable areas
   * These define where the player can walk and at what Y level
   */
  _createFloorCollisionZones() {
    const CRYPT_Y = -3;
    
    // === CATHEDRAL FLOOR ZONES (Y=0) ===
    // Entrance courtyard
    this._addFloorZone(0, 0, 16, 16, 0);
    // Main hall
    this._addFloorZone(0, -30, 20, 50, 0);
    // Left chapel
    this._addFloorZone(-18, -25, 14, 16, 0);
    // Right chapel
    this._addFloorZone(18, -25, 14, 16, 0);
    // Right chapel secret room
    this._addFloorZone(21, -38, 8, 10, 0);
    // Altar room
    this._addFloorZone(0, -55, 18, 12, 0);
    // Old crypt area
    this._addFloorZone(0, -70, 22, 22, 0);
    // Boss arena
    this._addFloorZone(0, -95, 26, 20, 0);
    
    // === UNDERGROUND CRYPT FLOOR ZONES (Y=-3) ===
    // Entry Antechamber (circular, approximate as rectangle)
    this._addFloorZone(0, -25, 14, 14, CRYPT_Y);
    // West Corridor
    this._addFloorZone(-12, -33, 6, 18, CRYPT_Y);
    // Ossuary Chamber
    this._addFloorZone(-18, -47, 14, 14, CRYPT_Y);
    // Ritual Chamber (octagonal, approximate)
    this._addFloorZone(0, -55, 18, 18, CRYPT_Y);
    // South Corridor
    this._addFloorZone(0, -70, 6, 22, CRYPT_Y);
    // Secret Room
    this._addFloorZone(8, -77, 8, 8, CRYPT_Y);
    // Shortcut Chamber
    this._addFloorZone(-6, -78, 10, 10, CRYPT_Y);
    // Connection from Antechamber to West Corridor
    this._addFloorZone(-6, -28, 8, 6, CRYPT_Y);
    // Connection from Ossuary to Ritual Chamber
    this._addFloorZone(-9, -51, 10, 8, CRYPT_Y);
    // Connection from Ritual to South Corridor
    this._addFloorZone(0, -63, 6, 6, CRYPT_Y);
    // Connection from South Corridor to Shortcut Chamber
    this._addFloorZone(-3, -76, 8, 6, CRYPT_Y);
    
    // === SPIRAL STAIRCASE (ramp from Y=0 to Y=-3) ===
    this._addStairZone(0, -30, 4, 4, 0, CRYPT_Y);
  }
  
  /**
   * Add a floor collision zone
   * @param {number} x - Center X
   * @param {number} z - Center Z
   * @param {number} width - Width (X axis)
   * @param {number} depth - Depth (Z axis)
   * @param {number} y - Floor Y level
   */
  _addFloorZone(x, z, width, depth, y) {
    this.floorZones.push({
      minX: x - width / 2,
      maxX: x + width / 2,
      minZ: z - depth / 2,
      maxZ: z + depth / 2,
      y: y,
    });
  }
  
  /**
   * Add a stair/ramp zone for vertical transitions
   * @param {number} x - Center X
   * @param {number} z - Center Z
   * @param {number} width - Width
   * @param {number} depth - Depth
   * @param {number} yTop - Top Y level
   * @param {number} yBottom - Bottom Y level
   */
  _addStairZone(x, z, width, depth, yTop, yBottom) {
    this.stairs.push({
      minX: x - width / 2,
      maxX: x + width / 2,
      minZ: z - depth / 2,
      maxZ: z + depth / 2,
      yTop: yTop,
      yBottom: yBottom,
      centerZ: z,
      depth: depth,
    });
  }
  
  /**
   * Get the floor Y level at a given XZ position
   * Used by player for ground collision
   * @param {number} x - X position
   * @param {number} z - Z position
   * @returns {number} - Floor Y level (or 0 if not in any zone)
   */
  getFloorY(x, z) {
    // First check stairs (they take priority for smooth transitions)
    for (const stair of this.stairs) {
      if (x >= stair.minX && x <= stair.maxX && 
          z >= stair.minZ && z <= stair.maxZ) {
        // Interpolate Y based on Z position within stair
        const t = (z - stair.minZ) / stair.depth;
        return THREE.MathUtils.lerp(stair.yTop, stair.yBottom, t);
      }
    }
    
    // Then check floor zones
    for (const zone of this.floorZones) {
      if (x >= zone.minX && x <= zone.maxX && 
          z >= zone.minZ && z <= zone.maxZ) {
        return zone.y;
      }
    }
    
    // Default to Y=0 (cathedral floor)
    return 0;
  }
  
  /**
   * Check if a position collides with any wall collider
   * @param {THREE.Vector3} position - Position to check
   * @param {number} radius - Collision radius
   * @returns {THREE.Vector3|null} - Push-out vector if colliding, null otherwise
   */
  checkWallCollision(position, radius = 0.4) {
    const pushOut = new THREE.Vector3();
    let collided = false;
    
    for (const collider of this.colliders) {
      if (collider.type === 'box' || collider.type === 'door' || collider.type === 'shortcut') {
        const bounds = collider.bounds;
        if (!bounds) continue;
        
        // Expand bounds by player radius
        const expanded = bounds.clone();
        expanded.min.x -= radius;
        expanded.min.z -= radius;
        expanded.max.x += radius;
        expanded.max.z += radius;
        
        // Check if position is inside expanded bounds (XZ only for walls)
        if (position.x > expanded.min.x && position.x < expanded.max.x &&
            position.z > expanded.min.z && position.z < expanded.max.z &&
            position.y > bounds.min.y - 1 && position.y < bounds.max.y) {
          
          // Calculate push-out direction (shortest path out)
          const distToMinX = position.x - expanded.min.x;
          const distToMaxX = expanded.max.x - position.x;
          const distToMinZ = position.z - expanded.min.z;
          const distToMaxZ = expanded.max.z - position.z;
          
          const minDist = Math.min(distToMinX, distToMaxX, distToMinZ, distToMaxZ);
          
          if (minDist === distToMinX) pushOut.x -= distToMinX;
          else if (minDist === distToMaxX) pushOut.x += distToMaxX;
          else if (minDist === distToMinZ) pushOut.z -= distToMinZ;
          else pushOut.z += distToMaxZ;
          
          collided = true;
        }
      } else if (collider.type === 'cylinder') {
        // Pillar collision
        const pillarPos = collider.position;
        const dx = position.x - pillarPos.x;
        const dz = position.z - pillarPos.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        const minDist = collider.radius + radius;
        
        if (dist < minDist && position.y > pillarPos.y - 4 && position.y < pillarPos.y + 4) {
          const overlap = minDist - dist;
          if (dist > 0.001) {
            pushOut.x += (dx / dist) * overlap;
            pushOut.z += (dz / dist) * overlap;
          }
          collided = true;
        }
      }
    }
    
    return collided ? pushOut : null;
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
    // Glowing runes at key locations
    const runePositions = [
      { pos: [0, 0.02, -25], size: 4, color: 0x6666cc },   // Main hall center
      { pos: [0, 0.02, -55], size: 3, color: 0xcc8833 },   // Altar
      { pos: [0, 0.02, -95], size: 5, color: 0xcc3333 },   // Boss arena
      { pos: [0, 0.02, 0], size: 3, color: 0x44aa88 },     // Bonfire area
      { pos: [0, 0.02, -42], size: 2.5, color: 0x8866aa }, // Transition hall
      { pos: [0, 0.02, -72], size: 2.5, color: 0x5588cc }, // Crypt area
    ];
    
    runePositions.forEach(({ pos, size, color }) => {
      // Outer rune circle
      const ringGeo = new THREE.RingGeometry(size - 0.1, size, 32);
      const runeMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.4,
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
      
      // Floor glow light
      const light = new THREE.PointLight(color, 0.8, size * 2.5);
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
  
  /**
   * UNDERGROUND CRYPT - Deep level beneath cathedral
   * Accessed via spiral stairs from main hall (z:-30)
   * All geometry at Y=-3 (3 meters below cathedral floor)
   */
  _createUndergroundCrypt() {
    const CRYPT_Y = -3; // Crypt floor level
    
    // Create ancient crypt stone material (older, darker than cathedral)
    const cryptStoneCanvas = document.createElement('canvas');
    cryptStoneCanvas.width = 256;
    cryptStoneCanvas.height = 256;
    const cctx = cryptStoneCanvas.getContext('2d');
    
    // Very dark base with greenish tint (ancient, damp)
    cctx.fillStyle = '#1a1820';
    cctx.fillRect(0, 0, 256, 256);
    
    // Weathered stone texture
    for (let i = 0; i < 3000; i++) {
      const x = Math.random() * 256;
      const y = Math.random() * 256;
      const size = Math.random() * 4 + 1;
      const brightness = Math.floor(Math.random() * 20);
      const greenTint = Math.floor(Math.random() * 8);
      cctx.fillStyle = `rgb(${22 + brightness}, ${24 + brightness + greenTint}, ${28 + brightness})`;
      cctx.fillRect(x, y, size, size);
    }
    
    // Cracks and age marks
    cctx.strokeStyle = '#0a0810';
    cctx.lineWidth = 1;
    for (let i = 0; i < 10; i++) {
      cctx.beginPath();
      let x = Math.random() * 256;
      let y = Math.random() * 256;
      cctx.moveTo(x, y);
      for (let j = 0; j < 5; j++) {
        x += (Math.random() - 0.5) * 40;
        y += (Math.random() - 0.5) * 40;
        cctx.lineTo(x, y);
      }
      cctx.stroke();
    }
    
    const cryptTexture = new THREE.CanvasTexture(cryptStoneCanvas);
    cryptTexture.wrapS = THREE.RepeatWrapping;
    cryptTexture.wrapT = THREE.RepeatWrapping;
    cryptTexture.repeat.set(2, 2);
    
    const cryptStoneMat = new THREE.MeshStandardMaterial({
      color: 0x1a1820,
      roughness: 0.95,
      metalness: 0.02,
      map: cryptTexture,
    });
    
    // Crypt floor material (cobblestones with moss)
    const cryptFloorCanvas = document.createElement('canvas');
    cryptFloorCanvas.width = 256;
    cryptFloorCanvas.height = 256;
    const cfctx = cryptFloorCanvas.getContext('2d');
    
    cfctx.fillStyle = '#151318';
    cfctx.fillRect(0, 0, 256, 256);
    
    // Irregular flagstones
    for (let i = 0; i < 20; i++) {
      const x = (i % 4) * 64 + Math.random() * 10;
      const y = Math.floor(i / 4) * 52 + Math.random() * 10;
      const w = 50 + Math.random() * 12;
      const h = 40 + Math.random() * 10;
      const brightness = Math.floor(Math.random() * 15);
      cfctx.fillStyle = `rgb(${18 + brightness}, ${20 + brightness}, ${22 + brightness})`;
      cfctx.beginPath();
      cfctx.roundRect(x, y, w, h, 3);
      cfctx.fill();
      cfctx.strokeStyle = '#0a080c';
      cfctx.lineWidth = 2;
      cfctx.stroke();
      
      // Moss patches
      if (Math.random() > 0.7) {
        cfctx.fillStyle = `rgba(30, 50, 35, ${0.3 + Math.random() * 0.3})`;
        cfctx.beginPath();
        cfctx.ellipse(x + w/2, y + h/2, 10 + Math.random() * 15, 8 + Math.random() * 10, 0, 0, Math.PI * 2);
        cfctx.fill();
      }
    }
    
    const cryptFloorTexture = new THREE.CanvasTexture(cryptFloorCanvas);
    cryptFloorTexture.wrapS = THREE.RepeatWrapping;
    cryptFloorTexture.wrapT = THREE.RepeatWrapping;
    cryptFloorTexture.repeat.set(3, 3);
    
    const cryptFloorMat = new THREE.MeshStandardMaterial({
      color: 0x151318,
      roughness: 0.98,
      metalness: 0.01,
      map: cryptFloorTexture,
    });
    
    // Bone material for ossuary
    const boneMat = new THREE.MeshStandardMaterial({
      color: 0xd8d0c0,
      roughness: 0.7,
      emissive: 0x201815,
      emissiveIntensity: 0.1,
    });
    
    // === SPIRAL STAIRCASE ENTRANCE ===
    // Located in cathedral main hall at z:-30
    this._createSpiralStairs(0, 0, -30, CRYPT_Y, 3, 2);
    
    // === 1. ENTRY ANTECHAMBER ===
    // Circular chamber, radius 6, at x:0, z:-25, y:-3
    this._createCircularRoom(0, CRYPT_Y, -25, 6, 4, cryptFloorMat, cryptStoneMat);
    
    // Central unlit brazier
    this._createBrazier(0, CRYPT_Y, -25, false);
    
    // Four statue alcoves (two crumbled)
    const statueAngles = [0, Math.PI/2, Math.PI, Math.PI * 1.5];
    statueAngles.forEach((angle, i) => {
      const x = Math.cos(angle) * 4.5;
      const z = -25 + Math.sin(angle) * 4.5;
      if (i < 2) {
        this._createStatue(x, CRYPT_Y, z, cryptStoneMat, false); // Intact
      } else {
        this._createCrumbledStatue(x, CRYPT_Y, z, cryptStoneMat); // Crumbled
      }
    });
    
    // Bioluminescent moss on north wall
    this._createGlowingMoss(0, CRYPT_Y + 2, -19, 0x44ffaa, 2);
    
    // === 2. WEST CORRIDOR ===
    // 4 units wide, 16 units long, with burial alcoves
    this._createCryptFloorSection(-12, CRYPT_Y, -33, 4, 16, cryptFloorMat);
    this._createWall(-14, CRYPT_Y + 2, -33, 0.5, 4, 16, cryptStoneMat);
    this._createWall(-10, CRYPT_Y + 2, -33, 0.5, 4, 16, cryptStoneMat);
    
    // Burial alcoves (4 per side, 8 total)
    for (let i = 0; i < 4; i++) {
      const alcoveZ = -27 - i * 4;
      // Left alcoves
      this._createBurialAlcove(-15, CRYPT_Y, alcoveZ, 'left', cryptStoneMat, i === 1);
      // Right alcoves
      this._createBurialAlcove(-9, CRYPT_Y, alcoveZ, 'right', cryptStoneMat, i === 2);
    }
    
    // One sarcophagus contains item (alcove 3)
    // (Item spawns handled in getItemSpawns)
    
    // === 3. OSSUARY CHAMBER ===
    // 12x12 units, bone pillars, skull walls
    this._createCryptFloorSection(-18, CRYPT_Y, -47, 12, 12, cryptFloorMat);
    this._createWall(-24, CRYPT_Y + 2, -47, 0.5, 4, 12, cryptStoneMat);
    this._createWall(-12, CRYPT_Y + 2, -47, 0.5, 4, 12, cryptStoneMat);
    this._createWall(-18, CRYPT_Y + 2, -53, 12, 4, 0.5, cryptStoneMat);
    this._createWall(-18, CRYPT_Y + 2, -41, 12, 4, 0.5, cryptStoneMat);
    
    // Four bone pillars
    const bonePillarPositions = [
      [-21, -44], [-15, -44],
      [-21, -50], [-15, -50],
    ];
    bonePillarPositions.forEach(([x, z]) => {
      this._createBonePillar(x, CRYPT_Y, z, boneMat);
    });
    
    // Central pit (visual, deep)
    this._createPit(-18, CRYPT_Y, -47, 3);
    
    // Skull-lined walls (decorative)
    this._createSkullWall(-24, CRYPT_Y + 1, -47, 0.5, 2, 10);
    this._createSkullWall(-12, CRYPT_Y + 1, -47, 0.5, 2, 10);
    
    // Blue fungal glow
    this._createGlowingMoss(-20, CRYPT_Y + 0.5, -45, 0x4488ff, 3);
    this._createGlowingMoss(-16, CRYPT_Y + 0.5, -49, 0x44aaff, 2);
    
    // === 4. RITUAL CHAMBER ===
    // Octagonal, 16 diameter, center at x:0, z:-50
    this._createOctagonalRoom(0, CRYPT_Y, -55, 8, 5, cryptFloorMat, cryptStoneMat);
    
    // 8 stone pillars in octagon
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const x = Math.cos(angle) * 6;
      const z = -55 + Math.sin(angle) * 6;
      this._createPillar(x, z, cryptStoneMat, 5, CRYPT_Y);
    }
    
    // Central ritual circle (glowing red)
    this._createRitualCircle(0, CRYPT_Y + 0.02, -55, 4, 0xcc2222);
    
    // Raised dais/altar in center
    const daisGeo = new THREE.CylinderGeometry(1.5, 1.8, 0.5, 8);
    const dais = new THREE.Mesh(daisGeo, cryptStoneMat);
    dais.position.set(0, CRYPT_Y + 0.25, -55);
    dais.castShadow = true;
    dais.receiveShadow = true;
    this.scene.add(dais);
    
    // Chains hanging from ceiling (environmental storytelling)
    this._createHangingChains(0, CRYPT_Y + 4, -55, 4);
    
    // === 5. SOUTH CORRIDOR ===
    // 4 units wide, 20 long, oldest stonework
    this._createCryptFloorSection(0, CRYPT_Y, -70, 4, 20, cryptFloorMat);
    this._createWall(-2, CRYPT_Y + 2, -70, 0.5, 4, 20, cryptStoneMat);
    this._createWall(2, CRYPT_Y + 2, -70, 0.5, 4, 20, cryptStoneMat);
    this._createWall(0, CRYPT_Y + 2, -80, 4, 4, 0.5, cryptStoneMat); // Dead end (illusory!)
    
    // Wall niches with skeletal remains
    for (let i = 0; i < 5; i++) {
      this._createWallNiche(-2.3, CRYPT_Y + 1.5, -62 - i * 3.5, 'left');
      this._createWallNiche(2.3, CRYPT_Y + 1.5, -63 - i * 3.5, 'right');
    }
    
    // Frost effect on surfaces (visual)
    this._createFrostPatches(0, CRYPT_Y + 0.01, -70, 4, 20);
    
    // SECRET ROOM behind illusory wall at east side of corridor end
    this._createHiddenWall(4, CRYPT_Y + 2, -77, 0.5, 4, 6, cryptStoneMat, 'crypt-secret');
    
    // Secret room (6x6)
    this._createCryptFloorSection(8, CRYPT_Y, -77, 6, 6, cryptFloorMat);
    this._createWall(11, CRYPT_Y + 2, -77, 0.5, 4, 6, cryptStoneMat);
    this._createWall(8, CRYPT_Y + 2, -80, 6, 4, 0.5, cryptStoneMat);
    this._createWall(8, CRYPT_Y + 2, -74, 6, 4, 0.5, cryptStoneMat);
    
    // Golden glow in secret room
    const secretLight = new THREE.PointLight(0xffdd44, 1.5, 8);
    secretLight.position.set(8, CRYPT_Y + 2, -77);
    this.scene.add(secretLight);
    
    // Kneeling skeleton reaching toward shard
    this._createKneelingSkeletonProp(7, CRYPT_Y, -77);
    
    // === 6. SHORTCUT CHAMBER ===
    // 8x8 units, southwest terminus
    this._createCryptFloorSection(-6, CRYPT_Y, -78, 8, 8, cryptFloorMat);
    this._createWall(-10, CRYPT_Y + 2, -78, 0.5, 4, 8, cryptStoneMat);
    this._createWall(-2, CRYPT_Y + 2, -81, 0.5, 4, 2, cryptStoneMat); // Partial wall
    this._createWall(-6, CRYPT_Y + 2, -82, 8, 4, 0.5, cryptStoneMat);
    this._createWall(-6, CRYPT_Y + 2, -74, 8, 4, 0.5, cryptStoneMat);
    
    // Rusty ladder going up
    this._createLadder(-6, CRYPT_Y, -81, 0, 8, 'shortcut-ladder');
    
    // Locked shortcut door (unlockable from crypt side)
    this._createShortcutDoor(-6, CRYPT_Y + 2, -74.5, 2, 3.5, 0.3, 'crypt-shortcut');
    
    // Small workbench (lore prop)
    const benchGeo = new THREE.BoxGeometry(1.5, 0.8, 0.8);
    const benchMat = new THREE.MeshStandardMaterial({ color: 0x2a1a10, roughness: 0.9 });
    const bench = new THREE.Mesh(benchGeo, benchMat);
    bench.position.set(-8, CRYPT_Y + 0.4, -79);
    bench.castShadow = true;
    this.scene.add(bench);
    
    // === CRYPT CEILING (low, oppressive) ===
    // Create ceiling sections over major rooms
    this._createCeiling(0, CRYPT_Y + 4, -25, 14, 14, cryptStoneMat); // Antechamber
    this._createCeiling(-12, CRYPT_Y + 3.5, -33, 6, 18, cryptStoneMat); // West corridor
    this._createCeiling(-18, CRYPT_Y + 3.5, -47, 14, 14, cryptStoneMat); // Ossuary
    this._createCeiling(0, CRYPT_Y + 5, -55, 18, 18, cryptStoneMat); // Ritual chamber
    this._createCeiling(0, CRYPT_Y + 3.5, -70, 6, 22, cryptStoneMat); // South corridor
    this._createCeiling(8, CRYPT_Y + 3.5, -77, 8, 8, cryptStoneMat); // Secret room
    this._createCeiling(-6, CRYPT_Y + 3.5, -78, 10, 10, cryptStoneMat); // Shortcut chamber
    
    // === CRYPT LIGHTING ===
    this._addCryptLighting(CRYPT_Y);
  }
  
  // === CRYPT HELPER METHODS ===
  
  _createCryptFloorSection(x, y, z, width, depth, mat) {
    const geo = new THREE.PlaneGeometry(width, depth);
    const floor = new THREE.Mesh(geo, mat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(x, y, z);
    floor.receiveShadow = true;
    this.scene.add(floor);
  }
  
  _createCeiling(x, y, z, width, depth, mat) {
    const geo = new THREE.PlaneGeometry(width, depth);
    const ceiling = new THREE.Mesh(geo, mat);
    ceiling.rotation.x = Math.PI / 2;
    ceiling.position.set(x, y, z);
    ceiling.receiveShadow = true;
    this.scene.add(ceiling);
  }
  
  _createSpiralStairs(x, yTop, z, yBottom, width, radius) {
    // Create spiral staircase geometry
    const steps = 16;
    const heightPerStep = (yTop - yBottom) / steps;
    const anglePerStep = (Math.PI * 2) / 8; // 2 full rotations
    
    const stepMat = new THREE.MeshStandardMaterial({
      color: 0x3a3840,
      roughness: 0.85,
    });
    
    for (let i = 0; i < steps; i++) {
      const angle = i * anglePerStep;
      const stepY = yTop - (i + 0.5) * heightPerStep;
      const stepX = x + Math.cos(angle) * radius * 0.5;
      const stepZ = z + Math.sin(angle) * radius * 0.5;
      
      // Step geometry (wedge shape approximated with box)
      const stepGeo = new THREE.BoxGeometry(width, 0.2, 1.2);
      const step = new THREE.Mesh(stepGeo, stepMat);
      step.position.set(stepX, stepY, stepZ);
      step.rotation.y = -angle;
      step.castShadow = true;
      step.receiveShadow = true;
      this.scene.add(step);
    }
    
    // Central pillar
    const pillarGeo = new THREE.CylinderGeometry(0.4, 0.4, yTop - yBottom + 1, 8);
    const pillar = new THREE.Mesh(pillarGeo, stepMat);
    pillar.position.set(x, (yTop + yBottom) / 2, z);
    pillar.castShadow = true;
    this.scene.add(pillar);
    
    // Opening in cathedral floor (visual)
    const holeGeo = new THREE.RingGeometry(0.5, width, 16);
    const holeMat = new THREE.MeshBasicMaterial({ color: 0x0a0808, side: THREE.DoubleSide });
    const hole = new THREE.Mesh(holeGeo, holeMat);
    hole.rotation.x = -Math.PI / 2;
    hole.position.set(x, yTop - 0.05, z);
    this.scene.add(hole);
  }
  
  _createCircularRoom(x, y, z, radius, height, floorMat, wallMat) {
    // Circular floor
    const floorGeo = new THREE.CircleGeometry(radius, 24);
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(x, y, z);
    floor.receiveShadow = true;
    this.scene.add(floor);
    
    // Cylindrical wall (using segments)
    const wallSegments = 24;
    for (let i = 0; i < wallSegments; i++) {
      const angle = (i / wallSegments) * Math.PI * 2;
      const nextAngle = ((i + 1) / wallSegments) * Math.PI * 2;
      const wx = x + Math.cos(angle) * radius;
      const wz = z + Math.sin(angle) * radius;
      
      const segWidth = 2 * radius * Math.sin(Math.PI / wallSegments);
      const wallGeo = new THREE.BoxGeometry(segWidth, height, 0.5);
      const wall = new THREE.Mesh(wallGeo, wallMat);
      wall.position.set(wx, y + height/2, wz);
      wall.rotation.y = -angle + Math.PI/2;
      wall.castShadow = true;
      wall.receiveShadow = true;
      this.scene.add(wall);
    }
  }
  
  _createOctagonalRoom(x, y, z, radius, height, floorMat, wallMat) {
    // Octagonal floor
    const floorGeo = new THREE.CircleGeometry(radius, 8);
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(x, y, z);
    floor.receiveShadow = true;
    this.scene.add(floor);
    
    // 8 wall segments
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 + Math.PI / 8;
      const wx = x + Math.cos(angle) * radius;
      const wz = z + Math.sin(angle) * radius;
      
      const segWidth = 2 * radius * Math.sin(Math.PI / 8);
      const wallGeo = new THREE.BoxGeometry(segWidth, height, 0.5);
      const wall = new THREE.Mesh(wallGeo, wallMat);
      wall.position.set(wx, y + height/2, wz);
      wall.rotation.y = -angle + Math.PI/2;
      wall.castShadow = true;
      wall.receiveShadow = true;
      this.scene.add(wall);
    }
  }
  
  _createBrazier(x, y, z, lit = false) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    
    // Stone base
    const baseGeo = new THREE.CylinderGeometry(0.6, 0.7, 0.4, 8);
    const baseMat = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.9 });
    const base = new THREE.Mesh(baseGeo, baseMat);
    base.position.y = 0.2;
    base.castShadow = true;
    group.add(base);
    
    // Bowl
    const bowlGeo = new THREE.CylinderGeometry(0.5, 0.4, 0.3, 8, 1, true);
    const bowl = new THREE.Mesh(bowlGeo, baseMat);
    bowl.position.y = 0.55;
    group.add(bowl);
    
    // Ash inside
    const ashGeo = new THREE.CircleGeometry(0.4, 8);
    const ashMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    const ash = new THREE.Mesh(ashGeo, ashMat);
    ash.rotation.x = -Math.PI / 2;
    ash.position.y = 0.5;
    group.add(ash);
    
    if (lit) {
      const light = new THREE.PointLight(0xff6622, 1.5, 8);
      light.position.y = 1;
      group.add(light);
    }
    
    this.scene.add(group);
    return group;
  }
  
  _createStatue(x, y, z, mat, damaged = false) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    
    // Base
    const baseGeo = new THREE.BoxGeometry(0.8, 0.3, 0.8);
    const base = new THREE.Mesh(baseGeo, mat);
    base.position.y = 0.15;
    base.castShadow = true;
    group.add(base);
    
    // Body (simplified humanoid)
    const bodyGeo = new THREE.CylinderGeometry(0.25, 0.3, 1.5, 6);
    const body = new THREE.Mesh(bodyGeo, mat);
    body.position.y = 1.05;
    body.castShadow = true;
    group.add(body);
    
    // Head
    const headGeo = new THREE.SphereGeometry(0.2, 8, 6);
    const head = new THREE.Mesh(headGeo, mat);
    head.position.y = 2.0;
    head.castShadow = true;
    group.add(head);
    
    if (damaged) {
      // Missing arm
      group.rotation.y = Math.random() * Math.PI * 2;
    }
    
    this.scene.add(group);
  }
  
  _createCrumbledStatue(x, y, z, mat) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    
    // Just rubble
    for (let i = 0; i < 6; i++) {
      const size = 0.15 + Math.random() * 0.25;
      const rubbleGeo = new THREE.BoxGeometry(size, size * 0.6, size);
      const rubble = new THREE.Mesh(rubbleGeo, mat);
      rubble.position.set(
        (Math.random() - 0.5) * 0.6,
        size * 0.3,
        (Math.random() - 0.5) * 0.6
      );
      rubble.rotation.set(
        Math.random() * 0.5,
        Math.random() * Math.PI,
        Math.random() * 0.5
      );
      rubble.castShadow = true;
      group.add(rubble);
    }
    
    this.scene.add(group);
  }
  
  _createGlowingMoss(x, y, z, color, size) {
    // Bioluminescent moss patch
    const mossGeo = new THREE.CircleGeometry(size, 12);
    const mossMat = new THREE.MeshStandardMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 0.4,
      transparent: true,
      opacity: 0.7,
      side: THREE.DoubleSide,
    });
    const moss = new THREE.Mesh(mossGeo, mossMat);
    moss.rotation.x = Math.PI / 2 + (Math.random() - 0.5) * 0.3;
    moss.rotation.z = Math.random() * Math.PI;
    moss.position.set(x, y, z);
    this.scene.add(moss);
    
    // Small glow light
    const light = new THREE.PointLight(color, 0.3, size * 2);
    light.position.set(x, y, z);
    this.scene.add(light);
  }
  
  _createBurialAlcove(x, y, z, side, mat, open = false) {
    const depth = side === 'left' ? -1.5 : 1.5;
    
    // Alcove recess
    const recessGeo = new THREE.BoxGeometry(2, 2, 1.5);
    const recess = new THREE.Mesh(recessGeo, mat);
    recess.position.set(x + depth/2, y + 1, z);
    this.scene.add(recess);
    
    // Sarcophagus
    const sarcGeo = new THREE.BoxGeometry(1.2, 0.6, 2);
    const sarcMat = new THREE.MeshStandardMaterial({ color: 0x2a2530, roughness: 0.8 });
    const sarc = new THREE.Mesh(sarcGeo, sarcMat);
    sarc.position.set(x + depth * 0.3, y + 0.3, z);
    sarc.castShadow = true;
    this.scene.add(sarc);
    
    if (open) {
      // Lid askew
      const lidGeo = new THREE.BoxGeometry(1.3, 0.15, 2.1);
      const lid = new THREE.Mesh(lidGeo, sarcMat);
      lid.position.set(x + depth * 0.3 + 0.3, y + 0.5, z);
      lid.rotation.z = 0.3;
      lid.castShadow = true;
      this.scene.add(lid);
    }
  }
  
  _createBonePillar(x, y, z, mat) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    
    // Stack of bones/skulls forming pillar
    for (let i = 0; i < 8; i++) {
      // Bones
      const boneGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.6, 6);
      const bone = new THREE.Mesh(boneGeo, mat);
      bone.position.set(
        Math.cos(i * 0.7) * 0.2,
        i * 0.35 + 0.2,
        Math.sin(i * 0.7) * 0.2
      );
      bone.rotation.z = Math.PI / 2;
      bone.rotation.y = i * 0.5;
      group.add(bone);
      
      // Occasional skull
      if (i % 3 === 0) {
        const skullGeo = new THREE.SphereGeometry(0.15, 8, 6);
        const skull = new THREE.Mesh(skullGeo, mat);
        skull.position.set(
          Math.cos(i * 1.2) * 0.25,
          i * 0.35 + 0.35,
          Math.sin(i * 1.2) * 0.25
        );
        skull.scale.set(1, 0.8, 0.9);
        group.add(skull);
      }
    }
    
    group.castShadow = true;
    this.scene.add(group);
  }
  
  _createPit(x, y, z, radius) {
    // Dark pit in floor
    const pitGeo = new THREE.CircleGeometry(radius, 16);
    const pitMat = new THREE.MeshBasicMaterial({ color: 0x020204 });
    const pit = new THREE.Mesh(pitGeo, pitMat);
    pit.rotation.x = -Math.PI / 2;
    pit.position.set(x, y - 0.1, z);
    this.scene.add(pit);
    
    // Ring around pit
    const ringGeo = new THREE.RingGeometry(radius, radius + 0.3, 16);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0x1a1820, roughness: 0.9 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, y, z);
    this.scene.add(ring);
  }
  
  _createSkullWall(x, y, z, width, height, depth) {
    // Decorative skull-lined wall section
    const boneMat = new THREE.MeshStandardMaterial({
      color: 0xd8d0c0,
      roughness: 0.7,
    });
    
    const cols = Math.floor(depth / 0.8);
    const rows = Math.floor(height / 0.5);
    
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const skullGeo = new THREE.SphereGeometry(0.12, 6, 5);
        const skull = new THREE.Mesh(skullGeo, boneMat);
        skull.position.set(
          x,
          y + r * 0.5,
          z - depth/2 + c * 0.8 + (r % 2) * 0.4
        );
        skull.scale.set(1, 0.8, 0.85);
        skull.rotation.y = Math.PI / 2 + (Math.random() - 0.5) * 0.3;
        this.scene.add(skull);
      }
    }
  }
  
  _createRitualCircle(x, y, z, radius, color) {
    // Outer ring
    const ringGeo = new THREE.RingGeometry(radius - 0.1, radius, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.set(x, y, z);
    this.scene.add(ring);
    
    // Inner pentagram (simplified as inner ring + lines)
    const innerGeo = new THREE.RingGeometry(radius * 0.4, radius * 0.45, 5);
    const inner = new THREE.Mesh(innerGeo, ringMat);
    inner.rotation.x = -Math.PI / 2;
    inner.position.set(x, y + 0.01, z);
    this.scene.add(inner);
    
    // Glow light
    const light = new THREE.PointLight(color, 1.0, radius * 3);
    light.position.set(x, y + 0.5, z);
    this.scene.add(light);
    
    // Pulsing animation
    const baseIntensity = 1.0;
    const animate = () => {
      requestAnimationFrame(animate);
      light.intensity = baseIntensity + Math.sin(Date.now() * 0.003) * 0.4;
      ringMat.opacity = 0.4 + Math.sin(Date.now() * 0.003) * 0.2;
    };
    animate();
  }
  
  _createHangingChains(x, y, z, count) {
    const chainMat = new THREE.MeshStandardMaterial({
      color: 0x3a3530,
      roughness: 0.6,
      metalness: 0.4,
    });
    
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const cx = x + Math.cos(angle) * 2;
      const cz = z + Math.sin(angle) * 2;
      const length = 1.5 + Math.random() * 1.5;
      
      // Chain links (simplified as cylinder)
      const chainGeo = new THREE.CylinderGeometry(0.03, 0.03, length, 6);
      const chain = new THREE.Mesh(chainGeo, chainMat);
      chain.position.set(cx, y - length/2, cz);
      chain.rotation.z = (Math.random() - 0.5) * 0.2;
      chain.castShadow = true;
      this.scene.add(chain);
      
      // Shackle at bottom
      if (i % 2 === 0) {
        const shackleGeo = new THREE.TorusGeometry(0.1, 0.02, 6, 12);
        const shackle = new THREE.Mesh(shackleGeo, chainMat);
        shackle.position.set(cx, y - length, cz);
        shackle.rotation.x = Math.PI / 2;
        this.scene.add(shackle);
      }
    }
  }
  
  _createWallNiche(x, y, z, side) {
    // Small burial niche in wall with skeletal remains
    const boneMat = new THREE.MeshStandardMaterial({
      color: 0xc8c0b0,
      roughness: 0.8,
    });
    
    const offset = side === 'left' ? -0.3 : 0.3;
    
    // Skull
    const skullGeo = new THREE.SphereGeometry(0.1, 6, 5);
    const skull = new THREE.Mesh(skullGeo, boneMat);
    skull.position.set(x + offset, y, z);
    skull.scale.set(1, 0.8, 0.85);
    skull.rotation.y = side === 'left' ? Math.PI / 4 : -Math.PI / 4;
    this.scene.add(skull);
    
    // Some bones below
    for (let i = 0; i < 3; i++) {
      const boneGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.25, 4);
      const bone = new THREE.Mesh(boneGeo, boneMat);
      bone.position.set(
        x + offset + (Math.random() - 0.5) * 0.15,
        y - 0.15,
        z + (Math.random() - 0.5) * 0.2
      );
      bone.rotation.z = Math.PI / 2 + (Math.random() - 0.5) * 0.3;
      this.scene.add(bone);
    }
  }
  
  _createFrostPatches(x, y, z, width, depth) {
    // Frost/ice patches on floor
    const frostMat = new THREE.MeshStandardMaterial({
      color: 0xaaccee,
      transparent: true,
      opacity: 0.15,
      roughness: 0.3,
    });
    
    for (let i = 0; i < 8; i++) {
      const patchGeo = new THREE.CircleGeometry(0.3 + Math.random() * 0.5, 8);
      const patch = new THREE.Mesh(patchGeo, frostMat);
      patch.rotation.x = -Math.PI / 2;
      patch.position.set(
        x + (Math.random() - 0.5) * width,
        y,
        z + (Math.random() - 0.5) * depth
      );
      this.scene.add(patch);
    }
  }
  
  _createKneelingSkeletonProp(x, y, z) {
    const boneMat = new THREE.MeshStandardMaterial({
      color: 0xd8d0c0,
      roughness: 0.7,
    });
    
    const group = new THREE.Group();
    group.position.set(x, y, z);
    
    // Skull looking toward center
    const skullGeo = new THREE.SphereGeometry(0.15, 8, 6);
    const skull = new THREE.Mesh(skullGeo, boneMat);
    skull.position.set(0, 0.8, 0);
    skull.scale.set(1, 0.85, 0.9);
    group.add(skull);
    
    // Spine
    const spineGeo = new THREE.CylinderGeometry(0.06, 0.08, 0.5, 6);
    const spine = new THREE.Mesh(spineGeo, boneMat);
    spine.position.set(0, 0.5, 0);
    spine.rotation.x = 0.3;
    group.add(spine);
    
    // Reaching arm (extended toward secret reward)
    const armGeo = new THREE.CylinderGeometry(0.03, 0.04, 0.6, 5);
    const arm = new THREE.Mesh(armGeo, boneMat);
    arm.position.set(0.3, 0.7, 0.2);
    arm.rotation.z = Math.PI / 2 - 0.3;
    arm.rotation.y = -0.3;
    group.add(arm);
    
    // Kneeling legs
    for (let i = -1; i <= 1; i += 2) {
      const legGeo = new THREE.CylinderGeometry(0.04, 0.05, 0.4, 5);
      const leg = new THREE.Mesh(legGeo, boneMat);
      leg.position.set(i * 0.15, 0.2, 0.1);
      leg.rotation.x = Math.PI / 2 - 0.2;
      group.add(leg);
    }
    
    group.rotation.y = Math.PI / 4; // Face toward reward location
    this.scene.add(group);
  }
  
  _createLadder(x, y, z, yTop, length, id) {
    const ladderMat = new THREE.MeshStandardMaterial({
      color: 0x4a3525,
      roughness: 0.85,
      metalness: 0.2,
    });
    
    const group = new THREE.Group();
    group.position.set(x, y, z);
    
    // Side rails
    for (let side = -1; side <= 1; side += 2) {
      const railGeo = new THREE.BoxGeometry(0.08, length, 0.08);
      const rail = new THREE.Mesh(railGeo, ladderMat);
      rail.position.set(side * 0.25, length / 2, 0);
      group.add(rail);
    }
    
    // Rungs
    const rungCount = Math.floor(length / 0.4);
    for (let i = 0; i < rungCount; i++) {
      const rungGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.5, 6);
      const rung = new THREE.Mesh(rungGeo, ladderMat);
      rung.position.set(0, i * 0.4 + 0.3, 0);
      rung.rotation.z = Math.PI / 2;
      group.add(rung);
    }
    
    group.castShadow = true;
    this.scene.add(group);
    
    // Register ladder for interaction
    this.ladders.push({
      id,
      position: new THREE.Vector3(x, y, z),
      topPosition: new THREE.Vector3(x, yTop, z),
      length,
    });
    
    return group;
  }
  
  _createShortcutDoor(x, y, z, width, height, depth, id) {
    const doorGeo = new THREE.BoxGeometry(width, height, depth);
    const doorMat = new THREE.MeshStandardMaterial({
      color: 0x2a1a15,
      roughness: 0.8,
      metalness: 0.1,
    });
    const door = new THREE.Mesh(doorGeo, doorMat);
    door.position.set(x, y, z);
    door.castShadow = true;
    this.scene.add(door);
    
    // Heavy iron bar across door
    const barGeo = new THREE.BoxGeometry(width + 0.4, 0.1, 0.15);
    const barMat = new THREE.MeshStandardMaterial({
      color: 0x3a3530,
      roughness: 0.6,
      metalness: 0.5,
    });
    const bar = new THREE.Mesh(barGeo, barMat);
    bar.position.set(x, y + 0.3, z + 0.2);
    bar.castShadow = true;
    this.scene.add(bar);
    
    // Lock indicator
    const lockGeo = new THREE.SphereGeometry(0.1, 8, 8);
    const lockMat = new THREE.MeshStandardMaterial({
      color: 0xff4422,
      emissive: 0x661100,
      emissiveIntensity: 0.5,
    });
    const lock = new THREE.Mesh(lockGeo, lockMat);
    lock.position.set(x, y + 0.8, z + 0.2);
    this.scene.add(lock);
    
    const shortcut = {
      id,
      door,
      bar,
      lock,
      isOpen: false,
      bounds: new THREE.Box3().setFromObject(door),
    };
    
    this.shortcuts.push(shortcut);
    this.colliders.push({
      type: 'shortcut',
      shortcut,
      bounds: shortcut.bounds,
    });
    
    return shortcut;
  }
  
  // Unlock shortcut door (removes bar, changes lock color)
  unlockShortcut(shortcutId) {
    const shortcut = this.shortcuts.find(s => s.id === shortcutId);
    if (!shortcut || shortcut.isOpen) return false;
    
    shortcut.isOpen = true;
    shortcut.door.visible = false;
    shortcut.bar.visible = false;
    shortcut.lock.material.color.setHex(0x22ff44);
    shortcut.lock.material.emissive.setHex(0x006611);
    
    // Remove from colliders
    const idx = this.colliders.findIndex(c => c.shortcut === shortcut);
    if (idx >= 0) this.colliders.splice(idx, 1);
    
    return true;
  }
  
  // Get nearby shortcut for interaction
  getNearbyShortcut(position, maxDist = 2) {
    for (const shortcut of this.shortcuts) {
      if (shortcut.isOpen) continue;
      const dist = position.distanceTo(shortcut.door.position);
      if (dist < maxDist) return shortcut;
    }
    return null;
  }
  
  // Get nearby ladder for climbing interaction
  getNearbyLadder(position, maxDist = 2) {
    for (const ladder of this.ladders) {
      // Check distance to ladder base
      const ladderBase = new THREE.Vector3(ladder.x, ladder.y, ladder.z);
      const dist = position.distanceTo(ladderBase);
      if (dist < maxDist) return ladder;
    }
    return null;
  }
  
  // Check if position is inside an unrevealed illusory wall (for walk-through)
  checkInsideIllusoryWall(position) {
    for (const wall of this.hiddenWalls) {
      if (wall.revealed) continue;
      // Check if player position is inside the wall bounds (expanded slightly)
      const expandedBounds = wall.bounds.clone().expandByScalar(0.3);
      if (expandedBounds.containsPoint(position)) {
        return wall;
      }
    }
    return null;
  }
  
  _addCryptLighting(cryptY) {
    // Minimal ambient - very dark
    // (Main ambient is in _createLighting, this adds local accents)
    
    const cryptLights = [
      // Entry antechamber - faint cold light
      { pos: [0, cryptY + 3, -25], color: 0x4466aa, intensity: 0.6, dist: 10 },
      
      // West corridor - flickering torches
      { pos: [-12, cryptY + 2.5, -27], color: 0xff7744, intensity: 0.5, dist: 6 },
      { pos: [-12, cryptY + 2.5, -39], color: 0xff7744, intensity: 0.5, dist: 6 },
      
      // Ossuary - blue fungal glow
      { pos: [-18, cryptY + 1, -47], color: 0x4488ff, intensity: 0.8, dist: 12 },
      
      // Ritual chamber - red ritual glow + cold ambient
      { pos: [0, cryptY + 1, -55], color: 0xcc2222, intensity: 1.2, dist: 10 },
      { pos: [0, cryptY + 4, -55], color: 0x3344aa, intensity: 0.5, dist: 16 },
      
      // South corridor - very dim
      { pos: [0, cryptY + 2, -70], color: 0x334455, intensity: 0.3, dist: 8 },
      
      // Secret room - golden glow (added separately)
      
      // Shortcut chamber - dim orange
      { pos: [-6, cryptY + 2, -78], color: 0xcc8855, intensity: 0.4, dist: 8 },
    ];
    
    cryptLights.forEach(({ pos, color, intensity, dist }) => {
      const light = new THREE.PointLight(color, intensity, dist);
      light.position.set(...pos);
      this.scene.add(light);
    });
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
  
  _createPillar(x, z, mat, height = 8, baseY = 0) {
    // Base
    const baseGeo = new THREE.CylinderGeometry(0.8, 0.9, 0.5, 8);
    const base = new THREE.Mesh(baseGeo, mat);
    base.position.set(x, baseY + 0.25, z);
    base.castShadow = true;
    base.receiveShadow = true;
    this.scene.add(base);
    
    // Main shaft
    const shaftGeo = new THREE.CylinderGeometry(0.5, 0.6, height - 1, 8);
    const shaft = new THREE.Mesh(shaftGeo, mat);
    shaft.position.set(x, baseY + height / 2, z);
    shaft.castShadow = true;
    shaft.receiveShadow = true;
    this.scene.add(shaft);
    
    // Capital
    const capGeo = new THREE.CylinderGeometry(0.9, 0.5, 0.6, 8);
    const cap = new THREE.Mesh(capGeo, mat);
    cap.position.set(x, baseY + height - 0.3, z);
    cap.castShadow = true;
    cap.receiveShadow = true;
    this.scene.add(cap);
    
    this.colliders.push({
      type: 'cylinder',
      position: new THREE.Vector3(x, baseY + height / 2, z),
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
    // Hemisphere light for natural sky/ground bounce
    const hemiLight = new THREE.HemisphereLight(0xaaaadd, 0x887766, 2.0);  // Boosted from 1.2
    this.scene.add(hemiLight);
    
    // Ambient for base visibility - bright enough to see geometry
    const ambient = new THREE.AmbientLight(0xaaaacc, 1.5);  // Boosted from 0.5
    this.scene.add(ambient);
    
    // Moonlight - main directional (silvery blue)
    const moonLight = new THREE.DirectionalLight(0xaabbee, 2.5);  // Boosted from 1.5
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
    
    // Secondary fill light (warm, from opposite direction)
    const fillLight = new THREE.DirectionalLight(0xcc8866, 1.0);  // Boosted from 0.4
    fillLight.position.set(30, 20, 50);
    this.scene.add(fillLight);
    
    // Accent lights throughout cathedral
    const accents = [
      // Entrance courtyard - warm bonfire glow
      { pos: [0, 3, 5], color: 0xff6622, intensity: 2.5, dist: 15 },
      { pos: [0, 1, 5], color: 0xff4400, intensity: 1.5, dist: 10 },
      
      // Main hall - ethereal blue
      { pos: [-6, 5, -12], color: 0x6688ee, intensity: 1.2, dist: 14 },
      { pos: [6, 5, -12], color: 0x6688ee, intensity: 1.2, dist: 14 },
      { pos: [-6, 5, -32], color: 0x5577dd, intensity: 1.0, dist: 14 },
      { pos: [6, 5, -32], color: 0x5577dd, intensity: 1.0, dist: 14 },
      
      // Left chapel - blood red (corrupted altar)
      { pos: [-21, 3, -25], color: 0xdd4444, intensity: 1.5, dist: 12 },
      { pos: [-18, 6, -25], color: 0xaa3333, intensity: 0.8, dist: 15 },
      
      // Right chapel - sickly green (poison/nature)
      { pos: [21, 3, -25], color: 0x66cc77, intensity: 1.5, dist: 12 },
      { pos: [18, 6, -25], color: 0x44aa55, intensity: 0.8, dist: 15 },
      
      // Secret room - golden treasure glow
      { pos: [21, 2, -40], color: 0xffdd66, intensity: 2.0, dist: 10 },
      
      // Altar room - holy golden light
      { pos: [0, 4, -58], color: 0xffcc66, intensity: 2.0, dist: 15 },
      { pos: [-2, 2, -57], color: 0xffaa44, intensity: 1.0, dist: 6 },
      { pos: [2, 2, -57], color: 0xffaa44, intensity: 1.0, dist: 6 },
      
      // Crypt - cold, deathly blue
      { pos: [-6, 2, -65], color: 0x4466cc, intensity: 1.0, dist: 12 },
      { pos: [6, 2, -75], color: 0x4466cc, intensity: 1.0, dist: 12 },
      { pos: [0, 3, -70], color: 0x5577aa, intensity: 0.8, dist: 20 },
      
      // Boss arena - ominous red/purple
      { pos: [-8, 4, -95], color: 0xaa3355, intensity: 1.5, dist: 16 },
      { pos: [8, 4, -95], color: 0xaa3355, intensity: 1.5, dist: 16 },
      { pos: [0, 8, -98], color: 0xcc4477, intensity: 2.0, dist: 25 },
      { pos: [0, 1, -95], color: 0x882244, intensity: 1.2, dist: 16 },
    ];
    
    accents.forEach(({ pos, color, intensity, dist }) => {
      const light = new THREE.PointLight(color, intensity, dist);
      light.position.set(...pos);
      this.scene.add(light);
    });
    
    // Animated torch flames at pillar locations
    const torchPositions = [
      [-6, 6, -12], [6, 6, -12],
      [-6, 6, -22], [6, 6, -22],
      [-6, 6, -32], [6, 6, -32],
      [-6, 6, -42], [6, 6, -42],
    ];
    
    torchPositions.forEach(pos => {
      const torch = new THREE.PointLight(0xff8844, 1.5, 12);
      torch.position.set(...pos);
      this.scene.add(torch);
      
      // Animate flicker
      const baseIntensity = 1.5;
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
    const CRYPT_Y = -3;
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
      
      // Old Crypt area (above ground)
      { pos: new THREE.Vector3(-5, 0, -68), type: 'SENTINEL' },
      { pos: new THREE.Vector3(5, 0, -72), type: 'BERSERKER' },
      { pos: new THREE.Vector3(0, 0, -78), type: 'BERSERKER' },
      
      // === UNDERGROUND CRYPT (Y=-3) ===
      
      // Entry Antechamber - single hollow knight patrolling around brazier
      { pos: new THREE.Vector3(0, CRYPT_Y, -25), type: 'HOLLOW_SOLDIER', behavior: 'patrol', patrolRadius: 4 },
      
      // Ossuary Chamber - Bone Revenants dormant in bone piles (ambush enemies)
      // They rise when player enters the chamber (trigger radius 6)
      { pos: new THREE.Vector3(-20, CRYPT_Y, -45), type: 'BONE_REVENANT', behavior: 'ambush', triggerRadius: 6 },
      { pos: new THREE.Vector3(-16, CRYPT_Y, -49), type: 'BONE_REVENANT', behavior: 'ambush', triggerRadius: 6 },
      
      // Ritual Chamber - Crypt Guardian elite (mini-boss guarding the ritual circle)
      { pos: new THREE.Vector3(0, CRYPT_Y, -55), type: 'CRYPT_GUARDIAN', behavior: 'guard' },
    ];
  }
  
  // Get item spawn positions
  getItemSpawns() {
    const CRYPT_Y = -3;
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
      
      // === UNDERGROUND CRYPT (Y=-3) ===
      
      // West Corridor - consumable in sarcophagus (alcove 3)
      { pos: new THREE.Vector3(-13, CRYPT_Y + 0.5, -35), type: 'consumable', name: 'Bone Ash', effect: 'tempDamageBoost' },
      
      // Ossuary Chamber - remnants among bones
      { pos: new THREE.Vector3(-18, CRYPT_Y + 0.3, -47), type: 'remnant', value: 250 },
      
      // Ritual Chamber - after defeating elite
      { pos: new THREE.Vector3(0, CRYPT_Y + 0.8, -55), type: 'remnant', value: 400 },
      
      // Secret Room behind illusory wall - Apotheosis Shard (rare infusion material)
      { pos: new THREE.Vector3(8, CRYPT_Y + 0.5, -77), type: 'special', name: 'Apotheosis Shard', description: 'Grants +1 to any infusion track' },
      
      // Secret Room - lore item
      { pos: new THREE.Vector3(9, CRYPT_Y + 0.3, -78), type: 'lore', name: 'Crumbling Journal Page', text: 'The final experiment failed. The flesh rejected transcendence. I descend to try once more...' },
    ];
  }
  
  // Get crypt-specific spawns for underground level (for reference/future use)
  getCryptEnemySpawns() {
    const CRYPT_Y = -3;
    return [
      // Entry Antechamber - patrol guard around brazier
      { pos: new THREE.Vector3(0, CRYPT_Y, -25), type: 'HOLLOW_SOLDIER', behavior: 'patrol', patrolRadius: 4 },
      
      // Ossuary Chamber - Bone Revenants rise from bone piles when player enters
      { pos: new THREE.Vector3(-20, CRYPT_Y, -45), type: 'BONE_REVENANT', behavior: 'ambush', triggerRadius: 6 },
      { pos: new THREE.Vector3(-16, CRYPT_Y, -49), type: 'BONE_REVENANT', behavior: 'ambush', triggerRadius: 6 },
      
      // Ritual Chamber - Crypt Guardian elite (mini-boss)
      { pos: new THREE.Vector3(0, CRYPT_Y, -55), type: 'CRYPT_GUARDIAN', behavior: 'guard' },
    ];
  }
}
