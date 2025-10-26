'use client';
import React, { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { MenuItemType } from '.';
import '../../css/menuTemplate.css';

interface RouteLinkItemProps {
  title: string;
  href: string;
  pathName: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (href: string) => void;
  dataTestId?: string;
}

interface DropdownButtonProps {
  title: string;
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  handleDropdownToggle: (title: string) => void;
  dataTestId?: string;
}

interface DropdownMenuProps {
  title: string;
  menus: MenuItemType[];
  pathName: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (href: string) => void;
  openDropdown: string | null;
  // eslint-disable-next-line no-unused-vars
  handleDropdownToggle: (title: string) => void;
  dataTestId?: string;
}

interface DropdownSubMenuProps {
  isOpen: boolean;
  menus: MenuItemType[];
  pathName: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (href: string) => void;
  dataTestId?: string;
}

interface DropdownSubMenuItemProps {
  title: string;
  href: string;
  pathName: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (href: string) => void;
  dataTestId?: string;
}

export const RouteLinkItem = ({
  title,
  href,
  pathName,
  onClick,
  dataTestId,
}: RouteLinkItemProps) => {
  return (
    <li className="menu-item-wrapper" data-testid={dataTestId}>
      <button
        className={`menu-item-button ${pathName.startsWith(href) ? 'item-active' : ''}`}
        onClick={() => onClick(href)}
        data-testid={dataTestId ? `${dataTestId}-button` : undefined}
      >
        {title}
      </button>
    </li>
  );
};

export const DropdownMenu = ({
  title,
  menus,
  pathName,
  onClick,
  openDropdown,
  handleDropdownToggle,
  dataTestId,
}: DropdownMenuProps) => {
  const isOpen = useMemo(() => openDropdown === title, [openDropdown, title]);
  return (
    <li className="menu-item-wrapper" data-testid={dataTestId}>
      <DropdownButton
        title={title}
        isOpen={isOpen}
        handleDropdownToggle={handleDropdownToggle}
        dataTestId={dataTestId ? `${dataTestId}-button` : undefined}
      />
      <DropdownSubMenu
        isOpen={isOpen}
        menus={menus}
        pathName={pathName}
        onClick={onClick}
        dataTestId={dataTestId ? `${dataTestId}-sub` : undefined}
      />
    </li>
  );
};

export const DropdownButton = ({
  title,
  isOpen,
  handleDropdownToggle,
  dataTestId,
}: DropdownButtonProps) => {
  return (
    <button
      className="menu-dropdown-button"
      onClick={() => handleDropdownToggle(title)}
      data-testid={dataTestId}
    >
      <span className="menu-dropdown-text">{title}</span>
      <span className={`menu-dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
    </button>
  );
};

export const DropdownSubMenu = ({
  isOpen,
  menus,
  pathName,
  onClick,
  dataTestId,
}: DropdownSubMenuProps) => {
  if (!isOpen) return null;
  return (
    <ul
      className="menu-dropdown-submenu"
      data-testid={dataTestId ? `${dataTestId}-menu` : undefined}
    >
      {menus.map((subMenu, idx) => {
        const subKey = uuidv4();
        return (
          <DropdownSubMenuItem
            key={subKey}
            title={subMenu.title}
            href={subMenu.href}
            pathName={pathName}
            onClick={onClick}
            dataTestId={dataTestId ? `${dataTestId}-${idx}` : undefined}
          />
        );
      })}
    </ul>
  );
};

export const DropdownSubMenuItem = ({
  title,
  href,
  pathName,
  onClick,
  dataTestId,
}: DropdownSubMenuItemProps) => {
  return (
    <li className="menu-submenu-item-wrapper" data-testid={dataTestId}>
      <button
        className={`menu-submenu-item-button ${pathName.startsWith(href) ? 'item-active' : ''}`}
        onClick={() => onClick(href)}
        data-testid={dataTestId ? `${dataTestId}-button` : undefined}
      >
        {title}
      </button>
    </li>
  );
};
