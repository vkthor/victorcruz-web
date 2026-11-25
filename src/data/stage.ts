// Fotos en escena y en concierto (de la galería de la web antigua). Van en Biografía, en dos filas.
import type { ImageMetadata } from 'astro';
import type { T } from '../i18n';
import dido1 from '../assets/escena/dido-1.jpg';
import apollo from '../assets/escena/apollo-e-dafne.jpg';
import italiana from '../assets/escena/italiana.jpg';
import mesias from '../assets/escena/mesias.jpg';
import dido2 from '../assets/escena/dido-2.jpg';
import segreto from '../assets/escena/segreto.jpg';

export interface StagePhoto {
  img: ImageMetadata;
  what: T; // admite *cursiva*
  by?: string; // autor de la foto, si se sabe
}

const s = (es: string, en?: string): T => ({ es, en: en ?? es });

export const stageRows: StagePhoto[][] = [
  [
    { img: dido1, what: s('Eneas en *Dido y Eneas* · Hippocampus, 2022', 'Aeneas in *Dido and Aeneas* · Hippocampus, 2022'), by: 'Enrique Martín' },
    { img: apollo, what: s('Apolo en *Apollo e Dafne* de Händel · Escuela Superior de Música Reina Sofía', 'Apollo in Handel’s *Apollo e Dafne* · Reina Sofía School of Music'), by: 'Kirill Baskhirov' },
    { img: italiana, what: s('Taddeo en *L’italiana in Algeri*, con Karina Demurova · Orquesta Ciudad de Granada, Giancarlo Andretta, 2019', 'Taddeo in *L’italiana in Algeri*, with Karina Demurova · Orquesta Ciudad de Granada, Giancarlo Andretta, 2019'), by: 'Maxine Caulfield' },
  ],
  [
    { img: mesias, what: s('*El Mesías* · Orquesta Sinfónica de Galicia, Carlos Mena, 2018', '*Messiah* · Galicia Symphony Orchestra, Carlos Mena, 2018') },
    { img: dido2, what: s('*Dido y Eneas* · Hippocampus, 2022', '*Dido and Aeneas* · Hippocampus, 2022'), by: 'Enrique Martín' },
    { img: segreto, what: s('Gil en *Il segreto di Susanna*, con Elena Simionov · La voz humana', 'Gil in *Il segreto di Susanna*, with Elena Simionov · La voz humana'), by: 'Maxine Caulfield' },
  ],
];
