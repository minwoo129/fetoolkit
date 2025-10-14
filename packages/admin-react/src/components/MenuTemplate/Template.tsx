'use client';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { FirstDepthMenuItem } from '.';
import '../../css/menuTemplate.css';
import { DropdownMenu, RouteLinkItem } from './items';

interface Props {
  logo?: React.ReactNode;
  menus: FirstDepthMenuItem[];
  pathName: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (href: string) => void;
  children: React.ReactNode;
}

export const AdminRouteMenuTemplate = ({
  logo,
  menus,
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
      <div className="menu-container">
        <div className="menu-area">
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
        {/* useProfile 또는 기타 하단 영역 추가 예정(미정) */}
      </div>
      <main className="main-area">{children}</main>
    </div>
  );
};
