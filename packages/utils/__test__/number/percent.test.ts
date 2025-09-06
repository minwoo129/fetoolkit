import { describe, expect, it } from 'vitest';
import { percent } from '../../src/utils/number';

describe('number > percent', () => {
  it('분자가 0인 경우', () => {
    const num = 0;
    const denom = 100;
    expect(percent(num, denom)).toBe('0');
  });
  it('분모가 0인 경우', () => {
    const num = 100;
    const denom = 0;
    expect(() => percent(num, denom)).toThrow();
  });
  it('분자가 0보다 작은 경우', () => {
    const num = -10;
    const denom = 100;
    expect(() => percent(num, denom)).toThrow();
  });
  it('분모가 0보다 작은 경우', () => {
    const num = 5;
    const denom = -100;
    expect(() => percent(num, denom)).toThrow();
  });
  it('분자가 분모보다 큰 경우', () => {
    const num = 100;
    const denom = 50;
    expect(() => percent(num, denom)).toThrow();
  });
  it('소숫점 아래 2자리까지 표현이 되는지 여부', () => {
    const num = 100;
    const denom = 200;

    expect(percent(num, denom, 2)).toBe('50.00');
  });
  it('소숫점 아래 3자리까지 표현이 되는지 여부', () => {
    const num = 100;
    const denom = 300;

    expect(percent(num, denom, 3)).toBe('33.333');
  });
});
