import { beforeEach, describe, expect, it } from 'vitest';
import { count } from '../../src/utils/array';

describe('array > count', () => {
  let testArray: number[];
  let testArray2: number[];

  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5];
    testArray2 = [];
  });

  it('배열의 길이가 반환되는지 여부', () => {
    expect(count(testArray)).toBe(testArray.length);
  });

  it('빈 배열이 들어온 경우', () => {
    expect(count(testArray2)).toBe(0);
  });
});
