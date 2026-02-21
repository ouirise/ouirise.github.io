import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ouirise.github.io/', // Check!
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})