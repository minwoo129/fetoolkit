# Array(count)

English | [한국어](./count_kr.md)

- A function that returns the length of an array.

```tsx
count(array);
```

## Example

```tsx
import { count } from '@fetoolkit/utils';

const testArr = [1, 23, 578, 456, 1234];
const num1 = count(testArr); // 5
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|Array to search|
- output(type): number
