import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss' // <--- Importe o novo pacote
import autoprefixer from 'autoprefixer'       // <--- Importe o autoprefixer

export default defineConfig({
  plugins: [react()],
  css: { // <--- Adicione toda esta seção 'css'
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
})