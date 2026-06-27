// ───────────────────────────────────────────────────────────────
// QA · Screenshots de las versiones en localhost (móvil + desktop).
// Requisitos:  pnpm add -D playwright  &&  npx playwright install chromium
// Las versiones deben estar CORRIENDO (corré el comparar.bat del cliente antes).
// Uso:  node qa.mjs
// ───────────────────────────────────────────────────────────────
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'

const VERSIONES = [
  { plan: 'basic',     url: 'http://localhost:5180' },
  { plan: 'animation', url: 'http://localhost:5181' },
  { plan: 'super-pro', url: 'http://localhost:5182' },
]

const VIEWPORTS = [
  { nombre: 'movil',   width: 390,  height: 844 },
  { nombre: 'desktop', width: 1440, height: 900 },
]

const OUT = 'qa-output'
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()
let ok = 0

for (const v of VERSIONES) {
  for (const vp of VIEWPORTS) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } })
    try {
      await page.goto(v.url, { waitUntil: 'networkidle', timeout: 20000 })
      await page.waitForTimeout(1500) // dejar entrar animaciones
      const file = `${OUT}/${v.plan}-${vp.nombre}.png`
      await page.screenshot({ path: file, fullPage: true })
      console.log('OK   ', file)
      ok++
    } catch (e) {
      console.warn('SALTA', v.url, `(${vp.nombre}) -`, e.message, '¿está corriendo esa versión?')
    } finally {
      await page.close()
    }
  }
}

await browser.close()
console.log(`\nListo: ${ok} captura(s) en la carpeta ${OUT}/`)
