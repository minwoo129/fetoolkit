---
name: create-project
description: 신규 패키지 생성을 위한 스킬입니다. 프로젝트 실행 요청 시 아래와 같은 절차로 실행합니다.
---

# 참고사항

- 신규 패키지 생성 시 react 기반 프로젝트일 때와 일반 유틸리티 기반 프로젝트일 때와 설정법이 다르다.
- react 기반인지, 일반 유틸리티 기반인지는 사용자가 프롬프트 실행시 명확하게 알려줄 것이다.
  (만약 프롬프트에서 사용자가 알려주지 않았으면 사용자에게 물어보고 명확한 답을 받은 후에 실행한다.)

# 1. 사용할 패키지 매니저

패키지 매니저는 `yarn`을 사용한다.

# 2. 프로젝트 생성

프로젝트 생성시 아래의 명령어로 생성한다.

```
yarn create:project {project name}
// ex project name = test_proj
// yarn create:project test_proj --yes
```

- 명령어 실행 후 npm init 할때처럼 package.json에 입력할 사항을 CLI에서 입력하라고 나오면 아무것도 입력하지 말고 그냥 넘어갈것!!!!

# 3. 프로젝트 package.json 수정

생성된 프로젝트 워크스페이스 내 `package.json` 파일을 다음과 같이 수정한다.

```json
{
  "name": "@fetoolkit/{project name}",
  "version": "{version}", // 이 버전 정보는 프로젝트 생성될 때 버전정보를 그대로 적용할 것
  "type": "module",
  "author": "minwoo129 <key0129mw@naver.com>",
  "license": "MIT",
  "scripts": {
    "build": "tsc && vite build"
  },
  "devDependencies": {
    "vite": "^7.3.1",
    "vite-plugin-dts": "^4.5.4"
  }
}
```

# 4. 프로젝트 경로설정 script 추가(yarn)

루트 경로에 있는 `package.json` 파일에 아래와 같이 스크립트를 추가한다.
(해당 스크립트는 `packages:` 패턴을 띄는 스크립트 그룹 맨 아래에 추가한다.)

```json
{
  ...

  "scripts": {
    "packages:{project name}": "yarn workspace @fetoolkit/{project name}",
  },
}
```

# 5. ESLint 적용 범위 설정(선택)

(이 단계는 react 기반 프로젝트인 경우에만 실행한다.)
루트 경로의 `eslint.config.mjs` 파일에 ESLint 적용을 위한 코드를 추가해야 한다.
`eslint.config.mjs` 파일에 들어가면 react 기반 프로젝트에만 적용할 lint 속성 블록이 있다. 그 블록에 `files` 프로퍼티에 새로 추가한 프로젝트의 경로를 설정해준다.

```js
...

export default tseslint.config([
  globalIgnores(['dist']),
  ...
  {
    files: [
      ...
      'packages/{project name}/**/*.{ts,tsx}' // 이 코드
    ],
    ...
  },
]);
```

# 6. yarn install 실행

```
yarn packages:{project name} install
```

# 7. 필수 패키지 설치(선택)

(이 단계는 react 기반 프로젝트인 경우에만 실행한다.)
react 기반 프로젝트의 경우 필수적으로 설치해야 하는 패키지들이 추가적으로 있다. 그 패키지들을 설치한다.

```
yarn packages:{project name} add -D @testing-library/dom @testing-library/jest-dom @testing-library/react @types/react @types/react-dom @vitejs/plugin-react babel-plugin-react-compiler react react-dom vite-plugin-lib-inject-css
```

# 8. 프로젝트 워크스페이스 최종 설정

## 8-1. 불필요 폴더(디렉토리) 삭제

새로 생성된 워크스페이스 내에 있는 요소들 중에서 폴더(디렉토리)들만 모두 삭제하고, 그 안에 `src` 폴더만 생성한다.(`src` 폴더 안에는 `.gitkeep` 파일만 생성해둔다.)

## 8-2. index.ts 파일 생성

새로 생성된 워크스페이스 내에 `index.ts` 파일을 생성한다. (파일 생성 후 별도의 코드 작성은 하지 않고 놔둘 것)

## 8-3. vite.config.ts 파일 생성

새로 생성된 워크스페이스 내에 `vite.config.ts` 파일을 생성한다. 파일을 생성하면 아래와 같이 작성한다.

1. 일반 유틸리티 패키지인 경우

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
         name: '@fetoolkit/{project name}',
         fileName: 'index',
         formats: ['es', 'umd'],
       },
     },
     esbuild: {
       jsx: 'automatic',
     },
   });
   ```

2. react 기반 프로젝트인 경우

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
         name: '@fetoolkit/{project name}',
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

## 8-4. tsconfig.json 파일 추가

새로 생성된 워크스페이스 내에 `tsconifg.json` 파일을 생성한다. 파일을 생성하면 아래와 같이 작성한다.

1. 일반 유틸리티 패키지인 경우

   ```json
   {
     "compilerOptions": {
       "target": "ES2022",
       "useDefineForClassFields": true,
       "module": "ESNext",
       "lib": ["ES2022", "DOM", "DOM.Iterable"],
       "skipLibCheck": true,

       /* Bundler mode */
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "verbatimModuleSyntax": true,
       "moduleDetection": "force",
       "noEmit": true,

       /* Linting */
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "erasableSyntaxOnly": true,
       "noFallthroughCasesInSwitch": true,
       "noUncheckedSideEffectImports": true
     },
     "include": ["src"]
   }
   ```

2. react 기반 프로젝트인 경우

   ```json
   {
     "compilerOptions": {
       "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
       "target": "ES2022",
       "useDefineForClassFields": true,
       "lib": ["ES2022", "DOM", "DOM.Iterable"],
       "module": "ESNext",
       "skipLibCheck": true,

       /* Bundler mode */
       "moduleResolution": "bundler",
       "allowImportingTsExtensions": true,
       "verbatimModuleSyntax": true,
       "moduleDetection": "force",
       "noEmit": true,
       "jsx": "react",

       /* Linting */
       "strict": true,
       "noUnusedLocals": true,
       "noUnusedParameters": true,
       "erasableSyntaxOnly": true,
       "noFallthroughCasesInSwitch": true,
       "noUncheckedSideEffectImports": true
     },
     "include": ["src/**/*", "src/**/*.tsx", "src/**/*.ts", "src/**/*.css"]
   }
   ```

## 8-5. vite-env.d.ts 파일 추가(선택)

(이 단계는 일반 유틸리티 기반 프로젝트인 경우에만 실행한다.)
새로 생성된 src 폴더 내에 `vite-env.d.ts` 파일을 추가하고 아래와 같이 작성한다.

```ts
/// <reference types="vite/client" />
```
