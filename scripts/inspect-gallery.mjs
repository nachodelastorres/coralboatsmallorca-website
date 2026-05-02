import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';

const dir = 'public/assets/img/premium/2026/gallery';

function jpegSize(buf) {
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) return null;
    const marker = buf[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && marker !== 0xc4 && marker !== 0xc8 && marker !== 0xcc) {
      const h = buf.readUInt16BE(i + 5);
      const w = buf.readUInt16BE(i + 7);
      return { w, h };
    }
    const len = buf.readUInt16BE(i + 2);
    i += 2 + len;
  }
  return null;
}

const files = readdirSync(dir).filter((f) => /\.jpe?g$/i.test(f));
const rows = files.map((f) => {
  const p = join(dir, f);
  const buf = readFileSync(p);
  const size = jpegSize(buf);
  const kb = Math.round(statSync(p).size / 1024);
  if (!size) return { f, w: '?', h: '?', ratio: '?', kb };
  return { f, w: size.w, h: size.h, ratio: (size.w / size.h).toFixed(2), kb };
});

console.log('name | w x h | ratio | KB | orient');
rows.forEach((r) => {
  const orient = r.ratio === '?' ? '?' : r.w > r.h ? 'landscape' : r.w < r.h ? 'portrait' : 'square';
  console.log(`${r.f} | ${r.w}x${r.h} | ${r.ratio} | ${r.kb} | ${orient}`);
});
