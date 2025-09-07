# FEToolkit/React

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(해당 썸네일은 Chat GPT를 통해 생성한 이미지입니다.)

[English](./README.md) | 한국어

FEToolkit은 Frontend 개발 시 유용하게 사용할 수 있는 기능들을 제공하는 툴킷 라이브러리입니다. 라이브러리는 React, Vue 등 프레임워크에 따라서 구분하여 제공되며, 프레임워크와 무관하게 공통적으로 사용할 수 있는 기능은 별도의 라이브러리로 배포될 예정입니다.  
현재는 제공되고 있는 기능이 많이 없을지 몰라도 지속적인 업데이트를 통해 기능을 추가해나갈 예정입니다.

> ### 알려드립니다
>
> 이 패키지는 기존에 배포된 [fetoolkit-react](https://github.com/minwoo129/fetoolkit-react)와 동일한 프로젝트입니다. 관리의 효율화를 위해 작업환경을 이전한 것이오니 이 점 참고 부탁드립니다.

## Documentation

- 본 라이브러리는 `React` 전용 라이브러리입니다.
  - 같은 React 계열의 `Next.js`와 `React Native`에서는 사용이 불가능합니다.
- 이 패키지는 React 19 이상에서만 정상동작이 가능합니다.

## 초기 설정 절차

### 1. 설치 방법

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

### 2. Provider 연결

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

## 제공되는 기능

### 3-1. 컴포넌트

| 이름           | 설명                                                                                                                                              |                                                       공식문서                                                       |
| :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------: |
| ErrorBoundary  | React 기본 탑재 기능인 ErrorBoundary를 함수 컴포넌트 및<br> HOC 형태로 제공하는 컴포넌트                                                          |  [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/components/ErrorBoundary.md)  |
| Flatlist       | 많은 양의 스크롤이 필요한 리스트 아이템을 보여주고자 할 때<br> 사용할 수 있는 컴포넌트 <br> (참고: React Native 개발자라면 이해할 수 있을겁니다!) |    [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/components/Flatlist.md)     |
| InfiniteScroll | 무한 스크롤 기능 컴포넌트                                                                                                                         | [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/components/InfiniteScroll.md)  |
| ContextMenu    | 사용자 선언 ContextMenu 구현을 위한 컴포넌트                                                                                                      | [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/joinedFeatures/contextMenu.md) |

### 3-2. Hook

| 이름                  | 설명                                                                                         |                                                         공식문서                                                         |
| :-------------------- | :------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------: |
| useAsyncLoading       | 비동기 작업의 로딩 상태를 관리하기 위한 Hook                                                 |     [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useAsyncLoading.md)      |
| useCountdown          | 카운트다운 기능을 구현하기 위한 Hook                                                         |       [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useCountdown.md)       |
| useImageLazyLoading   | 이미지의 lazy loading을 구현하기 위한 Hook                                                   |   [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useImageLazyLoading.md)    |
| useInput              | input 컴포넌트에서의 입력값을 관리하기 위한 Hook                                             |         [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useInput.md)         |
| useLocalStorage       | LocalStorage 사용을 위한 Hook                                                                |     [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useLocalStorage.md)      |
| useResizeElement      | 특정 HTML 요소의 크기를 추적하기 위한 Hook                                                   |     [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useResizeElement.md)     |
| useResizeWindow       | 브라우저 창의 크기를 추적하기 위한 Hook                                                      |     [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useResizeWindow.md)      |
| useScroll             | 스크롤 위치를 추적하고, 스크롤을 최상단으로 이동시키는<br> 기능을 제공하는 Hook              |        [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useScroll.md)         |
| useSessionStorage     | SessionStorage 사용을 위한 Hook                                                              |    [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useSessionStorage.md)     |
| useToggle             | 토글 형태의 input 값 제어를 위한 Hook                                                        |        [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useToggle.md)         |
| useUserAgent          | UserAgent를 통해 받아온 런타임이 돌아가고 있는 브라우저<br> 및 운영체제 정보를 반환하는 Hook |       [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useUserAgent.md)       |
| useValidationCheck    | 유효성 검사를 위한 hook 입니다.                                                              | [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/joinedFeatures/validationCheck.md) |
| useValidateCheckInput | 입력값 상태관리와 유효성 검사기능이 결합된 hook입니다.                                       | [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/joinedFeatures/validationCheck.md) |
| useContextMenu        | ContextMenu 기능 실행을 위한 hook 입니다.                                                    |      [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useContextMenu.md)      |
| useCustomContextMenu  | 사용자 선언형 ContextMenu 컴포넌트 구현시 필요한 <br> 값들을 반환하는 hook 입니다.           |   [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/hooks/useCustomContextMenu.md)   |

### 3-3. 유틸리티 함수

> ### 안내
>
> getUserAgent를 제외한 모든 유틸리티 함수는 [`@fetoolkit/utils`](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils)로 이동하였습니다. 따라서 이동한 함수들은 본 패키지에서 2025년 12월 31일을 끝으로 deprecated 처리할 예정이므로, 이 점 참고해주시기 바랍니다!!!  
> -> 기능 안정성을 위해 함수는 그대로 제공되지만, 더이상의 업데이트는 이뤄지지 않습니다.

| 이름                          | 설명                                                                                         |                                                         공식문서                                                          |
| :---------------------------- | :------------------------------------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------------------: |
| getUserAgent                  | UserAgent를 통해 받아온 런타임이 돌아가고 있는 브라우저<br> 및 운영체제 정보를 반환하는 함수 |       [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/utils/getUserAgent.md)        |
| formatPhoneNumber<br>(number) | 전화번호를 하이픈(-)이 들어간 형태로 반환하는 함수                                           | [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/utils/numbers_formatPhoneNumber.md) |
| commaizeNumber<br>(number)    | 숫자 콤마 처리 함수                                                                          |  [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/utils/numbers_commaizeNumber.md)   |
| decommaizeNumber<br>(number)  | 콤마 처리가 들어간 숫자의 콤마 제거 함수                                                     | [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/utils/numbers_decommaizeNumber.md)  |
| maskName<br>(mask)            | 이름 마스킹 처리 함수                                                                        |       [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/utils/mask_maskName.md)       |
| maskPhoneNumber<br>(mask)     | 전화번호 마스킹 처리 함수                                                                    |   [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/utils/mask_maskPhoneNumber.md)    |
| at<br>(array)                 | 배열에서 특정 인덱스에 있는 요소를 반환하는 함수<br> (파이썬처럼 음수 인덱스도 지원)         |         [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/utils/array_at.md)          |
| first<br>(array)              | 배열의 첫번째 요소를 꺼내오는 함수                                                           |        [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/utils/array_first.md)        |
| last<br>(array)               | 배열의 마지막 요소를 꺼내오는 함수                                                           |        [공식문서](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/src/docs/utils/array_last.md)         |
