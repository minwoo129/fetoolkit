# Object(keys)

English | [한국어](./keys_kr.md)

- A function that returns the enumerable property names of an object.

```tsx
keys(object);
```

## Example

```tsx
import { keys } from '@fetoolkit/utils';

const testObj = {
  a: 1,
  b: 2,
  c: 3,
};
const keyArr = keys(testObj); // ['a', 'b', 'c']
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |object| T |true| Object to get keys from |
- output(type): string[]
