/**
 * SpellCaster.js - Phase 20: Magic System
 * 
 * Handles spell casting mechanics:
 * - Cast initiation, targeting, and execution
 * - Cast times with interruption
 * - Projectile creation and movement
 * - AOE effects
 * - Healing/buff application
 * - Spell collision with enemies
 */

import * as THREE from 'three';
import SPELL_DATA, { 
  SPELL_TARGET,
  SPELL_CATEGORIES,
  calculateSpellDamage,
  calculateSpellHealing 
} from '../data/SpellData.js';

export class SpellCaster {
  constructor(gameManager, spellManager, particleManager, audioManager) {
    this.gm = gameManager;
    this.spellManager = spellManager;
    this.particleManager = particleManager;
    this.audioManager = audioManager;
    
    // Scene reference (set via setScene)
    this.scene = null;
    
    // Player reference (set via setPlayer)
    this.player = null;
    
    // Enemy manager reference (set via setEnemyManager)
    this.enemyManager = null;
    
    // Casting state
    this.isCasting = false;
    this.currentCastSpell = null;
    this.castTimer = 0;
    this.castDuration = 0;
    
    // Active projectiles: { id, mesh, effectId, velocity, spell, damage, distanceTraveled, maxDistance }
    this.projectiles = [];
    this.projectileIdCounter = 0;
    
    // Active AOE effects: { id, position, radius, spell, duration, tickTimer }
    this.activeAOEs = [];
    this.aoeIdCounter = 0;
    
    // Casting visual (hands glow) - now managed by SpellEffects
    this.castingGlow = null;
    this.castingEffectId = null;
    
    // SpellEffects manager reference (set via spellEffects property)
    this.spellEffects = null;
    
    // Events
    this.onCastStart = null;      // (spell) => void
    this.onCastComplete = null;   // (spell) => void
    this.onCastInterrupt = null;  // (spell) => void
    this.onSpellHit = null;       // (spell, target, damage) => void
  }
  
  /**
   * Set scene reference
   */
  setScene(scene) {
    this.scene = scene;
  }
  
  /**
   * Set player reference
   */
  setPlayer(player) {
    this.player = player;
  }
  
  /**
   * Set enemy manager reference
   */
  setEnemyManager(enemyManager) {
    this.enemyManager = enemyManager;
  }
  
  /**
   * Attempt to cast a spell
   * @param {string} spellId - Spell to cast
   * @returns {boolean} True if cast started
   */
  castSpell(spellId) {
    const spell = SPELL_DATA[spellId];
    if (!spell) {
      console.warn('[SpellCaster] Unknown spell:', spellId);
      return false;
    }
    
    // Check if already casting
    if (this.isCasting) {
      console.log('[SpellCaster] Already casting');
      return false;
    }
    
    // Check if player can cast (SpellManager handles mana, cooldowns, state)
    if (!this.spellManager.beginCast(spellId)) {
      return false;
    }
    
    // Start casting
    if (spell.castTime > 0) {
      // Spell has cast time - enter casting state
      this.isCasting = true;
      this.currentCastSpell = spell;
      this.castTimer = 0;
      this.castDuration = spell.castTime;
      
      // Create casting visual
      this._startCastingVisual();
      
      if (this.onCastStart) {
        this.onCastStart(spell);
      }
      
      // Play cast start sound
      if (this.audioManager) {
        this.audioManager.play('spell_charge', { volume: 0.4 });
      }
      
      console.log(`[SpellCaster] Casting ${spell.name} (${spell.castTime}s cast time)`);
    } else {
      // Instant cast
      this._executeSpell(spell);
    }
    
    return true;
  }
  
  /**
   * Cast spell from hotbar slot
   * @param {number} slot - Hotbar slot (0-5)
   * @returns {boolean}
   */
  castFromSlot(slot) {
    const spellId = this.spellManager.hotbarSlots[slot];
    if (!spellId) {
      console.log('[SpellCaster] No spell in slot', slot);
      return false;
    }
    
    return this.castSpell(spellId);
  }
  
  /**
   * Interrupt current cast (called when player is hit)
   */
  interruptCast() {
    if (!this.isCasting) return;
    
    console.log(`[SpellCaster] Cast interrupted: ${this.currentCastSpell.name}`);
    
    // Note: Mana is already consumed on beginCast - no refund
    
    if (this.onCastInterrupt) {
      this.onCastInterrupt(this.currentCastSpell);
    }
    
    this._endCasting();
    
    // Show interrupt feedback
    if (this.gm.floatingText && this.player) {
      this.gm.floatingText.spawn(
        this.player.mesh.position.clone().add(new THREE.Vector3(0, 2, 0)),
        'Interrupted!',
        '#ff6666'
      );
    }
  }
  
  /**
   * Update casting, projectiles, and AOEs
   * @param {number} delta - Time since last frame
   */
  update(delta) {
    // Update casting
    if (this.isCasting) {
      this.castTimer += delta;
      
      // Update casting visual
      this._updateCastingVisual(delta);
      
      if (this.castTimer >= this.castDuration) {
        // Cast complete
        const spell = this.currentCastSpell;
        this._endCasting();
        this._executeSpell(spell);
        
        if (this.onCastComplete) {
          this.onCastComplete(spell);
        }
      }
    }
    
    // Update projectiles
    this._updateProjectiles(delta);
    
    // Update AOE effects
    this._updateAOEs(delta);
  }
  
  /**
   * Execute a spell effect
   */
  _executeSpell(spell) {
    console.log(`[SpellCaster] Executing: ${spell.name}`);
    
    // Play cast complete sound
    if (this.audioManager) {
      this._playCastSound(spell);
    }
    
    switch (spell.targetType) {
      case SPELL_TARGET.SELF:
        this._executeSelfSpell(spell);
        break;
        
      case SPELL_TARGET.DIRECTION:
        this._executeDirectionalSpell(spell);
        break;
        
      case SPELL_TARGET.AOE_SELF:
        this._executeAOESelfSpell(spell);
        break;
        
      case SPELL_TARGET.AOE:
        this._executeAOETargetSpell(spell);
        break;
        
      case SPELL_TARGET.ENEMY:
        this._executeEnemyTargetSpell(spell);
        break;
    }
  }
  
  /**
   * Execute self-targeted spell (heals, buffs, shields)
   */
  _executeSelfSpell(spell) {
    if (!this.player) return;
    
    const intStat = this.gm.stats?.intelligence || 0;
    const wisStat = this.gm.stats?.wisdom || 0;
    
    // Healing spells
    if (spell.category === SPELL_CATEGORIES.HEALING) {
      if (spell.baseHealing && !spell.duration) {
        // Instant heal
        const healAmount = calculateSpellHealing(spell, intStat, wisStat);
        this.gm.heal(healAmount);
        
        // Healing particles - use SpellEffects if available
        if (this.spellEffects) {
          this.spellEffects.spawnHealingEffect(this.player.mesh.position, 1);
        } else if (this.particleManager) {
          this._spawnHealingParticles(this.player.mesh.position);
        }
        
        console.log(`[SpellCaster] Healed for ${healAmount}`);
      } else if (spell.id === 'regeneration') {
        // Apply regen effect
        const healPerSec = calculateSpellHealing(spell, intStat, wisStat);
        this.spellManager.applyRegen(healPerSec, spell.duration);
        
        // Regen visual - create buff aura
        if (this.spellEffects) {
          this.spellEffects.createBuffAura('regeneration', 0x66ff99, 'Regeneration');
          this.spellEffects.spawnHealingEffect(this.player.mesh.position, 0.5);
        } else if (this.particleManager) {
          this._spawnRegenParticles(this.player.mesh.position);
        }
      }
    }
    
    // Defensive spells (shields)
    if (spell.category === SPELL_CATEGORIES.DEFENSIVE) {
      if (spell.shieldAmount) {
        this.spellManager.applyShield(spell.id);
        
        // Shield visual - use SpellEffects for persistent aura
        if (this.spellEffects) {
          const shieldColor = spell.id === 'barrier' ? 0xaa66ff : 0x66aaff;
          this.spellEffects.createShieldAura(shieldColor, 0.3);
        } else if (this.particleManager) {
          this._spawnShieldParticles(this.player.mesh.position);
        }
      } else if (spell.damageReduction) {
        this.spellManager.applyBuff(spell.id);
        
        // Damage reduction buff visual
        if (this.spellEffects) {
          this.spellEffects.createBuffAura(spell.id, 0x8888ff, spell.name);
        }
      }
    }
    
    // Buff spells
    if (spell.category === SPELL_CATEGORIES.BUFF) {
      this.spellManager.applyBuff(spell.id);
      
      // Buff visual - create buff aura
      let buffColor = 0xffff66;
      if (spell.speedBonus) buffColor = 0x66ffff;
      if (spell.damageBonus) buffColor = 0xff6666;
      if (spell.spellDamageBonus) buffColor = 0xaa66ff;
      if (spell.damageReduction) buffColor = 0x888888;
      
      if (this.spellEffects) {
        this.spellEffects.createBuffAura(spell.id, buffColor, spell.name);
        this._spawnBuffParticles(this.player.mesh.position, spell);
      } else if (this.particleManager) {
        this._spawnBuffParticles(this.player.mesh.position, spell);
      }
    }
  }
  
  /**
   * Execute directional spell (projectile)
   */
  _executeDirectionalSpell(spell) {
    if (!this.player || !this.scene) return;
    
    // Get player facing direction
    const direction = new THREE.Vector3(0, 0, -1);
    direction.applyQuaternion(this.player.mesh.quaternion);
    direction.y = 0; // Keep projectile level
    direction.normalize();
    
    // Spawn position (in front of player, slightly elevated)
    const spawnPos = this.player.mesh.position.clone();
    spawnPos.y += 1.2; // Chest height
    spawnPos.add(direction.clone().multiplyScalar(0.8)); // Slightly in front
    
    // Create projectile
    this._createProjectile(spell, spawnPos, direction);
  }
  
  /**
   * Execute AOE spell centered on self
   */
  _executeAOESelfSpell(spell) {
    if (!this.player) return;
    
    const center = this.player.mesh.position.clone();
    
    // Deal damage to all enemies in radius
    this._dealAOEDamage(spell, center);
    
    // Visual effect
    if (this.particleManager) {
      this._spawnAOEParticles(center, spell);
    }
  }
  
  /**
   * Execute AOE at target location (not implemented - would need targeting)
   */
  _executeAOETargetSpell(spell) {
    // For now, cast at player's facing direction at max range
    if (!this.player) return;
    
    const direction = new THREE.Vector3(0, 0, -1);
    direction.applyQuaternion(this.player.mesh.quaternion);
    direction.y = 0;
    direction.normalize();
    
    const targetPos = this.player.mesh.position.clone()
      .add(direction.multiplyScalar(spell.range * 0.5));
    targetPos.y = 0;
    
    this._dealAOEDamage(spell, targetPos);
    
    if (this.particleManager) {
      this._spawnAOEParticles(targetPos, spell);
    }
  }
  
  /**
   * Execute single-target enemy spell (not implemented - would need targeting)
   */
  _executeEnemyTargetSpell(spell) {
    // Find nearest enemy and fire projectile at them
    this._executeDirectionalSpell(spell);
  }
  
  /**
   * Create a spell projectile
   */
  _createProjectile(spell, position, direction) {
    const id = ++this.projectileIdCounter;
    
    // Calculate damage
    const intStat = this.gm.stats?.intelligence || 0;
    let damage = calculateSpellDamage(spell, intStat);
    
    // Apply spell damage bonus from buffs
    damage *= this.spellManager.getSpellDamageBonus();
    
    let mesh = null;
    let effectId = null;
    
    // Use SpellEffects for enhanced visuals if available
    if (this.spellEffects) {
      let effectResult = null;
      
      switch (spell.id) {
        case 'fireball':
          effectResult = this.spellEffects.createFireballEffect(position, direction);
          break;
        case 'iceShard':
          effectResult = this.spellEffects.createIceShardEffect(position, direction);
          break;
        case 'lightningBolt':
          effectResult = this.spellEffects.createLightningEffect(position, direction);
          break;
        case 'arcaneMissile':
          effectResult = this.spellEffects.createArcaneMissileEffect(position);
          break;
        default:
          // Fallback to simple mesh for other spells
          mesh = this._createProjectileMesh(spell);
          mesh.position.copy(position);
          this.scene.add(mesh);
      }
      
      if (effectResult) {
        mesh = effectResult.mesh;
        effectId = effectResult.id;
      }
    } else {
      // No SpellEffects - use simple mesh
      mesh = this._createProjectileMesh(spell);
      mesh.position.copy(position);
      this.scene.add(mesh);
    }
    
    const projectile = {
      id,
      mesh,
      effectId,
      velocity: direction.clone().multiplyScalar(spell.projectileSpeed),
      spell,
      damage: Math.floor(damage),
      distanceTraveled: 0,
      maxDistance: spell.range,
      aoeRadius: spell.aoeRadius || 0
    };
    
    this.projectiles.push(projectile);
    
    console.log(`[SpellCaster] Projectile created: ${spell.name} (${Math.floor(damage)} damage)`);
  }
  
  /**
   * Create projectile mesh based on spell type
   */
  _createProjectileMesh(spell) {
    let geometry, material;
    
    switch (spell.id) {
      case 'fireball':
        geometry = new THREE.SphereGeometry(0.4, 12, 12);
        material = new THREE.MeshBasicMaterial({
          color: 0xff6600,
          transparent: true,
          opacity: 0.9
        });
        break;
        
      case 'iceShard':
        geometry = new THREE.ConeGeometry(0.15, 0.6, 6);
        material = new THREE.MeshBasicMaterial({
          color: 0x66ccff,
          transparent: true,
          opacity: 0.85
        });
        break;
        
      case 'lightningBolt':
        geometry = new THREE.CylinderGeometry(0.08, 0.08, 1.5, 6);
        material = new THREE.MeshBasicMaterial({
          color: 0xffff66,
          transparent: true,
          opacity: 0.95
        });
        break;
        
      case 'arcaneMissile':
        geometry = new THREE.SphereGeometry(0.25, 8, 8);
        material = new THREE.MeshBasicMaterial({
          color: 0xaa66ff,
          transparent: true,
          opacity: 0.9
        });
        break;
        
      case 'darkOrb':
        geometry = new THREE.SphereGeometry(0.5, 12, 12);
        material = new THREE.MeshBasicMaterial({
          color: 0x330066,
          transparent: true,
          opacity: 0.85
        });
        break;
        
      case 'spark':
        geometry = new THREE.SphereGeometry(0.15, 6, 6);
        material = new THREE.MeshBasicMaterial({
          color: 0xffff00,
          transparent: true,
          opacity: 0.9
        });
        break;
        
      case 'lifeSteal':
        geometry = new THREE.SphereGeometry(0.3, 8, 8);
        material = new THREE.MeshBasicMaterial({
          color: 0x880000,
          transparent: true,
          opacity: 0.85
        });
        break;
        
      default:
        // Default projectile
        geometry = new THREE.SphereGeometry(0.3, 8, 8);
        material = new THREE.MeshBasicMaterial({
          color: 0xffffff,
          transparent: true,
          opacity: 0.8
        });
    }
    
    const mesh = new THREE.Mesh(geometry, material);
    
    // Add point light for glow effect
    const light = new THREE.PointLight(material.color, 1, 5);
    mesh.add(light);
    
    return mesh;
  }
  
  /**
   * Update all active projectiles
   */
  _updateProjectiles(delta) {
    const toRemove = [];
    
    for (const proj of this.projectiles) {
      // Move projectile
      const movement = proj.velocity.clone().multiplyScalar(delta);
      proj.mesh.position.add(movement);
      proj.distanceTraveled += movement.length();
      
      // If using SpellEffects, update the effect position
      if (this.spellEffects && proj.effectId) {
        this.spellEffects.updateEffectPosition(proj.effectId, proj.mesh.position);
      } else {
        // Rotate simple projectile mesh for visual effect
        proj.mesh.rotation.z += delta * 5;
        
        // Add trail particles for simple projectiles only
        if (this.particleManager && Math.random() < 0.3) {
          this._spawnProjectileTrail(proj);
        }
      }
      
      // Check for collision with enemies
      if (this.enemyManager) {
        const hit = this._checkProjectileCollision(proj);
        if (hit) {
          this._onProjectileHit(proj, hit);
          toRemove.push(proj.id);
          continue;
        }
      }
      
      // Check max range
      if (proj.distanceTraveled >= proj.maxDistance) {
        // Expire without hitting - still do AOE if applicable
        if (proj.aoeRadius > 0) {
          this._dealAOEDamage(proj.spell, proj.mesh.position, proj.damage);
          if (this.spellEffects) {
            this.spellEffects.spawnAOERingEffect(proj.mesh.position, proj.spell.aoeRadius, proj.spell);
          } else {
            this._spawnAOEParticles(proj.mesh.position, proj.spell);
          }
        }
        toRemove.push(proj.id);
      }
      
      // Check terrain collision (simple ground check)
      if (proj.mesh.position.y < 0) {
        if (proj.aoeRadius > 0) {
          proj.mesh.position.y = 0;
          this._dealAOEDamage(proj.spell, proj.mesh.position, proj.damage);
          if (this.spellEffects) {
            this.spellEffects.spawnAOERingEffect(proj.mesh.position, proj.spell.aoeRadius, proj.spell);
          } else {
            this._spawnAOEParticles(proj.mesh.position, proj.spell);
          }
        }
        toRemove.push(proj.id);
      }
    }
    
    // Remove expired/hit projectiles
    for (const id of toRemove) {
      const index = this.projectiles.findIndex(p => p.id === id);
      if (index !== -1) {
        const proj = this.projectiles[index];
        
        // Remove effect from SpellEffects if applicable
        if (this.spellEffects && proj.effectId) {
          this.spellEffects._removeEffect(proj.effectId);
        } else {
          // Remove simple mesh from scene
          this.scene.remove(proj.mesh);
          if (proj.mesh.geometry) proj.mesh.geometry.dispose();
          if (proj.mesh.material) proj.mesh.material.dispose();
        }
        
        this.projectiles.splice(index, 1);
      }
    }
  }
  
  /**
   * Check projectile collision with enemies
   */
  _checkProjectileCollision(proj) {
    if (!this.enemyManager) return null;
    
    const projPos = proj.mesh.position;
    const hitRadius = 0.5; // Projectile hit detection radius
    
    // Check against all enemies
    for (const enemy of this.enemyManager.enemies) {
      if (!enemy.mesh || enemy.isDead) continue;
      
      const dist = projPos.distanceTo(enemy.mesh.position);
      const enemyRadius = enemy.hitRadius || 1.0;
      
      if (dist < hitRadius + enemyRadius) {
        return enemy;
      }
    }
    
    return null;
  }
  
  /**
   * Handle projectile hit
   */
  _onProjectileHit(proj, enemy) {
    console.log(`[SpellCaster] ${proj.spell.name} hit enemy for ${proj.damage} damage`);
    
    // Deal damage to hit enemy
    if (enemy.takeDamage) {
      enemy.takeDamage(proj.damage, proj.spell.damageType || 'magical');
    }
    
    // Life steal special case
    if (proj.spell.id === 'lifeSteal' && proj.spell.baseHealing) {
      const intStat = this.gm.stats?.intelligence || 0;
      const wisStat = this.gm.stats?.wisdom || 0;
      const healAmount = calculateSpellHealing(proj.spell, intStat, wisStat);
      this.gm.heal(healAmount);
      
      if (this.spellEffects && this.player) {
        this.spellEffects.spawnHealingEffect(this.player.mesh.position, 0.5);
      } else if (this.particleManager && this.player) {
        this._spawnHealingParticles(this.player.mesh.position);
      }
    }
    
    // AOE damage if applicable
    if (proj.aoeRadius > 0) {
      this._dealAOEDamage(proj.spell, proj.mesh.position, proj.damage, enemy);
      if (this.spellEffects) {
        this.spellEffects.spawnAOERingEffect(proj.mesh.position, proj.spell.aoeRadius, proj.spell);
      }
    }
    
    // Impact particles - use SpellEffects if available
    if (this.spellEffects) {
      this.spellEffects.spawnImpactEffect(proj.mesh.position, proj.spell);
    } else if (this.particleManager) {
      this._spawnImpactParticles(proj.mesh.position, proj.spell);
    }
    
    // Impact sound
    if (this.audioManager) {
      this.audioManager.play('spell_impact', { volume: 0.5 });
    }
    
    // Fire event
    if (this.onSpellHit) {
      this.onSpellHit(proj.spell, enemy, proj.damage);
    }
  }
  
  /**
   * Deal AOE damage at position
   */
  _dealAOEDamage(spell, center, overrideDamage = null, excludeEnemy = null) {
    if (!this.enemyManager) return;
    
    const radius = spell.aoeRadius;
    const intStat = this.gm.stats?.intelligence || 0;
    let damage = overrideDamage || calculateSpellDamage(spell, intStat);
    damage *= this.spellManager.getSpellDamageBonus();
    damage = Math.floor(damage);
    
    let hitCount = 0;
    
    for (const enemy of this.enemyManager.enemies) {
      if (!enemy.mesh || enemy.isDead || enemy === excludeEnemy) continue;
      
      const dist = center.distanceTo(enemy.mesh.position);
      
      if (dist <= radius) {
        // Damage falls off at edges
        const falloff = 1 - (dist / radius) * 0.3;
        const actualDamage = Math.floor(damage * falloff);
        
        if (enemy.takeDamage) {
          enemy.takeDamage(actualDamage, spell.damageType || 'magical');
          hitCount++;
        }
      }
    }
    
    if (hitCount > 0) {
      console.log(`[SpellCaster] AOE ${spell.name} hit ${hitCount} enemies`);
    }
  }
  
  /**
   * Update AOE persistent effects
   */
  _updateAOEs(delta) {
    // Currently no persistent AOE zones implemented
    // Future: could add things like fire puddles, blizzards, etc.
  }
  
  // === VISUAL EFFECTS ===
  
  _startCastingVisual() {
    if (!this.player) return;
    
    // Use SpellEffects for enhanced casting glow if available
    if (this.spellEffects && this.currentCastSpell) {
      const effect = this.spellEffects.createCastingEffect(this.currentCastSpell);
      if (effect) {
        this.castingEffectId = effect.id;
        return;
      }
    }
    
    // Fallback: create simple glowing effect on player hands
    const geometry = new THREE.SphereGeometry(0.2, 8, 8);
    const material = new THREE.MeshBasicMaterial({
      color: 0x66aaff,
      transparent: true,
      opacity: 0.6
    });
    
    this.castingGlow = new THREE.Mesh(geometry, material);
    this.castingGlow.position.set(0, 1.2, 0.3);
    this.player.mesh.add(this.castingGlow);
    
    // Add point light
    const light = new THREE.PointLight(0x66aaff, 0.5, 3);
    this.castingGlow.add(light);
  }
  
  _updateCastingVisual(delta) {
    // SpellEffects handles its own updates
    if (this.castingEffectId) return;
    
    if (!this.castingGlow) return;
    
    // Pulse effect
    const scale = 1 + Math.sin(this.castTimer * 10) * 0.3;
    this.castingGlow.scale.setScalar(scale);
    
    // Intensify glow as cast progresses
    const progress = this.castTimer / this.castDuration;
    this.castingGlow.material.opacity = 0.4 + progress * 0.5;
    
    // Particles during cast
    if (this.particleManager && Math.random() < 0.2) {
      const pos = this.player.mesh.position.clone();
      pos.y += 1.2;
      this.particleManager.spawnParticles(pos, {
        count: 2,
        color: 0x66aaff,
        size: 0.1,
        spread: 0.3,
        lifetime: 0.3
      });
    }
  }
  
  _endCasting() {
    this.isCasting = false;
    this.currentCastSpell = null;
    this.castTimer = 0;
    this.castDuration = 0;
    
    // Remove SpellEffects casting effect if used
    if (this.spellEffects && this.castingEffectId) {
      this.spellEffects.removeCastingEffect(this.castingEffectId);
      this.castingEffectId = null;
      return;
    }
    
    // Remove simple casting visual
    if (this.castingGlow && this.player) {
      this.player.mesh.remove(this.castingGlow);
      this.castingGlow.geometry.dispose();
      this.castingGlow.material.dispose();
      this.castingGlow = null;
    }
  }
  
  _spawnHealingParticles(position) {
    if (!this.particleManager) return;
    
    this.particleManager.spawnParticles(position.clone(), {
      count: 15,
      color: 0x00ff66,
      size: 0.15,
      spread: 1.0,
      lifetime: 1.0,
      velocity: { x: 0, y: 2, z: 0 }
    });
  }
  
  _spawnRegenParticles(position) {
    if (!this.particleManager) return;
    
    this.particleManager.spawnParticles(position.clone(), {
      count: 10,
      color: 0x66ff99,
      size: 0.1,
      spread: 0.8,
      lifetime: 0.8,
      velocity: { x: 0, y: 1.5, z: 0 }
    });
  }
  
  _spawnShieldParticles(position) {
    if (!this.particleManager) return;
    
    // Sphere of particles around player
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const offset = new THREE.Vector3(
        Math.cos(angle) * 1.2,
        1,
        Math.sin(angle) * 1.2
      );
      
      this.particleManager.spawnParticles(position.clone().add(offset), {
        count: 2,
        color: 0x66aaff,
        size: 0.12,
        spread: 0.2,
        lifetime: 0.6
      });
    }
  }
  
  _spawnBuffParticles(position, spell) {
    if (!this.particleManager) return;
    
    let color = 0xffff66; // Default yellow
    
    if (spell.speedBonus) color = 0x66ffff; // Cyan for speed
    if (spell.damageBonus) color = 0xff6666; // Red for damage
    if (spell.spellDamageBonus) color = 0xaa66ff; // Purple for spell damage
    
    this.particleManager.spawnParticles(position.clone(), {
      count: 20,
      color,
      size: 0.12,
      spread: 1.5,
      lifetime: 1.0,
      velocity: { x: 0, y: 3, z: 0 }
    });
  }
  
  _spawnProjectileTrail(proj) {
    if (!this.particleManager) return;
    
    let color = 0xffffff;
    
    switch (proj.spell.id) {
      case 'fireball': color = 0xff6600; break;
      case 'iceShard': color = 0x66ccff; break;
      case 'lightningBolt': color = 0xffff66; break;
      case 'arcaneMissile': color = 0xaa66ff; break;
      case 'darkOrb': color = 0x660066; break;
      case 'spark': color = 0xffff00; break;
      case 'lifeSteal': color = 0x880000; break;
    }
    
    this.particleManager.spawnParticles(proj.mesh.position.clone(), {
      count: 2,
      color,
      size: 0.08,
      spread: 0.1,
      lifetime: 0.3
    });
  }
  
  _spawnImpactParticles(position, spell) {
    if (!this.particleManager) return;
    
    let color = 0xffffff;
    let count = 15;
    
    switch (spell.damageType) {
      case 'fire': color = 0xff6600; count = 25; break;
      case 'ice': color = 0x66ccff; break;
      case 'lightning': color = 0xffff66; break;
      case 'arcane': color = 0xaa66ff; break;
      case 'dark': color = 0x330066; break;
    }
    
    this.particleManager.spawnParticles(position.clone(), {
      count,
      color,
      size: 0.15,
      spread: 2.0,
      lifetime: 0.5
    });
  }
  
  _spawnAOEParticles(position, spell) {
    if (!this.particleManager) return;
    
    let color = 0xffffff;
    
    switch (spell.damageType) {
      case 'fire': color = 0xff6600; break;
      case 'ice': color = 0x66ccff; break;
      case 'lightning': color = 0xffff66; break;
    }
    
    // Ring of particles
    const radius = spell.aoeRadius;
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const offset = new THREE.Vector3(
        Math.cos(angle) * radius,
        0.5,
        Math.sin(angle) * radius
      );
      
      this.particleManager.spawnParticles(position.clone().add(offset), {
        count: 3,
        color,
        size: 0.2,
        spread: 0.3,
        lifetime: 0.8,
        velocity: { x: 0, y: 2, z: 0 }
      });
    }
    
    // Center explosion
    this.particleManager.spawnParticles(position.clone(), {
      count: 40,
      color,
      size: 0.25,
      spread: radius,
      lifetime: 0.6
    });
  }
  
  // === AUDIO ===
  
  _playCastSound(spell) {
    if (!this.audioManager) return;
    
    // Use different sounds based on spell type
    switch (spell.damageType) {
      case 'fire':
        this.audioManager.play('spell_fire', { volume: 0.5 });
        break;
      case 'ice':
        this.audioManager.play('spell_ice', { volume: 0.5 });
        break;
      case 'lightning':
        this.audioManager.play('spell_lightning', { volume: 0.5 });
        break;
      default:
        this.audioManager.play('spell_cast', { volume: 0.5 });
    }
  }
  
  /**
   * Get casting progress (0-1) for UI
   */
  getCastProgress() {
    if (!this.isCasting) return 0;
    return Math.min(1, this.castTimer / this.castDuration);
  }
  
  /**
   * Check if player is currently casting
   */
  getIsCasting() {
    return this.isCasting;
  }
  
  /**
   * Get current spell being cast
   */
  getCurrentCastSpell() {
    return this.currentCastSpell;
  }
  
  /**
   * Clean up all projectiles (on death/respawn)
   */
  clearAllProjectiles() {
    for (const proj of this.projectiles) {
      this.scene.remove(proj.mesh);
    }
    this.projectiles = [];
    
    if (this.isCasting) {
      this._endCasting();
    }
  }
}
