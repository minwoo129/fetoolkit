# Array(first)

English | [한국어](../ko/array_first.md)

- Returns the first element in an Array.

```tsx
first(array);
```

## Example

```tsx
import { first } from '@fetoolkit/utils';

const testArr = [1, 23, 578, 456, 1234];
const num1 = first(testArr); // 1
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|Array to search|
- output(type): T | undefined
