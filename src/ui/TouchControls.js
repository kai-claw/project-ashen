/**
 * TouchControls — Mobile touch input overlay for Project Ashen
 * Virtual joystick (left), action buttons (right), swipe camera (right area)
 * Auto-shows on touch devices, hidden on desktop.
 */
export class TouchControls {
  constructor(inputManager) {
    this.inputManager = inputManager;
    this.isMobile = this._detectMobile();
    
    // Camera controller reference (set via setCameraController)
    this.cameraController = null;
    
    // Joystick state
    this.joystick = { active: false, startX: 0, startY: 0, deltaX: 0, deltaY: 0, touchId: null };
    
    // Camera state  
    this.camera = { active: false, startX: 0, startY: 0, deltaX: 0, deltaY: 0, touchId: null };
    
    // Pinch-to-zoom state
    this.pinch = { active: false, startDist: 0 };
    
    // Button states
    this.buttons = { attack: false, dodge: false, block: false, interact: false };
    
    // DOM elements
    this.container = null;
    this.joystickBase = null;
    this.joystickKnob = null;
    
    if (this.isMobile) {
      this._createUI();
      this._bindTouchEvents();
      this._bindPinchZoom();
    }
  }
  
  setCameraController(cameraController) {
    this.cameraController = cameraController;
  }
  
  _detectMobile() {
    return ('ontouchstart' in window) || 
           (navigator.maxTouchPoints > 0) ||
           /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  
  _createUI() {
    // Main container
    this.container = document.createElement('div');
    this.container.id = 'touch-controls';
    this.container.style.cssText = `
      position: fixed; inset: 0; z-index: 50; pointer-events: none;
      touch-action: none; user-select: none; -webkit-user-select: none;
    `;
    
    // --- Virtual Joystick (left side) ---
    this.joystickArea = document.createElement('div');
    this.joystickArea.style.cssText = `
      position: absolute; bottom: 20px; left: 20px;
      width: 160px; height: 160px; pointer-events: auto; touch-action: none;
    `;
    
    this.joystickBase = document.createElement('div');
    this.joystickBase.style.cssText = `
      position: absolute; inset: 0;
      width: 160px; height: 160px; border-radius: 50%;
      background: rgba(10, 10, 15, 0.5);
      border: 2px solid rgba(218, 165, 32, 0.4);
      box-shadow: 0 0 20px rgba(218, 165, 32, 0.1), inset 0 0 30px rgba(0, 0, 0, 0.3);
    `;
    
    this.joystickKnob = document.createElement('div');
    this.joystickKnob.style.cssText = `
      position: absolute; top: 50%; left: 50%;
      width: 60px; height: 60px; border-radius: 50%;
      transform: translate(-50%, -50%);
      background: radial-gradient(circle, rgba(218, 165, 32, 0.6) 0%, rgba(218, 165, 32, 0.2) 70%);
      border: 2px solid rgba(218, 165, 32, 0.7);
      box-shadow: 0 0 15px rgba(218, 165, 32, 0.3);
      transition: box-shadow 0.1s ease;
    `;
    
    this.joystickArea.appendChild(this.joystickBase);
    this.joystickArea.appendChild(this.joystickKnob);
    this.container.appendChild(this.joystickArea);
    
    // --- Action Buttons (right side) ---
    const buttonDefs = [
      { id: 'attack', label: '⚔️', bottom: 100, right: 20 },
      { id: 'dodge',  label: '💨', bottom: 100, right: 100 },
      { id: 'block',  label: '🛡️', bottom: 180, right: 60 },
      { id: 'interact', label: 'E', bottom: 20, right: 60 },
    ];
    
    this.buttonElements = {};
    
    buttonDefs.forEach(def => {
      const btn = document.createElement('div');
      btn.dataset.action = def.id;
      btn.style.cssText = `
        position: absolute; bottom: ${def.bottom}px; right: ${def.right}px;
        width: 65px; height: 65px; border-radius: 50%;
        background: rgba(10, 10, 15, 0.55);
        border: 2px solid rgba(218, 165, 32, 0.45);
        box-shadow: 0 0 12px rgba(218, 165, 32, 0.15);
        display: flex; align-items: center; justify-content: center;
        font-size: ${def.id === 'interact' ? '20px' : '24px'};
        color: #DAA520; pointer-events: auto; touch-action: none;
        font-family: 'Cinzel', Georgia, serif;
        text-shadow: 0 0 8px rgba(218, 165, 32, 0.5);
        transition: background 0.1s ease, box-shadow 0.1s ease;
        -webkit-tap-highlight-color: transparent;
      `;
      btn.textContent = def.label;
      this.buttonElements[def.id] = btn;
      this.container.appendChild(btn);
    });
    
    // --- Camera touch zone (right half, upper area) ---
    this.cameraZone = document.createElement('div');
    this.cameraZone.style.cssText = `
      position: absolute; top: 0; right: 0;
      width: 50%; height: 60%;
      pointer-events: auto; touch-action: none;
    `;
    this.container.appendChild(this.cameraZone);
    
    // --- Mobile HUD adjustments ---
    this._adjustHUD();
    
    document.body.appendChild(this.container);
  }
  
  _adjustHUD() {
    // Scale down HUD bars for mobile
    const hud = document.getElementById('hud');
    if (hud) {
      hud.style.transform = 'scale(0.75)';
      hud.style.transformOrigin = 'top left';
      hud.style.top = '10px';
      hud.style.left = '10px';
    }
    
    // Hide keyboard controls hint
    const hint = document.getElementById('controls-hint');
    if (hint) hint.style.display = 'none';
    
    // Hide crosshair on mobile
    const crosshair = document.getElementById('crosshair');
    if (crosshair) crosshair.style.display = 'none';
    
    // Hide lock-on indicator (not usable on mobile)
    const lockOn = document.getElementById('lock-on-indicator');
    if (lockOn) lockOn.style.display = 'none';
    
    // Prevent default touch behaviors on canvas
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.style.touchAction = 'none';
    }
    
    // Inject mobile-specific CSS to hide desktop-only UI elements
    const mobileCSS = document.createElement('style');
    mobileCSS.id = 'mobile-ui-overrides';
    mobileCSS.textContent = `
      /* Hide desktop hotbars — not usable on touch */
      #combat-hotbar { display: none !important; }
      #spell-hotbar { display: none !important; }
      #ability-container { display: none !important; }
      
      /* Quest tracker: hide "Press J" text, compact on mobile */
      #quest-hud-tracker .hud-tracker-empty { display: none !important; }
      
      /* Hide keyboard prompts — replaced by touch buttons */
      #door-prompt { display: none !important; }
      #ladder-prompt { display: none !important; }
      #shortcut-prompt { display: none !important; }
      
      /* Reposition minimap to avoid overlap with HUD bars */
      .minimap-container, #minimap-container {
        top: 8px !important;
        right: 8px !important;
        transform: scale(0.75) !important;
        transform-origin: top right !important;
      }
      
      /* Scale quest tracker smaller and reposition */
      #quest-hud-tracker {
        top: auto !important;
        bottom: 280px !important;
        right: 8px !important;
        transform: scale(0.75) !important;
        transform-origin: bottom right !important;
        max-width: 160px !important;
        font-size: 10px !important;
      }
      
      /* Move item notification higher so it doesn't overlap touch controls */
      #item-notification {
        top: 35% !important;
      }
      
      /* Scale discovery manager popups */
      #discovery-notifications {
        top: 60px !important;
        transform: translateX(-50%) scale(0.85) !important;
      }
      
      /* Compact XP bar for mobile */
      #xp-bar-container, .xp-bar-container {
        bottom: 2px !important;
        height: 4px !important;
      }
      
      /* Scale boss health bar */
      #boss-container {
        width: 80vw !important;
        max-width: 400px !important;
        bottom: 280px !important;
      }
      
      /* NPC interaction prompt — mobile friendly, above touch controls */
      #npc-interact-prompt {
        bottom: 55% !important;
        font-size: 13px !important;
        padding: 8px 16px !important;
      }
      #npc-interaction-prompt {
        bottom: 55% !important;
      }
      #npc-interaction-prompt .npc-prompt-key {
        display: none !important;
      }
      
      /* Chest interaction prompt */
      #chest-interact-prompt {
        bottom: 55% !important;
        font-size: 13px !important;
      }
      
      /* Scale crucible menu for mobile */
      #crucible-menu {
        min-width: 280px !important;
        width: 85vw !important;
        max-width: 400px !important;
        padding: 16px !important;
      }
      .crucible-title { font-size: 18px !important; }
      .track-name { font-size: 13px !important; }
      
      /* Death screen readable on mobile */
      #death-screen {
        font-size: 36px !important;
      }
      #death-screen .sub {
        font-size: 13px !important;
      }
      
      /* Illusory wall notification compact */
      #illusory-notification {
        font-size: 16px !important;
        padding: 10px 20px !important;
        top: 120px !important;
      }
      
      /* NPC marker labels smaller on mobile */
      .npc-marker-label {
        font-size: 10px !important;
      }
    `;
    document.head.appendChild(mobileCSS);
    
    // Watch for dynamically created elements and hide them
    this._observeNewElements();
  }
  
  _observeNewElements() {
    // MutationObserver to catch dynamically-created desktop UI elements
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== 1) continue;
          
          // Hide combat hotbar when InventoryUI creates it
          if (node.id === 'combat-hotbar') {
            node.style.display = 'none';
          }
          // Hide spell hotbar
          if (node.id === 'spell-hotbar') {
            node.style.display = 'none';
          }
          // Hide ability container
          if (node.id === 'ability-container') {
            node.style.display = 'none';
          }
        }
      }
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
  }
  
  _bindTouchEvents() {
    // Joystick touch events
    this.joystickArea.addEventListener('touchstart', (e) => this._onJoystickStart(e), { passive: false });
    this.joystickArea.addEventListener('touchmove', (e) => this._onJoystickMove(e), { passive: false });
    this.joystickArea.addEventListener('touchend', (e) => this._onJoystickEnd(e), { passive: false });
    this.joystickArea.addEventListener('touchcancel', (e) => this._onJoystickEnd(e), { passive: false });
    
    // Camera zone touch events
    this.cameraZone.addEventListener('touchstart', (e) => this._onCameraStart(e), { passive: false });
    this.cameraZone.addEventListener('touchmove', (e) => this._onCameraMove(e), { passive: false });
    this.cameraZone.addEventListener('touchend', (e) => this._onCameraEnd(e), { passive: false });
    this.cameraZone.addEventListener('touchcancel', (e) => this._onCameraEnd(e), { passive: false });
    
    // Button touch events
    Object.entries(this.buttonElements).forEach(([action, btn]) => {
      btn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.buttons[action] = true;
        btn.style.background = 'rgba(218, 165, 32, 0.35)';
        btn.style.boxShadow = '0 0 25px rgba(218, 165, 32, 0.5)';
        
        // Fire input events
        if (action === 'attack') {
          this.inputManager._bufferAction('mouse0');
        } else if (action === 'dodge') {
          this.inputManager._bufferAction('Space');
        } else if (action === 'block') {
          this.inputManager.keys['ShiftLeft'] = true;
          this.inputManager.keys['ShiftRight'] = true;
        } else if (action === 'interact') {
          this.inputManager._bufferAction('KeyE');
        }
      }, { passive: false });
      
      btn.addEventListener('touchend', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.buttons[action] = false;
        btn.style.background = 'rgba(10, 10, 15, 0.55)';
        btn.style.boxShadow = '0 0 12px rgba(218, 165, 32, 0.15)';
        
        if (action === 'block') {
          this.inputManager.keys['ShiftLeft'] = false;
          this.inputManager.keys['ShiftRight'] = false;
        }
      }, { passive: false });
      
      btn.addEventListener('touchcancel', (e) => {
        this.buttons[action] = false;
        btn.style.background = 'rgba(10, 10, 15, 0.55)';
        btn.style.boxShadow = '0 0 12px rgba(218, 165, 32, 0.15)';
        
        if (action === 'block') {
          this.inputManager.keys['ShiftLeft'] = false;
          this.inputManager.keys['ShiftRight'] = false;
        }
      }, { passive: false });
    });
    
    // Prevent default on the whole container
    this.container.addEventListener('touchmove', (e) => e.preventDefault(), { passive: false });
  }
  
  // --- Joystick ---
  
  _onJoystickStart(e) {
    e.preventDefault();
    const touch = e.changedTouches[0];
    this.joystick.active = true;
    this.joystick.touchId = touch.identifier;
    
    const rect = this.joystickBase.getBoundingClientRect();
    this.joystick.startX = rect.left + rect.width / 2;
    this.joystick.startY = rect.top + rect.height / 2;
    this.joystick.deltaX = 0;
    this.joystick.deltaY = 0;
    
    this.joystickKnob.style.boxShadow = '0 0 25px rgba(218, 165, 32, 0.6)';
  }
  
  _onJoystickMove(e) {
    e.preventDefault();
    if (!this.joystick.active) return;
    
    for (const touch of e.changedTouches) {
      if (touch.identifier === this.joystick.touchId) {
        const maxRadius = 50;
        let dx = touch.clientX - this.joystick.startX;
        let dy = touch.clientY - this.joystick.startY;
        
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > maxRadius) {
          dx = (dx / dist) * maxRadius;
          dy = (dy / dist) * maxRadius;
        }
        
        this.joystick.deltaX = dx / maxRadius; // -1 to 1
        this.joystick.deltaY = dy / maxRadius; // -1 to 1
        
        // Move knob visually
        this.joystickKnob.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
        
        // Update InputManager keys based on joystick position
        const threshold = 0.25;
        this.inputManager.keys['KeyW'] = this.joystick.deltaY < -threshold;
        this.inputManager.keys['KeyS'] = this.joystick.deltaY > threshold;
        this.inputManager.keys['KeyA'] = this.joystick.deltaX < -threshold;
        this.inputManager.keys['KeyD'] = this.joystick.deltaX > threshold;
        
        break;
      }
    }
  }
  
  _onJoystickEnd(e) {
    e.preventDefault();
    for (const touch of e.changedTouches) {
      if (touch.identifier === this.joystick.touchId) {
        this.joystick.active = false;
        this.joystick.touchId = null;
        this.joystick.deltaX = 0;
        this.joystick.deltaY = 0;
        
        // Reset knob position
        this.joystickKnob.style.transform = 'translate(-50%, -50%)';
        this.joystickKnob.style.boxShadow = '0 0 15px rgba(218, 165, 32, 0.3)';
        
        // Clear movement keys
        this.inputManager.keys['KeyW'] = false;
        this.inputManager.keys['KeyS'] = false;
        this.inputManager.keys['KeyA'] = false;
        this.inputManager.keys['KeyD'] = false;
        
        break;
      }
    }
  }
  
  // --- Camera ---
  
  _onCameraStart(e) {
    e.preventDefault();
    const touch = e.changedTouches[0];
    this.camera.active = true;
    this.camera.touchId = touch.identifier;
    this.camera.startX = touch.clientX;
    this.camera.startY = touch.clientY;
    this.camera.deltaX = 0;
    this.camera.deltaY = 0;
  }
  
  _onCameraMove(e) {
    e.preventDefault();
    if (!this.camera.active) return;
    
    for (const touch of e.changedTouches) {
      if (touch.identifier === this.camera.touchId) {
        const sensitivity = 1.5;
        this.camera.deltaX = (touch.clientX - this.camera.startX) * sensitivity;
        this.camera.deltaY = (touch.clientY - this.camera.startY) * sensitivity;
        
        // Feed into InputManager mouse delta
        this.inputManager.mouseDelta.x += (touch.clientX - this.camera.startX) * sensitivity;
        this.inputManager.mouseDelta.y += (touch.clientY - this.camera.startY) * sensitivity;
        
        // Reset start position for continuous movement
        this.camera.startX = touch.clientX;
        this.camera.startY = touch.clientY;
        
        break;
      }
    }
  }
  
  _onCameraEnd(e) {
    e.preventDefault();
    for (const touch of e.changedTouches) {
      if (touch.identifier === this.camera.touchId) {
        this.camera.active = false;
        this.camera.touchId = null;
        this.camera.deltaX = 0;
        this.camera.deltaY = 0;
        break;
      }
    }
  }
  
  // --- Pinch-to-Zoom ---
  
  _bindPinchZoom() {
    // Listen on the whole document for pinch gestures
    document.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        this.pinch.startDist = Math.sqrt(dx * dx + dy * dy);
        this.pinch.active = true;
      }
    }, { passive: false });
    
    document.addEventListener('touchmove', (e) => {
      if (this.pinch.active && e.touches.length === 2 && this.cameraController) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const currentDist = Math.sqrt(dx * dx + dy * dy);
        
        const scale = this.pinch.startDist / currentDist;
        const zoomSpeed = 0.15;
        
        if (scale > 1.02) {
          // Pinch in — zoom out (increase distance)
          this.cameraController.distance = Math.min(
            this.cameraController.maxDistance,
            this.cameraController.distance + zoomSpeed
          );
          this.pinch.startDist = currentDist;
        } else if (scale < 0.98) {
          // Pinch out — zoom in (decrease distance)
          this.cameraController.distance = Math.max(
            this.cameraController.minDistance,
            this.cameraController.distance - zoomSpeed
          );
          this.pinch.startDist = currentDist;
        }
      }
    }, { passive: false });
    
    document.addEventListener('touchend', (e) => {
      if (e.touches.length < 2) {
        this.pinch.active = false;
      }
    }, { passive: false });
  }
  
  // --- Analog movement vector (smoother than key thresholds) ---
  
  getMovementVector() {
    if (!this.joystick.active) return null;
    const x = this.joystick.deltaX;
    const z = this.joystick.deltaY;
    const len = Math.sqrt(x * x + z * z);
    if (len < 0.15) return { x: 0, z: 0 };
    return { x, z };
  }
  
  update() {
    // Currently no per-frame updates needed — all event-driven
  }
  
  get isActive() {
    return this.isMobile;
  }
}
