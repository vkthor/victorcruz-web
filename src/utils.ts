// Utilidades de texto: cursivas con *asteriscos* y escape de HTML.
const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Convierte *texto* en <em>texto</em> y **texto** en <strong>texto</strong>. */
export function inline(s: string): string {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" rel="noopener">$1</a>');
}

/** Entrecomilla según el idioma: «…» en español, “…” en inglés. */
export const quote = (s: string, lang: 'es' | 'en') => (lang === 'es' ? `«${s}»` : `“${s}”`);

/** Quita las marcas de cursiva (para atributos y metadatos). */
export const plain = (s: string) => s.replace(/\*\*?(.+?)\*\*?/g, '$1').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
