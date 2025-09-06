import { beforeEach, describe, expect, it } from 'vitest';
import { countOf } from '../../src/utils/array';

type TestType = {
  name: string;
  age: number;
};
describe('array > countBy', () => {
  let numberArr: number[];
  let stringArr: string[];
  let booleanArr: boolean[];
  let objectArr: TestType[];

  beforeEach(() => {
    numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    stringArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    booleanArr = [
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
      true,
      false,
    ];
    objectArr = [
      { name: 'a', age: 1 },
      { name: 'b', age: 2 },
      { name: 'c', age: 3 },
      { name: 'd', age: 4 },
      { name: 'e', age: 5 },
      { name: 'f', age: 6 },
      { name: 'g', age: 7 },
      { name: 'h', age: 8 },
      { name: 'i', age: 9 },
      { name: 'j', age: 10 },
    ];
  });

  it('number: 짝수 개수 카운트', () => {
    const result = countOf(numberArr, (item) => item % 2 === 0);

    expect(result).toBe(5);
  });

  it('number: 홀수 개수 카운트', () => {
    const result = countOf(numberArr, (item) => item % 2 !== 0);

    expect(result).toBe(5);
  });

  it('string: 아스키 코드 기준 e 이하인 문자 개수 카운드', () => {
    const result = countOf(
      stringArr,
      (item) => item.charCodeAt(0) <= 'e'.charCodeAt(0),
    );

    expect(result).toBe(5);
  });

  it('boolean: true 개수 카운트', () => {
    const result = countOf(booleanArr, (item) => item);

    expect(result).toBe(5);
  });

  it('boolean: false 개수 카운트', () => {
    const result = countOf(booleanArr, (item) => !item);

    expect(result).toBe(5);
  });

  it('object: age가 5 이상인 개수 카운트', () => {
    const result = countOf(objectArr, (item) => item.age >= 6);

    expect(result).toBe(5);
  });
});
