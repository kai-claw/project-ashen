/**
 * SaveUI.js - Enhanced Save/Load UI System
 * Phase 26: Save System & Persistence (Worker 2)
 * 
 * Enhanced UI features:
 * - Save slot thumbnails from canvas screenshots
 * - Better slot display with visual hierarchy
 * - 'Game Saved!' toast with animations
 * - Quick save/load indicators (F5/F9)
 * - Statistics page (kills, quests, playtime, deaths)
 * - Export/Import with progress feedback
 * - Keyboard navigation in save/load menus
 * - Sound effect hooks for save actions
 * - Autosave slot distinction (green badge)
 * - New Game warning when saves exist
 * - Smooth fade transition on load
 */

import { getSaveManager, formatPlaytime, formatTimestamp, AUTOSAVE_SLOT, MAX_MANUAL_SLOTS } from './SaveManager.js';
import { SAVE_SLOT_TYPE } from './SaveDataSchema.js';

// ========== CONSTANTS ==========
const SCREENSHOT_WIDTH = 320;
const SCREENSHOT_HEIGHT = 180;
const THUMBNAIL_WIDTH = 160;
const THUMBNAIL_HEIGHT = 90;
const TOAST_DURATION = 2000;
const FADE_DURATION = 500;

// ========== SAVE UI CLASS ==========
class SaveUI {
  constructor() {
    this.saveManager = null;
    this.renderer = null;
    this.scene = null;
    this.camera = null;
    
    // Screenshot storage (slot -> dataURL)
    this.screenshots = {};
    
    // UI elements
    this.toastContainer = null;
    this.fadeOverlay = null;
    this.statisticsPanel = null;
    
    // Keyboard navigation
    this.focusedSlotIndex = 0;
    this.isMenuActive = false;
    this.menuMode = null; // 'save' | 'load'
    
    // Statistics tracking
    this.statistics = {
      enemiesKilled: 0,
      bossesKilled: 0,
      questsCompleted: 0,
      deathCount: 0,
      distanceTraveled: 0,
      goldEarned: 0,
      goldSpent: 0,
      itemsCrafted: 0,
      resourcesGathered: 0,
      criticalHits: 0,
      perfectParries: 0,
    };
    
    // Audio hooks (will be connected to AudioManager)
    this.sounds = {
      save: null,
      load: null,
      menuOpen: null,
      menuClose: null,
      select: null,
      error: null,
    };
    
    console.log('[SaveUI] Created');
  }
  
  // ========== INITIALIZATION ==========
  
  /**
   * Initialize with renderer and scene for screenshots
   */
  init(saveManager, renderer, scene, camera, audioManager = null) {
    this.saveManager = saveManager;
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
    
    // Connect audio hooks
    if (audioManager) {
      this.sounds.save = () => audioManager.playSound?.('save', { volume: 0.6 });
      this.sounds.load = () => audioManager.playSound?.('load', { volume: 0.6 });
      this.sounds.menuOpen = () => audioManager.playSound?.('menu_open', { volume: 0.4 });
      this.sounds.menuClose = () => audioManager.playSound?.('menu_close', { volume: 0.4 });
      this.sounds.select = () => audioManager.playSound?.('menu_select', { volume: 0.3 });
      this.sounds.error = () => audioManager.playSound?.('error', { volume: 0.5 });
    }
    
    // Load saved screenshots from localStorage
    this.loadScreenshots();
    
    // Create UI elements
    this.createToastContainer();
    this.createFadeOverlay();
    this.createStatisticsPanel();
    this.injectEnhancedStyles();
    
    // Hook into save manager events
    this.hookSaveEvents();
    
    console.log('[SaveUI] Initialized');
  }
  
  // ========== SCREENSHOT CAPTURE ==========
  
  /**
   * Capture current game view as screenshot
   */
  captureScreenshot() {
    if (!this.renderer || !this.scene || !this.camera) {
      console.warn('[SaveUI] Cannot capture screenshot - renderer not available');
      return null;
    }
    
    try {
      // Store current size
      const originalSize = this.renderer.getSize(new THREE.Vector2());
      
      // Create offscreen canvas for screenshot
      const screenshotCanvas = document.createElement('canvas');
      screenshotCanvas.width = SCREENSHOT_WIDTH;
      screenshotCanvas.height = SCREENSHOT_HEIGHT;
      
      // Render to main canvas first (ensures current frame)
      this.renderer.render(this.scene, this.camera);
      
      // Copy from WebGL canvas to screenshot canvas
      const ctx = screenshotCanvas.getContext('2d');
      ctx.drawImage(
        this.renderer.domElement,
        0, 0, originalSize.x, originalSize.y,
        0, 0, SCREENSHOT_WIDTH, SCREENSHOT_HEIGHT
      );
      
      // Convert to data URL
      const dataURL = screenshotCanvas.toDataURL('image/jpeg', 0.7);
      
      return dataURL;
    } catch (error) {
      console.error('[SaveUI] Screenshot capture failed:', error);
      return null;
    }
  }
  
  /**
   * Save screenshot for a slot
   */
  saveScreenshot(slotId) {
    const screenshot = this.captureScreenshot();
    if (screenshot) {
      this.screenshots[slotId] = screenshot;
      this.persistScreenshots();
    }
    return screenshot;
  }
  
  /**
   * Load screenshots from localStorage
   */
  loadScreenshots() {
    try {
      const saved = localStorage.getItem('ashen_save_screenshots');
      if (saved) {
        this.screenshots = JSON.parse(saved);
      }
    } catch (e) {
      console.warn('[SaveUI] Failed to load screenshots:', e);
      this.screenshots = {};
    }
  }
  
  /**
   * Persist screenshots to localStorage
   */
  persistScreenshots() {
    try {
      localStorage.setItem('ashen_save_screenshots', JSON.stringify(this.screenshots));
    } catch (e) {
      // Might fail if too large - just log and continue
      console.warn('[SaveUI] Failed to persist screenshots (storage full?):', e);
    }
  }
  
  /**
   * Get screenshot for slot
   */
  getScreenshot(slotId) {
    return this.screenshots[slotId] || null;
  }
  
  /**
   * Delete screenshot for slot
   */
  deleteScreenshot(slotId) {
    delete this.screenshots[slotId];
    this.persistScreenshots();
  }
  
  // ========== TOAST NOTIFICATIONS ==========
  
  /**
   * Create toast container
   */
  createToastContainer() {
    if (document.getElementById('save-toast-container')) {
      this.toastContainer = document.getElementById('save-toast-container');
      return;
    }
    
    this.toastContainer = document.createElement('div');
    this.toastContainer.id = 'save-toast-container';
    document.body.appendChild(this.toastContainer);
  }
  
  /**
   * Show save success toast
   */
  showSaveToast(slotLabel, isAutosave = false) {
    const message = isAutosave ? 'Autosaved' : `Saved to ${slotLabel}`;
    this.showToast(message, 'success', '💾');
    this.sounds.save?.();
  }
  
  /**
   * Show load success toast
   */
  showLoadToast(slotLabel) {
    this.showToast(`Loaded ${slotLabel}`, 'success', '📂');
    this.sounds.load?.();
  }
  
  /**
   * Show error toast
   */
  showErrorToast(message) {
    this.showToast(message, 'error', '⚠️');
    this.sounds.error?.();
  }
  
  /**
   * Show generic toast notification
   */
  showToast(message, type = 'info', icon = 'ℹ️') {
    const toast = document.createElement('div');
    toast.className = `save-toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-message">${message}</span>
    `;
    
    this.toastContainer.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
      toast.classList.add('visible');
    });
    
    // Auto-remove
    setTimeout(() => {
      toast.classList.remove('visible');
      toast.classList.add('hiding');
      setTimeout(() => toast.remove(), 300);
    }, TOAST_DURATION);
  }
  
  // ========== FADE OVERLAY ==========
  
  /**
   * Create fade overlay for load transitions
   */
  createFadeOverlay() {
    if (document.getElementById('save-fade-overlay')) {
      this.fadeOverlay = document.getElementById('save-fade-overlay');
      return;
    }
    
    this.fadeOverlay = document.createElement('div');
    this.fadeOverlay.id = 'save-fade-overlay';
    document.body.appendChild(this.fadeOverlay);
  }
  
  /**
   * Fade to black (for load transition)
   */
  async fadeToBlack() {
    return new Promise(resolve => {
      this.fadeOverlay.classList.add('active');
      setTimeout(resolve, FADE_DURATION);
    });
  }
  
  /**
   * Fade from black
   */
  async fadeFromBlack() {
    return new Promise(resolve => {
      this.fadeOverlay.classList.remove('active');
      setTimeout(resolve, FADE_DURATION);
    });
  }
  
  /**
   * Perform fade transition around a callback
   */
  async fadeTransition(callback) {
    await this.fadeToBlack();
    await callback();
    await this.fadeFromBlack();
  }
  
  // ========== STATISTICS PANEL ==========
  
  /**
   * Create statistics panel
   */
  createStatisticsPanel() {
    if (document.getElementById('statistics-panel')) {
      this.statisticsPanel = document.getElementById('statistics-panel');
      return;
    }
    
    this.statisticsPanel = document.createElement('div');
    this.statisticsPanel.id = 'statistics-panel';
    this.statisticsPanel.innerHTML = `
      <div class="stats-content">
        <h2>📊 STATISTICS</h2>
        <div class="stats-grid" id="stats-grid"></div>
        <button class="menu-btn secondary stats-close-btn">Close</button>
      </div>
    `;
    
    document.body.appendChild(this.statisticsPanel);
    
    // Close button
    this.statisticsPanel.querySelector('.stats-close-btn').onclick = () => {
      this.hideStatistics();
    };
  }
  
  /**
   * Show statistics panel
   */
  showStatistics() {
    this.updateStatisticsDisplay();
    this.statisticsPanel.classList.add('active');
    this.sounds.menuOpen?.();
  }
  
  /**
   * Hide statistics panel
   */
  hideStatistics() {
    this.statisticsPanel.classList.remove('active');
    this.sounds.menuClose?.();
  }
  
  /**
   * Update statistics display
   */
  updateStatisticsDisplay() {
    const grid = document.getElementById('stats-grid');
    if (!grid) return;
    
    // Gather stats from save manager and game systems
    this.gatherStatistics();
    
    const playtime = this.saveManager?.getCurrentPlaytime() || 0;
    
    grid.innerHTML = `
      <div class="stat-item">
        <span class="stat-label">⏱️ Total Playtime</span>
        <span class="stat-value">${formatPlaytime(playtime)}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">💀 Enemies Killed</span>
        <span class="stat-value">${this.statistics.enemiesKilled.toLocaleString()}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">👑 Bosses Defeated</span>
        <span class="stat-value">${this.statistics.bossesKilled}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">📜 Quests Completed</span>
        <span class="stat-value">${this.statistics.questsCompleted}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">☠️ Deaths</span>
        <span class="stat-value">${this.statistics.deathCount}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">🚶 Distance Traveled</span>
        <span class="stat-value">${Math.floor(this.statistics.distanceTraveled).toLocaleString()}m</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">💰 Gold Earned</span>
        <span class="stat-value">${this.statistics.goldEarned.toLocaleString()}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">🛒 Gold Spent</span>
        <span class="stat-value">${this.statistics.goldSpent.toLocaleString()}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">⚒️ Items Crafted</span>
        <span class="stat-value">${this.statistics.itemsCrafted}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">🌿 Resources Gathered</span>
        <span class="stat-value">${this.statistics.resourcesGathered}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">💥 Critical Hits</span>
        <span class="stat-value">${this.statistics.criticalHits}</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">🛡️ Perfect Parries</span>
        <span class="stat-value">${this.statistics.perfectParries}</span>
      </div>
    `;
  }
  
  /**
   * Gather statistics from game systems
   */
  gatherStatistics() {
    // Get from save manager's systems if available
    const systems = this.saveManager?.systems || {};
    
    // Enemy kills
    if (systems.gameManager?.killCounts) {
      this.statistics.enemiesKilled = Object.values(systems.gameManager.killCounts)
        .reduce((a, b) => a + b, 0);
    }
    
    // Boss kills
    if (systems.bossSpawner?.defeatedBosses) {
      this.statistics.bossesKilled = systems.bossSpawner.defeatedBosses.size || 0;
    }
    
    // Quests
    if (systems.questManager?.completedQuests) {
      this.statistics.questsCompleted = systems.questManager.completedQuests.size || 0;
    }
    
    // Deaths
    if (systems.gameManager?.deathCount !== undefined) {
      this.statistics.deathCount = systems.gameManager.deathCount;
    }
    
    // Gold
    if (systems.shopManager) {
      this.statistics.goldSpent = systems.shopManager.totalGoldSpent || 0;
    }
    
    // Crafting
    if (systems.craftingManager?.stats?.totalCrafted !== undefined) {
      this.statistics.itemsCrafted = systems.craftingManager.stats.totalCrafted;
    }
    
    // Gathering
    if (systems.gatheringManager?.stats?.totalGathered !== undefined) {
      this.statistics.resourcesGathered = systems.gatheringManager.stats.totalGathered;
    }
  }
  
  /**
   * Update distance traveled (call from game loop)
   */
  addDistance(distance) {
    this.statistics.distanceTraveled += distance;
  }
  
  /**
   * Increment stat counter
   */
  incrementStat(statName, amount = 1) {
    if (this.statistics[statName] !== undefined) {
      this.statistics[statName] += amount;
    }
  }
  
  // ========== ENHANCED SLOT RENDERING ==========
  
  /**
   * Render enhanced save slot HTML
   */
  renderSlot(slot, mode = 'load') {
    const screenshot = this.getScreenshot(slot.slotId);
    const isAutosave = slot.slotType === SAVE_SLOT_TYPE.AUTOSAVE || slot.slotType === 'autosave';
    
    const div = document.createElement('div');
    div.className = `save-slot enhanced ${slot.isEmpty ? 'empty' : ''} ${isAutosave ? 'autosave' : ''}`;
    div.dataset.slotId = slot.slotId;
    div.tabIndex = 0; // For keyboard navigation
    
    if (slot.isEmpty) {
      div.innerHTML = `
        <div class="slot-thumbnail empty-thumb">
          <span class="empty-icon">📁</span>
        </div>
        <div class="slot-info">
          <div class="slot-name">${slot.label}</div>
          <div class="slot-details">Empty Slot</div>
        </div>
        ${mode === 'save' ? `
          <div class="slot-actions">
            <button class="slot-btn save-btn primary">Save Here</button>
          </div>
        ` : ''}
      `;
    } else {
      const meta = slot.metadata;
      const playtimeStr = formatPlaytime(meta.playtime || 0);
      const timestampStr = formatTimestamp(meta.timestamp);
      
      div.innerHTML = `
        <div class="slot-thumbnail">
          ${screenshot ? 
            `<img src="${screenshot}" alt="Screenshot" />` : 
            `<div class="no-thumb">🎮</div>`
          }
          ${isAutosave ? '<span class="autosave-badge">AUTO</span>' : ''}
        </div>
        <div class="slot-info">
          <div class="slot-name">${slot.label}</div>
          <div class="slot-level">Level ${meta.playerLevel} ${meta.playerName || ''}</div>
          <div class="slot-location">📍 ${meta.locationName || 'Unknown'}</div>
          <div class="slot-details">
            <span class="playtime">⏱️ ${playtimeStr}</span>
            <span class="timestamp">📅 ${timestampStr}</span>
          </div>
          <div class="slot-progress">
            <span>⚔️ ${meta.bossesDefeated || 0} Bosses</span>
            <span>📜 ${meta.questsCompleted || 0} Quests</span>
          </div>
        </div>
        <div class="slot-actions">
          ${mode === 'load' ? `
            <button class="slot-btn load-btn primary">Load</button>
            <button class="slot-btn delete-btn danger">🗑️</button>
            <button class="slot-btn export-btn">📤</button>
          ` : `
            <button class="slot-btn save-btn primary">Overwrite</button>
          `}
        </div>
      `;
    }
    
    return div;
  }
  
  /**
   * Populate slots in a container with enhanced rendering
   */
  populateSlots(containerId, mode = 'load', options = {}) {
    const container = document.getElementById(containerId);
    if (!container || !this.saveManager) return;
    
    const slots = this.saveManager.listSaves();
    container.innerHTML = '';
    
    // Filter slots based on mode
    let filteredSlots = slots;
    if (mode === 'save' && !options.includeAutosave) {
      // Don't show autosave slot for manual saves
      filteredSlots = slots.filter(s => s.slotType !== 'autosave' && s.slotType !== SAVE_SLOT_TYPE.AUTOSAVE);
    }
    
    // Sort by timestamp (most recent first) for load, by slot ID for save
    if (mode === 'load' && options.sortByRecent) {
      filteredSlots.sort((a, b) => {
        const timeA = a.metadata?.timestamp || 0;
        const timeB = b.metadata?.timestamp || 0;
        return timeB - timeA;
      });
    }
    
    filteredSlots.forEach((slot, index) => {
      const slotEl = this.renderSlot(slot, mode);
      
      // Add event listeners
      this.attachSlotListeners(slotEl, slot, mode, options);
      
      container.appendChild(slotEl);
    });
    
    // Setup keyboard navigation
    this.setupKeyboardNav(container);
  }
  
  /**
   * Attach listeners to slot element
   */
  attachSlotListeners(slotEl, slot, mode, options) {
    // Load button
    const loadBtn = slotEl.querySelector('.load-btn');
    if (loadBtn) {
      loadBtn.onclick = async (e) => {
        e.stopPropagation();
        this.sounds.select?.();
        if (options.onLoad) {
          await options.onLoad(slot.slotId);
        }
      };
    }
    
    // Save button
    const saveBtn = slotEl.querySelector('.save-btn');
    if (saveBtn) {
      saveBtn.onclick = async (e) => {
        e.stopPropagation();
        this.sounds.select?.();
        
        // Capture screenshot before saving
        this.saveScreenshot(slot.slotId);
        
        if (options.onSave) {
          await options.onSave(slot.slotId, !slot.isEmpty);
        }
      };
    }
    
    // Delete button
    const deleteBtn = slotEl.querySelector('.delete-btn');
    if (deleteBtn) {
      deleteBtn.onclick = (e) => {
        e.stopPropagation();
        this.sounds.select?.();
        if (options.onDelete) {
          options.onDelete(slot.slotId, slot.label);
        }
      };
    }
    
    // Export button
    const exportBtn = slotEl.querySelector('.export-btn');
    if (exportBtn) {
      exportBtn.onclick = (e) => {
        e.stopPropagation();
        this.sounds.select?.();
        this.saveManager.exportSave(slot.slotId);
        this.showToast('Save exported', 'success', '📤');
      };
    }
    
    // Slot click (for selection)
    slotEl.onclick = () => {
      this.sounds.select?.();
      this.selectSlot(slotEl);
    };
  }
  
  /**
   * Select a slot visually
   */
  selectSlot(slotEl) {
    const container = slotEl.parentElement;
    container.querySelectorAll('.save-slot').forEach(s => s.classList.remove('selected'));
    slotEl.classList.add('selected');
    slotEl.focus();
  }
  
  // ========== KEYBOARD NAVIGATION ==========
  
  /**
   * Setup keyboard navigation for slot container
   */
  setupKeyboardNav(container) {
    container.addEventListener('keydown', (e) => {
      const slots = container.querySelectorAll('.save-slot');
      const current = container.querySelector('.save-slot.selected, .save-slot:focus');
      const currentIndex = Array.from(slots).indexOf(current);
      
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowLeft':
          e.preventDefault();
          if (currentIndex > 0) {
            this.selectSlot(slots[currentIndex - 1]);
          }
          break;
          
        case 'ArrowDown':
        case 'ArrowRight':
          e.preventDefault();
          if (currentIndex < slots.length - 1) {
            this.selectSlot(slots[currentIndex + 1]);
          }
          break;
          
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (current) {
            const primaryBtn = current.querySelector('.primary');
            if (primaryBtn) primaryBtn.click();
          }
          break;
          
        case 'Delete':
        case 'Backspace':
          e.preventDefault();
          if (current) {
            const deleteBtn = current.querySelector('.delete-btn');
            if (deleteBtn) deleteBtn.click();
          }
          break;
      }
    });
  }
  
  // ========== EVENT HOOKS ==========
  
  /**
   * Hook into save manager events
   */
  hookSaveEvents() {
    if (!this.saveManager) return;
    
    // On save complete - capture screenshot and show toast
    this.saveManager.on('onSaveComplete', ({ slotId, isAutosave }) => {
      const slots = this.saveManager.listSaves();
      const slot = slots.find(s => s.slotId === slotId);
      const label = slot?.label || `Slot ${slotId}`;
      
      // Screenshot already captured in save flow
      this.showSaveToast(label, isAutosave);
    });
    
    // On save error
    this.saveManager.on('onSaveError', ({ error }) => {
      this.showErrorToast(`Save failed: ${error}`);
    });
    
    // On load complete - fade transition
    this.saveManager.on('onLoadComplete', ({ slotId }) => {
      const slots = this.saveManager.listSaves();
      const slot = slots.find(s => s.slotId === slotId);
      const label = slot?.label || `Slot ${slotId}`;
      
      // Toast after fade
      setTimeout(() => {
        this.showLoadToast(label);
      }, FADE_DURATION);
    });
    
    // On load error
    this.saveManager.on('onLoadError', ({ error }) => {
      this.showErrorToast(`Load failed: ${error}`);
    });
    
    // On autosave trigger
    this.saveManager.on('onAutosaveTrigger', ({ reason }) => {
      // Capture screenshot for autosave slot
      this.saveScreenshot(AUTOSAVE_SLOT);
    });
  }
  
  /**
   * Perform load with fade transition
   */
  async loadWithFade(slotId) {
    await this.fadeToBlack();
    const result = await this.saveManager.load(slotId);
    if (result.success) {
      await this.fadeFromBlack();
    } else {
      this.fadeOverlay.classList.remove('active');
    }
    return result;
  }
  
  // ========== ENHANCED STYLES ==========
  
  /**
   * Inject enhanced CSS styles
   */
  injectEnhancedStyles() {
    if (document.getElementById('save-ui-enhanced-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'save-ui-enhanced-styles';
    style.textContent = `
      /* Toast Container */
      #save-toast-container {
        position: fixed;
        top: 80px;
        right: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 10001;
        pointer-events: none;
      }
      
      .save-toast {
        background: rgba(20, 20, 30, 0.95);
        border: 1px solid rgba(200, 170, 100, 0.5);
        border-radius: 6px;
        padding: 12px 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        color: #ddd;
        font-family: 'Cinzel', Georgia, serif;
        font-size: 14px;
        transform: translateX(120%);
        transition: transform 0.3s ease, opacity 0.3s ease;
        pointer-events: auto;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
      }
      
      .save-toast.visible {
        transform: translateX(0);
      }
      
      .save-toast.hiding {
        opacity: 0;
        transform: translateX(50px);
      }
      
      .save-toast.success {
        border-color: rgba(100, 200, 100, 0.6);
      }
      
      .save-toast.error {
        border-color: rgba(200, 80, 80, 0.6);
        background: rgba(40, 20, 20, 0.95);
      }
      
      .toast-icon {
        font-size: 20px;
      }
      
      /* Fade Overlay */
      #save-fade-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        opacity: 0;
        pointer-events: none;
        transition: opacity ${FADE_DURATION}ms ease;
        z-index: 9998;
      }
      
      #save-fade-overlay.active {
        opacity: 1;
        pointer-events: auto;
      }
      
      /* Enhanced Slot Styles */
      .save-slot.enhanced {
        display: flex;
        gap: 16px;
        padding: 14px;
        background: rgba(25, 25, 35, 0.9);
        border: 1px solid rgba(100, 100, 120, 0.3);
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      
      .save-slot.enhanced:hover,
      .save-slot.enhanced.selected {
        background: rgba(35, 35, 50, 0.95);
        border-color: rgba(200, 170, 100, 0.5);
        transform: translateX(4px);
      }
      
      .save-slot.enhanced:focus {
        outline: none;
        border-color: rgba(200, 170, 100, 0.7);
        box-shadow: 0 0 10px rgba(200, 170, 100, 0.2);
      }
      
      .save-slot.enhanced.autosave {
        border-left: 3px solid rgba(100, 180, 100, 0.6);
      }
      
      .save-slot.enhanced.empty {
        opacity: 0.7;
      }
      
      /* Slot Thumbnail */
      .slot-thumbnail {
        width: ${THUMBNAIL_WIDTH}px;
        height: ${THUMBNAIL_HEIGHT}px;
        background: rgba(10, 10, 15, 0.9);
        border-radius: 4px;
        overflow: hidden;
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      
      .slot-thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      
      .slot-thumbnail .no-thumb,
      .slot-thumbnail .empty-icon {
        font-size: 32px;
        opacity: 0.4;
      }
      
      .autosave-badge {
        position: absolute;
        top: 4px;
        left: 4px;
        background: rgba(60, 140, 60, 0.9);
        color: #fff;
        font-size: 10px;
        padding: 2px 6px;
        border-radius: 3px;
        font-weight: bold;
        letter-spacing: 1px;
      }
      
      /* Slot Info */
      .save-slot.enhanced .slot-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 4px;
        min-width: 0;
      }
      
      .save-slot.enhanced .slot-name {
        font-size: 16px;
        color: #c8a55a;
        font-weight: 600;
      }
      
      .save-slot.enhanced .slot-level {
        font-size: 14px;
        color: #ddd;
      }
      
      .save-slot.enhanced .slot-location {
        font-size: 12px;
        color: #aaa;
      }
      
      .save-slot.enhanced .slot-details {
        display: flex;
        gap: 16px;
        font-size: 11px;
        color: #888;
      }
      
      .save-slot.enhanced .slot-progress {
        display: flex;
        gap: 12px;
        font-size: 11px;
        color: #999;
        margin-top: 4px;
      }
      
      /* Slot Actions */
      .save-slot.enhanced .slot-actions {
        display: flex;
        flex-direction: column;
        gap: 6px;
        align-self: center;
      }
      
      .save-slot.enhanced .slot-btn {
        padding: 6px 12px;
        font-size: 12px;
        min-width: 80px;
      }
      
      .save-slot.enhanced .slot-btn.primary {
        background: linear-gradient(145deg, rgba(80, 65, 45, 0.9), rgba(60, 50, 35, 0.95));
        border-color: rgba(200, 170, 100, 0.5);
      }
      
      .save-slot.enhanced .slot-btn.primary:hover {
        background: linear-gradient(145deg, rgba(100, 80, 55, 0.9), rgba(80, 65, 45, 0.95));
        border-color: rgba(200, 170, 100, 0.7);
      }
      
      .save-slot.enhanced .slot-btn.danger {
        background: rgba(60, 30, 30, 0.8);
        border-color: rgba(180, 60, 60, 0.4);
        padding: 6px 8px;
        min-width: auto;
      }
      
      /* Statistics Panel */
      #statistics-panel {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 9999;
      }
      
      #statistics-panel.active {
        display: flex;
      }
      
      .stats-content {
        background: linear-gradient(145deg, rgba(25, 25, 35, 0.98), rgba(15, 15, 20, 0.99));
        border: 2px solid rgba(200, 170, 100, 0.4);
        border-radius: 8px;
        padding: 30px 40px;
        min-width: 500px;
        max-width: 700px;
        animation: statsSlideIn 0.3s ease;
      }
      
      @keyframes statsSlideIn {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      
      .stats-content h2 {
        color: #c8a55a;
        font-family: 'Cinzel', Georgia, serif;
        font-size: 24px;
        margin-bottom: 24px;
        text-align: center;
        letter-spacing: 3px;
      }
      
      .stats-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
        margin-bottom: 24px;
      }
      
      .stat-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 14px;
        background: rgba(30, 30, 40, 0.6);
        border: 1px solid rgba(100, 100, 120, 0.2);
        border-radius: 4px;
      }
      
      .stat-label {
        color: #aaa;
        font-family: 'Cinzel', Georgia, serif;
        font-size: 12px;
      }
      
      .stat-value {
        color: #ddd;
        font-family: 'Cinzel', Georgia, serif;
        font-size: 14px;
        font-weight: 600;
      }
      
      .stats-close-btn {
        display: block;
        margin: 0 auto;
      }
    `;
    
    document.head.appendChild(style);
  }
  
  // ========== CLEANUP ==========
  
  /**
   * Cleanup resources
   */
  dispose() {
    this.toastContainer?.remove();
    this.fadeOverlay?.remove();
    this.statisticsPanel?.remove();
    document.getElementById('save-ui-enhanced-styles')?.remove();
    
    this.screenshots = {};
    console.log('[SaveUI] Disposed');
  }
}

// ========== SINGLETON ==========
let saveUIInstance = null;

export function getSaveUI() {
  if (!saveUIInstance) {
    saveUIInstance = new SaveUI();
  }
  return saveUIInstance;
}

export function createSaveUI() {
  saveUIInstance = new SaveUI();
  return saveUIInstance;
}

// THREE.js import for Vector2
import * as THREE from 'three';

export { SaveUI, SCREENSHOT_WIDTH, SCREENSHOT_HEIGHT };
export default SaveUI;
