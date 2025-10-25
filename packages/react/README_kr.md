# FEToolkit/React

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(해당 썸네일은 Chat GPT를 통해 생성한 이미지입니다.)

[English](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/README.md) | 한국어

FEToolkit은 Frontend 개발 시 유용하게 사용할 수 있는 기능들을 제공하는 툴킷 라이브러리입니다. 라이브러리는 React, Vue 등 프레임워크에 따라서 구분하여 제공되며, 프레임워크와 무관하게 공통적으로 사용할 수 있는 기능은 별도의 라이브러리로 배포될 예정입니다.  
이 패키지는 react 환경에서만 사용 가능한 패키지입니다.

<!-- > ### 알려드립니다.
>
> - V2 버전 업데이트를 통해 대규모 업데이트를 진행하였습니다.
>   - ContextMenu 기능은 [`@fetoolkit/context-menu-react`](../context-menu-react/)로 이전하였습니다.(이 패키지에서 제공하던 관련 기능은 deprecated 처리하였습니다.)
>   - 해당 패키지에서 제공하고 있던 모든 유틸리티 함수는 deprecated 처리하였습니다.
>     - userAgent 기능은 `@fetoolkit/user-agent`로 이전하였습니다.
>     - 그 외 다른 함수들은 [`@fetoolkit/utils`](../utils/)에서 제공하고 있습니다. -->

> ### 알려드립니다
>
> - 해당 버전은 현재 베타 테스트 목적으로 배포된 버전입니다. 기능상 불안정한 기능이 존재할 수 있으니 정식 배포 전에는 설치하지 마세요!!!

## 1. 호환성

|  프레임워크  | 사용가능여부 | 최소버전 |
| :----------: | :----------: | :------: |
|    React     |      ⭕      |   >=19   |
|   Next.js    |      ❌      |          |
| React Native |      ❌      |          |

## 2. 초기 설정 절차

### 2-1. 설치 방법

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

#### 2-1-1. 추가 설치 패키지(필수)

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

### 2-2. Provider 연결

이 툴킷의 안정적인 기능사용을 위해선, 최상단에 FEToolkitProvider 컴포넌트 연결이 필요합니다.

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

## 3. 제공되는 기능

## 3-1. 통합 기능

| 이름       | 설명             |                 공식문서                 |
| :--------- | :--------------- | :--------------------------------------: |
| Validation | 유효성 검사 기능 | [공식문서](./docs/ko/validationcheck.md) |

### 3-2. 컴포넌트

| 이름                | 설명                                                                                                                                              |                        공식문서                        |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------ | :----------------------------------------------------: |
| ErrorBoundary       | React 기본 탑재 기능인 ErrorBoundary를 함수 컴포넌트 및<br> HOC 형태로 제공하는 컴포넌트                                                          |    [공식문서](./docs/ko/component_errorboundary.md)    |
| Flatlist            | 많은 양의 스크롤이 필요한 리스트 아이템을 보여주고자 할 때<br> 사용할 수 있는 컴포넌트 <br> (참고: React Native 개발자라면 이해할 수 있을겁니다!) |      [공식문서](./docs/ko/component_flatlist.md)       |
| InfiniteScroll      | 무한 스크롤 기능 컴포넌트                                                                                                                         |   [공식문서](./docs/ko/component_infinitescroll.md)    |
| ContextMenu         | 사용자 선언 ContextMenu 구현을 위한 컴포넌트                                                                                                      |     [공식문서](./docs/ko/component_contextmenu.md)     |
| ContextMenuProvider | 사용자 선언 ContextMenu 구현을 위한 Provider 컴포넌트                                                                                             | [공식문서](./docs/ko/component_contextmenuprovider.md) |

### 3-3. Hook

| 이름                  | 설명                                                                                         |                      공식문서                       |
| :-------------------- | :------------------------------------------------------------------------------------------- | :-------------------------------------------------: |
| useAsyncLoading       | 비동기 작업의 로딩 상태를 관리하기 위한 Hook                                                 |    [공식문서](./docs/ko/hook_useasyncloading.md)    |
| useCountdown          | 카운트다운 기능을 구현하기 위한 Hook                                                         |     [공식문서](./docs/ko/hook_usecountdown.md)      |
| useImageLazyLoading   | 이미지의 lazy loading을 구현하기 위한 Hook                                                   |  [공식문서](./docs/ko/hook_useimagelazyloading.md)  |
| useInput              | input 컴포넌트에서의 입력값을 관리하기 위한 Hook                                             |       [공식문서](./docs/ko/hook_useinput.md)        |
| useLocalStorage       | LocalStorage 사용을 위한 Hook                                                                |    [공식문서](./docs/ko/hook_uselocalstorage.md)    |
| useResizeElement      | 특정 HTML 요소의 크기를 추적하기 위한 Hook                                                   |   [공식문서](./docs/ko/hook_useresizeelement.md)    |
| useResizeWindow       | 브라우저 창의 크기를 추적하기 위한 Hook                                                      |    [공식문서](./docs/ko/hook_useresizewindow.md)    |
| useScroll             | 스크롤 위치를 추적하고, 스크롤을 최상단으로 이동시키는<br> 기능을 제공하는 Hook              |       [공식문서](./docs/ko/hook_usescroll.md)       |
| useSessionStorage     | SessionStorage 사용을 위한 Hook                                                              |   [공식문서](./docs/ko/hook_usesessionstorage.md)   |
| useToggle             | 토글 형태의 input 값 제어를 위한 Hook                                                        |       [공식문서](./docs/ko/hook_usetoggle.md)       |
| useUserAgent          | UserAgent를 통해 받아온 런타임이 돌아가고 있는 브라우저<br> 및 운영체제 정보를 반환하는 Hook |     [공식문서](./docs/ko/hook_useuseragent.md)      |
| useValidationCheck    | 유효성 검사를 위한 hook 입니다.                                                              |  [공식문서](./docs/ko/hook_usevalidationcheck.md)   |
| useValidateCheckInput | 입력값 상태관리와 유효성 검사기능이 결합된 hook입니다.                                       | [공식문서](./docs/ko/hook_usevalidatecheckinput.md) |
