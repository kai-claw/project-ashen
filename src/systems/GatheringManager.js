import * as THREE from 'three';
import { 
  MATERIALS, 
  GATHERING_NODE_TYPES, 
  BIOME_SOURCE,
  getMaterial,
  rollGatheringDrops 
} from '../data/MaterialData.js';

/**
 * GatheringManager - Resource Gathering System
 * Phase 23: Crafting System
 * 
 * Features:
 * - Spawns gathering nodes (ore veins, herb patches, wood stumps, crystals)
 * - Chunk-based procedural generation with biome awareness
 * - E key interaction with channeled gathering progress
 * - Visual feedback (particles, node depletion)
 * - Respawn system for depleted nodes
 * - Integration with InventoryManager for material storage
 */
export class GatheringManager {
  constructor(scene, terrain, inputManager, inventoryManager, particleManager, audioManager) {
    this.scene = scene;
    this.terrain = terrain;
    this.input = inputManager;
    this.inventory = inventoryManager;
    this.particles = particleManager;
    this.audio = audioManager;
    
    // Chunk configuration
    this.chunkSize = 64;
    this.loadDistance = 2;
    this.unloadDistance = 4;
    
    // Node density per chunk (varies by biome)
    this.nodesPerChunk = {
      ore_vein: 3,
      herb_patch: 4,
      wood_stump: 2,
      crystal_node: 1,
    };
    
    // Spacing requirements
    this.nodeMinDistance = 8;
    this.nodeMaxSlope = 0.5;
    this.castleExclusionRadius = 40;
    this.villageExclusionRadius = 15;
    
    // Chunk storage: key = "cx,cz", value = { nodes: [], meshes: [] }
    this.chunks = new Map();
    
    // All active nodes (for collision/interaction)
    this.activeNodes = [];
    
    // Depleted nodes awaiting respawn: { nodeId, respawnTime }
    this.depletedNodes = new Map();
    
    // Gathering state
    this.nearbyNode = null;
    this.isGathering = false;
    this.gatherProgress = 0;
    this.gatherTarget = null;
    
    // Player reference
    this.playerPosition = new THREE.Vector3();
    
    // Create shared assets
    this._createSharedAssets();
    
    // Create UI
    this._createGatheringUI();
    
    // Track last player chunk
    this.lastPlayerChunkX = null;
    this.lastPlayerChunkZ = null;
    
    console.log('[GatheringManager] Initialized');
  }
  
  // ========== SHARED ASSETS ==========
  
  _createSharedAssets() {
    // === ORE VEIN (cluster of rocks with shiny veins) ===
    this.oreVeinGeo = new THREE.DodecahedronGeometry(0.5, 0);
    this.oreVeinMat = new THREE.MeshStandardMaterial({
      color: 0x555555,
      roughness: 0.8,
      metalness: 0.2,
    });
    this.oreGlintMat = new THREE.MeshStandardMaterial({
      color: 0xaabbcc,
      roughness: 0.3,
      metalness: 0.8,
      emissive: 0x334455,
      emissiveIntensity: 0.3,
    });
    
    // === HERB PATCH (small plants) ===
    this.herbPatchGeo = new THREE.ConeGeometry(0.2, 0.4, 5);
    this.herbPatchGeo.translate(0, 0.2, 0);
    this.herbMat = new THREE.MeshStandardMaterial({
      color: 0x44aa44,
      roughness: 0.9,
    });
    this.herbFlowerMat = new THREE.MeshStandardMaterial({
      color: 0x8866ff,
      emissive: 0x4422aa,
      emissiveIntensity: 0.2,
    });
    
    // === WOOD STUMP (tree stump) ===
    this.stumpGeo = new THREE.CylinderGeometry(0.4, 0.5, 0.6, 8);
    this.stumpGeo.translate(0, 0.3, 0);
    this.stumpMat = new THREE.MeshStandardMaterial({
      color: 0x5a4030,
      roughness: 0.95,
    });
    this.stumpRingsMat = new THREE.MeshStandardMaterial({
      color: 0x6a5040,
      roughness: 0.9,
    });
    
    // === CRYSTAL NODE (glowing crystals) ===
    this.crystalGeo = new THREE.OctahedronGeometry(0.3, 0);
    this.crystalMat = new THREE.MeshStandardMaterial({
      color: 0x88aaff,
      roughness: 0.2,
      metalness: 0.3,
      emissive: 0x4466aa,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.85,
    });
  }
  
  // ========== UI CREATION ==========
  
  _createGatheringUI() {
    // Interaction prompt
    this.promptContainer = document.createElement('div');
    this.promptContainer.id = 'gathering-prompt';
    this.promptContainer.style.cssText = `
      position: fixed;
      bottom: 180px;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      z-index: 140;
      pointer-events: none;
    `;
    
    // Node name
    this.promptName = document.createElement('div');
    this.promptName.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 16px;
      font-weight: bold;
      color: #88ccaa;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
      letter-spacing: 1px;
    `;
    this.promptContainer.appendChild(this.promptName);
    
    // Key prompt
    this.promptKey = document.createElement('div');
    this.promptKey.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(100, 200, 150, 0.4);
      border-radius: 4px;
      font-family: 'Cinzel', serif;
      font-size: 14px;
      color: #aaffcc;
    `;
    this.promptKey.innerHTML = '<span style="background:#3a3a3a;padding:2px 8px;border-radius:3px;border:1px solid #666;">E</span> Gather';
    this.promptContainer.appendChild(this.promptKey);
    
    document.body.appendChild(this.promptContainer);
    
    // Progress bar (shown when gathering)
    this.progressContainer = document.createElement('div');
    this.progressContainer.id = 'gathering-progress';
    this.progressContainer.style.cssText = `
      position: fixed;
      bottom: 220px;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      z-index: 141;
      pointer-events: none;
    `;
    
    // Progress label
    this.progressLabel = document.createElement('div');
    this.progressLabel.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 14px;
      color: #aaffcc;
      text-shadow: 0 0 6px rgba(0, 0, 0, 0.9);
    `;
    this.progressLabel.textContent = 'Gathering...';
    this.progressContainer.appendChild(this.progressLabel);
    
    // Progress bar
    this.progressBarOuter = document.createElement('div');
    this.progressBarOuter.style.cssText = `
      width: 160px;
      height: 8px;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(100, 200, 150, 0.5);
      border-radius: 4px;
      overflow: hidden;
    `;
    
    this.progressBarInner = document.createElement('div');
    this.progressBarInner.style.cssText = `
      width: 0%;
      height: 100%;
      background: linear-gradient(90deg, #44aa66, #66dd88);
      transition: width 0.05s linear;
    `;
    this.progressBarOuter.appendChild(this.progressBarInner);
    this.progressContainer.appendChild(this.progressBarOuter);
    
    document.body.appendChild(this.progressContainer);
    
    // Material pickup notification
    this.pickupNotification = document.createElement('div');
    this.pickupNotification.id = 'material-pickup';
    this.pickupNotification.style.cssText = `
      position: fixed;
      bottom: 260px;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      z-index: 142;
      pointer-events: none;
      font-family: 'Cinzel', serif;
      font-size: 15px;
      color: #aaffcc;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
      opacity: 0;
      transition: opacity 0.3s;
    `;
    document.body.appendChild(this.pickupNotification);
  }
  
  // ========== SEEDED RANDOM ==========
  
  _seededRandom(seed) {
    const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
    return x - Math.floor(x);
  }
  
  _chunkKey(cx, cz) {
    return `${cx},${cz}`;
  }
  
  _worldToChunk(x, z) {
    return {
      cx: Math.floor(x / this.chunkSize),
      cz: Math.floor(z / this.chunkSize),
    };
  }
  
  // ========== CHUNK-BASED GENERATION ==========
  
  update(playerX, playerZ, delta) {
    this.playerPosition.set(playerX, 0, playerZ);
    
    const { cx, cz } = this._worldToChunk(playerX, playerZ);
    
    // Update chunks if player moved
    if (cx !== this.lastPlayerChunkX || cz !== this.lastPlayerChunkZ) {
      this.lastPlayerChunkX = cx;
      this.lastPlayerChunkZ = cz;
      this._updateChunks(cx, cz);
    }
    
    // Handle respawn timers
    this._updateRespawns();
    
    // Handle gathering interaction
    this._updateInteraction(delta);
  }
  
  _updateChunks(playerCX, playerCZ) {
    // Load nearby chunks
    for (let dx = -this.loadDistance; dx <= this.loadDistance; dx++) {
      for (let dz = -this.loadDistance; dz <= this.loadDistance; dz++) {
        const cx = playerCX + dx;
        const cz = playerCZ + dz;
        const key = this._chunkKey(cx, cz);
        
        if (!this.chunks.has(key)) {
          this._generateChunk(cx, cz);
        }
      }
    }
    
    // Unload distant chunks
    for (const [key, chunk] of this.chunks) {
      const [cx, cz] = key.split(',').map(Number);
      const dist = Math.max(Math.abs(cx - playerCX), Math.abs(cz - playerCZ));
      
      if (dist > this.unloadDistance) {
        this._unloadChunk(key, chunk);
      }
    }
  }
  
  _generateChunk(cx, cz) {
    const key = this._chunkKey(cx, cz);
    const chunk = { nodes: [], meshes: [] };
    
    // Generate unique seed for this chunk
    const baseSeed = cx * 73856093 + cz * 19349663;
    
    // Get biome at chunk center
    const centerX = cx * this.chunkSize + this.chunkSize / 2;
    const centerZ = cz * this.chunkSize + this.chunkSize / 2;
    const biome = this.terrain ? this.terrain.getBiome(centerX, centerZ) : 'plains';
    
    // Map game biomes to material biomes
    const biomeMapped = this._mapBiomeToMaterial(biome);
    
    // Generate nodes based on biome density
    let nodeIdx = 0;
    
    for (const [nodeTypeId, baseCount] of Object.entries(this.nodesPerChunk)) {
      const nodeType = GATHERING_NODE_TYPES[nodeTypeId.toUpperCase()];
      if (!nodeType) continue;
      
      // Adjust count based on biome suitability
      const count = this._getNodeCountForBiome(nodeTypeId, biomeMapped, baseCount);
      
      for (let i = 0; i < count; i++) {
        const seed = baseSeed + nodeIdx * 9973;
        nodeIdx++;
        
        // Random position within chunk
        const localX = this._seededRandom(seed) * this.chunkSize;
        const localZ = this._seededRandom(seed + 1) * this.chunkSize;
        const worldX = cx * this.chunkSize + localX;
        const worldZ = cz * this.chunkSize + localZ;
        
        // Check exclusion zones
        const distFromOrigin = Math.sqrt(worldX * worldX + worldZ * worldZ);
        if (distFromOrigin < this.castleExclusionRadius) continue;
        
        // Get terrain info
        const y = this.terrain ? this.terrain.getTerrainHeight(worldX, worldZ) : 0;
        const slope = this.terrain ? this.terrain.getTerrainSlope(worldX, worldZ) : 0;
        
        if (slope > this.nodeMaxSlope) continue;
        
        // Create the node
        const node = this._createNode(nodeTypeId, worldX, y, worldZ, biomeMapped, seed);
        if (node) {
          chunk.nodes.push(node);
          chunk.meshes.push(node.mesh);
          this.activeNodes.push(node);
        }
      }
    }
    
    this.chunks.set(key, chunk);
  }
  
  _mapBiomeToMaterial(biome) {
    // Map terrain biomes to MaterialData biome sources
    const biomeMap = {
      'plains': BIOME_SOURCE.ANY,
      'forest': BIOME_SOURCE.FOREST,
      'mountains': BIOME_SOURCE.MOUNTAIN,
      'swamp': BIOME_SOURCE.SWAMP,
      'snow': BIOME_SOURCE.SNOW,
      'desert': BIOME_SOURCE.DESERT,
      'hills': BIOME_SOURCE.MOUNTAIN,
    };
    return biomeMap[biome] || BIOME_SOURCE.ANY;
  }
  
  _getNodeCountForBiome(nodeTypeId, biome, baseCount) {
    // Adjust node counts based on biome suitability
    const biomeBonus = {
      ore_vein: {
        [BIOME_SOURCE.MOUNTAIN]: 2.0,
        [BIOME_SOURCE.CAVE]: 2.5,
        [BIOME_SOURCE.ANY]: 0.5,
      },
      herb_patch: {
        [BIOME_SOURCE.FOREST]: 2.0,
        [BIOME_SOURCE.SWAMP]: 1.5,
        [BIOME_SOURCE.ANY]: 0.8,
      },
      wood_stump: {
        [BIOME_SOURCE.FOREST]: 2.0,
        [BIOME_SOURCE.ANY]: 0.5,
      },
      crystal_node: {
        [BIOME_SOURCE.CAVE]: 2.0,
        [BIOME_SOURCE.RUINS]: 2.0,
        [BIOME_SOURCE.MOUNTAIN]: 1.2,
        [BIOME_SOURCE.ANY]: 0.3,
      },
    };
    
    const multiplier = biomeBonus[nodeTypeId]?.[biome] || biomeBonus[nodeTypeId]?.[BIOME_SOURCE.ANY] || 1.0;
    return Math.floor(baseCount * multiplier);
  }
  
  _createNode(nodeTypeId, x, y, z, biome, seed) {
    const nodeType = GATHERING_NODE_TYPES[nodeTypeId.toUpperCase()];
    if (!nodeType) return null;
    
    const nodeId = `node-${x.toFixed(0)}-${z.toFixed(0)}-${seed}`;
    
    // Check if this node is depleted
    if (this.depletedNodes.has(nodeId)) return null;
    
    const node = {
      id: nodeId,
      typeId: nodeTypeId,
      type: nodeType,
      position: new THREE.Vector3(x, y, z),
      biome: biome,
      mesh: null,
      light: null,
      depleted: false,
      respawnTime: 0,
    };
    
    // Create visual mesh
    node.mesh = this._createNodeMesh(nodeTypeId, seed);
    node.mesh.position.set(x, y, z);
    node.mesh.userData.gatheringNode = node;
    this.scene.add(node.mesh);
    
    // Add point light for crystals
    if (nodeTypeId === 'crystal_node') {
      node.light = new THREE.PointLight(0x88aaff, 0.8, 6);
      node.light.position.set(x, y + 0.5, z);
      this.scene.add(node.light);
    }
    
    return node;
  }
  
  _createNodeMesh(nodeTypeId, seed) {
    const group = new THREE.Group();
    const rng = (offset) => this._seededRandom(seed + offset);
    
    switch (nodeTypeId) {
      case 'ore_vein': {
        // Main rock cluster
        for (let i = 0; i < 3; i++) {
          const rock = new THREE.Mesh(this.oreVeinGeo, this.oreVeinMat);
          rock.position.set(
            (rng(i * 10) - 0.5) * 0.8,
            rng(i * 10 + 1) * 0.3,
            (rng(i * 10 + 2) - 0.5) * 0.8
          );
          rock.scale.setScalar(0.6 + rng(i * 10 + 3) * 0.5);
          rock.rotation.set(
            rng(i * 10 + 4) * Math.PI,
            rng(i * 10 + 5) * Math.PI,
            rng(i * 10 + 6) * Math.PI
          );
          group.add(rock);
        }
        // Shiny ore veins
        for (let i = 0; i < 2; i++) {
          const vein = new THREE.Mesh(
            new THREE.BoxGeometry(0.1, 0.3, 0.05),
            this.oreGlintMat
          );
          vein.position.set(
            (rng(i * 20 + 100) - 0.5) * 0.5,
            0.2 + rng(i * 20 + 101) * 0.3,
            (rng(i * 20 + 102) - 0.5) * 0.5
          );
          vein.rotation.z = rng(i * 20 + 103) * 0.5;
          group.add(vein);
        }
        break;
      }
      
      case 'herb_patch': {
        // Multiple small plants
        for (let i = 0; i < 5; i++) {
          const herb = new THREE.Mesh(this.herbPatchGeo, this.herbMat);
          herb.position.set(
            (rng(i * 10) - 0.5) * 1.0,
            0,
            (rng(i * 10 + 1) - 0.5) * 1.0
          );
          herb.scale.setScalar(0.7 + rng(i * 10 + 2) * 0.5);
          group.add(herb);
        }
        // Add a flower or two
        for (let i = 0; i < 2; i++) {
          const flower = new THREE.Mesh(
            new THREE.SphereGeometry(0.08, 6, 6),
            this.herbFlowerMat
          );
          flower.position.set(
            (rng(i * 20 + 50) - 0.5) * 0.8,
            0.35 + rng(i * 20 + 51) * 0.1,
            (rng(i * 20 + 52) - 0.5) * 0.8
          );
          group.add(flower);
        }
        break;
      }
      
      case 'wood_stump': {
        // Main stump
        const stump = new THREE.Mesh(this.stumpGeo, this.stumpMat);
        group.add(stump);
        
        // Rings on top
        const rings = new THREE.Mesh(
          new THREE.CircleGeometry(0.35, 8),
          this.stumpRingsMat
        );
        rings.rotation.x = -Math.PI / 2;
        rings.position.y = 0.61;
        group.add(rings);
        
        // Small mushrooms
        for (let i = 0; i < 2; i++) {
          const mushroom = new THREE.Mesh(
            new THREE.SphereGeometry(0.06, 6, 6),
            new THREE.MeshStandardMaterial({ color: 0xcc8844 })
          );
          const angle = rng(i * 30) * Math.PI * 2;
          mushroom.position.set(
            Math.cos(angle) * 0.5,
            0.05,
            Math.sin(angle) * 0.5
          );
          group.add(mushroom);
        }
        break;
      }
      
      case 'crystal_node': {
        // Crystal cluster
        for (let i = 0; i < 4; i++) {
          const crystal = new THREE.Mesh(this.crystalGeo, this.crystalMat.clone());
          crystal.position.set(
            (rng(i * 10) - 0.5) * 0.6,
            0.2 + rng(i * 10 + 1) * 0.4,
            (rng(i * 10 + 2) - 0.5) * 0.6
          );
          crystal.scale.set(
            0.5 + rng(i * 10 + 3) * 0.6,
            0.8 + rng(i * 10 + 4) * 0.8,
            0.5 + rng(i * 10 + 5) * 0.6
          );
          crystal.rotation.set(
            rng(i * 10 + 6) * 0.3,
            rng(i * 10 + 7) * Math.PI * 2,
            rng(i * 10 + 8) * 0.3
          );
          group.add(crystal);
        }
        break;
      }
    }
    
    return group;
  }
  
  _unloadChunk(key, chunk) {
    // Remove meshes from scene
    for (const mesh of chunk.meshes) {
      this.scene.remove(mesh);
    }
    
    // Remove lights
    for (const node of chunk.nodes) {
      if (node.light) {
        this.scene.remove(node.light);
      }
      // Remove from active nodes
      const idx = this.activeNodes.indexOf(node);
      if (idx !== -1) this.activeNodes.splice(idx, 1);
    }
    
    this.chunks.delete(key);
  }
  
  // ========== RESPAWN SYSTEM ==========
  
  _updateRespawns() {
    const now = Date.now();
    
    for (const [nodeId, respawnTime] of this.depletedNodes) {
      if (now >= respawnTime) {
        this.depletedNodes.delete(nodeId);
        // Node will regenerate on next chunk update if player revisits
      }
    }
  }
  
  _depleteNode(node) {
    node.depleted = true;
    
    // Calculate respawn time (2-5 minutes)
    const respawnMs = (node.type.respawnTime || 180) * 1000;
    const respawnTime = Date.now() + respawnMs;
    this.depletedNodes.set(node.id, respawnTime);
    
    // Animate depletion (shrink and fade)
    const mesh = node.mesh;
    const shrinkDuration = 0.5;
    let elapsed = 0;
    
    const animate = () => {
      elapsed += 0.016;
      const t = Math.min(elapsed / shrinkDuration, 1);
      
      mesh.scale.setScalar(1 - t);
      mesh.position.y = node.position.y - t * 0.3;
      
      if (t < 1) {
        requestAnimationFrame(animate);
      } else {
        // Remove from scene
        this.scene.remove(mesh);
        if (node.light) this.scene.remove(node.light);
        
        // Remove from active nodes
        const idx = this.activeNodes.indexOf(node);
        if (idx !== -1) this.activeNodes.splice(idx, 1);
      }
    };
    animate();
  }
  
  // ========== INTERACTION SYSTEM ==========
  
  _updateInteraction(delta) {
    // Find nearby node
    this.nearbyNode = this._findNearbyNode();
    
    // Show/hide prompt
    if (this.nearbyNode && !this.isGathering) {
      this._showPrompt(this.nearbyNode);
    } else if (!this.isGathering) {
      this._hidePrompt();
    }
    
    // Handle gathering input
    if (this.input && this.input.keys) {
      const ePressed = this.input.keys['KeyE'] || this.input.keys['e'];
      
      if (ePressed && this.nearbyNode && !this.isGathering) {
        this._startGathering(this.nearbyNode);
      } else if (ePressed && this.isGathering) {
        this._continueGathering(delta);
      } else if (!ePressed && this.isGathering) {
        this._cancelGathering();
      }
    }
  }
  
  _findNearbyNode() {
    let closest = null;
    let closestDist = 2.5; // Interaction range
    
    for (const node of this.activeNodes) {
      if (node.depleted) continue;
      
      const dist = this.playerPosition.distanceTo(node.position);
      if (dist < closestDist) {
        closestDist = dist;
        closest = node;
      }
    }
    
    return closest;
  }
  
  _showPrompt(node) {
    this.promptName.textContent = node.type.name;
    this.promptContainer.style.display = 'flex';
  }
  
  _hidePrompt() {
    this.promptContainer.style.display = 'none';
  }
  
  _startGathering(node) {
    this.isGathering = true;
    this.gatherProgress = 0;
    this.gatherTarget = node;
    
    // Hide prompt, show progress
    this._hidePrompt();
    this.progressLabel.textContent = `Gathering ${node.type.name}...`;
    this.progressContainer.style.display = 'flex';
    
    // Play start sound
    if (this.audio) {
      this.audio.play('menuHover', { volume: 0.3 });
    }
  }
  
  _continueGathering(delta) {
    if (!this.gatherTarget) return;
    
    const gatherTime = this.gatherTarget.type.gatherTime || 2.0;
    this.gatherProgress += delta;
    
    // Update progress bar
    const progress = Math.min(this.gatherProgress / gatherTime, 1);
    this.progressBarInner.style.width = `${progress * 100}%`;
    
    // Spawn gathering particles periodically
    if (Math.random() < 0.2 && this.particles) {
      this._spawnGatherParticle(this.gatherTarget);
    }
    
    // Check if complete
    if (this.gatherProgress >= gatherTime) {
      this._completeGathering();
    }
    
    // Check if player moved too far
    const dist = this.playerPosition.distanceTo(this.gatherTarget.position);
    if (dist > 3.0) {
      this._cancelGathering();
    }
  }
  
  _cancelGathering() {
    this.isGathering = false;
    this.gatherProgress = 0;
    this.gatherTarget = null;
    this.progressContainer.style.display = 'none';
  }
  
  _completeGathering() {
    const node = this.gatherTarget;
    
    // Reset gathering state
    this.isGathering = false;
    this.gatherProgress = 0;
    this.gatherTarget = null;
    this.progressContainer.style.display = 'none';
    
    // Roll for drops
    const drops = rollGatheringDrops(
      node.typeId.toUpperCase(),
      node.biome,
      0 // Gathering bonus (could come from player stats)
    );
    
    // Add materials to inventory
    const pickupTexts = [];
    for (const drop of drops) {
      const mat = getMaterial(drop.materialId);
      if (mat) {
        this._addMaterialToInventory(drop.materialId, drop.quantity);
        pickupTexts.push(`+${drop.quantity} ${mat.name}`);
      }
    }
    
    // Show pickup notification
    if (pickupTexts.length > 0) {
      this._showPickupNotification(pickupTexts.join('\n'));
    }
    
    // Play completion sound
    if (this.audio) {
      this.audio.play('itemPickup', { volume: 0.5 });
    }
    
    // Spawn completion particles
    this._spawnCompletionParticles(node);
    
    // Deplete the node
    this._depleteNode(node);
  }
  
  _addMaterialToInventory(materialId, quantity) {
    // Integration with InventoryManager
    if (this.inventory && this.inventory.addMaterial) {
      this.inventory.addMaterial(materialId, quantity);
    } else {
      // Fallback: store in localStorage
      const materials = JSON.parse(localStorage.getItem('ashen-materials') || '{}');
      materials[materialId] = (materials[materialId] || 0) + quantity;
      localStorage.setItem('ashen-materials', JSON.stringify(materials));
    }
  }
  
  _showPickupNotification(text) {
    this.pickupNotification.innerHTML = text.split('\n').map(
      line => `<div style="color:#aaffcc;text-shadow:0 0 6px #44aa66;">${line}</div>`
    ).join('');
    this.pickupNotification.style.display = 'flex';
    this.pickupNotification.style.opacity = '1';
    
    // Fade out after 2 seconds
    setTimeout(() => {
      this.pickupNotification.style.opacity = '0';
      setTimeout(() => {
        this.pickupNotification.style.display = 'none';
      }, 300);
    }, 2000);
  }
  
  // ========== PARTICLE EFFECTS ==========
  
  _spawnGatherParticle(node) {
    if (!this.particles) return;
    
    const pos = node.position.clone();
    pos.y += 0.5;
    pos.x += (Math.random() - 0.5) * 0.8;
    pos.z += (Math.random() - 0.5) * 0.8;
    
    // Get particle color based on node type
    let color = 0xffffff;
    switch (node.typeId) {
      case 'ore_vein': color = 0xaabbcc; break;
      case 'herb_patch': color = 0x66ff66; break;
      case 'wood_stump': color = 0xaa8866; break;
      case 'crystal_node': color = 0x88aaff; break;
    }
    
    // Use existing spark system if available
    if (this.particles.spawnSparks) {
      this.particles.spawnSparks(pos, 1, color);
    }
  }
  
  _spawnCompletionParticles(node) {
    if (!this.particles) return;
    
    const pos = node.position.clone();
    pos.y += 0.5;
    
    // Burst of particles
    if (this.particles.spawnSparks) {
      this.particles.spawnSparks(pos, 8, 0x88ffaa);
    }
  }
  
  // ========== PUBLIC API ==========
  
  /**
   * Get player's current material count
   */
  getMaterialCount(materialId) {
    if (this.inventory && this.inventory.getMaterialCount) {
      return this.inventory.getMaterialCount(materialId);
    }
    const materials = JSON.parse(localStorage.getItem('ashen-materials') || '{}');
    return materials[materialId] || 0;
  }
  
  /**
   * Get all collected materials
   */
  getAllMaterials() {
    if (this.inventory && this.inventory.getAllMaterials) {
      return this.inventory.getAllMaterials();
    }
    return JSON.parse(localStorage.getItem('ashen-materials') || '{}');
  }
  
  /**
   * Force spawn a node at a specific location (for testing/dungeons)
   */
  spawnNode(nodeTypeId, x, y, z, biome = BIOME_SOURCE.ANY) {
    const seed = Date.now();
    return this._createNode(nodeTypeId, x, y, z, biome, seed);
  }
  
  /**
   * Get all active (non-depleted) nodes for minimap (Phase 27)
   * Returns array of { x, z, type, name }
   */
  getActiveNodes() {
    return this.activeNodes
      .filter(node => !node.depleted)
      .map(node => ({
        x: node.position.x,
        z: node.position.z,
        type: node.typeId,
        name: node.name || node.typeId,
      }));
  }
  
  /**
   * Cleanup
   */
  dispose() {
    // Remove all chunks
    for (const [key, chunk] of this.chunks) {
      this._unloadChunk(key, chunk);
    }
    
    // Remove UI
    if (this.promptContainer?.parentNode) {
      this.promptContainer.parentNode.removeChild(this.promptContainer);
    }
    if (this.progressContainer?.parentNode) {
      this.progressContainer.parentNode.removeChild(this.progressContainer);
    }
    if (this.pickupNotification?.parentNode) {
      this.pickupNotification.parentNode.removeChild(this.pickupNotification);
    }
  }
}
