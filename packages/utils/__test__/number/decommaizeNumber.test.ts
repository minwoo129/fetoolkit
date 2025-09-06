import { describe, expect, it } from 'vitest';
import { decommaizeNumber } from '../../src/utils/number';

describe('number > decommaizeNumber', () => {
  it('콤마가 포함된 정수 문자열을 숫자로 변환한다', () => {
    expect(decommaizeNumber('1,000')).toBe(1000);
    expect(decommaizeNumber('12,345')).toBe(12345);
    expect(decommaizeNumber('1,234,567')).toBe(1234567);
  });

  it('콤마가 포함된 소수 문자열을 숫자로 변환한다', () => {
    expect(decommaizeNumber('1,234.56')).toBe(1234.56);
    expect(decommaizeNumber('123,456.789')).toBe(123456.789);
    expect(decommaizeNumber('1,234,567.89')).toBe(1234567.89);
  });

  it('콤마가 없는 숫자 문자열을 그대로 변환한다', () => {
    expect(decommaizeNumber('1000')).toBe(1000);
    expect(decommaizeNumber('12345')).toBe(12345);
    expect(decommaizeNumber('1234.56')).toBe(1234.56);
  });

  it('음수 문자열을 올바르게 변환한다', () => {
    expect(decommaizeNumber('-1,234')).toBe(-1234);
    expect(decommaizeNumber('-123,456.78')).toBe(-123456.78);
    expect(decommaizeNumber('-1,234,567')).toBe(-1234567);
  });

  it('0과 소수점만 있는 문자열을 올바르게 변환한다', () => {
    expect(decommaizeNumber('0')).toBe(0);
    expect(decommaizeNumber('0.123')).toBe(0.123);
    expect(decommaizeNumber('0.0')).toBe(0);
  });

  it('큰 숫자 문자열을 올바르게 변환한다', () => {
    expect(decommaizeNumber('1,000,000')).toBe(1000000);
    expect(decommaizeNumber('1,234,567,890')).toBe(1234567890);
    expect(decommaizeNumber('999,999,999.99')).toBe(999999999.99);
  });

  it('여러 자리 소수점을 가진 문자열을 올바르게 변환한다', () => {
    expect(decommaizeNumber('1,234.123456')).toBe(1234.123456);
    expect(decommaizeNumber('123,456.123456789')).toBe(123456.123456789);
    expect(decommaizeNumber('1,234.000001')).toBe(1234.000001);
  });

  it('정수 부분이 0인 소수 문자열을 올바르게 변환한다', () => {
    expect(decommaizeNumber('0.1234')).toBe(0.1234);
    expect(decommaizeNumber('0.123456')).toBe(0.123456);
    expect(decommaizeNumber('0.000001')).toBe(0.000001);
  });

  it('매우 큰 숫자 문자열을 올바르게 변환한다', () => {
    expect(decommaizeNumber('1,000,000,000')).toBe(1000000000);
    expect(decommaizeNumber('1,234,567,890,123')).toBe(1234567890123);
    expect(decommaizeNumber('999,999,999,999.99')).toBe(999999999999.99);
  });

  it('빈 문자열과 특수한 경우를 처리한다', () => {
    expect(decommaizeNumber('')).toBe(0);
    expect(decommaizeNumber('0.0')).toBe(0);
    expect(decommaizeNumber('0.00')).toBe(0);
  });

  it('음의 소수 문자열을 올바르게 변환한다', () => {
    expect(decommaizeNumber('-1,234.56')).toBe(-1234.56);
    expect(decommaizeNumber('-0.123')).toBe(-0.123);
    expect(decommaizeNumber('-999,999.99')).toBe(-999999.99);
  });

  it('과학적 표기법이 아닌 일반 숫자 문자열을 변환한다', () => {
    expect(decommaizeNumber('1,000')).toBe(1000);
    expect(decommaizeNumber('12,345.67')).toBe(12345.67);
    expect(decommaizeNumber('1,234,567.89')).toBe(1234567.89);
  });

  it('앞뒤 공백이 있는 문자열을 처리한다', () => {
    expect(decommaizeNumber(' 1,000 ')).toBe(1000);
    expect(decommaizeNumber(' 12,345.67 ')).toBe(12345.67);
    expect(decommaizeNumber(' 1,234,567 ')).toBe(1234567);
  });

  it('여러 콤마가 연속으로 있는 경우를 처리한다', () => {
    expect(decommaizeNumber('1,,000')).toBe(1000);
    expect(decommaizeNumber('1,,,234.56')).toBe(1234.56);
    expect(decommaizeNumber('1,2,3,4,5')).toBe(12345);
  });

  it('소수점이 여러 개 있는 경우를 처리한다', () => {
    expect(decommaizeNumber('1,234.56.78')).toBeNaN();
    expect(decommaizeNumber('1,234..56')).toBeNaN();
    expect(decommaizeNumber('1,234.56.')).toBeNaN();
  });
});
