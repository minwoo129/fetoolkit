# Array(isSameArr)

English | [한국어](./isSameArr_kr.md)

- A function that returns whether the elements in two arrays are identical, including their order.

```tsx
isSameArr(arr1, arr2);
```

## Example

```tsx
import { isSameArr } from '@fetoolkit/utils';

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];
const arr4 = [1, 2, 3, 4];
const arr5 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const arr6 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const arr7 = [...arr5];
const arr8 = ['1', '2', '3'];

isSameArr(arr1, arr2); // true
isSameArr(arr1, arr3); // false
isSameArr(arr1, arr4); // false
isSameArr(arr5, arr6); // false => In JavaScript concept, they are recognized as different objects even if they have the same structure.
isSameArr(arr5, arr7); // true
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |arr1|unknown[]|true|First array to compare|
  |arr2|unknown[]|true|Second array to compare|
- output(type): boolean
