import { useContext, useMemo } from 'react';
import ContextMenuContext from '../contexts/ContextMenuContext';

export const useCustomContextMenu = () => {
  const context = useContext(ContextMenuContext);

  if (context == null) {
    throw new Error('ContextMenuContext not found');
  }

  const { buttonDatas, locate, onClickedContextMenuItem } = context;

  return useMemo(
    () => ({
      buttonDatas,
      locate,
      onClickedContextMenuItem,
    }),
    [buttonDatas, locate, onClickedContextMenuItem],
  );
};
