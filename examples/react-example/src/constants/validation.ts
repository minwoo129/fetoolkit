import type { ValidatorType } from '../../src';

export const Validators: ValidatorType<
  'email' | 'password_length' | 'number_test'
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
      return value.length >= 8;
    },
    errorStatus: {
      errorCode: 'PASSWORD_LENGTH_ERROR',
      errorMessage: '비밀번호는 8자 이상이어야 합니다.',
    },
  },
  number_test: {
    validator: (value) => {
      return typeof value === 'number';
    },
    errorStatus: {
      errorCode: 'NUMBER_TEST_ERROR',
      errorMessage: '숫자가 아닙니다.',
    },
  },
};
