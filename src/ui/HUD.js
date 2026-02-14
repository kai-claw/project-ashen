export class HUD {
  constructor(gameManager) {
    this.gm = gameManager;
    this.healthBar = document.getElementById('health-bar');
    this.staminaBar = document.getElementById('stamina-bar');
    this.postureBar = document.getElementById('posture-bar');
    this.remnantLabel = document.getElementById('remnant');
    this.lostRemnantLabel = document.getElementById('lost-remnant');
    
    // Boss UI elements
    this.bossContainer = document.getElementById('boss-container');
    this.bossName = document.getElementById('boss-name');
    this.bossHealthBar = document.getElementById('boss-health-bar');
    this.bossPostureBar = document.getElementById('boss-posture-bar');
    this.bossPhase = document.getElementById('boss-phase');
    
    // Reference to enemy manager (set via setEnemyManager)
    this.enemyManager = null;
    
    // Damage vignette overlay
    this._createDamageVignette();
    this.damageVignetteOpacity = 0;
    
    // Stamina depleted warning
    this.staminaWarningActive = false;
    
    // Create XP bar UI
    this._createXPBar();
    
    // Level up flash
    this.levelUpFlashActive = false;
  }
  
  _createXPBar() {
    // Create XP bar container at bottom of screen
    this.xpContainer = document.createElement('div');
    this.xpContainer.id = 'xp-container';
    this.xpContainer.style.cssText = `
      position: fixed;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      width: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      z-index: 100;
      pointer-events: none;
    `;
    
    // Level label
    this.levelLabel = document.createElement('div');
    this.levelLabel.id = 'level-label';
    this.levelLabel.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 14px;
      color: #ffdd88;
      text-shadow: 0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,200,0,0.3);
      letter-spacing: 2px;
    `;
    this.levelLabel.textContent = 'LEVEL 1';
    this.xpContainer.appendChild(this.levelLabel);
    
    // XP bar background
    this.xpBarBg = document.createElement('div');
    this.xpBarBg.style.cssText = `
      width: 100%;
      height: 6px;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(255, 200, 100, 0.3);
      border-radius: 3px;
      overflow: hidden;
    `;
    
    // XP bar fill
    this.xpBar = document.createElement('div');
    this.xpBar.id = 'xp-bar';
    this.xpBar.style.cssText = `
      width: 0%;
      height: 100%;
      background: linear-gradient(90deg, #aa8800, #ffcc44);
      box-shadow: 0 0 6px rgba(255, 200, 0, 0.5);
      transition: width 0.3s ease-out;
    `;
    
    this.xpBarBg.appendChild(this.xpBar);
    this.xpContainer.appendChild(this.xpBarBg);
    
    document.body.appendChild(this.xpContainer);
  }
  
  flashLevelUp() {
    if (this.levelUpFlashActive) return;
    this.levelUpFlashActive = true;
    
    // Flash the level label gold
    this.levelLabel.style.color = '#ffffff';
    this.levelLabel.style.textShadow = '0 0 20px rgba(255,220,0,1), 0 0 40px rgba(255,200,0,0.8)';
    this.levelLabel.style.fontSize = '18px';
    this.levelLabel.style.transition = 'all 0.2s ease-out';
    
    // Flash the XP bar
    this.xpBar.style.background = 'linear-gradient(90deg, #ffff88, #ffffff)';
    this.xpBar.style.boxShadow = '0 0 20px rgba(255, 255, 200, 1)';
    
    // Screen flash
    if (!this.levelUpFlash) {
      this.levelUpFlash = document.createElement('div');
      this.levelUpFlash.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(ellipse at center, rgba(255, 220, 100, 0.4) 0%, transparent 70%);
        pointer-events: none;
        z-index: 997;
        opacity: 0;
        transition: opacity 0.1s ease-out;
      `;
      document.body.appendChild(this.levelUpFlash);
    }
    this.levelUpFlash.style.opacity = '1';
    
    // Fade out effects
    setTimeout(() => {
      this.levelUpFlash.style.opacity = '0';
    }, 200);
    
    setTimeout(() => {
      this.levelLabel.style.color = '#ffdd88';
      this.levelLabel.style.textShadow = '0 0 4px rgba(0,0,0,0.8), 0 0 8px rgba(255,200,0,0.3)';
      this.levelLabel.style.fontSize = '14px';
      this.xpBar.style.background = 'linear-gradient(90deg, #aa8800, #ffcc44)';
      this.xpBar.style.boxShadow = '0 0 6px rgba(255, 200, 0, 0.5)';
      this.levelUpFlashActive = false;
    }, 800);
  }
  
  _createDamageVignette() {
    // Create vignette overlay for damage feedback
    this.damageVignette = document.createElement('div');
    this.damageVignette.id = 'damage-vignette';
    this.damageVignette.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 999;
      background: radial-gradient(ellipse at center, transparent 40%, rgba(180, 30, 30, 0.6) 100%);
      opacity: 0;
      transition: opacity 0.05s ease-out;
    `;
    document.body.appendChild(this.damageVignette);
    
    // Also create a flash overlay for impact hits
    this.hitFlash = document.createElement('div');
    this.hitFlash.id = 'hit-flash';
    this.hitFlash.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 998;
      background: rgba(255, 100, 100, 0.3);
      opacity: 0;
      transition: opacity 0.08s ease-out;
    `;
    document.body.appendChild(this.hitFlash);
  }
  
  // Call when player takes damage
  flashDamage(intensity = 0.6) {
    // Vignette
    this.damageVignetteOpacity = Math.min(1.0, intensity);
    this.damageVignette.style.opacity = this.damageVignetteOpacity;
    
    // Quick center flash
    this.hitFlash.style.opacity = Math.min(0.5, intensity * 0.8);
    
    // Fade out over time
    setTimeout(() => {
      this.damageVignette.style.opacity = this.damageVignetteOpacity * 0.5;
      this.hitFlash.style.opacity = 0;
    }, 80);
    
    setTimeout(() => {
      this.damageVignette.style.opacity = 0;
    }, 250);
  }
  
  // Warning flash when stamina depletes
  flashStaminaDepleted() {
    if (this.staminaWarningActive) return;
    this.staminaWarningActive = true;
    
    if (this.staminaBar) {
      this.staminaBar.style.background = 'linear-gradient(90deg, #ffaa00, #ff6600)';
      this.staminaBar.style.boxShadow = '0 0 10px #ff6600';
      
      setTimeout(() => {
        this.staminaBar.style.background = '';
        this.staminaBar.style.boxShadow = '';
        this.staminaWarningActive = false;
      }, 300);
    }
  }
  
  setEnemyManager(enemyManager) {
    this.enemyManager = enemyManager;
  }

  update() {
    if (this.healthBar) {
      this.healthBar.style.width = `${(this.gm.health / this.gm.maxHealth) * 100}%`;
    }
    if (this.staminaBar) {
      this.staminaBar.style.width = `${(this.gm.stamina / this.gm.maxStamina) * 100}%`;
    }
    if (this.postureBar) {
      this.postureBar.style.width = `${(this.gm.posture / this.gm.maxPosture) * 100}%`;
    }
    if (this.remnantLabel) {
      this.remnantLabel.textContent = `Remnant: ${this.gm.remnant}`;
    }
    // Show lost remnant indicator when bloodstain exists
    if (this.lostRemnantLabel) {
      if (this.gm.bloodstain && this.gm.heldRemnant > 0) {
        this.lostRemnantLabel.style.display = 'block';
        this.lostRemnantLabel.textContent = `Lost: ${this.gm.heldRemnant} (recover at bloodstain)`;
      } else {
        this.lostRemnantLabel.style.display = 'none';
      }
    }
    
    // Update XP bar
    this._updateXPBar();
    
    // Boss health bar
    this._updateBossUI();
  }
  
  _updateXPBar() {
    if (this.levelLabel) {
      const level = this.gm.currentLevel || 1;
      const maxLevel = this.gm.maxLevel || 20;
      if (level >= maxLevel) {
        this.levelLabel.textContent = `LEVEL ${level} (MAX)`;
      } else {
        this.levelLabel.textContent = `LEVEL ${level}`;
      }
    }
    
    if (this.xpBar) {
      const progress = this.gm.getXPProgress ? this.gm.getXPProgress() : 0;
      this.xpBar.style.width = `${progress * 100}%`;
      
      // Glow effect when close to leveling
      if (progress > 0.8) {
        this.xpBar.style.boxShadow = '0 0 12px rgba(255, 255, 100, 0.8)';
      } else {
        this.xpBar.style.boxShadow = '0 0 6px rgba(255, 200, 0, 0.5)';
      }
    }
  }
  
  _updateBossUI() {
    if (!this.enemyManager || !this.bossContainer) return;
    
    // Check for Crypt Lord first, then original boss
    const cryptLord = this.enemyManager.getCryptLord();
    const originalBoss = this.enemyManager.getBoss();
    
    // Determine which boss to show
    let activeBoss = null;
    let isCryptLord = false;
    
    if (cryptLord && cryptLord.bossActive && !cryptLord.isDead) {
      activeBoss = cryptLord;
      isCryptLord = true;
    } else if (originalBoss && originalBoss.isActive && !originalBoss.isDead) {
      activeBoss = originalBoss;
    }
    
    if (!activeBoss) {
      this.bossContainer.style.display = 'none';
      return;
    }
    
    // Show boss bar
    this.bossContainer.style.display = 'block';
    
    if (this.bossName) {
      this.bossName.textContent = isCryptLord ? activeBoss.config.name : activeBoss.name;
    }
    
    if (this.bossHealthBar) {
      const healthPercent = (activeBoss.health / activeBoss.maxHealth) * 100;
      this.bossHealthBar.style.width = `${healthPercent}%`;
      
      // Color based on boss type and phase
      if (isCryptLord) {
        // Crypt Lord: Purple/dark theme
        const phase = activeBoss.bossPhase || 1;
        if (phase === 2) {
          this.bossHealthBar.style.background = 'linear-gradient(90deg, #8844cc, #aa66ff)';
        } else {
          this.bossHealthBar.style.background = 'linear-gradient(90deg, #882222, #cc4444)';
        }
      } else {
        // Original boss
        if (activeBoss.phase === 2) {
          this.bossHealthBar.style.background = 'linear-gradient(90deg, #ff4400, #ff6622)';
        } else {
          this.bossHealthBar.style.background = 'linear-gradient(90deg, #cc2222, #ff4444)';
        }
      }
      
      // Phase marker at 50%
      if (healthPercent <= 50 && healthPercent > 0) {
        this.bossHealthBar.classList.add('phase-two');
      } else {
        this.bossHealthBar.classList.remove('phase-two');
      }
    }
    
    if (this.bossPostureBar) {
      const posturePercent = (activeBoss.posture / activeBoss.maxPosture) * 100;
      this.bossPostureBar.style.width = `${posturePercent}%`;
    }
    
    if (this.bossPhase) {
      const phase = isCryptLord ? (activeBoss.bossPhase || 1) : activeBoss.phase;
      this.bossPhase.textContent = phase === 2 ? 'PHASE 2' : '';
      this.bossPhase.style.color = phase === 2 ? (isCryptLord ? '#aa66ff' : '#ff4400') : '#ffcc00';
    }
  }
}
