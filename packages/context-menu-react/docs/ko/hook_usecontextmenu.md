# useContextMenu

[English](../en/hook_usecontextmenu.md) | 한국어

- 컨텍스트 메뉴 아이템 클릭 이벤트를 처리하기 위한 Hook입니다.
- 메뉴 아이템 클릭 시 해당 데이터를 추적하고 콜백 함수를 실행할 수 있습니다.

## 기본 사용 예시

```tsx
import { useContextMenu } from '@fetoolkit/context-menu-react';

const { onClickedContextMenuItem } = useContextMenu();
useEffect(() => {
  const unsubscribe = onClickedContextMenuItem((data) => {
    // 버튼별 클릭 데이터 처리
  });
  return () => {
    unsubscribe();
  };
}, [onClickedContextMenuItem]);
```

## API 문서

- 반환 타입: 객체

```typescript
{
  onClickedContextMenuItem: (callback: (data: LastClickedDataType | null) => void) => () => void
}
```

### Output(객체)

| Name                     | Type                                                                                                   | Description                                                                                                                         |
| ------------------------ | ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| onClickedContextMenuItem | (callback: (data: [LastClickedDataType](./type_lastclickeddatatype.md) \| null) => void) => () => void | 컨텍스트 메뉴 아이템 클릭 시 실행될 콜백 함수를 등록하는 메서드 <br> - 클릭된 메뉴의 ID와 값을 포함한 데이터를 콜백으로 전달합니다. |
