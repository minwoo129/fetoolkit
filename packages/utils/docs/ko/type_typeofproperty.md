# Utility Type(TypeOfProperty)

[English](../en/type_typeofproperty.md) | 한국어

- 객체의 특정 경로에 해당하는 프로퍼티의 타입을 추출하는 유틸리티 타입입니다.

```tsx
type TypeOfProperty<ObjectType, KeyPath>
```

## 기본 사용 예시

```tsx
import { TypeOfProperty } from '@fetoolkit/utils';

type TestType = {
  name: string;
  age: number;
  email?: string;
  address: {
    city: string;
    street: string;
    zip?: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  hobbies: string[];
};

// 최상위 프로퍼티 타입 추출
type NameType = TypeOfProperty<TestType, 'name'>; // string
type AgeType = TypeOfProperty<TestType, 'age'>; // number
type EmailType = TypeOfProperty<TestType, 'email'>; // string | undefined

// 중첩된 프로퍼티 타입 추출
type CityType = TypeOfProperty<TestType, 'address.city'>; // string
type StreetType = TypeOfProperty<TestType, 'address.street'>; // string
type ZipType = TypeOfProperty<TestType, 'address.zip'>; // string | undefined

// 깊게 중첩된 프로퍼티 타입 추출
type LatType = TypeOfProperty<TestType, 'address.coordinates.lat'>; // number
type LngType = TypeOfProperty<TestType, 'address.coordinates.lng'>; // number

// 배열 타입 추출
type HobbiesType = TypeOfProperty<TestType, 'hobbies'>; // string[]
```
