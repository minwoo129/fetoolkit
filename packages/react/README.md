# FEToolkit/React

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/README_kr.md)

FEToolkit is a toolkit library that provides useful functions for Frontend development. The library is divided according to frameworks such as React and Vue, and functions that can be used in common regardless of the framework will be distributed as separate libraries.
This package is only available for React.

> ### Notice
>
> - We have conducted a major update through V2 version update.
>   - ContextMenu functionality has been moved to [`@fetoolkit/context-menu-react`](../context-menu-react/). (Related features provided by this package have been deprecated.)
>   - All utility functions provided by this package have been deprecated.
>     - userAgent functionality has been moved to `@fetoolkit/user-agent`.
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
