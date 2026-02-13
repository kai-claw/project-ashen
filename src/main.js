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
    brightness: { value: 0.3 },
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
renderer.toneMappingExposure = 2.0; // Much brighter exposure
renderer.outputColorSpace = THREE.SRGBColorSpace; // Required for proper color output in Three.js r152+
document.body.appendChild(renderer.domElement);

// DEBUG: Log WebGL capabilities
console.log('=== WebGL DEBUG ===');
console.log('WebGL Version:', renderer.capabilities.isWebGL2 ? 'WebGL2' : 'WebGL1');
console.log('Max Texture Size:', renderer.capabilities.maxTextureSize);
console.log('Canvas element:', renderer.domElement);
console.log('Canvas size:', renderer.domElement.width, 'x', renderer.domElement.height);
console.log('Canvas in DOM:', document.body.contains(renderer.domElement));
console.log('==================');

// DEBUG: Listen for WebGL context loss
renderer.domElement.addEventListener('webglcontextlost', (e) => {
  console.error('!!! WebGL CONTEXT LOST !!!', e);
});

// DEBUG: Check for WebGL errors after setup
const gl = renderer.getContext();
const glError = gl.getError();
if (glError !== gl.NO_ERROR) {
  console.error('!!! WebGL ERROR after setup:', glError);
} else {
  console.log('WebGL: No errors after initial setup');
}

const scene = new THREE.Scene();
// Atmospheric fog - very subtle, doesn't obscure gameplay
scene.fog = new THREE.FogExp2(0x1a1828, 0.003);

// DEBUG: Set scene background to dark blue so we can distinguish "rendering but empty" from "not rendering"
// If we see dark blue: renderer works but scene has no visible content
// If we see black (#0a0a0f from body): renderer canvas might not be displaying
scene.background = new THREE.Color(0x101030);
console.log('DEBUG: Scene background set to dark blue (0x101030)');

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
// Initialize camera position to see the scene (will be overridden by CameraController)
camera.position.set(0, 5, 15);
camera.lookAt(0, 0, 0);

// --- Post-Processing Setup ---
// Create a proper render target for the composer to avoid black screen issues
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

// DEBUG: Start with post-processing DISABLED to diagnose black screen
console.log('=== POST-PROCESSING DEBUG ===');
console.log('Starting with post-processing DISABLED to test base rendering');
console.log('Run window.enablePostProcessing() to turn it on');
window.POST_PROCESSING_ENABLED = false;

window.enablePostProcessing = () => {
  window.POST_PROCESSING_ENABLED = true;
  console.log('Post-processing ENABLED');
};
window.disablePostProcessing = () => {
  window.POST_PROCESSING_ENABLED = false;
  console.log('Post-processing DISABLED');
};

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
gameManager.hud = hud; // For damage vignette effects
gameManager.cameraController = cameraController; // For camera shake

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
let frameCount = 0;

// CRITICAL DEBUG: Verify scene has content BEFORE first render
console.log('=== PRE-ANIMATE CHECK ===');
console.log('Scene children count:', scene.children.length);
scene.children.forEach((child, i) => {
  if (i < 10) console.log(`  [${i}] ${child.type}: ${child.name || '(unnamed)'}`);
});
if (scene.children.length > 10) console.log(`  ... and ${scene.children.length - 10} more`);

// Force one immediate render to check if anything displays
renderer.render(scene, camera);
console.log('Immediate test render completed');
console.log('Renderer draw calls:', renderer.info.render.calls);
console.log('Renderer triangles:', renderer.info.render.triangles);

function animate() {
  requestAnimationFrame(animate);
  frameCount++;
  const delta = Math.min(clock.getDelta(), 0.05); // Cap delta to prevent physics explosions
  
  // Log first 3 frames for debugging
  if (frameCount <= 3) {
    console.log(`[Frame ${frameCount}] Camera:`, camera.position.toArray().map(n => n.toFixed(2)), 'Player:', player.mesh.position.toArray().map(n => n.toFixed(2)));
    console.log(`[Frame ${frameCount}] Render calls: ${renderer.info.render.calls}, triangles: ${renderer.info.render.triangles}`);
  }

  inputManager.update(delta);
  
  // Check hitstop - pause game entities during freeze frame
  const inHitstop = gameManager.updateHitstop(delta);
  
  if (!inHitstop) {
    // Normal game update when not in hitstop
    player.update(delta);
    enemyManager.update(delta, player);
    particleManager.update(delta);
  } else {
    // During hitstop: still update camera and particles (for effect continuity)
    particleManager.update(delta * 0.1); // Slow-mo particles during hitstop
  }
  
  // These always update regardless of hitstop
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

  // DEBUG: Switchable render path
  // Start with post-processing DISABLED to diagnose black screen issue
  if (window.POST_PROCESSING_ENABLED) {
    composer.render();
  } else {
    renderer.render(scene, camera);
  }
}

animate();

// === DEBUG: Test cube to verify rendering ===
const testGeo = new THREE.BoxGeometry(2, 2, 2);
const testMat = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red, unlit - SHOULD be visible regardless of lighting
const testCube = new THREE.Mesh(testGeo, testMat);
testCube.position.set(0, 1, 3); // In front of player spawn
scene.add(testCube);
console.log('DEBUG: Added red test cube at (0, 1, 3)');

// === DEBUG: HUGE obvious test object at camera look target ===
const hugeTestGeo = new THREE.BoxGeometry(10, 10, 10);
const hugeTestMat = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true }); // Green wireframe - UNMISSABLE
const hugeTestCube = new THREE.Mesh(hugeTestGeo, hugeTestMat);
hugeTestCube.position.set(0, 5, 0); // Right at origin, where camera looks
scene.add(hugeTestCube);
console.log('DEBUG: Added HUGE green wireframe cube at origin (0, 5, 0)');

// === DEBUG: Add a LARGE bright floor plane to verify rendering ===
const debugFloorGeo = new THREE.PlaneGeometry(100, 100);
const debugFloorMat = new THREE.MeshBasicMaterial({ color: 0x333366, side: THREE.DoubleSide });
const debugFloor = new THREE.Mesh(debugFloorGeo, debugFloorMat);
debugFloor.rotation.x = -Math.PI / 2;
debugFloor.position.y = -0.1;
scene.add(debugFloor);
console.log('DEBUG: Added debug floor plane');

// === DEBUG: Add bright reference objects at known positions ===
const debugMarkers = [
  { pos: [0, 2, 0], color: 0x00ff00, label: 'Origin' },
  { pos: [0, 2, 5], color: 0xffff00, label: 'Player spawn area' },
  { pos: [0, 2, -10], color: 0xff00ff, label: 'Into cathedral' },
];
debugMarkers.forEach(({ pos, color, label }) => {
  const markerGeo = new THREE.SphereGeometry(0.5, 16, 16);
  const markerMat = new THREE.MeshBasicMaterial({ color });
  const marker = new THREE.Mesh(markerGeo, markerMat);
  marker.position.set(...pos);
  scene.add(marker);
  console.log(`DEBUG: Added ${label} marker at`, pos);
});

// Debug helper function
window.debugScene = () => {
  console.log('=== SCENE DEBUG ===');
  console.log('Scene children:', scene.children.length);
  let meshCount = 0, lightCount = 0;
  scene.traverse((obj) => {
    if (obj.isMesh) meshCount++;
    if (obj.isLight) lightCount++;
  });
  console.log('Total meshes:', meshCount);
  console.log('Total lights:', lightCount);
  console.log('Camera position:', camera.position.toArray().map(n => n.toFixed(2)));
  console.log('Camera target direction:', camera.getWorldDirection(new THREE.Vector3()).toArray().map(n => n.toFixed(2)));
  console.log('Player position:', player.mesh.position.toArray().map(n => n.toFixed(2)));
  console.log('Renderer info:', renderer.info.render);
  console.log('Post-processing:', window.POST_PROCESSING_ENABLED ? 'ON' : 'OFF');
  console.log('==================');
};

// === DEBUG: Trace rendering pipeline ===
console.log('=== RENDER DEBUG ===');
console.log('Scene children:', scene.children.length);
let totalMeshes = 0, totalLights = 0;
scene.traverse((obj) => {
  if (obj.isMesh) totalMeshes++;
  if (obj.isLight) totalLights++;
});
console.log('Total meshes in scene:', totalMeshes);
console.log('Total lights in scene:', totalLights);
console.log('Camera position:', camera.position.toArray());
console.log('Camera near/far:', camera.near, camera.far);
console.log('Player mesh position:', player.mesh.position.toArray());
console.log('Renderer size:', renderer.domElement.width, 'x', renderer.domElement.height);
console.log('Composer passes:', composer.passes.length);
console.log('WebGL context:', renderer.getContext() ? 'OK' : 'FAILED');
console.log('=====================');
console.log('DEBUG COMMANDS:');
console.log('  window.togglePostProcessing() - Toggle post-processing on/off');
console.log('  window.debugScene() - Print scene info');
console.log('=====================');

// Export for debugging
window.gameManager = gameManager;
window.player = player;
window.world = world;
window.itemManager = itemManager;
window.audioManager = audioManager;
window.particleManager = particleManager;
