# useScroll

[English](../en/hook_usescroll.md) | 한국어

- 스크롤 위치를 추적하고, 스크롤을 최상단으로 이동시키는 기능을 제공하는 Hook입니다.

## 기본 사용 예시

```tsx
import { useScroll } from '@fetoolkit/react';
...
const elementRef = useRef<HTMLDivElement>(null);
const { scrollY, scrollX, scrollToTop } = useScroll(elementRef);
...
return (
 <div ref={elementRef} style={{ overflowY: 'scroll', height: '400px' }}>
   ...
 </div>
)
```

## API 설명

### Input(Ref)

```typescript
RefObject<HTMLElement | null>;
```

| Name       | Type                           | Required | Description                     |
| :--------- | :----------------------------- | :------- | :------------------------------ |
| elementRef | RefObject<HTMLElement \| null> | true     | 스크롤을 추적할 HTML 요소의 ref |

### Output(객체)

```typescript
{
  scrollY: number;
  scrollX: number;
  scrollToTop: () => void;
}
```

| Name        | Type       | Description                                            |
| ----------- | ---------- | ------------------------------------------------------ |
| scrollY     | number     | 현재 스크롤 위치(수직 방향)                            |
| scrollX     | number     | 현재 스크롤 위치(수평 방향)                            |
| scrollToTop | () => void | 해당 영역의 스크롤 위치를 최상단으로 이동시키는 메서드 |
