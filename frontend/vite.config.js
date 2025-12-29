import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // Relative path - works for any GitHub Pages repo
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
