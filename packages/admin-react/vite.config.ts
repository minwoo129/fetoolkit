import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: '@fetoolkit/admin-react',
      fileName: (fmt) => `index.${fmt}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
        assetFileNames: (asset) =>
          asset.name?.endsWith('.css') ? 'style.css' : '[name][extname]',
      },
    },
    // 하나의 CSS만 내보내고 싶다면 false
    cssCodeSplit: false,
  },
});
