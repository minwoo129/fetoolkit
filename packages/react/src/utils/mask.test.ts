import { describe, expect, it } from 'vitest';
import { MaskUtils } from './mask';

describe('mask > maskPhoneNumber', () => {
  describe('하이픈이 없는 전화번호들에 대해 마스킹이 처리되는 경우', () => {
    [
      { input: '021234567', output: '02***4567' },
      { input: '0212345678', output: '02****5678' },
      { input: '0311234567', output: '031***4567' },
      { input: '03112345678', output: '031****5678' },
      { input: '0111234567', output: '011***4567' },
      { input: '01112345678', output: '011****5678' },
      { input: '01012345678', output: '010****5678' },
    ].forEach(({ input, output }) => {
      it(`input: ${input}, output: ${output}`, () => {
        expect(MaskUtils.maskPhoneNumber(input)).toBe(output);
      });
    });
  });
  describe('하이픈이 있는 전화번호들에 대해 마스킹이 처리되는 경우', () => {
    [
      { input: '02-123-4567', output: '02-***-4567' },
      { input: '02-1234-5678', output: '02-****-5678' },
      { input: '031-123-4567', output: '031-***-4567' },
      { input: '031-1234-5678', output: '031-****-5678' },
      { input: '011-123-4567', output: '011-***-4567' },
      { input: '010-1234-5678', output: '010-****-5678' },
    ].forEach(({ input, output }) => {
      it(`input: ${input}, output: ${output}`, () => {
        expect(MaskUtils.maskPhoneNumber(input)).toBe(output);
      });
    });
  });
});

describe('mask > maskName', () => {
  it('이름이 두자리인 경우', () => {
    expect(MaskUtils.maskName('이한')).toBe('이*');
  });
  it('이름이 세자리인 경우', () => {
    expect(MaskUtils.maskName('홍길동')).toBe('홍*동');
    expect(MaskUtils.maskName('김철수')).toBe('김*수');
  });
  it('이름이 네자리인 경우', () => {
    expect(MaskUtils.maskName('남궁민수')).toBe('남**수');
  });
});
