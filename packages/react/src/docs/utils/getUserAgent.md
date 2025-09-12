# getUserAgent

English | [한국어](./getUserAgent_kr.md)

- A utility function that retrieves browser and user operating system information through UserAgent.

> ## Note
>
> This function is a utility function that returns the same data as the data returned by the [useUserAgent](../hooks/useUserAgent.md) hook.  
> The data retrieved through the Hook is memoized data, and this function accesses the userAgent every time it is called to retrieve data, so it is recommended to use the [useUserAgent](../hooks/useUserAgent.md) Hook instead of this function.

## Example

```tsx
import { getUserAgent } from '@fetoolkit/react'

const getBrowserInfo = async() => {
    try {
        const result = await getUserAgent()
    } catch(e) {
        ...
    }
}
```

## API Reference

- Return type: Object(literal, AgentInfo)
  ```typescript
  {
    browser: Object | null,
    os: Object | null,
    isMobile: boolean
  }
  ```
  | Name     | Type                     | Description                                      |
  | -------- | ------------------------ | ------------------------------------------------ |
  | browser  | AgentBrowserInfo \| null | Runtime browser information                      |
  | os       | AgentOSInfo \| null      | Runtime environment operating system information |
  | isMobile | boolean                  | Whether the current runtime is running on mobile |
