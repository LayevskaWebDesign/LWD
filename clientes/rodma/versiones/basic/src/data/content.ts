// Contenido editable de la landing de RODMA. Cambiá textos acá sin tocar el JSX.
// Datos reales tomados del contexto del cliente (clientes/rodma/contexto-cliente.md).

export const site = {
  nombre: 'RODMA',
  tagline: 'Centro de Impresión Digital y Artes Gráficas',
  propuesta: 'Hacé física tu idea, con calidad garantizada.',
  anios: 13,
  ciudad: 'Gravilias, Desamparados',
  provincia: 'San José, Costa Rica',
  whatsapp: '50685500431',
  whatsappDisplay: '+506 8550 0431',
  email: 'rodmacrc@gmail.com',
  instagram: 'https://www.instagram.com/rodma.cr',
  facebook: 'https://www.facebook.com/profile.php?id=100063467806360',
  maps: 'https://www.google.com/maps/search/?api=1&query=RODMA+Gravilias+Desamparados',
  mensajeWA: 'Hola RODMA, vi su página web y quiero cotizar un trabajo de impresión.',
  horario: [
    { dia: 'Lunes a viernes', horas: '7:00 a.m. – 6:00 p.m.' },
    { dia: 'Sábado', horas: '9:00 a.m. – 2:00 p.m.' },
    { dia: 'Domingo', horas: 'Cerrado' },
  ],
} as const

export interface Servicio {
  icon: string
  titulo: string
  desc: string
}

export const servicios: Servicio[] = [
  { icon: 'Printer', titulo: 'Impresión Digital', desc: 'Tarjetas, volantes, afiches y papelería con color fiel y acabado nítido.' },
  { icon: 'Maximize2', titulo: 'Gran Formato', desc: 'Banners, rótulos y lonas que se ven a metros y aguantan a la intemperie.' },
  { icon: 'PenTool', titulo: 'Diseño Gráfico', desc: '¿No tenés el arte? Lo creamos con vos, desde el logo hasta la pieza final.' },
  { icon: 'Shirt', titulo: 'Sublimación', desc: 'Tazas, camisetas y artículos personalizados con tu imagen a todo color.' },
  { icon: 'Zap', titulo: 'Grabado Láser', desc: 'Marcamos madera, acrílico y metal con precisión y acabado profesional.' },
]

export interface Diferenciador {
  icon: string
  titulo: string
  desc: string
}

export const diferenciadores: Diferenciador[] = [
  { icon: 'BadgeCheck', titulo: 'Calidad garantizada', desc: 'Cada trabajo sale revisado. Nuestro sello desde hace más de 13 años.' },
  { icon: 'Clock', titulo: 'Rápidos y eficientes', desc: 'Trabajamos con celeridad para cumplir tus tiempos sin bajar la calidad.' },
  { icon: 'HeartHandshake', titulo: 'Trato humano', desc: 'Nos destacan por la atención: te asesoramos de principio a fin.' },
  { icon: 'Award', titulo: '+13 años de experiencia', desc: 'Más de una década dándole forma a las ideas de Desamparados.' },
]

export interface Testimonio {
  texto: string
  nombre: string
  plataforma: string
  estrellas: number
}

// Reseñas REALES de Google (textuales).
export const testimonios: Testimonio[] = [
  {
    texto: 'Son rápidos y tienen buena calidad en los trabajos que realizan.',
    nombre: 'Jairo Miguel Acuña',
    plataforma: 'Google',
    estrellas: 5,
  },
  {
    texto: 'Excelente atención. Se destacan por su gran trato humano. Asimismo, trabajan con celeridad y eficiencia.',
    nombre: 'Gilberto Aurelio Cerdas Benavides',
    plataforma: 'Google',
    estrellas: 5,
  },
  {
    texto: 'Recomendado al 100% el mejor lugar para mis impresiones y más, un excelente trato, eficacia y calidad. Soy profesora y solo en ellos confío para mis trabajos.',
    nombre: 'Karla Pacheco',
    plataforma: 'Google',
    estrellas: 5,
  },
]
