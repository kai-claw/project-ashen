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

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(0, 5, 15);
camera.lookAt(0, 0, 0);

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
gameManager.timeManager = timeManager;
gameManager.dayNightLighting = dayNightLighting;
gameManager.weatherManager = weatherManager;

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

// --- Resize ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  composer.setSize(window.innerWidth, window.innerHeight);
  bloomPass.resolution.set(window.innerWidth, window.innerHeight);
});

// --- Game Loop ---
function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05); // Cap delta to prevent physics explosions

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
  
  audioManager.updateListener();
  floatingText.update(delta);

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

  // Render with post-processing
  composer.render();
}

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
window.dayNightLighting = dayNightLighting;
window.weatherManager = weatherManager;

// Initialize equipment visuals after player is created
gameManager.playerMesh = player.mesh;
equipmentManager.applyEquipmentStats();
equipmentManager.updateWeaponVisual();
