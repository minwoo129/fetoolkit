# FEToolkit/ContextMenu-React

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](./README_kr.md)

This project is a package that provides ContextMenu functionality for React-based projects. The ContextMenu features that were previously provided by the "@fetoolkit/react" project have been separated into a separate package.  
The functionality provided by this package differs significantly from the ContextMenu provided by the previous "@fetoolkit/react" package. Therefore, the codebase of v1 cannot be used anymore.
Previously, you had to separately declare `onContextMenu` events on HTML tags and declare button configurations each time, but from this version, usability has been improved so that when an ID is declared on an HTML tag, the menu configuration declared according to that ID is exposed in that area.

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

#### 2-1-1. Additional Required Packages

- npm
  ```
  npm i classnames
  ```
- yarn
  ```
  yarn add classnames
  ```
- pnpm
  ```
  pnpm add classnames
  ```

### 2-2. Add Root Element to index.html (Very Important!!!)

Add the following element below the `<div>` tag with id `root` in the `public/index.html` file.

> #### Note
>
> For Vite-based React projects, the `index.html` file is located in the `<project root>` directory, not in the `public` folder.  
> The location may vary depending on the bundler you are using.

```html
<body>
  <div id="root"></div>
  <!-- Copy this exactly -->
  <div id="fetoolkit-context-menu"></div>
</body>
```

### 2-3. Configure ContextMenu Data

Declare ContextMenu button configurations for each ID.

> This method distinguishes menu configurations by ID and declares the corresponding ID on the desired HTML tag.

```tsx
// route(ex): ./src/constants/contextMenu.tsx
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

### 2-4. Connect Provider

Connect the Provider component and the written ContextMenu data object at the top level of the project.

```tsx
// route(ex): ./src/main.tsx
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

## 3. Usage

### 3-1. Connect ContextMenu HOC

Connect the `withContextMenu` HOC (High-Order Component) to the page where you want to expose the ContextMenu.

> - Connect the page component as the first argument.
> - You can also expose your own developed ContextMenu through the second argument.

```tsx
// route(ex): ./src/App.tsx
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

### 3-2. Attach an ID to an HTML tag

Connect the ID of the pre-written ContextMenu data object to the desired HTML tag within the page. (When entering the ID, it must be applied in the `context-menu-id` format).

> - If different IDs are declared for each tag, different menu configurations will be exposed according to each ID.

```tsx
<div className="test-element" context-menu-id="test-menu-3">
  Test Element3
</div>
```

### 3-3. add Listener in Component

Import the `useContextMenu` hook within the page component to connect the ContextMenu click event listener.

```tsx
import { useContextMenu } from '@fetoolkit/context-menu-react';
import React, { useEffect, useState } from 'react';
import '../css/testPage1.css';

const ContextMenuTestPage1 = () => {
  // here
  const { onClickedContextMenuItem } = useContextMenu();

  // here
  useEffect(() => {
    const unsubscribe = onClickedContextMenuItem((data) => {
      // Write individual logic
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

## 4. (Additional) Custom ContextMenu Connection

> ### Notice
>
> Currently, this feature is in a state where style application is difficult due to technical issues. There may be some technically unstable parts, so we will provide related documentation once the feature update is complete.  
> We will do our best to provide an updated version as soon as possible.

You can connect ContextMenu components with your desired style using the provided components and hooks.

## 5. Features

### 5-1. Components

| Name                | Description                                      |                          Docs                          |
| :------------------ | :----------------------------------------------- | :----------------------------------------------------: |
| ContextMenuProvider | Provider component for ContextMenu functionality | [Document](./docs/en/component_contextmenuprovider.md) |

### 5-2. HOC (High-Order Component)

| Name            | Description                                           |                     Docs                     |
| :-------------- | :---------------------------------------------------- | :------------------------------------------: |
| withContextMenu | HOC for connecting ContextMenu functionality per page | [Document](./docs/en/hoc_withcontextmenu.md) |

### 5-3. Hook

| Name           | Description                        |                     Docs                     |
| :------------- | :--------------------------------- | :------------------------------------------: |
| useContextMenu | Hook for ContextMenu functionality | [Document](./docs/en/hook_usecontextmenu.md) |

### 5-4. Type

| Name                   | Description                                                    |                         Docs                         |
| :--------------------- | :------------------------------------------------------------- | :--------------------------------------------------: |
| ContextMenuButtonDatas | Type for ContextMenu data object to be declared globally       | [Document](./docs/en/type_contextmenubuttontatas.md) |
| ContextMenuItemType    | Data type for each button                                      |  [Document](./docs/en/type_contextmenuitemtype.md)   |
| LastClickedDataType    | Information about the last event where a button click occurred |  [Document](./docs/en/type_lastclickeddatatype.md)   |
