# ErrorBoundary

English | [한국어](./ErrorBoundary_kr.md)

- A Component which is useful to controll an error declaratively
- Fallback UI declaration is possible at the same time as data processing after error detection.

## Example

### 1. ErrorBoundary(Component)

```tsx
import { ErrorBoundary } from '@fetoolkit/react';

<ErrorBoundary renderFallback={() => <div>Error</div>}>
  <App />
</ErrorBoundary>;
```

### 2. withErrorBoundary(HOC)

```tsx
...
import { withErrorBoundary } from '@fetoolkit/react';
...
export default withErrorBoundary(App, {
  renderFallback: () => <div>Error</div>,
});
```

## API(Props) Reference

| Name           | Type                                               | Required | Default | Description                                                            |
| :------------- | :------------------------------------------------- | :------- | :------ | :--------------------------------------------------------------------- |
| renderFallback | (error: ErrorType, reset: () => void) => ReactNode | true     | -       | declare Fallback UI Component.                                         |
| onError        | (error: ErrorType, info: ErrorInfo) => void        | false    | -       | processing data such as logging<br>(ex, sentry, firebase creashlytics) |
| onReset        | () => void                                         | false    | -       | Function called when error is initialized                              |
| ignoreError    | (error: ErrorType) => boolean                      | false    | -       | Decide whether to ignore the error caught and throw again              |
