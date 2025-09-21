# ContextMenu

[English](./contextMenu.md) | 한국어

- React에서 브라우저 자체제공 ContextMenu가 아닌 맞춤형 ContextMenu를 만드는데 사용하는 기능입니다.
- 자체 제공하는 ContextMenu 컴포넌트를 사용할수도 있고, 커스텀 컴포넌트를 만들어서 사용할 수도 있습니다.
  - 커스텀 컴포넌트를 만들어 사용하는 경우, 이를 위한 컴포넌트와 데이터 연결을 위한 커스텀 Hook을 제공하니, 이를 사용해 개발하시면 됩니다.

## 1. 제공기능

### 1-1. [ContextMenu(컴포넌트)](../components/ContextMenu.md)

### 1-2. [ContextMenuProvider(컴포넌트)](../components/ContextMenuProvider.md)

### 1-3. [useContextMenu(Hook)](../hooks/useContextMenu.md)

### 1-4. [useCustomContextMenu(Hook)](../hooks/useCustomContextMenu.md)

## 2. 사전 연결 방법

### 2-1. ContextMenuProvider 컴포넌트 연결

React 프로젝트를 기준으로 `main.tsx` 파일에 아래와 같이 연결하시면 됩니다.

- 반드시 `FEToolkitProvider` 컴포넌트 하위에 선언되어야 합니다.

```tsx
// 기본 예시
// src/main.tsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextMenuProvider, FEToolkitProvider } from '@fetoolkit/react';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FEToolkitProvider>
      {/* 여기 */}
      <ContextMenuProvider>
        <App />
      </ContextMenuProvider>
    </FEToolkitProvider>
  </StrictMode>,
);
```

## 3. 사용법

### 3-1. 기본 제공하는 ContextMenu 컴포넌트를 사용하는 경우

#### 1) onContextMenu props에 클릭 이벤트 연결

React의 HTML Element에는 `onContextMenu`라는 props가 있습니다.
이 props를 사용하면 해당 Element의 마우스 우클릭 이벤트를 설계할 수 있습니다.  
사용 시 `useContextMenu` Hook을 import하시고 ContextMenu를 띄울 영역에 해당하는 element에 `onContextMenu` props를 사용하여 아래 예시와 같이 사용하십시오.

```tsx
// 예시 페이지
import React, { useEffect, useMemo, useState } from 'react';
import { useContextMenu } from '@fetoolkit/react';

const ContextMenuTestPage = () => {
  const { contextMenuHandler, onClickedContextMenuItem } = useContextMenu(); // 여기

  useEffect(() => {
    // 여기
    const unsubscribe = onClickedContextMenuItem((data) => {
      console.log('clickedData: ', data);
    });
    return () => {
      unsubscribe();
    };
  }, [onClickedContextMenuItem]);
  const testArr = useMemo(() => {
    return [
      'test1',
      'test2',
      'test3',
      'test4',
      'test5',
      'test6',
      'test7',
      'test8',
      'test9',
      'test10',
    ];
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', border: '1px solid red' }}>
      {testArr.map((item, idx) => {
        return (
          <div
            key={idx}
            style={{ width: '100%', border: '1px solid blue' }}
            onContextMenu={(e) => {
              // 여기
              contextMenuHandler({
                elementId: 'test-124',
                event: e,
                buttonDatas: [
                  {
                    label: 'test',
                    value: 'test',
                  },
                  {
                    label: 'test1',
                    value: 'test1',
                  },
                  {
                    label: 'test2',
                    value: 'test2',
                  },
                  {
                    label: 'test3',
                    value: 'test3',
                  },
                ],
              });
            }}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default ContextMenuTestPage;
```

위와 같이, `useContextMenu` Hook의 `onClickedContextMenuItem` 메서드를 사용하여 ContextMenu에서 어떤 버튼이 클릭됬는지를 감지할 수 있습니다. 그리고 `contextMenuHandler` 메서드를 사용하여 해당 Element에서 우클릭이 발생해서 ContextMenu가 열릴 때 어떤 버튼이 띄워질지를 설정할 수 있습니다.

- `onClickedContextMenuItem` 메서드는 이벤트 리스너 메서드로서, useEffect 내부에서 호출하고, 위와 같이 클린업 함수로 언마운트 시 리스너를 비활성화해줘야 합니다.

### 3-2. ContextMenu를 자체 개발해서 사용하는 경우

#### 1) ContextMenu 컴포넌트 개발

원하는 위치에 컴포넌트 파일을 새로 추가하시고 아래와 같이 작성합니다.

```tsx
import React from 'react';
import { ContextMenu, useCustomContextMenu } from '@fetoolkit/react';
import '../css/AppContextMenu.css';

const AppContextMenu = () => {
  const { buttonDatas, locate, onClickedContextMenuItem } =
    useCustomContextMenu();
  return (
    <ContextMenu.Grid x={locate.x} y={locate.y} className="context-menu">
      {buttonDatas.map((item) => {
        return (
          <ContextMenu.Item
            key={item.value}
            value={item.value}
            label={item.label}
            className="context-menu-item"
            textStyle={{
              className: 'context-menu-item-text',
            }}
            onClick={() => onClickedContextMenuItem(item.value)}
          />
        );
      })}
    </ContextMenu.Grid>
  );
};

export default AppContextMenu;
```

`ContextMenu.Grid`는 ContextMenu를 구성하는 그리드 컴포넌트로, 최상단에 와야 합니다. `ContextMenu.Item`은 각 버튼을 나타내는 컴포넌트입니다. 이때, 각 영역의 스타일은 `styles` 또는 `className` props를 사용하여 원하는 스타일을 선언하시면 됩니다.

#### 2) 컴포넌트 연결

개발한 컴포넌트를 프로젝트 최상단 `ContextMenuProvider` 컴포넌트에 연결합니다.

```tsx
// src/main.tsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextMenuProvider, FEToolkitProvider } from '@fetoolkit/react';
import App from './App.tsx';
import AppContextMenu from './components/AppContextMenu.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FEToolkitProvider>
      <ContextMenuProvider menuComponent={<AppContextMenu />}>
        <App />
      </ContextMenuProvider>
    </FEToolkitProvider>
  </StrictMode>,
);
```

#### 3) onContextMenu props에 클릭 이벤트 연결

> 상위 내용과 동일합니다.
