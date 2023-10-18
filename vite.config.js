import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: import.meta.env.DEV ? '/' : '/SuperMario/',
  build: {
    outDir: 'build',
  },
  esbuild: {
    jsx: 'react',
  },
});
