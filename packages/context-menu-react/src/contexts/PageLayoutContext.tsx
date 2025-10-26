import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { ContextMenuModal } from '../components/ContextMenuModal';
import '../css/provider.css';
import type { ContextMenuItemType } from '../types';
import ContextMenuContext from './ContextMenuContext';

type PageLayoutContextType = {
  location: { x: string; y: string };
  buttonDatas: ContextMenuItemType[];
  menuId: string;
};

interface PageLayoutContextProviderProps {
  children: ReactNode;
  menuComponent?: ReactNode;
}

const PageLayoutContext = createContext<PageLayoutContextType>({
  location: { x: '0', y: '0' },
  buttonDatas: [],
  menuId: '',
});

export const PageLayoutContextProvider = ({
  children,
  menuComponent,
}: PageLayoutContextProviderProps) => {
  const { appButtonDatas } = useContext(ContextMenuContext);
  const [visible, setVisible] = useState(false);
  const [buttonDatas, setButtonDatas] = useState<ContextMenuItemType[]>([]);
  const [location, setLocation] = useState<{ x: string; y: string }>({
    x: '0',
    y: '0',
  });
  const [menuId, setMenuId] = useState<string>('');

  useEffect(() => {
    const contextMenuListener = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const contextMenuId = target.getAttribute('context-menu-id');

      if (!contextMenuId) return;

      const buttonDatas = appButtonDatas[contextMenuId];
      if (!buttonDatas) return;

      event.preventDefault();
      const { clientX, clientY } = event;
      setMenuId(contextMenuId);
      setLocation({ x: clientX.toString(), y: clientY.toString() });
      setButtonDatas(buttonDatas);
      setVisible(true);
    };

    document.addEventListener('contextmenu', contextMenuListener);
    return () => {
      document.removeEventListener('contextmenu', contextMenuListener);
    };
  }, [appButtonDatas]);

  return (
    <PageLayoutContext.Provider value={{ location, buttonDatas, menuId }}>
      {children}
      <ContextMenuModal
        visible={visible}
        onClickClose={() => setVisible(false)}
        menuComponent={menuComponent}
        location={location}
        buttonDatas={buttonDatas}
        menuId={menuId}
      />
    </PageLayoutContext.Provider>
  );
};

export default PageLayoutContext;
