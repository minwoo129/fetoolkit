# ContextMenu

English | [한국어](../ko/component_contextmenu.md)

- A Component to create an custom context menu.
  - There are elements you need for create custom ContextMenu component, so you must connect and use this component.
  - If you don't use, feature is not available.

## Example

```tsx
import { ContextMenu } from '@fetoolkit/react';

const AppContextMenu = () => {
  const { buttonDatas, locate, onClickedContextMenuItem } =
    useCustomContextMenu();
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
};
```

## API(Props) Reference

### ContextMenu.Grid

| Name                  | Type                | Required | Default | Description                      |
| :-------------------- | :------------------ | :------- | :------ | :------------------------------- |
| x                     | string              | true     | -       | ContextMenu location(horizontal) |
| y                     | string              | true     | -       | ContextMenu location(vertical)   |
| className             | string              | false    | -       | CSS classname                    |
| style                 | React.CSSProperties | false    | -       | declare styles by React CSS.     |
| testId                | string              | false    | -       | elementID for E2E test.          |
| children              | React.ReactNode     | true     | -       |                                  |
| more props: Aria Tags |                     |          |         |

### ContextMenu.Item

| Name                  | Type                | Required | Default | Description                             |
| :-------------------- | :------------------ | :------- | :------ | :-------------------------------------- |
| value                 | string              | true     | -       | value of button<br>(role: Id of button) |
| label                 | string              | true     | -       | label text of button                    |
| className             | string              | false    | -       | CSS classname                           |
| style                 | React.CSSProperties | false    | -       | declare styles by React CSS.            |
| textStyle             | Object              | false    | -       | style of label text                     |
| textStyle.className   | string              | false    | -       | style of label text<br>(CSS Classname)  |
| textStyle.style       | React.CSSProperties | false    | -       | style of label text<br>(React CSS)      |
| onClick               | () => void          | false    | -       | button click event method               |
| more props: Aria Tags |                     |          |         |
