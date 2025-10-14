# ContextMenuProvider

English | [한국어](../ko/component_contextmenuprovider.md)

- Provider Component for ContextMenu feature.
  > #### Notice.
  >
  > Originally, the @fetoolkit/react component is designed to connect all functions as long as only one `FEToolkitProvider` component is connected.  
  > However, for ContextMenu, we separated provider component due to design issue for exposure positioning. Please note this.

## Example

```tsx
import { ContextMenuProvider, FEToolkitProvider } from '@fetoolkit/react';
...
<FEToolkitProvider>
    <ContextMenuProvider menuComponent={<AppContextMenu />}>
        <App />
    </ContextMenuProvider>
</FEToolkitProvider>
```

## API(Props) Reference

| Name          | Type            | Required | Default | Description                  |
| :------------ | :-------------- | :------- | :------ | :--------------------------- |
| menuComponent | React.ReactNode | false    | -       | custom ContextMenu Component |
| children      | React.ReactNode | true     | -       |                              |
