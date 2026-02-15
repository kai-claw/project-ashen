import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: '/snap/bin/chromium',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--use-angle=swiftshader-webgl']
});

const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 720 });

page.on('console', msg => console.log('PAGE:', msg.text()));
page.on('pageerror', err => console.log('ERROR:', err.message));

console.log('Loading...');
await page.goto('https://kai-claw.github.io/project-ashen/', { waitUntil: 'domcontentloaded', timeout: 30000 });

console.log('Checking DOM...');
const html = await page.evaluate(() => document.documentElement.innerHTML.slice(0, 500));
console.log('HTML:', html);

const hasCanvas = await page.evaluate(() => !!document.querySelector('canvas'));
console.log('Has canvas immediately:', hasCanvas);

console.log('Waiting 5s...');
await new Promise(r => setTimeout(r, 5000));

const hasCanvas2 = await page.evaluate(() => !!document.querySelector('canvas'));
console.log('Has canvas after 5s:', hasCanvas2);

if (hasCanvas2) {
  await page.screenshot({ path: '/tmp/debug-shot.png' });
  console.log('Screenshot saved to /tmp/debug-shot.png');
}

await browser.close();
console.log('Done');
