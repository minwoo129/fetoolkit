import { beforeEach, describe, expect, it } from 'vitest';
import { countBy } from '../../src/utils/array';

describe('array > countBy', () => {
  let countByTestArray: number[];

  beforeEach(() => {
    countByTestArray = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ];
  });

  it('각 요소를 키값으로 지정하는 경우', () => {
    const result = countBy(countByTestArray, String);

    expect(result).toEqual({
      '1': 2,
      '2': 2,
      '3': 2,
      '4': 2,
      '5': 2,
      '6': 2,
      '7': 2,
      '8': 2,
      '9': 2,
      '10': 2,
    });
  });

  it('짝수인지 홀수인지 판별하는 경우', () => {
    const result = countBy(countByTestArray, (item) =>
      item % 2 === 0 ? 'even' : 'odd',
    );

    expect(result).toEqual({
      even: 10,
      odd: 10,
    });
  });
});
