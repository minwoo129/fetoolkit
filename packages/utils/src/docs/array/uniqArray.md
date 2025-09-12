# Array(uniqArray)

English | [한국어](./uniqArray_kr.md)

- A function that returns a new array with duplicate elements removed from the array.

```tsx
uniqArray(arr);
```

## Example

```tsx
import { uniqArray } from '@fetoolkit/utils';

const arr1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e'];
const arr3 = [true, false, true, false, true, false];
const arr4 = [{ a: 1 }, { b: 2 }, { c: 3 }, { a: 1 }, { b: 2 }, { c: 3 }];

const a = { a: 1 };
const b = { b: 2 };
const c = { c: 3 };
const arr5 = [a, b, c, a, c];

uniqArray(arr1); // [1, 2, 3, 4, 5]
uniqArray(arr2); // ['a', 'b', 'c', 'd', 'e']
uniqArray(arr3); // [true, false]
uniqArray(arr4); // [{ a: 1 }, { b: 2 }, { c: 3 }, { a: 1 }, { b: 2 }, { c: 3 }] => Due to JavaScript object structure, they are recognized as different objects.
uniqArray(arr5); // [{ a: 1 }, { b: 2 }, { c: 3 }]
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |arr|T[]|true|Array to search|
- output(type): T[]
