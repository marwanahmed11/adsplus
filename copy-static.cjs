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

const filesToCopy = ['README.txt', 'README.md'];
filesToCopy.forEach((file) => {
  const src = path.join(rootDir, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to dist/${file}`);
  }
});
