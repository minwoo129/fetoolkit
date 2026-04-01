'use client';
import type { RefObject } from 'react';
import { useEffect, useState } from 'react';

type ScrollPosition = {
  /** 수직 스크롤 기준 현재 위치 */
  scrollY: number;
  /** 수평 스크롤 기준 현재 위치 */
  scrollX: number;
};

type UseScrollPositionReturn = ScrollPosition & {
  /**
   * 스크롤 최상단 이동 액션 메서드
   * - 이 메서드를 호출하면 수직, 수평 스크롤 모두 최상단으로 이동합니다.
   */
  scrollToTop: () => void;
};

/**
 * ======================= useScroll Hook =======================
 * - Description
 *  - 스크롤 위치를 추적하고, 스크롤을 최상단으로 이동시키는 기능을 제공하는 커스텀 훅입니다.
 *  - Hook의 인자로 HTMLElement의 Ref를 받아 해당 요소의 스크롤 위치와 스크롤을 최상단으로 이동시키는 메서드를 반환합니다.
 * - 사용 예시
 *    ```tsx
 *    import { useScroll } from '@fetoolkit/react';
 *    ...
 *    const elementRef = useRef<HTMLDivElement>(null);
 *    const { scrollY, scrollX, scrollToTop } = useScroll(elementRef);
 *    ...
 *    return (
 *     <div ref={elementRef} style={{ overflowY: 'scroll', height: '400px' }}>
 *       ...
 *     </div>
 *    )
 *   ```
 */
export function useScroll<T extends HTMLElement>(
  elementRef: RefObject<T | null>,
): UseScrollPositionReturn {
  const [position, setPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollX: 0,
  });

  const scrollToTop = () => {
    const el = elementRef.current;
    if (el) {
      el.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const handleScroll = () => {
      setPosition({
        scrollY: el.scrollTop,
        scrollX: el.scrollLeft,
      });
    };

    // 초기값 세팅
    handleScroll();

    el.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      el.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef]);

  return {
    scrollY: position.scrollY,
    scrollX: position.scrollX,
    scrollToTop,
  };
}
