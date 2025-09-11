# useAsyncLoading

English | [한국어](./useAsyncLoading_kr.md)

- A Hook to manage the loading status of async process.
- Accept Promise as a factor and return the loading status and Promise results.

## Example

```tsx
import { useAsyncLoading } from '@fetoolkit/react';
...
const [isLoading, startTransition] = useAsyncLoading();
...
const fetchData = async () => {
  try {
      const data = await startTransition(fetch('/api/data'));
      console.log(data);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
};
```

## API Reference

### Input(none)

This Hook does not accept parameters.

### Output(tuple)

```typescript
[isLoading: boolean, startTransition:function]
```

| Name            | Type                                | Description                                                                                                                                                                              |
| --------------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isLoading       | boolean                             | Load status of asynchronous function wrapped by startTransition <br> - When the request is started, it is changed to `true` and when the request is completed, it is changed to `false`. |
| startTransition | (req: Promise\<T\>) => Promise\<T\> | Method to enclose async functions for loading processing                                                                                                                                 |
