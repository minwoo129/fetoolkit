# FEToolkit/React

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](https://github.com/minwoo129/fetoolkit/blob/master/packages/react/README_kr.md)

FEToolkit is a toolkit library that provides useful functions for Frontend development. The library is divided according to frameworks such as React and Vue, and functions that can be used in common regardless of the framework will be distributed as separate libraries.

## Dependencies

|  Framework   | enabled | version |
| :----------: | :-----: | :-----: |
|    React     |   ⭕    |  >=19   |
|   Next.js    |   ❌    |         |
| React Native |   ❌    |         |

## Getting Started

### 1. Installation

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

### 2. Connect Provider

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

## Features

### 3-1. features

| Name        | Description                                  |                   Docs                   |
| :---------- | :------------------------------------------- | :--------------------------------------: |
| ContextMenu | A Component to create an custom context menu |   [Document](./docs/en/contextmenu.md)   |
| Validation  | Validation check Features                    | [Document](./docs/en/validationcheck.md) |

### 3-2. Components

| Name                | Description                                                                                             |                          Docs                          |
| :------------------ | :------------------------------------------------------------------------------------------------------ | :----------------------------------------------------: |
| ErrorBoundary       | A Component which is useful to controll an error declaratively<br>(with HOC)                            |    [Document](./docs/en/component_errorboundary.md)    |
| Flatlist            | A Component which is useful to render flat list.<br>(p.s. if you're RN developer, you will understand.) |      [Document](./docs/en/component_flatlist.md)       |
| InfiniteScroll      | A Component to create an infinite scrolling.                                                            |   [Document](./docs/en/component_infinitescroll.md)    |
| ContextMenu         | A Component to create an custom context menu                                                            |     [Document](./docs/en/component_contextmenu.md)     |
| ContextMenuProvider | A Provider Component to create an custom context menu                                                   | [Document](./docs/en/component_contextmenuprovider.md) |

### 3-3. Hooks

| Name                  | Description                                                                     |                        Docs                         |
| :-------------------- | :------------------------------------------------------------------------------ | :-------------------------------------------------: |
| useAsyncLoading       | A Hook to manage the loading status of async <br>process.                       |    [Document](./docs/en/hook_useasyncloading.md)    |
| useCountdown          | A Hook to implement countdown feature.                                          |     [Document](./docs/en/hook_usecountdown.md)      |
| useImageLazyLoading   | A Hook for implementing Image Lazy loading.                                     |  [Document](./docs/en/hook_useimagelazyloading.md)  |
| useInput              | A Hook to manage input value.                                                   |       [Document](./docs/en/hook_useinput.md)        |
| useLocalStorage       | A Hook to usage of LocalStorage.                                                |    [Document](./docs/en/hook_uselocalstorage.md)    |
| useResizeElement      | A Hook for tracking the size of particular HTML element                         |   [Document](./docs/en/hook_useresizeelement.md)    |
| useResizeWindow       | A Hook for tracking the viewport size.                                          |    [Document](./docs/en/hook_useresizewindow.md)    |
| useScroll             | A Hook for tracking the location of scrolling                                   |       [Document](./docs/en/hook_usescroll.md)       |
| useSessionStorage     | A Hook to usage of SessionStorage.                                              |   [Document](./docs/en/hook_usesessionstorage.md)   |
| useToggle             | A Hook to controll input value(toggle).                                         |       [Document](./docs/en/hook_usetoggle.md)       |
| useUserAgent          | A Hook that returns UserAgent data from browser. <br>(cached data)              |     [Document](./docs/en/hook_useuseragent.md)      |
| useValidationCheck    | A Hook for validation check                                                     |  [Document](./docs/en/hook_usevalidationcheck.md)   |
| useValidateCheckInput | A Hook that manage input value with validation check.                           | [Document](./docs/en/hook_usevalidatecheckinput.md) |
| useContextMenu        | A Hook for controll of ContextMenu feature.                                     |    [Document](./docs/en/hook_usecontextmenu.md)     |
| useCustomContextMenu  | A Hook than return necessary datas to create <br> custom ContextMenu Component. | [Document](./docs/en/hook_usecustomcontextmenu.md)  |

### 3-4. Utility functions

> ### 안내
>
> An utility functions except `getUserAgent` was moved to [`@fetoolkit/utils`](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils) library.

| Name                                                                | Description                                                                                       |                            Docs                            |
| :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------ | :--------------------------------------------------------: |
| getUserAgent                                                        | A function that return UserAgent data from browser.<br>(no-cached data)                           |        [Document](./docs/en/utils_getuseragent.md)         |
| ~~formatPhoneNumber~~<br><span style="color: red">Deprecated</span> | ~~Separates the given phone number by hyphen(-).~~<br> <span style="color: red">Deprecated</span> | ~~Document~~<br><span style="color: red">Deprecated</span> |
| ~~commaizeNumber~~<br><span style="color: red">Deprecated</span>    | ~~Separates the given value by comma.~~<br> <span style="color: red">Deprecated</span>            | ~~Document~~<br><span style="color: red">Deprecated</span> |
| ~~decommaizeNumber~~<br><span style="color: red">Deprecated</span>  | ~~Removed commas from commaized value.~~<br> <span style="color: red">Deprecated</span>           | ~~Document~~<br><span style="color: red">Deprecated</span> |
| ~~maskName~~<br><span style="color: red">Deprecated</span>          | ~~Masks the given name.~~<br> <span style="color: red">Deprecated</span>                          | ~~Document~~<br><span style="color: red">Deprecated</span> |
| ~~maskPhoneNumber~~<br><span style="color: red">Deprecated</span>   | ~~Masks the given phone number.~~<br> <span style="color: red">Deprecated</span>                  | ~~Document~~<br><span style="color: red">Deprecated</span> |
| ~~at~~<br><span style="color: red">Deprecated</span>                | ~~Return element in a particular index in an array.<br>(include negative index like Python)~~     | ~~Document~~<br><span style="color: red">Deprecated</span> |
| ~~first~~<br><span style="color: red">Deprecated</span>             | ~~Return first element of array.~~<br> <span style="color: red">Deprecated</span>                 | ~~Document~~<br><span style="color: red">Deprecated</span> |
| ~~last~~<br><span style="color: red">Deprecated</span>              | ~~Return last element of array.~~ <br> <span style="color: red">Deprecated</span>                 | ~~Document~~<br><span style="color: red">Deprecated</span> |
