import * as THREE from 'three';

// ========== BOSS UNIQUE ITEM DEFINITIONS ==========
export const BOSS_ITEMS = {
  CRYPT_LORDS_GREATSWORD: {
    id: 'crypt-lords-greatsword',
    name: "Crypt Lord's Greatsword",
    type: 'weapon',
    description: 'A massive blade once wielded by the guardian of the ritual chamber. Purple energy crackles through cracks in the metal.',
    stats: {
      damage: 65,
      scaling: { strength: 'A', dexterity: 'D' },
      weight: 12,
      criticalDamage: 110,
    },
    special: 'Charged R2 releases purple shockwave (consumes 20 extra stamina)',
    color: 0x6622aa, // Purple tint
    lightColor: 0x8844cc,
    canInfuse: false,
  },
  LORD_SOUL_FRAGMENT: {
    id: 'lord-soul-fragment',
    name: 'Lord Soul Fragment',
    type: 'upgrade',
    description: 'A fragment of the soul that sought godhood. Can be used at the crucible to grant +2 to any single stat track.',
    stats: {
      infusionBonus: 2,
    },
    color: 0xff44ff, // Bright purple-pink
    lightColor: 0xff66ff,
    lore: 'What rises from the ritual circle was never meant to die. It was meant to ascend.',
  },
};

export class ItemManager {
  constructor(scene, gameManager) {
    this.scene = scene;
    this.gm = gameManager;
    this.items = [];
    this.inventory = {
      keys: new Set(),
      weapons: [],      // Collected boss weapons
      upgrades: [],     // Collected upgrade materials
    };
    
    // Track boss defeats for reward drops
    this.bossesDefeated = new Set();
    
    // Item pickup notification element
    this.notificationEl = document.getElementById('item-notification');
    
    // Victory notification element (for boss kills)
    this.victoryNotificationEl = document.getElementById('victory-notification');
  }
  
  // Initialize items from world spawn data
  initItems(spawns) {
    spawns.forEach((spawn, i) => {
      this.spawnItem(spawn.pos, spawn.type, spawn);
    });
  }
  
  spawnItem(position, type, data = {}) {
    const item = {
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      type,
      position: position.clone(),
      collected: false,
      mesh: null,
      light: null,
      ...data,
    };
    
    // Create visual based on type
    switch (type) {
      case 'remnant':
        this._createRemnantVisual(item);
        break;
      case 'key':
        this._createKeyVisual(item);
        break;
      case 'boss_remnant':
        this._createBossRemnantVisual(item);
        break;
      case 'boss_weapon':
        this._createBossWeaponVisual(item);
        break;
      case 'boss_upgrade':
        this._createBossUpgradeVisual(item);
        break;
      default:
        this._createGenericVisual(item);
    }
    
    this.items.push(item);
    return item;
  }
  
  _createRemnantVisual(item) {
    // Glowing orb for remnant pickups
    const geo = new THREE.SphereGeometry(0.15, 12, 12);
    const mat = new THREE.MeshStandardMaterial({
      color: 0x88ffaa,
      emissive: 0x44aa66,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.9,
    });
    
    item.mesh = new THREE.Mesh(geo, mat);
    item.mesh.position.copy(item.position);
    item.mesh.castShadow = true;
    this.scene.add(item.mesh);
    
    // Point light
    item.light = new THREE.PointLight(0x88ffaa, 0.8, 4);
    item.light.position.copy(item.position);
    this.scene.add(item.light);
    
    // Floating animation
    const baseY = item.position.y;
    const animate = () => {
      if (item.collected) return;
      requestAnimationFrame(animate);
      item.mesh.position.y = baseY + Math.sin(Date.now() * 0.003) * 0.15;
      item.mesh.rotation.y += 0.02;
      item.light.position.y = item.mesh.position.y;
      item.light.intensity = 0.6 + Math.sin(Date.now() * 0.005) * 0.3;
    };
    animate();
  }
  
  _createKeyVisual(item) {
    // Key shape (simplified)
    const group = new THREE.Group();
    
    // Key head (ring)
    const headGeo = new THREE.TorusGeometry(0.12, 0.03, 8, 16);
    const keyMat = new THREE.MeshStandardMaterial({
      color: 0xccaa44,
      emissive: 0x664422,
      emissiveIntensity: 0.5,
      metalness: 0.8,
      roughness: 0.3,
    });
    const head = new THREE.Mesh(headGeo, keyMat);
    head.rotation.x = Math.PI / 2;
    group.add(head);
    
    // Key shaft
    const shaftGeo = new THREE.BoxGeometry(0.04, 0.25, 0.02);
    const shaft = new THREE.Mesh(shaftGeo, keyMat);
    shaft.position.y = -0.18;
    group.add(shaft);
    
    // Key teeth
    const teeth1 = new THREE.BoxGeometry(0.08, 0.04, 0.02);
    const tooth1 = new THREE.Mesh(teeth1, keyMat);
    tooth1.position.set(0.04, -0.25, 0);
    group.add(tooth1);
    
    const tooth2 = new THREE.Mesh(teeth1, keyMat);
    tooth2.position.set(0.04, -0.32, 0);
    group.add(tooth2);
    
    group.position.copy(item.position);
    item.mesh = group;
    this.scene.add(group);
    
    // Point light
    item.light = new THREE.PointLight(0xffaa44, 1, 5);
    item.light.position.copy(item.position);
    this.scene.add(item.light);
    
    // Floating animation
    const baseY = item.position.y;
    const animate = () => {
      if (item.collected) return;
      requestAnimationFrame(animate);
      item.mesh.position.y = baseY + Math.sin(Date.now() * 0.003) * 0.1;
      item.mesh.rotation.y += 0.015;
      item.light.position.y = item.mesh.position.y;
      item.light.intensity = 0.8 + Math.sin(Date.now() * 0.004) * 0.3;
    };
    animate();
  }
  
  _createGenericVisual(item) {
    const geo = new THREE.OctahedronGeometry(0.15);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xaaaaff,
      emissive: 0x4444aa,
      emissiveIntensity: 0.5,
    });
    
    item.mesh = new THREE.Mesh(geo, mat);
    item.mesh.position.copy(item.position);
    this.scene.add(item.mesh);
    
    const baseY = item.position.y;
    const animate = () => {
      if (item.collected) return;
      requestAnimationFrame(animate);
      item.mesh.position.y = baseY + Math.sin(Date.now() * 0.003) * 0.1;
      item.mesh.rotation.y += 0.02;
      item.mesh.rotation.x += 0.01;
    };
    animate();
  }
  
  // ========== BOSS REMNANT (Large golden soul orb) ==========
  _createBossRemnantVisual(item) {
    const geo = new THREE.SphereGeometry(0.4, 24, 24);
    const mat = new THREE.MeshStandardMaterial({
      color: 0xffdd66,
      emissive: 0xffaa22,
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.95,
    });
    
    item.mesh = new THREE.Mesh(geo, mat);
    item.mesh.position.copy(item.position);
    item.mesh.castShadow = true;
    this.scene.add(item.mesh);
    
    // Inner glow core
    const coreGeo = new THREE.SphereGeometry(0.2, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    item.mesh.add(core);
    
    // Bright point light for boss drop
    item.light = new THREE.PointLight(0xffdd66, 2.5, 8);
    item.light.position.copy(item.position);
    this.scene.add(item.light);
    
    // Floating + pulsing animation
    const baseY = item.position.y;
    const animate = () => {
      if (item.collected) return;
      requestAnimationFrame(animate);
      const t = Date.now() * 0.002;
      item.mesh.position.y = baseY + Math.sin(t) * 0.2;
      item.mesh.rotation.y += 0.025;
      // Pulse scale
      const pulse = 1 + Math.sin(t * 2) * 0.08;
      item.mesh.scale.setScalar(pulse);
      // Pulse light
      item.light.position.y = item.mesh.position.y;
      item.light.intensity = 2.0 + Math.sin(t * 2) * 0.8;
    };
    animate();
  }
  
  // ========== BOSS WEAPON (Greatsword visual) ==========
  _createBossWeaponVisual(item) {
    const group = new THREE.Group();
    const itemDef = item.itemDef || BOSS_ITEMS.CRYPT_LORDS_GREATSWORD;
    
    // Blade (long rectangular prism)
    const bladeGeo = new THREE.BoxGeometry(0.12, 1.2, 0.03);
    const bladeMat = new THREE.MeshStandardMaterial({
      color: 0x555566,
      emissive: itemDef.color,
      emissiveIntensity: 0.4,
      metalness: 0.9,
      roughness: 0.2,
    });
    const blade = new THREE.Mesh(bladeGeo, bladeMat);
    blade.position.y = 0.6;
    group.add(blade);
    
    // Energy cracks on blade (purple glow lines)
    const crack1Geo = new THREE.BoxGeometry(0.02, 0.8, 0.04);
    const crackMat = new THREE.MeshBasicMaterial({
      color: itemDef.lightColor,
      transparent: true,
      opacity: 0.9,
    });
    const crack1 = new THREE.Mesh(crack1Geo, crackMat);
    crack1.position.set(0.03, 0.5, 0);
    crack1.rotation.z = 0.15;
    group.add(crack1);
    
    const crack2 = new THREE.Mesh(crack1Geo, crackMat);
    crack2.position.set(-0.02, 0.7, 0);
    crack2.rotation.z = -0.1;
    group.add(crack2);
    
    // Guard (crosspiece)
    const guardGeo = new THREE.BoxGeometry(0.35, 0.06, 0.06);
    const guardMat = new THREE.MeshStandardMaterial({
      color: 0x333344,
      metalness: 0.8,
      roughness: 0.3,
    });
    const guard = new THREE.Mesh(guardGeo, guardMat);
    guard.position.y = 0;
    group.add(guard);
    
    // Handle
    const handleGeo = new THREE.CylinderGeometry(0.03, 0.035, 0.3, 8);
    const handleMat = new THREE.MeshStandardMaterial({
      color: 0x442222,
      roughness: 0.8,
    });
    const handle = new THREE.Mesh(handleGeo, handleMat);
    handle.position.y = -0.18;
    group.add(handle);
    
    // Pommel
    const pommelGeo = new THREE.SphereGeometry(0.05, 8, 8);
    const pommelMat = new THREE.MeshStandardMaterial({
      color: itemDef.color,
      emissive: itemDef.color,
      emissiveIntensity: 0.6,
    });
    const pommel = new THREE.Mesh(pommelGeo, pommelMat);
    pommel.position.y = -0.35;
    group.add(pommel);
    
    group.position.copy(item.position);
    group.rotation.z = Math.PI / 6; // Tilt for display
    item.mesh = group;
    this.scene.add(group);
    
    // Purple point light
    item.light = new THREE.PointLight(itemDef.lightColor, 1.5, 6);
    item.light.position.copy(item.position);
    this.scene.add(item.light);
    
    // Floating + rotating animation
    const baseY = item.position.y;
    const animate = () => {
      if (item.collected) return;
      requestAnimationFrame(animate);
      const t = Date.now() * 0.001;
      item.mesh.position.y = baseY + Math.sin(t * 2) * 0.12;
      item.mesh.rotation.y += 0.015;
      // Pulse energy cracks
      const pulse = 0.6 + Math.sin(t * 4) * 0.3;
      crackMat.opacity = pulse;
      item.light.position.y = item.mesh.position.y;
      item.light.intensity = 1.2 + Math.sin(t * 3) * 0.5;
    };
    animate();
  }
  
  // ========== BOSS UPGRADE MATERIAL (Lord Soul Fragment) ==========
  _createBossUpgradeVisual(item) {
    const itemDef = item.itemDef || BOSS_ITEMS.LORD_SOUL_FRAGMENT;
    const group = new THREE.Group();
    
    // Central crystal shard
    const crystalGeo = new THREE.OctahedronGeometry(0.25);
    const crystalMat = new THREE.MeshStandardMaterial({
      color: itemDef.color,
      emissive: itemDef.color,
      emissiveIntensity: 1.0,
      transparent: true,
      opacity: 0.85,
      metalness: 0.3,
      roughness: 0.1,
    });
    const crystal = new THREE.Mesh(crystalGeo, crystalMat);
    group.add(crystal);
    
    // Orbiting energy particles
    const particleCount = 5;
    const particles = [];
    for (let i = 0; i < particleCount; i++) {
      const pGeo = new THREE.SphereGeometry(0.04, 8, 8);
      const pMat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
      });
      const particle = new THREE.Mesh(pGeo, pMat);
      particle.userData.orbitAngle = (Math.PI * 2 * i) / particleCount;
      particle.userData.orbitRadius = 0.35 + Math.random() * 0.1;
      particle.userData.orbitSpeed = 2 + Math.random();
      particles.push(particle);
      group.add(particle);
    }
    
    group.position.copy(item.position);
    item.mesh = group;
    this.scene.add(group);
    
    // Bright pink-purple light
    item.light = new THREE.PointLight(itemDef.lightColor, 2.0, 7);
    item.light.position.copy(item.position);
    this.scene.add(item.light);
    
    // Floating + rotating + orbiting particles animation
    const baseY = item.position.y;
    const animate = () => {
      if (item.collected) return;
      requestAnimationFrame(animate);
      const t = Date.now() * 0.001;
      
      // Float and rotate main crystal
      item.mesh.position.y = baseY + Math.sin(t * 1.5) * 0.15;
      crystal.rotation.y += 0.02;
      crystal.rotation.x = Math.sin(t) * 0.2;
      
      // Orbit particles
      particles.forEach(p => {
        const angle = p.userData.orbitAngle + t * p.userData.orbitSpeed;
        p.position.x = Math.cos(angle) * p.userData.orbitRadius;
        p.position.z = Math.sin(angle) * p.userData.orbitRadius;
        p.position.y = Math.sin(angle * 2) * 0.1;
      });
      
      // Pulse light
      item.light.position.y = item.mesh.position.y;
      item.light.intensity = 1.5 + Math.sin(t * 2) * 0.7;
    };
    animate();
  }
  
  // ========== SPAWN BOSS REWARDS ==========
  /**
   * Spawn boss rewards at the given position
   * @param {THREE.Vector3} position - Drop location
   * @param {string} bossId - Boss identifier for tracking
   * @param {number} remnantAmount - Remnants to drop
   * @param {Object} itemDef - Boss item definition (weapon or upgrade)
   */
  spawnBossRewards(position, bossId, remnantAmount, itemDef) {
    // Check if already defeated (prevent duplicate drops)
    if (this.bossesDefeated.has(bossId)) {
      return;
    }
    this.bossesDefeated.add(bossId);
    
    // Spawn large remnant drop
    const remnantPos = position.clone();
    remnantPos.y += 0.5;
    this.spawnItem(remnantPos, 'boss_remnant', {
      value: remnantAmount,
      name: `${remnantAmount} Remnant`,
    });
    
    // Spawn unique item (slightly offset)
    const itemPos = position.clone();
    itemPos.x += 0.8;
    itemPos.y += 0.8;
    
    const itemType = itemDef.type === 'weapon' ? 'boss_weapon' : 'boss_upgrade';
    this.spawnItem(itemPos, itemType, {
      itemDef: itemDef,
      name: itemDef.name,
      description: itemDef.description,
    });
  }
  
  // ========== SHOW VICTORY NOTIFICATION ==========
  /**
   * Display boss victory fanfare notification
   * @param {string} bossName - Name of defeated boss
   */
  showVictoryNotification(bossName) {
    // Try dedicated victory element first
    let el = this.victoryNotificationEl;
    if (!el) {
      el = document.getElementById('victory-notification');
    }
    
    // Fallback: create temporary element
    if (!el) {
      el = document.createElement('div');
      el.id = 'victory-notification-temp';
      el.style.cssText = `
        position: fixed;
        top: 35%;
        left: 50%;
        transform: translateX(-50%);
        font-family: 'Cinzel', serif;
        font-size: 3em;
        font-weight: bold;
        color: #ffd700;
        text-shadow: 0 0 30px #ffa500, 0 0 60px #ff6600, 2px 2px 4px #000;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        opacity: 0;
        transition: opacity 0.8s ease-in;
        z-index: 1000;
        pointer-events: none;
        text-align: center;
      `;
      document.body.appendChild(el);
    }
    
    // Set message and animate
    el.innerHTML = `<span style="display:block;font-size:0.4em;color:#aaa;margin-bottom:0.3em">GREAT FOE VANQUISHED</span>${bossName}`;
    el.style.opacity = '0';
    
    // Fade in
    setTimeout(() => {
      el.style.opacity = '1';
    }, 100);
    
    // Fade out after 4 seconds
    setTimeout(() => {
      el.style.opacity = '0';
    }, 4500);
    
    // Remove temp element after animation
    if (el.id === 'victory-notification-temp') {
      setTimeout(() => {
        if (el.parentNode) el.parentNode.removeChild(el);
      }, 6000);
    }
  }
  
  // Check for item pickups near player
  update(playerPosition) {
    const pickupRange = 1.5;
    
    for (const item of this.items) {
      if (item.collected) continue;
      
      const dist = playerPosition.distanceTo(item.position);
      if (dist < pickupRange) {
        this.collectItem(item);
      }
    }
  }
  
  collectItem(item) {
    if (item.collected) return;
    
    item.collected = true;
    
    // Remove visuals
    if (item.mesh) this.scene.remove(item.mesh);
    if (item.light) this.scene.remove(item.light);
    
    // Play pickup sound
    if (this.gm.audioManager) {
      this.gm.audioManager.play('itemPickup', { 
        position: item.position, 
        volume: 0.6 
      });
    }
    
    // Apply effect based on type
    let message = '';
    switch (item.type) {
      case 'remnant':
        this.gm.addRemnant(item.value);
        message = `+${item.value} Remnant`;
        break;
        
      case 'boss_remnant':
        this.gm.addRemnant(item.value);
        message = `+${item.value} Remnant`;
        // Play special boss pickup sound
        if (this.gm.audioManager) {
          this.gm.audioManager.play('menuConfirm', { volume: 0.8 });
        }
        break;
        
      case 'key':
        this.inventory.keys.add(item.keyId);
        message = `Got ${item.name}`;
        break;
        
      case 'boss_weapon':
        this.inventory.weapons.push(item.itemDef || item);
        message = `Obtained: ${item.name}`;
        // Play triumphant sound
        if (this.gm.audioManager) {
          this.gm.audioManager.play('menuConfirm', { volume: 1.0 });
        }
        break;
        
      case 'boss_upgrade':
        this.inventory.upgrades.push(item.itemDef || item);
        message = `Obtained: ${item.name}`;
        // Play triumphant sound  
        if (this.gm.audioManager) {
          this.gm.audioManager.play('menuConfirm', { volume: 1.0 });
        }
        break;
        
      default:
        message = 'Item collected';
    }
    
    // Show notification
    this.showNotification(message);
  }
  
  showNotification(message) {
    if (!this.notificationEl) return;
    
    this.notificationEl.textContent = message;
    this.notificationEl.classList.add('visible');
    
    setTimeout(() => {
      this.notificationEl.classList.remove('visible');
    }, 2000);
  }
  
  // Check if player has a specific key
  hasKey(keyId) {
    return this.inventory.keys.has(keyId);
  }
  
  // Reset items on respawn (optional - currently items stay collected)
  resetItems() {
    // Could re-spawn items here if desired
  }
}
