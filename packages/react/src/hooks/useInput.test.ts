import { act, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { useInput } from './useInput';

describe('hook > useInput', () => {
  describe('입력값 타입: 리터럴(string)', () => {
    it('초기 상태 확인', () => {
      const { result } = renderHook(() => useInput(''));
      expect(result.current[0]).toBe('');
    });

    it('입력값 변경 테스트', () => {
      const { result } = renderHook(() => useInput(''));
      act(() => {
        result.current[1]('test');
      });
      expect(result.current[0]).toBe('test');
    });
  });
  describe('입력값 타입: 리터럴(number)', () => {
    it('초기 상태 확인', () => {
      const { result } = renderHook(() => useInput(0));
      expect(result.current[0]).toBe(0);
    });

    it('입력값 변경 테스트', () => {
      const { result } = renderHook(() => useInput(0));
      act(() => {
        result.current[1](1);
      });
      expect(result.current[0]).toBe(1);
    });
  });
  describe('입력값 타입: Object', () => {
    type TestType = {
      name: string;
      age: number;
      gender: 'male' | 'female';
    };
    it('초기 상태 확인', () => {
      const { result } = renderHook(() =>
        useInput<TestType>({ age: 0, gender: 'male', name: 'test' }),
      );
      expect(result.current[0]).toEqual({
        age: 0,
        gender: 'male',
        name: 'test',
      });
    });

    it('입력값 변경 테스트', () => {
      const { result } = renderHook(() =>
        useInput<TestType>({ age: 0, gender: 'male', name: 'test' }),
      );
      act(() => {
        result.current[1]({ age: 1, gender: 'female', name: 'test1' });
      });
      expect(result.current[0]).toEqual({
        age: 1,
        gender: 'female',
        name: 'test1',
      });
    });
  });
});
