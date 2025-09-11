# useLocalStorage

English | [한국어](./useLocalStorage_kr.md)

- A Hook for storing and managing data using the browser's `localStorage`.

## Example

```tsx
import { useLocalStorage } from '@fetoolkit/react'
...
const [get, set, remove, clear] = useLocalStorage()
```

## API Reference

### Input(none)

This Hook does not accept parameters.

### Output(tuple)

```typescript
[
  get: <T>(key: string) => Promise<T | null>;
  set: <T>(key: string, data: T) => Promise<null>;
  remove: <T>(key: string) => Promise<void>;
  clear: <T>() => Promise<void>;
]
```

| Name   | Type                                        | Description                                                                                                                                 |
| ------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| get    | <T>(key: string) => Promise<T \| null>      | Method to retrieve values stored in LocalStorage by the corresponding key.<br> - Generic types must be applied individually to each method. |
| set    | <T>(key: string, data: T) => Promise\<null> | Method to store values in LocalStorage.<br> - Generic types must be applied individually according to the key value.                        |
| remove | <T>(key: string) => Promise\<void>          | Method to delete data with the corresponding key value.                                                                                     |
| clear  | <T>() => Promise\<void>                     | Method to initialize the entire LocalStorage.                                                                                               |
