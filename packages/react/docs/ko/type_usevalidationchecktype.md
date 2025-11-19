# Type(UseValidationCheckType)

[English](../en/type_usevalidationchecktype.md) | 한국어

- useValidationCheck hook의 리턴타입.
  - 커스텀 hook을 만들때 사용할 수 있습니다.

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
