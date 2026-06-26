// ============================================================
// DATOS DEL NEGOCIO — Layevska Web Design
// ============================================================

export const BRAND = {
  name: "Layevska Web Design",
  short: "Layevska",
  tagline: "Landing pages premium en Costa Rica",
  founders: [
    { name: "Miah Layevska", role: "Socia fundadora" },
    { name: "Bryan Barrantes", role: "Socio fundador" },
  ],
  contact: {
    whatsapp: "+50687518441",
    whatsappDisplay: "+506 8751-8441",
    whatsappMessage:
      "Hola, vi su página web y me interesa obtener información sobre sus servicios.",
    email: "LayevskaWebDesign@gmail.com",
    location: "San José, Costa Rica",
  },
  url: "https://layevska.com/",
} as const;

// ============================================================
// CÍRCULO DE ORO — Why, How, What
// ============================================================
export const PORQUE = {
  chapter: "I. Por qué existimos",
  title: "Hacemos visible lo que tu marca <em>ya es</em>: digna de ser elegida.",
  lead:
    "Un sitio web no es código. Es la primera impresión de una vida profesional. La trabajamos con la misma reverencia con la que un curador prepara una exposición — porque sabemos que detrás de cada negocio hay años de oficio que merecen ser vistos.",
  points: [
    {
      icon: "ShieldCheck",
      title: "Tu primera impresión vale miles de dólares",
      body:
        "El 87% de los costarricenses investiga un negocio en línea antes de contactarlo. Si tu landing dice 'plantilla genérica', el cliente cierra la pestaña y nunca lo sabés.",
    },
    {
      icon: "TrendingUp",
      title: "Convertir, no decorar",
      body:
        "No diseñamos páginas bonitas. Diseñamos máquinas de conversión. Cada bloque tiene un trabajo medible: capturar atención, comunicar valor, generar acción.",
    },
    {
      icon: "Lock",
      title: "Cero riesgo financiero al iniciar",
      body:
        "Entregamos una vista previa funcional con tu copy real. Si no te enamora, no pagás. La inversión solo arranca cuando aprobás el resultado.",
    },
  ],
} as const;

export const COMO = {
  chapter: "II. Cómo lo hacemos",
  title: "Diseño hecho a <em>mano</em>. Nunca a máquina.",
  lead:
    "Antes de tocar el primer pixel, escuchamos. Tu historia, tu cliente ideal, tus miedos, lo que ya intentaste. Esa conversación se vuelve la materia prima de todo lo que viene después: el wireframe, la paleta, las micro-decisiones que solo importan cuando son honestas.",
  steps: [
    {
      n: "01",
      title: "Brief estratégico",
      body:
        "12 preguntas que capturan tu propuesta, tu cliente ideal y las objeciones reales que escuchás cada semana.",
    },
    {
      n: "02",
      title: "Wireframe a mano",
      body:
        "Trazamos la estructura: dónde va cada bloque, qué jerarquía tiene cada elemento, cómo guiamos el ojo hacia la acción.",
    },
    {
      n: "03",
      title: "Diseño UI premium",
      body:
        "Llenamos el wireframe con tu paleta, tipografía editorial y micro-interacciones cinematográficas.",
    },
    {
      n: "04",
      title: "Publicación AWS",
      body:
        "Desplegamos sobre infraestructura serverless de Amazon. SSL automático, CDN global, uptime 99.9%.",
    },
  ],
} as const;

export const QUE = {
  chapter: "III. Qué entregamos",
  title: "Dos formas de empezar. <em>Ninguna sorpresa</em> al final.",
  lead:
    "Precios honestos pensados para personas que entienden que lo bueno cuesta lo justo. Pago único inicial + cuota mensual fija desde el segundo mes. Sin permanencia, sin penalizaciones, sin asteriscos.",
  models: [
    {
      tier: "Estándar",
      label: "Landing sin animaciones",
      price: "875",
      currency: "USD",
      meta: "pago único · entrega 3-5 días · $120/mes desde mes 2",
      features: [
        "Brief estratégico de 12 preguntas",
        "Copywriting AIDA/PAS personalizado",
        "Diseño UI/UX premium a la medida",
        "Hosting AWS y dominio (primer año)",
        "SSL + CDN + Integración WhatsApp",
        "SEO local básico",
      ],
      featured: false,
      cta: "Solicitar Estándar",
    },
    {
      tier: "Premium",
      label: "Landing con animaciones",
      price: "1,000",
      currency: "USD",
      meta: "pago único · entrega 5-7 días · $120/mes desde mes 2",
      features: [
        "Todo lo del Modelo Estándar",
        "Animaciones cinematográficas",
        "Micro-interacciones de scroll",
        "Transiciones suaves entre secciones",
        "Cursor personalizado opcional",
        "Para marcas que viven de la primera impresión",
      ],
      featured: true,
      cta: "Solicitar Premium",
    },
  ],
} as const;

// ============================================================
// PORTAFOLIO IMAGINADO
// ============================================================
export const PORTFOLIO = [
  {
    name: "Clínica Sonrisa Pura",
    industry: "Odontología estética",
    palette: ["#1C4058", "#A0BDC1", "#F1CBBF", "#C9A961"],
    accent: "#A0BDC1",
    summary:
      "Tono médico premium con calidez. Botón de agendar cita visible en mobile sin scroll.",
  },
  {
    name: "Bufete & Asociados",
    industry: "Despacho legal",
    palette: ["#0E2435", "#1C4058", "#C9A961", "#FAF7F2"],
    accent: "#C9A961",
    summary:
      "Sobriedad editorial. Tipografía Cormorant que comunica herencia y autoridad.",
  },
  {
    name: "Aura Wellness Spa",
    industry: "Spa y bienestar",
    palette: ["#F1CBBF", "#D8B0AB", "#3D7886", "#C9A961"],
    accent: "#F1CBBF",
    summary:
      "Atmósfera serena. Reservas online con disponibilidad en tiempo real.",
  },
  {
    name: "La Sazón Tica",
    industry: "Restaurante fine dining",
    palette: ["#0E2435", "#3D7886", "#F1CBBF", "#C9A961"],
    accent: "#3D7886",
    summary:
      "Carta visual + maridajes sugeridos. WhatsApp para reservas con confirmación.",
  },
  {
    name: "Capital Verde",
    industry: "Consultoría financiera",
    palette: ["#1C4058", "#3D7886", "#FAF7F2", "#C9A961"],
    accent: "#3D7886",
    summary:
      "Calculadora ROI embebida. Logos de clientes empresariales como prueba social.",
  },
  {
    name: "Patitas Felices",
    industry: "Veterinaria",
    palette: ["#0E2435", "#F1CBBF", "#A0BDC1", "#C9A961"],
    accent: "#F1CBBF",
    summary:
      "Calidez profesional. Línea directa de emergencias 24h destacada arriba.",
  },
];

// ============================================================
// TESTIMONIOS
// ============================================================
export const TESTIMONIALS = [
  {
    name: "María José Vargas",
    role: "Directora · Clínica Dental Norte",
    quote:
      "Pasamos de 2 consultas por mes desde la web a 18 en el primer mes. La landing convierte sola; mi rol ahora es solo atender al WhatsApp.",
    stars: 5,
  },
  {
    name: "Carlos Alemán",
    role: "Socio fundador · Estudio Legal Alemán",
    quote:
      "Tener una página seria nos abrió puertas que las recomendaciones no abrían. Vienen clientes con presupuestos 3x más altos.",
    stars: 5,
  },
  {
    name: "Andrea Soto",
    role: "Owner · Boutique Mariposa",
    quote:
      "Miah y Bryan entendieron mi marca mejor que yo. La landing se siente como una extensión natural de lo que hago, no un genérico.",
    stars: 5,
  },
];

// ============================================================
// GARANTÍAS
// ============================================================
export const GUARANTEES = [
  {
    icon: "Eye",
    title: "Vista previa antes de pagar",
    body:
      "Entregamos una vista previa funcional con tu copy real. Solo pagás si aprobás el resultado.",
  },
  {
    icon: "Smartphone",
    title: "Mobile-first garantizado",
    body:
      "Si tu landing no se ve perfecta en celular, no se publica. Punto.",
  },
  {
    icon: "Zap",
    title: "Carga < 2 segundos",
    body:
      "Métricas Core Web Vitals en verde desde el día uno o ajustamos sin costo extra.",
  },
  {
    icon: "ShieldCheck",
    title: "Propiedad legal 100% tuya",
    body:
      "Dominio, código y contenido quedan a tu nombre. Operamos pero no somos dueños.",
  },
];

// ============================================================
// FAQ
// ============================================================
export const FAQS = [
  {
    q: "¿Tengo que pagar antes de ver mi landing?",
    a: "No. Entregamos primero una vista previa funcional con tu copy real e imágenes propuestas. Solo pagás si aprobás el resultado. Cero riesgo financiero al iniciar.",
  },
  {
    q: "¿Qué pasa si quiero cambiar algo después del lanzamiento?",
    a: "La cuota mensual de $120 incluye hasta 2 actualizaciones menores al mes. Para rediseños mayores cotizamos aparte de forma transparente.",
  },
  {
    q: "¿El dominio queda a mi nombre?",
    a: "Sí. Layevska administra el dominio operativamente, pero la titularidad legal es 100% de tu empresa. Si decidís terminar el servicio, te llevás tu dominio.",
  },
  {
    q: "¿Por qué no usan WordPress?",
    a: "Porque WordPress concentra el 94% de los hackeos a sitios de PYMEs. Nuestras landings son archivos estáticos en AWS sin base de datos que vulnerar.",
  },
  {
    q: "¿Y si decido cancelar la cuota mensual?",
    a: "Tu landing dejará de estar publicada ya que dejamos de cubrir hosting y dominio. Podés reactivar el servicio en cualquier momento.",
  },
  {
    q: "¿Atienden fuera de Costa Rica?",
    a: "Sí, atendemos a clientes en toda Latinoamérica. El equipo opera 100% desde San José y la facturación es en USD.",
  },
];

// ============================================================
// NAV
// ============================================================
export const NAV = [
  { label: "Por qué", href: "#por-que" },
  { label: "Proceso", href: "#proceso" },
  { label: "Servicios", href: "#servicios" },
  { label: "Comparativa", href: "#comparativa" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "FAQ", href: "#faq" },
];

// ============================================================
// 6 PASOS — "Nuestro Proceso desde el Día 1"
// ============================================================
export const PROCESO_6 = {
  chapter: "IV. Cómo trabajamos contigo",
  title:
    "Seis pasos, siete días. <em>Cero ambigüedad</em> de principio a fin.",
  lead:
    "Esto es exactamente lo que pasa entre el momento en que nos escribís y el día que tu landing entra al mundo. Cada paso tiene un tiempo, una entrega, y una persona responsable. Sin caja negra.",
  steps: [
    {
      n: "01",
      day: "Día 1 · 24 horas",
      title: "Conversación inicial",
      body:
        "Llamada o WhatsApp de 20 minutos. Sin guion, sin venta. Solo escuchamos tu negocio, tu cliente y lo que necesitás resolver. Si no encajamos, te lo decimos honestamente.",
    },
    {
      n: "02",
      day: "Día 2",
      title: "Brief estratégico profundo",
      body:
        "Te enviamos un cuestionario de 12 preguntas curadas. Lo respondés cuando puedas, sin presión. Es la materia prima de todo el copy y la dirección visual.",
    },
    {
      n: "03",
      day: "Día 3",
      title: "Concepto creativo y paleta",
      body:
        "Recibís un mood board personal, dirección tipográfica y propuesta de paleta. Lo aprobás o pedís cambios. Acá ajustamos rumbo si hace falta — sin costo adicional.",
    },
    {
      n: "04",
      day: "Día 4 · 5",
      title: "Diseño UI y vista previa",
      body:
        "Construimos el diseño completo en alta fidelidad. Te enviamos vista previa funcional con tu copy real e imágenes propuestas. Si no te enamora, no pagás.",
    },
    {
      n: "05",
      day: "Día 5 · 6",
      title: "Desarrollo y animaciones",
      body:
        "Maquetamos sobre arquitectura serverless AWS. Si elegiste Premium, sumamos las animaciones cinematográficas. Optimizamos para mobile, SEO y velocidad.",
    },
    {
      n: "06",
      day: "Día 7",
      title: "Publicación y entrega",
      body:
        "Conectamos tu dominio, activamos SSL, configuramos Analytics y entregamos credenciales. Lanzamos juntos. Cualquier ajuste de los primeros días, sin costo.",
    },
  ],
} as const;

// ============================================================
// COMPARATIVA — Nosotros vs Competencia
// ============================================================
export const COMPARATIVA = {
  chapter: "V. Comparativa honesta",
  title: "<em>Calidad</em> sobre precio. Siempre.",
  lead:
    "Te decimos la verdad de cada opción del mercado. Sin marketing barato. Vos decidís dónde te conviene poner tu inversión.",
  cols: [
    "Característica",
    "Layevska Web Design",
    "Agencia tradicional",
    "Freelancer económico",
  ],
  rows: [
    {
      label: "Tiempo de entrega",
      lay: "3 a 7 días hábiles",
      ag: "4 a 8 semanas",
      fl: "2 a 4 semanas (variable)",
    },
    {
      label: "Diseño UI / UX",
      lay: "Artesanal y único, sin plantillas",
      ag: "Adaptación de plantillas",
      fl: "Plantilla 100% genérica",
    },
    {
      label: "Arquitectura técnica",
      lay: "AWS Serverless (Tier 1 global)",
      ag: "WordPress en hosting compartido",
      fl: "Hosting básico variable",
    },
    {
      label: "Animaciones premium",
      lay: "Cinematográficas a medida",
      ag: "Genéricas o ninguna",
      fl: "Ninguna",
    },
    {
      label: "Hosting incluido (1er año)",
      lay: "Sí, sin costos ocultos",
      ag: "No (extra $200–500/año)",
      fl: "No (lo asumís vos)",
    },
    {
      label: "Dominio incluido (1er año)",
      lay: "Sí",
      ag: "No",
      fl: "A veces",
    },
    {
      label: "Soporte post-venta",
      lay: "WhatsApp directo, respuesta < 24h",
      ag: "Sistema de tickets",
      fl: "Inexistente o muy lento",
    },
    {
      label: "Mantenimiento mensual",
      lay: "$120 fijo · todo incluido",
      ag: "$200–600 variable",
      fl: "$0 pero sin soporte",
    },
    {
      label: "Inversión inicial",
      lay: "$875 – $1,000 USD",
      ag: "$2,000 – $5,000 USD",
      fl: "$150 – $400 USD",
    },
    {
      label: "Garantía",
      lay: "Vista previa antes de pagar",
      ag: "Contrato legal complejo",
      fl: "Ninguna",
    },
    {
      label: "Calidad final",
      lay: "Premium consistente",
      ag: "Variable según el equipo asignado",
      fl: "Baja a media",
    },
  ],
} as const;
