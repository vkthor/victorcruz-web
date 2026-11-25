// Críticas: citas literales (comprobadas en las webs originales, salvo las del Heraldo de Aragón y el Diario Vasco,
// que salieron sólo en papel y vienen de las copias de Víctor). Las traducciones al inglés son nuestras.
// Cada crítico aparece una sola vez: si tiene varias críticas, van juntas en `more`.
import type { T } from '../i18n';

export interface Quote {
  q: string; // cita original, con *cursiva*
  en?: string; // traducción al inglés
  es?: string; // traducción al español (si el original no está en español)
  outlet: string;
  date: string; // AAAA-MM-DD
  about: T; // obra o papel, y dónde
  url?: string;
  country?: T; // medios extranjeros
  paid?: boolean; // el enlace lleva a una hemeroteca de pago
}

export interface Review extends Quote {
  id: string;
  author: string;
  home?: boolean; // en el bloque «Prensa» de la portada (sólo la primera cita)
  more?: Quote[]; // otras críticas del mismo crítico
}

const s = (es: string, en: string): T => ({ es, en });

/** La cita principal: Galtier sobre su Orfeo (Heraldo de Aragón, 2017, sólo en papel), con su crítica de Codalario (2019). */
export const heroQuote: Review = {
  id: 'galtier',
  author: 'Juan Carlos Galtier',
  q: 'El barítono Víctor Cruz fue un auténtico lujo, tremendamente musical, creíble como actor y con un registro vocal amplísimo que usa con inteligencia para dotar de la expresión adecuada a cada frase.',
  en: 'Baritone Víctor Cruz was a true luxury: tremendously musical, convincing as an actor and with a very wide vocal range that he uses intelligently to give each phrase the right expression.',
  outlet: 'Heraldo de Aragón',
  date: '2017-08-11',
  about: s('Orfeo en *L’Orfeo* de Monteverdi, Festival de Música Antigua de Daroca', 'Orfeo in Monteverdi’s *L’Orfeo*, Daroca Early Music Festival'),
  more: [
    {
      q: 'A Víctor Cruz le habíamos visto en un espectacular *Orfeo* de Monteverdi […] sin duda uno de los triunfadores de la noche.',
      en: 'We had seen Víctor Cruz in a spectacular *Orfeo* by Monteverdi […] undoubtedly one of the triumphs of the evening.',
      outlet: 'Codalario',
      date: '2019-05-24',
      about: s('Taddeo en *L’italiana in Algeri*, Orquesta Ciudad de Granada, Giancarlo Andretta', 'Taddeo in *L’italiana in Algeri*, Orquesta Ciudad de Granada, Giancarlo Andretta'),
      url: 'https://www.codalario.com/giancarlo-andretta/criticas-2019/critica-giancarlo-andretta-dirige-la-italiana-en-argel-de-rossini-al-frente-de-la-orquesta-ciudad-de-granada_8132_73_25117_0_1_in.html',
    },
  ],
};

export const reviews: Review[] = [
  {
    id: 'diariovasco',
    author: 'Emecé',
    q: 'Resulta impactante la fonación del barítono Cruz, […] su textura vocal está llena de fuerza broncínea, con una emisión homogénea, larga y redonda, estando en posesión de un centro que para sí quisieran alguno que otro de su cuerda que sube a un escenario. De no olvidar.',
    en: 'Baritone Cruz’s phonation is striking […] his vocal texture is full of bronze-like strength, with an even, long and rounded emission, and he has a middle register that more than one singer of his voice type would envy. Unforgettable.',
    outlet: 'Diario Vasco',
    date: '2017-08-09',
    about: s('Madrigales de Monteverdi, Vozes del Ayre (Al Ayre Español), Quincena Musical de San Sebastián', 'Monteverdi madrigals, Vozes del Ayre (Al Ayre Español), San Sebastián Musical Fortnight'),
    url: 'https://lectura.kioskoymas.com/el-diario-vasco/20170809',
    paid: true,
  },
  {
    id: 'tarin',
    author: 'Carlos Tarín',
    home: true,
    q: 'A su voz clara y poderosa de barítono añade algunas notas graves con la profundidad de un bajo […] con una claridad prístina.',
    en: 'To his clear, powerful baritone voice he adds low notes with the depth of a bass […] with pristine clarity.',
    outlet: 'ABC de Sevilla',
    date: '2023-12-05',
    about: s('Bajo solista, Otoño Barroco, Teatro Turina', 'Bass soloist, Otoño Barroco, Teatro Turina'),
    url: 'https://www.abc.es/queplan/sevilla/conciertos/tempus-nativitatis-20231205172459-nts.html',
    more: [
      {
        q: 'En el final pudimos oírlo con una guitarra barroca, acompañando con un rasgueo extraordinario.',
        en: 'At the end we heard him with a Baroque guitar, accompanying with extraordinary strumming.',
        outlet: 'ABC de Sevilla',
        date: '2026-01-31',
        about: s('Lully y Charpentier con La Ritirata, Josetxu Obregón', 'Lully and Charpentier with La Ritirata, Josetxu Obregón'),
        url: 'https://www.abc.es/queplan/sevilla/conciertos/ritirata-buscando-equilibrio-20260131012944-nts.html',
      },
    ],
  },
  {
    id: 'moreno',
    author: 'Andrés Moreno Mengíbar',
    q: 'Una voz poderosa y cálida a la vez, de una proyección soberbia y capaz de regular y de transmitir afectos.',
    en: 'A voice both powerful and warm, with superb projection, able to shade and to convey the affections.',
    outlet: 'Diario de Sevilla',
    date: '2022-03-02',
    about: s('Eneas en *Dido y Eneas*, Orquesta Barroca de Sevilla', 'Aeneas in *Dido and Aeneas*, Orquesta Barroca de Sevilla'),
    url: 'https://www.beckmesser.com/critica-dido-eneas-sevilla-dido-muere-bella/',
    more: [
      {
        q: 'Un bajo-barítono de voz contundente, redonda, rica en armónicos y en colores merced a un espléndido control de la emisión y a un soberbio gusto en el fraseo.',
        en: 'A bass-baritone with a forceful, round voice, rich in overtones and colours thanks to splendid control of emission and superb taste in phrasing.',
        outlet: 'Beckmesser',
        date: '2022-10-05',
        about: s('Don Diego en *Don Diego de Granada*, Festival Música Sur', 'Don Diego in *Don Diego de Granada*, Música Sur Festival'),
        url: 'https://www.beckmesser.com/critica-don-diego-de-granada-festival-musica-sur/',
      },
      {
        q: 'Es un placer escuchar a Víctor Cruz, con esa voz firme, contundente, de graves redondos y resonantes y un fraseo siempre atento al acento.',
        en: 'It is a pleasure to hear Víctor Cruz, with his firm, forceful voice, round and resonant low notes and phrasing always attentive to accent.',
        outlet: 'Beckmesser',
        date: '2022-10-07',
        about: s('Bajo solista en Heinichen y Bach (BWV 131), Otoño Barroco', 'Bass soloist in Heinichen and Bach (BWV 131), Otoño Barroco'),
        url: 'https://www.beckmesser.com/critica-otono-barroco-orquesta-barroca-sevilla/',
      },
    ],
  },
  {
    id: 'guada',
    author: 'Mario Guada',
    home: true,
    q: 'Personalmente la sorpresa más agradable de la noche, mostrando una línea de canto realmente elegante, con gran gusto, un timbre muy bien pulido y una dicción impecable.',
    en: 'For me, the most pleasant surprise of the evening, with a truly elegant vocal line, great taste, a beautifully polished timbre and impeccable diction.',
    outlet: 'Codalario',
    date: '2017-03-26',
    about: s('Dióscoro en el *Oratorio a Santa Bárbara* de Lidón, Acadèmia 1750, Aarón Zapico', 'Dióscoro in Lidón’s *Oratorio a Santa Bárbara*, Acadèmia 1750, Aarón Zapico'),
    url: 'https://www.codalario.com/critica/criticas-2017/critica-recuperacion-de-un-oratorio-de-jose-lidon-para-el-universo-barroco-del-cndm_5336_76_15856_0_1_in.html',
  },
  {
    id: 'ruiz',
    author: 'José Manuel Ruiz Martínez',
    home: true,
    q: 'Con una bellísima voz y sentido dramático del canto, supo construir el *ethos* del personaje de forma verosímil y emotiva.',
    en: 'With a most beautiful voice and a dramatic sense of singing, he built the character’s *ethos* in a convincing and moving way.',
    outlet: 'Scherzo',
    date: '2022-10-03',
    about: s('Don Diego en el estreno de *Don Diego de Granada*, Festival Música Sur', 'Don Diego in the premiere of *Don Diego de Granada*, Música Sur Festival'),
    url: 'https://scherzo.es/motril-brillante-estreno-de-la-opera-don-diego-de-granada/',
  },
  {
    id: 'andueza',
    author: 'Simón Andueza',
    q: 'Su cálida voz brilló en el registro más agudo y alcanzó una profundidad rotunda en los graves de verdadero bajo.',
    en: 'His warm voice shone in the upper register and reached a resounding depth in the low notes of a true bass.',
    outlet: 'Ritmo',
    date: '2026-06-03',
    about: s('Solista en «Torre metropolitana», Burgos Baroque Ensemble, Catedral de Burgos', 'Soloist in “Torre metropolitana”, Burgos Baroque Ensemble, Burgos Cathedral'),
    url: 'https://www.ritmo.es/auditorio/critica-burgos-baroque-ensemble-y-ulises-illan-recuperan-musica-de-su-catedral-por-simon-andueza',
    more: [
      {
        q: 'Supo destacar en todo el recital por su potencia vocal, excelente pronunciación del texto y su timbre natural y homogéneo.',
        en: 'He stood out throughout the recital for his vocal power, excellent diction and natural, even timbre.',
        outlet: 'Ritmo',
        date: '2020-12-05',
        about: s('Villancicos, Al Ayre Español, Eduardo López Banzo', 'Villancicos, Al Ayre Español, Eduardo López Banzo'),
        url: 'https://www.ritmo.es/auditorio/critica-al-ayre-espanol-y-nuestros-grandes-villancicos-por-simon-andueza',
      },
      {
        q: 'Exhibió su generosa voz, de gran naturalidad e igualdad en el amplio registro y de una gran expresividad y carácter.',
        en: 'He displayed his generous voice, very natural and even across a wide range, with great expressiveness and character.',
        outlet: 'Ritmo',
        date: '2021-12-06',
        about: s('Zelenka, *Dixit Dominus*, Nereydas, Catedral de Cuenca', 'Zelenka, *Dixit Dominus*, Nereydas, Cuenca Cathedral'),
        url: 'https://www.ritmo.es/auditorio/critica-nereydas-inaugura-el-ciclo-de-adviento-de-la-smr-de-cuenca-por-simon-andueza',
      },
    ],
  },
  {
    id: 'soto',
    author: 'Félix Soto',
    q: 'El timbre natural y bello de Víctor Cruz voló sobre el lujoso y rítmico colchón armónico del piano.',
    en: 'Víctor Cruz’s natural, beautiful timbre soared over the rich, rhythmic harmonic cushion of the piano.',
    outlet: 'Ritmo',
    date: '2023-11-16',
    about: s('Velada en honor de Fanny Mendelssohn, ciclo Satélites, Auditorio Nacional', 'Evening in honour of Fanny Mendelssohn, Satélites series, Auditorio Nacional'),
    url: 'https://www.ritmo.es/auditorio/critica-deliciosa-velada-en-el-hogar-de-fanny-mendelssohn-por-felix-soto',
  },
  {
    id: 'marco',
    author: 'José María Marco',
    q: 'La soprano Lucía Caihuela y el barítono Víctor Cruz dieron vida, estupendamente, a los graciosos, con dos escenas de un humor que no ha perdido nada […] de su gracia popular.',
    en: 'Soprano Lucía Caihuela and baritone Víctor Cruz were superb as the comic pair, in two scenes whose humour has lost none […] of its popular wit.',
    outlet: 'Ópera Actual',
    date: '2021-02-08',
    about: s('Sátiro en *Júpiter y Semele* de Literes, Al Ayre Español', 'Satyr in Literes’s *Júpiter y Semele*, Al Ayre Español'),
    url: 'https://www.operaactual.com/critica/la-mitologia-en-zarzuela/',
  },
  {
    id: 'siana',
    author: 'Pablo Siana',
    q: 'El barítono granadino Víctor Cruz me sorprendió gratamente […] por una tesitura muy igualada en todos los registros sin necesidad de cambiar el color ni abusar de dramatismo para el grave.',
    en: 'Granada-born baritone Víctor Cruz pleasantly surprised me […] with a range evenly matched across all registers, with no need to change colour or overdo the drama in the low notes.',
    outlet: 'Pablo, la música en Siana',
    date: '2017-03-26',
    about: s('Dióscoro en el *Oratorio a Santa Bárbara* de Lidón, Acadèmia 1750, Auditorio de Oviedo', 'Dióscoro in Lidón’s *Oratorio a Santa Bárbara*, Acadèmia 1750, Auditorio de Oviedo'),
    url: 'https://pablosiana.blog/2017/03/26/en-honor-a-lidon/',
  },
  {
    id: 'carrillo',
    author: 'Julián Carrillo',
    q: 'Víctor Cruz es un barítono bajo con buenas agilidades, alcanza bien las notas más graves de su parte y tiene una expresividad realmente adecuada para este tipo de obras.',
    en: 'Víctor Cruz is a bass-baritone with good agility; he reaches the lowest notes of his part with ease and has an expressiveness truly suited to this kind of work.',
    outlet: 'El País',
    date: '2018-12-08',
    about: s('Bajo solista en *El Mesías* de Händel, Orquesta Sinfónica de Galicia, Carlos Mena', 'Bass soloist in Handel’s *Messiah*, Galicia Symphony Orchestra, Carlos Mena'),
    url: 'https://elpais.com/ccaa/2018/12/08/galicia/1544267459_977133.html',
  },
  {
    id: 'okada',
    author: 'Victoria Okada',
    q: 'Lorsque Victor Cruz s’aventure dans les aigus inhabituels pour sa tessiture, la concentration vocale rend l’expression plus vive et l’auditoire est littéralement captivé.',
    es: 'Cuando Víctor Cruz se aventura en agudos inusuales para su tesitura, la concentración vocal aviva la expresión y el público queda literalmente cautivado.',
    en: 'When Víctor Cruz ventures into high notes unusual for his range, the vocal focus makes the expression more vivid and the audience is literally captivated.',
    outlet: 'Crescendo Magazine',
    country: s('Bélgica', 'Belgium'),
    date: '2024-06-13',
    about: s('Madrigales de Monteverdi, Saint-Michel-en-Thiérache (Francia)', 'Monteverdi madrigals, Saint-Michel-en-Thiérache (France)'),
    url: 'https://www.crescendo-magazine.be/ouverture-du-festival-saint-michel-en-thierache/',
  },
];

/** Fecha corta: «mayo de 2019» / «May 2019». */
export function pressDate(iso: string, lang: 'es' | 'en') {
  const d = new Date(iso + 'T12:00:00');
  return d.toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-GB', { month: 'long', year: 'numeric' });
}

export const byId = (id: string) => [heroQuote, ...reviews].find((r) => r.id === id)!;

/** Carrusel de la portada: Galtier (Heraldo) y Diario Vasco primero; luego críticos distintos de los del bloque «Prensa». */
export const sliderQuotes: Review[] = ['galtier', 'diariovasco', 'moreno', 'carrillo', 'okada', 'soto'].map(byId);
