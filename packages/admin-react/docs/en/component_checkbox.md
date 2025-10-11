# AdminCheckbox

English | [한국어](../ko/component_checkbox.md)

- This is a checkbox component used in admin pages.
- Provides a customizable checkbox with various size options.

## Example

```tsx
import { AdminCheckbox } from '@fetoolkit/admin-react';
import { useToggle } from '@fetoolkit/react';

const [checkbox1, setCheckbox1] = useToggle(false);

<AdminCheckbox checked={checkbox1} onChange={setCheckbox1} />;
```

## API(Props) Reference

### AdminCheckbox

| Name                  | Type                                 | Required | Default | Description                                                                          |
| :-------------------- | :----------------------------------- | :------- | :------ | :----------------------------------------------------------------------------------- |
| checked               | boolean                              | false    | false   | Checkbox selection state                                                             |
| onChange              | (value: boolean) => void             | false    | -       | Function called when checkbox state changes                                          |
| size                  | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | false    | 'xs'    | Checkbox size                                                                        |
| className             | string                               | false    | -       | CSS class name                                                                       |
| style                 | React.CSSProperties                  | false    | -       | Style declaration <br> - Same as React \`style\` props (excluding width, height)     |
| 이하: HTML Input 속성 |                                      |          |         | Basic HTML input element attributes (excluding onChange, type, value, checked, size) |
