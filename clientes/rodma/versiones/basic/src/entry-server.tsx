import { renderToString } from 'react-dom/server'
import App from './App'

// Render del App a HTML estático (se ejecuta en Node durante el build, para el pre-render/SSG).
export function render(): string {
  return renderToString(<App />)
}
