import React, { type AriaAttributes, type CSSProperties } from 'react';
import '../css/contextmenu.css';

interface ContextMenuGridProps extends AriaAttributes {
  x: string;
  y: string;
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
  testId?: string;
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
  onClick?: () => void;
}

export type ContextMenuItemType = {
  value: string;
  label: string;
};

const Grid = ({
  x,
  y,
  style,
  children,
  testId,
  className,
  ...rest
}: ContextMenuGridProps) => {
  return (
    <div
      className={`context-menu-wrapper ${className}`}
      style={{ left: `${x}px`, top: `${y}px`, ...style }}
      {...rest}
      data-testid={testId}
    >
      <ul className="context-menu-menu">{children}</ul>
    </div>
  );
};

const Item = ({
  value,
  label,
  style,
  onClick,
  className,
  textStyle,
  ...rest
}: ContextMenuGridItemProps) => {
  return (
    <li
      className={`context-menu-item ${className}`}
      value={value}
      style={style}
      onClick={onClick}
      {...rest}
    >
      <span
        className={`context-menu-span ${textStyle?.className ?? ''}`}
        style={textStyle?.style}
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
