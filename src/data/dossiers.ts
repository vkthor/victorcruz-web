// Dossieres de los proyectos. Los de Jácaras y del Dúo están en jacarasdelzefiro.es; los demás, en public/dossieres/.
import type { T } from '../i18n';

export interface Dossier {
  label: T; // admite *cursiva*
  es: string;
  en?: string; // si falta, sólo hay versión en español
}
export interface ProjectDossiers {
  id: 'jdz' | 'duo' | 'veladas' | 'cantar';
  project: T;
  items: Dossier[];
}

const s = (es: string, en?: string): T => ({ es, en: en ?? es });
const jdz = 'https://jacarasdelzefiro.es/dossieres/';

export const dossiers: ProjectDossiers[] = [
  {
    id: 'jdz',
    project: s('Jácaras del Zéfiro'),
    items: [
      { label: s('*Avecillas*'), es: `${jdz}JdZ-Avecillas-dossier-ES.pdf`, en: `${jdz}JdZ-Avecillas-dossier-EN.pdf` },
      { label: s('*La gracia y el gozo* (Navidad)', '*La gracia y el gozo* (Christmas)'), es: `${jdz}JdZ-La-gracia-y-el-gozo-dossier-ES.pdf`, en: `${jdz}JdZ-La-gracia-y-el-gozo-dossier-EN.pdf` },
    ],
  },
  {
    id: 'duo',
    project: s('Dúo del Zéfiro'),
    items: [
      { label: s('*La Cómica Historia de Don Quijote*', '*The Comical History of Don Quixote*'), es: `${jdz}Duo-del-Zefiro-Quijote-dossier-ES.pdf`, en: `${jdz}Duo-del-Zefiro-Don-Quixote-dossier-EN.pdf` },
    ],
  },
  {
    id: 'veladas',
    project: s('Una velada musical en Baden-Baden', 'A Musical Evening in Baden-Baden'),
    items: [{ label: s('Barítono, violonchelo y piano', 'Baritone, cello and piano'), es: '/dossieres/una-velada-musical-en-baden-baden.pdf' }],
  },
  {
    id: 'cantar',
    project: s('El Cantar de las Cuerdas'),
    items: [
      { label: s('Versión profana', 'Secular programme'), es: '/dossieres/el-cantar-de-las-cuerdas.pdf' },
      { label: s('Versión sacra, *Cum cantico in cithara*', 'Sacred programme, *Cum cantico in cithara*'), es: '/dossieres/cum-cantico-in-cithara.pdf' },
    ],
  },
];

export const dossiersOf = (id: ProjectDossiers['id']) => dossiers.find((d) => d.id === id)!;
