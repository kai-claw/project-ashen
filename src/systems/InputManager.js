export class InputManager {
  constructor(domElement) {
    this.keys = {};
    this.mouseButtons = {};
    this.mouseDelta = { x: 0, y: 0 };
    this.isLocked = false;

    // Input buffer for responsive combat
    this.buffer = {};
    this.bufferDuration = 0.15; // 150ms

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
    });
    domElement.addEventListener('mouseup', (e) => {
      this.mouseButtons[e.button] = false;
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
