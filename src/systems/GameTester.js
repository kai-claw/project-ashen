/**
 * GameTester.js - In-game automated testing framework
 * 
 * Usage:
 *   URL params: ?autotest=all | ?autotest=combat,movement,map
 *   Console: window.GameTester.run('combat')
 *   Console: window.GameTester.runAll()
 * 
 * Results logged to console as JSON for parsing
 */

export class GameTester {
  constructor(game) {
    this.game = game;
    this.results = [];
    this.currentTest = null;
    this.testQueue = [];
    this.isRunning = false;
    
    // Expose globally for console access
    window.GameTester = this;
    
    // Check URL params on init
    this.checkAutotest();
  }
  
  checkAutotest() {
    const params = new URLSearchParams(window.location.search);
    const autotest = params.get('autotest');
    
    if (autotest) {
      // Wait for game to fully initialize
      setTimeout(() => {
        if (autotest === 'all') {
          this.runAll();
        } else {
          const tests = autotest.split(',').map(t => t.trim());
          this.runTests(tests);
        }
      }, 3000);
    }
  }
  
  log(type, message, data = {}) {
    const entry = {
      type,
      test: this.currentTest,
      message,
      timestamp: Date.now(),
      ...data
    };
    console.log(`[GameTester] ${JSON.stringify(entry)}`);
    return entry;
  }
  
  async runAll() {
    const allTests = [
      'init',
      'movement',
      'combat',
      'minimap',
      'worldmap',
      'inventory',
      'hud',
      'save-load'
    ];
    return this.runTests(allTests);
  }
  
  async runTests(testNames) {
    if (this.isRunning) {
      this.log('error', 'Tests already running');
      return;
    }
    
    this.isRunning = true;
    this.results = [];
    this.log('start', `Starting test suite: ${testNames.join(', ')}`);
    
    for (const name of testNames) {
      await this.runSingleTest(name);
      await this.sleep(500); // Brief pause between tests
    }
    
    this.isRunning = false;
    this.reportSummary();
    return this.results;
  }
  
  async run(testName) {
    return this.runTests([testName]);
  }
  
  async runSingleTest(name) {
    this.currentTest = name;
    const startTime = Date.now();
    
    try {
      this.log('test-start', `Running test: ${name}`);
      
      const testMethod = this[`test_${name.replace(/-/g, '_')}`];
      if (!testMethod) {
        throw new Error(`Unknown test: ${name}`);
      }
      
      const result = await testMethod.call(this);
      const duration = Date.now() - startTime;
      
      this.results.push({
        test: name,
        status: result.pass ? 'PASS' : 'FAIL',
        duration,
        details: result
      });
      
      this.log(result.pass ? 'pass' : 'fail', result.message, { duration, details: result });
      
    } catch (err) {
      const duration = Date.now() - startTime;
      this.results.push({
        test: name,
        status: 'ERROR',
        duration,
        error: err.message
      });
      this.log('error', `Test error: ${err.message}`, { duration, stack: err.stack });
    }
    
    this.currentTest = null;
  }
  
  reportSummary() {
    const passed = this.results.filter(r => r.status === 'PASS').length;
    const failed = this.results.filter(r => r.status === 'FAIL').length;
    const errors = this.results.filter(r => r.status === 'ERROR').length;
    
    const summary = {
      type: 'summary',
      total: this.results.length,
      passed,
      failed,
      errors,
      success: failed === 0 && errors === 0,
      results: this.results
    };
    
    console.log(`[GameTester] ${JSON.stringify(summary)}`);
    
    // Also output human-readable
    console.log(`\n========== TEST RESULTS ==========`);
    console.log(`Total: ${this.results.length} | Pass: ${passed} | Fail: ${failed} | Error: ${errors}`);
    this.results.forEach(r => {
      const icon = r.status === 'PASS' ? '✅' : r.status === 'FAIL' ? '❌' : '⚠️';
      console.log(`${icon} ${r.test}: ${r.status} (${r.duration}ms)`);
    });
    console.log(`==================================\n`);
    
    return summary;
  }
  
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // ============ TEST IMPLEMENTATIONS ============
  
  async test_init() {
    const checks = {
      gameExists: !!this.game,
      sceneExists: !!this.game?.scene,
      cameraExists: !!this.game?.camera,
      rendererExists: !!this.game?.renderer,
      playerExists: !!this.game?.player,
      worldExists: !!this.game?.world || !!this.game?.terrain
    };
    
    const allPassed = Object.values(checks).every(v => v);
    
    return {
      pass: allPassed,
      message: allPassed ? 'Game initialized correctly' : 'Missing core components',
      checks
    };
  }
  
  async test_movement() {
    const player = this.game?.player;
    if (!player) {
      return { pass: false, message: 'No player found' };
    }
    
    const startPos = player.position ? 
      { x: player.position.x, y: player.position.y, z: player.position.z } :
      { x: player.x, y: player.y, z: player.z || 0 };
    
    // Simulate forward movement
    this.simulateKey('w', 500);
    await this.sleep(600);
    
    const endPos = player.position ?
      { x: player.position.x, y: player.position.y, z: player.position.z } :
      { x: player.x, y: player.y, z: player.z || 0 };
    
    const moved = 
      Math.abs(endPos.x - startPos.x) > 0.1 ||
      Math.abs(endPos.z - startPos.z) > 0.1 ||
      Math.abs(endPos.y - startPos.y) > 0.1;
    
    return {
      pass: moved,
      message: moved ? 'Player movement working' : 'Player did not move',
      startPos,
      endPos,
      delta: {
        x: endPos.x - startPos.x,
        y: endPos.y - startPos.y,
        z: endPos.z - startPos.z
      }
    };
  }
  
  async test_combat() {
    const player = this.game?.player;
    const combatSystem = this.game?.combatSystem || this.game?.combat || window.CombatSystem;
    
    if (!player) {
      return { pass: false, message: 'No player found' };
    }
    
    // Get initial stamina/state
    const initialStamina = player.stamina ?? player.stats?.stamina ?? 100;
    
    // Simulate attack
    this.simulateKey(' ', 100); // Space for attack
    await this.sleep(300);
    
    const afterStamina = player.stamina ?? player.stats?.stamina ?? 100;
    
    // Check if stamina was consumed (indicates attack fired)
    const staminaConsumed = afterStamina < initialStamina;
    
    // Alternative check: see if attack animation/state changed
    const isAttacking = player.isAttacking || player.state === 'attacking' || player.attacking;
    
    const attackWorked = staminaConsumed || isAttacking;
    
    return {
      pass: attackWorked,
      message: attackWorked ? 'Combat system responding' : 'Attack did not register',
      initialStamina,
      afterStamina,
      staminaConsumed,
      isAttacking,
      combatSystemExists: !!combatSystem
    };
  }
  
  async test_minimap() {
    const minimap = this.game?.minimapManager || this.game?.minimap || window.MinimapManager;
    
    if (!minimap) {
      return { pass: false, message: 'MinimapManager not found' };
    }
    
    const checks = {
      exists: !!minimap,
      hasCanvas: !!minimap.canvas || !!minimap.ctx,
      isVisible: minimap.visible !== false,
      hasPlayerMarker: typeof minimap.drawPlayer === 'function' || minimap.playerMarker !== undefined
    };
    
    // Try toggle
    if (typeof minimap.toggle === 'function') {
      const before = minimap.visible;
      minimap.toggle();
      const after = minimap.visible;
      minimap.toggle(); // Toggle back
      checks.toggleWorks = before !== after;
    }
    
    const allPassed = checks.exists && checks.hasCanvas;
    
    return {
      pass: allPassed,
      message: allPassed ? 'Minimap functioning' : 'Minimap issues detected',
      checks
    };
  }
  
  async test_worldmap() {
    const worldMap = this.game?.worldMapUI || this.game?.worldMap || window.WorldMapUI;
    
    if (!worldMap) {
      return { pass: false, message: 'WorldMapUI not found' };
    }
    
    const checks = {
      exists: !!worldMap,
      hasContainer: !!worldMap.container || !!worldMap.element,
      canOpen: typeof worldMap.open === 'function' || typeof worldMap.show === 'function' || typeof worldMap.toggle === 'function'
    };
    
    // Try opening the map
    if (checks.canOpen) {
      const openFn = worldMap.open || worldMap.show || worldMap.toggle;
      openFn.call(worldMap);
      await this.sleep(200);
      
      checks.isVisible = worldMap.visible !== false || 
        (worldMap.container && worldMap.container.style.display !== 'none');
      
      // Close it
      const closeFn = worldMap.close || worldMap.hide || worldMap.toggle;
      if (closeFn) closeFn.call(worldMap);
    }
    
    const allPassed = checks.exists && checks.canOpen;
    
    return {
      pass: allPassed,
      message: allPassed ? 'World map functioning' : 'World map issues detected',
      checks
    };
  }
  
  async test_inventory() {
    const inventory = this.game?.inventory || this.game?.inventoryManager || window.InventoryManager;
    const player = this.game?.player;
    
    const checks = {
      systemExists: !!inventory,
      playerHasInventory: !!(player?.inventory || player?.items),
      canAddItem: typeof inventory?.addItem === 'function' || typeof player?.addItem === 'function'
    };
    
    // Test adding an item if possible
    if (checks.canAddItem) {
      try {
        const addFn = inventory?.addItem || player?.addItem;
        const testItem = { id: 'test_item', name: 'Test Item', type: 'misc' };
        const initialCount = inventory?.items?.length || player?.inventory?.length || 0;
        addFn.call(inventory || player, testItem);
        const newCount = inventory?.items?.length || player?.inventory?.length || 0;
        checks.itemAdded = newCount > initialCount;
        
        // Remove test item
        if (inventory?.removeItem) inventory.removeItem('test_item');
        else if (player?.removeItem) player.removeItem('test_item');
      } catch (e) {
        checks.addItemError = e.message;
      }
    }
    
    const allPassed = checks.systemExists || checks.playerHasInventory;
    
    return {
      pass: allPassed,
      message: allPassed ? 'Inventory system present' : 'Inventory system not found',
      checks
    };
  }
  
  async test_hud() {
    const checks = {
      hudElement: !!document.getElementById('hud'),
      healthBar: !!document.querySelector('.health-fill, .health-bar, [data-health]'),
      staminaBar: !!document.querySelector('.stamina-fill, .stamina-bar, [data-stamina]'),
      crosshair: !!document.getElementById('crosshair') || !!document.querySelector('.crosshair'),
      canvas: !!document.querySelector('canvas')
    };
    
    // Check if canvas is rendering (not black/empty)
    const canvas = document.querySelector('canvas');
    if (canvas) {
      try {
        const ctx = canvas.getContext('2d') || canvas.getContext('webgl') || canvas.getContext('webgl2');
        checks.contextExists = !!ctx;
        checks.canvasSize = { width: canvas.width, height: canvas.height };
        checks.canvasVisible = canvas.offsetWidth > 0 && canvas.offsetHeight > 0;
      } catch (e) {
        checks.canvasError = e.message;
      }
    }
    
    const allPassed = checks.canvas && checks.hudElement;
    
    return {
      pass: allPassed,
      message: allPassed ? 'HUD elements present' : 'HUD issues detected',
      checks
    };
  }
  
  async test_save_load() {
    const saveManager = this.game?.saveManager || this.game?.saveSystem || window.SaveManager;
    
    if (!saveManager) {
      // Check localStorage fallback
      const hasLocalStorage = typeof localStorage !== 'undefined';
      return {
        pass: hasLocalStorage,
        message: hasLocalStorage ? 'localStorage available (no dedicated save manager)' : 'No save system found',
        checks: { hasLocalStorage }
      };
    }
    
    const checks = {
      exists: !!saveManager,
      canSave: typeof saveManager.save === 'function' || typeof saveManager.saveGame === 'function',
      canLoad: typeof saveManager.load === 'function' || typeof saveManager.loadGame === 'function'
    };
    
    // Test save/load cycle if available
    if (checks.canSave) {
      try {
        const saveFn = saveManager.save || saveManager.saveGame;
        saveFn.call(saveManager);
        checks.saveSucceeded = true;
      } catch (e) {
        checks.saveError = e.message;
      }
    }
    
    const allPassed = checks.exists && checks.canSave;
    
    return {
      pass: allPassed,
      message: allPassed ? 'Save system functional' : 'Save system issues',
      checks
    };
  }
  
  // ============ INPUT SIMULATION ============
  
  simulateKey(key, duration = 100) {
    const keyCode = this.getKeyCode(key);
    const event = new KeyboardEvent('keydown', {
      key: key,
      code: keyCode,
      keyCode: this.getKeyCodeNumber(key),
      bubbles: true
    });
    
    document.dispatchEvent(event);
    
    if (duration > 0) {
      setTimeout(() => {
        const upEvent = new KeyboardEvent('keyup', {
          key: key,
          code: keyCode,
          keyCode: this.getKeyCodeNumber(key),
          bubbles: true
        });
        document.dispatchEvent(upEvent);
      }, duration);
    }
  }
  
  getKeyCode(key) {
    const codes = {
      'w': 'KeyW', 'a': 'KeyA', 's': 'KeyS', 'd': 'KeyD',
      ' ': 'Space', 'Space': 'Space',
      'Enter': 'Enter', 'Escape': 'Escape',
      'Tab': 'Tab', 'm': 'KeyM', 'i': 'KeyI', 'e': 'KeyE'
    };
    return codes[key] || `Key${key.toUpperCase()}`;
  }
  
  getKeyCodeNumber(key) {
    const codes = {
      'w': 87, 'a': 65, 's': 83, 'd': 68,
      ' ': 32, 'Space': 32,
      'Enter': 13, 'Escape': 27,
      'Tab': 9, 'm': 77, 'i': 73, 'e': 69
    };
    return codes[key] || key.toUpperCase().charCodeAt(0);
  }
  
  simulateClick(x, y) {
    const canvas = document.querySelector('canvas');
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const event = new MouseEvent('click', {
      clientX: rect.left + x,
      clientY: rect.top + y,
      bubbles: true
    });
    canvas.dispatchEvent(event);
  }
  
  // ============ STATE INSPECTION ============
  
  getGameState() {
    const player = this.game?.player;
    
    return {
      timestamp: Date.now(),
      player: player ? {
        position: player.position || { x: player.x, y: player.y, z: player.z },
        health: player.health ?? player.stats?.health,
        stamina: player.stamina ?? player.stats?.stamina,
        level: player.level,
        state: player.state
      } : null,
      world: {
        time: this.game?.worldTime || this.game?.timeOfDay,
        weather: this.game?.weather,
        currentArea: this.game?.currentArea || this.game?.currentRegion
      },
      ui: {
        minimapVisible: this.game?.minimapManager?.visible,
        worldMapOpen: this.game?.worldMapUI?.visible,
        menuOpen: this.game?.menuOpen,
        dialogOpen: this.game?.dialogOpen
      }
    };
  }
  
  // Quick state dump
  dumpState() {
    const state = this.getGameState();
    console.log(`[GameTester] STATE: ${JSON.stringify(state)}`);
    return state;
  }
}

export default GameTester;
