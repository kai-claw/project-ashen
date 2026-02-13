import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { readFile } from 'fs/promises';
import { Blob } from 'buffer';

// Read the GLB file
const buffer = await readFile('./public/assets/models/soldier.glb');
const blob = new Blob([buffer]);
const url = URL.createObjectURL(blob);

console.log('Loading soldier.glb...');

const loader = new GLTFLoader();
loader.load(url, (gltf) => {
  console.log('Animations found:', gltf.animations.length);
  gltf.animations.forEach((clip, i) => {
    console.log(`  ${i}: "${clip.name}" - ${clip.duration.toFixed(2)}s`);
  });
  process.exit(0);
}, undefined, (err) => {
  console.error('Error:', err);
  process.exit(1);
});
