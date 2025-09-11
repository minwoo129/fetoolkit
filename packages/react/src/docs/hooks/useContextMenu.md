# useContextMenu

English | [한국어](./useContextMenu_kr.md)

- A Hook for controll of ContextMenu feature.

> ### Notice
>
> - Please check [this document](../joinedFeatures/contextMenu.md) first.

## Example

```tsx
import { useContextMenu } from '@fetoolkit/react';
...

const TestPage = () => {
    const { contextMenuHandler, onClickedContextMenuItem } = useContextMenu();
    ...

    useEffect(() => {
        const unsubscribe = onClickedContextMenuItem((data) => {
            console.log('clickedData: ', data);
            setData(data);
        });

        return () => {
            unsubscribe();
        };
    }, [])

    ...

    return (
        <div
            onContextMenu={(e) => {
                contextMenuHandler({
                    elementId: 'test-element-id'
                    e,
                    buttonDatas: [
                        {
                            label: 'test',
                            value: 'test',
                        },
                        {
                            label: 'test1',
                            value: 'test1',
                        },
                    ]
                })
            }}
        >
            {...}
        </div>
    );
}
```

## API Reference

### Input(none)

This Hook does not accept parameters.

### Output(Object)

```typescript
{
  contextMenuHandler: (props: ContextMenuHanderArgs) => void;
  onClickedContextMenuItem: (callback: (data: LastClickedDataType | null) => void) => () => void;
}
```

| Name                     | Type                                                                  | Description                                                               |
| :----------------------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| contextMenuHandler       | (props: ContextMenuHanderArgs) => void                                | A function that open ContextMenu                                          |
| onClickedContextMenuItem | (callback: (data: LastClickedDataType \| null) => void) => () => void | A Event listener of ContextMenu.<br>- used to detection of button clicked |

### Types

```typescript
interface ContextMenuHanderArgs {
  elementId: string | number | null;
  event: React.MouseEvent<HTMLElement, MouseEvent>;
  buttonDatas: ContextMenuItemType[];
}

interface ContextMenuItemType {
  value: string;
  label: string;
}

interface LastClickedDataType {
  elementId: string | number | null;
  value: string;
}
```

| Name                  | Type                                      | Description                                                                                                                            |
| :-------------------- | :---------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| ContextMenuHanderArgs | interface                                 | Type of parameter for ContextMenu handler                                                                                              |
| elementId             | string \| number \| null                  | The unique ID of the element on which the ContextMenu will appear. <br>The unique ID of the element that hangs the onContextMenu event |
| event                 | React.MouseEvent<HTMLElement, MouseEvent> | Event objects returned as arguments in the onContextMenu event listener                                                                |
| buttonDatas           | ContextMenuItemType[]                     | the button info to enter the Context Menu.                                                                                             |
| ContextMenuItemType   | interface                                 | Type of context menu item(button)                                                                                                      |
| value                 | string                                    | Unique key of the button                                                                                                               |
| label                 | string                                    | label values of the button                                                                                                             |
| LastClickedDataType   | interface                                 | Data type for last clicked item                                                                                                        |
| elementId             | string \| number \| null                  | The unique ID of the element on which the ContextMenu will appear. <br>The unique ID of the element that hangs the onContextMenu event |
| value                 | string                                    | Value of clicked button                                                                                                                |
