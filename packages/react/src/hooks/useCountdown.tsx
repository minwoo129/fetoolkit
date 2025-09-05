/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useMemo, useState } from 'react';

/**
 * ======================= useCountdown Hook =======================
 * - Description
 *   - 카운트다운 기능을 구현하기 위한 커스텀 훅입니다.
 *   - 초기값으로 분(`minute`)과 초(`second`)를 설정할 수 있습니다.
 *   - 현재 남은시간과 카운트다운 실행 여부, 카운트다운 기능을 동작시키는 액션을 객체형태로 반환합니다.
 * - 사용 예시
 *    ```tsx
 *     import { useCountdown } from '@fetoolkit/react';
 *     ...
 *     const { leftTime, isCountdownRunning, handleCountdown } = useCountdown({minute: 1, second: 30}); // 1분 30초로 카운트다운 시작
 *     ```
 */
export function useCountdown({
  minute = 0,
  second = 0,
}: {
  minute?: number;
  second?: number;
}): {
  /** 카운트다운 남은 시간 */
  leftTime: number;
  /** 카운트다운 실행중 여부 */
  isCountdownRunning: boolean;
  /**
   * 카운트다운 기능 동작 액션
   * - mode: start => 카운트다운 시작
   * - mode: stop => 카운트다운 정지(남은시간 0초로 초기화)
   * - mode: pauseOrRestart => 카운트다운 일시정지 또는 재시작
   */
  handleCountdown: (mode: 'start' | 'stop' | 'pauseOrRestart') => void;
} {
  const [leftTime, setLeftTime] = useState(0);
  const [isCountdownRunning, setCountdownRunning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (leftTime === 0) {
        clearInterval(timer);
        setCountdownRunning(false);
        return;
      }

      if (isCountdownRunning) {
        setLeftTime((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [leftTime, isCountdownRunning]);

  const handleCountdown = useCallback(
    (mode: 'start' | 'stop' | 'pauseOrRestart') => {
      if (mode === 'start') {
        setLeftTime(minute * 60 + second);
        setCountdownRunning(true);
        return;
      }

      if (mode === 'stop') {
        setLeftTime(0);
        setCountdownRunning(false);
        return;
      }

      setCountdownRunning((prev) => !prev);
    },
    [minute, second, setCountdownRunning],
  );

  return useMemo(
    () => ({
      leftTime,
      isCountdownRunning,
      handleCountdown,
    }),
    [leftTime, isCountdownRunning, handleCountdown],
  );
}
