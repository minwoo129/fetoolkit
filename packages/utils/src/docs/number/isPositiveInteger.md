# Numbers(isPositiveInteger)

English | [한국어](./isPositiveInteger_kr.md)

- A function that returns whether a value is a positive integer.
  - In this case, 0 is not included in positive integers.

```tsx
isPositiveInteger(num);
```

## Example

```tsx
import { isPositiveInteger } from '@fetoolkit/utils';

const value1 = isPositiveInteger(1); // true
const value2 = isPositiveInteger(-5); // false
const value3 = isPositiveInteger(3.6); // false
const value4 = isPositiveInteger(-7.4); // false
const value5 = isPositiveInteger(0); // false
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |num| number |true|Number to check|
- output(type): boolean
