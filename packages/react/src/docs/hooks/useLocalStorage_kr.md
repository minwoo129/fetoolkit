# useLocalStorage

[English](./useLocalStorage.md) | 한국어

- 브라우저의 `localStorage`를 사용하여 데이터를 저장하고 관리하기 위한 Hook 입니다.

## 기본 사용 예시

```tsx
import { useLocalStorage } from '@fetoolkit/react'
...
const [get, set, remove, clear] = useLocalStorage()
```

## API 설명

### Input(없음)

이 Hook은 매개변수를 받지 않습니다.

### Output(튜플)

```typescript
[
  get: <T>(key: string) => Promise<T | null>;
  set: <T>(key: string, data: T) => Promise<null>;
  remove: <T>(key: string) => Promise<void>;
  clear: <T>() => Promise<void>;
]
```

| Name   | Type                                        | Description                                                                                                                           |
| ------ | ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| get    | <T>(key: string) => Promise<T \| null>      | 해당하는 key 값으로 LocalStorage에 저장된 값을 받아오는 메서드입니다.<br> - 각 메서드마다 개별적으로 제네릭 타입을 적용하셔야 합니다. |
| set    | <T>(key: string, data: T) => Promise\<null> | LocalStorage에 값을 저장하는 메서드입니다.<br> - key 값에 따라 개별적으로 제네릭 타입을 적용하셔야 합니다.                            |
| remove | <T>(key: string) => Promise\<void>          | 해당하는 key값의 데이터를 삭제하는 메서드입니다.                                                                                      |
| clear  | <T>() => Promise\<void>                     | LocalStorage 전체를 초기화하는 메서드입니다.                                                                                          |
