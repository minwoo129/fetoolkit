import { renderHook } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { FEToolkitProvider } from '../../src/contexts';
import type { ValidatorType } from '../../src/contexts/ValidationContext';
import { useValidationCheck } from '../../src/hooks/useValidationCheck';

const pattern_eng = /[a-zA-Z]/;
const pattern_num = /[0-9]/;
const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
// eslint-disable-next-line no-useless-escape
const pattern_spc = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;

const Validators: ValidatorType<'email' | 'password'> = {
  email: {
    validator: (value) => {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    errorStatus: {
      errorCode: 'EMAIL_ERROR',
      errorMessage: '이메일 형식이 올바르지 않습니다.',
    },
  },
  password: {
    validator: (value) => {
      if (value.length < 8 || value.length > 15) {
        return false;
      }

      if (!pattern_eng.test(value)) return false; // 영어가 포함되지 않은 경우
      if (!pattern_num.test(value)) return false; // 숫자가 포함되지 않은 경우
      if (!pattern_spc.test(value)) return false; // 특수문자가 포함되지 않은 경우
      if (pattern_kor.test(value)) return false; // 한글이 포함된 경우
      return true;
    },
    errorStatus: {
      errorCode: 'PASSWORD_ERROR',
      errorMessage:
        '비밀번호는 8자 이상 15자 이하, 영어, 숫자, 특수문자, 한글을 포함해야 합니다.',
    },
  },
};

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <FEToolkitProvider validators={Validators}>{children}</FEToolkitProvider>
  );
};

describe('hook > useValidationCheck', () => {
  it('유효성 검사: 이메일 형식 검사', () => {
    const { result } = renderHook(
      () => useValidationCheck<typeof Validators>(),
      {
        wrapper,
      },
    );

    const { check } = result.current;

    const result1 = check('email', 'test@test.com');
    const result2 = check('email', 'test.test.com');
    const result3 = check('email', '123');

    expect(result1).toMatchObject({
      isPassed: true,
    });
    expect(result2).toMatchObject({
      isPassed: false,
      errorCode: 'EMAIL_ERROR',
      errorMessage: '이메일 형식이 올바르지 않습니다.',
    });
    expect(result3).toMatchObject({
      isPassed: false,
      errorCode: 'EMAIL_ERROR',
      errorMessage: '이메일 형식이 올바르지 않습니다.',
    });
  });

  it('유효성 검사: 비밀번호 검사', () => {
    const { result } = renderHook(
      () => useValidationCheck<typeof Validators>(),
      {
        wrapper,
      },
    );

    const { check } = result.current;

    const result1 = check('password', '12345678');
    const result2 = check('password', 'abc123**');

    expect(result1).toMatchObject({
      isPassed: false,
      errorCode: 'PASSWORD_ERROR',
      errorMessage:
        '비밀번호는 8자 이상 15자 이하, 영어, 숫자, 특수문자, 한글을 포함해야 합니다.',
    });
    expect(result2).toMatchObject({
      isPassed: true,
    });
  });
});
