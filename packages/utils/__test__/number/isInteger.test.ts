import { describe, expect, it } from 'vitest';
import { isInteger } from '../../src/utils/number';

describe('number > isInteger', () => {
  it('양의 정수인 경우', () => {
    expect(isInteger(1)).toBe(true);
  });
  it('음의 정수인 경우', () => {
    expect(isInteger(-1)).toBe(true);
  });
  it('양의 실수인 경우', () => {
    expect(isInteger(1.5)).toBe(false);
  });
  it('음의 실수인 경우', () => {
    expect(isInteger(-3.5)).toBe(false);
  });
  it('0인 경우', () => {
    expect(isInteger(0)).toBe(true);
  });
});
