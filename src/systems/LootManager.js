import * as THREE from 'three';
import { generateBossLoot, BOSS_SOULS } from '../data/BossData.js';

// ========== BOSS ITEM DEFINITIONS ==========
// Special boss-only items (souls, trophies, legendary drops)
export const BOSS_ITEM_TYPES = {
  // Boss Souls (tradeable with NPCs for unique items)
  GOLEM_SOUL: {
    id: 'golem_soul',
    name: "Gormund's Soul",
    type: 'boss_soul',
    description: 'The crystalline essence of the Ancient Golem. Radiates ancient power.',
    color: 0x4488ff,
    emissive: 0x2266cc,
    stackable: false,
    rarity: 'legendary',
    bossId: 'ancient_golem',
  },
  WRAITH_SOUL: {
    id: 'wraith_soul',
    name: "Vexaris's Soul",
    type: 'boss_soul',
    description: 'Dark energy swirls within this ephemeral essence.',
    color: 0xaa22ff,
    emissive: 0x6611aa,
    stackable: false,
    rarity: 'legendary',
    bossId: 'shadow_wraith',
  },
  GUARDIAN_SOUL: {
    id: 'guardian_soul',
    name: "Thornwood's Soul",
    type: 'boss_soul',
    description: 'Pulsing with the life force of the ancient forest.',
    color: 0x88ff44,
    emissive: 0x44aa22,
    stackable: false,
    rarity: 'legendary',
    bossId: 'forest_guardian',
  },
  KNIGHT_SOUL: {
    id: 'knight_soul',
    name: "Sir Aldric's Soul",
    type: 'boss_soul',
    description: 'A tortured soul seeking redemption... or vengeance.',
    color: 0xff2244,
    emissive: 0xaa1133,
    stackable: false,
    rarity: 'legendary',
    bossId: 'corrupted_knight',
  },
  // Boss Materials
  ANCIENT_CORE: {
    id: 'ancient_core',
    name: 'Ancient Core',
    type: 'material',
    description: 'The magical heart of a golem. Extremely rare crafting material.',
    color: 0x66aaff,
    emissive: 0x4488cc,
    stackable: true,
    maxStack: 5,
    rarity: 'epic',
  },
  SHADOW_ESSENCE: {
    id: 'shadow_essence',
    name: 'Shadow Essence',
    type: 'material',
    description: 'Concentrated darkness from the void. Use with caution.',
    color: 0x6622aa,
    emissive: 0x441188,
    stackable: true,
    maxStack: 10,
    rarity: 'epic',
  },
  HEARTWOOD: {
    id: 'heartwood',
    name: 'Ancient Heartwood',
    type: 'material',
    description: 'Living wood from the heart of a treant guardian.',
    color: 0x66aa44,
    emissive: 0x448822,
    stackable: true,
    maxStack: 5,
    rarity: 'epic',
  },
  CORRUPTED_SIGIL: {
    id: 'corrupted_sigil',
    name: 'Corrupted Sigil',
    type: 'material',
    description: 'A holy symbol twisted by dark corruption.',
    color: 0x880044,
    emissive: 0x550033,
    stackable: true,
    maxStack: 5,
    rarity: 'epic',
  },
  // Boss Trophies (proof of first kill)
  GOLEM_TROPHY: {
    id: 'golem_trophy',
    name: "Golem Slayer's Trophy",
    type: 'trophy',
    description: 'Proof that you have defeated the Ancient Golem.',
    color: 0xffd700,
    emissive: 0xaa8800,
    stackable: false,
    rarity: 'legendary',
  },
  WRAITH_TROPHY: {
    id: 'wraith_trophy',
    name: "Wraith Hunter's Trophy",
    type: 'trophy',
    description: 'Proof that you have defeated the Shadow Wraith.',
    color: 0xffd700,
    emissive: 0xaa8800,
    stackable: false,
    rarity: 'legendary',
  },
  GUARDIAN_TROPHY: {
    id: 'guardian_trophy',
    name: "Grove Protector's Trophy",
    type: 'trophy',
    description: 'Proof that you have defeated the Forest Guardian.',
    color: 0xffd700,
    emissive: 0xaa8800,
    stackable: false,
    rarity: 'legendary',
  },
  KNIGHT_TROPHY: {
    id: 'knight_trophy',
    name: "Knight Slayer's Trophy",
    type: 'trophy',
    description: 'Proof that you have defeated the Corrupted Knight.',
    color: 0xffd700,
    emissive: 0xaa8800,
    stackable: false,
    rarity: 'legendary',
  },
};

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
  MANA_POTION: {
    id: 'mana-potion',
    name: 'Mana Potion',
    type: 'consumable',
    description: 'Restores 50 Mana when used (Phase 20)',
    effect: { manaAmount: 50 },
    color: 0x4488ff,
    emissive: 0x2255cc,
    stackable: true,
    maxStack: 10,
    hotkey: '3',
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
    { itemId: 'mana-potion', chance: 0.15, minQty: 1, maxQty: 1 },
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
    { itemId: 'mana-potion', chance: 0.3, minQty: 1, maxQty: 2 },
    { itemId: 'iron-ore', chance: 0.4, minQty: 2, maxQty: 4 },
    { itemId: 'dark-shard', chance: 0.3, minQty: 1, maxQty: 3 },
    { itemId: 'spirit-essence', chance: 0.2, minQty: 1, maxQty: 1 },
  ],
  // Boss drops - guaranteed good stuff
  boss: [
    { itemId: 'gold', chance: 1.0, minQty: 200, maxQty: 400 },
    { itemId: 'health-potion', chance: 1.0, minQty: 3, maxQty: 5 },
    { itemId: 'stamina-potion', chance: 1.0, minQty: 3, maxQty: 5 },
    { itemId: 'mana-potion', chance: 1.0, minQty: 2, maxQty: 4 },
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
    
    // Update boss chests (Phase 21)
    this.updateBossChests(playerPos);
    
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
      
      // Phase 20: Mana potion support
      if (itemDef.effect.manaAmount && this.gm?.manaManager) {
        const restored = this.gm.manaManager.restoreMana(itemDef.effect.manaAmount);
        
        // Visual feedback
        if (this.gm.floatingText && this.gm.player && restored > 0) {
          this.gm.floatingText.spawn(
            `+${restored} Mana`,
            this.gm.player.mesh.position.clone().add(new THREE.Vector3(0, 2, 0)),
            { color: '#4488ff', duration: 1.5 }
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
    if (this.inventory.gold < 0) this.inventory.gold = 0;
    this._saveInventory();
  }
  
  /**
   * Add item to inventory
   * @param {string} itemId - Item identifier
   * @param {number} quantity - Amount to add
   */
  addItem(itemId, quantity = 1) {
    if (!this.inventory.items[itemId]) {
      this.inventory.items[itemId] = 0;
    }
    this.inventory.items[itemId] += quantity;
    this._saveInventory();
    console.log(`[LootManager] Added ${quantity}x ${itemId}`);
  }
  
  /**
   * Remove item from inventory
   * @param {string} itemId - Item identifier
   * @param {number} quantity - Amount to remove
   * @returns {boolean} - Success
   */
  removeItem(itemId, quantity = 1) {
    const current = this.inventory.items[itemId] || 0;
    if (current < quantity) return false;
    
    this.inventory.items[itemId] -= quantity;
    if (this.inventory.items[itemId] <= 0) {
      delete this.inventory.items[itemId];
    }
    this._saveInventory();
    console.log(`[LootManager] Removed ${quantity}x ${itemId}`);
    return true;
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

  // =====================================================
  // BOSS REWARD SYSTEM (Phase 21)
  // =====================================================

  /**
   * Generate and spawn boss loot
   * @param {string} bossId - Boss identifier
   * @param {THREE.Vector3} position - World position for drops
   * @param {boolean} isFirstKill - Whether this is the first time defeating this boss
   * @returns {Object} - Generated loot data
   */
  generateBossLoot(bossId, position, isFirstKill = false) {
    // Get loot from BossData
    const loot = generateBossLoot(bossId, isFirstKill);
    
    if (!loot || !loot.items) {
      console.warn(`[LootManager] No loot defined for boss: ${bossId}`);
      return null;
    }

    console.log(`[LootManager] Generating boss loot for ${bossId}:`, loot);

    // Spawn dramatic boss chest at position
    this.spawnBossChest(position, loot, bossId, isFirstKill);

    // Track boss kill
    this._trackBossKill(bossId, isFirstKill);

    return loot;
  }

  /**
   * Spawn a dramatic boss treasure chest
   */
  spawnBossChest(position, loot, bossId, isFirstKill) {
    // Create boss chest visual (larger, glowing)
    const chestGroup = new THREE.Group();
    chestGroup.position.copy(position);
    chestGroup.position.y = 0.3;

    // Chest base (larger than normal chests)
    const chestMat = new THREE.MeshStandardMaterial({
      color: isFirstKill ? 0xffd700 : 0x8866aa, // Gold for first kill, purple otherwise
      roughness: 0.3,
      metalness: 0.8,
      emissive: isFirstKill ? 0xaa7700 : 0x442266,
      emissiveIntensity: 0.5,
    });

    const baseGeo = new THREE.BoxGeometry(1.5, 0.8, 1.0);
    const base = new THREE.Mesh(baseGeo, chestMat);
    base.position.y = 0.4;
    base.castShadow = true;
    chestGroup.add(base);

    // Chest lid
    const lidGeo = new THREE.BoxGeometry(1.5, 0.3, 1.0);
    const lid = new THREE.Mesh(lidGeo, chestMat.clone());
    lid.position.y = 0.95;
    lid.position.z = -0.35;
    lid.rotation.x = -0.3; // Slightly open
    lid.castShadow = true;
    chestGroup.add(lid);

    // Glowing contents
    const glowMat = new THREE.MeshStandardMaterial({
      color: 0xffdd44,
      emissive: 0xffaa22,
      emissiveIntensity: 3,
      transparent: true,
      opacity: 0.8,
    });

    const glowGeo = new THREE.SphereGeometry(0.4, 16, 12);
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.y = 0.6;
    chestGroup.add(glow);

    // Boss soul orb (if included)
    const soulItem = loot.items.find(item => item.type === 'boss_soul');
    if (soulItem) {
      const soulDef = Object.values(BOSS_ITEM_TYPES).find(t => t.id === soulItem.id);
      if (soulDef) {
        const soulMat = new THREE.MeshStandardMaterial({
          color: soulDef.color,
          emissive: soulDef.emissive,
          emissiveIntensity: 4,
          transparent: true,
          opacity: 0.85,
        });

        const soulGeo = new THREE.IcosahedronGeometry(0.25, 1);
        const soul = new THREE.Mesh(soulGeo, soulMat);
        soul.position.y = 1.3;
        chestGroup.add(soul);
        chestGroup.userData.soul = soul;
      }
    }

    // Chest light
    const light = new THREE.PointLight(0xffdd44, 2, 8);
    light.position.y = 1;
    chestGroup.add(light);

    // Particle burst
    this._createBossLootParticles(chestGroup, isFirstKill);

    this.scene.add(chestGroup);

    // Store chest data
    chestGroup.userData.loot = loot;
    chestGroup.userData.bossId = bossId;
    chestGroup.userData.isFirstKill = isFirstKill;
    chestGroup.userData.collected = false;
    chestGroup.userData.light = light;
    chestGroup.userData.glow = glow;

    // Add to boss chests array
    if (!this.bossChests) this.bossChests = [];
    this.bossChests.push(chestGroup);

    // Show notification
    if (isFirstKill) {
      this._showBossNotification('FIRST VICTORY!', 'boss_first');
      setTimeout(() => {
        this._showBossNotification(`${bossId.toUpperCase()} DEFEATED`, 'boss');
      }, 1500);
    } else {
      this._showBossNotification(`${bossId.toUpperCase()} DEFEATED`, 'boss');
    }

    return chestGroup;
  }

  /**
   * Create particle burst for boss loot
   */
  _createBossLootParticles(chestGroup, isFirstKill) {
    const particleCount = 100;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = [];

    const baseColor = isFirstKill ? new THREE.Color(0xffd700) : new THREE.Color(0xaa66ff);

    for (let i = 0; i < particleCount; i++) {
      // Start at center
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0.5;
      positions[i * 3 + 2] = 0;

      // Random colors
      const variation = 0.7 + Math.random() * 0.3;
      colors[i * 3] = baseColor.r * variation;
      colors[i * 3 + 1] = baseColor.g * variation;
      colors[i * 3 + 2] = baseColor.b * variation;

      // Random velocities (burst outward)
      velocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        Math.random() * 3 + 1,
        (Math.random() - 0.5) * 4
      ));
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.15,
      vertexColors: true,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    chestGroup.add(particles);

    // Animate particles
    let time = 0;
    const animateParticles = () => {
      time += 0.016;
      if (time > 3) {
        chestGroup.remove(particles);
        particleGeo.dispose();
        particleMat.dispose();
        return;
      }

      const posArr = particles.geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3] += velocities[i].x * 0.016;
        posArr[i * 3 + 1] += velocities[i].y * 0.016;
        posArr[i * 3 + 2] += velocities[i].z * 0.016;
        velocities[i].y -= 0.05; // Gravity
      }
      particles.geometry.attributes.position.needsUpdate = true;
      particleMat.opacity = Math.max(0, 1 - time / 2.5);

      requestAnimationFrame(animateParticles);
    };
    animateParticles();
  }

  /**
   * Update boss chests (animate + check pickup)
   */
  updateBossChests(playerPos) {
    if (!this.bossChests) return;

    for (let i = this.bossChests.length - 1; i >= 0; i--) {
      const chest = this.bossChests[i];
      if (chest.userData.collected) continue;

      // Animate
      const time = Date.now() * 0.001;
      
      // Bob chest
      chest.position.y = 0.3 + Math.sin(time * 2) * 0.05;
      
      // Rotate soul
      if (chest.userData.soul) {
        chest.userData.soul.rotation.y += 0.02;
        chest.userData.soul.position.y = 1.3 + Math.sin(time * 3) * 0.1;
      }

      // Pulse light
      if (chest.userData.light) {
        chest.userData.light.intensity = 2 + Math.sin(time * 4) * 0.5;
      }

      // Pulse glow
      if (chest.userData.glow) {
        chest.userData.glow.scale.setScalar(1 + Math.sin(time * 3) * 0.1);
      }

      // Check pickup
      const dist = playerPos.distanceTo(chest.position);
      if (dist < 3) {
        this._collectBossChest(chest, i);
      }
    }
  }

  /**
   * Collect boss chest
   */
  _collectBossChest(chest, index) {
    chest.userData.collected = true;
    const loot = chest.userData.loot;

    // Add all loot to inventory
    loot.items.forEach(item => {
      const itemDef = this._getBossItemDef(item.id) || 
                      Object.values(ITEM_TYPES).find(t => t.id === item.id);
      
      if (itemDef) {
        this.addItem(item.id, item.quantity || 1);
        
        // Show notification for each item
        const qtyText = (item.quantity && item.quantity > 1) ? ` x${item.quantity}` : '';
        const rarityColors = {
          legendary: 0xffd700,
          epic: 0xaa66ff,
          rare: 0x4488ff,
          uncommon: 0x44ff44,
          common: 0xffffff,
        };
        const color = rarityColors[itemDef.rarity] || itemDef.color || 0xffffff;
        this._queueNotification(`${itemDef.name}${qtyText}`, color);
      }
    });

    // Add remnants (XP/currency)
    if (loot.remnants > 0) {
      this.addGold(loot.remnants);
      this._queueNotification(`${loot.remnants} Remnants`, 0xffd700);
    }

    // Play sound
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('levelUp', { volume: 0.8 });
    }

    // Visual effect: items burst out
    this._burstItemsFromChest(chest, loot.items);

    // Remove chest after delay
    setTimeout(() => {
      this.scene.remove(chest);
      chest.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      this.bossChests.splice(index, 1);
    }, 1000);

    this._saveInventory();
    console.log(`[LootManager] Collected boss chest with ${loot.items.length} items`);
  }

  /**
   * Burst items visually from chest
   */
  _burstItemsFromChest(chest, items) {
    const basePos = chest.position.clone();
    items.forEach((item, i) => {
      const itemDef = this._getBossItemDef(item.id) ||
                      Object.values(ITEM_TYPES).find(t => t.id === item.id);
      if (!itemDef) return;

      // Create item visual
      const geo = new THREE.OctahedronGeometry(0.15, 0);
      const mat = new THREE.MeshStandardMaterial({
        color: itemDef.color || 0xffffff,
        emissive: itemDef.emissive || 0x444444,
        emissiveIntensity: 1.5,
      });

      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(basePos);
      mesh.position.y += 0.8;
      this.scene.add(mesh);

      // Animate outward
      const angle = (i / items.length) * Math.PI * 2;
      const velocity = new THREE.Vector3(
        Math.cos(angle) * 2,
        3 + Math.random(),
        Math.sin(angle) * 2
      );

      let time = 0;
      const animate = () => {
        time += 0.016;
        if (time > 1.5) {
          this.scene.remove(mesh);
          geo.dispose();
          mat.dispose();
          return;
        }

        mesh.position.add(velocity.clone().multiplyScalar(0.016));
        velocity.y -= 0.1; // Gravity
        mesh.rotation.x += 0.1;
        mesh.rotation.y += 0.15;
        mat.opacity = Math.max(0, 1 - time);

        requestAnimationFrame(animate);
      };
      animate();
    });
  }

  /**
   * Get boss item definition
   */
  _getBossItemDef(itemId) {
    return Object.values(BOSS_ITEM_TYPES).find(t => t.id === itemId);
  }

  /**
   * Show boss-specific notification (larger, more dramatic)
   */
  _showBossNotification(text, type = 'boss') {
    // Create or get boss notification element
    let el = document.getElementById('boss-notification');
    if (!el) {
      el = document.createElement('div');
      el.id = 'boss-notification';
      el.style.cssText = `
        position: fixed;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, rgba(20, 10, 30, 0.95), rgba(50, 20, 60, 0.95));
        color: #fff;
        padding: 20px 60px;
        border-radius: 8px;
        font-family: 'Georgia', serif;
        font-size: 32px;
        font-weight: bold;
        letter-spacing: 3px;
        text-transform: uppercase;
        opacity: 0;
        transition: opacity 0.5s ease, transform 0.5s ease;
        pointer-events: none;
        z-index: 2000;
        border: 2px solid #ffd700;
        box-shadow: 0 0 40px rgba(255, 215, 0, 0.5), inset 0 0 30px rgba(0, 0, 0, 0.5);
        text-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
      `;
      document.body.appendChild(el);
    }

    // Style based on type
    if (type === 'boss_first') {
      el.style.color = '#ffd700';
      el.style.borderColor = '#ffd700';
      el.style.textShadow = '0 0 30px rgba(255, 215, 0, 1)';
    } else {
      el.style.color = '#ffffff';
      el.style.borderColor = '#aa66ff';
      el.style.textShadow = '0 0 20px rgba(170, 102, 255, 0.8)';
    }

    el.textContent = text;
    el.style.opacity = '1';
    el.style.transform = 'translate(-50%, -50%) scale(1)';

    setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translate(-50%, -50%) scale(0.8)';
    }, 2500);
  }

  /**
   * Track boss kills (for first-kill bonus)
   */
  _trackBossKill(bossId, isFirstKill) {
    if (!this.bossKills) {
      this.bossKills = {};
      this._loadBossKills();
    }

    if (!this.bossKills[bossId]) {
      this.bossKills[bossId] = { count: 0, firstKillAt: null };
    }

    this.bossKills[bossId].count++;
    if (isFirstKill) {
      this.bossKills[bossId].firstKillAt = Date.now();
    }

    this._saveBossKills();
  }

  /**
   * Check if boss has been killed before
   */
  hasKilledBoss(bossId) {
    if (!this.bossKills) {
      this.bossKills = {};
      this._loadBossKills();
    }
    return this.bossKills[bossId]?.count > 0;
  }

  /**
   * Get boss kill count
   */
  getBossKillCount(bossId) {
    if (!this.bossKills) {
      this.bossKills = {};
      this._loadBossKills();
    }
    return this.bossKills[bossId]?.count || 0;
  }

  /**
   * Save boss kills to localStorage
   */
  _saveBossKills() {
    try {
      localStorage.setItem('ashen_boss_kills', JSON.stringify(this.bossKills));
    } catch (e) {
      console.warn('[LootManager] Failed to save boss kills:', e);
    }
  }

  /**
   * Load boss kills from localStorage
   */
  _loadBossKills() {
    try {
      const saved = localStorage.getItem('ashen_boss_kills');
      if (saved) {
        this.bossKills = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('[LootManager] Failed to load boss kills:', e);
    }
  }

  /**
   * Get boss soul exchange options
   */
  getBossSoulExchangeOptions(soulId) {
    return BOSS_SOULS[soulId]?.exchangeOptions || [];
  }

  /**
   * Check if player has a specific boss soul
   */
  hasBossSoul(soulId) {
    return this.getItemCount(soulId) > 0;
  }

  /**
   * Exchange boss soul for item/ability
   */
  exchangeBossSoul(soulId, exchangeId) {
    if (!this.hasBossSoul(soulId)) {
      console.warn(`[LootManager] No ${soulId} to exchange`);
      return false;
    }

    const options = this.getBossSoulExchangeOptions(soulId);
    const exchange = options.find(o => o.id === exchangeId);
    if (!exchange) {
      console.warn(`[LootManager] Invalid exchange option: ${exchangeId}`);
      return false;
    }

    // Remove soul
    this.removeItem(soulId, 1);

    // Grant exchange item
    if (exchange.id === 'remnants') {
      this.addGold(exchange.quantity);
      this._queueNotification(`+${exchange.quantity} Remnants`, 0xffd700);
    } else if (exchange.type === 'weapon') {
      // Add to equipment manager
      if (this.equipmentManager) {
        // Would create weapon from exchange data
        console.log(`[LootManager] Granted weapon: ${exchange.name}`);
      }
      this._queueNotification(`Obtained: ${exchange.name}`, 0xffd700);
    } else if (exchange.type === 'spell') {
      // Add to spell manager
      if (this.gm?.spellManager) {
        // Would unlock spell
        console.log(`[LootManager] Unlocked spell: ${exchange.name}`);
      }
      this._queueNotification(`Learned: ${exchange.name}`, 0x4488ff);
    }

    this._saveInventory();
    return true;
  }
}
