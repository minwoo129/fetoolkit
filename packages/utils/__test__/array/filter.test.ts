import { beforeEach, describe, expect, it } from 'vitest';
import { filter } from '../../src/utils/array';

describe('array > filter', () => {
  let testArray: number[];

  beforeEach(() => {
    testArray = [1, 2, 3, 4, 5];
  });

  it('filterBy가 배열인 경우(배열길이: 1)', () => {
    const filterBy = [2];
    expect(filter(testArray, filterBy)).toStrictEqual([3]);
  });
  it('filterBy가 배열인 경우(배열길이: 2)', () => {
    const filterBy = [0, 2];
    expect(filter(testArray, filterBy)).toStrictEqual([1, 3]);
  });
  it('filterBy가 배열인 경우(배열길이: 3)', () => {
    const filterBy = [2, 3, 4];
    expect(filter(testArray, filterBy)).toStrictEqual([3, 4, 5]);
  });
  it('filterBy가 배열인 경우(배열길이: 4)', () => {
    const filterBy = [0, 1, 2, 3];
    expect(filter(testArray, filterBy)).toStrictEqual([1, 2, 3, 4]);
  });
  it('filterBy가 메서드인 경우', () => {
    expect(filter(testArray, (item) => item > 3)).toStrictEqual([4, 5]);
  });
});
