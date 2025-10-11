# AdminDropdown

[English](../en/component_dropdown.md) | 한국어

- 관리자 페이지에서 사용할 수 있는 드롭다운 메뉴 컴포넌트입니다.
- 그룹화된 메뉴와 개별 버튼 메뉴를 모두 지원하며, 삭제 스타일의 메뉴도 제공합니다.

## 기본 사용 예시

```tsx
import { AdminDropdown } from '@fetoolkit/admin-react';

<AdminDropdown
  title="Product"
  menus={[
    { title: 'Storefront', type: 'button' },
    { title: 'Warehouse', type: 'button' },
    { title: 'Stock', type: 'button' },
    { title: 'Delete', type: 'button', styleType: 'delete' },
  ]}
/>;
```

## API(Props) 설명

### AdminDropdown

| Name      | Type                                        | Required | Default | Description                                   |
| :-------- | :------------------------------------------ | :------- | :------ | :-------------------------------------------- |
| className | string                                      | false    | -       | CSS 클래스명                                  |
| styles    | React.CSSProperties                         | false    | -       | 스타일 선언 <br> - React `style` props와 동일 |
| title     | string                                      | true     | -       | 드롭다운 버튼에 표시될 제목 텍스트            |
| menus     | (DropdownMenuItem \| DropdownSubMenuItem)[] | true     | -       | 드롭다운 메뉴 아이템 배열                     |

### Types

#### DropdownMenuItem

| Name  | Type                                | Required | Default | Description                   |
| :---- | :---------------------------------- | :------- | :------ | :---------------------------- |
| title | string                              | true     | -       | 그룹 제목 텍스트              |
| type  | 'group'                             | true     | -       | 메뉴 타입 (그룹으로 고정)     |
| menus | Omit<DropdownSubMenuItem, 'type'>[] | true     | -       | 그룹 내 하위 메뉴 아이템 배열 |

#### DropdownSubMenuItem

| Name      | Type                | Required | Default | Description                                                                        |
| :-------- | :------------------ | :------- | :------ | :--------------------------------------------------------------------------------- |
| title     | string              | true     | -       | 버튼에 표시될 텍스트                                                               |
| type      | 'button'            | true     | -       | 메뉴 타입 (버튼으로 고정)                                                          |
| styleType | 'basic' \| 'delete' | false    | 'basic' | 버튼 스타일 타입 <br> - 'basic': 기본 스타일 <br> - 'delete': 삭제 스타일 (빨간색) |
| onClick   | () => void          | false    | -       | 버튼 클릭 이벤트 메서드                                                            |
