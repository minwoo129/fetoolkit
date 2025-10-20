# FEToolkit/ContextMenu-React

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(해당 썸네일은 Chat GPT를 통해 생성한 이미지입니다.)

[English](./README.md) | 한국어

이 프로젝트는 React 기반 프로젝트에서 ContextMenu 기능을 제공하는 패키지입니다. 기존 "@fetoolkit/react" 프로젝트에서 제공하고 있던 ContextMenu 기능들을 별도의 패키지로 분리하였습니다.  
이 패키지에서 제공되는 기능은 기존 "@fetoolkit/react" 패키지에서 제공되던 ContextMenu와 사용방법이 많이 다릅니다. 따라서 v1 버전의 코드베이스로는 더 이상 사용할 수 없습니다.  
기존에는 HTML 태그에 `onContextMenu` 이벤트를 별도로 선언하고 버튼 구성을 매번 선언해야 했지만, 이번 버전부터는 HTML 태그에 ID를 선언하면 해당 영역에서 ID에 따라 선언된 메뉴 구성이 노출되도록 사용성을 개선하였습니다.

> ### 알려드립니다
>
> - 해당 버전은 현재 알파 및 베타 테스트 목적으로 배포된 버전입니다. 기능상 불안정한 기능이 존재할 수 있으니 정식 배포 전에는 설치하지 마세요!!!

## 1. 의존성

|  프레임워크  | 사용가능여부 | 최소버전 |
| :----------: | :----------: | :------: |
|    React     |      ⭕      |   >=19   |
|   Next.js    |      ❌      |          |
| React Native |      ❌      |          |

## 2. 초기 설정 절차

### 2-1. 설치 방법

- npm
  ```
  npm i @fetoolkit/context-menu-react
  ```
- yarn
  ```
  yarn add @fetoolkit/context-menu-react
  ```
- pnpm

  ```
  pnpm add @fetoolkit/context-menu-react
  ```

#### 2-1-1. 추가 설치 패키지(필수)

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

### 2-2. ContextMenu 데이터 설정

각각의 ID 별로 ContextMenu 버튼 구성을 선언합니다.

> 각 ID에 따라 메뉴 구성을 구분하고 원하는 HTML 태그에 해당 ID를 선언하는 방식입니다.

```tsx
// 경로(예시): ./src/constants/contextMenu.tsx
import { ContextMenuButtonDatas } from '@fetoolkit/context-menu-react';

export const MenuButtons: ContextMenuButtonDatas = {
  'test-menu-1': [
    {
      label: '햇빛',
      value: 'sun',
    },
    {
      label: '비',
      value: 'rain',
    },
    {
      label: '눈',
      value: 'snow',
    },
  ],
  'test-menu-2': [
    {
      label: '사과',
      value: 'apple',
    },
    {
      label: '바나나',
      value: 'banana',
    },
    {
      label: '딸기',
      value: 'strawberry',
    },
    {
      label: '포도',
      value: 'grape',
    },
    {
      label: '레몬',
      value: 'lemon',
    },
    {
      label: '오렌지',
      value: 'orange',
    },
  ],
  'test-menu-3': [
    {
      label: '빨강',
      value: 'red',
    },
    {
      label: '초록',
      value: 'green',
    },
    {
      label: '파랑',
      value: 'blue',
    },
    {
      label: '보라',
      value: 'purple',
    },
    {
      label: '노랑',
      value: 'yellow',
    },
  ],
};
```

### 2-3. Provider 연결

프로젝트 최상단에 Provider 컴포넌트와 작성한 ContextMenu 데이터 객체를 연결합니다.

```tsx
// 경로(예시): ./src/main.tsx
import { ContextMenuProvider } from '@fetoolkit/context-menu-react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { MenuButtons } from './constants/contextMenus.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextMenuProvider buttonDatas={MenuButtons}>
      <App />
    </ContextMenuProvider>
  </StrictMode>,
);
```

## 3. 사용법

### 3-1. ContextMenu HOC 연결

ContextMenu를 노출할 페이지에 `withContextMenu` HOC(High-Order Component)를 연결합니다.

> - 첫번째 인자에 페이지 컴포넌트를 연결합니다.
> - 두번째 인자를 통해 자체 개발한 ContextMenu를 노출할 수도 있습니다.

```tsx
// 경로(예시) ./src/App.tsx
import { withContextMenu } from '@fetoolkit/context-menu-react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppContextMenu from './components/AppContextMenu';
import ContextMenuTestPage1 from './pages/ContextMenuTestPage1';
import ContextMenuTestPage2 from './pages/ContextMenuTestPage2';
import Main from './pages/Main';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/test-page-1"
          element={withContextMenu(<ContextMenuTestPage1 />)}
        />
        <Route
          path="/test-page-2"
          element={withContextMenu(
            <ContextMenuTestPage2 />,
            <AppContextMenu />,
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

### 3-2. HTML 태그에 ID 연결

페이지 내에서 원하는 HTML 태그에 미리 작성한 ContextMenu 데이터 객체의 ID를 연결합니다.(ID 입력 시 `context-menu-id` 형식으로 적용되어야 합니다).

> - 태그별로 다른 ID가 선언되면 각 ID에 따라 다른 메뉴 구성이 노출됩니다.

```tsx
<div className="test-element" context-menu-id="test-menu-3">
  Test Element3
</div>
```

### 3-3. Listener 적용

페이지 컴포넌트 내에 `useContextMenu` 훅을 import하여 ContextMenu 클릭 이벤트 리스너를 연결합니다.

```tsx
import { useContextMenu } from '@fetoolkit/context-menu-react';
import React, { useEffect, useState } from 'react';
import '../css/testPage1.css';

const ContextMenuTestPage1 = () => {
  // 여기
  const { onClickedContextMenuItem } = useContextMenu();

  // 여기
  useEffect(() => {
    const unsubscribe = onClickedContextMenuItem((data) => {
      // 개별 로직 작성
    });
    return () => {
      unsubscribe();
    };
  }, [onClickedContextMenuItem]);

  return (
    <div className="mainLayer">
      <div className="row-items-grid">
        <div className="test-element" context-menu-id="test-menu-1">
          Test Element1
        </div>
        <div className="test-element" context-menu-id="test-menu-2">
          Test Element2
        </div>
        <div className="test-element" context-menu-id="test-menu-3">
          Test Element3
        </div>
      </div>
    </div>
  );
};

export default ContextMenuTestPage1;
```

## 4. (추가) 커스텀 ContextMenu 연결하기

> ### 알려드립니다.
>
> 현재 이 기능은 기술적인 문제로 인해 스타일 적용이 어려운 상태입니다. 기술적으로 일부 불안정한 부분이 있을 수 있어 기능 업데이트가 완료되면 관련 문서를 제공하도록 하겠습니다.  
> 최대한 빨리 업데이트 버전을 제공할 수 있도록 최선을 다하겠습니다.

자체 제공되는 컴포넌트와 훅을 사용해서 각자 원하는 스타일의 ContextMenu 컴포넌트를 연결할 수 있습니다.

## 5. 제공되는 기능

### 5-1. 컴포넌트

| 이름                | 설명                                           |                        공식문서                        |
| :------------------ | :--------------------------------------------- | :----------------------------------------------------: |
| ContextMenuProvider | ContextMenu 기능 실행을 위한 Provider 컴포넌트 | [공식문서](./docs/ko/component_contextmenuprovider.md) |

### 5-2. HOC(High-Order Component)

| 이름            | 설명                                       |                   공식문서                   |
| :-------------- | :----------------------------------------- | :------------------------------------------: |
| withContextMenu | 페이지 별 ContextMenu 기능 연결을 위한 HOC | [공식문서](./docs/ko/hoc_withcontextmenu.md) |

### 5-3. Hook

| 이름           | 설명                              |                   공식문서                   |
| :------------- | :-------------------------------- | :------------------------------------------: |
| useContextMenu | ContextMenu 기능 실행을 위한 Hook | [공식문서](./docs/ko/hook_usecontextmenu.md) |

### 5-4. Type

| 이름                   | 설명                                       |                       공식문서                       |
| :--------------------- | :----------------------------------------- | :--------------------------------------------------: |
| ContextMenuButtonDatas | 전역에 선언할 ContextMenu 데이터 객체 타입 | [공식문서](./docs/ko/type_contextmenubuttontatas.md) |
| ContextMenuItemType    | 각 버튼 별 데이터 타입                     |                [공식문서](./docs/ko/)                |
| LastClickedDataType    | 버튼 클릭이 발생한 마지막 이벤트 정보      |                [공식문서](./docs/ko/)                |
