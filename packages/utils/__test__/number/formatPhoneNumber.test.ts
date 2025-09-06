import { describe, expect, it } from 'vitest';
import { formatPhoneNumber } from '../../src/utils/number';

describe('number > formatPhoneNumber', () => {
  it('서울번호(02) 9자리 전화번호를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('021234567')).toBe('02-123-4567');
    expect(formatPhoneNumber('029876543')).toBe('02-987-6543');
    expect(formatPhoneNumber('025555555')).toBe('02-555-5555');
  });

  it('서울번호(02) 10자리 전화번호를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('0212345678')).toBe('02-1234-5678');
    expect(formatPhoneNumber('0298765432')).toBe('02-9876-5432');
    expect(formatPhoneNumber('0255555555')).toBe('02-5555-5555');
  });

  it('지역번호 3자리 9자리 전화번호를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('0311234567')).toBe('031-123-4567');
    expect(formatPhoneNumber('0329876543')).toBe('032-987-6543');
    expect(formatPhoneNumber('0335555555')).toBe('033-555-5555');
  });

  it('지역번호 3자리 10자리 전화번호를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('03112345678')).toBe('031-1234-5678');
    expect(formatPhoneNumber('03298765432')).toBe('032-9876-5432');
    expect(formatPhoneNumber('03355555555')).toBe('033-5555-5555');
  });

  it('지역번호 4자리 12자리 전화번호를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('050512345678')).toBe('0505-1234-5678');
    expect(formatPhoneNumber('050698765432')).toBe('0506-9876-5432');
    expect(formatPhoneNumber('050755555555')).toBe('0507-5555-5555');
  });

  it('011 휴대폰번호 9자리를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('0111234567')).toBe('011-123-4567');
    expect(formatPhoneNumber('0119876543')).toBe('011-987-6543');
    expect(formatPhoneNumber('0115555555')).toBe('011-555-5555');
  });

  it('011 휴대폰번호 10자리를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('01112345678')).toBe('011-1234-5678');
    expect(formatPhoneNumber('01198765432')).toBe('011-9876-5432');
    expect(formatPhoneNumber('01155555555')).toBe('011-5555-5555');
  });

  it('010 휴대폰번호 10자리를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('01012345678')).toBe('010-1234-5678');
    expect(formatPhoneNumber('01098765432')).toBe('010-9876-5432');
    expect(formatPhoneNumber('01055555555')).toBe('010-5555-5555');
  });

  it('다양한 지역번호 3자리 전화번호를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('0411234567')).toBe('041-123-4567');
    expect(formatPhoneNumber('0429876543')).toBe('042-987-6543');
    expect(formatPhoneNumber('0435555555')).toBe('043-555-5555');
    expect(formatPhoneNumber('0511234567')).toBe('051-123-4567');
    expect(formatPhoneNumber('0529876543')).toBe('052-987-6543');
    expect(formatPhoneNumber('0535555555')).toBe('053-555-5555');
  });

  it('다양한 지역번호 3자리 10자리 전화번호를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('04112345678')).toBe('041-1234-5678');
    expect(formatPhoneNumber('04298765432')).toBe('042-9876-5432');
    expect(formatPhoneNumber('04355555555')).toBe('043-5555-5555');
    expect(formatPhoneNumber('05112345678')).toBe('051-1234-5678');
    expect(formatPhoneNumber('05298765432')).toBe('052-9876-5432');
    expect(formatPhoneNumber('05355555555')).toBe('053-5555-5555');
  });

  it('다양한 지역번호 4자리 12자리 전화번호를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('050812345678')).toBe('0508-1234-5678');
    expect(formatPhoneNumber('050998765432')).toBe('0509-9876-5432');
    expect(formatPhoneNumber('050455555555')).toBe('0504-5555-5555');
    expect(formatPhoneNumber('050212345678')).toBe('0502-1234-5678');
    expect(formatPhoneNumber('050398765432')).toBe('0503-9876-5432');
    expect(formatPhoneNumber('050155555555')).toBe('0501-5555-5555');
  });

  it('다양한 휴대폰번호 010 10자리를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('01011111111')).toBe('010-1111-1111');
    expect(formatPhoneNumber('01022222222')).toBe('010-2222-2222');
    expect(formatPhoneNumber('01033333333')).toBe('010-3333-3333');
    expect(formatPhoneNumber('01044444444')).toBe('010-4444-4444');
    expect(formatPhoneNumber('01055555555')).toBe('010-5555-5555');
    expect(formatPhoneNumber('01066666666')).toBe('010-6666-6666');
  });

  it('다양한 휴대폰번호 011 9자리를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('0111111111')).toBe('011-111-1111');
    expect(formatPhoneNumber('0112222222')).toBe('011-222-2222');
    expect(formatPhoneNumber('0113333333')).toBe('011-333-3333');
    expect(formatPhoneNumber('0114444444')).toBe('011-444-4444');
    expect(formatPhoneNumber('0115555555')).toBe('011-555-5555');
    expect(formatPhoneNumber('0116666666')).toBe('011-666-6666');
  });

  it('다양한 휴대폰번호 011 10자리를 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('01111111111')).toBe('011-1111-1111');
    expect(formatPhoneNumber('01122222222')).toBe('011-2222-2222');
    expect(formatPhoneNumber('01133333333')).toBe('011-3333-3333');
    expect(formatPhoneNumber('01144444444')).toBe('011-4444-4444');
    expect(formatPhoneNumber('01155555555')).toBe('011-5555-5555');
    expect(formatPhoneNumber('01166666666')).toBe('011-6666-6666');
  });

  it('서울번호(02) 다양한 패턴을 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('0211111111')).toBe('02-1111-1111');
    expect(formatPhoneNumber('0222222222')).toBe('02-2222-2222');
    expect(formatPhoneNumber('0233333333')).toBe('02-3333-3333');
    expect(formatPhoneNumber('0244444444')).toBe('02-4444-4444');
    expect(formatPhoneNumber('0255555555')).toBe('02-5555-5555');
    expect(formatPhoneNumber('0266666666')).toBe('02-6666-6666');
  });

  it('서울번호(02) 9자리 다양한 패턴을 올바르게 포맷팅한다', () => {
    expect(formatPhoneNumber('021111111')).toBe('02-111-1111');
    expect(formatPhoneNumber('022222222')).toBe('02-222-2222');
    expect(formatPhoneNumber('023333333')).toBe('02-333-3333');
    expect(formatPhoneNumber('024444444')).toBe('02-444-4444');
    expect(formatPhoneNumber('025555555')).toBe('02-555-5555');
    expect(formatPhoneNumber('026666666')).toBe('02-666-6666');
  });
});
