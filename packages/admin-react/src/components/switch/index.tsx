import classNames from 'classnames';
import React, { type CSSProperties } from 'react';
import '../../css/switch.css';

interface Props {
  /** 체크 상태 */
  checked: boolean;
  /** 체크 상태 변경 함수 */
  // eslint-disable-next-line no-unused-vars
  onChange: (checked: boolean) => void;
  /** 스위치 크기 */
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  /**
   * 스위치 스타일
   * - width, height, color, backgroundColor, borderColor 속성은 작성이 불가능합니다.
   */
  style?: Omit<
    CSSProperties,
    'width' | 'height' | 'color' | 'backgroundColor' | 'borderColor'
  >;
  /**
   * 체크 상태일 때 색상
   * - default: #12c82b
   */
  enabledColor?: string;
  /**
   * 체크 상태가 아닐 때 색상
   * - default: #b2b3b4
   */
  disabledColor?: string;
}

export type SwitchSize = 'sm' | 'md' | 'lg';

export const AdminSwitch = ({
  checked,
  onChange,
  size = 'md',
  style,
  className,
  enabledColor = '#12c82b',
  disabledColor = '#b2b3b4',
}: Props) => {
  return (
    <label
      className={classNames('switch-label', className, size)}
      style={{
        backgroundColor: checked ? enabledColor : disabledColor,
        ...style,
      }}
    >
      <input
        type="checkbox"
        className="switch-input"
        checked={checked}
        onChange={(e) => {
          onChange(e.target.checked);
        }}
      />

      <span
        className={classNames(
          'switch-handle',
          size,
          checked ? 'checked' : 'unchecked',
        )}
      ></span>
    </label>
  );
};
