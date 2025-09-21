# useValidationCheck

[English](../hooks/useValidationCheck.md) | 한국어

- ValidationContext에서 제공하는 유효성 검사 함수들을 사용하여 값을 검증하기 위한 Hook입니다.
- 검증 결과와 함께 에러 코드 및 메시지를 반환합니다.

## 기본 사용 예시

```tsx
import { useValidationCheck } from '@fetoolkit/react';
import type { Validators } from '@/utils/validation';

const { check } = useValidationCheck<typeof Validators>();
```

## API 설명

### Input(없음)

이 Hook은 매개변수를 받지 않습니다.

### Output(객체)

```typescript
{
  check: (key: keyof T, value: string) => ValidationStatusType;
}
```

| Name  | Type                                                  | Description                                                                                                                                                             |
| ----- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| check | (key: keyof T, value: string) => ValidationStatusType | ValidationContext에서 등록된 유효성 검사 함수를 실행하여 검증 결과를 반환하는 메서드 <br> - key: 검증할 항목의 키 <br> - value: 검증할 값 <br> - 반환값: 검증 결과 객체 |

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
