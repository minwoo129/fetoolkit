# ContextMenuProvider

[English](./ContextMenuProvider.md) | 한국어

- ContextMenu 기능 사용을 위해 연결해야 하는 Provider 컴포넌트 입니다.
  > #### 알려드립니다.
  >
  > 원래 @fetoolkit/react 컴포넌트는 `FEToolkitProvider` 컴포넌트 하나만 연결되어 있으면 모든 기능이 연결되도록 되어 있습니다.  
  > 하지만 ContextMenu의 경우 노출 위치 지정을 위한 설계문제로 인해 Provider 컴포넌트를 분리하였습니다. 이 점, 참고 부탁드립니다.

## 기본 사용 예시

```tsx
import { ContextMenuProvider, FEToolkitProvider } from '@fetoolkit/react';
...
<FEToolkitProvider>
    <ContextMenuProvider menuComponent={<AppContextMenu />}>
        <App />
    </ContextMenuProvider>
</FEToolkitProvider>
```

## API(Props) 설명

| Name          | Type            | Required | Default | Description                                                        |
| :------------ | :-------------- | :------- | :------ | :----------------------------------------------------------------- |
| menuComponent | React.ReactNode | false    | -       | 맞춤형 ContextMenu 컴포넌트를 개발하는 경우,<br> 이를 연결할 props |
| children      | React.ReactNode | true     | -       |                                                                    |
