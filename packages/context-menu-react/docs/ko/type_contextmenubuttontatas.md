# Utility Type(ContextMenuButtonDatas)

[English](../en/type_contextmenubuttontatas.md) | 한국어

- ContextMenu에서 사용할 버튼 데이터 객체의 타입입니다. 각 메뉴 ID를 키로 하고, 해당 메뉴의 아이템 배열을 값으로 가지는 객체 타입입니다.

```tsx
type ContextMenuButtonDatas = {
  [key: string]: ContextMenuItemType[];
};
```

## 기본 사용 예시

```tsx
import { ContextMenuButtonDatas } from '@fetoolkit/context-menu-react';

export const MenuButtons: ContextMenuButtonDatas = {
  'test-menu-1': [
    {
      label: '햇빛',
      value: 'sun',
    },
    {
      label: '비',
      value: 'rain',
    },
    {
      label: '눈',
      value: 'snow',
    },
  ],
  'test-menu-2': [
    {
      label: '복사',
      value: 'copy',
    },
    {
      label: '붙여넣기',
      value: 'paste',
    },
  ],
};
```

## API 문서

- 구조
  |name|type|description|
  |:---:|:---|:---:|
  |key|string|메뉴 ID (HTML 요소의 data-context-menu-id 속성과 일치)|
  |value|ContextMenuItemType[]|해당 메뉴에 표시될 아이템들의 배열|

- ContextMenuItemType 구조
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |label|string|true|메뉴 아이템에 표시될 텍스트|
  |value|string|true|메뉴 아이템의 고유 값 (클릭 시 이벤트 핸들러에서 사용)|
