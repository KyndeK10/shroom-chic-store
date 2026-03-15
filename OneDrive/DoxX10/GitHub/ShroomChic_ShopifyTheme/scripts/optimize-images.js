const fs = require('fs').promises;
const path = require('path');
const sharp = require('sharp');

const assetsDir = path.resolve(__dirname, '..', 'assets');

async function findImages(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...await findImages(full));
    else if (/\.(png|jpe?g)$/i.test(e.name)) files.push(full);
  }
  return files;
}

async function optimize(file) {
  const ext = path.extname(file);
  const base = path.basename(file, ext);
  const dir = path.dirname(file);
  const webp = path.join(dir, base + '.webp');
  const small = path.join(dir, base + '-sm.webp');
  const med = path.join(dir, base + '-md.webp');

  console.log('Optimizing:', path.relative(assetsDir, file));
  try {
    await sharp(file).webp({ quality: 80 }).toFile(webp);
    await sharp(file).resize({ width: 400 }).webp({ quality: 70 }).toFile(small);
    await sharp(file).resize({ width: 800 }).webp({ quality: 75 }).toFile(med);
  } catch (err) {
    console.error('Failed:', file, err.message);
  }
}

(async () => {
  try {
    const imgs = await findImages(assetsDir);
    if (!imgs.length) {
      console.log('No PNG/JPG images found in assets/.');
      return;
    }
    for (const img of imgs) await optimize(img);
    console.log('Done. Generated .webp, -sm.webp, -md.webp variants in assets/.');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
