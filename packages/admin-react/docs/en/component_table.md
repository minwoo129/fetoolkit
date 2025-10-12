# Table

English | [한국어](../ko/component_table.md)

- This component is used to display data in table format on admin pages.
- Supports checkbox functionality and row click events, with custom rendering capabilities.
- Excellent scalability with the ability to add header and footer areas.

## Example

```tsx
import { AdminTable } from '@fetoolkit/admin-react';
<AdminTable columns={tableColumns} datas={testTableDatas} />;
```

## API(Props) Reference

### AdminTable

| Name            | Type                                             | Required | Default | Description                                                                                            |
| :-------------- | :----------------------------------------------- | :------- | :------ | :----------------------------------------------------------------------------------------------------- |
| ref             | ForwardedRef<AdminTableRef \| null \| undefined> | false    | -       | Table reference object <br> - Required when using useTable hook                                        |
| datas           | TableDataType\<T\>[]                             | true     | -       | Array of data to display in table <br> - Each data must have unique key                                |
| columns         | ColumnType\<T\>[]                                | true     | -       | Array of table column definitions <br> - Define title and rendering function for each column           |
| onClickRow      | (id: string, data: T) => void                    | false    | -       | Row click event handler <br> - Passes the key of clicked row as parameter                              |
| className       | string                                           | false    | -       | CSS class name                                                                                         |
| style           | React.CSSProperties                              | false    | -       | Style declaration <br> - Same as React `style` props                                                   |
| header          | React.ReactNode                                  | false    | -       | Header area to display at the top of table                                                             |
| footer          | React.ReactNode                                  | false    | -       | Footer area to display at the bottom of table                                                          |
| checkboxVisible | boolean                                          | false    | true    | Whether to display checkbox column <br> - true: show checkbox, false: hide checkbox                    |
| dataTestId      | string                                           | false    | -       | Element ID to declare during test execution <br> - Applied as data-testid attribute to table container |

### Types

#### TableDataType

| Name          | Type    | Required | Default | Description                                                                       |
| :------------ | :------ | :------- | :------ | :-------------------------------------------------------------------------------- |
| key           | string  | true     | -       | Unique identifier for data <br> - Used in checkbox selection and row click events |
| [key: string] | unknown | false    | -       | Actual data fields to display in table                                            |

#### ColumnType

| Name   | Type                            | Required | Default | Description                                                            |
| :----- | :------------------------------ | :------- | :------ | :--------------------------------------------------------------------- |
| key    | keyof T                         | true     | -       | Key of data object <br> - Field name of data to display in this column |
| title  | string                          | true     | -       | Title to display in column header                                      |
| render | (data: T[K]) => React.ReactNode | false    | -       | Custom rendering function <br> - Can render data in desired format     |

#### AdminTableRef

| Name           | Type           | Required | Default | Description                                                 |
| :------------- | :------------- | :------- | :------ | :---------------------------------------------------------- |
| getSelectedIds | () => string[] | true     | -       | Method that returns array of IDs of currently selected rows |
