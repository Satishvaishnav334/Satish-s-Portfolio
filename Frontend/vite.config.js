import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    
    tailwindcss()
  ], base: "./",
  build: {
    rollupOptions: {
      external: ["framer-motion", "lucide-react", "react-icons","react-icons/fa"]
    },
    optimizeDeps: {
      include: ['framer-motion']}
  },
});
