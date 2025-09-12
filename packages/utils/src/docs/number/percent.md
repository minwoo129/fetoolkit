# Numbers(percent)

English | [한국어](./percent_kr.md)

- A function that calculates the division result as a percentage.
- Notes
  - Returns 'error' when the numerator is less than 0 or the denominator is less than or equal to 0.
  - Expressible range: 0 ~ 100
    - All other values will return an Error.  
      (Version 1.0.0 returned the string 'error', but from version 1.1.0 onwards, it throws an actual Error object, so please be careful when using it.)

```tsx
percent(num, denom, unit);
```

## Example

```tsx
import { percent } from '@fetoolkit/utils';

const num1 = percent(1, 3); // 33
const num2 = percent(1, 3, 2); // 33.33
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |num| number |true|Numerator|
  |denom| number |true|Denominator|
  |unit| number |false|Decimal places to round<br>(default: 0)|
- output(type): string
