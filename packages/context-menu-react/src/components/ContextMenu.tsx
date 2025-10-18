import { useResizeElement, useResizeWindow } from '@fetoolkit/react';
import React, {
  useMemo,
  useRef,
  type AriaAttributes,
  type CSSProperties,
} from 'react';
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
  const ref = useRef<HTMLDivElement>(null);
  const [ew, eh] = useResizeElement(ref);
  const [vw, vh] = useResizeWindow();

  const { nx, ny } = useMemo(() => {
    const cx = Number(x);
    const cy = Number(y);
    let nx = cx;
    let ny = cy;

    if (vw < ew + cx - 10) {
      nx = vw - ew - 10;
    }

    if (vh < eh + cy - 10) {
      ny = vh - eh - 10;
    }

    return { nx, ny };
  }, [ew, eh, vw, vh, x, y]);

  return (
    <div
      ref={ref}
      className={`context-menu-wrapper ${className}`}
      style={{ left: `${nx}px`, top: `${ny}px`, ...style }}
      data-testid={dataTestId}
      {...rest}
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
