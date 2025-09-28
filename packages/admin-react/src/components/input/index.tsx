import classNames from 'classnames';
import React from 'react';
import '../../css/input.css';

export const AdminInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={classNames('input-field', className)} {...props} />;
};
