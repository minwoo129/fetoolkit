# Utility Type(ContextMenuItemType)

[English](../en/type_contextmenuitemtype.md) | 한국어

- ContextMenu의 각 버튼(메뉴 아이템)을 표현하는 단일 아이템 타입입니다. 표시 텍스트와 고유 값을 가집니다.

```tsx
type ContextMenuItemType = {
  value: string;
  label: string;
};
```

## 기본 사용 예시

```tsx
import type { ContextMenuButtonDatas } from '@fetoolkit/context-menu-react';

export const MenuButtons: ContextMenuButtonDatas = {
  'test-menu-1': [
    {
      // 이거
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

- 구조(ContextMenuItemType)
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |label|string|true|메뉴 아이템에 표시될 텍스트|
  |value|string|true|메뉴 아이템의 고유 값 (클릭 이벤트 식별 등에 사용)|
