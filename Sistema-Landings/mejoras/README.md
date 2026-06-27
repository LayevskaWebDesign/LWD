# Mejoras de alto valor (opcionales y aisladas)

Estas mejoras **no** forman parte del build base: son **módulos opcionales**, cada uno en su
carpeta, que se activan solo cuando los pedís. Mantenerlas aisladas deja el sistema núcleo
limpio y te permite aplicarlas cliente por cliente.

| # | Mejora | Dónde | Tipo |
|---|---|---|---|
| 1 | **Analítica de conversión** | [`1-analitica/`](1-analitica/) | snippet listo para integrar |
| 2 | **QA automatizado** (screenshots + Lighthouse) | [`2-qa-automatizado/`](2-qa-automatizado/) | script ejecutable |
| 3 | **Ficha de entrega** (para vender el upsell) | [`3-ficha-entrega/`](3-ficha-entrega/) | plantilla |
| 4 | **Retainer de mantenimiento** | en [`../01-Modelo-de-Negocio-y-Planes.md`](../01-Modelo-de-Negocio-y-Planes.md) | oferta de negocio |
| ~~5~~ | ~~Comparador en una página~~ | — | **excluida a propósito** (decisión del estudio) |

## Cómo se activan
- **Por prompt:** en el Bloque 0 del [Prompt Maestro](../02-Prompt-Maestro.md) ponés
  `MEJORAS OPCIONALES: analitica` (o `qa`, `ficha`) y Claude integra ese módulo siguiendo su README.
- **A mano:** seguís el README de la carpeta correspondiente.

> La #4 (retainer) no es código: es una **oferta comercial** y vive en el documento de negocio.
> La #5 (comparador en una sola página con las 3 versiones en iframe) se dejó **fuera** por decisión
> tuya; si algún día la querés, se agrega como un módulo más acá.
