import { describe, expect, it } from 'vitest';
import { commaizeNumber } from '../../src/utils/number';

describe('number > commaizeNumber', () => {
  it('정수에 천 단위 구분자를 추가한다', () => {
    expect(commaizeNumber(1000)).toBe('1,000');
    expect(commaizeNumber(12345)).toBe('12,345');
    expect(commaizeNumber(1234567)).toBe('1,234,567');
  });

  it('문자열 형태의 정수에 천 단위 구분자를 추가한다', () => {
    expect(commaizeNumber('1000')).toBe('1,000');
    expect(commaizeNumber('12345')).toBe('12,345');
    expect(commaizeNumber('1234567')).toBe('1,234,567');
  });

  it('소수점이 있는 숫자에 천 단위 구분자를 추가한다', () => {
    expect(commaizeNumber(1234.56)).toBe('1,234.56');
    expect(commaizeNumber(123456.789)).toBe('123,456.789');
    expect(commaizeNumber(1234567.89)).toBe('1,234,567.89');
  });

  it('문자열 형태의 소수에 천 단위 구분자를 추가한다', () => {
    expect(commaizeNumber('1234.56')).toBe('1,234.56');
    expect(commaizeNumber('123456.789')).toBe('123,456.789');
    expect(commaizeNumber('1234567.89')).toBe('1,234,567.89');
  });

  it('천 단위 미만의 숫자는 그대로 반환한다', () => {
    expect(commaizeNumber(123)).toBe('123');
    expect(commaizeNumber(999)).toBe('999');
    expect(commaizeNumber('456')).toBe('456');
  });

  it('천 단위 미만의 소수는 그대로 반환한다', () => {
    expect(commaizeNumber(123.45)).toBe('123.45');
    expect(commaizeNumber(999.99)).toBe('999.99');
    expect(commaizeNumber('456.78')).toBe('456.78');
  });

  it('0과 음수를 올바르게 처리한다', () => {
    expect(commaizeNumber(0)).toBe('0');
    expect(commaizeNumber(-1234)).toBe('-1,234');
    expect(commaizeNumber(-123456.78)).toBe('-123,456.78');
  });

  it('문자열 형태의 0과 음수를 올바르게 처리한다', () => {
    expect(commaizeNumber('0')).toBe('0');
    expect(commaizeNumber('-1234')).toBe('-1,234');
    expect(commaizeNumber('-123456.78')).toBe('-123,456.78');
  });

  it('큰 숫자를 올바르게 처리한다', () => {
    expect(commaizeNumber(1000000)).toBe('1,000,000');
    expect(commaizeNumber(1234567890)).toBe('1,234,567,890');
    expect(commaizeNumber(999999999.99)).toBe('999,999,999.99');
  });

  it('문자열 형태의 큰 숫자를 올바르게 처리한다', () => {
    expect(commaizeNumber('1000000')).toBe('1,000,000');
    expect(commaizeNumber('1234567890')).toBe('1,234,567,890');
    expect(commaizeNumber('999999999.99')).toBe('999,999,999.99');
  });

  it('소수점만 있는 경우를 올바르게 처리한다', () => {
    expect(commaizeNumber(0.123)).toBe('0.123');
    expect(commaizeNumber(0.123456)).toBe('0.123456');
    expect(commaizeNumber('0.123')).toBe('0.123');
  });

  it('정수 부분이 0인 소수를 올바르게 처리한다', () => {
    expect(commaizeNumber(0.1234)).toBe('0.1234');
    expect(commaizeNumber(0.123456)).toBe('0.123456');
    expect(commaizeNumber('0.1234')).toBe('0.1234');
  });

  it('여러 자리 소수점을 올바르게 처리한다', () => {
    expect(commaizeNumber(1234.123456)).toBe('1,234.123456');
    expect(commaizeNumber(123456.123456789)).toBe('123,456.123456789');
    expect(commaizeNumber('1234.123456')).toBe('1,234.123456');
  });

  it('이미 콤마가 포함된 문자열을 올바르게 처리한다', () => {
    expect(commaizeNumber('1,234')).toBe('1,234');
    expect(commaizeNumber('1,234.56')).toBe('1,234.56');
    expect(commaizeNumber('12,345,678')).toBe('12,345,678');
  });

  it('빈 문자열과 특수한 경우를 처리한다', () => {
    expect(commaizeNumber('')).toBe('');
    expect(commaizeNumber('0.0')).toBe('0.0');
    expect(commaizeNumber('0.00')).toBe('0.00');
  });

  it('매우 큰 숫자를 올바르게 처리한다', () => {
    expect(commaizeNumber(1000000000)).toBe('1,000,000,000');
    expect(commaizeNumber(1234567890123)).toBe('1,234,567,890,123');
    expect(commaizeNumber('1000000000')).toBe('1,000,000,000');
  });
});
