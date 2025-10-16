# Object(isSameObj)

English | [한국어](../ko/object_issameobj.md)

- A function that returns whether two objects are the same.
  - Even if the object key order is different, it is considered the same object if only the values for the keys are the same.

```tsx
isSameObj(obj1, obj2);
```

## Example

```tsx
import { isSameObj } from '@fetoolkit/utils';

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, b: 2, c: 4 };
const obj4 = { b: 2, a: 1, c: 3 };

isSameObj(obj1, obj2); // true
isSameObj(obj1, obj3); // false
isSameObj(obj1, obj4); // true
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |obj1| Record<any, unknown> |true| First object to compare |
  |obj2| Record<any, unknown> |true| Second object to compare |
- output(type): boolean
