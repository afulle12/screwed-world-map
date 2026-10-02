// Generates a 100% self-contained, standalone single .html file
// Inlines all styles and JavaScript so the map can be opened directly as file://
const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const htmlFile = path.join(distDir, 'index.html');

if (!fs.existsSync(htmlFile)) {
  console.error('[X] dist/index.html not found. Run npm run build first.');
  process.exit(1);
}

let html = fs.readFileSync(htmlFile, 'utf8');

// 1. Inline CSS stylesheets
const cssRegex = /<link[^>]+rel=["']stylesheet["'][^>]+href=["']([^"']+\.css)["'][^>]*>/i;
const cssMatch = html.match(cssRegex);
if (cssMatch) {
  const cssHref = cssMatch[1].replace(/^\//, '');
  const cssPath = path.join(distDir, cssHref);
  if (fs.existsSync(cssPath)) {
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    // Using a function callback prevents $& / $` / $' pattern replacement bugs in JS
    html = html.replace(cssMatch[0], () => `<style>\n${cssContent}\n</style>`);
    console.log(`[✓] Inlined CSS: ${cssHref} (${(cssContent.length / 1024).toFixed(1)} KB)`);
  }
}

// 2. Inline JavaScript scripts
const jsRegex = /<script[^>]+src=["']([^"']+\.js)["'][^>]*><\/script>/i;
const jsMatch = html.match(jsRegex);
if (jsMatch) {
  const jsHref = jsMatch[1].replace(/^\//, '');
  const jsPath = path.join(distDir, jsHref);
  if (fs.existsSync(jsPath)) {
    const jsContent = fs.readFileSync(jsPath, 'utf8');
    // Using a function callback prevents $& / $` / $' pattern replacement bugs in JS
    html = html.replace(jsMatch[0], () => `<script type="module">\n${jsContent}\n</script>`);
    console.log(`[✓] Inlined JS: ${jsHref} (${(jsContent.length / 1024).toFixed(1)} KB)`);
  }
}

// 3. Write universal standalone HTML to both dist/world_map_standalone.html and ./world_map.html
const outDist = path.join(distDir, 'world_map_standalone.html');
const outRoot = path.join(projectRoot, 'world_map.html');

fs.writeFileSync(outDist, html, 'utf8');
fs.writeFileSync(outRoot, html, 'utf8');

const sizeKb = (fs.statSync(outRoot).size / 1024).toFixed(1);
console.log(`[✓] Successfully generated standalone single-file: world_map.html (${sizeKb} KB)`);

// 4. Generate dedicated Mobile Edition: world_map_mobile.html
let mobileHtml = html;
// Add mobile-specific title and body styles
mobileHtml = mobileHtml.replace(
  '<title>Every Country, Ranked By How Screwed It Is (Interactive Map)</title>',
  '<title>Every Country, Ranked (Mobile Interactive Map)</title>'
);

// Add mobile overscroll prevention style
mobileHtml = mobileHtml.replace(
  '</head>',
  '  <style>html, body { overscroll-behavior: none; -webkit-tap-highlight-color: transparent; touch-action: manipulation; }</style>\n  </head>'
);

const outMobileDist = path.join(distDir, 'world_map_mobile.html');
const outMobileRoot = path.join(projectRoot, 'world_map_mobile.html');

fs.writeFileSync(outMobileDist, mobileHtml, 'utf8');
fs.writeFileSync(outMobileRoot, mobileHtml, 'utf8');

const mobileSizeKb = (fs.statSync(outMobileRoot).size / 1024).toFixed(1);
console.log(`[✓] Successfully generated mobile single-file: world_map_mobile.html (${mobileSizeKb} KB)`);

