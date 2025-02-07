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
      external: ["lucide-react", "react-icons","react-icons/fa"]
    },
  },
});
