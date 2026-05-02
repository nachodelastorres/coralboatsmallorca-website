import { statSync, unlinkSync } from 'fs';
import sharp from 'sharp';
const folders = ['2026/gallery', '2026/sunset', '2026/private'];
const filename = 'sunset-horizon-alcudia-mallorca-views-boat-trip';
for (const folder of folders) {
  const src = `public/assets/img/premium/${folder}/${filename}.jpg`;
  const dst = `public/assets/img/premium/${folder}/${filename}.webp`;
  const meta = await sharp(src).metadata();
  const resize = meta.width && meta.width > 2400 ? { width: 2400 } : null;
  let p = sharp(src);
  if (resize) p = p.resize(resize);
  await p.webp({ quality: 82, effort: 5 }).toFile(dst);
  const inSize = statSync(src).size;
  const outSize = statSync(dst).size;
  console.log(`${folder}: ${(inSize/1024).toFixed(0)}KB -> ${(outSize/1024).toFixed(0)}KB`);
  unlinkSync(src);
}
