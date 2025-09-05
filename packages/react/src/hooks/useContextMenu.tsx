import { useCallback, useContext, useMemo } from 'react';
import type { ContextMenuItemType } from '../components';
import ContextMenuContext from '../contexts/ContextMenuContext';

type ContextMenuHandlerArgs<T extends HTMLElement> = {
  elementId: string | number | null;
  buttonDatas: ContextMenuItemType[];
  event: React.MouseEvent<T, MouseEvent>;
};

export const useContextMenu = () => {
  const context = useContext(ContextMenuContext);
  if (context == null) {
    throw new Error('ContextMenuContext is not found');
  }

  const { showContextMenu, lastClickedData } = context;

  const contextMenuHandler = useCallback(
    <T extends HTMLElement>(args: ContextMenuHandlerArgs<T>) => {
      const { elementId, buttonDatas, event } = args;
      event.preventDefault();
      const { clientX, clientY } = event;
      showContextMenu({
        elementId,
        buttonDatas,
        locate: {
          x: clientX.toString(),
          y: clientY.toString(),
        },
      });
    },
    [showContextMenu],
  );

  const onClickedContextMenuItem = useCallback(
    // eslint-disable-next-line no-unused-vars
    (callback: (data: typeof lastClickedData) => void) => {
      if (lastClickedData) {
        callback(lastClickedData);
      }

      return () => {};
    },
    [lastClickedData],
  );

  return useMemo(
    () => ({
      contextMenuHandler,
      onClickedContextMenuItem,
    }),
    [contextMenuHandler, onClickedContextMenuItem],
  );
};
