# Numbers(isNegativeInteger)

English | [한국어](../ko/number_isnegativeinteger.md)

- A function that returns whether a value is a negative integer.
  - In this case, 0 is not included in positive integers.

```tsx
isNegativeInteger(num);
```

## Example

```tsx
import { isNegativeInteger } from '@fetoolkit/utils';

const value1 = isNegativeInteger(1); // false
const value2 = isNegativeInteger(-5); // true
const value3 = isNegativeInteger(3.6); // false
const value4 = isNegativeInteger(-7.4); // false
const value5 = isNegativeInteger(0); // false
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |num| number |true|Number to check|
- output(type): boolean
