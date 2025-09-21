# useInput

English | [한국어](./useInput_kr.md)

- A Hook for managing user's actual input values in input tags.

## Example

```tsx
import { useInput } from '@fetoolkit/react';

  ...

  const [name, handleChangeName] = useInput(''); // Type inference is induced
  const [age, handleChangeAge] = useInput<number>(0); // Type is explicitly specified
```

## API Reference

### Input(T)

Pass an initial value that matches the generic type T.

| Name         | Type | Required | Description   |
| :----------- | :--- | :------- | :------------ |
| initialValue | T    | true     | Initial value |

### Output(tuple)

```typescript
[value: T, handleValueChange: (value: T) => void]
```

| Name              | Type               | Description                        |
| ----------------- | ------------------ | ---------------------------------- |
| value             | T                  | Currently stored value after input |
| handleValueChange | (value: T) => void | Method for storing input values    |
