/**
 * QuestWorldHooks.js - World Event Integration
 * Phase 25: Quest System
 * 
 * Hooks quest tracking into world events:
 * - Enemy deaths → kill progress
 * - Item pickups → gather progress
 * - Area enters → explore progress
 * - NPC interactions → delivery quests
 * - Boss kills → boss quest progress
 */

import * as THREE from 'three';
import { getQuestManager } from './QuestManager.js';
import {
  QUEST_TYPE,
  OBJECTIVE_TYPE,
  EXPLORATION_AREAS,
  getQuest,
} from '../data/QuestData.js';

// ========== CONSTANTS ==========
const EXPLORATION_MARKER_HEIGHT = 3;
const EXPLORATION_MARKER_SEGMENTS = 32;
const MARKER_ANIMATION_SPEED = 2;
const QUEST_ITEM_GLOW_COLOR = 0x44ffff;

// ========== QUEST WORLD HOOKS CLASS ==========
class QuestWorldHooks {
  constructor() {
    this.questManager = null;
    this.scene = null;
    
    // Exploration markers (glowing waypoints)
    this.explorationMarkers = new Map(); // locationId -> mesh
    
    // Quest enemy spawn tracking
    this.questEnemySpawns = new Map(); // enemyType -> { needed, spawned }
    
    // Quest item glow effects
    this.questItemEffects = new Map(); // itemId -> effect
    
    // Animation time
    this.animationTime = 0;
    
    // References to game systems
    this.enemyManager = null;
    this.itemManager = null;
    this.npcManager = null;
    this.bossManager = null;
    
    // Bound handlers for cleanup
    this.boundHandlers = {};
  }

  // ========== INITIALIZATION ==========
  
  /**
   * Initialize with game system references
   */
  init(systems = {}) {
    this.questManager = systems.questManager || getQuestManager();
    this.scene = systems.scene || null;
    this.enemyManager = systems.enemyManager || null;
    this.itemManager = systems.itemManager || null;
    this.npcManager = systems.npcManager || null;
    this.bossManager = systems.bossManager || null;
    this.player = systems.player || null;
    
    // Set up quest event listeners
    this.setupQuestListeners();
    
    // Set up world event hooks
    this.setupWorldHooks();
    
    // Create initial exploration markers
    this.updateExplorationMarkers();
    
    console.log('[QuestWorldHooks] Initialized');
  }

  // ========== QUEST EVENT LISTENERS ==========
  
  /**
   * Set up listeners for quest events
   */
  setupQuestListeners() {
    if (!this.questManager) return;
    
    // When quest is accepted, update enemy spawns and markers
    this.questManager.on('onQuestAccepted', (data) => {
      this.onQuestAccepted(data.questId, data.quest);
    });
    
    // When quest is turned in or abandoned, cleanup
    this.questManager.on('onQuestTurnedIn', (data) => {
      this.onQuestEnded(data.questId);
    });
    
    this.questManager.on('onQuestAbandoned', (data) => {
      this.onQuestEnded(data.questId);
    });
    
    this.questManager.on('onQuestFailed', (data) => {
      this.onQuestEnded(data.questId);
    });
    
    // When objective completes, update markers
    this.questManager.on('onObjectiveComplete', (data) => {
      this.updateExplorationMarkers();
    });
  }

  // ========== WORLD EVENT HOOKS ==========
  
  /**
   * Set up hooks into world systems
   */
  setupWorldHooks() {
    // These would normally be called by the respective systems
    // We expose methods that those systems call
    
    console.log('[QuestWorldHooks] World hooks ready');
  }

  // ========== ENEMY KILL HOOKS ==========
  
  /**
   * Called when an enemy dies
   */
  onEnemyKilled(enemyType, enemyData = {}) {
    if (!this.questManager) return;
    
    // Track kill for quest progress
    this.questManager.updateProgress('kill', enemyType, 1);
    
    // Check for quest item drops
    this.checkQuestItemDrop(enemyType, enemyData);
    
    // Update spawn tracking
    if (this.questEnemySpawns.has(enemyType)) {
      const spawn = this.questEnemySpawns.get(enemyType);
      spawn.killed = (spawn.killed || 0) + 1;
    }
  }

  /**
   * Called when a boss is defeated
   */
  onBossKilled(bossId, bossData = {}) {
    if (!this.questManager) return;
    
    // Track boss kill
    this.questManager.updateProgress('boss', bossId, 1);
    this.questManager.updateProgress('kill', bossId, 1);
    
    // Check for quest item drops
    this.checkQuestItemDrop(bossId, bossData);
    
    console.log(`[QuestWorldHooks] Boss killed: ${bossId}`);
  }

  // ========== ITEM PICKUP HOOKS ==========
  
  /**
   * Called when an item is picked up
   */
  onItemPickup(itemId, amount = 1) {
    if (!this.questManager) return;
    
    // Track gather progress
    this.questManager.updateProgress('gather', itemId, amount);
    
    // Remove glow effect if quest item
    if (this.questItemEffects.has(itemId)) {
      this.removeQuestItemEffect(itemId);
    }
  }

  /**
   * Check if a quest item should drop from enemy
   */
  checkQuestItemDrop(sourceId, sourceData = {}) {
    if (!this.questManager) return null;
    
    const activeQuests = this.questManager.getActiveQuests();
    
    for (const { id, quest, state } of activeQuests) {
      for (const obj of state.objectives) {
        if (obj.questItem && obj.current < obj.required) {
          // Check if this source can drop this quest item
          if (this.canDropQuestItem(sourceId, obj.target, sourceData)) {
            return {
              itemId: obj.target,
              questId: id,
              dropChance: 1.0, // Guaranteed when quest active
            };
          }
        }
      }
    }
    
    return null;
  }

  /**
   * Check if source can drop quest item
   */
  canDropQuestItem(sourceId, itemId, sourceData = {}) {
    // Define which enemies/sources drop which quest items
    const dropTable = {
      'stolen_supplies': ['bandit', 'bandit_leader'],
      'cult_documents': ['cultist', 'cult_leader'],
      'spider_venom': ['giant_spider', 'spider'],
      'pristine_pelt': ['wolf', 'bear', 'boar'],
      'shadow_essence': ['shadow_stalker', 'wraith', 'phantom'],
      'golem_core': ['ancient_golem'],
      'wraith_essence': ['shadow_wraith'],
      'dragon_scale': ['dragon', 'drake'],
    };
    
    const validSources = dropTable[itemId] || [];
    return validSources.includes(sourceId);
  }

  // ========== EXPLORATION HOOKS ==========
  
  /**
   * Called when player enters an area
   */
  onAreaEnter(areaId) {
    if (!this.questManager) return;
    
    // Track exploration progress
    this.questManager.updateProgress('explore', areaId, 1);
    
    // Remove marker for this location
    this.removeExplorationMarker(areaId);
  }

  /**
   * Update player position for exploration tracking
   */
  updatePlayerPosition(position) {
    if (!this.questManager) return;
    
    // Let quest manager check locations
    this.questManager.checkLocation(position);
    
    // Also check our exploration markers
    this.checkExplorationMarkers(position);
  }

  /**
   * Check if player is near exploration markers
   */
  checkExplorationMarkers(playerPos) {
    this.explorationMarkers.forEach((marker, locationId) => {
      const dx = playerPos.x - marker.position.x;
      const dz = playerPos.z - marker.position.z;
      const distance = Math.sqrt(dx * dx + dz * dz);
      
      const radius = marker.userData.radius || 10;
      
      if (distance <= radius) {
        this.onAreaEnter(locationId);
      }
    });
  }

  // ========== NPC INTERACTION HOOKS ==========
  
  /**
   * Called when player talks to NPC
   */
  onNpcInteraction(npcId, npcData = {}) {
    if (!this.questManager) return;
    
    // Check for delivery quests
    this.checkDeliveryQuests(npcId);
    
    // Track talk objectives
    this.questManager.updateProgress('talk', npcId, 1);
  }

  /**
   * Check if any delivery quests can be completed
   */
  checkDeliveryQuests(npcId) {
    const turnInQuests = this.questManager.getTurnInQuestsForNpc(npcId);
    
    if (turnInQuests.length > 0) {
      // Would trigger UI to show turn-in dialog
      console.log(`[QuestWorldHooks] ${turnInQuests.length} quests to turn in at ${npcId}`);
    }
    
    // Check delivery objectives (not turn-in, but objective NPCs)
    const activeQuests = this.questManager.getActiveQuests();
    
    activeQuests.forEach(({ id, state }) => {
      state.objectives.forEach(obj => {
        if (obj.type === OBJECTIVE_TYPE.DELIVER_ITEM && obj.recipient === npcId) {
          // Player has reached delivery target
          this.questManager.updateProgress('deliver', obj.target, 1);
        }
      });
    });
  }

  // ========== ESCORT HOOKS ==========
  
  /**
   * Called when escort NPC takes damage
   */
  onEscortDamage(questId, npcHealth, maxHealth) {
    const questState = this.questManager.getQuestState(questId);
    if (!questState) return;
    
    // Update escort health in objective
    questState.objectives.forEach(obj => {
      if (obj.type === OBJECTIVE_TYPE.ESCORT_NPC) {
        obj.npcCurrentHealth = npcHealth;
        
        // Check for failure
        if (npcHealth <= 0) {
          this.questManager.failQuest(questId, 'Escort target died');
        }
      }
    });
  }

  /**
   * Called when escort reaches destination
   */
  onEscortArrived(questId) {
    const questState = this.questManager.getQuestState(questId);
    if (!questState) return;
    
    questState.objectives.forEach(obj => {
      if (obj.type === OBJECTIVE_TYPE.ESCORT_NPC) {
        obj.current = obj.required;
      }
    });
    
    this.questManager.checkQuestCompletion(questId);
  }

  // ========== EXPLORATION MARKERS ==========
  
  /**
   * Update exploration markers for active quests
   */
  updateExplorationMarkers() {
    if (!this.scene) return;
    
    // Get all exploration objectives from active quests
    const activeQuests = this.questManager?.getActiveQuests() || [];
    const neededLocations = new Set();
    
    activeQuests.forEach(({ id, state }) => {
      state.objectives.forEach(obj => {
        if (obj.type === OBJECTIVE_TYPE.VISIT_LOCATION && obj.current < obj.required) {
          neededLocations.add(obj.target);
        }
      });
    });
    
    // Remove markers that are no longer needed
    this.explorationMarkers.forEach((marker, locationId) => {
      if (!neededLocations.has(locationId)) {
        this.scene.remove(marker);
        this.explorationMarkers.delete(locationId);
      }
    });
    
    // Add new markers
    neededLocations.forEach(locationId => {
      if (!this.explorationMarkers.has(locationId)) {
        this.createExplorationMarker(locationId);
      }
    });
  }

  /**
   * Create a glowing exploration marker
   */
  createExplorationMarker(locationId) {
    if (!this.scene) return;
    
    // Find location data from active quest objectives
    let position = null;
    let radius = 10;
    
    const activeQuests = this.questManager?.getActiveQuests() || [];
    
    for (const { state } of activeQuests) {
      for (const obj of state.objectives) {
        if (obj.target === locationId && obj.position) {
          position = obj.position;
          radius = obj.radius || 10;
          break;
        }
      }
      if (position) break;
    }
    
    // Check predefined areas
    if (!position) {
      const area = Object.values(EXPLORATION_AREAS).find(a => a.id === locationId);
      if (area) {
        position = area.position;
        radius = area.radius;
      }
    }
    
    if (!position) return;
    
    // Create marker group
    const markerGroup = new THREE.Group();
    markerGroup.position.set(position.x, (position.y || 0) + EXPLORATION_MARKER_HEIGHT, position.z);
    markerGroup.userData.radius = radius;
    markerGroup.userData.locationId = locationId;
    
    // Glowing ring
    const ringGeometry = new THREE.RingGeometry(0.8, 1.2, EXPLORATION_MARKER_SEGMENTS);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x44ffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8,
    });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.x = Math.PI / 2;
    markerGroup.add(ring);
    
    // Inner glow
    const innerGeometry = new THREE.CircleGeometry(0.6, EXPLORATION_MARKER_SEGMENTS);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x88ffff,
      transparent: true,
      opacity: 0.4,
    });
    const inner = new THREE.Mesh(innerGeometry, innerMaterial);
    inner.rotation.x = -Math.PI / 2;
    inner.position.y = 0.1;
    markerGroup.add(inner);
    
    // Vertical beam
    const beamGeometry = new THREE.CylinderGeometry(0.1, 0.3, 10, 8);
    const beamMaterial = new THREE.MeshBasicMaterial({
      color: 0x44ffff,
      transparent: true,
      opacity: 0.3,
    });
    const beam = new THREE.Mesh(beamGeometry, beamMaterial);
    beam.position.y = 5;
    markerGroup.add(beam);
    
    // Add point light
    const light = new THREE.PointLight(0x44ffff, 1, 10);
    light.position.y = 1;
    markerGroup.add(light);
    
    this.scene.add(markerGroup);
    this.explorationMarkers.set(locationId, markerGroup);
    
    console.log(`[QuestWorldHooks] Created exploration marker: ${locationId}`);
  }

  /**
   * Remove an exploration marker
   */
  removeExplorationMarker(locationId) {
    const marker = this.explorationMarkers.get(locationId);
    if (marker && this.scene) {
      this.scene.remove(marker);
      this.explorationMarkers.delete(locationId);
      
      console.log(`[QuestWorldHooks] Removed exploration marker: ${locationId}`);
    }
  }

  // ========== QUEST ENEMY SPAWNING ==========
  
  /**
   * Called when quest is accepted - ensure enough enemies spawn
   */
  onQuestAccepted(questId, quest) {
    // Track needed enemy kills
    const state = this.questManager.getQuestState(questId);
    if (!state) return;
    
    state.objectives.forEach(obj => {
      if (obj.type === OBJECTIVE_TYPE.KILL_ENEMY || obj.type === OBJECTIVE_TYPE.KILL_ANY) {
        const targets = obj.validTargets || [obj.target];
        
        targets.forEach(enemyType => {
          if (!this.questEnemySpawns.has(enemyType)) {
            this.questEnemySpawns.set(enemyType, { needed: 0, spawned: 0, killed: 0 });
          }
          
          const spawn = this.questEnemySpawns.get(enemyType);
          spawn.needed += obj.required;
        });
      }
    });
    
    // Update exploration markers
    this.updateExplorationMarkers();
    
    // Request enemy spawns from EnemyManager
    this.ensureQuestEnemies();
  }

  /**
   * Called when quest ends
   */
  onQuestEnded(questId) {
    // Cleanup exploration markers
    this.updateExplorationMarkers();
    
    // Recalculate needed spawns
    this.recalculateSpawnNeeds();
  }

  /**
   * Recalculate enemy spawn needs based on active quests
   */
  recalculateSpawnNeeds() {
    this.questEnemySpawns.clear();
    
    const activeQuests = this.questManager?.getActiveQuests() || [];
    
    activeQuests.forEach(({ state }) => {
      state.objectives.forEach(obj => {
        if (obj.type === OBJECTIVE_TYPE.KILL_ENEMY || obj.type === OBJECTIVE_TYPE.KILL_ANY) {
          const targets = obj.validTargets || [obj.target];
          const remaining = obj.required - obj.current;
          
          if (remaining > 0) {
            targets.forEach(enemyType => {
              if (!this.questEnemySpawns.has(enemyType)) {
                this.questEnemySpawns.set(enemyType, { needed: 0, spawned: 0, killed: 0 });
              }
              
              const spawn = this.questEnemySpawns.get(enemyType);
              spawn.needed += remaining;
            });
          }
        }
      });
    });
  }

  /**
   * Ensure enough quest enemies are spawned
   */
  ensureQuestEnemies() {
    if (!this.enemyManager) return;
    
    this.questEnemySpawns.forEach((data, enemyType) => {
      const needed = data.needed - data.killed;
      const toSpawn = Math.max(0, needed - data.spawned);
      
      if (toSpawn > 0) {
        // Request spawns from enemy manager
        // This is a hint - the enemy manager decides where/when
        if (this.enemyManager.requestQuestSpawn) {
          this.enemyManager.requestQuestSpawn(enemyType, toSpawn);
          data.spawned += toSpawn;
        }
      }
    });
  }

  /**
   * Check if an enemy type is needed for quests
   */
  isQuestEnemy(enemyType) {
    const spawn = this.questEnemySpawns.get(enemyType);
    if (!spawn) return false;
    
    return spawn.needed > spawn.killed;
  }

  // ========== QUEST ITEM EFFECTS ==========
  
  /**
   * Add glow effect to quest item in world
   */
  addQuestItemEffect(itemMesh, itemId) {
    if (!itemMesh) return;
    
    // Add glow
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: QUEST_ITEM_GLOW_COLOR,
      transparent: true,
      opacity: 0.5,
    });
    
    // Create outline mesh
    const outlineGeom = itemMesh.geometry.clone();
    const outline = new THREE.Mesh(outlineGeom, glowMaterial);
    outline.scale.setScalar(1.3);
    outline.position.copy(itemMesh.position);
    
    if (this.scene) {
      this.scene.add(outline);
    }
    
    this.questItemEffects.set(itemId, {
      mesh: outline,
      baseY: itemMesh.position.y,
    });
  }

  /**
   * Remove quest item glow effect
   */
  removeQuestItemEffect(itemId) {
    const effect = this.questItemEffects.get(itemId);
    if (effect && this.scene) {
      this.scene.remove(effect.mesh);
      this.questItemEffects.delete(itemId);
    }
  }

  // ========== UPDATE LOOP ==========
  
  /**
   * Update hook (call from game loop)
   */
  update(delta, playerPosition) {
    this.animationTime += delta;
    
    // Animate exploration markers
    this.explorationMarkers.forEach((marker) => {
      // Rotate ring
      if (marker.children[0]) {
        marker.children[0].rotation.z = this.animationTime * MARKER_ANIMATION_SPEED;
      }
      
      // Pulse inner glow
      if (marker.children[1]) {
        marker.children[1].material.opacity = 0.3 + Math.sin(this.animationTime * 3) * 0.2;
      }
      
      // Bob up and down
      marker.position.y = (marker.userData.baseY || EXPLORATION_MARKER_HEIGHT) + 
        Math.sin(this.animationTime * 2) * 0.3;
    });
    
    // Animate quest item effects
    this.questItemEffects.forEach((effect) => {
      if (effect.mesh) {
        effect.mesh.material.opacity = 0.3 + Math.sin(this.animationTime * 4) * 0.2;
        effect.mesh.position.y = effect.baseY + Math.sin(this.animationTime * 2) * 0.2;
      }
    });
    
    // Check player location for exploration
    if (playerPosition) {
      this.updatePlayerPosition(playerPosition);
    }
  }

  // ========== CLEANUP ==========
  
  /**
   * Cleanup all markers and effects
   */
  cleanup() {
    // Remove exploration markers
    this.explorationMarkers.forEach((marker) => {
      if (this.scene) this.scene.remove(marker);
    });
    this.explorationMarkers.clear();
    
    // Remove item effects
    this.questItemEffects.forEach((effect) => {
      if (this.scene) this.scene.remove(effect.mesh);
    });
    this.questItemEffects.clear();
    
    this.questEnemySpawns.clear();
    
    console.log('[QuestWorldHooks] Cleaned up');
  }

  // ========== DEBUG ==========
  
  /**
   * Get debug info
   */
  getDebugInfo() {
    return {
      explorationMarkers: this.explorationMarkers.size,
      questEnemySpawns: Object.fromEntries(this.questEnemySpawns),
      questItemEffects: this.questItemEffects.size,
    };
  }
}

// ========== SINGLETON ==========
let questWorldHooksInstance = null;

export function createQuestWorldHooks() {
  if (!questWorldHooksInstance) {
    questWorldHooksInstance = new QuestWorldHooks();
  }
  return questWorldHooksInstance;
}

export function getQuestWorldHooks() {
  return questWorldHooksInstance;
}

export { QuestWorldHooks };
export default QuestWorldHooks;
