/**
 * NPCQuestGivers.js - NPC Quest Integration System
 * Phase 25: Quest System - Worker 2
 * 
 * Integrates quests with NPCs: markers, dialogue, quest offers,
 * turn-ins, and contextual responses based on quest state.
 */

import * as THREE from 'three';
import {
  QUEST_GIVERS,
  QUEST_STATUS,
  QUEST_TYPE,
  getQuest,
  getQuestsForGiver,
  getQuestGiver,
} from '../data/QuestData.js';

import { getQuestManager } from './QuestManager.js';

// ========== CONSTANTS ==========
const MARKER_HOVER_HEIGHT = 2.5;
const MARKER_BOB_SPEED = 2.0;
const MARKER_BOB_AMPLITUDE = 0.15;
const INTERACTION_RANGE = 5.0;

// ========== NPC MARKER COLORS ==========
const MARKER_COLORS = {
  QUEST_AVAILABLE: 0xffff00,   // Yellow ! - new quest
  QUEST_AVAILABLE_LOW: 0x888888, // Gray ! - level too low / prerequisites not met
  QUEST_TURN_IN: 0xffff00,    // Yellow ? - ready to turn in
  QUEST_IN_PROGRESS: 0xaaaaaa, // Gray ? - quest active but not complete
  DAILY_AVAILABLE: 0x4488ff,   // Blue ! - daily quest
  NONE: 0x000000,
};

// ========== NPC QUEST GIVER CLASS ==========
class NPCQuestGiver {
  constructor(npcData, scene) {
    this.id = npcData.id;
    this.npcData = npcData;
    this.scene = scene;
    this.mesh = null;
    this.marker = null;
    this.markerType = 'none'; // 'quest_available', 'turn_in', 'in_progress', 'none'
    this.time = 0;
    
    this.createNPCMesh();
    this.createMarker();
  }

  createNPCMesh() {
    // Create simple NPC representation
    const group = new THREE.Group();
    
    // Body
    const bodyGeom = new THREE.CapsuleGeometry(0.4, 1.0, 4, 8);
    const bodyMat = new THREE.MeshBasicMaterial({ 
      color: this.getNPCColor(),
    });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.position.y = 0.9;
    body.castShadow = true;
    group.add(body);
    
    // Head
    const headGeom = new THREE.SphereGeometry(0.3, 8, 8);
    const head = new THREE.Mesh(headGeom, bodyMat);
    head.position.y = 1.8;
    head.castShadow = true;
    group.add(head);
    
    // Position
    group.position.set(
      this.npcData.position.x,
      this.npcData.position.y || 0,
      this.npcData.position.z
    );
    
    // Name plate
    this.createNamePlate(group);
    
    this.mesh = group;
    this.scene.add(group);
  }

  getNPCColor() {
    const colors = {
      'elder_marcus': 0x8b4513,
      'blacksmith_greta': 0x4a4a4a,
      'hunter_jorik': 0x228b22,
      'mage_selene': 0x4b0082,
      'guard_captain_theron': 0x708090,
      'merchant_lydia': 0xdaa520,
      'herbalist_mira': 0x32cd32,
      'mysterious_stranger': 0x1a1a1a,
    };
    return colors[this.id] || 0x666666;
  }

  createNamePlate(group) {
    // Create canvas for name
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    
    // Draw name
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fillRect(0, 20, 256, 44);
    
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.fillText(this.npcData.name, 128, 48);
    
    // Title
    if (this.npcData.title) {
      ctx.font = '16px Arial';
      ctx.fillStyle = '#aaaaaa';
      ctx.fillText(this.npcData.title, 128, 18);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    const spriteMat = new THREE.SpriteMaterial({ 
      map: texture,
      transparent: true,
    });
    const sprite = new THREE.Sprite(spriteMat);
    sprite.position.y = 2.5;
    sprite.scale.set(2, 0.5, 1);
    group.add(sprite);
  }

  createMarker() {
    const group = new THREE.Group();
    
    // Exclamation mark shape (!)
    const exclamationGroup = new THREE.Group();
    
    // Main body of !
    const bodyGeom = new THREE.CylinderGeometry(0.08, 0.15, 0.5, 6);
    const bodyMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.position.y = 0.15;
    exclamationGroup.add(body);
    
    // Dot of !
    const dotGeom = new THREE.SphereGeometry(0.1, 8, 8);
    const dot = new THREE.Mesh(dotGeom, bodyMat);
    dot.position.y = -0.2;
    exclamationGroup.add(dot);
    
    exclamationGroup.name = 'exclamation';
    exclamationGroup.visible = false;
    group.add(exclamationGroup);
    
    // Question mark shape (?)
    const questionGroup = new THREE.Group();
    
    // Curve part of ?
    const curveGeom = new THREE.TorusGeometry(0.15, 0.06, 8, 16, Math.PI * 1.5);
    const curveMat = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const curve = new THREE.Mesh(curveGeom, curveMat);
    curve.rotation.x = Math.PI / 2;
    curve.rotation.z = Math.PI;
    curve.position.y = 0.2;
    questionGroup.add(curve);
    
    // Stem of ?
    const stemGeom = new THREE.CylinderGeometry(0.06, 0.06, 0.2, 6);
    const stem = new THREE.Mesh(stemGeom, curveMat);
    stem.position.y = -0.05;
    questionGroup.add(stem);
    
    // Dot of ?
    const qDot = new THREE.Mesh(dotGeom, curveMat);
    qDot.position.y = -0.3;
    questionGroup.add(qDot);
    
    questionGroup.name = 'question';
    questionGroup.visible = false;
    group.add(questionGroup);
    
    // Glow effect
    const glowGeom = new THREE.SphereGeometry(0.5, 16, 16);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffff00,
      transparent: true,
      opacity: 0.15,
    });
    const glow = new THREE.Mesh(glowGeom, glowMat);
    glow.name = 'glow';
    group.add(glow);
    
    // Point light
    const light = new THREE.PointLight(0xffff00, 0.5, 5);
    light.name = 'light';
    group.add(light);
    
    // Position above NPC
    group.position.set(
      this.npcData.position.x,
      (this.npcData.position.y || 0) + MARKER_HOVER_HEIGHT,
      this.npcData.position.z
    );
    
    group.visible = false;
    
    this.marker = group;
    this.scene.add(group);
  }

  updateMarker(questManager) {
    if (!questManager) return;
    
    // Check for turn-in quests first (highest priority)
    const turnInQuests = questManager.getTurnInQuestsForNpc(this.id);
    if (turnInQuests.length > 0) {
      this.setMarkerType('turn_in');
      return;
    }
    
    // Check for available quests
    const availableQuests = questManager.getAvailableQuestsForNpc(this.id);
    if (availableQuests.length > 0) {
      // Check if any are daily
      const hasDaily = availableQuests.some(q => q.isRepeatable);
      this.setMarkerType(hasDaily ? 'daily' : 'quest_available');
      return;
    }
    
    // Check for in-progress quests
    let hasInProgress = false;
    questManager.activeQuests.forEach((state, questId) => {
      const quest = getQuest(questId);
      if (quest && (quest.giver === this.id || quest.turnIn === this.id)) {
        hasInProgress = true;
      }
    });
    
    if (hasInProgress) {
      this.setMarkerType('in_progress');
      return;
    }
    
    this.setMarkerType('none');
  }

  setMarkerType(type) {
    if (this.markerType === type) return;
    this.markerType = type;
    
    const exclamation = this.marker.getObjectByName('exclamation');
    const question = this.marker.getObjectByName('question');
    const glow = this.marker.getObjectByName('glow');
    const light = this.marker.getObjectByName('light');
    
    let color = MARKER_COLORS.NONE;
    let showExclamation = false;
    let showQuestion = false;
    
    switch (type) {
      case 'quest_available':
        color = MARKER_COLORS.QUEST_AVAILABLE;
        showExclamation = true;
        break;
      case 'daily':
        color = MARKER_COLORS.DAILY_AVAILABLE;
        showExclamation = true;
        break;
      case 'turn_in':
        color = MARKER_COLORS.QUEST_TURN_IN;
        showQuestion = true;
        break;
      case 'in_progress':
        color = MARKER_COLORS.QUEST_IN_PROGRESS;
        showQuestion = true;
        break;
      default:
        this.marker.visible = false;
        return;
    }
    
    this.marker.visible = true;
    
    // Update colors
    exclamation.children.forEach(child => {
      if (child.material) child.material.color.setHex(color);
    });
    question.children.forEach(child => {
      if (child.material) child.material.color.setHex(color);
    });
    glow.material.color.setHex(color);
    light.color.setHex(color);
    
    exclamation.visible = showExclamation;
    question.visible = showQuestion;
  }

  update(delta) {
    this.time += delta;
    
    // Bob animation
    if (this.marker.visible) {
      this.marker.position.y = (this.npcData.position.y || 0) + MARKER_HOVER_HEIGHT +
        Math.sin(this.time * MARKER_BOB_SPEED) * MARKER_BOB_AMPLITUDE;
      
      // Rotate marker
      const exclamation = this.marker.getObjectByName('exclamation');
      const question = this.marker.getObjectByName('question');
      exclamation.rotation.y += delta * 1.5;
      question.rotation.y += delta * 1.5;
      
      // Pulse glow
      const glow = this.marker.getObjectByName('glow');
      glow.material.opacity = 0.1 + Math.sin(this.time * 3) * 0.05;
    }
  }

  getPosition() {
    return new THREE.Vector3(
      this.npcData.position.x,
      this.npcData.position.y || 0,
      this.npcData.position.z
    );
  }

  destroy() {
    this.scene.remove(this.mesh);
    this.scene.remove(this.marker);
    this.mesh.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) {
          obj.material.forEach(m => m.dispose());
        } else {
          obj.material.dispose();
        }
      }
    });
  }
}

// ========== NPC QUEST GIVERS MANAGER ==========
class NPCQuestGiversManager {
  constructor(scene) {
    this.scene = scene;
    this.npcs = new Map(); // npcId -> NPCQuestGiver
    this.questManager = null;
    this.dialogueUI = null;
    this.currentDialogue = null;
    
    this.createStyles();
    this.createDialogueUI();
    this.createNoticeBoard();
  }

  init(questManager) {
    this.questManager = questManager;
    
    // Create NPCs from quest giver data
    Object.values(QUEST_GIVERS).forEach(giver => {
      const npc = new NPCQuestGiver(giver, this.scene);
      this.npcs.set(giver.id, npc);
    });
    
    // Initial marker update
    this.updateAllMarkers();
    
    // Subscribe to quest events to update markers
    questManager.on('onQuestAccepted', () => this.updateAllMarkers());
    questManager.on('onQuestTurnedIn', () => this.updateAllMarkers());
    questManager.on('onQuestAbandoned', () => this.updateAllMarkers());
    questManager.on('onQuestComplete', () => this.updateAllMarkers());
    questManager.on('onQuestAvailable', () => this.updateAllMarkers());
    
    console.log('[NPCQuestGivers] Initialized with', this.npcs.size, 'NPCs');
  }

  createStyles() {
    if (document.getElementById('npc-dialogue-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'npc-dialogue-styles';
    style.textContent = `
      /* ===== DIALOGUE UI ===== */
      #npc-dialogue {
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        width: 600px;
        background: linear-gradient(180deg, #1a1a2e, #0a0a1e);
        border: 2px solid #4a4a6a;
        border-radius: 12px;
        padding: 0;
        font-family: 'Cinzel', serif;
        color: #e0e0e0;
        z-index: 2000;
        display: none;
        box-shadow: 0 0 40px rgba(0,0,0,0.8);
      }

      #npc-dialogue.show {
        display: block;
        animation: dialogueSlideUp 0.3s ease-out;
      }

      @keyframes dialogueSlideUp {
        from { transform: translateX(-50%) translateY(30px); opacity: 0; }
        to { transform: translateX(-50%) translateY(0); opacity: 1; }
      }

      .dialogue-header {
        display: flex;
        align-items: center;
        padding: 15px 20px;
        background: linear-gradient(180deg, #2a2a4a, #1a1a3a);
        border-bottom: 1px solid #4a4a6a;
        border-radius: 10px 10px 0 0;
      }

      .dialogue-portrait {
        width: 60px;
        height: 60px;
        background: #2a2a4a;
        border: 2px solid #5a5a7a;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        margin-right: 15px;
      }

      .dialogue-npc-info {
        flex: 1;
      }

      .dialogue-npc-name {
        font-size: 18px;
        font-weight: bold;
        color: #ffd700;
      }

      .dialogue-npc-title {
        font-size: 12px;
        color: #888;
      }

      .dialogue-close {
        width: 30px;
        height: 30px;
        background: #3a3a5a;
        border: 1px solid #5a5a7a;
        border-radius: 6px;
        color: #aaa;
        cursor: pointer;
        font-size: 16px;
      }

      .dialogue-close:hover {
        background: #5a3a3a;
        color: #ff6666;
      }

      .dialogue-content {
        padding: 20px;
        max-height: 200px;
        overflow-y: auto;
      }

      .dialogue-text {
        font-size: 15px;
        line-height: 1.6;
        color: #ddd;
        margin-bottom: 15px;
      }

      .dialogue-quest-info {
        background: rgba(255,215,0,0.1);
        border: 1px solid rgba(255,215,0,0.3);
        border-radius: 6px;
        padding: 12px;
        margin-bottom: 15px;
      }

      .dialogue-quest-title {
        font-size: 16px;
        font-weight: bold;
        color: #ffd700;
        margin-bottom: 8px;
      }

      .dialogue-quest-desc {
        font-size: 13px;
        color: #aaa;
        margin-bottom: 10px;
      }

      .dialogue-quest-objectives {
        font-size: 12px;
        color: #888;
      }

      .dialogue-quest-objectives li {
        margin: 4px 0;
        padding-left: 5px;
      }

      .dialogue-rewards-preview {
        display: flex;
        gap: 10px;
        margin-top: 10px;
        flex-wrap: wrap;
      }

      .dialogue-reward {
        padding: 4px 10px;
        background: rgba(0,0,0,0.3);
        border-radius: 4px;
        font-size: 12px;
      }

      .dialogue-reward.gold { color: #ffd700; }
      .dialogue-reward.xp { color: #88ff88; }
      .dialogue-reward.item { color: #88aaff; }

      .dialogue-actions {
        display: flex;
        gap: 10px;
        padding: 15px 20px;
        background: rgba(0,0,0,0.2);
        border-top: 1px solid #3a3a5a;
        border-radius: 0 0 10px 10px;
      }

      .dialogue-btn {
        flex: 1;
        padding: 12px 20px;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s;
      }

      .dialogue-btn.accept {
        background: linear-gradient(180deg, #3a5a3a, #2a4a2a);
        color: #88ff88;
        border: 1px solid #4a8a4a;
      }

      .dialogue-btn.accept:hover {
        background: linear-gradient(180deg, #4a6a4a, #3a5a3a);
      }

      .dialogue-btn.decline {
        background: linear-gradient(180deg, #3a3a5a, #2a2a4a);
        color: #aaa;
        border: 1px solid #4a4a6a;
      }

      .dialogue-btn.decline:hover {
        background: linear-gradient(180deg, #4a4a6a, #3a3a5a);
      }

      .dialogue-btn.turn-in {
        background: linear-gradient(180deg, #5a5a2a, #4a4a1a);
        color: #ffdd88;
        border: 1px solid #8a8a4a;
      }

      .dialogue-btn.continue {
        background: linear-gradient(180deg, #2a3a5a, #1a2a4a);
        color: #88aaff;
        border: 1px solid #4a6a8a;
      }

      /* Progress dialogue */
      .dialogue-progress {
        background: rgba(100,100,150,0.1);
        border-radius: 6px;
        padding: 12px;
      }

      .dialogue-progress-title {
        font-weight: bold;
        color: #aaa;
        margin-bottom: 8px;
      }

      .dialogue-progress-obj {
        display: flex;
        justify-content: space-between;
        padding: 4px 0;
        font-size: 13px;
      }

      .dialogue-progress-obj.complete {
        color: #7fff7f;
        text-decoration: line-through;
      }

      /* ===== NOTICE BOARD ===== */
      #notice-board-panel {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        max-height: 500px;
        background: linear-gradient(180deg, #2a1a0a, #1a0a00);
        border: 3px solid #8b4513;
        border-radius: 8px;
        box-shadow: 0 0 40px rgba(0,0,0,0.8);
        font-family: 'Cinzel', serif;
        z-index: 2000;
        display: none;
      }

      #notice-board-panel.show {
        display: block;
        animation: journalOpen 0.3s ease-out;
      }

      .notice-board-header {
        padding: 15px 20px;
        background: #3a2a1a;
        border-bottom: 2px solid #5a3a1a;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .notice-board-title {
        font-size: 20px;
        font-weight: bold;
        color: #daa520;
      }

      .notice-board-content {
        padding: 15px;
        max-height: 400px;
        overflow-y: auto;
      }

      .notice-quest {
        background: rgba(139,69,19,0.3);
        border: 1px solid #8b4513;
        border-radius: 6px;
        padding: 15px;
        margin-bottom: 10px;
        cursor: pointer;
        transition: all 0.2s;
      }

      .notice-quest:hover {
        background: rgba(139,69,19,0.5);
        border-color: #daa520;
      }

      .notice-quest-title {
        font-weight: bold;
        color: #daa520;
        margin-bottom: 5px;
      }

      .notice-quest-desc {
        font-size: 13px;
        color: #bbb;
        margin-bottom: 8px;
      }

      .notice-quest-meta {
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: #888;
      }

      .notice-empty {
        text-align: center;
        color: #666;
        padding: 30px;
        font-style: italic;
      }
    `;
    
    document.head.appendChild(style);
  }

  createDialogueUI() {
    if (document.getElementById('npc-dialogue')) return;
    
    const dialogue = document.createElement('div');
    dialogue.id = 'npc-dialogue';
    dialogue.innerHTML = `
      <div class="dialogue-header">
        <div class="dialogue-portrait" id="dialogue-portrait"></div>
        <div class="dialogue-npc-info">
          <div class="dialogue-npc-name" id="dialogue-npc-name"></div>
          <div class="dialogue-npc-title" id="dialogue-npc-title"></div>
        </div>
        <button class="dialogue-close">✕</button>
      </div>
      <div class="dialogue-content" id="dialogue-content"></div>
      <div class="dialogue-actions" id="dialogue-actions"></div>
    `;
    
    document.body.appendChild(dialogue);
    this.dialogueUI = dialogue;
    
    dialogue.querySelector('.dialogue-close').onclick = () => this.closeDialogue();
    
    // ESC to close
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dialogue.classList.contains('show')) {
        this.closeDialogue();
      }
    });
  }

  createNoticeBoard() {
    if (document.getElementById('notice-board-panel')) return;
    
    const panel = document.createElement('div');
    panel.id = 'notice-board-panel';
    panel.innerHTML = `
      <div class="notice-board-header">
        <span class="notice-board-title">📋 Notice Board</span>
        <button class="dialogue-close">✕</button>
      </div>
      <div class="notice-board-content" id="notice-board-content"></div>
    `;
    
    document.body.appendChild(panel);
    
    panel.querySelector('.dialogue-close').onclick = () => {
      panel.classList.remove('show');
    };
  }

  // ========== INTERACTION ==========
  
  interactWithNPC(npcId) {
    const npc = this.npcs.get(npcId);
    if (!npc || !this.questManager) return;
    
    const npcData = npc.npcData;
    
    // Check for turn-in quests first
    const turnInQuests = this.questManager.getTurnInQuestsForNpc(npcId);
    if (turnInQuests.length > 0) {
      this.showTurnInDialogue(npcData, turnInQuests[0]);
      return;
    }
    
    // Check for available quests
    const availableQuests = this.questManager.getAvailableQuestsForNpc(npcId);
    if (availableQuests.length > 0) {
      this.showQuestOfferDialogue(npcData, availableQuests[0]);
      return;
    }
    
    // Check for in-progress quests
    let inProgressQuest = null;
    this.questManager.activeQuests.forEach((state, questId) => {
      const quest = getQuest(questId);
      if (quest && (quest.giver === npcId || quest.turnIn === npcId)) {
        inProgressQuest = { quest, state };
      }
    });
    
    if (inProgressQuest) {
      this.showProgressDialogue(npcData, inProgressQuest);
      return;
    }
    
    // Default: no quests
    this.showIdleDialogue(npcData);
  }

  showQuestOfferDialogue(npcData, quest) {
    const dialogue = this.dialogueUI;
    
    document.getElementById('dialogue-portrait').textContent = npcData.icon;
    document.getElementById('dialogue-npc-name').textContent = npcData.name;
    document.getElementById('dialogue-npc-title').textContent = npcData.title;
    
    let rewardsHtml = '';
    if (quest.rewards.gold > 0) {
      rewardsHtml += `<span class="dialogue-reward gold">💰 ${quest.rewards.gold}</span>`;
    }
    if (quest.rewards.xp > 0) {
      rewardsHtml += `<span class="dialogue-reward xp">⭐ ${quest.rewards.xp}</span>`;
    }
    quest.rewards.items?.forEach(item => {
      rewardsHtml += `<span class="dialogue-reward item">📦 ${item.id}</span>`;
    });
    
    const objectivesHtml = quest.objectives.map(obj => 
      `<li>${obj.targetName} (${obj.required})</li>`
    ).join('');
    
    document.getElementById('dialogue-content').innerHTML = `
      <div class="dialogue-text">"${quest.dialogue.intro}"</div>
      <div class="dialogue-quest-info">
        <div class="dialogue-quest-title">${quest.title}</div>
        <div class="dialogue-quest-desc">${quest.description}</div>
        <div class="dialogue-quest-objectives">
          <strong>Objectives:</strong>
          <ul>${objectivesHtml}</ul>
        </div>
        <div class="dialogue-rewards-preview">
          <strong style="width:100%">Rewards:</strong>
          ${rewardsHtml}
        </div>
      </div>
    `;
    
    document.getElementById('dialogue-actions').innerHTML = `
      <button class="dialogue-btn accept" data-action="accept" data-quest="${quest.id}">
        Accept Quest
      </button>
      <button class="dialogue-btn decline" data-action="decline">
        Decline
      </button>
    `;
    
    this.setupDialogueActions();
    dialogue.classList.add('show');
    this.currentDialogue = { type: 'offer', quest, npc: npcData };
  }

  showTurnInDialogue(npcData, { quest, state }) {
    const dialogue = this.dialogueUI;
    
    document.getElementById('dialogue-portrait').textContent = npcData.icon;
    document.getElementById('dialogue-npc-name').textContent = npcData.name;
    document.getElementById('dialogue-npc-title').textContent = npcData.title;
    
    let rewardsHtml = '';
    const rewards = quest.rewards;
    if (rewards.gold > 0) {
      rewardsHtml += `<span class="dialogue-reward gold">💰 ${rewards.gold}</span>`;
    }
    if (rewards.xp > 0) {
      rewardsHtml += `<span class="dialogue-reward xp">⭐ ${rewards.xp}</span>`;
    }
    rewards.items?.forEach(item => {
      rewardsHtml += `<span class="dialogue-reward item">📦 ${item.id}</span>`;
    });
    
    // Check optional objectives
    let bonusText = '';
    state.optionalObjectives?.forEach(obj => {
      if (obj.current >= obj.required && obj.bonusReward) {
        bonusText += '<div style="color: #88ff88; margin-top: 10px;">✨ Bonus objective complete!</div>';
      }
    });
    
    document.getElementById('dialogue-content').innerHTML = `
      <div class="dialogue-text">"${quest.dialogue.complete}"</div>
      <div class="dialogue-quest-info">
        <div class="dialogue-quest-title">✅ ${quest.title}</div>
        <div style="color: #7fff7f; margin-bottom: 10px;">All objectives complete!</div>
        ${bonusText}
        <div class="dialogue-rewards-preview">
          <strong style="width:100%">Your Rewards:</strong>
          ${rewardsHtml}
        </div>
      </div>
    `;
    
    document.getElementById('dialogue-actions').innerHTML = `
      <button class="dialogue-btn turn-in" data-action="turn-in" data-quest="${quest.id}">
        Complete Quest
      </button>
    `;
    
    this.setupDialogueActions();
    dialogue.classList.add('show');
    this.currentDialogue = { type: 'turn-in', quest, state, npc: npcData };
  }

  showProgressDialogue(npcData, { quest, state }) {
    const dialogue = this.dialogueUI;
    
    document.getElementById('dialogue-portrait').textContent = npcData.icon;
    document.getElementById('dialogue-npc-name').textContent = npcData.name;
    document.getElementById('dialogue-npc-title').textContent = npcData.title;
    
    // Generate contextual comment based on progress
    let progressText = quest.dialogue.progress;
    const totalProgress = state.objectives.reduce((sum, obj) => sum + obj.current, 0);
    const totalRequired = state.objectives.reduce((sum, obj) => sum + obj.required, 0);
    const progressPercent = totalProgress / totalRequired;
    
    if (progressPercent >= 0.75) {
      progressText = "Almost there! Just a bit more.";
    } else if (progressPercent >= 0.5) {
      progressText = "Good progress! Keep at it.";
    } else if (progressPercent >= 0.25) {
      progressText = quest.dialogue.progress;
    }
    
    const objectivesHtml = state.objectives.map(obj => {
      const complete = obj.current >= obj.required;
      return `
        <div class="dialogue-progress-obj ${complete ? 'complete' : ''}">
          <span>${obj.targetName}</span>
          <span>${obj.current}/${obj.required}</span>
        </div>
      `;
    }).join('');
    
    document.getElementById('dialogue-content').innerHTML = `
      <div class="dialogue-text">"${progressText}"</div>
      <div class="dialogue-progress">
        <div class="dialogue-progress-title">📋 ${quest.title}</div>
        ${objectivesHtml}
      </div>
    `;
    
    document.getElementById('dialogue-actions').innerHTML = `
      <button class="dialogue-btn continue" data-action="close">
        Continue
      </button>
    `;
    
    this.setupDialogueActions();
    dialogue.classList.add('show');
    this.currentDialogue = { type: 'progress', quest, state, npc: npcData };
  }

  showIdleDialogue(npcData) {
    const dialogue = this.dialogueUI;
    
    document.getElementById('dialogue-portrait').textContent = npcData.icon;
    document.getElementById('dialogue-npc-name').textContent = npcData.name;
    document.getElementById('dialogue-npc-title').textContent = npcData.title;
    
    // NPC-specific idle dialogue
    const idleDialogues = {
      'elder_marcus': "The village is peaceful today. Come back if you need guidance.",
      'blacksmith_greta': "My forge burns bright! Need anything crafted?",
      'hunter_jorik': "The hunt never ends. Stay sharp out there.",
      'mage_selene': "The arcane energies flow... I sense great potential in you.",
      'guard_captain_theron': "Keep your weapon ready. Threats lurk everywhere.",
      'merchant_lydia': "Looking to trade? I have fine wares!",
      'herbalist_mira': "The herbs are growing well today. Take care!",
      'mysterious_stranger': "Not yet... the time will come.",
    };
    
    document.getElementById('dialogue-content').innerHTML = `
      <div class="dialogue-text">"${idleDialogues[npcData.id] || "Hello, adventurer."}"</div>
    `;
    
    document.getElementById('dialogue-actions').innerHTML = `
      <button class="dialogue-btn continue" data-action="close">
        Goodbye
      </button>
    `;
    
    this.setupDialogueActions();
    dialogue.classList.add('show');
    this.currentDialogue = { type: 'idle', npc: npcData };
  }

  setupDialogueActions() {
    const actionsEl = document.getElementById('dialogue-actions');
    
    actionsEl.querySelectorAll('.dialogue-btn').forEach(btn => {
      btn.onclick = () => {
        const action = btn.dataset.action;
        const questId = btn.dataset.quest;
        
        if (action === 'accept' && questId) {
          const result = this.questManager?.acceptQuest(questId);
          if (result?.success) {
            // Show accept dialogue
            const quest = getQuest(questId);
            document.getElementById('dialogue-content').innerHTML = `
              <div class="dialogue-text">"${quest.dialogue.accept}"</div>
              <div style="color: #88ff88; text-align: center; margin-top: 10px;">
                Quest Accepted!
              </div>
            `;
            document.getElementById('dialogue-actions').innerHTML = `
              <button class="dialogue-btn continue" data-action="close">
                Let's go!
              </button>
            `;
            this.setupDialogueActions();
            this.updateAllMarkers();
          }
        } else if (action === 'turn-in' && questId) {
          const result = this.questManager?.turnInQuest(questId);
          if (result?.success) {
            this.closeDialogue();
            this.updateAllMarkers();
          }
        } else if (action === 'decline' || action === 'close') {
          this.closeDialogue();
        }
      };
    });
  }

  closeDialogue() {
    this.dialogueUI.classList.remove('show');
    this.currentDialogue = null;
  }

  // ========== NOTICE BOARD ==========
  
  openNoticeBoard() {
    const panel = document.getElementById('notice-board-panel');
    const content = document.getElementById('notice-board-content');
    
    if (!this.questManager) return;
    
    // Get repeatable/daily quests
    const dailyQuests = [];
    this.questManager.availableQuests.forEach(questId => {
      const quest = getQuest(questId);
      if (quest && quest.isRepeatable) {
        dailyQuests.push(quest);
      }
    });
    
    if (dailyQuests.length === 0) {
      content.innerHTML = '<div class="notice-empty">No notices posted today. Check back later!</div>';
    } else {
      content.innerHTML = dailyQuests.map(quest => `
        <div class="notice-quest" data-quest="${quest.id}">
          <div class="notice-quest-title">${quest.title}</div>
          <div class="notice-quest-desc">${quest.description}</div>
          <div class="notice-quest-meta">
            <span>⏱️ ${quest.timeLimitMinutes || 'No'} time limit</span>
            <span>💰 ${quest.rewards.gold} gold</span>
            <span>⭐ ${quest.rewards.xp} XP</span>
          </div>
        </div>
      `).join('');
      
      content.querySelectorAll('.notice-quest').forEach(el => {
        el.onclick = () => {
          const questId = el.dataset.quest;
          const result = this.questManager?.acceptQuest(questId);
          if (result?.success) {
            panel.classList.remove('show');
            this.updateAllMarkers();
          }
        };
      });
    }
    
    panel.classList.add('show');
  }

  // ========== UPDATES ==========
  
  updateAllMarkers() {
    this.npcs.forEach(npc => {
      npc.updateMarker(this.questManager);
    });
  }

  update(delta, playerPosition) {
    this.npcs.forEach(npc => {
      npc.update(delta);
    });
    
    // Phase 40: Show 'Press E to talk' prompt when near NPC
    if (playerPosition) {
      const nearest = this.getNearestNPC(playerPosition);
      if (nearest) {
        this._showInteractionPrompt(nearest.npcData.name);
      } else {
        this._hideInteractionPrompt();
      }
    }
  }
  
  // Phase 40: Reusable DOM prompt for NPC interaction
  _getInteractionPromptEl() {
    if (!this._interactionPrompt) {
      const el = document.createElement('div');
      el.id = 'npc-interact-prompt';
      el.style.cssText = `
        position: fixed;
        bottom: 30%;
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 24px;
        background: rgba(0, 0, 0, 0.75);
        border: 1px solid rgba(200, 180, 140, 0.4);
        border-radius: 6px;
        font-family: 'Cinzel', serif;
        font-size: 15px;
        color: #e0d0b0;
        text-shadow: 0 0 6px rgba(0,0,0,0.8);
        z-index: 800;
        pointer-events: none;
        display: none;
        letter-spacing: 1px;
        text-align: center;
      `;
      document.body.appendChild(el);
      this._interactionPrompt = el;
    }
    return this._interactionPrompt;
  }
  
  _showInteractionPrompt(name) {
    const el = this._getInteractionPromptEl();
    el.textContent = `Press E to talk to ${name}`;
    el.style.display = 'block';
  }
  
  _hideInteractionPrompt() {
    if (this._interactionPrompt) {
      this._interactionPrompt.style.display = 'none';
    }
  }

  // ========== UTILITY ==========
  
  getNearestNPC(playerPosition, maxRange = INTERACTION_RANGE) {
    let nearest = null;
    let nearestDist = maxRange;
    
    this.npcs.forEach(npc => {
      const pos = npc.getPosition();
      const dist = playerPosition.distanceTo(pos);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = npc;
      }
    });
    
    return nearest;
  }

  getNPCById(npcId) {
    return this.npcs.get(npcId);
  }

  isDialogueOpen() {
    return this.dialogueUI?.classList.contains('show') || false;
  }

  // ========== CLEANUP ==========
  
  destroy() {
    this.npcs.forEach(npc => npc.destroy());
    this.npcs.clear();
    this.dialogueUI?.remove();
    document.getElementById('notice-board-panel')?.remove();
    document.getElementById('npc-dialogue-styles')?.remove();
  }
}

// ========== SINGLETON ==========
let npcQuestGiversInstance = null;

export function createNPCQuestGivers(scene) {
  if (!npcQuestGiversInstance) {
    npcQuestGiversInstance = new NPCQuestGiversManager(scene);
  }
  return npcQuestGiversInstance;
}

export function getNPCQuestGivers() {
  return npcQuestGiversInstance;
}

export { NPCQuestGiversManager, NPCQuestGiver };
export default NPCQuestGiversManager;
