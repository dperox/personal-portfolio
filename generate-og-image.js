const fs = require('fs');
const { execSync } = require('child_process');

// Read the SVG file
const svgContent = fs.readFileSync('./public/og-image-v2.svg', 'utf8');

// Create a temporary HTML file to render the SVG
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { margin: 0; padding: 0; }
  </style>
</head>
<body>
  ${svgContent}
</body>
</html>
`;

fs.writeFileSync('./temp-og.html', htmlContent);

console.log('SVG loaded. Attempting to convert to PNG...');

// Try different conversion methods
try {
  // Method 1: Try using puppeteer (if available)
  try {
    execSync('npx puppeteer browsers install chrome', { stdio: 'pipe' });
    const puppeteer = require('puppeteer');
    
    (async () => {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 630 });
      await page.goto(`file://${process.cwd()}/temp-og.html`, { waitUntil: 'networkidle0' });
      await page.screenshot({ path: './public/og-image-v2.png', type: 'png' });
      await browser.close();
      fs.unlinkSync('./temp-og.html');
      console.log('✓ Successfully generated og-image-v2.png using Puppeteer');
    })();
  } catch (err) {
    throw new Error('Puppeteer not available');
  }
} catch (err) {
  console.log('Puppeteer method failed. Trying alternative methods...');
  
  // Method 2: Try using sharp with svg2png
  try {
    const sharp = require('sharp');
    
    sharp('./public/og-image-v2.svg')
      .resize(1200, 630)
      .png()
      .toFile('./public/og-image-v2.png')
      .then(() => {
        fs.unlinkSync('./temp-og.html');
        console.log('✓ Successfully generated og-image-v2.png using Sharp');
      })
      .catch((err) => {
        console.error('Sharp conversion failed:', err.message);
        console.log('\nPlease install sharp: npm install sharp');
        process.exit(1);
      });
  } catch (err) {
    console.error('\n❌ Unable to convert SVG to PNG automatically.');
    console.log('\nPlease use one of these methods:');
    console.log('1. Install sharp: npm install sharp, then run this script again');
    console.log('2. Use an online converter: https://cloudconvert.com/svg-to-png');
    console.log('3. Open public/og-image-v2.svg in a browser and take a screenshot');
    console.log('4. Use ImageMagick: convert public/og-image-v2.svg public/og-image-v2.png');
    fs.unlinkSync('./temp-og.html');
    process.exit(1);
  }
}
