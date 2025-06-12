import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:  { target: 'esnext' },  // production build
  esbuild:{ target: 'esnext' },  // dev server
  // base: '/my-react-app/',     // ← keep or add this if you publish to a repo site
});