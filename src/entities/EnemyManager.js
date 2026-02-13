import * as THREE from 'three';
import { Enemy } from './Enemy.js';

export class EnemyManager {
  constructor(scene, gameManager, player) {
    this.scene = scene;
    this.gm = gameManager;
    this.player = player;
    this.enemies = [];

    // Spawn initial enemies
    this._spawnEnemies();
  }

  _spawnEnemies() {
    const positions = [
      new THREE.Vector3(0, 0, -3),   // Close enemy for testing combat
      new THREE.Vector3(-6, 0, -10),
      new THREE.Vector3(3, 0, -15),
    ];

    positions.forEach((pos, i) => {
      const enemy = new Enemy(this.scene, pos, {
        name: `Hollow Soldier ${i + 1}`,
        health: 40 + i * 10,
        damage: 15 + i * 5,
        remnantDrop: 30 + i * 15,
        patrolRadius: 3 + i,
      });
      this.enemies.push(enemy);
    });
  }

  update(delta, player) {
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
  }

  // Reset all enemies to starting state (called on player respawn)
  resetAll() {
    this.enemies.forEach(enemy => enemy.respawn());
    console.log('[COMBAT] All enemies reset');
  }
}
