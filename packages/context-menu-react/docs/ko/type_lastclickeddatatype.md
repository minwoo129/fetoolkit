# Utility Type(LastClickedDataType)

[English](../en/type_lastclickeddatatype.md) | 한국어

- ContextMenu 아이템이 클릭되었을 때 생성되는 데이터 타입입니다. 클릭된 메뉴의 ID와 값을 포함합니다.

```tsx
type LastClickedDataType = {
  menuId: string;
  value: string;
};
```

## 기본 사용 예시

```tsx
import { useContextMenu } from '@fetoolkit/context-menu-react';

const MyComponent = () => {
  const { onClickedContextMenuItem } = useContextMenu();

  useEffect(() => {
    const unsubscribe = onClickedContextMenuItem(
      (data: LastClickedDataType) => {
        // ...
      },
    );

    return unsubscribe;
  }, [onClickedContextMenuItem]);
};
```

## API 문서

- 구조(LastClickedDataType)
  |name|type|required|description|
  |:---:|:---|:---|:---:|
  |menuId|string|true|클릭된 메뉴의 ID (HTML 요소의 data-context-menu-id 속성 값)|
  |value|string|true|클릭된 메뉴 아이템의 값 (ContextMenuItemType의 value 속성 값)|
