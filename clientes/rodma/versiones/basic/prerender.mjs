// Pre-render (SSG) + inline de CSS: el hero pinta al instante, sin recursos render-blocking.
// Corre tras el build (client + ssr).
import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = dirname(fileURLToPath(import.meta.url))
const indexPath = resolve(root, 'dist/index.html')
let html = readFileSync(indexPath, 'utf-8')

// 1) Inyectar el HTML del App (hero pre-renderizado) dentro de #root
const marker = /<div id="root">\s*<\/div>/
if (!marker.test(html)) throw new Error('No se encontró <div id="root"></div> en dist/index.html')
const { render } = await import('./dist-ssr/entry-server.js')
html = html.replace(marker, `<div id="root">${render()}</div>`)

// 2) Inline del CSS (elimina la hoja externa render-blocking)
const cssLink = html.match(/<link[^>]+href="(\/assets\/[^"]+\.css)"[^>]*>/)
if (cssLink) {
  const css = readFileSync(resolve(root, 'dist' + cssLink[1]), 'utf-8')
  html = html.replace(cssLink[0], `<style>${css}</style>`)
  console.log('✓ CSS inlineado')
}

writeFileSync(indexPath, html)
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })
console.log('✓ pre-renderizado: dist/index.html')
