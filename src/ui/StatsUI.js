/**
 * StatsUI - Character Stats Menu
 * Press TAB or P to open
 * Allocate stat points earned from leveling (3 per level)
 */
export class StatsUI {
  constructor(gameManager, inputManager, player) {
    this.gm = gameManager;
    this.input = inputManager;
    this.player = player;
    
    this.isOpen = false;
    
    // Create UI elements
    this._createUI();
    
    // Keyboard listener
    this._setupInput();
  }
  
  _setupInput() {
    window.addEventListener('keydown', (e) => {
      // TAB or P to toggle stats menu
      if (e.code === 'Tab' || e.code === 'KeyP') {
        e.preventDefault();
        this.toggle();
      }
      
      // ESC to close
      if (e.code === 'Escape' && this.isOpen) {
        this.close();
      }
    });
  }
  
  _createUI() {
    // Container overlay
    this.container = document.createElement('div');
    this.container.id = 'stats-ui';
    this.container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.85);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      font-family: 'Cinzel', serif;
    `;
    
    // Stats panel
    this.panel = document.createElement('div');
    this.panel.style.cssText = `
      background: linear-gradient(135deg, rgba(30, 25, 20, 0.95), rgba(20, 15, 10, 0.98));
      border: 2px solid rgba(180, 140, 80, 0.5);
      border-radius: 8px;
      padding: 32px 48px;
      min-width: 450px;
      max-width: 550px;
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.8), 0 0 80px rgba(180, 140, 80, 0.2) inset;
    `;
    
    // Title
    const title = document.createElement('h2');
    title.textContent = 'CHARACTER STATS';
    title.style.cssText = `
      text-align: center;
      color: #ffd088;
      font-size: 24px;
      margin: 0 0 8px 0;
      text-shadow: 0 0 10px rgba(255, 180, 80, 0.5);
      letter-spacing: 4px;
    `;
    this.panel.appendChild(title);
    
    // Level & Points info
    this.levelInfo = document.createElement('div');
    this.levelInfo.style.cssText = `
      text-align: center;
      color: #aaa;
      font-size: 14px;
      margin-bottom: 24px;
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(180, 140, 80, 0.3);
    `;
    this.panel.appendChild(this.levelInfo);
    
    // Available points display
    this.pointsDisplay = document.createElement('div');
    this.pointsDisplay.style.cssText = `
      text-align: center;
      margin-bottom: 24px;
    `;
    this.panel.appendChild(this.pointsDisplay);
    
    // Stats grid
    this.statsGrid = document.createElement('div');
    this.statsGrid.style.cssText = `
      display: flex;
      flex-direction: column;
      gap: 12px;
    `;
    this.panel.appendChild(this.statsGrid);
    
    // Stat definitions
    this.statDefs = [
      { 
        id: 'vigor', 
        name: 'Vigor', 
        icon: '❤️', 
        color: '#ff6666',
        desc: '+5 Max HP per point',
        getBonus: (val) => `+${val * 5} HP`
      },
      { 
        id: 'endurance', 
        name: 'Endurance', 
        icon: '⚡', 
        color: '#66ff88',
        desc: '+5 Max Stamina, +5% regen per point',
        getBonus: (val) => `+${val * 5} Stam, +${val * 5}% regen`
      },
      { 
        id: 'strength', 
        name: 'Strength', 
        icon: '⚔️', 
        color: '#ff8844',
        desc: '+5% melee damage per point',
        getBonus: (val) => `+${val * 5}% dmg`
      },
      { 
        id: 'dexterity', 
        name: 'Dexterity', 
        icon: '🏃', 
        color: '#88ccff',
        desc: '+3% attack speed per point',
        getBonus: (val) => `+${val * 3}% speed`
      },
      { 
        id: 'mind', 
        name: 'Mind', 
        icon: '✨', 
        color: '#cc88ff',
        desc: '+5% cooldown reduction per point',
        getBonus: (val) => `-${val * 5}% cooldowns`
      },
    ];
    
    // Create stat rows
    this.statRows = {};
    for (const stat of this.statDefs) {
      const row = this._createStatRow(stat);
      this.statsGrid.appendChild(row);
      this.statRows[stat.id] = row;
    }
    
    // Derived stats section
    const derivedHeader = document.createElement('div');
    derivedHeader.textContent = 'DERIVED STATS';
    derivedHeader.style.cssText = `
      color: #888;
      font-size: 12px;
      letter-spacing: 2px;
      margin-top: 24px;
      margin-bottom: 12px;
      padding-top: 16px;
      border-top: 1px solid rgba(180, 140, 80, 0.3);
    `;
    this.panel.appendChild(derivedHeader);
    
    this.derivedStats = document.createElement('div');
    this.derivedStats.style.cssText = `
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      font-size: 13px;
      color: #aaa;
    `;
    this.panel.appendChild(this.derivedStats);
    
    // Close hint
    const closeHint = document.createElement('div');
    closeHint.textContent = 'Press TAB, P, or ESC to close';
    closeHint.style.cssText = `
      text-align: center;
      color: #666;
      font-size: 12px;
      margin-top: 24px;
    `;
    this.panel.appendChild(closeHint);
    
    this.container.appendChild(this.panel);
    document.body.appendChild(this.container);
  }
  
  _createStatRow(stat) {
    const row = document.createElement('div');
    row.className = 'stat-row';
    row.style.cssText = `
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 16px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 6px;
      transition: background 0.2s;
    `;
    
    // Icon
    const icon = document.createElement('span');
    icon.textContent = stat.icon;
    icon.style.cssText = `
      font-size: 24px;
      width: 36px;
      text-align: center;
    `;
    row.appendChild(icon);
    
    // Name and description
    const nameCol = document.createElement('div');
    nameCol.style.cssText = `
      flex: 1;
    `;
    
    const nameLabel = document.createElement('div');
    nameLabel.textContent = stat.name;
    nameLabel.style.cssText = `
      color: ${stat.color};
      font-size: 16px;
      font-weight: bold;
    `;
    nameCol.appendChild(nameLabel);
    
    const descLabel = document.createElement('div');
    descLabel.textContent = stat.desc;
    descLabel.style.cssText = `
      color: #888;
      font-size: 11px;
      margin-top: 2px;
    `;
    nameCol.appendChild(descLabel);
    
    row.appendChild(nameCol);
    
    // Current value
    const valueDisplay = document.createElement('div');
    valueDisplay.className = 'stat-value';
    valueDisplay.style.cssText = `
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      min-width: 40px;
      text-align: center;
    `;
    row.appendChild(valueDisplay);
    
    // Bonus display
    const bonusDisplay = document.createElement('div');
    bonusDisplay.className = 'stat-bonus';
    bonusDisplay.style.cssText = `
      font-size: 12px;
      color: ${stat.color};
      min-width: 100px;
      text-align: right;
    `;
    row.appendChild(bonusDisplay);
    
    // Add point button
    const addBtn = document.createElement('button');
    addBtn.textContent = '+';
    addBtn.className = 'add-point-btn';
    addBtn.style.cssText = `
      width: 36px;
      height: 36px;
      border: 2px solid rgba(180, 140, 80, 0.5);
      border-radius: 50%;
      background: rgba(180, 140, 80, 0.2);
      color: #ffd088;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
    
    addBtn.addEventListener('mouseenter', () => {
      if (!addBtn.disabled) {
        addBtn.style.background = 'rgba(180, 140, 80, 0.4)';
        addBtn.style.borderColor = '#ffd088';
        addBtn.style.transform = 'scale(1.1)';
      }
    });
    
    addBtn.addEventListener('mouseleave', () => {
      addBtn.style.background = 'rgba(180, 140, 80, 0.2)';
      addBtn.style.borderColor = 'rgba(180, 140, 80, 0.5)';
      addBtn.style.transform = 'scale(1)';
    });
    
    addBtn.addEventListener('click', () => {
      if (this.gm.spendStatPoint(stat.id)) {
        this._update();
        // Play sound
        if (this.gm.audioManager) {
          this.gm.audioManager.play('menuConfirm', { volume: 0.5 });
        }
        // Flash the row
        row.style.background = 'rgba(180, 140, 80, 0.3)';
        setTimeout(() => {
          row.style.background = 'rgba(0, 0, 0, 0.3)';
        }, 200);
      }
    });
    
    row.appendChild(addBtn);
    
    // Store references
    row.valueDisplay = valueDisplay;
    row.bonusDisplay = bonusDisplay;
    row.addBtn = addBtn;
    row.statDef = stat;
    
    return row;
  }
  
  _update() {
    // Level info
    const level = this.gm.currentLevel || 1;
    this.levelInfo.textContent = `Level ${level}`;
    
    // Available points
    const available = this.gm.getAvailableStatPoints();
    if (available > 0) {
      this.pointsDisplay.innerHTML = `
        <span style="color: #ffd088; font-size: 18px;">
          ${available} Point${available > 1 ? 's' : ''} Available
        </span>
      `;
    } else {
      this.pointsDisplay.innerHTML = `
        <span style="color: #666; font-size: 14px;">
          No points available — Level up to earn more!
        </span>
      `;
    }
    
    // Update each stat row
    for (const stat of this.statDefs) {
      const row = this.statRows[stat.id];
      const value = this.gm.stats[stat.id] || 0;
      
      row.valueDisplay.textContent = value;
      row.bonusDisplay.textContent = stat.getBonus(value);
      
      // Enable/disable add button
      if (available > 0) {
        row.addBtn.disabled = false;
        row.addBtn.style.opacity = '1';
        row.addBtn.style.cursor = 'pointer';
      } else {
        row.addBtn.disabled = true;
        row.addBtn.style.opacity = '0.3';
        row.addBtn.style.cursor = 'not-allowed';
      }
    }
    
    // Update derived stats
    const bonuses = this.gm.getStatBonuses();
    this.derivedStats.innerHTML = `
      <div>Max HP: <span style="color: #ff6666">${this.gm.maxHealth}</span></div>
      <div>Max Stamina: <span style="color: #66ff88">${this.gm.maxStamina}</span></div>
      <div>Damage Mult: <span style="color: #ff8844">${(bonuses.damageMult * 100).toFixed(0)}%</span></div>
      <div>Attack Speed: <span style="color: #88ccff">${(bonuses.attackSpeedMult * 100).toFixed(0)}%</span></div>
      <div>Stamina Regen: <span style="color: #66ff88">${(bonuses.staminaRegenMult * 100).toFixed(0)}%</span></div>
      <div>Cooldown Mult: <span style="color: #cc88ff">${(bonuses.cooldownMult * 100).toFixed(0)}%</span></div>
    `;
  }
  
  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  
  open() {
    if (this.isOpen) return;
    this.isOpen = true;
    this._update();
    this.container.style.display = 'flex';
    
    // Play sound
    if (this.gm.audioManager) {
      this.gm.audioManager.play('menuOpen', { volume: 0.4 });
    }
  }
  
  close() {
    if (!this.isOpen) return;
    this.isOpen = false;
    this.container.style.display = 'none';
    
    // Play sound
    if (this.gm.audioManager) {
      this.gm.audioManager.play('menuBack', { volume: 0.3 });
    }
  }
  
  update() {
    // Called each frame - only update if open
    if (this.isOpen) {
      this._update();
    }
  }
}
