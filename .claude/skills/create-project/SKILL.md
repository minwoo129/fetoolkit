---
name: create-project
description: 신규 패키지 생성을 위한 스킬입니다. 프로젝트 실행 요청 시 아래와 같은 절차로 실행합니다.
argument-hint: [project name] [react|util]
---

# 1. 사용할 패키지 매니저

패키지 매니저: `yarn`

# 2. 프로젝트 생성(cli)

```
yarn create:project $0 --yes
```

# 3. 프로젝트 package.json 수정

- 수정할 파일 경로: `packages/$0/package.json`
- 템플릿
  1. $1 == `util`인 경우 => [템플릿(링크)](./references/package-json-util-ref.md)
  2. $1 == `react`인 경우 => [템플릿(링크)](./references/package-json-react-ref.md)

# 4. 프로젝트 경로설정 script 추가(yarn)

- 수정할 파일 경로: `<root>/package.json`
- 파일에 추가할 내용(추가한 스크립트는 `packages:` 패턴을 띄는 스크립트 그룹 맨 아래에 추가한다.)

  ```json
  {
    ...

    "scripts": {
      "packages:$0": "yarn workspace @fetoolkit/$0",
      "packages:$0:build": "cd packages/$0 && yarn build",
      "packages:$0:publish": "cd packages/$0 && npm publish --access=public",
      "packages:$0:publish:beta": "cd packages/$0 && npm publish --tag beta",
    },
  }
  ```

# 5. ESLint 적용 범위 설정($1 == `react` 인 경우에만)

- 수정할 파일 경로: `<root>/eslint.config.mjs`
- 파일에 추가할 내용("react 기반 프로젝트에만 적용할 설정" 주석 하단 객체에서 `files` 어트리뷰트에 다음과 같이 경로만 추가)

  ```js
  ...

  export default tseslint.config([
    globalIgnores(['dist']),
    ...
    // react 기반 프로젝트에만 적용할 설정
    {
      files: [
        ...
        'packages/$0/**/*.{ts,tsx}' // 이 코드
      ],
      ...
    },
  ]);
  ```

# 6. yarn install 실행(cli)

```
yarn packages:$0 install
```

# 7. 필수 패키지 설치(cli)

아래와 같이 CLI 명령어를 실행해 패키지들을 설치한다.

```
yarn packages:$0 add -D ...
```

패키지들은 모두 `devDependencies` 로 설치하며, 설치할 패키지들은 다음과 같다.

- 설치유형: `devDependencies`
- 설치할 패키지
  - ($1 == `react` | `util`, 공통설치)
    - `vite`
    - `vite-plugin-dts`
  - ($1 == `react`인 경우에만 설치)
    - `@testing-library/dom`
    - `@testing-library/jest-dom`
    - `@testing-library/react`
    - `@types/react`
    - `@types/react-dom`
    - `@vitejs/plugin-react`
    - `babel-plugin-react-compiler`
    - `react`
    - `react-dom`
    - `vite-plugin-lib-inject-css`
    - `jsdom`

# 8. 프로젝트 워크스페이스 내부 설정

## 8-1. 불필요 폴더(디렉토리) 삭제

- 기존 폴더(디렉토리)들은 모두 삭제
- `src/.gitkeep` 파일만 생성해둔다.

## 8-2. index.ts 파일 생성

- 파일 생성경로(파일명): `packages/$0/index.ts`
- 파일 생성 후 별도의 코드 작성은 하지 않고 놔둘 것

## 8-3. vite.config.ts 파일 생성 및 작성

- 파일 생성경로(파일명): `packages/$0/vite.config.ts`
- 템플릿
  1. $1 == `util`인 경우 => [템플릿(링크)](./references/vite-config-util-ref.md)
  2. $1 == `react`인 경우 => [템플릿(링크)](./references/vite-config-react-ref.md)

## 8-4. tsconfig.json 파일 생성 및 작성

- 파일 생성경로(파일명): `packages/$0/tsconfig.json`
- 템플릿
  1. $1 == `util`인 경우 => [템플릿(링크)](./references/tsconfig-util-ref.md)
  2. $1 == `react`인 경우 => [템플릿(링크)](./references/tsconfig-react-ref.md)

## 8-5. vite-env.d.ts 파일 추가($1 == `util` 인 경우에만)

- 파일 생성경로(파일명): `packages/$0/src/vite-env.d.ts`
- 템플릿
  ```ts
  /// <reference types="vite/client" />
  ```

## 8-6. vitest.config.ts 파일 추가($1 == `react`인 경우에만)

- 파일 생성경로(파일명): `packages/$0/vitest.config.ts`
- [템플릿(링크)](./references/vitest-config-ref.md)

# 9. CI/CD 파이프라인 업데이트(자동배포)

- 수정할 파일 경로: `.github/workflows/publish.yml`
- 파일에 추가할 내용(`jobs > publish-to-npm > steps` 맨 하단에 아래 코드 추가)
  ```yaml
  - name: publish(fetoolkit/$0)
    run: yarn packages:$0:publish
  ```
