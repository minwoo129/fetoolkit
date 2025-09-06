import { beforeEach, describe, expect, it } from 'vitest';
import { first } from '../../src/utils/array';

describe('array > first', () => {
  let testArray: number[];
  let emptyArray: number[] = [];

  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5];
    emptyArray = [];
  });

  it('배열의 첫 요소가 반환되는지 여부', () => {
    expect(first(testArray)).toBe(testArray[0]);
  });

  it('빈 배열이 들어온 경우', () => {
    expect(first(emptyArray)).toBe(undefined);
  });
});
