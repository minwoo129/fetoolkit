import { AdminRouteMenuTemplate } from '@fetoolkit/admin-react';
import React, { useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

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
        {
          title: 'E2E Test',
          type: 'dropdown',
          menus: [
            { href: '/input-test', title: 'Input Test' },
            { href: '/checkbox-test', title: 'Checkbox Test' },
            { href: '/switch-test', title: 'Switch Test' },
            { href: '/table-test', title: 'Table Test' },
          ],
        },
      ]}
    >
      <Outlet />
    </AdminRouteMenuTemplate>
  );
};

export default AppMenuTemplate;
