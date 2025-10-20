# useContextMenu

English | [한국어](../ko/hook_usecontextmenu.md)

- A Hook for handling context menu item click events.
- Tracks data when menu items are clicked and executes callback functions.

## Example

```tsx
import { useContextMenu } from '@fetoolkit/context-menu-react';

const { onClickedContextMenuItem } = useContextMenu();
useEffect(() => {
  const unsubscribe = onClickedContextMenuItem((data) => {
    // Handle click data for each button
  });
  return () => {
    unsubscribe();
  };
}, [onClickedContextMenuItem]);
```

## API Reference

### Output(object)

```typescript
{
  onClickedContextMenuItem: (callback: (data: LastClickedDataType | null) => void) => () => void
}
```

| Name                     | Type                                                                                                   | Description                                                                                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onClickedContextMenuItem | (callback: (data: [LastClickedDataType](./type_lastclickeddatatype.md) \| null) => void) => () => void | Method to register a callback function that will be executed when a context menu item is clicked <br> - Passes data including the ID and value of the clicked menu to the callback. |
