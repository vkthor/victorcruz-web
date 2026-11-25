import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // El flujo de publicación pasa la dirección en URL; por defecto, la definitiva.
  site: process.env.URL || 'https://www.victorcruz.es',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en' } },
      filter: (page) => !page.includes('/dossier/'),
    }),
  ],
});
