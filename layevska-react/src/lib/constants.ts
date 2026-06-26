/**
 * Layevska Web Design — Constantes globales del proyecto.
 * Centraliza datos de contacto, mensajes pre-cargados y URLs.
 */

export const SITE = {
  name: 'Layevska Web Design',
  shortName: 'Layevska',
  tagline: 'Web Design Studio',
  url: 'https://layevska.com',
  phone: '+506 8751-8441',
  phoneE164: '+50687518441',
  city: 'San José',
  country: 'Costa Rica',
  year: 2026,
} as const;

export const WHATSAPP = {
  default:
    'Hola, vi su página web y me interesa obtener información sobre sus servicios.',
  buildUrl: (text: string): string =>
    `https://wa.me/${SITE.phoneE164.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`,
} as const;

export const PRICING = {
  standard: {
    name: 'Modelo Estándar',
    price: 875,
    days: '3-5 días',
  },
  premium: {
    name: 'Modelo Premium',
    price: 1000,
    days: '5-7 días',
  },
  monthly: 120,
} as const;

export const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#precios', label: 'Precios' },
  { href: '#proceso', label: 'Proceso' },
] as const;
