const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const distDir = path.join(rootDir, 'dist');

console.log('Building Ads Plus+ static distribution...');

// Ensure dist exists and is empty
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const item of fs.readdirSync(src)) {
      copyRecursive(path.join(src, item), path.join(dest, item));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

// Copy top-level HTML files
const htmlFiles = ['index.html', 'about.html', 'services.html', 'clients.html', 'contact.html'];
for (const file of htmlFiles) {
  const src = path.join(rootDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
    console.log(`✓ Copied ${file}`);
  }
}

// Copy assets and companion directories
const dirsToCopy = [
  'assets',
  '4-3D-Interactive',
  '3-Animations',
  '6-Extra-Images',
  '5-Brand',
  '2-Design-Source'
];

for (const dir of dirsToCopy) {
  const src = path.join(rootDir, dir);
  if (fs.existsSync(src)) {
    copyRecursive(src, path.join(distDir, dir));
    console.log(`✓ Copied directory ${dir}`);
  }
}

// Copy README
if (fs.existsSync(path.join(rootDir, 'README.txt'))) {
  fs.copyFileSync(path.join(rootDir, 'README.txt'), path.join(distDir, 'README.txt'));
}

console.log('Build completed successfully! Distribution output ready in dist/');
