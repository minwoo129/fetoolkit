/// <reference types="vite/client" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*', 'index.ts'],
      tsconfigPath: 'tsconfig.app.json',
    }),
    react(),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'index.ts'),
      },
      name: '@fetoolkit/react',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        interop: 'auto',
      },
    },
    commonjsOptions: {
      esmExternals: ['react'],
    },
    cssCodeSplit: false, // CSS를 하나의 파일로 번들링
  },
  esbuild: {
    jsx: 'automatic',
  },
});
