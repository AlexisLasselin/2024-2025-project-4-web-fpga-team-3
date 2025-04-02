import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '2024-2025-project-4-web-fpga-team-3',  // Assure que les chemins sont relatifs
})
