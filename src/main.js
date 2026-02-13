import * as THREE from 'three';
import { GameManager } from './systems/GameManager.js';
import { Player } from './entities/Player.js';
import { EnemyManager } from './entities/EnemyManager.js';
import { World } from './world/World.js';
import { InputManager } from './systems/InputManager.js';
import { HUD } from './ui/HUD.js';
import { CameraController } from './systems/CameraController.js';

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
const hud = new HUD(gameManager);

// --- World ---
const world = new World(scene);

// --- Entities ---
const player = new Player(scene, gameManager, inputManager);
const cameraController = new CameraController(camera, player.mesh, inputManager);
player.setCameraController(cameraController); // Wire camera controller for movement direction
const enemyManager = new EnemyManager(scene, gameManager, player);

// --- Wire Up GameManager ---
gameManager.setCheckpoint(new THREE.Vector3(0, 0, 5));
gameManager.setEntities(player, enemyManager, scene);

// --- Wire HUD to EnemyManager for boss bar ---
hud.setEnemyManager(enemyManager);

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
  hud.update();
  gameManager.update(delta);

  // Check for bloodstain collection
  gameManager.collectBloodstain();

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
