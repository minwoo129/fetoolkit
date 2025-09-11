# useAsyncLoading

[English](./useAsyncLoading.md) | 한국어

- 비동기 작업의 로딩 상태를 관리하기 위한 Hook입니다.
- Promise를 인자로 받아 로딩 상태와 Promise 결과를 반환합니다.

## 기본 사용 예시

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

## API 설명

### Input(없음)

이 Hook은 매개변수를 받지 않습니다.

### Output(튜플)

```typescript
[isLoading: boolean, startTransition:function]
```

| Name            | Type                                | Description                                                                                                                      |
| --------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| isLoading       | boolean                             | startTransition으로 감싼 비동기 함수의 로딩 상태 <br> - 요청이 시작되면 `true`로 변경되고, 요청이 완료되면 `false`로 변경됩니다. |
| startTransition | (req: Promise\<T\>) => Promise\<T\> | 로딩 처리를 위한 비동기 함수를 감싸는 메서드                                                                                     |
