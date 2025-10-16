# Object(omit)

English | [한국어](../ko/object_omit.md)

- A function that creates a new object by omitting specific keys from an object.

```tsx
omit(object, keys);
```

## Example

```tsx
import { omit } from '@fetoolkit/utils';

const testObj = {
  a: 1,
  b: 2,
  c: 3,
};
const value = omit(testObj, ['b', 'c']); // { a: 1 }
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |object| T |true| Object to omit keys from |
  |keys| (K extends keyof T)[] |true| Keys to exclude |
- output(type): Omit<T, K>
