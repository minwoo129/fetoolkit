# Array(isSameArr)

- 두 배열에 들어가있는 요소가 순서까지 모두 동일한지 여부를 반환하는 함수입니다.

```tsx
isSameArr(arr1, arr2);
```

## 기본 사용 예시

```tsx
import { isSameArr } from '@fetoolkit/utils';

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];
const arr4 = [1, 2, 3, 4];
const arr5 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const arr6 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const arr7 = [...arr5];
const arr8 = ['1', '2', '3'];

isSameArr(arr1, arr2); // true
isSameArr(arr1, arr3); // false
isSameArr(arr1, arr4); // false
isSameArr(arr5, arr6); // false => javascript 개념상 구조가 같아도 다른 객체로 인식되기 때문입니다.
isSameArr(arr5, arr7); // true
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |arr1|unknown[]|true|탐색할 배열|
  |arr2|unknown[]|true|탐색할 배열|
- 반환 타입: boolean
