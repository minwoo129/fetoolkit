# README 문서 예시(추가 패키지·안내 블록·Provider가 있는 패키지 (`@fetoolkit/react`의 `README.md` 기준)(KOR)

> ### 참고
>
> - 아래 마크다운 블록에 적용된 상대경로·패키지명·이미지 URL은 예시이며, 프롬프트 실행 시 실제 파일을 읽지 말 것(오류 발생 가능성 있음).

````md
# FEToolkit/React

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(해당 썸네일은 Chat GPT를 통해 생성한 이미지입니다.)

[English](./README.md) | 한국어

FEToolkit은 Frontend 개발 시 유용하게 사용할 수 있는 기능들을 제공하는 툴킷 라이브러리입니다.  
이 패키지는 React 환경에서만 사용 가능한 패키지입니다.

> ### 알려드립니다.
>
> - V2에서 일부 기능이 다른 패키지로 이전되었습니다. (실제 안내 문구로 교체)

## 1. 호환성

| 프레임워크 | 사용가능여부 | 최소버전 |
| :--------: | :----------: | :------: |
|   React    |      ⭕      |   >=19   |
|  Next.js   |      ❌      |          |

## 2. 초기 설정 절차

### 2-1. 설치 방법

- npm
  ```
  npm i @fetoolkit/react
  ```
- yarn
  ```
  yarn add @fetoolkit/react
  ```
- pnpm
  ```
  pnpm add @fetoolkit/react
  ```

#### 2-1-1. 추가 설치 패키지(필수)

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

### 2-2. Provider 연결

최상단에 `FEToolkitProvider` 연결이 필요합니다.

```tsx
import { FEToolkitProvider } from '@fetoolkit/react';

// ...
<FEToolkitProvider>
  <App />
</FEToolkitProvider>;
```

## 3. 제공되는 기능

### 3-1. 컴포넌트

| 이름   | 설명   |         공식문서          |
| :----- | :----- | :-----------------------: |
| {이름} | {요약} | [공식문서](./docs/ko/...) |

### 3-2. Hook

| 이름   | 설명   |         공식문서          |
| :----- | :----- | :-----------------------: |
| {이름} | {요약} | [공식문서](./docs/ko/...) |
````
