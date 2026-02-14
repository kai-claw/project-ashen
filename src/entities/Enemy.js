import * as THREE from 'three';
import { AssetManager } from '../systems/AssetManager.js';
import { BOSS_ITEMS } from '../systems/ItemManager.js';

const STATES = {
  IDLE: 'idle',
  PATROL: 'patrol',
  CHASE: 'chase',
  CIRCLE: 'circle',
  RETREAT: 'retreat',
  ATTACK: 'attack',
  STAGGERED: 'staggered',
  DEAD: 'dead',
  DORMANT: 'dormant',  // Ambush enemies waiting to be triggered
  RISING: 'rising',    // Ambush enemies emerging from sarcophagus
  // Boss-specific states
  BOSS_SLAM: 'boss_slam',         // Greatsword overhead slam
  BOSS_SWEEP: 'boss_sweep',       // Horizontal sweep
  BOSS_COMBO: 'boss_combo',       // 3-hit combo
  BOSS_CHARGE: 'boss_charge',     // Shoulder bash/charge
  BOSS_GRAB: 'boss_grab',         // Grab attack
  BOSS_TRANSITION: 'boss_transition', // Phase transition
  // Phase 2 attacks
  BOSS_SUMMON: 'boss_summon',     // Summon skeleton adds
  BOSS_AOE: 'boss_aoe',           // Ground slam AOE
  BOSS_PROJECTILE: 'boss_projectile', // Dark magic projectile
};

// Animation name mapping for robot_expressive.glb
const ENEMY_ANIM_MAP = {
  [STATES.IDLE]: 'Idle',
  [STATES.PATROL]: 'Walking',
  [STATES.CHASE]: 'Running',
  [STATES.CIRCLE]: 'Walking',
  [STATES.RETREAT]: 'Walking',
  [STATES.ATTACK]: 'Punch',
  [STATES.STAGGERED]: 'No',
  [STATES.DEAD]: 'Death',
  [STATES.DORMANT]: 'Idle',   // Hidden/inactive
  [STATES.RISING]: 'ThumbsUp', // Rising from sarcophagus (reuse standing animation)
  // Boss animations (mapped to available animations)
  [STATES.BOSS_SLAM]: 'Punch',
  [STATES.BOSS_SWEEP]: 'Punch',
  [STATES.BOSS_COMBO]: 'Punch',
  [STATES.BOSS_CHARGE]: 'Running',
  [STATES.BOSS_GRAB]: 'Punch',
  [STATES.BOSS_TRANSITION]: 'No',
  // Phase 2 animations
  [STATES.BOSS_SUMMON]: 'ThumbsUp',  // Arms raised summoning
  [STATES.BOSS_AOE]: 'Punch',        // Jump slam
  [STATES.BOSS_PROJECTILE]: 'Punch', // Cast projectile
};

// Enemy type presets with model info
export const ENEMY_TYPES = {
  HOLLOW_SOLDIER: {
    name: 'Hollow Soldier',
    health: 50,
    damage: 15,
    postureDmg: 15,
    moveSpeed: 2.5,
    detectionRange: 10,
    attackRange: 2.2,
    attackCooldown: 1.5,
    attackWindup: 0.5,
    attackDuration: 0.2,
    remnantDrop: 40,
    patrolRadius: 3,
    bodyColor: 0x4a2a2a,
    eyeColor: 0xff3333,
    canChainAttacks: false,
    maxPosture: 60,
    hasShield: false,
    canRetreat: false,     // Basic melee - stands ground
    // GLTF settings - use relative path, BASE_URL added at load time
    modelPath: 'assets/models/robot_expressive.glb',
    modelScale: 0.5,
    modelTint: 0x4a5a3a, // Greenish undead tint
    animSpeedMult: 1.0,
  },
  BERSERKER: {
    name: 'Berserker',
    health: 35,
    damage: 20,
    postureDmg: 10,
    moveSpeed: 4.0,
    detectionRange: 12,
    attackRange: 2.0,
    attackCooldown: 0.8,
    attackWindup: 0.3,
    attackDuration: 0.15,
    remnantDrop: 60,
    patrolRadius: 5,
    bodyColor: 0x662222,
    eyeColor: 0xff6600,
    canChainAttacks: true,
    maxChainAttacks: 3,
    maxPosture: 40,
    hasShield: false,
    canRetreat: false,     // Aggressive berserker - never retreats
    // GLTF settings - use relative path, BASE_URL added at load time
    modelPath: 'assets/models/robot_expressive.glb',
    modelScale: 0.55,
    modelTint: 0x8a2222, // Red aggressive tint
    animSpeedMult: 1.5,
  },
  SENTINEL: {
    name: 'Sentinel',
    health: 100,
    damage: 30,
    postureDmg: 25,
    moveSpeed: 1.5,
    detectionRange: 8,
    attackRange: 2.5,
    attackCooldown: 2.5,
    attackWindup: 0.8,
    attackDuration: 0.3,
    remnantDrop: 100,
    patrolRadius: 2,
    bodyColor: 0x333344,
    eyeColor: 0x4444ff,
    canChainAttacks: false,
    maxPosture: 100,
    hasShield: true,
    shieldBlockChance: 0.4,
    canRetreat: false,     // Tank with shield - stands ground
    // GLTF settings - use relative path, BASE_URL added at load time
    modelPath: 'assets/models/soldier.glb',
    modelScale: 0.9,
    modelTint: 0x3a3a5a, // Blue-gray armored tint
    animSpeedMult: 0.8,
  },
  
  // Elite crypt enemy - mini-boss guarding the ritual chamber
  CRYPT_GUARDIAN: {
    name: 'Crypt Guardian',
    health: 200,           // Double normal sentinel
    damage: 40,            // Powerful hits
    postureDmg: 30,        // Heavy posture damage
    moveSpeed: 1.8,        // Slightly faster than sentinel
    detectionRange: 12,    // Larger aggro range
    attackRange: 3.0,      // Long reach
    attackCooldown: 2.0,   // Faster recovery
    attackWindup: 0.6,     // Faster windup
    attackDuration: 0.4,   // Longer active frames
    remnantDrop: 500,      // Big reward
    patrolRadius: 3,
    bodyColor: 0x1a1a2a,   // Dark blue-black
    eyeColor: 0xff2222,    // Menacing red eyes
    canChainAttacks: true, // Can combo
    maxChainAttacks: 2,
    maxPosture: 150,       // Hard to stagger
    hasShield: false,      // No shield, pure aggression
    isElite: true,         // Flag for special behaviors
    canRetreat: false,     // Elite guardian - never retreats
    // GLTF settings
    modelPath: 'assets/models/soldier.glb',
    modelScale: 1.2,       // Larger than normal
    modelTint: 0x2a1a3a,   // Purple-black undead tint
    animSpeedMult: 0.9,
  },
  
  // Bone Revenant - fast ambush enemy from sarcophagi
  BONE_REVENANT: {
    name: 'Bone Revenant',
    health: 40,
    damage: 18,
    postureDmg: 12,
    moveSpeed: 3.5,        // Fast
    detectionRange: 8,
    attackRange: 2.0,
    attackCooldown: 0.9,   // Quick attacks
    attackWindup: 0.25,    // Fast windup
    attackDuration: 0.15,
    remnantDrop: 70,
    patrolRadius: 4,
    bodyColor: 0x8a7a5a,   // Bone color
    eyeColor: 0x44ff44,    // Eerie green glow
    canChainAttacks: true,
    maxChainAttacks: 2,
    maxPosture: 45,
    hasShield: false,
    isAmbush: true,        // Flag for dormant start
    canRetreat: true,      // Fast, fragile - retreats when hurt
    retreatHealthThreshold: 0.25,  // Retreat at 25% HP
    retreatDistance: 12,   // Retreat 12 units before re-engaging
    // GLTF settings
    modelPath: 'assets/models/robot_expressive.glb',
    modelScale: 0.45,      // Slightly smaller
    modelTint: 0x8a7a5a,   // Bone-colored tint
    animSpeedMult: 1.4,    // Fast animations
  },
  
  // ========== THE CRYPT LORD - SECOND BOSS ==========
  // Full boss fight with multi-phase combat
  CRYPT_LORD: {
    name: 'The Crypt Lord',
    health: 600,              // Full boss HP pool
    damage: 45,               // Phase 1 base damage
    postureDmg: 35,           // Heavy posture damage
    moveSpeed: 2.0,           // Phase 1 speed
    detectionRange: 20,       // Boss arena range
    attackRange: 3.5,         // Long greatsword reach
    attackCooldown: 1.8,      // Phase 1 cooldown between attacks
    attackWindup: 0.8,        // Default windup (varies by attack)
    attackDuration: 0.3,
    remnantDrop: 2500,        // Boss-tier reward
    patrolRadius: 3,
    bodyColor: 0x1a1a2a,      // Dark blue-black
    eyeColor: 0xff2222,       // Menacing red eyes
    canChainAttacks: true,    // Has combos
    maxChainAttacks: 3,       // 3-hit combo
    maxPosture: 200,          // Hard to stagger
    hasShield: false,         // Greatsword only
    isBoss: true,             // Flag for boss behaviors
    isElite: true,
    bossPhase: 1,             // Starts in Phase 1
    
    // Attack definitions for Phase 1
    attacks: {
      GREATSWORD_SLAM: { damage: 55, postureDmg: 40, windup: 0.8, recovery: 1.5, range: 4.0 },
      HORIZONTAL_SWEEP: { damage: 45, postureDmg: 35, windup: 0.6, recovery: 1.0, range: 4.5 },
      THREE_HIT_COMBO: { damages: [35, 35, 50], postureDmg: 25, windup: 0.4, recovery: 2.0, range: 3.5 },
      SHOULDER_BASH: { damage: 30, postureDmg: 45, windup: 0.5, recovery: 1.2, range: 6.0, isCharge: true },
      GRAB: { damage: 80, postureDmg: 0, windup: 1.0, recovery: 2.5, range: 2.5, isGrab: true },
      // Phase 2 attacks
      SKELETON_SUMMON: { windup: 1.2, recovery: 1.5, summonCount: 2 },
      GROUND_SLAM_AOE: { damage: 50, postureDmg: 60, windup: 1.0, recovery: 2.0, range: 8.0, jumpHeight: 3.0 },
      DARK_PROJECTILE: { damage: 40, windup: 0.6, recovery: 0.8, speed: 8, trackingStrength: 3.0 },
    },
    
    // GLTF settings - larger armored model
    modelPath: 'assets/models/soldier.glb',
    modelScale: 1.5,          // Large boss model
    modelTint: 0x2a1a3a,      // Purple-black undead tint
    animSpeedMult: 0.85,      // Slower, more deliberate
  },
};

export class Enemy {
  constructor(scene, position, config = {}, gameManager = null) {
    this.scene = scene;
    this.gm = gameManager;
    
    const typePreset = config.type ? ENEMY_TYPES[config.type] : {};
    this.config = {
      ...ENEMY_TYPES.HOLLOW_SOLDIER,
      ...typePreset,
      ...config,
    };

    this.maxHealth = this.config.health;
    this.health = this.maxHealth;
    this.maxPosture = this.config.maxPosture || 60;
    this.posture = 0;
    
    // Check if this enemy should start dormant (ambush behavior)
    this.isDormant = this.config.behavior === 'ambush' || this.config.isAmbush;
    this.triggerZone = this.config.triggerZone || null;
    this.triggerRadius = this.config.triggerRadius || 6; // Default trigger distance
    this.state = this.isDormant ? STATES.DORMANT : STATES.IDLE;
    this.stateTimer = 0;
    this.hitThisSwing = false;
    this.activeAttack = null;
    this.isBlocking = false;
    this.isDead = false;
    
    this.chainAttackCount = 0;
    this.lastAttackTime = 0;
    
    this.circleDirection = Math.random() > 0.5 ? 1 : -1;
    this.circleTimer = 0;

    this.spawnPos = position.clone();
    this.patrolTarget = position.clone();
    this.patrolWait = 0;

    // GLTF model state
    this.modelLoaded = false;
    this.animSystem = null;
    this.currentAnim = null;
    this.gltfModel = null;

    // Create mesh container
    this.mesh = new THREE.Group();
    this.mesh.position.copy(position);

    // Create fallback primitive mesh
    this._createFallbackMesh();
    
    // Create health bar
    this._createHealthBar(2.1);

    scene.add(this.mesh);
    
    // Hide dormant enemies (ambush behavior)
    if (this.isDormant) {
      this.mesh.visible = false;
    }

    // Load GLTF model asynchronously
    this._loadGLTFModel();
    
    // ========== COLLISION & STUCK DETECTION ==========
    this.world = null;               // Set by EnemyManager for collision checks
    this.collisionRadius = 0.5;      // Enemy collision radius
    this.lastPosition = position.clone();
    this.stuckTimer = 0;             // Time spent stuck
    this.stuckThreshold = 2.0;       // Seconds before considered stuck
    this.unstuckAttempts = 0;        // Counter for pathfinding retries
    this.avoidanceDir = null;        // Current avoidance direction
    this.avoidanceTimer = 0;         // Time spent avoiding
    
    // ========== RETREAT BEHAVIOR ==========
    this.canRetreat = this.config.canRetreat || false;
    this.retreatHealthThreshold = this.config.retreatHealthThreshold || 0.25; // 25% HP
    this.retreatDistance = this.config.retreatDistance || 12; // Units to retreat
    this.retreatReengageThreshold = 0.40; // Re-engage if health recovers to 40%
    this.retreatStartPos = null;     // Position when retreat started
    this.isRetreating = false;       // Active retreat flag
    this.retreatWallHits = 0;        // Count wall collisions during retreat
    
    // ========== BOSS-SPECIFIC INITIALIZATION ==========
    if (this.config.isBoss) {
      this.isBoss = true;
      this.bossPhase = this.config.bossPhase || 1;
      this.bossActive = false;     // Becomes true when boss aggros
      this.currentBossAttack = null;
      this.bossComboHit = 0;       // For tracking combo progression
      this.lastBossAttackTime = 0;
      this.bossAttackCooldown = 0;
      this.chargeTarget = null;    // For shoulder bash
      this.chargeProgress = 0;
      this.grabTarget = null;      // For grab attack
      
      // World reference for arena integration (set by EnemyManager)
      this.world = null;
      
      // EnemyManager reference for summoning adds (set by EnemyManager)
      this.enemyManager = null;
      
      // Phase 2: Projectile tracking
      this.activeProjectiles = [];
      
      // Phase 2: Summoned adds tracking
      this.summonedAdds = [];
      this.lastSummonTime = 0;
      this.summonCooldown = 15000; // 15s between summons
      
      // Phase 2: AOE attack state
      this.aoeJumpProgress = 0;
      this.aoeStartY = 0;
      
      // Larger health bar for boss
      this._createHealthBar(3.5);
    }
  }
  
  /**
   * Wake up a dormant enemy (called by trigger system)
   */
  wake() {
    if (this.state !== STATES.DORMANT) return;
    
    this.mesh.visible = true;
    this.isDormant = false;
    this._changeState(STATES.RISING);
    
    // Play rising sound if available
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('ambush', { 
        position: this.mesh.position, 
        volume: 0.7 
      });
    }
  }
  
  /**
   * Check if player is in trigger range for dormant enemies
   */
  checkTrigger(playerPos) {
    if (this.state !== STATES.DORMANT) return false;
    
    const dx = playerPos.x - this.mesh.position.x;
    const dz = playerPos.z - this.mesh.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz);
    
    return dist < this.triggerRadius;
  }

  _createFallbackMesh() {
    // Simple placeholder body
    const bodyMat = new THREE.MeshStandardMaterial({
      color: this.config.bodyColor,
      roughness: 0.7,
      metalness: 0.2,
    });

    const bodyGeo = new THREE.CapsuleGeometry(0.3, 0.5, 8, 16);
    this.fallbackBody = new THREE.Mesh(bodyGeo, bodyMat);
    this.fallbackBody.position.y = 1.0;
    this.fallbackBody.castShadow = true;
    this.mesh.add(this.fallbackBody);

    // Glowing eyes
    const eyeMat = new THREE.MeshStandardMaterial({
      color: this.config.eyeColor,
      emissive: this.config.eyeColor,
      emissiveIntensity: 4,
    });
    const eyeGeo = new THREE.SphereGeometry(0.08, 8, 8);
    this.eye = new THREE.Mesh(eyeGeo, eyeMat);
    this.eye.position.set(0, 1.5, 0.25);
    this.mesh.add(this.eye);

    this.body = this.fallbackBody;
  }

  async _loadGLTFModel() {
    try {
      const basePath = import.meta.env.BASE_URL || '/';
      const modelPath = this.config.modelPath || 'assets/models/robot_expressive.glb';
      const fullPath = `${basePath}${modelPath}`;
      const modelScale = this.config.modelScale || 0.5;
      
      const { scene: model, animations } = await AssetManager.loadModel(
        fullPath,
        { scale: modelScale }
      );

      this.gltfModel = model;
      this.gltfModel.position.y = 0;
      this.gltfModel.rotation.y = Math.PI;

      // Apply tint to distinguish enemy types
      if (this.config.modelTint) {
        this._applyModelTint(this.config.modelTint);
      }

      // Set up shadows and store original materials
      this.gltfModel.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          child.userData.originalMaterial = child.material.clone();
        }
      });

      // Hide fallback mesh
      if (this.fallbackBody) this.fallbackBody.visible = false;
      // Keep glowing eye as indicator

      this.mesh.add(this.gltfModel);

      // Set up animation system
      if (animations && animations.length > 0) {
        this.animSystem = AssetManager.createAnimationSystem(this.gltfModel, animations);
        this._playAnimation(this.state, { loop: true });
      }

      this.modelLoaded = true;
      this.body = this.gltfModel;

    } catch (error) {
      console.error(`[Enemy:${this.config.name}] Failed to load GLTF:`, error);
    }
  }

  _applyModelTint(tintColor) {
    const tint = new THREE.Color(tintColor);
    
    this.gltfModel.traverse((child) => {
      if (child.isMesh && child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach(mat => {
          if (mat.color) {
            mat.color.lerp(tint, 0.3);
          }
          if (mat.emissive) {
            mat.emissive.copy(tint).multiplyScalar(0.1);
            mat.emissiveIntensity = 0.2;
          }
        });
      }
    });
  }

  _playAnimation(state, options = {}) {
    if (!this.animSystem) return;

    const animName = ENEMY_ANIM_MAP[state];
    if (!animName) return;

    if (this.currentAnim === animName && state !== STATES.ATTACK) return;

    const speedMult = this.config.animSpeedMult || 1.0;
    
    const defaultOptions = {
      loop: state === STATES.IDLE || state === STATES.PATROL || 
            state === STATES.CHASE || state === STATES.CIRCLE || state === STATES.RETREAT,
      fadeIn: 0.2,
      timeScale: speedMult,
      clampWhenFinished: state === STATES.DEAD,
    };

    if (state === STATES.ATTACK) {
      defaultOptions.loop = false;
      defaultOptions.timeScale = speedMult * 1.2;
    } else if (state === STATES.CHASE) {
      defaultOptions.timeScale = speedMult * 1.3;
    }

    const mergedOptions = { ...defaultOptions, ...options };

    if (this.currentAnim) {
      this.animSystem.crossFade(this.currentAnim, animName, mergedOptions.fadeIn);
    } else {
      this.animSystem.play(animName, mergedOptions);
    }

    this.currentAnim = animName;
  }
  
  _createHealthBar(heightOffset) {
    this.healthBarGroup = new THREE.Group();
    this.healthBarGroup.position.y = heightOffset;

    const bgGeo = new THREE.PlaneGeometry(1.0, 0.08);
    const bgMat = new THREE.MeshBasicMaterial({ color: 0x111111, side: THREE.DoubleSide });
    const bg = new THREE.Mesh(bgGeo, bgMat);
    this.healthBarGroup.add(bg);

    const fillGeo = new THREE.PlaneGeometry(0.98, 0.06);
    const fillMat = new THREE.MeshBasicMaterial({ color: 0xcc3333, side: THREE.DoubleSide });
    this.healthFill = new THREE.Mesh(fillGeo, fillMat);
    this.healthFill.position.z = 0.001;
    this.healthBarGroup.add(this.healthFill);
    
    const postureBgGeo = new THREE.PlaneGeometry(1.0, 0.04);
    const postureBgMat = new THREE.MeshBasicMaterial({ color: 0x222211, side: THREE.DoubleSide });
    const postureBg = new THREE.Mesh(postureBgGeo, postureBgMat);
    postureBg.position.y = -0.08;
    this.healthBarGroup.add(postureBg);
    
    const postureFillGeo = new THREE.PlaneGeometry(0.98, 0.03);
    const postureFillMat = new THREE.MeshBasicMaterial({ color: 0xffcc00, side: THREE.DoubleSide });
    this.postureFill = new THREE.Mesh(postureFillGeo, postureFillMat);
    this.postureFill.position.set(0, -0.08, 0.001);
    this.postureFill.scale.x = 0;
    this.healthBarGroup.add(this.postureFill);

    this.mesh.add(this.healthBarGroup);
    this.healthBarGroup.visible = false;
    
    this.breakIndicator = this._createBreakIndicator();
    this.breakIndicator.visible = false;
    this.mesh.add(this.breakIndicator);
  }
  
  _createBreakIndicator() {
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffcc00';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('BREAK!', 64, 32);
    
    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ 
      map: texture, 
      transparent: true,
      depthTest: false,
    });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(1.5, 0.75, 1);
    sprite.position.y = 3.0;
    return sprite;
  }

  update(delta, player) {
    if (this.state === STATES.DEAD) return;

    // Update animation mixer
    if (this.animSystem) {
      this.animSystem.update(delta);
    }

    this.stateTimer += delta;
    const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
    const healthPercent = this.health / this.maxHealth;

    // Billboard health bar
    if (this.healthBarGroup.visible) {
      const cam = this.scene.getObjectByProperty('type', 'PerspectiveCamera');
      if (cam) this.healthBarGroup.lookAt(cam.position);
    }
    
    // Shield blocking logic
    if (this.config.hasShield && this.state === STATES.CHASE && distToPlayer < this.config.attackRange * 1.5) {
      this.isBlocking = Math.random() < this.config.shieldBlockChance;
    } else {
      this.isBlocking = false;
    }

    switch (this.state) {
      case STATES.IDLE:
        this.patrolWait += delta;
        if (distToPlayer < this.config.detectionRange) {
          this._changeState(STATES.CHASE);
          this.healthBarGroup.visible = true;
        } else if (this.patrolWait > 2) {
          this.patrolWait = 0;
          this._pickPatrolTarget();
          this._changeState(STATES.PATROL);
        }
        break;

      case STATES.PATROL:
        if (distToPlayer < this.config.detectionRange) {
          this._changeState(STATES.CHASE);
          this.healthBarGroup.visible = true;
          break;
        }
        this._moveToward(this.patrolTarget, this.config.moveSpeed * 0.5, delta);
        if (this.mesh.position.distanceTo(this.patrolTarget) < 0.5) {
          this._changeState(STATES.IDLE);
        }
        break;

      case STATES.CHASE:
        // Boss aggro activation - activate arena on first chase
        if (this.isBoss && !this.bossActive) {
          this.bossActive = true;
          this.healthBarGroup.visible = true;
          // Activate boss arena if world reference exists
          if (this.world && this.world.activateBossArena) {
            this.world.activateBossArena();
          }
          // Play boss roar
          if (this.gm?.audioManager) {
            this.gm.audioManager.play('bossRoar', { position: this.mesh.position, volume: 0.9 });
          }
        }
        
        // Store player reference for Phase 2 ranged attacks
        if (this.isBoss) {
          this.playerTarget = player.mesh.position.clone();
        }
        
        // Boss doesn't reset aggro easily
        if (!this.isBoss && distToPlayer > this.config.detectionRange * 1.5) {
          this._changeState(STATES.IDLE);
          this.healthBarGroup.visible = false;
          break;
        }
        
        // Retreat behavior for eligible enemies (ranged/fast types, not tanks)
        if (!this.isBoss && this.canRetreat && 
            healthPercent < this.retreatHealthThreshold && 
            !this.isRetreating) {
          // Start retreat - store starting position
          this.retreatStartPos = this.mesh.position.clone();
          this.isRetreating = true;
          this.retreatWallHits = 0;
          this._changeState(STATES.RETREAT);
          break;
        }
        
        if (distToPlayer <= this.config.attackRange && this.bossAttackCooldown <= 0) {
          if (this.isBoss) {
            // Boss selects from special attacks
            this._selectBossAttack(distToPlayer, healthPercent);
          } else {
            this._changeState(STATES.ATTACK);
          }
          break;
        }
        
        // Boss can charge from range
        if (this.isBoss && distToPlayer > this.config.attackRange && distToPlayer < 8 && this.bossAttackCooldown <= 0 && Math.random() < 0.02) {
          this._startBossCharge(player);
          break;
        }
        
        if (distToPlayer < this.config.attackRange * 2 && Math.random() < 0.005) {
          this._changeState(STATES.CIRCLE);
          break;
        }
        
        this._moveToward(player.mesh.position, this.config.moveSpeed, delta);
        this._faceTarget(player.mesh.position, delta);
        break;
        
      case STATES.CIRCLE:
        this.circleTimer += delta;
        if (this.circleTimer > 1.5 || distToPlayer > this.config.detectionRange) {
          this._changeState(STATES.CHASE);
          break;
        }
        if (distToPlayer <= this.config.attackRange) {
          this._changeState(STATES.ATTACK);
          break;
        }
        this._circleStrafe(player.mesh.position, delta);
        this._faceTarget(player.mesh.position, delta);
        break;
        
      case STATES.RETREAT:
        // Calculate retreat distance traveled
        const retreatDistTraveled = this.retreatStartPos 
          ? this.mesh.position.distanceTo(this.retreatStartPos) 
          : 0;
        
        // Check re-engage conditions:
        // 1. Retreated far enough (10-15 units based on config)
        // 2. Health recovered above 40%
        // 3. Hit too many walls (stuck)
        // 4. Lost sight of player
        const healthRecovered = healthPercent >= this.retreatReengageThreshold;
        const retreatedEnough = retreatDistTraveled >= this.retreatDistance;
        const tooManyWallHits = this.retreatWallHits >= 3;
        const lostPlayer = distToPlayer > this.config.detectionRange * 1.5;
        
        if (retreatedEnough || healthRecovered || tooManyWallHits || lostPlayer) {
          // End retreat, re-engage
          this.isRetreating = false;
          this.retreatStartPos = null;
          this.retreatWallHits = 0;
          
          if (lostPlayer) {
            this._changeState(STATES.IDLE);
            this.healthBarGroup.visible = false;
          } else {
            this._changeState(STATES.CHASE);
          }
          break;
        }
        
        // Calculate retreat direction (away from player)
        const awayDir = new THREE.Vector3().subVectors(this.mesh.position, player.mesh.position);
        awayDir.y = 0;
        awayDir.normalize();
        
        // Retreat target is 3 units away in opposite direction
        const retreatTarget = this.mesh.position.clone().add(awayDir.multiplyScalar(3));
        
        // Store position before move to detect wall collisions
        const preRetreatPos = this.mesh.position.clone();
        
        // Move away at 70% speed (slower than normal)
        this._moveToward(retreatTarget, this.config.moveSpeed * 0.7, delta);
        
        // Check if we hit a wall (didn't move much)
        const moveDistance = this.mesh.position.distanceTo(preRetreatPos);
        if (moveDistance < this.config.moveSpeed * 0.7 * delta * 0.5) {
          this.retreatWallHits++;
          
          // Try lateral movement to avoid obstacle
          const lateral = new THREE.Vector3(-awayDir.z, 0, awayDir.x);
          const lateralDir = (this.retreatWallHits % 2 === 0) ? lateral : lateral.negate();
          const lateralTarget = this.mesh.position.clone().add(lateralDir.multiplyScalar(2));
          this._moveToward(lateralTarget, this.config.moveSpeed * 0.5, delta);
        }
        
        // Face player while retreating (keep eyes on threat)
        this._faceTarget(player.mesh.position, delta);
        break;

      case STATES.ATTACK:
        this._processAttack(delta, player);
        break;

      case STATES.STAGGERED:
        // Wobble effect on the model
        if (this.gltfModel) {
          this.gltfModel.rotation.z = Math.sin(this.stateTimer * 15) * 0.1 * (1 - this.stateTimer / 1.5);
        } else if (this.fallbackBody) {
          this.fallbackBody.rotation.z = Math.sin(this.stateTimer * 15) * 0.1 * (1 - this.stateTimer / 1.5);
        }
        
        if (this.stateTimer >= 1.5) {
          this.posture = 0;
          if (this.gltfModel) this.gltfModel.rotation.z = 0;
          if (this.fallbackBody) this.fallbackBody.rotation.z = 0;
          this.breakIndicator.visible = false;
          this._updatePostureBar();
          this._changeState(distToPlayer < this.config.detectionRange ? STATES.CHASE : STATES.IDLE);
        }
        break;
        
      case STATES.DORMANT:
        // Dormant enemies don't do anything until triggered
        // Trigger check happens in EnemyManager
        break;
        
      case STATES.RISING:
        // Rising from sarcophagus - animate emergence
        if (this.stateTimer < 0.5) {
          // First half: rising motion
          const targetModel = this.gltfModel || this.fallbackBody;
          if (targetModel) {
            // Rise up from below
            const riseProgress = this.stateTimer / 0.5;
            targetModel.position.y = THREE.MathUtils.lerp(-0.8, 0, riseProgress);
          }
        } else if (this.stateTimer >= 0.8) {
          // Emergence complete - start chasing
          const targetModel = this.gltfModel || this.fallbackBody;
          if (targetModel) targetModel.position.y = 0;
          this.healthBarGroup.visible = true;
          this._changeState(STATES.CHASE);
        }
        // Face player while rising
        this._faceTarget(player.mesh.position, delta * 2);
        break;
        
      // ========== BOSS ATTACK STATES ==========
      case STATES.BOSS_SLAM:
        this._processBossSlamAttack(delta, player);
        break;
        
      case STATES.BOSS_SWEEP:
        this._processBossSweepAttack(delta, player);
        break;
        
      case STATES.BOSS_COMBO:
        this._processBossComboAttack(delta, player);
        break;
        
      case STATES.BOSS_CHARGE:
        this._processBossChargeAttack(delta, player);
        break;
        
      case STATES.BOSS_GRAB:
        this._processBossGrabAttack(delta, player);
        break;
        
      case STATES.BOSS_TRANSITION:
        // Phase transition - invulnerable, transformation handled by _cryptLordTransformSequence
        // Player can heal/reposition during this 4 second window
        // The state will be changed to CHASE when transformation completes
        break;
        
      // ========== PHASE 2 ATTACK STATES ==========
      case STATES.BOSS_SUMMON:
        this._processBossSummonAttack(delta, player);
        break;
        
      case STATES.BOSS_AOE:
        this._processBossAOEAttack(delta, player);
        break;
        
      case STATES.BOSS_PROJECTILE:
        this._processBossProjectileAttack(delta, player);
        break;
    }
    
    // Update active projectiles (Phase 2)
    if (this.isBoss && this.activeProjectiles) {
      this._updateProjectiles(delta, player);
    }

    // Posture regen
    if (this.state !== STATES.STAGGERED && this.posture > 0) {
      this.posture = Math.max(0, this.posture - 8 * delta);
      this._updatePostureBar();
    }
    
    // Boss attack cooldown
    if (this.isBoss && this.bossAttackCooldown > 0) {
      this.bossAttackCooldown -= delta;
    }
    
    // Stuck detection for movement states (not bosses during attacks)
    if (!this.isBoss || this.state === STATES.CHASE || this.state === STATES.PATROL) {
      if (this.state === STATES.CHASE || this.state === STATES.PATROL || 
          this.state === STATES.RETREAT || this.state === STATES.CIRCLE) {
        this._checkStuck(delta);
      }
    }
  }
  
  _circleStrafe(targetPos, delta) {
    const toTarget = new THREE.Vector3().subVectors(targetPos, this.mesh.position);
    toTarget.y = 0;
    const dist = toTarget.length();
    toTarget.normalize();
    
    const perp = new THREE.Vector3(-toTarget.z, 0, toTarget.x).multiplyScalar(this.circleDirection);
    const idealDist = this.config.attackRange * 1.5;
    const distCorrection = new THREE.Vector3().copy(toTarget).multiplyScalar((dist - idealDist) * 0.5);
    
    const moveDir = perp.add(distCorrection).normalize();
    const moveAmount = this.config.moveSpeed * 0.7 * delta;
    
    // Check collision before strafing
    const proposedPos = this.mesh.position.clone().addScaledVector(moveDir, moveAmount);
    
    if (this.world && this.world.checkCollision) {
      const collision = this.world.checkCollision(proposedPos, this.collisionRadius);
      if (!collision.collides) {
        this.mesh.position.copy(proposedPos);
      } else {
        // Collision - flip strafe direction
        this.circleDirection *= -1;
      }
    } else {
      this.mesh.position.addScaledVector(moveDir, moveAmount);
    }
  }

  // ========== BOSS ATTACK SELECTION ==========
  _selectBossAttack(distToPlayer, healthPercent) {
    const attacks = this.config.attacks;
    if (!attacks) {
      this._changeState(STATES.ATTACK);
      return;
    }
    
    // Phase 2 has additional attacks
    if (this.bossPhase === 2) {
      this._selectPhase2Attack(distToPlayer);
      return;
    }
    
    // Roll for attack type based on distance and situation
    const roll = Math.random();
    
    // Close range: Slam, Sweep, Combo, or rare Grab
    if (distToPlayer <= this.config.attackRange) {
      if (roll < 0.1 && attacks.GRAB) {
        // 10% chance for grab (punishes passive play)
        this._changeState(STATES.BOSS_GRAB);
      } else if (roll < 0.35) {
        // 25% chance for slam (highest damage, clear telegraph)
        this._changeState(STATES.BOSS_SLAM);
      } else if (roll < 0.65) {
        // 30% chance for combo (multi-hit, teaches patience)
        this._changeState(STATES.BOSS_COMBO);
      } else {
        // 35% chance for sweep (fast, wide arc)
        this._changeState(STATES.BOSS_SWEEP);
      }
    }
  }
  
  // ========== PHASE 2 ATTACK SELECTION ==========
  _selectPhase2Attack(distToPlayer) {
    const attacks = this.config.attacks;
    const roll = Math.random();
    const canSummon = Date.now() - this.lastSummonTime > this.summonCooldown;
    const livingAdds = this.summonedAdds.filter(add => !add.isDead).length;
    
    // Prioritize summon if no adds are alive and off cooldown
    if (canSummon && livingAdds === 0 && roll < 0.25) {
      this._changeState(STATES.BOSS_SUMMON);
      return;
    }
    
    // Mid-range: Prefer projectile or AOE
    if (distToPlayer > this.config.attackRange && distToPlayer < 10) {
      if (roll < 0.4) {
        // 40% projectile when at range
        this._changeState(STATES.BOSS_PROJECTILE);
      } else if (roll < 0.7) {
        // 30% AOE slam (closes gap + damages)
        this._changeState(STATES.BOSS_AOE);
      } else if (roll < 0.85) {
        // 15% charge - use stored player target
        this.chargeTarget = this.playerTarget ? this.playerTarget.clone() : this.mesh.position.clone();
        this.chargeProgress = 0;
        this._changeState(STATES.BOSS_CHARGE);
      } else {
        // 15% chase closer
        return; // Stay in CHASE
      }
      return;
    }
    
    // Close range: Mix of Phase 1 attacks + new ones
    if (distToPlayer <= this.config.attackRange) {
      if (roll < 0.15) {
        // 15% AOE (punishes players who stay close)
        this._changeState(STATES.BOSS_AOE);
      } else if (roll < 0.25) {
        // 10% projectile point-blank (surprising)
        this._changeState(STATES.BOSS_PROJECTILE);
      } else if (roll < 0.40) {
        // 15% slam
        this._changeState(STATES.BOSS_SLAM);
      } else if (roll < 0.60) {
        // 20% combo (faster in Phase 2)
        this._changeState(STATES.BOSS_COMBO);
      } else if (roll < 0.80) {
        // 20% sweep
        this._changeState(STATES.BOSS_SWEEP);
      } else if (roll < 0.95) {
        // 15% grab
        this._changeState(STATES.BOSS_GRAB);
      } else {
        // 5% summon if available
        if (canSummon && livingAdds < 3) {
          this._changeState(STATES.BOSS_SUMMON);
        } else {
          this._changeState(STATES.BOSS_SLAM);
        }
      }
    }
  }
  
  _startBossCharge(player) {
    this.chargeTarget = player.mesh.position.clone();
    this.chargeProgress = 0;
    this._changeState(STATES.BOSS_CHARGE);
  }

  // ========== BOSS SLAM ATTACK ==========
  // Overhead vertical slam - high damage, 0.8s windup, 1.5s punish window
  _processBossSlamAttack(delta, player) {
    const attack = this.config.attacks?.GREATSWORD_SLAM;
    if (!attack) { this._changeState(STATES.CHASE); return; }
    
    const windupTime = attack.windup;
    const strikeTime = windupTime + 0.3;
    const recoveryTime = strikeTime + attack.recovery;
    
    // Windup - raise weapon high
    if (this.stateTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta * 2);
      // Visual telegraph - model leans back
      const progress = this.stateTimer / windupTime;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        targetModel.rotation.x = progress * -0.3; // Lean back
      }
      return;
    }
    
    // Strike
    if (this.stateTimer >= windupTime && this.stateTimer < strikeTime) {
      if (!this.hitThisSwing) {
        const attackDir = new THREE.Vector3(
          Math.sin(this.mesh.rotation.y), 0, Math.cos(this.mesh.rotation.y)
        );
        this.activeAttack = {
          position: this.mesh.position.clone().add(attackDir.multiplyScalar(1.5)).add(new THREE.Vector3(0, 1.5, 0)),
          range: attack.range,
          damage: attack.damage,
          postureDmg: attack.postureDmg,
          isHeavy: true,
        };
        // Play swing sound
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('swordSwing', { position: this.mesh.position, volume: 0.8, pitch: 0.6 });
        }
      }
      // Strike animation - lean forward
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        const strikeProgress = (this.stateTimer - windupTime) / 0.3;
        targetModel.rotation.x = THREE.MathUtils.lerp(-0.3, 0.2, strikeProgress);
      }
    }
    
    // Recovery - long punish window
    if (this.stateTimer >= strikeTime && this.stateTimer < recoveryTime) {
      this.activeAttack = null;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        targetModel.rotation.x = THREE.MathUtils.lerp(targetModel.rotation.x, 0, 0.08);
      }
    }
    
    // End attack
    if (this.stateTimer >= recoveryTime) {
      this._endBossAttack();
    }
  }

  // ========== BOSS SWEEP ATTACK ==========
  // Horizontal sweep - wide arc, 0.6s windup, 1.0s punish
  _processBossSweepAttack(delta, player) {
    const attack = this.config.attacks?.HORIZONTAL_SWEEP;
    if (!attack) { this._changeState(STATES.CHASE); return; }
    
    const windupTime = attack.windup;
    const strikeTime = windupTime + 0.25;
    const recoveryTime = strikeTime + attack.recovery;
    
    // Windup - pull weapon to side
    if (this.stateTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta * 2);
      const progress = this.stateTimer / windupTime;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        targetModel.rotation.z = progress * 0.3; // Lean into swing
      }
      return;
    }
    
    // Strike - wide arc
    if (this.stateTimer >= windupTime && this.stateTimer < strikeTime) {
      if (!this.hitThisSwing) {
        // Sweep covers 180 degrees in front
        this.activeAttack = {
          position: this.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 0)),
          range: attack.range,
          damage: attack.damage,
          postureDmg: attack.postureDmg,
          isHeavy: false,
        };
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('swordSwing', { position: this.mesh.position, volume: 0.7 });
        }
      }
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        const strikeProgress = (this.stateTimer - windupTime) / 0.25;
        targetModel.rotation.z = THREE.MathUtils.lerp(0.3, -0.25, strikeProgress);
      }
    }
    
    // Recovery
    if (this.stateTimer >= strikeTime && this.stateTimer < recoveryTime) {
      this.activeAttack = null;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        targetModel.rotation.z = THREE.MathUtils.lerp(targetModel.rotation.z, 0, 0.1);
      }
    }
    
    if (this.stateTimer >= recoveryTime) {
      this._endBossAttack();
    }
  }

  // ========== BOSS COMBO ATTACK ==========
  // 3-hit combo - sweep, sweep, overhead finisher
  _processBossComboAttack(delta, player) {
    const attack = this.config.attacks?.THREE_HIT_COMBO;
    if (!attack) { this._changeState(STATES.CHASE); return; }
    
    const windupTime = attack.windup;
    const hitDuration = 0.3;
    const hitTotalTime = windupTime + hitDuration;
    const nextHitDelay = 0.15;
    
    // Calculate which hit we're on (0, 1, or 2)
    const hitIndex = this.bossComboHit || 0;
    const hitStartTime = hitIndex * (hitTotalTime + nextHitDelay);
    const localTimer = this.stateTimer - hitStartTime;
    
    // Windup for current hit
    if (localTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta * 3); // Fast tracking during combo
      const progress = localTimer / windupTime;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        const swingDir = hitIndex % 2 === 0 ? 1 : -1;
        targetModel.rotation.z = progress * 0.25 * swingDir;
      }
      return;
    }
    
    // Strike
    if (localTimer >= windupTime && localTimer < hitTotalTime) {
      if (!this.hitThisSwing) {
        const damages = attack.damages || [35, 35, 50];
        const damage = damages[hitIndex] || attack.damage;
        
        this.activeAttack = {
          position: this.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 0)),
          range: attack.range,
          damage: damage,
          postureDmg: attack.postureDmg,
          isHeavy: hitIndex === 2, // Final hit is heavy
          isCombo: true,
        };
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('swordSwing', { 
            position: this.mesh.position, 
            volume: 0.65,
            pitch: 0.85 + hitIndex * 0.1 
          });
        }
        this.hitThisSwing = true;
      }
      
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        const strikeProgress = (localTimer - windupTime) / hitDuration;
        const swingDir = hitIndex % 2 === 0 ? 1 : -1;
        targetModel.rotation.z = THREE.MathUtils.lerp(0.25 * swingDir, -0.2 * swingDir, strikeProgress);
      }
    }
    
    // Check for next hit or recovery
    if (localTimer >= hitTotalTime) {
      this.activeAttack = null;
      this.hitThisSwing = false;
      
      const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
      
      // Continue combo if player still in range and not final hit
      if (hitIndex < 2 && distToPlayer < this.config.attackRange * 1.3) {
        this.bossComboHit = hitIndex + 1;
        // Step forward during combo
        const fwd = new THREE.Vector3(Math.sin(this.mesh.rotation.y), 0, Math.cos(this.mesh.rotation.y));
        this.mesh.position.addScaledVector(fwd, 0.5);
      } else {
        // End combo - long recovery after full combo
        const targetModel = this.gltfModel || this.fallbackBody;
        if (targetModel) targetModel.rotation.z = 0;
        
        // Recovery time after combo
        if (localTimer >= hitTotalTime + attack.recovery) {
          this.bossComboHit = 0;
          this._endBossAttack();
        }
      }
    }
  }

  // ========== BOSS CHARGE ATTACK ==========
  // Shoulder bash - closes distance, high posture damage
  _processBossChargeAttack(delta, player) {
    const attack = this.config.attacks?.SHOULDER_BASH;
    if (!attack) { this._changeState(STATES.CHASE); return; }
    
    const windupTime = attack.windup;
    const chargeDuration = 0.4;
    const chargeTime = windupTime + chargeDuration;
    const recoveryTime = chargeTime + attack.recovery;
    
    // Windup - crouch and lower shoulder
    if (this.stateTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta * 2);
      this.chargeTarget = player.mesh.position.clone();
      const progress = this.stateTimer / windupTime;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        targetModel.position.y = -progress * 0.3; // Crouch
        targetModel.rotation.x = progress * 0.2; // Lean forward
      }
      return;
    }
    
    // Charge
    if (this.stateTimer >= windupTime && this.stateTimer < chargeTime) {
      if (!this.hitThisSwing) {
        this.activeAttack = {
          position: this.mesh.position.clone().add(new THREE.Vector3(0, 1, 0)),
          range: 2.0,
          damage: attack.damage,
          postureDmg: attack.postureDmg,
          isHeavy: true,
          isCharge: true,
        };
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('dash', { position: this.mesh.position, volume: 0.8 });
        }
      }
      
      // Move toward charge target
      const chargeSpeed = attack.range / chargeDuration;
      this._moveToward(this.chargeTarget, chargeSpeed, delta);
      
      // Update attack position as we move
      if (this.activeAttack) {
        this.activeAttack.position = this.mesh.position.clone().add(new THREE.Vector3(0, 1, 0));
      }
    }
    
    // Recovery - slide to stop
    if (this.stateTimer >= chargeTime && this.stateTimer < recoveryTime) {
      this.activeAttack = null;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        targetModel.position.y = THREE.MathUtils.lerp(targetModel.position.y, 0, 0.15);
        targetModel.rotation.x = THREE.MathUtils.lerp(targetModel.rotation.x, 0, 0.15);
      }
    }
    
    if (this.stateTimer >= recoveryTime) {
      this._endBossAttack();
    }
  }

  // ========== BOSS GRAB ATTACK ==========
  // Grab - unblockable, high damage, rare, long recovery
  _processBossGrabAttack(delta, player) {
    const attack = this.config.attacks?.GRAB;
    if (!attack) { this._changeState(STATES.CHASE); return; }
    
    const windupTime = attack.windup;
    const grabTime = windupTime + 0.3;
    const slamTime = grabTime + 0.5;
    const recoveryTime = slamTime + attack.recovery;
    
    // Windup - arms spread wide (clear telegraph)
    if (this.stateTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta * 1.5);
      const progress = this.stateTimer / windupTime;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        // Spread arms animation (simulated)
        targetModel.scale.x = 1 + progress * 0.15;
      }
      return;
    }
    
    // Grab attempt
    if (this.stateTimer >= windupTime && this.stateTimer < grabTime) {
      if (!this.hitThisSwing) {
        const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
        if (distToPlayer < attack.range) {
          // Grab connects - unblockable damage
          this.activeAttack = {
            position: this.mesh.position.clone(),
            range: attack.range,
            damage: attack.damage,
            postureDmg: 0,
            isGrab: true,
            isUnblockable: true,
          };
          this.grabTarget = player;
          if (this.gm?.audioManager) {
            this.gm.audioManager.play('criticalHit', { position: this.mesh.position, volume: 0.9 });
          }
        }
        this.hitThisSwing = true;
      }
    }
    
    // Slam animation (if grab connected)
    if (this.stateTimer >= grabTime && this.stateTimer < slamTime) {
      this.activeAttack = null;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        targetModel.scale.x = THREE.MathUtils.lerp(targetModel.scale.x, 1, 0.1);
      }
    }
    
    // Recovery - very long punish window
    if (this.stateTimer >= slamTime && this.stateTimer < recoveryTime) {
      this.grabTarget = null;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        targetModel.scale.x = 1;
      }
    }
    
    if (this.stateTimer >= recoveryTime) {
      this._endBossAttack();
    }
  }
  
  // End boss attack and set cooldown
  _endBossAttack() {
    this.hitThisSwing = false;
    this.activeAttack = null;
    this.bossComboHit = 0;
    this.chargeTarget = null;
    this.grabTarget = null;
    this.bossAttackCooldown = this.config.attackCooldown;
    
    // Reset model transforms
    const targetModel = this.gltfModel || this.fallbackBody;
    if (targetModel) {
      targetModel.rotation.x = 0;
      targetModel.rotation.z = 0;
      targetModel.position.y = 0;
      targetModel.scale.x = 1;
    }
    
    this._changeState(STATES.CHASE);
  }
  
  // ========== PHASE 2: SKELETON SUMMON ATTACK ==========
  // Raises arms, summons 2 Bone Revenants around the arena
  _processBossSummonAttack(delta, player) {
    const attack = this.config.attacks?.SKELETON_SUMMON;
    if (!attack) { this._changeState(STATES.CHASE); return; }
    
    const windupTime = attack.windup;
    const summonTime = windupTime + 0.5;
    const recoveryTime = summonTime + attack.recovery;
    
    // Windup - arms raised, purple energy gathers
    if (this.stateTimer < windupTime) {
      const progress = this.stateTimer / windupTime;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        // Arms raised (simulated via rotation/scale)
        targetModel.rotation.x = -progress * 0.2;
      }
      // Purple energy gathers (flash effect)
      if (this.stateTimer % 0.2 < 0.1) {
        this._flashModel(0x8844cc, 80);
      }
      // Play charging sound
      if (this.stateTimer < 0.1 && this.gm?.audioManager) {
        this.gm.audioManager.play('magic', { position: this.mesh.position, volume: 0.7 });
      }
      return;
    }
    
    // Summon moment - spawn the adds
    if (this.stateTimer >= windupTime && this.stateTimer < summonTime) {
      if (!this.hitThisSwing) {
        this.hitThisSwing = true;
        this.lastSummonTime = Date.now();
        this._spawnSkeletonAdds(attack.summonCount || 2);
        
        // Flash and sound
        this._flashModel(0xff44ff, 200);
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('ambush', { position: this.mesh.position, volume: 0.8 });
        }
        // Camera shake
        if (this.gm?.cameraController) {
          this.gm.cameraController.shakeLight();
        }
      }
    }
    
    // Recovery
    if (this.stateTimer >= summonTime && this.stateTimer < recoveryTime) {
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        targetModel.rotation.x = THREE.MathUtils.lerp(targetModel.rotation.x, 0, 0.1);
      }
    }
    
    if (this.stateTimer >= recoveryTime) {
      this._endBossAttack();
    }
  }
  
  // Spawn skeleton adds around the boss
  _spawnSkeletonAdds(count) {
    if (!this.enemyManager) return;
    
    const bossPos = this.mesh.position;
    const spawnRadius = 5;
    
    for (let i = 0; i < count; i++) {
      // Spawn in a circle around the boss
      const angle = (Math.PI * 2 * i / count) + Math.random() * 0.5;
      const spawnPos = new THREE.Vector3(
        bossPos.x + Math.cos(angle) * spawnRadius,
        bossPos.y,
        bossPos.z + Math.sin(angle) * spawnRadius
      );
      
      // Create the add as a temporary enemy
      const add = new Enemy(this.scene, spawnPos, {
        type: 'BONE_REVENANT',
        name: 'Summoned Revenant',
        behavior: 'guard',
      }, this.gm);
      
      // Make it visible immediately (not dormant)
      add.mesh.visible = true;
      add.isDormant = false;
      add.state = STATES.CHASE;
      add.healthBarGroup.visible = true;
      
      // Track for cleanup on boss death
      this.summonedAdds.push(add);
      this.enemyManager.enemies.push(add);
      
      // Rising effect
      const targetModel = add.gltfModel || add.fallbackBody;
      if (targetModel) {
        targetModel.position.y = -1;
        const riseAnim = () => {
          if (targetModel.position.y < 0) {
            targetModel.position.y += 0.05;
            requestAnimationFrame(riseAnim);
          }
        };
        riseAnim();
      }
    }
  }
  
  // ========== PHASE 2: GROUND SLAM AOE ATTACK ==========
  // Boss jumps high, slams down creating shockwave ring
  _processBossAOEAttack(delta, player) {
    const attack = this.config.attacks?.GROUND_SLAM_AOE;
    if (!attack) { this._changeState(STATES.CHASE); return; }
    
    const windupTime = attack.windup;
    const jumpTime = windupTime + 0.4;
    const slamTime = jumpTime + 0.3;
    const shockwaveTime = slamTime + 0.2;
    const recoveryTime = shockwaveTime + attack.recovery;
    
    const targetModel = this.gltfModel || this.fallbackBody;
    
    // Windup - crouch before jump
    if (this.stateTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta);
      this.playerTarget = player.mesh.position.clone();
      const progress = this.stateTimer / windupTime;
      if (targetModel) {
        targetModel.position.y = -progress * 0.3; // Crouch
      }
      // Store start position
      this.aoeStartY = this.mesh.position.y;
      return;
    }
    
    // Jump up
    if (this.stateTimer >= windupTime && this.stateTimer < jumpTime) {
      const jumpProgress = (this.stateTimer - windupTime) / 0.4;
      const jumpHeight = attack.jumpHeight || 3.0;
      // Parabolic jump
      const height = Math.sin(jumpProgress * Math.PI) * jumpHeight;
      this.mesh.position.y = this.aoeStartY + height;
      
      if (targetModel) {
        targetModel.position.y = 0;
        targetModel.rotation.x = -0.3; // Tucked position
      }
      
      // Move toward player position during jump
      const targetPos = this.playerTarget || player.mesh.position;
      this._moveToward(targetPos, 8, delta);
      return;
    }
    
    // Slam down
    if (this.stateTimer >= jumpTime && this.stateTimer < slamTime) {
      const slamProgress = (this.stateTimer - jumpTime) / 0.3;
      // Rapid descent
      this.mesh.position.y = THREE.MathUtils.lerp(this.mesh.position.y, this.aoeStartY, slamProgress * 2);
      if (targetModel) {
        targetModel.rotation.x = THREE.MathUtils.lerp(-0.3, 0.2, slamProgress);
      }
    }
    
    // Shockwave - damage frame
    if (this.stateTimer >= slamTime && this.stateTimer < shockwaveTime) {
      this.mesh.position.y = this.aoeStartY;
      
      if (!this.hitThisSwing) {
        this.hitThisSwing = true;
        
        // Create AOE damage zone
        this.activeAttack = {
          position: this.mesh.position.clone(),
          range: attack.range,
          damage: attack.damage,
          postureDmg: attack.postureDmg,
          isHeavy: true,
          isAOE: true,
        };
        
        // Visual shockwave ring
        this._createShockwaveEffect();
        
        // Sound and camera shake
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('postureBreak', { position: this.mesh.position, volume: 1.0, pitch: 0.6 });
        }
        if (this.gm?.cameraController) {
          this.gm.cameraController.shake(0.5, 0.4);
        }
      }
    }
    
    // Recovery
    if (this.stateTimer >= shockwaveTime && this.stateTimer < recoveryTime) {
      this.activeAttack = null;
      if (targetModel) {
        targetModel.rotation.x = THREE.MathUtils.lerp(targetModel.rotation.x, 0, 0.1);
      }
    }
    
    if (this.stateTimer >= recoveryTime) {
      this._endBossAttack();
    }
  }
  
  // Create visual shockwave effect
  _createShockwaveEffect() {
    const ringGeo = new THREE.RingGeometry(0.5, 1.5, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8844cc,
      transparent: true,
      opacity: 0.8,
      side: THREE.DoubleSide,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.copy(this.mesh.position);
    ring.position.y = 0.1;
    this.scene.add(ring);
    
    // Expand and fade
    const maxRadius = this.config.attacks?.GROUND_SLAM_AOE?.range || 8;
    const startTime = Date.now();
    const duration = 400;
    
    const animateRing = () => {
      const elapsed = Date.now() - startTime;
      const progress = elapsed / duration;
      
      if (progress < 1) {
        const scale = 1 + progress * maxRadius;
        ring.scale.set(scale, scale, 1);
        ring.material.opacity = 0.8 * (1 - progress);
        requestAnimationFrame(animateRing);
      } else {
        this.scene.remove(ring);
        ring.geometry.dispose();
        ring.material.dispose();
      }
    };
    animateRing();
  }
  
  // ========== PHASE 2: DARK PROJECTILE ATTACK ==========
  // Casts a tracking purple orb at the player
  _processBossProjectileAttack(delta, player) {
    const attack = this.config.attacks?.DARK_PROJECTILE;
    if (!attack) { this._changeState(STATES.CHASE); return; }
    
    const windupTime = attack.windup;
    const castTime = windupTime + 0.2;
    const recoveryTime = castTime + attack.recovery;
    
    // Windup - arm extends, energy gathers
    if (this.stateTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta * 3);
      const progress = this.stateTimer / windupTime;
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        targetModel.rotation.z = progress * 0.15; // Lean into cast
      }
      // Purple glow charging
      if (this.stateTimer % 0.15 < 0.075) {
        this._flashModel(0x6622aa, 60);
      }
      return;
    }
    
    // Cast - spawn projectile
    if (this.stateTimer >= windupTime && this.stateTimer < castTime) {
      if (!this.hitThisSwing) {
        this.hitThisSwing = true;
        this._spawnDarkProjectile(player, attack);
        
        // Sound
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('swordSwing', { position: this.mesh.position, volume: 0.6, pitch: 1.5 });
        }
      }
    }
    
    // Recovery
    if (this.stateTimer >= castTime && this.stateTimer < recoveryTime) {
      const targetModel = this.gltfModel || this.fallbackBody;
      if (targetModel) {
        targetModel.rotation.z = THREE.MathUtils.lerp(targetModel.rotation.z, 0, 0.15);
      }
    }
    
    if (this.stateTimer >= recoveryTime) {
      this._endBossAttack();
    }
  }
  
  // Spawn a tracking dark projectile
  _spawnDarkProjectile(player, attackConfig) {
    // Create projectile mesh
    const projGeo = new THREE.SphereGeometry(0.4, 16, 16);
    const projMat = new THREE.MeshBasicMaterial({
      color: 0x8844cc,
      transparent: true,
      opacity: 0.9,
    });
    const projectile = new THREE.Mesh(projGeo, projMat);
    
    // Start position (in front of boss)
    const fwd = new THREE.Vector3(Math.sin(this.mesh.rotation.y), 0, Math.cos(this.mesh.rotation.y));
    projectile.position.copy(this.mesh.position).add(fwd.multiplyScalar(1.5)).add(new THREE.Vector3(0, 1.5, 0));
    
    // Inner glow
    const glowGeo = new THREE.SphereGeometry(0.25, 12, 12);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xff44ff,
      transparent: true,
      opacity: 1.0,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    projectile.add(glow);
    
    // Point light for atmosphere
    const light = new THREE.PointLight(0x8844cc, 2, 5);
    projectile.add(light);
    
    this.scene.add(projectile);
    
    // Track projectile
    this.activeProjectiles.push({
      mesh: projectile,
      target: player,
      speed: attackConfig.speed || 8,
      tracking: attackConfig.trackingStrength || 3.0,
      damage: attackConfig.damage || 40,
      lifetime: 0,
      maxLifetime: 5.0, // 5 seconds max
      direction: new THREE.Vector3().subVectors(player.mesh.position, projectile.position).normalize(),
    });
  }
  
  // Update all active projectiles
  _updateProjectiles(delta, player) {
    for (let i = this.activeProjectiles.length - 1; i >= 0; i--) {
      const proj = this.activeProjectiles[i];
      proj.lifetime += delta;
      
      // Expire old projectiles
      if (proj.lifetime > proj.maxLifetime) {
        this._destroyProjectile(i);
        continue;
      }
      
      // Track toward player
      const toPlayer = new THREE.Vector3().subVectors(
        player.mesh.position.clone().add(new THREE.Vector3(0, 1, 0)),
        proj.mesh.position
      );
      const dist = toPlayer.length();
      toPlayer.normalize();
      
      // Smooth tracking
      proj.direction.lerp(toPlayer, proj.tracking * delta);
      proj.direction.normalize();
      
      // Move projectile
      proj.mesh.position.addScaledVector(proj.direction, proj.speed * delta);
      
      // Rotate for visual effect
      proj.mesh.rotation.x += delta * 3;
      proj.mesh.rotation.y += delta * 2;
      
      // Check collision with player
      if (dist < 1.2 && !player.isInvincible) {
        // Hit player
        const result = this.gm?.takeDamage(proj.damage, 'magic', 10, player.isBlocking);
        player.flashDamage();
        
        // HUD flash
        if (this.gm?.hud) {
          this.gm.hud.flashDamage(0.6);
        }
        
        // Camera shake
        if (this.gm?.cameraController) {
          this.gm.cameraController.shakeMedium();
        }
        
        // Impact particles
        if (this.gm?.particleManager) {
          this.gm.particleManager.spawnHitSparks(proj.mesh.position, 8, false);
        }
        
        this._destroyProjectile(i);
        continue;
      }
      
      // Destroy if too far from arena
      if (dist > 30) {
        this._destroyProjectile(i);
      }
    }
  }
  
  // Clean up projectile
  _destroyProjectile(index) {
    const proj = this.activeProjectiles[index];
    if (proj && proj.mesh) {
      // Explosion effect
      const pos = proj.mesh.position.clone();
      
      // Small flash
      const flashGeo = new THREE.SphereGeometry(0.8, 8, 8);
      const flashMat = new THREE.MeshBasicMaterial({
        color: 0x8844cc,
        transparent: true,
        opacity: 0.8,
      });
      const flash = new THREE.Mesh(flashGeo, flashMat);
      flash.position.copy(pos);
      this.scene.add(flash);
      
      // Fade flash
      const fadeFlash = () => {
        flash.scale.multiplyScalar(1.1);
        flash.material.opacity -= 0.1;
        if (flash.material.opacity > 0) {
          requestAnimationFrame(fadeFlash);
        } else {
          this.scene.remove(flash);
          flash.geometry.dispose();
          flash.material.dispose();
        }
      };
      fadeFlash();
      
      // Remove projectile
      this.scene.remove(proj.mesh);
      proj.mesh.geometry.dispose();
      proj.mesh.material.dispose();
    }
    this.activeProjectiles.splice(index, 1);
  }

  _processAttack(delta, player) {
    const windupTime = this.config.attackWindup;
    const strikeTime = windupTime + this.config.attackDuration;
    
    if (this.stateTimer < windupTime) {
      this._faceTarget(player.mesh.position, delta * 2);
      return;
    }

    if (this.stateTimer >= windupTime && this.stateTimer < strikeTime) {
      if (!this.hitThisSwing) {
        const attackDir = new THREE.Vector3(
          Math.sin(this.mesh.rotation.y),
          0,
          Math.cos(this.mesh.rotation.y)
        );
        this.activeAttack = {
          position: this.mesh.position.clone().add(attackDir.multiplyScalar(1.0)).add(new THREE.Vector3(0, 1, 0)),
          range: this.config.attackRange,
          damage: this.config.damage,
          postureDmg: this.config.postureDmg,
        };
      }
    }

    if (this.stateTimer >= this.config.attackCooldown) {
      this.hitThisSwing = false;
      this.activeAttack = null;

      const distToPlayer = this.mesh.position.distanceTo(player.mesh.position);
      
      if (this.config.canChainAttacks && distToPlayer <= this.config.attackRange * 1.3) {
        this.chainAttackCount++;
        if (this.chainAttackCount < this.config.maxChainAttacks) {
          this._changeState(STATES.ATTACK);
          return;
        }
      }
      
      this.chainAttackCount = 0;
      
      if (distToPlayer <= this.config.attackRange) {
        this._changeState(STATES.ATTACK);
      } else {
        this._changeState(STATES.CHASE);
      }
    }
  }

  takeDamage(amount, postureDmg = 0, attackerPos = null) {
    if (this.state === STATES.DEAD) return 'dead';
    
    // Boss is invulnerable during phase transition
    if (this.state === STATES.BOSS_TRANSITION) return 'immune';
    
    if (this.isBlocking) {
      amount = Math.floor(amount * 0.3);
      postureDmg = Math.floor(postureDmg * 0.5);
      this._flashModel(0x444466, 100);
    }

    if (this.state === STATES.STAGGERED) postureDmg *= 2;

    this.health -= amount;
    this.posture = Math.min(this.maxPosture, this.posture + postureDmg);
    
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('hitImpact', { 
        position: this.mesh.position, 
        volume: 0.6,
        variation: 0.15
      });
      this.gm.audioManager.playEnemyGrunt(this.mesh.position);
    }

    const ratio = Math.max(0, this.health / this.maxHealth);
    this.healthFill.scale.x = ratio;
    this.healthFill.position.x = -(1 - ratio) * 0.49 * 0.5;
    this.healthBarGroup.visible = true;
    
    this._updatePostureBar();

    this._flashModel(0x440000, 100);
    this._applyHitRecoil(attackerPos, amount);

    if (this.health <= 0) {
      this._die();
      return 'died';
    }

    // CRYPT_LORD phase transition at 50% HP
    if (this.isBoss && this.bossPhase === 1 && this.health <= this.maxHealth * 0.5) {
      this._enterPhase2CryptLord();
      return 'phase_transition';
    }

    if (this.posture >= this.maxPosture && this.state !== STATES.STAGGERED) {
      this._triggerPostureBreak();
      return 'staggered';
    }

    if (this.state === STATES.IDLE || this.state === STATES.PATROL) {
      this._changeState(STATES.CHASE);
    }

    return 'hit';
  }
  
  // ========== CRYPT LORD PHASE 2 TRANSITION ==========
  _enterPhase2CryptLord() {
    this.bossPhase = 2;
    this.posture = 0;
    this.activeAttack = null;
    this.hitThisSwing = false;
    
    // Start transition state
    this._changeState(STATES.BOSS_TRANSITION);
    
    // Trigger arena phase transition
    if (this.world && this.world.setBossArenaPhase) {
      this.world.setBossArenaPhase('transition');
    }
    
    // Play roar sound
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('bossRoar', { position: this.mesh.position, volume: 1.0 });
    }
    
    // Phase 2 stat changes (from design doc)
    this.config.damage = 55;
    this.config.postureDmg = 45;
    this.config.moveSpeed = 2.5;
    this.config.attackCooldown = 1.2;
    this.config.maxPosture = 250;
    this.maxPosture = 250;
    
    // Start transformation sequence (4 seconds)
    this._cryptLordTransformSequence();
  }
  
  _cryptLordTransformSequence() {
    const transformDuration = 4000; // 4 seconds
    const startTime = Date.now();
    const targetModel = this.gltfModel || this.fallbackBody;
    const originalScale = targetModel ? targetModel.scale.clone() : new THREE.Vector3(1, 1, 1);
    const targetScale = originalScale.clone().multiplyScalar(1.25); // Scale to 1.5x (1.2 * 1.25 = 1.5)
    
    // Camera shake for drama
    if (this.gm?.cameraController) {
      this.gm.cameraController.shake(0.3, 4.0);
    }
    
    const animateTransform = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / transformDuration, 1);
      
      if (this.state !== STATES.BOSS_TRANSITION) return; // Cancelled
      
      // Scale model up
      if (targetModel) {
        targetModel.scale.lerpVectors(originalScale, targetScale, progress);
        // Convulsions
        targetModel.rotation.z = Math.sin(elapsed * 0.02) * 0.15 * (1 - progress);
        targetModel.rotation.x = Math.sin(elapsed * 0.015) * 0.1 * (1 - progress);
      }
      
      // Eye glow intensifies
      if (this.eye) {
        const intensity = 4 + progress * 6;
        this.eye.material.emissiveIntensity = intensity;
        // Shift to purple
        const r = THREE.MathUtils.lerp(1.0, 1.0, progress);
        const g = THREE.MathUtils.lerp(0.13, 0.0, progress);
        const b = THREE.MathUtils.lerp(0.13, 1.0, progress);
        this.eye.material.emissive.setRGB(r, g, b);
        this.eye.material.color.setRGB(r, g, b);
      }
      
      // Flash model with purple energy
      if (elapsed % 300 < 150) {
        this._flashModel(0x8844cc, 100);
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateTransform);
      } else {
        // Transformation complete
        this._completeCryptLordTransform(targetModel);
      }
    };
    
    animateTransform();
  }
  
  _completeCryptLordTransform(targetModel) {
    // Reset rotation
    if (targetModel) {
      targetModel.rotation.z = 0;
      targetModel.rotation.x = 0;
    }
    
    // Set eye to purple
    if (this.eye) {
      this.eye.material.emissive.setHex(0xff00ff);
      this.eye.material.color.setHex(0xff00ff);
      this.eye.material.emissiveIntensity = 5;
    }
    
    // Apply purple tint to model
    this._applyModelTint(0x4422aa);
    
    // Switch arena to Phase 2
    if (this.world && this.world.setBossArenaPhase) {
      this.world.setBossArenaPhase('phase2');
    }
    
    // Reset attack cooldown and go aggressive
    this.bossAttackCooldown = 0.5;
    this._changeState(STATES.CHASE);
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
    } else if (this.fallbackBody && this.fallbackBody.material) {
      this.fallbackBody.material.emissive.setHex(color);
      setTimeout(() => this.fallbackBody.material.emissive.setHex(0x000000), duration);
    }
    
    if (this.eye && this.eye.material) {
      const origColor = this.eye.material.emissive.getHex();
      this.eye.material.emissive.setHex(color);
      setTimeout(() => this.eye.material.emissive.setHex(origColor), duration);
    }
  }
  
  _applyHitRecoil(attackerPos, damage) {
    let knockDir;
    if (attackerPos) {
      knockDir = new THREE.Vector3().subVectors(this.mesh.position, attackerPos);
      knockDir.y = 0;
      knockDir.normalize();
    } else {
      const faceAngle = this.mesh.rotation.y;
      knockDir = new THREE.Vector3(-Math.sin(faceAngle), 0, -Math.cos(faceAngle));
    }
    
    const recoilStrength = Math.min(0.5, damage * 0.015);
    const startPos = this.mesh.position.clone();
    const recoilPos = startPos.clone().add(knockDir.multiplyScalar(recoilStrength));
    
    const targetModel = this.gltfModel || this.fallbackBody;
    const originalTiltZ = targetModel ? targetModel.rotation.z : 0;
    const tiltDirection = Math.random() > 0.5 ? 1 : -1;
    if (targetModel) targetModel.rotation.z = originalTiltZ + tiltDirection * 0.15;
    
    let recoilTime = 0;
    const recoilDuration = 0.12;
    
    const animateRecoil = () => {
      recoilTime += 0.016;
      const t = Math.min(1, recoilTime / recoilDuration);
      const easeOut = 1 - Math.pow(1 - t, 3);
      
      this.mesh.position.lerpVectors(recoilPos, startPos, easeOut);
      
      if (targetModel) {
        targetModel.rotation.z = THREE.MathUtils.lerp(
          originalTiltZ + tiltDirection * 0.15,
          originalTiltZ,
          easeOut
        );
      }
      
      if (t < 1) {
        requestAnimationFrame(animateRecoil);
      }
    };
    
    this.mesh.position.copy(recoilPos);
    requestAnimationFrame(animateRecoil);
  }
  
  _triggerPostureBreak() {
    this._changeState(STATES.STAGGERED);
    this.breakIndicator.visible = true;
    
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('postureBreak', { 
        position: this.mesh.position, 
        volume: 0.7 
      });
    }
    
    this._flashModel(0xffcc00, 300);
    this.postureFill.material.color.setHex(0xff4400);
    setTimeout(() => this.postureFill.material.color.setHex(0xffcc00), 300);
  }
  
  _updatePostureBar() {
    const ratio = this.posture / this.maxPosture;
    this.postureFill.scale.x = ratio;
    this.postureFill.position.x = -(1 - ratio) * 0.49 * 0.5;
  }

  _die() {
    this.state = STATES.DEAD;
    this.isDead = true;
    this.health = 0;
    this.activeAttack = null;
    this.breakIndicator.visible = false;

    this._playAnimation(STATES.DEAD, { loop: false, clampWhenFinished: true });
    this.healthBarGroup.visible = false;

    // === CRYPT LORD BOSS DEATH ===
    if (this.isBoss) {
      this.bossActive = false;
      
      // Deactivate boss arena (clears fog gate, spawns victory bonfire)
      if (this.world && this.world.deactivateBossArena) {
        this.world.deactivateBossArena();
      }
      
      // Clean up summoned adds
      if (this.summonedAdds) {
        this.summonedAdds.forEach(add => {
          if (add && !add.isDead) {
            add._die();
          }
        });
        this.summonedAdds = [];
      }
      
      // Clean up active projectiles
      if (this.activeProjectiles) {
        for (let i = this.activeProjectiles.length - 1; i >= 0; i--) {
          this._destroyProjectile(i);
        }
      }
      
      // Play boss death sound
      if (this.gm?.audioManager) {
        this.gm.audioManager.play('bossRoar', { position: this.mesh.position, volume: 0.8 });
      }
      
      // Dramatic death with purple energy dissolution
      this._cryptLordDeathSequence();
      return; // Skip normal fade
    }

    // Fade out after death animation (normal enemies)
    setTimeout(() => {
      this._fadeOutModel();
    }, 2000);
  }
  
  _cryptLordDeathSequence() {
    const deathDuration = 5000; // 5 seconds
    const startTime = Date.now();
    const targetModel = this.gltfModel || this.fallbackBody;
    const dropPosition = this.mesh.position.clone();
    
    // Camera shake
    if (this.gm?.cameraController) {
      this.gm.cameraController.shake(0.4, 3.0);
    }
    
    // Show victory notification immediately
    if (this.gm?.itemManager) {
      this.gm.itemManager.showVictoryNotification('THE CRYPT LORD');
    }
    
    const animateDeath = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / deathDuration, 1);
      
      if (targetModel) {
        // Fall to knees, then dissolve
        if (progress < 0.3) {
          // Stumble and fall
          const fallProgress = progress / 0.3;
          targetModel.position.y = -fallProgress * 0.5;
          targetModel.rotation.x = fallProgress * 0.3;
          targetModel.rotation.z = fallProgress * 0.15;
        } else {
          // Dissolve with purple energy
          const dissolveProgress = (progress - 0.3) / 0.7;
          
          // Flash with energy
          if (elapsed % 200 < 100) {
            this._flashModel(0x8844cc, 50);
          }
          
          // Fade opacity
          targetModel.traverse((child) => {
            if (child.isMesh && child.material) {
              const mats = Array.isArray(child.material) ? child.material : [child.material];
              mats.forEach(mat => {
                mat.transparent = true;
                mat.opacity = 1 - dissolveProgress;
              });
            }
          });
        }
      }
      
      // Eye fades
      if (this.eye) {
        this.eye.material.emissiveIntensity = 5 * (1 - progress);
        this.eye.material.opacity = 1 - progress;
      }
      
      if (progress < 1) {
        requestAnimationFrame(animateDeath);
      } else {
        this.mesh.visible = false;
        
        // === SPAWN BOSS REWARDS ===
        this._spawnCryptLordRewards(dropPosition);
      }
    };
    
    animateDeath();
  }
  
  // Spawn Crypt Lord boss rewards
  _spawnCryptLordRewards(position) {
    if (!this.gm?.itemManager) return;
    
    // Determine which unique item to drop (50/50 chance)
    const dropWeapon = Math.random() < 0.5;
    const itemDef = dropWeapon 
      ? BOSS_ITEMS.CRYPT_LORDS_GREATSWORD 
      : BOSS_ITEMS.LORD_SOUL_FRAGMENT;
    
    // Spawn rewards: 2500 remnants + unique item
    this.gm.itemManager.spawnBossRewards(
      position,
      'crypt-lord',
      this.config.remnantDrop || 2500,
      itemDef
    );
    
    // Mark boss as permanently defeated (prevent respawn)
    this.bossDefeated = true;
    if (this.enemyManager) {
      this.enemyManager.markBossDefeated('crypt-lord');
    }
  }

  _fadeOutModel() {
    const targetModel = this.gltfModel || this.fallbackBody;
    if (!targetModel) return;

    // Make materials transparent
    targetModel.traverse((child) => {
      if (child.isMesh && child.material) {
        const mats = Array.isArray(child.material) ? child.material : [child.material];
        mats.forEach(mat => {
          mat.transparent = true;
        });
      }
    });

    const fadeOut = () => {
      let allFaded = true;
      targetModel.traverse((child) => {
        if (child.isMesh && child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach(mat => {
            if (mat.opacity > 0) {
              mat.opacity -= 0.02;
              allFaded = false;
            }
          });
        }
      });
      
      if (!allFaded) {
        requestAnimationFrame(fadeOut);
      } else {
        this.mesh.visible = false;
      }
    };
    
    fadeOut();
  }

  respawn() {
    this.health = this.maxHealth;
    this.posture = 0;
    this.isDead = false;
    this.stateTimer = 0;
    this.chainAttackCount = 0;
    this.circleTimer = 0;
    this.isBlocking = false;
    this.stuckTimer = 0;
    this.unstuckAttempts = 0;
    this.avoidanceDir = null;
    this.avoidanceTimer = 0;
    
    // Reset retreat state
    this.isRetreating = false;
    this.retreatStartPos = null;
    this.retreatWallHits = 0;
    
    // Find valid spawn position (not inside walls)
    let spawnPosition = this.spawnPos.clone();
    if (this.world && this.world.checkCollision) {
      if (this.world.checkCollision(spawnPosition, this.collisionRadius).collides) {
        // Spawn point is in a wall - try nearby positions
        const offsets = [
          new THREE.Vector3(1, 0, 0), new THREE.Vector3(-1, 0, 0),
          new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1),
          new THREE.Vector3(1, 0, 1), new THREE.Vector3(-1, 0, 1),
          new THREE.Vector3(1, 0, -1), new THREE.Vector3(-1, 0, -1),
        ];
        for (const offset of offsets) {
          const testPos = this.spawnPos.clone().add(offset);
          if (!this.world.checkCollision(testPos, this.collisionRadius).collides) {
            spawnPosition = testPos;
            break;
          }
        }
      }
    }
    this.mesh.position.copy(spawnPosition);
    this.lastPosition.copy(spawnPosition);
    
    // Check if this enemy should respawn dormant (ambush behavior)
    const shouldBeDormant = this.config.behavior === 'ambush' || this.config.isAmbush;
    this.isDormant = shouldBeDormant;
    this.state = shouldBeDormant ? STATES.DORMANT : STATES.IDLE;
    
    // Reset model
    const targetModel = this.gltfModel || this.fallbackBody;
    if (targetModel) {
      targetModel.rotation.x = 0;
      targetModel.rotation.z = 0;
      targetModel.position.y = 0;
      targetModel.traverse((child) => {
        if (child.isMesh && child.material) {
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          mats.forEach(mat => {
            mat.opacity = 1;
            mat.transparent = false;
          });
        }
      });
    }
    
    // Dormant enemies stay hidden until triggered again
    this.mesh.visible = !shouldBeDormant;
    this.healthBarGroup.visible = false;
    this.breakIndicator.visible = false;
    this.healthFill.scale.x = 1;
    this.healthFill.position.x = 0;
    this.postureFill.scale.x = 0;
    this.postureFill.position.x = 0;
    
    this._playAnimation(shouldBeDormant ? STATES.DORMANT : STATES.IDLE, { loop: true });
  }

  _moveToward(target, speed, delta) {
    const dir = new THREE.Vector3().subVectors(target, this.mesh.position);
    dir.y = 0;
    const distToTarget = dir.length();
    
    if (distToTarget < 0.5) return; // Close enough
    
    dir.normalize();
    const moveAmount = speed * delta;
    
    // Calculate proposed new position
    const proposedPos = this.mesh.position.clone().addScaledVector(dir, moveAmount);
    
    // Check collision with walls/structures
    if (this.world && this.world.checkCollision) {
      const collisionResult = this.world.checkCollision(proposedPos, this.collisionRadius);
      
      if (collisionResult.collides) {
        // Try to slide along the obstacle
        const slideDir = this._findSlideDirection(dir, collisionResult, delta);
        
        if (slideDir) {
          // Apply sliding movement
          const slidePos = this.mesh.position.clone().addScaledVector(slideDir, moveAmount * 0.7);
          const slideCollision = this.world.checkCollision(slidePos, this.collisionRadius);
          
          if (!slideCollision.collides) {
            this.mesh.position.copy(slidePos);
            this.avoidanceDir = slideDir.clone();
            this.avoidanceTimer = 0.5; // Keep sliding for half a second
          } else {
            // Both direct and slide blocked - try perpendicular
            this._tryPerpendicularMove(dir, moveAmount, delta);
          }
        } else {
          // No valid slide - try perpendicular movement
          this._tryPerpendicularMove(dir, moveAmount, delta);
        }
      } else {
        // No collision - move freely
        this.mesh.position.copy(proposedPos);
        this.avoidanceDir = null;
        this.avoidanceTimer = 0;
      }
    } else {
      // No world reference - move without collision (fallback)
      this.mesh.position.addScaledVector(dir, moveAmount);
    }
  }
  
  // Find a direction to slide along an obstacle
  _findSlideDirection(moveDir, collisionResult, delta) {
    // Calculate perpendicular directions
    const perpRight = new THREE.Vector3(-moveDir.z, 0, moveDir.x);
    const perpLeft = new THREE.Vector3(moveDir.z, 0, -moveDir.x);
    
    // If we have a collision normal, use it to determine better slide direction
    if (collisionResult.normal) {
      // Project movement onto the collision surface (slide)
      const dot = moveDir.dot(collisionResult.normal);
      const slideDir = moveDir.clone().sub(collisionResult.normal.clone().multiplyScalar(dot));
      if (slideDir.length() > 0.1) {
        return slideDir.normalize();
      }
    }
    
    // If avoidance timer is active, continue previous direction
    if (this.avoidanceDir && this.avoidanceTimer > 0) {
      this.avoidanceTimer -= delta;
      return this.avoidanceDir;
    }
    
    // Pick a perpendicular based on unstuck attempts (alternates)
    return (this.unstuckAttempts % 2 === 0) ? perpRight : perpLeft;
  }
  
  // Try moving perpendicular when both direct and slide are blocked
  _tryPerpendicularMove(moveDir, moveAmount, delta) {
    if (!this.world) return;
    
    const perpRight = new THREE.Vector3(-moveDir.z, 0, moveDir.x);
    const perpLeft = new THREE.Vector3(moveDir.z, 0, -moveDir.x);
    
    // Try right
    const rightPos = this.mesh.position.clone().addScaledVector(perpRight, moveAmount);
    if (!this.world.checkCollision(rightPos, this.collisionRadius).collides) {
      this.mesh.position.copy(rightPos);
      this.avoidanceDir = perpRight;
      this.avoidanceTimer = 0.3;
      return;
    }
    
    // Try left
    const leftPos = this.mesh.position.clone().addScaledVector(perpLeft, moveAmount);
    if (!this.world.checkCollision(leftPos, this.collisionRadius).collides) {
      this.mesh.position.copy(leftPos);
      this.avoidanceDir = perpLeft;
      this.avoidanceTimer = 0.3;
      return;
    }
    
    // Both blocked - increment stuck counter (handled in _checkStuck)
  }
  
  // Check if enemy is stuck and needs a new path
  _checkStuck(delta) {
    const movedDist = this.mesh.position.distanceTo(this.lastPosition);
    
    if (movedDist < 0.05) {
      // Hasn't moved much
      this.stuckTimer += delta;
      
      if (this.stuckTimer > this.stuckThreshold) {
        // Enemy is stuck - take action
        this.unstuckAttempts++;
        this.stuckTimer = 0;
        
        if (this.unstuckAttempts > 3) {
          // Multiple attempts failed - try teleporting to a valid patrol position
          this._pickPatrolTarget();
          
          // Verify patrol target isn't in a wall
          if (this.world && this.world.checkCollision) {
            let attempts = 0;
            while (this.world.checkCollision(this.patrolTarget, this.collisionRadius).collides && attempts < 5) {
              this._pickPatrolTarget();
              attempts++;
            }
          }
          
          this.unstuckAttempts = 0;
          this._changeState(STATES.PATROL);
        } else {
          // Switch direction or pick new patrol point
          this.circleDirection *= -1; // Flip circle direction
          if (this.state === STATES.CHASE || this.state === STATES.CIRCLE) {
            this._changeState(STATES.CIRCLE); // Circle to find a path
          }
        }
      }
    } else {
      // Moving fine - reset stuck timer
      this.stuckTimer = 0;
      this.unstuckAttempts = 0;
    }
    
    // Update last position
    this.lastPosition.copy(this.mesh.position);
  }

  _faceTarget(target, delta) {
    const dir = new THREE.Vector3().subVectors(target, this.mesh.position);
    dir.y = 0;
    if (dir.length() > 0.1) {
      const angle = Math.atan2(dir.x, dir.z);
      this.mesh.rotation.y = THREE.MathUtils.lerp(this.mesh.rotation.y, angle, 5 * delta);
    }
  }

  _pickPatrolTarget() {
    const angle = Math.random() * Math.PI * 2;
    const dist = Math.random() * this.config.patrolRadius;
    this.patrolTarget.set(
      this.spawnPos.x + Math.cos(angle) * dist,
      0,
      this.spawnPos.z + Math.sin(angle) * dist
    );
  }

  _changeState(newState) {
    if (this.state === newState) return;
    if (this.state === STATES.ATTACK) {
      this.activeAttack = null;
      this.hitThisSwing = false;
    }
    if (newState === STATES.CIRCLE) {
      this.circleTimer = 0;
      this.circleDirection = Math.random() > 0.5 ? 1 : -1;
    }
    this.state = newState;
    this.stateTimer = 0;
    
    this._playAnimation(newState);
  }
}
