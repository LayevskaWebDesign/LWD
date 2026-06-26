import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Configuración de Vite sin dependencias de Node:path para evitar
// que el build requiera @types/node. Si en el futuro queremos un alias
// "@/" volvemos a importar path y agregamos @types/node a devDependencies.
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,
        open: true,
    },
    build: {
        target: "es2022",
        sourcemap: false,
    },
});
