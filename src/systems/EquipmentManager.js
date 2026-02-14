import * as THREE from 'three';

// ========== EQUIPMENT RARITY TIERS ==========
export const RARITY = {
  COMMON: {
    id: 'common',
    name: 'Common',
    color: '#ffffff',
    hexColor: 0xffffff,
    dropWeight: 100,
    statMult: 1.0,
  },
  UNCOMMON: {
    id: 'uncommon',
    name: 'Uncommon',
    color: '#4ade80',
    hexColor: 0x4ade80,
    dropWeight: 40,
    statMult: 1.3,
  },
  RARE: {
    id: 'rare',
    name: 'Rare',
    color: '#60a5fa',
    hexColor: 0x60a5fa,
    dropWeight: 15,
    statMult: 1.7,
  },
  EPIC: {
    id: 'epic',
    name: 'Epic',
    color: '#c084fc',
    hexColor: 0xc084fc,
    dropWeight: 5,
    statMult: 2.2,
  },
};

// ========== EQUIPMENT SLOTS ==========
export const EQUIPMENT_SLOTS = {
  WEAPON: 'weapon',
  ARMOR: 'armor',
  ACCESSORY: 'accessory',
};

// ========== BASE EQUIPMENT DEFINITIONS ==========
export const EQUIPMENT_BASES = {
  // ========== WEAPONS ==========
  rusty_sword: {
    id: 'rusty_sword',
    name: 'Rusty Sword',
    slot: EQUIPMENT_SLOTS.WEAPON,
    baseStats: { damage: 5 },
    description: 'A weathered blade, still serviceable.',
    weaponModel: 'sword',
  },
  iron_sword: {
    id: 'iron_sword',
    name: 'Iron Sword',
    slot: EQUIPMENT_SLOTS.WEAPON,
    baseStats: { damage: 10 },
    description: 'A sturdy iron blade.',
    weaponModel: 'sword',
  },
  soldier_blade: {
    id: 'soldier_blade',
    name: "Soldier's Blade",
    slot: EQUIPMENT_SLOTS.WEAPON,
    baseStats: { damage: 12, attackSpeed: 5 },
    description: 'Standard issue military sword.',
    weaponModel: 'sword',
  },
  knight_sword: {
    id: 'knight_sword',
    name: 'Knight Sword',
    slot: EQUIPMENT_SLOTS.WEAPON,
    baseStats: { damage: 18, critChance: 3 },
    description: 'A finely crafted knightly weapon.',
    weaponModel: 'longsword',
  },
  executioner_blade: {
    id: 'executioner_blade',
    name: 'Executioner Blade',
    slot: EQUIPMENT_SLOTS.WEAPON,
    baseStats: { damage: 25, critDamage: 20 },
    description: 'Heavy blade meant to end lives.',
    weaponModel: 'greatsword',
  },
  shadow_fang: {
    id: 'shadow_fang',
    name: 'Shadow Fang',
    slot: EQUIPMENT_SLOTS.WEAPON,
    baseStats: { damage: 15, critChance: 8, attackSpeed: 10 },
    description: 'A dagger forged in darkness.',
    weaponModel: 'dagger',
  },
  
  // ========== ARMOR ==========
  tattered_robe: {
    id: 'tattered_robe',
    name: 'Tattered Robe',
    slot: EQUIPMENT_SLOTS.ARMOR,
    baseStats: { defense: 3 },
    description: 'Worn cloth offering minimal protection.',
  },
  leather_armor: {
    id: 'leather_armor',
    name: 'Leather Armor',
    slot: EQUIPMENT_SLOTS.ARMOR,
    baseStats: { defense: 8, stamina: 10 },
    description: 'Light armor for mobility.',
  },
  chainmail: {
    id: 'chainmail',
    name: 'Chainmail',
    slot: EQUIPMENT_SLOTS.ARMOR,
    baseStats: { defense: 15, health: 10 },
    description: 'Interlocking metal rings.',
  },
  knight_armor: {
    id: 'knight_armor',
    name: 'Knight Armor',
    slot: EQUIPMENT_SLOTS.ARMOR,
    baseStats: { defense: 22, health: 25 },
    description: 'Heavy plate worn by knights.',
  },
  dark_plate: {
    id: 'dark_plate',
    name: 'Dark Plate',
    slot: EQUIPMENT_SLOTS.ARMOR,
    baseStats: { defense: 30, health: 40, stamina: -10 },
    description: 'Corrupted armor of immense protection.',
  },
  
  // ========== ACCESSORIES ==========
  copper_ring: {
    id: 'copper_ring',
    name: 'Copper Ring',
    slot: EQUIPMENT_SLOTS.ACCESSORY,
    baseStats: { health: 10 },
    description: 'A simple ring.',
  },
  warriors_band: {
    id: 'warriors_band',
    name: "Warrior's Band",
    slot: EQUIPMENT_SLOTS.ACCESSORY,
    baseStats: { damage: 5, stamina: 15 },
    description: 'Worn by seasoned fighters.',
  },
  vitality_amulet: {
    id: 'vitality_amulet',
    name: 'Vitality Amulet',
    slot: EQUIPMENT_SLOTS.ACCESSORY,
    baseStats: { health: 30, healthRegen: 1 },
    description: 'Pulses with life energy.',
  },
  crit_pendant: {
    id: 'crit_pendant',
    name: 'Critical Pendant',
    slot: EQUIPMENT_SLOTS.ACCESSORY,
    baseStats: { critChance: 10, critDamage: 25 },
    description: 'Sharpens your killing instinct.',
  },
  endurance_charm: {
    id: 'endurance_charm',
    name: 'Endurance Charm',
    slot: EQUIPMENT_SLOTS.ACCESSORY,
    baseStats: { stamina: 30, staminaRegen: 10 },
    description: 'Never tire, never falter.',
  },
};

// ========== EQUIPMENT DROP TABLES (by enemy type) ==========
export const EQUIPMENT_DROP_TABLES = {
  hollow_soldier: [
    { equipId: 'rusty_sword', weight: 30 },
    { equipId: 'tattered_robe', weight: 30 },
    { equipId: 'copper_ring', weight: 20 },
  ],
  berserker: [
    { equipId: 'iron_sword', weight: 25 },
    { equipId: 'soldier_blade', weight: 15 },
    { equipId: 'leather_armor', weight: 25 },
    { equipId: 'warriors_band', weight: 15 },
  ],
  sentinel: [
    { equipId: 'soldier_blade', weight: 20 },
    { equipId: 'knight_sword', weight: 10 },
    { equipId: 'chainmail', weight: 25 },
    { equipId: 'warriors_band', weight: 20 },
    { equipId: 'vitality_amulet', weight: 10 },
  ],
  revenant: [
    { equipId: 'shadow_fang', weight: 15 },
    { equipId: 'knight_sword', weight: 15 },
    { equipId: 'knight_armor', weight: 15 },
    { equipId: 'crit_pendant', weight: 20 },
  ],
  ranged: [
    { equipId: 'leather_armor', weight: 30 },
    { equipId: 'crit_pendant', weight: 25 },
    { equipId: 'endurance_charm', weight: 20 },
  ],
  elite: [
    { equipId: 'knight_sword', weight: 20 },
    { equipId: 'executioner_blade', weight: 15 },
    { equipId: 'knight_armor', weight: 20 },
    { equipId: 'dark_plate', weight: 10 },
    { equipId: 'vitality_amulet', weight: 15 },
    { equipId: 'crit_pendant', weight: 15 },
  ],
  boss: [
    { equipId: 'executioner_blade', weight: 25 },
    { equipId: 'shadow_fang', weight: 20 },
    { equipId: 'dark_plate', weight: 25 },
    { equipId: 'crit_pendant', weight: 15 },
    { equipId: 'endurance_charm', weight: 15 },
  ],
};

// Equipment drop chance by enemy type
export const EQUIPMENT_DROP_CHANCE = {
  hollow_soldier: 0.08,
  berserker: 0.12,
  sentinel: 0.15,
  revenant: 0.18,
  ranged: 0.10,
  elite: 0.30,
  boss: 0.85,
};

export class EquipmentManager {
  constructor(scene, gameManager, lootManager) {
    this.scene = scene;
    this.gameManager = gameManager;
    this.lootManager = lootManager;
    
    // Currently equipped items
    this.equipped = {
      [EQUIPMENT_SLOTS.WEAPON]: null,
      [EQUIPMENT_SLOTS.ARMOR]: null,
      [EQUIPMENT_SLOTS.ACCESSORY]: null,
    };
    
    // Equipment inventory (unequipped)
    this.inventory = [];
    
    // UI elements
    this.uiContainer = null;
    this.isUIVisible = false;
    
    // Equipment visual (weapon model reference)
    this.weaponMesh = null;
    
    this.loadEquipment();
    this.createUI();
    
    console.log('[EquipmentManager] Initialized');
  }
  
  // ========== EQUIPMENT GENERATION ==========
  
  /**
   * Generate a random equipment piece from enemy death
   */
  generateEquipmentDrop(enemyType) {
    // Check drop chance
    const dropChance = EQUIPMENT_DROP_CHANCE[enemyType] || 0.05;
    if (Math.random() > dropChance) {
      return null;
    }
    
    // Get loot table for this enemy
    const dropTable = EQUIPMENT_DROP_TABLES[enemyType] || EQUIPMENT_DROP_TABLES.hollow_soldier;
    
    // Pick equipment base
    const totalWeight = dropTable.reduce((sum, e) => sum + e.weight, 0);
    let roll = Math.random() * totalWeight;
    let selectedBase = null;
    
    for (const entry of dropTable) {
      roll -= entry.weight;
      if (roll <= 0) {
        selectedBase = EQUIPMENT_BASES[entry.equipId];
        break;
      }
    }
    
    if (!selectedBase) {
      selectedBase = EQUIPMENT_BASES.rusty_sword;
    }
    
    // Determine rarity (weighted random)
    const rarity = this.rollRarity(enemyType);
    
    // Generate the equipment instance
    return this.createEquipmentInstance(selectedBase, rarity);
  }
  
  /**
   * Roll for rarity tier
   */
  rollRarity(enemyType) {
    // Elite/boss have better chances
    let rarityBonus = 0;
    if (enemyType === 'elite') rarityBonus = 20;
    if (enemyType === 'boss') rarityBonus = 50;
    
    const roll = Math.random() * 100 + rarityBonus;
    
    if (roll >= 160) return RARITY.EPIC;
    if (roll >= 130) return RARITY.RARE;
    if (roll >= 100) return RARITY.UNCOMMON;
    return RARITY.COMMON;
  }
  
  /**
   * Create equipment instance with calculated stats
   */
  createEquipmentInstance(base, rarity) {
    const instance = {
      id: `${base.id}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      baseId: base.id,
      name: this.generateEquipmentName(base, rarity),
      slot: base.slot,
      rarity: rarity,
      description: base.description,
      weaponModel: base.weaponModel || null,
      stats: {},
    };
    
    // Calculate final stats with rarity multiplier
    for (const [stat, value] of Object.entries(base.baseStats)) {
      instance.stats[stat] = Math.round(value * rarity.statMult);
    }
    
    return instance;
  }
  
  /**
   * Generate equipment name with rarity prefix
   */
  generateEquipmentName(base, rarity) {
    const prefixes = {
      common: ['', 'Old', 'Worn'],
      uncommon: ['Fine', 'Quality', 'Sturdy'],
      rare: ['Superior', 'Masterwork', 'Enchanted'],
      epic: ['Legendary', 'Mythic', 'Divine'],
    };
    
    const prefix = prefixes[rarity.id][Math.floor(Math.random() * prefixes[rarity.id].length)];
    return prefix ? `${prefix} ${base.name}` : base.name;
  }
  
  // ========== EQUIPMENT MANAGEMENT ==========
  
  /**
   * Add equipment to inventory
   */
  addToInventory(equipment) {
    this.inventory.push(equipment);
    this.saveEquipment();
    this.showEquipmentPickup(equipment);
    console.log(`[EquipmentManager] Added to inventory: ${equipment.name}`);
  }
  
  /**
   * Equip an item from inventory
   */
  equip(equipmentId) {
    const index = this.inventory.findIndex(e => e.id === equipmentId);
    if (index === -1) {
      console.warn('[EquipmentManager] Equipment not found in inventory');
      return false;
    }
    
    const equipment = this.inventory[index];
    const slot = equipment.slot;
    
    // Unequip current item in slot (if any)
    if (this.equipped[slot]) {
      this.inventory.push(this.equipped[slot]);
    }
    
    // Remove from inventory and equip
    this.inventory.splice(index, 1);
    this.equipped[slot] = equipment;
    
    // Apply stat changes
    this.applyEquipmentStats();
    
    // Update weapon visual if weapon changed
    if (slot === EQUIPMENT_SLOTS.WEAPON) {
      this.updateWeaponVisual();
    }
    
    this.saveEquipment();
    this.updateUI();
    
    // Play equip sound
    if (this.gameManager.audioManager) {
      this.gameManager.audioManager.play('itemPickup', { volume: 0.6 });
    }
    
    console.log(`[EquipmentManager] Equipped: ${equipment.name}`);
    return true;
  }
  
  /**
   * Unequip item from slot
   */
  unequip(slot) {
    if (!this.equipped[slot]) return false;
    
    const equipment = this.equipped[slot];
    this.inventory.push(equipment);
    this.equipped[slot] = null;
    
    this.applyEquipmentStats();
    
    if (slot === EQUIPMENT_SLOTS.WEAPON) {
      this.updateWeaponVisual();
    }
    
    this.saveEquipment();
    this.updateUI();
    
    console.log(`[EquipmentManager] Unequipped: ${equipment.name}`);
    return true;
  }
  
  /**
   * Drop (delete) equipment from inventory
   */
  dropEquipment(equipmentId) {
    const index = this.inventory.findIndex(e => e.id === equipmentId);
    if (index === -1) return false;
    
    const equipment = this.inventory.splice(index, 1)[0];
    this.saveEquipment();
    this.updateUI();
    
    console.log(`[EquipmentManager] Dropped: ${equipment.name}`);
    return true;
  }
  
  // ========== STATS ==========
  
  /**
   * Calculate total equipment bonuses
   */
  getEquipmentBonuses() {
    const bonuses = {
      damage: 0,
      defense: 0,
      health: 0,
      stamina: 0,
      critChance: 0,
      critDamage: 0,
      attackSpeed: 0,
      healthRegen: 0,
      staminaRegen: 0,
    };
    
    for (const equipment of Object.values(this.equipped)) {
      if (!equipment) continue;
      
      for (const [stat, value] of Object.entries(equipment.stats)) {
        if (bonuses.hasOwnProperty(stat)) {
          bonuses[stat] += value;
        }
      }
    }
    
    return bonuses;
  }
  
  /**
   * Apply equipment stats to game manager
   */
  applyEquipmentStats() {
    if (!this.gameManager) return;
    
    const bonuses = this.getEquipmentBonuses();
    
    // Store equipment bonuses on gameManager for use in combat calculations
    this.gameManager.equipmentBonuses = bonuses;
    
    // Update max health/stamina
    this.gameManager.applyStatBonuses();
    
    console.log('[EquipmentManager] Applied equipment bonuses:', bonuses);
  }
  
  // ========== WEAPON VISUAL ==========
  
  /**
   * Update the player's weapon visual based on equipped weapon
   */
  updateWeaponVisual() {
    const weapon = this.equipped[EQUIPMENT_SLOTS.WEAPON];
    
    if (!this.gameManager.playerMesh) return;
    
    // Remove existing weapon mesh
    if (this.weaponMesh) {
      this.gameManager.playerMesh.remove(this.weaponMesh);
      this.weaponMesh.geometry?.dispose();
      this.weaponMesh.material?.dispose();
      this.weaponMesh = null;
    }
    
    if (!weapon) return;
    
    // Create weapon mesh based on type
    const weaponGeometry = this.createWeaponGeometry(weapon.weaponModel || 'sword');
    const weaponMaterial = new THREE.MeshStandardMaterial({
      color: weapon.rarity.hexColor,
      metalness: 0.8,
      roughness: 0.3,
      emissive: weapon.rarity.hexColor,
      emissiveIntensity: 0.1,
    });
    
    this.weaponMesh = new THREE.Mesh(weaponGeometry, weaponMaterial);
    this.weaponMesh.position.set(0.5, 0.2, 0.3);
    this.weaponMesh.rotation.set(0, 0, -Math.PI / 6);
    this.weaponMesh.castShadow = true;
    
    this.gameManager.playerMesh.add(this.weaponMesh);
  }
  
  createWeaponGeometry(weaponModel) {
    switch (weaponModel) {
      case 'dagger':
        return new THREE.BoxGeometry(0.08, 0.4, 0.03);
      case 'longsword':
        return new THREE.BoxGeometry(0.1, 1.0, 0.04);
      case 'greatsword':
        return new THREE.BoxGeometry(0.15, 1.4, 0.05);
      case 'sword':
      default:
        return new THREE.BoxGeometry(0.08, 0.7, 0.03);
    }
  }
  
  // ========== UI ==========
  
  createUI() {
    // Main container
    this.uiContainer = document.createElement('div');
    this.uiContainer.id = 'equipment-ui';
    this.uiContainer.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 700px;
      max-height: 80vh;
      background: linear-gradient(135deg, rgba(20, 20, 30, 0.95), rgba(10, 10, 15, 0.98));
      border: 2px solid rgba(255, 200, 100, 0.3);
      border-radius: 8px;
      padding: 20px;
      color: #ddd;
      font-family: 'Cinzel', 'Times New Roman', serif;
      display: none;
      z-index: 2000;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.8), inset 0 0 60px rgba(0, 0, 0, 0.3);
      overflow-y: auto;
    `;
    
    document.body.appendChild(this.uiContainer);
  }
  
  toggleUI() {
    this.isUIVisible = !this.isUIVisible;
    this.uiContainer.style.display = this.isUIVisible ? 'block' : 'none';
    
    if (this.isUIVisible) {
      this.updateUI();
    }
  }
  
  updateUI() {
    if (!this.uiContainer) return;
    
    const bonuses = this.getEquipmentBonuses();
    
    let html = `
      <h2 style="margin: 0 0 20px 0; text-align: center; color: #ffc864; text-shadow: 0 0 10px rgba(255, 200, 100, 0.5);">
        ⚔️ Equipment
      </h2>
      
      <div style="display: flex; gap: 20px;">
        <!-- Equipped slots -->
        <div style="flex: 1;">
          <h3 style="color: #aaa; margin-bottom: 10px; border-bottom: 1px solid rgba(255,200,100,0.2); padding-bottom: 5px;">Equipped</h3>
          ${this.renderEquippedSlot(EQUIPMENT_SLOTS.WEAPON, '⚔️ Weapon')}
          ${this.renderEquippedSlot(EQUIPMENT_SLOTS.ARMOR, '🛡️ Armor')}
          ${this.renderEquippedSlot(EQUIPMENT_SLOTS.ACCESSORY, '💍 Accessory')}
          
          <div style="margin-top: 20px; padding: 10px; background: rgba(0,0,0,0.3); border-radius: 4px;">
            <h4 style="color: #888; margin: 0 0 8px 0;">Total Bonuses</h4>
            <div style="font-size: 12px; color: #8f8;">
              ${bonuses.damage > 0 ? `+${bonuses.damage} Damage<br>` : ''}
              ${bonuses.defense > 0 ? `+${bonuses.defense} Defense<br>` : ''}
              ${bonuses.health !== 0 ? `${bonuses.health > 0 ? '+' : ''}${bonuses.health} Health<br>` : ''}
              ${bonuses.stamina !== 0 ? `${bonuses.stamina > 0 ? '+' : ''}${bonuses.stamina} Stamina<br>` : ''}
              ${bonuses.critChance > 0 ? `+${bonuses.critChance}% Crit Chance<br>` : ''}
              ${bonuses.critDamage > 0 ? `+${bonuses.critDamage}% Crit Damage<br>` : ''}
              ${bonuses.attackSpeed > 0 ? `+${bonuses.attackSpeed}% Attack Speed<br>` : ''}
              ${bonuses.healthRegen > 0 ? `+${bonuses.healthRegen} HP/s<br>` : ''}
              ${bonuses.staminaRegen > 0 ? `+${bonuses.staminaRegen}% Stamina Regen<br>` : ''}
            </div>
          </div>
        </div>
        
        <!-- Inventory -->
        <div style="flex: 1.5;">
          <h3 style="color: #aaa; margin-bottom: 10px; border-bottom: 1px solid rgba(255,200,100,0.2); padding-bottom: 5px;">Inventory (${this.inventory.length})</h3>
          <div style="max-height: 400px; overflow-y: auto;">
            ${this.inventory.length === 0 ? '<p style="color: #666;">No equipment in inventory</p>' : ''}
            ${this.inventory.map(e => this.renderInventoryItem(e)).join('')}
          </div>
        </div>
      </div>
      
      <p style="text-align: center; color: #666; margin-top: 15px; font-size: 12px;">Press I to close</p>
    `;
    
    this.uiContainer.innerHTML = html;
    
    // Attach event listeners
    this.attachUIListeners();
  }
  
  renderEquippedSlot(slot, label) {
    const item = this.equipped[slot];
    
    if (!item) {
      return `
        <div style="padding: 10px; margin-bottom: 8px; background: rgba(0,0,0,0.3); border: 1px dashed rgba(255,255,255,0.1); border-radius: 4px;">
          <span style="color: #555;">${label}: Empty</span>
        </div>
      `;
    }
    
    return `
      <div style="padding: 10px; margin-bottom: 8px; background: rgba(0,0,0,0.4); border: 1px solid ${item.rarity.color}40; border-radius: 4px;">
        <div style="color: ${item.rarity.color}; font-weight: bold;">${label}</div>
        <div style="color: ${item.rarity.color};">${item.name}</div>
        <div style="font-size: 11px; color: #888; margin-top: 4px;">
          ${Object.entries(item.stats).map(([s, v]) => `${v > 0 ? '+' : ''}${v} ${this.formatStatName(s)}`).join(' | ')}
        </div>
        <button class="equip-unequip-btn" data-slot="${slot}" style="
          margin-top: 6px;
          padding: 4px 10px;
          background: rgba(180, 80, 80, 0.4);
          border: 1px solid rgba(255, 100, 100, 0.3);
          color: #f88;
          border-radius: 3px;
          cursor: pointer;
          font-size: 11px;
        ">Unequip</button>
      </div>
    `;
  }
  
  renderInventoryItem(item) {
    return `
      <div style="padding: 10px; margin-bottom: 6px; background: rgba(0,0,0,0.3); border: 1px solid ${item.rarity.color}30; border-radius: 4px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <span style="color: ${item.rarity.color};">${item.name}</span>
          <span style="color: #666; font-size: 11px;">${item.slot}</span>
        </div>
        <div style="font-size: 11px; color: #888; margin: 4px 0;">
          ${Object.entries(item.stats).map(([s, v]) => `${v > 0 ? '+' : ''}${v} ${this.formatStatName(s)}`).join(' | ')}
        </div>
        <div style="display: flex; gap: 6px;">
          <button class="equip-item-btn" data-id="${item.id}" style="
            padding: 4px 12px;
            background: rgba(80, 180, 80, 0.4);
            border: 1px solid rgba(100, 255, 100, 0.3);
            color: #8f8;
            border-radius: 3px;
            cursor: pointer;
            font-size: 11px;
          ">Equip</button>
          <button class="drop-item-btn" data-id="${item.id}" style="
            padding: 4px 8px;
            background: rgba(80, 80, 80, 0.4);
            border: 1px solid rgba(100, 100, 100, 0.3);
            color: #888;
            border-radius: 3px;
            cursor: pointer;
            font-size: 11px;
          ">Drop</button>
        </div>
      </div>
    `;
  }
  
  formatStatName(stat) {
    const names = {
      damage: 'DMG',
      defense: 'DEF',
      health: 'HP',
      stamina: 'STA',
      critChance: 'CRIT%',
      critDamage: 'CRIT DMG',
      attackSpeed: 'ATK SPD',
      healthRegen: 'HP/s',
      staminaRegen: 'STA REG',
    };
    return names[stat] || stat;
  }
  
  attachUIListeners() {
    // Equip buttons
    this.uiContainer.querySelectorAll('.equip-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.equip(btn.dataset.id);
      });
    });
    
    // Unequip buttons
    this.uiContainer.querySelectorAll('.equip-unequip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.unequip(btn.dataset.slot);
      });
    });
    
    // Drop buttons
    this.uiContainer.querySelectorAll('.drop-item-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (confirm('Drop this equipment?')) {
          this.dropEquipment(btn.dataset.id);
        }
      });
    });
  }
  
  // ========== PICKUP NOTIFICATION ==========
  
  showEquipmentPickup(equipment) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      padding: 15px 30px;
      background: rgba(0, 0, 0, 0.85);
      border: 2px solid ${equipment.rarity.color};
      border-radius: 6px;
      color: ${equipment.rarity.color};
      font-family: 'Cinzel', serif;
      font-size: 16px;
      text-align: center;
      z-index: 3000;
      animation: equipPickup 2s ease-out forwards;
      box-shadow: 0 0 20px ${equipment.rarity.color}40;
    `;
    
    notification.innerHTML = `
      <div style="font-size: 12px; color: #888; margin-bottom: 4px;">${equipment.rarity.name} ${equipment.slot}</div>
      <div style="font-weight: bold;">${equipment.name}</div>
      <div style="font-size: 11px; color: #aaa; margin-top: 6px;">
        ${Object.entries(equipment.stats).map(([s, v]) => `${v > 0 ? '+' : ''}${v} ${this.formatStatName(s)}`).join(' | ')}
      </div>
    `;
    
    // Add animation style if not exists
    if (!document.getElementById('equip-pickup-style')) {
      const style = document.createElement('style');
      style.id = 'equip-pickup-style';
      style.textContent = `
        @keyframes equipPickup {
          0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
          15% { opacity: 1; transform: translateX(-50%) translateY(0); }
          85% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  }
  
  // ========== PERSISTENCE ==========
  
  saveEquipment() {
    const data = {
      equipped: this.equipped,
      inventory: this.inventory,
    };
    localStorage.setItem('ashen_equipment', JSON.stringify(data));
  }
  
  loadEquipment() {
    try {
      const saved = localStorage.getItem('ashen_equipment');
      if (saved) {
        const data = JSON.parse(saved);
        
        // Restore equipped items with proper rarity objects
        if (data.equipped) {
          for (const [slot, item] of Object.entries(data.equipped)) {
            if (item) {
              item.rarity = RARITY[item.rarity.id.toUpperCase()] || RARITY.COMMON;
              this.equipped[slot] = item;
            }
          }
        }
        
        // Restore inventory
        if (data.inventory) {
          this.inventory = data.inventory.map(item => {
            item.rarity = RARITY[item.rarity.id.toUpperCase()] || RARITY.COMMON;
            return item;
          });
        }
        
        console.log('[EquipmentManager] Loaded equipment from localStorage');
      }
    } catch (e) {
      console.error('[EquipmentManager] Failed to load equipment:', e);
    }
  }
  
  // ========== UPDATE LOOP ==========
  
  update(deltaTime) {
    // Future: weapon swing animations, etc.
  }
}
