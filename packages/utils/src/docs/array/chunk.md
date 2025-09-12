# Array(chunk)

English | [한국어](./chunk_kr.md)

- A function that divides an array into smaller arrays according to a specified length.

```tsx
chunk(array, size);
```

## Example

```tsx
import { chunk } from '@fetoolkit/utils';

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr1 = chunk(testArr, 3); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|Array to search|
  |size|number|true|Size to chunk <br>(Returns an error if not a natural number)|

- output(type): T[][]
