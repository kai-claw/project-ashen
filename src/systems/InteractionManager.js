import * as THREE from 'three';

/**
 * InteractionManager - Handles player interaction with NPCs
 * Phase 18: Village Interaction & Trading
 * 
 * Features:
 * - Proximity-based NPC detection
 * - Interaction prompts (E key)
 * - NPCs face player when approached
 * - Name labels/speech bubbles above NPCs
 * - Hooks for shop/dialogue systems (future phases)
 */
export class InteractionManager {
  constructor(scene, camera, inputManager, npcManager, gameManager, audioManager) {
    this.scene = scene;
    this.camera = camera;
    this.input = inputManager;
    this.npcManager = npcManager;
    this.gm = gameManager;
    this.audio = audioManager;
    
    // Interaction settings
    this.interactionRadius = 3.0;     // Distance to show prompt
    this.approachRadius = 6.0;        // Distance where NPC notices player
    this.facingSpeed = 4.0;           // How fast NPCs turn to face player
    
    // Current interaction state
    this.nearbyNPC = null;
    this.activeNPC = null;             // NPC currently being interacted with
    this.interactionMode = null;       // 'dialogue' | 'shop' | null
    
    // NPC type to role mapping (for UI display)
    this.npcRoles = {
      'merchant': { title: 'Merchant', action: 'Trade', icon: '🛒' },
      'blacksmith': { title: 'Blacksmith', action: 'Forge', icon: '⚒️' },
      'guard': { title: 'Guard', action: 'Talk', icon: '🛡️' },
      'elder': { title: 'Elder', action: 'Talk', icon: '📜' },
      'villager': { title: 'Villager', action: 'Talk', icon: '👤' },
      'healer': { title: 'Healer', action: 'Heal', icon: '💚' },
    };
    
    // Create UI elements
    this._createInteractionUI();
    this._createNPCLabels();
    
    // Callbacks for shop/dialogue systems
    this.onShopOpen = null;
    this.onDialogueOpen = null;
    
    console.log('[InteractionManager] Initialized');
  }
  
  /**
   * Create the interaction prompt UI
   */
  _createInteractionUI() {
    // Main interaction prompt container
    this.promptContainer = document.createElement('div');
    this.promptContainer.id = 'npc-interaction-prompt';
    this.promptContainer.style.cssText = `
      position: fixed;
      bottom: 200px;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      z-index: 150;
      pointer-events: none;
    `;
    
    // NPC name display
    this.promptName = document.createElement('div');
    this.promptName.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 18px;
      font-weight: bold;
      color: #ffd088;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.9), 0 0 16px rgba(255, 180, 0, 0.3);
      letter-spacing: 2px;
    `;
    this.promptContainer.appendChild(this.promptName);
    
    // Action prompt (e.g., "[E] Trade")
    this.promptAction = document.createElement('div');
    this.promptAction.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(255, 200, 100, 0.4);
      border-radius: 4px;
    `;
    
    // Key indicator
    this.keyIndicator = document.createElement('div');
    this.keyIndicator.style.cssText = `
      width: 28px;
      height: 28px;
      background: linear-gradient(145deg, #4a4a4a, #2a2a2a);
      border: 2px solid #666;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Cinzel', serif;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    `;
    this.keyIndicator.textContent = 'E';
    this.promptAction.appendChild(this.keyIndicator);
    
    // Action text
    this.actionText = document.createElement('div');
    this.actionText.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 14px;
      color: #ddd;
      letter-spacing: 1px;
    `;
    this.promptAction.appendChild(this.actionText);
    
    this.promptContainer.appendChild(this.promptAction);
    document.body.appendChild(this.promptContainer);
    
    // Add CSS animation for prompt pulse
    const style = document.createElement('style');
    style.textContent = `
      @keyframes interactPromptPulse {
        0%, 100% { transform: translateX(-50%) scale(1); }
        50% { transform: translateX(-50%) scale(1.02); }
      }
      #npc-interaction-prompt.active {
        animation: interactPromptPulse 1.5s ease-in-out infinite;
      }
    `;
    document.head.appendChild(style);
  }
  
  /**
   * Create floating labels for NPCs
   */
  _createNPCLabels() {
    this.npcLabels = new Map();
    
    // We'll create labels dynamically when NPCs are detected
  }
  
  /**
   * Create or get a label for an NPC
   */
  _getOrCreateLabel(npc) {
    const npcId = this._getNPCId(npc);
    
    if (this.npcLabels.has(npcId)) {
      return this.npcLabels.get(npcId);
    }
    
    // Create HTML label
    const label = document.createElement('div');
    label.className = 'npc-label';
    label.style.cssText = `
      position: fixed;
      pointer-events: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      z-index: 100;
      opacity: 0;
      transition: opacity 0.3s ease-out;
    `;
    
    // NPC type icon
    const roleInfo = this.npcRoles[npc.type] || this.npcRoles['villager'];
    
    const icon = document.createElement('div');
    icon.className = 'npc-icon';
    icon.style.cssText = `
      font-size: 16px;
      filter: drop-shadow(0 0 4px rgba(0, 0, 0, 0.8));
    `;
    icon.textContent = roleInfo.icon;
    label.appendChild(icon);
    
    // NPC title
    const title = document.createElement('div');
    title.className = 'npc-title';
    title.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 11px;
      color: #ffdd88;
      text-shadow: 0 0 4px rgba(0, 0, 0, 0.9);
      letter-spacing: 1px;
      white-space: nowrap;
    `;
    title.textContent = roleInfo.title;
    label.appendChild(title);
    
    document.body.appendChild(label);
    
    this.npcLabels.set(npcId, {
      element: label,
      npc: npc,
      visible: false,
    });
    
    return this.npcLabels.get(npcId);
  }
  
  /**
   * Get unique ID for an NPC
   */
  _getNPCId(npc) {
    return `npc_${npc.position.x.toFixed(0)}_${npc.position.z.toFixed(0)}`;
  }
  
  /**
   * Update NPC labels positions (project 3D to 2D)
   */
  _updateLabels(playerPos) {
    const npcs = this.npcManager.getNPCs();
    
    for (const npc of npcs) {
      const dist = playerPos.distanceTo(npc.position);
      
      // Only show labels for nearby NPCs
      if (dist < this.approachRadius * 1.5) {
        const labelData = this._getOrCreateLabel(npc);
        
        // Project 3D position to screen
        const labelPos = npc.position.clone();
        labelPos.y += 2.8; // Above NPC head
        
        const screenPos = this._worldToScreen(labelPos);
        
        if (screenPos && screenPos.visible) {
          labelData.element.style.left = `${screenPos.x}px`;
          labelData.element.style.top = `${screenPos.y}px`;
          labelData.element.style.transform = 'translate(-50%, -100%)';
          
          // Fade based on distance
          const fadeDist = this.approachRadius;
          const opacity = Math.max(0, 1 - (dist / fadeDist) * 0.6);
          labelData.element.style.opacity = opacity;
          labelData.visible = true;
        } else {
          labelData.element.style.opacity = '0';
          labelData.visible = false;
        }
      } else {
        const npcId = this._getNPCId(npc);
        if (this.npcLabels.has(npcId)) {
          this.npcLabels.get(npcId).element.style.opacity = '0';
          this.npcLabels.get(npcId).visible = false;
        }
      }
    }
  }
  
  /**
   * Project world position to screen coordinates
   */
  _worldToScreen(worldPos) {
    const vector = worldPos.clone();
    vector.project(this.camera);
    
    // Check if in front of camera
    if (vector.z > 1) {
      return { visible: false };
    }
    
    const x = (vector.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-(vector.y * 0.5) + 0.5) * window.innerHeight;
    
    return { x, y, visible: true };
  }
  
  /**
   * Find the nearest interactable NPC
   */
  _findNearestNPC(playerPos) {
    const npcs = this.npcManager.getNPCs();
    let nearest = null;
    let nearestDist = this.interactionRadius;
    
    for (const npc of npcs) {
      const dist = playerPos.distanceTo(npc.position);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = npc;
      }
    }
    
    return nearest;
  }
  
  /**
   * Make NPC face the player smoothly
   */
  _faceNPCToPlayer(npc, playerPos, delta) {
    if (!npc.mesh) return;
    
    // Calculate angle to player
    const dx = playerPos.x - npc.position.x;
    const dz = playerPos.z - npc.position.z;
    const targetAngle = Math.atan2(dx, dz);
    
    // Smoothly interpolate current rotation to target
    const currentAngle = npc.mesh.rotation.y;
    let angleDiff = targetAngle - currentAngle;
    
    // Normalize angle difference to [-PI, PI]
    while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
    while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
    
    // Apply smooth rotation
    if (Math.abs(angleDiff) > 0.05) {
      npc.mesh.rotation.y += angleDiff * this.facingSpeed * delta;
    }
  }
  
  /**
   * Show interaction prompt for an NPC
   */
  _showPrompt(npc) {
    const roleInfo = this.npcRoles[npc.type] || this.npcRoles['villager'];
    
    this.promptName.textContent = roleInfo.title;
    this.actionText.textContent = roleInfo.action;
    
    this.promptContainer.style.display = 'flex';
    this.promptContainer.classList.add('active');
  }
  
  /**
   * Hide interaction prompt
   */
  _hidePrompt() {
    this.promptContainer.style.display = 'none';
    this.promptContainer.classList.remove('active');
  }
  
  /**
   * Handle interaction with NPC
   */
  _interact(npc) {
    if (this.interactionMode) return; // Already in interaction
    
    this.activeNPC = npc;
    
    // Play interaction sound
    if (this.audio) {
      this.audio.play('menuSelect', { volume: 0.4 });
    }
    
    // Determine interaction type based on NPC type
    switch (npc.type) {
      case 'merchant':
      case 'blacksmith':
      case 'healer':
        this._openShop(npc);
        break;
      
      case 'guard':
      case 'elder':
      case 'villager':
      default:
        this._openDialogue(npc);
        break;
    }
  }
  
  /**
   * Open shop interface for merchant NPCs
   */
  _openShop(npc) {
    this.interactionMode = 'shop';
    
    // Hide the interaction prompt
    this._hidePrompt();
    
    // Call shop callback if set
    if (this.onShopOpen) {
      this.onShopOpen(npc);
    } else {
      // Placeholder: show notification that shop is coming soon
      this._showPlaceholderMessage(npc, 'Shop system coming soon!');
    }
  }
  
  /**
   * Open dialogue interface for talking NPCs
   */
  _openDialogue(npc) {
    this.interactionMode = 'dialogue';
    
    // Hide the interaction prompt
    this._hidePrompt();
    
    // Call dialogue callback if set
    if (this.onDialogueOpen) {
      this.onDialogueOpen(npc);
    } else {
      // Placeholder: show NPC greeting
      const greetings = this._getGreetings(npc);
      const greeting = greetings[Math.floor(Math.random() * greetings.length)];
      this._showPlaceholderMessage(npc, greeting);
    }
  }
  
  /**
   * Get greeting lines for NPC type
   */
  _getGreetings(npc) {
    const greetingsByType = {
      'merchant': [
        'Looking to buy something, traveler?',
        'I have wares if you have coin.',
        'Best prices in the village!',
      ],
      'blacksmith': [
        'Need your blade sharpened?',
        'I forge the finest steel in these lands.',
        'Weapons and armor, made to last.',
      ],
      'healer': [
        'You look weary, traveler. Let me help.',
        'Rest and healing, that\'s what I offer.',
        'The darkness takes its toll. Allow me to mend you.',
      ],
      'guard': [
        'Stay vigilant. Enemies lurk beyond the village.',
        'Keep your weapon ready.',
        'The roads aren\'t safe anymore.',
      ],
      'elder': [
        'Ah, a traveler. It\'s been long since we\'ve had visitors.',
        'The corruption spreads... be careful out there.',
        'Seek the ancient ruins. Answers may lie within.',
      ],
      'villager': [
        'Good day to you.',
        'Strange times we live in...',
        'The village is safe, for now.',
        'Have you seen the lights in the ruins at night?',
      ],
    };
    
    return greetingsByType[npc.type] || greetingsByType['villager'];
  }
  
  /**
   * Show placeholder message (until dialogue system is built)
   */
  _showPlaceholderMessage(npc, message) {
    // Create temporary dialogue box
    const roleInfo = this.npcRoles[npc.type] || this.npcRoles['villager'];
    
    const dialogueBox = document.createElement('div');
    dialogueBox.id = 'temp-dialogue';
    dialogueBox.style.cssText = `
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      max-width: 500px;
      padding: 20px 30px;
      background: rgba(0, 0, 0, 0.85);
      border: 2px solid rgba(255, 200, 100, 0.4);
      border-radius: 8px;
      z-index: 200;
    `;
    
    // NPC name header
    const header = document.createElement('div');
    header.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 16px;
      font-weight: bold;
      color: #ffd088;
      margin-bottom: 12px;
      letter-spacing: 2px;
    `;
    header.textContent = `${roleInfo.icon} ${roleInfo.title}`;
    dialogueBox.appendChild(header);
    
    // Message text
    const text = document.createElement('div');
    text.style.cssText = `
      font-family: 'Georgia', serif;
      font-size: 15px;
      color: #ddd;
      line-height: 1.6;
      font-style: italic;
    `;
    text.textContent = `"${message}"`;
    dialogueBox.appendChild(text);
    
    // Close hint
    const hint = document.createElement('div');
    hint.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 11px;
      color: #888;
      margin-top: 16px;
      text-align: center;
    `;
    hint.textContent = 'Press E or click to close';
    dialogueBox.appendChild(hint);
    
    document.body.appendChild(dialogueBox);
    
    // Close on next E press or click
    const closeHandler = () => {
      if (this.input.consumeBuffer('KeyE') || true) {
        dialogueBox.remove();
        this.interactionMode = null;
        this.activeNPC = null;
        document.removeEventListener('click', closeHandler);
        document.removeEventListener('keydown', keyHandler);
      }
    };
    
    const keyHandler = (e) => {
      if (e.code === 'KeyE' || e.code === 'Escape') {
        closeHandler();
      }
    };
    
    // Delay adding listeners to prevent immediate close
    setTimeout(() => {
      document.addEventListener('click', closeHandler);
      document.addEventListener('keydown', keyHandler);
    }, 100);
  }
  
  /**
   * Close current interaction
   */
  closeInteraction() {
    this.interactionMode = null;
    this.activeNPC = null;
    
    // Remove any temp dialogue
    const tempDialogue = document.getElementById('temp-dialogue');
    if (tempDialogue) {
      tempDialogue.remove();
    }
  }
  
  /**
   * Check if currently in an interaction
   */
  isInteracting() {
    return this.interactionMode !== null;
  }
  
  /**
   * Main update loop
   */
  update(playerPos, delta) {
    // Don't process if in interaction mode
    if (this.interactionMode) return;
    
    // Update NPC labels
    this._updateLabels(playerPos);
    
    // Find nearby NPCs for interaction
    this.nearbyNPC = this._findNearestNPC(playerPos);
    
    // Make nearby NPCs face the player
    const npcs = this.npcManager.getNPCs();
    for (const npc of npcs) {
      const dist = playerPos.distanceTo(npc.position);
      if (dist < this.approachRadius) {
        this._faceNPCToPlayer(npc, playerPos, delta);
      }
    }
    
    // Show/hide interaction prompt
    if (this.nearbyNPC) {
      this._showPrompt(this.nearbyNPC);
      
      // Check for interaction input
      if (this.input.interact) {
        this._interact(this.nearbyNPC);
      }
    } else {
      this._hidePrompt();
    }
  }
  
  /**
   * Set callback for shop opening
   */
  setShopCallback(callback) {
    this.onShopOpen = callback;
  }
  
  /**
   * Set callback for dialogue opening
   */
  setDialogueCallback(callback) {
    this.onDialogueOpen = callback;
  }
  
  /**
   * Get the currently nearby NPC (for external queries)
   */
  getNearbyNPC() {
    return this.nearbyNPC;
  }
  
  /**
   * Cleanup
   */
  dispose() {
    // Remove UI elements
    if (this.promptContainer) {
      this.promptContainer.remove();
    }
    
    // Remove all NPC labels
    for (const [, labelData] of this.npcLabels) {
      labelData.element.remove();
    }
    this.npcLabels.clear();
  }
}
