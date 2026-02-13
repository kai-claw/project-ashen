import * as THREE from 'three';

export class ItemManager {
  constructor(scene, gameManager) {
    this.scene = scene;
    this.gm = gameManager;
    this.items = [];
    this.inventory = {
      keys: new Set(),
    };
    
    // Item pickup notification element
    this.notificationEl = document.getElementById('item-notification');
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
    
    // Apply effect based on type
    let message = '';
    switch (item.type) {
      case 'remnant':
        this.gm.addRemnant(item.value);
        message = `+${item.value} Remnant`;
        console.log(`[ITEM] Collected ${item.value} remnant`);
        break;
        
      case 'key':
        this.inventory.keys.add(item.keyId);
        message = `Got ${item.name}`;
        console.log(`[ITEM] Collected key: ${item.name} (${item.keyId})`);
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
