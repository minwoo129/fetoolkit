# useToggle

English | [한국어](../ko/hook_usetoggle.md)

- A custom hook for toggling boolean state within the screen.

## Example

```tsx
import { useToggle } from '@fetoolkit/react';
 ...
 const [isActive, toggleActive] = useToggle(); // Initial value is false
 const [isActive2, toggleActive2] = useToggle(a === b); // When initial value is specified
```

## API Reference

### Input(boolean)

| Name         | Type    | Required | default | Description           |
| :----------- | :------ | :------- | :------ | :-------------------- |
| initialValue | boolean | false    | false   | Initial boolean value |

### Output(tuple)

```typescript
[value: boolean, handleValueChange: (value: boolean) => void]
```

| Name              | Type                     | Description                  |
| ----------------- | ------------------------ | ---------------------------- |
| value             | boolean                  | Current input value          |
| handleToggleValue | (value: boolean) => void | Method to change input value |
