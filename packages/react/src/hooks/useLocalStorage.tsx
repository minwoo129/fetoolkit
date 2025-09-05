/* eslint-disable no-unused-vars */
import { useCallback, useMemo } from 'react';

type ReturnType = [
  <T>(key: string) => T | null,
  <T>(key: string, data: T) => void,
  (key: string) => void,
  () => void,
];

/**
 * ======================= useLocalStorage Hook =======================
 * - Description
 *    - 브라우저의 `localStorage`를 사용하여 데이터를 저장하고 관리하기 위한 커스텀 훅입니다.
 *    - get
 *      - 특정 키에 저장된 데이터를 가져오는 메서드입니다. 데이터가 없으면 `null`을 반환합니다.
 *      - 제네릭 타입 선언이 필요합니다.
 *    - set
 *      - 특정 키에 데이터를 저장하는 메서드입니다. 데이터를 JSON 문자열로 변환하여 저장합니다.
 *      - 제네릭 타입 선언이 필요합니다.
 *    - remove
 *      - 특정 키에 저장된 데이터를 삭제하는 메서드입니다.
 *    - clear
 *      - `localStorage`에 저장된 모든 데이터를 삭제하는 메서드입니다.
 * - 사용 예시
 *    ```tsx
 *    import { useLocalStorage } from '@fetoolkit/react';
 *    ...
 *    const [get, set, remove, clear] = useLocalStorage();
 *    ```
 */
export function useLocalStorage(): ReturnType {
  const get = useCallback(<T,>(key: string) => {
    const response = localStorage.getItem(key);

    return response ? (JSON.parse(response) as T) : null;
  }, []);

  const set = useCallback(<T,>(key: string, data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
  }, []);

  const remove = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  const clear = useCallback(() => {
    localStorage.clear();
  }, []);

  return useMemo(() => [get, set, remove, clear], [get, set, remove, clear]);
}
