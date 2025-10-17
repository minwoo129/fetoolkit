import React from 'react';
import type { ContextMenuItemType } from '../types';
import { ContextMenu } from './ContextMenu';

type DefaultContextMenuProps = {
  x: string;
  y: string;
  items: ContextMenuItemType[];
  dataTestId?: string;
  contextMenuId: string;
};

export const DefaultContextMenu = ({
  x,
  y,
  items,
  dataTestId,
  contextMenuId,
}: DefaultContextMenuProps) => {
  return (
    <ContextMenu.Grid
      x={x}
      y={y}
      dataTestId={dataTestId ? `${dataTestId}-${contextMenuId}` : undefined}
    >
      {items.map((item) => {
        return (
          <ContextMenu.Item
            key={item.value}
            value={item.value}
            label={item.label}
            contextMenuItemId={contextMenuId}
            dataTestId={
              dataTestId
                ? `${dataTestId}-${contextMenuId}-${item.value}`
                : undefined
            }
          />
        );
      })}
    </ContextMenu.Grid>
  );
};
