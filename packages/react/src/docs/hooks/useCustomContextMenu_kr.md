# useCustomContextMenu

[English](./useCustomContextMenu.md) | 한국어

- 사용자 선언형 ContextMenu 컴포넌트 구현시 필요한 값들을 반환하는 hook 입니다.
- 이 hook에서 반환하는 값들을 맞춤형 ContextMenu 컴포넌트를 만들때 사용하게 됩니다.

> ### 안내
>
> - [해당 문서](../joinedFeatures/contextMenu.md)를 먼저 확인하시기 바랍니다.

## 기본 사용 예시

```typescript
import { useCustomContextMenu } from '@fetoolkit/react';
...

const AppContextMenu = () => {
    const { buttonDatas, locate, onClickedContextMenuItem } = useCustomContextMenu();

    return (
        <ContextMenu.Grid x={locate.x} y={locate.y} className="context-menu">
            {buttonDatas.map((item) => {
                return (
                    <ContextMenu.Item
                        key={item.value}
                        value={item.value}
                        label={item.label}
                        className="context-menu-item"
                        textStyle={{
                            className: 'context-menu-item-text',
                        }}
                        onClick={() => onClickedContextMenuItem(item.value)}
                    />
                );
            })}
        </ContextMenu.Grid>
    );
}
```

## API 설명

### Input(없음)

이 Hook은 매개변수를 받지 않습니다.

### Output(객체)

```typescript
{
  buttonDatas: ContextMenuItemType[];
  locate: { x: string; y: string };
  onClickedContextMenuItem: (value: string) => void;
}
```

| Name                     | Type                     | Description                                   |
| :----------------------- | :----------------------- | :-------------------------------------------- |
| buttonDatas              | ContextMenuItemType[]    | ContextMenu에 들어갈 버튼 정보                |
| locate                   | { x: string, y: string } | ContextMenu가 띄워질 위치                     |
| onClickedContextMenuItem | (value: string) => void  | ContextMenu 내 버튼 클릭 이벤트 핸들러 메서드 |

### 기타 타입 설명

```typescript
interface ContextMenuItemType {
  value: string;
  label: string;
}
```

| Name                | Type      | Description                 |
| :------------------ | :-------- | :-------------------------- |
| ContextMenuItemType | interface | ContextMenu 아이템의 타입   |
| value               | string    | 버튼의 고유 key값           |
| label               | string    | 버튼에서 보여질 실제 라벨값 |
