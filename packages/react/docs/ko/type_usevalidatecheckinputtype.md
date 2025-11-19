# Type(UseValidateCheckInputType)

[English](../en/type_usevalidatecheckinputtype.md) | 한국어

- useValidateCheckInput hook의 리턴타입.
  - 커스텀 hook을 만들때 사용할 수 있습니다.

```tsx
UseValidateCheckInputType<ValidatorType<string>>;
```

```tsx
import type {
  UseValidateCheckInputType,
  ValidatorType,
} from '@fetoolkit/react';
import { useValidateCheckInput } from '@fetoolkit/react';
import type { Validators } from '@/utils/validation';

export const useAppValidateCheckInput: <
  V extends ValidatorType = typeof Validators,
>(
  initialValue: string,
  validateKeys: (keyof V)[],
) => UseValidateCheckInputType<V> = useValidateCheckInput;
```
