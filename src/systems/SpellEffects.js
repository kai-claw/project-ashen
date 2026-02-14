/**
 * SpellEffects.js - Phase 20: Magic System
 * 
 * Visual effects for spells:
 * - Projectile meshes with particle trails
 * - Impact effects
 * - Casting glow animations
 * - Shield/buff auras
 * - Healing particles
 */

import * as THREE from 'three';

export class SpellEffects {
  constructor(scene, particleManager) {
    this.scene = scene;
    this.particleManager = particleManager;
    
    // Active visual effects: { id, type, mesh/group, update, lifetime, elapsed }
    this.activeEffects = [];
    this.effectIdCounter = 0;
    
    // Player reference for auras
    this.player = null;
    
    // Active persistent auras (shield, buffs)
    this.shieldAura = null;
    this.buffAuras = {};
  }
  
  setPlayer(player) {
    this.player = player;
  }
  
  /**
   * Update all active effects
   */
  update(delta) {
    const toRemove = [];
    
    for (const effect of this.activeEffects) {
      effect.elapsed += delta;
      
      // Call update function if exists
      if (effect.update) {
        effect.update(delta, effect);
      }
      
      // Check lifetime
      if (effect.lifetime > 0 && effect.elapsed >= effect.lifetime) {
        toRemove.push(effect.id);
      }
    }
    
    // Remove expired effects
    for (const id of toRemove) {
      this._removeEffect(id);
    }
    
    // Update persistent auras
    this._updateShieldAura(delta);
    this._updateBuffAuras(delta);
  }
  
  /**
   * Create fireball effect with fire trail
   */
  createFireballEffect(position, direction) {
    const id = ++this.effectIdCounter;
    
    // Create fireball group
    const group = new THREE.Group();
    
    // Core fireball - glowing orange sphere
    const coreGeo = new THREE.SphereGeometry(0.35, 16, 16);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xff6600,
      transparent: true,
      opacity: 0.95
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);
    
    // Inner glow - slightly larger, more orange
    const innerGeo = new THREE.SphereGeometry(0.45, 12, 12);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xff4400,
      transparent: true,
      opacity: 0.5
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);
    
    // Outer glow - red/orange haze
    const outerGeo = new THREE.SphereGeometry(0.6, 8, 8);
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0xff2200,
      transparent: true,
      opacity: 0.25
    });
    const outer = new THREE.Mesh(outerGeo, outerMat);
    group.add(outer);
    
    // Point light for illumination
    const light = new THREE.PointLight(0xff6600, 2, 8);
    group.add(light);
    
    group.position.copy(position);
    this.scene.add(group);
    
    const effect = {
      id,
      type: 'fireball',
      mesh: group,
      core,
      inner,
      outer,
      light,
      elapsed: 0,
      lifetime: 5,
      update: (delta, eff) => {
        // Pulsing glow
        const pulse = Math.sin(eff.elapsed * 15) * 0.1 + 1;
        eff.core.scale.setScalar(pulse);
        eff.inner.scale.setScalar(pulse * 0.95);
        
        // Flickering light
        eff.light.intensity = 1.5 + Math.random() * 1;
        
        // Fire trail particles
        if (this.particleManager && Math.random() < 0.6) {
          this.particleManager.spawnParticles(group.position.clone(), {
            count: 3,
            color: Math.random() > 0.5 ? 0xff6600 : 0xff2200,
            size: 0.1 + Math.random() * 0.1,
            spread: 0.2,
            lifetime: 0.4,
            velocity: { x: (Math.random() - 0.5) * 2, y: 1, z: (Math.random() - 0.5) * 2 }
          });
        }
      }
    };
    
    this.activeEffects.push(effect);
    return { id, mesh: group };
  }
  
  /**
   * Create ice shard effect with frost trail
   */
  createIceShardEffect(position, direction) {
    const id = ++this.effectIdCounter;
    
    const group = new THREE.Group();
    
    // Main shard - crystalline cone
    const shardGeo = new THREE.ConeGeometry(0.12, 0.7, 6);
    const shardMat = new THREE.MeshBasicMaterial({
      color: 0x88ddff,
      transparent: true,
      opacity: 0.85
    });
    const shard = new THREE.Mesh(shardGeo, shardMat);
    shard.rotation.x = Math.PI / 2;
    group.add(shard);
    
    // Ice glow
    const glowGeo = new THREE.SphereGeometry(0.2, 8, 8);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x66ccff,
      transparent: true,
      opacity: 0.4
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    group.add(glow);
    
    // Small orbiting ice crystals
    const crystals = [];
    for (let i = 0; i < 4; i++) {
      const crystalGeo = new THREE.OctahedronGeometry(0.05);
      const crystalMat = new THREE.MeshBasicMaterial({
        color: 0xaaeeff,
        transparent: true,
        opacity: 0.7
      });
      const crystal = new THREE.Mesh(crystalGeo, crystalMat);
      crystals.push(crystal);
      group.add(crystal);
    }
    
    // Light
    const light = new THREE.PointLight(0x66ccff, 1, 5);
    group.add(light);
    
    group.position.copy(position);
    this.scene.add(group);
    
    const effect = {
      id,
      type: 'iceShard',
      mesh: group,
      shard,
      crystals,
      elapsed: 0,
      lifetime: 5,
      update: (delta, eff) => {
        // Spin the shard
        eff.shard.rotation.z += delta * 8;
        
        // Orbit the crystals
        eff.crystals.forEach((crystal, i) => {
          const angle = eff.elapsed * 6 + (i * Math.PI / 2);
          crystal.position.x = Math.cos(angle) * 0.25;
          crystal.position.y = Math.sin(angle) * 0.25;
        });
        
        // Frost trail particles
        if (this.particleManager && Math.random() < 0.4) {
          this.particleManager.spawnParticles(group.position.clone(), {
            count: 2,
            color: 0x88ddff,
            size: 0.06,
            spread: 0.15,
            lifetime: 0.5,
            velocity: { x: 0, y: -0.5, z: 0 }
          });
        }
      }
    };
    
    this.activeEffects.push(effect);
    return { id, mesh: group };
  }
  
  /**
   * Create lightning bolt effect with electric arcs
   */
  createLightningEffect(position, direction) {
    const id = ++this.effectIdCounter;
    
    const group = new THREE.Group();
    
    // Main bolt - bright cylinder
    const boltGeo = new THREE.CylinderGeometry(0.06, 0.06, 1.2, 6);
    const boltMat = new THREE.MeshBasicMaterial({
      color: 0xffff88,
      transparent: true,
      opacity: 0.95
    });
    const bolt = new THREE.Mesh(boltGeo, boltMat);
    bolt.rotation.x = Math.PI / 2;
    group.add(bolt);
    
    // Electric glow
    const glowGeo = new THREE.CylinderGeometry(0.15, 0.15, 1.2, 6);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xffffaa,
      transparent: true,
      opacity: 0.3
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.rotation.x = Math.PI / 2;
    group.add(glow);
    
    // Forking arcs (lines)
    const arcs = [];
    for (let i = 0; i < 3; i++) {
      const arcMat = new THREE.LineBasicMaterial({ color: 0xffffcc, transparent: true, opacity: 0.8 });
      const arcGeo = new THREE.BufferGeometry();
      const points = [new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 0, 0)];
      arcGeo.setFromPoints(points);
      const arc = new THREE.Line(arcGeo, arcMat);
      arcs.push(arc);
      group.add(arc);
    }
    
    // Bright point light
    const light = new THREE.PointLight(0xffffaa, 3, 10);
    group.add(light);
    
    group.position.copy(position);
    this.scene.add(group);
    
    const effect = {
      id,
      type: 'lightning',
      mesh: group,
      bolt,
      arcs,
      light,
      elapsed: 0,
      lifetime: 3,
      update: (delta, eff) => {
        // Flickering intensity
        const flicker = Math.random() > 0.2;
        eff.bolt.visible = flicker;
        eff.light.intensity = flicker ? (2 + Math.random() * 2) : 0.5;
        
        // Update forking arcs
        eff.arcs.forEach((arc, i) => {
          const positions = arc.geometry.attributes.position;
          if (positions) {
            // Random fork direction
            const forkAngle = (i / 3) * Math.PI * 2 + eff.elapsed * 5;
            const forkLen = 0.2 + Math.random() * 0.3;
            positions.setXYZ(0, 0, 0, Math.random() * 0.3 - 0.15);
            positions.setXYZ(1, Math.cos(forkAngle) * forkLen, Math.sin(forkAngle) * forkLen, -0.3);
            positions.needsUpdate = true;
          }
          arc.visible = Math.random() > 0.3;
        });
        
        // Electric particles
        if (this.particleManager && Math.random() < 0.5) {
          this.particleManager.spawnParticles(group.position.clone(), {
            count: 2,
            color: 0xffffaa,
            size: 0.05,
            spread: 0.3,
            lifetime: 0.2
          });
        }
      }
    };
    
    this.activeEffects.push(effect);
    return { id, mesh: group };
  }
  
  /**
   * Create arcane missile effect (purple magic)
   */
  createArcaneMissileEffect(position) {
    const id = ++this.effectIdCounter;
    
    const group = new THREE.Group();
    
    // Core orb
    const coreGeo = new THREE.SphereGeometry(0.2, 12, 12);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xaa66ff,
      transparent: true,
      opacity: 0.9
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    group.add(core);
    
    // Outer glow
    const glowGeo = new THREE.SphereGeometry(0.35, 8, 8);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x8844cc,
      transparent: true,
      opacity: 0.4
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    group.add(glow);
    
    // Arcane runes (planes orbiting)
    const runes = [];
    for (let i = 0; i < 3; i++) {
      const runeGeo = new THREE.PlaneGeometry(0.15, 0.15);
      const runeMat = new THREE.MeshBasicMaterial({
        color: 0xcc88ff,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide
      });
      const rune = new THREE.Mesh(runeGeo, runeMat);
      runes.push(rune);
      group.add(rune);
    }
    
    const light = new THREE.PointLight(0xaa66ff, 1.5, 6);
    group.add(light);
    
    group.position.copy(position);
    this.scene.add(group);
    
    const effect = {
      id,
      type: 'arcaneMissile',
      mesh: group,
      core,
      runes,
      elapsed: 0,
      lifetime: 5,
      update: (delta, eff) => {
        // Pulse
        const pulse = Math.sin(eff.elapsed * 8) * 0.15 + 1;
        eff.core.scale.setScalar(pulse);
        
        // Orbit runes
        eff.runes.forEach((rune, i) => {
          const angle = eff.elapsed * 4 + (i * Math.PI * 2 / 3);
          rune.position.x = Math.cos(angle) * 0.3;
          rune.position.z = Math.sin(angle) * 0.3;
          rune.rotation.y = angle;
        });
        
        // Trail
        if (this.particleManager && Math.random() < 0.4) {
          this.particleManager.spawnParticles(group.position.clone(), {
            count: 2,
            color: 0xaa66ff,
            size: 0.08,
            spread: 0.15,
            lifetime: 0.4
          });
        }
      }
    };
    
    this.activeEffects.push(effect);
    return { id, mesh: group };
  }
  
  /**
   * Create healing effect (green particles rising)
   */
  spawnHealingEffect(position, intensity = 1) {
    if (!this.particleManager) return;
    
    const count = Math.floor(20 * intensity);
    
    // Rising green particles
    for (let i = 0; i < count; i++) {
      const offset = new THREE.Vector3(
        (Math.random() - 0.5) * 1.5,
        Math.random() * 0.5,
        (Math.random() - 0.5) * 1.5
      );
      
      setTimeout(() => {
        if (this.particleManager) {
          this.particleManager.spawnParticles(position.clone().add(offset), {
            count: 3,
            color: Math.random() > 0.3 ? 0x00ff66 : 0x88ffaa,
            size: 0.1 + Math.random() * 0.08,
            spread: 0.2,
            lifetime: 1.0 + Math.random() * 0.5,
            velocity: { x: 0, y: 2.5 + Math.random(), z: 0 }
          });
        }
      }, i * 30);
    }
  }
  
  /**
   * Create shield visual (translucent sphere around player)
   */
  createShieldAura(color = 0x66aaff, opacity = 0.3) {
    if (this.shieldAura) {
      this.removeShieldAura();
    }
    
    const group = new THREE.Group();
    
    // Main shield sphere
    const shieldGeo = new THREE.SphereGeometry(1.2, 24, 24);
    const shieldMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity,
      side: THREE.BackSide
    });
    const shield = new THREE.Mesh(shieldGeo, shieldMat);
    group.add(shield);
    
    // Inner glow
    const innerGeo = new THREE.SphereGeometry(1.15, 16, 16);
    const innerMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: opacity * 0.5,
      side: THREE.FrontSide
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    group.add(inner);
    
    // Hexagonal pattern overlay (wireframe)
    const hexGeo = new THREE.IcosahedronGeometry(1.22, 1);
    const hexMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.15,
      wireframe: true
    });
    const hex = new THREE.Mesh(hexGeo, hexMat);
    group.add(hex);
    
    this.shieldAura = {
      group,
      shield,
      inner,
      hex,
      elapsed: 0
    };
    
    // Attach to player if available
    if (this.player && this.player.mesh) {
      this.player.mesh.add(group);
    } else {
      this.scene.add(group);
    }
    
    return this.shieldAura;
  }
  
  /**
   * Remove shield visual
   */
  removeShieldAura() {
    if (!this.shieldAura) return;
    
    const group = this.shieldAura.group;
    
    if (this.player && this.player.mesh) {
      this.player.mesh.remove(group);
    } else {
      this.scene.remove(group);
    }
    
    // Dispose geometries and materials
    group.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) obj.material.dispose();
    });
    
    this.shieldAura = null;
  }
  
  /**
   * Update shield aura animation
   */
  _updateShieldAura(delta) {
    if (!this.shieldAura) return;
    
    this.shieldAura.elapsed += delta;
    
    // Pulsing effect
    const pulse = Math.sin(this.shieldAura.elapsed * 2) * 0.03 + 1;
    this.shieldAura.shield.scale.setScalar(pulse);
    
    // Rotate hex pattern
    this.shieldAura.hex.rotation.y += delta * 0.3;
    this.shieldAura.hex.rotation.x += delta * 0.1;
    
    // Sparkle particles occasionally
    if (this.particleManager && this.player && Math.random() < 0.05) {
      const angle = Math.random() * Math.PI * 2;
      const pos = this.player.mesh.position.clone();
      pos.x += Math.cos(angle) * 1.2;
      pos.y += 0.5 + Math.random();
      pos.z += Math.sin(angle) * 1.2;
      
      this.particleManager.spawnParticles(pos, {
        count: 1,
        color: 0x88ccff,
        size: 0.08,
        spread: 0.1,
        lifetime: 0.5,
        velocity: { x: 0, y: 0.5, z: 0 }
      });
    }
  }
  
  /**
   * Create buff aura effect
   */
  createBuffAura(buffId, color, name) {
    if (this.buffAuras[buffId]) {
      return this.buffAuras[buffId];
    }
    
    // Buff aura: particles rising around player
    this.buffAuras[buffId] = {
      color,
      name,
      elapsed: 0,
      particleTimer: 0
    };
    
    return this.buffAuras[buffId];
  }
  
  /**
   * Remove buff aura
   */
  removeBuffAura(buffId) {
    delete this.buffAuras[buffId];
  }
  
  /**
   * Update buff aura particles
   */
  _updateBuffAuras(delta) {
    if (!this.player || !this.particleManager) return;
    
    for (const [buffId, aura] of Object.entries(this.buffAuras)) {
      aura.elapsed += delta;
      aura.particleTimer += delta;
      
      // Spawn particles every 0.2s
      if (aura.particleTimer >= 0.2) {
        aura.particleTimer = 0;
        
        const angle = aura.elapsed * 2 + Math.random() * Math.PI;
        const pos = this.player.mesh.position.clone();
        pos.x += Math.cos(angle) * 0.8;
        pos.y += 0.1;
        pos.z += Math.sin(angle) * 0.8;
        
        this.particleManager.spawnParticles(pos, {
          count: 2,
          color: aura.color,
          size: 0.1,
          spread: 0.2,
          lifetime: 1.0,
          velocity: { x: 0, y: 1.5, z: 0 }
        });
      }
    }
  }
  
  /**
   * Create impact explosion effect
   */
  spawnImpactEffect(position, spell) {
    if (!this.particleManager) return;
    
    let color = 0xffffff;
    let count = 25;
    let size = 0.15;
    
    switch (spell.damageType) {
      case 'fire':
        color = 0xff6600;
        count = 35;
        size = 0.18;
        // Extra fire burst
        for (let i = 0; i < 10; i++) {
          setTimeout(() => {
            if (this.particleManager) {
              this.particleManager.spawnParticles(position.clone(), {
                count: 3,
                color: 0xff4400,
                size: 0.12,
                spread: 1.5,
                lifetime: 0.3,
                velocity: { x: 0, y: 2, z: 0 }
              });
            }
          }, i * 20);
        }
        break;
        
      case 'ice':
        color = 0x88ddff;
        // Frost shards scatter
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2;
          const offset = new THREE.Vector3(Math.cos(angle) * 0.5, 0, Math.sin(angle) * 0.5);
          this.particleManager.spawnParticles(position.clone().add(offset), {
            count: 2,
            color: 0xaaeeff,
            size: 0.1,
            spread: 0.3,
            lifetime: 0.6,
            velocity: { x: Math.cos(angle) * 3, y: 1, z: Math.sin(angle) * 3 }
          });
        }
        break;
        
      case 'lightning':
        color = 0xffffaa;
        // Electric flash
        this._createLightningFlash(position);
        break;
        
      case 'arcane':
        color = 0xaa66ff;
        // Arcane swirl
        for (let i = 0; i < 15; i++) {
          setTimeout(() => {
            if (this.particleManager) {
              const angle = i * 0.5;
              const radius = 0.3 + i * 0.1;
              const offset = new THREE.Vector3(Math.cos(angle) * radius, i * 0.1, Math.sin(angle) * radius);
              this.particleManager.spawnParticles(position.clone().add(offset), {
                count: 2,
                color: 0xcc88ff,
                size: 0.1,
                spread: 0.1,
                lifetime: 0.5
              });
            }
          }, i * 25);
        }
        break;
        
      case 'dark':
        color = 0x660066;
        count = 30;
        break;
    }
    
    // Main impact burst
    this.particleManager.spawnParticles(position.clone(), {
      count,
      color,
      size,
      spread: 2.0,
      lifetime: 0.5
    });
  }
  
  /**
   * Create brief lightning flash
   */
  _createLightningFlash(position) {
    // Create temporary bright light
    const light = new THREE.PointLight(0xffffaa, 5, 15);
    light.position.copy(position);
    this.scene.add(light);
    
    // Fade out
    let intensity = 5;
    const fadeInterval = setInterval(() => {
      intensity -= 0.5;
      if (intensity <= 0) {
        clearInterval(fadeInterval);
        this.scene.remove(light);
      } else {
        light.intensity = intensity;
      }
    }, 16);
  }
  
  /**
   * Create AOE ring effect
   */
  spawnAOERingEffect(position, radius, spell) {
    if (!this.particleManager) return;
    
    let color = 0xffffff;
    switch (spell.damageType) {
      case 'fire': color = 0xff6600; break;
      case 'ice': color = 0x66ccff; break;
      case 'lightning': color = 0xffff66; break;
      case 'arcane': color = 0xaa66ff; break;
    }
    
    // Expanding ring of particles
    for (let ring = 0; ring < 3; ring++) {
      setTimeout(() => {
        const ringRadius = radius * (0.3 + ring * 0.35);
        const numParticles = Math.floor(20 + ring * 10);
        
        for (let i = 0; i < numParticles; i++) {
          const angle = (i / numParticles) * Math.PI * 2;
          const offset = new THREE.Vector3(
            Math.cos(angle) * ringRadius,
            0.2,
            Math.sin(angle) * ringRadius
          );
          
          if (this.particleManager) {
            this.particleManager.spawnParticles(position.clone().add(offset), {
              count: 2,
              color,
              size: 0.15 - ring * 0.03,
              spread: 0.2,
              lifetime: 0.8 - ring * 0.15,
              velocity: { x: 0, y: 2 + ring, z: 0 }
            });
          }
        }
      }, ring * 80);
    }
    
    // Center explosion
    this.particleManager.spawnParticles(position.clone(), {
      count: 50,
      color,
      size: 0.2,
      spread: radius,
      lifetime: 0.6
    });
  }
  
  /**
   * Create casting charge effect on player hands
   */
  createCastingEffect(spell) {
    if (!this.player || !this.player.mesh) return null;
    
    let color = 0x66aaff;
    switch (spell.damageType) {
      case 'fire': color = 0xff6600; break;
      case 'ice': color = 0x66ccff; break;
      case 'lightning': color = 0xffff66; break;
      case 'arcane': color = 0xaa66ff; break;
      case 'dark': color = 0x660066; break;
    }
    if (spell.category === 'healing') color = 0x00ff66;
    if (spell.category === 'defensive') color = 0x66aaff;
    if (spell.category === 'buff') color = 0xffff66;
    
    const id = ++this.effectIdCounter;
    
    const group = new THREE.Group();
    
    // Glowing orb at hand position
    const orbGeo = new THREE.SphereGeometry(0.15, 12, 12);
    const orbMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.7
    });
    const orb = new THREE.Mesh(orbGeo, orbMat);
    group.add(orb);
    
    // Outer glow
    const glowGeo = new THREE.SphereGeometry(0.25, 8, 8);
    const glowMat = new THREE.MeshBasicMaterial({
      color,
      transparent: true,
      opacity: 0.3
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    group.add(glow);
    
    // Light
    const light = new THREE.PointLight(color, 1, 4);
    group.add(light);
    
    group.position.set(0, 1.2, 0.4); // Hand position relative to player
    this.player.mesh.add(group);
    
    const effect = {
      id,
      type: 'casting',
      mesh: group,
      orb,
      glow,
      light,
      elapsed: 0,
      lifetime: -1, // Managed externally
      update: (delta, eff) => {
        // Growing intensity
        const scale = 0.5 + Math.min(eff.elapsed * 0.5, 1);
        eff.orb.scale.setScalar(scale);
        eff.glow.scale.setScalar(scale * 1.3);
        eff.light.intensity = 0.5 + scale;
        
        // Pulsing
        const pulse = Math.sin(eff.elapsed * 10) * 0.1;
        eff.orb.scale.multiplyScalar(1 + pulse);
        
        // Particles spiraling in
        if (this.particleManager && Math.random() < 0.3) {
          const angle = eff.elapsed * 5 + Math.random() * Math.PI * 2;
          const radius = 1 - Math.min(eff.elapsed * 0.3, 0.8);
          const worldPos = group.getWorldPosition(new THREE.Vector3());
          worldPos.x += Math.cos(angle) * radius;
          worldPos.y += Math.random() * 0.5;
          worldPos.z += Math.sin(angle) * radius;
          
          this.particleManager.spawnParticles(worldPos, {
            count: 1,
            color,
            size: 0.06,
            spread: 0.05,
            lifetime: 0.3
          });
        }
      }
    };
    
    this.activeEffects.push(effect);
    return { id, group };
  }
  
  /**
   * Remove casting effect
   */
  removeCastingEffect(id) {
    this._removeEffect(id);
  }
  
  /**
   * Remove effect by id
   */
  _removeEffect(id) {
    const index = this.activeEffects.findIndex(e => e.id === id);
    if (index === -1) return;
    
    const effect = this.activeEffects[index];
    
    // Remove from scene or parent
    if (effect.mesh) {
      if (effect.mesh.parent) {
        effect.mesh.parent.remove(effect.mesh);
      } else {
        this.scene.remove(effect.mesh);
      }
      
      // Dispose
      effect.mesh.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });
    }
    
    this.activeEffects.splice(index, 1);
  }
  
  /**
   * Get effect mesh by id (for projectile tracking)
   */
  getEffectMesh(id) {
    const effect = this.activeEffects.find(e => e.id === id);
    return effect ? effect.mesh : null;
  }
  
  /**
   * Update effect position (for tracking projectiles)
   */
  updateEffectPosition(id, position) {
    const effect = this.activeEffects.find(e => e.id === id);
    if (effect && effect.mesh) {
      effect.mesh.position.copy(position);
    }
  }
  
  /**
   * Clear all effects (on death/reset)
   */
  clearAll() {
    for (const effect of this.activeEffects) {
      if (effect.mesh) {
        if (effect.mesh.parent) {
          effect.mesh.parent.remove(effect.mesh);
        } else {
          this.scene.remove(effect.mesh);
        }
        effect.mesh.traverse(obj => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) obj.material.dispose();
        });
      }
    }
    this.activeEffects = [];
    
    this.removeShieldAura();
    this.buffAuras = {};
  }
}
