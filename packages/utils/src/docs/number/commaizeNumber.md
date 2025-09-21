# Numbers(commaizeNumber)

English | [한국어](./commaizeNumber_kr.md)

- A function that separates a given number with commas.

```tsx
commaizeNumber(value);
```

## Example

```tsx
import { commaizeNumber } from '@fetoolkit/utils';

const num1 = commaizeNumber('13209802'); // 13,209,802
const num2 = commaizeNumber(13209802); // 13,209,802
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |value| string \| number|true|Number to process with commas|
- output(type): string
