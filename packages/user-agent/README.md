# FEToolkit/User-Agent

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](./README_kr.md)

FEToolkit User-Agent is a utility library that accurately parses and analyzes browser User-Agent information. It prioritizes the User-Agent Client Hints API and falls back to parsing traditional User-Agent strings for browsers that don't support it.

## 1. Compatibility

|                   Browser                   | enabled |
| :-----------------------------------------: | :-----: |
|           chromium based browsers           |         |
|  [Google Chrome](https://buly.kr/C0AmRVv)   |   ✅    |
|   [Naver Whale](https://buly.kr/3COtOjy)    |   ✅    |
|      [Opera](https://buly.kr/4xYTCu5)       |   ✅    |
|  [MicroSoft Edge](https://buly.kr/9MRPjIr)  |   ✅    |
|   [OpenAI Atlas](https://buly.kr/FWTw3uH)   |   ✅    |
| [Samsung Internet](https://buly.kr/8IwrqUu) |   ✅    |
|            webkit based browsers            |         |
|      [Safari](https://buly.kr/CWv3NyP)      |   ✅    |
|                     etc                     |         |
|     [Firefox](https://buly.kr/C0AmRWL)      |   ✅    |

## 2. Getting Started

### 2-1. Installation

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

## 3. Usage

### getUserAgent

Retrieves the current browser's User-Agent information. Provides more accurate information when User-Agent Client Hints API is supported, and falls back to parsing traditional User-Agent strings when not supported.

```typescript
import { getUserAgent } from '@fetoolkit/user-agent';

// Use as an async function
const agentInfo = await getUserAgent();

console.log(agentInfo);
// Example output:
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
//     isEdgeBrowser: false,
//     jsEngine: 'v8
//   },
//   os: {
//     name: 'window',
//     version: '10.0.0',
//     majorVersion: 10
//   },
//   isMobile: false
// }
```

> #### Notice
>
> - in [OpenAI Atlas](https://openai.com/ko-KR/index/introducing-chatgpt-atlas/), browser name will be return as 'chrome'(Nov 2025)
>   - Atlas's own UA Brand Information is not registered yet.

### Return Data Structure

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
  name: string; // Browser name (chrome, firefox, safari, etc.)
  version: string; // Browser version
  majorVersion: number; // Major version number
  webkit: boolean; // Whether it's a WebKit-based browser
  webkitVersion: string; // WebKit version
  chromium: boolean; // Whether it's a Chromium-based browser
  chromiumVersion: string; // Chromium version
  webview: boolean; // Whether it's a WebView environment
  isEdgeBrowser: boolean; // Whether it's Edge browser
  jsEngine: JavaScriptEngine; // JavaScript Engine of Browser
}
```

#### AgentOSInfo

```typescript
interface AgentOSInfo {
  name: string; // Operating system name (window, mac, ios, android, etc.)
  version: string; // Operating system version
  majorVersion: number; // Major version number
}
```

#### JavaScriptEngine

```typescript
// Supported browsers: Google Chrome, MS Edge, Opera, Naver Whale, Firefox, Apple Safari, OpenAI Atlas
// OpenAI Atlas is a Chromium-based browser that uses v8.
type JavaScriptEngine =
  | 'v8'
  | 'spidermonkey'
  | 'javascriptcore'
  | 'rhino'
  | 'chakra'
  | 'unknown';
```

## Supported Operating Systems

- **Windows**: Windows 10, Windows 11, Windows Phone, etc.
- **macOS**: All versions
- **iOS**: All versions
- **Android**: All versions

## Features

- **User-Agent Client Hints API Priority**: Provides more accurate browser information
- **Fallback Support**: Works reliably on legacy browsers
- **TypeScript Support**: Complete type definitions provided
- **Lightweight**: Fast loading with minimal dependencies
- **Mobile Support**: Perfect support for mobile browsers and WebView environments
