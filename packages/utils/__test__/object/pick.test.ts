import { describe, expect, it } from 'vitest';
import { pick } from '../../src/utils/object';

describe('object > pick', () => {
  it('object에서 특정 키를 선택한 새로운 객체를 생성하는지 여부', () => {
    const testObj = {
      a: 1,
      b: 2,
      c: 3,
    };

    const result = pick(testObj, ['a', 'c']);

    expect(result).toEqual({ a: 1, c: 3 });
    expect(testObj).toEqual({ a: 1, b: 2, c: 3 });
  });
});
