'use client';
import classNames from 'classnames';
import React from 'react';
import '../../css/input.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelType?: 'none' | 'basic';
}

export const AdminInput = ({
  className,
  labelType = 'none',
  ...props
}: Props) => {
  return (
    <input
      className={classNames('fetoolkit-admin-input', className, {
        basic: labelType === 'basic',
      })}
      {...props}
    />
  );
};
