# useValidateCheckInput

English | [한국어](../ko/hook_usevalidatecheckinput.md)

- A Hook that manages input values and validation together.
- Validates input values in real-time using validation functions provided by ValidationContext.

## Example

```tsx
import { useValidateCheckInput } from '@fetoolkit/react';
import type { Validators } from '@/utils/validation';

const {
  input: [password, handlePasswordChange],
  validation: [passwordValidationStatus, setPasswordValidationStatus],
} = useValidateCheckInput<typeof Validators>('', ['password_length']);
```

## API Reference

### Input

```typescript
(initialValue: string, validateKeys: (keyof V)[])
```

| Name         | Type        | Required | Description                      |
| ------------ | ----------- | -------- | -------------------------------- |
| initialValue | string      | true     | Initial value of the input field |
| validateKeys | (keyof V)[] | true     | Array of keys to validate        |

### Output(object)

```typescript
{
  input: [string, (value: string) => void];
  validation: [ValidationStatusType, React.Dispatch<React.SetStateAction<ValidationStatusType>>];
}
```

| Name                          | Type                                                     | Description                                                                                                                                                                                                                                |
| ----------------------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| input                         | tuple                                                    | Tuple containing input value and input value change handler                                                                                                                                                                                |
| inputValue                    | string                                                   | Current value entered by the user                                                                                                                                                                                                          |
| handleInputValueChange        | (value: string) => void                                  | Method to modify the user's input value                                                                                                                                                                                                    |
| validation                    | tuple                                                    | Tuple containing validation status and validation status change function                                                                                                                                                                   |
| inputValueValidationStatus    | ValidationStatusType                                     | Current validation result of the input value                                                                                                                                                                                               |
| setInputValueValidationStatus | Dispatch\<React.SetStateAction\<ValidationStatusType\>\> | Method to modify the validation result of the current input value. <br> (This value was added to allow manual modification of validation results when running asynchronous validation. Please avoid using it unless absolutely necessary.) |

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
