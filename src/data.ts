import { ServiceItem, CapacityItem, CoverageZone, FaqItem } from './types';

export const COMPANY_INFO = {
  name: 'Transportes Reyes',
  tagline: 'Más que transporte, agua para la vida',
  slogan: 'En Transportes Reyes creemos en el poder del agua para generar bienestar, impulsar comunidades y construir un futuro más saludable.',
  yearsExperience: 15,
  schedule: 'Servicio 24 hrs de Lunes a Sábado',
  emergencySchedule: 'Atención de emergencias 24 horas',
  city: 'Estado de México y Ciudad de México',
  phone: '5561351821',
  phoneFormatted: '5561351821',
  whatsappNumber: '5561351821',
  email: 'contacto@transportesreyes.com',
  quoteDefaultMessage: '¡Hola! Me comunico desde la página web de Transportes Reyes. Requiero cotización para una pipa de agua.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'domicilio-casas',
    title: 'Pipas de Agua a Domicilio y Casas',
    description: 'Abastecimiento directo y confiable para residencias particulares, privadas y condominios con tuberías y mangueras sanitarias de largo alcance.',
    badge: 'Residencial',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80',
    waterType: 'potable',
    features: [
      'Agua potable 100% limpia y cristalina',
      'Mangueras de hasta 80-100 metros',
      'Preservación de la presión en tinacos',
      'Atención rápida y puntual',
    ],
  },
  {
    id: 'llenado-cisternas',
    title: 'Llenado de Cisternas y Tinacos',
    description: 'Servicio especializado para rellenar cisternas subterráneas, tanques elevados y depósitos de almacenamiento domésticos o comunitarios.',
    badge: 'Más Solicitado',
    imageUrl: '/src/assets/images/llenado_cisterna_1789312468602.jpg',
    waterType: 'potable',
    features: [
      'Bomba de alta presión para descarga rápida',
      'Revisión visual de pureza',
      'Descarga limpia sin ensuciar tu banqueta o patio',
      'Capacidades exactas sin mermas',
    ],
  },
  {
    id: 'empresas-comercios',
    title: 'Servicio para Empresas y Comercios',
    description: 'Suministro continuo y programado para restaurantes, hoteles, centros comerciales, oficinas, naves industriales y plantas procesadoras.',
    badge: 'Comercial',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
    waterType: 'ambas',
    features: [
      'Facturación electrónica inmediata (CFDI)',
      'Contratos de suministro programado',
      'Atención nocturna o fuera de horario laboral',
      'Cumplimiento de normativas sanitarias',
    ],
  },
  {
    id: 'constructoras-obras',
    title: 'Constructoras y Obra Civil',
    description: 'Acarreo de agua tratada y potable para terracerías, compactación de suelos, preparación de concretos, curado y control de polvo.',
    badge: 'Industrial',
    imageUrl: 'https://www.pipaxa.com/wp-content/uploads/2026/01/Pipa-de-agua-para-obras-fabricas-y-comercios-imagen-0.jpg',
    waterType: 'tratada',
    features: [
      'Pipas de gran volumen (45,000 Litros)',
      'Agua tratada con certificado de calidad',
      'Riego con barra aspersora y mangueras',
      'Disponibilidad continua para turnos pesados',
    ],
  },
  {
    id: 'albercas-balnearios',
    title: 'Llenado de Albercas y Jacuzzis',
    description: 'Agua de máxima pureza, libre de sedimentos y balanceada, lista para albercas recreativas, deportivas, residenciales y hoteles.',
    badge: 'Especializado',
    imageUrl: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=900&q=80',
    waterType: 'potable',
    features: [
      'Claridad cristalina sin impurezas',
      'Llenado continuo para no descompensar estructuras',
      'Ahorro en químicos de tratamiento',
      'Coordinación de horario flexible',
    ],
  },
  {
    id: 'eventos-producciones',
    title: 'Eventos Masivos y Producciones',
    description: 'Abastecimiento temporal para festivales, conciertos, eventos deportivos, sanitarios móviles, filmaciones y sets de producción.',
    badge: 'Eventos',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
    waterType: 'ambas',
    features: [
      'Logística en sitio con personal capacitado',
      'Tanques nodriza y descargas escalonadas',
      'Respuesta ante contingencias en vivo',
      'Operadores con gafete y uniforme de seguridad',
    ],
  },
  {
    id: 'emergencias-desabasto',
    title: 'Emergencias por Desabasto de Agua',
    description: 'Atención prioritaria cuando la red pública falla o te quedas sin suministro. Despacho rápido para hospitales, clínicas, asilos y hogares.',
    badge: 'Urgente',
    imageUrl: 'https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=900&q=80',
    waterType: 'potable',
    features: [
      'Despacho ágil en minutos',
      'Servicio 24 horas de Lunes a Sábado',
      'Prioridad para emergencias médicas y residenciales',
      'Línea directa vía WhatsApp inmediata',
    ],
  },
  {
    id: 'agua-tratada-industrial',
    title: 'Agua Tratada Certificada',
    description: 'Soluciones sustentables y económicas para procesos de enfriamiento, riego de áreas verdes comunitarias y pruebas hidrostáticas.',
    badge: 'Ecológico',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80',
    waterType: 'tratada',
    features: [
      'Cumple NOM ambiental para reuso',
      'Tarifas preferenciales por volumen',
      'Aporte al cuidado del medio ambiente',
      'Distribución en pipas exclusivas para tratada',
    ],
  },
];

export const CAPACITIES: CapacityItem[] = [
  {
    capacity: '10,000 Litros',
    liters: 10000,
    subtitle: 'La pipa más ágil y versátil',
    vehicleType: 'Camión Cisterna Compacto (Chasis 2 ejes)',
    hoseReach: 'Hasta 60 - 80 metros de manguera',
    imageUrl: '/src/assets/images/pipa_de_agua_10LT_Transportes_reyes.jpeg',
    recommendedFor: [
      'Casas particulares y residencias',
      'Cisternas estándar (5,000 L a 10,000 L)',
      'Tinacos y depósitos elevados',
      'Calles estrechas o colonias de difícil acceso',
      'Negocios locales y restaurantes',
    ],
  },
  {
    capacity: '20,000 Litros',
    liters: 20000,
    subtitle: 'Capacidad intermedia ideal para edificios',
    vehicleType: 'Camión Cisterna Mediano (Tándem 3 ejes)',
    hoseReach: 'Hasta 80 - 100 metros de manguera',
    popular: true,
    imageUrl: '/src/assets/images/pipa_de_agua_20Lts_Transportes_reyes.jpeg',
    recommendedFor: [
      'Condominios y unidades habitacionales',
      'Hoteles, plazas y centros comerciales',
      'Albercas residenciales o clubes deportivos',
      'Escuelas, institutos y hospitales',
      'Obras medianas e industrias',
    ],
  },
  {
    capacity: '45,000 Litros',
    liters: 45000,
    subtitle: 'Alto volumen para industrias y grandes obras',
    vehicleType: 'Tractocamión Cisterna (Semirremolque de alto flujo)',
    hoseReach: 'Conexión de alto flujo o descarga por gravedad',
    imageUrl: '/src/assets/images/pipa_de_agua_45litros_Transportes_reyes.jpg',
    recommendedFor: [
      'Constructoras y autopistas',
      'Terracerías y compactación de suelo',
      'Grandes plantas industriales y fábricas',
      'Parques industriales en el Estado de México',
      'Eventos masivos y llenado de estanques',
    ],
  },
];

export const COVERAGE_ZONES: CoverageZone[] = [
  {
    id: 'Benito-Juarez',
    name: 'Benito Juárez',
    area: 'CDMX',
    status: 'Cobertura Inmediata',
    description: 'Servicio para departamentos, condominios, restaurantes, cafeterías, hoteles, oficinas y clínicas..',
    coloniasPrincipales: ['Del valle', 'Narvarte', 'Napoles',  'Portales', 'Mixcoac', 'Alamos'],
    estimatedArrival: '50 - 75 min',
  },
  {
    id: 'Miguel-Hidalgo',
    name: 'Miguel Hidalgo',
    area: 'CDMX',
    status: 'Cobertura Inmediata',
    description: 'Servicio para condominios, hoteles, restaurantes, empresas y residencias.',
    coloniasPrincipales: ['Polanco', 'Anzures', 'Escandon', 'Tacuba', 'Lomas de Chapultepec', 'San Miguel Chapultepec'],
    estimatedArrival: '60 - 85 min',
  },
  {
    id: 'Coyoacan',
    name: 'Coyoacan',
    area: 'CDMX',
    status: 'Cobertura Inmediata',
    description: 'Servicio para departamentos, condominios, restaurantes, cafeterías, hoteles, oficinas y clínicas..',
    coloniasPrincipales: ['Coyoacán', 'Pedregal de Santo Domingo', 'Roma Norte', 'Roma Sur', 'Ajusco', 'Santa Ursula Coapa', 'Jardines del Pedregal'],
    estimatedArrival: '50 - 75 min',
  },

  {
    id: 'Iztapalapa',
    name: 'Iztapalapa',
    area: 'CDMX',
    status: 'Cobertura Inmediata',
    description: 'Respuesta ante el desabasto frecuente en colonias residenciales, unidades y pequeños comercios.',
    coloniasPrincipales: ['San Lorenzo Tezonco', 'Ermita Zaragoza', 'Santa Martha Acatitla', 'Lomas Estrella', 'Constitución de 1917', 'Vicente Guerrero'],
    estimatedArrival: '30 - 45 min',
  },
  {
    id: 'Xochimilco',
    name: 'Xochimilco',
    area: 'CDMX',
    status: 'Cobertura Inmediata',
    description: 'Hogares, restaurantes, viveros, salones de eventos y comercios en zonas autorizadas..',
    coloniasPrincipales: ['Xochimilco Centro', 'Una parte de Xochimilco solamente'],
    estimatedArrival: '50 - 90 min',
  },
  {
    id: 'Division del Norte',
    name: 'División del Norte',
    area: 'Corredor vial',
    status: 'Cobertura Inmediata',
    description: 'Departamentos, restaurantes, cafeterías, oficinas, consultorios y comercios cercanos al corredor.',
    coloniasPrincipales: ['Narvarte poniente', 'Del Valle', 'Santa Cruz Atoyac', 'Xotepingo', 'Campestre Churubusco'],
    estimatedArrival: '50 - 75 min',
  },
 {
    id: 'Acoxpa',
    name: 'Acoxpa',
    area: 'Zona Especifica',
    status: 'Cobertura Inmediata',
    description: 'Casas, condominios, plazas comerciales, restaurantes, escuelas, oficinas y negocios.',
    coloniasPrincipales: ['Villa Coapa', 'Ex Hacienda Coapa', 'Rinconada Coapa', 'Vergel Coapa', 'Prado Coapa'],
    estimatedArrival: '60 - 85 min',
  },
  {
    id: 'Tláhuac',
    name: 'Tláhuac',
    area: 'CDMX',
    status: 'Cobertura Inmediata',
    description: 'Hogares, cisternas, unidades habitacionales, escuelas, comercios y pequeños negocios.',
    coloniasPrincipales: ['San pedro Tlahuac', 'Santiago Zapotitlan', 'San Francisco Tlatelolco', 'Santa Catarina',],
    estimatedArrival: '45 - 65 min',
  },
   {
    id: 'Azcapotzalco',
    name: 'Azcapotzalco',
    area: 'CDMX',
    status: 'Cobertura Inmediata',
    description: 'Hogares, unidades habitacionales, bodegas, fábricas, talleres y parques industriales.',
    coloniasPrincipales: ['Claveria', 'Nueva Santa Maria', 'El Rosario', 'Industrial Vallejo', 'Santa Barbara','Centro de Azcapotzalco'],
    estimatedArrival: '50 - 90 min',
  },
 {
    id: 'Edomex',
    name: 'Estado de México',
    area: 'Estado de México',
    status: 'Cobertura Inmediata',
    description: 'Rutas activas en Nezahualcóyotl, Texcoco.',
    coloniasPrincipales: ['Cd. Nezahualcóyotl', 'Texcoco'],
    estimatedArrival: '30 - 50 min',
  },
];

export const BRAND_VALUES = [
  {
    title: 'Confianza',
    description: '15 años cumpliendo en tiempo y forma, entregando agua limpia y volumen verificado sin trampas.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Compromiso',
    description: 'Servicio continuo 24 horas de lunes a Sábado para que nunca te falte agua en tu hogar o negocio.',
    icon: 'Clock',
  },
  {
    title: 'Responsabilidad',
    description: 'Manejo higiénico con tanques de acero inoxidable y desinfección periódica certificada.',
    icon: 'Award',
  },
  {
    title: 'Cuidado del Entorno',
    description: 'Promovemos el uso responsable de agua tratada para la industria y construcción.',
    icon: 'Leaf',
  },
  {
    title: 'Seguridad',
    description: 'Operadores uniformados, equipados con protección civil y maniobras seguras en tu inmueble.',
    icon: 'HardHat',
  },
  {
    title: 'Comunidad',
    description: '"El agua también nos une": llevamos bienestar e impulsamos el progreso de nuestras familias.',
    icon: 'Users',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: '¿Cuál es la diferencia entre agua potable y agua tratada?',
    answer: 'El agua potable pasa por procesos estrictos de purificación y cloración que la hacen apta para consumo humano, cocinar, bañarse, llenar tinacos, cisternas residenciales y albercas. El agua tratada ha sido procesada para eliminar contaminantes gruesos y bacterias pero no es apta para beber; se utiliza exclusivamente para construcción, terracerías, compactación, riego y procesos industriales.',
    category: 'calidad',
  },
  {
    question: '¿Qué capacidad de pipa me conviene contratar?',
    answer: 'Para una casa estándar con cisterna de hasta 10,000 litros o tinacos, la pipa de 10,000 L es la opción más popular y ágil. Para condominios, edificios de departamentos o empresas medianas, recomendamos 20,000 L. Para constructoras, terracerías, eventos grandes o naves industriales, contamos con unidades de 45,000 L.',
    category: 'servicio',
  },
  {
    question: '¿Cuántos metros de manguera tienen disponibles?',
    answer: 'Nuestras unidades están equipadas con 60 hasta 100 metros de manguera flexible y de alta resistencia. Al momento de solicitar tu cotización por WhatsApp, indícanos si tu cisterna o tinaco se encuentra al fondo o en un nivel elevado para llevar el equipo de bombeo adecuado.',
    category: 'logistica',
  },
  {
    question: '¿Cuál es su horario de atención y entrega?',
    answer: 'Operamos las 24 horas de Lunes a Sábado. También atendemos guardias de emergencias y pedidos programados con anticipación para fines de semana.',
    category: 'servicio',
  },
  {
    question: '¿Emiten factura para empresas o constructoras?',
    answer: 'Sí, emitimos factura fiscal CFDI válida para empresas, negocios y personas físicas. Nuestros precios pueden ser desglosados con IVA.',
    category: 'servicio',
  },
  {
    question: '¿Cómo solicito una pipa de agua por WhatsApp?',
    answer: 'Simplemente haz clic en el botón de WhatsApp de nuestra página. Podrás usar nuestro cotizador instantáneo que llena automáticamente los detalles (litros, tipo de agua, zona y dirección) para que un asesor te confirme disponibilidad y tiempo de llegada inmediato.',
    category: 'servicio',
  },
];

export function generateWhatsAppUrl(params: {
  service?: string;
  liters?: string;
  waterType?: string;
  zone?: string;
  address?: string;
  hoseLength?: string;
  urgency?: string;
}): string {
  const phone = COMPANY_INFO.whatsappNumber;
  let text = `¡Hola Transportes Reyes! 👋\nMe interesa cotizar una pipa de agua:\n\n`;
  if (params.service) text += `• Servicio: ${params.service}\n`;
  if (params.waterType) text += `• Tipo de Agua: ${params.waterType}\n`;
  if (params.liters) text += `• Capacidad: ${params.liters}\n`;
  if (params.zone) text += `• Alcaldía / Zona: ${params.zone}\n`;
  if (params.address) text += `• Dirección aproximada: ${params.address}\n`;
  if (params.hoseLength) text += `• Metros de manguera aprox: ${params.hoseLength}\n`;
  if (params.urgency) text += `• Urgencia: ${params.urgency}\n`;

  text += `\n¿Me podrían brindar costo y tiempo de llegada? Gracias.`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}
