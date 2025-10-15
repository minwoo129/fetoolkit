# useCountdown

English | [한국어](../ko/hook_usecountdown.md)

- A Hook to implement countdown feature.

## Example

```tsx
import { useCountdown } from '@fetoolkit/react'
...
const {leftTime, isCountdownRunning, handleCountdown} = useCountdown({min: 3})
```

## API Reference

### Input(object)

```typescript
{
  minute: number;
  second: number;
}
```

| Name   | Type   | Required | default | Description |
| :----- | :----- | :------- | :------ | :---------- |
| minute | number | false    | 0       | Minutes     |
| second | number | false    | 0       | Seconds     |

### Output(object)

```typescript
{
  leftTime: number;
  isCountdownRunning: boolean;
  handleCountdown: (mode: 'start' | 'stop' | 'pauseOrRestart') => void;
}
```

| Name               | Type                                                  | Description                                                                                                                                                                                     |
| ------------------ | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| leftTime           | number                                                | Current remaining time (in seconds)                                                                                                                                                             |
| isCountdownRunning | boolean                                               | Whether the countdown is running                                                                                                                                                                |
| handleCountdown    | (mode: 'start' \| 'stop' \| 'pauseOrRestart') => void | Method to control countdown behavior <br>- mode: start => Start countdown<br>- mode: stop => Stop countdown (reset remaining time to 0)<br>- mode: pauseOrRestart => Pause or restart countdown |
