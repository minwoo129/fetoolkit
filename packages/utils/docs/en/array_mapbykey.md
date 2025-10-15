# Array(mapByKey)

English | [한국어](../ko/array_mapbykey.md)

- A function that maps only the values corresponding to a specific property (attribute) from an Array with object type elements and returns them as an Array

```tsx
mapByKey(array, key);
```

## Example

```tsx
import { mapByKey } from '@fetoolkit/utils';

type TestObj = {
  id: number;
  name: string;
  isMale: boolean;
};

const testArr = [
  {
    id: 1,
    name: 'John',
    isMale: true,
  },

  {
    id: 2,
    name: 'Jane',
    isMale: false,
  },
  {
    id: 3,
    name: 'Jim',
    isMale: true,
  },
  {
    id: 4,
    name: 'Jill',
    isMale: false,
  },
];
const num1 = mapByKey(testArr, 'id'); // [1, 2, 3, 4]
const num2 = mapByKey(testArr, 'name'); // ['John', 'Jane', 'Jim', 'Jill']
const num3 = mapByKey(testArr, 'isMale'); // [true, false, true, false]
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|Array with objects as elements|
  |key|K|true|Property name (key value) applied to element objects|
- output(type): Array<T[K]>
