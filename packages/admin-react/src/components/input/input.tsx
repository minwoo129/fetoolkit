'use client';
import classNames from 'classnames';
import React from 'react';
import '../../css/input.css';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'data-testid'> {
  labelType?: 'none' | 'basic';
  dataTestId?: string;
}

export const AdminInput = ({
  className,
  labelType = 'none',
  dataTestId,
  ...props
}: Props) => {
  return (
    <input
      className={classNames('fetoolkit-admin-input', className, {
        basic: labelType === 'basic',
      })}
      data-testid={dataTestId}
      {...props}
    />
  );
};
