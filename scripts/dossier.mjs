// Genera public/dossieresp.pdf y public/dossiereng.pdf con Chrome a partir de /dossier/es/ y /dossier/en/.
// Uso (con la vista previa en marcha): npm run dossier [-- http://localhost:4322]
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const base = process.argv[2] || 'http://localhost:4322';
const chrome = [
  process.env.CHROME,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find((p) => p && existsSync(p));
if (!chrome) throw new Error('No encuentro Chrome (define la variable CHROME).');

for (const [lang, file] of [['es', 'dossieresp.pdf'], ['en', 'dossiereng.pdf']]) {
  const out = fileURLToPath(new URL(`../public/${file}`, import.meta.url));
  execFileSync(chrome, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=20000', `--print-to-pdf=${out}`, `${base}/dossier/${lang}/`], { stdio: 'ignore' });
  console.log(`${file} ✓`);
}
