# Type(ValidationStatusType)

English | [한국어](../ko/type_validationstatustype.md)

- Object type returned after the user executes validation

```tsx
type ValidationStatusType = {
  isPassed: boolean;
  errorCode?: string;
  errorMessage?: string;
};
```

| name         | type                | description                                                                  |
| :----------- | :------------------ | :--------------------------------------------------------------------------- |
| isPassed     | boolean             | Whether validation passed                                                    |
| errorCode    | string \| undefined | Error code when validation fails<br>(only returned when validation fails)    |
| errorMessage | string \| undefined | Error message when validation fails<br>(only returned when validation fails) |
