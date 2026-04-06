# vite.config.ts 파일 템플릿(유틸리티 라이브러리)

> ### 참고
>
> - Skills 변수 참조 코드가 있는 경우 해당파일이 연결된 스킬의 변수참조를 그대로 적용할 것

```ts
/// <reference types="vite/client" />
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

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
      name: '@fetoolkit/$0',
      fileName: 'index',
      formats: ['es', 'umd'],
    },
  },
  esbuild: {
    jsx: 'automatic',
  },
});
```
