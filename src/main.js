import * as THREE from 'three';
import { GameManager } from './systems/GameManager.js';
import { Player } from './entities/Player.js';
import { EnemyManager } from './entities/EnemyManager.js';
import { World } from './world/World.js';
import { InputManager } from './systems/InputManager.js';
import { ItemManager } from './systems/ItemManager.js';
import { HUD } from './ui/HUD.js';
import { CrucibleUI } from './ui/CrucibleUI.js';
import { CameraController } from './systems/CameraController.js';
import { AudioManager } from './systems/AudioManager.js';

// --- Core Setup ---
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.8;
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x0a0a14, 0.015);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);

// --- Systems ---
const clock = new THREE.Clock();
const gameManager = new GameManager();
const inputManager = new InputManager(renderer.domElement);
const audioManager = new AudioManager(camera);
const hud = new HUD(gameManager);

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

// --- Entities ---
const player = new Player(scene, gameManager, inputManager);
const cameraController = new CameraController(camera, player.mesh, inputManager);
player.setCameraController(cameraController); // Wire camera controller for movement direction
const enemyManager = new EnemyManager(scene, gameManager, player, world);

// --- Wire Up GameManager ---
gameManager.setCheckpoint(world.bonfirePosition.clone());
gameManager.setEntities(player, enemyManager, scene);
gameManager.bonfirePosition = world.bonfirePosition;
gameManager.audioManager = audioManager;

// --- Wire HUD to EnemyManager for boss bar ---
hud.setEnemyManager(enemyManager);

// --- Crucible UI (Infusion menu) ---
const crucibleUI = new CrucibleUI(gameManager, inputManager, player);

// --- Resize ---
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// --- Game Loop ---
function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05); // Cap delta to prevent physics explosions

  inputManager.update(delta);
  player.update(delta);
  enemyManager.update(delta, player);
  cameraController.update(delta);
  itemManager.update(player.mesh.position);
  hud.update();
  crucibleUI.update();
  gameManager.update(delta);
  audioManager.updateListener();

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

  // Animate bloodstain (pulsing glow)
  if (gameManager.bloodstainMesh) {
    const pulse = 0.6 + Math.sin(Date.now() * 0.005) * 0.3;
    gameManager.bloodstainMesh.material.opacity = pulse;
  }

  renderer.render(scene, camera);
}

animate();

// Export for debugging
window.gameManager = gameManager;
window.player = player;
window.world = world;
window.itemManager = itemManager;
window.audioManager = audioManager;
