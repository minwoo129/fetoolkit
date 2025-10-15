# useScroll

English | [한국어](../ko/hook_usescroll.md)

- A Hook that provides functionality to track scroll position and move scroll to the top.

## Example

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

## API Reference

### Input(Ref)

```typescript
RefObject<HTMLElement | null>;
```

| Name       | Type                           | Required | Description                         |
| :--------- | :----------------------------- | :------- | :---------------------------------- |
| elementRef | RefObject<HTMLElement \| null> | true     | Ref of HTML element to track scroll |

### Output(object)

```typescript
{
  scrollY: number;
  scrollX: number;
  scrollToTop: () => void;
}
```

| Name        | Type       | Description                                               |
| ----------- | ---------- | --------------------------------------------------------- |
| scrollY     | number     | Current scroll position (vertical direction)              |
| scrollX     | number     | Current scroll position (horizontal direction)            |
| scrollToTop | () => void | Method to move the scroll position of the area to the top |
