# Type(ValidatorActionType)

English | [한국어](../ko/type_validatoractiontype.md)

- Value object for each key in ValidatorType

```tsx
type ValidatorActionType = {
  validator: (value: string) => boolean;
  errorStatus: {
    errorCode: string;
    errorMessage: string;
  };
};
```

| name                     | type                       | description                                                           |
| :----------------------- | :------------------------- | :-------------------------------------------------------------------- |
| validator                | (value: string) => boolean | Validation logic to execute                                           |
| errorStatus.errorCode    | string                     | Error code when validation fails<br>(in the format the user wants)    |
| errorStatus.errorMessage | string                     | Error message when validation fails<br>(in the format the user wants) |
