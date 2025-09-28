import React from 'react';
import '../../css/input.css';

export const AdminInput = ({
  ...props
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className'>) => {
  return <input className="input-field" {...props} />;
};
