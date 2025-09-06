import { beforeEach, describe, expect, it } from 'vitest';
import { chunk } from '../../src/utils/array';

describe('array > chunk', () => {
  let chunkTestArray: number[];

  beforeEach(() => {
    chunkTestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  });

  it('size가 양수 또는 정수가 아닌 경우', () => {
    expect(() => chunk(chunkTestArray, 0)).toThrow();
    expect(() => chunk(chunkTestArray, -1)).toThrow();
    expect(() => chunk(chunkTestArray, 1.5)).toThrow();
    expect(() => chunk(chunkTestArray, NaN)).toThrow();
    expect(() => chunk(chunkTestArray, Infinity)).toThrow();
    expect(() => chunk(chunkTestArray, -Infinity)).toThrow();
  });

  it('size가 배열의 길이보다 큰 경우', () => {
    const result = chunk(chunkTestArray, 100);
    expect(result).toStrictEqual([chunkTestArray]);
  });

  it('size가 배열의 길이와 같은 경우', () => {
    const result = chunk(chunkTestArray, chunkTestArray.length);
    expect(result).toStrictEqual([chunkTestArray]);
  });

  it('size가 배열의 길이보다 작은 경우', () => {
    const cases = [
      {
        size: 2,
        value: [
          [1, 2],
          [3, 4],
          [5, 6],
          [7, 8],
          [9, 10],
        ],
      },
      { size: 3, value: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]] },
      {
        size: 4,
        value: [
          [1, 2, 3, 4],
          [5, 6, 7, 8],
          [9, 10],
        ],
      },
      {
        size: 5,
        value: [
          [1, 2, 3, 4, 5],
          [6, 7, 8, 9, 10],
        ],
      },
      {
        size: 6,
        value: [
          [1, 2, 3, 4, 5, 6],
          [7, 8, 9, 10],
        ],
      },
      {
        size: 7,
        value: [
          [1, 2, 3, 4, 5, 6, 7],
          [8, 9, 10],
        ],
      },
      {
        size: 8,
        value: [
          [1, 2, 3, 4, 5, 6, 7, 8],
          [9, 10],
        ],
      },
      { size: 9, value: [[1, 2, 3, 4, 5, 6, 7, 8, 9], [10]] },
    ];

    for (const { size, value } of cases) {
      const result = chunk(chunkTestArray, size);
      expect(result).toStrictEqual(value);
    }
  });
});
