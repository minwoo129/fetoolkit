# Pagination

[English](../en/component_pagination.md) | 한국어

- 페이지네이션 컴포넌트입니다.
- 이전/다음 페이지 버튼과 현재 페이지 정보를 표시하는 간단한 페이지네이션 UI를 제공합니다.

## 기본 사용 예시

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

## API(Props) 설명

### AdminPagination

| Name                | Type                | Required | Default | Description                                   |
| :------------------ | :------------------ | :------- | :------ | :-------------------------------------------- |
| page                | number              | true     | -       | 현재 페이지 번호                              |
| totalPage           | number              | true     | -       | 전체 페이지 수                                |
| onClickNextPage     | () => void          | false    | -       | 다음 페이지 버튼 클릭 이벤트 메서드           |
| onClickPrevPage     | () => void          | false    | -       | 이전 페이지 버튼 클릭 이벤트 메서드           |
| nextPageBtnDisabled | boolean             | false    | false   | 다음 페이지 버튼 비활성화 여부                |
| prevPageBtnDisabled | boolean             | false    | false   | 이전 페이지 버튼 비활성화 여부                |
| style               | React.CSSProperties | false    | -       | 스타일 선언 <br> - React `style` props와 동일 |
| className           | string              | false    | -       | CSS 클래스명                                  |
