import { ContextMenu, useCustomContextMenu } from '@fetoolkit/react/src';
import '../css/AppContextMenu.css';

const AppContextMenu = () => {
  const { buttonDatas, locate, onClickedContextMenuItem } =
    useCustomContextMenu();
  return (
    <ContextMenu.Grid
      x={locate.x}
      y={locate.y}
      className="context-menu"
      testId="context-menu-custom-test"
    >
      {buttonDatas.map((item) => {
        return (
          <ContextMenu.Item
            key={item.value}
            value={item.value}
            label={item.label}
            className="context-menu-item"
            textStyle={{
              className: 'context-menu-item-text',
            }}
            onClick={() => onClickedContextMenuItem(item.value)}
          />
        );
      })}
    </ContextMenu.Grid>
  );
};

export default AppContextMenu;
