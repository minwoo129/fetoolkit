import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useLocalStorage } from './useLocalStorage';

describe('hook > useLocalStorage', async () => {
  type TestType = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };
  const testData: TestType = {
    name: 'test',
    age: 20,
    gender: 'male',
  };
  it('데이터 추가하기', () => {
    const { result } = renderHook(() => useLocalStorage());
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [get, set, _, clear] = result.current;

    act(() => {
      set<TestType>('testData', testData);
    });

    expect(get<TestType>('testData')).toEqual(testData);

    // 테스트 종료
    act(() => {
      clear();
    });
  });

  it('데이터 수정하기', () => {
    const { result } = renderHook(() => useLocalStorage());
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [get, set, _, clear] = result.current;

    act(() => {
      set<TestType>('testData', testData);
    });

    expect(get<TestType>('testData')).toEqual(testData);

    const testData2: TestType = {
      age: 21,
      gender: 'female',
      name: 'test2',
    };
    act(() => {
      set<TestType>('testData', testData2);
    });

    expect(get<TestType>('testData')).toEqual(testData2);

    // 테스트 종료
    act(() => {
      clear();
    });
  });

  it('데이터 삭제하기', () => {
    const { result } = renderHook(() => useLocalStorage());

    const [get, set, remove, clear] = result.current;

    act(() => {
      set<TestType>('testData', testData);
    });

    expect(get<TestType>('testData')).toEqual(testData);

    act(() => {
      remove('testData');
    });

    expect(get<TestType>('testData')).toBeNull();

    // 테스트 종료
    act(() => {
      clear();
    });
  });

  it('데이터 초기화하기', () => {
    const { result } = renderHook(() => useLocalStorage());
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
    const [get, set, _, clear] = result.current;

    act(() => {
      set<TestType>('testData', testData);
    });

    expect(get<TestType>('testData')).toEqual(testData);

    act(() => {
      clear();
    });

    expect(get<TestType>('testData')).toBeNull();
  });
});
