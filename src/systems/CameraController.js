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
    // FIX (P0): Using EXTREMELY high values to absolutely prevent green blob bug
    // Camera will start very high and gradually descend once terrain safety is confirmed
    // These values must be high enough that camera NEVER renders inside terrain
    this._terrainClampOffset = isAutostart ? 250 : 15;  // EXTREMELY high in autostart mode for green blob fix
    this._spawnSafetyFrames = isAutostart ? 1800 : 300; // 30 seconds safety in autostart mode (1800 frames @ 60fps)
    this._minCameraY = isAutostart ? 400 : 30;          // EXTREMELY high minimum in autostart mode (400)
    this._isAutostart = isAutostart;                     // Cache for use in update
    this._terrainConfirmedReady = false;                // Track when terrain returns valid heights consistently
    this._terrainReadyFrames = 0;                       // Count consecutive frames with valid terrain height
    
    // FIX (P0 GREEN BLOB): Store initial camera Y as an ABSOLUTE floor during spawn safety
    // In autostart mode, camera MUST stay at this height until terrain is confirmed
    // This prevents ANY descent that could put camera inside terrain
    this._initialCamY = isAutostart ? camera.position.y : null;
    this._lockToInitialY = isAutostart;  // Lock camera to initial Y until terrain is ready
    
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
    // FIX (P0 GREEN BLOB): In autostart mode during spawn safety, LOCK camera to initial high position
    // This is the PRIMARY defense against the green blob bug - do NOT descend until terrain is proven safe
    if (this._lockToInitialY && this._initialCamY !== null && this._spawnSafetyFrames > 0) {
      // During lock period, keep camera at initial Y regardless of player position
      // Only allow X/Z movement to follow player, Y stays locked
      const targetPos = this.target.position.clone();
      
      // Calculate X/Z offset from player (for orbit camera)
      const offsetX = Math.sin(this.yaw) * this.distance * Math.cos(this.pitch);
      const offsetZ = Math.cos(this.yaw) * this.distance * Math.cos(this.pitch);
      
      // Lock Y to initial position - do NOT calculate based on player Y
      this.currentPos.x = targetPos.x + offsetX;
      this.currentPos.z = targetPos.z + offsetZ;
      this.currentPos.y = this._initialCamY;  // LOCKED to initial high Y
      
      // Update camera position
      this.camera.position.copy(this.currentPos);
      
      // Look at player but from high position
      this.camera.lookAt(targetPos.x, targetPos.y + this.height, targetPos.z);
      
      // Process mouse look
      const mouseDelta = this.input.getMouseDelta();
      this.yaw -= mouseDelta.x * this.sensitivity;
      this.pitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.pitch + mouseDelta.y * this.sensitivity));
      
      // Check if terrain is ready - only unlock after 120+ frames of valid terrain
      if (this.terrain) {
        const getHeight = this.terrain.getHeightAt || this.terrain.getTerrainHeight;
        if (getHeight) {
          const terrainY = getHeight.call(this.terrain, this.currentPos.x, this.currentPos.z);
          if (!isNaN(terrainY) && isFinite(terrainY) && terrainY > -100) {
            this._terrainReadyFrames++;
            // After 120 consecutive valid frames (~2 seconds), allow gradual descent
            if (this._terrainReadyFrames >= 120) {
              this._lockToInitialY = false;
              this._terrainConfirmedReady = true;
              console.log('[CameraController] Terrain confirmed - unlocking camera Y');
            }
          } else {
            this._terrainReadyFrames = 0;  // Reset counter on invalid terrain
          }
        }
      }
      
      this._spawnSafetyFrames--;
      return;  // Skip normal camera update during Y-lock period
    }
    
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
    // Use cached autostart flag for performance
    const isAutostart = this._isAutostart;
    
    // Track spawn safety frames
    const inSpawnSafety = this._spawnSafetyFrames > 0;
    if (inSpawnSafety) {
      this._spawnSafetyFrames--;
    }
    
    // CRITICAL: Always enforce absolute minimum camera Y
    // Use MUCH higher minimum in autostart mode to prevent green blob bug
    // The bug occurs when camera is inside terrain mesh - we need conservative values
    // FIX: Using 250+ as minimum to absolutely guarantee camera is above terrain in autostart
    let absoluteMinY = this._minCameraY || (isAutostart ? 250 : 30);
    
    // In autostart mode, only gradually lower minimum once terrain is confirmed working
    // This prevents the green blob bug where camera descends before terrain is ready
    if (isAutostart && !this._terrainConfirmedReady) {
      // Keep minimum VERY high until terrain proves reliable
      absoluteMinY = 250;
    } else if (isAutostart && this._terrainConfirmedReady && inSpawnSafety) {
      // Gradually lower minimum as spawn safety winds down (smooth descent)
      const progress = 1 - (this._spawnSafetyFrames / 1800);
      absoluteMinY = 250 - (progress * 200); // Descend from 250 to 50 over spawn safety period
      absoluteMinY = Math.max(absoluteMinY, 50);
    }
    
    if (this.currentPos.y < absoluteMinY) {
      this.currentPos.y = absoluteMinY;
    }
    
    // If no terrain, use fallback height (especially important during spawn safety)
    const fallbackY = isAutostart ? 250 : 50;
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
    
    // Use EXTREMELY high offset during spawn safety to GUARANTEE camera is above terrain
    // During normal gameplay, use standard offset (still 15 units for safety)
    // Per task spec: terrain height + 5 for player, using 15+ for camera to ensure visibility
    // In autostart mode, use EXTREMELY HIGH offsets to absolutely prevent green blob bug
    // FIX: Using 150+ during spawn safety to guarantee no terrain clipping
    let offset;
    if (inSpawnSafety) {
      if (isAutostart && !this._terrainConfirmedReady) {
        // Before terrain is confirmed, use MAXIMUM offset
        offset = 200;
      } else if (isAutostart) {
        // After terrain confirmed, gradually reduce offset
        const progress = 1 - (this._spawnSafetyFrames / 1800);
        offset = 200 - (progress * 185); // From 200 to 15
        offset = Math.max(offset, 15);
      } else {
        offset = Math.max(this._terrainClampOffset, 20);
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
