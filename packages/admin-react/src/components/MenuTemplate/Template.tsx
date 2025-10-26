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
  dataTestId?: string;
  children: React.ReactNode;
}

export const AdminRouteMenuTemplate = ({
  logo,
  menus,
  pathName,
  onClick,
  dataTestId,
  children,
}: Props) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <div className="template-container" data-testid={dataTestId}>
      <div
        className="menu-container"
        data-testid={dataTestId ? `${dataTestId}-container` : undefined}
      >
        <div
          className="menu-area"
          data-testid={dataTestId ? `${dataTestId}-menu-area` : undefined}
        >
          <span
            className="menu-logo"
            data-testid={dataTestId ? `${dataTestId}-menu-logo` : undefined}
          >
            {logo ?? 'Logo'}
          </span>

          <ul
            className="menu-list"
            data-testid={dataTestId ? `${dataTestId}-menu-list` : undefined}
          >
            {menus.map((menu, idx) => {
              const key = uuidv4();

              if (menu.type === 'route-link') {
                return (
                  <RouteLinkItem
                    key={key}
                    title={menu.title}
                    href={menu.href}
                    pathName={pathName}
                    onClick={onClick}
                    dataTestId={
                      dataTestId ? `${dataTestId}-routelink-${idx}` : undefined
                    }
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
                  dataTestId={
                    dataTestId ? `${dataTestId}-dropdown-${idx}` : undefined
                  }
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
