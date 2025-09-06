# Array(mapByKey)

- 객체 타입 요소를 갖는 Array에서 특정 속성(어트리뷰트)에 해당하는 값만 매핑해서 Array로 반환하는 함수

```tsx
mapByKey(array, key);
```

## 기본 사용 예시

```tsx
import { mapByKey } from '@fetoolkit/utils';

type TestObj = {
  id: number;
  name: string;
  isMale: boolean;
};

const testArr = [
  {
    id: 1,
    name: 'John',
    isMale: true,
  },

  {
    id: 2,
    name: 'Jane',
    isMale: false,
  },
  {
    id: 3,
    name: 'Jim',
    isMale: true,
  },
  {
    id: 4,
    name: 'Jill',
    isMale: false,
  },
];
const num1 = mapByKey(testArr, 'id'); // [1, 2, 3, 4]
const num2 = mapByKey(testArr, 'name'); // ['John', 'Jane', 'Jim', 'Jill']
const num3 = mapByKey(testArr, 'isMale'); // [true, false, true, false]
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |array|T[]|true|객체를 요소로 갖는 배열|
  |key|K|true|요소 객체에 적용된 프로퍼티 이름(key 값)|
- 반환 타입: Array<T[K]>
