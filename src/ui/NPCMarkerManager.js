import * as THREE from 'three';

/**
 * NPCMarkerManager - Screen-space floating quest markers above NPCs.
 * Yellow ! for available quests, gray ? for in-progress.
 * Projected from NPC world positions each frame.
 * Gentle bob via CSS animation.
 */

const MAX_MARKERS = 12;
const MARKER_OFFSET_Y = 3.2; // World units above NPC origin
const VISIBLE_RANGE = 40;     // Only show within this distance

export class NPCMarkerManager {
  constructor(camera) {
    this.camera = camera;
    this.npcQuestGivers = null;
    
    // DOM container
    this.container = document.createElement('div');
    this.container.id = 'npc-quest-markers';
    this.container.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      z-index: 380;
      overflow: hidden;
    `;
    document.body.appendChild(this.container);
    
    // Inject CSS
    const style = document.createElement('style');
    style.textContent = `
      .npc-qm {
        position: absolute;
        transform: translate(-50%, -100%);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
        text-align: center;
      }
      .npc-qm.visible { opacity: 1; }
      .npc-qm-icon {
        font-size: 24px;
        font-weight: bold;
        font-family: 'Cinzel', serif;
        line-height: 1;
        animation: npcQmBob 2s ease-in-out infinite;
        text-shadow: 0 0 8px currentColor, 0 2px 4px rgba(0,0,0,0.8);
      }
      .npc-qm-icon.quest-available {
        color: #ffdd00;
      }
      .npc-qm-icon.quest-turnin {
        color: #ffdd00;
      }
      .npc-qm-icon.quest-progress {
        color: #aaaaaa;
      }
      .npc-qm-name {
        font-family: 'Cinzel', serif;
        font-size: 10px;
        color: #ccbb99;
        text-shadow: 0 1px 3px #000;
        white-space: nowrap;
        margin-top: 2px;
      }
      @keyframes npcQmBob {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-6px); }
      }
    `;
    document.head.appendChild(style);
    
    // Pool
    this.pool = [];
    for (let i = 0; i < MAX_MARKERS; i++) {
      const root = document.createElement('div');
      root.className = 'npc-qm';
      
      const icon = document.createElement('div');
      icon.className = 'npc-qm-icon';
      root.appendChild(icon);
      
      const name = document.createElement('div');
      name.className = 'npc-qm-name';
      root.appendChild(name);
      
      this.container.appendChild(root);
      this.pool.push({
        root,
        icon,
        name,
        active: false,
        npcId: null,
      });
    }
    
    this._screenPos = new THREE.Vector3();
  }
  
  setNPCQuestGivers(npcQuestGivers) {
    this.npcQuestGivers = npcQuestGivers;
  }
  
  update(delta, playerPos) {
    if (!this.npcQuestGivers || !playerPos) {
      // Hide all
      for (const m of this.pool) m.root.classList.remove('visible');
      return;
    }
    
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    const npcs = this.npcQuestGivers.npcs;
    
    // Collect NPCs that have a marker to show
    const visible = [];
    npcs.forEach((npc) => {
      if (!npc.marker || !npc.marker.visible) return;
      if (npc.markerType === 'none') return;
      
      const pos = npc.getPosition();
      const dx = pos.x - playerPos.x;
      const dz = pos.z - playerPos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      if (dist > VISIBLE_RANGE) return;
      
      visible.push({ npc, dist });
    });
    
    // Sort by distance (closest first)
    visible.sort((a, b) => a.dist - b.dist);
    
    // Assign to pool
    for (let i = 0; i < this.pool.length; i++) {
      const slot = this.pool[i];
      
      if (i < visible.length) {
        const { npc } = visible[i];
        slot.active = true;
        slot.npcId = npc.id;
        
        // Set icon
        let iconText, iconClass;
        switch (npc.markerType) {
          case 'quest_available':
          case 'daily':
            iconText = '!';
            iconClass = 'quest-available';
            break;
          case 'turn_in':
            iconText = '?';
            iconClass = 'quest-turnin';
            break;
          case 'in_progress':
            iconText = '?';
            iconClass = 'quest-progress';
            break;
          default:
            slot.root.classList.remove('visible');
            slot.active = false;
            continue;
        }
        
        slot.icon.textContent = iconText;
        slot.icon.className = `npc-qm-icon ${iconClass}`;
        slot.name.textContent = npc.npcData.name || '';
        
        // Project to screen
        const pos = npc.getPosition();
        this._screenPos.set(pos.x, pos.y + MARKER_OFFSET_Y, pos.z);
        this._screenPos.project(this.camera);
        
        if (this._screenPos.z > 1) {
          slot.root.classList.remove('visible');
          continue;
        }
        
        const x = (this._screenPos.x * 0.5 + 0.5) * screenW;
        const y = (-this._screenPos.y * 0.5 + 0.5) * screenH;
        
        if (x < -40 || x > screenW + 40 || y < -40 || y > screenH + 40) {
          slot.root.classList.remove('visible');
          continue;
        }
        
        slot.root.style.left = `${x}px`;
        slot.root.style.top = `${y}px`;
        slot.root.classList.add('visible');
      } else {
        slot.root.classList.remove('visible');
        slot.active = false;
      }
    }
  }
  
  dispose() {
    for (const m of this.pool) m.root.remove();
    this.pool = [];
    this.container.remove();
  }
}
