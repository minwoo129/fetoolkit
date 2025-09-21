import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['**/*.test.?(c|m)[jt]s?(x)'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
    ],
    environment: 'jsdom',
    globals: true,
  },
});
