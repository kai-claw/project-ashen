import * as THREE from 'three';

/**
 * ModelBuilder - Creates distinct procedural models for enemies
 * Enemies should look DIFFERENT from the player - corrupted, monstrous humanoids
 */

// Color palettes for enemy types
const ENEMY_PALETTES = {
  standard: {
    body: 0x3a3a35,      // Ashen gray
    accent: 0x2a2520,    // Dark brown
    glow: 0xff3333,      // Red glow
    corruption: 0x1a1a15 // Near black
  },
  elite: {
    body: 0x2a1515,      // Dark crimson
    accent: 0x4a2020,    // Blood red
    glow: 0xff4400,      // Orange-red glow
    corruption: 0x150a0a // Deep crimson-black
  },
  berserker: {
    body: 0x4a2020,      // Angry red-brown
    accent: 0x662222,    // Brighter red
    glow: 0xff6600,      // Orange glow
    corruption: 0x200808 // Dark blood
  },
  revenant: {
    body: 0x8a7a5a,      // Bone color
    accent: 0x5a4a3a,    // Darker bone
    glow: 0x44ff44,      // Eerie green
    corruption: 0x3a3020 // Decayed
  },
  sentinel: {
    body: 0x3a3a4a,      // Blue-gray
    accent: 0x2a2a35,    // Darker blue-gray
    glow: 0x4444ff,      // Blue glow
    corruption: 0x1a1a25 // Deep blue-black
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
  updateEnemyModel,
  flashEnemyModel,
  ENEMY_PALETTES
};
