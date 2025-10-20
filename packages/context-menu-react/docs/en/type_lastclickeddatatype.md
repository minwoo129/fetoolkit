# Utility Type(LastClickedDataType)

English | [한국어](../ko/type_lastclickeddatatype.md)

- A data type generated when a ContextMenu item is clicked. It includes the ID and value of the clicked menu.

```tsx
type LastClickedDataType = {
  menuId: string;
  value: string;
};
```

## Basic Usage Example

```tsx
import { useContextMenu } from '@fetoolkit/context-menu-react';

const MyComponent = () => {
  const { onClickedContextMenuItem } = useContextMenu();

  useEffect(() => {
    const unsubscribe = onClickedContextMenuItem(
      (data: LastClickedDataType) => {
        // ...
      },
    );

    return unsubscribe;
  }, [onClickedContextMenuItem]);
};
```

## API Documentation

- Structure(LastClickedDataType)
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |menuId|string|true|ID of the clicked menu (value of the data-context-menu-id attribute of HTML elements)|
  |value|string|true|Value of the clicked menu item (value of the value property of ContextMenuItemType)|
