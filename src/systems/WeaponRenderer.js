/**
 * WeaponRenderer.js - Visual Weapon Models
 * Phase 19: Weapon Variety & Animations
 * 
 * Creates distinct visual weapons using Three.js geometry:
 * - Swords: elongated blade with crossguard and handle
 * - Axes: wedge blade on pole
 * - Spears: long pole with pointed tip
 * - Daggers: short blade, minimal guard
 * - Greatswords: large blade, thick crossguard
 * 
 * Rarity affects visual appearance:
 * - Common: gray/steel
 * - Uncommon: green tint
 * - Rare: blue glow
 * - Epic: purple glow
 * - Legendary: orange glow
 */

import * as THREE from 'three';
import { WEAPON_RARITY } from '../data/WeaponData.js';

// Hand attachment offset (relative to player mesh)
const HAND_OFFSET = {
  position: new THREE.Vector3(0.5, 0.2, 0.3),
  rotation: new THREE.Euler(0, 0, -Math.PI / 6),
};

// Base materials for weapon parts
const MATERIAL_CONFIGS = {
  blade: {
    metalness: 0.9,
    roughness: 0.2,
  },
  handle: {
    metalness: 0.3,
    roughness: 0.7,
    color: 0x3a2a1a, // Dark brown leather/wood
  },
  guard: {
    metalness: 0.85,
    roughness: 0.25,
  },
  accent: {
    metalness: 0.7,
    roughness: 0.3,
  },
};

export class WeaponRenderer {
  constructor() {
    // Cache for created weapons
    this.weaponCache = new Map();
    
    // Glow light for rare+ weapons
    this.glowLight = null;
    
    console.log('[WeaponRenderer] Initialized');
  }
  
  /**
   * Create a weapon mesh based on type and rarity
   * @param {string} weaponType - sword, axe, spear, dagger, greatsword, longsword
   * @param {object} rarity - Rarity tier from WEAPON_RARITY
   * @param {object} options - Additional options (name, specialEffect, etc.)
   * @returns {THREE.Group} Weapon mesh group
   */
  createWeapon(weaponType, rarity = WEAPON_RARITY.COMMON, options = {}) {
    const weapon = new THREE.Group();
    weapon.userData.weaponType = weaponType;
    weapon.userData.rarity = rarity;
    
    // Normalize weapon type
    const type = this.normalizeWeaponType(weaponType);
    
    // Create geometry based on type
    switch (type) {
      case 'sword':
        this.buildSword(weapon, rarity, options);
        break;
      case 'longsword':
        this.buildLongsword(weapon, rarity, options);
        break;
      case 'greatsword':
        this.buildGreatsword(weapon, rarity, options);
        break;
      case 'axe':
        this.buildAxe(weapon, rarity, options);
        break;
      case 'spear':
        this.buildSpear(weapon, rarity, options);
        break;
      case 'dagger':
        this.buildDagger(weapon, rarity, options);
        break;
      default:
        // Default to sword
        this.buildSword(weapon, rarity, options);
    }
    
    // Add glow effect for uncommon+
    if (rarity.glowIntensity > 0) {
      this.addGlowEffect(weapon, rarity);
    }
    
    // Set default hand position
    weapon.position.copy(HAND_OFFSET.position);
    weapon.rotation.copy(HAND_OFFSET.rotation);
    
    // Enable shadows
    weapon.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = false;
      }
    });
    
    return weapon;
  }
  
  /**
   * Normalize weapon type string
   */
  normalizeWeaponType(type) {
    if (!type) return 'sword';
    const normalized = type.toLowerCase().trim();
    
    // Map visual models to types
    const typeMap = {
      'sword': 'sword',
      'longsword': 'longsword',
      'greatsword': 'greatsword',
      'axe': 'axe',
      'battleaxe': 'axe',
      'spear': 'spear',
      'halberd': 'spear',
      'dagger': 'dagger',
      'knife': 'dagger',
    };
    
    return typeMap[normalized] || 'sword';
  }
  
  /**
   * Create material with rarity coloring
   */
  createMaterial(config, rarity, isBladeOrMain = false) {
    const mat = new THREE.MeshStandardMaterial({
      color: isBladeOrMain ? this.getBladeColor(rarity) : (config.color || 0x888888),
      metalness: config.metalness || 0.5,
      roughness: config.roughness || 0.5,
    });
    
    // Add emissive for higher rarities (only if material supports it)
    if (isBladeOrMain && rarity.glowIntensity > 0 && mat.emissive) {
      mat.emissive = new THREE.Color(rarity.hexColor);
      mat.emissiveIntensity = rarity.glowIntensity * 0.3;
    }
    
    return mat;
  }
  
  /**
   * Get blade color based on rarity
   */
  getBladeColor(rarity) {
    switch (rarity.id) {
      case 'common':
        return 0x8a8a8a; // Steel gray
      case 'uncommon':
        return 0x9ab89a; // Greenish steel
      case 'rare':
        return 0x8aaccc; // Blueish steel
      case 'epic':
        return 0xb89acc; // Purple tinted
      case 'legendary':
        return 0xccaa8a; // Golden/orange tinted
      default:
        return 0x8a8a8a;
    }
  }
  
  // ========== SWORD ==========
  buildSword(weapon, rarity, options) {
    const bladeMat = this.createMaterial(MATERIAL_CONFIGS.blade, rarity, true);
    const handleMat = this.createMaterial(MATERIAL_CONFIGS.handle, rarity);
    const guardMat = this.createMaterial(MATERIAL_CONFIGS.guard, rarity, true);
    
    // Blade - elongated with tapered point
    const bladeGroup = new THREE.Group();
    
    // Main blade body
    const bladeGeo = new THREE.BoxGeometry(0.06, 0.55, 0.015);
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.y = 0.35;
    bladeGroup.add(blade);
    
    // Blade tip (tapered)
    const tipGeo = new THREE.ConeGeometry(0.03, 0.12, 4);
    const tip = new THREE.Mesh(tipGeo, bladeMat);
    tip.position.y = 0.68;
    tip.rotation.z = Math.PI;
    bladeGroup.add(tip);
    
    // Fuller (blood groove) - darker inset
    const fullerMat = new THREE.MeshStandardMaterial({
      color: 0x444444,
      metalness: 0.8,
      roughness: 0.4,
    });
    const fullerGeo = new THREE.BoxGeometry(0.02, 0.4, 0.005);
    const fuller = new THREE.Mesh(fullerGeo, fullerMat);
    fuller.position.set(0, 0.32, 0.006);
    bladeGroup.add(fuller);
    
    weapon.add(bladeGroup);
    
    // Crossguard
    const guardGeo = new THREE.BoxGeometry(0.2, 0.04, 0.025);
    const guard = new THREE.Mesh(guardGeo, guardMat);
    guard.position.y = 0.04;
    weapon.add(guard);
    
    // Guard end caps (rounded)
    const capGeo = new THREE.SphereGeometry(0.025, 8, 6);
    const leftCap = new THREE.Mesh(capGeo, guardMat);
    leftCap.position.set(-0.1, 0.04, 0);
    weapon.add(leftCap);
    
    const rightCap = new THREE.Mesh(capGeo, guardMat);
    rightCap.position.set(0.1, 0.04, 0);
    weapon.add(rightCap);
    
    // Handle (grip)
    const handleGeo = new THREE.CylinderGeometry(0.022, 0.025, 0.15, 8);
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.y = -0.05;
    weapon.add(handle);
    
    // Pommel (bottom cap)
    const pommelGeo = new THREE.SphereGeometry(0.035, 8, 6);
    const pommel = new THREE.Mesh(pommelGeo, guardMat);
    pommel.position.y = -0.14;
    weapon.add(pommel);
  }
  
  // ========== LONGSWORD ==========
  buildLongsword(weapon, rarity, options) {
    const bladeMat = this.createMaterial(MATERIAL_CONFIGS.blade, rarity, true);
    const handleMat = this.createMaterial(MATERIAL_CONFIGS.handle, rarity);
    const guardMat = this.createMaterial(MATERIAL_CONFIGS.guard, rarity, true);
    
    // Blade - longer than standard sword
    const bladeGroup = new THREE.Group();
    
    // Main blade
    const bladeGeo = new THREE.BoxGeometry(0.07, 0.75, 0.018);
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.y = 0.45;
    bladeGroup.add(blade);
    
    // Blade tip
    const tipGeo = new THREE.ConeGeometry(0.035, 0.15, 4);
    const tip = new THREE.Mesh(tipGeo, bladeMat);
    tip.position.y = 0.9;
    tip.rotation.z = Math.PI;
    bladeGroup.add(tip);
    
    // Fuller
    const fullerMat = new THREE.MeshStandardMaterial({
      color: 0x444444,
      metalness: 0.8,
      roughness: 0.4,
    });
    const fullerGeo = new THREE.BoxGeometry(0.025, 0.55, 0.005);
    const fuller = new THREE.Mesh(fullerGeo, fullerMat);
    fuller.position.set(0, 0.4, 0.008);
    bladeGroup.add(fuller);
    
    weapon.add(bladeGroup);
    
    // Crossguard - wider and more ornate
    const guardGeo = new THREE.BoxGeometry(0.28, 0.05, 0.03);
    const guard = new THREE.Mesh(guardGeo, guardMat);
    guard.position.y = 0.04;
    weapon.add(guard);
    
    // Guard decorations
    const decorGeo = new THREE.SphereGeometry(0.03, 8, 6);
    const leftDecor = new THREE.Mesh(decorGeo, guardMat);
    leftDecor.position.set(-0.14, 0.04, 0);
    weapon.add(leftDecor);
    
    const rightDecor = new THREE.Mesh(decorGeo, guardMat);
    rightDecor.position.set(0.14, 0.04, 0);
    weapon.add(rightDecor);
    
    // Handle - longer grip
    const handleGeo = new THREE.CylinderGeometry(0.025, 0.028, 0.2, 8);
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.y = -0.08;
    weapon.add(handle);
    
    // Handle wrap details
    const wrapMat = new THREE.MeshStandardMaterial({
      color: 0x2a1a0a,
      roughness: 0.9,
    });
    for (let i = 0; i < 4; i++) {
      const wrapGeo = new THREE.TorusGeometry(0.028, 0.004, 4, 8);
      const wrap = new THREE.Mesh(wrapGeo, wrapMat);
      wrap.position.y = -0.16 + i * 0.045;
      wrap.rotation.x = Math.PI / 2;
      weapon.add(wrap);
    }
    
    // Pommel - more ornate
    const pommelGeo = new THREE.DodecahedronGeometry(0.04, 0);
    const pommel = new THREE.Mesh(pommelGeo, guardMat);
    pommel.position.y = -0.2;
    weapon.add(pommel);
  }
  
  // ========== GREATSWORD ==========
  buildGreatsword(weapon, rarity, options) {
    const bladeMat = this.createMaterial(MATERIAL_CONFIGS.blade, rarity, true);
    const handleMat = this.createMaterial(MATERIAL_CONFIGS.handle, rarity);
    const guardMat = this.createMaterial(MATERIAL_CONFIGS.guard, rarity, true);
    
    // Massive blade
    const bladeGroup = new THREE.Group();
    
    // Main blade - very large
    const bladeGeo = new THREE.BoxGeometry(0.12, 1.1, 0.025);
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.y = 0.7;
    bladeGroup.add(blade);
    
    // Blade tip - broad
    const tipShape = new THREE.Shape();
    tipShape.moveTo(-0.06, 0);
    tipShape.lineTo(0, 0.18);
    tipShape.lineTo(0.06, 0);
    tipShape.lineTo(-0.06, 0);
    
    const tipSettings = {
      depth: 0.025,
      bevelEnabled: false,
    };
    const tipGeo = new THREE.ExtrudeGeometry(tipShape, tipSettings);
    const tip = new THREE.Mesh(tipGeo, bladeMat);
    tip.position.set(0, 1.25, -0.0125);
    bladeGroup.add(tip);
    
    // Fuller - double groove
    const fullerMat = new THREE.MeshStandardMaterial({
      color: 0x3a3a3a,
      metalness: 0.85,
      roughness: 0.35,
    });
    const fullerGeo = new THREE.BoxGeometry(0.025, 0.85, 0.006);
    const fullerL = new THREE.Mesh(fullerGeo, fullerMat);
    fullerL.position.set(-0.025, 0.65, 0.012);
    bladeGroup.add(fullerL);
    
    const fullerR = new THREE.Mesh(fullerGeo, fullerMat);
    fullerR.position.set(0.025, 0.65, 0.012);
    bladeGroup.add(fullerR);
    
    weapon.add(bladeGroup);
    
    // Massive crossguard
    const guardGeo = new THREE.BoxGeometry(0.4, 0.06, 0.04);
    const guard = new THREE.Mesh(guardGeo, guardMat);
    guard.position.y = 0.08;
    weapon.add(guard);
    
    // Guard wings (swept downward)
    const wingGeo = new THREE.CylinderGeometry(0.025, 0.015, 0.08, 6);
    const leftWing = new THREE.Mesh(wingGeo, guardMat);
    leftWing.position.set(-0.2, 0.04, 0);
    leftWing.rotation.z = Math.PI / 4;
    weapon.add(leftWing);
    
    const rightWing = new THREE.Mesh(wingGeo, guardMat);
    rightWing.position.set(0.2, 0.04, 0);
    rightWing.rotation.z = -Math.PI / 4;
    weapon.add(rightWing);
    
    // Two-handed grip
    const handleGeo = new THREE.CylinderGeometry(0.03, 0.035, 0.35, 8);
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.y = -0.12;
    weapon.add(handle);
    
    // Handle wraps
    const wrapMat = new THREE.MeshStandardMaterial({
      color: 0x2a1a0a,
      roughness: 0.9,
    });
    for (let i = 0; i < 6; i++) {
      const wrapGeo = new THREE.TorusGeometry(0.033, 0.005, 4, 8);
      const wrap = new THREE.Mesh(wrapGeo, wrapMat);
      wrap.position.y = -0.25 + i * 0.055;
      wrap.rotation.x = Math.PI / 2;
      weapon.add(wrap);
    }
    
    // Heavy pommel
    const pommelGeo = new THREE.CylinderGeometry(0.05, 0.04, 0.06, 8);
    const pommel = new THREE.Mesh(pommelGeo, guardMat);
    pommel.position.y = -0.32;
    weapon.add(pommel);
    
    // Pommel cap
    const capGeo = new THREE.SphereGeometry(0.04, 8, 6);
    const cap = new THREE.Mesh(capGeo, guardMat);
    cap.position.y = -0.36;
    weapon.add(cap);
  }
  
  // ========== AXE ==========
  buildAxe(weapon, rarity, options) {
    const bladeMat = this.createMaterial(MATERIAL_CONFIGS.blade, rarity, true);
    const handleMat = this.createMaterial(MATERIAL_CONFIGS.handle, rarity);
    const accentMat = this.createMaterial(MATERIAL_CONFIGS.accent, rarity, true);
    
    // Axe head - wedge shape
    const headGroup = new THREE.Group();
    
    // Main blade using custom shape
    const axeShape = new THREE.Shape();
    axeShape.moveTo(0, -0.15);
    axeShape.quadraticCurveTo(0.18, -0.12, 0.22, 0);
    axeShape.quadraticCurveTo(0.18, 0.12, 0, 0.15);
    axeShape.lineTo(0, -0.15);
    
    const axeSettings = {
      depth: 0.04,
      bevelEnabled: true,
      bevelThickness: 0.01,
      bevelSize: 0.01,
      bevelSegments: 2,
    };
    const axeGeo = new THREE.ExtrudeGeometry(axeShape, axeSettings);
    const axeBlade = new THREE.Mesh(axeGeo, bladeMat);
    axeBlade.position.set(0.04, 0.4, -0.02);
    headGroup.add(axeBlade);
    
    // Axe eye (hole for handle)
    const eyeGeo = new THREE.CylinderGeometry(0.035, 0.035, 0.06, 8);
    const eyeMat = new THREE.MeshStandardMaterial({
      color: 0x555555,
      metalness: 0.7,
      roughness: 0.4,
    });
    const eye = new THREE.Mesh(eyeGeo, eyeMat);
    eye.position.set(0, 0.4, 0);
    eye.rotation.x = Math.PI / 2;
    headGroup.add(eye);
    
    // Back spike (for battle axes)
    const spikeGeo = new THREE.ConeGeometry(0.03, 0.1, 4);
    const spike = new THREE.Mesh(spikeGeo, bladeMat);
    spike.position.set(-0.06, 0.4, 0);
    spike.rotation.z = Math.PI / 2;
    headGroup.add(spike);
    
    weapon.add(headGroup);
    
    // Wooden handle/shaft
    const shaftGeo = new THREE.CylinderGeometry(0.025, 0.03, 0.6, 8);
    const shaft = new THREE.Mesh(shaftGeo, handleMat);
    shaft.position.y = 0.05;
    weapon.add(shaft);
    
    // Metal binding near head
    const bindingGeo = new THREE.CylinderGeometry(0.032, 0.032, 0.03, 8);
    const binding = new THREE.Mesh(bindingGeo, accentMat);
    binding.position.y = 0.3;
    weapon.add(binding);
    
    // Handle end cap
    const endCapGeo = new THREE.SphereGeometry(0.035, 8, 6);
    const endCap = new THREE.Mesh(endCapGeo, accentMat);
    endCap.position.y = -0.26;
    weapon.add(endCap);
  }
  
  // ========== SPEAR ==========
  buildSpear(weapon, rarity, options) {
    const bladeMat = this.createMaterial(MATERIAL_CONFIGS.blade, rarity, true);
    const handleMat = this.createMaterial(MATERIAL_CONFIGS.handle, rarity);
    const accentMat = this.createMaterial(MATERIAL_CONFIGS.accent, rarity, true);
    
    // Spear point - leaf-shaped blade
    const pointGroup = new THREE.Group();
    
    // Main point
    const pointShape = new THREE.Shape();
    pointShape.moveTo(0, 0);
    pointShape.quadraticCurveTo(0.04, 0.08, 0.03, 0.2);
    pointShape.lineTo(0, 0.35);
    pointShape.lineTo(-0.03, 0.2);
    pointShape.quadraticCurveTo(-0.04, 0.08, 0, 0);
    
    const pointSettings = {
      depth: 0.015,
      bevelEnabled: true,
      bevelThickness: 0.005,
      bevelSize: 0.005,
      bevelSegments: 1,
    };
    const pointGeo = new THREE.ExtrudeGeometry(pointShape, pointSettings);
    const point = new THREE.Mesh(pointGeo, bladeMat);
    point.position.set(0, 0.75, -0.0075);
    pointGroup.add(point);
    
    // Socket (connects blade to shaft)
    const socketGeo = new THREE.CylinderGeometry(0.022, 0.028, 0.08, 8);
    const socket = new THREE.Mesh(socketGeo, accentMat);
    socket.position.y = 0.73;
    pointGroup.add(socket);
    
    weapon.add(pointGroup);
    
    // Long wooden shaft
    const shaftGeo = new THREE.CylinderGeometry(0.018, 0.022, 1.2, 8);
    const shaft = new THREE.Mesh(shaftGeo, handleMat);
    shaft.position.y = 0.1;
    weapon.add(shaft);
    
    // Grip wrapping
    const wrapMat = new THREE.MeshStandardMaterial({
      color: 0x3a2a1a,
      roughness: 0.85,
    });
    for (let i = 0; i < 5; i++) {
      const wrapGeo = new THREE.TorusGeometry(0.022, 0.003, 4, 8);
      const wrap = new THREE.Mesh(wrapGeo, wrapMat);
      wrap.position.y = -0.1 + i * 0.04;
      wrap.rotation.x = Math.PI / 2;
      weapon.add(wrap);
    }
    
    // Butt spike (optional for balance)
    const buttGeo = new THREE.ConeGeometry(0.02, 0.08, 6);
    const buttSpike = new THREE.Mesh(buttGeo, accentMat);
    buttSpike.position.y = -0.54;
    buttSpike.rotation.z = Math.PI;
    weapon.add(buttSpike);
  }
  
  // ========== DAGGER ==========
  buildDagger(weapon, rarity, options) {
    const bladeMat = this.createMaterial(MATERIAL_CONFIGS.blade, rarity, true);
    const handleMat = this.createMaterial(MATERIAL_CONFIGS.handle, rarity);
    const guardMat = this.createMaterial(MATERIAL_CONFIGS.guard, rarity, true);
    
    // Short, thin blade
    const bladeGroup = new THREE.Group();
    
    // Main blade - narrow
    const bladeGeo = new THREE.BoxGeometry(0.035, 0.25, 0.008);
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.y = 0.18;
    bladeGroup.add(blade);
    
    // Sharp tip
    const tipGeo = new THREE.ConeGeometry(0.0175, 0.08, 4);
    const tip = new THREE.Mesh(tipGeo, bladeMat);
    tip.position.y = 0.35;
    tip.rotation.z = Math.PI;
    bladeGroup.add(tip);
    
    weapon.add(bladeGroup);
    
    // Minimal guard - just a disc
    const guardGeo = new THREE.CylinderGeometry(0.04, 0.045, 0.015, 8);
    const guard = new THREE.Mesh(guardGeo, guardMat);
    guard.position.y = 0.04;
    weapon.add(guard);
    
    // Short handle
    const handleGeo = new THREE.CylinderGeometry(0.018, 0.02, 0.1, 8);
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.y = -0.02;
    weapon.add(handle);
    
    // Small pommel
    const pommelGeo = new THREE.SphereGeometry(0.022, 8, 6);
    const pommel = new THREE.Mesh(pommelGeo, guardMat);
    pommel.position.y = -0.08;
    weapon.add(pommel);
  }
  
  // ========== GLOW EFFECT ==========
  addGlowEffect(weapon, rarity) {
    // Point light for weapon glow
    const light = new THREE.PointLight(
      rarity.hexColor,
      rarity.glowIntensity * 0.8,
      1.5
    );
    light.position.set(0, 0.3, 0);
    weapon.add(light);
    weapon.userData.glowLight = light;
    
    // Glow particles/aura (simple sphere overlay)
    if (rarity.glowIntensity >= 0.5) {
      const auraGeo = new THREE.SphereGeometry(0.15, 8, 6);
      const auraMat = new THREE.MeshBasicMaterial({
        color: rarity.hexColor,
        transparent: true,
        opacity: rarity.glowIntensity * 0.15,
        side: THREE.BackSide,
      });
      const aura = new THREE.Mesh(auraGeo, auraMat);
      aura.position.y = 0.4;
      aura.scale.set(1, 3, 1);
      weapon.add(aura);
      weapon.userData.aura = aura;
    }
  }
  
  /**
   * Update weapon glow animation
   * @param {THREE.Group} weapon - Weapon mesh group
   * @param {number} delta - Delta time
   * @param {number} time - Total elapsed time
   */
  updateGlow(weapon, delta, time) {
    if (!weapon?.userData?.glowLight) return;
    
    const rarity = weapon.userData.rarity;
    if (!rarity || rarity.glowIntensity <= 0) return;
    
    // Pulsing glow
    const pulse = Math.sin(time * 2) * 0.3 + 0.7;
    weapon.userData.glowLight.intensity = rarity.glowIntensity * pulse * 0.8;
    
    // Aura animation
    if (weapon.userData.aura) {
      weapon.userData.aura.rotation.y += delta * 0.5;
      weapon.userData.aura.material.opacity = rarity.glowIntensity * 0.15 * pulse;
    }
  }
  
  /**
   * Get attachment info for a weapon type
   * Used by AttackAnimator for positioning
   */
  getAttachmentInfo(weaponType) {
    const type = this.normalizeWeaponType(weaponType);
    
    // Return slightly different offsets based on weapon type
    switch (type) {
      case 'greatsword':
        return {
          position: new THREE.Vector3(0.6, 0.1, 0.2),
          rotation: new THREE.Euler(0, -Math.PI / 6, -Math.PI / 5),
        };
      case 'spear':
        return {
          position: new THREE.Vector3(0.4, 0.4, 0.2),
          rotation: new THREE.Euler(-Math.PI / 8, 0, -Math.PI / 4),
        };
      case 'axe':
        return {
          position: new THREE.Vector3(0.55, 0.15, 0.25),
          rotation: new THREE.Euler(0, 0, -Math.PI / 5),
        };
      case 'dagger':
        return {
          position: new THREE.Vector3(0.4, 0.1, 0.35),
          rotation: new THREE.Euler(0, 0, -Math.PI / 8),
        };
      case 'longsword':
      case 'sword':
      default:
        return {
          position: new THREE.Vector3(0.5, 0.2, 0.3),
          rotation: new THREE.Euler(0, 0, -Math.PI / 6),
        };
    }
  }
  
  /**
   * Dispose weapon and clean up resources
   */
  disposeWeapon(weapon) {
    if (!weapon) return;
    
    weapon.traverse((child) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) {
          child.material.forEach(m => m.dispose());
        } else {
          child.material.dispose();
        }
      }
    });
  }
}

// Singleton instance
let weaponRendererInstance = null;

export function getWeaponRenderer() {
  if (!weaponRendererInstance) {
    weaponRendererInstance = new WeaponRenderer();
  }
  return weaponRendererInstance;
}
