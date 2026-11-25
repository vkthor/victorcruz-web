// Idiomas, rutas traducidas y textos de la interfaz.
export type Lang = 'es' | 'en';
export type T = { es: string; en: string };

export const langs: Lang[] = ['es', 'en'];

/** Devuelve el texto en el idioma pedido. */
export const tr = (v: T | string, lang: Lang): string => (typeof v === 'string' ? v : v[lang]);

/** Rutas de cada página en los dos idiomas (siempre con barra final). */
export const routes = {
  home: { es: '/', en: '/en/' },
  bio: { es: '/biografia/', en: '/en/biography/' },
  career: { es: '/trayectoria/', en: '/en/career/' },
  videos: { es: '/videos/', en: '/en/videos/' },
  press: { es: '/prensa/', en: '/en/press/' },
  projects: { es: '/proyectos/', en: '/en/projects/' },
  beyond: { es: '/mas-alla-del-canto/', en: '/en/beyond-singing/' },
  downloads: { es: '/descargas/', en: '/en/downloads/' },
  legal: { es: '/aviso-legal/', en: '/en/legal-notice/' },
  privacy: { es: '/privacidad/', en: '/en/privacy/' },
} as const;

export type RouteKey = keyof typeof routes;
export const url = (key: RouteKey, lang: Lang) => routes[key][lang];

/** Secciones del menú principal (el contacto es un ancla al pie de cada página). */
export const nav: RouteKey[] = ['home', 'bio', 'career', 'videos', 'press', 'projects', 'beyond'];

export const ui = {
  name: 'Víctor Cruz',
  role: { es: 'Barítono', en: 'Baritone' },
  tagline: { es: 'Barítono · Música antigua', en: 'Baritone · Early music' },
  nav: {
    home: { es: 'Inicio', en: 'Home' },
    bio: { es: 'Biografía', en: 'Biography' },
    career: { es: 'Trayectoria', en: 'Career' },
    videos: { es: 'Vídeos', en: 'Videos' },
    press: { es: 'Prensa', en: 'Press' },
    projects: { es: 'Proyectos', en: 'Projects' },
    beyond: { es: 'Más allá del canto', en: 'Beyond singing' },
    downloads: { es: 'Prensa y descargas', en: 'Press kit' },
    contact: { es: 'Contacto', en: 'Contact' },
    legal: { es: 'Aviso legal', en: 'Legal notice' },
    privacy: { es: 'Privacidad', en: 'Privacy' },
  } as Record<string, T>,
  projectsTitle: { es: 'Otros proyectos', en: 'Other projects' },
  menu: { es: 'Menú', en: 'Menu' },
  close: { es: 'Cerrar', en: 'Close' },
  skip: { es: 'Saltar al contenido', en: 'Skip to content' },
  otherLang: { es: 'English', en: 'Español' },
  otherLangShort: { es: 'EN', en: 'ES' },
  play: { es: 'Reproducir', en: 'Play' },
  videoConsent: {
    es: 'Los vídeos se cargan desde YouTube al pulsarlos; YouTube puede usar cookies.',
    en: 'Videos load from YouTube when you press them; YouTube may set cookies.',
  },
  ownRecording: { es: 'Grabación y edición: Víctor Cruz', en: 'Filmed and edited by Víctor Cruz' },
  photo: { es: 'Foto', en: 'Photo' },
  readReview: { es: 'Leer la crítica', en: 'Read the review' },
  comingSoon: { es: 'Próximamente', en: 'Coming soon' },
};
