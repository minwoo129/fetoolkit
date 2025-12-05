# Utility Type(TypeOfProperty)

English | [한국어](../ko/type_typeofproperty.md)

- Extract the type of a property at a specific path in an object.

```tsx
type TypeOfProperty<ObjectType, KeyPath>
```

## Example

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

// Extract top-level property types
type NameType = TypeOfProperty<TestType, 'name'>; // string
type AgeType = TypeOfProperty<TestType, 'age'>; // number
type EmailType = TypeOfProperty<TestType, 'email'>; // string | undefined

// Extract nested property types
type CityType = TypeOfProperty<TestType, 'address.city'>; // string
type StreetType = TypeOfProperty<TestType, 'address.street'>; // string
type ZipType = TypeOfProperty<TestType, 'address.zip'>; // string | undefined

// Extract deeply nested property types
type LatType = TypeOfProperty<TestType, 'address.coordinates.lat'>; // number
type LngType = TypeOfProperty<TestType, 'address.coordinates.lng'>; // number

// Extract array types
type HobbiesType = TypeOfProperty<TestType, 'hobbies'>; // string[]
```
