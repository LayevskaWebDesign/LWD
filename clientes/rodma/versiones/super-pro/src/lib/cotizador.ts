// Tarifas de REFERENCIA para el cotizador interactivo.
// ⚠️ REEMPLAZAR con las tarifas reales de RODMA. El total es un estimado;
// el precio final lo confirma RODMA según arte, materiales y acabados.

export interface TipoTrabajo {
  id: string
  label: string
  unidad: string
  precioBase: number // CRC por unidad (referencia)
  min: number
}

export const tiposTrabajo: TipoTrabajo[] = [
  { id: 'tarjetas', label: 'Tarjetas de presentación', unidad: 'unidad', precioBase: 60, min: 100 },
  { id: 'volantes', label: 'Volantes / brochures', unidad: 'unidad', precioBase: 90, min: 50 },
  { id: 'granformato', label: 'Gran formato (banner / rótulo)', unidad: 'm²', precioBase: 9000, min: 1 },
  { id: 'sublimacion', label: 'Sublimación (taza / camiseta)', unidad: 'unidad', precioBase: 3500, min: 1 },
  { id: 'laser', label: 'Grabado láser', unidad: 'unidad', precioBase: 4000, min: 1 },
]

export interface Extra {
  id: string
  label: string
  tipo: 'mult' | 'fijo'
  valor: number
}

export const extras: Extra[] = [
  { id: 'diseno', label: 'Diseño gráfico incluido', tipo: 'fijo', valor: 12000 },
  { id: 'premium', label: 'Material premium', tipo: 'mult', valor: 1.3 },
  { id: 'urgente', label: 'Entrega urgente (24 h)', tipo: 'mult', valor: 1.25 },
]

export function calcular(tipoId: string, cantidad: number, extrasSel: string[]): number {
  const t = tiposTrabajo.find((x) => x.id === tipoId)
  if (!t) return 0
  const qty = Math.max(cantidad || 0, 0)
  let total = t.precioBase * qty
  for (const e of extras) {
    if (!extrasSel.includes(e.id)) continue
    if (e.tipo === 'mult') total *= e.valor
    else total += e.valor
  }
  return Math.round(total)
}

export const formatCRC = (n: number) =>
  new Intl.NumberFormat('es-CR', { style: 'currency', currency: 'CRC', maximumFractionDigits: 0 }).format(n)
