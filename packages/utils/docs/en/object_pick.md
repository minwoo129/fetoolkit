# Object(pick)

English | [한국어](../ko/object_pick.md)

- A function that creates a new object containing only specific keys from an object.

```tsx
pick(object, keys);
```

## Example

```tsx
import { pick } from '@fetoolkit/utils';

const testObj = {
  a: 1,
  b: 2,
  c: 3,
};
const value = pick(testObj, ['a', 'c']); // { a: 1, c: 3 }
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |object| T |true| Object to pick keys from |
  |keys| (K extends keyof T)[] |true| Keys to include |
- output(type): Pick<T, K>
