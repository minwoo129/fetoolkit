# Numbers(decommaizeNumber)

English | [한국어](../ko/number_decommaizenumber.md)

- A function that removes only commas from comma-separated numbers.

```tsx
decommaizeNumber(numStr);
```

## Example

```tsx
import { decommaizeNumber } from '@fetoolkit/utils';

const num1 = decommaizeNumber('13,209,802'); // 13209802
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |numStr| string|true|Number before removing commas|
- output(type): number
