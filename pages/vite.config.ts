import { defineConfig } from 'vite'
import { reactRouter } from '@react-router/dev'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), reactRouter()],
  base: '/ouirise.github.io/', // Check!
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})