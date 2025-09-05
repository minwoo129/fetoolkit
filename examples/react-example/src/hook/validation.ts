/* eslint-disable no-unused-vars */
import type {
  UseValidateCheckInputType,
  UseValidationCheckType,
  ValidatorType,
} from '@fetoolkit/react/src';
import {
  useValidateCheckInput,
  useValidationCheck,
} from '@fetoolkit/react/src';
import type { Validators } from '../constants/validation';

export const useAppValidationCheck: <
  T extends ValidatorType = typeof Validators,
>() => UseValidationCheckType<T> = useValidationCheck;

export const useAppValidateCheckInput: <
  V extends ValidatorType = typeof Validators,
>(
  initialValue: string,
  validateKeys: (keyof V)[],
) => UseValidateCheckInputType<V> = useValidateCheckInput;
