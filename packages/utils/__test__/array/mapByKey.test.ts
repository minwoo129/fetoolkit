import { beforeEach, describe, expect, it } from 'vitest';
import { mapByKey } from '../../src/utils/array';

type TestObj = {
  id: number;
  name: string;
  isMale: boolean;
};

describe('array > mapByKey', () => {
  let testObjArray: TestObj[];

  beforeEach(() => {
    testObjArray = [
      {
        id: 1,
        name: 'John',
        isMale: true,
      },

      {
        id: 2,
        name: 'Jane',
        isMale: false,
      },
      {
        id: 3,
        name: 'Jim',
        isMale: true,
      },
      {
        id: 4,
        name: 'Jill',
        isMale: false,
      },
    ];
  });

  it('value가 number인 key인 경우', () => {
    const result = mapByKey(testObjArray, 'id');
    expect(result).toStrictEqual([1, 2, 3, 4]);
    // 타입 체크: result는 number[] 타입이어야 함
    expect(typeof result[0]).toBe('number');
  });

  it('value가 string인 key인 경우', () => {
    const result = mapByKey(testObjArray, 'name');
    expect(result).toStrictEqual(['John', 'Jane', 'Jim', 'Jill']);
    // 타입 체크: result는 string[] 타입이어야 함
    expect(typeof result[0]).toBe('string');
  });

  it('value가 boolean인 key인 경우', () => {
    const result = mapByKey(testObjArray, 'isMale');
    expect(result).toStrictEqual([true, false, true, false]);
    // 타입 체크: result는 boolean[] 타입이어야 함
    expect(typeof result[0]).toBe('boolean');
  });
});
