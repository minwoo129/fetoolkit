import classNames from 'classnames';
import React, { useCallback, useState, type CSSProperties } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../css/dropdown.css';

interface Props {
  className?: string;
  styles?: CSSProperties;
  title: string;
  menus: (DropdownMenuItem | DropdownSubMenuItem)[];
}

interface MenuItemProps {
  menu: DropdownMenuItem | DropdownSubMenuItem;
  closeDropdown: () => void;
}

interface SubMenuItemProps extends Omit<DropdownSubMenuItem, 'type'> {
  closeDropdown: () => void;
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

export const AdminDropdown = ({ className, styles, title, menus }: Props) => {
  const [isOpen, setOpen] = useState(false);

  const closeDropdown = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <div className={classNames('dropdown-container', className)} style={styles}>
      <span className="dropdown-button-group">
        <button
          type="button"
          className="dropdown-button"
          onClick={() => setOpen(!isOpen)}
        >
          {title}
        </button>

        <button
          type="button"
          className="dropdown-button"
          aria-label="Menu"
          onClick={() => setOpen(!isOpen)}
        >
          <ArrowIcon />
        </button>
      </span>
      <p className="block px-3 py-2 text-sm text-gray-500 dark:text-gray-400"></p>
      {isOpen && (
        <div role="menu" className="dropdown-menu">
          {menus.map((menu) => {
            const key = uuidv4();
            return (
              <MenuItem menu={menu} closeDropdown={closeDropdown} key={key} />
            );
          })}
        </div>
      )}
    </div>
  );
};

const MenuItem = ({ menu, closeDropdown }: MenuItemProps) => {
  const { title, type } = menu;
  const key = uuidv4();
  if (type === 'button') {
    const { styleType = 'basic', onClick } = menu;
    return (
      <SubMenuItem
        title={title}
        styleType={styleType}
        onClick={onClick}
        closeDropdown={closeDropdown}
        key={key}
      />
    );
  }

  const { menus } = menu;
  return (
    <div>
      <p className="dropdown-menu-group-title">{title}</p>
      {menus.map((menu) => (
        <SubMenuItem
          title={menu.title}
          styleType={menu.styleType}
          onClick={menu.onClick}
          closeDropdown={closeDropdown}
          key={key}
        />
      ))}
    </div>
  );
};

const SubMenuItem = ({
  title,
  styleType = 'basic',
  onClick,
  closeDropdown,
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
