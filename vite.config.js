import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Custom domain (public/CNAME) serves the site at the domain root — base must be '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
