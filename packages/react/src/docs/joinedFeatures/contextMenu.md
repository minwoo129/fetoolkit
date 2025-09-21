# ContextMenu

English | [한국어](./contextMenu_kr.md)

- A feature used to create custom ContextMenu instead of browser's built-in ContextMenu in React.
- You can use the provided ContextMenu component or create a custom component.
  - When creating and using a custom component, we provide components and custom hooks for data connection, so you can develop using these.

## 1. Features

### 1-1. [ContextMenu(Component)](../components/ContextMenu.md)

### 1-2. [ContextMenuProvider(Component)](../components/ContextMenuProvider.md)

### 1-3. [useContextMenu(Hook)](../hooks/useContextMenu.md)

### 1-4. [useCustomContextMenu(Hook)](../hooks/useCustomContextMenu.md)

## 2. Getting Started

### 2-1. ContextMenuProvider Component Setup

Based on a React project, you can connect it to the `main.tsx` file as shown below.

- Must be declared under the `FEToolkitProvider` component.

```tsx
// Basic example
// src/main.tsx
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ContextMenuProvider, FEToolkitProvider } from '@fetoolkit/react';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FEToolkitProvider>
      {/* Here */}
      <ContextMenuProvider>
        <App />
      </ContextMenuProvider>
    </FEToolkitProvider>
  </StrictMode>,
);
```

## 3. Instructions

### 3-1. Using the provided ContextMenu component

#### 1) Connect click event to onContextMenu props

React's HTML Element has a props called `onContextMenu`.
Using this props, you can design the mouse right-click event for that element.  
When using, import the `useContextMenu` Hook and use the `onContextMenu` props on the element where you want to display the ContextMenu as shown in the example below.

```tsx
// Example page
import React, { useEffect, useMemo, useState } from 'react';
import { useContextMenu } from '@fetoolkit/react';

const ContextMenuTestPage = () => {
  const { contextMenuHandler, onClickedContextMenuItem } = useContextMenu(); // Here

  useEffect(() => {
    // Here
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
              // Here
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

As shown above, you can detect which button was clicked in the ContextMenu using the `onClickedContextMenuItem` method of the `useContextMenu` Hook. And you can set which buttons to display when the ContextMenu opens due to a right-click on that element using the `contextMenuHandler` method.

- The `onClickedContextMenuItem` method is an event listener method, so it should be called inside useEffect and the listener should be deactivated on unmount with a cleanup function as shown above.

### 3-2. When developing and using ContextMenu yourself

#### 1) ContextMenu Component Development

Add a new component file in the desired location and write it as follows.

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

`ContextMenu.Grid` is a grid component that constitutes the ContextMenu and must be at the top. `ContextMenu.Item` is a component that represents each button. At this time, you can declare the desired style for each area using `styles` or `className` props.

#### 2) Component Connection

Connect the developed component to the top-level `ContextMenuProvider` component of the project.

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

#### 3) Connect click event to onContextMenu props

> Same as above content.
