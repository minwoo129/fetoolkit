# useResizeWindow

English | [한국어](../ko/hook_useresizewindow.md)

- A Hook for tracking the size of the browser window.
- This Hook manages the width and height of the browser window as state and updates whenever the window size changes.

## Example

```tsx
import { useResizeWindow } from '@fetoolkit/react';
...
const [width, height] = useResizeWindow();
```

## API Reference

### Input(none)

This Hook does not accept parameters.

### Output(tuple)

```typescript
[width: number, height: number]
```

| Name   | Type   | Description           |
| ------ | ------ | --------------------- |
| width  | number | Browser window width  |
| height | number | Browser window height |
