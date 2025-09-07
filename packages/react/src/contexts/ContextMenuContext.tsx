import type { ReactNode } from 'react';
import React, { createContext, useCallback, useMemo, useState } from 'react';
import {
  DefaultContextMenu,
  type ContextMenuItemType,
} from '../components/ContextMenu';

// CSS를 JavaScript에 인라인으로 포함
const contextMenuStyles = `
.context-menu-provider {
  width: 100vw;
  height: 100vh;
}

.context-menu-provider-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.context-menu-wrapper {
  background-color: #ffffff;
  border-radius: 10px;
  position: absolute;
  box-shadow: 0 6px 17px rgba(119, 119, 119, 0.2);
  padding: 4px;
}

.context-menu-menu {
  padding: 1px 2px;
  margin: 0;
}

.context-menu-item {
  list-style: none;
  font-size: 22px;
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  min-width: 150px;
  padding: 5px 0px;
  border-radius: 5px;
}

.context-menu-item:hover {
  background-color: #e2e0e0;
}

.context-menu-span {
  font-size: medium;
  margin-left: 8px;
  color: #343434;
}

@media (prefers-color-scheme: dark) {
  .context-menu-wrapper {
    background-color: #1e1d1d;
    box-shadow: 0 6px 17px #ffffff00;
  }

  .context-menu-item:hover {
    background-color: #ffffff80;
  }

  .context-menu-span {
    color: #e2e2e2;
  }
}
`;

// CSS를 DOM에 주입하는 함수
const injectStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'fetoolkit-context-menu-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = contextMenuStyles;
      document.head.appendChild(style);
    }
  }
};

// 컴포넌트가 마운트될 때 스타일 주입
if (typeof window !== 'undefined') {
  injectStyles();
}

type LastClickedDataType = {
  elementId: string | number | null;
  value: string;
};

type ContextMenuContextType = {
  // eslint-disable-next-line no-unused-vars
  showContextMenu: (props: {
    locate: { x: string; y: string };
    buttonDatas: ContextMenuItemType[];
    elementId: string | number | null;
  }) => void;
  lastClickedData: LastClickedDataType | null;
  locate: { x: string; y: string };
  buttonDatas: ContextMenuItemType[];
  // eslint-disable-next-line no-unused-vars
  onClickedContextMenuItem: (value: string) => void;
};

const ContextMenuContext = createContext<ContextMenuContextType>({
  showContextMenu: () => {},
  lastClickedData: null,
  locate: { x: '0', y: '0' },
  buttonDatas: [],
  onClickedContextMenuItem: () => {},
});

interface ContextMenuProviderProps {
  menuComponent?: ReactNode;
  children: ReactNode;
}

export const ContextMenuProvider = ({
  menuComponent,
  children,
}: ContextMenuProviderProps) => {
  const [visible, setVisible] = useState(false);
  const [locate, setLocate] = useState<{ x: string; y: string }>({
    x: '0',
    y: '0',
  });
  const [elementId, setElementId] = useState<string | number | null>(null);
  const [buttonDatas, setButtonDatas] = useState<ContextMenuItemType[]>([]);
  const [lastClickedData, setLastClickedData] =
    useState<LastClickedDataType | null>(null);

  const showContextMenu = useCallback(
    ({
      locate,
      buttonDatas,
      elementId,
    }: {
      elementId: string | number | null;
      buttonDatas: ContextMenuItemType[];
      locate: { x: string; y: string };
    }) => {
      setLocate(locate);
      setElementId(elementId);
      setButtonDatas(buttonDatas);
      setVisible(true);
    },
    [],
  );

  const onClickedContextMenuItem = useCallback(
    (value: string) => {
      setLastClickedData({
        elementId,
        value,
      });
    },
    [elementId],
  );

  const context: ContextMenuContextType = useMemo(
    () => ({
      showContextMenu,
      lastClickedData,
      locate,
      buttonDatas,
      onClickedContextMenuItem,
    }),
    [
      showContextMenu,
      lastClickedData,
      locate,
      buttonDatas,
      onClickedContextMenuItem,
    ],
  );

  return (
    <ContextMenuContext.Provider value={context}>
      <div className="context-menu-provider">
        {children}
        {visible && (
          <div
            className="context-menu-provider-wrapper"
            onClick={() => setVisible(!visible)}
          >
            {menuComponent ?? (
              <DefaultContextMenu
                x={locate.x}
                y={locate.y}
                items={buttonDatas}
                onClick={onClickedContextMenuItem}
                testId="context-menu-default-test"
              />
            )}
          </div>
        )}
      </div>
    </ContextMenuContext.Provider>
  );
};

export default ContextMenuContext;
