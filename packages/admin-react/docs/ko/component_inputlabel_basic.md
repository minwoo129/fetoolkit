# AdminInputLabelBasic

[English](../en/component_inputlabel_basic.md) | 한국어

- 입력 필드와 라벨을 함께 구성할 때 사용하는 기본 레이블 컴포넌트입니다.
- 라벨과 입력 필드, 그리고 선택적 아이콘을 포함한 완전한 입력 레이아웃을 제공합니다.

## 기본 사용 예시

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

## API(Props) 설명

| Name      | Type                | Required | Default | Description                                                                      |
| :-------- | :------------------ | :------- | :------ | :------------------------------------------------------------------------------- |
| htmlFor   | string              | true     | -       | 연결할 입력 필드의 id 값                                                         |
| label     | string              | true     | -       | 라벨에 표시될 텍스트                                                             |
| children  | React.ReactNode     | true     | -       | 입력 필드 컴포넌트                                                               |
| icon      | React.ReactNode     | false    | -       | 입력 필드 옆에 표시될 아이콘 <br> - 검색, 필터 등의 기능 아이콘을 표시할 때 사용 |
| className | string              | false    | -       | CSS 클래스명 <br> - 추가적인 스타일링을 위한 클래스명                            |
| style     | React.CSSProperties | false    | -       | 스타일 선언 <br> - React `style` props와 동일한 방식으로 인라인 스타일 적용      |
