# useCustomContextMenu

English | [한국어](../ko/hook_usecustomcontextmenu.md)

- A Hook that returns values needed for implementing user-declarative ContextMenu components.
- The values returned by this hook are used when creating custom ContextMenu components.

> ### Notice
>
> - Please check [this document](./contextmenu.md) first.

## Example

```typescript
import { useCustomContextMenu } from '@fetoolkit/react';
...

const AppContextMenu = () => {
    const { buttonDatas, locate, onClickedContextMenuItem } = useCustomContextMenu();

    return (
        <ContextMenu.Grid x={locate.x} y={locate.y} className="context-menu">
            {buttonDatas.map((item) => {
                return (
                    <ContextMenu.Item
                        key={item.value}
                        value={item.value}
                        label={item.label}
                        className="context-menu-item"
                        textStyle={{
                            className: 'context-menu-item-text',
                        }}
                        onClick={() => onClickedContextMenuItem(item.value)}
                    />
                );
            })}
        </ContextMenu.Grid>
    );
}
```

## API Reference

### Input(none)

This Hook does not accept parameters.

### Output(object)

```typescript
{
  buttonDatas: ContextMenuItemType[];
  locate: { x: string; y: string };
  onClickedContextMenuItem: (value: string) => void;
}
```

| Name                     | Type                     | Description                                           |
| :----------------------- | :----------------------- | :---------------------------------------------------- |
| buttonDatas              | ContextMenuItemType[]    | Button information to enter the ContextMenu           |
| locate                   | { x: string, y: string } | Position where the ContextMenu will be displayed      |
| onClickedContextMenuItem | (value: string) => void  | Event handler method for button clicks in ContextMenu |

### Types

```typescript
interface ContextMenuItemType {
  value: string;
  label: string;
}
```

| Name                | Type      | Description                                      |
| :------------------ | :-------- | :----------------------------------------------- |
| ContextMenuItemType | interface | Type of ContextMenu item                         |
| value               | string    | Unique key of the button                         |
| label               | string    | Actual label value to be displayed on the button |
