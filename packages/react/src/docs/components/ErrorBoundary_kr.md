# ErrorBoundary

[English](./ErrorBoundary.md) | 한국어

- React에서 발생하는 에러를 선언적으로 관리하기 위한 컴포넌트 입니다.
- 에러 감지 후 데이터 처리와 동시에 Fallback UI 선언이 가능합니다.

## 기본 사용 예시

### 1. ErrorBoundary(컴포넌트)

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

## API(Props) 설명

| Name           | Type                                               | Required | Default | Description                                                                                                     |
| :------------- | :------------------------------------------------- | :------- | :------ | :-------------------------------------------------------------------------------------------------------------- |
| renderFallback | (error: ErrorType, reset: () => void) => ReactNode | true     | -       | 에러 발생 시 출력할 Fallback UI 컴포넌트                                                                        |
| onError        | (error: ErrorType, info: ErrorInfo) => void        | false    | -       | 에러 발생시 로그 기록 등 데이터 처리를 위한 함수 <br> - sentry, firebase 등 외부 서비스에 에러를 기록할 때 사용 |
| onReset        | () => void                                         | false    | -       | 에러가 초기화되면 호출되는 함수                                                                                 |
| ignoreError    | (error: ErrorType) => boolean                      | false    | -       | 잡힌 에러를 무시하고 다시 throw할지 여부를 판단                                                                 |
