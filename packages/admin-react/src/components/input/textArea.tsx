'use client';
import classNames from 'classnames';
import React, { type CSSProperties } from 'react';
import '../../css/textArea.css';

interface FeaturedLayoutProps {
  className?: string;
  style?: CSSProperties;
  buttons: FeaturedLayoutButtonType[];
  children: React.ReactNode;
  dataTestId?: string;
}

interface TextAreaProps
  extends Omit<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    'data-testid'
  > {
  dataTestId?: string;
}

type FeaturedLayoutButtonType = {
  type: 'clear' | 'save' | 'delete';
  title: string;
  onClick?: () => void;
};

export const AdminTextArea = ({
  className,
  dataTestId,
  ...props
}: TextAreaProps) => {
  return (
    <textarea
      className={classNames('admin-textarea', className)}
      data-testid={dataTestId}
      {...props}
    />
  );
};

export const AdminTextAreaFeaturedLayout = ({
  className,
  style,
  buttons,
  children,
  dataTestId,
}: FeaturedLayoutProps) => {
  return (
    <div
      className={classNames('admin-textarea-container', className)}
      style={style}
      data-testid={dataTestId}
    >
      {children}

      <div
        className="admin-textarea-actions"
        data-testid={dataTestId ? `${dataTestId}-actions-container` : undefined}
      >
        {buttons.map((button, idx) => {
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
              data-testid={
                dataTestId ? `${dataTestId}-button-${idx}` : undefined
              }
            >
              {title}
            </button>
          );
        })}
      </div>
    </div>
  );
};
