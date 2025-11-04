# Type(UseValidateCheckInputType)

English | [한국어](../ko/type_usevalidatecheckinputtype.md)

- Return type of useValidateCheckInput hook.
  - Can be used when creating custom hooks

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
