/**
 * TouchControls — Mobile touch input overlay for Project Ashen
 * Virtual joystick (left), action buttons (right), swipe camera (right area)
 * Auto-shows on touch devices, hidden on desktop.
 */
export class TouchControls {
  constructor(inputManager) {
    this.inputManager = inputManager;
    this.isMobile = this._detectMobile();
    
    // Joystick state
    this.joystick = { active: false, startX: 0, startY: 0, deltaX: 0, deltaY: 0, touchId: null };
    
    // Camera state  
    this.camera = { active: false, startX: 0, startY: 0, deltaX: 0, deltaY: 0, touchId: null };
    
    // Button states
    this.buttons = { attack: false, dodge: false, block: false, interact: false };
    
    // DOM elements
    this.container = null;
    this.joystickBase = null;
    this.joystickKnob = null;
    
    if (this.isMobile) {
      this._createUI();
      this._bindTouchEvents();
    }
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
      hud.style.transform = 'scale(0.8)';
      hud.style.transformOrigin = 'top left';
    }
    
    // Hide keyboard controls hint
    const hint = document.getElementById('controls-hint');
    if (hint) hint.style.display = 'none';
    
    // Hide crosshair on mobile
    const crosshair = document.getElementById('crosshair');
    if (crosshair) crosshair.style.display = 'none';
    
    // Prevent default touch behaviors on canvas
    const canvas = document.querySelector('canvas');
    if (canvas) {
      canvas.style.touchAction = 'none';
    }
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
        }
      }, { passive: false });
      
      btn.addEventListener('touchcancel', (e) => {
        this.buttons[action] = false;
        btn.style.background = 'rgba(10, 10, 15, 0.55)';
        btn.style.boxShadow = '0 0 12px rgba(218, 165, 32, 0.15)';
        
        if (action === 'block') {
          this.inputManager.keys['ShiftLeft'] = false;
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
