# ContextMenuProvider

[English](../en/component_contextmenuprovider.md) | 한국어

- ContextMenu 기능을 사용하기 위해 필요한 Context Provider 컴포넌트입니다.
- 애플리케이션 전체에서 ContextMenu의 버튼 데이터를 관리하고 하위 컴포넌트들에게 전달하는 역할을 합니다.
- ContextMenu를 사용하는 모든 컴포넌트는 이 Provider로 감싸져야 합니다.

## 기본 사용 예시

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextMenuProvider buttonDatas={MenuButtons}>
      <App />
    </ContextMenuProvider>
  </StrictMode>,
);
```

## API(Props) 설명

| Name        | Type                   | Required | Default | Description                             |
| :---------- | :--------------------- | :------- | :------ | :-------------------------------------- |
| buttonDatas | ContextMenuButtonDatas | true     | -       | ContextMenu에서 사용할 버튼 데이터 객체 |
| children    | ReactNode              | true     | -       | Provider로 감쌀 하위 컴포넌트들         |
