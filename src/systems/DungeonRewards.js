/**
 * DungeonRewards.js - Dungeon Reward & Completion System
 * Phase 22: Dungeon Instances
 * 
 * Manages dungeon-specific loot, completion rewards, and progression:
 * - Dungeon-themed loot pools
 * - Boss-specific legendary drops
 * - First completion bonuses (titles, extra XP, achievements)
 * - Clear time tracking (speedrun potential)
 * - Dungeon tier unlocking
 * - Elite dungeon keys
 * - Victory screen with stats
 */

import { getDungeonById, DUNGEONS, generateChestLoot, DUNGEON_MODIFIER } from '../data/DungeonData.js';
import { BOSS_ITEM_TYPES } from './LootManager.js';

// ========== DUNGEON BOSS SOULS ==========
export const DUNGEON_BOSS_SOULS = {
  lich_soul: {
    id: 'lich_soul',
    name: "Valkorin's Soul",
    type: 'boss_soul',
    description: 'The soul of the Lich Lord, still crackling with necrotic energy.',
    color: 0x44ff44,
    emissive: 0x22aa22,
    stackable: false,
    rarity: 'legendary',
    bossId: 'lich_lord_valkorin',
    dungeonId: 'forgotten_catacombs',
  },
  wurm_soul: {
    id: 'wurm_soul',
    name: "Crystal Wurm's Soul",
    type: 'boss_soul',
    description: 'A prismatic soul that refracts light in mesmerizing patterns.',
    color: 0x44aaff,
    emissive: 0x2288cc,
    stackable: false,
    rarity: 'legendary',
    bossId: 'ancient_crystal_wurm',
    dungeonId: 'crystal_caverns',
  },
  warlord_soul: {
    id: 'warlord_soul',
    name: "Krag's Soul",
    type: 'boss_soul',
    description: 'A brutal soul, burning with unquenched rage.',
    color: 0xff6644,
    emissive: 0xaa4422,
    stackable: false,
    rarity: 'legendary',
    bossId: 'bandit_warlord',
    dungeonId: 'bandit_hideout',
  },
  avatar_soul: {
    id: 'avatar_soul',
    name: "Avatar's Soul",
    type: 'boss_soul',
    description: 'Pure void essence, terrifying in its emptiness.',
    color: 0xaa44ff,
    emissive: 0x6622aa,
    stackable: false,
    rarity: 'legendary',
    bossId: 'avatar_of_corruption',
    dungeonId: 'corrupted_temple',
  },
};

// ========== DUNGEON LEGENDARY EQUIPMENT ==========
export const DUNGEON_LEGENDARIES = {
  // Catacombs Legendaries
  lich_crown: {
    id: 'lich_crown',
    name: 'Crown of the Lich',
    type: 'equipment',
    slot: 'head',
    rarity: 'legendary',
    stats: { INT: 25, maxMana: 100, manaRegen: 2 },
    effect: 'Undead enemies deal 20% less damage to you.',
    description: 'The crown once worn by Lich Lord Valkorin. Pulses with necrotic power.',
    dungeonId: 'forgotten_catacombs',
  },
  staff_of_undeath: {
    id: 'staff_of_undeath',
    name: 'Staff of Undeath',
    type: 'weapon',
    slot: 'weapon',
    weaponType: 'staff',
    rarity: 'legendary',
    stats: { INT: 30, damage: 45 },
    effect: 'Your spells have a 15% chance to summon a skeleton ally for 10 seconds.',
    description: "Valkorin's personal staff, still imbued with his dark magic.",
    dungeonId: 'forgotten_catacombs',
  },
  
  // Crystal Caverns Legendaries
  wurm_scale: {
    id: 'wurm_scale',
    name: 'Prismatic Wurm Scale',
    type: 'equipment',
    slot: 'chest',
    rarity: 'legendary',
    stats: { DEF: 40, resistance: { fire: 15, ice: 15, lightning: 15 } },
    effect: 'Reflects 10% of magic damage back to attackers.',
    description: 'An iridescent scale from the Ancient Crystal Wurm. Nearly indestructible.',
    dungeonId: 'crystal_caverns',
  },
  crystal_fang: {
    id: 'crystal_fang',
    name: 'Crystal Fang Blade',
    type: 'weapon',
    slot: 'weapon',
    weaponType: 'sword',
    rarity: 'legendary',
    stats: { STR: 20, DEX: 15, damage: 55, critChance: 10 },
    effect: 'Critical hits shatter into crystal shards, dealing AoE damage.',
    description: 'Forged from the fang of the Crystal Wurm. Razor sharp and crystalline.',
    dungeonId: 'crystal_caverns',
  },
  
  // Bandit Hideout Legendaries
  warlord_axe: {
    id: 'warlord_axe',
    name: "Krag's Waraxe",
    type: 'weapon',
    slot: 'weapon',
    weaponType: 'axe',
    rarity: 'epic',
    stats: { STR: 25, damage: 60 },
    effect: 'Kills restore 5% of your health.',
    description: "The brutal axe wielded by Warlord Krag. Stained with countless battles.",
    dungeonId: 'bandit_hideout',
  },
  bandit_lord_armor: {
    id: 'bandit_lord_armor',
    name: 'Bandit Lord Armor',
    type: 'equipment',
    slot: 'chest',
    rarity: 'legendary',
    stats: { DEF: 35, DEX: 15, movementSpeed: 10 },
    effect: 'Gold dropped by enemies increased by 25%.',
    description: 'Armor worn by the most successful bandit in the realm. Surprisingly comfortable.',
    dungeonId: 'bandit_hideout',
  },
  
  // Corrupted Temple Legendaries
  void_heart: {
    id: 'void_heart',
    name: 'Heart of the Void',
    type: 'equipment',
    slot: 'accessory',
    rarity: 'legendary',
    stats: { INT: 20, VIT: 15, maxMana: 150 },
    effect: 'Your dark spells deal 30% more damage but cost 20% more mana.',
    description: 'The corrupt core of the Avatar. Whispers of the void echo within.',
    dungeonId: 'corrupted_temple',
  },
  corruption_blade: {
    id: 'corruption_blade',
    name: 'Blade of Corruption',
    type: 'weapon',
    slot: 'weapon',
    weaponType: 'sword',
    rarity: 'legendary',
    stats: { STR: 20, INT: 20, damage: 50 },
    effect: 'Attacks apply Corruption stacks. At 5 stacks, deal bonus void damage.',
    description: 'A blade infused with the essence of corruption. Use carefully.',
    dungeonId: 'corrupted_temple',
  },
  void_robes: {
    id: 'void_robes',
    name: 'Robes of the Void',
    type: 'equipment',
    slot: 'chest',
    rarity: 'legendary',
    stats: { INT: 30, maxMana: 200, manaRegen: 3 },
    effect: 'Casting spells has a 5% chance to reset all cooldowns.',
    description: 'Robes woven from void energy. Impossibly light yet protective.',
    dungeonId: 'corrupted_temple',
  },
};

// ========== DUNGEON TROPHIES ==========
export const DUNGEON_TROPHIES = {
  catacombs_trophy: {
    id: 'catacombs_trophy',
    name: 'Catacombs Conqueror Trophy',
    type: 'trophy',
    description: 'Proof of conquering the Forgotten Catacombs. The undead shall remember your name.',
    color: 0xffd700,
    emissive: 0xaa8800,
    dungeonId: 'forgotten_catacombs',
  },
  caverns_trophy: {
    id: 'caverns_trophy',
    name: 'Crystal Delver Trophy',
    type: 'trophy',
    description: 'Proof of conquering the Crystal Caverns. You have claimed its riches.',
    color: 0x44aaff,
    emissive: 0x2288cc,
    dungeonId: 'crystal_caverns',
  },
  hideout_trophy: {
    id: 'hideout_trophy',
    name: 'Bandit Slayer Trophy',
    type: 'trophy',
    description: "Proof of conquering the Bandit Hideout. Krag's reign of terror is over.",
    color: 0x8b4513,
    emissive: 0x5a2d0a,
    dungeonId: 'bandit_hideout',
  },
  temple_trophy: {
    id: 'temple_trophy',
    name: 'Corruption Vanquisher Trophy',
    type: 'trophy',
    description: 'Proof of conquering the Corrupted Temple. The void has been pushed back.',
    color: 0xaa44ff,
    emissive: 0x6622aa,
    dungeonId: 'corrupted_temple',
  },
};

// ========== DUNGEON KEY ITEMS ==========
export const DUNGEON_KEYS = {
  elite_dungeon_key: {
    id: 'elite_dungeon_key',
    name: 'Elite Dungeon Key',
    type: 'key',
    description: 'A mysterious key that unlocks Elite versions of dungeons. Harder enemies, better loot.',
    color: 0xffaa44,
    emissive: 0xcc8822,
    stackable: true,
    maxStack: 10,
    rarity: 'rare',
    modifier: 'elite',
  },
  cursed_dungeon_key: {
    id: 'cursed_dungeon_key',
    name: 'Cursed Dungeon Key',
    type: 'key',
    description: 'A key writhing with dark energy. Unlocks Cursed dungeons for extreme challenge.',
    color: 0x6622aa,
    emissive: 0x441177,
    stackable: true,
    maxStack: 5,
    rarity: 'epic',
    modifier: 'cursed',
  },
};

// ========== SPEEDRUN THRESHOLDS ==========
const SPEEDRUN_THRESHOLDS = {
  forgotten_catacombs: {
    gold: 300000,   // 5 minutes
    silver: 600000,  // 10 minutes
    bronze: 900000,  // 15 minutes
  },
  crystal_caverns: {
    gold: 420000,   // 7 minutes
    silver: 720000,  // 12 minutes
    bronze: 1080000, // 18 minutes
  },
  bandit_hideout: {
    gold: 240000,   // 4 minutes
    silver: 480000,  // 8 minutes
    bronze: 720000,  // 12 minutes
  },
  corrupted_temple: {
    gold: 600000,   // 10 minutes
    silver: 900000,  // 15 minutes
    bronze: 1200000, // 20 minutes
  },
};

// ========== DUNGEON TIER REQUIREMENTS ==========
const DUNGEON_TIER_REQUIREMENTS = {
  // Tier 1: No requirements
  bandit_hideout: { tier: 1, requires: null },
  // Tier 2: Complete any Tier 1 dungeon
  forgotten_catacombs: { tier: 2, requires: ['bandit_hideout'] },
  // Tier 3: Complete any Tier 2 dungeon
  crystal_caverns: { tier: 3, requires: ['forgotten_catacombs'] },
  // Tier 4: Complete all previous dungeons
  corrupted_temple: { tier: 4, requires: ['bandit_hideout', 'forgotten_catacombs', 'crystal_caverns'] },
};

// ========== SAVE KEY ==========
const REWARDS_SAVE_KEY = 'ashen_dungeon_rewards';

/**
 * DungeonRewards - Manages dungeon reward systems
 */
export class DungeonRewards {
  constructor(gameManager) {
    this.game = gameManager;
    this.player = gameManager?.player;
    this.lootManager = gameManager?.lootManager;
    this.inventoryManager = gameManager?.inventoryManager;
    
    // Completion tracking
    this.completedDungeons = new Map(); // dungeonId -> completion data
    this.firstKillTracking = new Set(); // dungeonId - has first kill bonus been claimed
    this.bestTimes = new Map(); // dungeonId -> best clear time (ms)
    
    // Victory screen element
    this.victoryScreen = null;
    
    // Load saved data
    this.loadRewardsData();
    
    // Create victory screen UI
    this.createVictoryScreen();
    
    console.log('[DungeonRewards] Initialized');
  }

  /**
   * Create the victory screen UI
   */
  createVictoryScreen() {
    this.victoryScreen = document.createElement('div');
    this.victoryScreen.id = 'dungeon-victory-screen';
    this.victoryScreen.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    `;
    
    // Victory title
    const title = document.createElement('div');
    title.id = 'victory-title';
    title.style.cssText = `
      color: #ffcc66;
      font-family: 'Cinzel', serif;
      font-size: 48px;
      text-transform: uppercase;
      letter-spacing: 6px;
      margin-bottom: 10px;
      text-shadow: 0 0 20px rgba(255, 200, 100, 0.5);
    `;
    title.textContent = 'DUNGEON CLEARED';
    this.victoryScreen.appendChild(title);
    
    // Dungeon name
    const dungeonName = document.createElement('div');
    dungeonName.id = 'victory-dungeon-name';
    dungeonName.style.cssText = `
      color: #aa8866;
      font-family: 'Cinzel', serif;
      font-size: 28px;
      text-transform: uppercase;
      letter-spacing: 4px;
      margin-bottom: 30px;
    `;
    this.victoryScreen.appendChild(dungeonName);
    
    // Stats container
    const statsContainer = document.createElement('div');
    statsContainer.id = 'victory-stats';
    statsContainer.style.cssText = `
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      max-width: 600px;
      margin-bottom: 30px;
    `;
    this.victoryScreen.appendChild(statsContainer);
    
    // Clear time
    const clearTime = document.createElement('div');
    clearTime.id = 'victory-clear-time';
    clearTime.className = 'victory-stat';
    clearTime.style.cssText = `
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid #444;
      border-radius: 8px;
      padding: 15px 25px;
      text-align: center;
    `;
    statsContainer.appendChild(clearTime);
    
    // Enemies killed
    const enemiesKilled = document.createElement('div');
    enemiesKilled.id = 'victory-enemies';
    enemiesKilled.className = 'victory-stat';
    enemiesKilled.style.cssText = clearTime.style.cssText;
    statsContainer.appendChild(enemiesKilled);
    
    // Rooms explored
    const roomsExplored = document.createElement('div');
    roomsExplored.id = 'victory-rooms';
    roomsExplored.className = 'victory-stat';
    roomsExplored.style.cssText = clearTime.style.cssText;
    statsContainer.appendChild(roomsExplored);
    
    // Chests looted
    const chestsLooted = document.createElement('div');
    chestsLooted.id = 'victory-chests';
    chestsLooted.className = 'victory-stat';
    chestsLooted.style.cssText = clearTime.style.cssText;
    statsContainer.appendChild(chestsLooted);
    
    // Loot section
    const lootSection = document.createElement('div');
    lootSection.id = 'victory-loot';
    lootSection.style.cssText = `
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid #444;
      border-radius: 8px;
      padding: 20px;
      min-width: 400px;
      max-width: 600px;
      margin-bottom: 20px;
    `;
    
    const lootTitle = document.createElement('div');
    lootTitle.style.cssText = `
      color: #ffcc66;
      font-family: 'Cinzel', serif;
      font-size: 20px;
      text-transform: uppercase;
      margin-bottom: 15px;
      text-align: center;
    `;
    lootTitle.textContent = 'Rewards';
    lootSection.appendChild(lootTitle);
    
    const lootList = document.createElement('div');
    lootList.id = 'victory-loot-list';
    lootList.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 8px;
    `;
    lootSection.appendChild(lootList);
    
    this.victoryScreen.appendChild(lootSection);
    
    // First clear bonus
    const firstClearBonus = document.createElement('div');
    firstClearBonus.id = 'victory-first-clear';
    firstClearBonus.style.cssText = `
      background: linear-gradient(135deg, rgba(255, 200, 100, 0.2), rgba(255, 200, 100, 0.05));
      border: 2px solid #ffcc66;
      border-radius: 8px;
      padding: 15px 30px;
      margin-bottom: 30px;
      display: none;
      text-align: center;
    `;
    this.victoryScreen.appendChild(firstClearBonus);
    
    // Continue button
    const continueBtn = document.createElement('button');
    continueBtn.id = 'victory-continue';
    continueBtn.style.cssText = `
      background: linear-gradient(135deg, #554422, #332211);
      border: 2px solid #aa8866;
      border-radius: 8px;
      color: #ffcc88;
      font-family: 'Cinzel', serif;
      font-size: 18px;
      padding: 15px 50px;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 3px;
      transition: all 0.3s ease;
    `;
    continueBtn.textContent = 'Continue';
    continueBtn.addEventListener('click', () => this.hideVictoryScreen());
    continueBtn.addEventListener('mouseenter', () => {
      continueBtn.style.background = 'linear-gradient(135deg, #665533, #443322)';
      continueBtn.style.borderColor = '#ccaa88';
    });
    continueBtn.addEventListener('mouseleave', () => {
      continueBtn.style.background = 'linear-gradient(135deg, #554422, #332211)';
      continueBtn.style.borderColor = '#aa8866';
    });
    this.victoryScreen.appendChild(continueBtn);
    
    document.body.appendChild(this.victoryScreen);
  }

  /**
   * Generate boss rewards when boss is defeated
   */
  generateBossRewards(dungeonInstance, bossData) {
    const rewards = {
      items: [],
      remnants: 0,
      xp: 0,
      isFirstKill: false,
    };
    
    const dungeonId = dungeonInstance.dungeonId;
    const dungeonData = dungeonInstance.dungeonData;
    const modifier = dungeonInstance.modifier;
    
    // Get modifier effects
    const modEffects = DUNGEON_MODIFIER[modifier.toUpperCase()]?.effects || {};
    
    // Base completion rewards
    const completionRewards = dungeonData.completionRewards;
    rewards.remnants = completionRewards.remnants || 1000;
    rewards.xp = completionRewards.xp || 1000;
    
    // Apply modifier multipliers
    rewards.remnants = Math.floor(rewards.remnants * (modEffects.xpMult || 1));
    rewards.xp = Math.floor(rewards.xp * (modEffects.xpMult || 1));
    
    // Boss soul (guaranteed)
    const bossSoul = DUNGEON_BOSS_SOULS[`${bossData.id.split('_')[0]}_soul`];
    if (bossSoul) {
      rewards.items.push({ ...bossSoul, quantity: 1 });
    }
    
    // Boss guaranteed drops
    if (bossData.loot?.guaranteed) {
      for (const drop of bossData.loot.guaranteed) {
        const item = DUNGEON_LEGENDARIES[drop.id] || drop;
        rewards.items.push({ ...item, quantity: 1 });
      }
    }
    
    // Boss rare drops (roll for each)
    if (bossData.loot?.rare) {
      for (const rareDrop of bossData.loot.rare) {
        const chance = rareDrop.chance || 0.1;
        const boostedChance = chance + (modEffects.lootRarityBoost || 0) * 0.05;
        
        if (Math.random() < boostedChance) {
          const item = DUNGEON_LEGENDARIES[rareDrop.id] || rareDrop;
          rewards.items.push({ ...item, quantity: 1 });
        }
      }
    }
    
    // First kill bonus
    if (!this.firstKillTracking.has(dungeonId)) {
      rewards.isFirstKill = true;
      
      if (completionRewards.firstClearBonus) {
        rewards.remnants += completionRewards.firstClearBonus.remnants || 0;
        
        // Add trophy
        const trophy = DUNGEON_TROPHIES[`${dungeonId.split('_')[0]}_trophy`];
        if (trophy) {
          rewards.items.push({ ...trophy, quantity: 1 });
        }
        
        // Add first clear items
        if (completionRewards.firstClearBonus.items) {
          for (const item of completionRewards.firstClearBonus.items) {
            rewards.items.push({ ...item, quantity: 1 });
          }
        }
      }
      
      // Mark first kill claimed
      this.firstKillTracking.add(dungeonId);
    }
    
    // Elite dungeon key drop (small chance from any boss)
    if (Math.random() < 0.15) {
      rewards.items.push({ ...DUNGEON_KEYS.elite_dungeon_key, quantity: 1 });
    }
    
    // Cursed key (very rare from elite/cursed dungeons)
    if ((modifier === 'elite' || modifier === 'cursed') && Math.random() < 0.08) {
      rewards.items.push({ ...DUNGEON_KEYS.cursed_dungeon_key, quantity: 1 });
    }
    
    return rewards;
  }

  /**
   * Award rewards to player
   */
  awardRewards(rewards) {
    if (!this.player) return;
    
    // Award XP
    if (rewards.xp && this.player.addXP) {
      this.player.addXP(rewards.xp);
    }
    
    // Award remnants/gold
    if (rewards.remnants && this.player.addRemnants) {
      this.player.addRemnants(rewards.remnants);
    }
    
    // Award items
    if (rewards.items && this.inventoryManager) {
      for (const item of rewards.items) {
        this.inventoryManager.addItem?.(item);
      }
    }
    
    console.log('[DungeonRewards] Awarded rewards:', rewards);
  }

  /**
   * Complete a dungeon and show victory screen
   */
  completeDungeon(dungeonInstance, completionStats) {
    const dungeonId = dungeonInstance.dungeonId;
    const dungeonData = dungeonInstance.dungeonData;
    
    // Calculate clear time
    const clearTime = completionStats.elapsedTime || 0;
    
    // Update best time
    const currentBest = this.bestTimes.get(dungeonId) || Infinity;
    if (clearTime < currentBest) {
      this.bestTimes.set(dungeonId, clearTime);
    }
    
    // Get speedrun medal
    const medal = this.getSpeedrunMedal(dungeonId, clearTime);
    
    // Generate boss rewards
    const bossData = dungeonData.boss;
    const rewards = this.generateBossRewards(dungeonInstance, bossData);
    
    // Award rewards
    this.awardRewards(rewards);
    
    // Track completion
    this.completedDungeons.set(dungeonId, {
      completedAt: Date.now(),
      clearTime,
      modifier: dungeonInstance.modifier,
      roomsExplored: completionStats.roomsExplored,
      roomsCleared: completionStats.roomsCleared,
      totalRooms: completionStats.totalRooms,
    });
    
    // Save data
    this.saveRewardsData();
    
    // Show victory screen
    this.showVictoryScreen(dungeonData, completionStats, rewards, medal);
    
    // Check for tier unlocks
    this.checkTierUnlocks(dungeonId);
    
    return rewards;
  }

  /**
   * Get speedrun medal based on clear time
   */
  getSpeedrunMedal(dungeonId, clearTime) {
    const thresholds = SPEEDRUN_THRESHOLDS[dungeonId];
    if (!thresholds) return null;
    
    if (clearTime <= thresholds.gold) return 'gold';
    if (clearTime <= thresholds.silver) return 'silver';
    if (clearTime <= thresholds.bronze) return 'bronze';
    return null;
  }

  /**
   * Format time in mm:ss format
   */
  formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  }

  /**
   * Show the victory screen
   */
  showVictoryScreen(dungeonData, stats, rewards, medal) {
    if (!this.victoryScreen) return;
    
    // Set dungeon name
    const nameEl = this.victoryScreen.querySelector('#victory-dungeon-name');
    if (nameEl) nameEl.textContent = dungeonData.name;
    
    // Set clear time with medal
    const timeEl = this.victoryScreen.querySelector('#victory-clear-time');
    if (timeEl) {
      let timeHtml = `
        <div style="color: #888; font-size: 12px; margin-bottom: 5px;">CLEAR TIME</div>
        <div style="color: #ffcc66; font-size: 24px;">${this.formatTime(stats.elapsedTime)}</div>
      `;
      if (medal) {
        const medalColors = { gold: '#ffd700', silver: '#c0c0c0', bronze: '#cd7f32' };
        timeHtml += `<div style="color: ${medalColors[medal]}; font-size: 14px; margin-top: 5px;">${medal.toUpperCase()} MEDAL 🏅</div>`;
      }
      timeEl.innerHTML = timeHtml;
    }
    
    // Set enemies killed
    const enemiesEl = this.victoryScreen.querySelector('#victory-enemies');
    if (enemiesEl) {
      enemiesEl.innerHTML = `
        <div style="color: #888; font-size: 12px; margin-bottom: 5px;">ENEMIES SLAIN</div>
        <div style="color: #ff6644; font-size: 24px;">${stats.enemiesKilled || 0}</div>
      `;
    }
    
    // Set rooms explored
    const roomsEl = this.victoryScreen.querySelector('#victory-rooms');
    if (roomsEl) {
      roomsEl.innerHTML = `
        <div style="color: #888; font-size: 12px; margin-bottom: 5px;">ROOMS EXPLORED</div>
        <div style="color: #44aaff; font-size: 24px;">${stats.roomsExplored || 0} / ${stats.totalRooms || 0}</div>
      `;
    }
    
    // Set chests looted
    const chestsEl = this.victoryScreen.querySelector('#victory-chests');
    if (chestsEl) {
      chestsEl.innerHTML = `
        <div style="color: #888; font-size: 12px; margin-bottom: 5px;">CHESTS LOOTED</div>
        <div style="color: #ffaa44; font-size: 24px;">${stats.chestsLooted || 0}</div>
      `;
    }
    
    // Set loot list
    const lootListEl = this.victoryScreen.querySelector('#victory-loot-list');
    if (lootListEl) {
      lootListEl.innerHTML = '';
      
      // Remnants/XP
      if (rewards.remnants || rewards.xp) {
        const currencyEl = document.createElement('div');
        currencyEl.style.cssText = 'color: #88cc88; font-size: 16px;';
        currencyEl.textContent = `+${rewards.remnants || 0} Remnants, +${rewards.xp || 0} XP`;
        lootListEl.appendChild(currencyEl);
      }
      
      // Items
      for (const item of rewards.items) {
        const itemEl = document.createElement('div');
        const rarityColors = {
          common: '#aaa',
          uncommon: '#44ff44',
          rare: '#4444ff',
          epic: '#aa44ff',
          legendary: '#ffaa00',
        };
        itemEl.style.cssText = `color: ${rarityColors[item.rarity] || '#fff'}; font-size: 16px;`;
        itemEl.textContent = `• ${item.name}`;
        if (item.type === 'boss_soul') itemEl.textContent += ' ⚡';
        if (item.type === 'trophy') itemEl.textContent += ' 🏆';
        lootListEl.appendChild(itemEl);
      }
    }
    
    // First clear bonus
    const firstClearEl = this.victoryScreen.querySelector('#victory-first-clear');
    if (firstClearEl) {
      if (rewards.isFirstKill) {
        firstClearEl.style.display = 'block';
        firstClearEl.innerHTML = `
          <div style="color: #ffcc66; font-size: 18px; font-family: 'Cinzel', serif;">🎉 FIRST CLEAR BONUS 🎉</div>
          <div style="color: #88cc88; font-size: 14px; margin-top: 5px;">Extra rewards and trophy earned!</div>
        `;
      } else {
        firstClearEl.style.display = 'none';
      }
    }
    
    // Show the screen
    this.victoryScreen.style.display = 'flex';
  }

  /**
   * Hide the victory screen
   */
  hideVictoryScreen() {
    if (this.victoryScreen) {
      this.victoryScreen.style.display = 'none';
    }
    
    // Trigger exit to overworld
    if (this.game?.dungeonManager) {
      this.game.dungeonManager.exitDungeon();
    }
  }

  /**
   * Check if any new dungeon tiers are unlocked
   */
  checkTierUnlocks(completedDungeonId) {
    const unlockedDungeons = [];
    
    for (const [dungeonId, req] of Object.entries(DUNGEON_TIER_REQUIREMENTS)) {
      if (!req.requires) continue;
      if (this.isDungeonUnlocked(dungeonId)) continue;
      
      // Check if all requirements are met
      const allMet = req.requires.every(reqId => this.completedDungeons.has(reqId));
      
      if (allMet) {
        unlockedDungeons.push(dungeonId);
        console.log(`[DungeonRewards] Unlocked new dungeon: ${dungeonId}`);
      }
    }
    
    return unlockedDungeons;
  }

  /**
   * Check if a dungeon is unlocked
   */
  isDungeonUnlocked(dungeonId) {
    const req = DUNGEON_TIER_REQUIREMENTS[dungeonId];
    
    // No requirements = always unlocked
    if (!req || !req.requires) return true;
    
    // Check all requirements
    return req.requires.every(reqId => this.completedDungeons.has(reqId));
  }

  /**
   * Get all unlocked dungeons
   */
  getUnlockedDungeons() {
    const unlocked = [];
    
    for (const dungeonId of Object.keys(DUNGEON_TIER_REQUIREMENTS)) {
      if (this.isDungeonUnlocked(dungeonId)) {
        const dungeonData = getDungeonById(dungeonId);
        if (dungeonData) {
          unlocked.push({
            id: dungeonId,
            name: dungeonData.name,
            tier: DUNGEON_TIER_REQUIREMENTS[dungeonId].tier,
            completed: this.completedDungeons.has(dungeonId),
            bestTime: this.bestTimes.get(dungeonId),
          });
        }
      }
    }
    
    return unlocked.sort((a, b) => a.tier - b.tier);
  }

  /**
   * Get completion statistics for a dungeon
   */
  getDungeonStats(dungeonId) {
    const completion = this.completedDungeons.get(dungeonId);
    const bestTime = this.bestTimes.get(dungeonId);
    const hasFirstKill = this.firstKillTracking.has(dungeonId);
    
    return {
      completed: !!completion,
      completionData: completion,
      bestTime,
      bestMedal: bestTime ? this.getSpeedrunMedal(dungeonId, bestTime) : null,
      hasFirstKill,
    };
  }

  /**
   * Check if player has required key for modifier
   */
  hasModifierKey(modifier) {
    if (modifier === 'none' || modifier === 'blessed') return true;
    
    const keyId = modifier === 'elite' ? 'elite_dungeon_key' : 
                  modifier === 'cursed' ? 'cursed_dungeon_key' : null;
    
    if (!keyId) return true;
    
    // Check inventory for key
    if (this.inventoryManager?.hasItem) {
      return this.inventoryManager.hasItem(keyId);
    }
    
    return false;
  }

  /**
   * Consume modifier key when entering dungeon
   */
  consumeModifierKey(modifier) {
    if (modifier === 'none' || modifier === 'blessed') return;
    
    const keyId = modifier === 'elite' ? 'elite_dungeon_key' : 
                  modifier === 'cursed' ? 'cursed_dungeon_key' : null;
    
    if (keyId && this.inventoryManager?.removeItem) {
      this.inventoryManager.removeItem(keyId, 1);
    }
  }

  /**
   * Save rewards data to localStorage
   */
  saveRewardsData() {
    try {
      const data = {
        completedDungeons: Object.fromEntries(this.completedDungeons),
        firstKillTracking: Array.from(this.firstKillTracking),
        bestTimes: Object.fromEntries(this.bestTimes),
      };
      
      localStorage.setItem(REWARDS_SAVE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('[DungeonRewards] Failed to save:', e);
    }
  }

  /**
   * Load rewards data from localStorage
   */
  loadRewardsData() {
    try {
      const saved = localStorage.getItem(REWARDS_SAVE_KEY);
      if (!saved) return;
      
      const data = JSON.parse(saved);
      
      if (data.completedDungeons) {
        this.completedDungeons = new Map(Object.entries(data.completedDungeons));
      }
      
      if (data.firstKillTracking) {
        this.firstKillTracking = new Set(data.firstKillTracking);
      }
      
      if (data.bestTimes) {
        this.bestTimes = new Map(Object.entries(data.bestTimes));
      }
      
      console.log(`[DungeonRewards] Loaded ${this.completedDungeons.size} dungeon completions`);
    } catch (e) {
      console.warn('[DungeonRewards] Failed to load:', e);
    }
  }

  /**
   * Reset all dungeon progress (for new game)
   */
  resetProgress() {
    this.completedDungeons.clear();
    this.firstKillTracking.clear();
    this.bestTimes.clear();
    
    localStorage.removeItem(REWARDS_SAVE_KEY);
    
    console.log('[DungeonRewards] Progress reset');
  }

  /**
   * Dispose of resources
   */
  dispose() {
    if (this.victoryScreen?.parentNode) {
      this.victoryScreen.parentNode.removeChild(this.victoryScreen);
    }
  }
}

// Factory function
export function createDungeonRewards(gameManager) {
  return new DungeonRewards(gameManager);
}
