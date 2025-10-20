# ContextMenuProvider

English | [한국어](../ko/component_contextmenuprovider.md)

- This is a Context Provider component required to use ContextMenu functionality.
- It manages ContextMenu button data throughout the application and passes it to child components.
- All components that use ContextMenu must be wrapped with this Provider.

## Example

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContextMenuProvider buttonDatas={MenuButtons}>
      <App />
    </ContextMenuProvider>
  </StrictMode>,
);
```

## API(Props) Reference

| Name        | Type                   | Required | Default | Description                                  |
| :---------- | :--------------------- | :------- | :------ | :------------------------------------------- |
| buttonDatas | ContextMenuButtonDatas | true     | -       | Button data object to be used in ContextMenu |
| children    | ReactNode              | true     | -       | Child components to be wrapped by Provider   |
