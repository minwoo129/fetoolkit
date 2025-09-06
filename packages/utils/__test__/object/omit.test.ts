import { describe, expect, it } from 'vitest';
import { omit } from '../../src/utils/object';

describe('object > omit', () => {
  it('object에서 특정 키를 생략한 새로운 객체를 생성하는지 여부', () => {
    const testObj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const result = omit(testObj, ['b', 'c']);

    expect(result).toEqual({ a: 1 });
    expect(testObj).toEqual({ a: 1, b: 2, c: 3 });
  });
});
