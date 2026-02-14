export class InputManager {
  constructor(domElement) {
    this.keys = {};
    this.mouseButtons = {};
    this.mouseDelta = { x: 0, y: 0 };
    this.isLocked = false;

    // Input buffer for responsive combat
    this.buffer = {};
    this.bufferDuration = 0.15; // 150ms
    
    // Heavy attack charge tracking
    this.lmbHoldTime = 0;
    this.lmbHoldStart = 0;
    this.lmbWasHeld = false;
    this.chargeThreshold = 0.4; // seconds to hold for charged attack

    this.domElement = domElement;

    // Keyboard
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
      this._bufferAction(e.code);
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    // Mouse buttons
    domElement.addEventListener('mousedown', (e) => {
      this.mouseButtons[e.button] = true;
      this._bufferAction(`mouse${e.button}`);
      
      // Track LMB hold for charged attacks
      if (e.button === 0) {
        this.lmbHoldStart = performance.now();
        this.lmbWasHeld = false;
      }
    });
    domElement.addEventListener('mouseup', (e) => {
      this.mouseButtons[e.button] = false;
      
      // Check for charged attack release
      if (e.button === 0 && this.lmbHoldStart > 0) {
        this.lmbHoldTime = (performance.now() - this.lmbHoldStart) / 1000;
        if (this.lmbHoldTime >= this.chargeThreshold) {
          this.lmbWasHeld = true;
          this._bufferAction('chargedAttack');
        }
        this.lmbHoldStart = 0;
      }
    });

    // Mouse movement
    domElement.addEventListener('mousemove', (e) => {
      if (this.isLocked) {
        this.mouseDelta.x += e.movementX;
        this.mouseDelta.y += e.movementY;
      }
    });

    // Pointer lock
    domElement.addEventListener('click', () => {
      if (!this.isLocked) {
        domElement.requestPointerLock();
      }
    });

    document.addEventListener('pointerlockchange', () => {
      this.isLocked = document.pointerLockElement === domElement;
    });

    // Prevent context menu
    domElement.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  _bufferAction(code) {
    this.buffer[code] = this.bufferDuration;
  }

  update(delta) {
    // Decay buffer using actual frame time
    const dt = delta || (1 / 60); // Fallback if no delta provided
    for (const key in this.buffer) {
      this.buffer[key] -= dt;
      if (this.buffer[key] <= 0) delete this.buffer[key];
    }
  }

  consumeBuffer(code) {
    if (this.buffer[code]) {
      delete this.buffer[code];
      return true;
    }
    return false;
  }

  getMouseDelta() {
    const delta = { x: this.mouseDelta.x, y: this.mouseDelta.y };
    this.mouseDelta.x = 0;
    this.mouseDelta.y = 0;
    return delta;
  }

  // --- Helpers ---
  get moveForward() { return this.keys['KeyW']; }
  get moveBack() { return this.keys['KeyS']; }
  get moveLeft() { return this.keys['KeyA']; }
  get moveRight() { return this.keys['KeyD']; }
  get dodge() { return this.consumeBuffer('Space'); }
  get lightAttack() { return this.consumeBuffer('mouse0'); }
  get heavyAttack() { return this.consumeBuffer('mouse2'); }
  get block() { return this.keys['ShiftLeft'] || this.keys['ShiftRight']; }
  get lockOn() { return this.consumeBuffer('KeyQ'); }
  get interact() { return this.consumeBuffer('KeyE'); }
  
  // --- Ability Inputs ---
  get dashAbility() { return this.consumeBuffer('KeyR'); }
  get parryAbility() { return this.consumeBuffer('KeyF'); }
  get warCryAbility() { return this.consumeBuffer('KeyG'); }
  get chargedAttack() { return this.consumeBuffer('chargedAttack'); }
  
  // --- Potion Hotkeys (hold Ctrl + 1/2/3 for potions, plain 1-4 for weapons) ---
  get useHealthPotion() { return (this.keys['ControlLeft'] || this.keys['ControlRight']) && this.consumeBuffer('Digit1'); }
  get useStaminaPotion() { return (this.keys['ControlLeft'] || this.keys['ControlRight']) && this.consumeBuffer('Digit2'); }
  get useManaPotion() { return (this.keys['ControlLeft'] || this.keys['ControlRight']) && this.consumeBuffer('Digit3'); }
  
  // --- Weapon Switching ---
  get cycleWeapon() { return this.consumeBuffer('KeyQ') || this.consumeBuffer('Tab'); }
  get weaponSlot1() { return this.consumeBuffer('Digit1'); }
  get weaponSlot2() { return this.consumeBuffer('Digit2'); }
  get weaponSlot3() { return this.consumeBuffer('Digit3'); }
  get weaponSlot4() { return this.consumeBuffer('Digit4'); }
  
  // Check if weapon slot keys should be consumed (not in inventory)
  get weaponSlotsActive() { return true; }
  
  // --- Equipment/Inventory UI ---
  get openEquipment() { return this.consumeBuffer('KeyI'); }
  
  // Check if LMB is being held (for charge indicator)
  get isChargingAttack() { 
    return this.mouseButtons[0] && this.lmbHoldStart > 0; 
  }
  
  // Get current charge progress (0-1)
  getChargeProgress() {
    if (!this.isChargingAttack) return 0;
    const elapsed = (performance.now() - this.lmbHoldStart) / 1000;
    return Math.min(1, elapsed / this.chargeThreshold);
  }

  getMovementVector() {
    let x = 0, z = 0;
    if (this.moveForward) z -= 1;
    if (this.moveBack) z += 1;
    if (this.moveLeft) x -= 1;
    if (this.moveRight) x += 1;
    const len = Math.sqrt(x * x + z * z);
    if (len > 0) { x /= len; z /= len; }
    return { x, z };
  }
}
