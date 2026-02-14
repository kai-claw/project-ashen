import { ITEM_TYPES } from './LootManager.js';
import { RARITY, EQUIPMENT_BASES, EQUIPMENT_SLOTS } from './EquipmentManager.js';
import { 
  SHOP_ITEMS, 
  MERCHANT_INVENTORIES, 
  RARITY_PRICE_MULT, 
  SELL_RATIO,
  getAvailableItems,
  getItemPrice as getMerchantItemPrice,
} from '../data/MerchantData.js';

// Re-export for backwards compatibility
export { SHOP_ITEMS, MERCHANT_INVENTORIES };

/**
 * ShopManager - Handles all shop/trading logic
 * Phase 18: Village Interaction & Trading
 * 
 * Features:
 * - Buy/Sell tabs with merchant-specific inventory
 * - Gold transactions with confirmation
 * - Different merchant types (Blacksmith, Healer, General)
 * - Price scaling based on item rarity
 * - Level-locked items (items appear as player levels up)
 * - Insufficient gold feedback
 */

// Note: Shop items and merchant inventories are now defined in ../data/MerchantData.js
// This file focuses on UI and transaction logic.

export class ShopManager {
  constructor(gameManager, lootManager, equipmentManager, audioManager) {
    this.gm = gameManager;
    this.lootManager = lootManager;
    this.equipmentManager = equipmentManager;
    this.audio = audioManager;
    
    this.isOpen = false;
    this.currentNPC = null;
    this.activeTab = 'buy'; // 'buy' or 'sell'
    this.selectedItem = null;
    this.confirmMode = null; // 'buy' | 'sell' | null
    
    // UI elements
    this.container = null;
    this.overlay = null;
    
    this.createUI();
    
    console.log('[ShopManager] Initialized');
  }
  
  /**
   * Create shop UI
   */
  createUI() {
    // Dark overlay
    this.overlay = document.createElement('div');
    this.overlay.id = 'shop-overlay';
    this.overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      z-index: 1999;
      display: none;
    `;
    document.body.appendChild(this.overlay);
    
    // Main container
    this.container = document.createElement('div');
    this.container.id = 'shop-ui';
    this.container.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 800px;
      max-height: 85vh;
      background: linear-gradient(145deg, rgba(20, 18, 15, 0.98), rgba(12, 10, 8, 0.99));
      border: 2px solid rgba(180, 150, 80, 0.5);
      border-radius: 8px;
      color: #ddd;
      font-family: 'Cinzel', 'Georgia', serif;
      display: none;
      z-index: 2000;
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.9), inset 0 0 80px rgba(0, 0, 0, 0.3);
      overflow: hidden;
    `;
    document.body.appendChild(this.container);
    
    // Add styles
    this._addStyles();
  }
  
  /**
   * Add CSS styles for shop UI
   */
  _addStyles() {
    if (document.getElementById('shop-ui-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'shop-ui-styles';
    style.textContent = `
      #shop-ui .shop-tab {
        flex: 1;
        padding: 14px 20px;
        background: rgba(30, 25, 20, 0.8);
        border: none;
        border-bottom: 3px solid transparent;
        color: #888;
        font-family: 'Cinzel', serif;
        font-size: 15px;
        cursor: pointer;
        transition: all 0.2s ease;
        letter-spacing: 2px;
      }
      #shop-ui .shop-tab:hover {
        color: #ccc;
        background: rgba(50, 40, 30, 0.8);
      }
      #shop-ui .shop-tab.active {
        color: #ffd088;
        border-bottom-color: #ffd088;
        background: rgba(40, 35, 25, 0.9);
      }
      #shop-ui .shop-item {
        display: flex;
        align-items: center;
        padding: 12px 16px;
        background: rgba(0, 0, 0, 0.3);
        border: 1px solid rgba(100, 80, 50, 0.2);
        border-radius: 4px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      #shop-ui .shop-item:hover {
        background: rgba(40, 35, 25, 0.5);
        border-color: rgba(180, 150, 80, 0.4);
        transform: translateX(4px);
      }
      #shop-ui .shop-item.selected {
        background: rgba(60, 50, 30, 0.6);
        border-color: rgba(255, 200, 100, 0.5);
        box-shadow: 0 0 15px rgba(255, 200, 100, 0.1);
      }
      #shop-ui .shop-btn {
        padding: 10px 24px;
        border: 1px solid rgba(100, 100, 100, 0.4);
        border-radius: 4px;
        background: rgba(40, 40, 50, 0.6);
        color: #aaa;
        font-family: 'Cinzel', serif;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.15s ease;
        letter-spacing: 1px;
      }
      #shop-ui .shop-btn:hover:not(:disabled) {
        background: rgba(60, 60, 70, 0.8);
        color: #fff;
        border-color: rgba(150, 150, 150, 0.5);
      }
      #shop-ui .shop-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
      #shop-ui .shop-btn.buy {
        background: rgba(50, 80, 50, 0.6);
        border-color: rgba(100, 200, 100, 0.4);
        color: #8f8;
      }
      #shop-ui .shop-btn.buy:hover:not(:disabled) {
        background: rgba(60, 100, 60, 0.8);
        border-color: rgba(100, 255, 100, 0.5);
      }
      #shop-ui .shop-btn.sell {
        background: rgba(80, 70, 40, 0.6);
        border-color: rgba(200, 170, 80, 0.4);
        color: #ffd088;
      }
      #shop-ui .shop-btn.sell:hover:not(:disabled) {
        background: rgba(100, 85, 50, 0.8);
        border-color: rgba(255, 200, 100, 0.5);
      }
      #shop-ui .confirm-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
      }
      #shop-ui .confirm-box {
        background: rgba(30, 25, 20, 0.98);
        border: 2px solid rgba(255, 200, 100, 0.4);
        border-radius: 8px;
        padding: 30px 40px;
        text-align: center;
        max-width: 400px;
      }
      @keyframes shopSlideIn {
        from { opacity: 0; transform: translate(-50%, -48%); }
        to { opacity: 1; transform: translate(-50%, -50%); }
      }
      #shop-ui.open {
        animation: shopSlideIn 0.25s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
  }
  
  /**
   * Open shop for an NPC
   */
  open(npc) {
    this.isOpen = true;
    this.currentNPC = npc;
    this.activeTab = 'buy';
    this.selectedItem = null;
    this.confirmMode = null;
    
    this.overlay.style.display = 'block';
    this.container.style.display = 'block';
    this.container.classList.add('open');
    
    this.render();
    
    // Play open sound
    if (this.audio) {
      this.audio.play('menuSelect', { volume: 0.5 });
    }
    
    console.log(`[ShopManager] Opened shop for ${npc.type}`);
  }
  
  /**
   * Close shop
   */
  close() {
    this.isOpen = false;
    this.currentNPC = null;
    this.selectedItem = null;
    this.confirmMode = null;
    
    this.overlay.style.display = 'none';
    this.container.style.display = 'none';
    this.container.classList.remove('open');
    
    // Play close sound
    if (this.audio) {
      this.audio.play('menuBack', { volume: 0.4 });
    }
    
    console.log('[ShopManager] Shop closed');
  }
  
  /**
   * Get merchant inventory based on NPC type
   */
  getMerchantInventory() {
    const type = this.currentNPC?.type || 'merchant';
    return MERCHANT_INVENTORIES[type] || MERCHANT_INVENTORIES.merchant;
  }
  
  /**
   * Get player's current level
   */
  getPlayerLevel() {
    return this.gm?.currentLevel || 1;
  }
  
  /**
   * Get available items for current merchant, filtered by player level
   */
  getAvailableItems() {
    const type = this.currentNPC?.type || 'merchant';
    const playerLevel = this.getPlayerLevel();
    return getAvailableItems(type, playerLevel);
  }
  
  /**
   * Calculate item price (with rarity multiplier)
   */
  getItemPrice(item, forSale = false) {
    return getMerchantItemPrice(item, forSale);
  }
  
  /**
   * Get player's current gold
   */
  getPlayerGold() {
    const inv = this.lootManager.getInventory();
    return inv.gold || 0;
  }
  
  /**
   * Get player's sellable items
   */
  getSellableItems() {
    const sellable = [];
    
    // Get consumables/materials from loot inventory
    const inv = this.lootManager.getInventory();
    for (const [itemId, qty] of Object.entries(inv.items)) {
      const itemDef = Object.values(ITEM_TYPES).find(t => t.id === itemId);
      if (itemDef && qty > 0) {
        // Create a sellable entry
        const sellPrice = this._getItemSellPrice(itemDef);
        sellable.push({
          id: itemId,
          name: itemDef.name,
          type: itemDef.type,
          quantity: qty,
          sellPrice: sellPrice,
          rarity: RARITY.COMMON,
          description: itemDef.description,
        });
      }
    }
    
    // Get equipment from equipment inventory
    for (const eq of this.equipmentManager.inventory) {
      const sellPrice = this._getEquipmentSellPrice(eq);
      sellable.push({
        id: eq.id,
        name: eq.name,
        type: 'equipment',
        slot: eq.slot,
        quantity: 1,
        sellPrice: sellPrice,
        rarity: eq.rarity,
        stats: eq.stats,
        description: `${eq.rarity.name} ${eq.slot}`,
        isEquipment: true,
      });
    }
    
    return sellable;
  }
  
  /**
   * Get sell price for a consumable/material
   */
  _getItemSellPrice(itemDef) {
    // Base sell prices for common items
    const basePrices = {
      'health-potion': 25,
      'stamina-potion': 20,
      'iron-ore': 10,
      'dark-shard': 30,
      'bone-fragment': 5,
      'spirit-essence': 50,
    };
    return basePrices[itemDef.id] || 10;
  }
  
  /**
   * Get sell price for equipment
   */
  _getEquipmentSellPrice(equipment) {
    // Find matching base equipment
    const baseEquip = EQUIPMENT_BASES[equipment.baseId];
    const basePrice = baseEquip ? 50 : 30;
    const rarityMult = RARITY_PRICE_MULT[equipment.rarity.id] || 1.0;
    return Math.round(basePrice * rarityMult * SELL_RATIO);
  }
  
  /**
   * Purchase an item
   */
  buyItem(shopItemId) {
    const item = SHOP_ITEMS[shopItemId];
    if (!item) return false;
    
    const price = this.getItemPrice(item);
    const gold = this.getPlayerGold();
    
    if (gold < price) {
      this._showNotification('Not enough gold!', 'error');
      return false;
    }
    
    // Deduct gold
    this.lootManager.addGold(-price);
    
    // Add item to player inventory
    if (item.type === 'equipment') {
      // Create equipment instance
      const equipment = this._createEquipmentFromShop(item);
      this.equipmentManager.addToInventory(equipment);
    } else if (item.type === 'consumable') {
      // Add consumable using the itemId reference
      const actualItemId = item.itemId || item.id.replace(/_/g, '-');
      this.lootManager.addItem(actualItemId, 1);
    } else {
      // Misc items
      const actualItemId = item.itemId || item.id.replace(/_/g, '-');
      this.lootManager.addItem(actualItemId, 1);
    }
    
    // Play purchase sound
    if (this.audio) {
      this.audio.play('itemPickup', { volume: 0.6 });
    }
    
    this._showNotification(`Purchased ${item.name} for ${price} gold`, 'success');
    this.confirmMode = null;
    this.selectedItem = null;
    this.render();
    
    return true;
  }
  
  /**
   * Create equipment instance from shop item
   */
  _createEquipmentFromShop(shopItem) {
    return {
      id: `${shopItem.id}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      baseId: shopItem.id,
      name: shopItem.name,
      slot: shopItem.slot,
      rarity: shopItem.rarity,
      description: shopItem.description,
      weaponModel: shopItem.weaponModel || null,
      stats: { ...shopItem.stats },
    };
  }
  
  /**
   * Sell an item
   */
  sellItem(itemId, isEquipment = false) {
    let sellPrice = 0;
    let itemName = '';
    
    if (isEquipment) {
      // Find equipment in inventory
      const idx = this.equipmentManager.inventory.findIndex(e => e.id === itemId);
      if (idx === -1) return false;
      
      const equipment = this.equipmentManager.inventory[idx];
      sellPrice = this._getEquipmentSellPrice(equipment);
      itemName = equipment.name;
      
      // Remove from inventory
      this.equipmentManager.inventory.splice(idx, 1);
      this.equipmentManager.saveEquipment();
    } else {
      // Find item in loot inventory
      const inv = this.lootManager.getInventory();
      const qty = inv.items[itemId] || 0;
      if (qty <= 0) return false;
      
      const itemDef = Object.values(ITEM_TYPES).find(t => t.id === itemId);
      if (!itemDef) return false;
      
      sellPrice = this._getItemSellPrice(itemDef);
      itemName = itemDef.name;
      
      // Remove one from inventory
      this.lootManager.removeItem(itemId, 1);
    }
    
    // Add gold
    this.lootManager.addGold(sellPrice);
    
    // Play sell sound
    if (this.audio) {
      this.audio.play('menuConfirm', { volume: 0.5 });
    }
    
    this._showNotification(`Sold ${itemName} for ${sellPrice} gold`, 'success');
    this.confirmMode = null;
    this.selectedItem = null;
    this.render();
    
    return true;
  }
  
  /**
   * Show notification
   */
  _showNotification(message, type = 'info') {
    const colors = {
      success: '#4ade80',
      error: '#f87171',
      info: '#ffd088',
    };
    
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px 24px;
      background: rgba(0, 0, 0, 0.9);
      border: 1px solid ${colors[type]};
      border-radius: 4px;
      color: ${colors[type]};
      font-family: 'Cinzel', serif;
      font-size: 14px;
      z-index: 3000;
      animation: notifFade 2s ease-out forwards;
    `;
    notification.textContent = message;
    
    // Add animation if not exists
    if (!document.getElementById('shop-notif-anim')) {
      const style = document.createElement('style');
      style.id = 'shop-notif-anim';
      style.textContent = `
        @keyframes notifFade {
          0% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
          15% { opacity: 1; transform: translateX(-50%) translateY(0); }
          85% { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
        }
      `;
      document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  }
  
  /**
   * Render shop UI
   */
  render() {
    const merchant = this.getMerchantInventory();
    const gold = this.getPlayerGold();
    
    this.container.innerHTML = `
      <!-- Header -->
      <div style="
        background: linear-gradient(90deg, rgba(50, 40, 25, 0.9), rgba(40, 35, 25, 0.95), rgba(50, 40, 25, 0.9));
        padding: 18px 24px;
        border-bottom: 1px solid rgba(180, 150, 80, 0.3);
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <div>
          <h2 style="margin: 0; color: #ffd088; font-size: 22px; text-shadow: 0 0 15px rgba(255, 200, 100, 0.4);">
            🏪 ${merchant.title}
          </h2>
          <p style="margin: 6px 0 0 0; color: #999; font-size: 13px; font-style: italic;">
            "${merchant.greeting}"
          </p>
        </div>
        <div style="
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 0, 0, 0.5);
          padding: 10px 20px;
          border-radius: 4px;
          border: 1px solid rgba(255, 215, 0, 0.3);
        ">
          <span style="font-size: 22px;">💰</span>
          <span style="color: #ffd700; font-size: 20px; font-weight: bold;">${gold.toLocaleString()}</span>
        </div>
      </div>
      
      <!-- Tabs -->
      <div style="display: flex; background: rgba(20, 18, 15, 0.8); border-bottom: 1px solid rgba(80, 70, 50, 0.3);">
        <button class="shop-tab ${this.activeTab === 'buy' ? 'active' : ''}" data-tab="buy">
          🛒 BUY
        </button>
        <button class="shop-tab ${this.activeTab === 'sell' ? 'active' : ''}" data-tab="sell">
          💵 SELL
        </button>
      </div>
      
      <!-- Content -->
      <div style="padding: 20px; max-height: calc(85vh - 180px); overflow-y: auto;">
        ${this.activeTab === 'buy' ? this._renderBuyTab(merchant) : this._renderSellTab()}
      </div>
      
      <!-- Footer -->
      <div style="
        padding: 12px 24px;
        background: rgba(15, 12, 10, 0.95);
        border-top: 1px solid rgba(80, 70, 50, 0.3);
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <span style="color: #666; font-size: 12px;">Click item to select • Esc to close</span>
        <button class="shop-btn" id="shop-close-btn">Close</button>
      </div>
      
      ${this.confirmMode ? this._renderConfirmDialog() : ''}
    `;
    
    this._attachListeners();
  }
  
  /**
   * Render buy tab content
   */
  _renderBuyTab(merchant) {
    // Get level-filtered items
    const availableItemIds = this.getAvailableItems();
    const items = availableItemIds.map(id => SHOP_ITEMS[id]).filter(Boolean);
    const gold = this.getPlayerGold();
    const playerLevel = this.getPlayerLevel();
    
    if (items.length === 0) {
      return '<p style="color: #666; text-align: center;">No items available</p>';
    }
    
    return `
      <div style="display: flex; gap: 20px;">
        <!-- Item list -->
        <div style="flex: 1.2;">
          ${items.map(item => {
            const price = this.getItemPrice(item);
            const canAfford = gold >= price;
            const isSelected = this.selectedItem?.id === item.id;
            
            return `
              <div class="shop-item ${isSelected ? 'selected' : ''}" 
                   data-item-id="${item.id}" data-action="select-buy"
                   style="border-left: 3px solid ${item.rarity.color};">
                <div style="flex: 1;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="color: ${item.rarity.color}; font-weight: bold;">${item.name}</span>
                    <span style="color: #666; font-size: 11px; text-transform: uppercase;">${item.type}</span>
                  </div>
                  <div style="color: #888; font-size: 12px; margin-top: 4px;">${item.description}</div>
                  ${item.stats ? `<div style="color: #8af; font-size: 11px; margin-top: 4px;">
                    ${Object.entries(item.stats).map(([s, v]) => `+${v} ${this._formatStat(s)}`).join(' • ')}
                  </div>` : ''}
                </div>
                <div style="text-align: right; min-width: 80px;">
                  <div style="color: ${canAfford ? '#ffd700' : '#f66'}; font-size: 16px; font-weight: bold;">
                    💰 ${price}
                  </div>
                  ${!canAfford ? '<div style="color: #f66; font-size: 10px;">Not enough</div>' : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
        
        <!-- Action panel -->
        <div style="width: 180px;">
          ${this.selectedItem ? this._renderBuyPanel() : `
            <div style="
              height: 200px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #555;
              text-align: center;
              font-size: 13px;
              border: 1px dashed rgba(100, 80, 50, 0.3);
              border-radius: 4px;
            ">
              Select an item<br>to purchase
            </div>
          `}
        </div>
      </div>
    `;
  }
  
  /**
   * Render buy action panel
   */
  _renderBuyPanel() {
    const item = SHOP_ITEMS[this.selectedItem.id];
    if (!item) return '';
    
    const price = this.getItemPrice(item);
    const gold = this.getPlayerGold();
    const canAfford = gold >= price;
    
    return `
      <div style="
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid ${item.rarity.color}40;
        border-radius: 4px;
        padding: 16px;
      ">
        <div style="color: ${item.rarity.color}; font-weight: bold; margin-bottom: 10px;">
          ${item.name}
        </div>
        <div style="color: #888; font-size: 12px; margin-bottom: 15px;">
          ${item.description}
        </div>
        ${item.stats ? `<div style="color: #8af; font-size: 11px; margin-bottom: 15px; line-height: 1.6;">
          ${Object.entries(item.stats).map(([s, v]) => `<div>+${v} ${this._formatStat(s)}</div>`).join('')}
        </div>` : ''}
        <div style="
          color: #ffd700;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 15px;
        ">
          💰 ${price}
        </div>
        <button class="shop-btn buy" 
                data-action="confirm-buy" 
                data-item-id="${item.id}"
                ${!canAfford ? 'disabled' : ''}>
          ${canAfford ? 'Purchase' : 'Cannot Afford'}
        </button>
      </div>
    `;
  }
  
  /**
   * Render sell tab content
   */
  _renderSellTab() {
    const sellable = this.getSellableItems();
    
    if (sellable.length === 0) {
      return `
        <div style="
          text-align: center;
          padding: 60px 20px;
          color: #666;
        ">
          <p style="font-size: 16px;">No items to sell</p>
          <p style="font-size: 12px; margin-top: 10px;">Collect loot from enemies and chests!</p>
        </div>
      `;
    }
    
    return `
      <div style="display: flex; gap: 20px;">
        <!-- Item list -->
        <div style="flex: 1.2;">
          ${sellable.map(item => {
            const isSelected = this.selectedItem?.id === item.id && this.activeTab === 'sell';
            
            return `
              <div class="shop-item ${isSelected ? 'selected' : ''}" 
                   data-item-id="${item.id}" 
                   data-is-equipment="${item.isEquipment || false}"
                   data-action="select-sell"
                   style="border-left: 3px solid ${item.rarity?.color || '#888'};">
                <div style="flex: 1;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <span style="color: ${item.rarity?.color || '#ccc'}; font-weight: bold;">${item.name}</span>
                    ${item.quantity > 1 ? `<span style="color: #888; font-size: 12px;">x${item.quantity}</span>` : ''}
                  </div>
                  <div style="color: #666; font-size: 11px; text-transform: capitalize;">${item.type}</div>
                  ${item.stats ? `<div style="color: #8af; font-size: 11px; margin-top: 4px;">
                    ${Object.entries(item.stats).map(([s, v]) => `+${v} ${this._formatStat(s)}`).join(' • ')}
                  </div>` : ''}
                </div>
                <div style="text-align: right; min-width: 80px;">
                  <div style="color: #ffd700; font-size: 16px; font-weight: bold;">
                    💰 ${item.sellPrice}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        
        <!-- Action panel -->
        <div style="width: 180px;">
          ${this.selectedItem && this.activeTab === 'sell' ? this._renderSellPanel() : `
            <div style="
              height: 200px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #555;
              text-align: center;
              font-size: 13px;
              border: 1px dashed rgba(100, 80, 50, 0.3);
              border-radius: 4px;
            ">
              Select an item<br>to sell
            </div>
          `}
        </div>
      </div>
    `;
  }
  
  /**
   * Render sell action panel
   */
  _renderSellPanel() {
    const item = this.selectedItem;
    if (!item) return '';
    
    return `
      <div style="
        background: rgba(0, 0, 0, 0.4);
        border: 1px solid ${item.rarity?.color || '#888'}40;
        border-radius: 4px;
        padding: 16px;
      ">
        <div style="color: ${item.rarity?.color || '#ccc'}; font-weight: bold; margin-bottom: 10px;">
          ${item.name}
        </div>
        <div style="color: #888; font-size: 12px; margin-bottom: 15px;">
          ${item.description || item.type}
        </div>
        ${item.stats ? `<div style="color: #8af; font-size: 11px; margin-bottom: 15px; line-height: 1.6;">
          ${Object.entries(item.stats).map(([s, v]) => `<div>+${v} ${this._formatStat(s)}</div>`).join('')}
        </div>` : ''}
        <div style="
          color: #ffd700;
          font-size: 18px;
          font-weight: bold;
          text-align: center;
          margin-bottom: 15px;
        ">
          💰 ${item.sellPrice}
        </div>
        <button class="shop-btn sell" 
                data-action="confirm-sell" 
                data-item-id="${item.id}"
                data-is-equipment="${item.isEquipment || false}">
          Sell
        </button>
      </div>
    `;
  }
  
  /**
   * Render confirmation dialog
   */
  _renderConfirmDialog() {
    const item = this.selectedItem;
    if (!item) return '';
    
    const isBuying = this.confirmMode === 'buy';
    const price = isBuying 
      ? this.getItemPrice(SHOP_ITEMS[item.id]) 
      : item.sellPrice;
    
    return `
      <div class="confirm-overlay">
        <div class="confirm-box">
          <h3 style="color: #ffd088; margin: 0 0 20px 0;">
            ${isBuying ? 'Confirm Purchase' : 'Confirm Sale'}
          </h3>
          <div style="color: ${item.rarity?.color || '#ccc'}; font-size: 18px; margin-bottom: 10px;">
            ${item.name}
          </div>
          <div style="color: #ffd700; font-size: 24px; margin-bottom: 25px;">
            💰 ${price}
          </div>
          <div style="display: flex; gap: 15px; justify-content: center;">
            <button class="shop-btn ${isBuying ? 'buy' : 'sell'}" data-action="confirm-yes">
              ${isBuying ? 'Buy' : 'Sell'}
            </button>
            <button class="shop-btn" data-action="confirm-no">
              Cancel
            </button>
          </div>
        </div>
      </div>
    `;
  }
  
  /**
   * Format stat name
   */
  _formatStat(stat) {
    const names = {
      damage: 'DMG',
      defense: 'DEF',
      health: 'HP',
      stamina: 'STA',
      critChance: 'CRIT%',
      critDamage: 'CRIT DMG',
      attackSpeed: 'ATK SPD',
    };
    return names[stat] || stat;
  }
  
  /**
   * Attach event listeners
   */
  _attachListeners() {
    // Tab buttons
    this.container.querySelectorAll('.shop-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeTab = btn.dataset.tab;
        this.selectedItem = null;
        this.render();
        if (this.audio) this.audio.play('menuMove', { volume: 0.3 });
      });
    });
    
    // Close button
    const closeBtn = this.container.querySelector('#shop-close-btn');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close());
    }
    
    // Overlay click to close
    this.overlay.addEventListener('click', () => this.close());
    
    // Item selection (buy)
    this.container.querySelectorAll('[data-action="select-buy"]').forEach(el => {
      el.addEventListener('click', () => {
        const itemId = el.dataset.itemId;
        const item = SHOP_ITEMS[itemId];
        if (item) {
          this.selectedItem = { id: itemId, ...item };
          this.render();
          if (this.audio) this.audio.play('menuMove', { volume: 0.2 });
        }
      });
    });
    
    // Item selection (sell)
    this.container.querySelectorAll('[data-action="select-sell"]').forEach(el => {
      el.addEventListener('click', () => {
        const itemId = el.dataset.itemId;
        const isEquipment = el.dataset.isEquipment === 'true';
        const sellable = this.getSellableItems();
        const item = sellable.find(i => i.id === itemId);
        if (item) {
          this.selectedItem = { ...item, isEquipment };
          this.render();
          if (this.audio) this.audio.play('menuMove', { volume: 0.2 });
        }
      });
    });
    
    // Confirm buy button
    this.container.querySelectorAll('[data-action="confirm-buy"]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.confirmMode = 'buy';
        this.render();
      });
    });
    
    // Confirm sell button
    this.container.querySelectorAll('[data-action="confirm-sell"]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.confirmMode = 'sell';
        this.render();
      });
    });
    
    // Confirm dialog buttons
    this.container.querySelectorAll('[data-action="confirm-yes"]').forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.confirmMode === 'buy') {
          this.buyItem(this.selectedItem.id);
        } else if (this.confirmMode === 'sell') {
          this.sellItem(this.selectedItem.id, this.selectedItem.isEquipment);
        }
      });
    });
    
    this.container.querySelectorAll('[data-action="confirm-no"]').forEach(btn => {
      btn.addEventListener('click', () => {
        this.confirmMode = null;
        this.render();
        if (this.audio) this.audio.play('menuBack', { volume: 0.3 });
      });
    });
    
    // Escape key to close
    this._escHandler = (e) => {
      if (e.code === 'Escape' && this.isOpen) {
        if (this.confirmMode) {
          this.confirmMode = null;
          this.render();
        } else {
          this.close();
        }
      }
    };
    document.addEventListener('keydown', this._escHandler);
  }
  
  /**
   * Check if shop is open
   */
  isShopOpen() {
    return this.isOpen;
  }
  
  /**
   * Cleanup
   */
  dispose() {
    if (this._escHandler) {
      document.removeEventListener('keydown', this._escHandler);
    }
    if (this.container) {
      this.container.remove();
    }
    if (this.overlay) {
      this.overlay.remove();
    }
  }
}
