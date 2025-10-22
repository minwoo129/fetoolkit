/// <reference types="vite/client" />
import { fileURLToPath } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*', 'index.ts'],
    }),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'index.ts'),
      },
      name: '@fetoolkit/user-agent',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
});
