import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  base: "/digital-business-card/",
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    assetsInlineLimit: 0,
  },
})
