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
  input: [inputValue, handleInputValueChange];
  validation: [inputValueValidationStatus, setInputValueValidationStatus];
}
```

| Name                          | Type                                                     | Description                                                                                                                                                                                                                                           |
| ----------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| input                         | tuple                                                    | 입력값과 입력값 변경 핸들러를 담은 튜플                                                                                                                                                                                                               |
| inputValue                    | string                                                   | 사용자가 현재 입력한 값                                                                                                                                                                                                                               |
| handleInputValueChange        | (value: string) => void                                  | 사용자의 입력값을 수정하는 메서드                                                                                                                                                                                                                     |
| validation                    | tuple                                                    | 검증 상태와 검증 상태 변경 함수를 담은 튜플                                                                                                                                                                                                           |
| inputValueValidationStatus    | ValidationStatusType                                     | 현재 입력값의 유효성 검사 결과                                                                                                                                                                                                                        |
| setInputValueValidationStatus | Dispatch\<React.SetStateAction\<ValidationStatusType\>\> | 현재 입력값의 유효성검사 결과를 수정할 수 있는 메서드. <br> (이 값은 비동기 유효성검사를 실행할 때 그 결과에 따라 수동으로 검사결과를 수정할 수 있도록 하기 위해 추가하였습니다. 꼭 사용해야 하는 상황이 아니면 가급적 사용을 지양해주시기 바랍니다.) |

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
