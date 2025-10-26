import React from 'react';
import '../css/provider.css';
import { ContextMenuPortal } from '../helpler/Portal';
import type { ContextMenuItemType } from '../types';
import { DefaultContextMenu } from './DefaultContextMenu';

interface ContextMenuModalProps {
  visible: boolean;
  onClickClose: () => void;
  menuComponent: React.ReactNode;
  location: { x: string; y: string };
  buttonDatas: ContextMenuItemType[];
  menuId: string;
}

interface ContextMenuModalWrapperProps {
  onClickClose: () => void;
  children: React.ReactNode;
}

export const ContextMenuModal = ({
  visible,
  onClickClose,
  menuComponent,
  location,
  buttonDatas,
  menuId,
}: ContextMenuModalProps) => {
  if (!visible) return null;

  if (menuComponent) {
    return (
      <ContextMenuModalWrapper onClickClose={onClickClose}>
        {menuComponent}
      </ContextMenuModalWrapper>
    );
  }

  return (
    <ContextMenuModalWrapper onClickClose={onClickClose}>
      <DefaultContextMenu
        x={location.x}
        y={location.y}
        items={buttonDatas}
        dataTestId="default-context-menu"
        contextMenuId={menuId}
      />
    </ContextMenuModalWrapper>
  );
};

const ContextMenuModalWrapper = ({
  children,
  onClickClose,
}: ContextMenuModalWrapperProps) => {
  return (
    <ContextMenuPortal>
      <div className="context-menu-provider">
        <div className="context-menu-provider-wrapper" onClick={onClickClose}>
          {children}
        </div>
      </div>
    </ContextMenuPortal>
  );
};
