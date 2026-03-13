import { useContext } from 'react';
import ContextMenuContext from '../contexts/ContextMenuContext';

/**
 * @deprecated
 */
export const useCustomContextMenu = () => {
  const context = useContext(ContextMenuContext);

  if (context == null) {
    throw new Error('ContextMenuContext not found');
  }

  const { buttonDatas, locate, onClickedContextMenuItem } = context;

  return {
    buttonDatas,
    locate,
    onClickedContextMenuItem,
  };
};
