import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.eot'],
  resolve: {
    alias: {
      '@assets': '/src/assets',
    },
  },
  //////////////////////////////////////////////////////////////////////////////////////////
  //  Comment out for the app to work when testing with no backend API service running!   //
  //////////////////////////////////////////////////////////////////////////////////////////
   server: {
     proxy: {
       '/': {
         target: 'http://localhost:8080',
         changeOrigin: true,
       },
     },
   },
});