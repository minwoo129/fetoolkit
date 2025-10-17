import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import PageLayoutContext from '../contexts/PageLayoutContext';

type LastClickedDataType = {
  menuId: string;
  value: string;
};

export const useContextMenu = () => {
  const context = useContext(PageLayoutContext);
  const [lastClickedData, setLastClickedData] =
    useState<LastClickedDataType | null>(null);

  if (context == null) {
    throw new Error('PageLayoutContext not found');
  }

  // 메뉴 클릭 리스너 설정
  useEffect(() => {
    const menuBtnClickListener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const menuId = target.getAttribute('context-menu-item-id');

      if (!menuId) return;
      event.preventDefault();
      const value = target.getAttribute('context-menu-item-value');
      if (!value) return;

      setLastClickedData({
        menuId,
        value,
      });
    };

    document.addEventListener('click', menuBtnClickListener);

    return () => {
      document.removeEventListener('click', menuBtnClickListener);
    };
  }, []);

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
      onClickedContextMenuItem,
    }),
    [onClickedContextMenuItem],
  );
};
