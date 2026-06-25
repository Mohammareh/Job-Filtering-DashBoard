import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || "/Job-Filtering-DashBoard",
  server: {
    proxy: {
      "/api": {
        target: "https://himalayas.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/jobs/api"),
      },
    },
  },
});
