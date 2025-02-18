import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
const cors = require('cors');
app.use(cors({
  origin: 'https://www.satishvaishnav.in', // Replace with your frontend domain
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));


export default defineConfig({
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

