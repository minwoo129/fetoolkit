# Type(ValidatorType)

[English](../en/type_validatortype.md) | 한국어

- 사용자가 작성할 유효성검사 로직 그룹핑 객체

```tsx
type ValidatorType<K extends string> = {
  [key in K]: ValidatorActionType;
};
```

|   name   |                         type                         | Description                                        |
| :------: | :--------------------------------------------------: | :------------------------------------------------- |
| [string] | [ValidatorActionType](./type_validatoractiontype.md) | 각 key값별 해당하는 유효성검사 로직 및 데이터 선언 |
