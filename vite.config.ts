import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// export default defineConfig({
//   plugins: [react()],
//   base: "./", // Important pour Vercel
//   build: {
//     outDir: "dist" // dossier de sortie
//   }
// });
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));