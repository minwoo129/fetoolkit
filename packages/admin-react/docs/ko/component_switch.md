# AdminSwitch

[English](../en/component_switch.md) | 한국어

- 토글 스위치 컴포넌트입니다.
- 사용자가 on/off 상태를 쉽게 전환할 수 있는 UI 요소를 제공합니다.

## 기본 사용 예시

```tsx
import { AdminSwitch } from '@fetoolkit/admin-react';
import { useToggle } from '@fetoolkit/react';

const [switchValue1, setSwitchValue1] = useToggle(false);

<AdminSwitch checked={switchValue1} onChange={setSwitchValue1} size="sm" />;
```

## API(Props) 설명

### AdminSwitch

| Name          | Type                                                                                      | Required | Default   | Description                                                                         |
| :------------ | :---------------------------------------------------------------------------------------- | :------- | :-------- | :---------------------------------------------------------------------------------- |
| checked       | boolean                                                                                   | true     | -         | 스위치의 체크 상태                                                                  |
| onChange      | (checked: boolean) => void                                                                | true     | -         | 체크 상태 변경 시 호출되는 함수                                                     |
| size          | 'sm' \| 'md' \| 'lg'                                                                      | false    | 'md'      | 스위치의 크기                                                                       |
| className     | string                                                                                    | false    | -         | CSS 클래스명                                                                        |
| style         | Omit<CSSProperties, 'width' \| 'height' \| 'color' \| 'backgroundColor' \| 'borderColor'> | false    | -         | 스위치 스타일 (width, height, color, backgroundColor, borderColor 속성은 작성 불가) |
| enabledColor  | string                                                                                    | false    | '#12c82b' | 체크 상태일 때의 색상                                                               |
| disabledColor | string                                                                                    | false    | '#b2b3b4' | 체크 상태가 아닐 때의 색상                                                          |
| dataTestId    | string                                                                                    | false    | -         | 스위치 테스트 id                                                                    |
