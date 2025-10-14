# useValidationCheck

English | [한국어](../ko/hook_usevalidationcheck.md)

- A Hook to validate values using validation functions provided by ValidationContext.
- Returns validation results along with error codes and messages.

## Example

```tsx
import { useValidationCheck } from '@fetoolkit/react';
import type { Validators } from '@/utils/validation';

const { check } = useValidationCheck<typeof Validators>();

// Example usage
const result = check('email', 'user@example.com');
if (result.isPassed) {
  console.log('Validation passed');
} else {
  console.log('Validation failed:', result.errorMessage);
}
```

## API Reference

### Input(none)

This Hook does not accept parameters.

### Output(object)

```typescript
{
  check: (key: keyof T, value: string) => ValidationStatusType;
}
```

| Name  | Type                                                  | Description                                                                                                                                                                                                               |
| ----- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| check | (key: keyof T, value: string) => ValidationStatusType | Method that executes validation functions registered in ValidationContext and returns validation results <br> - key: Key of the item to validate <br> - value: Value to validate <br> - Returns: Validation result object |

### Types

#### ValidationStatusType

```typescript
export type ValidationStatusType = {
  /** Whether validation passed */
  isPassed: boolean;
  /** Error code when validation fails */
  errorCode?: string;
  /** Error message when validation fails */
  errorMessage?: string;
};
```

| Name         | Type                | Description                         |
| ------------ | ------------------- | ----------------------------------- |
| isPassed     | boolean             | Whether validation passed           |
| errorCode    | string \| undefined | Error code when validation fails    |
| errorMessage | string \| undefined | Error message when validation fails |
