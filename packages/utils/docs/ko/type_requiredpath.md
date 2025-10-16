# Utility Type(RequiredPath)

[English](../en/type_requiredpath.md) | 한국어

- 특정 경로상의 프로퍼티를 required로 처리하는 유틸리티 타입입니다.

```tsx
type RequiredPath<ObjectType, KeyPath>
```

## 기본 사용 예시

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
  phone: '010-1234-5678', // phone이 required가 되었으므로 반드시 제공해야 함
  id: '1234567890',
};

const test3: TestType3 = {
  name: 'test',
  age: 20,
  email: 'test@test.com',
  phone: '010-1234-5678',
  id: '1234567890',
  address: {
    // address가 required가 되었으므로 반드시 제공해야 함
    // 내부 프로퍼티는 optional로 처리됨
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
