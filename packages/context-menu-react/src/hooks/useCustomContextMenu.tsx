import { useContext, useMemo } from 'react';
import PageLayoutContext from '../contexts/PageLayoutContext';

export const useCustomContextMenu = () => {
  const context = useContext(PageLayoutContext);

  if (context == null) {
    throw new Error('PageLayoutContext not found');
  }

  const { location, buttonDatas, menuId } = context;

  return useMemo(
    () => ({
      location,
      buttonDatas,
      menuId,
    }),
    [location, buttonDatas, menuId],
  );
};
