import React, { type AriaAttributes, type CSSProperties } from 'react';
import '../css/contextmenu.css';

interface ContextMenuGridProps extends AriaAttributes {
  x: string;
  y: string;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
  dataTestId?: string;
}

interface ContextMenuGridItemProps extends AriaAttributes {
  value: string;
  label: string;
  style?: CSSProperties;
  className?: string;
  textStyle?: {
    className?: string;
    style?: CSSProperties;
  };
  dataTestId?: string;
  contextMenuItemId: string;
}

// eslint-disable-next-line react-refresh/only-export-components
const Grid = ({
  x,
  y,
  style,
  children,
  dataTestId,
  className,
  ...rest
}: ContextMenuGridProps) => {
  return (
    <div
      className={`context-menu-wrapper ${className}`}
      style={{ left: `${x}px`, top: `${y}px`, ...style }}
      {...rest}
      data-testid={dataTestId}
    >
      <ul className="context-menu-menu">{children}</ul>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
const Item = ({
  value,
  label,
  style,
  className,
  textStyle,
  dataTestId,
  contextMenuItemId,
  ...rest
}: ContextMenuGridItemProps) => {
  return (
    <li
      className={`context-menu-item ${className}`}
      value={value}
      style={style}
      data-testid={dataTestId}
      context-menu-item-id={contextMenuItemId}
      context-menu-item-value={value}
      {...rest}
    >
      <span
        className={`context-menu-span ${textStyle?.className ?? ''}`}
        style={textStyle?.style}
        context-menu-item-id={contextMenuItemId}
        context-menu-item-value={value}
      >
        {label}
      </span>
    </li>
  );
};

export const ContextMenu = {
  Grid,
  Item,
};
