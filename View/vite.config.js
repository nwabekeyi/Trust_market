import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
       // Alias for the "Routes" file path
       '@Routes': path.resolve(__dirname, 'src/components/Routes.jsx'),
      // Alias for the "context" directory specific to Vite
      '@context': path.resolve(__dirname, 'src/context/context.jsx'),
     
    },
  },
});
