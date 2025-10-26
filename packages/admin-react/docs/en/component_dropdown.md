# AdminDropdown

English | [한국어](../ko/component_dropdown.md)

- A dropdown menu component that can be used in admin pages.
- Supports both grouped menus and individual button menus, and also provides delete-style menus.

## Example

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

## API(Props) Reference

### AdminDropdown

| Name       | Type                                        | Required | Default | Description                                                                                     |
| :--------- | :------------------------------------------ | :------- | :------ | :---------------------------------------------------------------------------------------------- |
| className  | string                                      | false    | -       | CSS class name                                                                                  |
| styles     | React.CSSProperties                         | false    | -       | Style declaration <br> - Same as React `style` props                                            |
| title      | string                                      | true     | -       | Title text to be displayed on the dropdown button                                               |
| menus      | (DropdownMenuItem \| DropdownSubMenuItem)[] | true     | -       | Array of dropdown menu items                                                                    |
| align      | 'left' \| 'right'                           | false    | 'right' | Dropdown menu alignment direction <br> - 'left': Left alignment <br> - 'right': Right alignment |
| dataTestId | string                                      | false    | -       | Element ID to declare when running tests                                                        |

### Types

#### DropdownMenuItem

| Name  | Type                                | Required | Default | Description                              |
| :---- | :---------------------------------- | :------- | :------ | :--------------------------------------- |
| title | string                              | true     | -       | Group title text                         |
| type  | 'group'                             | true     | -       | Menu type (fixed to group)               |
| menus | Omit<DropdownSubMenuItem, 'type'>[] | true     | -       | Array of sub-menu items within the group |

#### DropdownSubMenuItem

| Name      | Type                | Required | Default | Description                                                                               |
| :-------- | :------------------ | :------- | :------ | :---------------------------------------------------------------------------------------- |
| title     | string              | true     | -       | Text to be displayed on the button                                                        |
| type      | 'button'            | true     | -       | Menu type (fixed to button)                                                               |
| styleType | 'basic' \| 'delete' | false    | 'basic' | Button style type <br> - 'basic': Default style <br> - 'delete': Delete style (red color) |
| onClick   | () => void          | false    | -       | Button click event method                                                                 |
