# Utility Type(PartialPath)

[English](../en/type_partialpath.md) | 한국어

- 특정 경로상의 프로퍼티를 optional로 처리하는 유틸리티 타입입니다.

```tsx
type PartialPath<ObjectType, KeyPath>
```

## 기본 사용 예시

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
  // phone은 optional이므로 생략 가능
};

const test3: TestType3 = {
  name: 'test',
  age: 20,
  email: 'test@test.com',
  phone: '010-1234-5678',
  id: '1234567890',
  address: {
    // city는 optional이므로 생략 가능
    street: 'test',
    zip: '1234567890',
  },
};
```

## API 문서

- input
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |ObjectType|object|true|대상이 되는 객체 타입|
  |KeyPath|Path<ObjectType>|true|optional로 만들 프로퍼티의 경로 (점 표기법 지원)|
- output(type): ObjectType에서 지정된 경로의 프로퍼티가 optional로 변경된 타입
