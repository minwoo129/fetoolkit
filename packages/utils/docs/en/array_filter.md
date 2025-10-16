# Array(filter)

English | [한국어](../ko/array_filter.md)

- A function that filters only values that meet the conditions in an Array.
- You can set conditions in the second argument to filter.
  - It can be declared as a number Array including the callback function of the existing filter method.
  - When declared as a number Array, only elements at the index corresponding to that number are filtered.

```tsx
filter(array, filterBy);
```

## Example

```tsx
import { filter } from '@fetoolkit/utils';

const testArr = [1, 23, 578, 456, 1234];
const arr1 = filter(testArr, [0, 2, 3]); // [1, 578, 456]
const arr2 = filter(testArr, (item, index) => index % 2 === 0); // [1, 578, 1234]
```

## API Reference

- input
  | name | type |required| description |
  | :------: | :------------------------------------ | :---|:---------: |
  | array | T[] |true| Array to search |
  | filterBy | `(item: T, index: number) => boolean` |true| Function for filtering |

- output(type): T[]
