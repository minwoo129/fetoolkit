# Object(forIn)

English | [한국어](../ko/object_forin.md)

- A function that iterates through an object and calls an iteratee function for each property.
  - If the iteratee function returns false, the execution of this function terminates.

```tsx
forIn(object, iteratee);
```

## Example

```tsx
import { forIn } from '@fetoolkit/utils';

const testObj = {
  a: 1,
  b: 2,
  c: 3,
};
forIn(testObj, (value, key) => {
  console.log(`${key}: ${value}`);
});

forIn(testObj, (value, key) => {
  return value !== 2;
});
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |object| T |true| Object to iterate over |
  |iteratee| (value: T[keyof T], key: keyof T, collection: T) => any |true| Iteratee function |
- output(type): void
