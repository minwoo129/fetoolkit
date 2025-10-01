import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { FirstDepthMenuItem, UserProfileType } from '.';
import '../../css/menuTemplate.css';
import { MenuItem } from './MenuItem';
import UserProfile from './UserProfile';

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
  return (
    <div className="template-container">
      <div className="menu-template">
        <div className="menu-header">
          <span className="menu-logo">{logo ?? 'Logo'}</span>

          <ul className="menu-list">
            {menus.map((menu) => {
              const key = uuidv4();
              return (
                <MenuItem
                  menu={menu}
                  key={key}
                  pathName={pathName}
                  onClick={onClick}
                />
              );
            })}
          </ul>
        </div>

        <UserProfile userProfile={userProfile} />
      </div>
      <main className="main-area">{children}</main>
    </div>
  );
};
