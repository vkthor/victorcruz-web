// Descarga las miniaturas de YouTube que falten en src/assets/videos/ (así la web no carga nada de Google
// hasta que se pulsa un vídeo). Uso: npm run miniaturas
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';

const dir = new URL('../src/assets/videos/', import.meta.url);
const data = new URL('../src/data/', import.meta.url);
const ids = new Set();
for (const f of readdirSync(data)) {
  for (const m of readFileSync(new URL(f, data), 'utf8').matchAll(/yt: '([\w-]{11})'/g)) ids.add(m[1]);
}
for (const id of ids) {
  const dest = new URL(`${id}.jpg`, dir);
  if (existsSync(dest)) continue;
  for (const q of ['maxresdefault', 'sddefault', 'hqdefault']) {
    const r = await fetch(`https://i.ytimg.com/vi/${id}/${q}.jpg`);
    if (r.ok) {
      writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
      console.log(`${id}: ${q}`);
      break;
    }
  }
}
console.log(`${ids.size} vídeos`);
