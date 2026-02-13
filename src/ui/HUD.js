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
    
    // Boss health bar
    this._updateBossUI();
  }
  
  _updateBossUI() {
    if (!this.enemyManager || !this.bossContainer) return;
    
    const boss = this.enemyManager.getBoss();
    if (!boss) {
      this.bossContainer.style.display = 'none';
      return;
    }
    
    // Show boss bar only when boss is active
    if (boss.isActive && !boss.isDead) {
      this.bossContainer.style.display = 'block';
      
      if (this.bossName) {
        this.bossName.textContent = boss.name;
      }
      
      if (this.bossHealthBar) {
        const healthPercent = (boss.health / boss.maxHealth) * 100;
        this.bossHealthBar.style.width = `${healthPercent}%`;
        
        // Color changes with phase
        if (boss.phase === 2) {
          this.bossHealthBar.style.background = 'linear-gradient(90deg, #ff4400, #ff6622)';
        } else {
          this.bossHealthBar.style.background = 'linear-gradient(90deg, #cc2222, #ff4444)';
        }
      }
      
      if (this.bossPostureBar) {
        const posturePercent = (boss.posture / boss.maxPosture) * 100;
        this.bossPostureBar.style.width = `${posturePercent}%`;
      }
      
      if (this.bossPhase) {
        this.bossPhase.textContent = boss.phase === 2 ? 'PHASE 2' : '';
        this.bossPhase.style.color = boss.phase === 2 ? '#ff4400' : '#ffcc00';
      }
    } else {
      this.bossContainer.style.display = 'none';
    }
  }
}
