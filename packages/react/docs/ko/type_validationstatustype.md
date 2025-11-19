# Type(ValidationStatusType)

[English](../en/type_validationstatustype.md) | 한국어

- 사용자가 유효성 검사를 실행한 후 반환받는 객체 타입

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
