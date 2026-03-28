# 영어버전 패키지 README 기본 템플릿

> ### 참고
>
> - 아래 마크다운 블록에 적용된 상대경로·패키지명·이미지 URL은 예시이며, 프롬프트 실행 시 실제 파일을 읽지 말 것(오류 발생 가능성 있음).
> - 패키지 루트에 `README.md`(영어), `README_kr.md`(한국어)를 둔다. 작성 순서는 한국어 문서를 먼저 완성한 뒤 영어 문서를 번역하는 것을 권장한다.

````md
# FEToolkit/{패키지 식별명}

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](./README_kr.md)

// 패키지가 무엇을 하는지, 어떤 환경에서 쓰는지 5줄 이내로 요약한다.
// 개조식이 아니라 짧은 문단으로 작성해도 된다.

> ### Notice // 선택. 마이그레이션·deprecated·주의사항이 있을 때만 블록 전체를 넣는다.

## 1. Compatibility

|     Framework / runtime     | enabled | version |
| :-------------------------: | :-----: | :-----: |
| JavaScript/TypeScript, etc. | ⭕ / ❌ |   x.x   |

## 2. Getting Started

### 2-1. Installation

- npm
  ```
  npm i @{스코프}/{패키지명}
  ```
- yarn
  ```
  yarn add @{스코프}/{패키지명}
  ```
- pnpm
  ```
  pnpm add @{스코프}/{패키지명}
  ```

#### 2-1-1. Additional Required Packages

// peer dependency 등 추가로 반드시 설치해야 하는 패키지가 있으면 위와 동일한 형식으로 채운다.
// 없으면 섹션 제목은 유지하고 각 패키지 매니저별 코드 블록은 비워 두거나, 섹션 자체를 생략해도 된다(팀 규칙에 따름).

- npm
  ```

  ```
- yarn
  ```

  ```
- pnpm
  ```

  ```

### 2-2. {선택 제목: 예) Provider setup, 환경 설정}

// 앱 루트에 Provider가 필요하거나, 초기화 코드가 있을 때만 작성한다. 불필요하면 이 소제목 전체를 삭제한다.

```tsx
// import 포함한 실제 설정 예시
```

## 3. Features

### 3-1. {하위 섹션 제목: 예) Integrated Features, Components, Hooks, Types}

| Name     | Description  |               Docs                |
| :------- | :----------- | :-------------------------------: |
| {기능명} | {한 줄 설명} | [Document](./docs/en/{파일명}.md) |

// 기능 종류가 여러 가지면 3-2, 3-3 … 으로 나누고 표를 추가한다.
````

---

## 섹션별 설명

| 섹션               | 역할                                                                                                                                                                              |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 제목 `FEToolkit/…` | 모노레포에서 패키지를 구분하기 쉬운 표기. npm 패키지 전체 이름과 동일할 필요는 없으나, 기존 패키지들과 톤을 맞출 것.                                                              |
| 썸네일·언어 링크   | 썸네일 URL·캡션 문구는 저장소 표준을 따른다. 영어 README에서는 `English \| [한국어](./README_kr.md)`, 한국어 README에서는 `[English](./README.md) \| 한국어`로 상호 링크.         |
| 본문 요약          | 사용자가 “이 패키지를 써야 하는지” 판단할 수 있을 정도로 한 번에 읽히게 쓴다(영어 README이므로 본문은 영어로 번역).                                                               |
| Notice             | 선택. breaking change, 패키지 분리, 대체 경로를 안내할 때만 사용(영어 README 본문은 영어).                                                                                        |
| 1. Compatibility   | 지원하는 프레임워크·런타임·주요 의존성 최소 버전. 사용 불가인 항목은 ❌와 빈 버전으로 표기 가능.                                                                                  |
| 2. Getting Started | 설치 명령은 npm / yarn / pnpm 세 가지 모두 적는다. peer 등 추가 패키지가 없으면 2-1-1은 비우거나 생략.                                                                            |
| 2-2 이하           | Provider·글로벌 설정 등 “설치만으로 끝나지 않는” 단계가 있을 때만 추가.                                                                                                           |
| 3. Features        | 공개 API·타입·문서를 표로 정리한다. Docs 열에는 기능별 상세 문서(예: `docs/en/…`)로의 상대경로 링크를 둔다. 하위 제목(Integrated Features, Types 등)은 패키지 성격에 맞게 나눈다. |

---

# 예시 1) 의존성이 단순한 패키지 (`@fetoolkit/dayjs`의 `README.md` 기준)

````md
# FEToolkit/Dayjs

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](./README_kr.md)

FEToolkit Dayjs is a utility package that provides date calculation features commonly needed when building calendar UIs with `dayjs`.  
It helps you write cleaner calendar data logic by offering functions for generating a month-based date board (2D weekly array) and calculating the number of weeks in a month.

## 1. Compatibility

|       Framework       | enabled | version |
| :-------------------: | :-----: | :-----: |
| JavaScript/TypeScript |   ⭕    |    -    |
|         dayjs         |   ⭕    |  >=1.x  |

## 2. Getting Started

### 2-1. Installation

- npm
  ```
  npm i @fetoolkit/dayjs
  ```
- yarn
  ```
  yarn add @fetoolkit/dayjs
  ```
- pnpm
  ```
  pnpm add @fetoolkit/dayjs
  ```

#### 2-1-1. Additional Required Packages

- npm
  ```
  npm i dayjs
  ```
- yarn
  ```
  yarn add dayjs
  ```
- pnpm
  ```
  pnpm add dayjs
  ```

## 3. Features

### 3-1. Integrated Features

| Name             | Description                                                                    |                      Docs                      |
| :--------------- | :----------------------------------------------------------------------------- | :--------------------------------------------: |
| dateBoardOfMonth | Returns a 2D date board including the first and last weeks of the target month | [Document](./docs/en/func_dateBoardOfMonth.md) |
| weekOfMonth      | Returns how many weeks the target month spans                                  |   [Document](./docs/en/func_weekOfMonth.md)    |

### 3-2. Types

| Name          | Description                        |                    Docs                     |
| :------------ | :--------------------------------- | :-----------------------------------------: |
| DateBoardItem | Data type for each date board cell | [Document](./docs/en/type_dateboarditem.md) |
````

---

# 예시 2) 추가 패키지·안내 블록·Provider가 있는 패키지 (`@fetoolkit/react`의 `README.md` 기준)

````md
# FEToolkit/React

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](./README_kr.md)

FEToolkit is a toolkit library that provides useful functions for Frontend development. The library is divided according to frameworks such as React and Vue, and functions that can be used in common regardless of the framework will be distributed as separate libraries.
This package is only available for React.

> ### Notice
>
> - We have conducted a major update through V2 version update.
>   - ContextMenu functionality has been moved to [`@fetoolkit/context-menu-react`](../context-menu-react/). (Related features provided by this package have been deprecated.)
>   - All utility functions provided by this package have been deprecated.
>     - userAgent functionality has been moved to [`@fetoolkit/user-agent`](../user-agent/).
>     - Other functions are provided in [`@fetoolkit/utils`](../utils/).

## 1. Compatibility

|  Framework   | enabled | version |
| :----------: | :-----: | :-----: |
|    React     |   ⭕    |  >=19   |
|   Next.js    |   ❌    |         |
| React Native |   ❌    |         |

## 2. Getting Started

### 2-1. Installation

- npm
  ```
  npm i @fetoolkit/react
  ```
- yarn
  ```
  yarn add @fetoolkit/react
  ```
- pnpm
  ```
  pnpm add @fetoolkit/react
  ```

#### 2-1-1. Additional Required Packages

- npm
  ```
  npm i @fetoolkit/user-agent
  ```
- yarn
  ```
  yarn add @fetoolkit/user-agent
  ```
- pnpm
  ```
  pnpm add @fetoolkit/user-agent
  ```

### 2-2. Connect Provider

You need to connect `FEToolkitProvider` Component on root to Stable functional behavior

```tsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { FEToolkitProvider } from '@fetoolkit/react';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FEToolkitProvider>
      <App />
    </FEToolkitProvider>
  </StrictMode>,
);
```

## 3. Features

### 3-1. Integrated Features

| Name       | Description               |                   Docs                   |
| :--------- | :------------------------ | :--------------------------------------: |
| Validation | Validation check Features | [Document](./docs/en/validationcheck.md) |

### 3-2. Components

| Name           | Description                                                                                             |                       Docs                        |
| :------------- | :------------------------------------------------------------------------------------------------------ | :-----------------------------------------------: |
| ErrorBoundary  | A Component which is useful to controll an error declaratively<br>(with HOC)                            | [Document](./docs/en/component_errorboundary.md)  |
| Flatlist       | A Component which is useful to render flat list.<br>(p.s. if you're RN developer, you will understand.) |    [Document](./docs/en/component_flatlist.md)    |
| InfiniteScroll | A Component to create an infinite scrolling.                                                            | [Document](./docs/en/component_infinitescroll.md) |

### 3-3. Hooks

| Name                  | Description                                                        |                        Docs                         |
| :-------------------- | :----------------------------------------------------------------- | :-------------------------------------------------: |
| useAsyncLoading       | A Hook to manage the loading status of async <br>process.          |    [Document](./docs/en/hook_useasyncloading.md)    |
| useCountdown          | A Hook to implement countdown feature.                             |     [Document](./docs/en/hook_usecountdown.md)      |
| useImageLazyLoading   | A Hook for implementing Image Lazy loading.                        |  [Document](./docs/en/hook_useimagelazyloading.md)  |
| useInput              | A Hook to manage input value.                                      |       [Document](./docs/en/hook_useinput.md)        |
| useLocalStorage       | A Hook to usage of LocalStorage.                                   |    [Document](./docs/en/hook_uselocalstorage.md)    |
| useResizeElement      | A Hook for tracking the size of particular HTML element            |   [Document](./docs/en/hook_useresizeelement.md)    |
| useResizeWindow       | A Hook for tracking the viewport size.                             |    [Document](./docs/en/hook_useresizewindow.md)    |
| useScroll             | A Hook for tracking the location of scrolling                      |       [Document](./docs/en/hook_usescroll.md)       |
| useSessionStorage     | A Hook to usage of SessionStorage.                                 |   [Document](./docs/en/hook_usesessionstorage.md)   |
| useToggle             | A Hook to controll input value(toggle).                            |       [Document](./docs/en/hook_usetoggle.md)       |
| useUserAgent          | A Hook that returns UserAgent data from browser. <br>(cached data) |     [Document](./docs/en/hook_useuseragent.md)      |
| useValidationCheck    | A Hook for validation check                                        |  [Document](./docs/en/hook_usevalidationcheck.md)   |
| useValidateCheckInput | A Hook that manage input value with validation check.              | [Document](./docs/en/hook_usevalidatecheckinput.md) |
````
