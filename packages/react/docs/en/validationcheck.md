# Validation Check

English | [한국어](../ko/validationcheck.md)

- A feature to improve the reusability of validation logic for input values entered into input components.
- You can declare validation logic for each type at the root and use it by calling it through hooks.
  - We have additionally developed a hook that enables simultaneous state management of input values along with validation to improve usability.
- Additionally, we have developed it so that Error Codes and validation error messages according to user format can be declared together in case validation fails.

> ### Note
>
> - Currently, Validation Check can only process string type input values due to TypeScript generic type compatibility issues.
> - Validation through asynchronous communication such as ID duplication check (example) cannot be processed and should never be registered.
>   - Since it is processed synchronously, runtime errors may occur due to thread overload.

## 1. Features

### [useValidationCheck(Hook)](./hook_usevalidationcheck.md)

### [useValidateCheckInput(Hook)](./hook_usevalidatecheckinput.md)

## 2. Getting Started

Please refer to the API documentation below for detailed API and type descriptions!!!

### 2-1. Writing validation logic for each type

Add a validation file in the `utils` folder within the project and write validation logic according to each key value as shown in the following example.

```tsx
// File path (example): @/utils/validation.ts (projectRoot/src/utils/validation.ts)

export const Validators = {
  email: {
    validator: (value: string) => {
      return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);
    },
    errorStatus: {
      errorCode: 'EMAIL_ERROR',
      errorMessage: 'Email format is incorrect.',
    },
  },
  password_length: {
    validator: (value: string) => {
      return value.length >= 8;
    },
    errorStatus: {
      errorCode: 'PASSWORD_LENGTH_ERROR',
      errorMessage: 'Password must be at least 8 characters long.',
    },
  },
  number_test: {
    validator: (value: string) => {
      return typeof value === 'number';
    },
    errorStatus: {
      errorCode: 'NUMBER_TEST_ERROR',
      errorMessage: 'Not a number.',
    },
  },
} as const;
```

### 2-2. Connecting Validator object to Provider

Connect the Validator object created in the previous step to the FEToolkitProvider added to the root.

```tsx
// File path (example): main.tsx

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

## 3. Instructions

### 3-1. useValidationCheck usage example

You can use the Validators object added by the user by connecting it with generic types as follows.

```tsx
import { useValidationCheck } from '@fetoolkit/React';
import type { Validators } from '@/utils/validation';

const { check } = useValidationCheck<typeof Validators>();

check('email', 'test@test.com');
```

### 3-2. useValidateCheckInput usage example

You can use the Validators object added by the user by connecting it with generic types as follows.  
 (The first argument of the hook is the initial value of the input value, and the second argument should declare the validation key declared by the user as an array.)

```tsx
import { useValidateCheckInput } from '@fetoolkit/react';
import type { Validators } from '@/utils/validation';

const {
  input: [password, handlePasswordChange],
  validation: [passwordValidationStatus, setPasswordValidationStatus],
} = useValidateCheckInput<typeof Validators>('', ['password_length']);
```

## 4. Easier way to use

If you use the above method, you will have the inconvenience of having to declare generic types one by one. However, if you set it up as shown below, you can use it conveniently without declaring generic types.

Create a separate file in the hooks folder within the project, then create a custom hook as shown below.  
(You can copy and use the rest of the code except for the `typeof Validators` part.)

```tsx
// File path (example): @/hooks/validations.ts  (projectRoot/src/hooks/validations.ts)

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

Then, you can use it by calling it in the project as follows.

```tsx
// useAppValidationCheck (useValidationCheck usage example)
import { useAppValidationCheck } from '@/hooks/validations';
const { check } = useAppValidationCheck();

check('email', 'test@test.com');
```

```tsx
// useAppValidateCheckInput (useValidateCheckInput usage example)
import { useAppValidateCheckInput } from '@/hooks/validations';
const {
  input: [email, handleEmailChange],
  validation: [emailValidation, setEmailValidation],
} = useAppValidateCheckInput('', ['email']);
```

## 5. API Documentation

### 5-1. Types

| name                      | Desctiption                                                    | Docs                                            |
| :------------------------ | :------------------------------------------------------------- | :---------------------------------------------- |
| ValidatorType             | Object for grouping validation logic to be written by the user | [Document](./type_validatortype.md)             |
| ValidatorActionType       | Value object for each key in ValidatorType                     | [Document](./type_validatoractiontype.md)       |
| ValidationStatusType      | Object type returned after the user executes validation        | [Document](./type_validationstatustype.md)      |
| UseValidateCheckInputType | Return type of useValidateCheckInput hook.                     | [Document](./type_usevalidatecheckinputtype.md) |
| UseValidationCheckType    | Return type of useValidationCheck hook.                        | [Document](./type_usevalidationchecktype.md)    |
