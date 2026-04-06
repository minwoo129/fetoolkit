# React HOC(High-Order Component) 문서 예시(ENG)

> ### 참고
>
> - 아래 마크다운 블록 상에 적용되어 있는 상대경로 링크는 예시로 적용한 것으로 프롬프트 실행 시 읽지 말것(오류 발생 가능성 있음)

````md
# withContextMenu

English | [한국어](../ko/hoc_withcontextmenu.md)

- This is a HOC (Higher-Order Component) for adding context menu functionality to components.
- Using this HOC allows you to use context menu functionality on a per-page basis (required).

## Example

```tsx
import { withContextMenu } from '@fetoolkit/context-menu-react';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextMenuTestPage2 from './pages/ContextMenuTestPage2';
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Main />} />
    <Route
      path="/test-page-2"
      element={withContextMenu(<ContextMenuTestPage2 />, <AppContextMenu />)}
    />
  </Routes>
</BrowserRouter>;
```

## API(Props) Reference

### withContextMenu

| Name          | Type            | Required | Default | Description                                          |
| :------------ | :-------------- | :------- | :------ | :--------------------------------------------------- |
| children      | React.ReactNode | true     | -       | Child components to apply context menu functionality |
| menuComponent | React.ReactNode | false    | -       | Custom context menu component                        |
````
