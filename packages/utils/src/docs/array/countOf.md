# Array(countOf)

English | [한국어](./countOf_kr.md)

- Returns the count of elements in the array that satisfy the result of the predicate method.

```tsx
countOf(array, predicate);
```

## Example

```tsx
import { countOf } from '@fetoolkit/utils';

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num1 = countOf(testArr, (item) => item % 2 === 0); // 5
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|Array to search|
  |predicate|(item: T, index: number) => boolean|true|Method to check if element satisfies condition|
- output(type): number
