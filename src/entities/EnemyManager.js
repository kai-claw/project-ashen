import * as THREE from 'three';
import { Enemy, ENEMY_TYPES } from './Enemy.js';
import { Boss } from './Boss.js';

export class EnemyManager {
  constructor(scene, gameManager, player, world = null, particleManager = null) {
    this.scene = scene;
    this.gm = gameManager;
    this.player = player;
    this.world = world;
    this.particleManager = particleManager;
    this.enemies = [];
    this.boss = null;
    this.cryptLord = null;  // Second boss - The Crypt Lord
    
    // Track permanently defeated bosses (do not respawn)
    this.defeatedBosses = new Set();

    // Spawn enemies from world data or fallback
    this._spawnEnemies();
    
    // Spawn the boss
    this._spawnBoss();
  }

  _spawnEnemies() {
    // Get spawns from world if available, otherwise use defaults
    const enemySpawns = this.world?.getEnemySpawns() || [
      { pos: new THREE.Vector3(0, 0, -6), type: 'HOLLOW_SOLDIER' },
      { pos: new THREE.Vector3(-4, 0, -15), type: 'BERSERKER' },
      { pos: new THREE.Vector3(5, 0, -22), type: 'SENTINEL' },
    ];

    enemySpawns.forEach((spawn, i) => {
      const typeConfig = ENEMY_TYPES[spawn.type] || ENEMY_TYPES.HOLLOW_SOLDIER;
      const enemy = new Enemy(this.scene, spawn.pos, {
        type: spawn.type,
        name: typeConfig.name,
        behavior: spawn.behavior,
        triggerRadius: spawn.triggerRadius,
      }, this.gm);
      
      // Give ALL enemies world reference for collision detection
      enemy.world = this.world;
      
      // Special handling for Crypt Lord (second boss)
      if (spawn.type === 'CRYPT_LORD' || spawn.isCryptLord) {
        this.cryptLord = enemy;
        // Give Crypt Lord enemy manager reference for spawning adds
        enemy.enemyManager = this;
      }
      
      this.enemies.push(enemy);
    });
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
    // Check for dormant enemy triggers (ambush spawns)
    this._checkDormantTriggers(player);
    
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
            // Spawn death particles
            if (this.particleManager) {
              this.particleManager.spawnDeathBurst(enemy.mesh.position.clone());
            }
            // Respawn after delay
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
  
  // Reset all enemies to starting state (called on player respawn)
  resetAll() {
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
