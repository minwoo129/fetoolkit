# AdminInput

English | [한국어](../ko/component_input.md)

- A basic input field component that can be used in admin pages.
- Inherits all properties of HTML input element and allows selection of label type.

## Example

```tsx
import { AdminInput } from '@fetoolkit/admin-react';
import { useInput } from '@fetoolkit/react';

const [input, setInput] = useInput('');

<AdminInput value={input} onChange={(e) => setInput(e.target.value)} />;
```

## API(Props) Reference

### AdminInput

| Name                  | Type              | Required | Default | Description                                                          |
| :-------------------- | :---------------- | :------- | :------ | :------------------------------------------------------------------- |
| labelType             | 'none' \| 'basic' | false    | 'none'  | Label type <br> - 'none': No label <br> - 'basic': Basic label style |
| 이하: HTML Input 속성 |                   |          |         | Basic properties of HTML input element                               |
