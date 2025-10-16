# Array(findIndex)

English | [한국어](../ko/array_findindex.md)

- A function that returns the index of the first element in an array that meets the condition.
  - If the third fromIndex argument is declared, the search starts from that index.

```tsx
findIndex(array, predicate, fromIndex);
```

## Example

```tsx
import { findIndex } from '@fetoolkit/utils';

const testArr = [1, 2, 3, 4, 5];
const num1 = findIndex(testArr, (item) => item === 2); // 1
const num2 = findIndex(testArr, (item) => item === 8); // undefined
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|Array to search|
  |predicate| (item: T, index: number) => unknown |true|Test function|
  |fromIndex| number |false|First index to start searching from|
- output(type): number | undefined
