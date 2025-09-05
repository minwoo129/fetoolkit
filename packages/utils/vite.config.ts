/// <reference types="vite/client" />
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      entryRoot: 'src',
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
      },
      name: '@fetoolkit/utils',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
});
