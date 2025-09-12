# Array(find)

English | [한국어](./find_kr.md)

- A function that returns the first element in an array that meets the condition.
  - If the third fromIndex argument is declared, the search starts from that index.

```tsx
find(array, predicate, fromIndex);
```

## Example

```tsx
import { find } from '@fetoolkit/utils';

const testArr = [1, 2, 3, 4, 5];
const num1 = find(testArr, (item) => item === 2); // 2
const num2 = find(testArr, (item) => item === 8); // undefined
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|Array to search|
  |predicate| (item: T, index: number) => unknown |true|Test function|
  |fromIndex| number |false|First index to start searching from|
- output(type): T | undefined
