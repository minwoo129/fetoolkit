# useResizeElement

English | [한국어](../ko/hook_useresizeelement.md)

- A Hook for tracking the size of a specific HTML element.
- This Hook manages the width and height of the given element as state and updates whenever the element is resized.

## Example

```tsx
import { useResizeElement } from '@fetoolkit/react';
...
const elementRef = useRef<HTMLDivElement>(null);
const [width, height] = useResizeElement(elementRef);
```

## API Reference

### Input(Ref)

```typescript
RefObject<HTMLElement | null>;
```

| Name       | Type                           | Required | Description                       |
| :--------- | :----------------------------- | :------- | :-------------------------------- |
| elementRef | RefObject<HTMLElement \| null> | true     | Ref of HTML element to track size |

### Output(tuple)

```typescript
[width: number, height: number]
```

| Name   | Type   | Description        |
| ------ | ------ | ------------------ |
| width  | number | Width of the area  |
| height | number | Height of the area |
