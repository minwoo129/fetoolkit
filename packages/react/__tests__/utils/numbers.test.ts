import { describe, expect, it } from 'vitest';
import { NumbersUtils } from '../../src/utils/numbers';

describe('number > formatPhoneNumber', () => {
  describe('휴대폰번호 X', () => {
    it('서울번호(02), 가운데가 세자리인 경우', () => {
      const phoneNumber = '021234567';
      expect(NumbersUtils.formatPhoneNumber(phoneNumber)).toBe('02-123-4567');
    });
    it('서울번호(02), 가운데가 네자리인 경우', () => {
      const phoneNumber = '0212345678';
      expect(NumbersUtils.formatPhoneNumber(phoneNumber)).toBe('02-1234-5678');
    });
    it('첫 단위가 세자리, 가운데가 세자리인 경우', () => {
      const phoneNumber = '0311234567';
      expect(NumbersUtils.formatPhoneNumber(phoneNumber)).toBe('031-123-4567');
    });
    it('첫 단위가 세자리, 가운데가 네자리인 경우', () => {
      const phoneNumber = '03112345678';
      expect(NumbersUtils.formatPhoneNumber(phoneNumber)).toBe('031-1234-5678');
    });
    it('첫 단위가 네자리, 가운데가 네자리인 경우', () => {
      const phoneNumber = '050512345678';
      expect(NumbersUtils.formatPhoneNumber(phoneNumber)).toBe(
        '0505-1234-5678',
      );
    });
  });
  describe('휴대폰번호: 010 표준 이전', () => {
    it('첫 번호가 011, 가운데가 세자리인 경우', () => {
      const phoneNumber = '0111234567';
      expect(NumbersUtils.formatPhoneNumber(phoneNumber)).toBe('011-123-4567');
    });
    it('첫 번호가 011, 가운데가 네자리인 경우', () => {
      const phoneNumber = '01112345678';
      expect(NumbersUtils.formatPhoneNumber(phoneNumber)).toBe('011-1234-5678');
    });
  });
  describe('휴대폰번호: 010 표준 이후', () => {
    it('첫 번호가 010, 가운데가 네자리인 경우', () => {
      const phoneNumber = '01012345678';
      expect(NumbersUtils.formatPhoneNumber(phoneNumber)).toBe('010-1234-5678');
    });
  });
});

describe('number > commaizeNumber', () => {
  it('소숫점 단위까지 존재하는 경우', () => {
    const value = '1234567.89';
    expect(NumbersUtils.commaizeNumber(value)).toBe('1,234,567.89');
  });
  it('소숫점 단위가 없는 경우', () => {
    const value = '1234567';
    expect(NumbersUtils.commaizeNumber(value)).toBe('1,234,567');
  });
});

describe('number > decommaizeNumber', () => {
  it('소숫점 단위까지 존재하는 경우', () => {
    const value = '1,234,567.89';
    expect(NumbersUtils.decommaizeNumber(value)).toBe(1234567.89);
  });
  it('소숫점 단위가 없는 경우', () => {
    const value = '1,234,567';
    expect(NumbersUtils.decommaizeNumber(value)).toBe(1234567);
  });
});
