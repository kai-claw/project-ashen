import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';

/**
 * AssetManager - Centralized GLTF/GLB loading with Draco compression support
 * Handles model loading, caching, and animation extraction
 */
class AssetManagerClass {
  constructor() {
    this.gltfLoader = new GLTFLoader();
    this.dracoLoader = new DRACOLoader();
    this.textureLoader = new THREE.TextureLoader();
    
    // Use Google's Draco CDN for decoder
    this.dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
    this.dracoLoader.setDecoderConfig({ type: 'js' }); // Use JS decoder for broader compatibility
    this.gltfLoader.setDRACOLoader(this.dracoLoader);
    
    // Asset caches
    this.modelCache = new Map();
    this.textureCache = new Map();
    this.loadingPromises = new Map();
    
    // Debug mode
    this.debug = false;
  }
  
  /**
   * Load a GLTF/GLB model
   * @param {string} path - Path to the model file
   * @param {object} options - Loading options
   * @returns {Promise<{scene: THREE.Group, animations: THREE.AnimationClip[], gltf: object}>}
   */
  async loadModel(path, options = {}) {
    const cacheKey = path + JSON.stringify(options);
    
    // Return cached model (cloned)
    if (this.modelCache.has(cacheKey)) {
      const cached = this.modelCache.get(cacheKey);
      return this._cloneGLTF(cached);
    }
    
    // Return existing loading promise to prevent duplicate loads
    if (this.loadingPromises.has(cacheKey)) {
      const cached = await this.loadingPromises.get(cacheKey);
      return this._cloneGLTF(cached);
    }
    
    // Start loading
    const loadPromise = new Promise((resolve, reject) => {
      if (this.debug) console.log(`[AssetManager] Loading: ${path}`);
      
      this.gltfLoader.load(
        path,
        (gltf) => {
          if (this.debug) {
            console.log(`[AssetManager] Loaded: ${path}`);
            console.log(`  - Animations: ${gltf.animations.length}`);
            gltf.animations.forEach((clip, i) => {
              console.log(`    ${i}: ${clip.name} (${clip.duration.toFixed(2)}s)`);
            });
          }
          
          // Apply options
          if (options.scale) {
            gltf.scene.scale.setScalar(options.scale);
          }
          
          // Enable shadows on all meshes
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.castShadow = true;
              child.receiveShadow = true;
              
              // Fix material issues
              if (child.material) {
                if (Array.isArray(child.material)) {
                  child.material.forEach(mat => this._fixMaterial(mat));
                } else {
                  this._fixMaterial(child.material);
                }
              }
            }
          });
          
          const result = {
            scene: gltf.scene,
            animations: gltf.animations,
            gltf: gltf,
          };
          
          this.modelCache.set(cacheKey, result);
          resolve(result);
        },
        (progress) => {
          if (this.debug && progress.total > 0) {
            const pct = ((progress.loaded / progress.total) * 100).toFixed(1);
            console.log(`[AssetManager] Loading ${path}: ${pct}%`);
          }
        },
        (error) => {
          console.error(`[AssetManager] Failed to load: ${path}`, error);
          reject(error);
        }
      );
    });
    
    this.loadingPromises.set(cacheKey, loadPromise);
    
    try {
      const result = await loadPromise;
      this.loadingPromises.delete(cacheKey);
      return this._cloneGLTF(result);
    } catch (error) {
      this.loadingPromises.delete(cacheKey);
      throw error;
    }
  }
  
  /**
   * Clone a GLTF result for independent instances
   */
  _cloneGLTF(original) {
    return {
      scene: original.scene.clone(),
      animations: original.animations, // Animations can be shared
      gltf: original.gltf,
    };
  }
  
  /**
   * Fix common material issues
   */
  _fixMaterial(material) {
    // Ensure materials work well with scene lighting
    if (material.isMeshStandardMaterial || material.isMeshPhysicalMaterial) {
      // Don't override existing good values, just ensure basics
      if (material.metalness === undefined) material.metalness = 0.0;
      if (material.roughness === undefined) material.roughness = 0.8;
    }
    
    // Fix transparency issues
    if (material.transparent) {
      material.depthWrite = false;
      material.side = THREE.DoubleSide;
    }
  }
  
  /**
   * Load a texture with caching
   */
  async loadTexture(path, options = {}) {
    if (this.textureCache.has(path)) {
      return this.textureCache.get(path);
    }
    
    return new Promise((resolve, reject) => {
      this.textureLoader.load(
        path,
        (texture) => {
          // Apply options
          if (options.repeat) {
            texture.wrapS = THREE.RepeatWrapping;
            texture.wrapT = THREE.RepeatWrapping;
            texture.repeat.set(options.repeat[0], options.repeat[1]);
          }
          
          if (options.encoding) {
            texture.colorSpace = options.encoding;
          } else {
            texture.colorSpace = THREE.SRGBColorSpace;
          }
          
          if (options.anisotropy) {
            texture.anisotropy = options.anisotropy;
          }
          
          this.textureCache.set(path, texture);
          resolve(texture);
        },
        undefined,
        reject
      );
    });
  }
  
  /**
   * Preload multiple assets
   */
  async preload(assets) {
    const promises = assets.map(asset => {
      if (asset.type === 'model') {
        return this.loadModel(asset.path, asset.options);
      } else if (asset.type === 'texture') {
        return this.loadTexture(asset.path, asset.options);
      }
      return Promise.resolve();
    });
    
    return Promise.all(promises);
  }
  
  /**
   * Create an AnimationMixer and set up actions for a model
   */
  createAnimationSystem(model, animations) {
    const mixer = new THREE.AnimationMixer(model);
    const actions = new Map();
    
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      actions.set(clip.name, action);
      
      // Also map by lowercase for easier lookup
      actions.set(clip.name.toLowerCase(), action);
    });
    
    return {
      mixer,
      actions,
      play: (name, options = {}) => {
        const action = actions.get(name) || actions.get(name.toLowerCase());
        if (!action) {
          if (this.debug) console.warn(`[AssetManager] Animation not found: ${name}`);
          return null;
        }
        
        // Reset and configure
        action.reset();
        
        if (options.loop !== undefined) {
          action.setLoop(options.loop ? THREE.LoopRepeat : THREE.LoopOnce);
        }
        
        if (options.clampWhenFinished) {
          action.clampWhenFinished = true;
        }
        
        if (options.timeScale) {
          action.timeScale = options.timeScale;
        }
        
        if (options.fadeIn) {
          action.fadeIn(options.fadeIn);
        }
        
        action.play();
        return action;
      },
      crossFade: (fromName, toName, duration = 0.2) => {
        const fromAction = actions.get(fromName) || actions.get(fromName.toLowerCase());
        const toAction = actions.get(toName) || actions.get(toName.toLowerCase());
        
        if (!toAction) return null;
        
        toAction.reset();
        toAction.play();
        
        if (fromAction && fromAction.isRunning()) {
          fromAction.crossFadeTo(toAction, duration, true);
        }
        
        return toAction;
      },
      stopAll: () => {
        mixer.stopAllAction();
      },
      update: (delta) => {
        mixer.update(delta);
      },
    };
  }
  
  /**
   * Clear caches (useful for memory management)
   */
  clearCache() {
    this.modelCache.clear();
    this.textureCache.clear();
  }
  
  /**
   * Dispose of all cached resources
   */
  dispose() {
    this.modelCache.forEach((result) => {
      result.scene.traverse((child) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(mat => mat.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    });
    
    this.textureCache.forEach((texture) => {
      texture.dispose();
    });
    
    this.dracoLoader.dispose();
    this.clearCache();
  }
}

// Singleton instance
export const AssetManager = new AssetManagerClass();
export default AssetManager;
