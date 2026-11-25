// Vídeos de YouTube. Las miniaturas se guardan en src/assets/videos/<id>.jpg (npm run miniaturas).
import type { T } from '../i18n';

export interface Video {
  yt: string;
  title: T | string; // admite *cursiva*
  sub: T | string;
  own?: boolean; // grabado y editado por Víctor
  credit?: T; // otro crédito en lugar de «Grabación y edición»
}

/** Orfeo: escenas de *L’Orfeo* (Daroca, 2017), en tarjeta grande. */
export const orfeo = {
  yt: 'NV9-GlGfN20',
  title: { es: 'Monteverdi · *L’Orfeo* (escenas)', en: 'Monteverdi · *L’Orfeo* (scenes)' },
  sub: { es: 'Orfeo · Los Músicos de Su Alteza, Luis Antonio González · 2017', en: 'Orfeo · Los Músicos de Su Alteza, Luis Antonio González · 2017' },
};

export const featured: Video[] = [
  { yt: '9MhXLheZtD4', title: 'Bach · *Ich habe genung*, BWV 82', sub: { es: 'Auditorio Nacional, Madrid · 2022', en: 'Auditorio Nacional, Madrid · 2022' }, own: true },
  { yt: 'jXokPpVYbDo', title: 'Bach · *Großer Herr, o starker König*', sub: { es: '*Oratorio de Navidad* · La Spagna, Javier Corcuera · 2021', en: '*Christmas Oratorio* · La Spagna, Javier Corcuera · 2021' }, own: true },
  { yt: 'YrP0Nng9EHo', title: 'Peri · *Tu dormi, e ’l dolce sonno*', sub: { es: 'Con Darío Tamayo · 2021', en: 'With Darío Tamayo · 2021' }, own: true },
  { yt: 'f6N4j5BfoOw', title: 'Händel · *The trumpet shall sound*', sub: { es: '*El Mesías* · Orquesta y Coro RTVE, Carlos Mena · 2025', en: '*Messiah* · RTVE Symphony Orchestra and Choir, Carlos Mena · 2025' } },
  { yt: 'xzH6kBoKcHA', title: 'Purcell · *Dido & Aeneas*', sub: { es: 'Eneas · Hippocampus, Alberto Martínez Molina · 2022', en: 'Aeneas · Hippocampus, Alberto Martínez Molina · 2022' } },
];

export const spanish: Video[] = [
  { yt: 'Bl4s3Li8KuM', title: 'Durón · *¿Ola qué?*', sub: { es: 'Al Ayre Español, Eduardo López Banzo · 2023', en: 'Al Ayre Español, Eduardo López Banzo · 2023' } },
  { yt: 'HIVEVa-24BA', title: 'Torices · *A batalla con los rayos*', sub: { es: 'Jácaras del Zéfiro · Festival Internacional de Arte Sacro · 2026', en: 'Jácaras del Zéfiro · Madrid Festival of Sacred Art · 2026' } },
  { yt: 'nkvjQnrvKeY', title: 'Literes · *Júpiter y Semele*', sub: { es: 'Dúo de graciosos · Al Ayre Español · 2021', en: 'Comic duet · Al Ayre Español · 2021' } },
];

export const projectVideos: Video[] = [
  { yt: 'FFrh3yKsJ9c', title: { es: 'Purcell · *When the world first knew creation*', en: 'Purcell · *When the world first knew creation*' }, sub: { es: 'Dúo del Zéfiro · *Don Quixote* (1694)', en: 'Dúo del Zéfiro · *Don Quixote* (1694)' } },
  { yt: 'Is-gSN_Eh0k', title: { es: '*Una velada musical en Baden-Baden* (documental)', en: '*A Musical Evening in Baden-Baden* (documentary)' }, sub: { es: 'Con Beatriz González Calderón y Jesús Campo · 2026', en: 'With Beatriz González Calderón and Jesús Campo · 2026' }, own: true },
  { yt: 'VCGR9iiy68E', title: 'Bach · *Stürze zu Boden*, BWV 126', sub: { es: 'El Cantar de las Cuerdas, con Blanca Martín · 2026', en: 'El Cantar de las Cuerdas, with Blanca Martín · 2026' } },
  { yt: 'zJk7q5321M4', title: '*Toda la muerte en mi vida*', sub: { es: 'Teaser · con Beatriz González Calderón y Héctor Eliel Márquez · 2025', en: 'Teaser · with Beatriz González Calderón and Héctor Eliel Márquez · 2025' }, own: true },
  { yt: '5zvM3trAELU', title: { es: 'Jacchini · Sonata en do mayor, op. 3 n.º 10', en: 'Jacchini · Sonata in C major, op. 3 no. 10' }, sub: { es: 'El Cantar de las Cuerdas: guitarra barroca y violonchelo · 2026', en: 'El Cantar de las Cuerdas: Baroque guitar and cello · 2026' }, own: true },
];

/** Producción audiovisual para otros: los tres primeros son los destacados. */
export const production: Video[] = [
  { yt: '7VRVR_0kQug', title: 'Orquesta Barroca de Sevilla', sub: { es: 'Vivaldi, *Stabat Mater* · Beatriz Oleaga, Ignacio Ramal · 2026', en: 'Vivaldi, *Stabat Mater* · Beatriz Oleaga, Ignacio Ramal · 2026' } },
  { yt: 'ur2MD_Pvi7k', title: 'La Ritirata', sub: { es: 'Bach, cantata BWV 33 · Josetxu Obregón · 2025', en: 'Bach, Cantata BWV 33 · Josetxu Obregón · 2025' } },
  { yt: 'Qa0e3paHrlU', title: { es: 'Orquesta y Coro Nacionales de España', en: 'Spanish National Orchestra and Choir' }, sub: { es: 'Área Socioeducativa · «¡Daca, bailemos carillo!», Juan del Encina · 2021', en: 'Education department · “¡Daca, bailemos carillo!”, Juan del Encina · 2021' } },
  { yt: 'I_r-cS9PwMo', title: 'Orquesta Barroca de Sevilla', sub: { es: 'Vivaldi, *Stabat Mater* (II) · 2026', en: 'Vivaldi, *Stabat Mater* (II) · 2026' } },
  { yt: 'qhx3slRzEAk', title: 'Camerata Antonio Soler', sub: { es: 'Tráiler de los *Intermezzi* de Ponzo · 2026', en: 'Trailer for Ponzo’s *Intermezzi* · 2026' } },
  { yt: 'mJ0v_rjzeIQ', title: 'Patricia Rivero', sub: { es: 'Viola da gamba · Abel, Adagio en re menor · 2026', en: 'Viola da gamba · Abel, Adagio in D minor · 2026' } },
  { yt: 'OVm_ZC-JklQ', title: 'Jacobo Christensen', sub: { es: 'Violín · Bach, Chacona BWV 1004 · 2021', en: 'Violin · Bach, Chaconne BWV 1004 · 2021' } },
  { yt: 'euCwjSHtJyA', title: 'Pablo Márquez', sub: { es: 'Órgano · vídeo de presentación · 2021', en: 'Organ · channel trailer · 2021' } },
];

/** Producción audiovisual: presentación (sin limitarla a la música antigua ni dar cifras de visitas). */
export const productionIntro: T = {
  es: 'Como realizador audiovisual, graba y edita conciertos, vídeos de presentación, tráileres y documentales para conjuntos y solistas, con su propio equipo de imagen y sonido.',
  en: 'As a filmmaker, he shoots and edits concerts, showreels, trailers and documentaries for ensembles and soloists, with his own camera and sound equipment.',
};
export const productionClients: T = {
  es: 'Ha trabajado para la Orquesta Barroca de Sevilla, La Ritirata, Al Ayre Español, la Camerata Antonio Soler y el Área Socioeducativa de la Orquesta y Coro Nacionales de España, y para solistas como Jacobo Christensen, Pablo Márquez o Patricia Rivero.',
  en: 'Clients include the Orquesta Barroca de Sevilla, La Ritirata, Al Ayre Español, the Camerata Antonio Soler and the education department of the Spanish National Orchestra and Choir, as well as soloists such as Jacobo Christensen, Pablo Márquez and Patricia Rivero.',
};

/** Vídeos propios (grabación y edición suyas): ejemplos para «Más allá del canto». */
export const ownWork: Video[] = [
  { yt: 'JUHHyPGmzJc', title: '«Ríu ríu chíu»', sub: { es: 'Cancionero de Uppsala · 2020', en: 'Uppsala Songbook · 2020' }, own: true },
  { yt: 'eNbDNMDE81k', title: '*Don Diego de Granada*', sub: { es: 'Tráiler del estreno · Festival Música Sur · 2022', en: 'Premiere trailer · Música Sur Festival · 2022' }, own: true, credit: { es: 'Realización y edición: Víctor Cruz', en: 'Directed and edited by Víctor Cruz' } },
  { yt: 'dbZwL5-9QVo', title: '*Una voz interior*', sub: { es: 'Teaser · con Beatriz González Calderón y Héctor Eliel Márquez · 2023', en: 'Teaser · with Beatriz González Calderón and Héctor Eliel Márquez · 2023' }, own: true },
  { yt: '2quWhg6KmRk', title: '*La bestia que pedía amor a gritos desde el centro del mundo*', sub: 'Teaser · 2025', own: true },
];

export const wookiee: Video = {
  yt: 'bXEAwV4UdY8',
  title: '*Lamento della wookiee*',
  sub: { es: 'Monteverdi + Star Wars · 2020', en: 'Monteverdi + Star Wars · 2020' },
};

export const elGallineroTikTok = 'https://www.tiktok.com/@elgallinerorealpodcast/video/7458613013956857121';
