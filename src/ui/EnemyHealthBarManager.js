import * as THREE from 'three';

/**
 * EnemyHealthBarManager - Floating HTML health bars above enemies
 * Pools DOM elements (max 10) and projects enemy world positions to screen space.
 * Only visible when enemy is aggroed or within 15m of the player.
 * Fades out on enemy death.
 */

const MAX_BARS = 10;
const VISIBILITY_RANGE = 15;
const BAR_OFFSET_Y = 2.2; // World-space offset above enemy

export class EnemyHealthBarManager {
  constructor(camera) {
    this.camera = camera;
    this.enemyManager = null;
    
    // DOM container
    this.container = document.createElement('div');
    this.container.id = 'enemy-health-bars';
    this.container.style.cssText = `
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      pointer-events: none;
      z-index: 400;
      overflow: hidden;
    `;
    document.body.appendChild(this.container);
    
    // Inject CSS
    const style = document.createElement('style');
    style.textContent = `
      .enemy-hbar {
        position: absolute;
        width: 80px;
        transform: translate(-50%, -100%);
        opacity: 0;
        transition: opacity 0.25s ease;
        pointer-events: none;
      }
      .enemy-hbar.visible { opacity: 1; }
      .enemy-hbar.dying {
        opacity: 0;
        transition: opacity 0.6s ease;
      }
      .enemy-hbar-name {
        font-family: 'Cinzel', serif;
        font-size: 10px;
        color: #e0d0b0;
        text-shadow: 0 0 3px #000, 0 1px 2px #000;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 2px;
        line-height: 1.2;
      }
      .enemy-hbar-level {
        font-size: 9px;
        color: #aaa;
        margin-left: 4px;
      }
      .enemy-hbar-bg {
        width: 100%;
        height: 6px;
        background: rgba(0, 0, 0, 0.7);
        border: 1px solid rgba(100, 40, 40, 0.6);
        border-radius: 3px;
        overflow: hidden;
      }
      .enemy-hbar-fill {
        height: 100%;
        background: linear-gradient(90deg, #aa2222, #dd4444);
        transition: width 0.15s ease;
        border-radius: 2px;
      }
    `;
    document.head.appendChild(style);
    
    // Pool of bar elements
    this.pool = [];
    for (let i = 0; i < MAX_BARS; i++) {
      const bar = this._createBarElement();
      this.container.appendChild(bar.root);
      this.pool.push(bar);
    }
    
    // Reusable vector
    this._screenPos = new THREE.Vector3();
  }
  
  _createBarElement() {
    const root = document.createElement('div');
    root.className = 'enemy-hbar';
    
    const nameEl = document.createElement('div');
    nameEl.className = 'enemy-hbar-name';
    root.appendChild(nameEl);
    
    const bg = document.createElement('div');
    bg.className = 'enemy-hbar-bg';
    const fill = document.createElement('div');
    fill.className = 'enemy-hbar-fill';
    fill.style.width = '100%';
    bg.appendChild(fill);
    root.appendChild(bg);
    
    return {
      root,
      nameEl,
      fill,
      active: false,
      enemyRef: null,
      dying: false,
      dyingTimer: 0,
    };
  }
  
  setEnemyManager(enemyManager) {
    this.enemyManager = enemyManager;
  }
  
  /**
   * Find a free bar from the pool (or steal the farthest one)
   */
  _acquireBar() {
    // First: find an inactive bar
    for (const bar of this.pool) {
      if (!bar.active) return bar;
    }
    // All active — steal the last one (lowest priority)
    return this.pool[this.pool.length - 1];
  }
  
  /**
   * Release a bar back to the pool
   */
  _releaseBar(bar) {
    bar.active = false;
    bar.enemyRef = null;
    bar.dying = false;
    bar.dyingTimer = 0;
    bar.root.classList.remove('visible', 'dying');
  }
  
  update(delta, playerPos) {
    if (!this.enemyManager || !playerPos) return;
    
    const enemies = this.enemyManager.enemies || [];
    const screenW = window.innerWidth;
    const screenH = window.innerHeight;
    
    // Build list of enemies that should have health bars
    const visible = [];
    
    for (const enemy of enemies) {
      if (!enemy.mesh || !enemy.mesh.visible) continue;
      
      const pos = enemy.mesh.position;
      const dx = pos.x - playerPos.x;
      const dz = pos.z - playerPos.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      // Show if aggroed (chasing/attacking/circling) or within range and alive
      const isAggroed = enemy.state !== 'idle' && enemy.state !== 'patrol' && enemy.state !== 'dormant' && enemy.state !== 'dead';
      const inRange = dist < VISIBILITY_RANGE;
      const alive = enemy.health > 0;
      const justDied = enemy.isDead && enemy.health <= 0;
      
      if ((isAggroed || inRange) && (alive || justDied)) {
        visible.push({ enemy, dist, justDied });
      }
    }
    
    // Sort by distance (closest first — they get priority for pool)
    visible.sort((a, b) => a.dist - b.dist);
    
    // Track which bars are still assigned
    const assignedEnemies = new Set();
    
    // First pass: update existing assignments and handle dying
    for (const bar of this.pool) {
      if (!bar.active) continue;
      
      if (bar.dying) {
        bar.dyingTimer += delta;
        if (bar.dyingTimer > 0.7) {
          this._releaseBar(bar);
          continue;
        }
      }
      
      // Check if enemy is still in visible list
      const stillVisible = visible.find(v => v.enemy === bar.enemyRef);
      if (!stillVisible && !bar.dying) {
        this._releaseBar(bar);
        continue;
      }
      
      if (bar.enemyRef) {
        assignedEnemies.add(bar.enemyRef);
      }
    }
    
    // Second pass: assign new bars to unassigned visible enemies
    for (const v of visible) {
      if (assignedEnemies.has(v.enemy)) continue;
      if (assignedEnemies.size >= MAX_BARS) break;
      
      const bar = this._acquireBar();
      bar.active = true;
      bar.enemyRef = v.enemy;
      bar.dying = false;
      bar.dyingTimer = 0;
      
      // Set name + level
      const name = v.enemy.config.name || 'Enemy';
      const level = v.enemy.config.level || '';
      bar.nameEl.innerHTML = `${name}${level ? `<span class="enemy-hbar-level">Lv${level}</span>` : ''}`;
      
      // Trigger death fade
      if (v.justDied) {
        bar.dying = true;
        bar.root.classList.add('dying');
        bar.root.classList.remove('visible');
      }
      
      assignedEnemies.add(v.enemy);
    }
    
    // Third pass: position all active bars on screen
    for (const bar of this.pool) {
      if (!bar.active || !bar.enemyRef) {
        bar.root.classList.remove('visible');
        continue;
      }
      
      const enemy = bar.enemyRef;
      
      // Check for death transition
      if (enemy.isDead && !bar.dying) {
        bar.dying = true;
        bar.dyingTimer = 0;
        bar.root.classList.add('dying');
        bar.root.classList.remove('visible');
      }
      
      // Update health fill
      const ratio = Math.max(0, enemy.health / enemy.maxHealth);
      bar.fill.style.width = `${ratio * 100}%`;
      
      // Color: green→yellow→red
      if (ratio > 0.5) {
        bar.fill.style.background = `linear-gradient(90deg, #aa2222, #dd4444)`;
      } else if (ratio > 0.25) {
        bar.fill.style.background = `linear-gradient(90deg, #aa6622, #dd8844)`;
      } else {
        bar.fill.style.background = `linear-gradient(90deg, #aa2222, #ff3333)`;
      }
      
      // Project to screen
      this._screenPos.set(
        enemy.mesh.position.x,
        enemy.mesh.position.y + BAR_OFFSET_Y,
        enemy.mesh.position.z
      );
      this._screenPos.project(this.camera);
      
      // Behind camera?
      if (this._screenPos.z > 1) {
        bar.root.classList.remove('visible');
        continue;
      }
      
      const x = (this._screenPos.x * 0.5 + 0.5) * screenW;
      const y = (-this._screenPos.y * 0.5 + 0.5) * screenH;
      
      // Off screen?
      if (x < -60 || x > screenW + 60 || y < -40 || y > screenH + 40) {
        bar.root.classList.remove('visible');
        continue;
      }
      
      bar.root.style.left = `${x}px`;
      bar.root.style.top = `${y}px`;
      
      if (!bar.dying) {
        bar.root.classList.add('visible');
      }
    }
  }
  
  dispose() {
    for (const bar of this.pool) {
      bar.root.remove();
    }
    this.pool = [];
    this.container.remove();
  }
}
