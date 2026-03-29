# 유틸리티 타입(TypeScript) 문서 예시(KOR)

> ### 참고
>
> - 아래 마크다운 블록 상에 적용되어 있는 상대경로 링크는 예시로 적용한 것으로 프롬프트 실행 시 읽지 말것(오류 발생 가능성 있음)

````md
# Utility Type(Path)

[English](../en/type_path.md) | 한국어

- 객체의 모든 가능한 프로퍼티 경로를 문자열 유니온 타입으로 추출하는 유틸리티 타입입니다.

```tsx
type Path<ObjectType>
```

## 기본 사용 예시

```tsx
import { Path } from '@fetoolkit/utils';

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

// Path<TestType>는 다음 타입과 같습니다:
// "name" | "age" | "email" | "address" | "address.city" | "address.street" | "address.zip" | "address.coordinates" | "address.coordinates.lat" | "address.coordinates.lng" | "hobbies"

type NamePath = Path<TestType>;
```
````
