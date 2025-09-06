import { describe, expect, it } from 'vitest';
import { uniqArray } from '../../src/utils/array';

describe('array > uniqArray', () => {
  it('숫자 배열', () => {
    const result = uniqArray([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('문자열 배열', () => {
    const result = uniqArray([
      'a',
      'b',
      'c',
      'd',
      'e',
      'a',
      'b',
      'c',
      'd',
      'e',
    ]);
    expect(result).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('boolean 배열', () => {
    const result = uniqArray([true, false, true, false, true, false]);
    expect(result).toEqual([true, false]);
  });

  it('객체 배열: 요소가 모두 다른 경우', () => {
    const result = uniqArray([
      { a: 1 },
      { b: 2 },
      { c: 3 },
      { a: 1 },
      { b: 2 },
      { c: 3 },
    ]);

    expect(result).toEqual([
      { a: 1 },
      { b: 2 },
      { c: 3 },
      { a: 1 },
      { b: 2 },
      { c: 3 },
    ]);
  });

  it('객체 배열: 동일한 객체 일부 포함', () => {
    const a = { a: 1 };
    const b = { b: 2 };
    const c = { c: 3 };

    const result = uniqArray([a, b, c, a, b, { d: 4 }]);
    expect(result).toEqual([a, b, c, { d: 4 }]);
  });

  it('혼합 요소 배열', () => {
    const b = { b: 2 };
    const result = uniqArray([
      1,
      'a',
      true,
      { a: 1 },
      'a',
      b,
      true,
      { a: 1 },
      b,
    ]);

    expect(result).toEqual([1, 'a', true, { a: 1 }, b, { a: 1 }]);
  });
});
