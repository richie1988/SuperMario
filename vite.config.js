import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
  esbuild: {
    jsx: 'react',
  },
  define: {
    'import.meta.env.DEV': true,
  },
});
