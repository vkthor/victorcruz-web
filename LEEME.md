# victorcruz.es

Web de Víctor Cruz, barítono. Hecha con [Astro](https://astro.build) (sitio estático), en español (raíz) e inglés (`/en/`).

## Ver la web en el ordenador

Doble clic en `Ver-web.cmd` (la primera vez instala lo necesario). Se abre en http://localhost:4322/.

## Dónde se cambia cada cosa

| Qué | Archivo |
|---|---|
| Biografías (completa, media y corta; portada) y lista «Ha cantado con» | `src/data/bio.ts` |
| Trayectoria por años y repertorio | `src/data/career.ts` |
| Vídeos (incluido el de Orfeo, ahora «Próximamente») y producción audiovisual | `src/data/videos.ts` |
| Críticas | `src/data/press.ts` |
| Proyectos | `src/data/projects.ts` |
| Correo, redes, titular del aviso legal, token de Cloudflare | `src/data/site.ts` |
| Textos de menús y botones; direcciones de cada página | `src/i18n/index.ts` |
| Diseño de cada página | `src/views/*.astro` |
| Colores y estilos generales | `src/styles/global.css` |

En los textos, `*así*` sale en cursiva.

- **Vídeo nuevo:** añádelo en `src/data/videos.ts` (`yt: 'id de YouTube'`) y ejecuta `npm run miniaturas` para descargar su miniatura (la web no carga nada de YouTube hasta que se pulsa un vídeo).
- **Orfeo:** cuando esté en YouTube, pon su id en `orfeo.yt` (en `src/data/videos.ts`) y ejecuta `npm run miniaturas`.
- **Dossier PDF** (`/dossieresp.pdf` y `/dossiereng.pdf`): sale de las páginas `/dossier/es/` y `/dossier/en/`. Con la vista previa abierta, `npm run dossier` los regenera en `public/`.
- **Fotos de descarga para prensa:** `public/descargas/fotos/`.

## Publicación

GitHub Pages, desde el repositorio, con `.github/workflows/pages.yml`: cada cambio que se sube a `main` se publica solo. El dominio y el correo siguen en IONOS; sólo se cambian los registros DNS de la web (nunca los MX).

## Idioma

La portada en español pasa a la inglesa la primera vez si el navegador no tiene español, catalán, gallego ni euskera entre sus idiomas. El botón ES · EN recuerda la elección. Los buscadores ven las dos versiones (hreflang).

## Marca

Logotipo, colores, favicon e iconos: `marca/` (ver `marca/LEEME.md`).
