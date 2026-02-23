import * as THREE from 'three';

/**
 * NPCManager - Creates placeholder NPCs for villages
 * Phase 13: Villages and Landmarks
 * 
 * Populates villages with static humanoid figures.
 * NPCs are non-hostile and provide visual population.
 * Future: will add dialogue, shops, quests.
 */
export class NPCManager {
  constructor(scene, terrainGenerator, villageManager) {
    this.scene = scene;
    this.terrain = terrainGenerator;
    this.villageManager = villageManager;
    
    // NPC settings
    this.npcsPerVillage = { min: 2, max: 3 };
    
    // NPC types with their colors and roles
    this.npcTypes = [
      { type: 'merchant', bodyColor: 0x3366aa, headColor: 0xd4a574, role: 'Sells goods' },
      { type: 'guard', bodyColor: 0x555555, headColor: 0xc4956a, role: 'Protects village' },
      { type: 'villager', bodyColor: 0x6b5344, headColor: 0xddb896, role: 'Common folk' },
      { type: 'elder', bodyColor: 0x553366, headColor: 0xc9a080, role: 'Village wisdom' },
      { type: 'blacksmith', bodyColor: 0x333333, headColor: 0xd4a080, role: 'Crafts weapons' },
    ];
    
    // Shared materials (created per NPC type)
    this.materials = new Map();
    
    // Store NPC data
    this.npcs = [];
    this.meshes = [];
    
    // Generate NPCs for all villages
    this._populateVillages();
  }
  
  /**
   * Create material for an NPC type
   */
  _getOrCreateMaterial(color, roughness = 0.8) {
    const key = `${color.toString(16)}_${roughness}`;
    if (!this.materials.has(key)) {
      this.materials.set(key, new THREE.MeshBasicMaterial({
        color,
        roughness,
      }));
    }
    return this.materials.get(key);
  }
  
  /**
   * Populate all villages with NPCs
   */
  _populateVillages() {
    const villages = this.villageManager.getVillages();
    
    for (const village of villages) {
      this._populateVillage(village);
    }
    
    console.log(`[NPCManager] Created ${this.npcs.length} NPCs across ${villages.length} villages`);
  }
  
  /**
   * Add NPCs to a single village
   */
  _populateVillage(village) {
    const npcCount = this.npcsPerVillage.min + 
      Math.floor(Math.random() * (this.npcsPerVillage.max - this.npcsPerVillage.min + 1));
    
    // Ensure variety: first NPC is merchant, second is guard, rest are random
    const assignedTypes = [];
    assignedTypes.push(this.npcTypes[0]); // merchant
    if (npcCount > 1) assignedTypes.push(this.npcTypes[1]); // guard
    while (assignedTypes.length < npcCount) {
      const randomType = this.npcTypes[Math.floor(Math.random() * this.npcTypes.length)];
      assignedTypes.push(randomType);
    }
    
    // Place NPCs around the village well (center)
    for (let i = 0; i < npcCount; i++) {
      // Distribute NPCs in a loose circle around village center
      const angle = (i / npcCount) * Math.PI * 2 + Math.random() * 0.5;
      const dist = 3 + Math.random() * 5; // 3-8 units from center
      
      // Local position relative to village
      const localX = Math.cos(angle) * dist;
      const localZ = Math.sin(angle) * dist;
      
      // Convert to world position accounting for village rotation
      const cos = Math.cos(village.rotation);
      const sin = Math.sin(village.rotation);
      const worldX = village.x + localX * cos - localZ * sin;
      const worldZ = village.z + localX * sin + localZ * cos;
      const worldY = this.terrain.getTerrainHeight(worldX, worldZ);
      
      const npcType = assignedTypes[i];
      
      // Create the NPC
      const npc = this._createNPC(worldX, worldY, worldZ, npcType, village);
      this.npcs.push(npc);
    }
  }
  
  /**
   * Create a single NPC at given position
   * NPCs are simple humanoid figures: capsule body + sphere head
   */
  _createNPC(x, y, z, npcType, village) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    
    // Body dimensions
    const bodyHeight = 1.4 + Math.random() * 0.2; // 1.4-1.6
    const bodyRadius = 0.25 + Math.random() * 0.05;
    const headRadius = 0.18 + Math.random() * 0.02;
    const legHeight = 0.6;
    
    // === BODY (capsule: cylinder + 2 hemispheres) ===
    const bodyMat = this._getOrCreateMaterial(npcType.bodyColor);
    
    // Main body cylinder
    const bodyGeo = new THREE.CylinderGeometry(bodyRadius, bodyRadius * 0.9, bodyHeight - bodyRadius * 2, 12);
    const body = new THREE.Mesh(bodyGeo, bodyMat);
    body.position.y = legHeight + bodyHeight / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    group.add(body);
    
    // Top hemisphere
    const topCapGeo = new THREE.SphereGeometry(bodyRadius, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    const topCap = new THREE.Mesh(topCapGeo, bodyMat);
    topCap.position.y = legHeight + bodyHeight - bodyRadius;
    topCap.castShadow = true;
    group.add(topCap);
    
    // Bottom hemisphere (slightly smaller for legs illusion)
    const bottomCapGeo = new THREE.SphereGeometry(bodyRadius * 0.9, 12, 8, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2);
    const bottomCap = new THREE.Mesh(bottomCapGeo, bodyMat);
    bottomCap.position.y = legHeight + bodyRadius;
    bottomCap.castShadow = true;
    group.add(bottomCap);
    
    // === HEAD (sphere) ===
    const headMat = this._getOrCreateMaterial(npcType.headColor, 0.6);
    const headGeo = new THREE.SphereGeometry(headRadius, 12, 10);
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = legHeight + bodyHeight + headRadius * 0.7;
    head.castShadow = true;
    group.add(head);
    
    // === LEGS (two cylinders) ===
    const legMat = this._getOrCreateMaterial(0x443322, 0.9); // Dark pants
    const legGeo = new THREE.CylinderGeometry(bodyRadius * 0.35, bodyRadius * 0.3, legHeight, 8);
    
    const legSpacing = bodyRadius * 0.5;
    const leftLeg = new THREE.Mesh(legGeo, legMat);
    leftLeg.position.set(-legSpacing, legHeight / 2, 0);
    leftLeg.castShadow = true;
    group.add(leftLeg);
    
    const rightLeg = new THREE.Mesh(legGeo, legMat);
    rightLeg.position.set(legSpacing, legHeight / 2, 0);
    rightLeg.castShadow = true;
    group.add(rightLeg);
    
    // === ARMS (two cylinders, angled down) ===
    const armLength = bodyHeight * 0.4;
    const armRadius = bodyRadius * 0.25;
    const armGeo = new THREE.CylinderGeometry(armRadius, armRadius * 0.8, armLength, 8);
    
    const leftArm = new THREE.Mesh(armGeo, bodyMat);
    leftArm.position.set(-bodyRadius - armRadius, legHeight + bodyHeight * 0.7, 0);
    leftArm.rotation.z = 0.3; // Slight angle
    leftArm.castShadow = true;
    group.add(leftArm);
    
    const rightArm = new THREE.Mesh(armGeo, bodyMat);
    rightArm.position.set(bodyRadius + armRadius, legHeight + bodyHeight * 0.7, 0);
    rightArm.rotation.z = -0.3;
    rightArm.castShadow = true;
    group.add(rightArm);
    
    // === TYPE-SPECIFIC ACCESSORIES ===
    this._addAccessories(group, npcType, legHeight, bodyHeight, bodyRadius);
    
    // Face the village center (roughly)
    const faceAngle = Math.atan2(village.x - x, village.z - z);
    group.rotation.y = faceAngle + (Math.random() - 0.5) * 0.5; // With some variation
    
    this.scene.add(group);
    this.meshes.push(group);
    
    return {
      mesh: group,
      type: npcType.type,
      role: npcType.role,
      position: new THREE.Vector3(x, y, z),
      villageX: village.x,
      villageZ: village.z,
    };
  }
  
  /**
   * Add type-specific accessories to NPC
   */
  _addAccessories(group, npcType, legHeight, bodyHeight, bodyRadius) {
    switch (npcType.type) {
      case 'merchant':
        // Apron
        this._addApron(group, legHeight, bodyHeight, bodyRadius);
        break;
        
      case 'guard':
        // Simple helmet and spear
        this._addHelmet(group, legHeight, bodyHeight);
        this._addSpear(group, legHeight, bodyHeight, bodyRadius);
        break;
        
      case 'blacksmith':
        // Apron and hammer
        this._addApron(group, legHeight, bodyHeight, bodyRadius, 0x222222);
        this._addHammer(group, legHeight, bodyHeight, bodyRadius);
        break;
        
      case 'elder':
        // Phase 45: Enhanced elder with robe, staff+orb, hood, beard
        this._addElderDetails(group, legHeight, bodyHeight, bodyRadius);
        break;
        
      default:
        // No accessories for villagers
        break;
    }
  }
  
  /**
   * Add an apron accessory
   */
  _addApron(group, legHeight, bodyHeight, bodyRadius, color = 0xddddcc) {
    const apronMat = this._getOrCreateMaterial(color, 0.9);
    const apronGeo = new THREE.BoxGeometry(bodyRadius * 1.8, bodyHeight * 0.5, 0.05);
    const apron = new THREE.Mesh(apronGeo, apronMat);
    apron.position.set(0, legHeight + bodyHeight * 0.35, bodyRadius + 0.03);
    apron.castShadow = true;
    group.add(apron);
  }
  
  /**
   * Add a guard helmet
   */
  _addHelmet(group, legHeight, bodyHeight) {
    const helmetMat = this._getOrCreateMaterial(0x666666, 0.4);
    const helmetGeo = new THREE.SphereGeometry(0.22, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2);
    const helmet = new THREE.Mesh(helmetGeo, helmetMat);
    helmet.position.y = legHeight + bodyHeight + 0.2;
    helmet.castShadow = true;
    group.add(helmet);
    
    // Helmet rim
    const rimGeo = new THREE.TorusGeometry(0.22, 0.03, 8, 16);
    const rim = new THREE.Mesh(rimGeo, helmetMat);
    rim.position.y = legHeight + bodyHeight + 0.1;
    rim.rotation.x = Math.PI / 2;
    group.add(rim);
  }
  
  /**
   * Add a spear weapon
   */
  _addSpear(group, legHeight, bodyHeight, bodyRadius) {
    const woodMat = this._getOrCreateMaterial(0x5c4033, 0.9);
    const metalMat = this._getOrCreateMaterial(0x888888, 0.3);
    
    const spearLength = 2.2;
    const shaftGeo = new THREE.CylinderGeometry(0.03, 0.03, spearLength, 6);
    const shaft = new THREE.Mesh(shaftGeo, woodMat);
    shaft.position.set(bodyRadius + 0.15, legHeight + spearLength / 2, 0);
    shaft.castShadow = true;
    group.add(shaft);
    
    // Spear tip
    const tipGeo = new THREE.ConeGeometry(0.06, 0.2, 6);
    const tip = new THREE.Mesh(tipGeo, metalMat);
    tip.position.set(bodyRadius + 0.15, legHeight + spearLength + 0.1, 0);
    tip.castShadow = true;
    group.add(tip);
  }
  
  /**
   * Add a blacksmith hammer
   */
  _addHammer(group, legHeight, bodyHeight, bodyRadius) {
    const woodMat = this._getOrCreateMaterial(0x5c4033, 0.9);
    const metalMat = this._getOrCreateMaterial(0x555555, 0.4);
    
    // Handle
    const handleGeo = new THREE.CylinderGeometry(0.025, 0.025, 0.5, 6);
    const handle = new THREE.Mesh(handleGeo, woodMat);
    handle.position.set(bodyRadius + 0.3, legHeight + bodyHeight * 0.5, 0.1);
    handle.rotation.z = 0.3;
    handle.castShadow = true;
    group.add(handle);
    
    // Hammer head
    const headGeo = new THREE.BoxGeometry(0.15, 0.08, 0.08);
    const head = new THREE.Mesh(headGeo, metalMat);
    head.position.set(bodyRadius + 0.4, legHeight + bodyHeight * 0.65, 0.1);
    head.rotation.z = 0.3;
    head.castShadow = true;
    group.add(head);
  }
  
  /**
   * Add an elder's walking staff
   */
  _addStaff(group, legHeight, bodyHeight, bodyRadius) {
    const woodMat = this._getOrCreateMaterial(0x4a3020, 0.9);
    
    const staffLength = 1.6;
    const staffGeo = new THREE.CylinderGeometry(0.04, 0.035, staffLength, 6);
    const staff = new THREE.Mesh(staffGeo, woodMat);
    staff.position.set(bodyRadius + 0.2, staffLength / 2, 0.15);
    staff.rotation.z = 0.1;
    staff.castShadow = true;
    group.add(staff);
    
    // Gnarled top
    const topGeo = new THREE.SphereGeometry(0.06, 8, 6);
    const top = new THREE.Mesh(topGeo, woodMat);
    top.position.set(bodyRadius + 0.2 + staffLength * 0.05, staffLength + 0.02, 0.15);
    top.castShadow = true;
    group.add(top);
  }
  
  /**
   * Phase 45: Enhanced elder model — long robe, ornate staff, hood, beard
   */
  _addElderDetails(group, legHeight, bodyHeight, bodyRadius) {
    const robeMat = this._getOrCreateMaterial(0x2E1A47); // Dark purple
    const woodMat = this._getOrCreateMaterial(0x8B4513);

    // Extended robe (wider box below waist, covers legs)
    const robeGeo = new THREE.BoxGeometry(bodyRadius * 2.4, bodyHeight * 0.6, bodyRadius * 1.8);
    const robe = new THREE.Mesh(robeGeo, robeMat);
    robe.position.set(0, legHeight * 0.5, 0);
    robe.castShadow = true;
    group.add(robe);

    // Hood (hemisphere on head)
    const hoodGeo = new THREE.SphereGeometry(0.24, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.6);
    const hood = new THREE.Mesh(hoodGeo, robeMat);
    hood.position.set(0, legHeight + bodyHeight + 0.12, -0.03);
    hood.castShadow = true;
    group.add(hood);

    // Beard (inverted cone below chin)
    const beardMat = this._getOrCreateMaterial(0xAAAAAA);
    const beardGeo = new THREE.ConeGeometry(0.08, 0.22, 6);
    const beard = new THREE.Mesh(beardGeo, beardMat);
    beard.position.set(0, legHeight + bodyHeight - 0.05, bodyRadius + 0.08);
    beard.rotation.x = Math.PI; // Point downward
    beard.castShadow = true;
    group.add(beard);

    // Staff (tall, ornate)
    const staffLength = 2.0;
    const staffGeo = new THREE.CylinderGeometry(0.04, 0.04, staffLength, 6);
    const staff = new THREE.Mesh(staffGeo, woodMat);
    staff.position.set(bodyRadius + 0.25, staffLength / 2, 0.1);
    staff.rotation.z = 0.08;
    staff.castShadow = true;
    group.add(staff);

    // Amber orb on top of staff
    const orbMat = this._getOrCreateMaterial(0xDDAA00);
    const orbGeo = new THREE.SphereGeometry(0.1, 10, 8);
    const orb = new THREE.Mesh(orbGeo, orbMat);
    orb.position.set(bodyRadius + 0.25 + staffLength * 0.04, staffLength + 0.08, 0.1);
    group.add(orb);

    // Staff orb glow light
    const orbLight = new THREE.PointLight(0xDDAA00, 0.6, 5);
    orbLight.position.copy(orb.position);
    group.add(orbLight);

    // Slight forward lean for elderly posture
    group.children.forEach(child => {
      if (child !== robe && child !== staff && child !== orb && child !== orbLight) return;
    });
    // Apply lean to entire group subtly by tilting the body parts forward
    // (We offset rotation after creation so existing facing isn't overwritten)
    group.userData.isElder = true;
  }

  // ========================================
  // PUBLIC API
  // ========================================
  
  /**
   * Get all NPCs
   */
  getNPCs() {
    return this.npcs;
  }
  
  /**
   * Get NPC at position (for future interaction)
   */
  getNPCAt(x, z, radius = 1.5) {
    for (const npc of this.npcs) {
      const dx = x - npc.position.x;
      const dz = z - npc.position.z;
      if (Math.sqrt(dx * dx + dz * dz) < radius) {
        return npc;
      }
    }
    return null;
  }
  
  /**
   * Get NPCs in a village
   */
  getNPCsInVillage(villageX, villageZ, radius = 25) {
    return this.npcs.filter(npc => {
      const dx = npc.villageX - villageX;
      const dz = npc.villageZ - villageZ;
      return Math.sqrt(dx * dx + dz * dz) < radius;
    });
  }
  
  /**
   * Check if position is near an NPC
   */
  isNearNPC(x, z, radius = 2) {
    return this.getNPCAt(x, z, radius) !== null;
  }
  
  /**
   * Update NPCs — Phase 45: idle animations (breathing, head bob)
   */
  update(deltaTime) {
    this._elapsed = (this._elapsed || 0) + deltaTime;
    const t = this._elapsed;

    for (let i = 0; i < this.npcs.length; i++) {
      const npc = this.npcs[i];
      const group = npc.mesh;
      if (!group || !group.children) continue;

      // Each NPC has a phase offset so they don't all sync
      const offset = i * 1.7;

      // Body breathing (child 0 is the body cylinder)
      const body = group.children[0];
      if (body) body.scale.y = 1.0 + Math.sin((t + offset) * 1.5) * 0.025;

      // Head bob (child 3 is the head sphere)
      const head = group.children[3];
      if (head && head.userData._baseY === undefined) {
        head.userData._baseY = head.position.y;
      }
      if (head && head.userData._baseY !== undefined) {
        head.position.y = head.userData._baseY + Math.sin((t + offset) * 2) * 0.015;
      }

      // Slight body sway
      group.rotation.y += Math.sin((t + offset) * 0.8) * 0.0002;
    }
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
    
    for (const mat of this.materials.values()) {
      mat.dispose();
    }
    
    this.npcs = [];
    this.meshes = [];
    this.materials.clear();
  }
}
