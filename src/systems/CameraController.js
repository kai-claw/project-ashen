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
    
    // Check for autostart mode - need MUCH higher safety values to prevent green blob bug
    const isAutostart = typeof window !== 'undefined' && window.AUTOSTART_MODE === true;
    
    // Skip lerp on first frame to prevent spawning inside terrain
    this._firstFrame = true;
    this._terrainClampOffset = isAutostart ? 40 : 15;   // MUCH higher in autostart mode
    this._spawnSafetyFrames = isAutostart ? 600 : 300;  // 10 seconds safety in autostart mode
    this._minCameraY = isAutostart ? 80 : 30;           // MUCH higher minimum in autostart mode
    
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
    // SPAWN SAFETY: For first N frames, clamp target above terrain before ANY calculations
    // This prevents the "green blob" bug where camera spawns inside terrain mesh
    if (this._spawnSafetyFrames > 0 && this.terrain) {
      const getHeight = this.terrain.getHeightAt || this.terrain.getTerrainHeight;
      if (getHeight) {
        const targetTerrainY = getHeight.call(this.terrain, this.target.position.x, this.target.position.z);
        if (!isNaN(targetTerrainY) && isFinite(targetTerrainY) && targetTerrainY > -100) {
          const minTargetY = targetTerrainY + 5; // Player should be 5 units above terrain
          if (this.target.position.y < minTargetY) {
            this.target.position.y = minTargetY;
          }
        }
      }
    }
    
    // Mouse look (always process, even when locked - allows some camera adjustment)
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
    // Check if we're in autostart mode for extra aggressive safety
    const isAutostart = typeof window !== 'undefined' && window.AUTOSTART_MODE === true;
    
    // Track spawn safety frames
    const inSpawnSafety = this._spawnSafetyFrames > 0;
    if (inSpawnSafety) {
      this._spawnSafetyFrames--;
    }
    
    // CRITICAL: Always enforce absolute minimum camera Y
    // Use MUCH higher minimum in autostart mode to prevent green blob bug
    // The bug occurs when camera is inside terrain mesh - we need conservative values
    const absoluteMinY = this._minCameraY || (isAutostart ? 80 : 30);
    if (this.currentPos.y < absoluteMinY) {
      this.currentPos.y = absoluteMinY;
    }
    
    // If no terrain, use fallback height (especially important during spawn safety)
    const fallbackY = isAutostart ? 100 : 50;
    if (!this.terrain) {
      if (this.currentPos.y < fallbackY) {
        this.currentPos.y = fallbackY;
      }
      return;
    }
    
    // Per task spec: use TerrainManager.getHeightAt(x,z)
    const getHeight = this.terrain.getHeightAt || this.terrain.getTerrainHeight;
    if (!getHeight) {
      if (this.currentPos.y < fallbackY) {
        this.currentPos.y = fallbackY;
      }
      return;
    }
    
    const terrainY = getHeight.call(this.terrain, this.currentPos.x, this.currentPos.z);
    
    // If terrain returns invalid value, use fallback
    if (isNaN(terrainY) || !isFinite(terrainY) || terrainY < -100) {
      if (this.currentPos.y < fallbackY) {
        this.currentPos.y = fallbackY;
      }
      return;
    }
    
    // Use MUCH higher offset during spawn safety to GUARANTEE camera is above terrain
    // During normal gameplay, use standard offset (still 15 units for safety)
    // Per task spec: terrain height + 5 for player, using 15+ for camera to ensure visibility
    // In autostart mode, use VERY HIGH offsets to absolutely prevent green blob bug
    let offset;
    if (inSpawnSafety) {
      offset = isAutostart ? Math.max(this._terrainClampOffset, 50) : Math.max(this._terrainClampOffset, 20);
    } else {
      offset = isAutostart ? 35 : this._terrainClampOffset;
    }
    const minY = Math.max(terrainY + offset, absoluteMinY);
    
    if (this.currentPos.y < minY) {
      if (inSpawnSafety) {
        console.warn(`[CameraController] Camera below terrain + offset (${this.currentPos.y.toFixed(2)} < ${minY.toFixed(2)}), correcting${isAutostart ? ' [AUTOSTART]' : ''}`);
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
