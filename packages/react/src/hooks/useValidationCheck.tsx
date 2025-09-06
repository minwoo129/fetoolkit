import { useCallback, useContext, useMemo } from 'react';
import ValidationContexts, {
  type ValidationStatusType,
  type ValidatorType,
} from '../contexts/ValidationContext';

export type UseValidationCheckType<T extends ValidatorType<string>> =
  ReturnType<typeof useValidationCheck<T>>;

export const useValidationCheck = <T extends ValidatorType<string>>() => {
  const { appValidators } = useContext(ValidationContexts);

  const check = useCallback(
    (key: keyof T, value: string) => {
      const { validator, errorStatus } = appValidators[key as string];
      const isPassed = validator(value);

      let result: ValidationStatusType = {
        isPassed,
      };

      if (!isPassed) {
        result = {
          isPassed,
          errorCode: errorStatus.errorCode,
          errorMessage: errorStatus.errorMessage,
        };
      }

      return result;
    },
    [appValidators],
  );

  return useMemo(() => ({ check }), [check]);
};
