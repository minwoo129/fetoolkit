# Numbers(formatPhoneNumber)

English | [한국어](./formatPhoneNumber_kr.md)

- A function that converts a phone number to a format with hyphens (-).

```tsx
formatPhoneNumber(phoneNumber);
```

## Example

```tsx
import { formatPhoneNumber } from '@fetoolkit/utils';

const num1 = formatPhoneNumber('01012345678'); // 010-1234-5678
const num2 = formatPhoneNumber('021234567'); // 02-123-4567
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |phoneNumber| string |true|Phone number to format|
- output(type): string
