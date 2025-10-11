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
}

interface DropdownButtonProps {
  title: string;
  isOpen: boolean;
  // eslint-disable-next-line no-unused-vars
  handleDropdownToggle: (title: string) => void;
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
}

interface DropdownSubMenuProps {
  isOpen: boolean;
  menus: MenuItemType[];
  pathName: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (href: string) => void;
}

interface DropdownSubMenuItemProps {
  title: string;
  href: string;
  pathName: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (href: string) => void;
}

export const RouteLinkItem = ({
  title,
  href,
  pathName,
  onClick,
}: RouteLinkItemProps) => {
  return (
    <li className="menu-item-wrapper">
      <button
        className={`menu-item-button ${pathName.startsWith(href) ? 'item-active' : ''}`}
        onClick={() => onClick(href)}
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
}: DropdownMenuProps) => {
  const isOpen = useMemo(() => openDropdown === title, [openDropdown, title]);
  return (
    <li className="menu-item-wrapper">
      <DropdownButton
        title={title}
        isOpen={isOpen}
        handleDropdownToggle={handleDropdownToggle}
      />
      <DropdownSubMenu
        isOpen={isOpen}
        menus={menus}
        pathName={pathName}
        onClick={onClick}
      />
    </li>
  );
};

export const DropdownButton = ({
  title,
  isOpen,
  handleDropdownToggle,
}: DropdownButtonProps) => {
  return (
    <button
      className="menu-dropdown-button"
      onClick={() => handleDropdownToggle(title)}
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
}: DropdownSubMenuProps) => {
  if (!isOpen) return null;
  return (
    <ul className="menu-dropdown-submenu">
      {menus.map((subMenu) => {
        const subKey = uuidv4();
        return (
          <DropdownSubMenuItem
            key={subKey}
            title={subMenu.title}
            href={subMenu.href}
            pathName={pathName}
            onClick={onClick}
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
}: DropdownSubMenuItemProps) => {
  return (
    <li className="menu-submenu-item-wrapper">
      <button
        className={`menu-submenu-item-button ${pathName.startsWith(href) ? 'item-active' : ''}`}
        onClick={() => onClick(href)}
      >
        {title}
      </button>
    </li>
  );
};
