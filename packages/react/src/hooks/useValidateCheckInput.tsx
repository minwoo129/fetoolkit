import { useCallback, useContext, useMemo, useState } from 'react';
import type {
  ValidationStatusType,
  ValidatorType,
} from '../contexts/ValidationContext';
import ValidationContexts from '../contexts/ValidationContext';

export type UseValidateCheckInputType<V extends ValidatorType<string>> =
  ReturnType<typeof useValidateCheckInput<V>>;

export const useValidateCheckInput = <V extends ValidatorType<string>>(
  initialValue: string,
  validateKeys: (keyof V)[],
): {
  // eslint-disable-next-line no-unused-vars
  input: [string, (value: string) => void];
  validation: [
    ValidationStatusType,
    React.Dispatch<React.SetStateAction<ValidationStatusType>>,
  ];
} => {
  const { appValidators } = useContext(ValidationContexts);
  const [value, setValue] = useState(initialValue);
  const [validationStatus, setValidationStatus] =
    useState<ValidationStatusType>({ isPassed: false });

  const handleChange = useCallback(
    (value: string) => {
      setValue(value);

      for (const key of validateKeys) {
        const { validator, errorStatus } = appValidators[key as string];
        const isPassed = validator(value);
        if (isPassed) {
          continue;
        }

        setValidationStatus({
          isPassed,
          errorCode: errorStatus.errorCode,
          errorMessage: errorStatus.errorMessage,
        });

        return;
      }

      setValidationStatus({
        isPassed: true,
      });
    },
    [appValidators, validateKeys],
  );

  return useMemo(
    () => ({
      input: [value, handleChange],
      validation: [validationStatus, setValidationStatus],
    }),
    [value, handleChange, validationStatus, setValidationStatus],
  );
};
