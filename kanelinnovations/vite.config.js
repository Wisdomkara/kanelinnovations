import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isVercel = process.env.VERCEL === '1';

export default defineConfig({
  base: isVercel ? '/' : '/kanelinnovations/',
  build: {
    chunkSizeWarningLimit: 800,
  },
  plugins: [react()],
});
