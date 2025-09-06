import { describe, expect, it } from 'vitest';
import { maskName } from '../../src/utils/mask';

describe('mask > maskName', () => {
  it('이름이 두자리인 경우', () => {
    expect(maskName('이한')).toBe('이*');
  });
  it('이름이 세자리인 경우', () => {
    expect(maskName('홍길동')).toBe('홍*동');
    expect(maskName('김철수')).toBe('김*수');
  });
  it('이름이 네자리인 경우', () => {
    expect(maskName('남궁민수')).toBe('남**수');
  });
});
