# Pagination

English | [한국어](../ko/component_pagination.md)

- This is a pagination component.
- Provides simple pagination UI that displays previous/next page buttons and current page information.

## Example

```tsx
import { AdminPagination } from '@fetoolkit/admin-react';
<AdminPagination
  page={page}
  totalPage={maxPage}
  onClickNextPage={() => setPage(page + 1)}
  onClickPrevPage={() => setPage(page - 1)}
  nextPageBtnDisabled={page === maxPage}
  prevPageBtnDisabled={page === 1}
/>;
```

## API(Props) Reference

### AdminPagination

| Name                | Type                | Required | Default | Description                                          |
| :------------------ | :------------------ | :------- | :------ | :--------------------------------------------------- |
| page                | number              | true     | -       | Current page number                                  |
| totalPage           | number              | true     | -       | Total number of pages                                |
| onClickNextPage     | () => void          | false    | -       | Next page button click event method                  |
| onClickPrevPage     | () => void          | false    | -       | Previous page button click event method              |
| nextPageBtnDisabled | boolean             | false    | false   | Whether next page button is disabled                 |
| prevPageBtnDisabled | boolean             | false    | false   | Whether previous page button is disabled             |
| style               | React.CSSProperties | false    | -       | Style declaration <br> - Same as React `style` props |
| className           | string              | false    | -       | CSS class name                                       |
| dataTestId          | string              | false    | -       | Element ID to declare during test execution          |
