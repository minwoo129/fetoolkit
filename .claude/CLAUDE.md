# CLAUDE.md

## 프로젝트 기본 구조

- **패키지 매니저:** Yarn berry (`yarn@4.9.4`)
  - 패키지 설치 시 반드시 `yarn add`를 사용하며, `npm install`은 사용하지 않는다.
- **모노레포 도구:** Lerna 8
- 워크스페이스:
  - `packages/*` (배포된 패키지)
  - `apps/*` (패키지 별 E2E 테스트를 위한 테스트 프로젝트)

## 코드 스타일

- TypeScript 사용(ESM 기반으로 작성)
- default export 대신 named export 사용
- TS 함수: 화살표 함수 표현식으로 작성
- CSS: `src/css` 폴더 내에 각 컴포넌트 별 css 파일을 작성하고 컴포넌트 파일에서 import해서 사용
- react 컴포넌트 내에선 `useCallback` 및 `useMemo`를 사용하지 않는다.

## 명령어

- `yarn build`: 패키지 빌드 명령어
- `yarn packages:*:publish`: 패키지 배포 명령어(npm, 정규버전)
  - 해당 명령어는 CI/CD 파이프라인에서 주로 사용되므로, 로컬 또는 AI 프롬프트 상에서 사용될 일은 없음.
- `yarn packages:*:publish:beta`: 패키지 배포 명령어(npm, 베타버전)
- `yarn apps:*:auto-install`: E2E 테스트용 테스트 프로젝트 패키지 설치 명령어
  - 각 패키지 별로 프로젝트가 구분되어 있음
  - 명령어 실행시 전체 패키지 빌드 후 해당 프로젝트에서의 패키지 설치 실행
  - 해당 명령어는 CI/CD 파이프라인에서 주로 사용되므로, 로컬 또는 AI 프롬프트 상에서 사용될 일은 없음.

### 버전 관리

- CLI 명령어 직접 실행 => `yarn version:up`
- Claude Code Skill 실행 => `/version-up {버전명}`
  - Cursor 프롬프트도 호환 가능

## 아키텍처

### 패키지 아키텍처

- `fetoolkit` 네임스페이스를 기준으로 확장하는 구조(ex, `@fetoolkit/react`, `@fetoolkit/utils` 등등)
- 기본 번들러: `vite`
- react 기반 패키지: `react-compiler` 필수 연결
- 모든 패키지는 `src/` 폴더 내에서 모든 비즈니스 로직을 작성한다.

### 비즈니스 로직 설계

- 모든 패키지의 비즈니스 로직은 `src` 폴더 내에서 작성된다.
- `src` 폴더 내 모든 폴더에는 `index.ts` 또는 `index.tsx` 파일을 선언한다.
  - 실제 패키지에서 export할 기능들만 `index`에서 export 처리한다.
  - 상위 폴더의 `index` 파일은 하위 폴더의 `index` 파일을 통째로 export한다.

### 빌드 결과

- `tsc + vite build`를 통해 `dist` 폴더 안에 빌드가 이뤄진다.

### CI/CD

- 플랫폼: GitHub Actions
- 연결된 파이프라인
  - `playwright-*.yml`: 패키지 별 E2E 테스트 실행(Playwright)
  - `vitest-*.yml`: 패키지 별 유닛 테스트 실행(Vitest)
  - `publish.yml`: 전체 패키지 배포(npm)
  - `issue-close.yml`, `sub-issue-close.yml`: `dev` 브랜치 또는 상위 이슈 브랜치로 머지가 이뤄진 경우 하위 이슈를 `closed` 처리하고 연결된 브랜치를 삭제함

### 브랜치 패턴

- `master`(고정)
- `release`(고정)
- `dev-v(버전명)`
- `{feature,bug,docs}/issue-(이슈번호)/...`
