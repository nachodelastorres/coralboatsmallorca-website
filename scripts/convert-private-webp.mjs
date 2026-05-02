import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';
const dir = 'public/assets/img/premium/2026/private';
const files = readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f));
let totalIn = 0, totalOut = 0;
for (const f of files) {
  const src = join(dir, f);
  const dst = join(dir, f.replace(/\.jpe?g$/i, '.webp'));
  const meta = await sharp(src).metadata();
  const resize = meta.width && meta.width > 2400 ? { width: 2400 } : null;
  let p = sharp(src);
  if (resize) p = p.resize(resize);
  await p.webp({ quality: 82, effort: 5 }).toFile(dst);
  totalIn += statSync(src).size;
  totalOut += statSync(dst).size;
}
console.log(`Total: ${(totalIn/1024/1024).toFixed(2)}MB -> ${(totalOut/1024/1024).toFixed(2)}MB (-${((1-totalOut/totalIn)*100).toFixed(0)}%)`);
