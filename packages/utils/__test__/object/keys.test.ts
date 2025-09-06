import { describe, expect, it } from 'vitest';
import { keys } from '../../src/utils/object';

describe('object > keys', () => {
  it('object의 키값을 배열로 반환하는지 여부', () => {
    const testObj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const result = keys(testObj);

    expect(result).toEqual(['a', 'b', 'c']);
  });

  it('상속된 문자열 키 속성을 미포함하는지 여부', () => {
    // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-explicit-any
    function Foo(this: any) {
      this.a = 1;
    }
    Foo.prototype.b = 2;

    const expected = ['a'];
    const actual = keys(new Foo()).sort();

    expect(actual).toEqual(expected);
  });
});
