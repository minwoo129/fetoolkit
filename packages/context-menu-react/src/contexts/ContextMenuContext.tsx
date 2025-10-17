import React, { createContext, useMemo, type ReactNode } from 'react';
import '../css/provider.css';
import type { ContextMenuButtonDatas } from '../types';

type ContextMenuContextType = {
  appButtonDatas: ContextMenuButtonDatas;
};

const ContextMenuContext = createContext<ContextMenuContextType>({
  appButtonDatas: {},
});

interface ContextMenuProviderProps {
  buttonDatas: ContextMenuButtonDatas;
  children: ReactNode;
}

export const ContextMenuProvider = ({
  buttonDatas,
  children,
}: ContextMenuProviderProps) => {
  const appButtonDatas = useMemo(() => {
    return buttonDatas;
  }, [buttonDatas]);

  return (
    <ContextMenuContext.Provider value={{ appButtonDatas }}>
      {children}
    </ContextMenuContext.Provider>
  );
};

export default ContextMenuContext;
