# Array(groupBy)

English | [한국어](../ko/array_groupby.md)

- A function that classifies array elements according to a given key generation function.

```tsx
groupBy(array, getKeyFromItem);
```

## Example

```tsx
import { groupBy } from '@fetoolkit/utils';

const array = [
  { category: 'fruit', name: 'apple' },
  { category: 'fruit', name: 'banana' },
  { category: 'vegetable', name: 'carrot' },
  { category: 'fruit', name: 'pear' },
  { category: 'vegetable', name: 'broccoli' },
];

// {
//     fruit: [
//         { category: 'fruit', name: 'apple' },
//         { category: 'fruit', name: 'banana' },
//         { category: 'fruit', name: 'pear' },
//     ],
//     vegetable: [
//         { category: 'vegetable', name: 'carrot' },
//         { category: 'vegetable', name: 'broccoli' },
//     ]
// }
const value = groupBy(array, (item) => item.category);
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|Array to search|
  |getKeyFromItem|(item: T) => PropertyKey|true|Function to generate key from element|
- output(type): Record<PropertyKey, T[]>
