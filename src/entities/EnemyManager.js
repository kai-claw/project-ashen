import * as THREE from 'three';
import { Enemy, ENEMY_TYPES } from './Enemy.js';
import { Boss } from './Boss.js';

/**
 * Distance-based difficulty scaling configuration
 * Enemies scale based on distance from castle (origin)
 */
const DIFFICULTY_ZONES = {
  SAFE: {
    maxDistance: 50,
    hpMultiplier: 0.8,
    damageMultiplier: 0.7,
    remnantMultiplier: 0.8,
    spawnDensity: 0.3,         // Low enemy density near castle
    enemyTypes: ['HOLLOW_SOLDIER'],
    eliteChance: 0,
    label: 'Safe Zone',
  },
  MEDIUM: {
    maxDistance: 150,
    hpMultiplier: 1.0,
    damageMultiplier: 1.0,
    remnantMultiplier: 1.0,
    spawnDensity: 0.5,
    enemyTypes: ['HOLLOW_SOLDIER', 'BERSERKER'],
    eliteChance: 0.05,
    label: 'Medium Zone',
  },
  HARD: {
    maxDistance: 300,
    hpMultiplier: 1.3,
    damageMultiplier: 1.2,
    remnantMultiplier: 1.5,
    spawnDensity: 0.7,
    enemyTypes: ['HOLLOW_SOLDIER', 'BERSERKER', 'SENTINEL'],
    eliteChance: 0.15,
    label: 'Hard Zone',
  },
  FRONTIER: {
    maxDistance: Infinity,
    hpMultiplier: 1.6,
    damageMultiplier: 1.4,
    remnantMultiplier: 2.0,
    spawnDensity: 0.9,
    enemyTypes: ['BERSERKER', 'SENTINEL', 'CRYPT_GUARDIAN'],
    eliteChance: 0.25,
    label: 'Dark Frontier',
  },
};

/**
 * Get difficulty zone for a given distance from origin
 */
function getDifficultyZone(distance) {
  if (distance < DIFFICULTY_ZONES.SAFE.maxDistance) return DIFFICULTY_ZONES.SAFE;
  if (distance < DIFFICULTY_ZONES.MEDIUM.maxDistance) return DIFFICULTY_ZONES.MEDIUM;
  if (distance < DIFFICULTY_ZONES.HARD.maxDistance) return DIFFICULTY_ZONES.HARD;
  return DIFFICULTY_ZONES.FRONTIER;
}

/**
 * Calculate distance from origin (castle)
 */
function distanceFromCastle(x, z) {
  return Math.sqrt(x * x + z * z);
}

export class EnemyManager {
  constructor(scene, gameManager, player, world = null, particleManager = null, lootManager = null) {
    this.scene = scene;
    this.gm = gameManager;
    this.player = player;
    this.world = world;
    this.particleManager = particleManager;
    this.lootManager = lootManager;
    this.enemies = [];
    this.boss = null;
    this.cryptLord = null;  // Second boss - The Crypt Lord
    
    // Track permanently defeated bosses (do not respawn)
    this.defeatedBosses = new Set();
    
    // Procedural spawn tracking
    this.spawnedRegions = new Set();  // Track which chunks have been populated
    this.maxEnemies = 30;              // Performance limit
    this.spawnCheckRadius = 60;        // How far to check for spawning
    this.despawnRadius = 100;          // Despawn enemies far from player
    
    // ========== GROUP COORDINATION CONFIG ==========
    this.groupRadius = 30;              // Enemies within 30 units form a group
    this.maxActiveAttackers = 3;        // Max enemies attacking simultaneously
    this.groupJoinDelayMin = 0.5;       // Min delay before follower joins (seconds)
    this.groupJoinDelayMax = 2.0;       // Max delay before follower joins (seconds)
    this.leaderDeathConfusionTime = 1.0; // Confusion duration when leader dies
    this.activeGroups = new Map();      // Map<groupId, { leader, members, attackers }>
    this.nextGroupId = 1;               // Auto-increment group ID

    // Spawn enemies using terrain-based system
    this._spawnEnemies();
    
    // Skip old boss spawning - use terrain-based encounters instead
    // this._spawnBoss();
    
    console.log('[EnemyManager] Initialized with distance-based scaling');
  }

  /**
   * Spawn enemies using terrain-based procedural placement
   */
  _spawnEnemies() {
    if (!this.world?.terrain) {
      console.warn('[EnemyManager] No terrain available, using fallback spawns');
      this._spawnFallbackEnemies();
      return;
    }
    
    const terrain = this.world.terrain;
    
    // Spawn initial enemies in visible range (around origin)
    this._populateArea(0, 0, 80);
    
    console.log(`[EnemyManager] Spawned ${this.enemies.length} enemies with distance scaling`);
  }
  
  /**
   * Populate an area with enemies based on distance from castle
   */
  _populateArea(centerX, centerZ, radius) {
    if (!this.world?.terrain) return;
    
    const terrain = this.world.terrain;
    const numSpawns = Math.floor(radius / 10);  // ~1 spawn attempt per 10 units
    
    for (let i = 0; i < numSpawns; i++) {
      // Random position within area
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.random() * radius;
      const x = centerX + Math.cos(angle) * dist;
      const z = centerZ + Math.sin(angle) * dist;
      
      // Get distance from castle
      const castleDist = distanceFromCastle(x, z);
      
      // Skip castle interior (safe haven)
      if (castleDist < 35) continue;
      
      // Get difficulty zone
      const zone = getDifficultyZone(castleDist);
      
      // Check spawn probability based on density
      if (Math.random() > zone.spawnDensity) continue;
      
      // Check terrain suitability
      const slope = terrain.getTerrainSlope(x, z);
      if (slope > 0.5) continue;  // Too steep
      
      // Check not too close to trees
      if (this.world.isNearTree && this.world.isNearTree(x, z, 3)) continue;
      
      // Check not too close to existing enemies
      const tooClose = this.enemies.some(e => {
        const dx = e.spawnPos.x - x;
        const dz = e.spawnPos.z - z;
        return Math.sqrt(dx * dx + dz * dz) < 8;  // Minimum spacing
      });
      if (tooClose) continue;
      
      // Performance limit
      if (this.enemies.length >= this.maxEnemies) break;
      
      // Spawn enemy
      const y = terrain.getTerrainHeight(x, z);
      this._spawnEnemyAtPosition(x, y, z, zone, castleDist);
    }
  }
  
  /**
   * Spawn a single enemy at position with zone-appropriate stats
   */
  _spawnEnemyAtPosition(x, y, z, zone, castleDist) {
    // Select enemy type from zone's available types
    const typeKey = zone.enemyTypes[Math.floor(Math.random() * zone.enemyTypes.length)];
    const typeConfig = ENEMY_TYPES[typeKey];
    
    if (!typeConfig) {
      console.warn(`[EnemyManager] Unknown enemy type: ${typeKey}`);
      return;
    }
    
    // Check for elite upgrade
    const isElite = Math.random() < zone.eliteChance;
    
    // Calculate scaled stats
    const scaledConfig = this._applyDistanceScaling(typeConfig, zone, castleDist, isElite);
    
    const position = new THREE.Vector3(x, y, z);
    const enemy = new Enemy(this.scene, position, {
      type: typeKey,
      ...scaledConfig,
    }, this.gm);
    
    // Store distance for respawn scaling
    enemy.spawnDistance = castleDist;
    enemy.difficultyZone = zone.label;
    
    // Give world reference for collision
    enemy.world = this.world;
    
    this.enemies.push(enemy);
    
    return enemy;
  }
  
  /**
   * Apply distance-based scaling to enemy stats
   */
  _applyDistanceScaling(baseConfig, zone, distance, isElite = false) {
    // Base multipliers from zone
    let hpMult = zone.hpMultiplier;
    let dmgMult = zone.damageMultiplier;
    let remnantMult = zone.remnantMultiplier;
    
    // Gradual scaling within zone (smoother difficulty curve)
    // Each 50 units adds ~5% to stats
    const distanceBonus = 1 + (distance / 1000);
    hpMult *= distanceBonus;
    dmgMult *= distanceBonus;
    remnantMult *= distanceBonus;
    
    // Elite bonus
    if (isElite) {
      hpMult *= 1.5;
      dmgMult *= 1.3;
      remnantMult *= 2.0;
    }
    
    const scaled = {
      name: isElite ? `Elite ${baseConfig.name}` : baseConfig.name,
      health: Math.round(baseConfig.health * hpMult),
      damage: Math.round(baseConfig.damage * dmgMult),
      postureDmg: Math.round((baseConfig.postureDmg || 15) * dmgMult),
      remnantDrop: Math.round(baseConfig.remnantDrop * remnantMult),
      maxPosture: Math.round((baseConfig.maxPosture || 60) * hpMult),
      
      // Keep base movement/timing
      moveSpeed: baseConfig.moveSpeed,
      detectionRange: baseConfig.detectionRange + (isElite ? 3 : 0),
      attackRange: baseConfig.attackRange,
      attackCooldown: baseConfig.attackCooldown,
      attackWindup: baseConfig.attackWindup,
      attackDuration: baseConfig.attackDuration,
      
      // Visual distinction for scaled enemies
      bodyColor: isElite ? 0x660022 : baseConfig.bodyColor,
      eyeColor: isElite ? 0xff0000 : baseConfig.eyeColor,
      modelTint: isElite ? this._eliteTint(baseConfig.modelTint) : baseConfig.modelTint,
      modelScale: (baseConfig.modelScale || 0.5) * (isElite ? 1.15 : 1.0),
      
      // Copy remaining properties
      canChainAttacks: baseConfig.canChainAttacks,
      maxChainAttacks: baseConfig.maxChainAttacks,
      hasShield: baseConfig.hasShield,
      shieldBlockChance: baseConfig.shieldBlockChance,
      modelPath: baseConfig.modelPath,
      animSpeedMult: baseConfig.animSpeedMult,
      patrolRadius: baseConfig.patrolRadius,
      
      // Mark elite status
      isElite: isElite,
    };
    
    return scaled;
  }
  
  /**
   * Generate elite tint (darker, more menacing)
   */
  _eliteTint(baseTint) {
    if (!baseTint) return 0x440022;
    const color = new THREE.Color(baseTint);
    color.lerp(new THREE.Color(0x660000), 0.4);  // Shift toward red/black
    return color.getHex();
  }
  
  /**
   * Fallback spawns when terrain not available
   */
  _spawnFallbackEnemies() {
    const fallbackSpawns = [
      { pos: new THREE.Vector3(40, 0, 0), type: 'HOLLOW_SOLDIER' },
      { pos: new THREE.Vector3(60, 0, 20), type: 'HOLLOW_SOLDIER' },
      { pos: new THREE.Vector3(80, 0, -10), type: 'BERSERKER' },
      { pos: new THREE.Vector3(100, 0, 30), type: 'SENTINEL' },
    ];
    
    fallbackSpawns.forEach(spawn => {
      const zone = getDifficultyZone(distanceFromCastle(spawn.pos.x, spawn.pos.z));
      const config = ENEMY_TYPES[spawn.type];
      const scaledConfig = this._applyDistanceScaling(config, zone, distanceFromCastle(spawn.pos.x, spawn.pos.z));
      
      const enemy = new Enemy(this.scene, spawn.pos, {
        type: spawn.type,
        ...scaledConfig,
      }, this.gm);
      
      enemy.world = this.world;
      this.enemies.push(enemy);
    });
  }
  
  /**
   * Phase 24: Try to spawn night-specific enemies (wraiths, shadows, etc.)
   */
  _trySpawnNightEnemies(playerPos) {
    // Check if night gameplay integration is available
    const timeWeatherGameplay = this.gm?.timeWeatherGameplay;
    if (!timeWeatherGameplay) return;
    
    // Only spawn night enemies at night or dusk
    const timeManager = this.gm?.timeManager;
    if (!timeManager) return;
    
    const phase = timeManager.dayPhase;
    if (phase !== 'night' && phase !== 'dusk') return;
    
    // Limit total night enemies
    const nightEnemyCount = this.enemies.filter(e => e.isNightEnemy).length;
    const maxNightEnemies = phase === 'night' ? 5 : 2;
    if (nightEnemyCount >= maxNightEnemies) return;
    
    // Check spawn chance (once per second-ish)
    if (!this._nightSpawnTimer) this._nightSpawnTimer = 0;
    this._nightSpawnTimer++;
    if (this._nightSpawnTimer < 60) return; // ~1 second at 60fps
    this._nightSpawnTimer = 0;
    
    // Try each night enemy type
    const nightEnemyTypes = ['WRAITH', 'SHADOW_STALKER', 'NIGHT_HOWLER', 'PHANTOM'];
    for (const enemyTypeKey of nightEnemyTypes) {
      if (nightEnemyCount >= maxNightEnemies) break;
      
      if (timeWeatherGameplay.shouldSpawnNightEnemy(enemyTypeKey)) {
        const enemyConfig = timeWeatherGameplay.getNightEnemyConfig(enemyTypeKey);
        if (!enemyConfig) continue;
        
        // Spawn at random position around player (but not too close)
        const angle = Math.random() * Math.PI * 2;
        const dist = 25 + Math.random() * 30; // 25-55 units away
        const x = playerPos.x + Math.cos(angle) * dist;
        const z = playerPos.z + Math.sin(angle) * dist;
        const y = this.world?.terrain?.getTerrainHeight(x, z) ?? 0;
        
        // Use enemy data to create config
        const nightConfig = {
          health: enemyConfig.baseHealth * (1 + (timeManager.currentDay - 1) * 0.1), // Scale with day count
          maxHealth: enemyConfig.baseHealth * (1 + (timeManager.currentDay - 1) * 0.1),
          damage: enemyConfig.baseDamage,
          speed: 3.5,
          type: enemyConfig.id,
          name: enemyConfig.name,
          tint: 0x4422aa, // Purple/shadow tint
          remnantDrop: 50 + Math.floor(Math.random() * 50),
          isElite: false,
          isNightEnemy: true,
          fadeOnDawn: true // Will fade when dawn comes
        };
        
        const position = new THREE.Vector3(x, y, z);
        const enemy = new Enemy(this.scene, position, nightConfig, this.gm);
        enemy.world = this.world;
        enemy.isNightEnemy = true;
        enemy.special = enemyConfig.special;
        enemy.lootTable = enemyConfig.loot;
        
        // Make night enemies slightly transparent/ethereal
        if (enemy.mesh && enemy.mesh.material) {
          enemy.mesh.material.transparent = true;
          enemy.mesh.material.opacity = 0.85;
        }
        
        this.enemies.push(enemy);
        
        console.log(`[EnemyManager] Spawned night enemy: ${enemyConfig.name} at (${x.toFixed(1)}, ${z.toFixed(1)})`);
        break; // Only spawn one per check
      }
    }
  }
  
  /**
   * Phase 24: Despawn night enemies at dawn
   */
  _despawnNightEnemies() {
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      if (enemy.isNightEnemy && enemy.fadeOnDawn) {
        // Fade out effect
        if (enemy.mesh) {
          enemy.mesh.material.opacity *= 0.95;
          if (enemy.mesh.material.opacity < 0.1) {
            this.scene.remove(enemy.mesh);
            this.enemies.splice(i, 1);
          }
        }
      }
    }
  }
  
  /**
   * Dynamic spawning - call from game loop to spawn/despawn based on player position
   */
  updateDynamicSpawns(playerPos) {
    if (!this.world?.terrain) return;
    
    // Phase 24: Try to spawn night enemies
    this._trySpawnNightEnemies(playerPos);
    
    // Track which regions lost enemies for clearing
    const regionsToClear = new Set();
    
    // Despawn distant enemies (performance)
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      const dist = enemy.mesh.position.distanceTo(playerPos);
      
      if (dist > this.despawnRadius && !enemy.bossActive) {
        // Track the region this enemy was in for potential respawn
        if (enemy.spawnPos) {
          const regionX = Math.floor(enemy.spawnPos.x / 40) * 40;
          const regionZ = Math.floor(enemy.spawnPos.z / 40) * 40;
          regionsToClear.add(`${regionX},${regionZ}`);
        }
        
        // Remove from scene
        if (enemy.mesh) this.scene.remove(enemy.mesh);
        this.enemies.splice(i, 1);
      }
    }
    
    // Clear regions that no longer have enemies so they can respawn
    for (const regionKey of regionsToClear) {
      // Check if any remaining enemies are in this region
      const hasEnemies = this.enemies.some(e => {
        if (!e.spawnPos) return false;
        const rx = Math.floor(e.spawnPos.x / 40) * 40;
        const rz = Math.floor(e.spawnPos.z / 40) * 40;
        return `${rx},${rz}` === regionKey;
      });
      
      if (!hasEnemies) {
        this.spawnedRegions.delete(regionKey);
      }
    }
    
    // Spawn new enemies around player - check multiple nearby regions
    if (this.enemies.length < this.maxEnemies) {
      const playerRegionX = Math.floor(playerPos.x / 40);
      const playerRegionZ = Math.floor(playerPos.z / 40);
      
      // Check current region and adjacent regions for spawning
      for (let dx = -1; dx <= 1; dx++) {
        for (let dz = -1; dz <= 1; dz++) {
          const regionX = (playerRegionX + dx) * 40;
          const regionZ = (playerRegionZ + dz) * 40;
          const regionKey = `${regionX},${regionZ}`;
          
          // Skip if already spawned or at max capacity
          if (this.spawnedRegions.has(regionKey)) continue;
          if (this.enemies.length >= this.maxEnemies) break;
          
          // Only spawn if region center is within reasonable distance
          const regionCenterDist = Math.sqrt(
            Math.pow(regionX + 20 - playerPos.x, 2) + 
            Math.pow(regionZ + 20 - playerPos.z, 2)
          );
          if (regionCenterDist > this.spawnCheckRadius) continue;
          
          this.spawnedRegions.add(regionKey);
          this._populateArea(regionX, regionZ, 40);
        }
      }
    }
  }
  
  _spawnBoss() {
    // Get boss position from world or fallback
    const bossPos = this.world?.getBossPosition() || new THREE.Vector3(0, 0, -95);
    this.boss = new Boss(this.scene, bossPos, this.gm);
    
    // Give boss world reference for collision detection
    this.boss.world = this.world;
    
    // Create a boss arena marker (subtle floor glow)
    const arenaGeo = new THREE.RingGeometry(8, 12, 32);
    const arenaMat = new THREE.MeshBasicMaterial({
      color: 0x331111,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
    });
    const arenaRing = new THREE.Mesh(arenaGeo, arenaMat);
    arenaRing.rotation.x = -Math.PI / 2;
    arenaRing.position.copy(bossPos);
    arenaRing.position.y = 0.02;
    this.scene.add(arenaRing);
  }

  update(delta, player) {
    // Dynamic spawning based on player position
    this.updateDynamicSpawns(player.mesh.position);
    
    // Phase 24: Despawn night enemies at dawn
    const timeManager = this.gm?.timeManager;
    if (timeManager && (timeManager.dayPhase === 'dawn' || timeManager.dayPhase === 'day')) {
      this._despawnNightEnemies();
    }
    
    // Check for dormant enemy triggers (ambush spawns)
    this._checkDormantTriggers(player);
    
    // Coordinate flanking behavior when multiple enemies engage
    this._coordinateFlanking(player);
    
    // Coordinate group combat tactics (staggered attacks, max attackers, etc.)
    this._coordinateGroups(player);
    
    // Update regular enemies
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      enemy.update(delta, player);

      // Check player attacks hitting enemies (use horizontal distance - ignore y)
      if (player.activeAttack && !player.hitThisSwing) {
        const dx = enemy.mesh.position.x - player.activeAttack.position.x;
        const dz = enemy.mesh.position.z - player.activeAttack.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        if (dist < player.activeAttack.range && enemy.health > 0) {
          // Pass player position for recoil direction
          const result = enemy.takeDamage(
            player.activeAttack.damage,
            player.activeAttack.postureDmg,
            player.mesh.position // attackerPos for recoil
          );
          player.hitThisSwing = true;
          
          // HITSTOP - brief freeze on impact
          if (player.activeAttack.isHeavy) {
            this.gm.hitstopHeavy();
          } else {
            this.gm.hitstopLight();
          }
          
          // CAMERA SHAKE - impact feedback
          if (this.gm.cameraController) {
            if (player.activeAttack.isHeavy) {
              this.gm.cameraController.shakeMedium();
            } else {
              this.gm.cameraController.shakeLight();
            }
          }

          // Spawn hit particles
          if (this.particleManager) {
            const hitPos = enemy.mesh.position.clone();
            const hitDir = enemy.mesh.position.clone().sub(player.mesh.position).normalize();
            this.particleManager.spawnHitSparks(hitPos, 8, player.activeAttack.isHeavy);
            this.particleManager.spawnBlood(hitPos, hitDir, Math.ceil(player.activeAttack.damage / 5));
            
            if (result === 'posture_broken') {
              this.particleManager.spawnPostureBreak(hitPos);
            }
          }

          if (result === 'died') {
            this.gm.addRemnant(enemy.config.remnantDrop);
            // Grant XP for the kill
            const xpReward = this.gm.calculateEnemyXP(enemy);
            this.gm.gainXP(xpReward, enemy.mesh.position);
            // Spawn death particles
            if (this.particleManager) {
              this.particleManager.spawnDeathBurst(enemy.mesh.position.clone());
            }
            // Drop loot
            if (this.lootManager) {
              this.lootManager.rollLoot(enemy, enemy.mesh.position.clone());
            }
            // Respawn after delay with same scaling
            setTimeout(() => {
              enemy.respawn();
            }, 8000);
          }
        }
      }

      // Check enemy attacks hitting player (use horizontal distance - ignore y)
      if (enemy.activeAttack && !enemy.hitThisSwing) {
        const edx = player.mesh.position.x - enemy.activeAttack.position.x;
        const edz = player.mesh.position.z - enemy.activeAttack.position.z;
        const dist = Math.sqrt(edx * edx + edz * edz);
        if (dist < enemy.activeAttack.range && !player.isInvincible) {
          // Check for parry (perfect timed block)
          if (player.isParrying) {
            // Parry success! Deflect the attack
            enemy.hitThisSwing = true;
            player.onParrySuccess();
            
            // Stagger the enemy
            enemy.state = 'staggered';
            enemy.stateTimer = 0;
            
            // Spawn parry sparks
            if (this.particleManager) {
              this.particleManager.spawnParryEffect(player.mesh.position.clone());
            }
            
            continue; // Skip damage, attack parried
          }
          
          const result = this.gm.takeDamage(
            enemy.activeAttack.damage,
            'physical',
            enemy.activeAttack.postureDmg,
            player.isBlocking
          );
          enemy.hitThisSwing = true;
          player.flashDamage();
          
          // HUD DAMAGE VIGNETTE - screen flash feedback
          if (this.gm.hud) {
            const intensity = enemy.activeAttack.damage / 30; // Scale with damage
            this.gm.hud.flashDamage(Math.min(1.0, intensity));
          }
          
          // CAMERA SHAKE - getting hit shake
          if (this.gm.cameraController) {
            this.gm.cameraController.shakeHeavy();
          }

          // Spawn hit particles
          if (this.particleManager) {
            const hitPos = player.mesh.position.clone();
            const hitDir = player.mesh.position.clone().sub(enemy.mesh.position).normalize();
            if (player.isBlocking && result !== 'guard_broken') {
              this.particleManager.spawnBlockSparks(hitPos);
            } else {
              this.particleManager.spawnHitSparks(hitPos, 6, false);
              this.particleManager.spawnBlood(hitPos, hitDir, Math.ceil(enemy.activeAttack.damage / 5));
            }
            if (result === 'guard_broken' || result === 'posture_broken') {
              this.particleManager.spawnPostureBreak(hitPos);
            }
          }

          if (result === 'died') {
            // Player reset happens in GameManager.respawn() after death screen
          } else if (result === 'guard_broken' || result === 'posture_broken') {
            player.state = 'staggered';
            player.stateTimer = 0;
          }
        }
      }
    }
    
    // Update boss
    if (this.boss) {
      this.boss.update(delta, player);
      
      // Check player attacks hitting boss
      if (player.activeAttack && !player.hitThisSwing && !this.boss.isDead) {
        const dx = this.boss.mesh.position.x - player.activeAttack.position.x;
        const dz = this.boss.mesh.position.z - player.activeAttack.position.z;
        const dist = Math.sqrt(dx * dx + dz * dz);
        // Boss has larger hitbox
        if (dist < player.activeAttack.range + 1.0 && this.boss.health > 0) {
          const result = this.boss.takeDamage(
            player.activeAttack.damage,
            player.activeAttack.postureDmg,
            player.mesh.position // attackerPos for recoil
          );
          player.hitThisSwing = true;
          
          // HITSTOP - boss hits feel extra impactful
          this.gm.hitstopHeavy();
          
          // CAMERA SHAKE - more intense for boss hits
          if (this.gm.cameraController) {
            this.gm.cameraController.shakeMedium();
          }
          
          // Spawn boss hit particles (more dramatic)
          if (this.particleManager) {
            const hitPos = this.boss.mesh.position.clone();
            const hitDir = this.boss.mesh.position.clone().sub(player.mesh.position).normalize();
            this.particleManager.spawnHitSparks(hitPos, 12, player.activeAttack.isHeavy);
            this.particleManager.spawnBlood(hitPos, hitDir, Math.ceil(player.activeAttack.damage / 3));
            
            if (result === 'posture_broken') {
              this.particleManager.spawnPostureBreak(hitPos);
            }
            if (result === 'died') {
              // Epic death burst for boss
              this.particleManager.spawnDeathBurst(hitPos);
              this.particleManager.spawnDeathBurst(hitPos); // Double for boss
              // Grant XP for boss kill (large reward!)
              this.gm.gainXP(200, hitPos);
            }
          }
        }
      }
      
      // Check boss attacks hitting player
      if (this.boss.activeAttack && !this.boss.hitThisSwing) {
        const bdx = player.mesh.position.x - this.boss.activeAttack.position.x;
        const bdz = player.mesh.position.z - this.boss.activeAttack.position.z;
        const dist = Math.sqrt(bdx * bdx + bdz * bdz);
        if (dist < this.boss.activeAttack.range && !player.isInvincible) {
          // Check for parry (perfect timed block) - boss attacks can be parried!
          if (player.isParrying) {
            // Parry success! Deflect the boss attack
            this.boss.hitThisSwing = true;
            player.onParrySuccess();
            
            // Brief stagger on boss (shorter than regular enemies)
            if (this.boss.state !== 'staggered') {
              this.boss.state = 'staggered';
              this.boss.stateTimer = 0;
            }
            
            // Spawn dramatic parry sparks
            if (this.particleManager) {
              this.particleManager.spawnParryEffect(player.mesh.position.clone());
              this.particleManager.spawnBlockSparks(player.mesh.position.clone());
            }
            
            // Boss parry is more satisfying - extra effects
            if (this.gm.cameraController) {
              this.gm.cameraController.shakeMedium();
            }
            
            // Continue instead of taking damage
          } else {
            const result = this.gm.takeDamage(
              this.boss.activeAttack.damage,
              'physical',
              this.boss.activeAttack.postureDmg,
              player.isBlocking
            );
            this.boss.hitThisSwing = true;
            player.flashDamage();
          
            // HUD DAMAGE VIGNETTE - boss hits feel brutal
            if (this.gm.hud) {
              const intensity = this.boss.activeAttack.damage / 25; // Boss hits are more intense
              this.gm.hud.flashDamage(Math.min(1.0, intensity));
            }
            
            // CAMERA SHAKE - brutal boss impact
            if (this.gm.cameraController) {
              this.gm.cameraController.shake(0.7, 0.25); // Extra intense shake
            }
            
            // Spawn hit particles (boss hits are more dramatic)
            if (this.particleManager) {
              const hitPos = player.mesh.position.clone();
              const hitDir = player.mesh.position.clone().sub(this.boss.mesh.position).normalize();
              if (player.isBlocking && result !== 'guard_broken') {
                this.particleManager.spawnBlockSparks(hitPos);
                this.particleManager.spawnBlockSparks(hitPos); // Extra sparks for boss block
              } else {
                this.particleManager.spawnHitSparks(hitPos, 10, true);
                this.particleManager.spawnBlood(hitPos, hitDir, Math.ceil(this.boss.activeAttack.damage / 4));
              }
              if (result === 'guard_broken' || result === 'posture_broken') {
                this.particleManager.spawnPostureBreak(hitPos);
              }
            }
            
            if (result === 'died') {
              // Player death handled by GameManager
            } else if (result === 'guard_broken' || result === 'posture_broken') {
              player.state = 'staggered';
              player.stateTimer = 0;
            }
          }
        }
      }
    }
  }

  /**
   * Check if player is near any dormant enemies and trigger them
   */
  _checkDormantTriggers(player) {
    const playerPos = player.mesh.position;
    
    for (const enemy of this.enemies) {
      // Check if this dormant enemy should wake up
      if (enemy.checkTrigger && enemy.checkTrigger(playerPos)) {
        enemy.wake();
        
        // Play ambush sound cue
        if (this.gm?.audioManager) {
          this.gm.audioManager.play('ambushReveal', { 
            position: enemy.mesh.position, 
            volume: 0.8 
          });
        }
        
        // Camera reaction for dramatic effect
        if (this.gm?.cameraController) {
          this.gm.cameraController.shakeLight();
        }
      }
    }
  }
  
  /**
   * Coordinate flanking behavior when multiple enemies engage the player
   * Assigns one enemy to flank when 2+ enemies are targeting same player
   */
  _coordinateFlanking(player) {
    const playerPos = player.mesh.position;
    
    // Find enemies currently chasing/engaging the player
    const engagingEnemies = this.enemies.filter(enemy => {
      if (enemy.isDead || enemy.state === 'dead') return false;
      if (enemy.state === 'staggered' || enemy.state === 'dormant') return false;
      if (enemy.isBoss) return false; // Bosses don't flank
      
      // Check if enemy is in combat range (detection * 1.2)
      const dist = enemy.mesh.position.distanceTo(playerPos);
      if (dist > (enemy.config.detectionRange || 10) * 1.2) return false;
      
      // Must be in a combat state
      return enemy.state === 'chase' || enemy.state === 'circle' || enemy.state === 'attack';
    });
    
    // Need 2+ enemies for flanking coordination
    if (engagingEnemies.length < 2) return;
    
    // Find enemies capable of flanking that aren't already flanking
    const flankCandidates = engagingEnemies.filter(enemy => {
      if (!enemy.canFlank) return false;
      if (enemy.state === 'flank') return false;
      if (enemy.isFlankAssigned) return false;
      if (enemy.isRetreating) return false;
      return true;
    });
    
    // Count how many are already flanking
    const currentlyFlanking = engagingEnemies.filter(e => e.state === 'flank').length;
    
    // Allow at most 1 flanker per 3 engaging enemies
    const maxFlankers = Math.floor(engagingEnemies.length / 2);
    if (currentlyFlanking >= maxFlankers) return;
    
    // Sort candidates by distance to player (furthest should flank)
    flankCandidates.sort((a, b) => {
      const distA = a.mesh.position.distanceTo(playerPos);
      const distB = b.mesh.position.distanceTo(playerPos);
      return distB - distA; // Furthest first
    });
    
    // Request flank from best candidate
    for (const candidate of flankCandidates) {
      if (candidate.requestFlank && candidate.requestFlank()) {
        // Successfully assigned a flanker
        break;
      }
    }
  }
  
  /**
   * Coordinate group combat tactics for enemies near each other
   * - Assigns enemies to groups based on proximity
   * - First enemy to aggro becomes leader, others hold back 2s
   * - Limits active attackers to 3 at once
   * - Triggers confusion when leader dies
   */
  _coordinateGroups(player) {
    const playerPos = player.mesh.position;
    
    // Find all enemies currently in combat (chasing, attacking, etc.)
    const combatEnemies = this.enemies.filter(enemy => {
      if (enemy.isDead || enemy.state === 'dead') return false;
      if (enemy.state === 'staggered' || enemy.state === 'dormant' || enemy.state === 'rising') return false;
      if (enemy.isBoss) return false;
      
      // Must be in detection range and combat state
      const dist = enemy.mesh.position.distanceTo(playerPos);
      if (dist > (enemy.config.detectionRange || 10) * 1.5) return false;
      
      return enemy.state === 'chase' || enemy.state === 'circle' || 
             enemy.state === 'attack' || enemy.state === 'flank' ||
             enemy.isInCombat?.() || false;
    });
    
    if (combatEnemies.length === 0) {
      // No enemies in combat - clear all groups
      this.activeGroups.clear();
      return;
    }
    
    // Clean up dead/disengaged enemies from groups
    for (const [groupId, group] of this.activeGroups) {
      group.members = group.members.filter(e => 
        !e.isDead && e.state !== 'dead' && e.state !== 'idle' && e.state !== 'patrol'
      );
      
      // If leader died, trigger confusion in remaining members
      if (group.leader && (group.leader.isDead || group.leader.state === 'dead')) {
        this._handleLeaderDeath(group);
        group.leader = null;
      }
      
      // Remove empty groups
      if (group.members.length === 0) {
        this.activeGroups.delete(groupId);
      }
    }
    
    // Find enemies not yet in a group
    const ungroupedEnemies = combatEnemies.filter(e => e.groupId === null);
    
    // Try to add ungrouped enemies to existing groups (within groupRadius)
    for (const enemy of ungroupedEnemies) {
      let joinedGroup = false;
      
      for (const [groupId, group] of this.activeGroups) {
        if (group.members.length === 0) continue;
        
        // Check if enemy is close to any group member
        const isNearGroup = group.members.some(member => {
          const dist = enemy.mesh.position.distanceTo(member.mesh.position);
          return dist < this.groupRadius;
        });
        
        if (isNearGroup) {
          // Join existing group as follower
          const joinDelay = this.groupJoinDelayMin + 
            Math.random() * (this.groupJoinDelayMax - this.groupJoinDelayMin);
          enemy.joinGroup(groupId, false, joinDelay);
          group.members.push(enemy);
          joinedGroup = true;
          break;
        }
      }
      
      // If not near any group, create a new group with this enemy as leader
      if (!joinedGroup) {
        const newGroupId = `group_${this.nextGroupId++}`;
        enemy.joinGroup(newGroupId, true, 0); // Leader, no delay
        this.activeGroups.set(newGroupId, {
          leader: enemy,
          members: [enemy],
          attackers: [],
        });
      }
    }
    
    // Merge nearby groups (if two leaders got close)
    this._mergeNearbyGroups();
    
    // Manage attack queue for each group (max 3 attackers)
    this._manageGroupAttackers(player);
  }
  
  /**
   * Handle leader death - trigger confusion in remaining group members
   */
  _handleLeaderDeath(group) {
    for (const member of group.members) {
      if (!member.isDead && member.state !== 'dead' && !member.isGroupLeader) {
        member.triggerConfusion(this.leaderDeathConfusionTime);
      }
    }
    
    // Promote new leader after confusion (highest health remaining)
    setTimeout(() => {
      const aliveMembers = group.members.filter(m => !m.isDead && m.state !== 'dead');
      if (aliveMembers.length > 0) {
        // Pick highest health member as new leader
        aliveMembers.sort((a, b) => b.health - a.health);
        const newLeader = aliveMembers[0];
        newLeader.isGroupLeader = true;
        group.leader = newLeader;
      }
    }, this.leaderDeathConfusionTime * 1000);
  }
  
  /**
   * Merge groups whose members are now close to each other
   */
  _mergeNearbyGroups() {
    const groupIds = Array.from(this.activeGroups.keys());
    
    for (let i = 0; i < groupIds.length; i++) {
      for (let j = i + 1; j < groupIds.length; j++) {
        const groupA = this.activeGroups.get(groupIds[i]);
        const groupB = this.activeGroups.get(groupIds[j]);
        
        if (!groupA || !groupB) continue;
        if (groupA.members.length === 0 || groupB.members.length === 0) continue;
        
        // Check if any members of groups are within groupRadius
        let shouldMerge = false;
        for (const memberA of groupA.members) {
          for (const memberB of groupB.members) {
            const dist = memberA.mesh.position.distanceTo(memberB.mesh.position);
            if (dist < this.groupRadius) {
              shouldMerge = true;
              break;
            }
          }
          if (shouldMerge) break;
        }
        
        if (shouldMerge) {
          // Merge groupB into groupA
          for (const member of groupB.members) {
            member.groupId = groupIds[i];
            member.isGroupLeader = false; // Only one leader
            groupA.members.push(member);
          }
          
          // Keep the higher health leader
          if (groupB.leader && groupA.leader) {
            if (groupB.leader.health > groupA.leader.health) {
              groupA.leader.isGroupLeader = false;
              groupB.leader.isGroupLeader = true;
              groupA.leader = groupB.leader;
            }
          }
          
          // Remove merged group
          this.activeGroups.delete(groupIds[j]);
        }
      }
    }
  }
  
  /**
   * Manage attack queue - limit active attackers to maxActiveAttackers
   * Others circle/wait for their turn
   */
  _manageGroupAttackers(player) {
    for (const [groupId, group] of this.activeGroups) {
      // Find members currently attacking
      const currentAttackers = group.members.filter(m => 
        m.isAttacking?.() || m.state === 'attack'
      );
      
      // Find members wanting to attack (in range, not already attacking)
      const wantingToAttack = group.members.filter(m => {
        if (m.isDead || m.state === 'dead') return false;
        if (m.isAttacking?.() || m.state === 'attack') return false;
        if (m.isWaitingToJoin || m.isConfused) return false;
        
        const dist = m.mesh.position.distanceTo(player.mesh.position);
        return dist <= (m.config.attackRange || 2.2);
      });
      
      // Calculate how many more can attack
      const availableSlots = this.maxActiveAttackers - currentAttackers.length;
      
      // Allow attackers up to limit
      let slotsUsed = 0;
      for (const member of group.members) {
        if (member.isDead || member.state === 'dead') continue;
        
        if (member.isAttacking?.() || member.state === 'attack') {
          // Already attacking - allowed
          member.canAttackInGroup = true;
        } else if (slotsUsed < availableSlots && wantingToAttack.includes(member)) {
          // Has a slot and wants to attack - allowed
          member.canAttackInGroup = true;
          slotsUsed++;
        } else if (wantingToAttack.includes(member)) {
          // Wants to attack but no slot - must circle
          member.canAttackInGroup = false;
        } else {
          // Not in attack range yet - can attack when they get there
          member.canAttackInGroup = true;
        }
      }
      
      // Update attackers list
      group.attackers = currentAttackers;
    }
  }
  
  /**
   * Get the current difficulty zone for player position (for UI display)
   */
  getPlayerZone(playerPos) {
    const dist = distanceFromCastle(playerPos.x, playerPos.z);
    return getDifficultyZone(dist);
  }
  
  // Reset all enemies to starting state (called on player respawn)
  resetAll() {
    // Clear all active groups
    this.activeGroups.clear();
    
    this.enemies.forEach(enemy => {
      // Don't respawn permanently defeated bosses
      if (enemy.isBoss && this.defeatedBosses.has(enemy.bossId || 'crypt-lord')) {
        return;
      }
      enemy.respawn();
    });
    if (this.boss) {
      this.boss.respawn();
    }
  }
  
  // Mark a boss as permanently defeated (no respawn)
  markBossDefeated(bossId) {
    this.defeatedBosses.add(bossId);
  }
  
  // Check if a boss is defeated
  isBossDefeated(bossId) {
    return this.defeatedBosses.has(bossId);
  }
  
  // Get boss reference for HUD
  getBoss() {
    return this.boss;
  }
  
  // Get Crypt Lord reference for HUD (second boss)
  getCryptLord() {
    return this.cryptLord;
  }
  
  // Get currently active boss (whichever is in combat)
  getActiveBoss() {
    // Prioritize Crypt Lord if active
    if (this.cryptLord && this.cryptLord.bossActive && !this.cryptLord.isDead) {
      return this.cryptLord;
    }
    // Fall back to original boss
    if (this.boss && this.boss.isActive && !this.boss.isDead) {
      return this.boss;
    }
    return null;
  }
}

// Export zone utilities for other systems
export { getDifficultyZone, distanceFromCastle, DIFFICULTY_ZONES };
