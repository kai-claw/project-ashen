/**
 * QuestRewards.js - Quest Reward and Reputation System
 * Phase 25: Quest System - Worker 2
 * 
 * Handles reward calculations, reputation factions,
 * milestones, achievements, and reward chest animations.
 */

import * as THREE from 'three';
import {
  QUEST_DIFFICULTY,
  DIFFICULTY_SCALE,
  getQuest,
} from '../data/QuestData.js';

import { getQuestManager } from './QuestManager.js';

// ========== CONSTANTS ==========
const STORAGE_KEY = 'ashen_reputation';
const FIRST_COMPLETION_BONUS = 1.25; // 25% bonus for first time

// ========== FACTIONS ==========
export const FACTIONS = {
  VILLAGE: {
    id: 'village',
    name: 'Ashvale Village',
    description: 'The humble folk of Ashvale appreciate your help.',
    icon: '🏘️',
    color: '#8b4513',
  },
  HUNTERS_GUILD: {
    id: 'hunters_guild',
    name: 'Hunters Guild',
    description: 'Elite trackers and beast slayers.',
    icon: '🏹',
    color: '#228b22',
  },
  MAGES_CIRCLE: {
    id: 'mages_circle',
    name: 'Mages Circle',
    description: 'Arcane scholars seeking ancient knowledge.',
    icon: '🔮',
    color: '#4b0082',
  },
  MERCHANTS_UNION: {
    id: 'merchants_union',
    name: 'Merchants Union',
    description: 'Traders and craftsmen across the land.',
    icon: '💰',
    color: '#daa520',
  },
  SHADOW_BROKERS: {
    id: 'shadow_brokers',
    name: 'Shadow Brokers',
    description: 'Those who deal in secrets and shadows.',
    icon: '🎭',
    color: '#1a1a1a',
  },
};

// ========== REPUTATION TIERS ==========
export const REP_TIERS = {
  HATED: { name: 'Hated', min: -3000, color: '#ff0000', discount: 0.5 },
  HOSTILE: { name: 'Hostile', min: -1000, color: '#ff4444', discount: 0.8 },
  UNFRIENDLY: { name: 'Unfriendly', min: -100, color: '#ff8844', discount: 0.95 },
  NEUTRAL: { name: 'Neutral', min: 0, color: '#aaaaaa', discount: 1.0 },
  FRIENDLY: { name: 'Friendly', min: 500, color: '#88ff88', discount: 0.95 },
  HONORED: { name: 'Honored', min: 2000, color: '#44ff44', discount: 0.9 },
  REVERED: { name: 'Revered', min: 5000, color: '#44ffff', discount: 0.85 },
  EXALTED: { name: 'Exalted', min: 10000, color: '#ffff44', discount: 0.8 },
};

// ========== REPUTATION MILESTONES ==========
export const REP_MILESTONES = {
  village: [
    { rep: 500, type: 'title', value: 'Friend of Ashvale', description: 'Reach Friendly with Ashvale Village' },
    { rep: 2000, type: 'unlock', value: 'village_shop_tier2', description: 'Access to rare village goods' },
    { rep: 5000, type: 'title', value: 'Champion of Ashvale', description: 'Reach Revered with Ashvale Village' },
    { rep: 10000, type: 'cosmetic', value: 'village_banner_cape', description: 'Exclusive village banner cape' },
  ],
  hunters_guild: [
    { rep: 500, type: 'title', value: 'Apprentice Hunter', description: 'Join the Hunters Guild' },
    { rep: 2000, type: 'unlock', value: 'beast_tracking', description: 'Learn beast tracking ability' },
    { rep: 5000, type: 'title', value: 'Master Hunter', description: 'Earn Master Hunter rank' },
    { rep: 10000, type: 'cosmetic', value: 'legendary_bow_skin', description: 'Legendary bow appearance' },
  ],
  mages_circle: [
    { rep: 500, type: 'title', value: 'Initiate Mage', description: 'Gain access to basic spells' },
    { rep: 2000, type: 'unlock', value: 'arcane_shop', description: 'Access to arcane artifacts' },
    { rep: 5000, type: 'title', value: 'Archmage', description: 'Achieve Archmage status' },
    { rep: 10000, type: 'cosmetic', value: 'arcane_aura', description: 'Arcane aura effect' },
  ],
  merchants_union: [
    { rep: 500, type: 'discount', value: 0.05, description: '5% discount at all shops' },
    { rep: 2000, type: 'unlock', value: 'merchant_routes', description: 'Access to merchant caravans' },
    { rep: 5000, type: 'discount', value: 0.15, description: '15% discount at all shops' },
    { rep: 10000, type: 'title', value: 'Trade Prince', description: 'Honorary Trade Prince title' },
  ],
  shadow_brokers: [
    { rep: 500, type: 'unlock', value: 'black_market', description: 'Access to black market' },
    { rep: 2000, type: 'title', value: 'Shadow Agent', description: 'Recognized as Shadow Agent' },
    { rep: 5000, type: 'unlock', value: 'shadow_missions', description: 'Access to shadow missions' },
    { rep: 10000, type: 'cosmetic', value: 'shadow_cloak', description: 'Shadowy cloak effect' },
  ],
};

// ========== QUEST TO FACTION MAPPING ==========
const QUEST_FACTION_MAP = {
  // Village quests
  'first_steps': { village: 100 },
  'guard_duty': { village: 75 },
  'bandit_problem': { village: 150 },
  'the_captains_trust': { village: 200 },
  'urgent_medicine': { village: 100 },
  
  // Hunter quests
  'daily_hunt': { hunters_guild: 50 },
  'golem_threat': { hunters_guild: 200, village: 100 },
  'shadow_wraith_hunt': { hunters_guild: 300 },
  
  // Mage quests
  'explore_the_ruins': { mages_circle: 100 },
  'selenes_research': { mages_circle: 150 },
  
  // Merchant quests
  'merchant_delivery': { merchants_union: 50 },
  'escort_the_merchant': { merchants_union: 150 },
  'forge_materials': { merchants_union: 75 },
  'master_craftsmanship': { merchants_union: 200 },
  
  // Shadow broker quests
  'stranger_introduction': { shadow_brokers: 100 },
  
  // Herbalist / general
  'gathering_herbs': { village: 50 },
  'miras_special_brew': { village: 100 },
};

// ========== ACHIEVEMENTS ==========
export const ACHIEVEMENTS = {
  QUEST_NOVICE: {
    id: 'quest_novice',
    name: 'Quest Novice',
    description: 'Complete your first quest',
    icon: '📜',
    requirement: 1,
    type: 'quest_count',
  },
  QUEST_ADEPT: {
    id: 'quest_adept',
    name: 'Quest Adept',
    description: 'Complete 10 quests',
    icon: '📋',
    requirement: 10,
    type: 'quest_count',
  },
  QUEST_MASTER: {
    id: 'quest_master',
    name: 'Quest Master',
    description: 'Complete 25 quests',
    icon: '🏆',
    requirement: 25,
    type: 'quest_count',
  },
  QUEST_LEGEND: {
    id: 'quest_legend',
    name: 'Quest Legend',
    description: 'Complete 50 quests',
    icon: '👑',
    requirement: 50,
    type: 'quest_count',
  },
  BOSS_SLAYER: {
    id: 'boss_slayer',
    name: 'Boss Slayer',
    description: 'Complete 5 boss quests',
    icon: '💀',
    requirement: 5,
    type: 'boss_count',
  },
  DAILY_DEVOTEE: {
    id: 'daily_devotee',
    name: 'Daily Devotee',
    description: 'Complete 20 daily quests',
    icon: '📅',
    requirement: 20,
    type: 'daily_count',
  },
  REP_FRIENDLY: {
    id: 'rep_friendly',
    name: 'Making Friends',
    description: 'Reach Friendly with any faction',
    icon: '🤝',
    requirement: 500,
    type: 'rep_any',
  },
  REP_EXALTED: {
    id: 'rep_exalted',
    name: 'Legend Among Legends',
    description: 'Reach Exalted with any faction',
    icon: '⭐',
    requirement: 10000,
    type: 'rep_any',
  },
};

// ========== QUEST REWARDS SYSTEM ==========
class QuestRewardsSystem {
  constructor() {
    this.reputation = {}; // factionId -> rep value
    this.unlockedMilestones = new Set();
    this.titles = [];
    this.currentTitle = null;
    this.achievements = new Set();
    this.stats = {
      questsCompleted: 0,
      bossQuestsCompleted: 0,
      dailyQuestsCompleted: 0,
      totalGoldEarned: 0,
      totalXpEarned: 0,
    };
    
    // 3D reward chest
    this.rewardChest = null;
    this.scene = null;
    
    // Event callbacks
    this.eventListeners = {
      onReputationChange: [],
      onMilestoneUnlocked: [],
      onAchievementUnlocked: [],
      onTitleUnlocked: [],
    };
    
    // Load saved state
    this.loadState();
    
    // Create UI
    this.createStyles();
    this.createReputationPanel();
    this.createAchievementsPanel();
    this.createRewardChestUI();
  }

  // ========== INITIALIZATION ==========
  
  init(questManager, scene = null) {
    this.scene = scene;
    
    // Subscribe to quest completion
    questManager.on('onQuestTurnedIn', (data) => {
      this.handleQuestCompletion(data);
    });
    
    console.log('[QuestRewards] Initialized');
  }

  // ========== QUEST COMPLETION HANDLING ==========
  
  handleQuestCompletion(data) {
    const { questId, quest, rewards } = data;
    
    // Update stats
    this.stats.questsCompleted++;
    this.stats.totalGoldEarned += rewards.gold || 0;
    this.stats.totalXpEarned += rewards.xp || 0;
    
    if (quest.type === 'boss') {
      this.stats.bossQuestsCompleted++;
    }
    
    if (quest.isRepeatable) {
      this.stats.dailyQuestsCompleted++;
    }
    
    // Award reputation
    const factionRep = QUEST_FACTION_MAP[questId];
    if (factionRep) {
      Object.entries(factionRep).forEach(([factionId, amount]) => {
        this.addReputation(factionId, amount);
      });
    }
    
    // Check achievements
    this.checkAchievements();
    
    // Show reward chest (if scene available)
    if (this.scene) {
      this.showRewardChest(rewards);
    }
    
    this.saveState();
  }

  // ========== REWARD CALCULATION ==========
  
  /**
   * Calculate scaled rewards based on difficulty and bonuses
   */
  calculateRewards(questId, playerLevel = 1) {
    const quest = getQuest(questId);
    if (!quest) return null;
    
    const baseRewards = { ...quest.rewards };
    const diffScale = DIFFICULTY_SCALE[quest.difficulty] || DIFFICULTY_SCALE.normal;
    
    // Apply difficulty scaling
    baseRewards.gold = Math.round(baseRewards.gold * diffScale.goldMult);
    baseRewards.xp = Math.round(baseRewards.xp * diffScale.xpMult);
    
    // First-time completion bonus
    const questManager = getQuestManager();
    if (questManager && !questManager.hasCompletedQuest(questId)) {
      baseRewards.gold = Math.round(baseRewards.gold * FIRST_COMPLETION_BONUS);
      baseRewards.xp = Math.round(baseRewards.xp * FIRST_COMPLETION_BONUS);
      baseRewards.isFirstTime = true;
    }
    
    return baseRewards;
  }

  /**
   * Get merchant discount based on faction rep
   */
  getMerchantDiscount(factionId = 'merchants_union') {
    const rep = this.reputation[factionId] || 0;
    const tier = this.getRepTier(rep);
    return tier.discount;
  }

  // ========== REPUTATION ==========
  
  addReputation(factionId, amount) {
    if (!FACTIONS[factionId.toUpperCase()] && !Object.values(FACTIONS).find(f => f.id === factionId)) {
      console.warn(`[QuestRewards] Unknown faction: ${factionId}`);
      return;
    }
    
    const normalizedId = factionId.toLowerCase();
    const oldRep = this.reputation[normalizedId] || 0;
    const newRep = oldRep + amount;
    this.reputation[normalizedId] = newRep;
    
    const oldTier = this.getRepTier(oldRep);
    const newTier = this.getRepTier(newRep);
    
    // Tier changed
    if (oldTier.name !== newTier.name) {
      this.showReputationChange(normalizedId, amount, newTier);
    }
    
    // Check milestones
    this.checkMilestones(normalizedId, newRep);
    
    this.emit('onReputationChange', {
      factionId: normalizedId,
      oldRep,
      newRep,
      change: amount,
      tier: newTier,
    });
    
    this.updateReputationPanel();
    this.saveState();
  }

  getReputation(factionId) {
    return this.reputation[factionId.toLowerCase()] || 0;
  }

  getRepTier(rep) {
    const tiers = Object.values(REP_TIERS).sort((a, b) => b.min - a.min);
    for (const tier of tiers) {
      if (rep >= tier.min) return tier;
    }
    return REP_TIERS.HATED;
  }

  checkMilestones(factionId, currentRep) {
    const milestones = REP_MILESTONES[factionId] || [];
    
    milestones.forEach(milestone => {
      const key = `${factionId}_${milestone.rep}`;
      
      if (currentRep >= milestone.rep && !this.unlockedMilestones.has(key)) {
        this.unlockedMilestones.add(key);
        
        // Handle milestone type
        if (milestone.type === 'title') {
          this.titles.push(milestone.value);
          this.emit('onTitleUnlocked', { title: milestone.value, description: milestone.description });
        }
        
        this.emit('onMilestoneUnlocked', { factionId, milestone });
        this.showMilestoneUnlocked(milestone);
      }
    });
  }

  // ========== ACHIEVEMENTS ==========
  
  checkAchievements() {
    Object.values(ACHIEVEMENTS).forEach(achievement => {
      if (this.achievements.has(achievement.id)) return;
      
      let earned = false;
      
      switch (achievement.type) {
        case 'quest_count':
          earned = this.stats.questsCompleted >= achievement.requirement;
          break;
        case 'boss_count':
          earned = this.stats.bossQuestsCompleted >= achievement.requirement;
          break;
        case 'daily_count':
          earned = this.stats.dailyQuestsCompleted >= achievement.requirement;
          break;
        case 'rep_any':
          earned = Object.values(this.reputation).some(rep => rep >= achievement.requirement);
          break;
      }
      
      if (earned) {
        this.achievements.add(achievement.id);
        this.emit('onAchievementUnlocked', { achievement });
        this.showAchievementUnlocked(achievement);
      }
    });
  }

  hasAchievement(achievementId) {
    return this.achievements.has(achievementId);
  }

  // ========== UI STYLES ==========
  
  createStyles() {
    if (document.getElementById('quest-rewards-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'quest-rewards-styles';
    style.textContent = `
      /* ===== REPUTATION PANEL ===== */
      #reputation-panel {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        max-height: 600px;
        background: linear-gradient(180deg, #1a1a2e, #0a0a1e);
        border: 2px solid #4a4a6a;
        border-radius: 12px;
        font-family: 'Segoe UI', Tahoma, sans-serif;
        color: #e0e0e0;
        z-index: 2000;
        display: none;
        overflow: hidden;
      }

      #reputation-panel.show {
        display: block;
        animation: panelOpen 0.3s ease-out;
      }

      @keyframes panelOpen {
        from { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
        to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      }

      .rep-panel-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background: linear-gradient(180deg, #2a2a4a, #1a1a3a);
        border-bottom: 1px solid #4a4a6a;
      }

      .rep-panel-title {
        font-size: 20px;
        font-weight: bold;
        color: #ffd700;
      }

      .rep-panel-content {
        padding: 15px;
        max-height: 500px;
        overflow-y: auto;
      }

      .rep-faction {
        background: rgba(40,40,60,0.5);
        border: 1px solid #3a3a5a;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 12px;
      }

      .rep-faction-header {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }

      .rep-faction-icon {
        font-size: 28px;
        margin-right: 12px;
      }

      .rep-faction-info {
        flex: 1;
      }

      .rep-faction-name {
        font-size: 16px;
        font-weight: bold;
        color: #e0e0e0;
      }

      .rep-faction-tier {
        font-size: 12px;
        padding: 2px 8px;
        border-radius: 4px;
        display: inline-block;
        margin-top: 4px;
      }

      .rep-bar-container {
        margin-top: 10px;
      }

      .rep-bar {
        width: 100%;
        height: 8px;
        background: #2a2a4a;
        border-radius: 4px;
        overflow: hidden;
      }

      .rep-bar-fill {
        height: 100%;
        transition: width 0.5s ease;
      }

      .rep-bar-text {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: #888;
        margin-top: 4px;
      }

      /* ===== REWARD CHEST ===== */
      #reward-chest-ui {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 350px;
        background: linear-gradient(180deg, #2a1a0a, #1a0a00);
        border: 3px solid #daa520;
        border-radius: 12px;
        padding: 30px;
        text-align: center;
        font-family: 'Segoe UI', Tahoma, sans-serif;
        z-index: 2500;
        display: none;
        box-shadow: 0 0 60px rgba(218,165,32,0.5);
      }

      #reward-chest-ui.show {
        display: block;
        animation: chestOpen 0.5s ease-out;
      }

      @keyframes chestOpen {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        50% { transform: translate(-50%, -50%) scale(1.1); }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      }

      .chest-icon {
        font-size: 60px;
        margin-bottom: 15px;
        animation: chestBounce 0.5s ease-out 0.3s;
      }

      @keyframes chestBounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      .chest-title {
        font-size: 22px;
        color: #ffd700;
        font-weight: bold;
        margin-bottom: 20px;
        text-shadow: 0 0 10px rgba(255,215,0,0.5);
      }

      .chest-rewards {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-bottom: 20px;
      }

      .chest-reward-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 10px;
        background: rgba(255,215,0,0.1);
        border-radius: 6px;
        font-size: 16px;
        animation: rewardAppear 0.3s ease-out backwards;
      }

      .chest-reward-item:nth-child(1) { animation-delay: 0.5s; }
      .chest-reward-item:nth-child(2) { animation-delay: 0.7s; }
      .chest-reward-item:nth-child(3) { animation-delay: 0.9s; }

      @keyframes rewardAppear {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .chest-reward-item.gold { color: #ffd700; }
      .chest-reward-item.xp { color: #88ff88; }
      .chest-reward-item.item { color: #88aaff; }
      .chest-reward-item.rep { color: #ff88ff; }

      .chest-close-btn {
        padding: 12px 40px;
        background: linear-gradient(180deg, #5a4a2a, #4a3a1a);
        border: 2px solid #daa520;
        border-radius: 6px;
        color: #ffd700;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.2s;
      }

      .chest-close-btn:hover {
        background: linear-gradient(180deg, #6a5a3a, #5a4a2a);
      }

      /* ===== NOTIFICATIONS ===== */
      .rep-notification {
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        padding: 15px 30px;
        background: rgba(20,20,30,0.95);
        border-radius: 8px;
        font-family: 'Segoe UI', sans-serif;
        z-index: 2200;
        animation: notifFadeIn 0.3s ease-out;
      }

      @keyframes notifFadeIn {
        from { opacity: 0; transform: translateX(-50%) translateY(20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
      }

      .rep-notification.hiding {
        animation: notifFadeOut 0.3s ease-in forwards;
      }

      @keyframes notifFadeOut {
        from { opacity: 1; transform: translateX(-50%) translateY(0); }
        to { opacity: 0; transform: translateX(-50%) translateY(-20px); }
      }

      .rep-notif-title {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .rep-notif-text {
        font-size: 12px;
        color: #aaa;
      }

      /* ===== MILESTONE POPUP ===== */
      .milestone-popup {
        position: fixed;
        top: 30%;
        left: 50%;
        transform: translateX(-50%);
        padding: 25px 40px;
        background: linear-gradient(180deg, #2a2a4a, #1a1a3a);
        border: 2px solid #ffaa00;
        border-radius: 10px;
        text-align: center;
        z-index: 2300;
        animation: milestonePop 0.5s ease-out;
      }

      @keyframes milestonePop {
        0% { transform: translateX(-50%) scale(0); }
        50% { transform: translateX(-50%) scale(1.2); }
        100% { transform: translateX(-50%) scale(1); }
      }

      .milestone-icon {
        font-size: 40px;
        margin-bottom: 10px;
      }

      .milestone-title {
        font-size: 18px;
        color: #ffaa00;
        font-weight: bold;
        margin-bottom: 5px;
      }

      .milestone-desc {
        font-size: 13px;
        color: #ccc;
      }

      /* ===== ACHIEVEMENT POPUP ===== */
      .achievement-popup {
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        gap: 15px;
        padding: 15px 25px;
        background: linear-gradient(180deg, #3a2a1a, #2a1a0a);
        border: 2px solid #ffd700;
        border-radius: 8px;
        z-index: 2300;
        animation: achievementSlide 0.5s ease-out;
      }

      @keyframes achievementSlide {
        from { transform: translateX(-50%) translateY(-50px); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
      }

      .achievement-icon {
        font-size: 35px;
      }

      .achievement-info {
        text-align: left;
      }

      .achievement-label {
        font-size: 11px;
        color: #888;
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .achievement-name {
        font-size: 16px;
        color: #ffd700;
        font-weight: bold;
      }
    `;
    
    document.head.appendChild(style);
  }

  // ========== UI CREATION ==========
  
  createReputationPanel() {
    if (document.getElementById('reputation-panel')) return;
    
    const panel = document.createElement('div');
    panel.id = 'reputation-panel';
    panel.innerHTML = `
      <div class="rep-panel-header">
        <span class="rep-panel-title">🏅 Reputation</span>
        <button class="dialogue-close" style="width:30px;height:30px;background:#3a3a5a;border:1px solid #5a5a7a;border-radius:6px;color:#aaa;cursor:pointer;">✕</button>
      </div>
      <div class="rep-panel-content" id="rep-panel-content"></div>
    `;
    
    document.body.appendChild(panel);
    
    panel.querySelector('.dialogue-close').onclick = () => {
      panel.classList.remove('show');
    };
    
    // Key binding
    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'u' && !this.isInputFocused()) {
        e.preventDefault();
        panel.classList.toggle('show');
        if (panel.classList.contains('show')) {
          this.updateReputationPanel();
        }
      }
    });
  }

  updateReputationPanel() {
    const content = document.getElementById('rep-panel-content');
    if (!content) return;
    
    content.innerHTML = Object.values(FACTIONS).map(faction => {
      const rep = this.reputation[faction.id] || 0;
      const tier = this.getRepTier(rep);
      const nextTier = this.getNextTier(rep);
      
      let progress = 0;
      if (nextTier) {
        const tierRange = nextTier.min - tier.min;
        const currentProgress = rep - tier.min;
        progress = Math.min(100, (currentProgress / tierRange) * 100);
      } else {
        progress = 100;
      }
      
      return `
        <div class="rep-faction">
          <div class="rep-faction-header">
            <span class="rep-faction-icon">${faction.icon}</span>
            <div class="rep-faction-info">
              <div class="rep-faction-name">${faction.name}</div>
              <span class="rep-faction-tier" style="background:${tier.color}20;color:${tier.color}">
                ${tier.name}
              </span>
            </div>
          </div>
          <div class="rep-bar-container">
            <div class="rep-bar">
              <div class="rep-bar-fill" style="width:${progress}%;background:${tier.color}"></div>
            </div>
            <div class="rep-bar-text">
              <span>${rep.toLocaleString()} rep</span>
              <span>${nextTier ? `Next: ${nextTier.name} (${nextTier.min.toLocaleString()})` : 'Max Rank'}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  getNextTier(rep) {
    const tiers = Object.values(REP_TIERS).sort((a, b) => a.min - b.min);
    for (const tier of tiers) {
      if (rep < tier.min) return tier;
    }
    return null;
  }

  createAchievementsPanel() {
    // Could add full achievements panel here
    // For now, achievements are shown as popups
  }

  createRewardChestUI() {
    if (document.getElementById('reward-chest-ui')) return;
    
    const chest = document.createElement('div');
    chest.id = 'reward-chest-ui';
    chest.innerHTML = `
      <div class="chest-icon">🎁</div>
      <div class="chest-title">Rewards!</div>
      <div class="chest-rewards" id="chest-rewards"></div>
      <button class="chest-close-btn">Collect</button>
    `;
    
    document.body.appendChild(chest);
    
    chest.querySelector('.chest-close-btn').onclick = () => {
      chest.classList.remove('show');
    };
  }

  // ========== SHOW NOTIFICATIONS ==========
  
  showRewardChest(rewards) {
    const chest = document.getElementById('reward-chest-ui');
    const rewardsEl = document.getElementById('chest-rewards');
    if (!chest || !rewardsEl) return;
    
    let html = '';
    if (rewards.gold > 0) {
      html += `<div class="chest-reward-item gold">💰 ${rewards.gold} Gold</div>`;
    }
    if (rewards.xp > 0) {
      html += `<div class="chest-reward-item xp">⭐ ${rewards.xp} XP</div>`;
    }
    rewards.items?.forEach(item => {
      const qty = item.quantity > 1 ? `${item.quantity}x ` : '';
      html += `<div class="chest-reward-item item">📦 ${qty}${item.id}</div>`;
    });
    
    rewardsEl.innerHTML = html;
    chest.classList.add('show');
    
    // Auto-close after 5 seconds
    setTimeout(() => {
      chest.classList.remove('show');
    }, 5000);
  }

  showReputationChange(factionId, amount, tier) {
    const faction = Object.values(FACTIONS).find(f => f.id === factionId);
    if (!faction) return;
    
    const notif = document.createElement('div');
    notif.className = 'rep-notification';
    notif.innerHTML = `
      <div class="rep-notif-title" style="color:${tier.color}">
        ${faction.icon} ${faction.name} +${amount}
      </div>
      <div class="rep-notif-text">Now: ${tier.name}</div>
    `;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
      notif.classList.add('hiding');
      setTimeout(() => notif.remove(), 300);
    }, 3000);
  }

  showMilestoneUnlocked(milestone) {
    const popup = document.createElement('div');
    popup.className = 'milestone-popup';
    popup.innerHTML = `
      <div class="milestone-icon">🎖️</div>
      <div class="milestone-title">Milestone Unlocked!</div>
      <div class="milestone-desc">${milestone.description}</div>
    `;
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
      popup.style.animation = 'notifFadeOut 0.3s ease-in forwards';
      setTimeout(() => popup.remove(), 300);
    }, 4000);
  }

  showAchievementUnlocked(achievement) {
    const popup = document.createElement('div');
    popup.className = 'achievement-popup';
    popup.innerHTML = `
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-info">
        <div class="achievement-label">Achievement Unlocked</div>
        <div class="achievement-name">${achievement.name}</div>
      </div>
    `;
    
    document.body.appendChild(popup);
    
    setTimeout(() => {
      popup.style.animation = 'notifFadeOut 0.3s ease-in forwards';
      setTimeout(() => popup.remove(), 300);
    }, 4000);
  }

  // ========== EVENT SYSTEM ==========
  
  on(event, callback) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].push(callback);
    }
  }

  off(event, callback) {
    if (this.eventListeners[event]) {
      this.eventListeners[event] = this.eventListeners[event].filter(cb => cb !== callback);
    }
  }

  emit(event, data) {
    if (this.eventListeners[event]) {
      this.eventListeners[event].forEach(cb => {
        try { cb(data); } catch (e) { console.error(e); }
      });
    }
  }

  // ========== PERSISTENCE ==========
  
  saveState() {
    const state = {
      reputation: this.reputation,
      unlockedMilestones: Array.from(this.unlockedMilestones),
      titles: this.titles,
      currentTitle: this.currentTitle,
      achievements: Array.from(this.achievements),
      stats: this.stats,
    };
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn('[QuestRewards] Failed to save state:', e);
    }
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      
      const state = JSON.parse(saved);
      
      this.reputation = state.reputation || {};
      this.unlockedMilestones = new Set(state.unlockedMilestones || []);
      this.titles = state.titles || [];
      this.currentTitle = state.currentTitle || null;
      this.achievements = new Set(state.achievements || []);
      this.stats = state.stats || this.stats;
      
      console.log('[QuestRewards] Loaded state');
    } catch (e) {
      console.warn('[QuestRewards] Failed to load state:', e);
    }
  }

  resetState() {
    this.reputation = {};
    this.unlockedMilestones.clear();
    this.titles = [];
    this.currentTitle = null;
    this.achievements.clear();
    this.stats = {
      questsCompleted: 0,
      bossQuestsCompleted: 0,
      dailyQuestsCompleted: 0,
      totalGoldEarned: 0,
      totalXpEarned: 0,
    };
    this.saveState();
    this.updateReputationPanel();
  }

  // ========== UTILITY ==========
  
  isInputFocused() {
    const active = document.activeElement;
    return active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA');
  }

  // ========== CLEANUP ==========
  
  destroy() {
    document.getElementById('reputation-panel')?.remove();
    document.getElementById('reward-chest-ui')?.remove();
    document.getElementById('quest-rewards-styles')?.remove();
  }
}

// ========== SINGLETON ==========
let questRewardsInstance = null;

export function createQuestRewards() {
  if (!questRewardsInstance) {
    questRewardsInstance = new QuestRewardsSystem();
  }
  return questRewardsInstance;
}

export function getQuestRewards() {
  return questRewardsInstance;
}

export { QuestRewardsSystem };
export default QuestRewardsSystem;
