import { beforeEach, describe, expect, it } from 'vitest';
import { findIndex } from '../../src/utils/array';

describe('array > findIndex', () => {
  let testArray: number[];

  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5];
  });

  it('predicate가 true를 반환하는 요소가 있는 경우', () => {
    const result = findIndex(testArray, (item) => item > 3);
    expect(result).toBe(3);
  });

  it('predicate가 true를 반환하는 요소가 없는 경우', () => {
    const result = findIndex(testArray, (item) => item > 10);
    expect(result).toBe(undefined);
  });

  it('fromIndex가 제공된 경우', () => {
    const result = findIndex(testArray, (item) => item > 3, 2);
    expect(result).toBe(3);
  });

  it('fromIndex가 제공된 경우, predicate가 true를 반환하는 요소가 없는 경우', () => {
    const result = findIndex(testArray, (item) => item > 10, 2);
    expect(result).toBe(undefined);
  });

  it('fromIndex이 배열의 길이보다 큰 경우, predicate가 true를 반환하는 요소가 없는 경우', () => {
    const result = findIndex(testArray, (item) => item > 10, 20);
    expect(result).toBe(undefined);
  });
});
