# vite.config.ts 파일 템플릿(react 기반 라이브러리)

> ### 참고
>
> - Skills 변수 참조 코드가 있는 경우 해당파일이 연결된 스킬의 변수참조를 그대로 적용할 것

```ts
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
      include: ['src/**/*', 'index.ts'],
      tsconfigPath: 'tsconfig.json',
    }),
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    libInjectCss(),
  ],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'index.ts'),
      },
      name: '@fetoolkit/$0',
      fileName: 'index',
      formats: ['es', 'umd'],
      cssFileName: 'index.css',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' },
        chunkFileNames: 'chunks/[name].[hash].js',
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].[format].js',
      },
    },
    // 하나의 CSS만 내보내고 싶다면 false
    cssCodeSplit: false,
  },
});
```
