# 컴포넌트 문서 예시(ENG)

> ### 참고
>
> - 아래 마크다운 블록 상에 적용되어 있는 상대경로 링크는 예시로 적용한 것으로 프롬프트 실행 시 읽지 말것(오류 발생 가능성 있음)

````md
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
| dataTestId            | string            | false    | -       | Element ID for testing                                               |
| 이하: HTML Input 속성 |                   |          |         | Basic properties of HTML input element                               |
````
