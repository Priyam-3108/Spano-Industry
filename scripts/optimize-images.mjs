import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, '../public/images');
const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png'));

console.log(`Found ${files.length} PNG files to optimize...`);

let oldTotal = 0;
let newTotal = 0;

for (const file of files) {
  const filePath = path.join(imagesDir, file);
  const webpName = file.replace(/\.png$/, '.webp');
  const webpPath = path.join(imagesDir, webpName);
  
  const stat = fs.statSync(filePath);
  oldTotal += stat.size;

  // Determine max width based on image usage
  let maxWidth = 1200;
  if (file.includes('70350cf6c45042108f648c67e4b0f4b8')) {
    // Hero background
    maxWidth = 1920;
  } else if (file.includes('86599dc0152c691e6b3f8bc495560d35') || file.includes('b8cf7241b05b3494b1862a13f088f030') || file.includes('a7dfd594390c28ee1c76accb29d6882b')) {
    // Full width banner / about
    maxWidth = 1600;
  }

  await sharp(filePath)
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toFile(webpPath);

  const newStat = fs.statSync(webpPath);
  newTotal += newStat.size;
  console.log(`Optimized ${file}: ${(stat.size / 1024 / 1024).toFixed(2)} MB -> ${(newStat.size / 1024).toFixed(0)} KB (.webp)`);
}

console.log(`\nTotal Original Size: ${(oldTotal / 1024 / 1024).toFixed(2)} MB`);
console.log(`Total WebP Size: ${(newTotal / 1024 / 1024).toFixed(2)} MB`);
console.log(`Saved: ${((1 - newTotal / oldTotal) * 100).toFixed(1)}% network payload!`);
