import React from 'react';
import type { ContextMenuItemType } from '../types';
import { ContextMenu } from './ContextMenu';

type DefaultContextMenuProps = {
  x: string;
  y: string;
  items: ContextMenuItemType[];
  // eslint-disable-next-line no-unused-vars
  onClick: (value: string) => void;
  dataTestId?: string;
};

export const DefaultContextMenu = ({
  x,
  y,
  items,
  onClick,
  dataTestId,
}: DefaultContextMenuProps) => {
  return (
    <ContextMenu.Grid x={x} y={y} dataTestId={dataTestId}>
      {items.map((item) => {
        return (
          <ContextMenu.Item
            key={item.value}
            value={item.value}
            label={item.label}
            onClick={() => onClick(item.value)}
          />
        );
      })}
    </ContextMenu.Grid>
  );
};
