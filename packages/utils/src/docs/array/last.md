# Array(last)

English | [한국어](./last_kr.md)

- Returns the last element in an Array.

```tsx
last(array);
```

## Example

```tsx
import { last } from '@fetoolkit/utils';

const testArr = [1, 23, 578, 456, 1234];
const num1 = last(testArr); // 1234
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|Array to search|
- output(type): T | undefined
