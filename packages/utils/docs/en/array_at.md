# Array(at)

English | [한국어](../ko/array_at.md)

- A function that returns the element at a specific index within an Array.
- Also supports negative indices.

```tsx
at(array, at);
```

## Example

```tsx
import { at } from '@fetoolkit/utils';

const testArr = [1, 23, 578, 456, 1234];
const num1 = at(testArr, 3); // 456
const num2 = at(testArr, -2); // 456
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|Array to search|
  |at|number|true|Index of the desired element|

- output(type): T | undefined
