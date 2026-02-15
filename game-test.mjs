#!/usr/bin/env node
/**
 * Project Ashen - Game Testing Harness
 * 
 * Usage:
 *   node game-test.mjs screenshot [output.png]
 *   node game-test.mjs play "WASD sequence" [output.png]
 *   node game-test.mjs test "walk around" [output.png]
 *   node game-test.mjs record [duration_seconds] [output.mp4]
 *   node game-test.mjs interact [JSON commands]
 */

import puppeteer from 'puppeteer';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const GAME_URL = 'https://kai-claw.github.io/project-ashen/';
const DEFAULT_SCREENSHOT_DIR = '/tmp/ashen-test';

// Ensure output directory exists
if (!existsSync(DEFAULT_SCREENSHOT_DIR)) {
  mkdirSync(DEFAULT_SCREENSHOT_DIR, { recursive: true });
}

async function launchBrowser() {
  return puppeteer.launch({
    headless: 'new',
    executablePath: '/snap/bin/chromium',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--use-angle=swiftshader-webgl',
      '--window-size=1280,720'
    ]
  });
}

async function initGame(page) {
  await page.setViewport({ width: 1280, height: 720 });
  console.error('[game-test] Loading game...');
  await page.goto(GAME_URL, { waitUntil: 'networkidle0', timeout: 45000 });
  
  console.error('[game-test] Waiting for canvas...');
  await page.waitForSelector('canvas', { timeout: 15000 });
  
  console.error('[game-test] Waiting for init...');
  await sleep(2000);
  
  // Click to focus the game
  await page.click('canvas');
  await sleep(1000);
  
  // Press Enter to dismiss any menus/dialogs
  await page.keyboard.press('Enter');
  await sleep(500);
  
  console.error('[game-test] Game ready');
  return page;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// Parse key sequence like "W W W W A A D D Space"
async function playSequence(page, sequence) {
  const keys = sequence.trim().split(/\s+/);
  console.error(`[game-test] Playing sequence: ${keys.length} keys`);
  
  for (const key of keys) {
    const normalizedKey = normalizeKey(key);
    if (normalizedKey === 'WAIT') {
      await sleep(500);
    } else if (normalizedKey.startsWith('HOLD:')) {
      const [, holdKey, durationMs] = normalizedKey.split(':');
      await holdKey(page, holdKey, parseInt(durationMs) || 1000);
    } else {
      await page.keyboard.press(normalizedKey);
      await sleep(100); // Small delay between keypresses
    }
  }
}

function normalizeKey(key) {
  const keyMap = {
    'w': 'w', 'W': 'w',
    'a': 'a', 'A': 'a',
    's': 's', 'S': 's',
    'd': 'd', 'D': 'd',
    'space': 'Space', 'SPACE': 'Space', 'Space': 'Space',
    'enter': 'Enter', 'ENTER': 'Enter', 'Enter': 'Enter',
    'tab': 'Tab', 'TAB': 'Tab', 'Tab': 'Tab',
    'escape': 'Escape', 'esc': 'Escape', 'ESC': 'Escape',
    'm': 'm', 'M': 'm',
    'i': 'i', 'I': 'i',
    'e': 'e', 'E': 'e',
    'q': 'q', 'Q': 'q',
    '1': '1', '2': '2', '3': '3', '4': '4', '5': '5',
    'f': 'f', 'F': 'f',
    'c': 'c', 'C': 'c',
    'wait': 'WAIT', 'WAIT': 'WAIT',
  };
  return keyMap[key] || key;
}

async function holdKey(page, key, durationMs) {
  await page.keyboard.down(key);
  await sleep(durationMs);
  await page.keyboard.up(key);
}

// Execute a test scenario
async function executeScenario(page, scenarioName) {
  const scenarios = {
    'walk-around': 'w w w w d d d d s s s s a a a a',
    'open-map': 'Tab WAIT WAIT',
    'close-map': 'Tab',
    'test-movement': 'w w w d d d s s s a a a',
    'explore': 'w w w w w w d d d d d d w w w w a a a a',
    'open-menu': 'Escape WAIT',
    'test-minimap': 'm WAIT WAIT m',
    'test-combat': 'w w Space Space w Space',
    'check-hud': 'WAIT WAIT WAIT',
  };
  
  const sequence = scenarios[scenarioName];
  if (sequence) {
    console.error(`[game-test] Running scenario: ${scenarioName}`);
    await playSequence(page, sequence);
  } else {
    console.error(`[game-test] Unknown scenario: ${scenarioName}, treating as key sequence`);
    await playSequence(page, scenarioName);
  }
}

// Extract game state via console/DOM inspection
async function extractGameState(page) {
  try {
    const state = await page.evaluate(() => {
      // Try to access game state through window if exposed
      if (window.gameState) return window.gameState;
      if (window.game?.state) return window.game.state;
      
      // Look for visible HUD elements
      const hudInfo = {};
      
      // Check for health bar
      const healthBar = document.querySelector('.health-bar, #health, [data-health]');
      if (healthBar) hudInfo.healthElement = true;
      
      // Check for minimap
      const minimap = document.querySelector('.minimap, #minimap, [data-minimap]');
      if (minimap) hudInfo.minimapVisible = true;
      
      // Check canvas dimensions
      const canvas = document.querySelector('canvas');
      if (canvas) {
        hudInfo.canvasWidth = canvas.width;
        hudInfo.canvasHeight = canvas.height;
      }
      
      return { extracted: true, hud: hudInfo };
    });
    return state;
  } catch (e) {
    return { error: e.message };
  }
}

// Take screenshot and optionally analyze
async function takeScreenshot(page, outputPath, options = {}) {
  const path = outputPath || join(DEFAULT_SCREENSHOT_DIR, `screenshot-${Date.now()}.png`);
  await page.screenshot({ path, fullPage: false });
  console.error(`[game-test] Screenshot saved: ${path}`);
  
  if (options.analyze) {
    const state = await extractGameState(page);
    console.error(`[game-test] Game state: ${JSON.stringify(state)}`);
  }
  
  return path;
}

// Record video (using screenshots as frames)
async function recordSession(page, durationSeconds, outputDir) {
  const frameDir = outputDir || join(DEFAULT_SCREENSHOT_DIR, `recording-${Date.now()}`);
  if (!existsSync(frameDir)) mkdirSync(frameDir, { recursive: true });
  
  const fps = 2; // 2 frames per second
  const totalFrames = durationSeconds * fps;
  
  console.error(`[game-test] Recording ${durationSeconds}s (${totalFrames} frames) to ${frameDir}`);
  
  for (let i = 0; i < totalFrames; i++) {
    const framePath = join(frameDir, `frame-${String(i).padStart(4, '0')}.png`);
    await page.screenshot({ path: framePath });
    console.error(`[game-test] Frame ${i + 1}/${totalFrames}`);
    await sleep(1000 / fps);
  }
  
  console.error(`[game-test] Recording complete. Frames in: ${frameDir}`);
  console.error(`[game-test] To convert to video: ffmpeg -framerate ${fps} -i ${frameDir}/frame-%04d.png -c:v libx264 output.mp4`);
  return frameDir;
}

// Interactive command sequence
async function runInteractive(page, commandsJson) {
  const commands = JSON.parse(commandsJson);
  const results = [];
  
  for (const cmd of commands) {
    console.error(`[game-test] Executing: ${cmd.action}`);
    
    switch (cmd.action) {
      case 'screenshot':
        const path = await takeScreenshot(page, cmd.output);
        results.push({ action: 'screenshot', path });
        break;
      case 'keys':
        await playSequence(page, cmd.sequence);
        results.push({ action: 'keys', sequence: cmd.sequence });
        break;
      case 'wait':
        await sleep(cmd.ms || 1000);
        results.push({ action: 'wait', ms: cmd.ms });
        break;
      case 'click':
        await page.mouse.click(cmd.x || 640, cmd.y || 360);
        results.push({ action: 'click', x: cmd.x, y: cmd.y });
        break;
      case 'state':
        const state = await extractGameState(page);
        results.push({ action: 'state', state });
        break;
      case 'scenario':
        await executeScenario(page, cmd.name);
        results.push({ action: 'scenario', name: cmd.name });
        break;
    }
    
    await sleep(200);
  }
  
  return results;
}

// Main
async function main() {
  const [,, command, ...args] = process.argv;
  
  if (!command) {
    console.log(`
Project Ashen - Game Testing Harness

Commands:
  screenshot [output.png]           - Take a screenshot
  play "key sequence" [output.png]  - Send keys, then screenshot
  test <scenario> [output.png]      - Run preset scenario
  record <seconds> [output_dir]     - Record frames
  interact <json_commands>          - Run complex command sequence

Scenarios: walk-around, open-map, close-map, test-movement, explore, 
          open-menu, test-minimap, test-combat, check-hud

Examples:
  node game-test.mjs screenshot /tmp/shot.png
  node game-test.mjs play "w w w d d Space" /tmp/after-move.png
  node game-test.mjs test open-map /tmp/map-open.png
  node game-test.mjs interact '[{"action":"keys","sequence":"w w"},{"action":"screenshot","output":"/tmp/x.png"}]'
`);
    process.exit(0);
  }
  
  const browser = await launchBrowser();
  const page = await browser.newPage();
  
  try {
    await initGame(page);
    
    switch (command) {
      case 'screenshot': {
        const path = await takeScreenshot(page, args[0], { analyze: true });
        console.log(JSON.stringify({ success: true, screenshot: path }));
        break;
      }
      
      case 'play': {
        const sequence = args[0] || '';
        await playSequence(page, sequence);
        await sleep(500);
        const path = await takeScreenshot(page, args[1], { analyze: true });
        console.log(JSON.stringify({ success: true, sequence, screenshot: path }));
        break;
      }
      
      case 'test': {
        const scenario = args[0] || 'check-hud';
        await executeScenario(page, scenario);
        await sleep(500);
        const path = await takeScreenshot(page, args[1], { analyze: true });
        console.log(JSON.stringify({ success: true, scenario, screenshot: path }));
        break;
      }
      
      case 'record': {
        const duration = parseInt(args[0]) || 5;
        const dir = await recordSession(page, duration, args[1]);
        console.log(JSON.stringify({ success: true, frames: dir, duration }));
        break;
      }
      
      case 'interact': {
        const results = await runInteractive(page, args[0]);
        console.log(JSON.stringify({ success: true, results }));
        break;
      }
      
      default:
        console.error(`Unknown command: ${command}`);
        process.exit(1);
    }
    
  } catch (error) {
    console.error(`[game-test] Error: ${error.message}`);
    console.log(JSON.stringify({ success: false, error: error.message }));
    process.exit(1);
  } finally {
    await browser.close();
  }
}

main();
