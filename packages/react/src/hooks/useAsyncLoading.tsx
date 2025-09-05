/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

/**
 * ======================= useAsyncLoading Hook =======================
 * - Description
 *   - 비동기 작업의 로딩 상태를 관리하기 위한 커스텀 훅입니다.
 *   - Promise를 인자로 받아 로딩 상태와 Promise 결과를 반환합니다.
 * - 사용 예시
 *   ```tsx
 *    import { useAsyncLoading } from '@fetoolkit/react';
 *    ...
 *    const [isLoading, startTransition] = useAsyncLoading();
 *    ...
 *    const fetchData = async () => {
 *      try {
 *          const data = await startTransition(fetch('/api/data'));
 *          console.log(data);
 *      } catch (error) {
 *          console.error('Error fetching data:', error);
 *      }
 *    };
 *   ```
 */
export function useAsyncLoading(): [
  boolean,
  <T>(promiseReq: Promise<T>) => Promise<T>,
] {
  const [isLoading, setLoading] = useState(false);
  const ref = useIsComponentMounted();

  const startTransition = useCallback(
    async <T,>(promiseReq: Promise<T>) => {
      try {
        setLoading(true);
        const result = await promiseReq;
        return result;
      } finally {
        if (ref.isMounted) {
          setLoading(false);
        }
      }
    },
    [ref.isMounted],
  );

  return useMemo(
    () => [isLoading, startTransition],
    [isLoading, startTransition],
  );
}

function useIsComponentMounted() {
  const ref = useRef({ isMounted: true }).current;

  useEffect(() => {
    ref.isMounted = true;
    return () => {
      ref.isMounted = false;
    };
  }, [ref]);

  return ref;
}
