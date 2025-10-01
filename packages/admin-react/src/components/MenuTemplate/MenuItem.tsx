import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { FirstDepthMenuItem } from '.';
import '../../css/menuTemplate.css';
import { DropdownArrowIcon } from './DropdownArrowIcon';
import SecondDepthMenuItem from './SecondDepthMenuItem';

interface Props {
  menu: FirstDepthMenuItem;
  pathName: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (href: string) => void;
}

export const MenuItem = ({ menu, pathName, onClick }: Props) => {
  if (menu.type === 'route-link') {
    const { href, title } = menu;
    return (
      <li>
        <p
          className={`menu-item ${pathName.startsWith(href) ? 'item-active' : ''}`}
          onClick={() => onClick(title)}
        >
          {title}
        </p>
      </li>
    );
  }

  const { menus, title } = menu;
  return (
    <li>
      <details className="menu-dropdown group">
        <summary className="menu-dropdown-summary">
          <span className="menu-dropdown-text">{title}</span>

          <DropdownArrowIcon />
        </summary>

        <ul className="menu-dropdown-submenu">
          {menus.map((menu) => {
            const key = uuidv4();
            return (
              <SecondDepthMenuItem
                title={menu.title}
                href={menu.href}
                pathName={pathName}
                onClick={onClick}
                key={key}
              />
            );
          })}
        </ul>
      </details>
    </li>
  );
};
