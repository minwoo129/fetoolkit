import React from 'react';
import { ContextMenu, type ContextMenuItemType } from './ContextMenu';

type DefaultContextMenuProps = {
  x: string;
  y: string;
  items: ContextMenuItemType[];
  // eslint-disable-next-line no-unused-vars
  onClick: (value: string) => void;
  testId?: string;
};

export const DefaultContextMenu = ({
  x,
  y,
  items,
  onClick,
  testId,
}: DefaultContextMenuProps) => {
  return (
    <ContextMenu.Grid x={x} y={y} testId={testId}>
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
