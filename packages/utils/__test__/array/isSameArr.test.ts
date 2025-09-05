import { describe, expect, it } from 'vitest';
import { isSameArr } from '../../src/utils/array';

describe('array > isSameArr', () => {
  it('숫자 배열: 동일한 배열인 경우', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];

    expect(isSameArr(arr1, arr2)).toBe(true);
  });

  it('숫자 배열: 길이 동일, 값이 동일하지 않은 배열인 경우', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];

    expect(isSameArr(arr1, arr2)).toBe(false);
  });

  it('숫자 배열: 길이 다른 배열인 경우', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3, 4];

    expect(isSameArr(arr1, arr2)).toBe(false);
  });

  it('객체 배열: 동일한 배열인 경우', () => {
    const arr1 = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const arr2 = [...arr1];

    expect(isSameArr(arr1, arr2)).toBe(true);
  });

  it('객체 배열: 길이, 값은 동일하지만 객체정보가 다른 경우', () => {
    const arr1 = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const arr2 = [{ a: 1 }, { b: 2 }, { c: 3 }];

    expect(isSameArr(arr1, arr2)).toBe(false);
  });

  it('객체 배열: 길이 동일, 값이 동일하지 않은 배열인 경우', () => {
    const arr1 = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const arr2 = [{ a: 1 }, { b: 2 }, { c: 4 }];

    expect(isSameArr(arr1, arr2)).toBe(false);
  });

  it('객체 배열: 길이 다른 배열인 경우', () => {
    const arr1 = [{ a: 1 }, { b: 2 }, { c: 3 }];
    const arr2 = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];

    expect(isSameArr(arr1, arr2)).toBe(false);
  });

  it('두 배열의 요소 타입이 모두 다른 경우', () => {
    const arr1 = [1, 2, 3];
    const arr2 = ['1', '2', '3'];

    expect(isSameArr(arr1, arr2)).toBe(false);
  });
});
