# useCountdown

[English](../en/hook_usecountdown.md) | 한국어

- 카운트다운 기능을 구현하기 위한 커스텀 훅입니다.

## 기본 사용 예시

```tsx
import { useCountdown } from '@fetoolkit/react'
...
const {leftTime, isCountdownRunning, handleCountdown} = useCountdown({min: 3})
```

## API 설명

### Input(객체)

```typescript
{
  minute: number;
  second: number;
}
```

| Name   | Type   | Required | default | Description |
| :----- | :----- | :------- | :------ | :---------- |
| minute | number | false    | 0       | 분 단위     |
| second | number | false    | 0       | 초 단위     |

### Output(객체)

```typescript
{
  leftTime: number;
  isCountdownRunning: boolean;
  handleCountdown: (mode: 'start' | 'stop' | 'pauseOrRestart') => void;
}
```

| Name               | Type                                                  | Description                                                                                                                                                                             |
| ------------------ | ----------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| leftTime           | number                                                | 현재 남은 시간(초 단위)                                                                                                                                                                 |
| isCountdownRunning | boolean                                               | 카운트 다운이 돌아가고 있는지 여부                                                                                                                                                      |
| handleCountdown    | (mode: 'start' \| 'stop' \| 'pauseOrRestart') => void | 카운트다운 동작 제어 메서드 <br>- mode: start => 카운트다운 시작<br>- mode: stop => 카운트다운 정지(남은시간 0초로 초기화)<br>- mode: pauseOrRestart => 카운트다운 일시정지 또는 재시작 |
