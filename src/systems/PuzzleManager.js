import * as THREE from 'three';

/**
 * PuzzleManager.js - Dungeon Puzzle Mechanics
 * Phase 22: Dungeon Instances
 * 
 * Handles all puzzle types with visual feedback, failure penalties,
 * persistence, and hint systems.
 * 
 * Puzzle Types:
 * - Pressure Plates: Step on plates in correct order
 * - Lever Sequence: Pull levers in correct order  
 * - Crystal Alignment: Rotate crystals to focus light
 * - Key-and-Lock: Find key elsewhere in dungeon
 * - Symbol Match: Match symbols on rotating pillars
 * - Torch Lighting: Light torches in specific pattern
 * - Weight Balance: Place items on scales
 */
export class PuzzleManager {
  constructor(scene, inputManager, audioManager, gameManager) {
    this.scene = scene;
    this.input = inputManager;
    this.audio = audioManager;
    this.gm = gameManager;
    
    // Active puzzles in current dungeon
    this.puzzles = new Map(); // puzzleId -> puzzle state
    
    // Visual components for puzzles
    this.puzzleObjects = new Map(); // puzzleId -> THREE.Group
    
    // Solved puzzles (persisted across sessions)
    this.solvedPuzzles = new Set(); // Set of puzzle IDs
    
    // Currently interacting puzzle
    this.activePuzzle = null;
    this.activeComponent = null;
    
    // Player reference
    this.player = null;
    this.playerPosition = new THREE.Vector3();
    
    // Interaction settings
    this.interactRadius = 2.5;
    
    // Materials for puzzle elements
    this._createMaterials();
    
    // Create UI elements
    this._createPuzzleUI();
    
    // Load saved puzzle states
    this._loadPuzzleState();
    
    console.log('[PuzzleManager] Initialized');
  }
  
  /**
   * Create shared materials for puzzle elements
   */
  _createMaterials() {
    // Pressure plate materials
    this.materials = {
      plateInactive: new THREE.MeshStandardMaterial({
        color: 0x555555,
        metalness: 0.6,
        roughness: 0.4,
      }),
      plateActive: new THREE.MeshStandardMaterial({
        color: 0x88ff88,
        emissive: 0x226622,
        emissiveIntensity: 0.5,
        metalness: 0.6,
        roughness: 0.4,
      }),
      plateCorrect: new THREE.MeshStandardMaterial({
        color: 0x44ff44,
        emissive: 0x00ff00,
        emissiveIntensity: 0.8,
        metalness: 0.6,
        roughness: 0.3,
      }),
      plateWrong: new THREE.MeshStandardMaterial({
        color: 0xff4444,
        emissive: 0xff0000,
        emissiveIntensity: 0.8,
        metalness: 0.6,
        roughness: 0.3,
      }),
      
      // Lever materials
      leverBase: new THREE.MeshStandardMaterial({
        color: 0x444444,
        metalness: 0.7,
        roughness: 0.3,
      }),
      leverHandle: new THREE.MeshStandardMaterial({
        color: 0x886644,
        metalness: 0.3,
        roughness: 0.6,
      }),
      leverPulled: new THREE.MeshStandardMaterial({
        color: 0xffaa44,
        emissive: 0x664400,
        emissiveIntensity: 0.4,
        metalness: 0.3,
        roughness: 0.6,
      }),
      
      // Crystal materials
      crystalInactive: new THREE.MeshStandardMaterial({
        color: 0x6688aa,
        transparent: true,
        opacity: 0.7,
        metalness: 0.1,
        roughness: 0.1,
      }),
      crystalActive: new THREE.MeshStandardMaterial({
        color: 0x88ddff,
        emissive: 0x44aaff,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.8,
        metalness: 0.1,
        roughness: 0.1,
      }),
      crystalBeam: new THREE.MeshBasicMaterial({
        color: 0x88ddff,
        transparent: true,
        opacity: 0.4,
      }),
      
      // Symbol pillar materials
      pillarBase: new THREE.MeshStandardMaterial({
        color: 0x666666,
        metalness: 0.4,
        roughness: 0.5,
      }),
      symbolActive: new THREE.MeshStandardMaterial({
        color: 0xffdd44,
        emissive: 0xffaa00,
        emissiveIntensity: 0.5,
      }),
      
      // Torch materials
      torchUnlit: new THREE.MeshStandardMaterial({
        color: 0x332211,
        metalness: 0.2,
        roughness: 0.8,
      }),
      torchLit: new THREE.MeshStandardMaterial({
        color: 0xff6622,
        emissive: 0xff4400,
        emissiveIntensity: 1.0,
      }),
      
      // Scale/balance materials
      scaleMetal: new THREE.MeshStandardMaterial({
        color: 0x887744,
        metalness: 0.8,
        roughness: 0.3,
      }),
      scalePlatform: new THREE.MeshStandardMaterial({
        color: 0x554433,
        metalness: 0.5,
        roughness: 0.5,
      }),
      
      // Lock materials
      lockLocked: new THREE.MeshStandardMaterial({
        color: 0x444444,
        metalness: 0.8,
        roughness: 0.2,
      }),
      lockUnlocked: new THREE.MeshStandardMaterial({
        color: 0x44aa44,
        emissive: 0x22ff22,
        emissiveIntensity: 0.4,
        metalness: 0.8,
        roughness: 0.2,
      }),
    };
  }
  
  /**
   * Create puzzle interaction UI
   */
  _createPuzzleUI() {
    // Interaction prompt
    this.promptContainer = document.createElement('div');
    this.promptContainer.id = 'puzzle-prompt';
    this.promptContainer.style.cssText = `
      position: fixed;
      bottom: 180px;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      z-index: 150;
      pointer-events: none;
    `;
    
    // Puzzle component name
    this.promptName = document.createElement('div');
    this.promptName.style.cssText = `
      font-family: 'Cinzel', serif;
      font-size: 16px;
      font-weight: bold;
      color: #88ddff;
      text-shadow: 0 0 10px rgba(136, 221, 255, 0.5);
    `;
    
    // Interaction hint
    this.promptAction = document.createElement('div');
    this.promptAction.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      background: rgba(0, 0, 0, 0.7);
      border: 1px solid rgba(136, 221, 255, 0.5);
      border-radius: 4px;
    `;
    this.promptAction.innerHTML = `
      <span style="
        background: linear-gradient(135deg, #667788, #445566);
        border: 2px solid #88aacc;
        border-radius: 4px;
        padding: 4px 10px;
        font-family: monospace;
        font-weight: bold;
        font-size: 14px;
        color: white;
        box-shadow: 0 2px 4px rgba(0,0,0,0.3);
      ">E</span>
      <span style="color: #aaccdd; font-size: 14px;">Interact</span>
    `;
    
    this.promptContainer.appendChild(this.promptName);
    this.promptContainer.appendChild(this.promptAction);
    document.body.appendChild(this.promptContainer);
    
    // Puzzle status display
    this.statusContainer = document.createElement('div');
    this.statusContainer.id = 'puzzle-status';
    this.statusContainer.style.cssText = `
      position: fixed;
      top: 120px;
      left: 50%;
      transform: translateX(-50%);
      display: none;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 16px 24px;
      background: rgba(0, 0, 0, 0.85);
      border: 2px solid rgba(136, 221, 255, 0.6);
      border-radius: 8px;
      z-index: 200;
    `;
    document.body.appendChild(this.statusContainer);
    
    // Hint display
    this.hintContainer = document.createElement('div');
    this.hintContainer.id = 'puzzle-hint';
    this.hintContainer.style.cssText = `
      position: fixed;
      top: 220px;
      right: 20px;
      display: none;
      max-width: 250px;
      padding: 12px 16px;
      background: rgba(40, 30, 50, 0.9);
      border: 1px solid rgba(136, 100, 180, 0.6);
      border-radius: 6px;
      font-size: 14px;
      color: #ccbbdd;
      z-index: 150;
    `;
    document.body.appendChild(this.hintContainer);
    
    // Solved notification
    this.solvedNotification = document.createElement('div');
    this.solvedNotification.id = 'puzzle-solved';
    this.solvedNotification.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      padding: 32px 48px;
      background: linear-gradient(135deg, rgba(34, 68, 34, 0.95), rgba(17, 51, 17, 0.95));
      border: 3px solid #44ff44;
      border-radius: 12px;
      z-index: 300;
      transition: transform 0.3s ease-out;
    `;
    this.solvedNotification.innerHTML = `
      <div style="font-family: 'Cinzel', serif; font-size: 32px; color: #44ff44; text-shadow: 0 0 20px #22ff22;">
        PUZZLE SOLVED
      </div>
      <div id="puzzle-reward" style="font-size: 16px; color: #aaffaa;"></div>
    `;
    document.body.appendChild(this.solvedNotification);
  }
  
  /**
   * Register a puzzle from dungeon generator
   */
  registerPuzzle(puzzleData, roomPosition) {
    const puzzleId = puzzleData.id;
    
    // Check if already solved
    if (this.solvedPuzzles.has(puzzleId)) {
      console.log(`[PuzzleManager] Puzzle ${puzzleId} already solved`);
      return;
    }
    
    const puzzle = {
      ...puzzleData,
      roomPosition: roomPosition.clone(),
      currentState: new Array(puzzleData.componentCount).fill(0),
      inputSequence: [], // For sequence-based puzzles
      isActive: true,
      components: [],
      failCount: 0,
    };
    
    this.puzzles.set(puzzleId, puzzle);
    
    // Create visual components
    this._createPuzzleVisuals(puzzle);
    
    console.log(`[PuzzleManager] Registered puzzle: ${puzzleId} (${puzzleData.name})`);
    return puzzle;
  }
  
  /**
   * Create 3D visuals for puzzle
   */
  _createPuzzleVisuals(puzzle) {
    const group = new THREE.Group();
    group.position.copy(puzzle.roomPosition);
    group.userData.puzzleId = puzzle.id;
    
    switch (puzzle.visualType) {
      case 'floor_plates':
        this._createPressurePlates(puzzle, group);
        break;
      case 'wall_levers':
        this._createLevers(puzzle, group);
        break;
      case 'rotating_crystals':
        this._createCrystals(puzzle, group);
        break;
      case 'locked_door':
        this._createLockedDoor(puzzle, group);
        break;
      case 'symbol_pillars':
        this._createSymbolPillars(puzzle, group);
        break;
      case 'wall_torches':
        this._createTorches(puzzle, group);
        break;
      case 'balance_scales':
        this._createScales(puzzle, group);
        break;
    }
    
    this.scene.add(group);
    this.puzzleObjects.set(puzzle.id, group);
  }
  
  /**
   * Create pressure plate visuals
   */
  _createPressurePlates(puzzle, group) {
    const count = puzzle.componentCount;
    const spacing = 2.5;
    const startX = -((count - 1) * spacing) / 2;
    
    for (let i = 0; i < count; i++) {
      const plateGroup = new THREE.Group();
      plateGroup.position.set(startX + i * spacing, 0, 0);
      plateGroup.userData.componentIndex = i;
      plateGroup.userData.interactable = true;
      plateGroup.userData.interactType = 'step';
      
      // Base plate
      const baseGeom = new THREE.BoxGeometry(1.8, 0.1, 1.8);
      const baseMesh = new THREE.Mesh(baseGeom, this.materials.plateInactive);
      baseMesh.position.y = 0.05;
      baseMesh.receiveShadow = true;
      plateGroup.add(baseMesh);
      
      // Top plate (pressable)
      const topGeom = new THREE.BoxGeometry(1.6, 0.08, 1.6);
      const topMesh = new THREE.Mesh(topGeom, this.materials.plateInactive.clone());
      topMesh.position.y = 0.15;
      topMesh.castShadow = true;
      topMesh.userData.pressable = true;
      plateGroup.add(topMesh);
      
      // Glow indicator (hidden initially)
      const glowGeom = new THREE.RingGeometry(0.7, 0.9, 16);
      const glowMat = new THREE.MeshBasicMaterial({
        color: 0x44ff44,
        transparent: true,
        opacity: 0,
        side: THREE.DoubleSide,
      });
      const glowMesh = new THREE.Mesh(glowGeom, glowMat);
      glowMesh.rotation.x = -Math.PI / 2;
      glowMesh.position.y = 0.2;
      glowMesh.userData.glow = true;
      plateGroup.add(glowMesh);
      
      // Number indicator
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#334455';
      ctx.fillRect(0, 0, 64, 64);
      ctx.fillStyle = '#aabbcc';
      ctx.font = 'bold 40px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText((i + 1).toString(), 32, 32);
      
      const numTex = new THREE.CanvasTexture(canvas);
      const numMat = new THREE.MeshBasicMaterial({ map: numTex, transparent: true });
      const numGeom = new THREE.PlaneGeometry(0.6, 0.6);
      const numMesh = new THREE.Mesh(numGeom, numMat);
      numMesh.rotation.x = -Math.PI / 2;
      numMesh.position.y = 0.21;
      plateGroup.add(numMesh);
      
      puzzle.components.push(plateGroup);
      group.add(plateGroup);
    }
  }
  
  /**
   * Create lever visuals
   */
  _createLevers(puzzle, group) {
    const count = puzzle.componentCount;
    const spacing = 3;
    const startX = -((count - 1) * spacing) / 2;
    
    for (let i = 0; i < count; i++) {
      const leverGroup = new THREE.Group();
      leverGroup.position.set(startX + i * spacing, 0, -puzzle.roomPosition.z + 2);
      leverGroup.userData.componentIndex = i;
      leverGroup.userData.interactable = true;
      leverGroup.userData.interactType = 'pull';
      leverGroup.userData.isPulled = false;
      
      // Base mount
      const baseGeom = new THREE.BoxGeometry(0.4, 0.8, 0.3);
      const baseMesh = new THREE.Mesh(baseGeom, this.materials.leverBase);
      baseMesh.position.set(0, 0.4, 0);
      leverGroup.add(baseMesh);
      
      // Lever arm (pivots)
      const armGroup = new THREE.Group();
      armGroup.position.set(0, 0.7, 0);
      
      const armGeom = new THREE.CylinderGeometry(0.08, 0.08, 1, 8);
      const armMesh = new THREE.Mesh(armGeom, this.materials.leverHandle);
      armMesh.rotation.x = -Math.PI / 4; // Up position
      armMesh.position.y = 0.4;
      armGroup.add(armMesh);
      
      // Handle knob
      const knobGeom = new THREE.SphereGeometry(0.15, 8, 8);
      const knobMesh = new THREE.Mesh(knobGeom, this.materials.leverHandle);
      knobMesh.position.set(0, 0.9, 0);
      armGroup.add(knobMesh);
      
      leverGroup.add(armGroup);
      leverGroup.userData.armGroup = armGroup;
      
      // Symbol/number plate
      const plateGeom = new THREE.BoxGeometry(0.5, 0.5, 0.05);
      const plateMesh = new THREE.Mesh(plateGeom, this.materials.leverBase);
      plateMesh.position.set(0, 1.4, 0.1);
      leverGroup.add(plateMesh);
      
      puzzle.components.push(leverGroup);
      group.add(leverGroup);
    }
  }
  
  /**
   * Create crystal alignment puzzle
   */
  _createCrystals(puzzle, group) {
    const count = puzzle.componentCount;
    const radius = 4;
    
    // Central target
    const targetGeom = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16);
    const targetMat = new THREE.MeshStandardMaterial({
      color: 0xffdd44,
      emissive: 0x886600,
      emissiveIntensity: 0.3,
    });
    const targetMesh = new THREE.Mesh(targetGeom, targetMat);
    targetMesh.position.y = 0.5;
    targetMesh.userData.target = true;
    group.add(targetMesh);
    
    // Light receiver
    const receiverGeom = new THREE.SphereGeometry(0.4, 16, 16);
    const receiverMat = new THREE.MeshStandardMaterial({
      color: 0x444466,
      metalness: 0.3,
      roughness: 0.4,
    });
    const receiverMesh = new THREE.Mesh(receiverGeom, receiverMat);
    receiverMesh.position.y = 1.2;
    receiverMesh.userData.receiver = true;
    group.add(receiverMesh);
    
    // Rotating crystals around the edge
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      const crystalGroup = new THREE.Group();
      crystalGroup.position.set(
        Math.cos(angle) * radius,
        0,
        Math.sin(angle) * radius
      );
      crystalGroup.userData.componentIndex = i;
      crystalGroup.userData.interactable = true;
      crystalGroup.userData.interactType = 'rotate';
      crystalGroup.userData.rotation = 0; // 0, 90, 180, 270
      
      // Pedestal
      const pedestalGeom = new THREE.CylinderGeometry(0.4, 0.5, 1, 8);
      const pedestalMesh = new THREE.Mesh(pedestalGeom, this.materials.pillarBase);
      pedestalMesh.position.y = 0.5;
      crystalGroup.add(pedestalMesh);
      
      // Crystal
      const crystalGeom = new THREE.ConeGeometry(0.25, 1.2, 6);
      const crystalMesh = new THREE.Mesh(crystalGeom, this.materials.crystalInactive.clone());
      crystalMesh.position.y = 1.4;
      crystalMesh.rotation.x = -Math.PI / 6; // Slight tilt
      crystalMesh.userData.crystal = true;
      crystalGroup.add(crystalMesh);
      
      // Light beam (hidden until active)
      const beamGeom = new THREE.CylinderGeometry(0.05, 0.1, radius - 1, 8);
      const beamMesh = new THREE.Mesh(beamGeom, this.materials.crystalBeam.clone());
      beamMesh.position.set(0, 1.4, (radius - 1) / 2);
      beamMesh.rotation.x = Math.PI / 2;
      beamMesh.visible = false;
      beamMesh.userData.beam = true;
      crystalGroup.add(beamMesh);
      
      // Point light for glow
      const light = new THREE.PointLight(0x88ddff, 0, 3);
      light.position.y = 1.4;
      crystalGroup.add(light);
      crystalGroup.userData.light = light;
      
      puzzle.components.push(crystalGroup);
      group.add(crystalGroup);
    }
  }
  
  /**
   * Create locked door puzzle
   */
  _createLockedDoor(puzzle, group) {
    const doorGroup = new THREE.Group();
    doorGroup.userData.interactable = true;
    doorGroup.userData.interactType = 'unlock';
    doorGroup.userData.isLocked = true;
    doorGroup.userData.componentIndex = 0;
    
    // Door frame
    const frameGeom = new THREE.BoxGeometry(4, 4, 0.4);
    const frameMesh = new THREE.Mesh(frameGeom, this.materials.pillarBase);
    frameMesh.position.y = 2;
    doorGroup.add(frameMesh);
    
    // Door panels
    const doorGeom = new THREE.BoxGeometry(1.7, 3.6, 0.3);
    const leftDoor = new THREE.Mesh(doorGeom, this.materials.leverBase);
    leftDoor.position.set(-0.9, 1.9, 0);
    leftDoor.userData.door = true;
    doorGroup.add(leftDoor);
    
    const rightDoor = new THREE.Mesh(doorGeom, this.materials.leverBase);
    rightDoor.position.set(0.9, 1.9, 0);
    rightDoor.userData.door = true;
    doorGroup.add(rightDoor);
    
    // Lock mechanism
    const lockGeom = new THREE.BoxGeometry(0.6, 0.6, 0.4);
    const lockMesh = new THREE.Mesh(lockGeom, this.materials.lockLocked);
    lockMesh.position.set(0, 2, 0.2);
    lockMesh.userData.lock = true;
    doorGroup.add(lockMesh);
    
    // Keyhole
    const keyholeGeom = new THREE.CircleGeometry(0.08, 8);
    const keyholeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const keyholeMesh = new THREE.Mesh(keyholeGeom, keyholeMat);
    keyholeMesh.position.set(0, 2, 0.41);
    doorGroup.add(keyholeMesh);
    
    puzzle.components.push(doorGroup);
    puzzle.requiredKey = `key_${puzzle.id}`;
    group.add(doorGroup);
  }
  
  /**
   * Create symbol pillar puzzle
   */
  _createSymbolPillars(puzzle, group) {
    const count = puzzle.componentCount;
    const symbols = ['☀', '☽', '★', '☠', '👁', '✋', '🔥', '〰'];
    const spacing = 2.5;
    const startX = -((count - 1) * spacing) / 2;
    
    for (let i = 0; i < count; i++) {
      const pillarGroup = new THREE.Group();
      pillarGroup.position.set(startX + i * spacing, 0, 0);
      pillarGroup.userData.componentIndex = i;
      pillarGroup.userData.interactable = true;
      pillarGroup.userData.interactType = 'spin';
      pillarGroup.userData.symbolIndex = 0;
      
      // Pillar base
      const baseGeom = new THREE.CylinderGeometry(0.6, 0.7, 0.3, 8);
      const baseMesh = new THREE.Mesh(baseGeom, this.materials.pillarBase);
      baseMesh.position.y = 0.15;
      pillarGroup.add(baseMesh);
      
      // Rotatable middle section
      const middleGeom = new THREE.CylinderGeometry(0.5, 0.5, 1.5, 8);
      const middleMesh = new THREE.Mesh(middleGeom, this.materials.pillarBase.clone());
      middleMesh.position.y = 1.1;
      middleMesh.userData.rotatable = true;
      pillarGroup.add(middleMesh);
      
      // Top cap
      const topGeom = new THREE.CylinderGeometry(0.55, 0.5, 0.2, 8);
      const topMesh = new THREE.Mesh(topGeom, this.materials.pillarBase);
      topMesh.position.y = 1.95;
      pillarGroup.add(topMesh);
      
      // Symbol display (placeholder - would be canvas texture)
      const symbolGeom = new THREE.PlaneGeometry(0.8, 0.8);
      const symbolMat = new THREE.MeshBasicMaterial({
        color: 0xaabbcc,
        transparent: true,
        opacity: 0.9,
      });
      const symbolMesh = new THREE.Mesh(symbolGeom, symbolMat);
      symbolMesh.position.set(0, 1.1, 0.51);
      symbolMesh.userData.symbol = true;
      symbolMesh.userData.symbols = symbols;
      pillarGroup.add(symbolMesh);
      
      puzzle.components.push(pillarGroup);
      group.add(pillarGroup);
    }
  }
  
  /**
   * Create torch puzzle
   */
  _createTorches(puzzle, group) {
    const count = puzzle.componentCount;
    const spacing = 3;
    const startX = -((count - 1) * spacing) / 2;
    
    for (let i = 0; i < count; i++) {
      const torchGroup = new THREE.Group();
      torchGroup.position.set(startX + i * spacing, 2.5, -5);
      torchGroup.userData.componentIndex = i;
      torchGroup.userData.interactable = true;
      torchGroup.userData.interactType = 'light';
      torchGroup.userData.isLit = false;
      
      // Wall mount
      const mountGeom = new THREE.BoxGeometry(0.3, 0.3, 0.2);
      const mountMesh = new THREE.Mesh(mountGeom, this.materials.leverBase);
      torchGroup.add(mountMesh);
      
      // Torch holder
      const holderGeom = new THREE.CylinderGeometry(0.08, 0.1, 0.4, 8);
      const holderMesh = new THREE.Mesh(holderGeom, this.materials.leverBase);
      holderMesh.position.set(0, -0.3, 0.15);
      holderMesh.rotation.x = Math.PI / 6;
      torchGroup.add(holderMesh);
      
      // Torch head
      const headGeom = new THREE.ConeGeometry(0.15, 0.3, 8);
      const headMesh = new THREE.Mesh(headGeom, this.materials.torchUnlit);
      headMesh.position.set(0, -0.45, 0.25);
      headMesh.userData.flame = true;
      torchGroup.add(headMesh);
      
      // Light source (off initially)
      const light = new THREE.PointLight(0xff6622, 0, 5);
      light.position.set(0, -0.35, 0.25);
      torchGroup.add(light);
      torchGroup.userData.light = light;
      
      puzzle.components.push(torchGroup);
      group.add(torchGroup);
    }
  }
  
  /**
   * Create weight balance puzzle
   */
  _createScales(puzzle, group) {
    const count = puzzle.componentCount;
    const spacing = 4;
    const startX = -((count - 1) * spacing) / 2;
    
    for (let i = 0; i < count; i++) {
      const scaleGroup = new THREE.Group();
      scaleGroup.position.set(startX + i * spacing, 0, 0);
      scaleGroup.userData.componentIndex = i;
      scaleGroup.userData.interactable = true;
      scaleGroup.userData.interactType = 'place';
      scaleGroup.userData.weight = 0;
      scaleGroup.userData.targetWeight = (i + 1) * 10; // Different target per scale
      
      // Central pillar
      const pillarGeom = new THREE.CylinderGeometry(0.15, 0.2, 2, 8);
      const pillarMesh = new THREE.Mesh(pillarGeom, this.materials.scaleMetal);
      pillarMesh.position.y = 1;
      scaleGroup.add(pillarMesh);
      
      // Balance beam
      const beamGeom = new THREE.BoxGeometry(2.5, 0.1, 0.15);
      const beamMesh = new THREE.Mesh(beamGeom, this.materials.scaleMetal);
      beamMesh.position.y = 2;
      beamMesh.userData.beam = true;
      scaleGroup.add(beamMesh);
      
      // Left platform
      const platGeom = new THREE.CylinderGeometry(0.6, 0.6, 0.1, 12);
      const leftPlat = new THREE.Mesh(platGeom, this.materials.scalePlatform);
      leftPlat.position.set(-1.1, 1.5, 0);
      leftPlat.userData.platform = 'left';
      scaleGroup.add(leftPlat);
      
      // Right platform
      const rightPlat = new THREE.Mesh(platGeom, this.materials.scalePlatform);
      rightPlat.position.set(1.1, 1.5, 0);
      rightPlat.userData.platform = 'right';
      scaleGroup.add(rightPlat);
      
      // Chains (simplified as cylinders)
      for (let j = -1; j <= 1; j += 2) {
        const chainGeom = new THREE.CylinderGeometry(0.02, 0.02, 0.6, 4);
        const chainMesh = new THREE.Mesh(chainGeom, this.materials.scaleMetal);
        chainMesh.position.set(j * 1.1, 1.75, 0);
        scaleGroup.add(chainMesh);
      }
      
      puzzle.components.push(scaleGroup);
      group.add(scaleGroup);
    }
  }
  
  /**
   * Update player reference
   */
  setPlayer(player) {
    this.player = player;
  }
  
  /**
   * Main update loop
   */
  update(deltaTime) {
    if (!this.player) return;
    
    this.playerPosition.copy(this.player.position);
    
    // Check for nearby puzzle components
    this._checkProximity();
    
    // Handle input
    this._handleInput();
    
    // Update puzzle animations
    this._updateAnimations(deltaTime);
  }
  
  /**
   * Check if player is near any puzzle component
   */
  _checkProximity() {
    this.activeComponent = null;
    this.activePuzzle = null;
    
    for (const [puzzleId, puzzle] of this.puzzles) {
      if (!puzzle.isActive) continue;
      
      const puzzleGroup = this.puzzleObjects.get(puzzleId);
      if (!puzzleGroup) continue;
      
      for (const component of puzzle.components) {
        if (!component.userData.interactable) continue;
        
        const worldPos = new THREE.Vector3();
        component.getWorldPosition(worldPos);
        
        const distance = this.playerPosition.distanceTo(worldPos);
        
        if (distance < this.interactRadius) {
          this.activePuzzle = puzzle;
          this.activeComponent = component;
          this._showPrompt(puzzle, component);
          return;
        }
      }
    }
    
    this._hidePrompt();
  }
  
  /**
   * Show interaction prompt
   */
  _showPrompt(puzzle, component) {
    const type = component.userData.interactType;
    const actionText = {
      step: 'Step On',
      pull: 'Pull Lever',
      rotate: 'Rotate',
      unlock: 'Use Key',
      spin: 'Spin',
      light: 'Light',
      place: 'Place Item',
    }[type] || 'Interact';
    
    this.promptName.textContent = puzzle.name;
    this.promptAction.querySelector('span:last-child').textContent = actionText;
    this.promptContainer.style.display = 'flex';
  }
  
  /**
   * Hide interaction prompt
   */
  _hidePrompt() {
    this.promptContainer.style.display = 'none';
  }
  
  /**
   * Handle player input
   */
  _handleInput() {
    if (!this.activePuzzle || !this.activeComponent) return;
    
    if (this.input.isKeyJustPressed('KeyE')) {
      this._interactWithComponent(this.activePuzzle, this.activeComponent);
    }
    
    // Hint key
    if (this.input.isKeyJustPressed('KeyH')) {
      this._showHint(this.activePuzzle);
    }
  }
  
  /**
   * Interact with a puzzle component
   */
  _interactWithComponent(puzzle, component) {
    const type = component.userData.interactType;
    const index = component.userData.componentIndex;
    
    // Play interaction sound
    if (this.audio) {
      this.audio.playSound('puzzle_interact');
    }
    
    switch (type) {
      case 'step':
        this._handlePressurePlate(puzzle, index);
        break;
      case 'pull':
        this._handleLever(puzzle, component, index);
        break;
      case 'rotate':
        this._handleCrystal(puzzle, component, index);
        break;
      case 'unlock':
        this._handleLock(puzzle, component);
        break;
      case 'spin':
        this._handleSymbol(puzzle, component, index);
        break;
      case 'light':
        this._handleTorch(puzzle, component, index);
        break;
      case 'place':
        this._handleScale(puzzle, component, index);
        break;
    }
  }
  
  /**
   * Handle pressure plate interaction
   */
  _handlePressurePlate(puzzle, index) {
    puzzle.inputSequence.push(index);
    
    // Visual feedback
    const component = puzzle.components[index];
    const topMesh = component.children.find(c => c.userData.pressable);
    const glowMesh = component.children.find(c => c.userData.glow);
    
    if (topMesh) {
      topMesh.position.y = 0.08; // Press down
      topMesh.material = this.materials.plateActive;
    }
    if (glowMesh) {
      glowMesh.material.opacity = 0.8;
    }
    
    // Check sequence
    const solutionIndex = puzzle.inputSequence.length - 1;
    if (puzzle.solution[solutionIndex] !== index) {
      // Wrong input
      this._handlePuzzleFail(puzzle, 'wrong_sequence');
      return;
    }
    
    // Correct input
    if (puzzle.inputSequence.length === puzzle.solution.length) {
      // Puzzle solved!
      this._solvePuzzle(puzzle);
    }
  }
  
  /**
   * Handle lever interaction
   */
  _handleLever(puzzle, component, index) {
    const isPulled = component.userData.isPulled;
    component.userData.isPulled = !isPulled;
    
    // Animate lever
    const armGroup = component.userData.armGroup;
    if (armGroup) {
      const targetRotation = isPulled ? -Math.PI / 4 : Math.PI / 4;
      armGroup.children[0].rotation.x = targetRotation;
    }
    
    // Update material
    const knob = armGroup?.children[1];
    if (knob) {
      knob.material = isPulled ? this.materials.leverHandle : this.materials.leverPulled;
    }
    
    // Add to sequence
    puzzle.inputSequence.push(index);
    
    // Check if all levers pulled in correct order
    if (puzzle.inputSequence.length === puzzle.solution.length) {
      let correct = true;
      for (let i = 0; i < puzzle.solution.length; i++) {
        if (puzzle.inputSequence[i] !== puzzle.solution[i]) {
          correct = false;
          break;
        }
      }
      
      if (correct) {
        this._solvePuzzle(puzzle);
      } else {
        this._handlePuzzleFail(puzzle, 'wrong_sequence');
      }
    }
  }
  
  /**
   * Handle crystal rotation
   */
  _handleCrystal(puzzle, component, index) {
    // Rotate 90 degrees
    let rotation = component.userData.rotation || 0;
    rotation = (rotation + 90) % 360;
    component.userData.rotation = rotation;
    
    // Rotate the crystal visually
    const crystal = component.children.find(c => c.userData.crystal);
    if (crystal) {
      crystal.rotation.y = (rotation * Math.PI) / 180;
    }
    
    // Update state
    puzzle.currentState[index] = rotation;
    
    // Check if all crystals aligned
    let allCorrect = true;
    for (let i = 0; i < puzzle.solution.length; i++) {
      if (puzzle.currentState[i] !== puzzle.solution[i]) {
        allCorrect = false;
        break;
      }
    }
    
    // Update beam visibility
    const beam = component.children.find(c => c.userData.beam);
    const light = component.userData.light;
    const isCorrect = puzzle.currentState[index] === puzzle.solution[index];
    
    if (beam) beam.visible = isCorrect;
    if (light) light.intensity = isCorrect ? 1 : 0;
    
    if (crystal) {
      crystal.material = isCorrect ? this.materials.crystalActive : this.materials.crystalInactive;
    }
    
    if (allCorrect) {
      this._solvePuzzle(puzzle);
    }
  }
  
  /**
   * Handle locked door
   */
  _handleLock(puzzle, component) {
    if (!puzzle.requiredKey) return;
    
    // Check if player has key
    const hasKey = this.gm?.inventory?.hasItem(puzzle.requiredKey);
    
    if (hasKey) {
      // Consume key
      this.gm.inventory.removeItem(puzzle.requiredKey, 1);
      
      // Unlock door
      component.userData.isLocked = false;
      
      // Update visuals
      const lock = component.children.find(c => c.userData.lock);
      if (lock) {
        lock.material = this.materials.lockUnlocked;
      }
      
      // Animate doors opening
      const doors = component.children.filter(c => c.userData.door);
      doors.forEach((door, i) => {
        const direction = i === 0 ? -1 : 1;
        door.position.x += direction * 1.8;
      });
      
      this._solvePuzzle(puzzle);
    } else {
      // Show "need key" message
      this._showStatus('🔒 This door is locked. Find the key to proceed.');
      if (this.audio) {
        this.audio.playSound('locked');
      }
    }
  }
  
  /**
   * Handle symbol pillar spin
   */
  _handleSymbol(puzzle, component, index) {
    const symbols = ['sun', 'moon', 'star', 'skull', 'eye', 'hand', 'flame', 'wave'];
    let symbolIndex = component.userData.symbolIndex || 0;
    symbolIndex = (symbolIndex + 1) % symbols.length;
    component.userData.symbolIndex = symbolIndex;
    
    // Update state
    puzzle.currentState[index] = symbols[symbolIndex];
    
    // Visual rotation
    const rotatable = component.children.find(c => c.userData.rotatable);
    if (rotatable) {
      rotatable.rotation.y += Math.PI / 4;
    }
    
    // Check if all symbols match
    let allCorrect = true;
    for (let i = 0; i < puzzle.solution.length; i++) {
      if (puzzle.currentState[i] !== puzzle.solution[i]) {
        allCorrect = false;
        break;
      }
    }
    
    if (allCorrect) {
      this._solvePuzzle(puzzle);
    }
  }
  
  /**
   * Handle torch lighting
   */
  _handleTorch(puzzle, component, index) {
    const isLit = component.userData.isLit;
    component.userData.isLit = !isLit;
    
    // Update visuals
    const flame = component.children.find(c => c.userData.flame);
    const light = component.userData.light;
    
    if (flame) {
      flame.material = !isLit ? this.materials.torchLit : this.materials.torchUnlit;
    }
    if (light) {
      light.intensity = !isLit ? 1 : 0;
    }
    
    // Add to sequence
    puzzle.inputSequence.push(index);
    
    // Check sequence when all torches have been toggled
    const litCount = puzzle.components.filter(c => c.userData.isLit).length;
    if (litCount === puzzle.componentCount) {
      // All lit - check if sequence is correct
      let correct = true;
      for (let i = 0; i < puzzle.solution.length; i++) {
        if (puzzle.inputSequence[i] !== puzzle.solution[i]) {
          correct = false;
          break;
        }
      }
      
      if (correct) {
        this._solvePuzzle(puzzle);
      } else {
        this._handlePuzzleFail(puzzle, 'extinguish_all');
      }
    }
  }
  
  /**
   * Handle scale placement
   */
  _handleScale(puzzle, component, index) {
    // Open item selection UI (simplified - just add weight)
    const currentWeight = component.userData.weight || 0;
    const newWeight = currentWeight + 5; // Simplified weight system
    component.userData.weight = newWeight;
    
    // Update state
    puzzle.currentState[index] = newWeight;
    
    // Tilt the beam based on weight
    const beam = component.children.find(c => c.userData.beam);
    if (beam) {
      const targetWeight = component.userData.targetWeight;
      const diff = newWeight - targetWeight;
      beam.rotation.z = Math.max(-0.3, Math.min(0.3, diff * 0.02));
    }
    
    // Check if all scales are balanced
    let allBalanced = true;
    for (let i = 0; i < puzzle.componentCount; i++) {
      const comp = puzzle.components[i];
      if (comp.userData.weight !== comp.userData.targetWeight) {
        allBalanced = false;
        break;
      }
    }
    
    if (allBalanced) {
      this._solvePuzzle(puzzle);
    }
  }
  
  /**
   * Handle puzzle failure
   */
  _handlePuzzleFail(puzzle, penalty) {
    puzzle.failCount++;
    
    console.log(`[PuzzleManager] Puzzle ${puzzle.id} failed (${penalty}), attempt ${puzzle.failCount}`);
    
    // Play failure sound
    if (this.audio) {
      this.audio.playSound('puzzle_fail');
    }
    
    // Reset puzzle state
    puzzle.inputSequence = [];
    puzzle.currentState = new Array(puzzle.componentCount).fill(0);
    
    // Reset visuals
    this._resetPuzzleVisuals(puzzle);
    
    // Apply penalty
    switch (penalty) {
      case 'spawn_enemies':
        this._spawnFailEnemies(puzzle);
        break;
      case 'trap_activation':
        this._activateFailTraps(puzzle);
        break;
      case 'damage_pulse':
        this._dealDamageToPlayer(20);
        break;
      case 'extinguish_all':
        // Already handled by resetting visuals
        break;
    }
    
    // Show failure message
    this._showStatus('❌ Puzzle failed! The mechanism resets...');
  }
  
  /**
   * Reset puzzle visuals to initial state
   */
  _resetPuzzleVisuals(puzzle) {
    for (const component of puzzle.components) {
      const type = component.userData.interactType;
      
      switch (type) {
        case 'step':
          const topMesh = component.children.find(c => c.userData.pressable);
          const glowMesh = component.children.find(c => c.userData.glow);
          if (topMesh) {
            topMesh.position.y = 0.15;
            topMesh.material = this.materials.plateInactive;
          }
          if (glowMesh) {
            glowMesh.material.opacity = 0;
          }
          break;
          
        case 'pull':
          component.userData.isPulled = false;
          const armGroup = component.userData.armGroup;
          if (armGroup?.children[0]) {
            armGroup.children[0].rotation.x = -Math.PI / 4;
          }
          break;
          
        case 'light':
          component.userData.isLit = false;
          const flame = component.children.find(c => c.userData.flame);
          const light = component.userData.light;
          if (flame) flame.material = this.materials.torchUnlit;
          if (light) light.intensity = 0;
          break;
      }
    }
  }
  
  /**
   * Spawn enemies on puzzle failure
   */
  _spawnFailEnemies(puzzle) {
    // Notify enemy manager to spawn enemies
    if (this.gm?.enemyManager) {
      const spawnPos = puzzle.roomPosition.clone();
      spawnPos.y = 0;
      
      // Spawn 2-3 enemies
      for (let i = 0; i < 2 + Math.floor(Math.random()); i++) {
        const offset = new THREE.Vector3(
          (Math.random() - 0.5) * 6,
          0,
          (Math.random() - 0.5) * 6
        );
        this.gm.enemyManager.spawnEnemy(spawnPos.clone().add(offset), 'skeleton_warrior');
      }
    }
  }
  
  /**
   * Activate traps on puzzle failure
   */
  _activateFailTraps(puzzle) {
    // Trigger nearby traps
    if (this.gm?.trapManager) {
      this.gm.trapManager.activateNearby(puzzle.roomPosition, 8);
    }
    
    // Fallback: deal damage
    this._dealDamageToPlayer(15);
  }
  
  /**
   * Deal damage to player
   */
  _dealDamageToPlayer(amount) {
    if (this.gm?.player) {
      this.gm.player.takeDamage(amount, 'trap');
    }
  }
  
  /**
   * Solve puzzle
   */
  _solvePuzzle(puzzle) {
    console.log(`[PuzzleManager] Puzzle ${puzzle.id} SOLVED!`);
    
    puzzle.isActive = false;
    this.solvedPuzzles.add(puzzle.id);
    
    // Save state
    this._savePuzzleState();
    
    // Play success sound
    if (this.audio) {
      this.audio.playSound('puzzle_solved');
    }
    
    // Visual celebration
    this._playSuccessEffect(puzzle);
    
    // Show solved notification
    this._showSolvedNotification(puzzle);
    
    // Grant reward
    if (puzzle.reward) {
      this._grantReward(puzzle.reward);
    }
    
    // Unlock blocked paths
    this._unlockPath(puzzle);
  }
  
  /**
   * Play success visual effect
   */
  _playSuccessEffect(puzzle) {
    const group = this.puzzleObjects.get(puzzle.id);
    if (!group) return;
    
    // Make all components glow green
    for (const component of puzzle.components) {
      component.traverse(child => {
        if (child.isMesh && child.material) {
          const originalMaterial = child.material;
          child.material = this.materials.plateCorrect.clone();
          
          // Restore after delay
          setTimeout(() => {
            child.material = originalMaterial;
          }, 2000);
        }
      });
    }
    
    // Add particle burst
    if (this.gm?.particles) {
      this.gm.particles.createBurst(
        group.position,
        0x44ff44,
        30,
        3
      );
    }
  }
  
  /**
   * Show solved notification
   */
  _showSolvedNotification(puzzle) {
    const rewardDiv = document.getElementById('puzzle-reward');
    if (rewardDiv && puzzle.reward?.items) {
      const itemNames = puzzle.reward.items.map(i => i.name || i.id).join(', ');
      rewardDiv.textContent = `Rewards: ${puzzle.reward.remnants || 0} Remnants, ${itemNames}`;
    }
    
    this.solvedNotification.style.transform = 'translate(-50%, -50%) scale(1)';
    
    setTimeout(() => {
      this.solvedNotification.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 3000);
  }
  
  /**
   * Grant puzzle reward
   */
  _grantReward(reward) {
    if (this.gm?.inventory) {
      // Add remnants
      if (reward.remnants) {
        this.gm.inventory.addRemnants(reward.remnants);
      }
      
      // Add items
      if (reward.items) {
        for (const item of reward.items) {
          this.gm.inventory.addItem(item);
        }
      }
    }
  }
  
  /**
   * Unlock blocked path after puzzle solve
   */
  _unlockPath(puzzle) {
    // Notify dungeon manager to unlock doors/paths
    if (this.gm?.dungeonManager) {
      this.gm.dungeonManager.onPuzzleSolved(puzzle.id);
    }
  }
  
  /**
   * Show hint for puzzle
   */
  _showHint(puzzle) {
    if (!puzzle.hint) {
      this.hintContainer.textContent = 'No hints available for this puzzle.';
    } else {
      const hints = {
        symbols_on_walls: '💡 Look for symbols carved into the walls. They may reveal the correct sequence.',
        light_beams: '💡 Follow where the light beams point. Align crystals to focus on the target.',
        mural_reference: '💡 A mural nearby shows the correct symbol arrangement.',
        shadow_patterns: '💡 Watch the shadows when torches are lit. They reveal the pattern.',
      };
      
      this.hintContainer.textContent = hints[puzzle.hint] || puzzle.hint;
    }
    
    this.hintContainer.style.display = 'block';
    
    setTimeout(() => {
      this.hintContainer.style.display = 'none';
    }, 5000);
  }
  
  /**
   * Show status message
   */
  _showStatus(message) {
    this.statusContainer.innerHTML = `
      <div style="color: #88ddff; font-size: 16px;">${message}</div>
    `;
    this.statusContainer.style.display = 'flex';
    
    setTimeout(() => {
      this.statusContainer.style.display = 'none';
    }, 3000);
  }
  
  /**
   * Update puzzle animations
   */
  _updateAnimations(deltaTime) {
    const time = performance.now() * 0.001;
    
    for (const [puzzleId, puzzle] of this.puzzles) {
      const group = this.puzzleObjects.get(puzzleId);
      if (!group) continue;
      
      // Animate active elements
      for (const component of puzzle.components) {
        // Pulse glow effects
        const glowMesh = component.children.find(c => c.userData.glow);
        if (glowMesh && glowMesh.material.opacity > 0) {
          glowMesh.material.opacity = 0.5 + Math.sin(time * 3) * 0.3;
        }
        
        // Flicker lights
        const light = component.userData.light;
        if (light && light.intensity > 0) {
          light.intensity = 0.8 + Math.random() * 0.4;
        }
        
        // Crystal beams pulse
        const beam = component.children.find(c => c.userData.beam);
        if (beam && beam.visible) {
          beam.material.opacity = 0.3 + Math.sin(time * 2) * 0.15;
        }
      }
    }
  }
  
  /**
   * Save puzzle state to localStorage
   */
  _savePuzzleState() {
    const state = Array.from(this.solvedPuzzles);
    try {
      localStorage.setItem('ashen_solved_puzzles', JSON.stringify(state));
    } catch (e) {
      console.warn('[PuzzleManager] Failed to save puzzle state:', e);
    }
  }
  
  /**
   * Load puzzle state from localStorage
   */
  _loadPuzzleState() {
    try {
      const saved = localStorage.getItem('ashen_solved_puzzles');
      if (saved) {
        const state = JSON.parse(saved);
        this.solvedPuzzles = new Set(state);
        console.log(`[PuzzleManager] Loaded ${this.solvedPuzzles.size} solved puzzles`);
      }
    } catch (e) {
      console.warn('[PuzzleManager] Failed to load puzzle state:', e);
    }
  }
  
  /**
   * Clear all puzzle state (for testing)
   */
  clearState() {
    this.solvedPuzzles.clear();
    this._savePuzzleState();
    console.log('[PuzzleManager] Cleared all puzzle state');
  }
  
  /**
   * Check if puzzle is solved
   */
  isPuzzleSolved(puzzleId) {
    return this.solvedPuzzles.has(puzzleId);
  }
  
  /**
   * Get puzzle by ID
   */
  getPuzzle(puzzleId) {
    return this.puzzles.get(puzzleId);
  }
  
  /**
   * Clean up dungeon puzzles
   */
  clearDungeonPuzzles() {
    for (const [puzzleId, group] of this.puzzleObjects) {
      this.scene.remove(group);
      group.traverse(child => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(m => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }
    
    this.puzzles.clear();
    this.puzzleObjects.clear();
    this.activePuzzle = null;
    this.activeComponent = null;
    
    console.log('[PuzzleManager] Cleared dungeon puzzles');
  }
  
  /**
   * Dispose of all resources
   */
  dispose() {
    this.clearDungeonPuzzles();
    
    // Remove UI elements
    this.promptContainer?.remove();
    this.statusContainer?.remove();
    this.hintContainer?.remove();
    this.solvedNotification?.remove();
    
    // Dispose materials
    for (const mat of Object.values(this.materials)) {
      mat.dispose();
    }
    
    console.log('[PuzzleManager] Disposed');
  }
}
