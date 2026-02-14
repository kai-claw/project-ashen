/**
 * BossUI.js - World Boss UI System
 * Phase 21: Boss Encounters
 * 
 * Displays boss-specific UI elements:
 * - Large health bar at bottom of screen
 * - Boss name and title
 * - Phase indicators with thresholds
 * - Damage chunk visualization
 * - Enrage timer
 * - Phase transition effects
 */

/**
 * BossUI - Manages all boss-related UI elements
 */
export class BossUI {
  constructor(gameManager = null) {
    this.gm = gameManager;
    
    // Current boss reference
    this.activeBoss = null;
    this.bossAI = null;
    this.bossData = null;
    
    // State tracking
    this.isVisible = false;
    this.lastHealth = 0;
    this.lastMaxHealth = 0;
    this.lastPhase = 1;
    this.damageChunkTimer = 0;
    this.damageChunkHealth = 0;
    
    // Enrage tracking
    this.enrageTimerActive = false;
    this.enrageTimeRemaining = 0;
    
    // Animation state
    this.healthBarAnimating = false;
    this.phaseTransitionAnimating = false;
    
    // Create UI elements
    this._createContainer();
    this._createNameDisplay();
    this._createHealthBar();
    this._createPhaseIndicators();
    this._createEnrageTimer();
    this._createDamageNumbers();
    this._addStyles();
    
    // Initially hidden
    this.hide();
  }
  
  /**
   * Create main container
   */
  _createContainer() {
    this.container = document.createElement('div');
    this.container.id = 'boss-ui-container';
    this.container.style.cssText = `
      position: fixed;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      width: 600px;
      max-width: 90vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      z-index: 150;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.5s ease-out;
    `;
    document.body.appendChild(this.container);
  }
  
  /**
   * Create boss name and title display
   */
  _createNameDisplay() {
    this.nameContainer = document.createElement('div');
    this.nameContainer.style.cssText = `
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
    `;
    
    // Boss title (e.g., "The Ancient Golem")
    this.titleLabel = document.createElement('div');
    this.titleLabel.className = 'boss-title';
    this.titleLabel.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 12px;
      color: #aa8866;
      text-transform: uppercase;
      letter-spacing: 3px;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
    `;
    this.titleLabel.textContent = '';
    this.nameContainer.appendChild(this.titleLabel);
    
    // Boss name (e.g., "Gormund")
    this.nameLabel = document.createElement('div');
    this.nameLabel.className = 'boss-name';
    this.nameLabel.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 24px;
      font-weight: bold;
      color: #ffddaa;
      text-shadow: 0 0 12px rgba(255, 180, 80, 0.5), 0 2px 4px rgba(0, 0, 0, 0.9);
      letter-spacing: 2px;
    `;
    this.nameLabel.textContent = '';
    this.nameContainer.appendChild(this.nameLabel);
    
    // Phase name (e.g., "Awakened" → "Enraged" → "Crystalline Fury")
    this.phaseNameLabel = document.createElement('div');
    this.phaseNameLabel.className = 'boss-phase-name';
    this.phaseNameLabel.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 11px;
      color: #888888;
      text-transform: uppercase;
      letter-spacing: 2px;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.8);
      margin-top: 4px;
      opacity: 0;
      transition: opacity 0.3s, color 0.5s;
    `;
    this.phaseNameLabel.textContent = '';
    this.nameContainer.appendChild(this.phaseNameLabel);
    
    this.container.appendChild(this.nameContainer);
  }
  
  /**
   * Create health bar with damage chunk visualization
   */
  _createHealthBar() {
    this.healthBarContainer = document.createElement('div');
    this.healthBarContainer.style.cssText = `
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    `;
    
    // Health bar wrapper with border
    this.healthBarWrapper = document.createElement('div');
    this.healthBarWrapper.style.cssText = `
      width: 100%;
      height: 24px;
      background: rgba(0, 0, 0, 0.7);
      border: 2px solid rgba(180, 120, 60, 0.6);
      border-radius: 4px;
      overflow: hidden;
      position: relative;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.8), inset 0 0 10px rgba(0, 0, 0, 0.5);
    `;
    
    // Damage chunk layer (shows recently lost health in white/red)
    this.damageChunkBar = document.createElement('div');
    this.damageChunkBar.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(90deg, #ffcccc, #ff8888);
      transition: width 0.8s ease-out;
      z-index: 1;
    `;
    this.healthBarWrapper.appendChild(this.damageChunkBar);
    
    // Main health fill
    this.healthBarFill = document.createElement('div');
    this.healthBarFill.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: linear-gradient(180deg, #cc3333 0%, #aa2222 50%, #881111 100%);
      box-shadow: inset 0 2px 4px rgba(255, 100, 100, 0.3), 0 0 10px rgba(200, 50, 50, 0.4);
      transition: width 0.15s ease-out;
      z-index: 2;
    `;
    this.healthBarWrapper.appendChild(this.healthBarFill);
    
    // Phase threshold markers
    this.phaseMarkerContainer = document.createElement('div');
    this.phaseMarkerContainer.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
      pointer-events: none;
    `;
    this.healthBarWrapper.appendChild(this.phaseMarkerContainer);
    
    // Health bar shimmer effect
    this.healthBarShimmer = document.createElement('div');
    this.healthBarShimmer.style.cssText = `
      position: absolute;
      top: 0;
      left: -100%;
      width: 50%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
      z-index: 4;
      animation: bossHealthShimmer 3s ease-in-out infinite;
    `;
    this.healthBarWrapper.appendChild(this.healthBarShimmer);
    
    // Health text overlay
    this.healthText = document.createElement('div');
    this.healthText.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Cinzel', serif;
      font-size: 12px;
      font-weight: bold;
      color: #ffffff;
      text-shadow: 0 0 4px rgba(0, 0, 0, 1), 0 0 8px rgba(0, 0, 0, 0.8);
      z-index: 5;
      letter-spacing: 1px;
    `;
    this.healthText.textContent = '';
    this.healthBarWrapper.appendChild(this.healthText);
    
    this.healthBarContainer.appendChild(this.healthBarWrapper);
    this.container.appendChild(this.healthBarContainer);
    
    // Phase markers array
    this.phaseMarkers = [];
  }
  
  /**
   * Create phase indicators below health bar
   */
  _createPhaseIndicators() {
    this.phaseContainer = document.createElement('div');
    this.phaseContainer.style.cssText = `
      display: flex;
      flex-direction: row;
      gap: 12px;
      margin-top: 4px;
    `;
    
    // Will be populated when boss is set
    this.phaseIndicators = [];
    
    this.container.appendChild(this.phaseContainer);
  }
  
  /**
   * Create enrage timer display
   */
  _createEnrageTimer() {
    this.enrageContainer = document.createElement('div');
    this.enrageContainer.style.cssText = `
      position: absolute;
      top: -30px;
      right: 10px;
      display: flex;
      align-items: center;
      gap: 6px;
      opacity: 0;
      transition: opacity 0.3s;
    `;
    
    // Enrage icon
    this.enrageIcon = document.createElement('div');
    this.enrageIcon.style.cssText = `
      font-size: 16px;
      animation: enragePulse 0.5s ease-in-out infinite;
    `;
    this.enrageIcon.textContent = '🔥';
    this.enrageContainer.appendChild(this.enrageIcon);
    
    // Enrage text
    this.enrageText = document.createElement('div');
    this.enrageText.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 14px;
      font-weight: bold;
      color: #ff4400;
      text-shadow: 0 0 8px rgba(255, 68, 0, 0.6);
      letter-spacing: 1px;
    `;
    this.enrageText.textContent = 'ENRAGED';
    this.enrageContainer.appendChild(this.enrageText);
    
    this.container.appendChild(this.enrageContainer);
  }
  
  /**
   * Create floating damage numbers pool
   */
  _createDamageNumbers() {
    this.damageNumberPool = [];
    this.activeDamageNumbers = [];
    
    // Pre-create damage number elements
    for (let i = 0; i < 10; i++) {
      const dmgNum = document.createElement('div');
      dmgNum.className = 'boss-damage-number';
      dmgNum.style.cssText = `
        position: fixed;
        font-family: 'Cinzel', serif;
        font-size: 28px;
        font-weight: bold;
        color: #ffdd44;
        text-shadow: 0 0 10px rgba(255, 200, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.9);
        pointer-events: none;
        z-index: 200;
        opacity: 0;
        transform: translateY(0) scale(1);
        transition: none;
      `;
      document.body.appendChild(dmgNum);
      this.damageNumberPool.push({
        element: dmgNum,
        active: false,
        timer: 0,
      });
    }
  }
  
  /**
   * Add CSS animations and styles
   */
  _addStyles() {
    if (document.getElementById('boss-ui-styles')) return;
    
    const style = document.createElement('style');
    style.id = 'boss-ui-styles';
    style.textContent = `
      @keyframes bossHealthShimmer {
        0% { left: -50%; }
        50% { left: 100%; }
        100% { left: 100%; }
      }
      
      @keyframes enragePulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
      }
      
      @keyframes phaseTransitionGlow {
        0% { box-shadow: 0 0 20px rgba(255, 200, 100, 0.8); }
        50% { box-shadow: 0 0 40px rgba(255, 220, 150, 1), 0 0 60px rgba(255, 180, 80, 0.6); }
        100% { box-shadow: 0 0 20px rgba(255, 200, 100, 0.8); }
      }
      
      @keyframes damageNumberFloat {
        0% { 
          opacity: 1; 
          transform: translateY(0) scale(1.2);
        }
        20% {
          transform: translateY(-20px) scale(1);
        }
        100% { 
          opacity: 0; 
          transform: translateY(-60px) scale(0.8);
        }
      }
      
      @keyframes phaseIndicatorPulse {
        0%, 100% { 
          transform: scale(1);
          box-shadow: 0 0 8px currentColor;
        }
        50% { 
          transform: scale(1.1);
          box-shadow: 0 0 16px currentColor, 0 0 24px currentColor;
        }
      }
      
      @keyframes bossAppear {
        0% {
          opacity: 0;
          transform: translateX(-50%) translateY(30px);
        }
        100% {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
        }
      }
      
      @keyframes healthBarDanger {
        0%, 100% { 
          border-color: rgba(255, 60, 60, 0.8);
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.3), inset 0 0 10px rgba(0, 0, 0, 0.5);
        }
        50% { 
          border-color: rgba(255, 120, 60, 1);
          box-shadow: 0 0 25px rgba(255, 50, 0, 0.5), inset 0 0 10px rgba(0, 0, 0, 0.5);
        }
      }
      
      .boss-damage-number.critical {
        color: #ff6644 !important;
        font-size: 36px !important;
        text-shadow: 0 0 15px rgba(255, 100, 50, 1), 0 2px 6px rgba(0, 0, 0, 1) !important;
      }
      
      .boss-damage-number.weak {
        color: #aaaaaa !important;
        font-size: 20px !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  /**
   * Set the active boss to display
   */
  setBoss(bossEntity, bossAI, bossData) {
    this.activeBoss = bossEntity;
    this.bossAI = bossAI;
    this.bossData = bossData;
    
    if (!bossData) {
      this.hide();
      return;
    }
    
    // Set name and title
    this.nameLabel.textContent = bossData.name || 'Unknown Boss';
    this.titleLabel.textContent = bossData.title || '';
    
    // Initialize health tracking
    this.lastHealth = bossData.stats?.maxHealth || 1000;
    this.lastMaxHealth = this.lastHealth;
    this.damageChunkHealth = this.lastHealth;
    
    // Update health display
    this._updateHealthBar(this.lastHealth, this.lastMaxHealth);
    
    // Create phase markers
    this._createPhaseMarkers(bossData.phases);
    
    // Create phase indicators
    this._createPhaseIndicatorElements(bossData.phases);
    
    // Set initial phase
    this.lastPhase = 1;
    this._updatePhaseDisplay(1, bossData.phases[0]);
  }
  
  /**
   * Create phase threshold markers on health bar
   */
  _createPhaseMarkers(phases) {
    // Clear existing markers
    this.phaseMarkerContainer.innerHTML = '';
    this.phaseMarkers = [];
    
    if (!phases || phases.length <= 1) return;
    
    // Skip first phase (100% threshold - no marker needed)
    for (let i = 1; i < phases.length; i++) {
      const phase = phases[i];
      const threshold = phase.threshold;
      
      // Create marker at threshold position
      const marker = document.createElement('div');
      marker.style.cssText = `
        position: absolute;
        top: 0;
        left: ${threshold * 100}%;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, rgba(255,200,100,0.9) 0%, rgba(200,150,50,0.7) 100%);
        box-shadow: 0 0 6px rgba(255, 200, 100, 0.5);
        transform: translateX(-50%);
      `;
      marker.dataset.phase = phase.id;
      marker.dataset.threshold = threshold;
      
      this.phaseMarkerContainer.appendChild(marker);
      this.phaseMarkers.push({
        element: marker,
        threshold: threshold,
        phase: phase.id,
        triggered: false,
      });
    }
  }
  
  /**
   * Create phase indicator elements below health bar
   */
  _createPhaseIndicatorElements(phases) {
    // Clear existing indicators
    this.phaseContainer.innerHTML = '';
    this.phaseIndicators = [];
    
    if (!phases) return;
    
    for (const phase of phases) {
      const indicator = document.createElement('div');
      indicator.style.cssText = `
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 10px;
        background: rgba(0, 0, 0, 0.6);
        border: 1px solid rgba(100, 100, 100, 0.4);
        border-radius: 4px;
        opacity: 0.5;
        transition: opacity 0.3s, border-color 0.3s, box-shadow 0.3s;
      `;
      indicator.dataset.phaseId = phase.id;
      
      // Phase number
      const phaseNum = document.createElement('div');
      phaseNum.style.cssText = `
        font-family: 'Cinzel', serif;
        font-size: 10px;
        color: #888888;
        font-weight: bold;
      `;
      phaseNum.textContent = `P${phase.id}`;
      indicator.appendChild(phaseNum);
      
      // Phase name
      const phaseName = document.createElement('div');
      phaseName.style.cssText = `
        font-family: 'Cinzel', serif;
        font-size: 10px;
        color: #aaaaaa;
        letter-spacing: 1px;
      `;
      phaseName.textContent = phase.name || `Phase ${phase.id}`;
      indicator.appendChild(phaseName);
      
      this.phaseContainer.appendChild(indicator);
      this.phaseIndicators.push({
        element: indicator,
        phaseId: phase.id,
        name: phase.name,
      });
    }
    
    // Highlight first phase
    if (this.phaseIndicators.length > 0) {
      this._highlightPhaseIndicator(1);
    }
  }
  
  /**
   * Highlight the active phase indicator
   */
  _highlightPhaseIndicator(phaseId) {
    for (const indicator of this.phaseIndicators) {
      if (indicator.phaseId === phaseId) {
        indicator.element.style.opacity = '1';
        indicator.element.style.borderColor = 'rgba(255, 180, 80, 0.8)';
        indicator.element.style.boxShadow = '0 0 10px rgba(255, 180, 80, 0.4)';
        indicator.element.style.animation = 'phaseIndicatorPulse 2s ease-in-out infinite';
      } else if (indicator.phaseId < phaseId) {
        // Past phases - dimmed but visible
        indicator.element.style.opacity = '0.4';
        indicator.element.style.borderColor = 'rgba(100, 100, 100, 0.3)';
        indicator.element.style.boxShadow = 'none';
        indicator.element.style.animation = 'none';
      } else {
        // Future phases - hidden
        indicator.element.style.opacity = '0.5';
        indicator.element.style.borderColor = 'rgba(100, 100, 100, 0.4)';
        indicator.element.style.boxShadow = 'none';
        indicator.element.style.animation = 'none';
      }
    }
  }
  
  /**
   * Update phase display when phase changes
   */
  _updatePhaseDisplay(phaseId, phaseConfig) {
    // Update phase name label
    if (phaseConfig && phaseConfig.name) {
      this.phaseNameLabel.textContent = phaseConfig.name.toUpperCase();
      this.phaseNameLabel.style.opacity = '1';
      
      // Color based on phase progression
      if (phaseId === 1) {
        this.phaseNameLabel.style.color = '#888888';
      } else if (phaseId === 2) {
        this.phaseNameLabel.style.color = '#ffaa44';
      } else {
        this.phaseNameLabel.style.color = '#ff6644';
      }
    }
    
    // Highlight active phase indicator
    this._highlightPhaseIndicator(phaseId);
    
    // Flash phase markers that have been passed
    for (const marker of this.phaseMarkers) {
      if (marker.phase <= phaseId && !marker.triggered) {
        marker.triggered = true;
        marker.element.style.background = 'linear-gradient(180deg, rgba(255,100,50,0.9) 0%, rgba(200,50,20,0.7) 100%)';
      }
    }
  }
  
  /**
   * Update health bar display
   */
  _updateHealthBar(currentHealth, maxHealth) {
    const healthPercent = Math.max(0, Math.min(100, (currentHealth / maxHealth) * 100));
    
    // Update main health fill
    this.healthBarFill.style.width = `${healthPercent}%`;
    
    // Health text
    this.healthText.textContent = `${Math.ceil(currentHealth)} / ${Math.ceil(maxHealth)}`;
    
    // Color changes based on health
    if (healthPercent <= 20) {
      // Critical - danger pulsing
      this.healthBarFill.style.background = 'linear-gradient(180deg, #ff4422 0%, #cc2200 50%, #991100 100%)';
      this.healthBarWrapper.style.animation = 'healthBarDanger 0.5s ease-in-out infinite';
    } else if (healthPercent <= 50) {
      // Low - warning color
      this.healthBarFill.style.background = 'linear-gradient(180deg, #dd6633 0%, #bb4422 50%, #992211 100%)';
      this.healthBarWrapper.style.animation = 'none';
    } else {
      // Normal
      this.healthBarFill.style.background = 'linear-gradient(180deg, #cc3333 0%, #aa2222 50%, #881111 100%)';
      this.healthBarWrapper.style.animation = 'none';
    }
  }
  
  /**
   * Update damage chunk visualization
   */
  _updateDamageChunk(currentHealth, maxHealth, delta) {
    const currentPercent = (currentHealth / maxHealth) * 100;
    const chunkPercent = (this.damageChunkHealth / maxHealth) * 100;
    
    // If health dropped, show the chunk
    if (currentHealth < this.lastHealth) {
      // Keep chunk at old health level
      this.damageChunkBar.style.width = `${chunkPercent}%`;
      this.damageChunkTimer = 0.8; // Hold chunk for 0.8 seconds
    }
    
    // Decay chunk timer
    if (this.damageChunkTimer > 0) {
      this.damageChunkTimer -= delta;
      
      if (this.damageChunkTimer <= 0) {
        // Start animating chunk down to current health
        this.damageChunkHealth = currentHealth;
        this.damageChunkBar.style.width = `${currentPercent}%`;
      }
    } else {
      // Keep chunk synced when not showing damage
      this.damageChunkHealth = currentHealth;
      this.damageChunkBar.style.width = `${currentPercent}%`;
    }
    
    this.lastHealth = currentHealth;
  }
  
  /**
   * Show a floating damage number
   */
  showDamageNumber(damage, position, isCritical = false, isWeak = false) {
    // Find an available damage number from pool
    const dmgNum = this.damageNumberPool.find(d => !d.active);
    if (!dmgNum) return;
    
    dmgNum.active = true;
    dmgNum.timer = 1.0;
    
    const el = dmgNum.element;
    
    // Position at screen coordinates (convert from 3D if needed)
    let screenX, screenY;
    if (position && position.x !== undefined && position.y !== undefined && position.z !== undefined) {
      // 3D position - would need camera projection
      // For now, use center of boss health bar area
      screenX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
      screenY = window.innerHeight - 140 + (Math.random() - 0.5) * 40;
    } else {
      screenX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
      screenY = window.innerHeight - 140;
    }
    
    el.style.left = `${screenX}px`;
    el.style.top = `${screenY}px`;
    el.textContent = Math.ceil(damage).toString();
    el.style.opacity = '1';
    el.style.transform = 'translateY(0) scale(1.2)';
    
    // Apply damage type styling
    el.classList.remove('critical', 'weak');
    if (isCritical) {
      el.classList.add('critical');
    } else if (isWeak) {
      el.classList.add('weak');
    }
    
    // Animate
    el.style.animation = 'damageNumberFloat 1s ease-out forwards';
    
    this.activeDamageNumbers.push(dmgNum);
  }
  
  /**
   * Update damage numbers
   */
  _updateDamageNumbers(delta) {
    for (let i = this.activeDamageNumbers.length - 1; i >= 0; i--) {
      const dmgNum = this.activeDamageNumbers[i];
      dmgNum.timer -= delta;
      
      if (dmgNum.timer <= 0) {
        dmgNum.active = false;
        dmgNum.element.style.opacity = '0';
        dmgNum.element.style.animation = 'none';
        dmgNum.element.classList.remove('critical', 'weak');
        this.activeDamageNumbers.splice(i, 1);
      }
    }
  }
  
  /**
   * Show/update enrage display
   */
  showEnrage(isEnraged, timeRemaining = 0) {
    this.enrageTimerActive = isEnraged;
    this.enrageTimeRemaining = timeRemaining;
    
    if (isEnraged) {
      this.enrageContainer.style.opacity = '1';
      
      // Update timer if applicable
      if (timeRemaining > 0) {
        this.enrageText.textContent = `ENRAGED ${Math.ceil(timeRemaining)}s`;
      } else {
        this.enrageText.textContent = 'ENRAGED';
      }
      
      // Intensify health bar
      this.healthBarWrapper.style.borderColor = 'rgba(255, 100, 50, 0.9)';
    } else {
      this.enrageContainer.style.opacity = '0';
      this.healthBarWrapper.style.borderColor = 'rgba(180, 120, 60, 0.6)';
    }
  }
  
  /**
   * Play phase transition effect
   */
  playPhaseTransition(newPhase, phaseConfig) {
    this.phaseTransitionAnimating = true;
    
    // Flash the whole UI
    this.healthBarWrapper.style.animation = 'phaseTransitionGlow 0.5s ease-out 3';
    
    // Update phase display
    this._updatePhaseDisplay(newPhase, phaseConfig);
    
    // Flash name
    this.nameLabel.style.textShadow = '0 0 30px rgba(255, 200, 100, 1), 0 0 60px rgba(255, 180, 80, 0.8)';
    
    setTimeout(() => {
      this.nameLabel.style.textShadow = '0 0 12px rgba(255, 180, 80, 0.5), 0 2px 4px rgba(0, 0, 0, 0.9)';
      this.healthBarWrapper.style.animation = 'none';
      this.phaseTransitionAnimating = false;
    }, 1500);
  }
  
  /**
   * Main update loop
   */
  update(delta) {
    if (!this.isVisible || !this.bossAI) return;
    
    // Get state from BossAI
    const state = this.bossAI.getStateInfo();
    
    if (!state || state.isDead) {
      this.hide();
      return;
    }
    
    // Update health bar
    this._updateHealthBar(state.health, state.maxHealth);
    this._updateDamageChunk(state.health, state.maxHealth, delta);
    
    // Check for phase change
    if (state.phase !== this.lastPhase) {
      const phaseConfig = this.bossData?.phases?.find(p => p.id === state.phase);
      this.playPhaseTransition(state.phase, phaseConfig);
      this.lastPhase = state.phase;
    }
    
    // Update enrage display
    this.showEnrage(state.isEnraged);
    
    // Update damage numbers
    this._updateDamageNumbers(delta);
  }
  
  /**
   * Show the boss UI with animation
   */
  show() {
    if (this.isVisible) return;
    
    this.isVisible = true;
    this.container.style.opacity = '1';
    this.container.style.animation = 'bossAppear 0.8s ease-out forwards';
  }
  
  /**
   * Hide the boss UI
   */
  hide() {
    if (!this.isVisible) return;
    
    this.isVisible = false;
    this.container.style.opacity = '0';
    this.container.style.animation = 'none';
    
    // Clear state
    this.activeBoss = null;
    this.bossAI = null;
    this.enrageTimerActive = false;
    this.lastPhase = 1;
    
    // Reset phase markers
    for (const marker of this.phaseMarkers) {
      marker.triggered = false;
    }
  }
  
  /**
   * Clean up damage numbers and reset
   */
  reset() {
    this.hide();
    
    // Clear active damage numbers
    for (const dmgNum of this.activeDamageNumbers) {
      dmgNum.active = false;
      dmgNum.element.style.opacity = '0';
    }
    this.activeDamageNumbers = [];
    
    // Reset health tracking
    this.lastHealth = 0;
    this.damageChunkHealth = 0;
    this.damageChunkTimer = 0;
  }
  
  /**
   * Destroy and cleanup
   */
  dispose() {
    // Remove container
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    
    // Remove damage numbers
    for (const dmgNum of this.damageNumberPool) {
      if (dmgNum.element && dmgNum.element.parentNode) {
        dmgNum.element.parentNode.removeChild(dmgNum.element);
      }
    }
    
    // Remove styles
    const style = document.getElementById('boss-ui-styles');
    if (style) {
      style.parentNode.removeChild(style);
    }
  }
}

/**
 * Export singleton instance creator
 */
export function createBossUI(gameManager) {
  return new BossUI(gameManager);
}
