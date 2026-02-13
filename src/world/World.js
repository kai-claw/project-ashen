import * as THREE from 'three';

export class World {
  constructor(scene) {
    this.scene = scene;
    this.colliders = []; // For collision detection
    this.doors = []; // Locked doors
    this.hiddenWalls = []; // Illusory walls
    this.bonfirePosition = new THREE.Vector3(0, 0, 5);
    
    this._createCathedral();
    this._createLighting();
  }

  _createCathedral() {
    const stoneMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a30,
      roughness: 0.85,
      metalness: 0.1,
    });
    
    const darkStoneMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a20,
      roughness: 0.9,
      metalness: 0.05,
    });
    
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a20,
      roughness: 0.95,
      metalness: 0.05,
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
    
    // Fog for atmosphere
    this.scene.fog = new THREE.FogExp2(0x0a0a0f, 0.015);
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
      
      console.log(`[DOOR] ${door.name} opened!`);
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
    
    console.log(`[SECRET] Hidden wall revealed: ${wallId}`);
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
    // Ambient light - bright enough to see
    const ambient = new THREE.AmbientLight(0x404060, 0.8);
    this.scene.add(ambient);
    
    // Moonlight through unseen windows
    const dirLight = new THREE.DirectionalLight(0x8888cc, 1.0);
    dirLight.position.set(-15, 20, -10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.set(2048, 2048);
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 100;
    dirLight.shadow.camera.left = -40;
    dirLight.shadow.camera.right = 40;
    dirLight.shadow.camera.top = 40;
    dirLight.shadow.camera.bottom = -40;
    this.scene.add(dirLight);
    
    // Accent lights throughout cathedral
    const accents = [
      // Entrance courtyard
      { pos: [0, 3, 5], color: 0xff6622, intensity: 2, dist: 10 }, // Bonfire
      
      // Main hall
      { pos: [0, 6, -20], color: 0x4444aa, intensity: 0.8, dist: 15 },
      { pos: [0, 6, -40], color: 0x4444aa, intensity: 0.8, dist: 15 },
      
      // Left chapel
      { pos: [-18, 4, -25], color: 0xaa4444, intensity: 1, dist: 12 },
      
      // Right chapel
      { pos: [18, 4, -25], color: 0x44aa44, intensity: 1, dist: 12 },
      
      // Altar room
      { pos: [0, 5, -55], color: 0xffaa44, intensity: 1.5, dist: 12 },
      
      // Crypt
      { pos: [0, 3, -70], color: 0x2244aa, intensity: 0.6, dist: 15 },
      
      // Boss arena
      { pos: [0, 5, -95], color: 0xaa2222, intensity: 1.2, dist: 20 },
    ];
    
    accents.forEach(({ pos, color, intensity, dist }) => {
      const light = new THREE.PointLight(color, intensity, dist);
      light.position.set(...pos);
      this.scene.add(light);
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
