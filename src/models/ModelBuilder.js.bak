import * as THREE from 'three';

/**
 * ModelBuilder - Creates distinct procedural models for enemies
 * Enemies should look DIFFERENT from the player - corrupted, monstrous humanoids
 */

// Color palettes for enemy types
// DANGER LEVELS: lighter = weaker, darker = stronger (more dangerous)
const ENEMY_PALETTES = {
  // Danger Level 1: Standard grunt - lighter grays
  standard: {
    body: 0x4a4a45,      // Medium ashen gray (lightest body)
    accent: 0x3a3530,    // Medium brown
    glow: 0xff3333,      // Red glow
    corruption: 0x2a2a25 // Dark gray
  },
  // Danger Level 2: Berserker - aggressive reds, medium dark
  berserker: {
    body: 0x4a2020,      // Angry red-brown
    accent: 0x662222,    // Brighter red
    glow: 0xff6600,      // Orange glow (frenzied)
    corruption: 0x200808 // Dark blood
  },
  // Danger Level 2: Revenant - bone/undead theme
  revenant: {
    body: 0x8a7a5a,      // Bone color (unique - recognizable)
    accent: 0x5a4a3a,    // Darker bone
    glow: 0x44ff44,      // Eerie green (poison/death)
    corruption: 0x3a3020 // Decayed brown
  },
  // Danger Level 3: Ranged - sickly, corrupted, thin
  ranged: {
    body: 0x3a4a3a,      // Sickly gray-green
    accent: 0x2a3a2a,    // Darker green-gray
    glow: 0x88ff44,      // Toxic green glow
    corruption: 0x1a2a1a // Deep green-black
  },
  // Danger Level 3: Sentinel/Tank - armored blue-steel
  sentinel: {
    body: 0x3a3a4a,      // Blue-gray (armored)
    accent: 0x2a2a35,    // Darker blue-gray
    glow: 0x4444ff,      // Blue glow (cold/defensive)
    corruption: 0x1a1a25 // Deep blue-black
  },
  // Danger Level 4: Elite - darkest non-boss, crimson
  elite: {
    body: 0x2a1515,      // Dark crimson (very dark)
    accent: 0x1a0a0a,    // Near-black red
    glow: 0xff4400,      // Orange-red glow (danger!)
    corruption: 0x150a0a // Deep crimson-black
  },
  // Danger Level 5: BOSS - darkest, most intimidating
  boss: {
    body: 0x1a1020,      // Deep purple-black
    accent: 0x0a0810,    // Near-black purple
    glow: 0xff2222,      // Intense red glow
    corruption: 0x050408,// Abyss black
    secondary: 0x3a1040  // Purple accent for cape/details
  }
};

/**
 * Build a distinct enemy model - NOT the same as player
 * Features: hunched posture, corrupted appearance, glowing elements
 */
export function buildEnemyModel(config = {}) {
  const {
    type = 'standard',
    scale = 1.0,
    palette = null
  } = config;
  
  const colors = palette || ENEMY_PALETTES[type] || ENEMY_PALETTES.standard;
  const group = new THREE.Group();
  
  // === BODY STRUCTURE ===
  // Enemies have different proportions: hunched, wider, longer arms
  
  // Main torso - wider, shorter, hunched forward
  const torsoMat = new THREE.MeshStandardMaterial({
    color: colors.body,
    roughness: 0.85,
    metalness: 0.15,
  });
  
  // Torso is a deformed capsule - wider and hunched
  const torsoGeo = new THREE.CapsuleGeometry(0.4, 0.4, 8, 16);
  const torso = new THREE.Mesh(torsoGeo, torsoMat);
  torso.position.set(0, 0.9, 0.1); // Slightly forward (hunched)
  torso.rotation.x = 0.2; // Tilted forward
  torso.scale.set(1.2, 0.9, 1.0); // Wider, shorter
  torso.castShadow = true;
  group.add(torso);
  
  // Hunched upper back/shoulders - the "hump"
  const humpGeo = new THREE.SphereGeometry(0.35, 12, 8);
  const hump = new THREE.Mesh(humpGeo, torsoMat);
  hump.position.set(0, 1.3, 0.15);
  hump.scale.set(1.3, 0.8, 1.1);
  hump.castShadow = true;
  group.add(hump);
  
  // === HEAD ===
  // Smaller, forward-jutting, almost neckless
  const headMat = new THREE.MeshStandardMaterial({
    color: colors.accent,
    roughness: 0.8,
    metalness: 0.1,
  });
  
  const headGeo = new THREE.SphereGeometry(0.2, 12, 10);
  const head = new THREE.Mesh(headGeo, headMat);
  head.position.set(0, 1.5, 0.25); // Forward, almost merged with hump
  head.scale.set(1.0, 0.85, 0.9); // Slightly squashed
  head.castShadow = true;
  group.add(head);
  
  // === GLOWING EYES ===
  // The signature corruption indicator
  const eyeMat = new THREE.MeshStandardMaterial({
    color: colors.glow,
    emissive: colors.glow,
    emissiveIntensity: 4,
  });
  
  // Left eye
  const eyeGeo = new THREE.SphereGeometry(0.05, 8, 6);
  const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
  leftEye.position.set(-0.08, 1.55, 0.4);
  group.add(leftEye);
  
  // Right eye
  const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
  rightEye.position.set(0.08, 1.55, 0.4);
  group.add(rightEye);
  
  // Eye glow light (point light for effect)
  const eyeLight = new THREE.PointLight(colors.glow, 0.5, 2);
  eyeLight.position.set(0, 1.55, 0.45);
  group.add(eyeLight);
  
  // Store eye references for animation
  group.userData.eyes = [leftEye, rightEye];
  group.userData.eyeLight = eyeLight;
  group.userData.eyeMaterial = eyeMat;
  
  // === ARMS ===
  // Longer, dangling arms - more ape-like
  const limbMat = new THREE.MeshStandardMaterial({
    color: colors.body,
    roughness: 0.85,
    metalness: 0.1,
  });
  
  // Upper arms
  const upperArmGeo = new THREE.CapsuleGeometry(0.1, 0.35, 6, 10);
  
  const leftUpperArm = new THREE.Mesh(upperArmGeo, limbMat);
  leftUpperArm.position.set(-0.5, 1.0, 0.1);
  leftUpperArm.rotation.z = 0.3; // Angled out
  leftUpperArm.rotation.x = 0.2; // Forward
  leftUpperArm.castShadow = true;
  group.add(leftUpperArm);
  
  const rightUpperArm = new THREE.Mesh(upperArmGeo, limbMat);
  rightUpperArm.position.set(0.5, 1.0, 0.1);
  rightUpperArm.rotation.z = -0.3;
  rightUpperArm.rotation.x = 0.2;
  rightUpperArm.castShadow = true;
  group.add(rightUpperArm);
  
  // Lower arms (longer, thinner - dangling)
  const lowerArmGeo = new THREE.CapsuleGeometry(0.08, 0.4, 6, 10);
  
  const leftLowerArm = new THREE.Mesh(lowerArmGeo, limbMat);
  leftLowerArm.position.set(-0.65, 0.5, 0.15);
  leftLowerArm.rotation.z = 0.15;
  leftLowerArm.castShadow = true;
  group.add(leftLowerArm);
  
  const rightLowerArm = new THREE.Mesh(lowerArmGeo, limbMat);
  rightLowerArm.position.set(0.65, 0.5, 0.15);
  rightLowerArm.rotation.z = -0.15;
  rightLowerArm.castShadow = true;
  group.add(rightLowerArm);
  
  // Clawed hands
  const handGeo = new THREE.SphereGeometry(0.08, 8, 6);
  const clawMat = new THREE.MeshStandardMaterial({
    color: colors.corruption,
    roughness: 0.7,
    metalness: 0.3,
  });
  
  const leftHand = new THREE.Mesh(handGeo, clawMat);
  leftHand.position.set(-0.7, 0.15, 0.2);
  leftHand.scale.set(1.2, 0.8, 1.5);
  leftHand.castShadow = true;
  group.add(leftHand);
  
  const rightHand = new THREE.Mesh(handGeo, clawMat);
  rightHand.position.set(0.7, 0.15, 0.2);
  rightHand.scale.set(1.2, 0.8, 1.5);
  rightHand.castShadow = true;
  group.add(rightHand);
  
  // === LEGS ===
  // Shorter, bent legs - crouched stance
  const legGeo = new THREE.CapsuleGeometry(0.12, 0.3, 6, 10);
  
  const leftLeg = new THREE.Mesh(legGeo, limbMat);
  leftLeg.position.set(-0.2, 0.35, 0);
  leftLeg.rotation.x = -0.15; // Slightly bent
  leftLeg.castShadow = true;
  group.add(leftLeg);
  
  const rightLeg = new THREE.Mesh(legGeo, limbMat);
  rightLeg.position.set(0.2, 0.35, 0);
  rightLeg.rotation.x = -0.15;
  rightLeg.castShadow = true;
  group.add(rightLeg);
  
  // Feet
  const footGeo = new THREE.BoxGeometry(0.15, 0.08, 0.25);
  const leftFoot = new THREE.Mesh(footGeo, clawMat);
  leftFoot.position.set(-0.2, 0.04, 0.05);
  leftFoot.castShadow = true;
  group.add(leftFoot);
  
  const rightFoot = new THREE.Mesh(footGeo, clawMat);
  rightFoot.position.set(0.2, 0.04, 0.05);
  rightFoot.castShadow = true;
  group.add(rightFoot);
  
  // === CORRUPTION DETAILS ===
  // Add spikes/protrusions on back
  addCorruptionSpikes(group, colors);
  
  // Smoky aura particles (stored as userData for update)
  group.userData.particles = createCorruptionParticles(colors.glow);
  group.add(group.userData.particles);
  
  // Apply scale
  group.scale.setScalar(scale);
  
  // Store materials for damage flash
  group.userData.bodyMaterial = torsoMat;
  group.userData.limbMaterial = limbMat;
  group.userData.type = type;
  group.userData.isEnemyModel = true;
  
  return group;
}

/**
 * Add corruption spikes to the enemy's back
 */
function addCorruptionSpikes(group, colors) {
  const spikeMat = new THREE.MeshStandardMaterial({
    color: colors.corruption,
    roughness: 0.6,
    metalness: 0.4,
  });
  
  const spikeGeo = new THREE.ConeGeometry(0.06, 0.2, 5);
  
  // Back spikes in a row
  const spikePositions = [
    { x: 0, y: 1.4, z: -0.1, rot: -0.4 },
    { x: 0.1, y: 1.3, z: -0.05, rot: -0.3 },
    { x: -0.1, y: 1.3, z: -0.05, rot: -0.3 },
    { x: 0, y: 1.2, z: 0, rot: -0.2 },
    { x: 0.15, y: 1.15, z: 0.05, rot: -0.15 },
    { x: -0.15, y: 1.15, z: 0.05, rot: -0.15 },
  ];
  
  spikePositions.forEach(pos => {
    const spike = new THREE.Mesh(spikeGeo, spikeMat);
    spike.position.set(pos.x, pos.y, pos.z);
    spike.rotation.x = pos.rot;
    spike.castShadow = true;
    group.add(spike);
  });
}

/**
 * Create corruption particle system (smoky aura)
 */
function createCorruptionParticles(glowColor) {
  const particleCount = 20;
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  const color = new THREE.Color(glowColor);
  
  for (let i = 0; i < particleCount; i++) {
    // Random positions around the body
    positions[i * 3] = (Math.random() - 0.5) * 0.8;
    positions[i * 3 + 1] = Math.random() * 1.5 + 0.3;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.6;
    
    // Color with slight variation
    colors[i * 3] = color.r * (0.8 + Math.random() * 0.4);
    colors[i * 3 + 1] = color.g * (0.8 + Math.random() * 0.4);
    colors[i * 3 + 2] = color.b * (0.8 + Math.random() * 0.4);
  }
  
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const material = new THREE.PointsMaterial({
    size: 0.08,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  
  const particles = new THREE.Points(geometry, material);
  particles.userData.time = 0;
  particles.userData.basePositions = positions.slice(); // Copy for animation
  
  return particles;
}

/**
 * Build an elite enemy model - larger, more armored, spikes
 */
export function buildEliteEnemyModel(config = {}) {
  const baseModel = buildEnemyModel({
    ...config,
    type: 'elite',
    scale: (config.scale || 1.0) * 1.3 // 30% larger
  });
  
  // Add extra armor plates
  const armorMat = new THREE.MeshStandardMaterial({
    color: 0x2a2020,
    roughness: 0.4,
    metalness: 0.7,
  });
  
  // Shoulder plates
  const shoulderGeo = new THREE.BoxGeometry(0.25, 0.15, 0.2);
  
  const leftShoulder = new THREE.Mesh(shoulderGeo, armorMat);
  leftShoulder.position.set(-0.45, 1.25, 0.1);
  leftShoulder.rotation.z = 0.3;
  leftShoulder.castShadow = true;
  baseModel.add(leftShoulder);
  
  const rightShoulder = new THREE.Mesh(shoulderGeo, armorMat);
  rightShoulder.position.set(0.45, 1.25, 0.1);
  rightShoulder.rotation.z = -0.3;
  rightShoulder.castShadow = true;
  baseModel.add(rightShoulder);
  
  // Larger back spikes
  const bigSpikeMat = new THREE.MeshStandardMaterial({
    color: 0x1a0a0a,
    roughness: 0.5,
    metalness: 0.5,
    emissive: 0x330000,
    emissiveIntensity: 0.3,
  });
  
  const bigSpikeGeo = new THREE.ConeGeometry(0.1, 0.4, 5);
  
  const centerSpike = new THREE.Mesh(bigSpikeGeo, bigSpikeMat);
  centerSpike.position.set(0, 1.5, -0.15);
  centerSpike.rotation.x = -0.5;
  centerSpike.castShadow = true;
  baseModel.add(centerSpike);
  
  baseModel.userData.isElite = true;
  
  return baseModel;
}

/**
 * Build a berserker enemy - lean, aggressive stance, red glow
 */
export function buildBerserkerModel(config = {}) {
  const baseModel = buildEnemyModel({
    ...config,
    type: 'berserker',
    scale: (config.scale || 1.0) * 0.95 // Slightly smaller but faster-looking
  });
  
  // Make eyes pulse more intensely
  if (baseModel.userData.eyeMaterial) {
    baseModel.userData.eyeMaterial.emissiveIntensity = 6;
  }
  
  // Add claw-like protrusions on hands
  const clawMat = new THREE.MeshStandardMaterial({
    color: 0x200808,
    roughness: 0.5,
    metalness: 0.6,
  });
  
  const clawGeo = new THREE.ConeGeometry(0.03, 0.15, 4);
  
  // Add claws to each hand (3 per hand)
  [-0.7, 0.7].forEach(xSign => {
    for (let i = -1; i <= 1; i++) {
      const claw = new THREE.Mesh(clawGeo, clawMat);
      claw.position.set(xSign + (i * 0.04 * Math.sign(xSign)), 0.08, 0.25 + Math.abs(i) * 0.02);
      claw.rotation.x = 0.3;
      claw.castShadow = true;
      baseModel.add(claw);
    }
  });
  
  baseModel.userData.isBerserker = true;
  
  return baseModel;
}

/**
 * Build a bone revenant - skeletal, eerie green glow
 */
export function buildRevenantModel(config = {}) {
  const baseModel = buildEnemyModel({
    ...config,
    type: 'revenant',
    scale: (config.scale || 1.0) * 0.9 // Smaller, thinner
  });
  
  // Make it more skeletal - thinner limbs
  baseModel.traverse(child => {
    if (child.isMesh && child.geometry?.type?.includes('Capsule')) {
      // Thin out limbs
      child.scale.x *= 0.7;
      child.scale.z *= 0.7;
    }
  });
  
  // Add rib-like protrusions
  const ribMat = new THREE.MeshStandardMaterial({
    color: 0x6a5a4a,
    roughness: 0.7,
    metalness: 0.2,
  });
  
  const ribGeo = new THREE.CapsuleGeometry(0.02, 0.2, 4, 6);
  
  for (let i = 0; i < 4; i++) {
    const y = 0.7 + i * 0.15;
    
    const leftRib = new THREE.Mesh(ribGeo, ribMat);
    leftRib.position.set(-0.25, y, 0.15);
    leftRib.rotation.z = 0.8;
    leftRib.rotation.y = 0.2;
    baseModel.add(leftRib);
    
    const rightRib = new THREE.Mesh(ribGeo, ribMat);
    rightRib.position.set(0.25, y, 0.15);
    rightRib.rotation.z = -0.8;
    rightRib.rotation.y = -0.2;
    baseModel.add(rightRib);
  }
  
  baseModel.userData.isRevenant = true;
  
  return baseModel;
}

/**
 * Build a sentinel (tank) enemy - larger, armored, shield-like growths
 */
export function buildSentinelModel(config = {}) {
  const baseModel = buildEnemyModel({
    ...config,
    type: 'sentinel',
    scale: (config.scale || 1.0) * 1.2 // 20% larger
  });
  
  // Add shield-like growth on left arm
  const shieldMat = new THREE.MeshStandardMaterial({
    color: 0x3a3a4a,
    roughness: 0.3,
    metalness: 0.8,
  });
  
  const shieldGeo = new THREE.BoxGeometry(0.4, 0.5, 0.1);
  const shield = new THREE.Mesh(shieldGeo, shieldMat);
  shield.position.set(-0.8, 0.6, 0.2);
  shield.rotation.y = 0.3;
  shield.castShadow = true;
  baseModel.add(shield);
  
  // Armored plating on torso
  const plateMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a35,
    roughness: 0.35,
    metalness: 0.75,
  });
  
  const plateGeo = new THREE.BoxGeometry(0.5, 0.4, 0.12);
  const chestPlate = new THREE.Mesh(plateGeo, plateMat);
  chestPlate.position.set(0, 0.95, 0.25);
  chestPlate.castShadow = true;
  baseModel.add(chestPlate);
  
  baseModel.userData.isSentinel = true;
  
  return baseModel;
}

/**
 * Build a ranged enemy - thin, elongated limbs, projectile 'arms'
 * These enemies attack from distance with corrupted energy projectiles
 */
export function buildRangedEnemyModel(config = {}) {
  const colors = ENEMY_PALETTES.ranged;
  const scale = (config.scale || 1.0) * 0.85; // Slightly smaller/thinner
  const group = new THREE.Group();
  
  // === BODY - Thin, almost emaciated torso ===
  const torsoMat = new THREE.MeshStandardMaterial({
    color: colors.body,
    roughness: 0.8,
    metalness: 0.2,
  });
  
  // Thin elongated torso
  const torsoGeo = new THREE.CapsuleGeometry(0.25, 0.5, 8, 16);
  const torso = new THREE.Mesh(torsoGeo, torsoMat);
  torso.position.set(0, 1.0, 0);
  torso.scale.set(0.8, 1.1, 0.7); // Thin and tall
  torso.castShadow = true;
  group.add(torso);
  
  // === HEAD - Small, hunched forward, predatory ===
  const headMat = new THREE.MeshStandardMaterial({
    color: colors.accent,
    roughness: 0.75,
    metalness: 0.1,
  });
  
  // Elongated skull shape
  const headGeo = new THREE.SphereGeometry(0.18, 12, 10);
  const head = new THREE.Mesh(headGeo, headMat);
  head.position.set(0, 1.6, 0.15);
  head.scale.set(0.9, 1.2, 0.85); // Elongated
  head.castShadow = true;
  group.add(head);
  
  // === GLOWING EYES - Toxic green ===
  const eyeMat = new THREE.MeshStandardMaterial({
    color: colors.glow,
    emissive: colors.glow,
    emissiveIntensity: 5,
  });
  
  const eyeGeo = new THREE.SphereGeometry(0.04, 8, 6);
  
  const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
  leftEye.position.set(-0.06, 1.65, 0.28);
  group.add(leftEye);
  
  const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
  rightEye.position.set(0.06, 1.65, 0.28);
  group.add(rightEye);
  
  // Eye glow light
  const eyeLight = new THREE.PointLight(colors.glow, 0.4, 2);
  eyeLight.position.set(0, 1.65, 0.3);
  group.add(eyeLight);
  
  group.userData.eyes = [leftEye, rightEye];
  group.userData.eyeLight = eyeLight;
  group.userData.eyeMaterial = eyeMat;
  
  // === ARMS - Extremely long, thin, projectile-like forearms ===
  const limbMat = new THREE.MeshStandardMaterial({
    color: colors.body,
    roughness: 0.8,
    metalness: 0.15,
  });
  
  // Upper arms - thin
  const upperArmGeo = new THREE.CapsuleGeometry(0.06, 0.35, 6, 10);
  
  const leftUpperArm = new THREE.Mesh(upperArmGeo, limbMat);
  leftUpperArm.position.set(-0.3, 1.1, 0);
  leftUpperArm.rotation.z = 0.4;
  leftUpperArm.rotation.x = 0.3;
  leftUpperArm.castShadow = true;
  group.add(leftUpperArm);
  
  const rightUpperArm = new THREE.Mesh(upperArmGeo, limbMat);
  rightUpperArm.position.set(0.3, 1.1, 0);
  rightUpperArm.rotation.z = -0.4;
  rightUpperArm.rotation.x = 0.3;
  rightUpperArm.castShadow = true;
  group.add(rightUpperArm);
  
  // Lower arms - VERY long, thin, ending in projectile 'cannons'
  const lowerArmGeo = new THREE.CapsuleGeometry(0.05, 0.5, 6, 10);
  
  const leftLowerArm = new THREE.Mesh(lowerArmGeo, limbMat);
  leftLowerArm.position.set(-0.5, 0.55, 0.1);
  leftLowerArm.rotation.z = 0.2;
  leftLowerArm.rotation.x = 0.4;
  leftLowerArm.castShadow = true;
  group.add(leftLowerArm);
  
  const rightLowerArm = new THREE.Mesh(lowerArmGeo, limbMat);
  rightLowerArm.position.set(0.5, 0.55, 0.1);
  rightLowerArm.rotation.z = -0.2;
  rightLowerArm.rotation.x = 0.4;
  rightLowerArm.castShadow = true;
  group.add(rightLowerArm);
  
  // === PROJECTILE ARM TIPS - Glowing 'cannons' ===
  const cannonMat = new THREE.MeshStandardMaterial({
    color: colors.corruption,
    roughness: 0.4,
    metalness: 0.6,
    emissive: colors.glow,
    emissiveIntensity: 1.5,
  });
  
  const cannonGeo = new THREE.CylinderGeometry(0.06, 0.03, 0.15, 8);
  
  const leftCannon = new THREE.Mesh(cannonGeo, cannonMat);
  leftCannon.position.set(-0.58, 0.15, 0.2);
  leftCannon.rotation.x = 0.5;
  leftCannon.rotation.z = 0.2;
  leftCannon.castShadow = true;
  group.add(leftCannon);
  
  const rightCannon = new THREE.Mesh(cannonGeo, cannonMat);
  rightCannon.position.set(0.58, 0.15, 0.2);
  rightCannon.rotation.x = 0.5;
  rightCannon.rotation.z = -0.2;
  rightCannon.castShadow = true;
  group.add(rightCannon);
  
  // Cannon glow orbs (projectile charge)
  const orbMat = new THREE.MeshStandardMaterial({
    color: colors.glow,
    emissive: colors.glow,
    emissiveIntensity: 3,
    transparent: true,
    opacity: 0.8,
  });
  
  const orbGeo = new THREE.SphereGeometry(0.04, 8, 6);
  
  const leftOrb = new THREE.Mesh(orbGeo, orbMat);
  leftOrb.position.set(-0.6, 0.08, 0.25);
  group.add(leftOrb);
  
  const rightOrb = new THREE.Mesh(orbGeo, orbMat);
  rightOrb.position.set(0.6, 0.08, 0.25);
  group.add(rightOrb);
  
  // Store for charging animation
  group.userData.projectileOrbs = [leftOrb, rightOrb];
  
  // === LEGS - Thin, digitigrade (backward knee) stance ===
  const legGeo = new THREE.CapsuleGeometry(0.07, 0.3, 6, 10);
  
  const leftLeg = new THREE.Mesh(legGeo, limbMat);
  leftLeg.position.set(-0.15, 0.4, 0);
  leftLeg.rotation.x = 0.15;
  leftLeg.castShadow = true;
  group.add(leftLeg);
  
  const rightLeg = new THREE.Mesh(legGeo, limbMat);
  rightLeg.position.set(0.15, 0.4, 0);
  rightLeg.rotation.x = 0.15;
  rightLeg.castShadow = true;
  group.add(rightLeg);
  
  // Lower legs (digitigrade)
  const lowerLegGeo = new THREE.CapsuleGeometry(0.05, 0.25, 6, 10);
  
  const leftLowerLeg = new THREE.Mesh(lowerLegGeo, limbMat);
  leftLowerLeg.position.set(-0.15, 0.12, 0.1);
  leftLowerLeg.rotation.x = -0.4;
  leftLowerLeg.castShadow = true;
  group.add(leftLowerLeg);
  
  const rightLowerLeg = new THREE.Mesh(lowerLegGeo, limbMat);
  rightLowerLeg.position.set(0.15, 0.12, 0.1);
  rightLowerLeg.rotation.x = -0.4;
  rightLowerLeg.castShadow = true;
  group.add(rightLowerLeg);
  
  // Feet
  const footGeo = new THREE.BoxGeometry(0.1, 0.05, 0.2);
  const footMat = new THREE.MeshStandardMaterial({
    color: colors.corruption,
    roughness: 0.7,
    metalness: 0.2,
  });
  
  const leftFoot = new THREE.Mesh(footGeo, footMat);
  leftFoot.position.set(-0.15, 0.025, 0.15);
  leftFoot.castShadow = true;
  group.add(leftFoot);
  
  const rightFoot = new THREE.Mesh(footGeo, footMat);
  rightFoot.position.set(0.15, 0.025, 0.15);
  rightFoot.castShadow = true;
  group.add(rightFoot);
  
  // === CORRUPTION TENDRILS - Energy wisps ===
  const tendrilMat = new THREE.MeshStandardMaterial({
    color: colors.glow,
    emissive: colors.glow,
    emissiveIntensity: 2,
    transparent: true,
    opacity: 0.6,
  });
  
  const tendrilGeo = new THREE.CapsuleGeometry(0.02, 0.25, 4, 6);
  
  // Tendrils floating behind the ranged enemy
  for (let i = 0; i < 4; i++) {
    const tendril = new THREE.Mesh(tendrilGeo, tendrilMat);
    const angle = (i / 4) * Math.PI * 0.6 - Math.PI * 0.3;
    tendril.position.set(
      Math.sin(angle) * 0.3,
      0.8 + i * 0.15,
      -0.2
    );
    tendril.rotation.x = -0.5 + Math.random() * 0.3;
    tendril.rotation.z = Math.sin(angle) * 0.3;
    group.add(tendril);
  }
  
  // Corruption particles
  group.userData.particles = createCorruptionParticles(colors.glow);
  group.add(group.userData.particles);
  
  // Apply scale
  group.scale.setScalar(scale);
  
  // Store materials for effects
  group.userData.bodyMaterial = torsoMat;
  group.userData.limbMaterial = limbMat;
  group.userData.type = 'ranged';
  group.userData.isEnemyModel = true;
  group.userData.isRanged = true;
  
  return group;
}

/**
 * Build a BOSS enemy model - massive scale, unique intimidating silhouette
 * The Crypt Lord: towering figure with cape, crown, massive presence
 */
export function buildBossModel(config = {}) {
  const colors = ENEMY_PALETTES.boss;
  const scale = (config.scale || 1.0) * 1.8; // Massive - 80% larger than elite
  const group = new THREE.Group();
  
  // === TORSO - Massive, broad, powerful ===
  const torsoMat = new THREE.MeshStandardMaterial({
    color: colors.body,
    roughness: 0.7,
    metalness: 0.3,
  });
  
  // Wide powerful torso
  const torsoGeo = new THREE.CapsuleGeometry(0.5, 0.6, 10, 20);
  const torso = new THREE.Mesh(torsoGeo, torsoMat);
  torso.position.set(0, 1.0, 0);
  torso.scale.set(1.4, 1.0, 1.1);
  torso.castShadow = true;
  group.add(torso);
  
  // Upper torso/chest - even broader
  const chestGeo = new THREE.SphereGeometry(0.45, 12, 10);
  const chest = new THREE.Mesh(chestGeo, torsoMat);
  chest.position.set(0, 1.4, 0.05);
  chest.scale.set(1.3, 0.9, 1.0);
  chest.castShadow = true;
  group.add(chest);
  
  // === ARMOR PLATES - Boss has heavy armor ===
  const armorMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a25,
    roughness: 0.3,
    metalness: 0.8,
  });
  
  // Chest plate
  const chestPlateMat = new THREE.MeshStandardMaterial({
    color: 0x2a1a30,
    roughness: 0.35,
    metalness: 0.7,
    emissive: colors.glow,
    emissiveIntensity: 0.15,
  });
  
  const chestPlateGeo = new THREE.BoxGeometry(0.7, 0.5, 0.15);
  const chestPlate = new THREE.Mesh(chestPlateGeo, chestPlateMat);
  chestPlate.position.set(0, 1.35, 0.35);
  chestPlate.castShadow = true;
  group.add(chestPlate);
  
  // === SHOULDERS - Massive pauldrons with spikes ===
  const pauldronGeo = new THREE.SphereGeometry(0.25, 10, 8);
  
  const leftPauldron = new THREE.Mesh(pauldronGeo, armorMat);
  leftPauldron.position.set(-0.6, 1.55, 0);
  leftPauldron.scale.set(1.2, 0.9, 1.0);
  leftPauldron.castShadow = true;
  group.add(leftPauldron);
  
  const rightPauldron = new THREE.Mesh(pauldronGeo, armorMat);
  rightPauldron.position.set(0.6, 1.55, 0);
  rightPauldron.scale.set(1.2, 0.9, 1.0);
  rightPauldron.castShadow = true;
  group.add(rightPauldron);
  
  // Pauldron spikes
  const spikeGeo = new THREE.ConeGeometry(0.08, 0.3, 5);
  const spikeMat = new THREE.MeshStandardMaterial({
    color: colors.corruption,
    roughness: 0.5,
    metalness: 0.6,
  });
  
  [[-0.7, 1.7, 0], [0.7, 1.7, 0], [-0.5, 1.75, -0.1], [0.5, 1.75, -0.1]].forEach(pos => {
    const spike = new THREE.Mesh(spikeGeo, spikeMat);
    spike.position.set(...pos);
    spike.rotation.x = -0.3;
    spike.castShadow = true;
    group.add(spike);
  });
  
  // === HEAD - Smaller relative to body, skull-like, CROWNED ===
  const headMat = new THREE.MeshStandardMaterial({
    color: colors.accent,
    roughness: 0.75,
    metalness: 0.2,
  });
  
  const headGeo = new THREE.SphereGeometry(0.22, 12, 10);
  const head = new THREE.Mesh(headGeo, headMat);
  head.position.set(0, 1.85, 0.1);
  head.scale.set(1.0, 1.1, 0.95);
  head.castShadow = true;
  group.add(head);
  
  // === CROWN - Jagged, corrupted crown ===
  const crownMat = new THREE.MeshStandardMaterial({
    color: 0x2a1a10,
    roughness: 0.4,
    metalness: 0.85,
    emissive: 0x3a1a20,
    emissiveIntensity: 0.3,
  });
  
  const crownBase = new THREE.Mesh(
    new THREE.TorusGeometry(0.18, 0.03, 8, 16),
    crownMat
  );
  crownBase.position.set(0, 2.05, 0.05);
  crownBase.rotation.x = Math.PI / 2;
  group.add(crownBase);
  
  // Crown spikes (5 points)
  const crownSpikeGeo = new THREE.ConeGeometry(0.04, 0.18, 4);
  for (let i = 0; i < 5; i++) {
    const angle = (i / 5) * Math.PI * 2;
    const crownSpike = new THREE.Mesh(crownSpikeGeo, crownMat);
    crownSpike.position.set(
      Math.sin(angle) * 0.17,
      2.12,
      Math.cos(angle) * 0.15 + 0.05
    );
    crownSpike.rotation.z = Math.sin(angle) * 0.2;
    group.add(crownSpike);
  }
  
  // === GLOWING EYES - Intense red ===
  const eyeMat = new THREE.MeshStandardMaterial({
    color: colors.glow,
    emissive: colors.glow,
    emissiveIntensity: 6,
  });
  
  const eyeGeo = new THREE.SphereGeometry(0.05, 8, 6);
  
  const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
  leftEye.position.set(-0.08, 1.9, 0.25);
  group.add(leftEye);
  
  const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
  rightEye.position.set(0.08, 1.9, 0.25);
  group.add(rightEye);
  
  // Boss eye glow is stronger
  const eyeLight = new THREE.PointLight(colors.glow, 1.0, 4);
  eyeLight.position.set(0, 1.9, 0.3);
  group.add(eyeLight);
  
  group.userData.eyes = [leftEye, rightEye];
  group.userData.eyeLight = eyeLight;
  group.userData.eyeMaterial = eyeMat;
  
  // === CAPE/CLOAK - Flowing behind ===
  const capeMat = new THREE.MeshStandardMaterial({
    color: colors.secondary || 0x2a1030,
    roughness: 0.8,
    metalness: 0.1,
    side: THREE.DoubleSide,
  });
  
  // Cape as a curved plane
  const capeGeo = new THREE.PlaneGeometry(1.0, 1.2, 8, 12);
  // Curve the cape
  const capePositions = capeGeo.attributes.position;
  for (let i = 0; i < capePositions.count; i++) {
    const y = capePositions.getY(i);
    const x = capePositions.getX(i);
    // Curve outward at bottom
    capePositions.setZ(i, -0.1 - y * 0.15 - Math.abs(x) * 0.1);
  }
  capeGeo.computeVertexNormals();
  
  const cape = new THREE.Mesh(capeGeo, capeMat);
  cape.position.set(0, 1.0, -0.35);
  cape.rotation.x = 0.1;
  cape.castShadow = true;
  group.add(cape);
  
  group.userData.cape = cape; // For animation
  
  // === ARMS - Powerful, armored ===
  const limbMat = new THREE.MeshStandardMaterial({
    color: colors.body,
    roughness: 0.75,
    metalness: 0.25,
  });
  
  const upperArmGeo = new THREE.CapsuleGeometry(0.14, 0.4, 8, 12);
  
  const leftUpperArm = new THREE.Mesh(upperArmGeo, limbMat);
  leftUpperArm.position.set(-0.55, 1.3, 0);
  leftUpperArm.rotation.z = 0.35;
  leftUpperArm.castShadow = true;
  group.add(leftUpperArm);
  
  const rightUpperArm = new THREE.Mesh(upperArmGeo, limbMat);
  rightUpperArm.position.set(0.55, 1.3, 0);
  rightUpperArm.rotation.z = -0.35;
  rightUpperArm.castShadow = true;
  group.add(rightUpperArm);
  
  const lowerArmGeo = new THREE.CapsuleGeometry(0.11, 0.45, 8, 12);
  
  const leftLowerArm = new THREE.Mesh(lowerArmGeo, limbMat);
  leftLowerArm.position.set(-0.75, 0.7, 0.1);
  leftLowerArm.rotation.z = 0.15;
  leftLowerArm.castShadow = true;
  group.add(leftLowerArm);
  
  const rightLowerArm = new THREE.Mesh(lowerArmGeo, limbMat);
  rightLowerArm.position.set(0.75, 0.7, 0.1);
  rightLowerArm.rotation.z = -0.15;
  rightLowerArm.castShadow = true;
  group.add(rightLowerArm);
  
  // Gauntlets
  const gauntletMat = new THREE.MeshStandardMaterial({
    color: 0x1a1a20,
    roughness: 0.35,
    metalness: 0.75,
  });
  
  const gauntletGeo = new THREE.SphereGeometry(0.12, 10, 8);
  
  const leftGauntlet = new THREE.Mesh(gauntletGeo, gauntletMat);
  leftGauntlet.position.set(-0.8, 0.3, 0.15);
  leftGauntlet.scale.set(1.1, 0.9, 1.2);
  leftGauntlet.castShadow = true;
  group.add(leftGauntlet);
  
  const rightGauntlet = new THREE.Mesh(gauntletGeo, gauntletMat);
  rightGauntlet.position.set(0.8, 0.3, 0.15);
  rightGauntlet.scale.set(1.1, 0.9, 1.2);
  rightGauntlet.castShadow = true;
  group.add(rightGauntlet);
  
  // === LEGS - Powerful, armored ===
  const legGeo = new THREE.CapsuleGeometry(0.15, 0.45, 8, 12);
  
  const leftLeg = new THREE.Mesh(legGeo, limbMat);
  leftLeg.position.set(-0.25, 0.45, 0);
  leftLeg.castShadow = true;
  group.add(leftLeg);
  
  const rightLeg = new THREE.Mesh(legGeo, limbMat);
  rightLeg.position.set(0.25, 0.45, 0);
  rightLeg.castShadow = true;
  group.add(rightLeg);
  
  // Armored boots
  const bootGeo = new THREE.BoxGeometry(0.2, 0.12, 0.3);
  
  const leftBoot = new THREE.Mesh(bootGeo, armorMat);
  leftBoot.position.set(-0.25, 0.06, 0.05);
  leftBoot.castShadow = true;
  group.add(leftBoot);
  
  const rightBoot = new THREE.Mesh(bootGeo, armorMat);
  rightBoot.position.set(0.25, 0.06, 0.05);
  rightBoot.castShadow = true;
  group.add(rightBoot);
  
  // === GREATSWORD (optional - carried by boss) ===
  const swordGroup = new THREE.Group();
  
  const bladeMat = new THREE.MeshStandardMaterial({
    color: 0x3a3a45,
    roughness: 0.25,
    metalness: 0.9,
    emissive: 0x200010,
    emissiveIntensity: 0.2,
  });
  
  const bladeGeo = new THREE.BoxGeometry(0.08, 1.4, 0.02);
  const blade = new THREE.Mesh(bladeGeo, bladeMat);
  blade.position.y = 0.7;
  swordGroup.add(blade);
  
  // Blade edge taper (simple)
  const edgeGeo = new THREE.ConeGeometry(0.04, 0.2, 4);
  const edge = new THREE.Mesh(edgeGeo, bladeMat);
  edge.position.y = 1.45;
  swordGroup.add(edge);
  
  // Hilt
  const hiltMat = new THREE.MeshStandardMaterial({
    color: 0x2a1a15,
    roughness: 0.5,
    metalness: 0.7,
  });
  
  const hiltGeo = new THREE.CylinderGeometry(0.03, 0.035, 0.25, 8);
  const hilt = new THREE.Mesh(hiltGeo, hiltMat);
  hilt.position.y = -0.12;
  swordGroup.add(hilt);
  
  // Crossguard
  const guardGeo = new THREE.BoxGeometry(0.25, 0.04, 0.06);
  const guard = new THREE.Mesh(guardGeo, hiltMat);
  guard.position.y = 0.02;
  swordGroup.add(guard);
  
  // Position sword in right hand
  swordGroup.position.set(0.85, 0.6, 0.2);
  swordGroup.rotation.z = -0.3;
  group.add(swordGroup);
  
  group.userData.sword = swordGroup;
  
  // === CORRUPTION AURA - Larger, more intense ===
  group.userData.particles = createBossCorruptionParticles(colors.glow);
  group.add(group.userData.particles);
  
  // Apply scale
  group.scale.setScalar(scale);
  
  // Store materials for effects
  group.userData.bodyMaterial = torsoMat;
  group.userData.limbMaterial = limbMat;
  group.userData.type = 'boss';
  group.userData.isEnemyModel = true;
  group.userData.isBoss = true;
  
  return group;
}

/**
 * Create boss-specific corruption particles (larger, more intense)
 */
function createBossCorruptionParticles(glowColor) {
  const particleCount = 40; // More particles for boss
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  const color = new THREE.Color(glowColor);
  
  for (let i = 0; i < particleCount; i++) {
    // Wider spread for boss
    positions[i * 3] = (Math.random() - 0.5) * 1.2;
    positions[i * 3 + 1] = Math.random() * 2.0 + 0.3;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 1.0;
    
    // Color with variation
    colors[i * 3] = color.r * (0.7 + Math.random() * 0.5);
    colors[i * 3 + 1] = color.g * (0.7 + Math.random() * 0.5);
    colors[i * 3 + 2] = color.b * (0.7 + Math.random() * 0.5);
  }
  
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  
  const material = new THREE.PointsMaterial({
    size: 0.12, // Larger particles
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  
  const particles = new THREE.Points(geometry, material);
  particles.userData.time = 0;
  particles.userData.basePositions = positions.slice();
  
  return particles;
}

/**
 * Update enemy model animations (call each frame)
 */
export function updateEnemyModel(model, delta) {
  if (!model.userData.isEnemyModel) return;
  
  // Animate corruption particles
  if (model.userData.particles) {
    const particles = model.userData.particles;
    particles.userData.time += delta;
    
    const positions = particles.geometry.attributes.position.array;
    const basePositions = particles.userData.basePositions;
    const time = particles.userData.time;
    
    for (let i = 0; i < positions.length / 3; i++) {
      // Swirl and rise effect
      const offset = i * 0.5;
      positions[i * 3] = basePositions[i * 3] + Math.sin(time * 2 + offset) * 0.1;
      positions[i * 3 + 1] = basePositions[i * 3 + 1] + ((time * 0.5 + offset) % 1.5);
      positions[i * 3 + 2] = basePositions[i * 3 + 2] + Math.cos(time * 2 + offset) * 0.1;
      
      // Reset particles that go too high
      if (positions[i * 3 + 1] > 2.0) {
        positions[i * 3 + 1] = basePositions[i * 3 + 1];
      }
    }
    
    particles.geometry.attributes.position.needsUpdate = true;
  }
  
  // Pulse eye glow
  if (model.userData.eyeMaterial) {
    const pulse = 3 + Math.sin(Date.now() * 0.003) * 1.5;
    model.userData.eyeMaterial.emissiveIntensity = pulse;
  }
  
  if (model.userData.eyeLight) {
    const lightPulse = 0.4 + Math.sin(Date.now() * 0.003) * 0.2;
    model.userData.eyeLight.intensity = lightPulse;
  }
}

/**
 * Flash the enemy model for damage feedback
 */
export function flashEnemyModel(model, color = 0xff0000, duration = 150) {
  if (!model.userData.isEnemyModel) return;
  
  const flashColor = new THREE.Color(color);
  
  model.traverse(child => {
    if (child.isMesh && child.material && child.material.emissive) {
      const origEmissive = child.material.emissive.clone();
      const origIntensity = child.material.emissiveIntensity;
      
      child.material.emissive.copy(flashColor);
      child.material.emissiveIntensity = 2;
      
      setTimeout(() => {
        if (child.material) {
          child.material.emissive.copy(origEmissive);
          child.material.emissiveIntensity = origIntensity;
        }
      }, duration);
    }
  });
}

export const ModelBuilder = {
  buildEnemyModel,
  buildEliteEnemyModel,
  buildBerserkerModel,
  buildRevenantModel,
  buildSentinelModel,
  buildRangedEnemyModel,
  buildBossModel,
  updateEnemyModel,
  flashEnemyModel,
  ENEMY_PALETTES
};
