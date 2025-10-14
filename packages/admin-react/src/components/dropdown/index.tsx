'use client';
import classNames from 'classnames';
import React, { useCallback, useState, type CSSProperties } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../css/dropdown.css';

interface Props {
  className?: string;
  styles?: CSSProperties;
  title: string;
  menus: (DropdownMenuItem | DropdownSubMenuItem)[];
  align?: 'left' | 'right';
  dataTestId?: string;
}

interface MenuItemProps {
  menu: DropdownMenuItem | DropdownSubMenuItem;
  closeDropdown: () => void;
  dataTestId?: string;
}

interface SubMenuItemProps extends Omit<DropdownSubMenuItem, 'type'> {
  closeDropdown: () => void;
  dataTestId?: string;
}

type DropdownMenuItem = {
  title: string;
  type: 'group';
  menus: Omit<DropdownSubMenuItem, 'type'>[];
};

type DropdownSubMenuItem = {
  title: string;
  type: 'button';
  styleType?: 'basic' | 'delete';
  onClick?: () => void;
};

export const AdminDropdown = ({
  className,
  styles,
  title,
  menus,
  align = 'right',
  dataTestId,
}: Props) => {
  const [isOpen, setOpen] = useState(false);

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <div
      className={classNames('dropdown-container', className)}
      style={styles}
      data-testid={dataTestId}
    >
      <span className="dropdown-button-group">
        <button
          type="button"
          className="dropdown-button"
          onClick={() => setOpen(!isOpen)}
          data-testid={dataTestId ? `${dataTestId}-title-button` : undefined}
        >
          {title}
        </button>

        <button
          type="button"
          className="dropdown-button"
          onClick={() => setOpen(!isOpen)}
          data-testid={dataTestId ? `${dataTestId}-arrow-button` : undefined}
        >
          <ArrowIcon />
        </button>
      </span>
      <p className="block px-3 py-2 text-sm text-gray-500 dark:text-gray-400"></p>
      {isOpen && (
        <div
          role="menu"
          className={classNames('dropdown-menu', align)}
          data-testid={dataTestId ? `${dataTestId}-menu` : undefined}
        >
          {menus.map((menu, idx) => {
            const key = uuidv4();
            return (
              <MenuItem
                menu={menu}
                closeDropdown={closeDropdown}
                key={key}
                dataTestId={
                  dataTestId ? `${dataTestId}-menu-item-${idx}` : undefined
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ menu, closeDropdown, dataTestId }: MenuItemProps) => {
  const { title, type } = menu;
  if (type === 'button') {
    const { styleType = 'basic', onClick } = menu;
    return (
      <SubMenuItem
        title={title}
        styleType={styleType}
        onClick={onClick}
        closeDropdown={closeDropdown}
        dataTestId={dataTestId ? dataTestId : undefined}
      />
    );
  }

  const { menus } = menu;
  return (
    <div>
      <p
        className="dropdown-menu-group-title"
        data-testid={dataTestId ? `${dataTestId}-sub-title` : undefined}
      >
        {title}
      </p>
      {menus.map((menu, idx) => {
        const key = uuidv4();
        return (
          <SubMenuItem
            title={menu.title}
            styleType={menu.styleType}
            onClick={menu.onClick}
            closeDropdown={closeDropdown}
            dataTestId={dataTestId ? `${dataTestId}-sub-${idx}` : undefined}
            key={key}
          />
        );
      })}
    </div>
  );
};

const SubMenuItem = ({
  title,
  styleType = 'basic',
  onClick,
  closeDropdown,
  dataTestId,
}: SubMenuItemProps) => {
  return (
    <button
      className={classNames('dropdown-menu-item', {
        delete: styleType === 'delete',
      })}
      role="menuitem"
      onClick={() => {
        closeDropdown();
        onClick?.();
      }}
      data-testid={dataTestId}
    >
      {title}
    </button>
  );
};

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="dropdown-icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
