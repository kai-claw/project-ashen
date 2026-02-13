const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/snap/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--use-angle=swiftshader-webgl']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  
  console.log('Loading game...');
  await page.goto('https://kai-claw.github.io/project-ashen/', { waitUntil: 'networkidle0', timeout: 30000 });
  
  console.log('Waiting for canvas...');
  await page.waitForSelector('canvas', { timeout: 10000 });
  
  console.log('Waiting 3s for init...');
  await new Promise(r => setTimeout(r, 3000));
  
  console.log('Clicking to start...');
  await page.click('canvas');
  
  console.log('Waiting 4s for game to render...');
  await new Promise(r => setTimeout(r, 4000));
  
  console.log('Taking screenshot...');
  await page.screenshot({ path: '/home/claw/snap/chromium/common/game-started.png' });
  
  console.log('Done!');
  await browser.close();
})();
