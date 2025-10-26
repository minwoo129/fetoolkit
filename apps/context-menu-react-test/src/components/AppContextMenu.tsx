import {
  ContextMenu,
  useCustomContextMenu,
} from '@fetoolkit/context-menu-react';
import React from 'react';
import '../css/customcontextmenu.css';

const AppContextMenu = () => {
  const { location, buttonDatas, menuId } = useCustomContextMenu();
  return (
    <ContextMenu.Grid
      x={location.x}
      y={location.y}
      className="custom-context-menu"
      dataTestId={'app-context-menu'}
    >
      {buttonDatas.map((item) => (
        <ContextMenu.Item
          key={item.value}
          value={item.value}
          label={item.label}
          contextMenuItemId={menuId}
          textStyle={{
            className: 'context-menu-text',
          }}
          dataTestId={`app-context-menu-item-${item.value}`}
        />
      ))}
    </ContextMenu.Grid>
  );
};

export default AppContextMenu;
