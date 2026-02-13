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
import { HUD } from './ui/HUD.js';
import { CrucibleUI } from './ui/CrucibleUI.js';
import { CameraController } from './systems/CameraController.js';
import { AudioManager } from './systems/AudioManager.js';
import { ParticleManager } from './systems/ParticleManager.js';

// Color grading + vignette shader for cinematic feel
const ColorGradingShader = {
  uniforms: {
    tDiffuse: { value: null },
    brightness: { value: 0.05 },
    contrast: { value: 1.15 },
    saturation: { value: 1.1 },
    vignetteIntensity: { value: 0.35 },
    vignetteRadius: { value: 0.85 },
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
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.6; // Brighter exposure
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
// Atmospheric fog - subtle, doesn't obscure gameplay
scene.fog = new THREE.FogExp2(0x0a0812, 0.006);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);

// --- Post-Processing Setup ---
const composer = new EffectComposer(renderer);

// Base render pass
const renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

// Bloom pass - makes emissive materials glow beautifully
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0.5,   // strength - subtle but visible
  0.4,   // radius - soft glow spread
  0.85   // threshold - only bright/emissive parts bloom
);
composer.addPass(bloomPass);

// Color grading + vignette pass
const colorGradingPass = new ShaderPass(ColorGradingShader);
composer.addPass(colorGradingPass);

// --- Systems ---
const clock = new THREE.Clock();
const gameManager = new GameManager();
const inputManager = new InputManager(renderer.domElement);
const audioManager = new AudioManager(camera);
const particleManager = new ParticleManager(scene);
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
const enemyManager = new EnemyManager(scene, gameManager, player, world, particleManager);

// --- Wire Up GameManager ---
gameManager.setCheckpoint(world.bonfirePosition.clone());
gameManager.setEntities(player, enemyManager, scene, camera);
gameManager.bonfirePosition = world.bonfirePosition;
gameManager.audioManager = audioManager;
gameManager.particleManager = particleManager;

// --- Wire HUD to EnemyManager for boss bar ---
hud.setEnemyManager(enemyManager);

// --- Crucible UI (Infusion menu) ---
const crucibleUI = new CrucibleUI(gameManager, inputManager, player);

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
  player.update(delta);
  enemyManager.update(delta, player);
  cameraController.update(delta);
  itemManager.update(player.mesh.position);
  hud.update();
  crucibleUI.update();
  gameManager.update(delta);
  audioManager.updateListener();
  particleManager.update(delta);

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

  composer.render();
}

animate();

// Export for debugging
window.gameManager = gameManager;
window.player = player;
window.world = world;
window.itemManager = itemManager;
window.audioManager = audioManager;
window.particleManager = particleManager;
