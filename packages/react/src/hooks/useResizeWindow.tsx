import { useEffect, useMemo, useState } from 'react';

type Size = {
  width: number;
  height: number;
};

/**
 * ======================= useResizeWindow Hook =======================
 * - Description
 *    - 브라우저 창의 크기를 추적하기 위한 커스텀 훅입니다.
 *    - 이 훅은 브라우저 창의 너비와 높이를 상태로 관리하며, 창 크기가 변경될 때마다 업데이트됩니다.
 * - 사용 예시
 *    ```tsx
 *    import { useResizeWindow } from '@fetoolkit/react';
 *    ...
 *    const [width, height] = useResizeWindow();
 *    ```
 */
export function useResizeWindow() {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window === 'undefined') {
      return () => {
        window.removeEventListener('resize', () => null);
      };
    }

    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize(); // 초기값 설정

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return useMemo(() => [size.width, size.height], [size]);
}
