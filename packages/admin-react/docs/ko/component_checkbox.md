# AdminCheckbox

[English](../en/component_checkbox.md) | 한국어

- 관리자 페이지에서 사용하는 체크박스 컴포넌트입니다.
- 다양한 크기 옵션과 커스터마이징이 가능한 체크박스를 제공합니다.

## 기본 사용 예시

```tsx
import { AdminCheckbox } from '@fetoolkit/admin-react';
import { useToggle } from '@fetoolkit/react';

const [checkbox1, setCheckbox1] = useToggle(false);

<AdminCheckbox checked={checkbox1} onChange={setCheckbox1} />;
```

## API(Props) 설명

### AdminCheckbox

| Name                  | Type                                 | Required | Default | Description                                                               |
| :-------------------- | :----------------------------------- | :------- | :------ | :------------------------------------------------------------------------ |
| checked               | boolean                              | false    | false   | 체크박스의 선택 상태                                                      |
| onChange              | (value: boolean) => void             | false    | -       | 체크박스 상태 변경 시 호출되는 함수                                       |
| size                  | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | false    | 'xs'    | 체크박스의 크기                                                           |
| className             | string                               | false    | -       | CSS 클래스명                                                              |
| style                 | React.CSSProperties                  | false    | -       | 스타일 선언 <br> - React \`style\` props와 동일 (width, height 제외)      |
| dataTestId            | string                               | false    | -       | 테스트 실행 시 선언할 elementId                                           |
| 이하: HTML Input 속성 |                                      |          |         | HTML input 요소의 기본 속성들 (onChange, type, value, checked, size 제외) |
