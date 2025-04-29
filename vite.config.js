import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    open: true,
    allowedHosts: ["9d86-2a12-5940-8403-00-2.ngrok-free.app"],
  },
});
