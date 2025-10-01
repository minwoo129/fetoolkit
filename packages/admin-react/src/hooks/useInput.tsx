import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
type UseInputReturnType<T> = [T, (value: T) => void];

export const useInput = <T,>(initialValue: T): UseInputReturnType<T> => {
  const [value, setValue] = useState<T>(initialValue);

  const handleChangeValue = (value: T) => {
    setValue(value);
  };

  return [value, handleChangeValue];
};
