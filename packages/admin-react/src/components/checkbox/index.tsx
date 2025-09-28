import classNames from 'classnames';
import React, { type CSSProperties } from 'react';
import '../../css/checkbox.css';

interface Props
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'type' | 'value' | 'checked' | 'size'
  > {
  checked?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange?: (value: boolean) => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  style?: Omit<CSSProperties, 'width' | 'height'>;
}
export const AdminCheckbox = ({
  checked = false,
  onChange,
  className,
  size = 'xs',
  style,
  ...props
}: Props) => {
  // 사용자의 className과 기본 checkbox 클래스를 통합

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => onChange?.(e.target.checked)}
      className={classNames('fetoolkit-admin-checkbox', className, size)}
      style={{ ...style }}
      {...props}
    />
  );
};
