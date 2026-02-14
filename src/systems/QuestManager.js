/**
 * QuestManager.js - Quest Tracking and Management System
 * Phase 25: Quest System
 * 
 * Manages active, completed, and available quests.
 * Tracks progress, handles completion, and awards rewards.
 */

import {
  QUESTS,
  QUEST_TYPE,
  QUEST_STATUS,
  QUEST_DIFFICULTY,
  OBJECTIVE_TYPE,
  QUEST_GIVERS,
  QUEST_CHAINS,
  DIFFICULTY_SCALE,
  getQuest,
  getQuestsForGiver,
  arePrerequisitesMet,
  getRelativeDifficulty,
  getNextInChain,
  getQuestGiver,
} from '../data/QuestData.js';

// ========== CONSTANTS ==========
const MAX_ACTIVE_QUESTS = 10;
const STORAGE_KEY = 'ashen_quest_state';
const QUEST_MARKER_UPDATE_INTERVAL = 1000; // ms

// ========== QUEST MANAGER CLASS ==========
class QuestManager {
  constructor() {
    // Quest tracking
    this.activeQuests = new Map(); // questId -> questState
    this.completedQuests = new Set(); // questId
    this.availableQuests = new Set(); // questId
    this.failedQuests = new Set(); // questId
    this.questCooldowns = new Map(); // questId -> cooldownEndTime
    
    // Time tracking for timed quests
    this.questStartTimes = new Map(); // questId -> startTime
    
    // Event callbacks
    this.eventListeners = {
      onQuestAccepted: [],
      onObjectiveProgress: [],
      onObjectiveComplete: [],
      onQuestComplete: [],
      onQuestTurnedIn: [],
      onQuestFailed: [],
      onQuestAbandoned: [],
      onQuestAvailable: [],
    };
    
    // UI references
    this.questUI = null;
    this.questMarkers = new Map(); // questId -> marker3D
    
    // Reference to game systems (set during init)
    this.playerInventory = null;
    this.playerStats = null;
    
    // Initialize
    this.loadState();
    this.updateAvailableQuests();
  }

  // ========== INITIALIZATION ==========
  
  /**
   * Initialize with game system references
   */
  init(systems = {}) {
    this.playerInventory = systems.inventory || null;
    this.playerStats = systems.stats || null;
    this.scene = systems.scene || null;
    
    // Create UI
    this.createQuestUI();
    
    // Start timed quest checker
    this.startTimedQuestChecker();
    
    console.log('[QuestManager] Initialized with', this.activeQuests.size, 'active quests');
  }

  // ========== QUEST ACCEPTANCE ==========
  
  /**
   * Accept a quest
   */
  acceptQuest(questId) {
    const questDef = getQuest(questId);
    if (!questDef) {
      console.warn(`[QuestManager] Quest not found: ${questId}`);
      return { success: false, reason: 'Quest not found' };
    }
    
    // Check if already active
    if (this.activeQuests.has(questId)) {
      return { success: false, reason: 'Quest already active' };
    }
    
    // Check if already completed (non-repeatable)
    if (this.completedQuests.has(questId) && !questDef.isRepeatable) {
      return { success: false, reason: 'Quest already completed' };
    }
    
    // Check cooldown for repeatable quests
    if (questDef.isRepeatable && this.questCooldowns.has(questId)) {
      const cooldownEnd = this.questCooldowns.get(questId);
      if (Date.now() < cooldownEnd) {
        const remaining = Math.ceil((cooldownEnd - Date.now()) / 60000);
        return { success: false, reason: `Quest on cooldown (${remaining} min remaining)` };
      }
    }
    
    // Check max active quests
    if (this.activeQuests.size >= MAX_ACTIVE_QUESTS) {
      return { success: false, reason: `Max ${MAX_ACTIVE_QUESTS} active quests` };
    }
    
    // Check prerequisites
    if (!arePrerequisitesMet(questId, Array.from(this.completedQuests))) {
      return { success: false, reason: 'Prerequisites not met' };
    }
    
    // Create quest state with deep copy of objectives
    const questState = {
      id: questId,
      status: QUEST_STATUS.ACTIVE,
      objectives: questDef.objectives.map(obj => ({ ...obj, current: 0 })),
      optionalObjectives: (questDef.optionalObjectives || []).map(obj => ({ ...obj, current: 0 })),
      acceptedAt: Date.now(),
      timeLimit: questDef.timeLimitMinutes ? questDef.timeLimitMinutes * 60 * 1000 : null,
    };
    
    // Add to active quests
    this.activeQuests.set(questId, questState);
    this.questStartTimes.set(questId, Date.now());
    this.availableQuests.delete(questId);
    
    // Give auto-received items (for delivery quests)
    questDef.objectives.forEach(obj => {
      if (obj.autoReceived && obj.questItem && this.playerInventory) {
        this.playerInventory.addItem({ id: obj.target, quantity: 1, isQuestItem: true });
      }
    });
    
    // Emit event
    this.emit('onQuestAccepted', { questId, quest: questDef, state: questState });
    
    // Update UI
    this.updateQuestUI();
    this.saveState();
    
    // Show notification
    this.showNotification(`Quest Accepted: ${questDef.title}`, 'accept');
    
    console.log(`[QuestManager] Accepted quest: ${questDef.title}`);
    return { success: true, quest: questDef };
  }

  // ========== PROGRESS TRACKING ==========
  
  /**
   * Update quest progress
   * @param {string} type - Objective type (kill_enemy, gather_item, etc)
   * @param {string} target - Target identifier
   * @param {number} amount - Progress amount
   */
  updateProgress(type, target, amount = 1) {
    let anyProgress = false;
    
    this.activeQuests.forEach((questState, questId) => {
      const questDef = getQuest(questId);
      if (!questDef) return;
      
      // Check main objectives
      questState.objectives.forEach((obj, index) => {
        if (this.objectiveMatches(obj, type, target) && obj.current < obj.required) {
          const oldCurrent = obj.current;
          obj.current = Math.min(obj.current + amount, obj.required);
          
          if (obj.current > oldCurrent) {
            anyProgress = true;
            
            this.emit('onObjectiveProgress', {
              questId,
              objectiveId: obj.id,
              objective: obj,
              progress: obj.current,
              required: obj.required,
            });
            
            // Check if objective complete
            if (obj.current >= obj.required) {
              this.emit('onObjectiveComplete', {
                questId,
                objectiveId: obj.id,
                objective: obj,
              });
              
              this.showNotification(`Objective Complete: ${obj.targetName}`, 'progress');
            } else {
              this.showNotification(`${obj.targetName}: ${obj.current}/${obj.required}`, 'progress', true);
            }
          }
        }
      });
      
      // Check optional objectives
      (questState.optionalObjectives || []).forEach((obj) => {
        if (this.objectiveMatches(obj, type, target) && obj.current < obj.required) {
          obj.current = Math.min(obj.current + amount, obj.required);
          
          if (obj.current >= obj.required) {
            this.showNotification(`Bonus Objective: ${obj.targetName}`, 'bonus');
          }
        }
      });
      
      // Check if quest is now complete
      this.checkQuestCompletion(questId);
    });
    
    if (anyProgress) {
      this.updateQuestUI();
      this.saveState();
    }
    
    return anyProgress;
  }

  /**
   * Check if objective matches update type and target
   */
  objectiveMatches(obj, type, target) {
    // Type mapping
    const typeMap = {
      'kill': [OBJECTIVE_TYPE.KILL_ENEMY, OBJECTIVE_TYPE.KILL_ANY, OBJECTIVE_TYPE.DEFEAT_BOSS],
      'gather': [OBJECTIVE_TYPE.GATHER_ITEM],
      'explore': [OBJECTIVE_TYPE.VISIT_LOCATION],
      'deliver': [OBJECTIVE_TYPE.DELIVER_ITEM],
      'escort': [OBJECTIVE_TYPE.ESCORT_NPC],
      'boss': [OBJECTIVE_TYPE.DEFEAT_BOSS],
      'talk': [OBJECTIVE_TYPE.TALK_TO_NPC],
      'use': [OBJECTIVE_TYPE.USE_ITEM],
      'craft': [OBJECTIVE_TYPE.CRAFT_ITEM],
    };
    
    const validTypes = typeMap[type] || [type];
    if (!validTypes.includes(obj.type)) return false;
    
    // Check target match
    if (obj.type === OBJECTIVE_TYPE.KILL_ANY && obj.validTargets) {
      return obj.validTargets.includes(target);
    }
    
    return obj.target === target || obj.target === target.toLowerCase();
  }

  // ========== COMPLETION ==========
  
  /**
   * Check if quest objectives are complete
   */
  checkQuestCompletion(questId) {
    const questState = this.activeQuests.get(questId);
    if (!questState) return false;
    
    const allComplete = questState.objectives.every(obj => obj.current >= obj.required);
    
    if (allComplete && questState.status !== QUEST_STATUS.READY_TO_TURN_IN) {
      questState.status = QUEST_STATUS.READY_TO_TURN_IN;
      
      const questDef = getQuest(questId);
      this.emit('onQuestComplete', { questId, quest: questDef, state: questState });
      
      this.showNotification(`Quest Complete: ${questDef.title}`, 'complete');
      
      console.log(`[QuestManager] Quest ready for turn-in: ${questDef.title}`);
      return true;
    }
    
    return false;
  }

  /**
   * Turn in a completed quest
   */
  turnInQuest(questId) {
    const questState = this.activeQuests.get(questId);
    if (!questState) {
      return { success: false, reason: 'Quest not active' };
    }
    
    if (questState.status !== QUEST_STATUS.READY_TO_TURN_IN) {
      return { success: false, reason: 'Quest objectives not complete' };
    }
    
    const questDef = getQuest(questId);
    
    // Calculate rewards (including optional bonuses)
    const rewards = { ...questDef.rewards };
    let bonusRewards = { gold: 0, xp: 0, items: [] };
    
    // Check optional objectives for bonus rewards
    (questState.optionalObjectives || []).forEach(obj => {
      if (obj.current >= obj.required && obj.bonusReward) {
        bonusRewards.gold += obj.bonusReward.gold || 0;
        bonusRewards.xp += obj.bonusReward.xp || 0;
        bonusRewards.items.push(...(obj.bonusReward.items || []));
      }
    });
    
    // Apply rewards
    const totalGold = rewards.gold + bonusRewards.gold;
    const totalXp = rewards.xp + bonusRewards.xp;
    const allItems = [...(rewards.items || []), ...bonusRewards.items];
    
    // Give rewards to player
    if (this.playerStats) {
      if (totalGold > 0) this.playerStats.addGold(totalGold);
      if (totalXp > 0) this.playerStats.addXp(totalXp);
    }
    
    if (this.playerInventory && allItems.length > 0) {
      allItems.forEach(item => {
        this.playerInventory.addItem({
          id: item.id,
          quantity: item.quantity || 1,
        });
      });
    }
    
    // Remove quest items from inventory
    questDef.objectives.forEach(obj => {
      if (obj.questItem && this.playerInventory) {
        this.playerInventory.removeItem(obj.target, obj.required);
      }
    });
    
    // Move to completed
    this.activeQuests.delete(questId);
    this.completedQuests.add(questId);
    this.questStartTimes.delete(questId);
    
    // Set cooldown for repeatable quests
    if (questDef.isRepeatable && questDef.cooldownHours > 0) {
      const cooldownEnd = Date.now() + (questDef.cooldownHours * 60 * 60 * 1000);
      this.questCooldowns.set(questId, cooldownEnd);
    }
    
    // Unlock next quests
    if (questDef.unlocks) {
      questDef.unlocks.forEach(unlockedId => {
        if (arePrerequisitesMet(unlockedId, Array.from(this.completedQuests))) {
          this.availableQuests.add(unlockedId);
          this.emit('onQuestAvailable', { questId: unlockedId });
        }
      });
    }
    
    // Emit event
    this.emit('onQuestTurnedIn', {
      questId,
      quest: questDef,
      rewards: { gold: totalGold, xp: totalXp, items: allItems },
    });
    
    // Update UI
    this.updateQuestUI();
    this.updateAvailableQuests();
    this.saveState();
    
    // Show reward notification
    this.showRewardNotification(totalGold, totalXp, allItems);
    
    console.log(`[QuestManager] Turned in quest: ${questDef.title}`);
    return { success: true, rewards: { gold: totalGold, xp: totalXp, items: allItems } };
  }

  // ========== QUEST MANAGEMENT ==========
  
  /**
   * Abandon a quest
   */
  abandonQuest(questId) {
    const questState = this.activeQuests.get(questId);
    if (!questState) {
      return { success: false, reason: 'Quest not active' };
    }
    
    const questDef = getQuest(questId);
    
    // Remove quest items
    questDef.objectives.forEach(obj => {
      if (obj.questItem && this.playerInventory) {
        this.playerInventory.removeItem(obj.target);
      }
    });
    
    // Remove from active
    this.activeQuests.delete(questId);
    this.questStartTimes.delete(questId);
    
    // Add back to available if not failed permanently
    if (!questDef.isRepeatable || !this.completedQuests.has(questId)) {
      this.availableQuests.add(questId);
    }
    
    this.emit('onQuestAbandoned', { questId, quest: questDef });
    
    this.updateQuestUI();
    this.saveState();
    
    this.showNotification(`Quest Abandoned: ${questDef.title}`, 'abandon');
    
    console.log(`[QuestManager] Abandoned quest: ${questDef.title}`);
    return { success: true };
  }

  /**
   * Fail a quest (timed out, escort died, etc)
   */
  failQuest(questId, reason = 'Failed') {
    const questState = this.activeQuests.get(questId);
    if (!questState) return;
    
    const questDef = getQuest(questId);
    
    // Remove quest items
    questDef.objectives.forEach(obj => {
      if (obj.questItem && this.playerInventory) {
        this.playerInventory.removeItem(obj.target);
      }
    });
    
    this.activeQuests.delete(questId);
    this.questStartTimes.delete(questId);
    
    // For repeatable quests, add back to available after cooldown
    if (questDef.isRepeatable) {
      const cooldownEnd = Date.now() + (30 * 60 * 1000); // 30 min fail cooldown
      this.questCooldowns.set(questId, cooldownEnd);
    } else {
      this.failedQuests.add(questId);
    }
    
    this.emit('onQuestFailed', { questId, quest: questDef, reason });
    
    this.updateQuestUI();
    this.saveState();
    
    this.showNotification(`Quest Failed: ${questDef.title} - ${reason}`, 'fail');
    
    console.log(`[QuestManager] Quest failed: ${questDef.title} - ${reason}`);
  }

  // ========== TIMED QUEST CHECKING ==========
  
  /**
   * Start the timer checker for timed quests
   */
  startTimedQuestChecker() {
    setInterval(() => {
      const now = Date.now();
      
      this.activeQuests.forEach((questState, questId) => {
        if (questState.timeLimit) {
          const elapsed = now - questState.acceptedAt;
          if (elapsed >= questState.timeLimit) {
            this.failQuest(questId, 'Time expired');
          }
        }
      });
      
      // Clean up expired cooldowns
      this.questCooldowns.forEach((endTime, questId) => {
        if (now >= endTime) {
          this.questCooldowns.delete(questId);
          const questDef = getQuest(questId);
          if (questDef && questDef.isRepeatable) {
            this.availableQuests.add(questId);
          }
        }
      });
    }, 5000); // Check every 5 seconds
  }

  // ========== AVAILABLE QUESTS ==========
  
  /**
   * Update available quests based on prerequisites
   */
  updateAvailableQuests() {
    const completedArr = Array.from(this.completedQuests);
    
    Object.values(QUESTS).forEach(quest => {
      const questId = quest.id;
      
      // Skip if already active or completed (non-repeatable)
      if (this.activeQuests.has(questId)) return;
      if (this.completedQuests.has(questId) && !quest.isRepeatable) return;
      if (this.failedQuests.has(questId)) return;
      
      // Check cooldown
      if (this.questCooldowns.has(questId)) {
        if (Date.now() < this.questCooldowns.get(questId)) return;
        this.questCooldowns.delete(questId);
      }
      
      // Check prerequisites
      if (arePrerequisitesMet(questId, completedArr)) {
        this.availableQuests.add(questId);
      } else {
        this.availableQuests.delete(questId);
      }
    });
  }

  /**
   * Get available quests for a specific NPC
   */
  getAvailableQuestsForNpc(npcId) {
    return Array.from(this.availableQuests)
      .map(id => getQuest(id))
      .filter(q => q && q.giver === npcId);
  }

  /**
   * Get turn-in quests for a specific NPC
   */
  getTurnInQuestsForNpc(npcId) {
    const result = [];
    
    this.activeQuests.forEach((state, questId) => {
      const quest = getQuest(questId);
      if (quest && quest.turnIn === npcId && state.status === QUEST_STATUS.READY_TO_TURN_IN) {
        result.push({ quest, state });
      }
    });
    
    return result;
  }

  // ========== LOCATION TRACKING ==========
  
  /**
   * Check if player is in a quest location
   */
  checkLocation(playerPosition) {
    this.activeQuests.forEach((questState, questId) => {
      questState.objectives.forEach(obj => {
        if (obj.type === OBJECTIVE_TYPE.VISIT_LOCATION && obj.current < obj.required) {
          const pos = obj.position;
          const radius = obj.radius || 10;
          
          const dx = playerPosition.x - pos.x;
          const dz = playerPosition.z - pos.z;
          const distance = Math.sqrt(dx * dx + dz * dz);
          
          if (distance <= radius) {
            this.updateProgress('explore', obj.target, 1);
          }
        }
      });
      
      // Check escort destination
      questState.objectives.forEach(obj => {
        if (obj.type === OBJECTIVE_TYPE.ESCORT_NPC && obj.destinationPosition) {
          const pos = obj.destinationPosition;
          const radius = obj.destinationRadius || 10;
          
          const dx = playerPosition.x - pos.x;
          const dz = playerPosition.z - pos.z;
          const distance = Math.sqrt(dx * dx + dz * dz);
          
          if (distance <= radius) {
            obj.current = obj.required;
            this.checkQuestCompletion(questId);
          }
        }
      });
    });
  }

  // ========== EVENT SYSTEM ==========
  
  /**
   * Add event listener
   */
  on(event, callback) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].push(callback);
    }
    return () => this.off(event, callback);
  }

  /**
   * Remove event listener
   */
  off(event, callback) {
    if (this.eventListeners[event]) {
      this.eventListeners[event] = this.eventListeners[event].filter(cb => cb !== callback);
    }
  }

  /**
   * Emit event
   */
  emit(event, data) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].forEach(callback => {
        try {
          callback(data);
        } catch (e) {
          console.error(`[QuestManager] Event handler error:`, e);
        }
      });
    }
  }

  // ========== PERSISTENCE ==========
  
  /**
   * Save state to localStorage
   */
  saveState() {
    const state = {
      activeQuests: Array.from(this.activeQuests.entries()),
      completedQuests: Array.from(this.completedQuests),
      failedQuests: Array.from(this.failedQuests),
      questCooldowns: Array.from(this.questCooldowns.entries()),
      questStartTimes: Array.from(this.questStartTimes.entries()),
    };
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('[QuestManager] Failed to save state:', e);
    }
  }

  /**
   * Load state from localStorage
   */
  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      
      const state = JSON.parse(saved);
      
      this.activeQuests = new Map(state.activeQuests || []);
      this.completedQuests = new Set(state.completedQuests || []);
      this.failedQuests = new Set(state.failedQuests || []);
      this.questCooldowns = new Map(state.questCooldowns || []);
      this.questStartTimes = new Map(state.questStartTimes || []);
      
      console.log('[QuestManager] Loaded state:', {
        active: this.activeQuests.size,
        completed: this.completedQuests.size,
      });
    } catch (e) {
      console.warn('[QuestManager] Failed to load state:', e);
    }
  }

  /**
   * Reset all quest progress
   */
  resetAllProgress() {
    this.activeQuests.clear();
    this.completedQuests.clear();
    this.failedQuests.clear();
    this.questCooldowns.clear();
    this.questStartTimes.clear();
    this.updateAvailableQuests();
    this.updateQuestUI();
    this.saveState();
    console.log('[QuestManager] Reset all progress');
  }

  // ========== UI ==========
  
  /**
   * Create quest tracking UI
   */
  createQuestUI() {
    // Remove existing
    const existing = document.getElementById('quest-tracker');
    if (existing) existing.remove();
    
    // Create container
    const container = document.createElement('div');
    container.id = 'quest-tracker';
    container.innerHTML = `
      <style>
        #quest-tracker {
          position: fixed;
          top: 120px;
          right: 10px;
          width: 280px;
          max-height: 400px;
          background: rgba(0, 0, 0, 0.75);
          border: 1px solid #444;
          border-radius: 8px;
          color: #fff;
          font-family: 'Segoe UI', sans-serif;
          font-size: 12px;
          z-index: 1000;
          overflow: hidden;
        }
        
        #quest-tracker-header {
          background: linear-gradient(180deg, #3a3a3a, #2a2a2a);
          padding: 8px 12px;
          font-weight: bold;
          font-size: 14px;
          border-bottom: 1px solid #444;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        #quest-tracker-header:hover {
          background: linear-gradient(180deg, #4a4a4a, #3a3a3a);
        }
        
        #quest-tracker-content {
          max-height: 340px;
          overflow-y: auto;
          padding: 8px;
        }
        
        .quest-entry {
          background: rgba(50, 50, 50, 0.6);
          border-radius: 6px;
          padding: 8px;
          margin-bottom: 8px;
        }
        
        .quest-entry:last-child {
          margin-bottom: 0;
        }
        
        .quest-title {
          font-weight: bold;
          font-size: 13px;
          margin-bottom: 6px;
          display: flex;
          justify-content: space-between;
        }
        
        .quest-title-text {
          color: #ffd700;
        }
        
        .quest-status {
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 3px;
        }
        
        .quest-status.ready { background: #2d5a2d; color: #7fff7f; }
        .quest-status.active { background: #3a3a3a; color: #aaa; }
        
        .quest-objective {
          display: flex;
          align-items: center;
          margin: 4px 0;
          font-size: 11px;
        }
        
        .quest-objective.complete {
          color: #7fff7f;
          text-decoration: line-through;
          opacity: 0.7;
        }
        
        .quest-objective.optional {
          color: #aaaaff;
        }
        
        .objective-icon {
          margin-right: 6px;
          font-size: 10px;
        }
        
        .objective-progress {
          margin-left: auto;
          color: #aaa;
        }
        
        .quest-time {
          font-size: 10px;
          color: #ff8844;
          margin-top: 4px;
        }
        
        #quest-notification {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(0, 0, 0, 0.9);
          border: 2px solid #ffd700;
          border-radius: 10px;
          padding: 20px 40px;
          color: #fff;
          font-family: 'Segoe UI', sans-serif;
          z-index: 2000;
          text-align: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s;
        }
        
        #quest-notification.show {
          opacity: 1;
        }
        
        #quest-notification.accept { border-color: #4488ff; }
        #quest-notification.complete { border-color: #44ff44; }
        #quest-notification.fail { border-color: #ff4444; }
        #quest-notification.abandon { border-color: #888; }
        
        #quest-notification-title {
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        
        #quest-notification-text {
          font-size: 14px;
          color: #ccc;
        }
        
        .quest-empty {
          color: #666;
          text-align: center;
          padding: 20px;
          font-style: italic;
        }
      </style>
      
      <div id="quest-tracker-header">
        <span>📜 Active Quests</span>
        <span id="quest-count">0/${MAX_ACTIVE_QUESTS}</span>
      </div>
      
      <div id="quest-tracker-content">
        <div class="quest-empty">No active quests</div>
      </div>
    `;
    
    // Create notification element
    const notification = document.createElement('div');
    notification.id = 'quest-notification';
    notification.innerHTML = `
      <div id="quest-notification-title"></div>
      <div id="quest-notification-text"></div>
    `;
    
    document.body.appendChild(container);
    document.body.appendChild(notification);
    
    // Toggle collapse
    const header = document.getElementById('quest-tracker-header');
    const content = document.getElementById('quest-tracker-content');
    let collapsed = false;
    
    header.addEventListener('click', () => {
      collapsed = !collapsed;
      content.style.display = collapsed ? 'none' : 'block';
    });
    
    this.questUI = container;
    this.updateQuestUI();
  }

  /**
   * Update quest tracker UI
   */
  updateQuestUI() {
    const content = document.getElementById('quest-tracker-content');
    const countEl = document.getElementById('quest-count');
    if (!content) return;
    
    countEl.textContent = `${this.activeQuests.size}/${MAX_ACTIVE_QUESTS}`;
    
    if (this.activeQuests.size === 0) {
      content.innerHTML = '<div class="quest-empty">No active quests</div>';
      return;
    }
    
    let html = '';
    
    this.activeQuests.forEach((state, questId) => {
      const quest = getQuest(questId);
      if (!quest) return;
      
      const isReady = state.status === QUEST_STATUS.READY_TO_TURN_IN;
      const statusClass = isReady ? 'ready' : 'active';
      const statusText = isReady ? 'Turn In' : 'In Progress';
      
      html += `
        <div class="quest-entry" data-quest-id="${questId}">
          <div class="quest-title">
            <span class="quest-title-text">${quest.title}</span>
            <span class="quest-status ${statusClass}">${statusText}</span>
          </div>
      `;
      
      // Main objectives
      state.objectives.forEach(obj => {
        const complete = obj.current >= obj.required;
        const icon = this.getObjectiveIcon(obj.type);
        
        html += `
          <div class="quest-objective ${complete ? 'complete' : ''}">
            <span class="objective-icon">${icon}</span>
            <span>${obj.targetName}</span>
            <span class="objective-progress">${obj.current}/${obj.required}</span>
          </div>
        `;
      });
      
      // Optional objectives
      (state.optionalObjectives || []).forEach(obj => {
        const complete = obj.current >= obj.required;
        const icon = this.getObjectiveIcon(obj.type);
        
        html += `
          <div class="quest-objective optional ${complete ? 'complete' : ''}">
            <span class="objective-icon">⭐</span>
            <span>(Bonus) ${obj.targetName}</span>
            <span class="objective-progress">${obj.current}/${obj.required}</span>
          </div>
        `;
      });
      
      // Time remaining
      if (state.timeLimit) {
        const elapsed = Date.now() - state.acceptedAt;
        const remaining = Math.max(0, state.timeLimit - elapsed);
        const mins = Math.floor(remaining / 60000);
        const secs = Math.floor((remaining % 60000) / 1000);
        
        html += `<div class="quest-time">⏱️ Time: ${mins}:${secs.toString().padStart(2, '0')}</div>`;
      }
      
      html += '</div>';
    });
    
    content.innerHTML = html;
  }

  /**
   * Get icon for objective type
   */
  getObjectiveIcon(type) {
    const icons = {
      [OBJECTIVE_TYPE.KILL_ENEMY]: '⚔️',
      [OBJECTIVE_TYPE.KILL_ANY]: '⚔️',
      [OBJECTIVE_TYPE.GATHER_ITEM]: '📦',
      [OBJECTIVE_TYPE.VISIT_LOCATION]: '📍',
      [OBJECTIVE_TYPE.TALK_TO_NPC]: '💬',
      [OBJECTIVE_TYPE.DELIVER_ITEM]: '📬',
      [OBJECTIVE_TYPE.ESCORT_NPC]: '🛡️',
      [OBJECTIVE_TYPE.DEFEAT_BOSS]: '💀',
      [OBJECTIVE_TYPE.USE_ITEM]: '🎯',
      [OBJECTIVE_TYPE.CRAFT_ITEM]: '🔨',
    };
    
    return icons[type] || '•';
  }

  /**
   * Show notification
   */
  showNotification(text, type = 'info', brief = false) {
    const notif = document.getElementById('quest-notification');
    if (!notif) return;
    
    const titleEl = document.getElementById('quest-notification-title');
    const textEl = document.getElementById('quest-notification-text');
    
    notif.className = `show ${type}`;
    
    if (type === 'accept') {
      titleEl.textContent = '📜 Quest Accepted';
      textEl.textContent = text.replace('Quest Accepted: ', '');
    } else if (type === 'complete') {
      titleEl.textContent = '✅ Quest Complete!';
      textEl.textContent = text.replace('Quest Complete: ', '');
    } else if (type === 'fail') {
      titleEl.textContent = '❌ Quest Failed';
      textEl.textContent = text.replace('Quest Failed: ', '');
    } else if (type === 'progress') {
      titleEl.textContent = '📋 Progress';
      textEl.textContent = text;
    } else if (type === 'bonus') {
      titleEl.textContent = '⭐ Bonus Complete!';
      textEl.textContent = text;
    } else {
      titleEl.textContent = text;
      textEl.textContent = '';
    }
    
    const duration = brief ? 1500 : 3000;
    
    setTimeout(() => {
      notif.classList.remove('show');
    }, duration);
  }

  /**
   * Show reward notification
   */
  showRewardNotification(gold, xp, items) {
    const notif = document.getElementById('quest-notification');
    if (!notif) return;
    
    const titleEl = document.getElementById('quest-notification-title');
    const textEl = document.getElementById('quest-notification-text');
    
    notif.className = 'show complete';
    titleEl.textContent = '🎉 Rewards!';
    
    let rewardText = '';
    if (gold > 0) rewardText += `💰 ${gold} Gold  `;
    if (xp > 0) rewardText += `⭐ ${xp} XP  `;
    if (items.length > 0) {
      rewardText += items.map(i => `📦 ${i.quantity || 1}x ${i.id}`).join('  ');
    }
    
    textEl.textContent = rewardText;
    
    setTimeout(() => {
      notif.classList.remove('show');
    }, 4000);
  }

  // ========== GETTERS ==========
  
  /**
   * Get active quest state
   */
  getQuestState(questId) {
    return this.activeQuests.get(questId);
  }

  /**
   * Get all active quests
   */
  getActiveQuests() {
    return Array.from(this.activeQuests.entries()).map(([id, state]) => ({
      id,
      quest: getQuest(id),
      state,
    }));
  }

  /**
   * Get completed quest IDs
   */
  getCompletedQuests() {
    return Array.from(this.completedQuests);
  }

  /**
   * Get available quest IDs
   */
  getAvailableQuests() {
    return Array.from(this.availableQuests);
  }

  /**
   * Check if player has an active quest
   */
  hasActiveQuest(questId) {
    return this.activeQuests.has(questId);
  }

  /**
   * Check if player has completed a quest
   */
  hasCompletedQuest(questId) {
    return this.completedQuests.has(questId);
  }

  /**
   * Get quest marker positions for map
   */
  getQuestMarkers() {
    const markers = [];
    
    // Available quest givers (yellow !)
    this.availableQuests.forEach(questId => {
      const quest = getQuest(questId);
      if (!quest) return;
      
      const giver = getQuestGiver(quest.giver);
      if (giver) {
        markers.push({
          type: 'available',
          position: giver.position,
          questId,
          npcId: quest.giver,
          icon: '!',
          color: '#ffff00',
        });
      }
    });
    
    // Turn-in NPCs (yellow ?)
    this.activeQuests.forEach((state, questId) => {
      const quest = getQuest(questId);
      if (!quest) return;
      
      if (state.status === QUEST_STATUS.READY_TO_TURN_IN) {
        const turnIn = getQuestGiver(quest.turnIn);
        if (turnIn) {
          markers.push({
            type: 'turn_in',
            position: turnIn.position,
            questId,
            npcId: quest.turnIn,
            icon: '?',
            color: '#ffff00',
          });
        }
      }
      
      // Objective markers
      state.objectives.forEach(obj => {
        if (obj.current >= obj.required) return;
        
        if (obj.type === OBJECTIVE_TYPE.VISIT_LOCATION && obj.position) {
          markers.push({
            type: 'objective',
            position: obj.position,
            questId,
            objectiveId: obj.id,
            icon: '📍',
            color: '#44aaff',
          });
        }
        
        if (obj.type === OBJECTIVE_TYPE.ESCORT_NPC && obj.destinationPosition) {
          markers.push({
            type: 'destination',
            position: obj.destinationPosition,
            questId,
            objectiveId: obj.id,
            icon: '🚩',
            color: '#44ff44',
          });
        }
      });
    });
    
    return markers;
  }

  /**
   * Check if quest item should drop
   */
  shouldDropQuestItem(itemId) {
    let shouldDrop = false;
    
    this.activeQuests.forEach((state) => {
      state.objectives.forEach(obj => {
        if (obj.questItem && obj.target === itemId && obj.current < obj.required) {
          shouldDrop = true;
        }
      });
    });
    
    return shouldDrop;
  }
}

// ========== SINGLETON ==========
let questManagerInstance = null;

export function createQuestManager() {
  if (!questManagerInstance) {
    questManagerInstance = new QuestManager();
  }
  return questManagerInstance;
}

export function getQuestManager() {
  return questManagerInstance;
}

export {
  QuestManager,
  MAX_ACTIVE_QUESTS,
  QUEST_STATUS,
  QUEST_TYPE,
  OBJECTIVE_TYPE,
};

export default QuestManager;
