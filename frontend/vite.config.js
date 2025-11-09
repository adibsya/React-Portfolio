import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", // Untuk custom domain atau root repository
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
