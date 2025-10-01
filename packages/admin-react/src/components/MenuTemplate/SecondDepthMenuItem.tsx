import React from 'react';
import '../../css/menuTemplate.css';

interface Props {
  title: string;
  href: string;
  pathName: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (href: string) => void;
}

const SecondDepthMenuItem = ({ title, href, pathName, onClick }: Props) => {
  return (
    <li>
      <p
        className={`menu-dropdown-submenu-item ${pathName.startsWith(href) ? 'item-active' : ''}`}
        onClick={() => onClick(href)}
      >
        {title}
      </p>
    </li>
  );
};

export default SecondDepthMenuItem;
