import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: "/",
  plugins: [react(), svgr()],
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
