# useUserAgent

[English](./useUserAgent.md) | 한국어

- UserAgent를 통해 받아온 브라우저 및 사용자 운영체제 정보를 가져오는 Hook 입니다.

## 기본 사용 예시

```tsx
import { useUserAgent } from '@fetoolkit/react'
...
const {agent, browser, os, isMobile} = useUserAgent()
```

## API 설명

### Input(없음)

이 Hook은 매개변수를 받지 않습니다.

### Output(객체)

```typescript
{
  agent: AgentInfo | null;
  browser: AgentBrowserInfo | null;
  os: AgentOSInfo | null;
  isMobile: boolean;
}
```

| Name     | Type                     | Description                                   |
| -------- | ------------------------ | --------------------------------------------- |
| agent    | AgentInfo \| null        | UserAgent로부터 받아온 원본 데이터            |
| browser  | AgentBrowserInfo \| null | 런타임 브라우저 정보                          |
| os       | AgentOSInfo \| null      | 런타임 환경 운영체제 정보                     |
| isMobile | boolean                  | 현재 런타임이 모바일에서 실행되고 있는지 여부 |
