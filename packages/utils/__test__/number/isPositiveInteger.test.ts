import { describe, expect, it } from 'vitest';
import { isPositiveInteger } from '../../src/utils/number';

describe('number > isPositiveInteger', () => {
  it('양의 정수인 경우', () => {
    expect(isPositiveInteger(1)).toBe(true);
  });
  it('음의 정수인 경우', () => {
    expect(isPositiveInteger(-1)).toBe(false);
  });
  it('양의 실수인 경우', () => {
    expect(isPositiveInteger(1.5)).toBe(false);
  });
  it('음의 실수인 경우', () => {
    expect(isPositiveInteger(-3.5)).toBe(false);
  });
  it('0인 경우', () => {
    expect(isPositiveInteger(0)).toBe(false);
  });
});
