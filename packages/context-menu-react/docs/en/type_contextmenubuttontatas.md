# Utility Type(ContextMenuButtonDatas)

English | [한국어](../ko/type_contextmenubuttontatas.md)

- A type for button data objects used in ContextMenu. It is an object type that uses each menu ID as a key and an array of items for that menu as a value.

```tsx
type ContextMenuButtonDatas = {
  [key: string]: ContextMenuItemType[];
};
```

## Basic Usage Example

```tsx
import { ContextMenuButtonDatas } from '@fetoolkit/context-menu-react';

export const MenuButtons: ContextMenuButtonDatas = {
  'test-menu-1': [
    {
      label: 'Sun',
      value: 'sun',
    },
    {
      label: 'Rain',
      value: 'rain',
    },
    {
      label: 'Snow',
      value: 'snow',
    },
  ],
  'test-menu-2': [
    {
      label: 'Copy',
      value: 'copy',
    },
    {
      label: 'Paste',
      value: 'paste',
    },
  ],
};
```

## API Documentation

| name  | type                                                   |                              description                              |
| :---: | :----------------------------------------------------- | :-------------------------------------------------------------------: |
|  key  | string                                                 | Menu ID (matches the data-context-menu-id attribute of HTML elements) |
| value | [ContextMenuItemType](./type_contextmenuitemtype.md)[] |              Array of items to be displayed in the menu               |
