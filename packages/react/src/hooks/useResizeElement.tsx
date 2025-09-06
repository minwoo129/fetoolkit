import type { RefObject } from 'react';
import { useEffect, useMemo, useState } from 'react';

type Size = {
  width: number;
  height: number;
};

/**
 * ======================= useResizeElement Hook =======================
 * - Description
 *    - 특정 HTML 요소의 크기를 추적하기 위한 커스텀 훅
 *    - 이 훅은 주어진 요소의 너비와 높이를 상태로 관리하며, 요소가 리사이즈될 때마다 업데이트됩니다.
 * - 사용 예시
 *    ```tsx
 *    import { useResizeElement } from '@fetoolkit/react';
 *    ...
 *    const elementRef = useRef<HTMLDivElement>(null);
 *    const [width, height] = useResizeElement(elementRef);
 *    ```
 */
export function useResizeElement<T extends HTMLElement>(
  elementRef: RefObject<T | null>,
) {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    setSize({
      width: element.offsetWidth,
      height: element.offsetHeight,
    });
  }, [elementRef]);

  return useMemo(() => [size.width, size.height], [size]);
}
