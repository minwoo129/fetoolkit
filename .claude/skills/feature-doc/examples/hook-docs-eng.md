# React Hook 문서 예시(ENG)

> ### 참고
>
> - 아래 마크다운 블록 상에 적용되어 있는 상대경로 링크는 예시로 적용한 것으로 프롬프트 실행 시 읽지 말것(오류 발생 가능성 있음)

````md
# useInput

English | [한국어](../ko/hook_useinput.md)

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
````
