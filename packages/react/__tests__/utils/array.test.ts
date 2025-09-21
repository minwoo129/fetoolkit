import { beforeEach, describe, expect, it } from 'vitest';
import { ArrayUtils } from '../../src/utils/array';

describe('array', () => {
  let testArray: number[];
  let testArray2: number[];
  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5];
    testArray2 = [];
  });

  describe('at', () => {
    it('양수 index를 제공했을 경우', () => {
      expect(ArrayUtils.at(testArray, 0)).toBe(testArray[0]);
    });

    it('음수 index를 제공했을 경우', () => {
      expect(ArrayUtils.at(testArray, -3)).toBe(testArray[2]);
    });

    it('양수 index인데, 배열의 길이를 초과하는 값이 들어온 경우', () => {
      expect(ArrayUtils.at(testArray, 8)).toBe(testArray[3]);
    });

    it('음수 index인데, 배열의 길이를 초과하는 값이 들어온 경우', () => {
      expect(ArrayUtils.at(testArray, -9)).toBe(testArray[1]);
    });

    it('빈 배열에 양수 index가 들어온 경우', () => {
      expect(ArrayUtils.at(testArray2, 5)).toBe(undefined);
    });

    it('빈 배열에 음수 index가 들어온 경우', () => {
      expect(ArrayUtils.at(testArray2, 5)).toBe(undefined);
    });
  });

  describe('first', () => {
    it('배열의 첫 요소가 반환되는지 여부', () => {
      expect(ArrayUtils.first(testArray)).toBe(testArray[0]);
    });

    it('빈 배열이 들어온 경우', () => {
      expect(ArrayUtils.first(testArray2)).toBe(undefined);
    });
  });

  describe('last', () => {
    it('배열의 마지막 요소가 반환되는지 여부', () => {
      expect(ArrayUtils.last(testArray)).toBe(testArray[testArray.length - 1]);
    });

    it('빈 배열이 들어온 경우', () => {
      expect(ArrayUtils.last(testArray2)).toBe(undefined);
    });
  });
});
