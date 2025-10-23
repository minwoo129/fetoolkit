import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { PORT } from '../port';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: PORT.CONTEXT_MENU_REACT,
  },
});
