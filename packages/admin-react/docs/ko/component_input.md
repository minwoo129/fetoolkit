# AdminInput

[English](../en/component_input.md) | 한국어

- 관리자 페이지에서 사용할 수 있는 기본 입력 필드 컴포넌트입니다.
- HTML input 요소의 모든 속성을 상속받으며, 라벨 타입을 선택할 수 있습니다.

## 기본 사용 예시

```tsx
import { AdminInput } from '@fetoolkit/admin-react';
import { useInput } from '@fetoolkit/react';

const [input, setInput] = useInput('');

<AdminInput value={input} onChange={(e) => setInput(e.target.value)} />;
```

## API(Props) 설명

### AdminInput

| Name                  | Type              | Required | Default | Description                                                         |
| :-------------------- | :---------------- | :------- | :------ | :------------------------------------------------------------------ |
| labelType             | 'none' \| 'basic' | false    | 'none'  | 라벨 타입 <br> - 'none': 라벨 없음 <br> - 'basic': 기본 라벨 스타일 |
| dataTestId            | string            | false    | -       | 테스트 실행 시 선언할 elementId                                     |
| 이하: HTML Input 속성 |                   |          |         | HTML input 요소의 기본 속성들                                       |
