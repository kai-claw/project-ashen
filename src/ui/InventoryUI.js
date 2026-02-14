import { ITEM_TYPES } from '../systems/LootManager.js';
import { RARITY, EQUIPMENT_SLOTS } from '../systems/EquipmentManager.js';

/**
 * InventoryUI - Unified inventory interface for items and equipment
 * Features:
 * - Tab-based navigation (Items / Equipment)
 * - Grid-based item display with hover tooltips
 * - Gold counter
 * - Potion hotbar (shows quick-use slots)
 * - Equip/Use/Drop actions
 * - Dark souls-inspired aesthetic
 */
export class InventoryUI {
  constructor(gameManager, lootManager, equipmentManager, inputManager) {
    this.gm = gameManager;
    this.lootManager = lootManager;
    this.equipmentManager = equipmentManager;
    this.inputManager = inputManager;
    
    this.isOpen = false;
    this.activeTab = 'items'; // 'items' or 'equipment'
    this.hoveredItem = null;
    
    this.container = null;
    this.tooltipEl = null;
    
    this.createUI();
    this.createHotbar();
    
    console.log('[InventoryUI] Initialized');
  }
  
  /**
   * Create the main inventory UI container
   */
  createUI() {
    // Main container
    this.container = document.createElement('div');
    this.container.id = 'inventory-ui';
    this.container.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 750px;
      max-height: 85vh;
      background: linear-gradient(145deg, rgba(15, 15, 20, 0.97), rgba(8, 8, 12, 0.99));
      border: 2px solid rgba(200, 170, 100, 0.4);
      border-radius: 6px;
      padding: 0;
      color: #ddd;
      font-family: 'Cinzel', 'Georgia', serif;
      display: none;
      z-index: 2000;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.9), inset 0 0 80px rgba(0, 0, 0, 0.4);
      overflow: hidden;
    `;
    
    document.body.appendChild(this.container);
    
    // Tooltip element (for hover info)
    this.tooltipEl = document.createElement('div');
    this.tooltipEl.id = 'inventory-tooltip';
    this.tooltipEl.style.cssText = `
      position: fixed;
      background: rgba(10, 10, 15, 0.98);
      border: 1px solid rgba(200, 170, 100, 0.5);
      border-radius: 4px;
      padding: 12px 16px;
      color: #ccc;
      font-family: 'Cinzel', 'Georgia', serif;
      font-size: 13px;
      max-width: 280px;
      z-index: 3000;
      pointer-events: none;
      display: none;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
    `;
    document.body.appendChild(this.tooltipEl);
    
    // Add styles for animations
    if (!document.getElementById('inventory-ui-styles')) {
      const style = document.createElement('style');
      style.id = 'inventory-ui-styles';
      style.textContent = `
        #inventory-ui .tab-btn {
          background: rgba(30, 30, 40, 0.8);
          border: none;
          border-bottom: 2px solid transparent;
          color: #888;
          padding: 12px 24px;
          font-family: 'Cinzel', 'Georgia', serif;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        #inventory-ui .tab-btn:hover {
          color: #ccc;
          background: rgba(50, 50, 60, 0.8);
        }
        #inventory-ui .tab-btn.active {
          color: #ffc864;
          border-bottom-color: #ffc864;
          background: rgba(40, 35, 30, 0.8);
        }
        #inventory-ui .item-slot {
          width: 60px;
          height: 60px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(80, 80, 80, 0.3);
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
          position: relative;
        }
        #inventory-ui .item-slot:hover {
          border-color: rgba(200, 170, 100, 0.6);
          background: rgba(40, 35, 30, 0.5);
          transform: scale(1.05);
        }
        #inventory-ui .item-slot .item-icon {
          width: 40px;
          height: 40px;
          border-radius: 4px;
        }
        #inventory-ui .item-slot .item-qty {
          position: absolute;
          bottom: 2px;
          right: 4px;
          font-size: 11px;
          color: #fff;
          text-shadow: 0 0 3px #000, 0 0 5px #000;
          font-weight: bold;
        }
        #inventory-ui .item-slot .hotkey-badge {
          position: absolute;
          top: 2px;
          left: 4px;
          font-size: 10px;
          color: #ffc864;
          background: rgba(0,0,0,0.7);
          padding: 1px 4px;
          border-radius: 2px;
        }
        #inventory-ui .equip-slot {
          padding: 12px;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(80, 80, 80, 0.3);
          border-radius: 4px;
          margin-bottom: 10px;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        #inventory-ui .equip-slot:hover {
          border-color: rgba(200, 170, 100, 0.5);
          background: rgba(30, 25, 20, 0.4);
        }
        #inventory-ui .equip-slot.empty {
          border-style: dashed;
          opacity: 0.6;
        }
        #inventory-ui .action-btn {
          padding: 6px 14px;
          border: 1px solid rgba(100, 100, 100, 0.4);
          border-radius: 3px;
          background: rgba(40, 40, 50, 0.6);
          color: #aaa;
          font-family: 'Cinzel', 'Georgia', serif;
          font-size: 11px;
          cursor: pointer;
          transition: all 0.15s ease;
          margin-right: 6px;
        }
        #inventory-ui .action-btn:hover {
          background: rgba(60, 60, 70, 0.8);
          color: #fff;
          border-color: rgba(150, 150, 150, 0.5);
        }
        #inventory-ui .action-btn.use {
          border-color: rgba(100, 200, 100, 0.4);
          color: #8f8;
        }
        #inventory-ui .action-btn.use:hover {
          background: rgba(50, 80, 50, 0.6);
          border-color: rgba(100, 255, 100, 0.5);
        }
        #inventory-ui .action-btn.equip {
          border-color: rgba(100, 150, 255, 0.4);
          color: #8af;
        }
        #inventory-ui .action-btn.equip:hover {
          background: rgba(50, 60, 90, 0.6);
          border-color: rgba(100, 150, 255, 0.6);
        }
        #inventory-ui .action-btn.drop {
          border-color: rgba(180, 80, 80, 0.4);
          color: #f88;
        }
        #inventory-ui .action-btn.drop:hover {
          background: rgba(80, 40, 40, 0.6);
          border-color: rgba(255, 100, 100, 0.5);
        }
      `;
      document.head.appendChild(style);
    }
  }
  
  /**
   * Create the always-visible potion hotbar
   */
  createHotbar() {
    this.hotbarEl = document.createElement('div');
    this.hotbarEl.id = 'potion-hotbar';
    this.hotbarEl.style.cssText = `
      position: fixed;
      bottom: 120px;
      right: 20px;
      display: flex;
      gap: 8px;
      z-index: 500;
      pointer-events: none;
    `;
    document.body.appendChild(this.hotbarEl);
    
    this.updateHotbar();
  }
  
  /**
   * Update hotbar display
   */
  updateHotbar() {
    const inv = this.lootManager.getInventory();
    const healthCount = inv.items['health-potion'] || 0;
    const staminaCount = inv.items['stamina-potion'] || 0;
    
    this.hotbarEl.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(0,0,0,0.6);
        border: 1px solid rgba(255,80,80,0.4);
        border-radius: 6px;
        padding: 6px 10px;
        min-width: 50px;
      ">
        <div style="font-size: 10px; color: #ff6666; margin-bottom: 2px;">[1]</div>
        <div style="font-size: 18px; color: #ff4444;">❤</div>
        <div style="font-size: 12px; color: ${healthCount > 0 ? '#fff' : '#666'}; font-family: 'Cinzel', serif;">${healthCount}</div>
      </div>
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        background: rgba(0,0,0,0.6);
        border: 1px solid rgba(80,255,80,0.4);
        border-radius: 6px;
        padding: 6px 10px;
        min-width: 50px;
      ">
        <div style="font-size: 10px; color: #66ff66; margin-bottom: 2px;">[2]</div>
        <div style="font-size: 18px; color: #44ff44;">⚡</div>
        <div style="font-size: 12px; color: ${staminaCount > 0 ? '#fff' : '#666'}; font-family: 'Cinzel', serif;">${staminaCount}</div>
      </div>
    `;
  }
  
  /**
   * Toggle inventory open/closed
   */
  toggle() {
    this.isOpen = !this.isOpen;
    this.container.style.display = this.isOpen ? 'block' : 'none';
    this.tooltipEl.style.display = 'none';
    
    if (this.isOpen) {
      this.render();
    }
    
    // Hide equipment UI if it was open
    if (this.equipmentManager.isUIVisible) {
      this.equipmentManager.isUIVisible = false;
      this.equipmentManager.uiContainer.style.display = 'none';
    }
  }
  
  /**
   * Render the inventory UI
   */
  render() {
    const inv = this.lootManager.getInventory();
    const equippedItems = this.equipmentManager.equipped;
    const equipInv = this.equipmentManager.inventory;
    const bonuses = this.equipmentManager.getEquipmentBonuses();
    
    this.container.innerHTML = `
      <!-- Header with gold -->
      <div style="
        background: linear-gradient(90deg, rgba(40, 35, 25, 0.9), rgba(30, 28, 22, 0.95), rgba(40, 35, 25, 0.9));
        padding: 15px 20px;
        border-bottom: 1px solid rgba(200, 170, 100, 0.3);
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <h2 style="margin: 0; color: #ffc864; font-size: 20px; text-shadow: 0 0 15px rgba(255, 200, 100, 0.4);">
          📦 Inventory
        </h2>
        <div style="
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(0, 0, 0, 0.4);
          padding: 8px 16px;
          border-radius: 4px;
          border: 1px solid rgba(255, 215, 0, 0.3);
        ">
          <span style="font-size: 20px;">💰</span>
          <span style="color: #ffd700; font-size: 18px; font-weight: bold;">${inv.gold.toLocaleString()}</span>
          <span style="color: #aa9933; font-size: 12px;">Gold</span>
        </div>
      </div>
      
      <!-- Tabs -->
      <div style="display: flex; background: rgba(20, 20, 25, 0.8); border-bottom: 1px solid rgba(80, 80, 80, 0.3);">
        <button class="tab-btn ${this.activeTab === 'items' ? 'active' : ''}" data-tab="items">
          🎒 Items
        </button>
        <button class="tab-btn ${this.activeTab === 'equipment' ? 'active' : ''}" data-tab="equipment">
          ⚔️ Equipment
        </button>
      </div>
      
      <!-- Content area -->
      <div style="padding: 20px; max-height: calc(85vh - 140px); overflow-y: auto;">
        ${this.activeTab === 'items' ? this.renderItemsTab(inv) : this.renderEquipmentTab(equippedItems, equipInv, bonuses)}
      </div>
      
      <!-- Footer -->
      <div style="
        padding: 10px 20px;
        background: rgba(15, 15, 20, 0.9);
        border-top: 1px solid rgba(80, 80, 80, 0.3);
        text-align: center;
        color: #666;
        font-size: 12px;
      ">
        Press <span style="color: #ffc864;">I</span> to close • <span style="color: #ff6666;">[1]</span> Health Potion • <span style="color: #66ff66;">[2]</span> Stamina Potion
      </div>
    `;
    
    this.attachEventListeners();
  }
  
  /**
   * Render the Items tab content
   */
  renderItemsTab(inv) {
    const consumables = [];
    const materials = [];
    
    // Categorize items
    for (const [itemId, qty] of Object.entries(inv.items)) {
      const itemDef = Object.values(ITEM_TYPES).find(t => t.id === itemId);
      if (!itemDef) continue;
      
      if (itemDef.type === 'consumable') {
        consumables.push({ ...itemDef, quantity: qty });
      } else if (itemDef.type === 'material') {
        materials.push({ ...itemDef, quantity: qty });
      }
    }
    
    return `
      <!-- Consumables Section -->
      <div style="margin-bottom: 25px;">
        <h3 style="color: #aaa; font-size: 14px; margin: 0 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid rgba(100, 100, 100, 0.2);">
          🧪 Consumables
        </h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
          ${consumables.length === 0 ? '<span style="color: #555; font-size: 13px;">No consumables</span>' : ''}
          ${consumables.map(item => this.renderItemSlot(item)).join('')}
        </div>
      </div>
      
      <!-- Materials Section -->
      <div>
        <h3 style="color: #aaa; font-size: 14px; margin: 0 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid rgba(100, 100, 100, 0.2);">
          ⚗️ Materials
        </h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
          ${materials.length === 0 ? '<span style="color: #555; font-size: 13px;">No materials</span>' : ''}
          ${materials.map(item => this.renderItemSlot(item)).join('')}
        </div>
      </div>
    `;
  }
  
  /**
   * Render a single item slot
   */
  renderItemSlot(item) {
    const colorHex = '#' + item.color.toString(16).padStart(6, '0');
    const hotkey = item.hotkey ? `<span class="hotkey-badge">${item.hotkey}</span>` : '';
    
    return `
      <div class="item-slot" data-item-id="${item.id}" data-item-type="consumable"
           style="border-color: ${colorHex}40;">
        <div class="item-icon" style="
          background: radial-gradient(circle at 30% 30%, ${colorHex}, ${colorHex}66);
          box-shadow: 0 0 10px ${colorHex}44;
        "></div>
        ${hotkey}
        <span class="item-qty">${item.quantity}</span>
      </div>
    `;
  }
  
  /**
   * Render the Equipment tab content
   */
  renderEquipmentTab(equipped, inventory, bonuses) {
    return `
      <div style="display: flex; gap: 25px;">
        <!-- Equipped Section -->
        <div style="flex: 1;">
          <h3 style="color: #aaa; font-size: 14px; margin: 0 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid rgba(100, 100, 100, 0.2);">
            Equipped
          </h3>
          ${this.renderEquipSlot(equipped[EQUIPMENT_SLOTS.WEAPON], '⚔️ Weapon', EQUIPMENT_SLOTS.WEAPON)}
          ${this.renderEquipSlot(equipped[EQUIPMENT_SLOTS.ARMOR], '🛡️ Armor', EQUIPMENT_SLOTS.ARMOR)}
          ${this.renderEquipSlot(equipped[EQUIPMENT_SLOTS.ACCESSORY], '💍 Accessory', EQUIPMENT_SLOTS.ACCESSORY)}
          
          <!-- Total Bonuses -->
          <div style="
            margin-top: 20px;
            padding: 12px;
            background: rgba(0, 0, 0, 0.4);
            border: 1px solid rgba(100, 200, 100, 0.2);
            border-radius: 4px;
          ">
            <h4 style="color: #8f8; font-size: 12px; margin: 0 0 8px 0;">Total Bonuses</h4>
            <div style="font-size: 11px; color: #afa; line-height: 1.6;">
              ${bonuses.damage > 0 ? `<div>+${bonuses.damage} Damage</div>` : ''}
              ${bonuses.defense > 0 ? `<div>+${bonuses.defense} Defense</div>` : ''}
              ${bonuses.health !== 0 ? `<div>${bonuses.health > 0 ? '+' : ''}${bonuses.health} Max Health</div>` : ''}
              ${bonuses.stamina !== 0 ? `<div>${bonuses.stamina > 0 ? '+' : ''}${bonuses.stamina} Max Stamina</div>` : ''}
              ${bonuses.critChance > 0 ? `<div>+${bonuses.critChance}% Crit Chance</div>` : ''}
              ${bonuses.critDamage > 0 ? `<div>+${bonuses.critDamage}% Crit Damage</div>` : ''}
              ${bonuses.attackSpeed > 0 ? `<div>+${bonuses.attackSpeed}% Attack Speed</div>` : ''}
              ${bonuses.healthRegen > 0 ? `<div>+${bonuses.healthRegen} HP/sec</div>` : ''}
              ${bonuses.staminaRegen > 0 ? `<div>+${bonuses.staminaRegen}% Stamina Regen</div>` : ''}
              ${Object.values(bonuses).every(v => v === 0) ? '<div style="color: #666;">No bonuses</div>' : ''}
            </div>
          </div>
        </div>
        
        <!-- Inventory Section -->
        <div style="flex: 1.5;">
          <h3 style="color: #aaa; font-size: 14px; margin: 0 0 12px 0; padding-bottom: 6px; border-bottom: 1px solid rgba(100, 100, 100, 0.2);">
            Equipment Inventory (${inventory.length})
          </h3>
          <div style="max-height: 350px; overflow-y: auto;">
            ${inventory.length === 0 ? '<span style="color: #555; font-size: 13px;">No equipment in inventory</span>' : ''}
            ${inventory.map(eq => this.renderEquipmentItem(eq)).join('')}
          </div>
        </div>
      </div>
    `;
  }
  
  /**
   * Render an equipment slot (equipped item or empty)
   */
  renderEquipSlot(item, label, slot) {
    if (!item) {
      return `
        <div class="equip-slot empty" data-slot="${slot}">
          <span style="color: #555; font-size: 13px;">${label}: Empty</span>
        </div>
      `;
    }
    
    const statsStr = Object.entries(item.stats)
      .map(([s, v]) => `${v > 0 ? '+' : ''}${v} ${this.formatStatName(s)}`)
      .join(' • ');
    
    return `
      <div class="equip-slot" data-slot="${slot}" style="border-color: ${item.rarity.color}40;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
            <div style="color: #888; font-size: 11px; margin-bottom: 2px;">${label}</div>
            <div style="color: ${item.rarity.color}; font-weight: bold;">${item.name}</div>
            <div style="color: #777; font-size: 11px; margin-top: 4px;">${statsStr}</div>
          </div>
          <button class="action-btn drop unequip-btn" data-slot="${slot}">Unequip</button>
        </div>
      </div>
    `;
  }
  
  /**
   * Render an equipment item in inventory
   */
  renderEquipmentItem(eq) {
    const statsStr = Object.entries(eq.stats)
      .map(([s, v]) => `${v > 0 ? '+' : ''}${v} ${this.formatStatName(s)}`)
      .join(' • ');
    
    return `
      <div class="equip-slot" data-equip-id="${eq.id}" style="border-color: ${eq.rarity.color}30;">
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="color: ${eq.rarity.color}; font-weight: bold;">${eq.name}</span>
              <span style="color: #666; font-size: 11px; text-transform: capitalize;">${eq.slot}</span>
            </div>
            <div style="color: #777; font-size: 11px; margin-top: 4px;">${statsStr}</div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <button class="action-btn equip equip-btn" data-equip-id="${eq.id}">Equip</button>
            <button class="action-btn drop drop-equip-btn" data-equip-id="${eq.id}">Drop</button>
          </div>
        </div>
      </div>
    `;
  }
  
  /**
   * Format stat name for display
   */
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
  
  /**
   * Attach event listeners to UI elements
   */
  attachEventListeners() {
    // Tab buttons
    this.container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeTab = btn.dataset.tab;
        this.render();
      });
    });
    
    // Item slots (hover for tooltip, click for actions)
    this.container.querySelectorAll('.item-slot').forEach(slot => {
      slot.addEventListener('mouseenter', (e) => this.showItemTooltip(e, slot.dataset.itemId));
      slot.addEventListener('mouseleave', () => this.hideTooltip());
      slot.addEventListener('click', () => this.handleItemClick(slot.dataset.itemId));
    });
    
    // Equip buttons
    this.container.querySelectorAll('.equip-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.equipmentManager.equip(btn.dataset.equipId);
        this.render();
        this.updateHotbar();
      });
    });
    
    // Unequip buttons
    this.container.querySelectorAll('.unequip-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.equipmentManager.unequip(btn.dataset.slot);
        this.render();
        this.updateHotbar();
      });
    });
    
    // Drop equipment buttons
    this.container.querySelectorAll('.drop-equip-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm('Drop this equipment?')) {
          this.equipmentManager.dropEquipment(btn.dataset.equipId);
          this.render();
        }
      });
    });
  }
  
  /**
   * Show tooltip for item
   */
  showItemTooltip(event, itemId) {
    const itemDef = Object.values(ITEM_TYPES).find(t => t.id === itemId);
    if (!itemDef) return;
    
    const colorHex = '#' + itemDef.color.toString(16).padStart(6, '0');
    
    let effectText = '';
    if (itemDef.effect) {
      if (itemDef.effect.healAmount) effectText = `<div style="color: #ff6666; margin-top: 6px;">Restores ${itemDef.effect.healAmount} HP</div>`;
      if (itemDef.effect.staminaAmount) effectText = `<div style="color: #66ff66; margin-top: 6px;">Restores ${itemDef.effect.staminaAmount} Stamina</div>`;
    }
    
    this.tooltipEl.innerHTML = `
      <div style="color: ${colorHex}; font-weight: bold; margin-bottom: 6px;">${itemDef.name}</div>
      <div style="color: #888; font-size: 11px; text-transform: capitalize;">${itemDef.type}</div>
      <div style="margin-top: 8px; line-height: 1.4;">${itemDef.description}</div>
      ${effectText}
      ${itemDef.type === 'consumable' ? '<div style="color: #ffc864; font-size: 11px; margin-top: 10px;">Click to use</div>' : ''}
    `;
    
    this.tooltipEl.style.display = 'block';
    this.positionTooltip(event);
  }
  
  /**
   * Position tooltip near cursor
   */
  positionTooltip(event) {
    const x = event.clientX + 15;
    const y = event.clientY + 10;
    
    // Keep tooltip on screen
    const rect = this.tooltipEl.getBoundingClientRect();
    const maxX = window.innerWidth - 300;
    const maxY = window.innerHeight - 200;
    
    this.tooltipEl.style.left = Math.min(x, maxX) + 'px';
    this.tooltipEl.style.top = Math.min(y, maxY) + 'px';
  }
  
  /**
   * Hide tooltip
   */
  hideTooltip() {
    this.tooltipEl.style.display = 'none';
  }
  
  /**
   * Handle click on item slot
   */
  handleItemClick(itemId) {
    const itemDef = Object.values(ITEM_TYPES).find(t => t.id === itemId);
    if (!itemDef) return;
    
    if (itemDef.type === 'consumable') {
      const used = this.lootManager.useItem(itemId);
      if (used) {
        this.render();
        this.updateHotbar();
        
        // Play sound
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('itemPickup', { volume: 0.5 });
        }
      }
    }
  }
  
  /**
   * Update method (called from game loop)
   */
  update() {
    // Update hotbar counts
    if (this.hotbarEl) {
      this.updateHotbar();
    }
    
    // Check for I key toggle
    if (this.inputManager.openEquipment) {
      this.toggle();
    }
  }
}
