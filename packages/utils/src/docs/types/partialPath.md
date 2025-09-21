# Utility Type(PartialPath)

English | [한국어](./partialPath_kr.md)

- Make specific properties optional

```tsx
type PartialPath<ObjectType, KeyPath>
```

## Example

```tsx
import { PartialPath } from '@fetoolkit/utils';

type TestType1 = {
  name: string;
  age: number;
  email: string;
  phone: string;
  id: string;
  address: {
    city: string;
    street: string;
    zip: string;
  };
};

type TestType2 = PartialPath<TestType1, 'phone'>;
type TestType3 = PartialPath<TestType1, 'address.city'>;

const test2: TestType2 = {
  name: 'test',
  age: 20,
  email: 'test@test.com',
  id: '1234567890',
  address: {
    city: 'test',
    street: 'test',
    zip: '1234567890',
  },
  // phone is optional, so it can be omitted
};

const test3: TestType3 = {
  name: 'test',
  age: 20,
  email: 'test@test.com',
  phone: '010-1234-5678',
  id: '1234567890',
  address: {
    // city is optional, so it can be omitted
    street: 'test',
    zip: '1234567890',
  },
};
```

## API Reference

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |ObjectType|object|true|The target object type|
  |KeyPath|Path<ObjectType>|true|The path of the property to make optional (supports dot notation)|
- output(type): ObjectType with the specified path property made optional
