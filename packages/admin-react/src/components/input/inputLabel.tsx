import classNames from 'classnames';
import React from 'react';

interface BasicInputLabelProps {
  htmlFor: string;
  className?: string;
  style?: React.CSSProperties;
  label: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const BasicInputLabel = ({
  htmlFor,
  className,
  style,
  label,
  children,
  icon,
}: BasicInputLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames('basic-input-label', className)}
      style={style}
    >
      <span className="icon-wrapper">{label}</span>

      <div className="input-wrapper">
        {children}

        <span className="icon-wrapper">{icon}</span>
      </div>
    </label>
  );
};
