# useUserAgent

English | [한국어](../ko/hook_useuseragent.md)

- A Hook that retrieves browser and user operating system information through UserAgent.

## Example

```tsx
import { useUserAgent } from '@fetoolkit/react'
...
const {agent, browser, os, isMobile} = useUserAgent()
```

## API Reference

### Input(none)

This Hook does not accept parameters.

### Output(object)

```typescript
{
  agent: AgentInfo | null;
  browser: AgentBrowserInfo | null;
  os: AgentOSInfo | null;
  isMobile: boolean;
}
```

| Name     | Type                     | Description                                      |
| -------- | ------------------------ | ------------------------------------------------ |
| agent    | AgentInfo \| null        | Original data retrieved from UserAgent           |
| browser  | AgentBrowserInfo \| null | Runtime browser information                      |
| os       | AgentOSInfo \| null      | Runtime environment operating system information |
| isMobile | boolean                  | Whether the current runtime is running on mobile |
