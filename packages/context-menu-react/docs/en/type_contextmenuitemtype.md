# Utility Type(ContextMenuItemType)

English | [한국어](../ko/type_contextmenuitemtype.md)

- A single item type that represents each button (menu item) in ContextMenu. It has display text and a unique value.

```tsx
type ContextMenuItemType = {
  value: string;
  label: string;
};
```

## Basic Usage Example

```tsx
import type { ContextMenuButtonDatas } from '@fetoolkit/context-menu-react';

export const MenuButtons: ContextMenuButtonDatas = {
  'test-menu-1': [
    {
      // this
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

## API Documentation

- Structure(ContextMenuItemType)
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |label|string|true|Text to be displayed on the menu item|
  |value|string|true|Unique value of the menu item (used for click event identification, etc.)|
