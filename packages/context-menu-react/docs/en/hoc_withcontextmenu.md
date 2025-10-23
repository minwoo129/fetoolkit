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
