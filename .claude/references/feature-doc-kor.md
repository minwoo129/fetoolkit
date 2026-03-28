# 한국어버전 기능 문서 기본 템플릿

> ### 참고
>
> - 아래 마크다운 블록 상에 적용되어 있는 상대경로 링크는 예시로 적용한 것으로 프롬프트 실행 시 읽지 말것(오류 발생 가능성 있음)

````md
# {기능 명}

[English](../en/{feature}.md) | 한국어 // {feature}에는 현재 파일명을 그대로 적용하면 됨.

- 기능 설명
- 개조식으로 작성

```ts
// 실제 기능의 타입스크립트 코드
// import 구문 미포함
// 만약 컴포넌트 설명 문서인 경우 해당 블록은 작성하지 않음
```

## 기본 사용 예시

```ts
// 타입스크립트 코드 블록 생성 후 실제 사용자가 호출할 때의 코드를 작성
// import 구문 포함 필요
```

## API 설명

> #### 참고
>
> - 유틸리티 타입 문서인 경우 API Reference 블록을 작성하지 않고 타이틀을 삭제한다.
> - API 문서 작성시에는 input 또는 output 타입, 컴포넌트의 Props가 제네릭 타입에 영향을 받는지 반드시 확인해야 함.
> - 컴포넌트의 경우에는 prop의 타입 작성 시 타입스크립트 코드와 같은 제네릭 코드 작성방식을 사용하면 됨.
> - 만약 Hook, 유틸리티 타입인 경우 H3 타이틀을 사용하여 "Input", "Output"으로 구분하여 표 형식으로 작성한다.
> - 아래 표 제목 설명
>   - Name: Props 또는 함수의 인수명(Example 상단 또는 하단 코드블록에서 참고)
>   - Type: Props 또는 함수의 인수 타입(Example 상단 또는 하단 코드블록에서 참고)
>   - Required: 해당 값이 필수인지 여부(boolean)
>   - Description: 해당 값의 기본 역할 및 설명
>     | Name | Type | Required | Description |
>     | :----------- | :--- | :------- | :------------ |
>     | ... | ... | ... | ... |
````

# 예시 1) 컴포넌트 문서

````md
# AdminInput

[English](../en/component_input.md) | 한국어

- 관리자 페이지에서 사용할 수 있는 기본 입력 필드 컴포넌트입니다.
- HTML input 요소의 모든 속성을 상속받으며, 라벨 타입을 선택할 수 있습니다.

## 기본 사용 예시

```tsx
import { AdminInput } from '@fetoolkit/admin-react';
import { useInput } from '@fetoolkit/react';

const [input, setInput] = useInput('');

<AdminInput value={input} onChange={(e) => setInput(e.target.value)} />;
```

## API(Props) 설명

### AdminInput

| Name                  | Type              | Required | Default | Description                                                         |
| :-------------------- | :---------------- | :------- | :------ | :------------------------------------------------------------------ |
| labelType             | 'none' \| 'basic' | false    | 'none'  | 라벨 타입 <br> - 'none': 라벨 없음 <br> - 'basic': 기본 라벨 스타일 |
| dataTestId            | string            | false    | -       | 테스트 실행 시 선언할 elementId                                     |
| 이하: HTML Input 속성 |                   |          |         | HTML input 요소의 기본 속성들                                       |
````

# 예시 2) 유틸리티 함수 문서

````md
# dateBoardOfMonth

[English](../en/dateBoardOfMonth.md) | 한국어

- 전달한 날짜가 포함된 월을 기준으로 달력용 2차원 날짜 보드를 반환하는 함수입니다.
- 월의 시작/끝 주를 모두 포함하므로, 이전 달/다음 달 날짜가 함께 포함될 수 있습니다.

```tsx
dateBoardOfMonth(date);
```

## 기본 사용 예시

```tsx
import dayjs from 'dayjs';
import { dateBoardOfMonth } from '@fetoolkit/dayjs';

const board = dateBoardOfMonth(dayjs('2025-12-08'));
```

## API 문서

- 입력 인자
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |date|dayjs.Dayjs|true|기준 월을 계산할 날짜 객체|

- 반환 타입: DateBoardItem[][]
````

# 예시 3) Hook 문서

````md
# useInput

[English](../en/hook_useinput.md) | 한국어

- input 태그에서 사용자의 실제 입력값을 관리하기 위한 hook 입니다.

## 기본 사용 예시

```tsx
import { useInput } from '@fetoolkit/react';

  ...

  const [name, handleChangeName] = useInput(''); // 타입추론이 유도된 경우입니다.
  const [age, handleChangeAge] = useInput<number>(0); // 타입을 명시적으로 지정한 경우입니다.
```

## API 설명

### Input(T)

제네릭 타입 T에 맞는 초기값을 전달합니다.

| Name         | Type | Required | Description |
| :----------- | :--- | :------- | :---------- |
| initialValue | T    | true     | 초기값      |

### Output(튜플)

```typescript
[value: T, handleValueChange: (value: T) => void]
```

| Name              | Type               | Description                   |
| ----------------- | ------------------ | ----------------------------- |
| value             | T                  | 현재 입력 후 저장된 값        |
| handleValueChange | (value: T) => void | 입력값을 저장하기 위한 메서드 |
````

# 예시 4) 유틸리티 타입 문서

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
