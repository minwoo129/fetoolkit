import classNames from 'classnames';
import React, { useState, type CSSProperties } from 'react';
import '../../css/dropdown.css';

interface Props {
  className?: string;
  styles?: CSSProperties;
  title: string;
  menus: DropdownMenuItem[];
}

type DropdownMenuItem = {
  title: string;
  type?: 'basic' | 'delete';
  onClick?: () => void;
};

export const AdminDropdown = ({ className, styles, title, menus }: Props) => {
  const [isOpen, setOpen] = useState(false);
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
      {isOpen && (
        <div role="menu" className="dropdown-menu">
          {menus.map((menu) => {
            const { title, type = 'basic', onClick } = menu;
            return (
              <button
                className={classNames('dropdown-menu-item', {
                  delete: type === 'delete',
                })}
                role="menuitem"
                key={title}
                onClick={() => {
                  setOpen(false);
                  onClick?.();
                }}
              >
                {title}
              </button>
            );
          })}
        </div>
      )}
    </div>
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
