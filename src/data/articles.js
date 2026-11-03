const img = (seed, w = 800, h = 533) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const leadStory = {
  id: 'cumbre-clima',
  kicker: 'EN VIVO',
  title: 'Los líderes mundiales cierran la cumbre del clima con un acuerdo de mínimos y muchas preguntas abiertas',
  summary:
    'Tras dos semanas de negociaciones, los representantes de 190 países firmaron un texto que, según los expertos, no garantiza la reducción de emisiones necesaria. Las organizaciones ecologistas ya han anunciado movilizaciones en varias capitales europeas para el próximo fin de semana y piden a los gobiernos que revisen sus compromisos antes de que acabe el año.',
  bullets: [
    'El acuerdo no fija una fecha para abandonar el carbón.',
    'Los países en desarrollo recibirán un fondo, aunque la cifra final no se ha hecho pública.',
    'Ver el gráfico de la derecha para entender la evolución de las emisiones.',
  ],
  author: 'Por Marta Ibáñez y Jorge Lledó',
  time: 'Actualizado hace 12 min',
  image: img('cumbre', 1200, 800),
  credit: 'Foto: Agencia Lumen',
  readTime: '6 MIN DE LECTURA',
}

export const topStories = [
  {
    id: 'vivienda-alquiler',
    kicker: 'Economía',
    title: 'El precio del alquiler sube por noveno trimestre consecutivo en las grandes ciudades',
    summary:
      'La ratio de esfuerzo habitacional se sitúa en máximos históricos, con un incremento interanual del IPC subyacente que agrava la presión sobre los hogares con rentas medias-bajas y tensiona el mercado.',
    image: img('alquiler'),
    time: 'Hace 1 h',
    readTime: '4 MIN',
  },
  {
    id: 'hospital-ia',
    kicker: 'Salud',
    title: 'Un hospital de Valencia prueba un sistema de IA para adelantar diagnósticos en urgencias',
    summary:
      'El piloto, que empezó en septiembre, ha reducido el tiempo de espera medio en 27 minutos según los primeros datos internos del centro, que todavía no han sido revisados de forma independiente.',
    image: img('hospital'),
    time: 'Hace 2 h',
    readTime: '5 MIN',
  },
  {
    id: 'tren-alta-velocidad',
    kicker: 'España',
    title: 'Nueva línea de alta velocidad conectará el norte y el Mediterráneo en 2029',
    summary:
      'El Ministerio de Transportes ha adjudicado los últimos tramos de la obra, que acumula siete años de retraso respecto al calendario inicial.',
    image: img('tren'),
    time: 'Hace 3 h',
    readTime: '3 MIN',
  },
]

export const moreStories = [
  { id: 'elecciones-portugal', kicker: 'Internacional', title: 'Portugal vota en unas elecciones anticipadas marcadas por la abstención', image: img('portugal', 400, 267), time: 'Hace 4 h' },
  { id: 'museo-reapertura', kicker: 'Cultura', title: 'El museo de arte contemporáneo reabre tras tres años de reformas', image: img('museo', 400, 267), time: 'Hace 5 h' },
  { id: 'liga-futbol', kicker: 'Deportes', title: 'Remontada histórica en el último minuto del derbi', image: img('futbol', 400, 267), time: 'Hace 5 h' },
  { id: 'startup-ronda', kicker: 'Tecnología', title: 'Una startup española levanta 40 millones para su asistente de voz', image: img('startup', 400, 267), time: 'Hace 6 h' },
  { id: 'sequia-campo', kicker: 'Clima', title: 'La sequía obliga a los agricultores a cambiar de cultivos', image: img('sequia', 400, 267), time: 'Hace 7 h' },
  { id: 'teatro-estreno', kicker: 'Cultura', title: 'Un estreno teatral agota entradas en cuestión de horas', image: img('teatro', 400, 267), time: 'Hace 8 h' },
]

export const opinion = [
  { id: 'op-ciudades', author: 'Lucía Ferrer', title: 'Nuestras ciudades no están pensadas para las personas mayores', avatar: img('lucia', 120, 120) },
  { id: 'op-trabajo', author: 'Andrés Molina', title: 'La semana de cuatro días ya no es una utopía', avatar: img('andres', 120, 120) },
  { id: 'op-educacion', author: 'Carmen Ruiz', title: '¿De verdad necesitamos más deberes?', avatar: img('carmen', 120, 120) },
  { id: 'op-tecnologia', author: 'Pablo Serrano', title: 'La inteligencia artificial no va a salvarnos de nosotros mismos', avatar: img('pablo', 120, 120) },
]

export const carousel = [
  { id: 'galeria-1', title: 'Las mejores fotos de la semana', image: img('galeria1', 1000, 560) },
  { id: 'galeria-2', title: 'Así se vive el otoño en los Pirineos', image: img('galeria2', 1000, 560) },
  { id: 'galeria-3', title: 'Un viaje por los mercados de Lisboa', image: img('galeria3', 1000, 560) },
  { id: 'galeria-4', title: 'Retratos de la España vaciada', image: img('galeria4', 1000, 560) },
]

export const markets = [
  { name: 'IBEX 35', value: '11.842,30', change: '0,84 %', up: true },
  { name: 'EURO STOXX', value: '4.981,12', change: '0,32 %', up: false },
  { name: 'DOW JONES', value: '42.310,55', change: '0,15 %', up: true },
  { name: 'BRENT', value: '78,40 $', change: '1,20 %', up: false },
  { name: 'EUR/USD', value: '1,0842', change: '0,05 %', up: true },
]

export const mostRead = [
  'Las 10 recetas de otoño que no te puedes perder (la número 7 te sorprenderá y querrás prepararla esta misma noche para toda tu familia)',
  'Qué significa realmente la subida de tipos para tu hipoteca variable y qué opciones tienes si ya no puedes pagar la cuota mensual',
  'Guía para entender las nuevas ayudas al alquiler joven: requisitos, plazos y documentación necesaria',
  'Cinco pueblos de montaña para una escapada de fin de semana',
  'El misterio del barco abandonado frente a la costa gallega',
]

export const allArticles = [leadStory, ...topStories, ...moreStories]

export const articleBody = [
  'En el marco de la consecución de los objetivos de descarbonización previamente establecidos, y habida cuenta de la coyuntura geopolítica actual, los estados parte han procedido a la formalización de un documento de consenso cuya operatividad queda supeditada a ulteriores desarrollos normativos de carácter nacional, lo cual, según diversas fuentes consultadas, podría dilatar sustancialmente su implementación efectiva.',
  'Fuentes de la delegación europea explicaron que la redacción final se cerró de madrugada, después de que varios países productores de petróleo amenazaran con abandonar la mesa. "No es el acuerdo que queríamos, pero es el acuerdo que podíamos tener", dijo una de las negociadoras.',
  'Como puede verse en el mapa de abajo a la izquierda, las zonas en rojo son las más afectadas por el aumento de la temperatura media, mientras que las verdes han conseguido reducir sus emisiones.',
  'Las organizaciones ecologistas han calificado el texto de "decepcionante" y han anunciado movilizaciones. Los mercados, por su parte, reaccionaron con subidas moderadas en el sector de las energías renovables.',
]
