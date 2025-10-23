import {
  useValidateCheckInput,
  UseValidateCheckInputType,
  useValidationCheck,
  UseValidationCheckType,
  ValidatorType,
} from '@fetoolkit/react';
import { Validators } from '../constants/validation';

export const useAppValidationCheck: <
  T extends ValidatorType = typeof Validators,
>() => UseValidationCheckType<T> = useValidationCheck;

export const useAppValidateCheckInput: <
  V extends ValidatorType = typeof Validators,
>(
  // eslint-disable-next-line no-unused-vars
  initialValue: string,
  // eslint-disable-next-line no-unused-vars
  validateKeys: (keyof V)[],
) => UseValidateCheckInputType<V> = useValidateCheckInput;
