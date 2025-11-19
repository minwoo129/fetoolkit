# Type(UseValidationCheckType)

English | [한국어](../ko/type_usevalidationchecktype.md)

- Return type of useValidationCheck hook.
  - Can be used when creating custom hooks

```tsx
UseValidationCheckType<ValidatorType<string>>;
```

```tsx
import type { UseValidationCheckType, ValidatorType } from '@fetoolkit/react';
import { useValidationCheck } from '@fetoolkit/react';
import type { Validators } from '@/utils/validation';

export const useAppValidationCheck: <
  T extends ValidatorType = typeof Validators,
>() => UseValidationCheckType<T> = useValidationCheck;
```
