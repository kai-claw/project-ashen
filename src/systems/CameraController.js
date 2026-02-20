import * as THREE from 'three';

export class CameraController {
  constructor(camera, target, inputManager) {
    this.camera = camera;
    this.target = target;
    this.input = inputManager;

    this.distance = 14;        // Was 6 — matches working camera override (sqrt(8²+12²)≈14)
    this.minDistance = 6;
    this.maxDistance = 20;
    this.height = 1;           // Was 2.5 — lookAt target is player.y + 1 (matches override)
    this.sensitivity = 0.002;

    this.yaw = 0;
    this.pitch = 0.53;         // Was 0.3 — atan(7/12)≈0.53 rad matches override's +8Y/+12Z
    this.minPitch = -0.3;
    this.maxPitch = 1.2;

    this.smoothing = 8;
    // Initialize currentPos to camera's starting position to prevent jump on first frame
    this.currentPos = camera.position.clone();
    this.lockOnTarget = null;
    
    // Terrain reference for height clamping (set via setTerrain)
    this.terrain = null;
    
    // Skip lerp on first frame to prevent spawning inside terrain
    this._firstFrame = true;
    
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
   * Ensure camera position is above terrain to prevent seeing through ground.
   */
  clampToTerrain() {
    if (!this.terrain) return;
    
    const getHeight = this.terrain.getHeightAt || this.terrain.getTerrainHeight;
    if (!getHeight) return;
    
    const terrainY = getHeight.call(this.terrain, this.currentPos.x, this.currentPos.z);
    if (isNaN(terrainY) || !isFinite(terrainY)) return;
    
    // Camera must be at least 2 units above terrain at its position
    const minCamY = terrainY + 2;
    if (this.currentPos.y < minCamY) {
      this.currentPos.y = minCamY;
    }
  }
  
  /**
   * Force camera to specific position (bypasses lerp)
   * Use for spawn/teleport scenarios
   */
  forcePosition(x, y, z) {
    this.currentPos.set(x, y, z);
    this.camera.position.set(x, y, z);
    // Keep _firstFrame = true so the next update() snaps to desiredPos
    // (player may have moved since forcePosition was called)
  }

  getForwardDirection() {
    return new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)).normalize();
  }

  getRightDirection() {
    return new THREE.Vector3(-Math.cos(this.yaw), 0, Math.sin(this.yaw)).normalize();
  }
}
