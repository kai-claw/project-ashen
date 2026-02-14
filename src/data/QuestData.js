/**
 * QuestData.js - Quest Definitions
 * Phase 25: Quest System
 * 
 * Defines all quests with objectives, rewards, prerequisites, and chains.
 * Integrates with QuestManager.js and QuestWorldHooks.js
 */

// ========== QUEST TYPES ==========
export const QUEST_TYPE = {
  KILL: 'kill',           // Kill X enemies of type
  GATHER: 'gather',       // Collect X items
  EXPLORE: 'explore',     // Visit locations
  DELIVER: 'deliver',     // Bring item to NPC
  ESCORT: 'escort',       // Protect NPC to destination
  BOSS: 'boss',           // Defeat specific boss
};

// ========== QUEST STATUS ==========
export const QUEST_STATUS = {
  LOCKED: 'locked',           // Prerequisites not met
  AVAILABLE: 'available',     // Can accept
  ACTIVE: 'active',           // Currently tracking
  READY_TO_TURN_IN: 'ready',  // Objectives complete
  COMPLETED: 'completed',     // Turned in
  FAILED: 'failed',           // Failed (timed out, escort died)
  ON_COOLDOWN: 'cooldown',    // Repeatable, waiting for cooldown
};

// ========== QUEST DIFFICULTY ==========
export const QUEST_DIFFICULTY = {
  TRIVIAL: 'trivial',       // Way below player level
  EASY: 'easy',             // Slightly below
  NORMAL: 'normal',         // At player level
  HARD: 'hard',             // Above player level
  ELITE: 'elite',           // Significantly above
  LEGENDARY: 'legendary',   // End-game content
};

// ========== OBJECTIVE TYPES ==========
export const OBJECTIVE_TYPE = {
  KILL_ENEMY: 'kill_enemy',
  KILL_ANY: 'kill_any',
  GATHER_ITEM: 'gather_item',
  VISIT_LOCATION: 'visit_location',
  TALK_TO_NPC: 'talk_to_npc',
  DELIVER_ITEM: 'deliver_item',
  ESCORT_NPC: 'escort_npc',
  DEFEAT_BOSS: 'defeat_boss',
  USE_ITEM: 'use_item',
  CRAFT_ITEM: 'craft_item',
  SURVIVE_TIME: 'survive_time',
};

// ========== QUEST GIVERS (NPCs) ==========
export const QUEST_GIVERS = {
  ELDER_MARCUS: {
    id: 'elder_marcus',
    name: 'Elder Marcus',
    title: 'Village Elder',
    location: 'ashvale_village',
    position: { x: 0, y: 0, z: 5 },
    icon: '👴',
  },
  BLACKSMITH_GRETA: {
    id: 'blacksmith_greta',
    name: 'Greta',
    title: 'Master Blacksmith',
    location: 'ashvale_village',
    position: { x: 15, y: 0, z: 10 },
    icon: '🔨',
  },
  HUNTER_JORIK: {
    id: 'hunter_jorik',
    name: 'Jorik',
    title: 'Beast Hunter',
    location: 'forest_camp',
    position: { x: -30, y: 0, z: 40 },
    icon: '🏹',
  },
  MAGE_SELENE: {
    id: 'mage_selene',
    name: 'Selene',
    title: 'Arcane Scholar',
    location: 'mage_tower',
    position: { x: 50, y: 0, z: -20 },
    icon: '🔮',
  },
  GUARD_CAPTAIN_THERON: {
    id: 'guard_captain_theron',
    name: 'Captain Theron',
    title: 'Guard Captain',
    location: 'ashvale_village',
    position: { x: -10, y: 0, z: 0 },
    icon: '⚔️',
  },
  MERCHANT_LYDIA: {
    id: 'merchant_lydia',
    name: 'Lydia',
    title: 'Traveling Merchant',
    location: 'crossroads',
    position: { x: 25, y: 0, z: 25 },
    icon: '💰',
  },
  HERBALIST_MIRA: {
    id: 'herbalist_mira',
    name: 'Mira',
    title: 'Village Herbalist',
    location: 'ashvale_village',
    position: { x: 8, y: 0, z: -5 },
    icon: '🌿',
  },
  MYSTERIOUS_STRANGER: {
    id: 'mysterious_stranger',
    name: '???',
    title: 'Mysterious Stranger',
    location: 'crossroads',
    position: { x: 30, y: 0, z: -30 },
    icon: '🎭',
  },
};

// ========== EXPLORATION AREAS ==========
export const EXPLORATION_AREAS = {
  ASHVALE_VILLAGE: {
    id: 'ashvale_village',
    name: 'Ashvale Village',
    position: { x: 0, y: 0, z: 0 },
    radius: 30,
  },
  DARKWOOD_ENTRANCE: {
    id: 'darkwood_entrance',
    name: 'Darkwood Entrance',
    position: { x: -50, y: 0, z: 50 },
    radius: 15,
  },
  ANCIENT_RUINS: {
    id: 'ancient_ruins',
    name: 'Ancient Ruins',
    position: { x: 80, y: 0, z: 30 },
    radius: 25,
  },
  CRYSTAL_CAVE: {
    id: 'crystal_cave',
    name: 'Crystal Cave',
    position: { x: -40, y: 0, z: -60 },
    radius: 20,
  },
  MOUNTAIN_PASS: {
    id: 'mountain_pass',
    name: 'Mountain Pass',
    position: { x: 100, y: 20, z: -50 },
    radius: 30,
  },
  HAUNTED_CEMETERY: {
    id: 'haunted_cemetery',
    name: 'Haunted Cemetery',
    position: { x: -80, y: 0, z: -20 },
    radius: 25,
  },
  GOLEM_SANCTUM: {
    id: 'golem_sanctum',
    name: 'Golem Sanctum',
    position: { x: 60, y: 0, z: -80 },
    radius: 20,
  },
  SHADOW_REALM_RIFT: {
    id: 'shadow_realm_rift',
    name: 'Shadow Realm Rift',
    position: { x: -100, y: 0, z: 0 },
    radius: 15,
  },
};

// ========== QUEST REWARDS HELPER ==========
const reward = (gold = 0, xp = 0, items = []) => ({
  gold,
  xp,
  items: items.map(i => typeof i === 'string' ? { id: i, quantity: 1 } : i),
});

// ========== QUEST DEFINITIONS ==========
export const QUESTS = {
  // ==========================================
  // TUTORIAL / STARTER QUESTS
  // ==========================================
  
  FIRST_STEPS: {
    id: 'first_steps',
    title: 'First Steps',
    description: 'Elder Marcus wants you to prove yourself by eliminating a few of the wolves that have been threatening the village livestock.',
    type: QUEST_TYPE.KILL,
    difficulty: QUEST_DIFFICULTY.EASY,
    recommendedLevel: 1,
    giver: 'elder_marcus',
    turnIn: 'elder_marcus',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.KILL_ENEMY,
        target: 'wolf',
        targetName: 'Wolves',
        required: 3,
        current: 0,
        isOptional: false,
      },
    ],
    
    optionalObjectives: [
      {
        id: 'opt_1',
        type: OBJECTIVE_TYPE.KILL_ENEMY,
        target: 'alpha_wolf',
        targetName: 'Alpha Wolf',
        required: 1,
        current: 0,
        bonusReward: reward(25, 50),
      },
    ],
    
    rewards: reward(50, 100, ['health_potion']),
    
    prerequisites: [],
    unlocks: ['gathering_herbs', 'guard_duty'],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 0, // No time limit
    
    dialogue: {
      intro: "Ah, a capable-looking adventurer! Our village has been troubled by wolves. Would you help us?",
      accept: "Thank you! Be careful out there, they lurk in the forest to the north.",
      progress: "Still hunting those wolves? Don't give up!",
      complete: "You've done it! The village is safer thanks to you.",
    },
  },

  GATHERING_HERBS: {
    id: 'gathering_herbs',
    title: 'Gathering Herbs',
    description: 'The village herbalist Mira needs healing herbs from the forest. Gather some for her remedy preparations.',
    type: QUEST_TYPE.GATHER,
    difficulty: QUEST_DIFFICULTY.EASY,
    recommendedLevel: 1,
    giver: 'herbalist_mira',
    turnIn: 'herbalist_mira',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'healing_herb',
        targetName: 'Healing Herbs',
        required: 5,
        current: 0,
        isOptional: false,
      },
    ],
    
    optionalObjectives: [
      {
        id: 'opt_1',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'moonpetal',
        targetName: 'Moonpetal',
        required: 2,
        current: 0,
        bonusReward: reward(30, 40, ['mana_potion']),
      },
    ],
    
    rewards: reward(40, 80, [{ id: 'health_potion', quantity: 3 }]),
    
    prerequisites: ['first_steps'],
    unlocks: ['miras_special_brew'],
    
    isRepeatable: true,
    cooldownHours: 6,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "Oh dear, I'm running low on healing herbs! Could you gather some from the forest?",
      accept: "Wonderful! Look for the green-leafed plants near water.",
      progress: "Keep searching! The herbs grow near streams.",
      complete: "Perfect! These are exactly what I needed.",
    },
  },

  GUARD_DUTY: {
    id: 'guard_duty',
    title: 'Guard Duty',
    description: 'Captain Theron needs help patrolling the village perimeter. Explore the key checkpoints and report any threats.',
    type: QUEST_TYPE.EXPLORE,
    difficulty: QUEST_DIFFICULTY.EASY,
    recommendedLevel: 2,
    giver: 'guard_captain_theron',
    turnIn: 'guard_captain_theron',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.VISIT_LOCATION,
        target: 'north_gate',
        targetName: 'North Gate',
        position: { x: 0, y: 0, z: 40 },
        radius: 10,
        required: 1,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_2',
        type: OBJECTIVE_TYPE.VISIT_LOCATION,
        target: 'east_tower',
        targetName: 'East Watchtower',
        position: { x: 35, y: 0, z: 0 },
        radius: 10,
        required: 1,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_3',
        type: OBJECTIVE_TYPE.VISIT_LOCATION,
        target: 'south_bridge',
        targetName: 'South Bridge',
        position: { x: 0, y: 0, z: -35 },
        radius: 10,
        required: 1,
        current: 0,
        isOptional: false,
      },
    ],
    
    optionalObjectives: [],
    
    rewards: reward(60, 120),
    
    prerequisites: ['first_steps'],
    unlocks: ['bandit_problem'],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "I need someone reliable to check our patrol points. Interested?",
      accept: "Head to the North Gate, East Watchtower, and South Bridge. Report back.",
      progress: "Still have checkpoints to visit. Keep moving.",
      complete: "All clear? Good. You've got potential, soldier.",
    },
  },

  // ==========================================
  // MID-LEVEL QUESTS
  // ==========================================
  
  BANDIT_PROBLEM: {
    id: 'bandit_problem',
    title: 'The Bandit Problem',
    description: 'Bandits have set up camp near the village. Captain Theron wants you to thin their numbers and recover stolen supplies.',
    type: QUEST_TYPE.KILL,
    difficulty: QUEST_DIFFICULTY.NORMAL,
    recommendedLevel: 3,
    giver: 'guard_captain_theron',
    turnIn: 'guard_captain_theron',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.KILL_ENEMY,
        target: 'bandit',
        targetName: 'Bandits',
        required: 8,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_2',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'stolen_supplies',
        targetName: 'Stolen Supplies',
        required: 3,
        current: 0,
        isOptional: false,
        questItem: true, // Only drops when quest active
      },
    ],
    
    optionalObjectives: [
      {
        id: 'opt_1',
        type: OBJECTIVE_TYPE.KILL_ENEMY,
        target: 'bandit_leader',
        targetName: 'Bandit Leader',
        required: 1,
        current: 0,
        bonusReward: reward(100, 150, ['iron_sword']),
      },
    ],
    
    rewards: reward(150, 250, ['leather_armor']),
    
    prerequisites: ['guard_duty'],
    unlocks: ['the_captains_trust'],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "Those damn bandits have been raiding our supply caravans. We need to put a stop to this.",
      accept: "Their camp is east of the crossroads. Be careful - they're well armed.",
      progress: "Keep at it. Those bandits need to learn we're not easy prey.",
      complete: "Outstanding work! The roads are safer now.",
    },
  },

  MIRAS_SPECIAL_BREW: {
    id: 'miras_special_brew',
    title: "Mira's Special Brew",
    description: 'Mira needs rare ingredients for a powerful healing elixir. Gather ingredients from dangerous areas.',
    type: QUEST_TYPE.GATHER,
    difficulty: QUEST_DIFFICULTY.NORMAL,
    recommendedLevel: 4,
    giver: 'herbalist_mira',
    turnIn: 'herbalist_mira',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'glowing_mushroom',
        targetName: 'Glowing Mushrooms',
        required: 5,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_2',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'spider_venom',
        targetName: 'Spider Venom Sacs',
        required: 3,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_3',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'crystal_water',
        targetName: 'Crystal Spring Water',
        required: 1,
        current: 0,
        isOptional: false,
      },
    ],
    
    optionalObjectives: [],
    
    rewards: reward(100, 200, [
      { id: 'elixir_of_vitality', quantity: 5 },
      { id: 'herbalism_kit', quantity: 1 },
    ]),
    
    prerequisites: ['gathering_herbs'],
    unlocks: [],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "I'm working on something special - but I need rare ingredients from... dangerous places.",
      accept: "Mushrooms from the cave, venom from forest spiders, and water from the crystal spring.",
      progress: "Did you find them all? These ingredients are quite rare.",
      complete: "Marvelous! Here, take some of the elixirs I made. You've earned them!",
    },
  },

  FORGE_MATERIALS: {
    id: 'forge_materials',
    title: 'Forge Materials',
    description: 'Blacksmith Greta needs quality ore to forge better weapons. Mine iron ore from the nearby caves.',
    type: QUEST_TYPE.GATHER,
    difficulty: QUEST_DIFFICULTY.NORMAL,
    recommendedLevel: 3,
    giver: 'blacksmith_greta',
    turnIn: 'blacksmith_greta',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'iron_ore',
        targetName: 'Iron Ore',
        required: 10,
        current: 0,
        isOptional: false,
      },
    ],
    
    optionalObjectives: [
      {
        id: 'opt_1',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'gold_ore',
        targetName: 'Gold Ore',
        required: 3,
        current: 0,
        bonusReward: reward(150, 100),
      },
    ],
    
    rewards: reward(120, 180, ['steel_sword']),
    
    prerequisites: [],
    unlocks: ['master_craftsmanship'],
    
    isRepeatable: true,
    cooldownHours: 12,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "I'm running low on quality ore. The caves to the west have plenty, if you're brave enough.",
      accept: "Bring me iron ore - at least 10 pieces. Watch out for cave creatures.",
      progress: "Need more ore! The forge is hungry.",
      complete: "Fine ore! Here, let me craft something special for you.",
    },
  },

  EXPLORE_THE_RUINS: {
    id: 'explore_the_ruins',
    title: 'Explore the Ruins',
    description: 'Mage Selene has sensed magical energy from the ancient ruins. Explore them and report your findings.',
    type: QUEST_TYPE.EXPLORE,
    difficulty: QUEST_DIFFICULTY.NORMAL,
    recommendedLevel: 5,
    giver: 'mage_selene',
    turnIn: 'mage_selene',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.VISIT_LOCATION,
        target: 'ancient_ruins',
        targetName: 'Ancient Ruins Entrance',
        position: { x: 80, y: 0, z: 30 },
        radius: 15,
        required: 1,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_2',
        type: OBJECTIVE_TYPE.VISIT_LOCATION,
        target: 'ruins_altar',
        targetName: 'Ruined Altar',
        position: { x: 90, y: 0, z: 45 },
        radius: 8,
        required: 1,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_3',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'ancient_tablet',
        targetName: 'Ancient Tablet',
        required: 1,
        current: 0,
        isOptional: false,
        questItem: true,
      },
    ],
    
    optionalObjectives: [],
    
    rewards: reward(200, 300, ['arcane_ring']),
    
    prerequisites: [],
    unlocks: ['selenes_research'],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "I've detected strange magical signatures from the old ruins. Someone needs to investigate.",
      accept: "Explore the ruins, find the altar, and bring back any artifacts you find.",
      progress: "What have you discovered? The ruins hold many secrets.",
      complete: "Fascinating! This tablet... the writings speak of an ancient power. Thank you.",
    },
  },

  // ==========================================
  // DELIVERY QUESTS
  // ==========================================
  
  MERCHANT_DELIVERY: {
    id: 'merchant_delivery',
    title: 'Special Delivery',
    description: 'Lydia the merchant needs a package delivered to the blacksmith. Quick and simple.',
    type: QUEST_TYPE.DELIVER,
    difficulty: QUEST_DIFFICULTY.EASY,
    recommendedLevel: 2,
    giver: 'merchant_lydia',
    turnIn: 'blacksmith_greta',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.DELIVER_ITEM,
        target: 'merchant_package',
        targetName: "Lydia's Package",
        recipient: 'blacksmith_greta',
        recipientName: 'Greta',
        required: 1,
        current: 0,
        isOptional: false,
        questItem: true,
        autoReceived: true, // Player receives on accept
      },
    ],
    
    optionalObjectives: [],
    
    rewards: reward(30, 50),
    
    prerequisites: [],
    unlocks: [],
    
    isRepeatable: true,
    cooldownHours: 4,
    timeLimitMinutes: 30, // Must deliver within 30 minutes
    
    dialogue: {
      intro: "I have a package for the blacksmith. Would you deliver it? I'll pay for your trouble.",
      accept: "Here's the package. Don't take too long - Greta is expecting it!",
      progress: "Please hurry! Greta needs that package.",
      complete: "Perfect timing! Here's your payment from Lydia.",
    },
  },

  URGENT_MEDICINE: {
    id: 'urgent_medicine',
    title: 'Urgent Medicine',
    description: "A farmer outside village is sick. Deliver Mira's medicine before it's too late.",
    type: QUEST_TYPE.DELIVER,
    difficulty: QUEST_DIFFICULTY.NORMAL,
    recommendedLevel: 3,
    giver: 'herbalist_mira',
    turnIn: 'farmer_tom',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.DELIVER_ITEM,
        target: 'healing_medicine',
        targetName: "Mira's Medicine",
        recipient: 'farmer_tom',
        recipientName: 'Farmer Tom',
        position: { x: 45, y: 0, z: 60 },
        required: 1,
        current: 0,
        isOptional: false,
        questItem: true,
        autoReceived: true,
      },
    ],
    
    optionalObjectives: [],
    
    rewards: reward(80, 120),
    
    prerequisites: [],
    unlocks: [],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 15, // Urgent!
    
    dialogue: {
      intro: "Please, help! Farmer Tom is gravely ill. I have the medicine but I cannot leave the village!",
      accept: "Take this medicine to Tom's farm, northeast of the village. Hurry!",
      progress: "Please! He doesn't have much time!",
      complete: "*cough* Thank you, stranger. Mira's medicine... I feel better already.",
    },
  },

  // ==========================================
  // ESCORT QUESTS
  // ==========================================
  
  ESCORT_THE_MERCHANT: {
    id: 'escort_the_merchant',
    title: 'Escort the Merchant',
    description: 'Lydia needs protection traveling to the crossroads. Bandits have been active lately.',
    type: QUEST_TYPE.ESCORT,
    difficulty: QUEST_DIFFICULTY.NORMAL,
    recommendedLevel: 4,
    giver: 'merchant_lydia',
    turnIn: 'merchant_lydia',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.ESCORT_NPC,
        target: 'merchant_lydia',
        targetName: 'Lydia',
        destination: 'crossroads_market',
        destinationName: 'Crossroads Market',
        destinationPosition: { x: 50, y: 0, z: 50 },
        destinationRadius: 10,
        required: 1,
        current: 0,
        isOptional: false,
        npcHealth: 100,
        npcCurrentHealth: 100,
      },
    ],
    
    optionalObjectives: [
      {
        id: 'opt_1',
        type: OBJECTIVE_TYPE.KILL_ENEMY,
        target: 'bandit',
        targetName: 'Ambushing Bandits',
        required: 5,
        current: 0,
        bonusReward: reward(75, 100),
      },
    ],
    
    rewards: reward(200, 300, ['merchant_discount_token']),
    
    prerequisites: ['merchant_delivery'],
    unlocks: [],
    
    isRepeatable: true,
    cooldownHours: 24,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "I need to get to the crossroads market, but the roads are dangerous. Will you escort me?",
      accept: "Stay close to me and keep those bandits away!",
      progress: "We must keep moving! Is the path clear?",
      complete: "We made it! Thank you for keeping me safe. Here's your reward.",
    },
  },

  // ==========================================
  // BOSS QUESTS
  // ==========================================
  
  GOLEM_THREAT: {
    id: 'golem_threat',
    title: 'The Golem Threat',
    description: 'An ancient golem has awakened in the ruins and threatens the region. Defeat it before it reaches the village.',
    type: QUEST_TYPE.BOSS,
    difficulty: QUEST_DIFFICULTY.HARD,
    recommendedLevel: 8,
    giver: 'guard_captain_theron',
    turnIn: 'guard_captain_theron',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.DEFEAT_BOSS,
        target: 'ancient_golem',
        targetName: 'Ancient Golem',
        required: 1,
        current: 0,
        isOptional: false,
      },
    ],
    
    optionalObjectives: [
      {
        id: 'opt_1',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'golem_core',
        targetName: 'Golem Power Core',
        required: 1,
        current: 0,
        bonusReward: reward(500, 500, ['golem_shard_weapon']),
      },
    ],
    
    rewards: reward(500, 800, ['champions_armor']),
    
    prerequisites: ['explore_the_ruins'],
    unlocks: ['shadow_wraith_hunt'],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "The earth shakes! The ruins have unleashed something terrible - an ancient golem!",
      accept: "Find the golem in the Golem Sanctum and destroy it. May the gods protect you.",
      progress: "The golem still lives? We can hear its footsteps from here!",
      complete: "Incredible! You've saved us all. You are a true champion!",
    },
  },

  SHADOW_WRAITH_HUNT: {
    id: 'shadow_wraith_hunt',
    title: 'Shadow Wraith Hunt',
    description: 'A shadow wraith has been terrorizing travelers. Hunt it down and banish it from this realm.',
    type: QUEST_TYPE.BOSS,
    difficulty: QUEST_DIFFICULTY.HARD,
    recommendedLevel: 10,
    giver: 'mage_selene',
    turnIn: 'mage_selene',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.DEFEAT_BOSS,
        target: 'shadow_wraith',
        targetName: 'Shadow Wraith',
        required: 1,
        current: 0,
        isOptional: false,
      },
    ],
    
    optionalObjectives: [
      {
        id: 'opt_1',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'wraith_essence',
        targetName: 'Wraith Essence',
        required: 1,
        current: 0,
        bonusReward: reward(300, 400, ['shadow_cloak']),
      },
    ],
    
    rewards: reward(600, 1000, ['wraithbane_sword', 'shadow_ward_ring']),
    
    prerequisites: ['golem_threat'],
    unlocks: ['the_final_challenge'],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "A creature of pure shadow haunts the cemetery. It must be stopped.",
      accept: "The Shadow Wraith dwells in the Haunted Cemetery. Take this enchanted oil - your weapon will need it.",
      progress: "The shadow still lingers? You must destroy its anchor to this world!",
      complete: "The shadow has dispersed! You've done what many thought impossible.",
    },
  },

  // ==========================================
  // CHAIN QUESTS
  // ==========================================
  
  THE_CAPTAINS_TRUST: {
    id: 'the_captains_trust',
    title: "The Captain's Trust",
    description: 'Captain Theron has a dangerous mission for someone he trusts. Investigate reports of cult activity.',
    type: QUEST_TYPE.KILL,
    difficulty: QUEST_DIFFICULTY.HARD,
    recommendedLevel: 6,
    giver: 'guard_captain_theron',
    turnIn: 'guard_captain_theron',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.VISIT_LOCATION,
        target: 'cult_hideout',
        targetName: 'Hidden Cave',
        position: { x: -60, y: 0, z: -40 },
        radius: 15,
        required: 1,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_2',
        type: OBJECTIVE_TYPE.KILL_ENEMY,
        target: 'cultist',
        targetName: 'Dark Cultists',
        required: 10,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_3',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'cult_documents',
        targetName: 'Cult Documents',
        required: 1,
        current: 0,
        isOptional: false,
        questItem: true,
      },
    ],
    
    optionalObjectives: [],
    
    rewards: reward(300, 400, ['captains_signet']),
    
    prerequisites: ['bandit_problem'],
    unlocks: ['cult_conspiracy'],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "You've proven yourself trustworthy. I have a delicate matter... cultists, operating near the village.",
      accept: "Find their hideout, deal with them, and bring me evidence of their plans.",
      progress: "What have you found? I need those documents.",
      complete: "This is worse than I feared. Thank you for bringing this to me.",
    },
  },

  MASTER_CRAFTSMANSHIP: {
    id: 'master_craftsmanship',
    title: 'Master Craftsmanship',
    description: 'Greta wants to forge a masterwork weapon. Help her gather rare materials from dangerous places.',
    type: QUEST_TYPE.GATHER,
    difficulty: QUEST_DIFFICULTY.HARD,
    recommendedLevel: 7,
    giver: 'blacksmith_greta',
    turnIn: 'blacksmith_greta',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'mithril_ore',
        targetName: 'Mithril Ore',
        required: 5,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_2',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'fire_crystal',
        targetName: 'Fire Crystals',
        required: 3,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_3',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'dragon_scale',
        targetName: 'Dragon Scale',
        required: 1,
        current: 0,
        isOptional: false,
      },
    ],
    
    optionalObjectives: [],
    
    rewards: reward(400, 600, ['masterwork_weapon_choice']),
    
    prerequisites: ['forge_materials'],
    unlocks: [],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "I want to forge a TRUE masterwork - something legendary. But I need... impossible materials.",
      accept: "Mithril from the deep caves, fire crystals from the volcano, and... a dragon scale.",
      progress: "Keep searching. These materials don't come easy.",
      complete: "By the forge! You actually found everything! Watch this...",
    },
  },

  SELENES_RESEARCH: {
    id: 'selenes_research',
    title: "Selene's Research",
    description: 'Help Selene understand the ancient tablet by finding more artifacts in various locations.',
    type: QUEST_TYPE.EXPLORE,
    difficulty: QUEST_DIFFICULTY.NORMAL,
    recommendedLevel: 6,
    giver: 'mage_selene',
    turnIn: 'mage_selene',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.VISIT_LOCATION,
        target: 'crystal_cave',
        targetName: 'Crystal Cave',
        position: { x: -40, y: 0, z: -60 },
        radius: 20,
        required: 1,
        current: 0,
        isOptional: false,
      },
      {
        id: 'obj_2',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'crystal_shard_artifact',
        targetName: 'Crystal Shard Artifact',
        required: 1,
        current: 0,
        isOptional: false,
        questItem: true,
      },
      {
        id: 'obj_3',
        type: OBJECTIVE_TYPE.VISIT_LOCATION,
        target: 'mountain_shrine',
        targetName: 'Mountain Shrine',
        position: { x: 100, y: 20, z: -50 },
        radius: 15,
        required: 1,
        current: 0,
        isOptional: false,
      },
    ],
    
    optionalObjectives: [],
    
    rewards: reward(250, 350, ['tome_of_knowledge']),
    
    prerequisites: ['explore_the_ruins'],
    unlocks: [],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "The tablet speaks of other sites of power. I need you to investigate them.",
      accept: "Visit the Crystal Cave and the Mountain Shrine. Bring back any artifacts you find.",
      progress: "Have you found the other sites? The magic grows stronger...",
      complete: "Yes! The pieces are coming together. The ancients were preparing for something...",
    },
  },

  // ==========================================
  // MYSTERIOUS STRANGER CHAIN
  // ==========================================
  
  STRANGER_INTRODUCTION: {
    id: 'stranger_introduction',
    title: 'A Mysterious Task',
    description: 'A mysterious stranger offers gold for a simple task - gathering shadow essence from the night.',
    type: QUEST_TYPE.GATHER,
    difficulty: QUEST_DIFFICULTY.NORMAL,
    recommendedLevel: 5,
    giver: 'mysterious_stranger',
    turnIn: 'mysterious_stranger',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'shadow_essence',
        targetName: 'Shadow Essence',
        required: 5,
        current: 0,
        isOptional: false,
      },
    ],
    
    optionalObjectives: [
      {
        id: 'opt_1',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'void_crystal',
        targetName: 'Void Crystal',
        required: 1,
        current: 0,
        bonusReward: reward(200, 200),
      },
    ],
    
    rewards: reward(300, 250),
    
    prerequisites: [],
    unlocks: ['stranger_true_purpose'],
    
    isRepeatable: false,
    cooldownHours: 0,
    timeLimitMinutes: 0,
    
    dialogue: {
      intro: "Ah, an adventurer. I have need of... certain materials. Shadow essence, gathered only at night.",
      accept: "Collect shadow essence from creatures of darkness. Return when you have enough.",
      progress: "Patience. The darkness yields its secrets slowly.",
      complete: "Excellent. You are more capable than you appear. Perhaps we can work together again.",
    },
  },

  // ==========================================
  // TIME-LIMITED DAILY QUEST
  // ==========================================
  
  DAILY_HUNT: {
    id: 'daily_hunt',
    title: 'Daily Hunt',
    description: 'Hunter Jorik has marked dangerous beasts in the area. Hunt them before sundown for a reward.',
    type: QUEST_TYPE.KILL,
    difficulty: QUEST_DIFFICULTY.NORMAL,
    recommendedLevel: 4,
    giver: 'hunter_jorik',
    turnIn: 'hunter_jorik',
    
    objectives: [
      {
        id: 'obj_1',
        type: OBJECTIVE_TYPE.KILL_ANY,
        target: 'beast',
        targetName: 'Wild Beasts',
        validTargets: ['wolf', 'bear', 'boar', 'giant_spider'],
        required: 10,
        current: 0,
        isOptional: false,
      },
    ],
    
    optionalObjectives: [
      {
        id: 'opt_1',
        type: OBJECTIVE_TYPE.GATHER_ITEM,
        target: 'pristine_pelt',
        targetName: 'Pristine Pelts',
        required: 3,
        current: 0,
        bonusReward: reward(50, 75),
      },
    ],
    
    rewards: reward(100, 150),
    
    prerequisites: [],
    unlocks: [],
    
    isRepeatable: true,
    cooldownHours: 24,
    timeLimitMinutes: 60, // 1 hour to complete
    
    dailyReset: true, // Resets at midnight game time
    
    dialogue: {
      intro: "The beasts are restless today. Hunt them before they become a real problem.",
      accept: "Kill 10 beasts - wolves, bears, whatever you find. Be quick about it.",
      progress: "Still hunting? Time's wasting, friend.",
      complete: "Good hunt! Here's your pay. Come back tomorrow for more work.",
    },
  },
};

// ========== QUEST CHAIN DEFINITIONS ==========
export const QUEST_CHAINS = {
  MAIN_STORY: {
    id: 'main_story',
    name: 'The Awakening',
    quests: ['first_steps', 'guard_duty', 'bandit_problem', 'the_captains_trust'],
    description: 'The main storyline of Ashvale',
  },
  
  HERBALIST_PATH: {
    id: 'herbalist_path',
    name: 'The Herbalist Path',
    quests: ['gathering_herbs', 'miras_special_brew'],
    description: "Help Mira with her healing work",
  },
  
  BLACKSMITH_PATH: {
    id: 'blacksmith_path',
    name: 'The Forgemaster',
    quests: ['forge_materials', 'master_craftsmanship'],
    description: "Assist Greta in her craft",
  },
  
  ARCANE_MYSTERIES: {
    id: 'arcane_mysteries',
    name: 'Arcane Mysteries',
    quests: ['explore_the_ruins', 'selenes_research'],
    description: "Uncover ancient magical secrets",
  },
  
  BOSS_HUNTS: {
    id: 'boss_hunts',
    name: 'Champion of Ashvale',
    quests: ['golem_threat', 'shadow_wraith_hunt'],
    description: 'Defeat the greatest threats',
  },
  
  MYSTERIOUS_STRANGER: {
    id: 'mysterious_stranger',
    name: 'The Stranger\'s Bargain',
    quests: ['stranger_introduction', 'stranger_true_purpose'],
    description: 'A shadowy figure has plans...',
  },
};

// ========== DIFFICULTY SCALING ==========
export const DIFFICULTY_SCALE = {
  [QUEST_DIFFICULTY.TRIVIAL]: { xpMult: 0.5, goldMult: 0.5, labelColor: '#888888' },
  [QUEST_DIFFICULTY.EASY]: { xpMult: 0.8, goldMult: 0.8, labelColor: '#44aa44' },
  [QUEST_DIFFICULTY.NORMAL]: { xpMult: 1.0, goldMult: 1.0, labelColor: '#aaaa44' },
  [QUEST_DIFFICULTY.HARD]: { xpMult: 1.3, goldMult: 1.3, labelColor: '#dd8844' },
  [QUEST_DIFFICULTY.ELITE]: { xpMult: 1.6, goldMult: 1.6, labelColor: '#dd4444' },
  [QUEST_DIFFICULTY.LEGENDARY]: { xpMult: 2.0, goldMult: 2.0, labelColor: '#aa44dd' },
};

// ========== HELPER FUNCTIONS ==========

/**
 * Get quest by ID
 */
export function getQuest(questId) {
  return QUESTS[questId.toUpperCase()] || Object.values(QUESTS).find(q => q.id === questId);
}

/**
 * Get all quests for a given NPC
 */
export function getQuestsForGiver(giverId) {
  return Object.values(QUESTS).filter(q => q.giver === giverId);
}

/**
 * Check if quest prerequisites are met
 */
export function arePrerequisitesMet(questId, completedQuests = []) {
  const quest = getQuest(questId);
  if (!quest) return false;
  if (!quest.prerequisites || quest.prerequisites.length === 0) return true;
  return quest.prerequisites.every(prereq => completedQuests.includes(prereq));
}

/**
 * Get difficulty relative to player level
 */
export function getRelativeDifficulty(questId, playerLevel) {
  const quest = getQuest(questId);
  if (!quest) return QUEST_DIFFICULTY.NORMAL;
  
  const levelDiff = quest.recommendedLevel - playerLevel;
  
  if (levelDiff <= -5) return QUEST_DIFFICULTY.TRIVIAL;
  if (levelDiff <= -2) return QUEST_DIFFICULTY.EASY;
  if (levelDiff <= 2) return QUEST_DIFFICULTY.NORMAL;
  if (levelDiff <= 5) return QUEST_DIFFICULTY.HARD;
  return QUEST_DIFFICULTY.ELITE;
}

/**
 * Get quests by type
 */
export function getQuestsByType(type) {
  return Object.values(QUESTS).filter(q => q.type === type);
}

/**
 * Get chain for quest
 */
export function getQuestChain(questId) {
  return Object.values(QUEST_CHAINS).find(chain => chain.quests.includes(questId));
}

/**
 * Get next quest in chain
 */
export function getNextInChain(questId) {
  const chain = getQuestChain(questId);
  if (!chain) return null;
  
  const index = chain.quests.indexOf(questId);
  if (index === -1 || index === chain.quests.length - 1) return null;
  
  return chain.quests[index + 1];
}

/**
 * Get exploration area by ID
 */
export function getExplorationArea(areaId) {
  return EXPLORATION_AREAS[areaId.toUpperCase()] || 
    Object.values(EXPLORATION_AREAS).find(a => a.id === areaId);
}

/**
 * Get quest giver by ID  
 */
export function getQuestGiver(giverId) {
  return QUEST_GIVERS[giverId.toUpperCase()] ||
    Object.values(QUEST_GIVERS).find(g => g.id === giverId);
}

export default {
  QUEST_TYPE,
  QUEST_STATUS,
  QUEST_DIFFICULTY,
  OBJECTIVE_TYPE,
  QUEST_GIVERS,
  EXPLORATION_AREAS,
  QUESTS,
  QUEST_CHAINS,
  DIFFICULTY_SCALE,
  getQuest,
  getQuestsForGiver,
  arePrerequisitesMet,
  getRelativeDifficulty,
  getQuestsByType,
  getQuestChain,
  getNextInChain,
  getExplorationArea,
  getQuestGiver,
};
