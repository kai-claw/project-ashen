/**
 * BossRenderer.js - Epic World Boss Visual Models
 * Phase 21: Boss Encounters
 * 
 * Creates distinct, massive boss models for world bosses:
 * - Golem: Bulky rock construct, crystalline core (3.5x scale)
 * - Wraith: Ethereal, flowing shadow form (2.5x scale)
 * - Guardian/Treant: Tree-like nature entity (4x scale - largest)
 * - Knight: Armored humanoid, corrupted paladin (2x scale)
 * 
 * Features:
 * - Phase visual changes (color shift, size increase, new effects)
 * - Boss-specific particle effects
 * - Attack VFX (ground crack, projectile trails, summon circles)
 * - Phase auras (green -> yellow -> red)
 * - Dramatic death animations
 */

import * as THREE from 'three';

// ========== BOSS COLOR PALETTES ==========
const BOSS_PALETTES = {
  golem: {
    body: 0x5a5a6a,       // Stone gray
    accent: 0x4488ff,     // Crystal blue
    eye: 0x44aaff,        // Glowing blue
    glow: 0x4488ff,
    aura: 0x223366,
    phase2: 0xff6644,     // Orange-ish
    phase3: 0xff2200,     // Red
  },
  wraith: {
    body: 0x1a1a2a,       // Deep shadow
    accent: 0x6622aa,     // Dark purple
    eye: 0xaa22ff,        // Bright purple
    glow: 0x6622aa,
    aura: 0x220033,
    phase2: 0xaa44ff,     // Brighter purple
    phase3: 0xff00ff,     // Magenta
  },
  treant: {
    body: 0x3a4a2a,       // Bark brown-green
    accent: 0x66aa44,     // Leaf green
    eye: 0x88ff44,        // Nature glow
    glow: 0x44aa22,
    aura: 0x224411,
    phase2: 0xaacc44,     // Yellow-green
    phase3: 0xff8844,     // Autumn orange
  },
  knight: {
    body: 0x2a2a35,       // Dark steel
    accent: 0x880044,     // Corruption red
    eye: 0xff2244,        // Crimson
    glow: 0x880044,
    aura: 0x330022,
    phase2: 0xaa2255,     // Brighter corruption
    phase3: 0xff0044,     // Full corruption
  },
};

/**
 * BossRenderer - Creates and manages world boss visuals
 */
export class BossRenderer {
  constructor() {
    // Cache for boss models
    this.modelCache = new Map();
    
    // Active particle systems
    this.particleSystems = new Map();
    
    // Active effects
    this.activeEffects = [];
    
    console.log('[BossRenderer] Initialized');
  }

  /**
   * Create a boss model based on type
   * @param {string} bossType - golem, wraith, treant, knight
   * @param {object} bossData - Boss data from BossData.js
   * @returns {THREE.Group} Boss model group with all components
   */
  createBossModel(bossType, bossData = {}) {
    const type = bossType.toLowerCase();
    const group = new THREE.Group();
    group.userData.bossType = type;
    group.userData.bossData = bossData;
    group.userData.currentPhase = 1;

    // Build based on type
    switch (type) {
      case 'golem':
        this.buildGolem(group, bossData);
        break;
      case 'wraith':
        this.buildWraith(group, bossData);
        break;
      case 'treant':
      case 'guardian':
        this.buildTreant(group, bossData);
        break;
      case 'knight':
        this.buildKnight(group, bossData);
        break;
      default:
        // Default to golem
        this.buildGolem(group, bossData);
    }

    // Add common boss effects
    this.addBossAura(group, type);
    this.addPhaseIndicator(group, type);

    return group;
  }

  // =============================================
  // ANCIENT GOLEM - Massive stone construct
  // =============================================
  buildGolem(group, bossData) {
    const palette = BOSS_PALETTES.golem;
    const scale = bossData.scale || 3.5;
    
    // Body container
    const body = new THREE.Group();
    group.add(body);
    group.userData.body = body;

    // === MAIN TORSO - Massive rocky mass ===
    const torsoMat = new THREE.MeshStandardMaterial({
      color: palette.body,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true,
    });

    // Core torso - icosahedron for rocky look
    const torsoGeo = new THREE.IcosahedronGeometry(1.0, 1);
    const torso = new THREE.Mesh(torsoGeo, torsoMat);
    torso.position.set(0, 1.8, 0);
    torso.scale.set(1.4, 1.2, 1.1);
    torso.castShadow = true;
    body.add(torso);

    // Secondary mass - upper body
    const upperGeo = new THREE.IcosahedronGeometry(0.8, 1);
    const upper = new THREE.Mesh(upperGeo, torsoMat);
    upper.position.set(0, 2.8, 0.1);
    upper.scale.set(1.3, 1.0, 1.0);
    upper.castShadow = true;
    body.add(upper);

    // === CRYSTALLINE CORE - Glowing heart ===
    const coreMat = new THREE.MeshStandardMaterial({
      color: palette.accent,
      emissive: palette.accent,
      emissiveIntensity: 2.5,
      transparent: true,
      opacity: 0.85,
    });

    const coreGeo = new THREE.OctahedronGeometry(0.35, 0);
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(0, 2.0, 0.55);
    core.rotation.z = Math.PI / 4;
    body.add(core);
    group.userData.core = core;

    // Core glow light
    const coreLight = new THREE.PointLight(palette.accent, 1.5, 6);
    coreLight.position.copy(core.position);
    body.add(coreLight);
    group.userData.coreLight = coreLight;

    // Crystal formations on body
    this.addGolemCrystals(body, palette);

    // === HEAD - Small rocky protrusion ===
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x4a4a5a,
      roughness: 0.85,
      metalness: 0.15,
      flatShading: true,
    });

    const headGeo = new THREE.DodecahedronGeometry(0.4, 0);
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 3.5, 0.25);
    head.scale.set(1.0, 0.8, 0.9);
    head.castShadow = true;
    body.add(head);

    // === EYES - Glowing crystal eyes ===
    const eyeMat = new THREE.MeshStandardMaterial({
      color: palette.eye,
      emissive: palette.eye,
      emissiveIntensity: 5,
    });

    const eyeGeo = new THREE.OctahedronGeometry(0.12, 0);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat.clone());
    leftEye.position.set(-0.15, 3.55, 0.5);
    leftEye.rotation.z = Math.PI / 4;
    body.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat.clone());
    rightEye.position.set(0.15, 3.55, 0.5);
    rightEye.rotation.z = Math.PI / 4;
    body.add(rightEye);

    group.userData.eyes = [leftEye, rightEye];

    // Eye glow light
    const eyeLight = new THREE.PointLight(palette.eye, 0.8, 3);
    eyeLight.position.set(0, 3.55, 0.6);
    body.add(eyeLight);
    group.userData.eyeLight = eyeLight;

    // === MASSIVE ARMS - Rocky boulder fists ===
    this.buildGolemArms(body, palette);

    // === LEGS - Pillar-like stone legs ===
    this.buildGolemLegs(body, palette);

    // === ROCK DEBRIS PARTICLES ===
    const particles = this.createRockDebrisParticles(palette);
    group.add(particles);
    group.userData.particles = particles;

    // Apply scale
    group.scale.setScalar(scale);
    
    // Store materials for phase changes
    group.userData.bodyMaterial = torsoMat;
    group.userData.coreMaterial = coreMat;
    group.userData.eyeMaterial = eyeMat;
  }

  addGolemCrystals(body, palette) {
    const crystalMat = new THREE.MeshStandardMaterial({
      color: palette.accent,
      emissive: palette.accent,
      emissiveIntensity: 1.5,
      transparent: true,
      opacity: 0.75,
    });

    const crystalPositions = [
      { x: -0.6, y: 2.5, z: 0.3, scale: 0.25, rot: 0.3 },
      { x: 0.65, y: 2.3, z: 0.2, scale: 0.2, rot: -0.4 },
      { x: 0, y: 3.2, z: -0.3, scale: 0.3, rot: 0.6 },
      { x: -0.45, y: 1.5, z: 0.5, scale: 0.18, rot: 0.1 },
      { x: 0.5, y: 1.7, z: 0.45, scale: 0.22, rot: -0.2 },
      { x: 0.2, y: 2.9, z: -0.25, scale: 0.15, rot: 0.5 },
    ];

    const crystals = [];
    crystalPositions.forEach((pos) => {
      const crystalGeo = new THREE.ConeGeometry(pos.scale, pos.scale * 2.5, 5);
      const crystal = new THREE.Mesh(crystalGeo, crystalMat.clone());
      crystal.position.set(pos.x, pos.y, pos.z);
      crystal.rotation.set(pos.rot, Math.random() * Math.PI, pos.rot * 0.5);
      crystal.castShadow = true;
      body.add(crystal);
      crystals.push(crystal);
    });

    body.userData.crystals = crystals;
  }

  buildGolemArms(body, palette) {
    const armMat = new THREE.MeshStandardMaterial({
      color: palette.body,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true,
    });

    // === LEFT ARM ===
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-1.2, 2.2, 0);

    // Upper arm - rocky mass
    const upperArmGeo = new THREE.IcosahedronGeometry(0.4, 0);
    const leftUpperArm = new THREE.Mesh(upperArmGeo, armMat);
    leftUpperArm.position.set(-0.3, 0, 0);
    leftUpperArm.scale.set(0.9, 1.4, 0.8);
    leftUpperArm.castShadow = true;
    leftArmGroup.add(leftUpperArm);

    // Lower arm
    const lowerArmGeo = new THREE.IcosahedronGeometry(0.35, 0);
    const leftLowerArm = new THREE.Mesh(lowerArmGeo, armMat);
    leftLowerArm.position.set(-0.6, -0.6, 0.1);
    leftLowerArm.scale.set(0.8, 1.3, 0.75);
    leftLowerArm.castShadow = true;
    leftArmGroup.add(leftLowerArm);

    // FIST - Massive boulder
    const fistGeo = new THREE.IcosahedronGeometry(0.5, 1);
    const leftFist = new THREE.Mesh(fistGeo, armMat);
    leftFist.position.set(-0.85, -1.3, 0.15);
    leftFist.castShadow = true;
    leftArmGroup.add(leftFist);

    leftArmGroup.rotation.z = 0.3;
    body.add(leftArmGroup);
    body.userData.leftArm = leftArmGroup;

    // === RIGHT ARM ===
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(1.2, 2.2, 0);

    const rightUpperArm = new THREE.Mesh(upperArmGeo, armMat);
    rightUpperArm.position.set(0.3, 0, 0);
    rightUpperArm.scale.set(0.9, 1.4, 0.8);
    rightUpperArm.castShadow = true;
    rightArmGroup.add(rightUpperArm);

    const rightLowerArm = new THREE.Mesh(lowerArmGeo, armMat);
    rightLowerArm.position.set(0.6, -0.6, 0.1);
    rightLowerArm.scale.set(0.8, 1.3, 0.75);
    rightLowerArm.castShadow = true;
    rightArmGroup.add(rightLowerArm);

    const rightFist = new THREE.Mesh(fistGeo, armMat);
    rightFist.position.set(0.85, -1.3, 0.15);
    rightFist.castShadow = true;
    rightArmGroup.add(rightFist);

    rightArmGroup.rotation.z = -0.3;
    body.add(rightArmGroup);
    body.userData.rightArm = rightArmGroup;
  }

  buildGolemLegs(body, palette) {
    const legMat = new THREE.MeshStandardMaterial({
      color: 0x4a4a55,
      roughness: 0.9,
      metalness: 0.1,
      flatShading: true,
    });

    // Left leg - stone pillar
    const legGeo = new THREE.CylinderGeometry(0.35, 0.45, 1.4, 8);
    const leftLeg = new THREE.Mesh(legGeo, legMat);
    leftLeg.position.set(-0.5, 0.7, 0);
    leftLeg.castShadow = true;
    body.add(leftLeg);

    // Right leg
    const rightLeg = new THREE.Mesh(legGeo, legMat);
    rightLeg.position.set(0.5, 0.7, 0);
    rightLeg.castShadow = true;
    body.add(rightLeg);

    // Feet - flat stone bases
    const footGeo = new THREE.CylinderGeometry(0.5, 0.55, 0.2, 8);
    const leftFoot = new THREE.Mesh(footGeo, legMat);
    leftFoot.position.set(-0.5, 0.1, 0.05);
    leftFoot.castShadow = true;
    body.add(leftFoot);

    const rightFoot = new THREE.Mesh(footGeo, legMat);
    rightFoot.position.set(0.5, 0.1, 0.05);
    rightFoot.castShadow = true;
    body.add(rightFoot);
  }

  createRockDebrisParticles(palette) {
    const particleCount = 30;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);

    const color = new THREE.Color(palette.body);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2;
      positions[i * 3 + 1] = Math.random() * 3 + 0.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.5;

      const variation = 0.8 + Math.random() * 0.4;
      colors[i * 3] = color.r * variation;
      colors[i * 3 + 1] = color.g * variation;
      colors[i * 3 + 2] = color.b * variation;

      sizes[i] = 0.05 + Math.random() * 0.08;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    particles.userData.time = 0;
    particles.userData.basePositions = positions.slice();
    particles.userData.type = 'rock_debris';

    return particles;
  }

  // =============================================
  // SHADOW WRAITH - Ethereal shadow form
  // =============================================
  buildWraith(group, bossData) {
    const palette = BOSS_PALETTES.wraith;
    const scale = bossData.scale || 2.5;

    const body = new THREE.Group();
    group.add(body);
    group.userData.body = body;

    // === ETHEREAL BODY - Flowing shadow form ===
    const bodyMat = new THREE.MeshStandardMaterial({
      color: palette.body,
      roughness: 0.3,
      metalness: 0.2,
      transparent: true,
      opacity: 0.85,
      side: THREE.DoubleSide,
    });

    // Main torso - elongated, twisted
    const torsoGeo = new THREE.CapsuleGeometry(0.5, 0.8, 12, 20);
    const torso = new THREE.Mesh(torsoGeo, bodyMat);
    torso.position.set(0, 2.0, 0);
    torso.scale.set(1.0, 1.2, 0.7);
    torso.castShadow = true;
    body.add(torso);

    // Upper body - merging into head
    const upperGeo = new THREE.CapsuleGeometry(0.35, 0.5, 10, 16);
    const upper = new THREE.Mesh(upperGeo, bodyMat);
    upper.position.set(0, 2.9, 0.1);
    upper.scale.set(0.9, 1.0, 0.8);
    upper.castShadow = true;
    body.add(upper);

    // === SHADOW CORE - Inner glow ===
    const coreMat = new THREE.MeshStandardMaterial({
      color: palette.accent,
      emissive: palette.accent,
      emissiveIntensity: 3,
      transparent: true,
      opacity: 0.6,
    });

    const coreGeo = new THREE.SphereGeometry(0.25, 16, 12);
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(0, 2.2, 0);
    body.add(core);
    group.userData.core = core;

    // Core glow
    const coreLight = new THREE.PointLight(palette.accent, 1.0, 5);
    coreLight.position.copy(core.position);
    body.add(coreLight);
    group.userData.coreLight = coreLight;

    // === HEAD - Hooded skull-like form ===
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a25,
      roughness: 0.4,
      metalness: 0.1,
      transparent: true,
      opacity: 0.9,
    });

    // Hood shape
    const hoodGeo = new THREE.SphereGeometry(0.4, 16, 12, 0, Math.PI * 2, 0, Math.PI * 0.7);
    const hood = new THREE.Mesh(hoodGeo, headMat);
    hood.position.set(0, 3.3, 0);
    hood.rotation.x = 0.3;
    hood.scale.set(1.1, 1.0, 1.0);
    hood.castShadow = true;
    body.add(hood);

    // === GLOWING EYES - Piercing voids ===
    const eyeMat = new THREE.MeshStandardMaterial({
      color: palette.eye,
      emissive: palette.eye,
      emissiveIntensity: 6,
    });

    const eyeGeo = new THREE.SphereGeometry(0.08, 12, 8);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat.clone());
    leftEye.position.set(-0.12, 3.25, 0.32);
    body.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat.clone());
    rightEye.position.set(0.12, 3.25, 0.32);
    body.add(rightEye);

    group.userData.eyes = [leftEye, rightEye];

    // Eye trails (elongated glow)
    const trailMat = new THREE.MeshStandardMaterial({
      color: palette.eye,
      emissive: palette.eye,
      emissiveIntensity: 3,
      transparent: true,
      opacity: 0.5,
    });

    const trailGeo = new THREE.CapsuleGeometry(0.03, 0.15, 4, 8);
    const leftTrail = new THREE.Mesh(trailGeo, trailMat);
    leftTrail.position.set(-0.15, 3.25, 0.25);
    leftTrail.rotation.x = Math.PI / 2;
    leftTrail.rotation.z = 0.3;
    body.add(leftTrail);

    const rightTrail = new THREE.Mesh(trailGeo, trailMat);
    rightTrail.position.set(0.15, 3.25, 0.25);
    rightTrail.rotation.x = Math.PI / 2;
    rightTrail.rotation.z = -0.3;
    body.add(rightTrail);

    // Eye glow light
    const eyeLight = new THREE.PointLight(palette.eye, 0.6, 3);
    eyeLight.position.set(0, 3.25, 0.4);
    body.add(eyeLight);
    group.userData.eyeLight = eyeLight;

    // === GHOSTLY ARMS - Flowing tendrils ===
    this.buildWraithArms(body, palette);

    // === LOWER BODY - Flowing spectral tail ===
    this.buildWraithTail(body, palette);

    // === SHADOW WISP PARTICLES ===
    const particles = this.createShadowWispParticles(palette);
    group.add(particles);
    group.userData.particles = particles;

    // Apply scale
    group.scale.setScalar(scale);

    // Store materials
    group.userData.bodyMaterial = bodyMat;
    group.userData.coreMaterial = coreMat;
    group.userData.eyeMaterial = eyeMat;
  }

  buildWraithArms(body, palette) {
    const armMat = new THREE.MeshStandardMaterial({
      color: palette.body,
      roughness: 0.3,
      metalness: 0.1,
      transparent: true,
      opacity: 0.75,
    });

    // Left arm - flowing tendril
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.5, 2.4, 0);

    // Segments creating flowing arm
    for (let i = 0; i < 5; i++) {
      const segRadius = 0.12 - i * 0.015;
      const segGeo = new THREE.CapsuleGeometry(segRadius, 0.25, 6, 10);
      const seg = new THREE.Mesh(segGeo, armMat);
      seg.position.set(-i * 0.22, -i * 0.15, i * 0.08);
      seg.rotation.z = 0.2 + i * 0.1;
      seg.castShadow = true;
      leftArmGroup.add(seg);
    }

    // Clawed hand
    const clawMat = new THREE.MeshStandardMaterial({
      color: 0x111118,
      roughness: 0.4,
      metalness: 0.3,
      emissive: palette.accent,
      emissiveIntensity: 0.5,
    });

    for (let i = 0; i < 4; i++) {
      const clawGeo = new THREE.ConeGeometry(0.03, 0.2, 4);
      const claw = new THREE.Mesh(clawGeo, clawMat);
      claw.position.set(-1.0 + i * 0.06, -0.85, 0.4 + Math.abs(i - 1.5) * 0.03);
      claw.rotation.x = 0.6;
      claw.rotation.z = 0.2 - i * 0.1;
      leftArmGroup.add(claw);
    }

    body.add(leftArmGroup);
    body.userData.leftArm = leftArmGroup;

    // Right arm (mirrored)
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.5, 2.4, 0);

    for (let i = 0; i < 5; i++) {
      const segRadius = 0.12 - i * 0.015;
      const segGeo = new THREE.CapsuleGeometry(segRadius, 0.25, 6, 10);
      const seg = new THREE.Mesh(segGeo, armMat);
      seg.position.set(i * 0.22, -i * 0.15, i * 0.08);
      seg.rotation.z = -0.2 - i * 0.1;
      seg.castShadow = true;
      rightArmGroup.add(seg);
    }

    for (let i = 0; i < 4; i++) {
      const clawGeo = new THREE.ConeGeometry(0.03, 0.2, 4);
      const claw = new THREE.Mesh(clawGeo, clawMat);
      claw.position.set(1.0 - i * 0.06, -0.85, 0.4 + Math.abs(i - 1.5) * 0.03);
      claw.rotation.x = 0.6;
      claw.rotation.z = -0.2 + i * 0.1;
      rightArmGroup.add(claw);
    }

    body.add(rightArmGroup);
    body.userData.rightArm = rightArmGroup;
  }

  buildWraithTail(body, palette) {
    const tailMat = new THREE.MeshStandardMaterial({
      color: palette.body,
      roughness: 0.3,
      metalness: 0.1,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });

    // Flowing tail made of curved planes
    const tailSegments = [];
    for (let i = 0; i < 6; i++) {
      const width = 0.6 - i * 0.08;
      const height = 0.4;
      const tailGeo = new THREE.PlaneGeometry(width, height, 4, 2);

      // Curve the geometry
      const positions = tailGeo.attributes.position;
      for (let j = 0; j < positions.count; j++) {
        const y = positions.getY(j);
        positions.setZ(j, Math.sin((y + 0.2) * 2) * 0.1);
      }
      tailGeo.computeVertexNormals();

      const tailSeg = new THREE.Mesh(tailGeo, tailMat.clone());
      tailSeg.material.opacity = 0.6 - i * 0.08;
      tailSeg.position.set(0, 1.0 - i * 0.35, -0.1 - i * 0.1);
      tailSeg.rotation.x = -0.3 - i * 0.1;
      tailSegments.push(tailSeg);
      body.add(tailSeg);
    }

    body.userData.tailSegments = tailSegments;
  }

  createShadowWispParticles(palette) {
    const particleCount = 40;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color = new THREE.Color(palette.glow);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1.5;
      positions[i * 3 + 1] = Math.random() * 3.5 + 0.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1.2;

      const variation = 0.7 + Math.random() * 0.5;
      colors[i * 3] = color.r * variation;
      colors[i * 3 + 1] = color.g * variation;
      colors[i * 3 + 2] = color.b * variation;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    particles.userData.time = 0;
    particles.userData.basePositions = positions.slice();
    particles.userData.type = 'shadow_wisp';

    return particles;
  }

  // =============================================
  // FOREST GUARDIAN / TREANT - Tree-like entity
  // =============================================
  buildTreant(group, bossData) {
    const palette = BOSS_PALETTES.treant;
    const scale = bossData.scale || 4.0;

    const body = new THREE.Group();
    group.add(body);
    group.userData.body = body;

    // === TRUNK BODY - Massive tree trunk ===
    const barkMat = new THREE.MeshStandardMaterial({
      color: palette.body,
      roughness: 0.95,
      metalness: 0.05,
    });

    // Main trunk
    const trunkGeo = new THREE.CylinderGeometry(0.5, 0.7, 2.0, 12, 4, false);
    // Deform trunk for organic look
    const trunkPos = trunkGeo.attributes.position;
    for (let i = 0; i < trunkPos.count; i++) {
      const x = trunkPos.getX(i);
      const z = trunkPos.getZ(i);
      const y = trunkPos.getY(i);
      const noise = Math.sin(y * 3 + i * 0.5) * 0.08;
      trunkPos.setX(i, x + noise);
      trunkPos.setZ(i, z + noise * 0.7);
    }
    trunkGeo.computeVertexNormals();

    const trunk = new THREE.Mesh(trunkGeo, barkMat);
    trunk.position.set(0, 1.3, 0);
    trunk.castShadow = true;
    body.add(trunk);

    // Upper trunk/shoulders
    const shoulderGeo = new THREE.SphereGeometry(0.7, 12, 10);
    const shoulders = new THREE.Mesh(shoulderGeo, barkMat);
    shoulders.position.set(0, 2.5, 0);
    shoulders.scale.set(1.3, 0.8, 1.0);
    shoulders.castShadow = true;
    body.add(shoulders);

    // === HEAD - Gnarled face in bark ===
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x3a3a2a,
      roughness: 0.9,
      metalness: 0.05,
    });

    const headGeo = new THREE.SphereGeometry(0.5, 12, 10);
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.set(0, 3.2, 0.25);
    head.scale.set(0.9, 1.1, 0.8);
    head.castShadow = true;
    body.add(head);

    // === GLOWING NATURE EYES ===
    const eyeMat = new THREE.MeshStandardMaterial({
      color: palette.eye,
      emissive: palette.eye,
      emissiveIntensity: 4,
    });

    const eyeGeo = new THREE.SphereGeometry(0.1, 10, 8);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat.clone());
    leftEye.position.set(-0.18, 3.3, 0.5);
    body.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat.clone());
    rightEye.position.set(0.18, 3.3, 0.5);
    body.add(rightEye);

    group.userData.eyes = [leftEye, rightEye];

    // Eye light
    const eyeLight = new THREE.PointLight(palette.eye, 0.7, 4);
    eyeLight.position.set(0, 3.3, 0.6);
    body.add(eyeLight);
    group.userData.eyeLight = eyeLight;

    // === BRANCH CROWN - Antler-like branches ===
    this.buildTreantCrown(body, palette);

    // === MASSIVE BRANCH ARMS ===
    this.buildTreantArms(body, palette);

    // === ROOT LEGS ===
    this.buildTreantLegs(body, palette);

    // === FOLIAGE - Leaves and vines ===
    this.addTreantFoliage(body, palette);

    // === LEAF PARTICLES ===
    const particles = this.createLeafParticles(palette);
    group.add(particles);
    group.userData.particles = particles;

    // Heart core (hidden inside)
    const coreMat = new THREE.MeshStandardMaterial({
      color: palette.glow,
      emissive: palette.glow,
      emissiveIntensity: 2,
      transparent: true,
      opacity: 0.6,
    });

    const coreGeo = new THREE.SphereGeometry(0.3, 12, 10);
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(0, 2.0, 0);
    body.add(core);
    group.userData.core = core;

    const coreLight = new THREE.PointLight(palette.glow, 0.5, 4);
    coreLight.position.copy(core.position);
    body.add(coreLight);
    group.userData.coreLight = coreLight;

    // Apply scale
    group.scale.setScalar(scale);

    // Store materials
    group.userData.bodyMaterial = barkMat;
    group.userData.coreMaterial = coreMat;
    group.userData.eyeMaterial = eyeMat;
  }

  buildTreantCrown(body, palette) {
    const branchMat = new THREE.MeshStandardMaterial({
      color: 0x4a3a2a,
      roughness: 0.9,
      metalness: 0.05,
    });

    // Main antler-like branches
    const branchPositions = [
      { x: -0.3, angle: 0.5, height: 0.8 },
      { x: 0.3, angle: -0.5, height: 0.8 },
      { x: -0.15, angle: 0.3, height: 0.6 },
      { x: 0.15, angle: -0.3, height: 0.6 },
      { x: 0, angle: 0, height: 0.5 },
    ];

    branchPositions.forEach((pos) => {
      const branchGeo = new THREE.CylinderGeometry(0.04, 0.08, pos.height, 6);
      const branch = new THREE.Mesh(branchGeo, branchMat);
      branch.position.set(pos.x, 3.6 + pos.height * 0.4, -0.1);
      branch.rotation.z = pos.angle;
      branch.rotation.x = -0.2;
      branch.castShadow = true;
      body.add(branch);

      // Sub-branches
      for (let i = 0; i < 2; i++) {
        const subGeo = new THREE.CylinderGeometry(0.02, 0.035, 0.25, 5);
        const sub = new THREE.Mesh(subGeo, branchMat);
        sub.position.set(
          pos.x + (i === 0 ? -0.15 : 0.15),
          3.9 + pos.height * 0.3,
          -0.05
        );
        sub.rotation.z = pos.angle + (i === 0 ? 0.4 : -0.4);
        body.add(sub);
      }
    });
  }

  buildTreantArms(body, palette) {
    const branchMat = new THREE.MeshStandardMaterial({
      color: palette.body,
      roughness: 0.9,
      metalness: 0.05,
    });

    // === LEFT ARM - Massive branch ===
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.9, 2.3, 0);

    // Upper arm
    const upperGeo = new THREE.CylinderGeometry(0.12, 0.18, 0.8, 8);
    const leftUpper = new THREE.Mesh(upperGeo, branchMat);
    leftUpper.position.set(-0.25, 0, 0);
    leftUpper.rotation.z = Math.PI / 2 + 0.3;
    leftUpper.castShadow = true;
    leftArmGroup.add(leftUpper);

    // Lower arm
    const lowerGeo = new THREE.CylinderGeometry(0.08, 0.12, 0.7, 8);
    const leftLower = new THREE.Mesh(lowerGeo, branchMat);
    leftLower.position.set(-0.65, -0.3, 0.1);
    leftLower.rotation.z = 0.5;
    leftLower.castShadow = true;
    leftArmGroup.add(leftLower);

    // Hand - branching fingers
    const vineMat = new THREE.MeshStandardMaterial({
      color: 0x4a5a3a,
      roughness: 0.85,
    });

    for (let i = 0; i < 4; i++) {
      const fingerGeo = new THREE.CylinderGeometry(0.02, 0.04, 0.35, 5);
      const finger = new THREE.Mesh(fingerGeo, vineMat);
      finger.position.set(-0.9 + i * 0.08, -0.6, 0.15 + Math.abs(i - 1.5) * 0.03);
      finger.rotation.z = 0.3 - i * 0.15;
      finger.rotation.x = 0.2;
      leftArmGroup.add(finger);
    }

    body.add(leftArmGroup);
    body.userData.leftArm = leftArmGroup;

    // === RIGHT ARM (mirrored) ===
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.9, 2.3, 0);

    const rightUpper = new THREE.Mesh(upperGeo, branchMat);
    rightUpper.position.set(0.25, 0, 0);
    rightUpper.rotation.z = -Math.PI / 2 - 0.3;
    rightUpper.castShadow = true;
    rightArmGroup.add(rightUpper);

    const rightLower = new THREE.Mesh(lowerGeo, branchMat);
    rightLower.position.set(0.65, -0.3, 0.1);
    rightLower.rotation.z = -0.5;
    rightLower.castShadow = true;
    rightArmGroup.add(rightLower);

    for (let i = 0; i < 4; i++) {
      const fingerGeo = new THREE.CylinderGeometry(0.02, 0.04, 0.35, 5);
      const finger = new THREE.Mesh(fingerGeo, vineMat);
      finger.position.set(0.9 - i * 0.08, -0.6, 0.15 + Math.abs(i - 1.5) * 0.03);
      finger.rotation.z = -0.3 + i * 0.15;
      finger.rotation.x = 0.2;
      rightArmGroup.add(finger);
    }

    body.add(rightArmGroup);
    body.userData.rightArm = rightArmGroup;
  }

  buildTreantLegs(body, palette) {
    const rootMat = new THREE.MeshStandardMaterial({
      color: 0x3a3020,
      roughness: 0.95,
      metalness: 0.02,
    });

    // Multiple root-like legs
    const rootPositions = [
      { x: -0.4, z: 0.2, angle: 0.15 },
      { x: 0.4, z: 0.2, angle: -0.15 },
      { x: -0.3, z: -0.25, angle: 0.1 },
      { x: 0.3, z: -0.25, angle: -0.1 },
    ];

    rootPositions.forEach((pos) => {
      const rootGeo = new THREE.CylinderGeometry(0.1, 0.15, 0.6, 8);
      const root = new THREE.Mesh(rootGeo, rootMat);
      root.position.set(pos.x, 0.3, pos.z);
      root.rotation.z = pos.angle;
      root.castShadow = true;
      body.add(root);

      // Root tendrils spreading on ground
      for (let i = 0; i < 2; i++) {
        const tendrilGeo = new THREE.CylinderGeometry(0.03, 0.06, 0.3, 6);
        const tendril = new THREE.Mesh(tendrilGeo, rootMat);
        tendril.position.set(
          pos.x + (i === 0 ? -0.15 : 0.15),
          0.08,
          pos.z + 0.15
        );
        tendril.rotation.x = Math.PI / 4;
        tendril.rotation.z = (i === 0 ? 0.3 : -0.3) + pos.angle;
        body.add(tendril);
      }
    });
  }

  addTreantFoliage(body, palette) {
    const leafMat = new THREE.MeshStandardMaterial({
      color: palette.accent,
      roughness: 0.8,
      metalness: 0.0,
      side: THREE.DoubleSide,
    });

    // Leaf clusters
    const leafPositions = [
      { x: -0.5, y: 3.8, z: 0.1 },
      { x: 0.5, y: 3.8, z: 0.1 },
      { x: 0, y: 4.0, z: -0.1 },
      { x: -0.35, y: 3.5, z: 0.3 },
      { x: 0.35, y: 3.5, z: 0.3 },
      { x: -0.8, y: 2.8, z: 0.2 },
      { x: 0.8, y: 2.8, z: 0.2 },
    ];

    leafPositions.forEach((pos) => {
      const clusterGeo = new THREE.SphereGeometry(0.18, 8, 6);
      const cluster = new THREE.Mesh(clusterGeo, leafMat);
      cluster.position.set(pos.x, pos.y, pos.z);
      cluster.scale.set(1.2, 0.8, 1.0);
      body.add(cluster);
    });

    // Hanging vines
    const vineMat = new THREE.MeshStandardMaterial({
      color: 0x3a5a2a,
      roughness: 0.9,
    });

    for (let i = 0; i < 4; i++) {
      const vineGeo = new THREE.CylinderGeometry(0.015, 0.02, 0.6, 5);
      const vine = new THREE.Mesh(vineGeo, vineMat);
      vine.position.set(
        (Math.random() - 0.5) * 0.8,
        2.6 - Math.random() * 0.3,
        0.4 + Math.random() * 0.2
      );
      vine.rotation.x = 0.1;
      vine.rotation.z = (Math.random() - 0.5) * 0.3;
      body.add(vine);
    }
  }

  createLeafParticles(palette) {
    const particleCount = 50;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color = new THREE.Color(palette.accent);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2.5;
      positions[i * 3 + 1] = Math.random() * 4 + 0.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2;

      const variation = 0.7 + Math.random() * 0.5;
      colors[i * 3] = color.r * variation;
      colors[i * 3 + 1] = color.g * variation;
      colors[i * 3 + 2] = color.b * variation;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    particles.userData.time = 0;
    particles.userData.basePositions = positions.slice();
    particles.userData.type = 'leaves';

    return particles;
  }

  // =============================================
  // CORRUPTED KNIGHT - Armored humanoid
  // =============================================
  buildKnight(group, bossData) {
    const palette = BOSS_PALETTES.knight;
    const scale = bossData.scale || 2.0;

    const body = new THREE.Group();
    group.add(body);
    group.userData.body = body;

    // === ARMORED TORSO ===
    const armorMat = new THREE.MeshStandardMaterial({
      color: palette.body,
      roughness: 0.4,
      metalness: 0.85,
    });

    // Chest armor
    const chestGeo = new THREE.BoxGeometry(0.7, 0.8, 0.45);
    const chest = new THREE.Mesh(chestGeo, armorMat);
    chest.position.set(0, 1.6, 0);
    chest.castShadow = true;
    body.add(chest);

    // Corruption veins on armor
    const corruptMat = new THREE.MeshStandardMaterial({
      color: palette.accent,
      emissive: palette.accent,
      emissiveIntensity: 2,
    });

    // Corruption lines
    for (let i = 0; i < 3; i++) {
      const lineGeo = new THREE.BoxGeometry(0.02, 0.5, 0.02);
      const line = new THREE.Mesh(lineGeo, corruptMat);
      line.position.set(-0.15 + i * 0.15, 1.6, 0.24);
      body.add(line);
    }

    // === PAULDRONS - Massive shoulder armor ===
    const pauldronGeo = new THREE.SphereGeometry(0.22, 10, 8);
    
    const leftPauldron = new THREE.Mesh(pauldronGeo, armorMat);
    leftPauldron.position.set(-0.5, 1.9, 0);
    leftPauldron.scale.set(1.3, 1.0, 1.1);
    leftPauldron.castShadow = true;
    body.add(leftPauldron);

    const rightPauldron = new THREE.Mesh(pauldronGeo, armorMat);
    rightPauldron.position.set(0.5, 1.9, 0);
    rightPauldron.scale.set(1.3, 1.0, 1.1);
    rightPauldron.castShadow = true;
    body.add(rightPauldron);

    // Pauldron spikes
    const spikeMat = new THREE.MeshStandardMaterial({
      color: 0x1a1a20,
      roughness: 0.3,
      metalness: 0.9,
    });

    [-0.6, 0.6].forEach((x) => {
      const spikeGeo = new THREE.ConeGeometry(0.04, 0.2, 5);
      const spike = new THREE.Mesh(spikeGeo, spikeMat);
      spike.position.set(x, 2.1, 0);
      spike.rotation.z = x > 0 ? -0.3 : 0.3;
      body.add(spike);
    });

    // === HELMET - Intimidating visor ===
    const helmetMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a30,
      roughness: 0.35,
      metalness: 0.9,
    });

    // Helmet base
    const helmetGeo = new THREE.SphereGeometry(0.25, 12, 10);
    const helmet = new THREE.Mesh(helmetGeo, helmetMat);
    helmet.position.set(0, 2.35, 0);
    helmet.scale.set(1.1, 1.2, 1.0);
    helmet.castShadow = true;
    body.add(helmet);

    // Visor
    const visorGeo = new THREE.BoxGeometry(0.28, 0.08, 0.12);
    const visor = new THREE.Mesh(visorGeo, helmetMat);
    visor.position.set(0, 2.32, 0.2);
    body.add(visor);

    // === GLOWING EYES behind visor ===
    const eyeMat = new THREE.MeshStandardMaterial({
      color: palette.eye,
      emissive: palette.eye,
      emissiveIntensity: 5,
    });

    const eyeGeo = new THREE.SphereGeometry(0.04, 8, 6);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat.clone());
    leftEye.position.set(-0.07, 2.32, 0.22);
    body.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeo, eyeMat.clone());
    rightEye.position.set(0.07, 2.32, 0.22);
    body.add(rightEye);

    group.userData.eyes = [leftEye, rightEye];

    // Eye glow through visor
    const eyeLight = new THREE.PointLight(palette.eye, 0.6, 2);
    eyeLight.position.set(0, 2.32, 0.3);
    body.add(eyeLight);
    group.userData.eyeLight = eyeLight;

    // === TATTERED CAPE ===
    this.buildKnightCape(body, palette);

    // === ARMORED ARMS ===
    this.buildKnightArms(body, palette);

    // === ARMORED LEGS ===
    this.buildKnightLegs(body, palette);

    // === CORRUPTED GREATSWORD ===
    const sword = this.buildKnightSword(palette);
    sword.position.set(0.75, 1.2, 0.2);
    sword.rotation.z = -0.4;
    body.add(sword);
    group.userData.weapon = sword;

    // === SHIELD ===
    const shield = this.buildKnightShield(palette);
    shield.position.set(-0.65, 1.4, 0.15);
    shield.rotation.y = 0.3;
    body.add(shield);
    group.userData.shield = shield;

    // === DARK FLAME PARTICLES ===
    const particles = this.createDarkFlameParticles(palette);
    group.add(particles);
    group.userData.particles = particles;

    // Corruption core (heart)
    const coreMat = new THREE.MeshStandardMaterial({
      color: palette.glow,
      emissive: palette.glow,
      emissiveIntensity: 2,
      transparent: true,
      opacity: 0.7,
    });

    const coreGeo = new THREE.SphereGeometry(0.15, 10, 8);
    const core = new THREE.Mesh(coreGeo, coreMat);
    core.position.set(0, 1.6, 0.15);
    body.add(core);
    group.userData.core = core;

    const coreLight = new THREE.PointLight(palette.glow, 0.4, 3);
    coreLight.position.copy(core.position);
    body.add(coreLight);
    group.userData.coreLight = coreLight;

    // Apply scale
    group.scale.setScalar(scale);

    // Store materials
    group.userData.bodyMaterial = armorMat;
    group.userData.coreMaterial = coreMat;
    group.userData.eyeMaterial = eyeMat;
  }

  buildKnightCape(body, palette) {
    const capeMat = new THREE.MeshStandardMaterial({
      color: 0x2a1020,
      roughness: 0.9,
      metalness: 0.1,
      side: THREE.DoubleSide,
    });

    // Cape as curved plane
    const capeGeo = new THREE.PlaneGeometry(0.8, 1.2, 6, 10);
    
    // Curve the cape
    const positions = capeGeo.attributes.position;
    for (let i = 0; i < positions.count; i++) {
      const y = positions.getY(i);
      const x = positions.getX(i);
      positions.setZ(i, -0.15 - y * 0.2 - Math.abs(x) * 0.15);
    }
    capeGeo.computeVertexNormals();

    const cape = new THREE.Mesh(capeGeo, capeMat);
    cape.position.set(0, 1.2, -0.25);
    cape.rotation.x = 0.1;
    cape.castShadow = true;
    body.add(cape);

    body.userData.cape = cape;

    // Tattered edges - smaller triangular meshes
    const tatterMat = new THREE.MeshStandardMaterial({
      color: 0x1a0a10,
      roughness: 0.95,
      side: THREE.DoubleSide,
    });

    for (let i = 0; i < 5; i++) {
      const tatterGeo = new THREE.BufferGeometry();
      const verts = new Float32Array([
        -0.1, 0, 0,
        0.1, 0, 0,
        0, -0.2 - Math.random() * 0.15, -0.05,
      ]);
      tatterGeo.setAttribute('position', new THREE.BufferAttribute(verts, 3));
      tatterGeo.computeVertexNormals();

      const tatter = new THREE.Mesh(tatterGeo, tatterMat);
      tatter.position.set(
        -0.3 + i * 0.15,
        0.55,
        -0.35
      );
      body.add(tatter);
    }
  }

  buildKnightArms(body, palette) {
    const armorMat = new THREE.MeshStandardMaterial({
      color: palette.body,
      roughness: 0.4,
      metalness: 0.85,
    });

    // === LEFT ARM ===
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.45, 1.7, 0);

    // Upper arm armor
    const upperGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.4, 8);
    const leftUpper = new THREE.Mesh(upperGeo, armorMat);
    leftUpper.position.set(-0.15, -0.1, 0);
    leftUpper.rotation.z = 0.4;
    leftUpper.castShadow = true;
    leftArmGroup.add(leftUpper);

    // Forearm
    const forearmGeo = new THREE.CylinderGeometry(0.08, 0.1, 0.35, 8);
    const leftForearm = new THREE.Mesh(forearmGeo, armorMat);
    leftForearm.position.set(-0.35, -0.35, 0.05);
    leftForearm.rotation.z = 0.2;
    leftForearm.castShadow = true;
    leftArmGroup.add(leftForearm);

    // Gauntlet
    const gauntletGeo = new THREE.BoxGeometry(0.12, 0.1, 0.14);
    const leftGauntlet = new THREE.Mesh(gauntletGeo, armorMat);
    leftGauntlet.position.set(-0.45, -0.55, 0.08);
    leftGauntlet.castShadow = true;
    leftArmGroup.add(leftGauntlet);

    body.add(leftArmGroup);
    body.userData.leftArm = leftArmGroup;

    // === RIGHT ARM (mirrored) ===
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.45, 1.7, 0);

    const rightUpper = new THREE.Mesh(upperGeo, armorMat);
    rightUpper.position.set(0.15, -0.1, 0);
    rightUpper.rotation.z = -0.4;
    rightUpper.castShadow = true;
    rightArmGroup.add(rightUpper);

    const rightForearm = new THREE.Mesh(forearmGeo, armorMat);
    rightForearm.position.set(0.35, -0.35, 0.05);
    rightForearm.rotation.z = -0.2;
    rightForearm.castShadow = true;
    rightArmGroup.add(rightForearm);

    const rightGauntlet = new THREE.Mesh(gauntletGeo, armorMat);
    rightGauntlet.position.set(0.45, -0.55, 0.08);
    rightGauntlet.castShadow = true;
    rightArmGroup.add(rightGauntlet);

    body.add(rightArmGroup);
    body.userData.rightArm = rightArmGroup;
  }

  buildKnightLegs(body, palette) {
    const armorMat = new THREE.MeshStandardMaterial({
      color: palette.body,
      roughness: 0.4,
      metalness: 0.85,
    });

    // Tassets (hip armor)
    const tassetGeo = new THREE.BoxGeometry(0.7, 0.25, 0.35);
    const tassets = new THREE.Mesh(tassetGeo, armorMat);
    tassets.position.set(0, 1.15, 0);
    tassets.castShadow = true;
    body.add(tassets);

    // Left leg
    const thighGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.5, 8);
    const leftThigh = new THREE.Mesh(thighGeo, armorMat);
    leftThigh.position.set(-0.2, 0.75, 0);
    leftThigh.castShadow = true;
    body.add(leftThigh);

    const shinGeo = new THREE.CylinderGeometry(0.1, 0.12, 0.45, 8);
    const leftShin = new THREE.Mesh(shinGeo, armorMat);
    leftShin.position.set(-0.2, 0.3, 0.02);
    leftShin.castShadow = true;
    body.add(leftShin);

    const bootGeo = new THREE.BoxGeometry(0.14, 0.1, 0.25);
    const leftBoot = new THREE.Mesh(bootGeo, armorMat);
    leftBoot.position.set(-0.2, 0.05, 0.05);
    leftBoot.castShadow = true;
    body.add(leftBoot);

    // Right leg
    const rightThigh = new THREE.Mesh(thighGeo, armorMat);
    rightThigh.position.set(0.2, 0.75, 0);
    rightThigh.castShadow = true;
    body.add(rightThigh);

    const rightShin = new THREE.Mesh(shinGeo, armorMat);
    rightShin.position.set(0.2, 0.3, 0.02);
    rightShin.castShadow = true;
    body.add(rightShin);

    const rightBoot = new THREE.Mesh(bootGeo, armorMat);
    rightBoot.position.set(0.2, 0.05, 0.05);
    rightBoot.castShadow = true;
    body.add(rightBoot);
  }

  buildKnightSword(palette) {
    const swordGroup = new THREE.Group();

    // Blade
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x3a3a45,
      roughness: 0.25,
      metalness: 0.95,
      emissive: palette.accent,
      emissiveIntensity: 0.3,
    });

    const bladeGeo = new THREE.BoxGeometry(0.06, 1.2, 0.02);
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.y = 0.6;
    blade.castShadow = true;
    swordGroup.add(blade);

    // Blade tip
    const tipGeo = new THREE.ConeGeometry(0.03, 0.15, 4);
    const tip = new THREE.Mesh(tipGeo, bladeMat);
    tip.position.y = 1.25;
    swordGroup.add(tip);

    // Corruption vein on blade
    const veinMat = new THREE.MeshStandardMaterial({
      color: palette.accent,
      emissive: palette.accent,
      emissiveIntensity: 3,
    });

    const veinGeo = new THREE.BoxGeometry(0.015, 1.0, 0.015);
    const vein = new THREE.Mesh(veinGeo, veinMat);
    vein.position.set(0, 0.55, 0.015);
    swordGroup.add(vein);

    // Crossguard
    const guardMat = new THREE.MeshStandardMaterial({
      color: 0x2a2025,
      roughness: 0.4,
      metalness: 0.8,
    });

    const guardGeo = new THREE.BoxGeometry(0.25, 0.04, 0.04);
    const guard = new THREE.Mesh(guardGeo, guardMat);
    guard.position.y = 0;
    swordGroup.add(guard);

    // Handle
    const handleGeo = new THREE.CylinderGeometry(0.025, 0.03, 0.25, 8);
    const handle = new THREE.Mesh(handleGeo, new THREE.MeshStandardMaterial({
      color: 0x1a1015,
      roughness: 0.8,
    }));
    handle.position.y = -0.15;
    swordGroup.add(handle);

    // Pommel
    const pommelGeo = new THREE.SphereGeometry(0.04, 8, 6);
    const pommel = new THREE.Mesh(pommelGeo, guardMat);
    pommel.position.y = -0.3;
    swordGroup.add(pommel);

    return swordGroup;
  }

  buildKnightShield(palette) {
    const shieldGroup = new THREE.Group();

    const shieldMat = new THREE.MeshStandardMaterial({
      color: 0x2a2a35,
      roughness: 0.4,
      metalness: 0.8,
    });

    // Shield face - kite shield shape
    const shieldGeo = new THREE.BoxGeometry(0.35, 0.5, 0.05);
    const shield = new THREE.Mesh(shieldGeo, shieldMat);
    shield.castShadow = true;
    shieldGroup.add(shield);

    // Shield boss (center)
    const bossMat = new THREE.MeshStandardMaterial({
      color: palette.accent,
      emissive: palette.accent,
      emissiveIntensity: 1.5,
      roughness: 0.3,
      metalness: 0.7,
    });

    const bossGeo = new THREE.SphereGeometry(0.08, 10, 8);
    const boss = new THREE.Mesh(bossGeo, bossMat);
    boss.position.z = 0.04;
    boss.scale.z = 0.5;
    shieldGroup.add(boss);

    // Corruption cracks
    for (let i = 0; i < 4; i++) {
      const crackGeo = new THREE.BoxGeometry(0.01, 0.15, 0.01);
      const crack = new THREE.Mesh(crackGeo, bossMat);
      crack.position.set(
        Math.cos(i * Math.PI / 2) * 0.12,
        Math.sin(i * Math.PI / 2) * 0.12,
        0.03
      );
      crack.rotation.z = i * Math.PI / 2;
      shieldGroup.add(crack);
    }

    return shieldGroup;
  }

  createDarkFlameParticles(palette) {
    const particleCount = 35;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color = new THREE.Color(palette.glow);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 1.2;
      positions[i * 3 + 1] = Math.random() * 2.5 + 0.3;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.8;

      const variation = 0.6 + Math.random() * 0.6;
      colors[i * 3] = color.r * variation;
      colors[i * 3 + 1] = color.g * variation;
      colors[i * 3 + 2] = color.b * variation;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    particles.userData.time = 0;
    particles.userData.basePositions = positions.slice();
    particles.userData.type = 'dark_flame';

    return particles;
  }

  // =============================================
  // COMMON BOSS EFFECTS
  // =============================================

  /**
   * Add boss aura effect
   */
  addBossAura(group, bossType) {
    const palette = BOSS_PALETTES[bossType] || BOSS_PALETTES.golem;

    // Ground aura ring
    const auraGeo = new THREE.RingGeometry(1.5, 2.0, 32);
    const auraMat = new THREE.MeshBasicMaterial({
      color: palette.aura,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });

    const aura = new THREE.Mesh(auraGeo, auraMat);
    aura.rotation.x = -Math.PI / 2;
    aura.position.y = 0.05;
    group.add(aura);
    group.userData.aura = aura;
  }

  /**
   * Add phase indicator (color glow)
   */
  addPhaseIndicator(group, bossType) {
    const palette = BOSS_PALETTES[bossType] || BOSS_PALETTES.golem;

    // Overhead phase indicator
    const indicatorGeo = new THREE.SphereGeometry(0.15, 12, 8);
    const indicatorMat = new THREE.MeshStandardMaterial({
      color: palette.glow,
      emissive: palette.glow,
      emissiveIntensity: 2,
      transparent: true,
      opacity: 0.8,
    });

    const indicator = new THREE.Mesh(indicatorGeo, indicatorMat);
    indicator.position.y = 4.5;
    group.add(indicator);
    group.userData.phaseIndicator = indicator;
  }

  // =============================================
  // PHASE VISUAL CHANGES
  // =============================================

  /**
   * Apply phase visual changes to boss model
   * @param {THREE.Group} bossModel - The boss model group
   * @param {number} phase - Phase number (1, 2, or 3)
   * @param {object} visualChange - Phase visual change config from BossData
   */
  applyPhaseVisual(bossModel, phase, visualChange = {}) {
    const bossType = bossModel.userData.bossType;
    const palette = BOSS_PALETTES[bossType] || BOSS_PALETTES.golem;

    // Get phase color
    let phaseColor;
    switch (phase) {
      case 2:
        phaseColor = palette.phase2;
        break;
      case 3:
        phaseColor = palette.phase3;
        break;
      default:
        phaseColor = palette.glow;
    }

    // Update phase indicator
    if (bossModel.userData.phaseIndicator) {
      bossModel.userData.phaseIndicator.material.color.setHex(phaseColor);
      bossModel.userData.phaseIndicator.material.emissive.setHex(phaseColor);
      bossModel.userData.phaseIndicator.material.emissiveIntensity = 2 + phase;
    }

    // Update eye color
    if (bossModel.userData.eyes) {
      bossModel.userData.eyes.forEach((eye) => {
        eye.material.color.setHex(phaseColor);
        eye.material.emissive.setHex(phaseColor);
        eye.material.emissiveIntensity = 4 + phase * 2;
      });
    }

    // Update eye light
    if (bossModel.userData.eyeLight) {
      bossModel.userData.eyeLight.color.setHex(phaseColor);
      bossModel.userData.eyeLight.intensity = 0.5 + phase * 0.3;
    }

    // Update core
    if (bossModel.userData.core) {
      bossModel.userData.core.material.emissive.setHex(phaseColor);
      bossModel.userData.core.material.emissiveIntensity = 2 + phase;
    }

    if (bossModel.userData.coreLight) {
      bossModel.userData.coreLight.color.setHex(phaseColor);
      bossModel.userData.coreLight.intensity = 1 + phase * 0.5;
    }

    // Apply size scale if specified
    if (visualChange.sizeScale) {
      bossModel.userData.body.scale.setScalar(visualChange.sizeScale);
    }

    // Update aura
    if (bossModel.userData.aura) {
      bossModel.userData.aura.material.color.setHex(phaseColor);
      bossModel.userData.aura.material.opacity = 0.3 + phase * 0.15;
    }

    // Store current phase
    bossModel.userData.currentPhase = phase;
  }

  // =============================================
  // ANIMATION UPDATES
  // =============================================

  /**
   * Update boss model animations (call each frame)
   * @param {THREE.Group} bossModel - The boss model group
   * @param {number} delta - Time delta
   */
  updateBossModel(bossModel, delta) {
    // Update particles
    if (bossModel.userData.particles) {
      this.updateParticles(bossModel.userData.particles, delta);
    }

    // Pulse effects based on boss type
    const time = Date.now() * 0.001;
    const bossType = bossModel.userData.bossType;

    // Eye pulsing
    if (bossModel.userData.eyes) {
      const pulse = 4 + Math.sin(time * 3) * 2;
      bossModel.userData.eyes.forEach((eye) => {
        eye.material.emissiveIntensity = pulse;
      });
    }

    // Core pulsing
    if (bossModel.userData.core) {
      const corePulse = 2 + Math.sin(time * 2.5) * 1;
      bossModel.userData.core.material.emissiveIntensity = corePulse;
    }

    // Aura rotation
    if (bossModel.userData.aura) {
      bossModel.userData.aura.rotation.z += delta * 0.3;
    }

    // Phase indicator bob
    if (bossModel.userData.phaseIndicator) {
      bossModel.userData.phaseIndicator.position.y = 4.5 + Math.sin(time * 2) * 0.1;
    }

    // Type-specific animations
    switch (bossType) {
      case 'wraith':
        this.updateWraithAnimation(bossModel, delta, time);
        break;
      case 'treant':
      case 'guardian':
        this.updateTreantAnimation(bossModel, delta, time);
        break;
      case 'golem':
        this.updateGolemAnimation(bossModel, delta, time);
        break;
      case 'knight':
        this.updateKnightAnimation(bossModel, delta, time);
        break;
    }
  }

  updateParticles(particles, delta) {
    if (!particles || !particles.userData.basePositions) return;

    particles.userData.time += delta;
    const time = particles.userData.time;
    const type = particles.userData.type;

    const positions = particles.geometry.attributes.position.array;
    const basePositions = particles.userData.basePositions;

    for (let i = 0; i < positions.length / 3; i++) {
      const offset = i * 0.5;

      switch (type) {
        case 'rock_debris':
          // Slow orbital motion
          positions[i * 3] = basePositions[i * 3] + Math.sin(time * 0.5 + offset) * 0.2;
          positions[i * 3 + 1] = basePositions[i * 3 + 1] + Math.sin(time + offset) * 0.15;
          positions[i * 3 + 2] = basePositions[i * 3 + 2] + Math.cos(time * 0.5 + offset) * 0.2;
          break;

        case 'shadow_wisp':
          // Swirling upward
          positions[i * 3] = basePositions[i * 3] + Math.sin(time * 2 + offset) * 0.3;
          positions[i * 3 + 1] = basePositions[i * 3 + 1] + ((time * 0.5 + offset) % 3);
          positions[i * 3 + 2] = basePositions[i * 3 + 2] + Math.cos(time * 2 + offset) * 0.3;
          if (positions[i * 3 + 1] > 4) {
            positions[i * 3 + 1] = basePositions[i * 3 + 1];
          }
          break;

        case 'leaves':
          // Gentle floating
          positions[i * 3] = basePositions[i * 3] + Math.sin(time + offset) * 0.25;
          positions[i * 3 + 1] = basePositions[i * 3 + 1] + Math.sin(time * 0.7 + offset * 2) * 0.2;
          positions[i * 3 + 2] = basePositions[i * 3 + 2] + Math.cos(time * 0.8 + offset) * 0.2;
          break;

        case 'dark_flame':
          // Rising flame-like
          positions[i * 3] = basePositions[i * 3] + Math.sin(time * 3 + offset) * 0.15;
          positions[i * 3 + 1] = basePositions[i * 3 + 1] + ((time * 0.8 + offset) % 2.5);
          positions[i * 3 + 2] = basePositions[i * 3 + 2] + Math.cos(time * 3 + offset) * 0.15;
          if (positions[i * 3 + 1] > 3) {
            positions[i * 3 + 1] = basePositions[i * 3 + 1];
          }
          break;
      }
    }

    particles.geometry.attributes.position.needsUpdate = true;
  }

  updateWraithAnimation(bossModel, delta, time) {
    const body = bossModel.userData.body;
    if (!body) return;

    // Hovering effect
    body.position.y = Math.sin(time * 1.5) * 0.15;

    // Slight sway
    body.rotation.z = Math.sin(time * 0.8) * 0.05;

    // Tail segments wave
    if (body.userData.tailSegments) {
      body.userData.tailSegments.forEach((seg, i) => {
        seg.rotation.x = -0.3 - i * 0.1 + Math.sin(time * 2 + i * 0.5) * 0.1;
      });
    }
  }

  updateTreantAnimation(bossModel, delta, time) {
    const body = bossModel.userData.body;
    if (!body) return;

    // Gentle breathing/swaying
    body.rotation.z = Math.sin(time * 0.5) * 0.02;
    body.scale.y = 1 + Math.sin(time * 0.8) * 0.01;
  }

  updateGolemAnimation(bossModel, delta, time) {
    const body = bossModel.userData.body;
    if (!body) return;

    // Heavy breathing
    body.scale.y = 1 + Math.sin(time * 1.2) * 0.015;

    // Crystals pulse
    if (body.userData.crystals) {
      body.userData.crystals.forEach((crystal, i) => {
        const pulse = 1 + Math.sin(time * 2 + i) * 0.3;
        crystal.material.emissiveIntensity = pulse;
      });
    }
  }

  updateKnightAnimation(bossModel, delta, time) {
    const body = bossModel.userData.body;
    if (!body) return;

    // Subtle breathing
    body.scale.y = 1 + Math.sin(time * 1.5) * 0.01;

    // Cape flutter
    if (body.userData.cape) {
      const capePositions = body.userData.cape.geometry.attributes.position;
      for (let i = 0; i < capePositions.count; i++) {
        const baseZ = -0.15 - capePositions.getY(i) * 0.2;
        capePositions.setZ(i, baseZ + Math.sin(time * 3 + i * 0.2) * 0.03);
      }
      body.userData.cape.geometry.attributes.position.needsUpdate = true;
    }
  }

  // =============================================
  // ATTACK VFX
  // =============================================

  /**
   * Create ground crack effect for slam attacks
   */
  createGroundCrack(position, radius, color = 0xff4400) {
    const crackGroup = new THREE.Group();
    crackGroup.position.copy(position);
    crackGroup.position.y = 0.05;

    // Multiple crack lines radiating outward
    const crackMat = new THREE.MeshStandardMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 3,
      transparent: true,
      opacity: 1,
    });

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const length = radius * (0.6 + Math.random() * 0.4);

      const crackGeo = new THREE.BoxGeometry(0.05, 0.02, length);
      const crack = new THREE.Mesh(crackGeo, crackMat.clone());
      crack.position.set(
        Math.cos(angle) * length * 0.5,
        0,
        Math.sin(angle) * length * 0.5
      );
      crack.rotation.y = -angle;
      crackGroup.add(crack);
    }

    // Shockwave ring
    const ringGeo = new THREE.RingGeometry(0.5, radius, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.6,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    crackGroup.add(ring);

    // Animate fade out
    crackGroup.userData.fadeTime = 0;
    crackGroup.userData.maxFadeTime = 1.5;

    this.activeEffects.push({
      mesh: crackGroup,
      update: (delta) => {
        crackGroup.userData.fadeTime += delta;
        const t = crackGroup.userData.fadeTime / crackGroup.userData.maxFadeTime;
        const opacity = 1 - t;

        crackGroup.traverse((child) => {
          if (child.material) {
            child.material.opacity = opacity;
          }
        });

        return t < 1;
      },
    });

    return crackGroup;
  }

  /**
   * Create summon circle effect
   */
  createSummonCircle(position, radius = 3, color = 0x44aa44) {
    const circleGroup = new THREE.Group();
    circleGroup.position.copy(position);
    circleGroup.position.y = 0.1;

    // Outer ring
    const outerGeo = new THREE.RingGeometry(radius - 0.1, radius, 64);
    const outerMat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
    const outer = new THREE.Mesh(outerGeo, outerMat);
    outer.rotation.x = -Math.PI / 2;
    circleGroup.add(outer);

    // Inner glow
    const innerGeo = new THREE.CircleGeometry(radius * 0.8, 32);
    const innerMat = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    inner.rotation.x = -Math.PI / 2;
    circleGroup.add(inner);

    // Runes (small circles around edge)
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const runeGeo = new THREE.CircleGeometry(0.15, 6);
      const rune = new THREE.Mesh(runeGeo, outerMat.clone());
      rune.position.set(
        Math.cos(angle) * (radius - 0.3),
        0.01,
        Math.sin(angle) * (radius - 0.3)
      );
      rune.rotation.x = -Math.PI / 2;
      circleGroup.add(rune);
    }

    return circleGroup;
  }

  /**
   * Create projectile trail effect
   */
  createProjectileTrail(color = 0x6622aa) {
    const trailGeo = new THREE.CylinderGeometry(0.05, 0.15, 0.8, 8);
    const trailMat = new THREE.MeshStandardMaterial({
      color: color,
      emissive: color,
      emissiveIntensity: 3,
      transparent: true,
      opacity: 0.7,
    });

    const trail = new THREE.Mesh(trailGeo, trailMat);
    trail.rotation.x = Math.PI / 2;

    return trail;
  }

  // =============================================
  // DEATH ANIMATION
  // =============================================

  /**
   * Play dramatic death animation
   * @param {THREE.Group} bossModel - The boss model
   * @param {Function} onComplete - Callback when animation completes
   */
  playDeathAnimation(bossModel, onComplete) {
    const body = bossModel.userData.body;
    if (!body) {
      if (onComplete) onComplete();
      return;
    }

    const bossType = bossModel.userData.bossType;
    let deathTime = 0;
    const deathDuration = 4.0;

    const animateDeath = () => {
      deathTime += 0.016;
      const t = Math.min(1, deathTime / deathDuration);

      // Collapse/dissolve based on boss type
      switch (bossType) {
        case 'golem':
          // Crumble apart
          body.position.y = -t * 2;
          body.rotation.z = Math.sin(deathTime * 20) * 0.1 * (1 - t);
          if (bossModel.userData.particles) {
            bossModel.userData.particles.material.size = 0.1 + t * 0.2;
          }
          break;

        case 'wraith':
          // Fade and disperse
          body.traverse((child) => {
            if (child.material) {
              child.material.opacity = 1 - t;
            }
          });
          body.scale.setScalar(1 + t * 0.5);
          break;

        case 'treant':
        case 'guardian':
          // Topple like a tree
          body.rotation.x = t * 0.8;
          body.position.y = -t * 0.5;
          body.position.z = t * 1.5;
          break;

        case 'knight':
          // Fall to knees then collapse
          if (t < 0.5) {
            body.position.y = -t * 0.6;
          } else {
            body.rotation.x = (t - 0.5) * 2 * 0.6;
            body.position.z = (t - 0.5) * 2 * 0.8;
          }
          break;
      }

      // Fade eyes and lights
      if (bossModel.userData.eyes) {
        bossModel.userData.eyes.forEach((eye) => {
          eye.material.emissiveIntensity = 5 * (1 - t);
        });
      }

      if (bossModel.userData.eyeLight) {
        bossModel.userData.eyeLight.intensity = 0.8 * (1 - t);
      }

      if (bossModel.userData.coreLight) {
        bossModel.userData.coreLight.intensity = 1.5 * (1 - t);
      }

      if (t < 1) {
        requestAnimationFrame(animateDeath);
      } else {
        // Final cleanup
        bossModel.visible = false;
        if (onComplete) onComplete();
      }
    };

    animateDeath();
  }

  /**
   * Update all active effects
   */
  updateEffects(delta) {
    this.activeEffects = this.activeEffects.filter((effect) => {
      const keepAlive = effect.update(delta);
      if (!keepAlive && effect.mesh.parent) {
        effect.mesh.parent.remove(effect.mesh);
      }
      return keepAlive;
    });
  }

  /**
   * Cleanup
   */
  dispose() {
    this.modelCache.clear();
    this.particleSystems.clear();
    this.activeEffects = [];
  }
}

// Export singleton instance
export const bossRenderer = new BossRenderer();
