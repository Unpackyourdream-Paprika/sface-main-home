import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Sface App",
        short_name: "Sface",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#AE62EE",
        icons: [
          {
            src: "/bottom-logo-sface.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/bottom-logo-sface.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  publicDir: "public",
  base: "/",
});
