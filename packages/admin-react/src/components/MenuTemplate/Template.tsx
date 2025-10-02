import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { FirstDepthMenuItem, UserProfileType } from '.';
import '../../css/menuTemplate.css';

interface Props {
  logo?: React.ReactNode;
  menus: FirstDepthMenuItem[];
  userProfile?: UserProfileType;
  pathName: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (href: string) => void;
  children: React.ReactNode;
}

export const MenuTemplate = ({
  logo,
  menus,
  userProfile,
  pathName,
  onClick,
  children,
}: Props) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <div className="template-container">
      <div className="menu-template">
        <div className="menu-header">
          <span className="menu-logo">{logo ?? 'Logo'}</span>

          <ul className="menu-list">
            {menus.map((menu) => {
              const key = uuidv4();

              if (menu.type === 'route-link') {
                return (
                  <li key={key} className="menu-item-wrapper">
                    <button
                      className={`menu-item-button ${pathName.startsWith(menu.href) ? 'item-active' : ''}`}
                      onClick={() => onClick(menu.href)}
                    >
                      {menu.title}
                    </button>
                  </li>
                );
              }

              if (menu.type === 'dropdown') {
                const isOpen = openDropdown === menu.title;
                return (
                  <li key={key} className="menu-item-wrapper">
                    <button
                      className="menu-dropdown-button"
                      onClick={() => handleDropdownToggle(menu.title)}
                    >
                      <span className="menu-dropdown-text">{menu.title}</span>
                      <span
                        className={`menu-dropdown-arrow ${isOpen ? 'open' : ''}`}
                      >
                        ▼
                      </span>
                    </button>
                    {isOpen && (
                      <ul className="menu-dropdown-submenu">
                        {menu.menus.map((subMenu) => {
                          const subKey = uuidv4();
                          return (
                            <li
                              key={subKey}
                              className="menu-submenu-item-wrapper"
                            >
                              <button
                                className={`menu-submenu-item-button ${pathName.startsWith(subMenu.href) ? 'item-active' : ''}`}
                                onClick={() => onClick(subMenu.href)}
                              >
                                {subMenu.title}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              return null;
            })}
          </ul>
        </div>

        {userProfile && (
          <div className="menu-user-profile">
            <div className="menu-user-link">
              <img
                src={userProfile.url}
                alt={userProfile.name}
                className="menu-user-avatar"
              />
              <div className="menu-user-info">
                <span className="menu-user-name">{userProfile.name}</span>
                <span className="menu-user-email">{userProfile.email}</span>
              </div>
            </div>
          </div>
        )}
      </div>
      <main className="main-area">{children}</main>
    </div>
  );
};
