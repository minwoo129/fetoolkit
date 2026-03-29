# 유틸리티 타입(TypeScript) 문서 예시(ENG)

> ### 참고
>
> - 아래 마크다운 블록 상에 적용되어 있는 상대경로 링크는 예시로 적용한 것으로 프롬프트 실행 시 읽지 말것(오류 발생 가능성 있음)

````md
# Utility Type(Path)

English | [한국어](../ko/type_path.md)

- Extract all possible property paths of an object as a string union type.

```tsx
type Path<ObjectType>
```

## Example

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

// Path<TestType> is equivalent to:
// "name" | "age" | "email" | "address" | "address.city" | "address.street" | "address.zip" | "address.coordinates" | "address.coordinates.lat" | "address.coordinates.lng" | "hobbies"

type NamePath = Path<TestType>;
```
````
