# withContextMenu

[English](../en/hoc_withcontextmenu.md) | 한국어

- 컴포넌트에 컨텍스트 메뉴 기능을 추가하기 위한 HOC(Higher-Order Component)입니다.
- 이 HOC를 사용하면 각 페이지 단위로 컨텍스트 메뉴 기능을 사용할 수 있습니다.(필수)

## 기본 사용 예시

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

## API(Props) 설명

### withContextMenu

| Name          | Type            | Required | Default | Description                                 |
| :------------ | :-------------- | :------- | :------ | :------------------------------------------ |
| children      | React.ReactNode | true     | -       | 컨텍스트 메뉴 기능을 적용할 자식 컴포넌트들 |
| menuComponent | React.ReactNode | false    | -       | 사용자 정의 컨텍스트 메뉴 컴포넌트          |
