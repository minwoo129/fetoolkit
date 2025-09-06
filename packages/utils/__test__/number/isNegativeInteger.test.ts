import { describe, expect, it } from 'vitest';
import { isNegativeInteger } from '../../src/utils/number';

describe('number > isNegativeInteger', () => {
  it('양의 정수인 경우', () => {
    expect(isNegativeInteger(1)).toBe(false);
  });
  it('음의 정수인 경우', () => {
    expect(isNegativeInteger(-1)).toBe(true);
  });
  it('양의 실수인 경우', () => {
    expect(isNegativeInteger(1.5)).toBe(false);
  });
  it('음의 실수인 경우', () => {
    expect(isNegativeInteger(-3.5)).toBe(false);
  });
  it('0인 경우', () => {
    expect(isNegativeInteger(0)).toBe(false);
  });
});
