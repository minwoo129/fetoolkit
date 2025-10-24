'use client';
import classNames from 'classnames';
import React from 'react';
import '../../css/inputLabel.css';

interface AdminInputLabelBasicProps {
  htmlFor: string;
  className?: string;
  style?: React.CSSProperties;
  label: string;
  children: React.ReactNode;
  dataTestId?: string;
}

export const AdminInputLabelBasic = ({
  htmlFor,
  className,
  style,
  label,
  children,
  dataTestId,
}: AdminInputLabelBasicProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={classNames('basic-input-label', className)}
      style={style}
      data-testid={dataTestId}
    >
      <span className="icon-wrapper">{label}</span>

      <div className="input-wrapper">{children}</div>
    </label>
  );
};
