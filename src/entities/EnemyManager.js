import * as THREE from 'three';
import { Enemy, ENEMY_TYPES } from './Enemy.js';
import { Boss } from './Boss.js';

export class EnemyManager {
  constructor(scene, gameManager, player) {
    this.scene = scene;
    this.gm = gameManager;
    this.player = player;
    this.enemies = [];
    this.boss = null;

    // Spawn initial enemies
    this._spawnEnemies();
    
    // Spawn the boss in a distant arena
    this._spawnBoss();
  }

  _spawnEnemies() {
    // Mix of enemy types for variety
    const enemySpawns = [
      // Close hollow soldier for initial testing
      { pos: new THREE.Vector3(0, 0, -4), type: 'HOLLOW_SOLDIER' },
      
      // Berserker - fast and aggressive
      { pos: new THREE.Vector3(-5, 0, -8), type: 'BERSERKER' },
      
      // Another hollow soldier
      { pos: new THREE.Vector3(6, 0, -10), type: 'HOLLOW_SOLDIER' },
      
      // Sentinel - tanky shield enemy
      { pos: new THREE.Vector3(0, 0, -15), type: 'SENTINEL' },
      
      // Berserker pair
      { pos: new THREE.Vector3(-8, 0, -18), type: 'BERSERKER' },
      { pos: new THREE.Vector3(-6, 0, -20), type: 'BERSERKER' },
    ];

    enemySpawns.forEach((spawn, i) => {
      const typeConfig = ENEMY_TYPES[spawn.type] || ENEMY_TYPES.HOLLOW_SOLDIER;
      const enemy = new Enemy(this.scene, spawn.pos, {
        type: spawn.type,
        name: `${typeConfig.name} ${i + 1}`,
      });
      this.enemies.push(enemy);
    });
  }
  
  _spawnBoss() {
    // Boss arena at end of test area
    const bossPos = new THREE.Vector3(0, 0, -35);
    this.boss = new Boss(this.scene, bossPos, this.gm);
    
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
          const result = enemy.takeDamage(
            player.activeAttack.damage,
            player.activeAttack.postureDmg
          );
          player.hitThisSwing = true;
          console.log(`[COMBAT] Player hit ${enemy.config.name} for ${player.activeAttack.damage} damage! Result: ${result}`);

          if (result === 'died') {
            this.gm.addRemnant(enemy.config.remnantDrop);
            console.log(`[COMBAT] ${enemy.config.name} died! Dropped ${enemy.config.remnantDrop} remnant`);
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
          console.log(`[COMBAT] ${enemy.config.name} hit player for ${enemy.activeAttack.damage} damage! Result: ${result}, HP: ${this.gm.health}/${this.gm.maxHealth}`);

          if (result === 'died') {
            console.log('[COMBAT] Player died!');
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
            player.activeAttack.postureDmg
          );
          player.hitThisSwing = true;
          console.log(`[BOSS] Player hit ${this.boss.name} for ${player.activeAttack.damage} damage! Result: ${result}`);
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
          console.log(`[BOSS] ${this.boss.name} hit player for ${this.boss.activeAttack.damage} damage! Result: ${result}`);
          
          if (result === 'died') {
            console.log('[BOSS] Player died to boss!');
          } else if (result === 'guard_broken' || result === 'posture_broken') {
            player.state = 'staggered';
            player.stateTimer = 0;
          }
        }
      }
    }
  }

  // Reset all enemies to starting state (called on player respawn)
  resetAll() {
    this.enemies.forEach(enemy => enemy.respawn());
    if (this.boss) {
      this.boss.respawn();
    }
    console.log('[COMBAT] All enemies and boss reset');
  }
  
  // Get boss reference for HUD
  getBoss() {
    return this.boss;
  }
}
