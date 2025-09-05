# useResizeElement

- 특정 HTML 요소의 크기를 추적하기 위한 Hook 입니다.
- 이 Hook은 주어진 요소의 너비와 높이를 상태로 관리하며, 요소가 리사이즈될 때마다 업데이트됩니다.

## 기본 사용 예시

```tsx
import { useResizeElement } from '@fetoolkit/react';
...
const elementRef = useRef<HTMLDivElement>(null);
const [width, height] = useResizeElement(elementRef);
```

## API 설명

### Input(Ref)

```typescript
RefObject<HTMLElement | null>;
```

| Name       | Type                           | Required | Description                   |
| :--------- | :----------------------------- | :------- | :---------------------------- |
| elementRef | RefObject<HTMLElement \| null> | true     | 크기를 추적할 HTML 요소의 ref |

### Output(튜플)

```typescript
[width: number, height: number]
```

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| width  | number | 영역의 너비 |
| height | number | 영역의 높이 |
