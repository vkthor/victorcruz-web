// Trayectoria: selección por años (poco y bien) y repertorio. Sin agenda futura.
import type { T } from '../i18n';

export interface Entry {
  what: T | string; // obra o programa, con *cursiva*; el papel va delante si lo hay
  with: T | string; // conjunto y director
  where?: T | string;
}

const s = (es: string, en?: string): T => ({ es, en: en ?? es });

export const career: { year: string; items: Entry[] }[] = [
  {
    year: '2026',
    items: [
      { what: s('*Avecillas*, con estrenos en tiempos modernos (fundador y director)', '*Avecillas*, with modern-day premieres (founder and director)'), with: 'Jácaras del Zéfiro', where: s('Festival Internacional de Arte Sacro de Madrid, Guadix Clásica, Festival de Música Española de Cádiz', 'Madrid Festival of Sacred Art, Guadix Clásica, Cádiz Festival of Spanish Music') },
      { what: s('Brahms, *Ein deutsches Requiem*'), with: s('Le Concert des Nations y La Capella Reial de Catalunya, Jordi Savall', 'Le Concert des Nations and La Capella Reial de Catalunya, Jordi Savall'), where: s('Lleida, Madrid, Barcelona, París', 'Lleida, Madrid, Barcelona, Paris') },
      { what: s('Mozart y Haydn', 'Mozart and Haydn'), with: 'Vox Luminis, Lionel Meunier', where: s('Bruselas, Amberes, Madrid, Sevilla, Salzburgo', 'Brussels, Antwerp, Madrid, Seville, Salzburg') },
      { what: s('*Dowland 400*, solista', '*Dowland 400*, soloist'), with: 'Collegium Musicum Madrid', where: s('Bilbao, El Escorial') },
      { what: s('Lully y Charpentier, barítono y guitarra barroca', 'Lully and Charpentier, baritone and Baroque guitar'), with: 'La Ritirata, Josetxu Obregón', where: s('Sevilla', 'Seville') },
      { what: s('*La Cómica Historia de Don Quijote* (Purcell, Eccles)', '*The Comical History of Don Quixote* (Purcell, Eccles)'), with: s('Dúo del Zéfiro, con Juan Carlos de Mulder', 'Dúo del Zéfiro, with Juan Carlos de Mulder'), where: s('Clásicos en Verano, Comunidad de Madrid', 'Clásicos en Verano, Madrid region') },
      { what: s('*Clasictacular*, barítono solista', '*Clasictacular*, baritone soloist'), with: 'Film Symphony Orchestra', where: s('Auditorio Nacional, Madrid') },
      { what: s('«Torre metropolitana», solista', '“Torre metropolitana”, soloist'), with: 'Burgos Baroque Ensemble, Javier Ulises Illán', where: s('Catedral de Burgos', 'Burgos Cathedral') },
      { what: s('Monteverdi, *Vespro della Beata Vergine*'), with: 'Capella de Ministrers, Carles Magraner' },
      { what: s('*El Cantar de las Cuerdas*'), with: s('con Blanca Martín', 'with Blanca Martín'), where: s('CLM Antiqva, CaixaForum Madrid') },
    ],
  },
  {
    year: '2025',
    items: [
      { what: s('*Ensaladas* (Flecha, Encina, Mudarra), bajo y guitarra barroca', '*Ensaladas* (Flecha, Encina, Mudarra), bass and Baroque guitar'), with: s('Capella Sancta Maria (hoy Reïna Lupa), Enrique López-Cortón', 'Capella Sancta Maria (now Reïna Lupa), Enrique López-Cortón'), where: s('De Waalse Kerk, Ámsterdam; La Haya; Musica Antiqua Nova, Groninga', 'De Waalse Kerk, Amsterdam; The Hague; Musica Antiqua Nova, Groningen') },
      { what: s('Händel, *El Mesías*, bajo solista', 'Handel, *Messiah*, bass soloist'), with: s('Orquesta y Coro RTVE, Carlos Mena', 'RTVE Orchestra and Choir, Carlos Mena'), where: s('Emitido por La 2 (TVE)', 'Broadcast on La 2 (Spanish TV)') },
      { what: s('Monteverdi, *Vespro della Beata Vergine*'), with: 'Ensemble I Gemelli, Emiliano Gonzalez Toro', where: s('Sevilla, Aix-en-Provence', 'Seville, Aix-en-Provence') },
      { what: s('El Tiempo en *La Santissima Trinità* de A. Scarlatti', 'Il Tempo in A. Scarlatti’s *La Santissima Trinità*'), with: 'Collegium Musicum Madrid', where: s('Festival de Vélez-Blanco') },
      { what: s('Ledesma, *Stabat Mater*'), with: 'Septimæ', where: s('Fundación Juan March, Madrid; emitido por La 2', 'Fundación Juan March, Madrid; broadcast on La 2') },
      { what: s('Jesús en la *Pasión según San Juan*', 'Jesus in the *St John Passion*'), with: 'Ignacio Rodrigo', where: s('Catedral de Jaén', 'Jaén Cathedral') },
      { what: s('Rey Enrique en *El rey en la caza*', 'King Enrique in *El rey en la caza*'), with: s('Festival Brunetti, Gustavo Sánchez', 'Brunetti Festival, Gustavo Sánchez'), where: s('El Escorial') },
      { what: s('Concierto en el Museo del Prado', 'Concert at the Prado Museum'), with: 'The Rare Fruits Council, Manfredo Kraemer', where: s('Madrid') },
      { what: s('Solista de «La Música Dormida»', 'Soloist in “La Música Dormida”'), with: 'Burgos Baroque Ensemble, Javier Ulises Illán', where: s('Burgos, Aranda de Duero') },
      { what: s('*¡Oigan, miren y vengan a ver!*'), with: 'Al Ayre Español, Eduardo López Banzo', where: s('De Oosterpoort, Groninga (Países Bajos); Semana de Música Antigua de Estella', 'De Oosterpoort, Groningen (Netherlands); Estella Early Music Week') },
    ],
  },
  {
    year: '2024',
    items: [
      { what: s('*Diálogos del alma*, Bach, BWV 57', '*Diálogos del alma*, Bach, BWV 57'), with: 'Orquesta Barroca de Sevilla, Alfonso Sebastián', where: s('Espacio Turina, Sevilla', 'Espacio Turina, Seville') },
      { what: s('*Clasictacular*, barítono solista', '*Clasictacular*, baritone soloist'), with: 'Film Symphony Orchestra', where: s('Auditorio Nacional, Madrid') },
      { what: s('Don Quijote en *La ruta de Don Quijote*, versión escénica', 'Don Quixote in *La ruta de Don Quijote*, staged version'), with: 'Camerata Antonio Soler', where: s('ADDA, Alicante') },
      { what: s('*¡Oigan, miren y vengan a ver! Música inédita del Siglo de Oro*'), with: 'Al Ayre Español, Eduardo López Banzo', where: s('Catedral de Teruel; Klangvokal, Dortmund; Actus Humanus, Gdańsk', 'Teruel Cathedral; Klangvokal, Dortmund; Actus Humanus, Gdańsk') },
      { what: s('Estreno de *Toda la muerte en mi vida*: Brahms, Clara Schumann y Héctor Eliel Márquez', 'Premiere of *Toda la muerte en mi vida*: Brahms, Clara Schumann and Héctor Eliel Márquez'), with: s('con Beatriz González Calderón y Héctor Eliel Márquez', 'with Beatriz González Calderón and Héctor Eliel Márquez'), where: s('Guadix Clásica') },
      { what: s('*Las flores de Euterpe*: Strozzi, Caccini y Leonarda', '*Las flores de Euterpe*: Strozzi, Caccini and Leonarda'), with: 'Concento de Bozes, Carlos Mena', where: s('Salamanca Barroca (CNDM y Universidad de Salamanca)', 'Salamanca Barroca (CNDM and University of Salamanca)') },
      { what: s('Händel, *El Mesías*, y Bach, *Misa en si menor*: conciertos comentados, bajo solista', 'Handel, *Messiah*, and Bach, *Mass in B minor*: lecture-concerts, bass soloist'), with: 'Fundación Juan March', where: s('Madrid') },
      { what: s('*¡Veniz todos a bailar! Música, danza y fiesta en Jaca*'), with: 'Al Ayre Español, Eduardo López Banzo', where: s('Auditorio de Zaragoza') },
      { what: s('Concierto de Año Nuevo «De Viena a la España castiza», barítono solista', 'New Year concert “De Viena a la España castiza”, baritone soloist'), with: 'Orquesta Filarmonía Granada, Ricardo J. Espigares', where: s('Auditorio Manuel de Falla, Granada; Teatro Mira de Amescua, Guadix') },
    ],
  },
  {
    year: '2023',
    items: [
      { what: s('Jesús en la *Pasión según San Marcos* de Reinhard Keiser', 'Jesus in Reinhard Keiser’s *St Mark Passion*'), with: 'Conductus Ensemble, Andoni Sierra', where: s('FeMÀS, Espacio Turina, Sevilla', 'FeMÀS, Espacio Turina, Seville') },
      { what: s('Manuel en *La vida breve* de Falla', 'Manuel in Falla’s *La vida breve*'), with: s('Orquesta Nacional de España', 'Spanish National Orchestra'), where: s('Auditorio Nacional, Madrid') },
      { what: s('Momo en *Acis y Galatea* de Literes', 'Momo in Literes’s *Acis y Galatea*'), with: 'Concerto 1700, Daniel Pinteño', where: s('Universo Barroco (CNDM), Madrid; El Escorial') },
      { what: s('Don Quijote en *La ruta de Don Quijote* (Rodríguez Albert), estreno mundial', 'Don Quixote in *La ruta de Don Quijote* (Rodríguez Albert), world premiere'), with: 'FIU Symphony Orchestra, Gustavo Sánchez', where: s('Miami') },
      { what: s('Durón, «¿Ola qué?», estreno en tiempos modernos', 'Durón, “¿Ola qué?”, modern-day premiere'), with: 'Al Ayre Español, Eduardo López Banzo', where: s('Zaragoza') },
      { what: s('*Una velada musical en Berlín* (Fanny Mendelssohn)', '*A Musical Evening in Berlin* (Fanny Mendelssohn)'), with: s('con Beatriz González Calderón y Jesús Campo', 'with Beatriz González Calderón and Jesús Campo'), where: s('Ciclo Satélites, Auditorio Nacional', 'Satélites series, Auditorio Nacional, Madrid') },
      { what: s('Brahms, *Ein deutsches Requiem*, barítono solista', 'Brahms, *Ein deutsches Requiem*, baritone soloist'), with: s('Orquesta Joven y Joven Coro de Andalucía', 'Andalusian Youth Orchestra and Choir'), where: s('Málaga, Carmona') },
      { what: s('A. Scarlatti, *La Santissima Trinità*'), with: 'Collegium Musicum Madrid', where: s('Festival Internacional de Arte Sacro de Madrid', 'Madrid Festival of Sacred Art') },
      { what: s('Concierto participativo de Otoño Barroco, bajo solista', 'Otoño Barroco participatory concert, bass soloist'), with: s('Asociación de Amigos de la OBS, Marco Antonio García de Paz', 'Friends of the OBS, Marco Antonio García de Paz'), where: s('Teatro Turina, Sevilla', 'Teatro Turina, Seville') },
    ],
  },
  {
    year: '2022',
    items: [
      { what: s('Franck, *Les sept paroles du Christ en croix*, y Stravinsky, *Pulcinella*, solista', 'Franck, *Les sept paroles du Christ en croix*, and Stravinsky, *Pulcinella*, soloist'), with: 'Orquesta Ciudad de Granada, Víctor Pablo Pérez', where: s('Auditorio Manuel de Falla, Granada') },
      { what: s('Eneas en *Dido y Eneas* de Purcell', 'Aeneas in Purcell’s *Dido and Aeneas*'), with: s('Orquesta Barroca de Sevilla, Alfonso Sebastián; Hippocampus, Alberto Martínez Molina (escenificada)', 'Orquesta Barroca de Sevilla, Alfonso Sebastián; Hippocampus, Alberto Martínez Molina (staged)'), where: s('Sevilla, Las Rozas', 'Seville, Las Rozas') },
      { what: s('Don Diego en *Don Diego de Granada* (Héctor Eliel Márquez), estreno', 'Don Diego in *Don Diego de Granada* (Héctor Eliel Márquez), premiere'), with: 'Trío Arbós', where: s('Festival Música Sur, Motril') },
      { what: s('Papeles de bajo en *King Arthur* de Purcell', 'Bass roles in Purcell’s *King Arthur*'), with: s('Orquesta Joven y Joven Coro de Andalucía, Marco Antonio García de Paz', 'Andalusian Youth Orchestra and Choir, Marco Antonio García de Paz'), where: s('Baeza, Málaga, Itálica') },
      { what: s('Conforto, *La Nitteti*'), with: 'Nereydas, Javier Ulises Illán', where: s('Universo Barroco (CNDM), Madrid') },
      { what: s('Heinichen, *De profundis*, y Bach, BWV 131, bajo solista', 'Heinichen, *De profundis*, and Bach, BWV 131, bass soloist'), with: s('Otoño Barroco, Luis Antonio González'), where: s('Espacio Turina, Sevilla', 'Espacio Turina, Seville') },
      { what: s('Bach, «Cantatas a duelo»: *Ich habe genung*', 'Bach, “Cantatas a duelo”: *Ich habe genung*'), with: s('ciclo Satélites', 'Satélites series'), where: s('Auditorio Nacional, Madrid') },
      { what: s('Charpentier, *Te Deum* y *Messe de minuit*', 'Charpentier, *Te Deum* and *Messe de minuit*'), with: s('Orquesta Filarmónica de Málaga, José María Moreno', 'Málaga Philharmonic, José María Moreno'), where: s('Catedral de Málaga', 'Málaga Cathedral') },
    ],
  },
  {
    year: '2021',
    items: [
      { what: s('Sátiro y narrador en *Júpiter y Semele* de Literes', 'Satyr and narrator in Literes’s *Júpiter y Semele*'), with: 'Al Ayre Español, Eduardo López Banzo', where: s('Madrid, Zaragoza; emitido por La 2', 'Madrid, Zaragoza; broadcast on La 2') },
      { what: s('Purcell, *The Fairy Queen*'), with: s('Academia Barroca del Festival, Aarón Zapico', 'Festival Baroque Academy, Aarón Zapico'), where: s('Festival de Granada', 'Granada Festival') },
      { what: s('Bach, *Oratorio de Navidad*', 'Bach, *Christmas Oratorio*'), with: 'La Spagna, Javier Corcuera', where: s('Auditorio Nacional, Madrid') },
      { what: s('Zelenka y Händel, *Dixit Dominus*', 'Zelenka and Handel, *Dixit Dominus*'), with: 'Nereydas, Javier Ulises Illán', where: s('Catedral de Cuenca', 'Cuenca Cathedral') },
      { what: s('Porpora, *Duetti latini*'), with: 'Concento de Bozes, Carlos Mena', where: s('Salamanca') },
      { what: s('Francisco Guerrero, música sacra', 'Francisco Guerrero, sacred music'), with: 'La Grande Chapelle, Albert Recasens', where: s('Madrid, Úbeda, Baeza') },
    ],
  },
  {
    year: '2020',
    items: [
      { what: s('*¡Ay, bello esplendor!*, villancicos de José de Torres e Iribarren', '*¡Ay, bello esplendor!*, villancicos by José de Torres and Iribarren'), with: 'Al Ayre Español, Eduardo López Banzo', where: s('Universo Barroco (CNDM), Madrid, emitido por La 2; Bilbao; Festival de Úbeda y Baeza; Zaragoza', 'Universo Barroco (CNDM), Madrid, broadcast on La 2; Bilbao; Úbeda and Baeza Festival; Zaragoza') },
      { what: s('Bach, *Oratorio de Navidad* (cantata III), bajo solista', 'Bach, *Christmas Oratorio* (Cantata III), bass soloist'), with: s('«Bach en Navidad», Otoño Barroco, Andoni Sierra', '“Bach en Navidad”, Otoño Barroco, Andoni Sierra'), where: s('Espacio Turina, Sevilla', 'Espacio Turina, Seville') },
      { what: s('Luys Milán, *El Cortesano*'), with: 'Capella de Ministrers, Carles Magraner', where: s('Festival Renaixement, Monasterio de San Miguel de los Reyes, Valencia', 'Renaixement Festival, Monastery of San Miguel de los Reyes, Valencia') },
      { what: s('Mozart, *Requiem*, bajo solista', 'Mozart, *Requiem*, bass soloist'), with: s('Coro EOI, Rupert Damerell', 'EOI Choir, Rupert Damerell'), where: s('Teatro Fernández-Baldor, Torrelodones') },
      { what: s('Fauré, *Requiem*, barítono solista', 'Fauré, *Requiem*, baritone soloist'), with: s('Banda Sinfónica Municipal de Guadix y Coro de Ópera de Granada, Ricardo J. Espigares', 'Guadix Municipal Symphonic Band and Granada Opera Chorus, Ricardo J. Espigares'), where: s('Guadix Clásica') },
      { what: s('Schlendrian en la *Cantata del café* de Bach, BWV 211', 'Schlendrian in Bach’s *Coffee Cantata*, BWV 211'), with: s('con Manon Chauvin, Diego Blázquez y Rupert Damerell', 'with Manon Chauvin, Diego Blázquez and Rupert Damerell'), where: s('Festival Internacional de Música de Las Navas del Marqués', 'Las Navas del Marqués International Music Festival') },
    ],
  },
  {
    year: '2019',
    items: [
      { what: s('Taddeo en *L’italiana in Algeri* de Rossini', 'Taddeo in Rossini’s *L’italiana in Algeri*'), with: 'Orquesta Ciudad de Granada, Giancarlo Andretta', where: s('Auditorio Manuel de Falla, Granada') },
      { what: s('Händel, *El Mesías*, bajo solista', 'Handel, *Messiah*, bass soloist'), with: s('Carlos Mena: Orquesta Sinfónica de Navarra y Orquesta Ciudad de Granada', 'Carlos Mena: Navarre Symphony Orchestra and Orquesta Ciudad de Granada'), where: s('Semana de Música Antigua de Estella; Pamplona; Granada', 'Estella Early Music Week; Pamplona; Granada') },
      { what: s('Dios en *Il serpente di bronzo* de Zelenka, estreno de la producción', 'God in Zelenka’s *Il serpente di bronzo*, premiere of the production'), with: 'El Trovar, Sergio Franco Marco', where: s('Festival EnClaves, Santuario de Loreto, Huesca', 'EnClaves Festival, Loreto Sanctuary, Huesca') },
      { what: s('«Il caro Sassone»: cantatas y dúos de Händel', '“Il caro Sassone”: cantatas and duets by Handel'), with: 'Concento de Bozes, Carlos Mena', where: s('Salamanca Barroca (CNDM y Universidad de Salamanca)', 'Salamanca Barroca (CNDM and University of Salamanca)') },
      { what: s('Tonos humanos del Siglo de Oro, cuarteto vocal', 'Golden Age secular songs, vocal quartet'), with: s('con Jone Martínez, Carlos Mena y Diego Blázquez', 'with Jone Martínez, Carlos Mena and Diego Blázquez'), where: s('Semana de Música Antigua de Estella', 'Estella Early Music Week') },
      { what: s('*Rumbo a Poniente*, bajo', '*Rumbo a Poniente*, bass'), with: 'Collegium Musicum Madrid, Manuel Minguillón', where: s('Música Antigua Aranjuez, Palacio Real', 'Aranjuez Early Music Festival, Royal Palace') },
      { what: s('Orff, *Carmina Burana*, barítono solista', 'Orff, *Carmina Burana*, baritone soloist'), with: 'Daniel De la Puente', where: s('Teatro de Tres Cantos', 'Teatro de Tres Cantos, Madrid') },
    ],
  },
  {
    year: '2016–2018',
    items: [
      { what: s('Orfeo en *L’Orfeo* de Monteverdi', 'Orfeo in Monteverdi’s *L’Orfeo*'), with: 'Los Músicos de Su Alteza, Luis Antonio González', where: s('Daroca, Zaragoza') },
      { what: s('Dióscoro en el *Oratorio a Santa Bárbara* de Lidón, estreno en tiempos modernos', 'Dióscoro in Lidón’s *Oratorio a Santa Bárbara*, modern-day premiere'), with: 'Acadèmia 1750, Aarón Zapico', where: s('Sevilla, Madrid, Burgos, Oviedo', 'Seville, Madrid, Burgos, Oviedo') },
      { what: s('Händel, *El Mesías*, bajo solista', 'Handel, *Messiah*, bass soloist'), with: s('Orquesta Sinfónica de Galicia, Carlos Mena', 'Galicia Symphony Orchestra, Carlos Mena'), where: s('A Coruña') },
      { what: s('Apolo en *Apollo e Dafne* de Händel', 'Apollo in Handel’s *Apollo e Dafne*'), with: s('Orquesta Ciudad de Granada, Carlos Mena; Escuela Superior de Música Reina Sofía', 'Orquesta Ciudad de Granada, Carlos Mena; Reina Sofía School of Music'), where: s('Granada; Madrid; Segovia') },
      { what: s('Carissimi, *Jephte* y *Jonas*, bajo solista', 'Carissimi, *Jephte* and *Jonas*, bass soloist'), with: 'Carlos Ponseti', where: s('Castell de Bellver, Palma') },
      { what: s('Cererols, *Missa de Batalla* y *Missa pro defunctis*', 'Cererols, *Missa de Batalla* and *Missa pro defunctis*'), with: 'La Capella Reial de Catalunya, Jordi Savall' },
      { what: s('*Codex Lerma: el manuscrito encontrado*'), with: s('Capella Sancta Maria (Ámsterdam), Enrique López-Cortón, y La Caravaggia', 'Capella Sancta Maria (Amsterdam), Enrique López-Cortón, and La Caravaggia'), where: s('Festival Internacional de Arte Sacro de Madrid; FeMÀS, Catedral de Sevilla', 'Madrid Festival of Sacred Art; FeMÀS, Seville Cathedral') },
      { what: s('Madrigales de Monteverdi, «Entre cándidos bellos accidentes»', 'Monteverdi madrigals, “Entre cándidos bellos accidentes”'), with: s('Vozes del Ayre (Al Ayre Español), Eduardo López Banzo'), where: s('Quincena Musical de San Sebastián; Jaca', 'San Sebastián Musical Fortnight; Jaca') },
      { what: s('*Das süße Wort*, cantatas de Bach, y *Jesu, meine Freude*, motetes de J. C. y J. S. Bach', '*Das süße Wort*, Bach cantatas, and *Jesu, meine Freude*, motets by J. C. and J. S. Bach'), with: 'Al Ayre Español, Eduardo López Banzo', where: s('Bachfest Leipzig; Festival Monteverdi, Cremona', 'Bachfest Leipzig; Monteverdi Festival, Cremona') },
      { what: s('Gil en *Il segreto di Susanna* de Wolf-Ferrari', 'Gil in Wolf-Ferrari’s *Il segreto di Susanna*'), with: s('La voz humana, Héctor Eliel Márquez', 'La voz humana, Héctor Eliel Márquez'), where: s('Atarfe, Universidad de Granada, Andújar', 'Atarfe, University of Granada, Andújar') },
    ],
  },
];

/** Selección de repertorio (sólo lo que ha cantado; fuentes en _privado). */
export const repertoire: { title: T; items: (T | string)[] }[] = [
  {
    title: s('Ópera, zarzuela y escena', 'Opera, zarzuela and stage'),
    items: [
      s('Monteverdi · *L’Orfeo* (Orfeo)'),
      s('Purcell · *Dido y Eneas* (Eneas), *King Arthur* (papeles de bajo), *The Fairy Queen* (Drunken Poet, Sleep, Winter)', 'Purcell · *Dido and Aeneas* (Aeneas), *King Arthur* (bass roles), *The Fairy Queen* (Drunken Poet, Sleep, Winter)'),
      s('Purcell, Eccles y Courteville · *La Cómica Historia de Don Quijote* (canto y narración)', 'Purcell, Eccles and Courteville · *The Comical History of Don Quixote* (voice and narration)'),
      s('Händel · *Apollo e Dafne* (Apolo)', 'Handel · *Apollo e Dafne* (Apollo)'),
      s('Literes · *Júpiter y Semele* (Sátiro), *Acis y Galatea* (Momo)', 'Literes · *Júpiter y Semele* (Satyr), *Acis y Galatea* (Momo)'),
      s('Conforto · *La Nitteti* (un noble egipcio)', 'Conforto · *La Nitteti* (an Egyptian nobleman)'),
      s('Mozart · *Der Schauspieldirektor* (Buff)'),
      s('Rossini · *L’italiana in Algeri* (Taddeo)'),
      s('Wolf-Ferrari · *Il segreto di Susanna* (Gil)'),
      s('Falla · *El retablo de Maese Pedro* (Don Quijote), *La vida breve* (Manuel)', 'Falla · *El retablo de Maese Pedro* (Don Quixote), *La vida breve* (Manuel)'),
      s('Chueca y Valverde · *La Gran Vía* (Caballero de Gracia); Chapí · *La revoltosa* (Felipe); Guerrero · *La rosa del azafrán* (Juan Pedro)', 'Chueca and Valverde · *La Gran Vía* (Caballero de Gracia); Chapí · *La revoltosa* (Felipe); Guerrero · *La rosa del azafrán* (Juan Pedro)'),
      s('Sorozábal · *Katiuska* (Pedro); F. Alonso · *¿Qué pasa en Cádiz?* (Él), *El sueño de Boabdil* (Boabdil)', 'Sorozábal · *Katiuska* (Pedro); F. Alonso · *¿Qué pasa en Cádiz?* (Él), *El sueño de Boabdil* (Boabdil)'),
      s('Rodríguez Albert · *La ruta de Don Quijote* (Don Quijote)', 'Rodríguez Albert · *La ruta de Don Quijote* (Don Quixote)'),
      s('Héctor Eliel Márquez · *Don Diego de Granada* (Don Diego)'),
    ],
  },
  {
    title: s('Oratorio y música sacra', 'Oratorio and sacred music'),
    items: [
      s('Monteverdi · *Vespro della Beata Vergine*'),
      s('Carissimi · *Jephte*, *Jonas*'),
      s('Charpentier · *Te Deum*, *Messe de minuit*'),
      s('A. Scarlatti · *La Santissima Trinità* (El Tiempo)', 'A. Scarlatti · *La Santissima Trinità* (Il Tempo)'),
      s('Keiser · *Pasión según San Marcos* (Jesús)', 'Keiser · *St Mark Passion* (Jesus)'),
      s('Zelenka · *Il serpente di bronzo* (Dios), *Dixit Dominus*; Heinichen · *De profundis*', 'Zelenka · *Il serpente di bronzo* (God), *Dixit Dominus*; Heinichen · *De profundis*'),
      s('Bach · *Pasión según San Juan* (Jesús), *Pasión según San Mateo*, *Oratorio de Navidad*, *Magnificat*, *Misa en si menor*', 'Bach · *St John Passion* (Jesus), *St Matthew Passion*, *Christmas Oratorio*, *Magnificat*, *Mass in B minor*'),
      s('Händel · *El Mesías*, *Dixit Dominus*', 'Handel · *Messiah*, *Dixit Dominus*'),
      s('Porpora · *Duetti latini*; Lidón · *Oratorio a Santa Bárbara* (Dióscoro); Ledesma · *Stabat Mater*', 'Porpora · *Duetti latini*; Lidón · *Oratorio a Santa Bárbara* (Dióscoro); Ledesma · *Stabat Mater*'),
      s('Réquiems de Michael Haydn, Mozart, Fauré y Brahms', 'Requiems by Michael Haydn, Mozart, Fauré and Brahms'),
      s('Beethoven · *Novena sinfonía*; Franck · *Les sept paroles du Christ*', 'Beethoven · *Ninth Symphony*; Franck · *Les sept paroles du Christ*'),
      s('Stravinsky · *Pulcinella*; Orff · *Carmina Burana*; Frisina · *Passio Christi* (Caifás)', 'Stravinsky · *Pulcinella*; Orff · *Carmina Burana*; Frisina · *Passio Christi* (Caiaphas)'),
    ],
  },
  {
    title: s('Cantatas, lied y canción', 'Cantatas, lieder and song'),
    items: [
      s('Bach · cantatas BWV 30, 57 (Jesús), 62, 82, 92, 100, 125, 126, 131, 140, 192 y 211', 'Bach · cantatas BWV 30, 57 (Jesus), 62, 82, 92, 100, 125, 126, 131, 140, 192 and 211'),
      s('Händel · cantatas y dúos italianos (*Dalla guerra amorosa*)', 'Handel · Italian cantatas and duets (*Dalla guerra amorosa*)'),
      s('Monteverdi · madrigales; Peri, Caccini, Strozzi, Leonarda', 'Monteverdi · madrigals; Peri, Caccini, Strozzi, Leonarda'),
      s('Dowland · canciones; Lully y Charpentier', 'Dowland · songs; Lully and Charpentier'),
      s('Schubert · *Winterreise*; Schumann · *Dichterliebe*; Beethoven · *An die ferne Geliebte*', 'Schubert · *Winterreise*; Schumann · *Dichterliebe*; Beethoven · *An die ferne Geliebte*'),
      s('Brahms · *Vier ernste Gesänge*; Wolf · *Michelangelo-Lieder*; Mahler · *Ich bin der Welt abhanden gekommen*'),
      s('Clara Schumann · *Sechs Lieder*, op. 23; Fanny Hensel y Felix Mendelssohn · dúos; Viardot · *Die Sterne*', 'Clara Schumann · *Sechs Lieder*, op. 23; Fanny Hensel and Felix Mendelssohn · duets; Viardot · *Die Sterne*'),
      s('Ravel · *Don Quichotte à Dulcinée*; Debussy, Fauré; García Abril, Rodolfo Halffter'),
    ],
  },
  {
    title: s('Música antigua hispana', 'Early Hispanic music'),
    items: [
      s('Cantigas de Alfonso X; Cancioneros de Palacio y de Uppsala', 'Cantigas of Alfonso X; Palacio and Uppsala songbooks'),
      s('Juan del Encina, Mateo Flecha (*El Fuego*, *La Negrina*, *La Bomba*), Luys Milán, Mudarra'),
      s('Morales, Guerrero, Victoria (*Requiem*), Vásquez, Cererols'),
      s('Hidalgo, Patiño, Durón, Literes, José de Torres, Iribarren'),
      s('Galán, Juan del Vado, Veana, Torices, Cáseda'),
      s('Lidón, Ledesma, Ramón Garay'),
    ],
  },
  {
    title: s('Estrenos', 'Premieres'),
    items: [
      s('Lidón · *Oratorio a Santa Bárbara*, en tiempos modernos (2017)', 'Lidón · *Oratorio a Santa Bárbara*, modern-day premiere (2017)'),
      s('Héctor Eliel Márquez · *Don Diego de Granada* (2022) y *Toda la muerte en mi vida* (2024)', 'Héctor Eliel Márquez · *Don Diego de Granada* (2022) and *Toda la muerte en mi vida* (2024)'),
      s('Durón · «¿Ola qué?», en tiempos modernos (2023)', 'Durón · “¿Ola qué?”, modern-day premiere (2023)'),
      s('Rodríguez Albert · *La ruta de Don Quijote*, estreno mundial (2023)', 'Rodríguez Albert · *La ruta de Don Quijote*, world premiere (2023)'),
      s('*Avecillas*: seis estrenos en tiempos modernos (2026)', '*Avecillas*: six modern-day premieres (2026)'),
      s('*La Cómica Historia de Don Quijote*, adaptación propia (2026)', '*The Comical History of Don Quixote*, his own adaptation (2026)'),
    ],
  },
];
