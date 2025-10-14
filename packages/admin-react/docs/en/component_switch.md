# AdminSwitch

English | [한국어](../ko/component_switch.md)

- This is a toggle switch component.
- Provides UI element that allows users to easily switch between on/off states.

## Example

```tsx
import { AdminSwitch } from '@fetoolkit/admin-react';
import { useToggle } from '@fetoolkit/react';

const [switchValue1, setSwitchValue1] = useToggle(false);

<AdminSwitch checked={switchValue1} onChange={setSwitchValue1} size="sm" />;
```

## API(Props) Reference

### AdminSwitch

| Name          | Type                                                                                      | Required | Default   | Description                                                                                    |
| :------------ | :---------------------------------------------------------------------------------------- | :------- | :-------- | :--------------------------------------------------------------------------------------------- |
| checked       | boolean                                                                                   | true     | -         | Checked state of switch                                                                        |
| onChange      | (checked: boolean) => void                                                                | true     | -         | Function called when checked state changes                                                     |
| size          | 'sm' \| 'md' \| 'lg'                                                                      | false    | 'md'      | Size of switch                                                                                 |
| className     | string                                                                                    | false    | -         | CSS class name                                                                                 |
| style         | Omit<CSSProperties, 'width' \| 'height' \| 'color' \| 'backgroundColor' \| 'borderColor'> | false    | -         | Switch style (width, height, color, backgroundColor, borderColor properties cannot be written) |
| enabledColor  | string                                                                                    | false    | '#12c82b' | Color when in checked state                                                                    |
| disabledColor | string                                                                                    | false    | '#b2b3b4' | Color when not in checked state                                                                |
| dataTestId    | string                                                                                    | false    | -         | Switch test id                                                                                 |
