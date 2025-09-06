import { beforeEach, describe, expect, it } from 'vitest';
import { at } from '../../src/utils/array';

describe('array > at', () => {
  let testArray: number[];
  let emptyArray: number[] = [];

  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5];
    emptyArray = [];
  });

  it('양수 index를 제공했을 경우', () => {
    expect(at(testArray, 0)).toBe(testArray[0]);
  });

  it('음수 index를 제공했을 경우', () => {
    expect(at(testArray, -3)).toBe(testArray[2]);
  });

  it('양수 index인데, 배열의 길이를 초과하는 값이 들어온 경우', () => {
    expect(at(testArray, 8)).toBe(testArray[3]);
  });

  it('음수 index인데, 배열의 길이를 초과하는 값이 들어온 경우', () => {
    expect(at(testArray, -9)).toBe(testArray[1]);
  });

  it('빈 배열에 양수 index가 들어온 경우', () => {
    expect(at(emptyArray, 5)).toBe(undefined);
  });

  it('빈 배열에 음수 index가 들어온 경우', () => {
    expect(at(emptyArray, 5)).toBe(undefined);
  });
});
