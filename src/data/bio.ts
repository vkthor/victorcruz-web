// Biografías en tres extensiones (español e inglés). Admiten *cursiva*.
import { tr, type Lang, type T } from '../i18n';

/** Biografía completa (página de Biografía y descargas). */
export const bioLong: { es: string[]; en: string[] } = {
  es: [
    'El barítono Víctor Cruz nació en Guadix (Granada) y se graduó en Canto en el Real Conservatorio Superior de Música «Victoria Eugenia» de Granada con Matrícula de Honor y Primer Premio del Conservatorio, bajo la tutela de María del Mar Donaire y Héctor Eliel Márquez. Ha desarrollado su técnica con Carlos Mena y José Antonio López, y se ha formado con maestros como Eduardo López Banzo y Lluís Vilamajó.',
    'Colabora con conjuntos como Al Ayre Español (Eduardo López Banzo), Vox Luminis (Lionel Meunier), Ensemble I Gemelli (Emiliano Gonzalez Toro), La Capella Reial de Catalunya (Jordi Savall), La Ritirata (Josetxu Obregón), la Orquesta Barroca de Sevilla, Collegium Musicum Madrid, La Grande Chapelle, Capella Sancta Maria (Ámsterdam), The Rare Fruits Council, Concerto 1700, Capella de Ministrers y Nereydas.',
    'Como solista ha interpretado Orfeo de Monteverdi con Los Músicos de Su Alteza (Luis Antonio González), Taddeo en *L’italiana in Algeri* (Giancarlo Andretta), Eneas en *Dido y Eneas* de Purcell (Alfonso Sebastián), Apolo en *Apollo e Dafne* de Händel (Carlos Mena), el *Oratorio a Santa Bárbara* de José Lidón (Aarón Zapico) y los papeles de bajo de *King Arthur* de Purcell. Ha sido también Don Quijote en *El retablo de Maese Pedro*, Manuel en *La vida breve* de Falla con la Orquesta Nacional de España, Gil en *Il segreto di Susanna* y Pedro en *Katiuska*. En oratorio ha cantado las Pasiones según San Juan y según San Mateo, el *Oratorio de Navidad*, el *Magnificat* y numerosas cantatas de Bach, *El Mesías* de Händel y los réquiems de Mozart, Fauré y Brahms.',
    'Su interés por la música antigua hispana le llevó a fundar Jácaras del Zéfiro, conjunto que dirige y que se dedica a recuperar ese patrimonio a partir de las fuentes, que él mismo transcribe y lleva a las salas de concierto. La crítica lo ha descrito como un ensemble «de fuerte personalidad» y ha destacado la «riqueza chispeante» de su sonido. Además, se forma como intérprete de cuerda pulsada con Jesús Sánchez y Fernando Serrano.',
    'Es profesor de técnica vocal del Joven Coro de Andalucía, ha sido profesor de Canto en Musikex, Escuela Superior de Música de Extremadura, y ha impartido clases magistrales en la Florida International University (Miami). Colabora en proyectos educativos de la Orquesta y Coro Nacionales de España y es asesor lingüístico de la Film Symphony Orchestra y del Coro Nacional de España. Ha trabajado como locutor y presentador para Radio Clásica (RNE) y el Centro Nacional de Difusión Musical, y es también realizador audiovisual para conjuntos y solistas.',
  ],
  en: [
    'Víctor Cruz is a Spanish baritone specialising in early music. Born in Guadix (Granada), he graduated in singing from the Real Conservatorio Superior de Música «Victoria Eugenia» in Granada with the highest honours and the Conservatory’s First Prize, under María del Mar Donaire and Héctor Eliel Márquez. He has developed his technique with Carlos Mena and José Antonio López, and has also studied with Eduardo López Banzo and Lluís Vilamajó.',
    'He sings with ensembles such as Al Ayre Español (Eduardo López Banzo), Vox Luminis (Lionel Meunier), Ensemble I Gemelli (Emiliano Gonzalez Toro), La Capella Reial de Catalunya (Jordi Savall), La Ritirata (Josetxu Obregón), the Orquesta Barroca de Sevilla, Collegium Musicum Madrid, La Grande Chapelle, Capella Sancta Maria (Amsterdam), The Rare Fruits Council, Concerto 1700, Capella de Ministrers and Nereydas.',
    'His solo roles include Monteverdi’s Orfeo with Los Músicos de Su Alteza (Luis Antonio González), Taddeo in *L’italiana in Algeri* (Giancarlo Andretta), Aeneas in Purcell’s *Dido and Aeneas* (Alfonso Sebastián), Apollo in Handel’s *Apollo e Dafne* (Carlos Mena), José Lidón’s *Oratorio a Santa Bárbara* (Aarón Zapico) and the bass roles in Purcell’s *King Arthur*. He has also sung Don Quixote in Falla’s *El retablo de Maese Pedro*, Manuel in *La vida breve* with the Spanish National Orchestra, Gil in *Il segreto di Susanna* and Pedro in *Katiuska*. In oratorio he has sung Bach’s St John and St Matthew Passions, *Christmas Oratorio*, *Magnificat* and many cantatas, Handel’s *Messiah* and the Requiems of Mozart, Fauré and Brahms.',
    'His interest in early Hispanic music led him to found Jácaras del Zéfiro, the ensemble he directs, devoted to recovering that heritage from the original sources, which he transcribes himself and brings to the concert hall. Critics have described it as an ensemble “of strong personality” and praised the “sparkling richness” of its sound. He also studies plucked-string instruments with Jesús Sánchez and Fernando Serrano.',
    'He teaches vocal technique to the Joven Coro de Andalucía, has taught singing at Musikex, the Escuela Superior de Música de Extremadura, and has given masterclasses at Florida International University (Miami). He takes part in educational projects of the Spanish National Orchestra and Choir and is a language coach for the Film Symphony Orchestra and the Spanish National Choir. He has worked as a voice-over artist and presenter for Radio Clásica (RNE) and the Centro Nacional de Difusión Musical, and is also a filmmaker for ensembles and soloists.',
  ],
};

/** Biografía media (unas 130 palabras). */
export const bioMedium: T = {
  es: 'El barítono Víctor Cruz (Guadix, Granada) está especializado en música antigua. Colabora con conjuntos como Al Ayre Español, Vox Luminis, Ensemble I Gemelli, La Capella Reial de Catalunya (Jordi Savall), La Ritirata y la Orquesta Barroca de Sevilla. Como solista ha interpretado Orfeo de Monteverdi con Los Músicos de Su Alteza, Taddeo en *L’italiana in Algeri* con Giancarlo Andretta, Eneas en *Dido y Eneas* y Apolo en *Apollo e Dafne* con Carlos Mena, además de las Pasiones de Bach, *El Mesías* de Händel y los réquiems de Mozart, Fauré y Brahms. Fundó y dirige Jácaras del Zéfiro, conjunto dedicado a recuperar la música antigua hispana a partir de las fuentes, que él mismo transcribe. Es profesor de técnica vocal del Joven Coro de Andalucía y asesor lingüístico de la Film Symphony Orchestra y del Coro Nacional de España.',
  en: 'Spanish baritone Víctor Cruz (Guadix, Granada) specialises in early music. He sings with ensembles such as Al Ayre Español, Vox Luminis, Ensemble I Gemelli, La Capella Reial de Catalunya (Jordi Savall), La Ritirata and the Orquesta Barroca de Sevilla. His solo roles include Monteverdi’s Orfeo with Los Músicos de Su Alteza, Taddeo in *L’italiana in Algeri* under Giancarlo Andretta, Aeneas in *Dido and Aeneas* and Apollo in *Apollo e Dafne* under Carlos Mena, as well as Bach’s Passions, Handel’s *Messiah* and the Requiems of Mozart, Fauré and Brahms. He founded and directs Jácaras del Zéfiro, an ensemble devoted to recovering early Hispanic music from the original sources, which he transcribes himself. He teaches vocal technique to the Joven Coro de Andalucía and is a language coach for the Film Symphony Orchestra and the Spanish National Choir.',
};

/** Biografía corta (unas 50 palabras). */
export const bioShort: T = {
  es: 'Víctor Cruz es un barítono nacido en Guadix (Granada) y especializado en música antigua. Canta con Al Ayre Español, Vox Luminis, I Gemelli, Jordi Savall y La Ritirata, y como solista ha interpretado a Orfeo, Eneas, Apolo y Taddeo. Fundó y dirige Jácaras del Zéfiro, dedicado a recuperar la música antigua hispana.',
  en: 'Víctor Cruz is a baritone from Guadix (Granada, Spain) specialising in early music. He sings with Al Ayre Español, Vox Luminis, I Gemelli, Jordi Savall and La Ritirata, and his solo roles include Orfeo, Aeneas, Apollo and Taddeo. He founded and directs Jácaras del Zéfiro, devoted to recovering early Hispanic music.',
};

/** Entradilla de la portada y del dossier (los grupos, en este orden). */
export const lead: T = {
  es: 'Barítono especializado en música antigua. Canta con Al Ayre Español, Vox Luminis, I Gemelli, Jordi Savall y La Ritirata, y fundó y dirige Jácaras del Zéfiro.',
  en: 'Baritone specialising in early music. He sings with Al Ayre Español, Vox Luminis, I Gemelli, Jordi Savall and La Ritirata, and founded and directs Jácaras del Zéfiro.',
};

/** Resumen de la portada. */
export const bioHome: { es: string[]; en: string[] } = {
  es: [
    'Natural de Guadix (Granada), se graduó en Canto en el Real Conservatorio Superior de Música «Victoria Eugenia» de Granada con Matrícula de Honor y Primer Premio, y desarrolló su técnica con Carlos Mena y José Antonio López.',
    'Como solista ha cantado Orfeo de Monteverdi con Los Músicos de Su Alteza, Taddeo en *L’italiana in Algeri* con Giancarlo Andretta y Eneas en *Dido y Eneas* con la Orquesta Barroca de Sevilla. En oratorio, las Pasiones y cantatas de Bach, *El Mesías* y los réquiems de Mozart, Fauré y Brahms.',
  ],
  en: [
    'Born in Guadix (Granada), he graduated in singing from the Real Conservatorio Superior de Música «Victoria Eugenia» in Granada with the highest honours and First Prize, and developed his technique with Carlos Mena and José Antonio López.',
    'His solo roles include Monteverdi’s Orfeo with Los Músicos de Su Alteza, Taddeo in *L’italiana in Algeri* under Giancarlo Andretta and Aeneas in *Dido and Aeneas* with the Orquesta Barroca de Sevilla. In oratorio, Bach’s Passions and cantatas, *Messiah* and the Requiems of Mozart, Fauré and Brahms.',
  ],
};

/** Conjuntos y directores con los que ha cantado (portada, trayectoria y dossier), con enlace a su web. */
export const ensembles: { name: T | string; url: T | string }[] = [
  { name: 'Al Ayre Español', url: 'https://www.alayreespanol.com/' },
  { name: 'Vox Luminis', url: { es: 'https://voxluminis.com/es/', en: 'https://voxluminis.com/en/' } },
  { name: 'Ensemble I Gemelli', url: 'https://gemelli-factory.com/' },
  { name: 'Jordi Savall', url: { es: 'https://jordisavall.com/es/conjunts/le-concert-des-nations/', en: 'https://jordisavall.com/en/conjunts/le-concert-des-nations/' } }, // Le Concert des Nations
  { name: 'La Ritirata', url: 'https://laritirata.com/' },
  { name: 'Orquesta Barroca de Sevilla', url: 'https://orquestabarrocadesevilla.com/' },
  { name: 'Collegium Musicum Madrid', url: 'https://www.manuelminguillon.com/collegium-musicum-madrid-recupera-la-musica-de-los-siglos-xvi-xvii-y-xviii.html' },
  { name: 'Capella de Ministrers', url: 'https://capelladeministrers.com/' },
  { name: { es: 'Orquesta y Coro RTVE', en: 'RTVE Orchestra and Choir' }, url: 'https://www.rtve.es/orquesta-coro/' },
  { name: 'Orquesta Ciudad de Granada', url: 'https://www.orquestaciudadgranada.es/' },
  { name: 'Concerto 1700', url: 'https://concerto1700.com/' },
  { name: 'Nereydas', url: 'https://www.nereydas.com/' },
];

/** Lista «Ha cantado con» en HTML: cada nombre enlaza a la web del grupo. */
export const ensemblesHtml = (lang: Lang) =>
  ensembles.map((e) => `<a href="${tr(e.url, lang)}" rel="noopener">${tr(e.name, lang)}</a>`).join('&nbsp;<i>·</i> ');
