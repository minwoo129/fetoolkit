# Table

[English](../en/component_table.md) | 한국어

- 관리자 페이지에서 데이터를 테이블 형태로 표시할 때 사용하는 컴포넌트입니다.
- 체크박스 기능과 행 클릭 이벤트를 지원하며, 커스텀 렌더링이 가능합니다.
- 헤더와 푸터 영역을 추가할 수 있어 확장성이 뛰어납니다.

## 기본 사용 예시

```tsx
import { AdminTable } from '@fetoolkit/admin-react';
<AdminTable columns={tableColumns} datas={testTableDatas} />;
```

## API(Props) 설명

### AdminTable

| Name            | Type                                             | Required | Default | Description                                                                        |
| :-------------- | :----------------------------------------------- | :------- | :------ | :--------------------------------------------------------------------------------- |
| ref             | ForwardedRef<AdminTableRef \| null \| undefined> | false    | -       | 테이블 참조 객체 <br> - useTable hook 사용시 필요                                  |
| datas           | TableDataType\<T\>[]                             | true     | -       | 테이블에 표시할 데이터 배열 <br> - 각 데이터는 고유한 key를 가져야 함              |
| columns         | ColumnType\<T\>[]                                | true     | -       | 테이블 컬럼 정의 배열 <br> - 각 컬럼의 제목과 렌더링 함수를 정의                   |
| onClickRow      | (id: string, data: T) => void                    | false    | -       | 행 클릭 이벤트 핸들러 <br> - 클릭된 행의 key를 매개변수로 전달                     |
| className       | string                                           | false    | -       | CSS 클래스명                                                                       |
| style           | React.CSSProperties                              | false    | -       | 스타일 선언 <br> - React `style` props와 동일                                      |
| header          | React.ReactNode                                  | false    | -       | 테이블 상단에 표시할 헤더 영역                                                     |
| footer          | React.ReactNode                                  | false    | -       | 테이블 하단에 표시할 푸터 영역                                                     |
| checkboxVisible | boolean                                          | false    | true    | 체크박스 컬럼 표시 여부 <br> - true: 체크박스 표시, false: 체크박스 숨김           |
| dataTestId      | string                                           | false    | -       | 테스트 실행 시 선언할 elementId <br> - 테이블 컨테이너에 data-testid 속성으로 적용 |

### Types

#### TableDataType

| Name          | Type    | Required | Default | Description                                                          |
| :------------ | :------ | :------- | :------ | :------------------------------------------------------------------- |
| key           | string  | true     | -       | 데이터의 고유 식별자 <br> - 체크박스 선택 및 행 클릭 이벤트에서 사용 |
| [key: string] | unknown | false    | -       | 테이블에 표시할 실제 데이터 필드들                                   |

#### ColumnType

| Name   | Type                            | Required | Default | Description                                                  |
| :----- | :------------------------------ | :------- | :------ | :----------------------------------------------------------- |
| key    | keyof T                         | true     | -       | 데이터 객체의 키 <br> - 해당 컬럼에서 표시할 데이터 필드명   |
| title  | string                          | true     | -       | 컬럼 헤더에 표시될 제목                                      |
| render | (data: T[K]) => React.ReactNode | false    | -       | 커스텀 렌더링 함수 <br> - 데이터를 원하는 형태로 렌더링 가능 |

#### AdminTableRef

| Name           | Type           | Required | Default | Description                                  |
| :------------- | :------------- | :------- | :------ | :------------------------------------------- |
| getSelectedIds | () => string[] | true     | -       | 현재 선택된 행들의 ID 배열을 반환하는 메서드 |
