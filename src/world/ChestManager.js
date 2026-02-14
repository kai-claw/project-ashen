import * as THREE from 'three';
import { ITEM_TYPES } from '../systems/LootManager.js';
import { RARITY } from '../systems/EquipmentManager.js';
import { RECIPES, UNLOCK_METHOD } from '../data/RecipeData.js';

/**
 * ChestManager - Places and manages treasure chests throughout the world
 * Phase 17: Loot & Items
 * 
 * Features:
 * - Chests spawn near ruins, in caves, and hidden spots
 * - Three rarity tiers: Wooden (common), Silver (uncommon), Gold (rare)
 * - Interactive opening with E key
 * - Opening animation with lid rotation
 * - Contains gold, potions, equipment based on chest tier
 * - Respawn after area reload or time (configurable)
 * - LocalStorage persistence for opened chests
 */

// ========== CHEST TIER DEFINITIONS ==========
export const CHEST_TIERS = {
  WOODEN: {
    id: 'wooden',
    name: 'Wooden Chest',
    color: 0x8B4513,        // Saddle brown
    emissive: 0x331100,
    glowColor: 0xffaa44,
    glowIntensity: 0.5,
    spawnWeight: 60,
    goldRange: [10, 30],
    potionChance: 0.3,
    equipmentChance: 0.15,
    equipmentRarityWeights: { common: 80, uncommon: 18, rare: 2, epic: 0 },
    materialChance: 0.4,
    materialRange: [1, 3],
    recipeScrollChance: 0.1,  // Phase 23: Recipe scrolls
  },
  SILVER: {
    id: 'silver',
    name: 'Silver Chest',
    color: 0xC0C0C0,        // Silver
    emissive: 0x444455,
    glowColor: 0x88aaff,
    glowIntensity: 0.8,
    spawnWeight: 30,
    goldRange: [30, 80],
    potionChance: 0.5,
    equipmentChance: 0.35,
    equipmentRarityWeights: { common: 40, uncommon: 40, rare: 18, epic: 2 },
    materialChance: 0.6,
    materialRange: [2, 5],
    recipeScrollChance: 0.25,  // Phase 23: Recipe scrolls
  },
  GOLD: {
    id: 'gold',
    name: 'Golden Chest',
    color: 0xFFD700,        // Gold
    emissive: 0xaa8800,
    glowColor: 0xffee88,
    glowIntensity: 1.2,
    spawnWeight: 10,
    goldRange: [80, 200],
    potionChance: 0.8,
    equipmentChance: 0.65,
    equipmentRarityWeights: { common: 10, uncommon: 30, rare: 45, epic: 15 },
    materialChance: 0.9,
    materialRange: [3, 8],
    recipeScrollChance: 0.5,  // Phase 23: Recipe scrolls
  },
};

// ========== CHEST LOCATIONS ==========
const CHEST_PLACEMENT = {
  RUINS: {
    chance: 0.7,           // 70% chance per ruin to have a chest
    offset: { minDist: 3, maxDist: 12 },
    tierBoost: 1.2,        // Slightly better tiers in ruins
  },
  CAVES: {
    chance: 0.85,          // 85% chance per cave to have a chest
    offset: { minDist: 2, maxDist: 8 },
    tierBoost: 1.5,        // Better tiers in caves
  },
  HIDDEN: {
    chance: 0.3,           // Random hidden spots in frontier
    minDistFromCastle: 120,
    tierBoost: 1.0,
  },
};

export class ChestManager {
  constructor(scene, terrainGenerator, ruinsManager, caveManager, lootManager, equipmentManager, inputManager) {
    this.scene = scene;
    this.terrain = terrainGenerator;
    this.ruinsManager = ruinsManager;
    this.caveManager = caveManager;
    this.lootManager = lootManager;
    this.equipmentManager = equipmentManager;
    this.inputManager = inputManager;
    
    // Region-based loading (match other managers)
    this.regionSize = 150;
    this.loadDistance = 2;
    this.unloadDistance = 4;
    
    // Chest settings
    this.interactionDistance = 3.0;
    this.respawnTimeMs = 5 * 60 * 1000; // 5 minutes
    
    // Storage
    this.regions = new Map();
    this.chests = [];        // All active chests
    this.chestMeshes = [];   // For raycasting/interaction
    
    // Track player
    this.lastPlayerRegionX = null;
    this.lastPlayerRegionZ = null;
    
    // Persistence
    this.openedChests = this._loadOpenedChests();
    
    // Interaction state
    this.nearbyChest = null;
    this.interactPrompt = null;
    
    // Animation
    this.openingChests = [];
    
    // Materials
    this.materials = this._createMaterials();
    
    // Create interaction prompt UI
    this._createInteractPrompt();
    
    console.log('[ChestManager] Initialized with region-based chest placement');
  }
  
  // ========== PERSISTENCE ==========
  _loadOpenedChests() {
    try {
      const saved = localStorage.getItem('ashen_opened_chests');
      if (saved) {
        const data = JSON.parse(saved);
        // Filter out expired entries
        const now = Date.now();
        const filtered = {};
        for (const [key, timestamp] of Object.entries(data)) {
          if (now - timestamp < this.respawnTimeMs) {
            filtered[key] = timestamp;
          }
        }
        return filtered;
      }
    } catch (e) {
      console.warn('[ChestManager] Failed to load opened chests:', e);
    }
    return {};
  }
  
  _saveOpenedChests() {
    try {
      localStorage.setItem('ashen_opened_chests', JSON.stringify(this.openedChests));
    } catch (e) {
      console.warn('[ChestManager] Failed to save opened chests:', e);
    }
  }
  
  _getChestKey(x, z) {
    return `${Math.round(x)},${Math.round(z)}`;
  }
  
  // ========== MATERIALS ==========
  _createMaterials() {
    return {
      wooden: {
        body: new THREE.MeshStandardMaterial({ 
          color: CHEST_TIERS.WOODEN.color,
          emissive: CHEST_TIERS.WOODEN.emissive,
          emissiveIntensity: 0.2,
          roughness: 0.8,
          metalness: 0.1,
        }),
        trim: new THREE.MeshStandardMaterial({
          color: 0x4a3520,
          roughness: 0.7,
          metalness: 0.3,
        }),
      },
      silver: {
        body: new THREE.MeshStandardMaterial({
          color: CHEST_TIERS.SILVER.color,
          emissive: CHEST_TIERS.SILVER.emissive,
          emissiveIntensity: 0.3,
          roughness: 0.4,
          metalness: 0.7,
        }),
        trim: new THREE.MeshStandardMaterial({
          color: 0x666688,
          roughness: 0.3,
          metalness: 0.8,
        }),
      },
      gold: {
        body: new THREE.MeshStandardMaterial({
          color: CHEST_TIERS.GOLD.color,
          emissive: CHEST_TIERS.GOLD.emissive,
          emissiveIntensity: 0.4,
          roughness: 0.3,
          metalness: 0.9,
        }),
        trim: new THREE.MeshStandardMaterial({
          color: 0xcc9900,
          roughness: 0.2,
          metalness: 0.95,
        }),
      },
    };
  }
  
  // ========== INTERACTION UI ==========
  _createInteractPrompt() {
    const container = document.createElement('div');
    container.id = 'chest-interact-prompt';
    container.style.cssText = `
      position: fixed;
      bottom: 25%;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.75);
      color: #fff;
      padding: 12px 24px;
      border-radius: 8px;
      font-family: 'Segoe UI', sans-serif;
      font-size: 16px;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.2s;
      z-index: 100;
      border: 1px solid rgba(255, 200, 100, 0.5);
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    `;
    container.innerHTML = '<span style="color:#ffcc66">[E]</span> Open Chest';
    document.body.appendChild(container);
    this.interactPrompt = container;
  }
  
  _showInteractPrompt(chestData) {
    if (this.interactPrompt) {
      const tierName = chestData.tier.name;
      const tierColor = `#${chestData.tier.color.toString(16).padStart(6, '0')}`;
      this.interactPrompt.innerHTML = `<span style="color:#ffcc66">[E]</span> Open <span style="color:${tierColor}">${tierName}</span>`;
      this.interactPrompt.style.opacity = '1';
    }
  }
  
  _hideInteractPrompt() {
    if (this.interactPrompt) {
      this.interactPrompt.style.opacity = '0';
    }
  }
  
  // ========== SEEDED RANDOM ==========
  _seededRandom(seed) {
    const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
    return x - Math.floor(x);
  }
  
  // ========== REGION MANAGEMENT ==========
  _regionKey(rx, rz) {
    return `${rx},${rz}`;
  }
  
  _worldToRegion(x, z) {
    return {
      rx: Math.floor(x / this.regionSize),
      rz: Math.floor(z / this.regionSize),
    };
  }
  
  update(playerX, playerZ, delta = 0) {
    const playerPos = new THREE.Vector3(playerX, 0, playerZ);
    
    // Region loading/unloading
    const { rx, rz } = this._worldToRegion(playerX, playerZ);
    
    if (rx !== this.lastPlayerRegionX || rz !== this.lastPlayerRegionZ) {
      this.lastPlayerRegionX = rx;
      this.lastPlayerRegionZ = rz;
      
      // Load nearby regions
      const neededRegions = new Set();
      for (let dx = -this.loadDistance; dx <= this.loadDistance; dx++) {
        for (let dz = -this.loadDistance; dz <= this.loadDistance; dz++) {
          const regionX = rx + dx;
          const regionZ = rz + dz;
          const key = this._regionKey(regionX, regionZ);
          neededRegions.add(key);
          
          if (!this.regions.has(key)) {
            this._loadRegion(regionX, regionZ);
          }
        }
      }
      
      // Unload distant regions
      const toUnload = [];
      for (const [key] of this.regions) {
        const [regionX, regionZ] = key.split(',').map(Number);
        const dx = Math.abs(regionX - rx);
        const dz = Math.abs(regionZ - rz);
        if (dx > this.unloadDistance || dz > this.unloadDistance) {
          toUnload.push(key);
        }
      }
      
      for (const key of toUnload) {
        this._unloadRegion(key);
      }
    }
    
    // Update opening animations
    this._updateAnimations(delta);
    
    // Check for nearby interactable chest
    this._updateInteraction(playerPos);
    
    // Handle interaction input
    if (this.nearbyChest && this.inputManager && this.inputManager.interact) {
      this._openChest(this.nearbyChest);
    }
  }
  
  _loadRegion(rx, rz) {
    const key = this._regionKey(rx, rz);
    if (this.regions.has(key)) return;
    
    const regionData = {
      chests: [],
      meshes: [],
    };
    
    const regionSeed = rx * 73856093 + rz * 19349663;
    
    // Get ruins in this region
    if (this.ruinsManager && this.ruinsManager.ruins) {
      for (const ruin of this.ruinsManager.ruins) {
        const ruinRegion = this._worldToRegion(ruin.x, ruin.z);
        if (ruinRegion.rx === rx && ruinRegion.rz === rz) {
          this._tryPlaceChestNearPOI(ruin, 'ruins', regionSeed, regionData);
        }
      }
    }
    
    // Get caves in this region
    if (this.caveManager && this.caveManager.caves) {
      for (const cave of this.caveManager.caves) {
        const caveRegion = this._worldToRegion(cave.x, cave.z);
        if (caveRegion.rx === rx && caveRegion.rz === rz) {
          this._tryPlaceChestNearPOI(cave, 'caves', regionSeed + 1000, regionData);
        }
      }
    }
    
    // Random hidden chests in frontier areas
    const worldOffsetX = rx * this.regionSize;
    const worldOffsetZ = rz * this.regionSize;
    const distFromOrigin = Math.sqrt(
      (worldOffsetX + this.regionSize/2) ** 2 + 
      (worldOffsetZ + this.regionSize/2) ** 2
    );
    
    if (distFromOrigin > CHEST_PLACEMENT.HIDDEN.minDistFromCastle) {
      const hiddenChance = this._seededRandom(regionSeed + 5000);
      if (hiddenChance < CHEST_PLACEMENT.HIDDEN.chance) {
        const x = worldOffsetX + this._seededRandom(regionSeed + 5001) * this.regionSize;
        const z = worldOffsetZ + this._seededRandom(regionSeed + 5002) * this.regionSize;
        
        // Check terrain is valid
        if (this.terrain) {
          const y = this.terrain.getTerrainHeight(x, z);
          const slope = this.terrain.getTerrainSlope ? this.terrain.getTerrainSlope(x, z) : 0;
          
          if (slope < 0.5) {
            const tier = this._selectTier(regionSeed + 5003, CHEST_PLACEMENT.HIDDEN.tierBoost);
            this._createChest(x, y, z, tier, regionSeed + 5004, regionData);
          }
        }
      }
    }
    
    this.regions.set(key, regionData);
  }
  
  _tryPlaceChestNearPOI(poi, type, seed, regionData) {
    const config = CHEST_PLACEMENT[type.toUpperCase()];
    if (!config) return;
    
    const placeChance = this._seededRandom(seed + poi.x * 100 + poi.z);
    if (placeChance > config.chance) return;
    
    // Calculate offset position
    const angle = this._seededRandom(seed + poi.x + poi.z * 50) * Math.PI * 2;
    const dist = config.offset.minDist + 
      this._seededRandom(seed + poi.x * 7 + poi.z * 13) * 
      (config.offset.maxDist - config.offset.minDist);
    
    const x = poi.x + Math.cos(angle) * dist;
    const z = poi.z + Math.sin(angle) * dist;
    
    // Get terrain height
    const y = this.terrain ? this.terrain.getTerrainHeight(x, z) : poi.y || 0;
    
    // Select tier with boost
    const tier = this._selectTier(seed + poi.x * 3 + poi.z * 7, config.tierBoost);
    
    this._createChest(x, y, z, tier, seed, regionData);
  }
  
  _selectTier(seed, boost = 1.0) {
    const rand = this._seededRandom(seed) * 100;
    
    const woodenWeight = CHEST_TIERS.WOODEN.spawnWeight;
    const silverWeight = CHEST_TIERS.SILVER.spawnWeight * boost;
    const goldWeight = CHEST_TIERS.GOLD.spawnWeight * (boost * boost);
    const total = woodenWeight + silverWeight + goldWeight;
    
    const normalizedRand = rand * (total / 100);
    
    if (normalizedRand < goldWeight) return CHEST_TIERS.GOLD;
    if (normalizedRand < goldWeight + silverWeight) return CHEST_TIERS.SILVER;
    return CHEST_TIERS.WOODEN;
  }
  
  _createChest(x, y, z, tier, seed, regionData) {
    const chestKey = this._getChestKey(x, z);
    
    // Check if already opened and not respawned
    if (this.openedChests[chestKey]) {
      const elapsed = Date.now() - this.openedChests[chestKey];
      if (elapsed < this.respawnTimeMs) {
        return; // Still on cooldown
      }
      // Respawned - remove from opened list
      delete this.openedChests[chestKey];
      this._saveOpenedChests();
    }
    
    // Create chest mesh group
    const chestGroup = new THREE.Group();
    chestGroup.position.set(x, y, z);
    
    // Random rotation
    chestGroup.rotation.y = this._seededRandom(seed + 999) * Math.PI * 2;
    
    // Chest body (bottom half)
    const bodyGeo = new THREE.BoxGeometry(1.2, 0.6, 0.8);
    const bodyMesh = new THREE.Mesh(bodyGeo, this.materials[tier.id].body);
    bodyMesh.position.y = 0.3;
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    chestGroup.add(bodyMesh);
    
    // Chest lid (top half) - pivots from back
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.6, -0.4); // Pivot point at back top
    
    const lidGeo = new THREE.BoxGeometry(1.2, 0.3, 0.8);
    const lidMesh = new THREE.Mesh(lidGeo, this.materials[tier.id].body);
    lidMesh.position.set(0, 0.15, 0.4);
    lidMesh.castShadow = true;
    chestGroup.add(lidGroup);
    lidGroup.add(lidMesh);
    
    // Metal trim/bands
    const bandGeo = new THREE.BoxGeometry(1.25, 0.08, 0.85);
    const band1 = new THREE.Mesh(bandGeo, this.materials[tier.id].trim);
    band1.position.y = 0.55;
    chestGroup.add(band1);
    
    const band2 = new THREE.Mesh(bandGeo, this.materials[tier.id].trim);
    band2.position.y = 0.15;
    chestGroup.add(band2);
    
    // Lock/clasp
    const lockGeo = new THREE.BoxGeometry(0.15, 0.2, 0.1);
    const lockMesh = new THREE.Mesh(lockGeo, this.materials[tier.id].trim);
    lockMesh.position.set(0, 0.5, 0.42);
    chestGroup.add(lockMesh);
    
    // Glowing effect (point light for better chests)
    if (tier.glowIntensity > 0.5) {
      const glow = new THREE.PointLight(tier.glowColor, tier.glowIntensity, 8);
      glow.position.set(0, 0.8, 0);
      chestGroup.add(glow);
    }
    
    // Add to scene
    this.scene.add(chestGroup);
    
    // Store chest data
    const chestData = {
      x, y, z,
      key: chestKey,
      tier,
      mesh: chestGroup,
      lidGroup,
      opened: false,
      seed,
    };
    
    this.chests.push(chestData);
    regionData.chests.push(chestData);
    regionData.meshes.push(chestGroup);
    
    // Store reference for interaction detection
    chestGroup.userData.chestData = chestData;
    this.chestMeshes.push(chestGroup);
  }
  
  _unloadRegion(key) {
    const regionData = this.regions.get(key);
    if (!regionData) return;
    
    // Remove meshes from scene
    for (const mesh of regionData.meshes) {
      this.scene.remove(mesh);
      // Remove from chestMeshes array
      const idx = this.chestMeshes.indexOf(mesh);
      if (idx >= 0) this.chestMeshes.splice(idx, 1);
    }
    
    // Remove from chests array
    for (const chest of regionData.chests) {
      const idx = this.chests.indexOf(chest);
      if (idx >= 0) this.chests.splice(idx, 1);
    }
    
    this.regions.delete(key);
  }
  
  // ========== INTERACTION ==========
  _updateInteraction(playerPos) {
    let closest = null;
    let closestDist = this.interactionDistance;
    
    for (const chest of this.chests) {
      if (chest.opened) continue;
      
      const dx = playerPos.x - chest.x;
      const dz = playerPos.z - chest.z;
      const dist = Math.sqrt(dx * dx + dz * dz);
      
      if (dist < closestDist) {
        closest = chest;
        closestDist = dist;
      }
    }
    
    if (closest !== this.nearbyChest) {
      this.nearbyChest = closest;
      if (closest) {
        this._showInteractPrompt(closest);
      } else {
        this._hideInteractPrompt();
      }
    }
  }
  
  _openChest(chestData) {
    if (chestData.opened) return;
    
    chestData.opened = true;
    this._hideInteractPrompt();
    this.nearbyChest = null;
    
    // Mark as opened for persistence
    this.openedChests[chestData.key] = Date.now();
    this._saveOpenedChests();
    
    // Start opening animation
    this.openingChests.push({
      chest: chestData,
      progress: 0,
      targetAngle: -Math.PI * 0.7, // Open to ~126 degrees
    });
    
    // Generate and drop loot
    this._generateLoot(chestData);
    
    // Play sound
    if (this.lootManager && this.lootManager.gameManager && this.lootManager.gameManager.audioManager) {
      this.lootManager.gameManager.audioManager.playSound('chestOpen', { 
        position: new THREE.Vector3(chestData.x, chestData.y, chestData.z) 
      });
    }
  }
  
  _generateLoot(chestData) {
    const tier = chestData.tier;
    const seed = chestData.seed;
    const position = new THREE.Vector3(chestData.x, chestData.y + 1, chestData.z);
    
    // Always drop gold
    const goldAmount = tier.goldRange[0] + 
      Math.floor(this._seededRandom(seed + 100) * (tier.goldRange[1] - tier.goldRange[0]));
    
    if (this.lootManager) {
      this.lootManager.spawnLootDrop({
        itemId: 'gold',
        quantity: goldAmount,
      }, position.clone().add(new THREE.Vector3(
        (Math.random() - 0.5) * 1.5,
        0,
        (Math.random() - 0.5) * 1.5
      )));
    }
    
    // Potion chance
    if (this._seededRandom(seed + 200) < tier.potionChance) {
      const potionType = this._seededRandom(seed + 201) < 0.5 ? 'health-potion' : 'stamina-potion';
      const quantity = Math.ceil(this._seededRandom(seed + 202) * 2);
      
      if (this.lootManager) {
        this.lootManager.spawnLootDrop({
          itemId: potionType,
          quantity,
        }, position.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * 1.5,
          0,
          (Math.random() - 0.5) * 1.5
        )));
      }
    }
    
    // Material chance
    if (this._seededRandom(seed + 300) < tier.materialChance) {
      const materials = ['iron-ore', 'dark-shard', 'bone-fragment', 'spirit-essence'];
      const matIndex = Math.floor(this._seededRandom(seed + 301) * materials.length);
      const quantity = tier.materialRange[0] + 
        Math.floor(this._seededRandom(seed + 302) * (tier.materialRange[1] - tier.materialRange[0]));
      
      if (this.lootManager) {
        this.lootManager.spawnLootDrop({
          itemId: materials[matIndex],
          quantity,
        }, position.clone().add(new THREE.Vector3(
          (Math.random() - 0.5) * 1.5,
          0,
          (Math.random() - 0.5) * 1.5
        )));
      }
    }
    
    // Equipment chance
    if (this._seededRandom(seed + 400) < tier.equipmentChance) {
      if (this.equipmentManager) {
        // Select rarity based on tier weights
        const weights = tier.equipmentRarityWeights;
        const rand = this._seededRandom(seed + 401) * 100;
        
        let selectedRarity = RARITY.COMMON;
        let cumulative = 0;
        
        if (rand < (cumulative += weights.epic)) {
          selectedRarity = RARITY.EPIC;
        } else if (rand < (cumulative += weights.rare)) {
          selectedRarity = RARITY.RARE;
        } else if (rand < (cumulative += weights.uncommon)) {
          selectedRarity = RARITY.UNCOMMON;
        }
        
        // Generate equipment with forced rarity
        const equipment = this.equipmentManager.generateChestEquipment(selectedRarity);
        if (equipment) {
          this.equipmentManager.spawnEquipmentDrop(equipment, position.clone().add(new THREE.Vector3(
            (Math.random() - 0.5) * 1.5,
            0.5,
            (Math.random() - 0.5) * 1.5
          )));
        }
      }
    }
    
    // Recipe scroll chance (Phase 23)
    if (tier.recipeScrollChance && this._seededRandom(seed + 500) < tier.recipeScrollChance) {
      const recipeScroll = this._rollRecipeScroll(seed + 501);
      if (recipeScroll) {
        // Attempt to unlock via CraftingManager
        if (this.lootManager?.gameManager?.craftingManager) {
          const unlocked = this.lootManager.gameManager.craftingManager.handleRecipeScroll(recipeScroll.id);
          if (unlocked) {
            this.lootManager.showNotification(`Recipe Discovered: ${recipeScroll.name}`, 'gold');
          } else {
            // Already known - give gold instead
            const bonusGold = Math.floor(50 + this._seededRandom(seed + 502) * 50);
            if (this.lootManager) {
              this.lootManager.spawnLootDrop({ itemId: 'gold', quantity: bonusGold }, position.clone());
            }
          }
        }
      }
    }
    
    // Show notification
    if (this.lootManager && this.lootManager.showNotification) {
      this.lootManager.showNotification(`Opened ${tier.name}!`, tier.id);
    }
  }
  
  /**
   * Roll for a recipe scroll from chest-unlockable recipes
   */
  _rollRecipeScroll(seed) {
    // Get recipes that can be found in chests
    const chestRecipes = Object.values(RECIPES).filter(r => 
      r.unlockMethod === UNLOCK_METHOD.FOUND_IN_CHEST
    );
    
    if (chestRecipes.length === 0) return null;
    
    // Select random recipe
    const index = Math.floor(this._seededRandom(seed) * chestRecipes.length);
    return chestRecipes[index];
  }
  
  _updateAnimations(delta) {
    const completed = [];
    
    for (const anim of this.openingChests) {
      anim.progress += delta * 2; // 0.5 second animation
      
      if (anim.progress >= 1) {
        anim.progress = 1;
        completed.push(anim);
      }
      
      // Ease out animation
      const t = 1 - Math.pow(1 - anim.progress, 3);
      anim.chest.lidGroup.rotation.x = anim.targetAngle * t;
    }
    
    // Remove completed animations
    for (const anim of completed) {
      const idx = this.openingChests.indexOf(anim);
      if (idx >= 0) this.openingChests.splice(idx, 1);
    }
  }
  
  // ========== PUBLIC API ==========
  getChests() {
    return this.chests;
  }
  
  getNearbyChest(position, radius = 5) {
    for (const chest of this.chests) {
      if (chest.opened) continue;
      const dx = position.x - chest.x;
      const dz = position.z - chest.z;
      if (Math.sqrt(dx * dx + dz * dz) < radius) {
        return chest;
      }
    }
    return null;
  }
  
  // Force respawn all chests (for testing/debug)
  respawnAll() {
    this.openedChests = {};
    this._saveOpenedChests();
    
    // Reload all regions
    const keys = [...this.regions.keys()];
    for (const key of keys) {
      this._unloadRegion(key);
    }
    
    this.lastPlayerRegionX = null;
    this.lastPlayerRegionZ = null;
  }
  
  dispose() {
    // Clean up all regions
    for (const [key] of this.regions) {
      this._unloadRegion(key);
    }
    
    // Remove UI
    if (this.interactPrompt && this.interactPrompt.parentNode) {
      this.interactPrompt.parentNode.removeChild(this.interactPrompt);
    }
  }
}
