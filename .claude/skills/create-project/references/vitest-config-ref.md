# vitest.config.ts 파일 템플릿(react 기반 라이브러리)

```ts
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
```
