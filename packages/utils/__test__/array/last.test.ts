import { beforeEach, describe, expect, it } from 'vitest';
import { last } from '../../src/utils/array';

describe('array > last', () => {
  let testArray: number[];
  let emptyArray: number[] = [];

  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5];
    emptyArray = [];
  });

  it('배열의 마지막 요소가 반환되는지 여부', () => {
    expect(last(testArray)).toBe(testArray[testArray.length - 1]);
  });

  it('빈 배열이 들어온 경우', () => {
    expect(last(emptyArray)).toBe(undefined);
  });
});
