import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App'
// Fuentes self-hosted (sin request a Google → sin render-blocking). font-display: swap.
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/inter/700.css'
import '@fontsource/roboto-slab/600.css'
import '@fontsource/roboto-slab/700.css'
import '@fontsource/roboto-slab/800.css'
import './index.css'

const rootEl = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
// En producción el HTML del hero viene pre-renderizado (hydrate → LCP instantáneo).
// En dev el #root está vacío, así que renderizamos normal.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app)
} else {
  createRoot(rootEl).render(app)
}
