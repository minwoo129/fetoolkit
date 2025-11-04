# Type(ValidatorType)

English | [한국어](../ko/type_validatortype.md)

- Object for grouping validation logic to be written by the user

```tsx
type ValidatorType<K extends string> = {
  [key in K]: ValidatorActionType;
};
```

|   name   |                         type                         | Description                                        |
| :------: | :--------------------------------------------------: | :------------------------------------------------- |
| [string] | [ValidatorActionType](./type_validatoractiontype.md) | Validation logic and data declaration for each key |
