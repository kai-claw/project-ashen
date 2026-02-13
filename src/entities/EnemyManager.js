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
      new THREE.Vector3(8, 0, -5),
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

      // Check player attacks hitting enemies
      if (player.activeAttack && !player.hitThisSwing) {
        const dist = enemy.mesh.position.distanceTo(player.activeAttack.position);
        if (dist < player.activeAttack.range && enemy.health > 0) {
          const result = enemy.takeDamage(
            player.activeAttack.damage,
            player.activeAttack.postureDmg
          );
          player.hitThisSwing = true;

          if (result === 'died') {
            this.gm.addRemnant(enemy.config.remnantDrop);
            // Respawn after delay
            setTimeout(() => {
              enemy.respawn();
            }, 8000);
          }
        }
      }

      // Check enemy attacks hitting player
      if (enemy.activeAttack && !enemy.hitThisSwing) {
        const dist = player.mesh.position.distanceTo(enemy.activeAttack.position);
        if (dist < enemy.activeAttack.range && !player.isInvincible) {
          const result = this.gm.takeDamage(
            enemy.activeAttack.damage,
            'physical',
            enemy.activeAttack.postureDmg,
            player.isBlocking
          );
          enemy.hitThisSwing = true;

          if (result === 'died') {
            player.resetPosition();
          } else if (result === 'guard_broken' || result === 'posture_broken') {
            player.state = 'staggered';
            player.stateTimer = 0;
          }
        }
      }
    }
  }
}
