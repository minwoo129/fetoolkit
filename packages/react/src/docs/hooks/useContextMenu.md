# useContextMenu

- ContextMenu 기능 실행시 사용하게될 hook 입니다.

> ### 안내
>
> - [해당 문서](../joinedFeatures/contextMenu.md)를 먼저 확인하시기 바랍니다.

## 기본 사용 예시

```tsx
import { useContextMenu } from '@fetoolkit/react';
...

const TestPage = () => {
    const { contextMenuHandler, onClickedContextMenuItem } = useContextMenu();
    ...

    useEffect(() => {
        const unsubscribe = onClickedContextMenuItem((data) => {
            console.log('clickedData: ', data);
            setData(data);
        });

        return () => {
            unsubscribe();
        };
    }, [])

    ...

    return (
        <div
            onContextMenu={(e) => {
                contextMenuHandler({
                    elementId: 'test-element-id'
                    e,
                    buttonDatas: [
                        {
                            label: 'test',
                            value: 'test',
                        },
                        {
                            label: 'test1',
                            value: 'test1',
                        },
                    ]
                })
            }}
        >
            {...}
        </div>
    );
}
```

## API 설명

### Input(없음)

이 Hook은 매개변수를 받지 않습니다.

### Output(객체)

```typescript
{
  contextMenuHandler: (props: ContextMenuHanderArgs) => void;
  onClickedContextMenuItem: (callback: (data: LastClickedDataType | null) => void) => () => void;
}
```

| Name                     | Type                                                                  | Description                                                         |
| :----------------------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------ |
| contextMenuHandler       | (props: ContextMenuHanderArgs) => void                                | ContextMenu를 띄우는 메서드.                                        |
| onClickedContextMenuItem | (callback: (data: LastClickedDataType \| null) => void) => () => void | ContextMenu내 버튼 클릭 이벤트를 감지하기 위한 이벤트 리스너 메서드 |

### 기타 타입 설명

```typescript
interface ContextMenuHanderArgs {
  elementId: string | number | null;
  e: React.MouseEvent<HTMLElement, MouseEvent>;
  buttonDatas: ContextMenuItemType[];
}

interface ContextMenuItemType {
  value: string;
  label: string;
}

interface LastClickedDataType {
  elementId: string | number | null;
  value: string;
}
```

| Name                  | Type                                      | Description                                                                                   |
| :-------------------- | :---------------------------------------- | :-------------------------------------------------------------------------------------------- |
| ContextMenuHanderArgs | interface                                 | ContextMenu 핸들러의 매개변수 타입                                                            |
| elementId             | string \| number \| null                  | ContextMenu가 띄워질 element의 고유 ID. <br>onContextMenu 이벤트를 걸어주는 element의 고유 ID |
| e                     | React.MouseEvent<HTMLElement, MouseEvent> | onContextMenu 이벤트 리스너에서 인수로 반환되는 이벤트 객체                                   |
| buttonDatas           | ContextMenuItemType[]                     | ContextMenu에 들어갈 버튼 정보                                                                |
| ContextMenuItemType   | interface                                 | ContextMenu 아이템의 타입                                                                     |
| value                 | string                                    | 버튼의 고유 key값                                                                             |
| label                 | string                                    | 버튼에서 보여질 실제 라벨값                                                                   |
| LastClickedDataType   | interface                                 | 마지막 클릭된 아이템의 데이터 타입                                                            |
| elementId             | string \| number \| null                  | ContextMenu가 띄워질 element의 고유 ID. <br>onContextMenu 이벤트를 걸어주는 element의 고유 ID |
| value                 | string                                    | 클릭한 버튼의 value값                                                                         |
