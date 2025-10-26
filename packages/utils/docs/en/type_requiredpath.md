# Utility Type(RequiredPath)

English | [한국어](../ko/type_requiredpath.md)

- Make specific properties required

```tsx
type RequiredPath<ObjectType, KeyPath>
```

## Example

```tsx
import { RequiredPath } from '@fetoolkit/utils';

type TestType1 = {
  name: string;
  age: number;
  email?: string;
  phone?: string;
  id: string;
  address?: {
    city?: string;
    street?: string;
    zip?: string;
  };
};

type TestType2 = RequiredPath<TestType1, 'phone'>;
type TestType3 = RequiredPath<TestType1, 'address'>;
type TestType4 = RequiredPath<TestType3, 'address.city'>;

const test2: TestType2 = {
  name: 'test',
  age: 20,
  phone: '010-1234-5678', // phone is required, so it must be provided
  id: '1234567890',
};

const test3: TestType3 = {
  name: 'test',
  age: 20,
  email: 'test@test.com',
  phone: '010-1234-5678',
  id: '1234567890',
  address: {
    // address is required, so it must be provided
    // internal properties are treated as optional
  },
};

const test4: TestType4 = {
  name: 'test',
  age: 20,
  email: 'test@test.com',
  phone: '010-1234-5678',
  id: '1234567890',
  address: {
    city: 'Seoul',
  },
};
```
