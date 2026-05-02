import { readdirSync, statSync } from 'fs';
import { join } from 'path';
import sharp from 'sharp';

const dir = 'public/assets/img/premium/2026/morning';
const files = readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f));

const QUALITY = 82;
const MAX_WIDTH = 2400;

let totalIn = 0;
let totalOut = 0;

for (const f of files) {
  const src = join(dir, f);
  const dst = join(dir, f.replace(/\.jpe?g$/i, '.webp'));
  const meta = await sharp(src).metadata();
  const resize = meta.width && meta.width > MAX_WIDTH ? { width: MAX_WIDTH } : null;
  let pipeline = sharp(src);
  if (resize) pipeline = pipeline.resize(resize);
  await pipeline.webp({ quality: QUALITY, effort: 5 }).toFile(dst);
  const inSize = statSync(src).size;
  const outSize = statSync(dst).size;
  totalIn += inSize;
  totalOut += outSize;
  console.log(`${f.padEnd(80)} ${(inSize/1024).toFixed(0)}KB -> ${(outSize/1024).toFixed(0)}KB`);
}
console.log('---');
console.log(`Total: ${(totalIn/1024/1024).toFixed(2)}MB -> ${(totalOut/1024/1024).toFixed(2)}MB (-${((1-totalOut/totalIn)*100).toFixed(0)}%)`);
