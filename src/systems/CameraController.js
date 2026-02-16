import * as THREE from 'three';

export class CameraController {
  constructor(camera, target, inputManager) {
    this.camera = camera;
    this.target = target;
    this.input = inputManager;

    this.distance = 6;
    this.minDistance = 3;
    this.maxDistance = 12;
    this.height = 2.5;
    this.sensitivity = 0.002;

    this.yaw = 0;
    this.pitch = 0.3;
    this.minPitch = -0.5;
    this.maxPitch = 1.2;

    this.smoothing = 8;
    // Initialize currentPos to camera's starting position to prevent jump on first frame
    this.currentPos = camera.position.clone();
    this.lockOnTarget = null;
    
    // Terrain reference for height clamping (set via setTerrain)
    this.terrain = null;
    
    // Skip lerp on first frame to prevent spawning inside terrain
    this._firstFrame = true;
    this._terrainClampOffset = 15;      // Per task spec: camera offset above terrain
    this._spawnSafetyFrames = 300;      // Safety frames for terrain clamping
    
    // FIX (P0 TERRAIN SPAWN): Initialize all spawn safety variables
    // These were being referenced but never initialized, causing safety logic to fail
    // Terrain heightScale is 25, so max terrain is ~25. Safety values must be above this.
    this._isAutostart = (typeof window !== 'undefined' && window.AUTOSTART_MODE === true);
    this._spawnStartTime = Date.now();
    this._minimumSafetyMs = this._isAutostart ? 5000 : 1000;  // 5 sec for autostart (longer for chunk loading)
    this._terrainReadyFrames = 0;
    this._terrainConfirmedReady = false;
    this._minCameraY = this._isAutostart ? 120 : 30;  // Much higher minimum for autostart mode (terrain max is ~25)
    
    // Smooth lock-on transition
    this.lockOnYaw = 0;
    this.lockOnTransition = 0; // 0 = free camera, 1 = fully locked
    this.lockOnTransitionSpeed = 5; // How fast we transition to/from lock-on
    
    // Camera shake system
    this.shakeIntensity = 0;
    this.shakeDuration = 0;
    this.shakeTimer = 0;
    this.shakeOffset = new THREE.Vector3();
    this.shakeDecay = 0.92; // How fast shake fades
  }
  
  // Trigger camera shake
  shake(intensity = 0.3, duration = 0.15) {
    // Stack shakes but cap intensity
    this.shakeIntensity = Math.min(this.shakeIntensity + intensity, 1.0);
    this.shakeDuration = Math.max(this.shakeDuration, duration);
    this.shakeTimer = 0;
  }
  
  // Light shake for regular hits
  shakeLight() {
    this.shake(0.15, 0.1);
  }
  
  // Medium shake for heavy attacks
  shakeMedium() {
    this.shake(0.35, 0.15);
  }
  
  // Heavy shake for taking damage
  shakeHeavy() {
    this.shake(0.5, 0.2);
  }

  update(delta) {
    // Mouse look
    const mouseDelta = this.input.getMouseDelta();
    this.yaw -= mouseDelta.x * this.sensitivity;
    this.pitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.pitch + mouseDelta.y * this.sensitivity));

    // Calculate desired position
    const targetPos = this.target.position.clone();
    targetPos.y += this.height;

    // Smooth transition for lock-on
    if (this.lockOnTarget && this.lockOnTarget.mesh) {
      // Check if target is still valid (alive and in range)
      const enemyPos = this.lockOnTarget.mesh.position;
      const dist = this.target.position.distanceTo(enemyPos);
      
      if (this.lockOnTarget.isDead || dist > 25) {
        // Target invalid - unlock
        this.lockOnTarget = null;
        this.lockOnTransition = Math.max(0, this.lockOnTransition - this.lockOnTransitionSpeed * delta);
      } else {
        // Update target yaw angle for smooth camera
        const toEnemy = new THREE.Vector3().subVectors(enemyPos, targetPos);
        toEnemy.y = 0;
        this.lockOnYaw = Math.atan2(toEnemy.x, toEnemy.z) + Math.PI; // Behind player, facing enemy
        
        // Transition towards locked state
        this.lockOnTransition = Math.min(1, this.lockOnTransition + this.lockOnTransitionSpeed * delta);
      }
    } else {
      // Transition away from locked state
      this.lockOnTransition = Math.max(0, this.lockOnTransition - this.lockOnTransitionSpeed * delta);
    }

    // Blend between free camera yaw and lock-on yaw
    let effectiveYaw = this.yaw;
    if (this.lockOnTransition > 0) {
      // Smooth angle interpolation (handle wrapping)
      let angleDiff = this.lockOnYaw - this.yaw;
      while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
      while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
      effectiveYaw = this.yaw + angleDiff * this.lockOnTransition;
    }

    // Calculate camera offset with blended yaw
    const offsetX = Math.sin(effectiveYaw) * this.distance * Math.cos(this.pitch);
    const offsetZ = Math.cos(effectiveYaw) * this.distance * Math.cos(this.pitch);
    const offsetY = this.distance * Math.sin(this.pitch);

    const desiredPos = new THREE.Vector3(
      targetPos.x + offsetX,
      targetPos.y + offsetY,
      targetPos.z + offsetZ
    );

    // On first frame, snap directly to desired position (no lerp)
    // This prevents camera spawning inside terrain due to lerp from bad initial position
    if (this._firstFrame) {
      this._firstFrame = false;
      this.currentPos.copy(desiredPos);
    } else {
      // Smooth follow with lerp
      this.currentPos.lerp(desiredPos, this.smoothing * delta);
    }
    
    // CRITICAL: Clamp camera above terrain AFTER lerp
    // This is the final safety check that prevents "green blob" bug
    this.clampToTerrain();
    
    // Apply camera shake
    this._updateShake(delta);
    
    this.camera.position.copy(this.currentPos);
    this.camera.position.add(this.shakeOffset);

    // Look at target - blend between player and enemy
    const lookTarget = targetPos.clone();
    if (this.lockOnTarget && this.lockOnTarget.mesh && this.lockOnTransition > 0) {
      const enemyLookPos = this.lockOnTarget.mesh.position.clone();
      enemyLookPos.y += 1; // Look at enemy center mass
      lookTarget.lerp(enemyLookPos, 0.35 * this.lockOnTransition);
    }
    this.camera.lookAt(lookTarget);
  }
  
  _updateShake(delta) {
    if (this.shakeIntensity > 0.001) {
      // Random shake offset based on intensity
      this.shakeOffset.set(
        (Math.random() - 0.5) * 2 * this.shakeIntensity,
        (Math.random() - 0.5) * 2 * this.shakeIntensity,
        (Math.random() - 0.5) * 2 * this.shakeIntensity
      );
      
      // Decay shake
      this.shakeIntensity *= this.shakeDecay;
      this.shakeTimer += delta;
      
      // End shake
      if (this.shakeTimer >= this.shakeDuration) {
        this.shakeIntensity = 0;
        this.shakeOffset.set(0, 0, 0);
      }
    } else {
      this.shakeOffset.set(0, 0, 0);
    }
  }

  setLockOnTarget(target) {
    this.lockOnTarget = target;
    // If setting new target, sync yaw to current effective yaw to prevent snap
    if (target && target.mesh) {
      const targetPos = this.target.position.clone();
      targetPos.y += this.height;
      const toEnemy = new THREE.Vector3().subVectors(target.mesh.position, targetPos);
      toEnemy.y = 0;
      this.lockOnYaw = Math.atan2(toEnemy.x, toEnemy.z) + Math.PI;
    }
  }
  
  isLockedOn() {
    return this.lockOnTarget !== null && this.lockOnTransition > 0.5;
  }
  
  clearLockOn() {
    this.lockOnTarget = null;
    // Don't reset transition - let it smoothly return to free camera
  }
  
  /**
   * Set terrain reference for camera height clamping
   * This prevents camera from going inside terrain mesh
   */
  setTerrain(terrain) {
    this.terrain = terrain;
  }
  
  /**
   * Ensure camera position is above terrain.
   * Uses terrain height + offset (default 15 units, MUCH higher during spawn safety).
   * CRITICAL: This prevents the "green blob" bug where camera renders inside terrain.
   * 
   * Per task spec: Use TerrainManager.getHeightAt(x,z) + offset for safe height.
   * If terrain isn't ready, use safe default (y=50).
   */
  clampToTerrain() {
    // Use cached autostart flag for performance
    const isAutostart = this._isAutostart;
    
    // FIX (P0): Use BOTH frame count AND time-based safety
    const timeSinceSpawn = Date.now() - this._spawnStartTime;
    const inTimeSafety = timeSinceSpawn < this._minimumSafetyMs;
    
    // Track spawn safety frames
    const inSpawnSafety = this._spawnSafetyFrames > 0 || inTimeSafety;
    if (this._spawnSafetyFrames > 0) {
      this._spawnSafetyFrames--;
    }
    
    // P0 GREEN BLOB FIX: Use conservative minimum camera height
    // Terrain heightScale is 25, so max terrain is ~25. Camera must stay well above this.
    // In autostart mode, use higher values and transition more slowly to normal gameplay.
    const safetyProgress = inTimeSafety ? 0 : Math.min(1, (timeSinceSpawn - this._minimumSafetyMs) / 15000);
    let absoluteMinY = this._minCameraY || (isAutostart ? 120 : 30);
    
    // In autostart mode, use high minimum that decreases as terrain is confirmed
    if (isAutostart && (!this._terrainConfirmedReady || inTimeSafety)) {
      // Keep at very safe level until terrain proves reliable
      // This ensures camera is ALWAYS above terrain during initial load
      absoluteMinY = 120;  // Well above max terrain of ~25
    } else if (isAutostart && this._terrainConfirmedReady && inSpawnSafety) {
      // Gradually lower minimum as spawn safety winds down (smooth descent to normal gameplay)
      absoluteMinY = Math.max(60, 120 * (1 - safetyProgress)); // Descend from 120 to 60 over 15 seconds
    }
    
    if (this.currentPos.y < absoluteMinY) {
      this.currentPos.y = absoluteMinY;
    }
    
    // If no terrain, use fallback height
    // P0 GREEN BLOB FIX: Conservative fallback - terrain max is ~25
    const fallbackY = isAutostart ? (inTimeSafety ? 120 : 80) : 50;
    if (!this.terrain) {
      this._terrainReadyFrames = 0;
      if (this.currentPos.y < fallbackY) {
        this.currentPos.y = fallbackY;
      }
      return;
    }
    
    // Per task spec: use TerrainManager.getHeightAt(x,z)
    const getHeight = this.terrain.getHeightAt || this.terrain.getTerrainHeight;
    if (!getHeight) {
      this._terrainReadyFrames = 0;
      if (this.currentPos.y < fallbackY) {
        this.currentPos.y = fallbackY;
      }
      return;
    }
    
    const terrainY = getHeight.call(this.terrain, this.currentPos.x, this.currentPos.z);
    
    // If terrain returns invalid value, use fallback and reset terrain ready counter
    if (isNaN(terrainY) || !isFinite(terrainY) || terrainY < -100) {
      this._terrainReadyFrames = 0;
      if (this.currentPos.y < fallbackY) {
        this.currentPos.y = fallbackY;
      }
      return;
    }
    
    // Track consecutive frames with valid terrain height
    // Only mark terrain as confirmed ready after 60 consecutive valid frames (~1 second)
    this._terrainReadyFrames++;
    if (this._terrainReadyFrames >= 60 && !this._terrainConfirmedReady) {
      this._terrainConfirmedReady = true;
      console.log(`[CameraController] Terrain confirmed ready after ${this._terrainReadyFrames} frames${isAutostart ? ' [AUTOSTART]' : ''}`);
    }
    
    // P0 GREEN BLOB FIX: Use conservative offset during spawn safety
    // Terrain max is ~25 (heightScale). Camera needs to be well above terrain surface.
    // Per task spec: terrain height + 5 for player, using 15+ for camera
    let offset;
    if (inSpawnSafety) {
      if (isAutostart && (!this._terrainConfirmedReady || inTimeSafety)) {
        // Before terrain is confirmed OR within time safety, use high offset
        offset = 60; // Terrain max is ~25, so 60 gives very safe margin
      } else if (isAutostart) {
        // After terrain confirmed and time elapsed, gradually reduce offset
        offset = Math.max(25, 60 * (1 - safetyProgress)); // From 60 to 25
      } else {
        offset = Math.max(this._terrainClampOffset, 25);
      }
    } else {
      offset = this._terrainClampOffset || 15;
    }
    const minY = Math.max(terrainY + offset, absoluteMinY);
    
    if (this.currentPos.y < minY) {
      if (inSpawnSafety && this._spawnSafetyFrames % 60 === 0) {
        // Log only every second to reduce spam
        console.warn(`[CameraController] Camera below safe height (${this.currentPos.y.toFixed(2)} < ${minY.toFixed(2)}), correcting. TerrainY=${terrainY.toFixed(2)}, offset=${offset.toFixed(0)}${isAutostart ? ' [AUTOSTART]' : ''}`);
      }
      this.currentPos.y = minY;
    }
  }
  
  /**
   * Force camera to specific position (bypasses lerp)
   * Use for spawn/teleport scenarios
   */
  forcePosition(x, y, z) {
    this.currentPos.set(x, y, z);
    this.camera.position.set(x, y, z);
    this._firstFrame = false; // Already positioned
  }

  getForwardDirection() {
    return new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)).normalize();
  }

  getRightDirection() {
    return new THREE.Vector3(-Math.cos(this.yaw), 0, Math.sin(this.yaw)).normalize();
  }
}
