import { beforeEach, describe, expect, it } from 'vitest';
import { groupBy } from '../../src/utils/array';

type GroupByTestObj = {
  category: string;
  name: string;
};

describe('array > groupBy', () => {
  let groupByTestArray: GroupByTestObj[];

  beforeEach(() => {
    groupByTestArray = [
      { category: 'fruit', name: 'apple' },
      { category: 'fruit', name: 'banana' },
      { category: 'vegetable', name: 'carrot' },
      { category: 'fruit', name: 'pear' },
      { category: 'vegetable', name: 'broccoli' },
    ];
  });

  it('category 프로퍼티를 기준으로 그룹화하는 경우', () => {
    const result = groupBy(groupByTestArray, (item) => item.category);
    expect(result).toEqual({
      fruit: [
        { category: 'fruit', name: 'apple' },
        { category: 'fruit', name: 'banana' },
        { category: 'fruit', name: 'pear' },
      ],
      vegetable: [
        { category: 'vegetable', name: 'carrot' },
        { category: 'vegetable', name: 'broccoli' },
      ],
    });
  });

  it('name 프로퍼티를 기준으로 그룹화하는 경우', () => {
    const result = groupBy(groupByTestArray, (item) => item.name);
    expect(result).toEqual({
      apple: [{ category: 'fruit', name: 'apple' }],
      banana: [{ category: 'fruit', name: 'banana' }],
      carrot: [{ category: 'vegetable', name: 'carrot' }],
      pear: [{ category: 'fruit', name: 'pear' }],
      broccoli: [{ category: 'vegetable', name: 'broccoli' }],
    });
  });
});
