import classNames from 'classnames';
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
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
  const [viewportSize, setViewportSize] = useState<{ vw: number; vh: number }>({
    vw: 0,
    vh: 0,
  });
  const [elementSize, setElementSize] = useState<{ ew: number; eh: number }>({
    ew: 0,
    eh: 0,
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    setElementSize({
      ew: element.offsetWidth,
      eh: element.offsetHeight,
    });
  }, [ref]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return () => {
        window.removeEventListener('resize', () => null);
      };
    }

    const handleResize = () => {
      setViewportSize({
        vw: window.innerWidth,
        vh: window.innerHeight,
      });
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { nx, ny } = useMemo(() => {
    const cx = Number(x);
    const cy = Number(y);
    const { ew, eh } = elementSize;
    const { vw, vh } = viewportSize;
    let nx = cx;
    let ny = cy;

    if (vw < ew + cx - 10) {
      nx = vw - ew - 10;
    }

    if (vh < eh + cy - 10) {
      ny = vh - eh - 10;
    }

    return { nx, ny };
  }, [x, y, elementSize, viewportSize]);

  return (
    <div
      ref={ref}
      className={classNames('context-menu-wrapper', className)}
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
      className={classNames('context-menu-item', className)}
      value={value}
      style={style}
      data-testid={dataTestId}
      context-menu-item-id={contextMenuItemId}
      context-menu-item-value={value}
      {...rest}
    >
      <span
        className={classNames('context-menu-span', textStyle?.className)}
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
