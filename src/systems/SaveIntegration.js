/**
 * SaveIntegration.js - Save System UI & Game Flow Integration
 * Phase 26: Save System & Persistence
 * 
 * Integrates save system with game flow:
 * - Autosave triggers (village entry, quest complete, timer)
 * - Main menu: Continue, New Game, Load Game
 * - Pause menu: Save, Load, Return to Main Menu
 * - Death screen: Load Last Save option
 * - 'Saving...' indicator (non-blocking)
 * - Combat/cutscene save blocking
 * - Tutorial first save prompt
 * - Cloud save placeholder structure
 */

import { getSaveManager, formatPlaytime, formatTimestamp, AUTOSAVE_SLOT, MAX_MANUAL_SLOTS } from './SaveManager.js';
import { SAVE_SLOT_TYPE, createDefaultSaveData } from './SaveDataSchema.js';
import { getSaveUI } from './SaveUI.js';

// ========== CONSTANTS ==========
const VILLAGE_AREA_RADIUS = 50; // Units from village center
const VILLAGE_CENTER = { x: 0, y: 0, z: 5 };
const TUTORIAL_FIRST_SAVE_SHOWN_KEY = 'ashen_tutorial_save_shown';

// ========== SAVE INTEGRATION CLASS ==========
class SaveIntegration {
  constructor() {
    this.saveManager = null;
    this.saveUI = null;
    this.systems = {};
    
    // State tracking
    this.isInVillage = false;
    this.wasInVillage = false;
    this.isInCombat = false;
    this.isInCutscene = false;
    this.isInDialogue = false;
    this.tutorialSaveShown = false;
    
    // UI elements
    this.saveIndicator = null;
    this.mainMenuOverlay = null;
    this.pauseMenuOverlay = null;
    this.loadMenuOverlay = null;
    this.saveMenuOverlay = null;
    this.confirmOverlay = null;
    
    // Game state
    this.isPaused = false;
    this.gameStarted = false;
    
    console.log('[SaveIntegration] Created');
  }
  
  // ========== INITIALIZATION ==========
  
  /**
   * Initialize with save manager and game systems
   */
  init(saveManager, systems) {
    this.saveManager = saveManager;
    this.systems = systems;
    
    // Initialize SaveUI for enhanced features
    this.saveUI = getSaveUI();
    if (systems.renderer && systems.scene && systems.camera) {
      this.saveUI.init(
        saveManager,
        systems.renderer,
        systems.scene,
        systems.camera,
        systems.audioManager
      );
    }
    
    // Check tutorial state
    this.tutorialSaveShown = localStorage.getItem(TUTORIAL_FIRST_SAVE_SHOWN_KEY) === 'true';
    
    // Create UI elements
    this.createSaveIndicator();
    this.createMainMenu();
    this.createPauseMenu();
    this.createLoadMenu();
    this.createSaveMenu();
    this.createConfirmDialog();
    
    // Hook into save manager events
    this.hookSaveEvents();
    
    // Hook into game systems
    this.hookGameSystems();
    
    // Setup keyboard shortcuts
    this.setupKeyboardShortcuts();
    
    // Show main menu if no active game
    if (!this.gameStarted) {
      this.showMainMenu();
    }
    
    console.log('[SaveIntegration] Initialized');
  }
  
  // ========== UI CREATION ==========
  
  /**
   * Create 'Saving...' indicator
   */
  createSaveIndicator() {
    if (document.getElementById('save-indicator')) {
      this.saveIndicator = document.getElementById('save-indicator');
      return;
    }
    
    this.saveIndicator = document.createElement('div');
    this.saveIndicator.id = 'save-indicator';
    this.saveIndicator.innerHTML = `
      <div class="save-icon">💾</div>
      <span>Saving...</span>
    `;
    
    const style = document.createElement('style');
    style.textContent = `
      #save-indicator {
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.85);
        border: 1px solid rgba(200, 170, 100, 0.4);
        border-radius: 4px;
        padding: 10px 16px;
        color: #c8a55a;
        font-family: 'Cinzel', Georgia, serif;
        font-size: 14px;
        display: none;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: saveSlideIn 0.3s ease;
      }
      
      #save-indicator.active {
        display: flex;
      }
      
      #save-indicator .save-icon {
        animation: savePulse 1s infinite;
      }
      
      @keyframes saveSlideIn {
        from { transform: translateX(100px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      
      @keyframes savePulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.6; transform: scale(1.1); }
      }
    `;
    
    document.head.appendChild(style);
    document.body.appendChild(this.saveIndicator);
  }
  
  /**
   * Create main menu overlay
   */
  createMainMenu() {
    if (document.getElementById('main-menu-overlay')) {
      this.mainMenuOverlay = document.getElementById('main-menu-overlay');
      return;
    }
    
    this.mainMenuOverlay = document.createElement('div');
    this.mainMenuOverlay.id = 'main-menu-overlay';
    this.mainMenuOverlay.innerHTML = `
      <div class="menu-content">
        <h1 class="game-title">PROJECT ASHEN</h1>
        <div class="menu-subtitle">A Souls-Like Adventure</div>
        <div class="menu-buttons">
          <button class="menu-btn" id="btn-continue" style="display:none">Continue</button>
          <button class="menu-btn" id="btn-new-game">New Game</button>
          <button class="menu-btn" id="btn-load-game">Load Game</button>
          <button class="menu-btn secondary" id="btn-settings">Settings</button>
        </div>
        <div class="menu-footer">Phase 26 Build · Save System</div>
      </div>
    `;
    
    this.addMenuStyles();
    document.body.appendChild(this.mainMenuOverlay);
    
    // Event handlers
    document.getElementById('btn-continue').onclick = () => this.handleContinue();
    document.getElementById('btn-new-game').onclick = () => this.handleNewGame();
    document.getElementById('btn-load-game').onclick = () => this.showLoadMenu();
    document.getElementById('btn-settings').onclick = () => this.showSettings();
  }
  
  /**
   * Create pause menu overlay
   */
  createPauseMenu() {
    if (document.getElementById('pause-menu-overlay')) {
      this.pauseMenuOverlay = document.getElementById('pause-menu-overlay');
      return;
    }
    
    this.pauseMenuOverlay = document.createElement('div');
    this.pauseMenuOverlay.id = 'pause-menu-overlay';
    this.pauseMenuOverlay.innerHTML = `
      <div class="menu-content pause-menu">
        <h2>PAUSED</h2>
        <div class="menu-buttons">
          <button class="menu-btn" id="btn-resume">Resume</button>
          <button class="menu-btn" id="btn-save-game">Save Game</button>
          <button class="menu-btn" id="btn-load-pause">Load Game</button>
          <button class="menu-btn secondary" id="btn-settings-pause">Settings</button>
          <button class="menu-btn danger" id="btn-main-menu">Return to Main Menu</button>
        </div>
        <div class="pause-info">
          <span id="pause-playtime">Playtime: 00:00</span>
        </div>
      </div>
    `;
    
    document.body.appendChild(this.pauseMenuOverlay);
    
    // Event handlers
    document.getElementById('btn-resume').onclick = () => this.resumeGame();
    document.getElementById('btn-save-game').onclick = () => this.showSaveMenu();
    document.getElementById('btn-load-pause').onclick = () => this.showLoadMenu();
    document.getElementById('btn-settings-pause').onclick = () => this.showSettings();
    document.getElementById('btn-main-menu').onclick = () => this.confirmReturnToMainMenu();
  }
  
  /**
   * Create load menu overlay
   */
  createLoadMenu() {
    if (document.getElementById('load-menu-overlay')) {
      this.loadMenuOverlay = document.getElementById('load-menu-overlay');
      return;
    }
    
    this.loadMenuOverlay = document.createElement('div');
    this.loadMenuOverlay.id = 'load-menu-overlay';
    this.loadMenuOverlay.innerHTML = `
      <div class="menu-content load-menu">
        <h2>LOAD GAME</h2>
        <div class="save-slots" id="load-slots"></div>
        <div class="menu-actions">
          <button class="menu-btn secondary" id="btn-import-save">Import Save</button>
          <button class="menu-btn secondary" id="btn-load-back">Back</button>
        </div>
      </div>
      <input type="file" id="import-file-input" accept=".json" style="display:none">
    `;
    
    document.body.appendChild(this.loadMenuOverlay);
    
    // Event handlers
    document.getElementById('btn-load-back').onclick = () => this.hideLoadMenu();
    document.getElementById('btn-import-save').onclick = () => {
      document.getElementById('import-file-input').click();
    };
    document.getElementById('import-file-input').onchange = (e) => this.handleImport(e);
  }
  
  /**
   * Create save menu overlay
   */
  createSaveMenu() {
    if (document.getElementById('save-menu-overlay')) {
      this.saveMenuOverlay = document.getElementById('save-menu-overlay');
      return;
    }
    
    this.saveMenuOverlay = document.createElement('div');
    this.saveMenuOverlay.id = 'save-menu-overlay';
    this.saveMenuOverlay.innerHTML = `
      <div class="menu-content save-menu">
        <h2>SAVE GAME</h2>
        <div class="save-slots" id="save-slots"></div>
        <div class="menu-actions">
          <button class="menu-btn secondary" id="btn-save-back">Back</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(this.saveMenuOverlay);
    
    // Event handlers
    document.getElementById('btn-save-back').onclick = () => this.hideSaveMenu();
  }
  
  /**
   * Create confirm dialog
   */
  createConfirmDialog() {
    if (document.getElementById('confirm-overlay')) {
      this.confirmOverlay = document.getElementById('confirm-overlay');
      return;
    }
    
    this.confirmOverlay = document.createElement('div');
    this.confirmOverlay.id = 'confirm-overlay';
    this.confirmOverlay.innerHTML = `
      <div class="confirm-dialog">
        <p id="confirm-message">Are you sure?</p>
        <div class="confirm-buttons">
          <button class="menu-btn danger" id="btn-confirm-yes">Yes</button>
          <button class="menu-btn secondary" id="btn-confirm-no">No</button>
        </div>
      </div>
    `;
    
    document.body.appendChild(this.confirmOverlay);
    
    document.getElementById('btn-confirm-no').onclick = () => this.hideConfirmDialog();
  }
  
  /**
   * Add shared menu styles
   */
  addMenuStyles() {
    if (document.getElementById('save-menu-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'save-menu-styles';
    style.textContent = `
      #main-menu-overlay,
      #pause-menu-overlay,
      #load-menu-overlay,
      #save-menu-overlay,
      #confirm-overlay {
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
        font-family: 'Cinzel', Georgia, serif;
      }
      
      #main-menu-overlay.active,
      #pause-menu-overlay.active,
      #load-menu-overlay.active,
      #save-menu-overlay.active,
      #confirm-overlay.active {
        display: flex;
      }
      
      .menu-content {
        background: linear-gradient(145deg, rgba(20, 20, 25, 0.98), rgba(10, 10, 15, 0.99));
        border: 2px solid rgba(200, 170, 100, 0.4);
        border-radius: 8px;
        padding: 40px 60px;
        text-align: center;
        min-width: 400px;
        max-width: 600px;
        animation: menuFadeIn 0.3s ease;
      }
      
      @keyframes menuFadeIn {
        from { opacity: 0; transform: scale(0.95); }
        to { opacity: 1; transform: scale(1); }
      }
      
      .game-title {
        font-size: 48px;
        color: #c8a55a;
        text-shadow: 0 0 20px rgba(200, 170, 100, 0.5);
        margin-bottom: 10px;
        letter-spacing: 8px;
      }
      
      .menu-subtitle {
        color: #888;
        font-size: 14px;
        margin-bottom: 40px;
        letter-spacing: 2px;
      }
      
      .menu-content h2 {
        color: #c8a55a;
        font-size: 28px;
        margin-bottom: 30px;
        letter-spacing: 4px;
      }
      
      .menu-buttons {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      
      .menu-btn {
        background: linear-gradient(145deg, rgba(60, 50, 35, 0.9), rgba(40, 35, 25, 0.95));
        border: 1px solid rgba(200, 170, 100, 0.4);
        color: #ddd;
        padding: 14px 40px;
        font-size: 16px;
        font-family: 'Cinzel', Georgia, serif;
        cursor: pointer;
        transition: all 0.2s;
        border-radius: 4px;
        letter-spacing: 2px;
      }
      
      .menu-btn:hover {
        background: linear-gradient(145deg, rgba(80, 65, 45, 0.9), rgba(60, 50, 35, 0.95));
        border-color: rgba(200, 170, 100, 0.7);
        transform: scale(1.02);
      }
      
      .menu-btn.secondary {
        background: rgba(40, 40, 50, 0.8);
        border-color: rgba(100, 100, 120, 0.4);
      }
      
      .menu-btn.secondary:hover {
        background: rgba(50, 50, 60, 0.9);
        border-color: rgba(100, 100, 120, 0.7);
      }
      
      .menu-btn.danger {
        border-color: rgba(180, 60, 60, 0.5);
        color: #e88;
      }
      
      .menu-btn.danger:hover {
        border-color: rgba(200, 80, 80, 0.7);
        background: linear-gradient(145deg, rgba(80, 40, 40, 0.9), rgba(60, 30, 30, 0.95));
      }
      
      .menu-footer {
        margin-top: 40px;
        color: #555;
        font-size: 12px;
      }
      
      .pause-info {
        margin-top: 20px;
        color: #888;
        font-size: 14px;
      }
      
      /* Save Slots */
      .save-slots {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-bottom: 20px;
        max-height: 400px;
        overflow-y: auto;
      }
      
      .save-slot {
        background: rgba(30, 30, 40, 0.8);
        border: 1px solid rgba(100, 100, 120, 0.3);
        border-radius: 4px;
        padding: 16px 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s;
      }
      
      .save-slot:hover {
        background: rgba(40, 40, 55, 0.9);
        border-color: rgba(200, 170, 100, 0.4);
      }
      
      .save-slot.empty {
        opacity: 0.6;
        cursor: default;
      }
      
      .save-slot.empty:hover {
        background: rgba(30, 30, 40, 0.8);
        border-color: rgba(100, 100, 120, 0.3);
      }
      
      .save-slot.autosave {
        border-color: rgba(100, 180, 100, 0.4);
      }
      
      .slot-info {
        text-align: left;
      }
      
      .slot-name {
        color: #ddd;
        font-size: 16px;
        margin-bottom: 4px;
      }
      
      .slot-details {
        color: #888;
        font-size: 12px;
      }
      
      .slot-actions {
        display: flex;
        gap: 8px;
      }
      
      .slot-btn {
        background: rgba(60, 50, 35, 0.8);
        border: 1px solid rgba(200, 170, 100, 0.3);
        color: #ccc;
        padding: 6px 14px;
        font-size: 12px;
        font-family: 'Cinzel', Georgia, serif;
        cursor: pointer;
        border-radius: 3px;
        transition: all 0.2s;
      }
      
      .slot-btn:hover {
        background: rgba(80, 65, 45, 0.9);
        border-color: rgba(200, 170, 100, 0.6);
      }
      
      .slot-btn.delete {
        border-color: rgba(180, 60, 60, 0.4);
        color: #c88;
      }
      
      .slot-btn.delete:hover {
        border-color: rgba(200, 80, 80, 0.7);
        background: rgba(80, 40, 40, 0.8);
      }
      
      .menu-actions {
        display: flex;
        gap: 12px;
        justify-content: center;
        margin-top: 20px;
      }
      
      /* Confirm Dialog */
      .confirm-dialog {
        background: rgba(25, 25, 35, 0.98);
        border: 2px solid rgba(200, 170, 100, 0.5);
        border-radius: 8px;
        padding: 30px 40px;
        text-align: center;
      }
      
      .confirm-dialog p {
        color: #ddd;
        font-size: 16px;
        margin-bottom: 24px;
      }
      
      .confirm-buttons {
        display: flex;
        gap: 16px;
        justify-content: center;
      }
      
      /* Death screen addition */
      #death-screen .load-save-btn {
        margin-top: 20px;
        background: linear-gradient(145deg, rgba(60, 50, 35, 0.9), rgba(40, 35, 25, 0.95));
        border: 1px solid rgba(200, 170, 100, 0.4);
        color: #ddd;
        padding: 12px 30px;
        font-size: 14px;
        font-family: 'Cinzel', Georgia, serif;
        cursor: pointer;
        border-radius: 4px;
        letter-spacing: 2px;
      }
      
      /* Tutorial prompt */
      .tutorial-save-prompt {
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(20, 20, 30, 0.95);
        border: 1px solid rgba(200, 170, 100, 0.5);
        border-radius: 6px;
        padding: 20px 30px;
        text-align: center;
        z-index: 5000;
        animation: promptSlideUp 0.4s ease;
      }
      
      @keyframes promptSlideUp {
        from { transform: translateX(-50%) translateY(100px); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
      }
      
      .tutorial-save-prompt p {
        color: #ddd;
        margin-bottom: 15px;
        font-family: 'Cinzel', Georgia, serif;
      }
      
      .tutorial-save-prompt .prompt-buttons {
        display: flex;
        gap: 12px;
        justify-content: center;
      }
    `;
    
    document.head.appendChild(style);
  }
  
  // ========== SAVE/LOAD EVENT HOOKS ==========
  
  /**
   * Hook into save manager events
   */
  hookSaveEvents() {
    if (!this.saveManager) return;
    
    // Show indicator on save start
    this.saveManager.on('onSaveStart', ({ isAutosave }) => {
      this.showSaveIndicator();
    });
    
    // Hide indicator on save complete
    this.saveManager.on('onSaveComplete', ({ slotId, isAutosave }) => {
      setTimeout(() => this.hideSaveIndicator(), 1000);
    });
    
    // Handle save errors
    this.saveManager.on('onSaveError', ({ error }) => {
      this.hideSaveIndicator();
      this.showNotification(`Save failed: ${error}`, 'error');
    });
    
    // Handle load complete
    this.saveManager.on('onLoadComplete', ({ slotId }) => {
      this.hideAllMenus();
      this.gameStarted = true;
      this.showNotification('Game loaded', 'success');
    });
    
    // Handle load errors
    this.saveManager.on('onLoadError', ({ error }) => {
      this.showNotification(`Load failed: ${error}`, 'error');
    });
  }
  
  /**
   * Hook into game systems for autosave triggers
   */
  hookGameSystems() {
    // Quest completion autosave
    if (this.systems.questManager) {
      this.systems.questManager.on?.('onQuestTurnedIn', () => {
        this.triggerAutosaveIfAllowed('Quest completed');
      });
    }
    
    // Combat state changes
    if (this.systems.gameManager) {
      // Would hook into combat start/end
    }
    
    // Dialogue state
    if (this.systems.dialogueManager) {
      // Would hook into dialogue start/end
    }
  }
  
  // ========== KEYBOARD SHORTCUTS ==========
  
  /**
   * Setup keyboard shortcuts
   */
  setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
      // Escape - toggle pause
      if (e.key === 'Escape') {
        if (this.loadMenuOverlay?.classList.contains('active')) {
          this.hideLoadMenu();
        } else if (this.saveMenuOverlay?.classList.contains('active')) {
          this.hideSaveMenu();
        } else if (this.confirmOverlay?.classList.contains('active')) {
          this.hideConfirmDialog();
        } else if (this.isPaused) {
          this.resumeGame();
        } else if (this.gameStarted && !this.mainMenuOverlay?.classList.contains('active')) {
          this.pauseGame();
        }
        e.preventDefault();
      }
      
      // F5 - Quick Save
      if (e.key === 'F5' && this.gameStarted && !this.isPaused) {
        this.quickSave();
        e.preventDefault();
      }
      
      // F9 - Quick Load
      if (e.key === 'F9' && this.gameStarted) {
        this.quickLoad();
        e.preventDefault();
      }
    });
  }
  
  // ========== POSITION-BASED AUTOSAVE ==========
  
  /**
   * Update player position and check for village autosave
   */
  updatePlayerPosition(position) {
    const distToVillage = Math.sqrt(
      Math.pow(position.x - VILLAGE_CENTER.x, 2) +
      Math.pow(position.z - VILLAGE_CENTER.z, 2)
    );
    
    this.isInVillage = distToVillage < VILLAGE_AREA_RADIUS;
    
    // Trigger autosave on village entry
    if (this.isInVillage && !this.wasInVillage) {
      this.triggerAutosaveIfAllowed('Entered village');
      
      // Show tutorial save prompt on first village visit
      if (!this.tutorialSaveShown) {
        this.showTutorialSavePrompt();
      }
    }
    
    this.wasInVillage = this.isInVillage;
  }
  
  /**
   * Trigger autosave if conditions allow
   */
  triggerAutosaveIfAllowed(reason) {
    if (this.isInCombat || this.isInCutscene || this.isInDialogue) {
      console.log(`[SaveIntegration] Autosave blocked (${reason}): combat/cutscene/dialogue active`);
      return;
    }
    
    if (this.saveManager?.canSave()) {
      this.saveManager.triggerAutosave(reason);
    }
  }
  
  // ========== COMBAT/CUTSCENE BLOCKING ==========
  
  /**
   * Called when combat starts
   */
  onCombatStart() {
    this.isInCombat = true;
    this.saveManager?.blockSaving('In combat');
  }
  
  /**
   * Called when combat ends
   */
  onCombatEnd() {
    this.isInCombat = false;
    if (!this.isInCutscene && !this.isInDialogue) {
      this.saveManager?.unblockSaving();
    }
  }
  
  /**
   * Called when cutscene starts
   */
  onCutsceneStart() {
    this.isInCutscene = true;
    this.saveManager?.blockSaving('In cutscene');
  }
  
  /**
   * Called when cutscene ends
   */
  onCutsceneEnd() {
    this.isInCutscene = false;
    if (!this.isInCombat && !this.isInDialogue) {
      this.saveManager?.unblockSaving();
    }
  }
  
  /**
   * Called when dialogue starts
   */
  onDialogueStart() {
    this.isInDialogue = true;
    this.saveManager?.blockSaving('In dialogue');
  }
  
  /**
   * Called when dialogue ends
   */
  onDialogueEnd() {
    this.isInDialogue = false;
    if (!this.isInCombat && !this.isInCutscene) {
      this.saveManager?.unblockSaving();
    }
  }
  
  // ========== MENU HANDLERS ==========
  
  /**
   * Show main menu
   */
  showMainMenu() {
    // Update continue button visibility
    const continueBtn = document.getElementById('btn-continue');
    if (this.saveManager?.hasSaves()) {
      continueBtn.style.display = 'block';
    } else {
      continueBtn.style.display = 'none';
    }
    
    this.mainMenuOverlay.classList.add('active');
    this.isPaused = true;
  }
  
  /**
   * Hide main menu
   */
  hideMainMenu() {
    this.mainMenuOverlay?.classList.remove('active');
  }
  
  /**
   * Handle Continue button
   */
  async handleContinue() {
    const recent = this.saveManager?.getMostRecentSave();
    if (recent) {
      const result = await this.saveManager.load(recent.slotId);
      if (result.success) {
        this.hideMainMenu();
        this.gameStarted = true;
        this.isPaused = false;
      }
    }
  }
  
  /**
   * Handle New Game button
   */
  handleNewGame() {
    // Check if saves exist - confirm overwrite
    if (this.saveManager?.hasSaves()) {
      this.showConfirmDialog(
        'Start a new game? Your current saves will remain.',
        () => this.startNewGame()
      );
    } else {
      this.startNewGame();
    }
  }
  
  /**
   * Start a new game
   */
  startNewGame() {
    // Reset all game state to defaults
    const defaultData = createDefaultSaveData(0);
    this.saveManager?.distributeGameState(defaultData);
    
    // Update state
    this.hideMainMenu();
    this.gameStarted = true;
    this.isPaused = false;
    this.tutorialSaveShown = false;
    localStorage.removeItem(TUTORIAL_FIRST_SAVE_SHOWN_KEY);
    
    this.showNotification('New game started', 'success');
  }
  
  /**
   * Pause the game
   */
  pauseGame() {
    if (!this.gameStarted) return;
    
    this.isPaused = true;
    
    // Update playtime display
    const playtimeEl = document.getElementById('pause-playtime');
    if (playtimeEl && this.saveManager) {
      playtimeEl.textContent = `Playtime: ${this.saveManager.getFormattedPlaytime()}`;
    }
    
    this.pauseMenuOverlay?.classList.add('active');
    
    // Pause game systems
    if (this.systems.timeManager) {
      this.systems.timeManager.isPaused = true;
    }
  }
  
  /**
   * Resume the game
   */
  resumeGame() {
    this.isPaused = false;
    this.pauseMenuOverlay?.classList.remove('active');
    
    // Resume game systems
    if (this.systems.timeManager) {
      this.systems.timeManager.isPaused = false;
    }
  }
  
  /**
   * Confirm return to main menu
   */
  confirmReturnToMainMenu() {
    this.showConfirmDialog(
      'Return to main menu? Unsaved progress will be lost.',
      () => {
        this.hidePauseMenu();
        this.gameStarted = false;
        this.showMainMenu();
      }
    );
  }
  
  /**
   * Hide pause menu
   */
  hidePauseMenu() {
    this.pauseMenuOverlay?.classList.remove('active');
    this.isPaused = false;
  }
  
  // ========== LOAD MENU ==========
  
  /**
   * Show load menu
   */
  showLoadMenu() {
    this.populateLoadSlots();
    this.loadMenuOverlay?.classList.add('active');
  }
  
  /**
   * Hide load menu
   */
  hideLoadMenu() {
    this.loadMenuOverlay?.classList.remove('active');
  }
  
  /**
   * Populate load slot list (uses SaveUI enhanced rendering)
   */
  populateLoadSlots() {
    const container = document.getElementById('load-slots');
    if (!container || !this.saveManager) return;
    
    // Use SaveUI's enhanced slot rendering if available
    if (this.saveUI) {
      this.saveUI.populateSlots('load-slots', 'load', {
        sortByRecent: true,
        onLoad: async (slotId) => {
          await this.loadSlotWithFade(slotId);
        },
        onDelete: (slotId, label) => {
          this.confirmDeleteSlot(slotId, label);
        },
      });
      return;
    }
    
    // Fallback to basic rendering
    const slots = this.saveManager.listSaves();
    container.innerHTML = '';
    
    slots.forEach(slot => {
      const div = document.createElement('div');
      div.className = `save-slot ${slot.isEmpty ? 'empty' : ''} ${slot.slotType === 'autosave' ? 'autosave' : ''}`;
      
      if (slot.isEmpty) {
        div.innerHTML = `
          <div class="slot-info">
            <div class="slot-name">${slot.label}</div>
            <div class="slot-details">Empty</div>
          </div>
        `;
      } else {
        const meta = slot.metadata;
        div.innerHTML = `
          <div class="slot-info">
            <div class="slot-name">${slot.label} - Level ${meta.playerLevel} ${meta.playerName}</div>
            <div class="slot-details">
              ${meta.locationName} · ${formatPlaytime(meta.playtime)} · ${formatTimestamp(meta.timestamp)}
            </div>
          </div>
          <div class="slot-actions">
            <button class="slot-btn load-btn">Load</button>
            <button class="slot-btn delete">Delete</button>
            <button class="slot-btn">Export</button>
          </div>
        `;
        
        // Add event handlers
        div.querySelector('.load-btn').onclick = (e) => {
          e.stopPropagation();
          this.loadSlot(slot.slotId);
        };
        
        div.querySelector('.delete').onclick = (e) => {
          e.stopPropagation();
          this.confirmDeleteSlot(slot.slotId, slot.label);
        };
        
        div.querySelectorAll('.slot-btn')[2].onclick = (e) => {
          e.stopPropagation();
          this.saveManager.exportSave(slot.slotId);
        };
      }
      
      container.appendChild(div);
    });
  }
  
  /**
   * Load slot with fade transition
   */
  async loadSlotWithFade(slotId) {
    if (this.saveUI) {
      const result = await this.saveUI.loadWithFade(slotId);
      if (result?.success) {
        this.hideLoadMenu();
        this.hidePauseMenu();
        this.hideMainMenu();
        this.gameStarted = true;
        this.isPaused = false;
      }
    } else {
      await this.loadSlot(slotId);
    }
  }
  
  /**
   * Load a save slot
   */
  async loadSlot(slotId) {
    const result = await this.saveManager?.load(slotId);
    if (result?.success) {
      this.hideLoadMenu();
      this.hidePauseMenu();
      this.hideMainMenu();
      this.gameStarted = true;
      this.isPaused = false;
    }
  }
  
  // ========== SAVE MENU ==========
  
  /**
   * Show save menu
   */
  showSaveMenu() {
    if (!this.saveManager?.canSave()) {
      this.showNotification(`Cannot save: ${this.saveManager?.saveBlockReason || 'Unknown'}`, 'error');
      return;
    }
    
    this.populateSaveSlots();
    this.saveMenuOverlay?.classList.add('active');
  }
  
  /**
   * Hide save menu
   */
  hideSaveMenu() {
    this.saveMenuOverlay?.classList.remove('active');
  }
  
  /**
   * Populate save slot list (uses SaveUI enhanced rendering)
   */
  populateSaveSlots() {
    const container = document.getElementById('save-slots');
    if (!container || !this.saveManager) return;
    
    // Use SaveUI's enhanced slot rendering if available
    if (this.saveUI) {
      this.saveUI.populateSlots('save-slots', 'save', {
        includeAutosave: false,
        onSave: async (slotId, isOverwrite) => {
          if (isOverwrite) {
            this.confirmOverwriteSlot(slotId, `Slot ${slotId}`);
          } else {
            await this.saveToSlot(slotId);
          }
        },
      });
      return;
    }
    
    // Fallback to basic rendering
    const slots = this.saveManager.listSaves();
    container.innerHTML = '';
    
    // Only show manual slots (skip autosave slot 0)
    slots.filter(s => s.slotType !== 'autosave').forEach(slot => {
      const div = document.createElement('div');
      div.className = `save-slot ${slot.isEmpty ? 'empty' : ''}`;
      
      if (slot.isEmpty) {
        div.innerHTML = `
          <div class="slot-info">
            <div class="slot-name">${slot.label}</div>
            <div class="slot-details">Empty Slot</div>
          </div>
          <div class="slot-actions">
            <button class="slot-btn save-btn">Save</button>
          </div>
        `;
      } else {
        const meta = slot.metadata;
        div.innerHTML = `
          <div class="slot-info">
            <div class="slot-name">${slot.label} - Level ${meta.playerLevel}</div>
            <div class="slot-details">
              ${meta.locationName} · ${formatPlaytime(meta.playtime)}
            </div>
          </div>
          <div class="slot-actions">
            <button class="slot-btn save-btn">Overwrite</button>
          </div>
        `;
      }
      
      // Add event handler
      div.querySelector('.save-btn').onclick = (e) => {
        e.stopPropagation();
        if (slot.isEmpty) {
          this.saveToSlot(slot.slotId);
        } else {
          this.confirmOverwriteSlot(slot.slotId, slot.label);
        }
      };
      
      container.appendChild(div);
    });
  }
  
  /**
   * Save to a slot
   */
  async saveToSlot(slotId) {
    const result = await this.saveManager?.save(slotId);
    if (result?.success) {
      this.hideSaveMenu();
      this.showNotification('Game saved', 'success');
    }
  }
  
  /**
   * Confirm overwrite slot
   */
  confirmOverwriteSlot(slotId, label) {
    this.showConfirmDialog(
      `Overwrite ${label}?`,
      () => this.saveToSlot(slotId)
    );
  }
  
  /**
   * Confirm delete slot
   */
  confirmDeleteSlot(slotId, label) {
    this.showConfirmDialog(
      `Delete ${label}? This cannot be undone.`,
      () => {
        this.saveManager?.deleteSave(slotId);
        this.populateLoadSlots();
        this.showNotification('Save deleted', 'success');
      }
    );
  }
  
  // ========== QUICK SAVE/LOAD ==========
  
  /**
   * Quick save to slot 1
   */
  async quickSave() {
    if (!this.saveManager?.canSave()) {
      this.showNotification('Cannot save right now', 'error');
      return;
    }
    
    const result = await this.saveManager.save(1);
    if (result?.success) {
      this.showNotification('Quick saved', 'success');
    }
  }
  
  /**
   * Quick load from most recent
   */
  async quickLoad() {
    const recent = this.saveManager?.getMostRecentSave();
    if (recent) {
      const result = await this.saveManager.load(recent.slotId);
      if (result?.success) {
        this.showNotification('Quick loaded', 'success');
      }
    } else {
      this.showNotification('No saves found', 'error');
    }
  }
  
  // ========== CONFIRM DIALOG ==========
  
  /**
   * Show confirm dialog
   */
  showConfirmDialog(message, onConfirm) {
    document.getElementById('confirm-message').textContent = message;
    document.getElementById('btn-confirm-yes').onclick = () => {
      this.hideConfirmDialog();
      onConfirm();
    };
    this.confirmOverlay?.classList.add('active');
  }
  
  /**
   * Hide confirm dialog
   */
  hideConfirmDialog() {
    this.confirmOverlay?.classList.remove('active');
  }
  
  // ========== IMPORT HANDLER ==========
  
  /**
   * Handle save import
   */
  async handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    // Find first empty slot, or use slot 3
    const slots = this.saveManager?.listSaves() || [];
    const emptySlot = slots.find(s => s.slotType !== 'autosave' && s.isEmpty);
    const targetSlot = emptySlot?.slotId || 3;
    
    const result = await this.saveManager?.importSave(targetSlot, file);
    if (result?.success) {
      this.populateLoadSlots();
      this.showNotification(`Imported to Slot ${targetSlot}`, 'success');
    } else {
      this.showNotification(`Import failed: ${result?.error}`, 'error');
    }
    
    // Reset file input
    event.target.value = '';
  }
  
  // ========== TUTORIAL PROMPT ==========
  
  /**
   * Show first-time save tutorial prompt
   */
  showTutorialSavePrompt() {
    const prompt = document.createElement('div');
    prompt.className = 'tutorial-save-prompt';
    prompt.innerHTML = `
      <p>💾 You've reached the village! Would you like to save your progress?</p>
      <div class="prompt-buttons">
        <button class="menu-btn" id="tutorial-save-yes">Save Now</button>
        <button class="menu-btn secondary" id="tutorial-save-no">Later</button>
      </div>
    `;
    
    document.body.appendChild(prompt);
    
    document.getElementById('tutorial-save-yes').onclick = () => {
      prompt.remove();
      this.showSaveMenu();
      this.markTutorialSaveShown();
    };
    
    document.getElementById('tutorial-save-no').onclick = () => {
      prompt.remove();
      this.markTutorialSaveShown();
    };
  }
  
  /**
   * Mark tutorial save as shown
   */
  markTutorialSaveShown() {
    this.tutorialSaveShown = true;
    localStorage.setItem(TUTORIAL_FIRST_SAVE_SHOWN_KEY, 'true');
  }
  
  // ========== DEATH SCREEN INTEGRATION ==========
  
  /**
   * Add load button to death screen
   */
  addLoadButtonToDeathScreen() {
    const deathScreen = document.getElementById('death-screen');
    if (!deathScreen) return;
    
    // Check if button already exists
    if (deathScreen.querySelector('.load-save-btn')) return;
    
    const loadBtn = document.createElement('button');
    loadBtn.className = 'load-save-btn';
    loadBtn.textContent = 'Load Last Save';
    loadBtn.onclick = () => this.quickLoad();
    
    deathScreen.appendChild(loadBtn);
  }
  
  // ========== INDICATORS ==========
  
  /**
   * Show save indicator
   */
  showSaveIndicator() {
    this.saveIndicator?.classList.add('active');
  }
  
  /**
   * Hide save indicator
   */
  hideSaveIndicator() {
    this.saveIndicator?.classList.remove('active');
  }
  
  /**
   * Show notification toast
   */
  showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `save-notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      background: ${type === 'error' ? 'rgba(150, 40, 40, 0.95)' : 'rgba(40, 40, 60, 0.95)'};
      border: 1px solid ${type === 'error' ? 'rgba(200, 80, 80, 0.6)' : 'rgba(200, 170, 100, 0.5)'};
      color: #ddd;
      padding: 12px 24px;
      border-radius: 4px;
      font-family: 'Cinzel', Georgia, serif;
      font-size: 14px;
      z-index: 10000;
      animation: notifSlide 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      notification.style.transition = 'opacity 0.3s';
      setTimeout(() => notification.remove(), 300);
    }, 2000);
  }
  
  // ========== HELPERS ==========
  
  /**
   * Hide all menu overlays
   */
  hideAllMenus() {
    this.mainMenuOverlay?.classList.remove('active');
    this.pauseMenuOverlay?.classList.remove('active');
    this.loadMenuOverlay?.classList.remove('active');
    this.saveMenuOverlay?.classList.remove('active');
    this.confirmOverlay?.classList.remove('active');
  }
  
  /**
   * Show settings (placeholder)
   */
  showSettings() {
    this.showNotification('Settings coming soon', 'info');
  }
  
  /**
   * Game loop update - call each frame
   */
  update(playerPosition) {
    if (playerPosition) {
      this.updatePlayerPosition(playerPosition);
    }
  }
}

// ========== SINGLETON ==========
let saveIntegrationInstance = null;

export function getSaveIntegration() {
  if (!saveIntegrationInstance) {
    saveIntegrationInstance = new SaveIntegration();
  }
  return saveIntegrationInstance;
}

export function createSaveIntegration() {
  saveIntegrationInstance = new SaveIntegration();
  return saveIntegrationInstance;
}

export { SaveIntegration };
export default SaveIntegration;
