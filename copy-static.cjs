const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// 1. Copy companion folders
const foldersToCopy = [
  '2-Design-Source',
  '3-Animations',
  '4-3D-Interactive',
  '5-Brand',
  '6-Extra-Images',
  'assets',
];

foldersToCopy.forEach((folder) => {
  const src = path.join(rootDir, folder);
  const dest = path.join(distDir, folder);
  if (fs.existsSync(src)) {
    copyRecursive(src, dest);
    console.log(`Copied ${folder} to dist/${folder}`);
  }
});

// 2. Copy documentation files
const filesToCopy = ['README.txt', 'README.md'];
filesToCopy.forEach((file) => {
  const src = path.join(rootDir, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to dist/${file}`);
  }
});

// 3. Generate HTML fallbacks for all SPA routes (both .html and /index.html)
const routes = ['about', 'services', 'clients', 'contact'];
const indexPath = path.join(distDir, 'index.html');

if (fs.existsSync(indexPath)) {
  routes.forEach((route) => {
    // route.html
    fs.copyFileSync(indexPath, path.join(distDir, `${route}.html`));
    // route/index.html
    const routeDir = path.join(distDir, route);
    if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });
    fs.copyFileSync(indexPath, path.join(routeDir, 'index.html'));
    console.log(`Generated fallback HTML for /${route} and /${route}.html`);
  });
}
