import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Tailwind CSS v4 runs as a Vite plugin: there is no tailwind.config.js
// and no postcss.config.js. Design tokens live in src/styles/index.css.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
