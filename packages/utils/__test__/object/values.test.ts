import { describe, expect, it } from 'vitest';
import { values } from '../../src/utils/object';

describe('object > values', () => {
  it('object의 value값을 배열로 반환하는지 여부', () => {
    const testObj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const result = values(testObj);

    expect(result).toEqual([1, 2, 3]);
  });

  it("'length' 라는 key값을 가지고 있는 객체에서 동작하는지 여부", () => {
    const testObj = {
      0: 'a',
      1: 'b',
      length: 2,
    };

    const result = values(testObj).sort();

    expect(result).toEqual([2, 'a', 'b']);
  });

  it('상속된 문자열 키 속성값을 미포함하는지 여부', () => {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
    function Foo(this: any) {
      this.a = 1;
    }
    Foo.prototype.b = 2;

    const expected = [1];
    // eslint-disable-next-line
    // @ts-ignore
    const actual = values(new Foo()).sort();

    expect(actual).toEqual(expected);
  });
});
