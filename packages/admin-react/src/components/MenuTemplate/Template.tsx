import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { FirstDepthMenuItem, UserProfileType } from '.';
import '../../css/menuTemplate.css';
import { DropdownMenu, RouteLinkItem } from './items';

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
                  <RouteLinkItem
                    key={key}
                    title={menu.title}
                    href={menu.href}
                    pathName={pathName}
                    onClick={onClick}
                  />
                );
              }

              return (
                <DropdownMenu
                  key={key}
                  title={menu.title}
                  menus={menu.menus}
                  pathName={pathName}
                  onClick={onClick}
                  openDropdown={openDropdown}
                  handleDropdownToggle={handleDropdownToggle}
                />
              );
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
