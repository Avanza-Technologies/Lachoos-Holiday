import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Must match the repo name so assets load on GitHub Pages (project site URL).
export default defineConfig({
  base: '/Lachoos-Holiday/',
  plugins: [react()],
})
