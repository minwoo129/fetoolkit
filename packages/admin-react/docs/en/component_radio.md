# AdminRadio

English | [한국어](../ko/component_radio.md)

- This is a custom radio button component used in admin pages.
- Provides various size and color options to build a consistent design system.

## Example

```tsx
import { AdminRadio } from '@fetoolkit/admin-react';
<div className="checkbox-grid">
    <AdminRadio name="radio1" />
    <AdminRadio name="radio1" />
</div>
<div className="checkbox-grid">
    <AdminRadio name="radio2" size="sm" />
    <AdminRadio name="radio2" size="md" />
    <AdminRadio name="radio2" size="lg" />
    <AdminRadio name="radio2" size="xl" />
</div>
<div className="checkbox-grid">
    <AdminRadio name="radio3" color="primary" />
    <AdminRadio name="radio3" color="secondary" />
    <AdminRadio name="radio3" color="success" />
    <AdminRadio name="radio3" color="warning" />
    <AdminRadio name="radio3" color="danger" />
</div>
```

## API(Props) Reference

### AdminRadio

| Name                  | Type                                                           | Required | Default   | Description                                                                                                                     |
| :-------------------- | :------------------------------------------------------------- | :------- | :-------- | :------------------------------------------------------------------------------------------------------------------------------ |
| size                  | 'sm' \| 'md' \| 'lg' \| 'xl'                                   | false    | 'md'      | Size of radio button <br> - sm: 16px<br> - md: 20px<br> - lg: 24px<br> - xl: 28px                                               |
| color                 | 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' | false    | 'primary' | Color theme of radio button <br> - primary: blue<br>- secondary: gray<br>- success: green<br>- warning: orange<br>- danger: red |
| className             | string                                                         | false    | -         | CSS class name                                                                                                                  |
| style                 | React.CSSProperties                                            | false    | -         | Style declaration <br> - Same as React `style` props                                                                            |
| disabled              | boolean                                                        | false    | false     | Whether radio button is disabled                                                                                                |
| checked               | boolean                                                        | false    | false     | Selection state of radio button                                                                                                 |
| value                 | string                                                         | false    | -         | Value of radio button                                                                                                           |
| name                  | string                                                         | false    | -         | Name of radio button group                                                                                                      |
| onChange              | (event: ChangeEvent<HTMLInputElement>) => void                 | false    | -         | Callback function called when value changes                                                                                     |
| dataTestId            | string                                                         | false    | -         | Element ID to declare during test execution                                                                                     |
| 이하: HTML Input 속성 |                                                                |          |           | All basic attributes of HTML input element can be used                                                                          |
