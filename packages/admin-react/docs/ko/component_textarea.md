# TextArea

[English](../en/component_textarea.md) | 한국어

- 관리자 페이지에서 사용하는 텍스트 영역 컴포넌트입니다.
- 기본 텍스트 영역과 버튼이 포함된 레이아웃을 제공합니다.

## 기본 사용 예시

```tsx
// 기본 텍스트 영역 사용
<AdminTextArea
  placeholder="내용을 입력하세요"
  rows={5}
/>

// 버튼이 포함된 레이아웃 사용
<AdminTextAreaFeaturedLayout
  buttons={[
    { type: 'clear', title: '지우기', onClick: handleClear },
    { type: 'save', title: '저장', onClick: handleSave },
    { type: 'delete', title: '삭제', onClick: handleDelete }
  ]}
>
  <AdminTextArea placeholder="내용을 입력하세요" />
</AdminTextAreaFeaturedLayout>
```

## API(Props) 설명

### AdminTextArea

| Name                         | Type                | Required | Default | Description                                   |
| :--------------------------- | :------------------ | :------- | :------ | :-------------------------------------------- |
| className                    | string              | false    | -       | CSS 클래스명                                  |
| style                        | React.CSSProperties | false    | -       | 스타일 선언 <br> - React `style` props와 동일 |
| dataTestId                   | string              | false    | -       | 테스트 실행 시 선언할 elementId               |
| 이하: TextareaHTMLAttributes |                     |          |         | HTML textarea 요소의 모든 속성 지원           |

### AdminTextAreaFeaturedLayout

| Name       | Type                       | Required | Default | Description                                   |
| :--------- | :------------------------- | :------- | :------ | :-------------------------------------------- |
| className  | string                     | false    | -       | CSS 클래스명                                  |
| style      | React.CSSProperties        | false    | -       | 스타일 선언 <br> - React `style` props와 동일 |
| buttons    | FeaturedLayoutButtonType[] | true     | -       | 텍스트 영역 하단에 표시될 버튼 배열           |
| children   | React.ReactNode            | true     | -       | 텍스트 영역 컴포넌트                          |
| dataTestId | string                     | false    | -       | 테스트 실행 시 선언할 elementId               |

### Types

#### FeaturedLayoutButtonType

| Name    | Type                          | Required | Default | Description                                                                         |
| :------ | :---------------------------- | :------- | :------ | :---------------------------------------------------------------------------------- |
| type    | 'clear' \| 'save' \| 'delete' | true     | -       | 버튼 타입 <br> - clear: 지우기 버튼 <br> - save: 저장 버튼 <br> - delete: 삭제 버튼 |
| title   | string                        | true     | -       | 버튼에 표시될 텍스트                                                                |
| onClick | () => void                    | false    | -       | 버튼 클릭 이벤트 메서드                                                             |
