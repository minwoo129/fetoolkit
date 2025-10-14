# MenuTemplate

English | [한국어](../ko/component_menutemplate.md)

- This component is used to create admin route menu templates.
- Provides structured layout including logo, menu navigation, and main content area.
- Supports both direct route links and dropdown menus for complex navigation structures.

> ### Notice
>
> This component is only available in React, therefore [react-router-dom](https://www.npmjs.com/package/react-router-dom) package install required.  
> It is difficult to use in Next.js, so please keep this in mind.

## Example

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

## API(Props) Reference

### AdminRouteMenuTemplate

| Name       | Type                   | Required | Default | Description                                          |
| :--------- | :--------------------- | :------- | :------ | :--------------------------------------------------- |
| logo       | React.ReactNode        | false    | 'Logo'  | Logo component or element to display in menu header  |
| menus      | FirstDepthMenuItem[]   | true     | -       | Array of menu items for navigation                   |
| pathName   | string                 | true     | -       | Current path name for active menu highlighting       |
| onClick    | (href: string) => void | true     | -       | Callback function executed when menu item is clicked |
| dataTestId | string                 | false    | -       | Element ID for test execution                        |
| children   | React.ReactNode        | true     | -       | Main content to display in content area              |

### Types

#### FirstDepthMenuItem

| Name  | Type                       | Required | Default | Description                                                        |
| :---- | :------------------------- | :------- | :------ | :----------------------------------------------------------------- |
| title | string                     | true     | -       | Display text of menu item                                          |
| type  | 'route-link' \| 'dropdown' | true     | -       | Menu item type - direct link or dropdown menu                      |
| href  | string                     | true\*   | -       | URL path for route-link type item (\*required for route-link type) |
| menus | MenuItemType[]             | true\*   | -       | Array of sub menu items (\*required for dropdown type)             |

#### MenuItemType

| Name  | Type   | Required | Default | Description                   |
| :---- | :----- | :------- | :------ | :---------------------------- |
| title | string | true     | -       | Display text of sub menu item |
| href  | string | true     | -       | URL path of sub menu item     |
