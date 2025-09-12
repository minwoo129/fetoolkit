# useValidateCheckInput

[English](../hooks/useValidateCheckInput.md) | 한국어

- 입력값과 유효성 검사를 함께 관리하는 Hook입니다.
- ValidationContext에서 제공하는 검증 함수들을 사용하여 실시간으로 입력값을 검증합니다.

## 기본 사용 예시

```tsx
import { useValidateCheckInput } from '@fetoolkit/react';
import type { Validators } from '@/utils/validation';

const {
  input: [password, handlePasswordChange],
  validation: [passwordValidationStatus, setPasswordValidationStatus],
} = useValidateCheckInput<typeof Validators>('', ['password_length']);
```

## API 설명

### Input

```typescript
(initialValue: string, validateKeys: (keyof V)[])
```

| Name         | Type        | Required | Description             |
| ------------ | ----------- | -------- | ----------------------- |
| initialValue | string      | true     | 입력 필드의 초기값      |
| validateKeys | (keyof V)[] | true     | 검증할 항목들의 키 배열 |

### Output(객체)

```typescript
{
  input: [string, (value: string) => void];
  validation: [ValidationStatusType, React.Dispatch<React.SetStateAction<ValidationStatusType>>];
}
```

| Name       | Type                                                                               | Description                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| input      | [string, (value: string) => void]                                                  | 입력값과 입력값 변경 핸들러를 담은 튜플 <br> - 첫 번째 요소: 현재 입력값 <br> - 두 번째 요소: 입력값을 변경하는 함수           |
| validation | [ValidationStatusType, React.Dispatch<React.SetStateAction<ValidationStatusType>>] | 검증 상태와 검증 상태 변경 함수를 담은 튜플 <br> - 첫 번째 요소: 현재 검증 상태 <br> - 두 번째 요소: 검증 상태를 변경하는 함수 |

### 추가 타입 설명

#### ValidationStatusType

```typescript
export type ValidationStatusType = {
  /** 유효성검사 통과여부 */
  isPassed: boolean;
  /** 유효성검사 실패시 에러코드 */
  errorCode?: string;
  /** 유효성검사 실패시 에러메시지 */
  errorMessage?: string;
};
```

| Name         | Type                | Description                  |
| ------------ | ------------------- | ---------------------------- |
| isPassed     | boolean             | 유효성검사 통과여부          |
| errorCode    | string \| undefined | 유효성검사 실패시 에러코드   |
| errorMessage | string \| undefined | 유효성검사 실패시 에러메시지 |
