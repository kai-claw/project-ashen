#!/usr/bin/env node
/**
 * Project Ashen - Automated Game Test Script
 * 
 * This script uses Puppeteer to test the game by:
 * 1. Loading the game in a headless browser with WebGL support
 * 2. Taking screenshots at various stages
 * 3. Simulating player inputs (WASD movement, attacks)
 * 4. Reporting observations about the game state
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const GAME_URL = 'https://kai-claw.github.io/project-ashen/';
const SCREENSHOT_DIR = path.join(__dirname, 'test-screenshots');

// Ensure screenshot directory exists
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function takeScreenshot(page, name) {
  const filepath = path.join(SCREENSHOT_DIR, name);
  await page.screenshot({ path: filepath, fullPage: false });
  console.log(`📸 Screenshot saved: ${name}`);
  return filepath;
}

async function runGameTest() {
  console.log('🎮 Project Ashen - Automated Game Test');
  console.log('======================================\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/usr/bin/chromium-browser',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu-sandbox',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--use-gl=angle',
      '--use-angle=swiftshader',  // Software WebGL rendering for headless
      '--window-size=1280,720',
    ],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  // Collect console logs from the game
  const consoleLogs = [];
  page.on('console', msg => {
    const text = msg.text();
    consoleLogs.push({ type: msg.type(), text });
  });

  // Track errors
  const errors = [];
  page.on('pageerror', err => {
    errors.push(err.message);
  });

  try {
    console.log(`🌐 Loading game: ${GAME_URL}`);
    
    // Try to navigate - catch timeout and continue anyway
    try {
      await page.goto(GAME_URL, { 
        waitUntil: 'load',
        timeout: 30000 
      });
    } catch (navError) {
      console.log('⚠️ Page load timeout - continuing anyway...');
    }

    // Wait a bit for scripts to initialize
    console.log('⏳ Waiting for scripts to initialize...');
    await delay(3000);
    
    // Wait for canvas to appear
    console.log('⏳ Checking for canvas element...');
    try {
      await page.waitForSelector('canvas', { timeout: 5000 });
    } catch (e) {
      console.log('⚠️ Canvas not found within timeout');
    }
    
    // Give WebGL time to initialize and models to load
    console.log('⏳ Waiting for WebGL initialization (5 seconds)...');
    await delay(5000);

    // Take initial screenshot
    await takeScreenshot(page, '01-loaded.png');

    // Check if canvas exists and has content
    const canvasInfo = await page.evaluate(() => {
      const canvas = document.querySelector('canvas');
      if (!canvas) return { exists: false };
      
      const gl = canvas.getContext('webgl') || canvas.getContext('webgl2');
      return {
        exists: true,
        width: canvas.width,
        height: canvas.height,
        hasWebGL: !!gl,
        webGLVersion: gl ? (canvas.getContext('webgl2') ? 'WebGL2' : 'WebGL1') : 'none',
      };
    });

    console.log('\n📊 Canvas Info:', canvasInfo);

    // Click to focus/start the game and initialize audio
    console.log('\n🖱️ Clicking canvas to focus and start game...');
    await page.click('canvas');
    await delay(1000);
    await takeScreenshot(page, '02-clicked.png');

    // Get game state if available
    const gameState = await page.evaluate(() => {
      if (window.gameManager) {
        return {
          health: window.gameManager.health,
          maxHealth: window.gameManager.maxHealth,
          stamina: window.gameManager.stamina,
          remnants: window.gameManager.remnant,
          isDead: window.gameManager.isDead,
        };
      }
      return null;
    });

    if (gameState) {
      console.log('\n📊 Initial Game State:', gameState);
    }

    // Get player position
    const playerPos = await page.evaluate(() => {
      if (window.player && window.player.mesh) {
        return window.player.mesh.position.toArray().map(n => n.toFixed(2));
      }
      return null;
    });

    if (playerPos) {
      console.log('📍 Player Position:', playerPos);
    }

    // Test movement - WASD keys
    console.log('\n🎮 Testing movement controls (WASD)...');
    
    // Move forward (W)
    await page.keyboard.down('w');
    await delay(1000);
    await page.keyboard.up('w');
    
    // Move left (A)
    await page.keyboard.down('a');
    await delay(500);
    await page.keyboard.up('a');
    
    // Move backward (S)
    await page.keyboard.down('s');
    await delay(500);
    await page.keyboard.up('s');
    
    // Move right (D)
    await page.keyboard.down('d');
    await delay(500);
    await page.keyboard.up('d');

    await delay(500);
    await takeScreenshot(page, '03-moved.png');

    // Get player position after movement
    const newPlayerPos = await page.evaluate(() => {
      if (window.player && window.player.mesh) {
        return window.player.mesh.position.toArray().map(n => n.toFixed(2));
      }
      return null;
    });

    if (newPlayerPos && playerPos) {
      console.log('📍 New Player Position:', newPlayerPos);
      const moved = playerPos.some((p, i) => Math.abs(parseFloat(p) - parseFloat(newPlayerPos[i])) > 0.1);
      console.log(moved ? '✅ Player successfully moved!' : '⚠️ Player position unchanged');
    }

    // Test attack - left click
    console.log('\n⚔️ Testing attack (left click)...');
    await page.mouse.click(640, 360); // Click center of screen
    await delay(300);
    await page.mouse.click(640, 360); // Another attack
    await delay(500);
    await takeScreenshot(page, '04-attacked.png');

    // Check player state after attack
    const attackState = await page.evaluate(() => {
      if (window.player) {
        return {
          state: window.player.state,
          stamina: window.gameManager?.stamina,
        };
      }
      return null;
    });

    if (attackState) {
      console.log('📊 After Attack - Player State:', attackState);
    }

    // Test dodge - Space key
    console.log('\n🌀 Testing dodge (Space)...');
    await page.keyboard.press('Space');
    await delay(600);

    // Test heavy attack - Shift + click
    console.log('\n💥 Testing heavy attack (Shift+Click)...');
    await page.keyboard.down('Shift');
    await page.mouse.click(640, 360);
    await page.keyboard.up('Shift');
    await delay(800);

    // Final screenshot
    await takeScreenshot(page, '05-final.png');

    // Get final game state
    const finalState = await page.evaluate(() => {
      const result = {
        gameManager: null,
        player: null,
        world: null,
        enemies: null,
      };

      if (window.gameManager) {
        result.gameManager = {
          health: window.gameManager.health,
          maxHealth: window.gameManager.maxHealth,
          stamina: window.gameManager.stamina,
          remnants: window.gameManager.remnant,
          isDead: window.gameManager.isDead,
          checkpoint: window.gameManager.checkpoint?.toArray().map(n => n.toFixed(2)),
        };
      }

      if (window.player) {
        result.player = {
          position: window.player.mesh?.position.toArray().map(n => n.toFixed(2)),
          state: window.player.state,
          modelLoaded: window.player.modelLoaded,
        };
      }

      if (window.world) {
        result.world = {
          bonfirePosition: window.world.bonfirePosition?.toArray().map(n => n.toFixed(2)),
        };
      }

      // Check enemies
      const enemyMgr = window.gameManager?.enemyManager;
      if (enemyMgr) {
        result.enemies = {
          count: enemyMgr.enemies?.length || 0,
          bossActive: enemyMgr.boss?.isActive || false,
          bossHealth: enemyMgr.boss?.health,
        };
      }

      return result;
    });

    // Print summary
    console.log('\n' + '='.repeat(50));
    console.log('📋 TEST SUMMARY');
    console.log('='.repeat(50));
    
    console.log('\n📊 Canvas:', canvasInfo.exists ? `${canvasInfo.width}x${canvasInfo.height} (${canvasInfo.webGLVersion})` : 'NOT FOUND');
    
    if (finalState.gameManager) {
      console.log('\n🎮 Game Manager:');
      console.log(`   Health: ${finalState.gameManager.health}/${finalState.gameManager.maxHealth}`);
      console.log(`   Stamina: ${finalState.gameManager.stamina?.toFixed(1)}`);
      console.log(`   Remnants: ${finalState.gameManager.remnants}`);
      console.log(`   Checkpoint: [${finalState.gameManager.checkpoint}]`);
    }

    if (finalState.player) {
      console.log('\n👤 Player:');
      console.log(`   Position: [${finalState.player.position}]`);
      console.log(`   State: ${finalState.player.state}`);
      console.log(`   Model Loaded: ${finalState.player.modelLoaded}`);
    }

    if (finalState.enemies) {
      console.log('\n👹 Enemies:');
      console.log(`   Enemy Count: ${finalState.enemies.count}`);
      console.log(`   Boss Active: ${finalState.enemies.bossActive}`);
      console.log(`   Boss Health: ${finalState.enemies.bossHealth}`);
    }

    if (errors.length > 0) {
      console.log('\n❌ Errors encountered:');
      errors.forEach(err => console.log(`   - ${err}`));
    } else {
      console.log('\n✅ No JavaScript errors detected');
    }

    // Print relevant console logs
    const relevantLogs = consoleLogs.filter(log => 
      !log.text.includes('DevTools') && 
      !log.text.includes('Download the React DevTools')
    );
    
    if (relevantLogs.length > 0) {
      console.log(`\n📝 Console Logs (${relevantLogs.length} messages):`);
      relevantLogs.slice(0, 10).forEach(log => {
        console.log(`   [${log.type}] ${log.text.substring(0, 100)}${log.text.length > 100 ? '...' : ''}`);
      });
      if (relevantLogs.length > 10) {
        console.log(`   ... and ${relevantLogs.length - 10} more`);
      }
    }

    console.log('\n📸 Screenshots saved to:', SCREENSHOT_DIR);
    console.log('='.repeat(50));

  } catch (error) {
    console.error('\n❌ Test failed with error:', error.message);
    await takeScreenshot(page, 'error-state.png');
  } finally {
    await browser.close();
  }
}

// Run the test
runGameTest().catch(console.error);
