import clsx, { type ClassValue } from 'clsx';

/**
 * Concatena clases condicionales (helper estándar de Tailwind).
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(...inputs);
}

/**
 * Detecta si el cliente es touch (sin cursor fino).
 */
export function isTouchDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return !window.matchMedia('(pointer:fine)').matches;
}
