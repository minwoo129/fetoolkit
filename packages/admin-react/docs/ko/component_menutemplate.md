# MenuTemplate

[English](../en/component_menutemplate.md) | 한국어

- 관리자 라우트 메뉴 템플릿을 생성할 때 사용하는 컴포넌트입니다.
- 로고, 메뉴 네비게이션, 메인 콘텐츠 영역을 포함한 구조화된 레이아웃을 제공합니다.
- 복잡한 네비게이션 구조를 위한 직접 라우트 링크와 드롭다운 메뉴를 모두 지원합니다.

> ### 알려드립니다
>
> 이 컴포넌트는 React 환경에서만 사용 가능하며 [react-router-dom](https://www.npmjs.com/package/react-router-dom) 설치가 필요합니다.  
> Next.js에서는 사용이 어려우니 이점 참고 부탁드립니다.

## 기본 사용 예시

```tsx
import { AdminRouteMenuTemplate } from '@fetoolkit/admin-react';
import React, { useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import TestPage1 from './pages/TestPage1';
import TestPage2 from './pages/TestPage2';
import TestPage3 from './pages/TestPage3';
import TestPage4 from './pages/TestPage4';

const AppMenuTemplate = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = useCallback(
    (href: string) => {
      navigate(href);
    },
    [navigate],
  );

  return (
    <AdminRouteMenuTemplate
      onClick={handleClick}
      pathName={location.pathname}
      menus={[
        {
          title: 'Test1',
          type: 'dropdown',
          menus: [
            { href: '/test-page-2', title: 'Test2' },
            { href: '/test-page-3', title: 'Test3' },
          ],
        },
        {
          title: 'Test4',
          type: 'route-link',
          href: '/test-page-4',
        },
      ]}
    >
      <Outlet />
    </AdminRouteMenuTemplate>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppMenuTemplate />}>
          <Route path="/" element={<Main />} />
          <Route path="/test-page-1" element={<TestPage1 />} />
          <Route path="/test-page-2" element={<TestPage2 />} />
          <Route path="/test-page-3" element={<TestPage3 />} />
          <Route path="/test-page-4" element={<TestPage4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

## API(Props) 설명

### AdminRouteMenuTemplate

| Name       | Type                   | Required | Default | Description                                |
| :--------- | :--------------------- | :------- | :------ | :----------------------------------------- |
| logo       | React.ReactNode        | false    | 'Logo'  | 메뉴 헤더에 표시할 로고 컴포넌트 또는 요소 |
| menus      | FirstDepthMenuItem[]   | true     | -       | 네비게이션을 위한 메뉴 아이템 배열         |
| pathName   | string                 | true     | -       | 활성 메뉴 하이라이팅을 위한 현재 경로명    |
| onClick    | (href: string) => void | true     | -       | 메뉴 아이템 클릭 시 실행되는 콜백 함수     |
| dataTestId | string                 | false    | -       | 테스트 실행 시 선언할 elementId            |
| children   | React.ReactNode        | true     | -       | 콘텐츠 영역에 표시될 메인 콘텐츠           |

### Types

#### FirstDepthMenuItem

| Name  | Type                       | Required | Default | Description                                                  |
| :---- | :------------------------- | :------- | :------ | :----------------------------------------------------------- |
| title | string                     | true     | -       | 메뉴 아이템의 표시 텍스트                                    |
| type  | 'route-link' \| 'dropdown' | true     | -       | 메뉴 아이템 타입 - 직접 링크 또는 드롭다운 메뉴              |
| href  | string                     | true\*   | -       | route-link 타입 아이템의 URL 경로 (\*route-link 타입에 필수) |
| menus | MenuItemType[]             | true\*   | -       | 하위 메뉴 아이템 배열 (\*dropdown 타입에 필수)               |

#### MenuItemType

| Name  | Type   | Required | Default | Description                    |
| :---- | :----- | :------- | :------ | :----------------------------- |
| title | string | true     | -       | 하위 메뉴 아이템의 표시 텍스트 |
| href  | string | true     | -       | 하위 메뉴 아이템의 URL 경로    |
