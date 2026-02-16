import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { GameManager } from './systems/GameManager.js';
import { Player } from './entities/Player.js';
import { EnemyManager } from './entities/EnemyManager.js';
import { World } from './world/World.js';
import { InputManager } from './systems/InputManager.js';
import { ItemManager } from './systems/ItemManager.js';
import { LootManager } from './systems/LootManager.js';
import { EquipmentManager } from './systems/EquipmentManager.js';
import { ChestManager } from './world/ChestManager.js';
import { HUD } from './ui/HUD.js';
import { CrucibleUI } from './ui/CrucibleUI.js';
import { StatsUI } from './ui/StatsUI.js';
import { InventoryUI } from './ui/InventoryUI.js';
import { CameraController } from './systems/CameraController.js';
import { AudioManager } from './systems/AudioManager.js';
import { ParticleManager } from './systems/ParticleManager.js';
import { FloatingText } from './ui/FloatingText.js';
import { InteractionManager } from './systems/InteractionManager.js';
import { ShopManager } from './systems/ShopManager.js';
import { DialogueManager } from './systems/DialogueManager.js';
import { WeaponManager } from './systems/WeaponManager.js';
import { AttackAnimator } from './systems/AttackAnimator.js';
import { ManaManager } from './systems/ManaManager.js';
import { SpellManager } from './systems/SpellManager.js';
import { SpellCaster } from './systems/SpellCaster.js';
import { SpellEffects } from './systems/SpellEffects.js';
import { BossUI } from './ui/BossUI.js';
import { createBossSpawner } from './systems/BossSpawner.js';
import { bossRenderer } from './systems/BossRenderer.js';
import { createDungeonManager, getDungeonManager } from './systems/DungeonManager.js';
import { GatheringManager } from './systems/GatheringManager.js';
import { CraftingManager } from './systems/CraftingManager.js';
import { CraftingUI } from './ui/CraftingUI.js';
import { createTimeManager, getTimeManager } from './systems/TimeManager.js';
import { createDayNightLighting, getDayNightLighting } from './systems/DayNightLighting.js';
import { createWeatherManager, getWeatherManager } from './systems/WeatherManager.js';
import { createTimeWeatherGameplay, getTimeWeatherGameplay } from './systems/TimeWeatherGameplay.js';
import { createRareEventManager, getRareEventManager } from './systems/RareEventManager.js';
import { createQuestManager, getQuestManager } from './systems/QuestManager.js';
import { createQuestWorldHooks, getQuestWorldHooks } from './systems/QuestWorldHooks.js';
import { createQuestUI, getQuestUI } from './ui/QuestUI.js';
import { createNPCQuestGivers, getNPCQuestGivers } from './systems/NPCQuestGivers.js';
import { createQuestRewards, getQuestRewards } from './systems/QuestRewards.js';
import { getSaveManager } from './systems/SaveManager.js';
import { getSaveIntegration } from './systems/SaveIntegration.js';
import { getSaveUI } from './systems/SaveUI.js';
import { createMinimapManager, getMinimapManager } from './ui/MinimapManager.js';
import { createFastTravelManager, getFastTravelManager } from './systems/FastTravelManager.js';
import { createWorldMapUI, getWorldMapUI } from './ui/WorldMapUI.js';
import { createDiscoveryManager, getDiscoveryManager } from './ui/DiscoveryManager.js';
import { GameTester } from './systems/GameTester.js';

// Color grading + vignette shader for cinematic feel
const ColorGradingShader = {
  uniforms: {
    tDiffuse: { value: null },
    brightness: { value: 0.05 },  // Reduced from 0.3 - was washing out colors
    contrast: { value: 1.1 },     // Slightly reduced
    saturation: { value: 1.1 },
    vignetteIntensity: { value: 0.2 },   // Reduced vignette
    vignetteRadius: { value: 0.9 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    uniform float brightness;
    uniform float contrast;
    uniform float saturation;
    uniform float vignetteIntensity;
    uniform float vignetteRadius;
    varying vec2 vUv;
    
    void main() {
      vec4 color = texture2D(tDiffuse, vUv);
      
      // Brightness
      color.rgb += brightness;
      
      // Contrast
      color.rgb = (color.rgb - 0.5) * contrast + 0.5;
      
      // Saturation
      float luminance = dot(color.rgb, vec3(0.299, 0.587, 0.114));
      color.rgb = mix(vec3(luminance), color.rgb, saturation);
      
      // Vignette - darkens edges for cinematic feel
      vec2 center = vUv - 0.5;
      float dist = length(center);
      float vignette = smoothstep(vignetteRadius, vignetteRadius - 0.4, dist);
      color.rgb *= mix(1.0 - vignetteIntensity, 1.0, vignette);
      
      // Subtle warm color grading (fantasy atmosphere)
      color.r *= 1.02;
      color.b *= 0.95;
      
      gl_FragColor = color;
    }
  `
};

// --- Core Setup ---
const renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  preserveDrawingBuffer: true  // Required for screenshots
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 2.0;  // Boosted to brighten dark environment
renderer.outputColorSpace = THREE.SRGBColorSpace;

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
// Sky background will be managed by DayNightLighting system
scene.background = new THREE.Color(0x87CEEB);  // Initial sky blue (will be overridden)

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 500);
// Initial camera position - will be adjusted by IIFE before first render
camera.position.set(0, 60, 11);
camera.lookAt(0, 50, 5);

// DEBUG objects removed - terrain now rendering with MeshBasicMaterial

// --- Post-Processing Setup ---
const renderTarget = new THREE.WebGLRenderTarget(
  window.innerWidth * Math.min(window.devicePixelRatio, 2),
  window.innerHeight * Math.min(window.devicePixelRatio, 2),
  {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    colorSpace: THREE.SRGBColorSpace,
  }
);

const composer = new EffectComposer(renderer, renderTarget);

// Base render pass
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// Bloom pass - very subtle, only for true emissives
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.15,  // strength - minimal bloom
  0.2,   // radius - tight glow
  0.95   // threshold - only very bright things bloom
);
composer.addPass(bloomPass);

// Color grading + vignette pass
const colorGradingPass = new ShaderPass(ColorGradingShader);
composer.addPass(colorGradingPass);

// --- Systems ---
const clock = new THREE.Clock();
const gameManager = new GameManager();
const manaManager = new ManaManager(gameManager);
gameManager.manaManager = manaManager; // Cross-reference for stat updates
const spellManager = new SpellManager(gameManager);
gameManager.spellManager = spellManager; // Cross-reference for spell casting
const spellCaster = new SpellCaster(gameManager, spellManager, null, null); // particleManager and audioManager set later
gameManager.spellCaster = spellCaster; // Cross-reference for spell casting
const inputManager = new InputManager(renderer.domElement);
const audioManager = new AudioManager(camera);
const particleManager = new ParticleManager(scene);
const hud = new HUD(gameManager);

// --- Day/Night & Weather Systems (Phase 24) ---
const timeManager = createTimeManager(scene);
const dayNightLighting = createDayNightLighting(scene, renderer);
dayNightLighting.initialize(timeManager);
const weatherManager = createWeatherManager(scene, particleManager, audioManager);
weatherManager.initialize(timeManager);
const timeWeatherGameplay = createTimeWeatherGameplay(gameManager);
timeWeatherGameplay.initialize();
const rareEventManager = createRareEventManager(scene);
rareEventManager.initialize();
gameManager.timeManager = timeManager;
gameManager.dayNightLighting = dayNightLighting;
gameManager.weatherManager = weatherManager;
gameManager.timeWeatherGameplay = timeWeatherGameplay;
gameManager.rareEventManager = rareEventManager;

// --- Quest System (Phase 25) ---
const questManager = createQuestManager();
const questWorldHooks = createQuestWorldHooks();
const questUI = createQuestUI();
const questRewards = createQuestRewards();
gameManager.questManager = questManager;
gameManager.questWorldHooks = questWorldHooks;
gameManager.questUI = questUI;
gameManager.questRewards = questRewards;

// Initialize audio on first user interaction
let audioInitialized = false;
const initAudio = async () => {
  if (!audioInitialized) {
    await audioManager.init();
    audioManager.startAmbientMusic();
    audioInitialized = true;
    document.removeEventListener('click', initAudio);
    document.removeEventListener('keydown', initAudio);
  }
};
document.addEventListener('click', initAudio);
document.addEventListener('keydown', initAudio);

// --- World ---
const world = new World(scene);

// --- Items ---
const itemManager = new ItemManager(scene, gameManager);
itemManager.initItems(world.getItemSpawns());

// --- Loot System ---
const lootManager = new LootManager(scene, gameManager);

// --- Equipment System ---
const equipmentManager = new EquipmentManager(scene, gameManager, lootManager);
lootManager.equipmentManager = equipmentManager; // Link for equipment drops

// --- Weapon System ---
const weaponManager = new WeaponManager(gameManager, equipmentManager);
equipmentManager.weaponManager = weaponManager; // Link for weapon sync

// --- Attack Animation System ---
// Note: cameraController is created later, will be linked after player
let attackAnimator = null;

// --- Chest System ---
const chestManager = new ChestManager(
  scene,
  world.terrain,
  world.ruinsManager,
  world.caveManager,
  lootManager,
  equipmentManager,
  inputManager
);

// --- Inventory UI (unified items + equipment) ---
const inventoryUI = new InventoryUI(gameManager, lootManager, equipmentManager, inputManager);

// --- Gathering System (Phase 23) ---
const gatheringManager = new GatheringManager(
  scene,
  world.terrain,
  inputManager,
  { // InventoryManager interface for materials
    addMaterial: (materialId, qty) => {
      const materials = JSON.parse(localStorage.getItem('ashen-materials') || '{}');
      materials[materialId] = (materials[materialId] || 0) + qty;
      localStorage.setItem('ashen-materials', JSON.stringify(materials));
    },
    getMaterialCount: (materialId) => {
      const materials = JSON.parse(localStorage.getItem('ashen-materials') || '{}');
      return materials[materialId] || 0;
    },
    getAllMaterials: () => JSON.parse(localStorage.getItem('ashen-materials') || '{}'),
  },
  particleManager,
  audioManager
);

// --- Crafting System (Phase 23) ---
const craftingManager = new CraftingManager(gameManager, inventoryUI);
gameManager.craftingManager = craftingManager;
gameManager.gatheringManager = gatheringManager;
const craftingUI = new CraftingUI(gameManager, craftingManager, inputManager);

// --- Entities ---
const player = new Player(scene, gameManager, inputManager);
player.setWorld(world); // Enable collision detection
const cameraController = new CameraController(camera, player.mesh, inputManager);
cameraController.setTerrain(world.terrain); // Enable terrain height clamping (fixes autostart spawn bug)
player.setCameraController(cameraController);

// Initialize attack animator now that all dependencies exist
attackAnimator = new AttackAnimator(equipmentManager, weaponManager, particleManager, cameraController);

// Hook weapon manager attack callbacks to animator
weaponManager.onAttackStart = (data) => {
  const speedMult = gameManager.getAttackSpeedMultiplier ? gameManager.getAttackSpeedMultiplier() : 1.0;
  attackAnimator.startAttack(data.attackType, speedMult);
};
weaponManager.onAttackEnd = () => {
  // Animation handles its own completion
};

// Link animator to gameManager
gameManager.attackAnimator = attackAnimator;

const enemyManager = new EnemyManager(scene, gameManager, player, world, particleManager, lootManager);

// Wire up spell caster with all dependencies
spellCaster.setScene(scene);
spellCaster.setPlayer(player);
spellCaster.setEnemyManager(enemyManager);
spellCaster.particleManager = particleManager;
spellCaster.audioManager = audioManager;

// --- Spell Visual Effects Manager ---
const spellEffects = new SpellEffects(scene, particleManager);
spellEffects.setPlayer(player);
gameManager.spellEffects = spellEffects;
spellCaster.spellEffects = spellEffects; // For enhanced projectile visuals

// Hook SpellManager expiration callbacks to SpellEffects for visual cleanup
spellManager.onBuffExpired = (spellId) => {
  spellEffects.removeBuffAura(spellId);
};
spellManager.onShieldExpired = (spellId) => {
  spellEffects.removeShieldAura();
};

// --- NPC Interaction System ---
const interactionManager = new InteractionManager(
  scene,
  camera,
  inputManager,
  world.npcManager,
  gameManager,
  audioManager
);

// --- Shop/Trading System ---
const shopManager = new ShopManager(gameManager, lootManager, equipmentManager, audioManager);

// --- Dialogue System ---
const dialogueManager = new DialogueManager(scene, camera, inputManager, gameManager, audioManager);

// Hook dialogue to shop (when player chooses "trade" in dialogue)
dialogueManager.setShopCallback((npc) => {
  shopManager.open(npc);
});

// Hook dialogue end to clear interaction state
dialogueManager.setEndCallback(() => {
  interactionManager.closeInteraction();
});

// Hook interaction manager: merchants go to dialogue first, then can open shop
interactionManager.setShopCallback((npc) => {
  // Merchants/blacksmiths/healers start dialogue which can lead to shop
  dialogueManager.startDialogue(npc);
});

// Hook dialogue for non-shop NPCs
interactionManager.setDialogueCallback((npc) => {
  dialogueManager.startDialogue(npc);
});

// --- Floating Text (XP gains, level ups) ---
const floatingText = new FloatingText(camera);

// --- Wire Up GameManager ---
gameManager.setCheckpoint(world.bonfirePosition.clone());
gameManager.setEntities(player, enemyManager, scene, camera);
gameManager.bonfirePosition = world.bonfirePosition;
gameManager.audioManager = audioManager;
gameManager.particleManager = particleManager;
gameManager.hud = hud;
gameManager.cameraController = cameraController;
gameManager.itemManager = itemManager;  // For boss reward drops
gameManager.floatingText = floatingText; // For XP gain text
gameManager.lootManager = lootManager;  // For inventory/potions
gameManager.equipmentManager = equipmentManager; // For equipment stats
gameManager.weaponManager = weaponManager; // For weapon stats/attacks
gameManager.attackAnimator = attackAnimator; // Will be set after creation

// --- Wire HUD to EnemyManager for boss bar ---
hud.setEnemyManager(enemyManager);

// --- Crucible UI (Infusion menu) ---
const crucibleUI = new CrucibleUI(gameManager, inputManager, player);

// --- Stats UI (Character stats / Stat point allocation) ---
const statsUI = new StatsUI(gameManager, inputManager, player);

// --- Connect StatsUI to HUD for auto-open on level up ---
hud.setStatsUI(statsUI);

// --- Connect Mana and Spell systems to HUD ---
hud.setManaManager(manaManager);
hud.setSpellManager(spellManager);

// --- Boss UI System (Phase 21) ---
const bossUI = new BossUI(gameManager);
gameManager.bossUI = bossUI;

// --- Boss Spawner System (Phase 21) ---
const bossSpawner = createBossSpawner(scene, world, enemyManager, null); // null for saveManager (optional)
gameManager.bossSpawner = bossSpawner;

// Wire boss events to UI
bossSpawner.onBossActivate = (bossData) => {
  console.log(`[Main] Boss fight started: ${bossData.name}`);
  bossUI.showBoss(bossData);
  // Optional: Change music here
  if (audioManager) {
    audioManager.play('bossMusic', { volume: 0.6, loop: true });
  }
};

bossSpawner.onBossDefeated = (bossData, arena) => {
  console.log(`[Main] Boss defeated: ${bossData.name}`);
  bossUI.hideBoss();
  
  // Generate boss loot
  const isFirstKill = !localStorage.getItem(`boss_killed_${bossData.id}`);
  if (lootManager) {
    lootManager.generateBossLoot(bossData.id, arena.position, isFirstKill);
  }
  
  // Track first kill
  if (isFirstKill) {
    localStorage.setItem(`boss_killed_${bossData.id}`, 'true');
  }
  
  // Optional: Play victory fanfare
  if (audioManager) {
    audioManager.stop('bossMusic');
    audioManager.play('victory', { volume: 0.7 });
  }
};

// Initialize boss spawner after player is ready
bossSpawner.initialize(player);

// --- Dungeon Manager System (Phase 22) ---
const dungeonManager = createDungeonManager(scene, world, player, gameManager, inputManager, audioManager);
gameManager.dungeonManager = dungeonManager;

// --- Initialize Quest System (Phase 25) ---
questManager.init({
  inventory: lootManager,
  stats: gameManager,
  scene: scene,
});
questWorldHooks.init({
  questManager: questManager,
  scene: scene,
  enemyManager: enemyManager,
  itemManager: itemManager,
  npcManager: world.npcManager,
  bossManager: bossSpawner,
  player: player,
});

// Initialize Quest UI (Phase 25 - Worker 2)
questUI.init(questManager);

// Initialize NPC Quest Givers (Phase 25 - Worker 2)
const npcQuestGivers = createNPCQuestGivers(scene);
npcQuestGivers.init(questManager);
gameManager.npcQuestGivers = npcQuestGivers;

// Initialize Quest Rewards & Reputation (Phase 25 - Worker 2)
questRewards.init(questManager, scene);

// ========== SAVE SYSTEM INITIALIZATION (Phase 26) ==========
const saveManager = getSaveManager();
const saveUI = getSaveUI();
const saveIntegration = getSaveIntegration();

// Register all systems with save manager
saveManager.init({
  gameManager,
  player: player.mesh,
  inventoryUI,
  equipmentManager,
  lootManager,
  questManager,
  questRewards,
  timeManager,
  weatherManager,
  craftingManager,
  gatheringManager,
  shopManager,
  bossSpawner,
  dungeonManager,
  spellManager,
  manaManager,
  npcManager: npcQuestGivers,
  scene,
  hud,
  questUI,
  renderer,
  camera,
  audioManager,
  terrain: world.terrain,  // For safe spawn height calculation
  world: world,            // Alternative terrain height access
});

// Initialize SaveUI with renderer for screenshots
saveUI.init(saveManager, renderer, scene, camera, audioManager);

// Initialize save integration (menus, hotkeys, autosave triggers)
saveIntegration.init(saveManager, {
  gameManager,
  player: player.mesh,
  enemyManager,
  renderer,
  scene,
  camera,
  audioManager,
  questManager,
  timeManager,
});

gameManager.saveManager = saveManager;
gameManager.saveIntegration = saveIntegration;

// Wire enemy death events to quest system
enemyManager.onEnemyDeath = (enemyType, enemyData, position) => {
  questWorldHooks.onEnemyKilled(enemyType, enemyData);
};

// Wire boss defeat events to quest system
const originalBossDefeated = bossSpawner.onBossDefeated;
bossSpawner.onBossDefeated = (bossData, arena) => {
  questWorldHooks.onBossKilled(bossData.id, bossData);
  if (originalBossDefeated) originalBossDefeated(bossData, arena);
};

// Wire item pickup events to quest system
lootManager.onItemPickup = (itemId, amount) => {
  questWorldHooks.onItemPickup(itemId, amount);
};

// Wire NPC interaction to quest system
const originalDialogueStart = dialogueManager.startDialogue.bind(dialogueManager);
dialogueManager.startDialogue = (npc) => {
  questWorldHooks.onNpcInteraction(npc.id || npc.name, npc);
  
  // Check if NPC is a quest giver (Phase 25 - Worker 2)
  if (npcQuestGivers && npcQuestGivers.getNPCById(npc.id || npc.name?.toLowerCase().replace(/\s+/g, '_'))) {
    npcQuestGivers.interactWithNPC(npc.id || npc.name?.toLowerCase().replace(/\s+/g, '_'));
    return; // Quest dialogue handles it
  }
  
  originalDialogueStart(npc);
};

// ========== MINIMAP SYSTEM (Phase 27) ==========
const minimapManager = createMinimapManager({ size: 150, padding: 15 });
minimapManager.init({
  terrain: world.terrain,
  player: player.mesh,
  camera: camera,
  enemyManager: enemyManager,
  npcManager: world.npcManager,
  questManager: questManager,
  villageManager: world.villages,
  dungeonManager: dungeonManager,
  gatheringManager: gatheringManager,
  bossSpawner: bossSpawner,
  gameManager: gameManager,
});
gameManager.minimapManager = minimapManager;

// ========== FAST TRAVEL SYSTEM (Phase 27) ==========
const fastTravelManager = createFastTravelManager();
fastTravelManager.init({
  player: player.mesh,
  gameManager: gameManager,
  saveManager: saveManager,
  dungeonManager: dungeonManager,
  enemyManager: enemyManager,
  terrain: world.terrain,
  world: world,
  audioManager: audioManager,
  minimapManager: minimapManager,
});
gameManager.fastTravelManager = fastTravelManager;

// Connect fast travel to minimap
minimapManager.setFastTravelManager(fastTravelManager);

// ========== DISCOVERY SYSTEM (Phase 27) ==========
const discoveryManager = createDiscoveryManager({ revealRadius: 50, chunkSize: 20 });
discoveryManager.init({
  player: player.mesh,
  terrain: world.terrain,
  gameManager: gameManager,
  questManager: questManager,
  villageManager: world.villages,
  dungeonManager: dungeonManager,
});
gameManager.discoveryManager = discoveryManager;

// ========== WORLD MAP UI (Phase 27) ==========
const worldMapUI = createWorldMapUI();
worldMapUI.init({
  terrain: world.terrain,
  player: player.mesh,
  discoveryManager: discoveryManager,
  questManager: questManager,
  villageManager: world.villages,
  dungeonManager: dungeonManager,
  npcManager: world.npcManager,
  enemyManager: enemyManager,
  bossSpawner: bossSpawner,
  gatheringManager: gatheringManager,
  gameManager: gameManager,
  minimapManager: minimapManager,
});
gameManager.worldMapUI = worldMapUI;

// ========== GAME TESTER (Automated Testing Framework) ==========
const gameTester = new GameTester({
  scene,
  camera,
  renderer,
  player: player.mesh,
  world,
  terrain: world.terrain,
  enemyManager,
  gameManager,
  minimapManager,
  worldMapUI,
  discoveryManager,
  fastTravelManager,
  questManager,
  saveManager,
  inventoryUI,
  combatSystem: gameManager,
  hud,
});
gameManager.gameTester = gameTester;

// --- Resize ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
  bloomPass.resolution.set(window.innerWidth, window.innerHeight);
});

// --- Game Loop ---
// Track spawn safety frames - check multiple frames to catch race conditions
// Extended to 300 frames (~5 seconds) to ensure terrain is fully loaded
// CRITICAL: These frames guarantee player/camera stay ABOVE terrain until gravity naturally brings them down
let spawnSafetyFramesRemaining = 300;  // ~5 seconds of spawn safety checks (increased from 180)
let isFirstAnimateFrame = true;  // Track very first frame for aggressive safety

function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05); // Cap delta to prevent physics explosions

  // ==== CRITICAL SPAWN SAFETY - RUNS EVERY FRAME BEFORE ANYTHING ELSE ====
  // This MUST run before cameraController.update() or any other code that might move camera
  // FIX for "green blob" bug: camera spawning inside terrain mesh in autostart mode
  {
    // Check if we're in autostart mode for extra aggressive safety
    const isAutostart = window.AUTOSTART_MODE === true;
    
    // Use MUCH higher safety margins in autostart mode to guarantee no green blob
    // The bug occurs when camera is inside terrain mesh, so we use very conservative values
    const TERRAIN_SAFETY_OFFSET = isAutostart ? 45 : 15;  // Units above terrain (much higher in autostart)
    const ABSOLUTE_MIN_CAM_Y = isAutostart ? 80 : 30;     // Absolute minimum camera Y (much higher in autostart)
    const PLAYER_OFFSET = isAutostart ? 10 : 5;           // Player stays above terrain (per task spec: 5)
    const PLAYER_FALLBACK_Y = isAutostart ? 80 : 50;      // Fallback if terrain not ready (per task spec: 50)
    
    // Force terrain generation at current positions
    if (world.terrain && world.terrain.forceGenerateAt) {
      world.terrain.forceGenerateAt(player.mesh.position.x, player.mesh.position.z);
      world.terrain.forceGenerateAt(camera.position.x, camera.position.z);
    }
    
    const getHeight = world.terrain ? (world.terrain.getHeightAt || world.terrain.getTerrainHeight) : null;
    
    // PLAYER SAFETY: Ensure player is above terrain
    // Per task spec: Use TerrainManager.getHeightAt(x,z) + 5 for safe spawn height
    if (getHeight) {
      const playerTerrainY = getHeight.call(world.terrain, player.mesh.position.x, player.mesh.position.z);
      if (!isNaN(playerTerrainY) && isFinite(playerTerrainY) && playerTerrainY > -100) {
        const minPlayerY = playerTerrainY + PLAYER_OFFSET;
        if (player.mesh.position.y < minPlayerY) {
          player.mesh.position.y = minPlayerY;
          if (player.velocity) player.velocity.y = 0;
        }
      } else if (player.mesh.position.y < PLAYER_FALLBACK_Y) {
        // Per task spec: If terrain isn't ready, use safe default (y=50)
        player.mesh.position.y = PLAYER_FALLBACK_Y;
        if (player.velocity) player.velocity.y = 0;
      }
    }
    
    // CAMERA SAFETY: Ensure camera is WELL above terrain - PRIMARY fix for green blob bug
    if (getHeight) {
      const camTerrainY = getHeight.call(world.terrain, camera.position.x, camera.position.z);
      if (!isNaN(camTerrainY) && isFinite(camTerrainY) && camTerrainY > -100) {
        const minCamY = Math.max(camTerrainY + TERRAIN_SAFETY_OFFSET, ABSOLUTE_MIN_CAM_Y);
        if (camera.position.y < minCamY) {
          console.warn(`[Main:SpawnSafety] Camera below safe height (Y=${camera.position.y.toFixed(2)}, terrain=${camTerrainY.toFixed(2)}), forcing to ${minCamY.toFixed(2)}${isAutostart ? ' [AUTOSTART]' : ''}`);
          camera.position.y = minCamY;
          if (cameraController && cameraController.currentPos) {
            cameraController.currentPos.y = minCamY;
          }
        }
      } else {
        // Terrain not ready - use absolute minimum
        if (camera.position.y < ABSOLUTE_MIN_CAM_Y) {
          console.warn(`[Main:SpawnSafety] Terrain not ready, forcing camera to ${ABSOLUTE_MIN_CAM_Y}${isAutostart ? ' [AUTOSTART]' : ''}`);
          camera.position.y = ABSOLUTE_MIN_CAM_Y;
          if (cameraController && cameraController.currentPos) {
            cameraController.currentPos.y = ABSOLUTE_MIN_CAM_Y;
          }
        }
      }
    } else {
      // No terrain reference - use absolute minimum
      if (camera.position.y < ABSOLUTE_MIN_CAM_Y) {
        camera.position.y = ABSOLUTE_MIN_CAM_Y;
        if (cameraController && cameraController.currentPos) {
          cameraController.currentPos.y = ABSOLUTE_MIN_CAM_Y;
        }
      }
    }
  }

  // FIRST FRAME SAFETY: Additional aggressive check on first frame only
  if (isFirstAnimateFrame) {
    isFirstAnimateFrame = false;
    console.log(`[Main:FirstFrame] Camera position: (${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)})`);
    console.log(`[Main:FirstFrame] Player position: (${player.mesh.position.x.toFixed(2)}, ${player.mesh.position.y.toFixed(2)}, ${player.mesh.position.z.toFixed(2)})`);
  }

  // Spawn safety frames counter - extends camera controller's safety period
  // The main safety check now runs EVERY frame at the start of animate()
  // This counter just provides logging/tracking
  if (spawnSafetyFramesRemaining > 0) {
    spawnSafetyFramesRemaining--;
  }

  inputManager.update(delta);
  
  // Potion hotkeys (Ctrl+1 = Health, Ctrl+2 = Stamina, Ctrl+3 = Mana)
  if (!gameManager.isDead) {
    if (inputManager.useHealthPotion) {
      lootManager.useItem('health-potion');
      if (audioManager) audioManager.play('itemPickup', { volume: 0.5 });
    }
    if (inputManager.useStaminaPotion) {
      lootManager.useItem('stamina-potion');
      if (audioManager) audioManager.play('itemPickup', { volume: 0.5 });
    }
    if (inputManager.useManaPotion) {
      lootManager.useItem('mana-potion');
      if (audioManager) audioManager.play('itemPickup', { volume: 0.5 });
    }
  }
  
  // Inventory UI toggle (I key) - handled in inventoryUI.update()
  
  // Check hitstop - pause game entities during freeze frame
  const inHitstop = gameManager.updateHitstop(delta);
  
  if (!inHitstop) {
    // Normal game update when not in hitstop
    // Don't update player movement when any UI is open
    if (!shopManager.isShopOpen() && !inventoryUI.isOpen && !dialogueManager.isDialogueActive()) {
      player.update(delta);
    }
    enemyManager.update(delta, player);
    particleManager.update(delta);
    
    // Update terrain chunks based on player position (infinite world)
    if (world.terrain && world.terrain.update) {
      world.terrain.update(player.mesh.position.x, player.mesh.position.z);
    }
    
    // Update foliage chunks (trees, grass, bushes) for infinite world
    if (world.foliage && world.foliage.update) {
      world.foliage.update(player.mesh.position.x, player.mesh.position.z);
    }
    
    // Update villages for infinite world
    if (world.villages && world.villages.update) {
      world.villages.update(player.mesh.position.x, player.mesh.position.z);
    }
    
    // Update ruins for infinite world
    if (world.ruinsManager && world.ruinsManager.update) {
      world.ruinsManager.update(player.mesh.position.x, player.mesh.position.z);
    }
    
    // Update caves for infinite world
    if (world.caveManager && world.caveManager.update) {
      world.caveManager.update(player.mesh.position.x, player.mesh.position.z);
    }
    
    // Update chests for infinite world (placement + interaction)
    if (chestManager && chestManager.update) {
      chestManager.update(player.mesh.position.x, player.mesh.position.z, delta);
    }
    
    // Update dungeon manager (Phase 22) - handles dungeon transitions, entrance prompts
    if (dungeonManager) {
      dungeonManager.update(delta);
    }
    
    // Update boss spawner (Phase 21) - handles boss arenas, spawns, proximity triggers
    if (bossSpawner) {
      bossSpawner.update(delta);
      
      // Update BossUI with boss health if in a fight
      const currentBoss = bossSpawner.getCurrentBossFight();
      if (currentBoss && bossUI) {
        bossUI.updateHealth(currentBoss.health, currentBoss.data.stats.maxHealth);
        bossUI.updatePosture(currentBoss.posture, currentBoss.data.stats.maxPosture);
        
        // Check for phase changes
        const healthPercent = currentBoss.health / currentBoss.data.stats.maxHealth;
        const newPhase = currentBoss.data.phases.filter(p => healthPercent <= p.threshold).pop();
        if (newPhase && newPhase.id !== currentBoss.currentPhase) {
          bossSpawner.updateBossPhase(currentBoss.id, newPhase.id, newPhase.visualChange);
          bossUI.setPhase(newPhase.id, currentBoss.data.phases.length);
        }
      }
    }
    
    // Boss arena update (ritual circle damage pulse in Phase 2)
    if (world.bossArena && world.bossArena.active) {
      const arenaDamage = world.updateBossArena(delta, player.mesh.position);
      if (arenaDamage > 0 && !player.isInvincible) {
        gameManager.takeDamage(arenaDamage, 'magical', 0, false);
        player.flashDamage();
        if (hud) {
          hud.flashDamage(0.5);
        }
        if (cameraController) {
          cameraController.shakeLight();
        }
        itemManager.showNotification('Ritual Circle burns!', 'damage');
      }
    }
  } else {
    // During hitstop: still update camera and particles (for effect continuity)
    particleManager.update(delta * 0.1); // Slow-mo particles during hitstop
  }
  
  // These always update regardless of hitstop
  cameraController.update(delta);
  
  // POST-CAMERA-UPDATE SAFETY: Ensure camera didn't get lerped into terrain
  // Keeps camera at least 10 units above terrain at its position (increased from 3)
  if (world.terrain) {
    const camTerrainY = world.terrain.getTerrainHeight(camera.position.x, camera.position.z);
    if (!isNaN(camTerrainY) && isFinite(camTerrainY) && camTerrainY > -100) {
      const minCamY = Math.max(camTerrainY + 10, 30);  // 10 units above terrain, min 30 absolute
      if (camera.position.y < minCamY) {
        camera.position.y = minCamY;
        if (cameraController && cameraController.currentPos) {
          cameraController.currentPos.y = minCamY;
        }
      }
    }
  }
  
  itemManager.update(player.mesh.position);
  lootManager.update(player.mesh.position);
  
  // Weapon system update
  weaponManager.update(delta);
  
  // Attack animation update
  if (attackAnimator) {
    attackAnimator.update(delta);
  }
  
  // Weapon glow animation update
  const elapsedTime = clock.elapsedTime;
  equipmentManager.updateWeaponGlow(delta, elapsedTime);
  
  // Weapon switching hotkeys (when not in UI) - 1-4 keys or Q to cycle
  if (!gameManager.isDead && !shopManager.isShopOpen() && !inventoryUI.isOpen && !dialogueManager.isDialogueActive()) {
    if (inputManager.cycleWeapon) {
      weaponManager.cycleWeapon();
      if (audioManager) audioManager.play('itemPickup', { volume: 0.4 });
    }
    if (inputManager.weaponSlot1) {
      weaponManager.switchToSlot(0); // Index 0 = slot 1
      if (audioManager) audioManager.play('itemPickup', { volume: 0.4 });
    }
    if (inputManager.weaponSlot2) {
      weaponManager.switchToSlot(1); // Index 1 = slot 2
      if (audioManager) audioManager.play('itemPickup', { volume: 0.4 });
    }
    if (inputManager.weaponSlot3) {
      weaponManager.switchToSlot(2); // Index 2 = slot 3
      if (audioManager) audioManager.play('itemPickup', { volume: 0.4 });
    }
    if (inputManager.weaponSlot4) {
      weaponManager.switchToSlot(3); // Index 3 = slot 4
      if (audioManager) audioManager.play('itemPickup', { volume: 0.4 });
    }
    
    // Spell casting inputs (F1-F6 for direct cast, F to cast selected)
    // Cannot cast while attacking or rolling
    if (!gameManager.isAttacking && !gameManager.isRolling) {
      if (inputManager.spellSlot1) spellCaster.castFromSlot(0);
      if (inputManager.spellSlot2) spellCaster.castFromSlot(1);
      if (inputManager.spellSlot3) spellCaster.castFromSlot(2);
      if (inputManager.spellSlot4) spellCaster.castFromSlot(3);
      if (inputManager.spellSlot5) spellCaster.castFromSlot(4);
      if (inputManager.spellSlot6) spellCaster.castFromSlot(5);
      
      // Cast currently selected spell with F key
      if (inputManager.castSpell) {
        spellCaster.castFromSlot(spellManager.activeSlot);
      }
    }
    
    // Spell slot selection (Shift + 1-6 to select without casting)
    if (inputManager.selectSpellSlot1) spellManager.selectSlot(0);
    if (inputManager.selectSpellSlot2) spellManager.selectSlot(1);
    if (inputManager.selectSpellSlot3) spellManager.selectSlot(2);
    if (inputManager.selectSpellSlot4) spellManager.selectSlot(3);
    if (inputManager.selectSpellSlot5) spellManager.selectSlot(4);
    if (inputManager.selectSpellSlot6) spellManager.selectSlot(5);
  }
  equipmentManager.updateEquipmentDrops(player.mesh.position, delta);
  
  // NPC interaction system (prompts, facing, labels)
  // Don't show interaction prompts if any UI is open
  if (!gameManager.isDead && !crucibleUI.isOpen && !statsUI.isOpen && !inventoryUI.isOpen && !craftingUI.isOpen && !shopManager.isShopOpen() && !dialogueManager.isDialogueActive()) {
    interactionManager.update(player.mesh.position, delta);
  }
  
  // Gathering system (Phase 23) - update nodes and interaction
  if (!gameManager.isDead && !crucibleUI.isOpen && !statsUI.isOpen && !inventoryUI.isOpen && !craftingUI.isOpen && !shopManager.isShopOpen() && !dialogueManager.isDialogueActive()) {
    gatheringManager.update(player.mesh.position.x, player.mesh.position.z, delta);
  }
  
  // Crafting station proximity check (Phase 23)
  if (world.villages && craftingManager) {
    const nearbyStation = world.villages.getNearbyCraftingStation(
      player.mesh.position.x, 
      player.mesh.position.z, 
      3.5
    );
    if (nearbyStation) {
      craftingManager.setNearbyStation(nearbyStation, nearbyStation);
      // Show tutorial hint if first time near a station
      if (!localStorage.getItem('ashen-crafting-tutorial-shown')) {
        craftingUI.showTutorialHint(nearbyStation.name);
      }
    } else {
      craftingManager.clearNearbyStation();
    }
  }
  
  // Update dialogue manager
  dialogueManager.update(delta);
  
  // Close interaction mode when shop closes
  if (!shopManager.isShopOpen() && interactionManager.interactionMode === 'shop') {
    interactionManager.closeInteraction();
  }
  
  inventoryUI.update();
  craftingUI.update();
  hud.update();
  crucibleUI.update();
  statsUI.update();
  gameManager.update(delta);
  manaManager.update(delta); // Phase 20: Mana regeneration
  spellManager.update(delta); // Phase 20: Spell cooldowns and buffs
  spellCaster.update(delta); // Phase 20: Spell casting, projectiles, effects
  spellEffects.update(delta); // Phase 20: Visual spell effects (auras, trails)
  bossUI.update(delta); // Phase 21: Boss health bar and phase indicators
  
  // Phase 24: Day/Night & Weather System updates
  // Pause time during menus/dialogue
  const timeIsPaused = shopManager.isShopOpen() || inventoryUI.isOpen || dialogueManager.isDialogueActive() || crucibleUI.isOpen || statsUI.isOpen || craftingUI.isOpen;
  if (timeIsPaused) {
    timeManager.pause();
  } else {
    timeManager.resume();
  }
  timeManager.update(delta);
  dayNightLighting.update(delta, player.mesh.position);
  weatherManager.update(delta, player.mesh.position);
  rareEventManager.update(delta, player.mesh.position);
  
  // Phase 24: Gameplay integration (debuffs, detection modifiers, etc.)
  // Get campfire positions from world for warmth checks
  const campfires = world.villages ? world.villages.getCampfires() : [];
  timeWeatherGameplay.update(delta, player.mesh.position, campfires);
  
  // Phase 25: Quest system update (exploration markers, location tracking)
  questWorldHooks.update(delta, player.mesh.position);
  questManager.updateQuestUI();
  
  // Phase 25 (Worker 2): NPC quest giver markers and animations
  if (npcQuestGivers) {
    npcQuestGivers.update(delta);
  }
  
  // Update quest UI player position for distance sorting
  if (questUI) {
    questUI.updatePlayerPosition(player.mesh.position);
  }
  
  audioManager.updateListener();
  floatingText.update(delta);
  
  // Phase 27: Minimap update
  if (minimapManager) {
    minimapManager.update(delta);
  }
  
  // Phase 27: Discovery system update (fog of war, POI discovery)
  if (discoveryManager) {
    discoveryManager.update(delta);
  }

  // Check for bloodstain collection
  gameManager.collectBloodstain();
  
  // Check for hidden wall hits when attacking
  if (player.activeAttack) {
    const hitWall = world.checkHiddenWallHit(player.activeAttack.position, player.activeAttack.range);
    if (hitWall && !hitWall.revealed) {
      world.revealHiddenWall(hitWall.id);
    }
  }
  
  // Check for door interactions
  const nearDoor = world.getNearbyDoor(player.mesh.position);
  const doorPrompt = document.getElementById('door-prompt');
  const doorNameEl = document.getElementById('door-name');
  
  if (nearDoor && !crucibleUI.isOpen) {
    doorPrompt.style.display = 'block';
    doorNameEl.textContent = nearDoor.name;
    
    // Check if player has key
    if (itemManager.hasKey(nearDoor.id)) {
      doorPrompt.classList.remove('locked');
      if (inputManager.interact) {
        world.tryOpenDoor(nearDoor.id, itemManager);
        itemManager.showNotification(`${nearDoor.name} Opened`);
      }
    } else {
      doorPrompt.classList.add('locked');
      doorNameEl.textContent = `${nearDoor.name} (Locked)`;
    }
  } else {
    doorPrompt.style.display = 'none';
  }
  
  // Check for ladder interactions
  const nearLadder = world.getNearbyLadder(player.mesh.position);
  const ladderPrompt = document.getElementById('ladder-prompt');
  const ladderNameEl = document.getElementById('ladder-name');
  
  if (nearLadder && !crucibleUI.isOpen) {
    ladderPrompt.style.display = 'block';
    ladderNameEl.textContent = nearLadder.id === 'shortcut-ladder' ? 'to Cathedral' : 'Ladder';
    
    if (inputManager.interact) {
      // Teleport player to ladder destination
      if (nearLadder.id === 'shortcut-ladder') {
        // Teleport to left chapel in cathedral (above the shortcut)
        player.mesh.position.set(-15, 0, -12);
        player.velocity.set(0, 0, 0);
        itemManager.showNotification('Climbed to Cathedral');
        audioManager.playSound('footstep'); // Climbing sound
      }
    }
  } else {
    ladderPrompt.style.display = 'none';
  }
  
  // Check for shortcut door interactions
  const nearShortcut = world.getNearbyShortcut(player.mesh.position);
  const shortcutPrompt = document.getElementById('shortcut-prompt');
  const shortcutActionEl = document.getElementById('shortcut-action');
  const shortcutNameEl = document.getElementById('shortcut-name');
  
  if (nearShortcut && !crucibleUI.isOpen) {
    shortcutPrompt.style.display = 'block';
    shortcutActionEl.textContent = 'remove bar from';
    shortcutNameEl.textContent = 'Shortcut Door';
    
    if (inputManager.interact) {
      if (world.unlockShortcut(nearShortcut.id)) {
        itemManager.showNotification('Shortcut Unlocked — Path to Cathedral opened!');
        audioManager.playSound('hit'); // Unlocking sound
      }
    }
  } else {
    shortcutPrompt.style.display = 'none';
  }
  
  // Check for illusory wall walk-through (reveal when player walks into it)
  const insideWall = world.checkInsideIllusoryWall(player.mesh.position);
  if (insideWall && !insideWall.revealed) {
    world.revealHiddenWall(insideWall.id);
    
    // Show notification
    const illusoryNotif = document.getElementById('illusory-notification');
    illusoryNotif.style.display = 'block';
    setTimeout(() => {
      illusoryNotif.style.display = 'none';
    }, 2500);
    
    audioManager.playSound('hit'); // Reveal sound effect
  }

  // Animate bloodstain (pulsing glow)
  if (gameManager.bloodstainMesh) {
    const pulse = 0.6 + Math.sin(Date.now() * 0.005) * 0.3;
    gameManager.bloodstainMesh.material.opacity = pulse;
  }

  // FINAL SAFETY CHECK: Ensure player and camera are above terrain before render
  // This is the LAST line of defense against the "green blob" bug
  // Per task spec: Use TerrainManager.getHeightAt(x,z) + 5 for player
  // If terrain not ready, use safe default (y=50 for player)
  {
    // Check if we're in autostart mode for extra aggressive safety
    const isAutostart = window.AUTOSTART_MODE === true;
    
    const getHeightFinal = world.terrain ? (world.terrain.getHeightAt || world.terrain.getTerrainHeight) : null;
    
    // CRITICAL: Use VERY conservative values in autostart mode
    // The green blob bug means camera is inside terrain - we MUST guarantee camera is well above
    const PLAYER_OFFSET = isAutostart ? 10 : 5;           // Per task spec: terrain height + 5 (higher in autostart)
    const CAMERA_OFFSET = isAutostart ? 45 : 15;          // MUCH higher for camera safety in autostart
    const PLAYER_FALLBACK_Y = isAutostart ? 80 : 50;      // Per task spec: safe default (higher in autostart)
    const MIN_CAMERA_Y = isAutostart ? 80 : 30;           // MUCH higher minimum in autostart mode
    
    if (getHeightFinal) {
      // Check player - use TerrainManager.getHeightAt(x,z) + 5
      const playerTerrainY = getHeightFinal.call(world.terrain, player.mesh.position.x, player.mesh.position.z);
      if (!isNaN(playerTerrainY) && isFinite(playerTerrainY) && playerTerrainY > -100) {
        const minPlayerY = playerTerrainY + PLAYER_OFFSET;
        if (player.mesh.position.y < minPlayerY) {
          player.mesh.position.y = minPlayerY;
          if (player.velocity) player.velocity.y = 0;
        }
      } else if (player.mesh.position.y < PLAYER_FALLBACK_Y) {
        player.mesh.position.y = PLAYER_FALLBACK_Y;
        if (player.velocity) player.velocity.y = 0;
      }
      
      // Check camera - CRITICAL to prevent "green blob" bug
      const camTerrainY = getHeightFinal.call(world.terrain, camera.position.x, camera.position.z);
      if (!isNaN(camTerrainY) && isFinite(camTerrainY) && camTerrainY > -100) {
        const minCamY = Math.max(camTerrainY + CAMERA_OFFSET, MIN_CAMERA_Y);
        if (camera.position.y < minCamY) {
          camera.position.y = minCamY;
          if (cameraController && cameraController.currentPos) {
            cameraController.currentPos.y = minCamY;
          }
        }
      } else if (camera.position.y < MIN_CAMERA_Y) {
        camera.position.y = MIN_CAMERA_Y;
        if (cameraController && cameraController.currentPos) {
          cameraController.currentPos.y = MIN_CAMERA_Y;
        }
      }
    } else {
      // No terrain available - use safe fallbacks (higher in autostart mode)
      const fallbackPlayerY = 50;
      const fallbackCameraY = MIN_CAMERA_Y;
      
      if (player.mesh.position.y < fallbackPlayerY) {
        player.mesh.position.y = fallbackPlayerY;
        if (player.velocity) player.velocity.y = 0;
      }
      if (camera.position.y < fallbackCameraY) {
        camera.position.y = fallbackCameraY;
        if (cameraController && cameraController.currentPos) {
          cameraController.currentPos.y = fallbackCameraY;
        }
      }
    }
  }

  // Render with post-processing
  composer.render();
}

// ========== PRE-RENDER INITIALIZATION (Autostart Spawn Safety) ==========
// This runs ONCE before the first frame to guarantee safe positions
// Critical for ?autostart=true mode where terrain/player might not be synced
//
// FIX: The "green blob" bug happens when camera renders INSIDE terrain mesh.
// Solution: Calculate Y position AFTER terrain generates, use TerrainManager.getHeightAt(x,z) + 5.
// If terrain isn't ready, wait for it or use a safe default (y=50).
(function initializeSpawnSafety() {
  // Check if we're in autostart mode - use extra aggressive safety
  const isAutostart = window.AUTOSTART_MODE === true;
  
  // CRITICAL FIX: In autostart mode, use MUCH higher safety margins
  // The green blob bug occurs when camera spawns inside terrain mesh
  // We use extremely conservative values to guarantee camera is ALWAYS visible
  const SAFE_OFFSET_ABOVE_TERRAIN = isAutostart ? 10 : 5;   // Spawn 10 units above terrain in autostart (per task spec: 5)
  const FALLBACK_SAFE_Y = isAutostart ? 80 : 50;            // Higher safe default for autostart (per task spec: 50)
  const CAMERA_OFFSET_ABOVE_PLAYER = isAutostart ? 50 : 20; // Much higher in autostart mode
  const MIN_CAMERA_HEIGHT = isAutostart ? 80 : 30;          // MUCH higher minimum in autostart mode
  const CAMERA_TERRAIN_OFFSET = isAutostart ? 40 : 15;      // Camera well above terrain
  
  if (isAutostart) {
    console.log('[Main:Init] AUTOSTART MODE DETECTED - Using aggressive spawn safety');
  }
  
  // Step 1: Force terrain chunk generation at player position AND wide surrounding area
  // This ensures terrain data exists BEFORE we query height - generate 5x5 grid of chunks
  const px = player.mesh.position.x;
  const pz = player.mesh.position.z;
  
  if (world.terrain) {
    // Force generate chunks in a 5x5 grid around player to ensure full coverage
    if (world.terrain.forceGenerateAt) {
      for (let dx = -2; dx <= 2; dx++) {
        for (let dz = -2; dz <= 2; dz++) {
          world.terrain.forceGenerateAt(px + dx * 64, pz + dz * 64);
        }
      }
    } else if (world.terrain.update) {
      // Fallback: reset tracking to force update
      world.terrain.lastPlayerChunkX = null;
      world.terrain.lastPlayerChunkZ = null;
      world.terrain.update(px, pz);
    }
  }
  
  // Step 2: Query terrain height at player position using getHeightAt (per task requirements)
  let terrainY = 0;
  let terrainReady = false;
  
  // Use TerrainManager.getHeightAt(x,z) per task spec - try both method names
  if (world.terrain) {
    const getHeight = world.terrain.getHeightAt || world.terrain.getTerrainHeight;
    if (getHeight) {
      const ty = getHeight.call(world.terrain, px, pz);
      if (!isNaN(ty) && isFinite(ty) && ty > -100) {
        terrainY = ty;
        terrainReady = true;
      }
    }
  }
  
  // Step 3: Calculate safe player Y position
  // Use TerrainManager.getHeightAt(x,z) + 5 for safe spawn height above terrain (per task spec)
  // If terrain isn't ready when player spawns, use safe default (y=50) (per task spec)
  let targetPlayerY;
  if (terrainReady) {
    targetPlayerY = terrainY + SAFE_OFFSET_ABOVE_TERRAIN;
    console.log(`[Main:Init] Terrain ready at player pos, using height ${terrainY.toFixed(2)} + ${SAFE_OFFSET_ABOVE_TERRAIN} = ${targetPlayerY.toFixed(2)}`);
  } else {
    console.warn('[Main:Init] Terrain not ready, using fallback spawn height (y=50) per task spec');
    targetPlayerY = FALLBACK_SAFE_Y;
  }
  
  // Ensure player is NEVER below minimum safe height
  targetPlayerY = Math.max(targetPlayerY, SAFE_OFFSET_ABOVE_TERRAIN);
  
  // Set player position IMMEDIATELY
  console.log(`[Main:Init] Player spawn: Y=${player.mesh.position.y.toFixed(2)} -> ${targetPlayerY.toFixed(2)}${isAutostart ? ' (AUTOSTART MODE)' : ''}`);
  player.mesh.position.y = targetPlayerY;
  if (player.velocity) player.velocity.y = 0;
  if (player.grounded !== undefined) player.grounded = true;
  
  // Step 4: Position camera WELL above player - this is critical for autostart
  const camDistance = cameraController?.distance || 6;
  const camYaw = cameraController?.yaw || 0;
  const camPitch = cameraController?.pitch || 0.3;
  
  const offsetX = Math.sin(camYaw) * camDistance * Math.cos(camPitch);
  const offsetZ = Math.cos(camYaw) * camDistance * Math.cos(camPitch);
  const offsetY = camDistance * Math.sin(camPitch);
  
  const targetCamX = px + offsetX;
  const targetCamZ = pz + offsetZ;
  
  // Start with camera well above player
  let targetCamY = targetPlayerY + CAMERA_OFFSET_ABOVE_PLAYER + offsetY;
  
  // Force generate terrain at camera position too
  if (world.terrain && world.terrain.forceGenerateAt) {
    world.terrain.forceGenerateAt(targetCamX, targetCamZ);
  }
  
  // Check terrain height at camera position and ensure camera is above it
  if (world.terrain) {
    const getHeight = world.terrain.getHeightAt || world.terrain.getTerrainHeight;
    if (getHeight) {
      const camTerrainY = getHeight.call(world.terrain, targetCamX, targetCamZ);
      if (!isNaN(camTerrainY) && isFinite(camTerrainY) && camTerrainY > -100) {
        // Ensure camera is well above terrain at camera position
        const minCamAboveTerrain = camTerrainY + CAMERA_TERRAIN_OFFSET;
        if (targetCamY < minCamAboveTerrain) {
          console.log(`[Main:Init] Camera would be inside terrain (${targetCamY.toFixed(2)} < ${minCamAboveTerrain.toFixed(2)}), adjusting`);
          targetCamY = minCamAboveTerrain;
        }
      }
    }
  }
  
  // CRITICAL: Ensure camera is NEVER below absolute minimum height
  // This is the PRIMARY safeguard against the "green blob" bug
  targetCamY = Math.max(targetCamY, MIN_CAMERA_HEIGHT);
  
  console.log(`[Main:Init] Camera spawn: Y=${camera.position.y.toFixed(2)} -> ${targetCamY.toFixed(2)}`);
  
  // Set camera position DIRECTLY - bypass any lerping
  camera.position.set(targetCamX, targetCamY, targetCamZ);
  
  // CRITICAL: Update camera controller's internal state to match - prevent lerp from bad pos
  if (cameraController) {
    // Set currentPos to match so lerp doesn't move camera
    if (cameraController.currentPos) {
      cameraController.currentPos.set(targetCamX, targetCamY, targetCamZ);
    }
    // Skip first-frame lerp since we positioned manually
    cameraController._firstFrame = false;
    // Enable aggressive terrain clamping for extended safety period
    // In autostart mode, use even longer safety period (10 seconds)
    cameraController._spawnSafetyFrames = isAutostart ? 600 : 300;
    cameraController._terrainClampOffset = isAutostart ? 30 : 20;
    cameraController._minCameraY = MIN_CAMERA_HEIGHT;
  }
  
  // Point camera at player
  camera.lookAt(px, targetPlayerY + 1.5, pz);
  camera.updateProjectionMatrix();
  camera.updateMatrixWorld(true);
  
  // IMPORTANT: Do a pre-render to "warm up" the scene before real animation starts
  // This ensures all positions are correctly set before first visible frame
  renderer.render(scene, camera);
  
  console.log(`[Main:Init] Spawn complete: player=(${px.toFixed(1)}, ${targetPlayerY.toFixed(1)}, ${pz.toFixed(1)}), camera=(${targetCamX.toFixed(1)}, ${targetCamY.toFixed(1)}, ${targetCamZ.toFixed(1)})${isAutostart ? ' [AUTOSTART]' : ''}`);
})();

animate();

// Export for debugging
window.gameManager = gameManager;
window.player = player;
window.world = world;
window.itemManager = itemManager;
window.lootManager = lootManager;
window.equipmentManager = equipmentManager;
window.inventoryUI = inventoryUI;
window.audioManager = audioManager;
window.particleManager = particleManager;
window.interactionManager = interactionManager;
window.shopManager = shopManager;
window.dialogueManager = dialogueManager;
window.attackAnimator = attackAnimator;
window.weaponManager = weaponManager;
window.manaManager = manaManager;
window.spellManager = spellManager;
window.spellCaster = spellCaster;
window.bossUI = bossUI;
window.dungeonManager = dungeonManager;
window.timeManager = timeManager;
window.rareEventManager = rareEventManager;
window.dayNightLighting = dayNightLighting;
window.weatherManager = weatherManager;
window.gatheringManager = gatheringManager;
window.craftingManager = craftingManager;
window.craftingUI = craftingUI;
window.timeWeatherGameplay = timeWeatherGameplay;
window.questManager = questManager;
window.questWorldHooks = questWorldHooks;
window.questUI = questUI;
window.questRewards = questRewards;
window.npcQuestGivers = npcQuestGivers;
window.bossSpawner = bossSpawner;
window.saveManager = saveManager;
window.saveIntegration = saveIntegration;
window.saveUI = saveUI;
window.minimapManager = minimapManager;
window.fastTravelManager = fastTravelManager;

// Initialize equipment visuals after player is created
gameManager.playerMesh = player.mesh;
equipmentManager.applyEquipmentStats();
equipmentManager.updateWeaponVisual();
