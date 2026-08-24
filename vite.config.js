import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const entry = (path) => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    // Four real pages, four real URLs — no client-side router dependency.
    rollupOptions: {
      input: {
        main: entry('./index.html'),
        privacy: entry('./privacy.html'),
        terms: entry('./terms.html'),
        disclaimer: entry('./disclaimer.html'),
      },
    },
  },
})
