# Type(ValidatorActionType)

[English](../en/type_validatoractiontype.md) | 한국어

- ValidatorType에서 각 key별 Value 객체

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
