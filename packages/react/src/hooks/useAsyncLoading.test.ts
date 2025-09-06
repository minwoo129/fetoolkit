import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useAsyncLoading } from './useAsyncLoading';

describe('hook > useAsyncLoading', () => {
  const mockedAPI = async () => ({ result: 'success' });
  it('초기 상태 확인', () => {
    const { result } = renderHook(() => useAsyncLoading());
    expect(result.current[0]).toBe(false);
  });
  it('비동기 작업이 실행 중일 때, 로딩 상태가 true로 변경되는지 여부', async () => {
    const { result } = renderHook(() => useAsyncLoading());
    let promise: ReturnType<typeof mockedAPI>;
    act(() => {
      promise = result.current[1](mockedAPI());
    });
    expect(result.current[0]).toBe(true);
    // Mutation that may occur in the hook must be terminated in the act unconditionally
    await act(async () => {
      await promise;
    });
  });
  it('비동기 작업이 실행 중일 때, 상태가 true에서 다시 돌아가는지 여부', async () => {
    const { result } = renderHook(() => useAsyncLoading());
    let promise: ReturnType<typeof mockedAPI>;
    act(() => {
      promise = result.current[1](mockedAPI());
    });
    expect(result.current[0]).toBe(true);
    // Mutation that may occur in the hook must be terminated in the act unconditionally
    await act(async () => {
      await promise;
    });
    expect(result.current[0]).toBe(false);
  });
});
