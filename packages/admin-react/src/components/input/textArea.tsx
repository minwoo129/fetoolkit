'use client';
import classNames from 'classnames';
import React, { type CSSProperties } from 'react';
import '../../css/textArea.css';

interface FeaturedLayoutProps {
  className?: string;
  style?: CSSProperties;
  buttons: FeaturedLayoutButtonType[];
  children: React.ReactNode;
}

type FeaturedLayoutButtonType = {
  type: 'clear' | 'save' | 'delete';
  title: string;
  onClick?: () => void;
};

export const AdminTextArea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea className={classNames('admin-textarea', className)} {...props} />
  );
};

export const AdminTextAreaFeaturedLayout = ({
  className,
  style,
  buttons,
  children,
}: FeaturedLayoutProps) => {
  return (
    <div
      className={classNames('admin-textarea-container', className)}
      style={style}
    >
      {children}

      <div className="admin-textarea-actions">
        {buttons.map((button) => {
          const { type, title, onClick } = button;
          return (
            <button
              type="button"
              className={classNames('admin-textarea-button', {
                clear: type === 'clear',
                save: type === 'save',
                delete: type === 'delete',
              })}
              key={title}
              onClick={onClick}
            >
              {title}
            </button>
          );
        })}
      </div>
    </div>
  );
};
