# Object(values)

English | [한국어](./values_kr.md)

- A function that returns the enumerable property values of an object.

```tsx
values(object);
```

## Example

```tsx
import { values } from '@fetoolkit/utils';

const testObj = {
  a: 1,
  b: 2,
  c: 3,
};
const keyArr = values(testObj); // [1, 2, 3]
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |object| T |true| Object to get values from |
- output(type): unknown[]
