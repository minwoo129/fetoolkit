# getUserAgent

[English](../en/utils_getuseragent.md) | 한국어

- UserAgent를 통해 받아온 브라우저 및 사용자 운영체제 정보를 가져오는 Hook 입니다.

> ## 참고
>
> 이 함수는 [useUserAgent](./hook_useuseragent.md) hook에서 반환하는 데이터와 동일한 데이터를 반환하는 유틸리티 함수입니다.  
> 이때 Hook을 통해 가져오는 데이터는 메모이제이션 처리가 된 데이터이고, 이 함수는 호출할 때마다 userAgent에 접속해서 데이터를 가져는 방식이므로 본 함수 대신 [useUserAgent](./hook_useuseragent.md) Hook을 사용하는 것을 권장합니다.

## 기본 사용 예시

```tsx
import { getBrowserInfo } from '@fetoolkit/react'

const getBrowserInfo = async() => {
    try {
        const result = await getUserAgent()
    } catch(e) {
        ...
    }
}
```

## API 문서

- 반환 타입: Object(리터럴, AgentInfo)
  ```typescript
  {
    browser: Object | null,
    os: Object | null,
    isMobile: boolean
  }
  ```
  | Name     | Type                     | Description                                   |
  | -------- | ------------------------ | --------------------------------------------- |
  | browser  | AgentBrowserInfo \| null | 런타임 브라우저 정보                          |
  | os       | AgentOSInfo \| null      | 런타임 환경 운영체제 정보                     |
  | isMobile | boolean                  | 현재 런타임이 모바일에서 실행되고 있는지 여부 |
