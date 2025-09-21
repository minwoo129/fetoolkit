# Validation Check(유효성 검사)

[English](./validationCheck.md) | 한국어

- input 컴포넌트에 입력되는 입력값에 대한 유효성 검사 로직의 재사용성을 개선하기 위한 기능입니다.
- 루트에 각 유형 별 유효성검사 로직을 선언하고, 이를 hook을 통해 호출하는 방식으로 사용할 수 있습니다.
  - 유효성 검사와 동시에 input값 상태관리가 동시에 가능한 hook을 추가로 개발하여 사용성을 개선하였습니다.
- 추가로, 유효성검사를 통과하지 못한 경우에 대비해 사용자 형식에 따른 Error Code와 유효성검사 오류 메세지를 함께 선언할 수 있도록 개발하였습니다.

> ### 참고
>
> - 현재 Validation Check는 타입스크립트의 제네릭 타입 호환성 문제로 인해 string 타입의 입력값만 처리할 수 있습니다.
> - 아이디 중복확인(예시)과 같이 비동기 통신을 통한 유효성검사는 처리가 불가능하며 절대로 등록하시면 안됩니다.
>   - 동기식으로 처리되기 때문에, 스레드 과부하로 인한 런타임 에러가 발생할 수 있습니다.

## 1. 제공기능

### [useValidationCheck(Hook)](../hooks/useValidationCheck_kr.md)

### [useValidateCheckInput(Hook)](../hooks/useValidateCheckInput_kr.md)

## 2. 사전 연결 방법

자세한 API 및 타입에 대한 설명은 아래 API 문서를 참고하시기 바랍니다!!!

### 2-1. 각 유형별 유효성 검사 로직 작성

프로젝트 내 `utils` 폴더 내에 validation이라는 파일을 추가하고, 다음 예시와 같이 각 key값에 따라 유효성 검사 로직을 작성합니다.

```tsx
// 파일경로(예시): @/utils/validation.ts (projectRoot/src/utils/validation.ts)

import type { ValidatorType } from '@fetoolkit/react';

export const Validators: ValidatorType<
  'email' | 'password_length' | 'number_test'
> = {
  email: {
    validator: (value) => {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    errorStatus: {
      errorCode: 'EMAIL_ERROR',
      errorMessage: '이메일 형식이 올바르지 않습니다.',
    },
  },
  password_length: {
    validator: (value) => {
      return value.length >= 8;
    },
    errorStatus: {
      errorCode: 'PASSWORD_LENGTH_ERROR',
      errorMessage: '비밀번호는 8자 이상이어야 합니다.',
    },
  },
  number_test: {
    validator: (value) => {
      return typeof value === 'number';
    },
    errorStatus: {
      errorCode: 'NUMBER_TEST_ERROR',
      errorMessage: '숫자가 아닙니다.',
    },
  },
};
```

### 2-2. Validator 객체 Provider에 연결

전 단계에서 작성한 Validator 객체를 root에 추가한 FEToolkitProvider에 연결합니다.

```tsx
// 파일경로(예시): main.tsx

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FEToolkitProvider } from '../src/contexts';
import App from './App.tsx';
import { Validators } from '@/utils/validation.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FEToolkitProvider validators={Validators}>
      <App />
    </FEToolkitProvider>
  </StrictMode>,
);
```

## 3. 사용 방법

### 3-1. useValidationCheck 사용 예시

사용자가 추가한 Validators 객체를 사용해 다음과 같이 제네릭 타입으로 연결해서 사용하실 수 있습니다.

```tsx
import { useValidationCheck } from '@fetoolkit/React';
import type { Validators } from '@/utils/validation';
importy;
const { check } = useValidationCheck<typeof Validators>();

check('email', 'test@test.com');
```

### 3-2. useValidateCheckInput 사용 예시

사용자가 추가한 Validators 객체를 사용해 다음과 같이 제네릭 타입으로 연결해서 사용하실 수 있습니다.  
 (hook의 첫번째 인수로는 input값의 초기값, 두번째 인수에는 사용자가 선언한 validation key를 배열로 선언하면 됩니다.)

```tsx
import { useValidateCheckInput } from '@fetoolkit/react';
import type { Validators } from '@/utils/validation';

const {
  input: [password, handlePasswordChange],
  validation: [passwordValidationStatus, setPasswordValidationStatus],
} = useValidateCheckInput<typeof Validators>('', ['password_length']);
```

## 4. 더 손쉽게 사용하는 방법

위 방법으로 사용하시게 되면, 제네릭타입을 일일이 선언해줘야 하는 불편이 따르게 됩니다. 하지만 아래와 같이 설정하시게 되면 제네릭 타입을 선언할 필요 없이 간편하게 사용하실 수 있습니다.

프로젝트 내에서 hooks라는 폴더 내에 별도의 파일을 생성한 다음, 아래와 같이 커스텀 hook을 생성하세요.  
(`typeof Validators` 부분을 제외한 나머지 코드는 그대로 복사하셔서 사용하시면 됩니다.)

```tsx
// 파일경로(예시): @/hooks/validations.ts  (projectRoot/src/hooks/validations.ts)

import type {
  UseValidateCheckInputType,
  UseValidationCheckType,
  ValidatorType,
} from '@fetoolkit/react';
import { useValidateCheckInput, useValidationCheck } from '@fetoolkit/react';
import type { Validators } from '@/utils/validation';

export const useAppValidationCheck: <
  T extends ValidatorType = typeof Validators,
>() => UseValidationCheckType<T> = useValidationCheck;

export const useAppValidateCheckInput: <
  V extends ValidatorType = typeof Validators,
>(
  initialValue: string,
  validateKeys: (keyof V)[],
) => UseValidateCheckInputType<V> = useValidateCheckInput;
```

그 다음에는, 프로젝트에서 다음과 같이 호출해서 사용하시면 됩니다.

```tsx
// useAppValidationCheck (useValidationCheck 사용 예시)
import { useAppValidationCheck } from '@/hooks/validations';
const { check } = useAppValidationCheck();

check('email', 'test@test.com');
```

```tsx
// useAppValidateCheckInput (useValidateCheckInput 사용 예시)
import { useAppValidateCheckInput } from '@/hooks/validations';
const {
  input: [email, handleEmailChange],
  validation: [emailValidation, setEmailValidation],
} = useAppValidateCheckInput('', ['email']);
```

## 5. API 문서

### 5-1. 타입

- ValidatorType  
  사용자가 작성할 유효성검사 로직 그룹핑 객체
  ```tsx
  type ValidatorType<K extends string> = {
    [key in K]: ValidatorActionType;
  };
  ```
- ValidatorActionType  
  ValidatorType에서 각 key별 Value 객체
  ```tsx
  type ValidatorActionType = {
    validator: (value: string) => boolean;
    errorStatus: {
      errorCode: string;
      errorMessage: string;
    };
  };
  ```
  | name                     | type                       | description                                                    |
  | :----------------------- | :------------------------- | :------------------------------------------------------------- |
  | validator                | (value: string) => boolean | 실행할 유효성 검사 로직                                        |
  | errorStatus.errorCode    | string                     | 유효성검사 미통과 시 에러 코드<br>(사용자가 원하는 형식대로)   |
  | errorStatus.errorMessage | string                     | 유효성검사 미통과 시 에러 메세지<br>(사용자가 원하는 형식대로) |
- ValidationStatusType  
  사용자가 유효성 검사를 실행한 후 반환받는 객체 타입
  ```tsx
  type ValidationStatusType = {
    isPassed: boolean;
    errorCode?: string;
    errorMessage?: string;
  };
  ```
  | name         | type                | description                                                                   |
  | :----------- | :------------------ | :---------------------------------------------------------------------------- |
  | isPassed     | boolean             | 유효성 검사를 통과했는지 여부                                                 |
  | errorCode    | string \| undefined | 유효성검사 실패시 에러코드<br>(유효성 검사를 통과하지 못한 경우에만 반환됨)   |
  | errorMessage | string \| undefined | 유효성검사 실패시 에러메세지<br>(유효성 검사를 통과하지 못한 경우에만 반환됨) |
- UseValidateCheckInputType  
  useValidateCheckInput hook의 리턴타입. 위 손쉬운 사용 문서에서 처럼 커스텀 hook을 만들때 사용할 수 있습니다.
  ```tsx
  UseValidateCheckInputType<ValidatorType<string>>;
  ```
- UseValidationCheckType  
  useValidationCheck hook의 리턴타입. 위 손쉬운 사용 문서에서 처럼 커스텀 hook을 만들때 사용할 수 있습니다.
  ```tsx
  UseValidationCheckType<ValidatorType<string>>;
  ```
