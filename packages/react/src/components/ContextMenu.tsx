import type { AriaAttributes, CSSProperties } from 'react';
import React from 'react';

// CSS를 JavaScript에 인라인으로 포함
const contextMenuStyles = `
.context-menu-provider {
  width: 100vw;
  height: 100vh;
}

.context-menu-provider-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.context-menu-wrapper {
  background-color: #ffffff;
  border-radius: 10px;
  position: absolute;
  box-shadow: 0 6px 17px rgba(119, 119, 119, 0.2);
  padding: 4px;
}

.context-menu-menu {
  padding: 1px 2px;
  margin: 0;
}

.context-menu-item {
  list-style: none;
  font-size: 22px;
  width: 100%;
  display: flex;
  cursor: pointer;
  align-items: center;
  min-width: 150px;
  padding: 5px 0px;
  border-radius: 5px;
}

.context-menu-item:hover {
  background-color: #e2e0e0;
}

.context-menu-span {
  font-size: medium;
  margin-left: 8px;
  color: #343434;
}

@media (prefers-color-scheme: dark) {
  .context-menu-wrapper {
    background-color: #1e1d1d;
    box-shadow: 0 6px 17px #ffffff00;
  }

  .context-menu-item:hover {
    background-color: #ffffff80;
  }

  .context-menu-span {
    color: #e2e2e2;
  }
}
`;

// CSS를 DOM에 주입하는 함수
const injectStyles = () => {
  if (typeof document !== 'undefined') {
    const styleId = 'fetoolkit-context-menu-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = contextMenuStyles;
      document.head.appendChild(style);
    }
  }
};

// 컴포넌트가 마운트될 때 스타일 주입
if (typeof window !== 'undefined') {
  injectStyles();
}

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

// eslint-disable-next-line react-refresh/only-export-components
export const ContextMenu = {
  Grid,
  Item,
};

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
