import { useCallback, useMemo, useState } from 'react';

/**
 * ======================= useToggle Hook =======================
 * - Description
 *    - 화면 내 boolean 상태를 토글하기 위한 커스텀 훅입니다.
 *    - 초기값은 `false`로 설정되어 있으며, 상태값과 상태값을 토글하는 메서드를 담은 튜플을 반환합니다.
 *    - 스위치 등의 기능에서 사용하실 수 있습니다.
 *    - Hook 초기화시 원하시는 초기값을 설정할 수 있습니다
 * - 사용 예시
 *     ```tsx
 *      import { useToggle } from '@fetoolkit/react';
 *      ...
 *      const [isActive, toggleActive] = useToggle(); // 초기값은 false입니다.
 *      const [isActive2, toggleActive2] = useToggle(a === b); // 초기값이 지정된 경우
 *     ```
 */
export function useToggle(
  initialValue: boolean = false,
): [boolean, () => void] {
  const [value, setValue] = useState(initialValue);

  const handleToggleValue = useCallback(() => {
    setValue((prevValue) => !prevValue);
  }, []);

  return useMemo(() => [value, handleToggleValue], [value, handleToggleValue]);
}
