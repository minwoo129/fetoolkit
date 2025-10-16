# Array(countBy)

English | [한국어](../ko/array_countby.md)

- A function that classifies elements in an array according to the value returned by a mapper function and returns the count.

```tsx
countBy(array, mapper);
```

## Example

```tsx
import { countBy } from '@fetoolkit/utils';

const testArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num1 = countBy(testArr, (item) => (item % 2 === 0 ? 'even' : 'odd')); // {even: 5, odd: 5}
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|Array to search|
  |mapper|(item: T) => PropertyKey|true|Mapper function for classification|
- output(type): Record<PropertyKey, number>
