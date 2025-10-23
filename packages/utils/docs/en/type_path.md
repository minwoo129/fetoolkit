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
