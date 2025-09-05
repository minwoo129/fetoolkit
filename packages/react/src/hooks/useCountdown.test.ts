import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useCountdown } from './useCountdown';

describe('hook > useCountdown', () => {
  it('초기 상태 확인', () => {
    const { result } = renderHook(() => useCountdown({ minute: 3 }));
    expect(result.current.leftTime).toBe(0);
    expect(result.current.isCountdownRunning).toBe(false);
  });

  it('카운트 다운 실행 테스트: 실행', () => {
    const { result } = renderHook(() => useCountdown({ minute: 3 }));

    // 카운트다운 실행
    act(() => {
      result.current.handleCountdown('start');
    });
    expect(result.current.isCountdownRunning).toBe(true);
    expect(result.current.leftTime).toBeGreaterThan(0);

    // 테스트 종료: 카운트다운 정지
    act(() => {
      result.current.handleCountdown('stop');
    });
  });

  it('카운트 다운 실행 테스트: 실행 -> 정지', () => {
    const { result } = renderHook(() => useCountdown({ minute: 3 }));

    // 카운트다운 실행
    act(() => {
      result.current.handleCountdown('start');
    });
    expect(result.current.isCountdownRunning).toBe(true);
    expect(result.current.leftTime).toBeGreaterThan(0);

    // 카운트다운 정지
    act(() => {
      result.current.handleCountdown('stop');
    });
    expect(result.current.isCountdownRunning).toBe(false);
    expect(result.current.leftTime).toBe(0);

    // 테스트 종료
  });

  it('카운트 다운 실행 테스트: 실행 -> 일시정지', async () => {
    const { result } = renderHook(() => useCountdown({ minute: 3 }));

    // 카운트다운 실행
    act(() => {
      result.current.handleCountdown('start');
    });
    expect(result.current.isCountdownRunning).toBe(true);
    expect(result.current.leftTime).toBeGreaterThan(0);
    // 5초 뒤에 일시 정지
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 카운트다운 일시정지
    act(() => {
      result.current.handleCountdown('pauseOrRestart');
    });
    expect(result.current.isCountdownRunning).toBe(false);
    expect(result.current.leftTime).toBeGreaterThan(0);

    // 테스트 종료: 카운트다운 정지
    act(() => {
      result.current.handleCountdown('stop');
    });
  });

  it('카운트 다운 실행 테스트: 실행 -> 일시정지 -> 실행', async () => {
    const { result } = renderHook(() => useCountdown({ minute: 3 }));

    // 카운트다운 실행
    act(() => {
      result.current.handleCountdown('start');
    });
    expect(result.current.isCountdownRunning).toBe(true);
    expect(result.current.leftTime).toBeGreaterThan(0);
    // 5초 뒤에 일시 정지
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 카운트다운 일시정지
    act(() => {
      result.current.handleCountdown('pauseOrRestart');
    });
    expect(result.current.isCountdownRunning).toBe(false);
    expect(result.current.leftTime).toBeGreaterThan(0);

    // 카운트다운 실행
    act(() => {
      result.current.handleCountdown('start');
    });
    expect(result.current.isCountdownRunning).toBe(true);
    expect(result.current.leftTime).toBeGreaterThan(0);

    // 테스트 종료: 카운트다운 정지
    act(() => {
      result.current.handleCountdown('stop');
    });
  });

  it('카운트 다운 실행 테스트: 실행 -> 일시정지 -> 정지', async () => {
    const { result } = renderHook(() => useCountdown({ minute: 3 }));

    // 카운트다운 실행
    act(() => {
      result.current.handleCountdown('start');
    });
    expect(result.current.isCountdownRunning).toBe(true);
    expect(result.current.leftTime).toBeGreaterThan(0);
    // 5초 뒤에 일시 정지
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 카운트다운 일시정지
    act(() => {
      result.current.handleCountdown('pauseOrRestart');
    });
    expect(result.current.isCountdownRunning).toBe(false);
    expect(result.current.leftTime).toBeGreaterThan(0);

    // 카운트다운 정지
    act(() => {
      result.current.handleCountdown('stop');
    });
    expect(result.current.isCountdownRunning).toBe(false);
    expect(result.current.leftTime).toBe(0);

    // 테스트 종료
  });

  it('카운트 다운 실행 테스트: 실행 -> 일시정지 -> 실행 -> 정지', async () => {
    const { result } = renderHook(() => useCountdown({ minute: 3 }));

    // 카운트다운 실행
    act(() => {
      result.current.handleCountdown('start');
    });
    expect(result.current.isCountdownRunning).toBe(true);
    expect(result.current.leftTime).toBeGreaterThan(0);

    // 5초 뒤에 일시 정지
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 카운트다운 일시정지
    act(() => {
      result.current.handleCountdown('pauseOrRestart');
    });
    expect(result.current.isCountdownRunning).toBe(false);
    expect(result.current.leftTime).toBeGreaterThan(0);

    // 카운트다운 실행
    act(() => {
      result.current.handleCountdown('start');
    });
    expect(result.current.isCountdownRunning).toBe(true);
    expect(result.current.leftTime).toBeGreaterThan(0);

    // 카운트다운 정지
    act(() => {
      result.current.handleCountdown('stop');
    });
    expect(result.current.isCountdownRunning).toBe(false);
    expect(result.current.leftTime).toBe(0);

    // 테스트 종료
  });
});
