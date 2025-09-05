/* eslint-disable no-unused-vars */
import { useCallback, useMemo, useState } from 'react';

/**
 * ======================= useInput Hook =======================
 * - Description
 *     - 화면 내 input 요소의 상태를 관리하기 위한 커스텀 훅입니다.
 *     - 이 훅은 초기값을 받아 해당 값을 상태로 관리하며, 현재 상태값과 상태값 변경 메서드를 제공하는 튜플을 반환합니다.
 * - 사용 예시 1
 *     ```tsx
 *       import { useInput } from '@fetoolkit/react';
 *
 *       ...
 *
 *       const [name, handleChangeName] = useInput(''); // 타입추론이 유도된 경우입니다.
 *       const [age, handleChangeAge] = useInput<number>(0); // 타입을 명시적으로 지정한 경우입니다.
 *     ```
 *
 */
export function useInput<T>(initialValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(initialValue);

  const handleChangeValue = useCallback((value: T) => {
    setValue(value);
  }, []);

  return useMemo(() => [value, handleChangeValue], [value, handleChangeValue]);
}
