import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import ContextMenuContext from '../contexts/ContextMenuContext';

type LastClickedDataType = {
  menuId: string;
  value: string;
};

export const useContextMenu = () => {
  const context = useContext(ContextMenuContext);
  const [lastClickedData, setLastClickedData] =
    useState<LastClickedDataType | null>(null);

  if (context == null) {
    throw new Error('PageLayoutContext is not found');
  }

  const { appButtonDatas } = context;

  useEffect(() => {
    const menuBtnClickListener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const menuId = target.getAttribute('context-menu-item-id');

      if (!menuId) return;
      const value = target.getAttribute('value');
      if (!value) return;

      setLastClickedData({
        menuId,
        value,
      });

      event.preventDefault();
    };

    document.addEventListener('click', menuBtnClickListener);

    return () => {
      document.removeEventListener('click', menuBtnClickListener);
    };
  }, [appButtonDatas]);

  const onClickedContextMenuItem = useCallback(
    // eslint-disable-next-line no-unused-vars
    (callback: (data: LastClickedDataType) => void) => {
      if (lastClickedData) {
        callback(lastClickedData);
      }

      return () => {};
    },
    [lastClickedData],
  );

  return useMemo(
    () => ({
      onClickedContextMenuItem,
    }),
    [onClickedContextMenuItem],
  );
};
