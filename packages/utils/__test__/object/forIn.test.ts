import { describe, expect, it } from 'vitest';
import { forIn } from '../../src/utils/object';

describe('object > forIn', () => {
  it('객체의 모든 속성을 순회하며 콜백 함수를 실행한다', () => {
    const testObj = { a: 1, b: 2, c: 3 };
    const result: Array<{ value: number; key: string }> = [];

    forIn(testObj, (value, key) => {
      result.push({ value, key });
    });

    expect(result).toEqual([
      { value: 1, key: 'a' },
      { value: 2, key: 'b' },
      { value: 3, key: 'c' },
    ]);
  });

  it('빈 객체에 대해 콜백 함수가 실행되지 않는다', () => {
    const testObj = {};
    let callCount = 0;

    forIn(testObj, () => {
      callCount++;
    });

    expect(callCount).toBe(0);
  });

  it('콜백 함수가 false를 반환하면 순회를 중단한다', () => {
    const testObj = { a: 1, b: 2, c: 3, d: 4 };
    const result: Array<{ value: number; key: string }> = [];

    forIn(testObj, (value, key) => {
      result.push({ value, key });
      if (key === 'b') {
        return false;
      }
    });

    expect(result).toEqual([
      { value: 1, key: 'a' },
      { value: 2, key: 'b' },
    ]);
  });

  it('문자열 값들을 가진 객체를 순회한다', () => {
    const testObj = { name: 'John', city: 'Seoul', country: 'Korea' };
    const result: Array<{ value: string; key: string }> = [];

    forIn(testObj, (value, key) => {
      result.push({ value, key });
    });

    expect(result).toEqual([
      { value: 'John', key: 'name' },
      { value: 'Seoul', key: 'city' },
      { value: 'Korea', key: 'country' },
    ]);
  });

  it('boolean 값들을 가진 객체를 순회한다', () => {
    const testObj = { isActive: true, isVisible: false, isEnabled: true };
    const result: Array<{ value: boolean; key: string }> = [];

    forIn(testObj, (value, key) => {
      result.push({ value, key });
    });

    expect(result).toEqual([
      { value: true, key: 'isActive' },
      { value: false, key: 'isVisible' },
      { value: true, key: 'isEnabled' },
    ]);
  });

  it('혼합 타입 값들을 가진 객체를 순회한다', () => {
    const testObj = {
      id: 1,
      name: 'test',
      isActive: true,
      score: 95.5,
      tags: ['tag1', 'tag2'],
    };
    const result: Array<{ value: unknown; key: string }> = [];

    forIn(testObj, (value, key) => {
      result.push({ value, key });
    });

    expect(result).toEqual([
      { value: 1, key: 'id' },
      { value: 'test', key: 'name' },
      { value: true, key: 'isActive' },
      { value: 95.5, key: 'score' },
      { value: ['tag1', 'tag2'], key: 'tags' },
    ]);
  });

  it('콜백 함수의 세 번째 매개변수로 원본 객체를 받는다', () => {
    const testObj = { a: 1, b: 2 };
    let receivedObject: typeof testObj | null = null;

    forIn(testObj, (value, key, collection) => {
      receivedObject = collection;
    });

    expect(receivedObject).toBe(testObj);
  });

  it('큰 객체(100개 속성)를 순회한다', () => {
    const testObj: Record<string, number> = {};
    for (let i = 0; i < 100; i++) {
      testObj[`key${i}`] = i;
    }

    let count = 0;
    forIn(testObj, () => {
      count++;
    });

    expect(count).toBe(100);
  });

  it('콜백 함수가 undefined를 반환해도 순회를 계속한다', () => {
    const testObj = { a: 1, b: 2, c: 3 };
    const result: Array<{ value: number; key: string }> = [];

    forIn(testObj, (value, key) => {
      result.push({ value, key });
      return undefined;
    });

    expect(result).toEqual([
      { value: 1, key: 'a' },
      { value: 2, key: 'b' },
      { value: 3, key: 'c' },
    ]);
  });

  it('콜백 함수가 null을 반환해도 순회를 계속한다', () => {
    const testObj = { a: 1, b: 2 };
    const result: Array<{ value: number; key: string }> = [];

    forIn(testObj, (value, key) => {
      result.push({ value, key });
      return null;
    });

    expect(result).toEqual([
      { value: 1, key: 'a' },
      { value: 2, key: 'b' },
    ]);
  });
});
