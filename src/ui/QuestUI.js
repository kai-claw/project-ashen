/**
 * QuestUI.js - Quest Journal and HUD System
 * Phase 25: Quest System - Worker 2
 * 
 * Full-featured quest journal panel with tabs, filters, 
 * HUD tracker, completion popups, and notifications.
 */

import {
  QUESTS,
  QUEST_TYPE,
  QUEST_STATUS,
  QUEST_DIFFICULTY,
  DIFFICULTY_SCALE,
  getQuest,
  getQuestGiver,
  getQuestChain,
} from '../data/QuestData.js';

import { getQuestManager } from '../systems/QuestManager.js';

// ========== CONSTANTS ==========
const MAX_TRACKED_QUESTS = 3;
const NOTIFICATION_DURATION = 4000;
const COMPLETION_POPUP_DURATION = 5000;

// ========== QUEST UI CLASS ==========
class QuestUI {
  constructor() {
    this.isOpen = false;
    this.currentTab = 'active'; // 'active', 'available', 'completed'
    this.trackedQuests = new Set();
    this.sortBy = 'difficulty'; // 'difficulty', 'type', 'distance'
    this.filterType = 'all';
    
    // UI elements
    this.journalPanel = null;
    this.hudTracker = null;
    this.notificationQueue = [];
    this.isShowingNotification = false;
    
    // Quest manager reference
    this.questManager = null;
    
    // Player position for distance sorting
    this.playerPosition = { x: 0, y: 0, z: 0 };
    
    this.createStyles();
    this.createJournalPanel();
    this.createHUDTracker();
    this.createCompletionPopup();
    this.createNotificationContainer();
    
    // Key bindings
    this.setupKeyBindings();
  }

  // ========== INITIALIZATION ==========
  
  init(questManager) {
    this.questManager = questManager;
    
    // Subscribe to quest events
    questManager.on('onQuestAccepted', (data) => this.onQuestAccepted(data));
    questManager.on('onObjectiveProgress', (data) => this.onObjectiveProgress(data));
    questManager.on('onObjectiveComplete', (data) => this.onObjectiveComplete(data));
    questManager.on('onQuestComplete', (data) => this.onQuestReadyForTurnIn(data));
    questManager.on('onQuestTurnedIn', (data) => this.onQuestTurnedIn(data));
    questManager.on('onQuestFailed', (data) => this.onQuestFailed(data));
    questManager.on('onQuestAvailable', (data) => this.onQuestAvailable(data));
    
    this.updateHUDTracker();
    
    console.log('[QuestUI] Initialized');
  }

  // ========== STYLES ==========
  
  createStyles() {
    if (document.getElementById('quest-ui-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'quest-ui-styles';
    style.textContent = `
      /* ===== QUEST JOURNAL ===== */
      #quest-journal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 700px;
        height: 550px;
        background: linear-gradient(180deg, #1a1a2e 0%, #16213e 100%);
        border: 2px solid #4a4a6a;
        border-radius: 12px;
        box-shadow: 0 0 40px rgba(0,0,0,0.8), inset 0 0 60px rgba(100,100,150,0.1);
        font-family: 'Segoe UI', Tahoma, sans-serif;
        color: #e0e0e0;
        z-index: 2000;
        display: none;
        flex-direction: column;
        overflow: hidden;
      }

      #quest-journal.open {
        display: flex;
        animation: journalOpen 0.3s ease-out;
      }

      @keyframes journalOpen {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      }

      /* Header */
      .quest-journal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background: linear-gradient(180deg, #2a2a4a, #1a1a3a);
        border-bottom: 1px solid #4a4a6a;
      }

      .quest-journal-title {
        font-size: 22px;
        font-weight: bold;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255,215,0,0.3);
      }

      .quest-journal-close {
        width: 32px;
        height: 32px;
        background: #3a3a5a;
        border: 1px solid #5a5a7a;
        border-radius: 6px;
        color: #aaa;
        font-size: 18px;
        cursor: pointer;
        transition: all 0.2s;
      }

      .quest-journal-close:hover {
        background: #5a3a3a;
        color: #ff6666;
      }

      /* Tabs */
      .quest-journal-tabs {
        display: flex;
        background: #1a1a2e;
        border-bottom: 1px solid #3a3a5a;
      }

      .quest-tab {
        flex: 1;
        padding: 12px 20px;
        background: transparent;
        border: none;
        color: #888;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
        border-bottom: 3px solid transparent;
      }

      .quest-tab:hover {
        color: #aaa;
        background: rgba(100,100,150,0.1);
      }

      .quest-tab.active {
        color: #ffd700;
        border-bottom-color: #ffd700;
        background: rgba(255,215,0,0.05);
      }

      .quest-tab-count {
        background: #3a3a5a;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 11px;
        margin-left: 6px;
      }

      .quest-tab.active .quest-tab-count {
        background: rgba(255,215,0,0.3);
        color: #ffd700;
      }

      /* Filter/Sort Bar */
      .quest-filter-bar {
        display: flex;
        gap: 15px;
        padding: 10px 20px;
        background: rgba(0,0,0,0.2);
        border-bottom: 1px solid #2a2a4a;
      }

      .quest-filter-group {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .quest-filter-label {
        color: #888;
        font-size: 12px;
      }

      .quest-filter-select {
        background: #2a2a4a;
        border: 1px solid #4a4a6a;
        border-radius: 4px;
        color: #e0e0e0;
        padding: 5px 10px;
        font-size: 12px;
        cursor: pointer;
      }

      .quest-filter-select:focus {
        outline: none;
        border-color: #6a6a8a;
      }

      /* Content */
      .quest-journal-content {
        display: flex;
        flex: 1;
        overflow: hidden;
      }

      /* Quest List */
      .quest-list {
        width: 260px;
        border-right: 1px solid #3a3a5a;
        overflow-y: auto;
        padding: 10px;
      }

      .quest-list-item {
        padding: 12px;
        background: rgba(40,40,60,0.5);
        border: 1px solid #3a3a5a;
        border-radius: 6px;
        margin-bottom: 8px;
        cursor: pointer;
        transition: all 0.2s;
      }

      .quest-list-item:hover {
        background: rgba(60,60,80,0.7);
        border-color: #5a5a7a;
      }

      .quest-list-item.selected {
        background: rgba(255,215,0,0.1);
        border-color: #ffd700;
      }

      .quest-list-item.completed {
        opacity: 0.6;
      }

      .quest-list-item.ready {
        border-color: #44ff44;
        background: rgba(68,255,68,0.1);
      }

      .quest-list-name {
        font-weight: bold;
        font-size: 13px;
        color: #e0e0e0;
        margin-bottom: 4px;
      }

      .quest-list-item.completed .quest-list-name {
        color: #888;
      }

      .quest-list-meta {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: #888;
      }

      .quest-difficulty {
        padding: 1px 6px;
        border-radius: 3px;
        font-size: 10px;
        font-weight: 600;
      }

      .quest-difficulty.trivial { background: #333; color: #888; }
      .quest-difficulty.easy { background: #2d4a2d; color: #7fff7f; }
      .quest-difficulty.normal { background: #4a4a2d; color: #ffff7f; }
      .quest-difficulty.hard { background: #5a3a2d; color: #ffaa44; }
      .quest-difficulty.elite { background: #5a2d2d; color: #ff6666; }
      .quest-difficulty.legendary { background: #4a2d5a; color: #cc66ff; }

      /* Quest Details */
      .quest-details {
        flex: 1;
        padding: 20px;
        overflow-y: auto;
      }

      .quest-details-empty {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        color: #666;
        font-style: italic;
      }

      .quest-details-header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 15px;
      }

      .quest-details-title {
        font-size: 20px;
        font-weight: bold;
        color: #ffd700;
        margin-bottom: 5px;
      }

      .quest-details-giver {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #aaa;
        font-size: 12px;
      }

      .quest-giver-portrait {
        width: 40px;
        height: 40px;
        background: #2a2a4a;
        border: 2px solid #4a4a6a;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      }

      .quest-details-description {
        color: #ccc;
        font-size: 13px;
        line-height: 1.6;
        margin-bottom: 20px;
        padding: 15px;
        background: rgba(0,0,0,0.2);
        border-radius: 6px;
        border-left: 3px solid #4a4a6a;
      }

      /* Objectives */
      .quest-objectives-title {
        font-size: 14px;
        font-weight: bold;
        color: #aaa;
        margin-bottom: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .quest-objective {
        display: flex;
        align-items: center;
        padding: 10px;
        background: rgba(40,40,60,0.4);
        border-radius: 6px;
        margin-bottom: 8px;
      }

      .quest-objective.complete {
        background: rgba(68,255,68,0.1);
      }

      .quest-objective.optional {
        border-left: 3px solid #7777ff;
      }

      .quest-objective-icon {
        font-size: 18px;
        margin-right: 10px;
      }

      .quest-objective-text {
        flex: 1;
      }

      .quest-objective-name {
        font-size: 13px;
        color: #e0e0e0;
      }

      .quest-objective.complete .quest-objective-name {
        text-decoration: line-through;
        color: #7fff7f;
      }

      .quest-objective-progress {
        margin-top: 4px;
      }

      .quest-progress-bar {
        width: 100%;
        height: 6px;
        background: #2a2a4a;
        border-radius: 3px;
        overflow: hidden;
      }

      .quest-progress-fill {
        height: 100%;
        background: linear-gradient(90deg, #4488ff, #44aaff);
        transition: width 0.3s ease;
      }

      .quest-objective.complete .quest-progress-fill {
        background: linear-gradient(90deg, #44ff44, #88ff88);
      }

      .quest-progress-text {
        font-size: 11px;
        color: #888;
        margin-top: 2px;
        text-align: right;
      }

      /* Rewards Preview */
      .quest-rewards-section {
        margin-top: 20px;
        padding: 15px;
        background: rgba(255,215,0,0.05);
        border: 1px solid rgba(255,215,0,0.2);
        border-radius: 6px;
      }

      .quest-rewards-title {
        font-size: 14px;
        font-weight: bold;
        color: #ffd700;
        margin-bottom: 10px;
      }

      .quest-rewards-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }

      .quest-reward-item {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 6px 12px;
        background: rgba(255,215,0,0.1);
        border-radius: 4px;
        font-size: 13px;
      }

      .quest-reward-item.gold { color: #ffd700; }
      .quest-reward-item.xp { color: #88ff88; }
      .quest-reward-item.item { color: #88aaff; }
      .quest-reward-item.rep { color: #ff88ff; }

      /* Action Buttons */
      .quest-details-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        padding-top: 15px;
        border-top: 1px solid #3a3a5a;
      }

      .quest-action-btn {
        flex: 1;
        padding: 12px 20px;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }

      .quest-action-btn.track {
        background: linear-gradient(180deg, #2d4a6a, #1d3a5a);
        color: #88ccff;
        border: 1px solid #4a6a8a;
      }

      .quest-action-btn.track:hover {
        background: linear-gradient(180deg, #3d5a7a, #2d4a6a);
      }

      .quest-action-btn.track.tracking {
        background: linear-gradient(180deg, #2d5a2d, #1d4a1d);
        color: #88ff88;
        border-color: #4a8a4a;
      }

      .quest-action-btn.abandon {
        background: linear-gradient(180deg, #5a3a3a, #4a2a2a);
        color: #ff8888;
        border: 1px solid #7a4a4a;
      }

      .quest-action-btn.abandon:hover {
        background: linear-gradient(180deg, #6a4a4a, #5a3a3a);
      }

      .quest-action-btn.accept {
        background: linear-gradient(180deg, #4a6a2d, #3a5a1d);
        color: #bbff88;
        border: 1px solid #6a8a4a;
      }

      .quest-action-btn.accept:hover {
        background: linear-gradient(180deg, #5a7a3d, #4a6a2d);
      }

      /* ===== HUD TRACKER ===== */
      #quest-hud-tracker {
        position: fixed;
        top: 178px;
        right: 10px;
        width: 260px;
        background: rgba(0,0,0,0.7);
        border: 1px solid #444;
        border-radius: 8px;
        font-family: 'Segoe UI', Tahoma, sans-serif;
        color: #e0e0e0;
        font-size: 12px;
        z-index: 500;
        overflow: hidden;
        backdrop-filter: blur(5px);
      }

      .hud-tracker-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 12px;
        background: rgba(50,50,50,0.8);
        border-bottom: 1px solid #444;
      }

      .hud-tracker-title {
        font-weight: bold;
        color: #ffd700;
      }

      .hud-tracker-toggle {
        background: none;
        border: none;
        color: #888;
        cursor: pointer;
        font-size: 14px;
      }

      .hud-tracker-content {
        max-height: 300px;
        overflow-y: auto;
        padding: 8px;
      }

      .hud-quest-entry {
        padding: 8px;
        background: rgba(50,50,50,0.5);
        border-radius: 4px;
        margin-bottom: 6px;
      }

      .hud-quest-entry:last-child {
        margin-bottom: 0;
      }

      .hud-quest-entry.ready {
        border-left: 3px solid #44ff44;
      }

      .hud-quest-title {
        font-weight: bold;
        color: #ffd700;
        margin-bottom: 6px;
        font-size: 12px;
      }

      .hud-objective {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 3px 0;
        font-size: 11px;
      }

      .hud-objective.complete {
        color: #7fff7f;
        text-decoration: line-through;
        opacity: 0.7;
      }

      .hud-objective-name {
        flex: 1;
        margin-right: 8px;
      }

      .hud-objective-progress {
        color: #aaa;
        font-weight: 600;
      }

      .hud-tracker-empty {
        color: #666;
        text-align: center;
        padding: 15px;
        font-style: italic;
      }

      /* ===== COMPLETION POPUP ===== */
      #quest-completion-popup {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        background: linear-gradient(180deg, #1a2a1a, #0a1a0a);
        border: 3px solid #44ff44;
        border-radius: 12px;
        box-shadow: 0 0 60px rgba(68,255,68,0.4);
        padding: 30px;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, sans-serif;
        z-index: 3000;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s;
      }

      #quest-completion-popup.show {
        opacity: 1;
        pointer-events: auto;
        animation: completionPulse 0.5s ease-out;
      }

      @keyframes completionPulse {
        0% { transform: translate(-50%, -50%) scale(0.8); }
        50% { transform: translate(-50%, -50%) scale(1.05); }
        100% { transform: translate(-50%, -50%) scale(1); }
      }

      .completion-banner {
        font-size: 28px;
        font-weight: bold;
        color: #44ff44;
        text-shadow: 0 0 20px rgba(68,255,68,0.6);
        margin-bottom: 15px;
        letter-spacing: 2px;
      }

      .completion-quest-name {
        font-size: 20px;
        color: #ffd700;
        margin-bottom: 25px;
      }

      .completion-rewards {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 25px;
      }

      .completion-reward {
        padding: 10px 20px;
        background: rgba(255,255,255,0.1);
        border-radius: 6px;
        font-size: 16px;
      }

      .completion-reward.gold { color: #ffd700; }
      .completion-reward.xp { color: #88ff88; }
      .completion-reward.item { color: #88aaff; }

      .completion-close-btn {
        padding: 12px 40px;
        background: linear-gradient(180deg, #3a5a3a, #2a4a2a);
        border: 2px solid #44ff44;
        border-radius: 6px;
        color: #88ff88;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s;
      }

      .completion-close-btn:hover {
        background: linear-gradient(180deg, #4a6a4a, #3a5a3a);
      }

      /* ===== NOTIFICATIONS ===== */
      #quest-notifications {
        position: fixed;
        top: 20px;
        right: 20px;
        width: 300px;
        z-index: 2500;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      }

      .quest-notification {
        padding: 15px 20px;
        background: rgba(20,20,30,0.95);
        border-radius: 8px;
        border-left: 4px solid #ffd700;
        box-shadow: 0 5px 20px rgba(0,0,0,0.5);
        font-family: 'Segoe UI', Tahoma, sans-serif;
        animation: notifSlideIn 0.3s ease-out;
        pointer-events: auto;
      }

      @keyframes notifSlideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }

      .quest-notification.hiding {
        animation: notifSlideOut 0.3s ease-in forwards;
      }

      @keyframes notifSlideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }

      .quest-notification.new-quest {
        border-left-color: #4488ff;
      }

      .quest-notification.complete {
        border-left-color: #44ff44;
      }

      .quest-notification.failed {
        border-left-color: #ff4444;
      }

      .quest-notification.available {
        border-left-color: #ffaa44;
      }

      .notification-header {
        font-size: 12px;
        color: #888;
        margin-bottom: 5px;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .notification-text {
        font-size: 14px;
        color: #e0e0e0;
        font-weight: 600;
      }

      /* ===== ABANDON CONFIRMATION ===== */
      #quest-abandon-confirm {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(40,30,30,0.98);
        border: 2px solid #ff6666;
        border-radius: 10px;
        padding: 25px 35px;
        text-align: center;
        z-index: 3500;
        display: none;
      }

      #quest-abandon-confirm.show {
        display: block;
        animation: journalOpen 0.2s ease-out;
      }

      .abandon-confirm-title {
        font-size: 18px;
        color: #ff6666;
        margin-bottom: 15px;
      }

      .abandon-confirm-text {
        color: #ccc;
        margin-bottom: 20px;
        font-size: 14px;
      }

      .abandon-confirm-buttons {
        display: flex;
        gap: 15px;
        justify-content: center;
      }

      .abandon-confirm-btn {
        padding: 10px 25px;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        cursor: pointer;
        font-weight: 600;
      }

      .abandon-confirm-btn.yes {
        background: #5a2a2a;
        color: #ff8888;
        border: 1px solid #ff6666;
      }

      .abandon-confirm-btn.no {
        background: #2a2a4a;
        color: #aaa;
        border: 1px solid #4a4a6a;
      }

      .abandon-confirm-btn:hover {
        filter: brightness(1.2);
      }
    `;
    
    document.head.appendChild(style);
  }

  // ========== JOURNAL PANEL ==========
  
  createJournalPanel() {
    if (document.getElementById('quest-journal')) return;
    
    const panel = document.createElement('div');
    panel.id = 'quest-journal';
    panel.innerHTML = `
      <div class="quest-journal-header">
        <span class="quest-journal-title">📜 Quest Journal</span>
        <button class="quest-journal-close">✕</button>
      </div>
      
      <div class="quest-journal-tabs">
        <button class="quest-tab active" data-tab="active">
          Active <span class="quest-tab-count" id="tab-count-active">0</span>
        </button>
        <button class="quest-tab" data-tab="available">
          Available <span class="quest-tab-count" id="tab-count-available">0</span>
        </button>
        <button class="quest-tab" data-tab="completed">
          Completed <span class="quest-tab-count" id="tab-count-completed">0</span>
        </button>
      </div>
      
      <div class="quest-filter-bar">
        <div class="quest-filter-group">
          <span class="quest-filter-label">Type:</span>
          <select class="quest-filter-select" id="quest-filter-type">
            <option value="all">All Types</option>
            <option value="kill">Kill</option>
            <option value="gather">Gather</option>
            <option value="explore">Explore</option>
            <option value="deliver">Deliver</option>
            <option value="escort">Escort</option>
            <option value="boss">Boss</option>
          </select>
        </div>
        <div class="quest-filter-group">
          <span class="quest-filter-label">Sort:</span>
          <select class="quest-filter-select" id="quest-sort">
            <option value="difficulty">Difficulty</option>
            <option value="type">Type</option>
            <option value="name">Name</option>
          </select>
        </div>
      </div>
      
      <div class="quest-journal-content">
        <div class="quest-list" id="quest-list"></div>
        <div class="quest-details" id="quest-details">
          <div class="quest-details-empty">Select a quest to view details</div>
        </div>
      </div>
    `;
    
    document.body.appendChild(panel);
    this.journalPanel = panel;
    
    // Event listeners
    panel.querySelector('.quest-journal-close').onclick = () => this.close();
    
    panel.querySelectorAll('.quest-tab').forEach(tab => {
      tab.onclick = () => this.switchTab(tab.dataset.tab);
    });
    
    panel.querySelector('#quest-filter-type').onchange = (e) => {
      this.filterType = e.target.value;
      this.updateQuestList();
    };
    
    panel.querySelector('#quest-sort').onchange = (e) => {
      this.sortBy = e.target.value;
      this.updateQuestList();
    };
    
    // Create abandon confirmation
    const abandonConfirm = document.createElement('div');
    abandonConfirm.id = 'quest-abandon-confirm';
    abandonConfirm.innerHTML = `
      <div class="abandon-confirm-title">⚠️ Abandon Quest?</div>
      <div class="abandon-confirm-text" id="abandon-quest-name"></div>
      <div class="abandon-confirm-buttons">
        <button class="abandon-confirm-btn yes">Abandon</button>
        <button class="abandon-confirm-btn no">Cancel</button>
      </div>
    `;
    document.body.appendChild(abandonConfirm);
    
    abandonConfirm.querySelector('.abandon-confirm-btn.no').onclick = () => {
      abandonConfirm.classList.remove('show');
    };
  }

  // ========== HUD TRACKER ==========
  
  createHUDTracker() {
    // Remove existing HUD tracker (QuestManager creates one, we replace it)
    const existing = document.getElementById('quest-tracker');
    if (existing) existing.remove();
    
    if (document.getElementById('quest-hud-tracker')) return;
    
    const tracker = document.createElement('div');
    tracker.id = 'quest-hud-tracker';
    tracker.innerHTML = `
      <div class="hud-tracker-header">
        <span class="hud-tracker-title">📋 Tracked Quests</span>
        <button class="hud-tracker-toggle">−</button>
      </div>
      <div class="hud-tracker-content" id="hud-tracker-content">
        <div class="hud-tracker-empty">Press J to open Quest Journal</div>
      </div>
    `;
    
    document.body.appendChild(tracker);
    this.hudTracker = tracker;
    
    // Toggle collapse
    const header = tracker.querySelector('.hud-tracker-header');
    const content = tracker.querySelector('.hud-tracker-content');
    const toggleBtn = tracker.querySelector('.hud-tracker-toggle');
    let collapsed = false;
    
    header.style.cursor = 'pointer';
    header.onclick = () => {
      collapsed = !collapsed;
      content.style.display = collapsed ? 'none' : 'block';
      toggleBtn.textContent = collapsed ? '+' : '−';
    };
  }

  // ========== COMPLETION POPUP ==========
  
  createCompletionPopup() {
    if (document.getElementById('quest-completion-popup')) return;
    
    const popup = document.createElement('div');
    popup.id = 'quest-completion-popup';
    popup.innerHTML = `
      <div class="completion-banner">🎉 QUEST COMPLETE!</div>
      <div class="completion-quest-name" id="completion-quest-name"></div>
      <div class="completion-rewards" id="completion-rewards"></div>
      <button class="completion-close-btn">Continue</button>
    `;
    
    document.body.appendChild(popup);
    
    popup.querySelector('.completion-close-btn').onclick = () => {
      popup.classList.remove('show');
    };
  }

  // ========== NOTIFICATIONS ==========
  
  createNotificationContainer() {
    if (document.getElementById('quest-notifications')) return;
    
    const container = document.createElement('div');
    container.id = 'quest-notifications';
    document.body.appendChild(container);
  }

  showNotification(header, text, type = 'default') {
    const container = document.getElementById('quest-notifications');
    if (!container) return;
    
    const notif = document.createElement('div');
    notif.className = `quest-notification ${type}`;
    notif.innerHTML = `
      <div class="notification-header">${header}</div>
      <div class="notification-text">${text}</div>
    `;
    
    container.appendChild(notif);
    
    setTimeout(() => {
      notif.classList.add('hiding');
      setTimeout(() => notif.remove(), 300);
    }, NOTIFICATION_DURATION);
  }

  // ========== KEY BINDINGS ==========
  
  setupKeyBindings() {
    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'j' && !this.isInputFocused()) {
        e.preventDefault();
        this.toggle();
      }
      
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }

  isInputFocused() {
    const active = document.activeElement;
    return active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA');
  }

  // ========== OPEN/CLOSE ==========
  
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    if (!this.journalPanel) return;
    
    this.isOpen = true;
    this.journalPanel.classList.add('open');
    this.updateQuestList();
    this.updateTabCounts();
  }

  close() {
    if (!this.journalPanel) return;
    
    this.isOpen = false;
    this.journalPanel.classList.remove('open');
    document.getElementById('quest-abandon-confirm')?.classList.remove('show');
  }

  // ========== TAB SWITCHING ==========
  
  switchTab(tabName) {
    this.currentTab = tabName;
    
    // Update tab styles
    this.journalPanel.querySelectorAll('.quest-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    
    this.updateQuestList();
  }

  updateTabCounts() {
    if (!this.questManager) return;
    
    document.getElementById('tab-count-active').textContent = 
      this.questManager.activeQuests.size;
    document.getElementById('tab-count-available').textContent = 
      this.questManager.availableQuests.size;
    document.getElementById('tab-count-completed').textContent = 
      this.questManager.completedQuests.size;
  }

  // ========== QUEST LIST ==========
  
  updateQuestList() {
    if (!this.questManager) return;
    
    const listEl = document.getElementById('quest-list');
    if (!listEl) return;
    
    let quests = [];
    
    // Get quests based on tab
    if (this.currentTab === 'active') {
      this.questManager.activeQuests.forEach((state, questId) => {
        const quest = getQuest(questId);
        if (quest) quests.push({ quest, state, id: questId });
      });
    } else if (this.currentTab === 'available') {
      this.questManager.availableQuests.forEach(questId => {
        const quest = getQuest(questId);
        if (quest) quests.push({ quest, state: null, id: questId });
      });
    } else if (this.currentTab === 'completed') {
      this.questManager.completedQuests.forEach(questId => {
        const quest = getQuest(questId);
        if (quest) quests.push({ quest, state: null, id: questId, completed: true });
      });
    }
    
    // Filter by type
    if (this.filterType !== 'all') {
      quests = quests.filter(q => q.quest.type === this.filterType);
    }
    
    // Sort
    quests.sort((a, b) => {
      if (this.sortBy === 'difficulty') {
        const diffOrder = ['trivial', 'easy', 'normal', 'hard', 'elite', 'legendary'];
        return diffOrder.indexOf(a.quest.difficulty) - diffOrder.indexOf(b.quest.difficulty);
      } else if (this.sortBy === 'type') {
        return a.quest.type.localeCompare(b.quest.type);
      } else if (this.sortBy === 'name') {
        return a.quest.title.localeCompare(b.quest.title);
      }
      return 0;
    });
    
    // Render list
    if (quests.length === 0) {
      listEl.innerHTML = `<div class="hud-tracker-empty">No quests in this category</div>`;
      return;
    }
    
    listEl.innerHTML = quests.map(({ quest, state, id, completed }) => {
      const isReady = state && state.status === QUEST_STATUS.READY_TO_TURN_IN;
      const classes = [
        'quest-list-item',
        completed ? 'completed' : '',
        isReady ? 'ready' : '',
      ].filter(Boolean).join(' ');
      
      return `
        <div class="${classes}" data-quest-id="${id}">
          <div class="quest-list-name">${quest.title}</div>
          <div class="quest-list-meta">
            <span class="quest-difficulty ${quest.difficulty}">${quest.difficulty}</span>
            <span>${this.getQuestTypeIcon(quest.type)} ${quest.type}</span>
          </div>
        </div>
      `;
    }).join('');
    
    // Add click handlers
    listEl.querySelectorAll('.quest-list-item').forEach(item => {
      item.onclick = () => {
        listEl.querySelectorAll('.quest-list-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        this.showQuestDetails(item.dataset.questId);
      };
    });
    
    this.updateTabCounts();
  }

  // ========== QUEST DETAILS ==========
  
  showQuestDetails(questId) {
    const detailsEl = document.getElementById('quest-details');
    if (!detailsEl) return;
    
    const quest = getQuest(questId);
    if (!quest) {
      detailsEl.innerHTML = '<div class="quest-details-empty">Quest not found</div>';
      return;
    }
    
    const state = this.questManager?.getQuestState(questId);
    const giver = getQuestGiver(quest.giver);
    const isActive = this.questManager?.hasActiveQuest(questId);
    const isCompleted = this.questManager?.hasCompletedQuest(questId);
    const isAvailable = this.questManager?.availableQuests.has(questId);
    const isTracked = this.trackedQuests.has(questId);
    const isReady = state?.status === QUEST_STATUS.READY_TO_TURN_IN;
    
    // Objectives HTML
    let objectivesHtml = '';
    if (state) {
      objectivesHtml = state.objectives.map(obj => {
        const complete = obj.current >= obj.required;
        const progress = Math.min(100, (obj.current / obj.required) * 100);
        return `
          <div class="quest-objective ${complete ? 'complete' : ''}">
            <span class="quest-objective-icon">${this.getObjectiveIcon(obj.type)}</span>
            <div class="quest-objective-text">
              <div class="quest-objective-name">${obj.targetName}</div>
              <div class="quest-objective-progress">
                <div class="quest-progress-bar">
                  <div class="quest-progress-fill" style="width: ${progress}%"></div>
                </div>
                <div class="quest-progress-text">${obj.current} / ${obj.required}</div>
              </div>
            </div>
          </div>
        `;
      }).join('');
      
      // Optional objectives
      if (state.optionalObjectives?.length > 0) {
        objectivesHtml += '<div class="quest-objectives-title" style="margin-top: 15px;">Bonus Objectives</div>';
        objectivesHtml += state.optionalObjectives.map(obj => {
          const complete = obj.current >= obj.required;
          const progress = Math.min(100, (obj.current / obj.required) * 100);
          return `
            <div class="quest-objective optional ${complete ? 'complete' : ''}">
              <span class="quest-objective-icon">⭐</span>
              <div class="quest-objective-text">
                <div class="quest-objective-name">${obj.targetName}</div>
                <div class="quest-objective-progress">
                  <div class="quest-progress-bar">
                    <div class="quest-progress-fill" style="width: ${progress}%"></div>
                  </div>
                  <div class="quest-progress-text">${obj.current} / ${obj.required}</div>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    } else {
      // Show objectives from quest definition
      objectivesHtml = quest.objectives.map(obj => `
        <div class="quest-objective">
          <span class="quest-objective-icon">${this.getObjectiveIcon(obj.type)}</span>
          <div class="quest-objective-text">
            <div class="quest-objective-name">${obj.targetName}</div>
            <div class="quest-objective-progress">
              <div class="quest-progress-bar">
                <div class="quest-progress-fill" style="width: 0%"></div>
              </div>
              <div class="quest-progress-text">0 / ${obj.required}</div>
            </div>
          </div>
        </div>
      `).join('');
    }
    
    // Rewards HTML
    const rewards = quest.rewards;
    let rewardsHtml = '';
    if (rewards.gold > 0) {
      rewardsHtml += `<span class="quest-reward-item gold">💰 ${rewards.gold} Gold</span>`;
    }
    if (rewards.xp > 0) {
      rewardsHtml += `<span class="quest-reward-item xp">⭐ ${rewards.xp} XP</span>`;
    }
    if (rewards.items?.length > 0) {
      rewards.items.forEach(item => {
        const qty = item.quantity > 1 ? `${item.quantity}x ` : '';
        rewardsHtml += `<span class="quest-reward-item item">📦 ${qty}${item.id}</span>`;
      });
    }
    
    // Action buttons
    let actionsHtml = '';
    if (isActive) {
      actionsHtml = `
        <button class="quest-action-btn track ${isTracked ? 'tracking' : ''}" data-action="track">
          ${isTracked ? '✓ Tracking' : 'Track Quest'}
        </button>
        <button class="quest-action-btn abandon" data-action="abandon">
          Abandon
        </button>
      `;
    } else if (isAvailable) {
      actionsHtml = `
        <button class="quest-action-btn accept" data-action="accept">
          Accept Quest
        </button>
      `;
    }
    
    detailsEl.innerHTML = `
      <div class="quest-details-header">
        <div>
          <div class="quest-details-title">${quest.title}</div>
          ${isReady ? '<span style="color: #44ff44; font-size: 12px;">✓ Ready to turn in!</span>' : ''}
        </div>
        <div class="quest-details-giver">
          <div class="quest-giver-portrait">${giver?.icon || '❓'}</div>
          <div>
            <div style="color: #e0e0e0;">${giver?.name || 'Unknown'}</div>
            <div style="color: #888; font-size: 11px;">${giver?.title || ''}</div>
          </div>
        </div>
      </div>
      
      <div class="quest-details-description">${quest.description}</div>
      
      <div class="quest-objectives-title">Objectives</div>
      ${objectivesHtml}
      
      <div class="quest-rewards-section">
        <div class="quest-rewards-title">Rewards</div>
        <div class="quest-rewards-list">${rewardsHtml}</div>
      </div>
      
      ${actionsHtml ? `<div class="quest-details-actions">${actionsHtml}</div>` : ''}
    `;
    
    // Action button handlers
    detailsEl.querySelectorAll('.quest-action-btn').forEach(btn => {
      btn.onclick = () => this.handleQuestAction(btn.dataset.action, questId);
    });
  }

  handleQuestAction(action, questId) {
    const quest = getQuest(questId);
    
    if (action === 'track') {
      if (this.trackedQuests.has(questId)) {
        this.trackedQuests.delete(questId);
      } else {
        if (this.trackedQuests.size >= MAX_TRACKED_QUESTS) {
          const first = this.trackedQuests.values().next().value;
          this.trackedQuests.delete(first);
        }
        this.trackedQuests.add(questId);
      }
      this.updateHUDTracker();
      this.showQuestDetails(questId);
      
    } else if (action === 'abandon') {
      const confirmEl = document.getElementById('quest-abandon-confirm');
      document.getElementById('abandon-quest-name').textContent = 
        `Are you sure you want to abandon "${quest?.title}"?`;
      confirmEl.classList.add('show');
      
      confirmEl.querySelector('.abandon-confirm-btn.yes').onclick = () => {
        this.questManager?.abandonQuest(questId);
        this.trackedQuests.delete(questId);
        confirmEl.classList.remove('show');
        this.updateQuestList();
        this.updateHUDTracker();
        document.getElementById('quest-details').innerHTML = 
          '<div class="quest-details-empty">Select a quest to view details</div>';
      };
      
    } else if (action === 'accept') {
      const result = this.questManager?.acceptQuest(questId);
      if (result?.success) {
        // Auto-track new quest
        if (this.trackedQuests.size < MAX_TRACKED_QUESTS) {
          this.trackedQuests.add(questId);
        }
        this.switchTab('active');
        this.showQuestDetails(questId);
        this.updateHUDTracker();
      }
    }
  }

  // ========== HUD TRACKER UPDATE ==========
  
  updateHUDTracker() {
    const content = document.getElementById('hud-tracker-content');
    if (!content || !this.questManager) return;
    
    // If no tracked quests, show the most recent active quests
    let questsToShow = Array.from(this.trackedQuests);
    
    if (questsToShow.length === 0) {
      // Auto-show first few active quests
      const active = Array.from(this.questManager.activeQuests.keys());
      questsToShow = active.slice(0, MAX_TRACKED_QUESTS);
    }
    
    if (questsToShow.length === 0) {
      content.innerHTML = '<div class="hud-tracker-empty">No active quests — Press J to browse</div>';
      return;
    }
    
    content.innerHTML = questsToShow.map(questId => {
      const quest = getQuest(questId);
      const state = this.questManager.getQuestState(questId);
      if (!quest || !state) return '';
      
      const isReady = state.status === QUEST_STATUS.READY_TO_TURN_IN;
      
      const objectivesHtml = state.objectives.slice(0, 3).map(obj => {
        const complete = obj.current >= obj.required;
        return `
          <div class="hud-objective ${complete ? 'complete' : ''}">
            <span class="hud-objective-name">${obj.targetName}</span>
            <span class="hud-objective-progress">${obj.current}/${obj.required}</span>
          </div>
        `;
      }).join('');
      
      return `
        <div class="hud-quest-entry ${isReady ? 'ready' : ''}">
          <div class="hud-quest-title">${quest.title}</div>
          ${objectivesHtml}
        </div>
      `;
    }).join('');
  }

  // ========== EVENT HANDLERS ==========
  
  onQuestAccepted(data) {
    this.showNotification('New Quest', data.quest.title, 'new-quest');
    this.updateQuestList();
    this.updateHUDTracker();
  }

  onObjectiveProgress(data) {
    this.updateHUDTracker();
    if (this.isOpen) {
      this.showQuestDetails(data.questId);
    }
  }

  onObjectiveComplete(data) {
    this.updateHUDTracker();
  }

  onQuestReadyForTurnIn(data) {
    this.showNotification('Quest Complete', `${data.quest.title} — Return to ${data.quest.turnIn}`, 'complete');
    this.updateQuestList();
    this.updateHUDTracker();
  }

  onQuestTurnedIn(data) {
    this.trackedQuests.delete(data.questId);
    this.showCompletionPopup(data.quest, data.rewards);
    this.updateQuestList();
    this.updateHUDTracker();
  }

  onQuestFailed(data) {
    this.trackedQuests.delete(data.questId);
    this.showNotification('Quest Failed', `${data.quest.title} — ${data.reason}`, 'failed');
    this.updateQuestList();
    this.updateHUDTracker();
  }

  onQuestAvailable(data) {
    const quest = getQuest(data.questId);
    if (quest) {
      this.showNotification('Quest Available', quest.title, 'available');
    }
    this.updateQuestList();
  }

  showCompletionPopup(quest, rewards) {
    const popup = document.getElementById('quest-completion-popup');
    if (!popup) return;
    
    document.getElementById('completion-quest-name').textContent = quest.title;
    
    let rewardsHtml = '';
    if (rewards.gold > 0) {
      rewardsHtml += `<span class="completion-reward gold">💰 ${rewards.gold} Gold</span>`;
    }
    if (rewards.xp > 0) {
      rewardsHtml += `<span class="completion-reward xp">⭐ ${rewards.xp} XP</span>`;
    }
    if (rewards.items?.length > 0) {
      rewards.items.forEach(item => {
        const qty = item.quantity > 1 ? `${item.quantity}x ` : '';
        rewardsHtml += `<span class="completion-reward item">📦 ${qty}${item.id}</span>`;
      });
    }
    document.getElementById('completion-rewards').innerHTML = rewardsHtml;
    
    popup.classList.add('show');
    
    setTimeout(() => {
      popup.classList.remove('show');
    }, COMPLETION_POPUP_DURATION);
  }

  // ========== UTILITY ==========
  
  getQuestTypeIcon(type) {
    const icons = {
      [QUEST_TYPE.KILL]: '⚔️',
      [QUEST_TYPE.GATHER]: '📦',
      [QUEST_TYPE.EXPLORE]: '🗺️',
      [QUEST_TYPE.DELIVER]: '📬',
      [QUEST_TYPE.ESCORT]: '🛡️',
      [QUEST_TYPE.BOSS]: '💀',
    };
    return icons[type] || '❓';
  }

  getObjectiveIcon(type) {
    const icons = {
      'kill_enemy': '⚔️',
      'kill_any': '⚔️',
      'gather_item': '📦',
      'visit_location': '📍',
      'talk_to_npc': '💬',
      'deliver_item': '📬',
      'escort_npc': '🛡️',
      'defeat_boss': '💀',
      'use_item': '🎯',
      'craft_item': '🔨',
    };
    return icons[type] || '•';
  }

  updatePlayerPosition(position) {
    this.playerPosition = position;
  }

  // ========== CLEANUP ==========
  
  destroy() {
    this.journalPanel?.remove();
    this.hudTracker?.remove();
    document.getElementById('quest-completion-popup')?.remove();
    document.getElementById('quest-notifications')?.remove();
    document.getElementById('quest-abandon-confirm')?.remove();
    document.getElementById('quest-ui-styles')?.remove();
  }
}

// ========== SINGLETON ==========
let questUIInstance = null;

export function createQuestUI() {
  if (!questUIInstance) {
    questUIInstance = new QuestUI();
  }
  return questUIInstance;
}

export function getQuestUI() {
  return questUIInstance;
}

export { QuestUI };
export default QuestUI;
