# AdminInputLabelBasic

English | [한국어](../ko/component_inputlabel_basic.md)

- This is a basic label component used when configuring input fields and labels together.
- Provides a complete input layout including labels, input fields, and optional icons.

## Example

```tsx
import { AdminInputLabelBasic, AdminInput } from '@fetoolkit/admin-react';
import { useInput } from '@fetoolkit/react';

...
const [email1, setEmail1] = useInput('');
...

<AdminInputLabelBasic label="Email" className="basic-label" htmlFor="Email1">
  <AdminInput
    type="email"
    id="Email1"
    labelType="basic"
    value={email1}
    onChange={(e) => setEmail1(e.target.value)}
  />
</AdminInputLabelBasic>
```

## API(Props) Reference

| Name       | Type                | Required | Default | Description                                                                                                 |
| :--------- | :------------------ | :------- | :------ | :---------------------------------------------------------------------------------------------------------- |
| htmlFor    | string              | true     | -       | ID value of the input field to connect                                                                      |
| label      | string              | true     | -       | Text to display in the label                                                                                |
| children   | React.ReactNode     | true     | -       | Input field component                                                                                       |
| icon       | React.ReactNode     | false    | -       | Icon to display next to the input field <br> - Used when displaying functional icons such as search, filter |
| className  | string              | false    | -       | CSS class name <br> - Class name for additional styling                                                     |
| style      | React.CSSProperties | false    | -       | Style declaration <br> - Apply inline styles in the same way as React `style` props                         |
| dataTestId | string              | false    | -       | Element ID to declare during test execution <br> - Used to identify components in test code                 |
