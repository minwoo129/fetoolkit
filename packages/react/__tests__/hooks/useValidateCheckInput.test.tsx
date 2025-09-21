import { act, renderHook } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { FEToolkitProvider } from '../../src/contexts';
import type { ValidatorType } from '../../src/contexts/ValidationContext';
import { useValidateCheckInput } from '../../src/hooks/useValidateCheckInput';

const pattern_eng = /[a-zA-Z]/;
const pattern_num = /[0-9]/;
const pattern_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
// eslint-disable-next-line no-useless-escape
const pattern_spc = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/;

const Validators: ValidatorType<
  'email' | 'password_length' | 'password_non_kor' | 'password_pattern'
> = {
  email: {
    validator: (value) => {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    errorStatus: {
      errorCode: 'EMAIL_ERROR',
      errorMessage: '이메일 형식이 올바르지 않습니다.',
    },
  },
  password_length: {
    validator: (value) => {
      return value.length >= 8 && value.length <= 15;
    },
    errorStatus: {
      errorCode: 'PASSWORD_LENGTH_ERROR',
      errorMessage: '비밀번호는 8자 이상 15자 이하여야 합니다.',
    },
  },
  password_non_kor: {
    validator: (value) => {
      return !pattern_kor.test(value);
    },
    errorStatus: {
      errorCode: 'PASSWORD_NON_KOR_ERROR',
      errorMessage: '비밀번호는 한글을 포함해서는 안됩니다.',
    },
  },
  password_pattern: {
    validator: (value) => {
      return (
        pattern_eng.test(value) &&
        pattern_num.test(value) &&
        pattern_spc.test(value)
      );
    },
    errorStatus: {
      errorCode: 'PASSWORD_PATTERN_ERROR',
      errorMessage: '비밀번호는 영어, 숫자, 특수문자를 포함해야 합니다.',
    },
  },
};

const wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <FEToolkitProvider validators={Validators}>{children}</FEToolkitProvider>
  );
};

describe('hook > useValidateCheckInput', () => {
  it('유효성 검사: 이메일 형식 검사1', () => {
    const { result } = renderHook(
      () => useValidateCheckInput<typeof Validators>('', ['email']),
      {
        wrapper,
      },
    );

    act(() => {
      result.current.input[1]('test@test.com');
    });

    expect(result.current.validation[0]).toMatchObject({
      isPassed: true,
    });
  });

  it('유효성 검사: 이메일 형식 검사2', () => {
    const { result } = renderHook(
      () => useValidateCheckInput<typeof Validators>('', ['email']),
      {
        wrapper,
      },
    );

    act(() => {
      result.current.input[1]('test.test.com');
    });

    expect(result.current.validation[0]).toMatchObject({
      isPassed: false,
      errorCode: 'EMAIL_ERROR',
      errorMessage: '이메일 형식이 올바르지 않습니다.',
    });
  });

  it('유효성 검사: 이메일 형식 검사3', () => {
    const { result } = renderHook(
      () => useValidateCheckInput<typeof Validators>('', ['email']),
      {
        wrapper,
      },
    );

    act(() => {
      result.current.input[1]('123');
    });

    expect(result.current.validation[0]).toMatchObject({
      isPassed: false,
      errorCode: 'EMAIL_ERROR',
      errorMessage: '이메일 형식이 올바르지 않습니다.',
    });
  });

  it('유효성 검사: 비밀번호 검사(길이조건 미충족)', () => {
    const { result } = renderHook(
      () =>
        useValidateCheckInput<typeof Validators>('', [
          'password_length',
          'password_non_kor',
          'password_pattern',
        ]),
      {
        wrapper,
      },
    );

    act(() => {
      result.current.input[1]('1234567');
    });

    expect(result.current.validation[0]).toMatchObject({
      isPassed: false,
      errorCode: 'PASSWORD_LENGTH_ERROR',
      errorMessage: '비밀번호는 8자 이상 15자 이하여야 합니다.',
    });
  });

  it('유효성 검사: 비밀번호 검사(한글미포함조건 미충족)', () => {
    const { result } = renderHook(
      () =>
        useValidateCheckInput<typeof Validators>('', [
          'password_length',
          'password_non_kor',
          'password_pattern',
        ]),
      {
        wrapper,
      },
    );

    act(() => {
      result.current.input[1]('12345678가나다');
    });

    expect(result.current.validation[0]).toMatchObject({
      isPassed: false,
      errorCode: 'PASSWORD_NON_KOR_ERROR',
      errorMessage: '비밀번호는 한글을 포함해서는 안됩니다.',
    });
  });

  it('유효성 검사: 비밀번호 검사(특수문자포함조건 미충족)', () => {
    const { result } = renderHook(
      () =>
        useValidateCheckInput<typeof Validators>('', [
          'password_length',
          'password_non_kor',
          'password_pattern',
        ]),
      {
        wrapper,
      },
    );

    act(() => {
      result.current.input[1]('1234abcd');
    });

    expect(result.current.validation[0]).toMatchObject({
      isPassed: false,
      errorCode: 'PASSWORD_PATTERN_ERROR',
      errorMessage: '비밀번호는 영어, 숫자, 특수문자를 포함해야 합니다.',
    });
  });

  it('유효성 검사: 비밀번호 검사(모든 조건 충족)', () => {
    const { result } = renderHook(
      () =>
        useValidateCheckInput<typeof Validators>('', [
          'password_length',
          'password_non_kor',
          'password_pattern',
        ]),
      {
        wrapper,
      },
    );

    act(() => {
      result.current.input[1]('1234abc!@');
    });

    expect(result.current.validation[0]).toMatchObject({
      isPassed: true,
    });
  });
});
