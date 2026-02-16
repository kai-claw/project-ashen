import * as THREE from 'three';
import { AssetManager } from '../systems/AssetManager.js';

const STATES = {
  IDLE: 'idle',
  MOVING: 'moving',
  DODGING: 'dodging',
  ATTACKING: 'attacking',
  HEAVY_ATTACKING: 'heavy_attacking',
  BLOCKING: 'blocking',
  STAGGERED: 'staggered',
  DEAD: 'dead',
  // Ability states
  DASHING: 'dashing',
  CHARGING: 'charging',
  CHARGED_ATTACKING: 'charged_attacking',
  PARRYING: 'parrying',
  WAR_CRYING: 'war_crying',
};

const COSTS = {
  dodge: 20,
  lightAttack: 15,
  heavyAttack: 30,
};

const TIMINGS = {
  dodgeDuration: 0.45,
  dodgeIframes: 0.3,
  // IMPROVED ATTACK TIMINGS - snappier with better anticipation/recovery
  lightAttackDuration: 0.35,     // Slightly faster overall
  heavyAttackDuration: 0.65,    // Slightly faster, still weighty
  lightHitStart: 0.06,          // Earlier hit window - snappy
  lightHitEnd: 0.18,            // Short hit window
  heavyHitStart: 0.15,          // Wind-up before hit
  heavyHitEnd: 0.35,            // Longer active frames
  staggerDuration: 0.8,
  comboWindow: 0.12,            // Tighter combo window for skill
  // Ability timings
  dashDuration: 0.25,
  dashIframes: 0.2,
  parryWindow: 0.15, // Perfect parry window
  parryDuration: 0.35,
  chargedAttackDuration: 0.9,
  chargedHitStart: 0.25,
  chargedHitEnd: 0.5,
  warCryDuration: 0.8,
};

// Animation name mapping for robot_expressive.glb
const ANIM_MAP = {
  [STATES.IDLE]: 'Idle',
  [STATES.MOVING]: 'Walking',
  [STATES.DODGING]: 'Jump',
  [STATES.ATTACKING]: 'Punch',
  [STATES.HEAVY_ATTACKING]: 'Punch',
  [STATES.BLOCKING]: 'Idle', // Use idle with modified pose
  [STATES.STAGGERED]: 'No',
  [STATES.DEAD]: 'Death',
  // Ability animations (reusing existing)
  [STATES.DASHING]: 'Jump',
  [STATES.CHARGING]: 'Idle',
  [STATES.CHARGED_ATTACKING]: 'Punch',
  [STATES.PARRYING]: 'Idle',
  [STATES.WAR_CRYING]: 'ThumbsUp',
};

export class Player {
  constructor(scene, gameManager, inputManager) {
    this.scene = scene;
    this.gm = gameManager;
    this.input = inputManager;
    this.cameraController = null;
    this.world = null; // Set by GameManager after world is created

    this.state = STATES.IDLE;
    this.stateTimer = 0;
    this.isInvincible = false;
    this.attackCombo = 0;
    this.hitThisSwing = false;

    // Physics
    this.velocity = new THREE.Vector3();
    this.moveSpeed = 6;
    this.dodgeSpeed = 14;
    this.gravity = -30;
    this.grounded = true;
    this.collisionRadius = 0.4;
    
    // Movement smoothing
    this.currentMoveVelocity = new THREE.Vector3();
    this.moveAcceleration = 35;
    this.moveDeceleration = 25;
    
    // Dodge visual effect tracking
    this.dodgeGhostMeshes = [];
    this.lastGhostSpawnTime = 0;
    this.ghostSpawnInterval = 0.05;
    
    // Spawn safety tracking (fixes autostart terrain bug - "green blob" issue)
    // Extended to 3600 frames (~60 seconds) for reliable terrain loading in autostart mode
    // Check for autostart mode and use higher safety
    // FIX (P0): Increased safety frames to 3600 to ensure terrain mesh is FULLY rendered
    // The green blob bug occurs when player/camera descend before terrain mesh appears
    const isAutostart = typeof window !== 'undefined' && window.AUTOSTART_MODE === true;
    this._spawnSafetyFrames = isAutostart ? 3600 : 120;
    
    // Ability states
    this.dashDir = new THREE.Vector3();
    this.dashSpeed = 18;
    this.parrySuccessful = false;
    this.chargeProgress = 0;
    this.chargedDamage = 60; // Base charged attack damage
    this.chargedPostureDmg = 40;

    // Directions
    this.moveDir = new THREE.Vector3();
    this.dodgeDir = new THREE.Vector3();
    this.facingAngle = 0;

    // GLTF model state
    this.modelLoaded = false;
    this.animSystem = null;
    this.currentAnim = null;
    this.gltfModel = null;

    // Create mesh container
    // Initial position uses fallback height - will be adjusted by _ensureSafeSpawnHeight()
    // when world is set, or by main.js IIFE before first render.
    // CRITICAL: In autostart mode, use EXTREMELY HIGH initial Y to prevent green blob bug
    // FIX (P0): Using 800 to ensure player starts well above any terrain
    // Must be high enough that camera (at player.y + offset) is also safe
    // Camera starts at 1500, so player should be at 800+ to maintain good viewing angle
    this.mesh = new THREE.Group();
    const initialY = isAutostart ? 800 : 50;  // EXTREMELY high in autostart mode (800)
    this.mesh.position.set(0, initialY, 5);

    // Create fallback primitive mesh (visible while GLTF loads)
    this._createFallbackMesh();

    // Hitbox stats
    this.attackRange = 2.0;
    this.lightDamage = 15;
    this.heavyDamage = 35;
    this.lightPostureDmg = 10;
    this.heavyPostureDmg = 25;

    scene.add(this.mesh);

    // Load GLTF model asynchronously
    this._loadGLTFModel();
  }

  _createFallbackMesh() {
    // Complete humanoid placeholder while model loads
    const armorMat = new THREE.MeshBasicMaterial({
      color: 0x5a5a68,
      roughness: 0.35,
      metalness: 0.85,
    });
    
    // Darker material for joints/extremities (feet, etc.)
    const jointMat = new THREE.MeshBasicMaterial({
      color: 0x3a3a45,
      roughness: 0.4,
      metalness: 0.8,
    });
    
    // Brighter gauntlet material for hands - visible in dark areas
    const gauntletMat = new THREE.MeshBasicMaterial({
      color: 0x7a7a8c,        // Brighter than armor
      roughness: 0.3,
      metalness: 0.9,
      emissive: 0x1a1a22,     // Subtle glow for visibility
      emissiveIntensity: 0.4,
    });

    // Body capsule (torso)
    const bodyGeo = new THREE.CapsuleGeometry(0.35, 0.6, 8, 16);
    this.fallbackBody = new THREE.Mesh(bodyGeo, armorMat);
    this.fallbackBody.position.y = 1.1;
    this.fallbackBody.castShadow = true;
    this.mesh.add(this.fallbackBody);

    // Head
    const headGeo = new THREE.SphereGeometry(0.22, 16, 12);
    this.fallbackHead = new THREE.Mesh(headGeo, armorMat);
    this.fallbackHead.position.y = 1.7;
    this.fallbackHead.castShadow = true;
    this.mesh.add(this.fallbackHead);

    // Glowing visor
    const visorMat = new THREE.MeshBasicMaterial({
      color: 0x66ccff,
      emissive: 0x4488cc,
      emissiveIntensity: 3,
    });
    const visorGeo = new THREE.BoxGeometry(0.2, 0.04, 0.12);
    this.visor = new THREE.Mesh(visorGeo, visorMat);
    this.visor.position.set(0, 1.68, 0.25);
    this.mesh.add(this.visor);
    
    // === ARMS ===
    const upperArmGeo = new THREE.CapsuleGeometry(0.08, 0.28, 6, 10);
    const lowerArmGeo = new THREE.CapsuleGeometry(0.07, 0.26, 6, 10);
    
    // Left upper arm
    const leftUpperArm = new THREE.Mesh(upperArmGeo, armorMat);
    leftUpperArm.position.set(-0.42, 1.25, 0);
    leftUpperArm.rotation.z = 0.2;
    leftUpperArm.castShadow = true;
    this.mesh.add(leftUpperArm);
    
    // Right upper arm
    const rightUpperArm = new THREE.Mesh(upperArmGeo, armorMat);
    rightUpperArm.position.set(0.42, 1.25, 0);
    rightUpperArm.rotation.z = -0.2;
    rightUpperArm.castShadow = true;
    this.mesh.add(rightUpperArm);
    
    // Left forearm
    const leftForearm = new THREE.Mesh(lowerArmGeo, armorMat);
    leftForearm.position.set(-0.52, 0.9, 0.05);
    leftForearm.rotation.z = 0.1;
    leftForearm.rotation.x = -0.15;
    leftForearm.castShadow = true;
    this.mesh.add(leftForearm);
    
    // Right forearm
    const rightForearm = new THREE.Mesh(lowerArmGeo, armorMat);
    rightForearm.position.set(0.52, 0.9, 0.05);
    rightForearm.rotation.z = -0.1;
    rightForearm.rotation.x = -0.15;
    rightForearm.castShadow = true;
    this.mesh.add(rightForearm);
    
    // === HANDS ===
    // Larger, more visible gauntlets with glow
    const handGeo = new THREE.BoxGeometry(0.2, 0.16, 0.26);
    const leftHand = new THREE.Mesh(handGeo, gauntletMat);
    leftHand.position.set(-0.56, 0.58, 0.1);
    leftHand.castShadow = true;
    this.mesh.add(leftHand);
    
    // Left fingers - larger finger plates
    const fingerGeo = new THREE.BoxGeometry(0.18, 0.1, 0.18);
    const leftFingers = new THREE.Mesh(fingerGeo, gauntletMat);
    leftFingers.position.set(-0.56, 0.5, 0.18);
    leftFingers.castShadow = true;
    this.mesh.add(leftFingers);
    
    // Knuckle detail for left hand
    const knuckleGeo = new THREE.BoxGeometry(0.16, 0.06, 0.06);
    const leftKnuckles = new THREE.Mesh(knuckleGeo, gauntletMat);
    leftKnuckles.position.set(-0.56, 0.54, 0.24);
    leftKnuckles.castShadow = true;
    this.mesh.add(leftKnuckles);
    
    // Right hand
    const rightHand = new THREE.Mesh(handGeo, gauntletMat);
    rightHand.position.set(0.56, 0.58, 0.1);
    rightHand.castShadow = true;
    this.mesh.add(rightHand);
    
    // Right fingers
    const rightFingers = new THREE.Mesh(fingerGeo, gauntletMat);
    rightFingers.position.set(0.56, 0.5, 0.18);
    rightFingers.castShadow = true;
    this.mesh.add(rightFingers);
    
    // Knuckle detail for right hand
    const rightKnuckles = new THREE.Mesh(knuckleGeo, gauntletMat);
    rightKnuckles.position.set(0.56, 0.54, 0.24);
    rightKnuckles.castShadow = true;
    this.mesh.add(rightKnuckles);
    
    // Store hand references for weapon positioning
    this.fallbackRightHand = rightHand;
    this.fallbackLeftHand = leftHand;
    
    // === LEGS ===
    const upperLegGeo = new THREE.CapsuleGeometry(0.1, 0.32, 6, 10);
    const lowerLegGeo = new THREE.CapsuleGeometry(0.08, 0.3, 6, 10);
    
    // Left upper leg
    const leftUpperLeg = new THREE.Mesh(upperLegGeo, armorMat);
    leftUpperLeg.position.set(-0.15, 0.55, 0);
    leftUpperLeg.castShadow = true;
    this.mesh.add(leftUpperLeg);
    
    // Right upper leg
    const rightUpperLeg = new THREE.Mesh(upperLegGeo, armorMat);
    rightUpperLeg.position.set(0.15, 0.55, 0);
    rightUpperLeg.castShadow = true;
    this.mesh.add(rightUpperLeg);
    
    // Left lower leg
    const leftLowerLeg = new THREE.Mesh(lowerLegGeo, armorMat);
    leftLowerLeg.position.set(-0.15, 0.18, 0);
    leftLowerLeg.castShadow = true;
    this.mesh.add(leftLowerLeg);
    
    // Right lower leg
    const rightLowerLeg = new THREE.Mesh(lowerLegGeo, armorMat);
    rightLowerLeg.position.set(0.15, 0.18, 0);
    rightLowerLeg.castShadow = true;
    this.mesh.add(rightLowerLeg);
    
    // === FEET ===
    // Armored boot shapes
    const footGeo = new THREE.BoxGeometry(0.12, 0.08, 0.22);
    
    // Left foot
    const leftFoot = new THREE.Mesh(footGeo, jointMat);
    leftFoot.position.set(-0.15, 0.04, 0.04);
    leftFoot.castShadow = true;
    this.mesh.add(leftFoot);
    
    // Right foot
    const rightFoot = new THREE.Mesh(footGeo, jointMat);
    rightFoot.position.set(0.15, 0.04, 0.04);
    rightFoot.castShadow = true;
    this.mesh.add(rightFoot);
    
    // Store all fallback parts for visibility toggling
    this.fallbackParts = [
      this.fallbackBody, this.fallbackHead, this.visor,
      leftUpperArm, rightUpperArm, leftForearm, rightForearm,
      leftHand, leftFingers, leftKnuckles, rightHand, rightFingers, rightKnuckles,
      leftUpperLeg, rightUpperLeg, leftLowerLeg, rightLowerLeg,
      leftFoot, rightFoot
    ];

    // Reference for damage flash
    this.body = this.fallbackBody;
  }

  async _loadGLTFModel() {
    try {
      const basePath = import.meta.env.BASE_URL || '/';
      const { scene: model, animations } = await AssetManager.loadModel(
        `${basePath}assets/models/robot_expressive.glb`,
        { scale: 0.8 }
      );

      // Store reference
      this.gltfModel = model;
      this.gltfModel.position.y = 0;
      this.gltfModel.rotation.y = Math.PI; // Face forward

      // Set up materials for damage flash and tone down brightness
      this.gltfModel.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          // Adjust materials for daytime scene
          if (child.material) {
            // Slight color adjustment for balance
            if (child.material.color) {
              child.material.color.multiplyScalar(0.85);  // Slight darkening only
            }
            // Remove emissive since scene is bright
            if (child.material.emissive) {
              child.material.emissive.setHex(0x000000);
              child.material.emissiveIntensity = 0;
            }
          }
          // Store original material for flash effects
          child.userData.originalMaterial = child.material.clone();
        }
      });

      // Hide all fallback meshes when GLTF loads
      if (this.fallbackParts) {
        this.fallbackParts.forEach(part => {
          if (part) part.visible = false;
        });
      }

      // Add GLTF model to mesh group
      this.mesh.add(this.gltfModel);

      // Set up animation system
      if (animations && animations.length > 0) {
        this.animSystem = AssetManager.createAnimationSystem(this.gltfModel, animations);
        // Play idle animation
        this._playAnimation(STATES.IDLE, { loop: true });
      }

      this.modelLoaded = true;
      this.body = this.gltfModel; // Update body reference for effects

    } catch (error) {
      console.error('[Player] Failed to load GLTF model:', error);
      // Keep using fallback mesh
    }
  }

  _playAnimation(state, options = {}) {
    if (!this.animSystem) return;

    const animName = ANIM_MAP[state];
    if (!animName) return;

    // Don't restart same animation
    if (this.currentAnim === animName && state !== STATES.ATTACKING) return;

    const defaultOptions = {
      loop: state === STATES.IDLE || state === STATES.MOVING || state === STATES.BLOCKING,
      fadeIn: 0.2,
      timeScale: 1.0,
      clampWhenFinished: state === STATES.DEAD,
    };

    // Speed adjustments per state - IMPROVED for attack feel
    if (state === STATES.ATTACKING) {
      // Light attack: fast and snappy, speeds up with combo
      defaultOptions.timeScale = 1.6 + (this.attackCombo * 0.15);
      defaultOptions.loop = false;
      defaultOptions.fadeIn = 0.05; // Instant transition for responsiveness
    } else if (state === STATES.HEAVY_ATTACKING) {
      // Heavy attack: slower wind-up, powerful follow-through
      defaultOptions.timeScale = 0.75;
      defaultOptions.loop = false;
      defaultOptions.fadeIn = 0.1;
    } else if (state === STATES.DODGING) {
      defaultOptions.timeScale = 1.5;
      defaultOptions.loop = false;
    } else if (state === STATES.MOVING) {
      defaultOptions.timeScale = 1.2;
    } else if (state === STATES.CHARGED_ATTACKING) {
      // Charged attack: dramatic and weighty
      defaultOptions.timeScale = 0.65;
      defaultOptions.loop = false;
      defaultOptions.fadeIn = 0.08;
    }

    const mergedOptions = { ...defaultOptions, ...options };

    if (this.currentAnim) {
      this.animSystem.crossFade(this.currentAnim, animName, mergedOptions.fadeIn);
    } else {
      this.animSystem.play(animName, mergedOptions);
    }

    this.currentAnim = animName;
  }

  update(delta) {
    // Check spawn safety for first few frames after spawn (fixes autostart terrain bug)
    if (this._spawnSafetyFrames > 0) {
      this._checkSpawnSafety();
    }
    
    if (this.gm.isDead) {
      this.state = STATES.DEAD;
      if (this.currentAnim !== 'Death') {
        this._playAnimation(STATES.DEAD);
      }
      return;
    }

    // Update animation mixer
    if (this.animSystem) {
      this.animSystem.update(delta);
    }

    this.stateTimer += delta;

    switch (this.state) {
      case STATES.IDLE:
      case STATES.MOVING:
        this._processMovement(delta);
        this._processCombatInput();
        break;
      case STATES.DODGING:
        this._processDodge(delta);
        break;
      case STATES.ATTACKING:
      case STATES.HEAVY_ATTACKING:
        this._processAttack(delta);
        break;
      case STATES.BLOCKING:
        this._processBlock(delta);
        break;
      case STATES.STAGGERED:
        if (this.stateTimer >= TIMINGS.staggerDuration) this._changeState(STATES.IDLE);
        break;
      case STATES.DEAD:
        break;
      // Ability states
      case STATES.DASHING:
        this._processDash(delta);
        break;
      case STATES.CHARGING:
        this._processCharging(delta);
        break;
      case STATES.CHARGED_ATTACKING:
        this._processChargedAttack(delta);
        break;
      case STATES.PARRYING:
        this._processParry(delta);
        break;
      case STATES.WAR_CRYING:
        this._processWarCry(delta);
        break;
    }

    // Floor collision and gravity
    if (this.world) {
      // Check for autostart mode - need gentler physics during spawn safety
      const isAutostart = typeof window !== 'undefined' && window.AUTOSTART_MODE === true;
      const inSpawnSafety = this._spawnSafetyFrames > 0;
      
      // Get floor Y at current position
      const floorY = this.world.getFloorY(this.mesh.position.x, this.mesh.position.z);
      
      // ==================================================================================
      // AUTOSTART SPAWN SAFETY (P0 GREEN BLOB FIX):
      // During autostart spawn safety period, keep player at initial high Y (800+).
      // DO NOT apply any gravity - let player float at safe height until terrain is confirmed.
      // The main.js animate() loop will gradually allow descent once terrain is proven ready.
      //
      // The "green blob" bug occurs when player/camera descend before terrain mesh renders.
      // Fix: Keep player at Y=800 (constructor initial) and camera at Y=1500 (main.js initial).
      // ==================================================================================
      if (isAutostart && inSpawnSafety) {
        // CRITICAL: Use Y=800 to match constructor initial value
        // This is the key fix - previous values (200-400) were way too low
        const AUTOSTART_SAFE_Y = 800;
        
        // Ensure player stays at safe height - NO downward movement allowed
        if (this.mesh.position.y < AUTOSTART_SAFE_Y) {
          this.mesh.position.y = AUTOSTART_SAFE_Y;
        }
        
        // NO gravity during spawn safety - keep velocity zeroed
        this.velocity.y = 0;
        this.grounded = false;
        return; // Skip normal gravity processing entirely
      }
      
      // NORMAL GRAVITY PROCESSING (non-autostart or after safety period)
      
      // Safety check: if player is significantly BELOW terrain, they spawned inside it
      // This catches edge cases where spawn height calculation failed
      const TERRAIN_SAFETY_MARGIN = 2; // Player should be at least this far above terrain
      if (floorY > this.mesh.position.y + TERRAIN_SAFETY_MARGIN) {
        // Player is inside/below terrain - immediately pop them above
        console.warn(`[Player] Detected spawn inside terrain! Correcting: y=${this.mesh.position.y} -> ${floorY + 5}`);
        this.mesh.position.y = floorY + 5;
        this.velocity.y = 0;
        this.grounded = false;
      } else if (this.mesh.position.y > floorY) {
        // Above floor - apply gravity
        this.velocity.y += this.gravity * delta;
        this.mesh.position.y += this.velocity.y * delta;
        if (this.mesh.position.y <= floorY) {
          this.mesh.position.y = floorY;
          this.velocity.y = 0;
          this.grounded = true;
        } else {
          this.grounded = false;
        }
      } else if (this.mesh.position.y < floorY) {
        // Below floor (going up stairs) - smoothly rise
        this.mesh.position.y = THREE.MathUtils.lerp(this.mesh.position.y, floorY, 8 * delta);
        this.velocity.y = 0;
        this.grounded = true;
      } else {
        // On floor
        this.velocity.y = 0;
        this.grounded = true;
      }
    } else {
      // Fallback: old gravity behavior (Y=0 floor)
      if (this.mesh.position.y > 0) {
        this.velocity.y += this.gravity * delta;
        this.mesh.position.y += this.velocity.y * delta;
        if (this.mesh.position.y <= 0) {
          this.mesh.position.y = 0;
          this.velocity.y = 0;
          this.grounded = true;
        }
      }
    }
  }

  _processMovement(delta) {
    const move = this.input.getMovementVector();

    if (move.x !== 0 || move.z !== 0) {
      const camYaw = this._getCameraYaw();
      const forward = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
      const right = new THREE.Vector3(Math.cos(camYaw), 0, -Math.sin(camYaw));

      this.moveDir.set(0, 0, 0)
        .addScaledVector(forward, -move.z)
        .addScaledVector(right, move.x)
        .normalize();

      const targetVelocity = this.moveDir.clone().multiplyScalar(this.moveSpeed);
      this.currentMoveVelocity.lerp(targetVelocity, this.moveAcceleration * delta);
      this.mesh.position.addScaledVector(this.currentMoveVelocity, delta);

      // Apply wall collision
      this._applyWallCollision();

      this.facingAngle = Math.atan2(this.moveDir.x, this.moveDir.z);
      // Add Math.PI offset to match GLTF model's default orientation
      this.mesh.rotation.y = THREE.MathUtils.lerp(
        this.mesh.rotation.y,
        this.facingAngle + Math.PI,
        10 * delta
      );

      if (this.state !== STATES.MOVING) this._changeState(STATES.MOVING);
    } else {
      if (this.currentMoveVelocity.length() > 0.01) {
        this.currentMoveVelocity.lerp(new THREE.Vector3(0, 0, 0), this.moveDeceleration * delta);
        this.mesh.position.addScaledVector(this.currentMoveVelocity, delta);
        
        // Apply wall collision even when decelerating
        this._applyWallCollision();
      } else {
        this.currentMoveVelocity.set(0, 0, 0);
      }
      
      if (this.state === STATES.MOVING) this._changeState(STATES.IDLE);
    }
  }
  
  /**
   * Apply wall collision - push player out of walls
   */
  _applyWallCollision() {
    if (!this.world) return;
    
    // Use checkCollision which includes walls + trees
    const result = this.world.checkCollision(this.mesh.position, this.collisionRadius);
    if (result && result.collides && result.pushVector) {
      this.mesh.position.add(result.pushVector);
    }
  }
  
  /**
   * Apply floor collision - snap player to correct Y level
   */
  _applyFloorCollision() {
    if (!this.world) return;
    
    const floorY = this.world.getFloorY(this.mesh.position.x, this.mesh.position.z);
    
    // Smooth vertical transition for stairs
    const yDiff = floorY - this.mesh.position.y;
    if (Math.abs(yDiff) < 0.1) {
      // Close enough, snap
      this.mesh.position.y = floorY;
    } else if (yDiff > 0) {
      // Going up (shouldn't happen much)
      this.mesh.position.y = THREE.MathUtils.lerp(this.mesh.position.y, floorY, 0.3);
    } else {
      // Going down (stairs)
      this.mesh.position.y = THREE.MathUtils.lerp(this.mesh.position.y, floorY, 0.2);
    }
  }

  _processCombatInput() {
    if (this.input.lockOn) {
      this._toggleLockOn();
    }
    
    // === ABILITY INPUTS ===
    
    // Dash ability (R key) - Level 3
    if (this.input.dashAbility && this.gm.isAbilityUnlocked('dash') && 
        this.gm.isAbilityReady('dash') && this.gm.canUseStamina(15)) {
      this._startDash();
      return;
    }
    
    // Parry ability (F key) - Level 8
    if (this.input.parryAbility && this.gm.isAbilityUnlocked('parry') && 
        this.gm.isAbilityReady('parry') && this.gm.canUseStamina(10)) {
      this._startParry();
      return;
    }
    
    // War Cry ability (G key) - Level 12
    if (this.input.warCryAbility && this.gm.isAbilityUnlocked('warCry') && 
        this.gm.isAbilityReady('warCry') && this.gm.canUseStamina(25)) {
      this._startWarCry();
      return;
    }
    
    // Charged Attack (hold LMB) - Level 5
    if (this.input.chargedAttack && this.gm.isAbilityUnlocked('heavyCharge') && 
        this.gm.canUseStamina(35)) {
      this._startChargedAttack();
      return;
    }
    
    // === NORMAL COMBAT INPUTS ===
    
    if (this.input.dodge && this.gm.canUseStamina(COSTS.dodge)) {
      this._startDodge();
      return;
    }
    if (this.input.lightAttack && this.gm.canUseStamina(COSTS.lightAttack)) {
      this._startAttack(false);
      return;
    }
    if (this.input.heavyAttack && this.gm.canUseStamina(COSTS.heavyAttack)) {
      this._startAttack(true);
      return;
    }
    if (this.input.block) {
      this._changeState(STATES.BLOCKING);
    }
  }
  
  _toggleLockOn() {
    if (!this.cameraController || !this.gm.enemyManager) return;
    
    const enemies = this.gm.enemyManager.enemies;
    const livingEnemies = enemies.filter(e => !e.isDead);
    
    if (this.gm.enemyManager.boss && !this.gm.enemyManager.boss.isDead) {
      livingEnemies.push(this.gm.enemyManager.boss);
    }
    
    if (livingEnemies.length === 0) {
      this.cameraController.clearLockOn();
      return;
    }
    
    const lockOnRange = 20;
    const playerPos = this.mesh.position;
    const validTargets = livingEnemies
      .map(e => ({
        enemy: e,
        dist: playerPos.distanceTo(e.mesh.position)
      }))
      .filter(t => t.dist <= lockOnRange)
      .sort((a, b) => a.dist - b.dist);
    
    if (validTargets.length === 0) {
      this.cameraController.clearLockOn();
      return;
    }
    
    const currentTarget = this.cameraController.lockOnTarget;
    
    if (currentTarget && !currentTarget.isDead) {
      const currentIdx = validTargets.findIndex(t => t.enemy === currentTarget);
      if (currentIdx !== -1 && validTargets.length > 1) {
        const nextIdx = (currentIdx + 1) % validTargets.length;
        this.cameraController.setLockOnTarget(validTargets[nextIdx].enemy);
        if (this.gm.audioManager) {
          this.gm.audioManager.play('menuSelect', { volume: 0.3 });
        }
      } else {
        this.cameraController.clearLockOn();
        if (this.gm.audioManager) {
          this.gm.audioManager.play('menuBack', { volume: 0.3 });
        }
      }
    } else {
      this.cameraController.setLockOnTarget(validTargets[0].enemy);
      if (this.gm.audioManager) {
        this.gm.audioManager.play('menuSelect', { volume: 0.4 });
      }
    }
  }

  _startDodge() {
    this.gm.useStamina(COSTS.dodge);
    if (this.gm.audioManager) {
      this.gm.audioManager.play('dodge', { 
        position: this.mesh.position, 
        volume: 0.5 
      });
    }
    const move = this.input.getMovementVector();

    if (move.x !== 0 || move.z !== 0) {
      const camYaw = this._getCameraYaw();
      const forward = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
      const right = new THREE.Vector3(Math.cos(camYaw), 0, -Math.sin(camYaw));
      this.dodgeDir.set(0, 0, 0)
        .addScaledVector(forward, -move.z)
        .addScaledVector(right, move.x)
        .normalize();
    } else {
      this.dodgeDir.set(-Math.sin(this.facingAngle), 0, -Math.cos(this.facingAngle));
    }

    this.isInvincible = true;
    this.lastGhostSpawnTime = 0;
    this._flashDodgeStart();
    this._changeState(STATES.DODGING);
  }
  
  _flashDodgeStart() {
    this._flashModel(0x00ffff, 100);
  }

  _flashModel(color, duration) {
    if (this.gltfModel) {
      this.gltfModel.traverse((child) => {
        if (child.isMesh && child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach(mat => {
            if (mat.emissive) {
              mat.emissive.setHex(color);
              mat.emissiveIntensity = 0.5;
            }
          });
        }
      });
      
      setTimeout(() => {
        this.gltfModel.traverse((child) => {
          if (child.isMesh && child.material) {
            const mats = Array.isArray(child.material) ? child.material : [child.material];
            mats.forEach(mat => {
              if (mat.emissive) {
                mat.emissive.setHex(0x000000);
                mat.emissiveIntensity = 0;
              }
            });
          }
        });
      }, duration);
    }
    
    // Also flash visor
    if (this.visor && this.visor.material) {
      const origColor = this.visor.material.emissive.getHex();
      this.visor.material.emissive.setHex(color);
      this.visor.material.emissiveIntensity = 8;
      setTimeout(() => {
        this.visor.material.emissive.setHex(origColor);
        this.visor.material.emissiveIntensity = 3;
      }, duration);
    }
  }
  
  _spawnDodgeGhost() {
    const ghostGroup = new THREE.Group();
    
    const ghostMat = new THREE.MeshBasicMaterial({
      color: 0x4488ff,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
    });
    
    // Clone visible meshes for ghost
    if (this.gltfModel) {
      this.gltfModel.traverse((child) => {
        if (child.isMesh && child.visible) {
          const ghostMesh = new THREE.Mesh(child.geometry.clone(), ghostMat);
          ghostMesh.position.copy(child.position);
          ghostMesh.rotation.copy(child.rotation);
          ghostMesh.scale.copy(child.scale);
          ghostGroup.add(ghostMesh);
        }
      });
    } else {
      // Fallback ghost
      const bodyGeo = new THREE.CapsuleGeometry(0.35, 0.6, 4, 8);
      const bodyGhost = new THREE.Mesh(bodyGeo, ghostMat);
      bodyGhost.position.y = 1.1;
      ghostGroup.add(bodyGhost);
    }
    
    ghostGroup.position.copy(this.mesh.position);
    ghostGroup.rotation.y = this.mesh.rotation.y;
    
    this.scene.add(ghostGroup);
    
    this.dodgeGhostMeshes.push({
      mesh: ghostGroup,
      material: ghostMat,
      spawnTime: Date.now(),
      lifetime: 200,
    });
  }
  
  _updateDodgeGhosts() {
    const now = Date.now();
    
    for (let i = this.dodgeGhostMeshes.length - 1; i >= 0; i--) {
      const ghost = this.dodgeGhostMeshes[i];
      const age = now - ghost.spawnTime;
      
      if (age > ghost.lifetime) {
        this.scene.remove(ghost.mesh);
        ghost.mesh.traverse(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
        this.dodgeGhostMeshes.splice(i, 1);
      } else {
        const fadeProgress = age / ghost.lifetime;
        ghost.material.opacity = 0.4 * (1 - fadeProgress);
      }
    }
  }

  _processDodge(delta) {
    const progress = this.stateTimer / TIMINGS.dodgeDuration;
    const speedCurve = Math.sin(progress * Math.PI);

    this.mesh.position.addScaledVector(this.dodgeDir, this.dodgeSpeed * speedCurve * delta);
    
    // Apply wall collision during dodge
    this._applyWallCollision();
    
    this.lastGhostSpawnTime += delta;
    if (this.isInvincible && this.lastGhostSpawnTime >= this.ghostSpawnInterval) {
      this._spawnDodgeGhost();
      this.lastGhostSpawnTime = 0;
    }
    
    this._updateDodgeGhosts();

    if (this.stateTimer >= TIMINGS.dodgeIframes && this.isInvincible) {
      this.isInvincible = false;
      this._flashDodgeEnd();
    }

    if (this.stateTimer >= TIMINGS.dodgeDuration) {
      this.isInvincible = false;
      this._changeState(STATES.IDLE);
    }
  }
  
  _flashDodgeEnd() {
    this._flashModel(0x222222, 50);
  }

  _startAttack(isHeavy) {
    const cost = isHeavy ? COSTS.heavyAttack : COSTS.lightAttack;
    this.gm.useStamina(cost);
    this.hitThisSwing = false;
    
    if (this.gm.audioManager) {
      this.gm.audioManager.play('swordSwing', { 
        position: this.mesh.position, 
        volume: 0.5,
        pitch: isHeavy ? 0.8 : 1.0,
        variation: 0.1
      });
    }
    
    const camYaw = this._getCameraYaw();
    this.facingAngle = camYaw;
    // Add Math.PI offset to match GLTF model's default orientation
    this.mesh.rotation.y = camYaw + Math.PI;
    
    // Visual anticipation - flash weapon glow based on attack type
    if (isHeavy) {
      // Heavy attack: dramatic orange/red wind-up glow
      this._flashModel(0xff6622, 200);
    } else {
      // Light attack: quick blue flash
      this._flashModel(0x4488ff, 80);
    }
    
    // Spawn attack arc trail
    if (this.gm.particleManager) {
      const attackDir = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
      this.gm.particleManager.spawnAttackArc(
        this.mesh.position.clone(),
        attackDir,
        isHeavy
      );
    }
    
    // Trigger weapon attack animation (Phase 19)
    if (this.gm.attackAnimator) {
      const speedMult = this.gm.getAttackSpeedMultiplier ? this.gm.getAttackSpeedMultiplier() : 1.0;
      this.gm.attackAnimator.startAttack(isHeavy ? 'heavy' : 'light', speedMult);
    }
    
    this._changeState(isHeavy ? STATES.HEAVY_ATTACKING : STATES.ATTACKING);
  }

  _processAttack(delta) {
    const isHeavy = this.state === STATES.HEAVY_ATTACKING;
    
    // Apply dexterity attack speed bonus (higher = shorter durations)
    const speedMult = this.gm.getAttackSpeedMultiplier ? this.gm.getAttackSpeedMultiplier() : 1.0;
    
    // Scale durations down by speed multiplier (1.3 speed = 77% duration)
    const baseDuration = isHeavy ? TIMINGS.heavyAttackDuration : TIMINGS.lightAttackDuration;
    const baseHitStart = isHeavy ? TIMINGS.heavyHitStart : TIMINGS.lightHitStart;
    const baseHitEnd = isHeavy ? TIMINGS.heavyHitEnd : TIMINGS.lightHitEnd;
    
    const duration = baseDuration / speedMult;
    const hitStart = baseHitStart / speedMult;
    const hitEnd = baseHitEnd / speedMult;

    if (this.stateTimer >= hitStart && this.stateTimer < hitEnd && !this.hitThisSwing) {
      this._checkHit(isHeavy);
    }

    if (!isHeavy && this.stateTimer > duration - (TIMINGS.comboWindow / speedMult) && this.stateTimer < duration) {
      if (this.input.lightAttack && this.gm.canUseStamina(COSTS.lightAttack)) {
        this.attackCombo = (this.attackCombo + 1) % 3;
        this._startAttack(false);
        return;
      }
    }

    // Forward direction must match movement formula (negative sin/cos)
    const fwd = new THREE.Vector3(-Math.sin(this.facingAngle), 0, -Math.cos(this.facingAngle));
    
    // IMPROVED LUNGE: Different curves for light vs heavy
    if (this.stateTimer < hitEnd) {
      const lungeProgress = this.stateTimer / hitEnd;
      
      if (isHeavy) {
        // Heavy: slow start, explosive burst at impact
        const heavyCurve = Math.pow(lungeProgress, 0.5); // Accelerating curve
        const lungeSpeed = 5 * (1 - heavyCurve * 0.5); // Fast at start, slows at end
        this.mesh.position.addScaledVector(fwd, lungeSpeed * delta);
      } else {
        // Light: quick burst forward, maintains momentum
        const lightCurve = Math.sin(lungeProgress * Math.PI * 0.5); // Ease-out
        const lungeSpeed = 4 * (1 - lightCurve * 0.3);
        this.mesh.position.addScaledVector(fwd, lungeSpeed * delta);
      }
      
      // Apply wall collision during attack lunge
      this._applyWallCollision();
    }

    if (this.stateTimer >= duration) {
      this.attackCombo = 0;
      this._changeState(STATES.IDLE);
    }
  }

  _checkHit(isHeavy) {
    // Apply damage multiplier from stats + infusions + war cry
    const damageMultiplier = this.gm.getDamageMultiplier();
    const baseDamage = isHeavy ? this.heavyDamage : this.lightDamage;
    
    // Add equipment flat damage bonus
    const equipDamageBonus = this.gm.getEquipmentDamageBonus ? this.gm.getEquipmentDamageBonus() : 0;
    
    // Calculate base damage
    let finalDamage = Math.floor((baseDamage + equipDamageBonus) * damageMultiplier);
    
    // Check for critical hit
    let isCrit = false;
    const critChance = this.gm.getEquipmentCritChance ? this.gm.getEquipmentCritChance() : 0;
    if (critChance > 0 && Math.random() * 100 < critChance) {
      isCrit = true;
      const critDamageBonus = this.gm.getEquipmentCritDamage ? this.gm.getEquipmentCritDamage() : 50;
      finalDamage = Math.floor(finalDamage * (1.5 + critDamageBonus / 100));
    }
    
    this.activeAttack = {
      position: this.mesh.position.clone().add(
        new THREE.Vector3(Math.sin(this.facingAngle), 1, Math.cos(this.facingAngle)).multiplyScalar(1.2)
      ),
      range: this.attackRange,
      damage: finalDamage,
      postureDmg: isHeavy ? this.heavyPostureDmg : this.lightPostureDmg,
      isHeavy,
      isCrit,
    };
  }

  _processBlock(delta) {
    if (!this.input.block) {
      this._changeState(STATES.IDLE);
    }
    const move = this.input.getMovementVector();
    if (move.x !== 0 || move.z !== 0) {
      const camYaw = this._getCameraYaw();
      const forward = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
      const right = new THREE.Vector3(Math.cos(camYaw), 0, -Math.sin(camYaw));
      const dir = new THREE.Vector3()
        .addScaledVector(forward, -move.z)
        .addScaledVector(right, move.x)
        .normalize();
      this.mesh.position.addScaledVector(dir, this.moveSpeed * 0.3 * delta);
    }
  }

  // ========== ABILITY METHODS ==========
  
  /**
   * DASH ABILITY (Level 3) - Quick directional dash with i-frames
   */
  _startDash() {
    this.gm.useStamina(15);
    this.gm.useAbility('dash');
    
    if (this.gm.audioManager) {
      this.gm.audioManager.play('dash', { 
        position: this.mesh.position, 
        volume: 0.6 
      });
    }
    
    // Get dash direction
    const move = this.input.getMovementVector();
    if (move.x !== 0 || move.z !== 0) {
      const camYaw = this._getCameraYaw();
      const forward = new THREE.Vector3(-Math.sin(camYaw), 0, -Math.cos(camYaw));
      const right = new THREE.Vector3(Math.cos(camYaw), 0, -Math.sin(camYaw));
      this.dashDir.set(0, 0, 0)
        .addScaledVector(forward, -move.z)
        .addScaledVector(right, move.x)
        .normalize();
    } else {
      // Dash forward if no direction input
      this.dashDir.set(-Math.sin(this.facingAngle), 0, -Math.cos(this.facingAngle));
    }
    
    this.isInvincible = true;
    this._flashModel(0x00ff88, 150);
    
    // Spawn dash particles
    if (this.gm.particleManager) {
      this.gm.particleManager.spawnDashEffect(this.mesh.position.clone(), this.dashDir);
    }
    
    this._changeState(STATES.DASHING);
  }
  
  _processDash(delta) {
    const progress = this.stateTimer / TIMINGS.dashDuration;
    // Faster initial burst that slows down
    const speedCurve = Math.pow(1 - progress, 0.5);
    
    this.mesh.position.addScaledVector(this.dashDir, this.dashSpeed * speedCurve * delta);
    this._applyWallCollision();
    
    // Spawn afterimage ghosts
    this.lastGhostSpawnTime += delta;
    if (this.lastGhostSpawnTime >= 0.04) {
      this._spawnDodgeGhost(); // Reuse ghost system
      this.lastGhostSpawnTime = 0;
    }
    this._updateDodgeGhosts();
    
    // End i-frames slightly before dash ends
    if (this.stateTimer >= TIMINGS.dashIframes && this.isInvincible) {
      this.isInvincible = false;
    }
    
    if (this.stateTimer >= TIMINGS.dashDuration) {
      this.isInvincible = false;
      this._changeState(STATES.IDLE);
    }
  }
  
  /**
   * CHARGED ATTACK (Level 5) - Hold LMB for powerful strike
   */
  _startChargedAttack() {
    this.gm.useStamina(35);
    this.hitThisSwing = false;
    
    if (this.gm.audioManager) {
      this.gm.audioManager.play('chargedSwing', { 
        position: this.mesh.position, 
        volume: 0.7,
        pitch: 0.7
      });
    }
    
    const camYaw = this._getCameraYaw();
    this.facingAngle = camYaw;
    this.mesh.rotation.y = camYaw + Math.PI;
    
    // Flash gold for charged attack
    this._flashModel(0xffaa00, 200);
    
    // Camera shake for impact
    if (this.gm.cameraController) {
      this.gm.cameraController.shakeHeavy();
    }
    
    // Trigger heavy weapon attack animation (Phase 19)
    if (this.gm.attackAnimator) {
      const speedMult = this.gm.getAttackSpeedMultiplier ? this.gm.getAttackSpeedMultiplier() : 1.0;
      this.gm.attackAnimator.startAttack('heavy', speedMult * 0.7); // Slower for charged
    }
    
    this._changeState(STATES.CHARGED_ATTACKING);
  }
  
  _processChargedAttack(delta) {
    // Check for hit window
    if (this.stateTimer >= TIMINGS.chargedHitStart && 
        this.stateTimer < TIMINGS.chargedHitEnd && !this.hitThisSwing) {
      this._checkChargedHit();
    }
    
    // Forward lunge
    const fwd = new THREE.Vector3(-Math.sin(this.facingAngle), 0, -Math.cos(this.facingAngle));
    if (this.stateTimer < TIMINGS.chargedHitEnd) {
      this.mesh.position.addScaledVector(fwd, 5 * delta); // Bigger lunge
      this._applyWallCollision();
    }
    
    if (this.stateTimer >= TIMINGS.chargedAttackDuration) {
      this._changeState(STATES.IDLE);
    }
  }
  
  _checkChargedHit() {
    // Apply damage multiplier from War Cry
    const damageMultiplier = this.gm.getDamageMultiplier();
    
    this.activeAttack = {
      position: this.mesh.position.clone().add(
        new THREE.Vector3(Math.sin(this.facingAngle), 1, Math.cos(this.facingAngle)).multiplyScalar(1.5)
      ),
      range: this.attackRange * 1.3, // Wider range
      damage: Math.floor(this.chargedDamage * damageMultiplier),
      postureDmg: this.chargedPostureDmg,
      isHeavy: true,
      isCharged: true,
    };
    
    // Hitstop for impact
    this.gm.hitstopHeavy();
  }
  
  /**
   * PARRY (Level 8) - Timed block for riposte
   */
  _startParry() {
    this.gm.useStamina(10);
    this.gm.useAbility('parry');
    this.parrySuccessful = false;
    
    if (this.gm.audioManager) {
      this.gm.audioManager.play('parryReady', { 
        position: this.mesh.position, 
        volume: 0.5 
      });
    }
    
    // Flash white for parry window
    this._flashModel(0xffffff, 100);
    
    this._changeState(STATES.PARRYING);
  }
  
  _processParry(delta) {
    // During parry window, any incoming attack is deflected
    // This is checked in takeDamage via isParrying getter
    
    if (this.stateTimer >= TIMINGS.parryDuration) {
      if (this.parrySuccessful) {
        // Successful parry - trigger riposte window
        this._startRiposte();
      } else {
        this._changeState(STATES.IDLE);
      }
    }
  }
  
  _startRiposte() {
    // Riposte is a guaranteed crit
    this.hitThisSwing = false;
    
    if (this.gm.audioManager) {
      this.gm.audioManager.play('riposte', { volume: 0.8 });
    }
    
    // Flash red for riposte
    this._flashModel(0xff4444, 150);
    
    // Set up riposte attack (uses charged attack state)
    this.activeAttack = {
      position: this.mesh.position.clone().add(
        new THREE.Vector3(Math.sin(this.facingAngle), 1, Math.cos(this.facingAngle)).multiplyScalar(1.2)
      ),
      range: this.attackRange,
      damage: this.chargedDamage * 1.5, // Riposte does 150% charged damage
      postureDmg: 50, // Massive posture damage
      isHeavy: true,
      isRiposte: true,
    };
    
    this.gm.hitstopHeavy();
    this._changeState(STATES.ATTACKING);
  }
  
  /**
   * Called when parry succeeds (from external damage check)
   */
  onParrySuccess() {
    this.parrySuccessful = true;
    
    if (this.gm.audioManager) {
      this.gm.audioManager.play('parrySuccess', { 
        position: this.mesh.position, 
        volume: 0.8 
      });
    }
    
    // Flash gold and brief hitstop
    this._flashModel(0xffdd00, 200);
    this.gm.triggerHitstop(0.1);
    
    // Spawn parry sparks
    if (this.gm.particleManager) {
      this.gm.particleManager.spawnParryEffect(this.mesh.position.clone());
    }
  }
  
  /**
   * WAR CRY (Level 12) - Damage buff + scare weak enemies
   */
  _startWarCry() {
    this.gm.useStamina(25);
    this.gm.useAbility('warCry');
    
    // Activate the buff
    this.gm.activateWarCry();
    
    // Flash orange for war cry
    this._flashModel(0xff6600, 300);
    
    this._changeState(STATES.WAR_CRYING);
  }
  
  _processWarCry(delta) {
    // Brief animation/pose during war cry
    if (this.stateTimer >= TIMINGS.warCryDuration) {
      this._changeState(STATES.IDLE);
    }
  }
  
  /**
   * Check if player is in parry window
   */
  get isParrying() {
    return this.state === STATES.PARRYING && this.stateTimer < TIMINGS.parryWindow;
  }

  _changeState(newState) {
    if (this.state === newState) return;
    
    // Cleanup old state
    if (this.state === STATES.ATTACKING || this.state === STATES.HEAVY_ATTACKING || this.state === STATES.CHARGED_ATTACKING) {
      this.activeAttack = null;
      
      // Cancel attack animation if interrupted (e.g., staggered)
      if (newState === STATES.STAGGERED || newState === STATES.DEAD) {
        if (this.gm.attackAnimator) {
          this.gm.attackAnimator.cancel();
        }
      }
    }

    this.state = newState;
    this.stateTimer = 0;

    // Play animation for new state
    this._playAnimation(newState);
  }

  setCameraController(cameraController) {
    this.cameraController = cameraController;
  }

  setWorld(world) {
    this.world = world;
    
    // Check for autostart mode - need to be more careful about spawn timing
    const isAutostart = typeof window !== 'undefined' && window.AUTOSTART_MODE === true;
    
    // Force terrain chunk generation at player position FIRST
    // This ensures terrain data exists before we try to read it
    // Generate a wider area in autostart mode to ensure full coverage
    if (world && world.terrain) {
      const px = this.mesh.position.x;
      const pz = this.mesh.position.z;
      
      if (world.terrain.forceGenerateAt) {
        // Generate 3x3 grid of chunks around player for safety
        for (let dx = -1; dx <= 1; dx++) {
          for (let dz = -1; dz <= 1; dz++) {
            world.terrain.forceGenerateAt(px + dx * 64, pz + dz * 64);
          }
        }
      } else if (world.terrain.update) {
        world.terrain.update(px, pz);
      }
    }
    
    // In autostart mode, DON'T snap to terrain immediately - stay high
    // The per-frame safety check will gradually allow descent once terrain is confirmed
    // FIX (P0): Using much higher thresholds to prevent green blob bug
    if (isAutostart) {
      console.log('[Player] Autostart mode: maintaining high spawn position, safety check will handle descent');
      // Ensure we're high enough - FIX: threshold 400 (was 100), set to 800 (was 150)
      if (this.mesh.position.y < 400) {
        this.mesh.position.y = 800;
        this.velocity.y = 0;
        this.grounded = false;
      }
      this._spawnSafetyFrames = 3600; // FIX: 60 seconds of safety checks (was 600 = 10s)
    } else {
      // Normal mode: snap to terrain immediately
      this._ensureSafeSpawnHeight();
    }
  }
  
  /**
   * Ensure player is spawned safely above terrain.
   * Called on setWorld and can be called again if position is reset.
   * Uses terrain height + offset or fallback if terrain not ready.
   * 
   * FIX: This addresses the autostart terrain spawn bug where player spawns inside terrain.
   * In autostart mode, uses MUCH higher offsets to match camera safety expectations.
   * Values MUST match main.js and CameraController to prevent green blob bug.
   */
  _ensureSafeSpawnHeight() {
    // Check for autostart mode - need higher safety values to prevent green blob bug
    const isAutostart = typeof window !== 'undefined' && window.AUTOSTART_MODE === true;
    
    // CRITICAL FIX (P0 GREEN BLOB): In autostart mode, player must start HIGH
    // The green blob bug occurs when camera renders inside terrain - player being too low
    // causes camera to calculate a position that clips into terrain
    // VALUES MUST EXACTLY MATCH main.js IIFE and SaveIntegration for consistency
    const SAFE_OFFSET = isAutostart ? 200 : 5;      // FIX: 200 units above terrain (was 50)
    const FALLBACK_Y = isAutostart ? 800 : 50;      // FIX: 800 safe default (was 200)
    const MIN_SAFE_Y = isAutostart ? 400 : 5;       // FIX: 400 minimum (was 150)
    
    // If no world reference, use fallback
    if (!this.world) {
      console.warn('[Player] No world reference, using fallback spawn height');
      if (this.mesh.position.y < FALLBACK_Y) {
        this.mesh.position.y = FALLBACK_Y;
      }
      this.grounded = false;
      this.velocity.y = 0;
      this._spawnSafetyFrames = 120; // Extended safety frames
      return;
    }
    
    // Force terrain generation at player position first
    if (this.world.terrain && this.world.terrain.forceGenerateAt) {
      this.world.terrain.forceGenerateAt(this.mesh.position.x, this.mesh.position.z);
    }
    
    let terrainY = 0;
    let terrainReady = false;
    
    // Try to get terrain height
    if (this.world.terrain && this.world.terrain.getHeightAt) {
      terrainY = this.world.terrain.getHeightAt(this.mesh.position.x, this.mesh.position.z);
      terrainReady = !isNaN(terrainY) && isFinite(terrainY) && terrainY > -100;
    } else if (this.world.terrain && this.world.terrain.getTerrainHeight) {
      terrainY = this.world.terrain.getTerrainHeight(this.mesh.position.x, this.mesh.position.z);
      terrainReady = !isNaN(terrainY) && isFinite(terrainY) && terrainY > -100;
    } else if (this.world.getFloorY) {
      terrainY = this.world.getFloorY(this.mesh.position.x, this.mesh.position.z);
      terrainReady = !isNaN(terrainY) && isFinite(terrainY) && terrainY > -100;
    }
    
    // Calculate safe Y
    let targetY;
    if (terrainReady) {
      targetY = terrainY + SAFE_OFFSET;
    } else {
      console.warn('[Player] Terrain not ready, using fallback');
      targetY = FALLBACK_Y;
    }
    
    // Ensure minimum safe Y
    targetY = Math.max(targetY, MIN_SAFE_Y);
    
    // ALWAYS set position to safe height (not just if below)
    // This ensures we correct even if player was placed too high
    console.log(`[Player] Setting spawn height: Y=${this.mesh.position.y.toFixed(2)} -> ${targetY.toFixed(2)} (terrain=${terrainY.toFixed(2)}, ready=${terrainReady})`);
    this.mesh.position.y = targetY;
    
    this.grounded = true; // On ground since we calculated proper height
    this.velocity.y = 0;
    // Extended safety frames - much longer in autostart mode to ensure terrain is fully loaded
    // MUST match main.js IIFE value (1800 frames = ~30 seconds at 60fps)
    this._spawnSafetyFrames = isAutostart ? 1800 : 120; // 30 seconds in autostart, 2 seconds normally
  }
  
  /**
   * Additional per-frame spawn safety check.
   * Runs for first N frames after spawn to catch any late position changes.
   * Uses terrain height + offset or fallback if terrain not ready.
   * 
   * FIX (P0 GREEN BLOB): This addresses the autostart terrain spawn bug.
   * In autostart mode, this function does NOTHING - the main.js IIFE handles positioning.
   * Player is initialized at Y=800 and must stay there until main.js IIFE confirms safety.
   */
  _checkSpawnSafety() {
    if (this._spawnSafetyFrames <= 0) return;
    this._spawnSafetyFrames--;
    
    // Check for autostart mode
    const isAutostart = typeof window !== 'undefined' && window.AUTOSTART_MODE === true;
    
    // ==================================================================================
    // CRITICAL FIX (P0 GREEN BLOB BUG):
    // In AUTOSTART mode, this function should NOT try to reposition the player.
    // The player is initialized at Y=800 in the constructor, and the main.js IIFE
    // will handle final positioning AFTER all systems are initialized.
    //
    // Previously, this function was lowering the player Y, which caused camera to
    // calculate lower positions, leading to the "green blob" bug.
    //
    // In autostart mode: just prevent gravity from pulling player down.
    // The main.js animate() loop safety checks handle terrain clamping.
    // ==================================================================================
    
    if (isAutostart) {
      // In autostart mode, just ensure player doesn't go below initial high position
      // Player constructor sets Y=800, camera at Y=1500 - maintain these
      const AUTOSTART_MIN_Y = 500; // Absolute floor - should never go below this
      
      if (this.mesh.position.y < AUTOSTART_MIN_Y) {
        console.warn(`[Player:SpawnSafety] AUTOSTART: Player below safe floor, correcting: ${this.mesh.position.y.toFixed(2)} -> ${AUTOSTART_MIN_Y}`);
        this.mesh.position.y = AUTOSTART_MIN_Y;
        this.velocity.y = 0;
      }
      
      // Prevent gravity from pulling player down during safety period
      if (this._spawnSafetyFrames > 1800) { // First 30 seconds
        this.velocity.y = Math.max(this.velocity.y, 0); // No downward velocity
      }
      return;
    }
    
    // NON-AUTOSTART MODE: Normal spawn safety
    const SAFE_OFFSET = 5;
    const FALLBACK_Y = 50;
    const MIN_SAFE_Y = 5;
    
    if (!this.world) {
      if (this.mesh.position.y < FALLBACK_Y) {
        this.mesh.position.y = FALLBACK_Y;
        this.velocity.y = 0;
      }
      return;
    }
    
    let terrainY = 0;
    let terrainValid = false;
    
    if (this.world.terrain && this.world.terrain.getHeightAt) {
      terrainY = this.world.terrain.getHeightAt(this.mesh.position.x, this.mesh.position.z);
      terrainValid = !isNaN(terrainY) && isFinite(terrainY) && terrainY > -100;
    } else if (this.world.terrain && this.world.terrain.getTerrainHeight) {
      terrainY = this.world.terrain.getTerrainHeight(this.mesh.position.x, this.mesh.position.z);
      terrainValid = !isNaN(terrainY) && isFinite(terrainY) && terrainY > -100;
    }
    
    // Calculate minimum safe Y
    const minSafeY = terrainValid ? Math.max(terrainY + SAFE_OFFSET, MIN_SAFE_Y) : FALLBACK_Y;
    
    // Fix if below safe threshold
    if (this.mesh.position.y < minSafeY) {
      this.mesh.position.y = minSafeY;
      this.velocity.y = 0;
      this.grounded = true;
    }
  }
  
  /**
   * Force recalculation of safe spawn height.
   * Call this after position is externally modified (e.g., by save system).
   */
  recalculateSafeSpawn() {
    this._ensureSafeSpawnHeight();
  }

  _getCameraYaw() {
    if (this.cameraController) {
      return this.cameraController.yaw;
    }
    return 0;
  }

  resetPosition() {
    this.mesh.position.copy(this.gm.checkpoint);
    this.velocity.set(0, 0, 0);
    this._changeState(STATES.IDLE);
  }

  get isBlocking() {
    return this.state === STATES.BLOCKING;
  }

  get isAttacking() {
    return this.state === STATES.ATTACKING || this.state === STATES.HEAVY_ATTACKING;
  }

  get isDead() {
    return this.state === STATES.DEAD;
  }

  flashDamage() {
    this._flashModel(0x660000, 150);
  }
}
