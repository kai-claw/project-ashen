import * as THREE from 'three';

// ========== ITEM DEFINITIONS ==========
export const ITEM_TYPES = {
  GOLD: {
    id: 'gold',
    name: 'Gold',
    type: 'currency',
    description: 'Currency for trading with merchants',
    color: 0xffd700,
    emissive: 0xaa8800,
    stackable: true,
  },
  HEALTH_POTION: {
    id: 'health-potion',
    name: 'Health Potion',
    type: 'consumable',
    description: 'Restores 50 HP when used',
    effect: { healAmount: 50 },
    color: 0xff4444,
    emissive: 0xaa2222,
    stackable: true,
    maxStack: 10,
    hotkey: '1',
  },
  STAMINA_POTION: {
    id: 'stamina-potion',
    name: 'Stamina Potion',
    type: 'consumable',
    description: 'Restores 75 Stamina when used',
    effect: { staminaAmount: 75 },
    color: 0x44ff44,
    emissive: 0x22aa22,
    stackable: true,
    maxStack: 10,
    hotkey: '2',
  },
  IRON_ORE: {
    id: 'iron-ore',
    name: 'Iron Ore',
    type: 'material',
    description: 'Raw metal for crafting weapons and armor',
    color: 0x888899,
    emissive: 0x444455,
    stackable: true,
    maxStack: 99,
  },
  DARK_SHARD: {
    id: 'dark-shard',
    name: 'Dark Shard',
    type: 'material',
    description: 'Crystallized corruption. Used in advanced crafting.',
    color: 0x6622aa,
    emissive: 0x441188,
    stackable: true,
    maxStack: 50,
  },
  BONE_FRAGMENT: {
    id: 'bone-fragment',
    name: 'Bone Fragment',
    type: 'material',
    description: 'Remains of fallen warriors. Used for crafting.',
    color: 0xddccaa,
    emissive: 0x887755,
    stackable: true,
    maxStack: 99,
  },
  SPIRIT_ESSENCE: {
    id: 'spirit-essence',
    name: 'Spirit Essence',
    type: 'material',
    description: 'A wisp of captured soul energy. Rare material.',
    color: 0x88ddff,
    emissive: 0x4499bb,
    stackable: true,
    maxStack: 20,
  },
};

// ========== LOOT TABLES ==========
// Format: { itemId, chance (0-1), minQty, maxQty }
const LOOT_TABLES = {
  // Basic remnant enemies
  hollow_soldier: [
    { itemId: 'gold', chance: 0.9, minQty: 5, maxQty: 15 },
    { itemId: 'health-potion', chance: 0.15, minQty: 1, maxQty: 1 },
    { itemId: 'bone-fragment', chance: 0.25, minQty: 1, maxQty: 2 },
  ],
  berserker: [
    { itemId: 'gold', chance: 0.95, minQty: 10, maxQty: 25 },
    { itemId: 'health-potion', chance: 0.2, minQty: 1, maxQty: 1 },
    { itemId: 'stamina-potion', chance: 0.2, minQty: 1, maxQty: 1 },
    { itemId: 'bone-fragment', chance: 0.3, minQty: 1, maxQty: 3 },
    { itemId: 'dark-shard', chance: 0.1, minQty: 1, maxQty: 1 },
  ],
  sentinel: [
    { itemId: 'gold', chance: 1.0, minQty: 20, maxQty: 40 },
    { itemId: 'health-potion', chance: 0.25, minQty: 1, maxQty: 2 },
    { itemId: 'iron-ore', chance: 0.35, minQty: 1, maxQty: 3 },
    { itemId: 'bone-fragment', chance: 0.4, minQty: 2, maxQty: 4 },
  ],
  revenant: [
    { itemId: 'gold', chance: 0.85, minQty: 8, maxQty: 18 },
    { itemId: 'stamina-potion', chance: 0.2, minQty: 1, maxQty: 1 },
    { itemId: 'dark-shard', chance: 0.2, minQty: 1, maxQty: 2 },
    { itemId: 'spirit-essence', chance: 0.1, minQty: 1, maxQty: 1 },
  ],
  ranged: [
    { itemId: 'gold', chance: 0.85, minQty: 8, maxQty: 20 },
    { itemId: 'health-potion', chance: 0.15, minQty: 1, maxQty: 1 },
    { itemId: 'bone-fragment', chance: 0.2, minQty: 1, maxQty: 2 },
  ],
  // Elite variants - better drops
  elite: [
    { itemId: 'gold', chance: 1.0, minQty: 30, maxQty: 60 },
    { itemId: 'health-potion', chance: 0.4, minQty: 1, maxQty: 2 },
    { itemId: 'stamina-potion', chance: 0.35, minQty: 1, maxQty: 2 },
    { itemId: 'iron-ore', chance: 0.4, minQty: 2, maxQty: 4 },
    { itemId: 'dark-shard', chance: 0.3, minQty: 1, maxQty: 3 },
    { itemId: 'spirit-essence', chance: 0.2, minQty: 1, maxQty: 1 },
  ],
  // Boss drops - guaranteed good stuff
  boss: [
    { itemId: 'gold', chance: 1.0, minQty: 200, maxQty: 400 },
    { itemId: 'health-potion', chance: 1.0, minQty: 3, maxQty: 5 },
    { itemId: 'stamina-potion', chance: 1.0, minQty: 3, maxQty: 5 },
    { itemId: 'dark-shard', chance: 1.0, minQty: 5, maxQty: 10 },
    { itemId: 'spirit-essence', chance: 1.0, minQty: 3, maxQty: 5 },
  ],
  // Default fallback
  default: [
    { itemId: 'gold', chance: 0.8, minQty: 3, maxQty: 10 },
    { itemId: 'bone-fragment', chance: 0.15, minQty: 1, maxQty: 1 },
  ],
};

// Enemy type mapping to loot table
function getEnemyLootTable(enemy) {
  if (enemy.isBoss) return 'boss';
  if (enemy.config?.isElite) return 'elite';
  
  const name = (enemy.config?.name || '').toLowerCase();
  if (name.includes('hollow') || name.includes('soldier')) return 'hollow_soldier';
  if (name.includes('berserker')) return 'berserker';
  if (name.includes('sentinel')) return 'sentinel';
  if (name.includes('revenant')) return 'revenant';
  if (name.includes('archer') || name.includes('ranged')) return 'ranged';
  
  return 'default';
}

/**
 * LootManager - Handles enemy loot drops, item pickups, and player inventory
 */
export class LootManager {
  constructor(scene, gameManager) {
    this.scene = scene;
    this.gm = gameManager;
    this.drops = []; // Active world drops
    
    // Player inventory
    this.inventory = {
      gold: 0,
      items: {}, // itemId -> quantity
      potionHotbar: ['health-potion', 'stamina-potion'], // Quick-use slots
    };
    
    // Pickup radius
    this.pickupRadius = 2.0;
    
    // Notification element
    this.notificationQueue = [];
    this.notificationActive = false;
    
    // Load saved inventory
    this._loadInventory();
    
    // Create notification container if needed
    this._ensureNotificationUI();
  }
  
  /**
   * Ensure notification UI exists
   */
  _ensureNotificationUI() {
    if (!document.getElementById('loot-notification')) {
      const notif = document.createElement('div');
      notif.id = 'loot-notification';
      notif.style.cssText = `
        position: fixed;
        bottom: 120px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.85);
        color: #fff;
        padding: 10px 25px;
        border-radius: 6px;
        font-family: 'Georgia', serif;
        font-size: 18px;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        z-index: 1000;
        border: 1px solid #444;
        text-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
      `;
      document.body.appendChild(notif);
    }
  }
  
  /**
   * Load inventory from localStorage
   */
  _loadInventory() {
    try {
      const saved = localStorage.getItem('ashen_inventory');
      if (saved) {
        const data = JSON.parse(saved);
        this.inventory.gold = data.gold || 0;
        this.inventory.items = data.items || {};
        if (data.potionHotbar) {
          this.inventory.potionHotbar = data.potionHotbar;
        }
        console.log('[LootManager] Loaded inventory:', this.inventory);
      }
    } catch (e) {
      console.warn('[LootManager] Failed to load inventory:', e);
    }
  }
  
  /**
   * Save inventory to localStorage
   */
  _saveInventory() {
    try {
      localStorage.setItem('ashen_inventory', JSON.stringify(this.inventory));
    } catch (e) {
      console.warn('[LootManager] Failed to save inventory:', e);
    }
  }
  
  /**
   * Roll loot from enemy death
   * @param {Enemy} enemy - The enemy that died
   * @param {THREE.Vector3} position - World position for drops
   */
  rollLoot(enemy, position) {
    const tableKey = getEnemyLootTable(enemy);
    const table = LOOT_TABLES[tableKey] || LOOT_TABLES.default;
    const drops = [];
    
    for (const entry of table) {
      if (Math.random() < entry.chance) {
        const qty = Math.floor(Math.random() * (entry.maxQty - entry.minQty + 1)) + entry.minQty;
        drops.push({ itemId: entry.itemId, quantity: qty });
      }
    }
    
    // Spawn visual drops
    this._spawnDrops(drops, position);
    
    // Roll for equipment drop (via EquipmentManager)
    if (this.equipmentManager) {
      const equipment = this.equipmentManager.generateEquipmentDrop(tableKey);
      if (equipment) {
        this.equipmentManager.addToInventory(equipment);
        console.log(`[LootManager] Equipment dropped: ${equipment.name}`);
      }
    }
    
    return drops;
  }
  
  /**
   * Spawn visual loot drops in the world
   */
  _spawnDrops(drops, position) {
    const offset = 0.5;
    const angleStep = (Math.PI * 2) / Math.max(drops.length, 1);
    
    drops.forEach((drop, i) => {
      const itemDef = Object.values(ITEM_TYPES).find(t => t.id === drop.itemId);
      if (!itemDef) return;
      
      // Offset position in a circle
      const angle = angleStep * i + Math.random() * 0.3;
      const dist = offset + Math.random() * 0.3;
      const dropPos = position.clone();
      dropPos.x += Math.cos(angle) * dist;
      dropPos.z += Math.sin(angle) * dist;
      dropPos.y = 0.3; // Slightly above ground
      
      this._createDropVisual(itemDef, drop.quantity, dropPos);
    });
  }
  
  /**
   * Create a visual drop in the world
   */
  _createDropVisual(itemDef, quantity, position) {
    const drop = {
      id: `drop-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      itemDef,
      quantity,
      position: position.clone(),
      collected: false,
      mesh: null,
      light: null,
      spawnTime: Date.now(),
    };
    
    // Create mesh based on item type
    let geo, mat;
    
    if (itemDef.id === 'gold') {
      // Gold: small coin stack
      geo = new THREE.CylinderGeometry(0.12, 0.14, 0.08, 12);
      mat = new THREE.MeshStandardMaterial({
        color: itemDef.color,
        emissive: itemDef.emissive,
        emissiveIntensity: 0.8,
        metalness: 0.9,
        roughness: 0.2,
      });
    } else if (itemDef.type === 'consumable') {
      // Potions: small bottle shape
      geo = new THREE.CapsuleGeometry(0.08, 0.12, 4, 8);
      mat = new THREE.MeshStandardMaterial({
        color: itemDef.color,
        emissive: itemDef.emissive,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.85,
      });
    } else {
      // Materials: crystal/ore shape
      geo = new THREE.OctahedronGeometry(0.12, 0);
      mat = new THREE.MeshStandardMaterial({
        color: itemDef.color,
        emissive: itemDef.emissive,
        emissiveIntensity: 0.5,
        roughness: 0.4,
      });
    }
    
    drop.mesh = new THREE.Mesh(geo, mat);
    drop.mesh.position.copy(position);
    drop.mesh.castShadow = true;
    this.scene.add(drop.mesh);
    
    // Point light for glow
    drop.light = new THREE.PointLight(itemDef.color, 0.6, 3);
    drop.light.position.copy(position);
    this.scene.add(drop.light);
    
    // Store for updates
    this.drops.push(drop);
    
    // Animate
    this._animateDrop(drop);
  }
  
  /**
   * Animate a drop (float + rotate + pulse)
   */
  _animateDrop(drop) {
    const baseY = drop.position.y;
    const animate = () => {
      if (drop.collected) return;
      requestAnimationFrame(animate);
      
      // Float up and down
      const t = Date.now() * 0.003;
      drop.mesh.position.y = baseY + Math.sin(t) * 0.08;
      
      // Rotate
      drop.mesh.rotation.y += 0.025;
      
      // Pulse light
      drop.light.position.copy(drop.mesh.position);
      drop.light.intensity = 0.4 + Math.sin(t * 1.5) * 0.25;
    };
    animate();
  }
  
  /**
   * Update - check for pickups
   * @param {THREE.Vector3} playerPos - Player world position
   */
  update(playerPos) {
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const drop = this.drops[i];
      if (drop.collected) continue;
      
      const dist = playerPos.distanceTo(drop.mesh.position);
      if (dist < this.pickupRadius) {
        this._collectDrop(drop, i);
      }
    }
    
    // Process notification queue
    this._processNotificationQueue();
  }
  
  /**
   * Collect a drop
   */
  _collectDrop(drop, index) {
    drop.collected = true;
    
    // Add to inventory
    if (drop.itemDef.id === 'gold') {
      this.inventory.gold += drop.quantity;
    } else {
      if (!this.inventory.items[drop.itemDef.id]) {
        this.inventory.items[drop.itemDef.id] = 0;
      }
      this.inventory.items[drop.itemDef.id] += drop.quantity;
    }
    
    // Save inventory
    this._saveInventory();
    
    // Play pickup sound
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('itemPickup', { volume: 0.5 });
    }
    
    // Queue notification
    const qtyText = drop.quantity > 1 ? ` x${drop.quantity}` : '';
    this._queueNotification(`${drop.itemDef.name}${qtyText}`, drop.itemDef.color);
    
    // Spawn floating text at pickup location
    if (this.gm?.floatingText) {
      this.gm.floatingText.spawn(
        `+${drop.quantity} ${drop.itemDef.name}`,
        drop.mesh.position.clone().add(new THREE.Vector3(0, 0.5, 0)),
        { color: '#' + drop.itemDef.color.toString(16).padStart(6, '0'), duration: 1.5 }
      );
    }
    
    // Remove visual
    this.scene.remove(drop.mesh);
    this.scene.remove(drop.light);
    if (drop.mesh.geometry) drop.mesh.geometry.dispose();
    if (drop.mesh.material) drop.mesh.material.dispose();
    
    // Remove from array
    this.drops.splice(index, 1);
  }
  
  /**
   * Queue a notification
   */
  _queueNotification(text, color) {
    this.notificationQueue.push({ text, color });
  }
  
  /**
   * Process notification queue
   */
  _processNotificationQueue() {
    if (this.notificationActive || this.notificationQueue.length === 0) return;
    
    const notif = this.notificationQueue.shift();
    this._showNotification(notif.text, notif.color);
  }
  
  /**
   * Show notification
   */
  _showNotification(text, color = 0xffffff) {
    const el = document.getElementById('loot-notification');
    if (!el) return;
    
    this.notificationActive = true;
    
    const hexColor = '#' + color.toString(16).padStart(6, '0');
    el.style.borderColor = hexColor;
    el.style.textShadow = `0 0 8px ${hexColor}`;
    el.innerHTML = `<span style="color: ${hexColor}">+</span> ${text}`;
    el.style.opacity = '1';
    
    setTimeout(() => {
      el.style.opacity = '0';
      setTimeout(() => {
        this.notificationActive = false;
      }, 300);
    }, 1200);
  }
  
  /**
   * Use a consumable from inventory
   * @param {string} itemId - Item to use
   * @returns {boolean} - Success
   */
  useItem(itemId) {
    const count = this.inventory.items[itemId] || 0;
    if (count <= 0) return false;
    
    const itemDef = Object.values(ITEM_TYPES).find(t => t.id === itemId);
    if (!itemDef || itemDef.type !== 'consumable') return false;
    
    // Apply effect
    if (itemDef.effect) {
      if (itemDef.effect.healAmount && this.gm) {
        const healed = Math.min(itemDef.effect.healAmount, this.gm.maxHealth - this.gm.health);
        this.gm.health = Math.min(this.gm.maxHealth, this.gm.health + itemDef.effect.healAmount);
        
        // Visual feedback
        if (this.gm.floatingText && this.gm.player) {
          this.gm.floatingText.spawn(
            `+${healed} HP`,
            this.gm.player.mesh.position.clone().add(new THREE.Vector3(0, 2, 0)),
            { color: '#ff4444', duration: 1.5 }
          );
        }
      }
      
      if (itemDef.effect.staminaAmount && this.gm) {
        this.gm.stamina = Math.min(this.gm.maxStamina, this.gm.stamina + itemDef.effect.staminaAmount);
        
        // Visual feedback
        if (this.gm.floatingText && this.gm.player) {
          this.gm.floatingText.spawn(
            `+${itemDef.effect.staminaAmount} Stamina`,
            this.gm.player.mesh.position.clone().add(new THREE.Vector3(0, 2, 0)),
            { color: '#44ff44', duration: 1.5 }
          );
        }
      }
    }
    
    // Consume item
    this.inventory.items[itemId]--;
    if (this.inventory.items[itemId] <= 0) {
      delete this.inventory.items[itemId];
    }
    
    // Play use sound
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('itemPickup', { volume: 0.4 });
    }
    
    this._saveInventory();
    return true;
  }
  
  /**
   * Get inventory count for an item
   */
  getItemCount(itemId) {
    if (itemId === 'gold') return this.inventory.gold;
    return this.inventory.items[itemId] || 0;
  }
  
  /**
   * Get all inventory data
   */
  getInventory() {
    return { ...this.inventory };
  }
  
  /**
   * Get gold count
   */
  getGold() {
    return this.inventory.gold;
  }
  
  /**
   * Spend gold (for trading)
   * @returns {boolean} - Success
   */
  spendGold(amount) {
    if (this.inventory.gold < amount) return false;
    this.inventory.gold -= amount;
    this._saveInventory();
    return true;
  }
  
  /**
   * Add gold (from selling, quests, etc.)
   */
  addGold(amount) {
    this.inventory.gold += amount;
    this._saveInventory();
  }
  
  /**
   * Clear all drops (on respawn)
   */
  clearDrops() {
    for (const drop of this.drops) {
      if (drop.mesh) {
        this.scene.remove(drop.mesh);
        drop.mesh.geometry?.dispose();
        drop.mesh.material?.dispose();
      }
      if (drop.light) {
        this.scene.remove(drop.light);
      }
    }
    this.drops = [];
  }
  
  /**
   * Spawn a single loot drop at a position (for chest drops)
   * @param {Object} dropData - { itemId, quantity }
   * @param {THREE.Vector3} position - World position
   */
  spawnLootDrop(dropData, position) {
    const itemDef = Object.values(ITEM_TYPES).find(t => t.id === dropData.itemId);
    if (!itemDef) {
      console.warn(`[LootManager] Unknown item: ${dropData.itemId}`);
      return;
    }
    
    this._createDropVisual(itemDef, dropData.quantity, position.clone());
  }
  
  /**
   * Show notification (public method for external use)
   * @param {string} text - Notification text
   * @param {string} tier - Chest tier (wooden/silver/gold) for styling
   */
  showNotification(text, tier = 'wooden') {
    const colors = {
      wooden: 0x8B4513,
      silver: 0xC0C0C0,
      gold: 0xFFD700,
    };
    const color = colors[tier] || 0xffffff;
    this._showNotification(text, color);
  }
  
  /**
   * Get reference to gameManager (for ChestManager access)
   */
  get gameManager() {
    return this.gm;
  }
}
