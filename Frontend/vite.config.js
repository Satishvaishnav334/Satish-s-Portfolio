import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";



export default defineConfig({
  server:{
    Proxy:{
      '/api/contact':'https://satish-s-portfolio-y58d.vercel.app'
    }
  },
  plugins: [
   
    react(),
    
    tailwindcss()
  ], base: "./",
  build: {
    
      "rewrites": [
        { "source": "/(.*)", "destination": "/index.html" }
      ]
    ,
    rollupOptions: {
      external: [ "lucide-react", "react-icons","react-icons/fa"]
    },
    
  },

});

