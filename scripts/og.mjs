// Genera src/assets/og.jpg (imagen para compartir, 600×600) a partir de scripts/og.html con Chrome sin ventana.
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const chrome = process.env.CHROME ?? 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const html = new URL('./og.html', import.meta.url).href;
const png = fileURLToPath(new URL('../og-tmp.png', import.meta.url));
execFileSync(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files', '--force-device-scale-factor=1', '--window-size=600,600', '--virtual-time-budget=4000', `--screenshot=${png}`, html]);
await sharp(png).jpeg({ quality: 90, mozjpeg: true }).toFile(fileURLToPath(new URL('../src/assets/og.jpg', import.meta.url)));
(await import('node:fs')).unlinkSync(png);
console.log('src/assets/og.jpg');
