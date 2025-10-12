# AdminRadio

[English](../en/component_radio.md) | 한국어

- 관리자 페이지에서 사용하는 커스텀 라디오 버튼 컴포넌트입니다.
- 다양한 크기와 색상 옵션을 제공하여 일관된 디자인 시스템을 구축할 수 있습니다.

## 기본 사용 예시

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

## API(Props) 설명

### AdminRadio

| Name                  | Type                                                           | Required | Default   | Description                                                                                                                       |
| :-------------------- | :------------------------------------------------------------- | :------- | :-------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| size                  | 'sm' \| 'md' \| 'lg' \| 'xl'                                   | false    | 'md'      | 라디오 버튼의 크기 <br> - sm: 16px<br> - md: 20px<br> - lg: 24px<br> - xl: 28px                                                   |
| color                 | 'primary' \| 'secondary' \| 'success' \| 'warning' \| 'danger' | false    | 'primary' | 라디오 버튼의 색상 테마 <br> - primary: 파란색<br>- secondary: 회색<br>- success: 초록색<br>- warning: 주황색<br>- danger: 빨간색 |
| className             | string                                                         | false    | -         | CSS 클래스명                                                                                                                      |
| style                 | React.CSSProperties                                            | false    | -         | 스타일 선언 <br> - React `style` props와 동일                                                                                     |
| disabled              | boolean                                                        | false    | false     | 라디오 버튼 비활성화 여부                                                                                                         |
| checked               | boolean                                                        | false    | false     | 라디오 버튼 선택 상태                                                                                                             |
| value                 | string                                                         | false    | -         | 라디오 버튼의 값                                                                                                                  |
| name                  | string                                                         | false    | -         | 라디오 버튼 그룹의 이름                                                                                                           |
| onChange              | (event: ChangeEvent<HTMLInputElement>) => void                 | false    | -         | 값 변경 시 호출되는 콜백 함수                                                                                                     |
| 이하: HTML Input 속성 |                                                                |          |           | HTML input 요소의 모든 기본 속성 사용 가능                                                                                        |
