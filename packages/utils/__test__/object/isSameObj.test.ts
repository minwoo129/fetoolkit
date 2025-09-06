import { describe, expect, it } from 'vitest';
import { isSameObj } from '../../src/utils/object';

describe('object > isSameObj', () => {
  it('같은 참조를 가진 객체는 true를 반환한다', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = obj1;

    expect(isSameObj(obj1, obj2)).toBe(true);
  });

  it('내용이 같은 객체는 true를 반환한다', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 30 };

    expect(isSameObj(obj1, obj2)).toBe(true);
  });

  it('키의 개수가 다른 객체는 false를 반환한다', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John' };

    expect(isSameObj(obj1, obj2)).toBe(false);
  });

  it('값이 다른 객체는 false를 반환한다', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'Jane', age: 30 };

    expect(isSameObj(obj1, obj2)).toBe(false);
  });

  it('키가 다른 객체는 false를 반환한다', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { firstName: 'John', age: 30 };

    expect(isSameObj(obj1, obj2)).toBe(false);
  });

  it('빈 객체들은 true를 반환한다', () => {
    const obj1 = {};
    const obj2 = {};

    expect(isSameObj(obj1, obj2)).toBe(true);
  });

  it('중첩된 객체는 참조로 비교한다', () => {
    const nested = { value: 42 };
    const obj1 = { name: 'John', nested };
    const obj2 = { name: 'John', nested };

    expect(isSameObj(obj1, obj2)).toBe(true);
  });

  it('다른 중첩 객체 참조는 false를 반환한다', () => {
    const obj1 = { name: 'John', nested: { value: 42 } };
    const obj2 = { name: 'John', nested: { value: 42 } };

    expect(isSameObj(obj1, obj2)).toBe(false);
  });

  it('다양한 타입의 값들을 가진 객체를 비교한다', () => {
    const obj1 = {
      string: 'test',
      number: 123,
      boolean: true,
      null: null,
      undefined: undefined,
    };
    const obj2 = {
      string: 'test',
      number: 123,
      boolean: true,
      null: null,
      undefined: undefined,
    };

    expect(isSameObj(obj1, obj2)).toBe(true);
  });

  it('배열을 값으로 가진 객체를 비교한다', () => {
    const obj1 = { items: [1, 2, 3] };
    const obj2 = { items: [1, 2, 3] };

    expect(isSameObj(obj1, obj2)).toBe(false);
  });

  it('함수를 값으로 가진 객체를 비교한다', () => {
    const func = () => 'test';
    const obj1 = { method: func };
    const obj2 = { method: func };

    expect(isSameObj(obj1, obj2)).toBe(true);
  });

  it('다른 함수를 값으로 가진 객체는 false를 반환한다', () => {
    const obj1 = { method: () => 'test' };
    const obj2 = { method: () => 'test' };

    expect(isSameObj(obj1, obj2)).toBe(false);
  });

  it('큰 객체(100개 키)를 비교한다', () => {
    const createLargeObj = () => {
      const obj: Record<string, number> = {};
      for (let i = 0; i < 100; i++) {
        obj[`key${i}`] = i;
      }
      return obj;
    };

    const obj1 = createLargeObj();
    const obj2 = createLargeObj();

    expect(isSameObj(obj1, obj2)).toBe(true);
  });

  it('큰 객체에서 값이 다른 경우 false를 반환한다', () => {
    const createLargeObj = () => {
      const obj: Record<string, number> = {};
      for (let i = 0; i < 100; i++) {
        obj[`key${i}`] = i;
      }
      return obj;
    };

    const obj1 = createLargeObj();
    const obj2 = createLargeObj();
    obj2.key50 = 999; // 하나의 값만 변경

    expect(isSameObj(obj1, obj2)).toBe(false);
  });

  it('Symbol을 키로 가진 객체를 비교한다', () => {
    const sym1 = Symbol('test');
    const sym2 = Symbol('test');
    const obj1 = { [sym1]: 'value1' };
    const obj2 = { [sym1]: 'value1' };
    const obj3 = { [sym2]: 'value1' };

    expect(isSameObj(obj1, obj2)).toBe(true);
    expect(isSameObj(obj1, obj3)).toBe(false);
  });

  it('숫자를 키로 가진 객체를 비교한다', () => {
    const obj1 = { 1: 'one', 2: 'two' };
    const obj2 = { 1: 'one', 2: 'two' };
    const obj3 = { 1: 'one', 3: 'three' };

    expect(isSameObj(obj1, obj2)).toBe(true);
    expect(isSameObj(obj1, obj3)).toBe(false);
  });
});
