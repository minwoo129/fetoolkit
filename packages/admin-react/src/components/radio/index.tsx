'use client';
import classNames from 'classnames';
import React from 'react';
import '../../css/radio.css';

type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'data-testid'
>;

type AdminRadioSize = 'sm' | 'md' | 'lg' | 'xl';

type AdminRadioColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger';

interface Props extends Omit<InputProps, 'size'> {
  size?: AdminRadioSize;
  color?: AdminRadioColor;
  dataTestId?: string;
}

export const AdminRadio = ({
  size = 'md',
  color = 'primary',
  className,
  dataTestId,
  ...props
}: Props) => {
  return (
    <input
      type="radio"
      className={classNames('radio', size, color, className)}
      data-testid={dataTestId}
      {...props}
    />
  );
};
