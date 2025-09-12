# useToggle

[English](./useToggle.md) | 한국어

- 화면 내 boolean 상태를 토글하기 위한 커스텀 훅입니다.

## 기본 사용 예시

```tsx
import { useToggle } from '@fetoolkit/react';
 ...
 const [isActive, toggleActive] = useToggle(); // 초기값은 false입니다.
 const [isActive2, toggleActive2] = useToggle(a === b); // 초기값이 지정된 경우
```

## API 설명

### Input(boolean)

| Name         | Type    | Required | default | Description     |
| :----------- | :------ | :------- | :------ | :-------------- |
| initialValue | boolean | false    | false   | 초기 boolean 값 |

### Output(튜플)

```typescript
[value: boolean, handleValueChange: (value: boolean) => void]
```

| Name              | Type                     | Description        |
| ----------------- | ------------------------ | ------------------ |
| value             | boolean                  | 현재 입력값        |
| handleToggleValue | (value: boolean) => void | 입력값 변경 메서드 |
