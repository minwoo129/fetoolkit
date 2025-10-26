# FEToolkit/User-Agent

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(해당 썸네일은 Chat GPT를 통해 생성한 이미지입니다.)

[English](./README.md) | 한국어

FEToolkit User-Agent는 브라우저의 User-Agent 정보를 정확하게 파싱하고 분석할 수 있는 유틸리티 라이브러리입니다. User-Agent Client Hints API를 우선적으로 사용하며, 지원하지 않는 브라우저에서는 기존 User-Agent 문자열을 파싱하는 방식으로 동작합니다.

## 1. 호환성

|  프레임워크   | 사용가능여부 | 최소버전 |
| :-----------: | :----------: | :------: |
| 전체 브라우저 |      ✅      | ES2015+  |

## 2. 초기 설정 절차

### 2-1. 설치 방법

- npm
  ```
  npm i @fetoolkit/user-agent
  ```
- yarn
  ```
  yarn add @fetoolkit/user-agent
  ```
- pnpm
  ```
  pnpm add @fetoolkit/user-agent
  ```

## 3. 사용법

### getUserAgent

현재 브라우저의 User-Agent 정보를 가져옵니다. User-Agent Client Hints API가 지원되는 경우 더 정확한 정보를 제공하며, 지원하지 않는 경우 기존 User-Agent 문자열을 파싱합니다.

```typescript
import { getUserAgent } from '@fetoolkit/user-agent';

// 비동기 함수로 사용
const agentInfo = await getUserAgent();

console.log(agentInfo);
// 출력 예시:
// {
//   browser: {
//     name: 'chrome',
//     version: '120.0.0.0',
//     majorVersion: 120,
//     webkit: false,
//     webkitVersion: '-1',
//     chromium: true,
//     chromiumVersion: '120.0.6099.109',
//     webview: false,
//     isEdgeBrowser: false
//   },
//   os: {
//     name: 'window',
//     version: '10.0.0',
//     majorVersion: 10
//   },
//   isMobile: false
// }
```

### 반환되는 데이터 구조

#### AgentInfo

```typescript
interface AgentInfo {
  browser: AgentBrowserInfo;
  os: AgentOSInfo;
  isMobile: boolean;
}
```

#### AgentBrowserInfo

```typescript
interface AgentBrowserInfo {
  name: string; // 브라우저 이름 (chrome, firefox, safari 등)
  version: string; // 브라우저 버전
  majorVersion: number; // 메이저 버전 번호
  webkit: boolean; // WebKit 기반 브라우저 여부
  webkitVersion: string; // WebKit 버전
  chromium: boolean; // Chromium 기반 브라우저 여부
  chromiumVersion: string; // Chromium 버전
  webview: boolean; // WebView 환경 여부
  isEdgeBrowser: boolean; // Edge 브라우저 여부
}
```

#### AgentOSInfo

```typescript
interface AgentOSInfo {
  name: string; // 운영체제 이름 (window, mac, ios, android 등)
  version: string; // 운영체제 버전
  majorVersion: number; // 메이저 버전 번호
}
```

## 지원하는 브라우저

- **Chrome/Chromium 기반 브라우저**: Chrome, Edge, Opera 등
- **Firefox**: 모든 버전
- **Safari**: 모든 버전
- **Internet Explorer**: 모든 버전
- **모바일 브라우저**: iOS Safari, Android Chrome, Samsung Internet 등
- **기타 브라우저**: Whale (네이버 웨일), MIUI Browser, PhantomJS 등
- **WebView**: 앱 내 웹뷰 환경

## 지원하는 운영체제

- **Windows**: Windows 10, Windows 11, Windows Phone 등
- **macOS**: 모든 버전
- **iOS**: 모든 버전
- **Android**: 모든 버전

## 특징

- **User-Agent Client Hints API 우선 사용**: 더 정확한 브라우저 정보 제공
- **Fallback 지원**: 구형 브라우저에서도 안정적으로 동작
- **TypeScript 지원**: 완전한 타입 정의 제공
- **경량화**: 최소한의 의존성으로 빠른 로딩
- **모바일 지원**: 모바일 브라우저와 WebView 환경 완벽 지원
