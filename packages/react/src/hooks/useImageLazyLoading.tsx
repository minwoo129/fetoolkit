import React, { useEffect, useMemo, useRef, useState } from 'react';

/**
 * ======================= useImageLazyLoading Hook =======================
 * - Description
 *   - 이미지의 lazy loading을 구현하기 위한 커스텀 훅입니다.
 *   - Hook의 인자에 이미지의 src와 IntersectionObserver의 옵션을 전달합니다.
 *   - 이미지 태그의 ref와 실제 src를 튜플형태로 반환합니다.
 * - 사용 예시
 *   ```tsx
 *    import { useImageLazyLoading } from '@fetoolkit/react';
 *    ...
 *    const [imgRef, realSrc] = useImageLazyLoading({ src: 'image url' });
 *    ...
 *    return <img ref={imgRef} src={realSrc} alt="Lazy loaded image" />;
 *   ```
 */
export function useImageLazyLoading({
  src,
  options = { threshold: 0.1 },
}: {
  src: string;
  options?: IntersectionObserverInit;
}): [React.Ref<HTMLImageElement | null>, string] {
  const [loaded, setLoaded] = useState(false);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) {
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.unobserve(imgRef.current!);
        }
      });
    }, options);

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [options]);

  const realSrc = useMemo(() => {
    return loaded ? src : '';
  }, [loaded, src]);

  return useMemo(() => [imgRef, realSrc], [imgRef, realSrc]);
}
