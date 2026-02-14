/**
 * BossAI.js - World Boss AI System
 * Phase 21: Boss Encounters
 * 
 * Handles unique boss behavior patterns, phase transitions,
 * telegraphed attacks, and state machine for world bosses.
 * Integrates with BossData.js for boss definitions.
 */

import * as THREE from 'three';
import { 
  getBossById, 
  getCurrentPhase, 
  getAbilitiesForPhase,
  BOSS_ABILITIES,
  ABILITY_TYPE,
} from '../data/BossData.js';

// ========== BOSS AI STATES ==========
export const BOSS_STATE = {
  DORMANT: 'dormant',           // Waiting for player to enter arena
  AWAKENING: 'awakening',       // Initial wake-up sequence
  IDLE: 'idle',                 // Standing, watching player
  PATROL: 'patrol',             // Patrolling arena (rare)
  AGGRO: 'aggro',               // Moving toward player
  POSITIONING: 'positioning',   // Getting into attack range
  TELEGRAPH: 'telegraph',       // Winding up attack (player can see this)
  ATTACKING: 'attacking',       // Active attack frames
  RECOVERY: 'recovery',         // Recovery after attack (punish window)
  PHASE_TRANSITION: 'phase_transition', // Changing phases (invulnerable)
  ENRAGED: 'enraged',           // Low HP enrage mode
  STUNNED: 'stunned',           // Posture broken / staggered
  SUMMONING: 'summoning',       // Summoning minions
  DEAD: 'dead',                 // Defeated
};

// ========== ATTACK PATTERNS ==========
// Different attack selection strategies per phase
const ATTACK_PATTERNS = {
  methodical: {
    // Slow, deliberate attacks - easy to learn
    attackDelay: 2.5,
    abilityWeights: { melee: 0.5, ranged: 0.2, aoe: 0.2, special: 0.1 },
    repositionChance: 0.3,
  },
  aggressive: {
    // Faster, more relentless
    attackDelay: 1.5,
    abilityWeights: { melee: 0.4, ranged: 0.3, aoe: 0.2, special: 0.1 },
    repositionChance: 0.2,
  },
  tactical: {
    // Balanced, uses full moveset
    attackDelay: 2.0,
    abilityWeights: { melee: 0.35, ranged: 0.25, aoe: 0.25, special: 0.15 },
    repositionChance: 0.25,
  },
  hit_and_run: {
    // Fast attacks, lots of movement
    attackDelay: 1.2,
    abilityWeights: { melee: 0.3, ranged: 0.2, aoe: 0.15, special: 0.35 },
    repositionChance: 0.5,
  },
  summoner: {
    // Relies on minions, defensive
    attackDelay: 3.0,
    abilityWeights: { melee: 0.2, ranged: 0.2, aoe: 0.15, summon: 0.35, buff: 0.1 },
    repositionChance: 0.15,
  },
  desperate: {
    // Low HP - all out aggression
    attackDelay: 1.0,
    abilityWeights: { melee: 0.35, ranged: 0.2, aoe: 0.3, special: 0.15 },
    repositionChance: 0.1,
  },
  defensive: {
    // Careful, focuses on survival
    attackDelay: 3.5,
    abilityWeights: { melee: 0.3, ranged: 0.3, aoe: 0.1, buff: 0.3 },
    repositionChance: 0.4,
  },
};

/**
 * BossAI - Handles world boss behavior and decision making
 */
export class BossAI {
  constructor(bossEntity, bossData, gameManager = null) {
    this.boss = bossEntity;      // Reference to the boss mesh/entity
    this.data = bossData;        // BossData definition
    this.gm = gameManager;
    
    // State machine
    this.state = BOSS_STATE.DORMANT;
    this.previousState = null;
    this.stateTimer = 0;
    this.stateData = {};         // Per-state working data
    
    // Phase tracking
    this.currentPhase = 1;
    this.phaseConfig = this.data.phases[0];
    this.phaseTransitioning = false;
    this.lastPhaseChangeHP = this.data.stats.maxHealth;
    
    // Health tracking
    this.health = this.data.stats.health;
    this.maxHealth = this.data.stats.maxHealth;
    this.posture = 0;
    this.maxPosture = this.data.stats.maxPosture || 200;
    
    // Poise system (resistance to stagger)
    this.poise = this.data.poise || 100;
    this.maxPoise = this.data.poise || 100;
    this.poiseRegenDelay = 3.0;    // Seconds before poise regens
    this.lastPoiseHitTime = 0;
    
    // Combat state
    this.isActive = false;
    this.isDead = false;
    this.targetPlayer = null;
    this.lastTargetPosition = new THREE.Vector3();
    
    // Attack system
    this.currentAbility = null;
    this.abilityTimer = 0;
    this.abilityCooldowns = new Map();  // ability.id -> remaining cooldown
    this.attackDelay = 2.0;
    this.lastAttackTime = 0;
    this.activeAttack = null;    // For hit detection
    this.hitThisAttack = false;
    
    // Combo tracking
    this.comboCount = 0;
    this.maxCombo = 3;
    this.comboWindow = 0;
    
    // Telegraph system
    this.telegraphActive = false;
    this.telegraphMesh = null;
    this.telegraphProgress = 0;
    
    // Movement
    this.moveSpeed = this.data.stats.moveSpeed;
    this.baseSpeed = this.data.stats.moveSpeed;
    this.detectionRange = this.data.stats.detectionRange || 18;
    this.attackRange = this.data.stats.attackRange || 4.0;
    
    // Arena bounds
    this.arenaCenter = new THREE.Vector3(
      this.data.spawnLocation.x,
      this.data.spawnLocation.y || 0,
      this.data.spawnLocation.z
    );
    this.arenaRadius = this.data.arena?.radius || 25;
    
    // Enrage tracking
    this.isEnraged = false;
    this.enrageThreshold = 0.2;  // 20% HP triggers enrage
    this.enrageDamageBonus = 1.5;
    this.enrageSpeedBonus = 1.3;
    
    // Summoned minions (for summoner bosses)
    this.summonedMinions = [];
    this.lastSummonTime = 0;
    this.summonCooldown = 20000;  // 20 seconds between summons
    
    // Active buffs
    this.activeBuffs = [];
    
    // Pattern tracking for better AI
    this.playerDodgeCount = 0;
    this.playerBlockCount = 0;
    this.attacksBlocked = 0;
    this.lastPlayerState = 'idle';
    
    // Initialize ability cooldowns
    this._initAbilityCooldowns();
    
    console.log(`[BossAI] Initialized for ${this.data.fullTitle}`);
  }
  
  /**
   * Initialize cooldowns for all abilities
   */
  _initAbilityCooldowns() {
    const phaseAbilities = this.phaseConfig.abilities || [];
    for (const abilityKey of phaseAbilities) {
      const ability = BOSS_ABILITIES[abilityKey];
      if (ability) {
        this.abilityCooldowns.set(ability.id, 0);
      }
    }
  }
  
  /**
   * Main update loop - called every frame
   */
  update(delta, player) {
    if (this.state === BOSS_STATE.DEAD) return;
    
    this.stateTimer += delta;
    this.targetPlayer = player;
    
    // Update cooldowns
    this._updateCooldowns(delta);
    
    // Update active buffs
    this._updateBuffs(delta);
    
    // Update poise regeneration
    this._updatePoise(delta);
    
    // Check for phase transitions
    if (!this.phaseTransitioning) {
      this._checkPhaseTransition();
    }
    
    // Check for enrage trigger
    if (!this.isEnraged && !this.phaseTransitioning) {
      this._checkEnrage();
    }
    
    // State machine
    switch (this.state) {
      case BOSS_STATE.DORMANT:
        this._updateDormant(delta, player);
        break;
      case BOSS_STATE.AWAKENING:
        this._updateAwakening(delta, player);
        break;
      case BOSS_STATE.IDLE:
        this._updateIdle(delta, player);
        break;
      case BOSS_STATE.AGGRO:
        this._updateAggro(delta, player);
        break;
      case BOSS_STATE.POSITIONING:
        this._updatePositioning(delta, player);
        break;
      case BOSS_STATE.TELEGRAPH:
        this._updateTelegraph(delta, player);
        break;
      case BOSS_STATE.ATTACKING:
        this._updateAttacking(delta, player);
        break;
      case BOSS_STATE.RECOVERY:
        this._updateRecovery(delta, player);
        break;
      case BOSS_STATE.PHASE_TRANSITION:
        this._updatePhaseTransition(delta, player);
        break;
      case BOSS_STATE.STUNNED:
        this._updateStunned(delta, player);
        break;
      case BOSS_STATE.SUMMONING:
        this._updateSummoning(delta, player);
        break;
    }
    
    // Update telegraph visual
    if (this.telegraphActive) {
      this._updateTelegraphVisual(delta);
    }
    
    // Update summoned minions
    this._updateSummonedMinions(delta, player);
  }
  
  // ========== STATE HANDLERS ==========
  
  /**
   * DORMANT - Boss waiting for player to enter arena
   */
  _updateDormant(delta, player) {
    const playerPos = player.mesh.position;
    const distToPlayer = this.boss.mesh.position.distanceTo(playerPos);
    
    // Check if player entered detection range
    if (distToPlayer < this.detectionRange) {
      this._changeState(BOSS_STATE.AWAKENING);
    }
  }
  
  /**
   * AWAKENING - Initial wake-up sequence
   */
  _updateAwakening(delta, player) {
    // Awakening animation/sequence duration
    const awakeningDuration = 2.5;
    
    if (this.stateTimer >= awakeningDuration) {
      this.isActive = true;
      
      // Play boss roar sound
      if (this.gm?.audioManager) {
        this.gm.audioManager.play('bossRoar', {
          position: this.boss.mesh.position,
          volume: 0.9,
        });
      }
      
      // Activate arena (fog walls, etc.)
      this._activateArena();
      
      // Start boss music
      if (this.gm?.audioManager) {
        this.gm.audioManager.startBossMusic();
      }
      
      this._changeState(BOSS_STATE.IDLE);
    }
  }
  
  /**
   * IDLE - Standing, watching player, deciding next action
   */
  _updateIdle(delta, player) {
    const playerPos = player.mesh.position;
    const distToPlayer = this.boss.mesh.position.distanceTo(playerPos);
    
    // Face the player
    this._faceTarget(playerPos, delta);
    
    // Idle animation bobbing
    this._playIdleAnimation(delta);
    
    // Decide next action after brief idle
    const idleTime = this._getPattern().attackDelay * 0.3;
    
    if (this.stateTimer >= idleTime) {
      if (distToPlayer > this.attackRange * 1.5) {
        // Too far - move closer
        this._changeState(BOSS_STATE.AGGRO);
      } else if (distToPlayer <= this.attackRange && this._canAttack()) {
        // In range - select and telegraph attack
        this._selectAbility(player);
        if (this.currentAbility) {
          this._changeState(BOSS_STATE.TELEGRAPH);
        }
      } else if (Math.random() < this._getPattern().repositionChance) {
        // Randomly reposition
        this._changeState(BOSS_STATE.POSITIONING);
      } else {
        this._changeState(BOSS_STATE.AGGRO);
      }
    }
  }
  
  /**
   * AGGRO - Moving toward player
   */
  _updateAggro(delta, player) {
    const playerPos = player.mesh.position;
    const distToPlayer = this.boss.mesh.position.distanceTo(playerPos);
    
    // Move toward player
    this._moveToward(playerPos, delta);
    this._faceTarget(playerPos, delta);
    
    // Check if in attack range
    if (distToPlayer <= this.attackRange && this._canAttack()) {
      this._selectAbility(player);
      if (this.currentAbility) {
        this._changeState(BOSS_STATE.TELEGRAPH);
      } else {
        // No ability available - keep closing distance
        this._changeState(BOSS_STATE.POSITIONING);
      }
    }
    
    // Check if player left arena (boss resets)
    if (distToPlayer > this.arenaRadius * 1.5) {
      this._resetAggro();
    }
  }
  
  /**
   * POSITIONING - Adjusting position for optimal attack
   */
  _updatePositioning(delta, player) {
    const playerPos = player.mesh.position;
    const distToPlayer = this.boss.mesh.position.distanceTo(playerPos);
    
    // Calculate ideal position (at attack range, not too close)
    const idealDist = this.attackRange * 0.8;
    
    if (distToPlayer > idealDist + 1) {
      // Move closer
      this._moveToward(playerPos, delta);
    } else if (distToPlayer < idealDist - 1) {
      // Move back slightly
      this._moveAwayFrom(playerPos, delta, 0.5);
    } else {
      // Strafe around player
      this._strafeAroundTarget(playerPos, delta);
    }
    
    this._faceTarget(playerPos, delta);
    
    // Timeout - go back to idle/aggro
    if (this.stateTimer >= 2.0) {
      if (distToPlayer <= this.attackRange && this._canAttack()) {
        this._selectAbility(player);
        if (this.currentAbility) {
          this._changeState(BOSS_STATE.TELEGRAPH);
          return;
        }
      }
      this._changeState(BOSS_STATE.IDLE);
    }
  }
  
  /**
   * TELEGRAPH - Winding up attack (visible to player)
   */
  _updateTelegraph(delta, player) {
    if (!this.currentAbility) {
      this._changeState(BOSS_STATE.IDLE);
      return;
    }
    
    const windupTime = this.currentAbility.windupTime || 1.0;
    this.telegraphProgress = Math.min(1, this.stateTimer / windupTime);
    
    // Face target during telegraph (tracking)
    const trackingStrength = this.currentAbility.trackingStrength || 0.5;
    this._faceTarget(player.mesh.position, delta * trackingStrength);
    
    // Create/update telegraph indicator
    if (!this.telegraphActive) {
      this._createTelegraph();
    }
    
    // Windup animation on boss
    this._playWindupAnimation(delta, this.telegraphProgress);
    
    // Telegraph complete - execute attack
    if (this.stateTimer >= windupTime) {
      this._removeTelegraph();
      this._changeState(BOSS_STATE.ATTACKING);
    }
  }
  
  /**
   * ATTACKING - Active attack frames
   */
  _updateAttacking(delta, player) {
    if (!this.currentAbility) {
      this._changeState(BOSS_STATE.RECOVERY);
      return;
    }
    
    const attackDuration = this.currentAbility.attackDuration || 0.3;
    
    // Execute ability based on type
    switch (this.currentAbility.type) {
      case ABILITY_TYPE.MELEE:
        this._executeMeleeAttack(delta, player);
        break;
      case ABILITY_TYPE.RANGED:
        this._executeRangedAttack(delta, player);
        break;
      case ABILITY_TYPE.AOE:
        this._executeAOEAttack(delta, player);
        break;
      case ABILITY_TYPE.SUMMON:
        this._executeSummonAttack(delta, player);
        break;
      case ABILITY_TYPE.BUFF:
        this._executeBuffAbility(delta, player);
        break;
      case ABILITY_TYPE.SPECIAL:
        this._executeSpecialAbility(delta, player);
        break;
    }
    
    // Attack animation
    this._playAttackAnimation(delta);
    
    // Attack complete - enter recovery
    if (this.stateTimer >= attackDuration) {
      this.hitThisAttack = false;
      this.activeAttack = null;
      
      // Start ability cooldown
      if (this.currentAbility.cooldown) {
        this.abilityCooldowns.set(this.currentAbility.id, this.currentAbility.cooldown);
      }
      
      this._changeState(BOSS_STATE.RECOVERY);
    }
  }
  
  /**
   * RECOVERY - Recovery after attack (punish window for player)
   */
  _updateRecovery(delta, player) {
    const recoveryTime = this.currentAbility?.recoveryTime || 1.0;
    
    // Recovery animation (slow, vulnerable)
    this._playRecoveryAnimation(delta);
    
    // Face player slowly during recovery
    this._faceTarget(player.mesh.position, delta * 0.3);
    
    // Recovery complete
    if (this.stateTimer >= recoveryTime) {
      this.currentAbility = null;
      
      // Check for combo continuation
      if (this.comboWindow > 0 && this.comboCount < this.maxCombo) {
        this.comboCount++;
        this._selectAbility(player, true);  // Select combo follow-up
        if (this.currentAbility) {
          this._changeState(BOSS_STATE.TELEGRAPH);
          return;
        }
      }
      
      // End combo
      this.comboCount = 0;
      this.comboWindow = 0;
      
      this._changeState(BOSS_STATE.IDLE);
    }
  }
  
  /**
   * PHASE_TRANSITION - Changing phases (invulnerable)
   */
  _updatePhaseTransition(delta, player) {
    const transitionDuration = this.phaseConfig.transitionDuration || 3.0;
    
    // Phase transition animation
    this._playPhaseTransitionAnimation(delta);
    
    if (this.stateTimer >= transitionDuration) {
      this.phaseTransitioning = false;
      
      // Apply new phase config
      this._applyPhaseModifiers();
      
      // Unlock new abilities
      this._initAbilityCooldowns();
      
      // Boss roar at new phase
      if (this.phaseConfig.transitionRoar) {
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('bossRoar', {
            position: this.boss.mesh.position,
            volume: 1.0,
          });
        }
      }
      
      // Phase transition music change
      if (this.phaseConfig.music && this.gm?.audioManager) {
        this.gm.audioManager.crossfadeToTrack(this.phaseConfig.music);
      }
      
      this._changeState(BOSS_STATE.IDLE);
    }
  }
  
  /**
   * STUNNED - Posture broken / staggered
   */
  _updateStunned(delta, player) {
    const stunDuration = 2.5;  // Generous punish window
    
    // Stagger animation
    this._playStaggerAnimation(delta);
    
    if (this.stateTimer >= stunDuration) {
      this.posture = 0;
      this.poise = this.maxPoise;  // Restore poise after stun
      this._changeState(BOSS_STATE.IDLE);
    }
  }
  
  /**
   * SUMMONING - Summoning minions
   */
  _updateSummoning(delta, player) {
    if (!this.currentAbility) {
      this._changeState(BOSS_STATE.IDLE);
      return;
    }
    
    const summonDuration = (this.currentAbility.windupTime || 1.0) + 0.5;
    
    // Summoning animation
    this._playSummoningAnimation(delta);
    
    // Spawn minions at halfway point
    if (this.stateTimer >= summonDuration * 0.5 && !this.stateData.summoned) {
      this._spawnMinions();
      this.stateData.summoned = true;
    }
    
    if (this.stateTimer >= summonDuration) {
      this.lastSummonTime = Date.now();
      this._changeState(BOSS_STATE.RECOVERY);
    }
  }
  
  // ========== ABILITY EXECUTION ==========
  
  /**
   * Execute melee attack
   */
  _executeMeleeAttack(delta, player) {
    if (!this.hitThisAttack) {
      const abilityDamage = this._calculateDamage(this.currentAbility.damage);
      const postureDamage = this.currentAbility.postureDamage || 20;
      
      // Create hitbox
      const attackDir = new THREE.Vector3();
      attackDir.subVectors(player.mesh.position, this.boss.mesh.position);
      attackDir.y = 0;
      attackDir.normalize();
      
      const hitboxPos = this.boss.mesh.position.clone()
        .add(attackDir.multiplyScalar(this.attackRange * 0.6));
      hitboxPos.y += 1.5;
      
      this.activeAttack = {
        position: hitboxPos,
        range: this.currentAbility.range || this.attackRange,
        damage: abilityDamage,
        postureDmg: postureDamage,
        damageType: this.currentAbility.damageType,
        isHeavy: this.currentAbility.damage >= 50,
        isBossAttack: true,
      };
      
      // Play swing sound
      if (this.gm?.audioManager) {
        this.gm.audioManager.play('swordSwing', {
          position: this.boss.mesh.position,
          volume: 0.8,
          pitch: 0.7,  // Lower pitch for boss
        });
      }
    }
  }
  
  /**
   * Execute ranged attack (projectile)
   */
  _executeRangedAttack(delta, player) {
    if (!this.stateData.projectileFired) {
      const abilityDamage = this._calculateDamage(this.currentAbility.damage);
      
      // Calculate aim direction
      const aimDir = new THREE.Vector3();
      aimDir.subVectors(player.mesh.position, this.boss.mesh.position);
      aimDir.normalize();
      
      // Spawn projectile (handled by boss entity)
      if (this.boss.fireProjectile) {
        this.boss.fireProjectile({
          direction: aimDir,
          speed: this.currentAbility.projectileSpeed || 15,
          damage: abilityDamage,
          damageType: this.currentAbility.damageType,
          postureDamage: this.currentAbility.postureDamage || 15,
        });
      }
      
      this.stateData.projectileFired = true;
      
      // Play projectile sound
      if (this.gm?.audioManager) {
        this.gm.audioManager.play('projectile', {
          position: this.boss.mesh.position,
          volume: 0.7,
        });
      }
    }
  }
  
  /**
   * Execute AOE attack
   */
  _executeAOEAttack(delta, player) {
    if (!this.hitThisAttack) {
      const abilityDamage = this._calculateDamage(this.currentAbility.damage);
      const postureDamage = this.currentAbility.postureDamage || 40;
      
      // AOE centered on boss (or target location for some abilities)
      const aoeCenter = this.stateData.aoeTarget || this.boss.mesh.position.clone();
      
      this.activeAttack = {
        position: aoeCenter,
        range: this.currentAbility.range || 8,
        damage: abilityDamage,
        postureDmg: postureDamage,
        damageType: this.currentAbility.damageType,
        isAOE: true,
        isBossAttack: true,
      };
      
      // Spawn AOE visual effect
      if (this.boss.spawnAOEEffect) {
        this.boss.spawnAOEEffect({
          position: aoeCenter,
          radius: this.currentAbility.range,
          color: this.currentAbility.telegraphColor || 0xff4400,
        });
      }
      
      // Screen shake
      if (this.gm?.cameraController) {
        this.gm.cameraController.shakeHeavy();
      }
      
      // Play AOE impact sound
      if (this.gm?.audioManager) {
        this.gm.audioManager.play('explosion', {
          position: aoeCenter,
          volume: 0.9,
        });
      }
    }
  }
  
  /**
   * Execute summon ability
   */
  _executeSummonAttack(delta, player) {
    // Summoning handled in SUMMONING state
    this._changeState(BOSS_STATE.SUMMONING);
  }
  
  /**
   * Execute buff ability
   */
  _executeBuffAbility(delta, player) {
    if (!this.stateData.buffApplied) {
      const buff = {
        id: this.currentAbility.id,
        effect: this.currentAbility.buffEffect,
        duration: this.currentAbility.duration,
        startTime: Date.now(),
      };
      
      this.activeBuffs.push(buff);
      this._applyBuff(buff);
      
      this.stateData.buffApplied = true;
      
      // Buff visual effect
      if (this.boss.showBuffEffect) {
        this.boss.showBuffEffect(this.currentAbility.id);
      }
      
      // Buff sound
      if (this.gm?.audioManager) {
        this.gm.audioManager.play('powerUp', {
          position: this.boss.mesh.position,
          volume: 0.6,
        });
      }
    }
  }
  
  /**
   * Execute special ability (teleport, dash, grab, etc.)
   */
  _executeSpecialAbility(delta, player) {
    const abilityId = this.currentAbility.id;
    
    switch (abilityId) {
      case 'teleport':
      case 'shadow_step':
        this._executeTeleport(player);
        break;
      case 'shadow_dash':
        this._executeDash(player);
        break;
      case 'charge_attack':
        this._executeCharge(player);
        break;
      case 'soul_drain':
        this._executeDrain(player);
        break;
      case 'root_prison':
        this._executeRoot(player);
        break;
      default:
        // Generic special - treat as melee
        this._executeMeleeAttack(delta, player);
    }
  }
  
  /**
   * Teleport ability
   */
  _executeTeleport(player) {
    if (this.stateData.teleported) return;
    
    // Calculate teleport destination (behind or to side of player)
    const playerPos = player.mesh.position;
    const offset = new THREE.Vector3();
    
    // Random position around player
    const angle = Math.random() * Math.PI * 2;
    const dist = 5 + Math.random() * 5;  // 5-10 units away
    offset.set(Math.cos(angle) * dist, 0, Math.sin(angle) * dist);
    
    const destination = playerPos.clone().add(offset);
    
    // Clamp to arena bounds
    const toCenter = destination.clone().sub(this.arenaCenter);
    if (toCenter.length() > this.arenaRadius * 0.8) {
      toCenter.normalize().multiplyScalar(this.arenaRadius * 0.8);
      destination.copy(this.arenaCenter).add(toCenter);
    }
    
    // Teleport effect at source
    if (this.boss.showTeleportEffect) {
      this.boss.showTeleportEffect(this.boss.mesh.position, 'source');
    }
    
    // Move boss
    this.boss.mesh.position.copy(destination);
    
    // Teleport effect at destination
    if (this.boss.showTeleportEffect) {
      this.boss.showTeleportEffect(destination, 'destination');
    }
    
    this.stateData.teleported = true;
    
    // Teleport sound
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('teleport', {
        position: destination,
        volume: 0.7,
      });
    }
  }
  
  /**
   * Dash attack
   */
  _executeDash(player) {
    if (this.stateData.dashStarted) return;
    
    const dashSpeed = this.currentAbility.chargeSpeed || 20;
    const dashDamage = this._calculateDamage(this.currentAbility.damage);
    
    // Dash toward player
    const dashDir = new THREE.Vector3();
    dashDir.subVectors(player.mesh.position, this.boss.mesh.position);
    dashDir.y = 0;
    dashDir.normalize();
    
    this.stateData.dashStarted = true;
    this.stateData.dashDir = dashDir;
    this.stateData.dashSpeed = dashSpeed;
    this.stateData.dashDamage = dashDamage;
    
    // Create hitbox along dash path
    this.activeAttack = {
      position: this.boss.mesh.position.clone(),
      range: 2.0,  // Wider hitbox for dash
      damage: dashDamage,
      postureDmg: this.currentAbility.postureDamage || 15,
      damageType: this.currentAbility.damageType,
      isBossAttack: true,
    };
  }
  
  /**
   * Charge attack
   */
  _executeCharge(player) {
    if (this.stateData.chargeStarted) return;
    
    const chargeSpeed = this.currentAbility.chargeSpeed || 18;
    const chargeDamage = this._calculateDamage(this.currentAbility.damage);
    
    // Charge toward player's position at start
    const chargeTarget = player.mesh.position.clone();
    const chargeDir = new THREE.Vector3();
    chargeDir.subVectors(chargeTarget, this.boss.mesh.position);
    chargeDir.y = 0;
    chargeDir.normalize();
    
    this.stateData.chargeStarted = true;
    this.stateData.chargeDir = chargeDir;
    this.stateData.chargeTarget = chargeTarget;
    this.stateData.chargeSpeed = chargeSpeed;
    this.stateData.chargeDamage = chargeDamage;
    
    // Hitbox for charge
    this.activeAttack = {
      position: this.boss.mesh.position.clone(),
      range: 2.5,
      damage: chargeDamage,
      postureDmg: this.currentAbility.postureDamage || 60,
      damageType: this.currentAbility.damageType,
      isHeavy: true,
      isBossAttack: true,
    };
    
    // Charge sound
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('charge', {
        position: this.boss.mesh.position,
        volume: 0.8,
      });
    }
  }
  
  /**
   * Life drain ability
   */
  _executeDrain(player) {
    if (this.stateData.drainApplied) return;
    
    const drainDamage = this._calculateDamage(this.currentAbility.damage);
    const healPercent = this.currentAbility.healPercent || 0.5;
    
    // Check range
    const dist = this.boss.mesh.position.distanceTo(player.mesh.position);
    if (dist <= this.currentAbility.range) {
      this.activeAttack = {
        position: player.mesh.position.clone(),
        range: 2,
        damage: drainDamage,
        postureDmg: 10,
        damageType: this.currentAbility.damageType,
        isBossAttack: true,
        onHit: (dmgDealt) => {
          // Heal boss for portion of damage
          const healAmount = Math.floor(dmgDealt * healPercent);
          this.heal(healAmount);
        },
      };
      
      // Drain visual
      if (this.boss.showDrainEffect) {
        this.boss.showDrainEffect(player.mesh.position, this.boss.mesh.position);
      }
    }
    
    this.stateData.drainApplied = true;
  }
  
  /**
   * Root/trap ability
   */
  _executeRoot(player) {
    if (this.stateData.rootSpawned) return;
    
    // Spawn root at player's predicted position
    const targetPos = player.mesh.position.clone();
    
    // Spawn root trap (handled by boss entity)
    if (this.boss.spawnRootTrap) {
      this.boss.spawnRootTrap({
        position: targetPos,
        duration: this.currentAbility.rootDuration || 2.5,
        damage: this._calculateDamage(this.currentAbility.damage),
      });
    }
    
    this.stateData.rootSpawned = true;
  }
  
  // ========== ABILITY SELECTION ==========
  
  /**
   * Select an ability to use based on pattern and situation
   */
  _selectAbility(player, isCombo = false) {
    const pattern = this._getPattern();
    const availableAbilities = this._getAvailableAbilities();
    
    if (availableAbilities.length === 0) {
      this.currentAbility = null;
      return;
    }
    
    // If combo, prefer quick follow-up attacks
    if (isCombo) {
      const quickAbilities = availableAbilities.filter(a => 
        (a.type === ABILITY_TYPE.MELEE || a.type === ABILITY_TYPE.SPECIAL) &&
        (a.windupTime || 1.0) < 0.8
      );
      if (quickAbilities.length > 0) {
        this.currentAbility = quickAbilities[Math.floor(Math.random() * quickAbilities.length)];
        return;
      }
    }
    
    // Analyze situation
    const distToPlayer = this.boss.mesh.position.distanceTo(player.mesh.position);
    const playerHealth = player.health / player.maxHealth;
    
    // Weight abilities based on pattern and situation
    const weights = [];
    for (const ability of availableAbilities) {
      let weight = this._getAbilityWeight(ability, pattern);
      
      // Situational bonuses
      if (distToPlayer > this.attackRange * 1.5) {
        // Far - prefer ranged/gap closers
        if (ability.type === ABILITY_TYPE.RANGED) weight *= 2;
        if (ability.id.includes('charge') || ability.id.includes('dash')) weight *= 2;
        if (ability.type === ABILITY_TYPE.MELEE) weight *= 0.3;
      }
      
      if (distToPlayer <= this.attackRange * 0.5) {
        // Very close - prefer quick melee or repositioning
        if (ability.windupTime && ability.windupTime < 0.6) weight *= 1.5;
        if (ability.id.includes('teleport')) weight *= 1.5;
      }
      
      if (playerHealth < 0.3) {
        // Player low - go aggressive
        if (ability.damage && ability.damage >= 50) weight *= 1.5;
      }
      
      // Summon if minions died
      if (ability.type === ABILITY_TYPE.SUMMON && this.summonedMinions.length === 0) {
        weight *= 2;
      }
      
      weights.push({ ability, weight });
    }
    
    // Weighted random selection
    const totalWeight = weights.reduce((sum, w) => sum + w.weight, 0);
    let random = Math.random() * totalWeight;
    
    for (const { ability, weight } of weights) {
      random -= weight;
      if (random <= 0) {
        this.currentAbility = ability;
        break;
      }
    }
    
    // Fallback
    if (!this.currentAbility && availableAbilities.length > 0) {
      this.currentAbility = availableAbilities[0];
    }
  }
  
  /**
   * Get weight for ability based on pattern
   */
  _getAbilityWeight(ability, pattern) {
    const typeWeights = pattern.abilityWeights || {};
    
    switch (ability.type) {
      case ABILITY_TYPE.MELEE:
        return typeWeights.melee || 0.4;
      case ABILITY_TYPE.RANGED:
        return typeWeights.ranged || 0.2;
      case ABILITY_TYPE.AOE:
        return typeWeights.aoe || 0.2;
      case ABILITY_TYPE.SUMMON:
        return typeWeights.summon || 0.1;
      case ABILITY_TYPE.BUFF:
        return typeWeights.buff || 0.1;
      case ABILITY_TYPE.SPECIAL:
        return typeWeights.special || 0.15;
      default:
        return 0.1;
    }
  }
  
  /**
   * Get abilities available (off cooldown, unlocked in current phase)
   */
  _getAvailableAbilities() {
    const phaseAbilityKeys = this.phaseConfig.abilities || [];
    const available = [];
    
    for (const key of phaseAbilityKeys) {
      const ability = BOSS_ABILITIES[key];
      if (!ability) continue;
      
      // Check cooldown
      const cooldown = this.abilityCooldowns.get(ability.id) || 0;
      if (cooldown <= 0) {
        available.push(ability);
      }
    }
    
    return available;
  }
  
  /**
   * Check if boss can attack (cooldowns, state)
   */
  _canAttack() {
    const timeSinceLastAttack = (Date.now() - this.lastAttackTime) / 1000;
    const attackDelay = this._getPattern().attackDelay || 2.0;
    
    return timeSinceLastAttack >= attackDelay;
  }
  
  // ========== PHASE SYSTEM ==========
  
  /**
   * Check if phase transition should occur
   */
  _checkPhaseTransition() {
    const healthPercent = this.health / this.maxHealth;
    const phases = this.data.phases;
    
    // Find the phase we should be in
    let targetPhase = phases[0];
    for (const phase of phases) {
      if (healthPercent <= phase.threshold) {
        targetPhase = phase;
      }
    }
    
    // Check if we need to transition
    if (targetPhase.id !== this.currentPhase) {
      this._startPhaseTransition(targetPhase);
    }
  }
  
  /**
   * Start phase transition
   */
  _startPhaseTransition(newPhase) {
    this.phaseTransitioning = true;
    this.currentPhase = newPhase.id;
    this.phaseConfig = newPhase;
    this.lastPhaseChangeHP = this.health;
    
    // Cancel current attack
    this.currentAbility = null;
    this.activeAttack = null;
    this._removeTelegraph();
    
    // Announce new ability if any
    if (newPhase.newAbility) {
      console.log(`[BossAI] ${this.data.name} unlocks: ${newPhase.newAbility}`);
    }
    
    this._changeState(BOSS_STATE.PHASE_TRANSITION);
  }
  
  /**
   * Apply modifiers from current phase
   */
  _applyPhaseModifiers() {
    const modifiers = this.phaseConfig.modifiers || {};
    
    // Apply speed modifier
    if (modifiers.moveSpeedMult) {
      this.moveSpeed = this.baseSpeed * modifiers.moveSpeedMult;
    }
    
    // Store modifiers for damage calculation
    this.damageMultiplier = modifiers.damageMult || 1.0;
    this.cooldownMultiplier = modifiers.attackCooldownMult || 1.0;
    this.damageReduction = modifiers.damageReduction || 0;
    
    // Visual changes
    if (this.phaseConfig.visualChange && this.boss.applyPhaseVisual) {
      this.boss.applyPhaseVisual(this.phaseConfig.visualChange);
    }
  }
  
  // ========== ENRAGE SYSTEM ==========
  
  /**
   * Check if boss should enrage
   */
  _checkEnrage() {
    const healthPercent = this.health / this.maxHealth;
    
    if (healthPercent <= this.enrageThreshold) {
      this._triggerEnrage();
    }
  }
  
  /**
   * Trigger enrage mode
   */
  _triggerEnrage() {
    this.isEnraged = true;
    
    // Apply enrage bonuses
    this.moveSpeed = this.baseSpeed * this.enrageSpeedBonus;
    this.damageMultiplier = (this.damageMultiplier || 1.0) * this.enrageDamageBonus;
    
    // Visual effect
    if (this.boss.showEnrageEffect) {
      this.boss.showEnrageEffect();
    }
    
    // Enrage roar
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('bossRoar', {
        position: this.boss.mesh.position,
        volume: 1.0,
        pitch: 0.8,  // Deeper roar
      });
    }
    
    console.log(`[BossAI] ${this.data.name} has ENRAGED!`);
  }
  
  // ========== DAMAGE & HEALING ==========
  
  /**
   * Calculate damage with modifiers
   */
  _calculateDamage(baseDamage) {
    let damage = baseDamage;
    
    // Phase modifier
    damage *= (this.damageMultiplier || 1.0);
    
    // Enrage bonus
    if (this.isEnraged) {
      damage *= this.enrageDamageBonus;
    }
    
    // Active buff bonuses
    for (const buff of this.activeBuffs) {
      if (buff.effect?.damageBoost) {
        damage *= buff.effect.damageBoost;
      }
    }
    
    return Math.floor(damage);
  }
  
  /**
   * Boss takes damage
   */
  takeDamage(amount, postureDamage = 0, attackerPos = null) {
    if (this.isDead || this.state === BOSS_STATE.PHASE_TRANSITION) {
      return { result: 'immune', damage: 0 };
    }
    
    // Apply damage reduction from phase/buffs
    let actualDamage = amount;
    if (this.damageReduction) {
      actualDamage = Math.floor(amount * (1 - this.damageReduction));
    }
    
    for (const buff of this.activeBuffs) {
      if (buff.effect?.damageReduction) {
        actualDamage = Math.floor(actualDamage * (1 - buff.effect.damageReduction));
      }
    }
    
    this.health = Math.max(0, this.health - actualDamage);
    
    // Posture damage
    this.posture = Math.min(this.maxPosture, this.posture + postureDamage);
    
    // Poise damage (determines stagger)
    const poiseDamage = Math.floor(postureDamage * 0.5);
    this.poise = Math.max(0, this.poise - poiseDamage);
    this.lastPoiseHitTime = Date.now();
    
    // Check for death
    if (this.health <= 0) {
      this._die();
      return { result: 'died', damage: actualDamage };
    }
    
    // Check for posture break (stagger)
    if (this.posture >= this.maxPosture && this.poise <= 0) {
      this._triggerStagger();
      return { result: 'staggered', damage: actualDamage };
    }
    
    // Check for poise break alone (brief flinch)
    if (this.poise <= 0 && this.state !== BOSS_STATE.STUNNED) {
      // Brief flinch but not full stagger
      this.poise = this.maxPoise * 0.3;  // Partial restore
    }
    
    return { result: 'hit', damage: actualDamage };
  }
  
  /**
   * Heal the boss
   */
  heal(amount) {
    const oldHealth = this.health;
    this.health = Math.min(this.maxHealth, this.health + amount);
    const actualHeal = this.health - oldHealth;
    
    // Healing visual
    if (actualHeal > 0 && this.boss.showHealEffect) {
      this.boss.showHealEffect(actualHeal);
    }
    
    return actualHeal;
  }
  
  /**
   * Trigger stagger state
   */
  _triggerStagger() {
    this._removeTelegraph();
    this.currentAbility = null;
    this.activeAttack = null;
    this.comboCount = 0;
    
    // Play stagger sound
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('postureBreak', {
        position: this.boss.mesh.position,
        volume: 0.9,
      });
    }
    
    this._changeState(BOSS_STATE.STUNNED);
  }
  
  /**
   * Boss dies
   */
  _die() {
    this.isDead = true;
    this.isActive = false;
    this.activeAttack = null;
    this._removeTelegraph();
    
    // Remove minions
    for (const minion of this.summonedMinions) {
      if (minion.die) minion.die();
    }
    this.summonedMinions = [];
    
    // Death effects
    if (this.boss.playDeathAnimation) {
      this.boss.playDeathAnimation();
    }
    
    // Stop boss music
    if (this.gm?.audioManager) {
      this.gm.audioManager.startAmbientMusic();
    }
    
    // Deactivate arena
    this._deactivateArena();
    
    this._changeState(BOSS_STATE.DEAD);
  }
  
  // ========== MOVEMENT ==========
  
  /**
   * Move toward target
   */
  _moveToward(target, delta) {
    const dir = new THREE.Vector3();
    dir.subVectors(target, this.boss.mesh.position);
    dir.y = 0;
    
    const dist = dir.length();
    if (dist < 0.5) return;
    
    dir.normalize();
    
    const speed = this.moveSpeed * delta;
    const newPos = this.boss.mesh.position.clone().addScaledVector(dir, speed);
    
    // Clamp to arena bounds
    const toCenter = newPos.clone().sub(this.arenaCenter);
    if (toCenter.length() > this.arenaRadius) {
      toCenter.normalize().multiplyScalar(this.arenaRadius);
      newPos.copy(this.arenaCenter).add(toCenter);
    }
    
    this.boss.mesh.position.copy(newPos);
  }
  
  /**
   * Move away from target
   */
  _moveAwayFrom(target, delta, speedMult = 1.0) {
    const dir = new THREE.Vector3();
    dir.subVectors(this.boss.mesh.position, target);
    dir.y = 0;
    dir.normalize();
    
    const speed = this.moveSpeed * speedMult * delta;
    const newPos = this.boss.mesh.position.clone().addScaledVector(dir, speed);
    
    // Clamp to arena bounds
    const toCenter = newPos.clone().sub(this.arenaCenter);
    if (toCenter.length() > this.arenaRadius) {
      toCenter.normalize().multiplyScalar(this.arenaRadius);
      newPos.copy(this.arenaCenter).add(toCenter);
    }
    
    this.boss.mesh.position.copy(newPos);
  }
  
  /**
   * Strafe around target
   */
  _strafeAroundTarget(target, delta) {
    const toTarget = new THREE.Vector3();
    toTarget.subVectors(target, this.boss.mesh.position);
    toTarget.y = 0;
    
    // Perpendicular direction (strafe)
    const strafeDir = new THREE.Vector3(-toTarget.z, 0, toTarget.x);
    strafeDir.normalize();
    
    // Alternate direction occasionally
    if (Math.random() < 0.01) {
      strafeDir.negate();
    }
    
    const speed = this.moveSpeed * 0.6 * delta;
    const newPos = this.boss.mesh.position.clone().addScaledVector(strafeDir, speed);
    
    // Maintain distance
    const distToTarget = newPos.distanceTo(target);
    if (distToTarget > this.attackRange * 1.2 || distToTarget < this.attackRange * 0.6) {
      // Adjust toward/away to maintain distance
      const adjust = new THREE.Vector3();
      adjust.subVectors(target, newPos);
      adjust.y = 0;
      adjust.normalize();
      
      if (distToTarget > this.attackRange) {
        newPos.addScaledVector(adjust, speed * 0.5);
      } else {
        newPos.addScaledVector(adjust, -speed * 0.5);
      }
    }
    
    // Clamp to arena
    const toCenter = newPos.clone().sub(this.arenaCenter);
    if (toCenter.length() > this.arenaRadius) {
      toCenter.normalize().multiplyScalar(this.arenaRadius);
      newPos.copy(this.arenaCenter).add(toCenter);
    }
    
    this.boss.mesh.position.copy(newPos);
  }
  
  /**
   * Face target
   */
  _faceTarget(target, delta) {
    const dir = new THREE.Vector3();
    dir.subVectors(target, this.boss.mesh.position);
    dir.y = 0;
    
    if (dir.length() < 0.1) return;
    
    const targetAngle = Math.atan2(dir.x, dir.z);
    const currentAngle = this.boss.mesh.rotation.y;
    
    // Smooth rotation
    const lerpFactor = Math.min(1, 5 * delta);
    this.boss.mesh.rotation.y = THREE.MathUtils.lerp(currentAngle, targetAngle, lerpFactor);
  }
  
  // ========== TELEGRAPH SYSTEM ==========
  
  /**
   * Create telegraph indicator for current ability
   */
  _createTelegraph() {
    if (!this.currentAbility) return;
    
    const telegraphType = this.currentAbility.telegraphType;
    const telegraphColor = this.currentAbility.telegraphColor || 0xff4400;
    const range = this.currentAbility.range || this.attackRange;
    
    this.telegraphActive = true;
    
    // Create telegraph mesh based on type
    if (this.boss.createTelegraph) {
      this.telegraphMesh = this.boss.createTelegraph({
        type: telegraphType || 'circle',
        color: telegraphColor,
        range: range,
        position: this.boss.mesh.position,
        targetPosition: this.targetPlayer?.mesh?.position,
      });
    }
  }
  
  /**
   * Update telegraph visual
   */
  _updateTelegraphVisual(delta) {
    if (!this.telegraphMesh) return;
    
    // Pulse/grow effect based on progress
    const progress = this.telegraphProgress;
    const scale = 0.5 + progress * 0.5;
    const opacity = 0.3 + progress * 0.4;
    
    if (this.telegraphMesh.scale) {
      this.telegraphMesh.scale.setScalar(scale);
    }
    
    if (this.telegraphMesh.material) {
      this.telegraphMesh.material.opacity = opacity;
    }
  }
  
  /**
   * Remove telegraph indicator
   */
  _removeTelegraph() {
    this.telegraphActive = false;
    this.telegraphProgress = 0;
    
    if (this.telegraphMesh && this.boss.removeTelegraph) {
      this.boss.removeTelegraph(this.telegraphMesh);
    }
    this.telegraphMesh = null;
  }
  
  // ========== MINION SYSTEM ==========
  
  /**
   * Spawn minions from summon ability
   */
  _spawnMinions() {
    if (!this.currentAbility) return;
    
    const summonConfig = this.currentAbility;
    const count = summonConfig.summonCount;
    const numToSpawn = count.min + Math.floor(Math.random() * (count.max - count.min + 1));
    
    for (let i = 0; i < numToSpawn; i++) {
      // Spawn position around boss
      const angle = (i / numToSpawn) * Math.PI * 2;
      const dist = 4 + Math.random() * 2;
      const spawnPos = this.boss.mesh.position.clone();
      spawnPos.x += Math.cos(angle) * dist;
      spawnPos.z += Math.sin(angle) * dist;
      
      // Spawn minion (handled by boss entity or EnemyManager)
      if (this.boss.spawnMinion) {
        const minion = this.boss.spawnMinion({
          type: summonConfig.summonType,
          position: spawnPos,
          master: this.boss,
        });
        
        if (minion) {
          this.summonedMinions.push(minion);
        }
      }
    }
    
    // Summon effect
    if (this.gm?.audioManager) {
      this.gm.audioManager.play('summon', {
        position: this.boss.mesh.position,
        volume: 0.8,
      });
    }
  }
  
  /**
   * Update summoned minions (remove dead ones)
   */
  _updateSummonedMinions(delta, player) {
    this.summonedMinions = this.summonedMinions.filter(minion => {
      return minion && !minion.isDead;
    });
  }
  
  // ========== BUFF SYSTEM ==========
  
  /**
   * Update active buffs (duration, effects)
   */
  _updateBuffs(delta) {
    const now = Date.now();
    
    for (let i = this.activeBuffs.length - 1; i >= 0; i--) {
      const buff = this.activeBuffs[i];
      const elapsed = (now - buff.startTime) / 1000;
      
      // Check expiration
      if (elapsed >= buff.duration) {
        this._removeBuff(buff);
        this.activeBuffs.splice(i, 1);
        continue;
      }
      
      // Heal over time buffs
      if (buff.effect?.healPerSecond) {
        const healAmount = buff.effect.healPerSecond * delta;
        this.heal(healAmount);
      }
    }
  }
  
  /**
   * Apply buff effects
   */
  _applyBuff(buff) {
    // Speed boost
    if (buff.effect?.speedBoost) {
      this.moveSpeed = this.baseSpeed * buff.effect.speedBoost;
    }
  }
  
  /**
   * Remove buff effects
   */
  _removeBuff(buff) {
    // Reset speed if speed buff expired
    if (buff.effect?.speedBoost) {
      this.moveSpeed = this.baseSpeed * (this.phaseConfig.modifiers?.moveSpeedMult || 1.0);
    }
    
    // Visual effect removal
    if (this.boss.removeBuffEffect) {
      this.boss.removeBuffEffect(buff.id);
    }
  }
  
  // ========== COOLDOWN SYSTEM ==========
  
  /**
   * Update ability cooldowns
   */
  _updateCooldowns(delta) {
    for (const [abilityId, cooldown] of this.abilityCooldowns) {
      if (cooldown > 0) {
        this.abilityCooldowns.set(abilityId, cooldown - delta);
      }
    }
  }
  
  // ========== POISE SYSTEM ==========
  
  /**
   * Update poise regeneration
   */
  _updatePoise(delta) {
    if (this.state === BOSS_STATE.STUNNED) return;
    
    const timeSinceHit = (Date.now() - this.lastPoiseHitTime) / 1000;
    
    if (timeSinceHit >= this.poiseRegenDelay && this.poise < this.maxPoise) {
      const regenRate = this.maxPoise * 0.15 * delta;  // 15% per second
      this.poise = Math.min(this.maxPoise, this.poise + regenRate);
    }
  }
  
  // ========== ARENA SYSTEM ==========
  
  /**
   * Activate boss arena (fog walls, etc.)
   */
  _activateArena() {
    if (this.boss.activateArena) {
      this.boss.activateArena(this.data.arena);
    }
    
    // Notify game manager
    if (this.gm?.onBossArenaActivate) {
      this.gm.onBossArenaActivate(this.data.id);
    }
  }
  
  /**
   * Deactivate boss arena
   */
  _deactivateArena() {
    if (this.boss.deactivateArena) {
      this.boss.deactivateArena();
    }
    
    // Notify game manager
    if (this.gm?.onBossArenaDeactivate) {
      this.gm.onBossArenaDeactivate(this.data.id);
    }
  }
  
  /**
   * Reset aggro (player left arena)
   */
  _resetAggro() {
    this.isActive = false;
    this.targetPlayer = null;
    this.currentAbility = null;
    this.activeAttack = null;
    this._removeTelegraph();
    
    // Return to spawn position
    this.stateData.returnTarget = this.arenaCenter.clone();
    
    // Deactivate arena
    this._deactivateArena();
    
    this._changeState(BOSS_STATE.DORMANT);
  }
  
  // ========== ANIMATIONS (stubs - implemented in boss entity) ==========
  
  _playIdleAnimation(delta) {
    if (this.boss.playIdleAnimation) {
      this.boss.playIdleAnimation(delta);
    }
  }
  
  _playWindupAnimation(delta, progress) {
    if (this.boss.playWindupAnimation) {
      this.boss.playWindupAnimation(delta, progress, this.currentAbility);
    }
  }
  
  _playAttackAnimation(delta) {
    if (this.boss.playAttackAnimation) {
      this.boss.playAttackAnimation(delta, this.currentAbility);
    }
  }
  
  _playRecoveryAnimation(delta) {
    if (this.boss.playRecoveryAnimation) {
      this.boss.playRecoveryAnimation(delta);
    }
  }
  
  _playPhaseTransitionAnimation(delta) {
    if (this.boss.playPhaseTransitionAnimation) {
      this.boss.playPhaseTransitionAnimation(delta, this.stateTimer, this.phaseConfig);
    }
  }
  
  _playStaggerAnimation(delta) {
    if (this.boss.playStaggerAnimation) {
      this.boss.playStaggerAnimation(delta, this.stateTimer);
    }
  }
  
  _playSummoningAnimation(delta) {
    if (this.boss.playSummoningAnimation) {
      this.boss.playSummoningAnimation(delta, this.stateTimer);
    }
  }
  
  // ========== UTILITY ==========
  
  /**
   * Get current attack pattern
   */
  _getPattern() {
    const patternName = this.phaseConfig.attackPattern || 'methodical';
    return ATTACK_PATTERNS[patternName] || ATTACK_PATTERNS.methodical;
  }
  
  /**
   * Change state with cleanup
   */
  _changeState(newState) {
    if (this.state === newState) return;
    
    this.previousState = this.state;
    this.state = newState;
    this.stateTimer = 0;
    this.stateData = {};
    
    // Update last attack time when starting attack
    if (newState === BOSS_STATE.ATTACKING) {
      this.lastAttackTime = Date.now();
    }
  }
  
  /**
   * Get boss state info for UI
   */
  getStateInfo() {
    return {
      state: this.state,
      health: this.health,
      maxHealth: this.maxHealth,
      posture: this.posture,
      maxPosture: this.maxPosture,
      phase: this.currentPhase,
      phaseName: this.phaseConfig.name,
      isEnraged: this.isEnraged,
      isActive: this.isActive,
      isDead: this.isDead,
      currentAbility: this.currentAbility?.name,
      buffCount: this.activeBuffs.length,
      minionCount: this.summonedMinions.length,
    };
  }
  
  /**
   * Force boss to take action (for testing/debugging)
   */
  forceAbility(abilityKey) {
    const ability = BOSS_ABILITIES[abilityKey];
    if (ability) {
      this.currentAbility = ability;
      this._changeState(BOSS_STATE.TELEGRAPH);
    }
  }
  
  /**
   * Respawn boss
   */
  respawn() {
    this.health = this.maxHealth;
    this.posture = 0;
    this.poise = this.maxPoise;
    this.currentPhase = 1;
    this.phaseConfig = this.data.phases[0];
    this.isEnraged = false;
    this.isDead = false;
    this.isActive = false;
    this.phaseTransitioning = false;
    
    // Clear state
    this.currentAbility = null;
    this.activeAttack = null;
    this._removeTelegraph();
    this.activeBuffs = [];
    this.summonedMinions = [];
    
    // Reset modifiers
    this.moveSpeed = this.baseSpeed;
    this.damageMultiplier = 1.0;
    this.damageReduction = 0;
    
    // Reset cooldowns
    this._initAbilityCooldowns();
    
    // Return to spawn
    this.boss.mesh.position.set(
      this.data.spawnLocation.x,
      this.data.spawnLocation.y || 0,
      this.data.spawnLocation.z
    );
    
    this._changeState(BOSS_STATE.DORMANT);
  }
}

export default BossAI;
