import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: '/snap/bin/chromium',
  args: [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--disable-gpu',
    '--use-gl=swiftshader',
    '--enable-webgl',
    '--ignore-gpu-blocklist',
    '--disable-software-rasterizer',
    '--use-angle=swiftshader-webgl'
  ]
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });

page.on('console', msg => console.log('PAGE:', msg.text()));
page.on('pageerror', err => console.log('ERROR:', err.message));

console.log('Loading...');
await page.goto('https://kai-claw.github.io/project-ashen/', { waitUntil: 'domcontentloaded', timeout: 30000 });

console.log('Waiting 5s...');
await new Promise(r => setTimeout(r, 5000));

const hasCanvas = await page.evaluate(() => !!document.querySelector('canvas'));
console.log('Has canvas:', hasCanvas);

if (hasCanvas) {
  await page.screenshot({ path: '/tmp/debug-shot.png' });
  console.log('Screenshot saved to /tmp/debug-shot.png');
} else {
  await page.screenshot({ path: '/tmp/debug-shot-nocanvas.png' });
  console.log('No canvas - screenshot saved anyway');
}

await browser.close();
console.log('Done');
