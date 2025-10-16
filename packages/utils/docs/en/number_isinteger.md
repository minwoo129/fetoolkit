# Numbers(isInteger)

English | [한국어](../ko/number_isinteger.md)

- A function that returns whether a value is an integer.
  - In this case, 0 is also included in integers and returned.

```tsx
isInteger(num);
```

## Example

```tsx
import { isInteger } from '@fetoolkit/utils';

const value1 = isInteger(1); // true
const value2 = isInteger(-5); // true
const value3 = isInteger(3.6); // false
const value4 = isInteger(-7.4); // false
const value5 = isInteger(0); // true
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |num| number |true|Number to check|
- output(type): boolean
