import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4800,
    allowedHosts: ['hgtecpan.duckdns.org', 'localhost', '127.0.0.1'],
  }
})
