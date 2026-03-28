# 한국어 버전 패키지 README 기본 템플릿

> ### 참고
>
> - 아래 마크다운 블록에 적용된 상대경로·패키지명·이미지 URL은 예시이며, 프롬프트 실행 시 실제 파일을 읽지 말 것(오류 가능성 있음).
> - 패키지 루트에 `README_kr.md`(한국어), `README.md`(영어)를 둔다. 작성 순서는 한국어 문서를 먼저 완성한 뒤 영어 문서를 번역하는 것을 권장한다.

````md
# FEToolkit/{패키지 식별명}

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(해당 썸네일은 Chat GPT를 통해 생성한 이미지입니다.)

[English](./README.md) | 한국어

// 패키지가 무엇을 하는지, 어떤 환경에서 쓰는지 5줄 이내로 요약한다.
// 개조식이 아니라 짧은 문단으로 작성해도 된다.

> ### 알려드립니다. // 선택. 마이그레이션·deprecated·주의사항이 있을 때만 블록 전체를 넣는다.

## 1. 호환성

|      프레임워크/런타임       | 사용가능여부 | 최소버전 |
| :-------------------------: | :----------: | :------: |
| JavaScript/TypeScript 등    |   ⭕ / ❌    |   x.x    |

## 2. 초기 설정 절차

### 2-1. 설치 방법

- npm
  ```
  npm i @{스코프}/{패키지명}
  ```
- yarn
  ```
  yarn add @{스코프}/{패키지명}
  ```
- pnpm
  ```
  pnpm add @{스코프}/{패키지명}
  ```

#### 2-1-1. 추가 설치 패키지(필수)

// peer dependency 등 추가로 반드시 설치해야 하는 패키지가 있으면 위와 동일한 형식으로 채운다.
// 없으면 섹션 제목은 유지하고 각 패키지 매니저별 코드 블록은 비워 두거나, 섹션 자체를 생략해도 된다(팀 규칙에 따름).

- npm
  ```
  ```
- yarn
  ```
  ```
- pnpm
  ```
  ```

### 2-2. {선택 제목: 예) Provider 연결, 환경 설정}

// 앱 루트에 Provider가 필요하거나, 초기화 코드가 있을 때만 작성한다. 불필요하면 이 소제목 전체를 삭제한다.

```tsx
// import 포함한 실제 설정 예시
```

## 3. 제공되는 기능

### 3-1. {하위 섹션 제목: 예) 통합기능, 컴포넌트, Hook, Types}

| 이름       | 설명       |       공식문서       |
| :--------- | :--------- | :------------------: |
| {기능명}   | {한 줄 설명} | [공식문서](./docs/ko/{파일명}.md) |

// 기능 종류가 여러 가지면 3-2, 3-3 … 으로 나누고 표를 추가한다.
````

---

## 섹션별 설명

| 섹션 | 역할 |
| :--- | :--- |
| 제목 `FEToolkit/…` | 모노레포에서 패키지를 구분하기 쉬운 표기. npm 패키지 전체 이름과 동일할 필요는 없으나, 기존 패키지들과 톤을 맞출 것. |
| 썸네일·언어 링크 | 썸네일 URL·캡션 문구는 저장소 표준을 따른다. `[English](./README.md) \| 한국어`로 영어 README와 상호 링크. |
| 본문 요약 | 사용자가 “이 패키지를 써야 하는지” 판단할 수 있을 정도로 한 번에 읽히게 쓴다. |
| 알려드립니다 | 선택. breaking change, 패키지 분리, 대체 경로를 안내할 때만 사용. |
| 1. 호환성 | 지원하는 프레임워크·런타임·주요 의존성 최소 버전. 사용 불가인 항목은 ❌와 빈 버전으로 표기 가능. |
| 2. 초기 설정 | 설치 명령은 npm / yarn / pnpm 세 가지 모두 적는다. peer 등 추가 패키지가 없으면 2-1-1은 비우거나 생략. |
| 2-2 이하 | Provider·글로벌 설정 등 “설치만으로 끝나지 않는” 단계가 있을 때만 추가. |
| 3. 제공되는 기능 | 공개 API·타입·문서를 표로 정리한다. `공식문서` 열에는 기능별 상세 문서(예: `docs/ko/…`)로의 상대경로 링크를 둔다. 하위 제목(통합기능, Types 등)은 패키지 성격에 맞게 나눈다. |

---

# 예시 1) 의존성이 단순한 패키지

````md
# FEToolkit/Dayjs

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(해당 썸네일은 Chat GPT를 통해 생성한 이미지입니다.)

[English](./README.md) | 한국어

FEToolkit Dayjs는 `dayjs` 기반으로 캘린더 UI 구현에 자주 필요한 날짜 계산 기능을 제공하는 유틸리티 패키지입니다.

## 1. 호환성

|      프레임워크       | 사용가능여부 | 최소버전 |
| :-------------------: | :----------: | :------: |
| JavaScript/TypeScript |      ⭕      |    -     |
|         dayjs         |      ⭕      |  >=1.x   |

## 2. 초기 설정 절차

### 2-1. 설치 방법

- npm
  ```
  npm i @fetoolkit/dayjs
  ```
- yarn
  ```
  yarn add @fetoolkit/dayjs
  ```
- pnpm
  ```
  pnpm add @fetoolkit/dayjs
  ```

#### 2-1-1. 추가 설치 패키지(필수)

- npm
  ```
  npm i dayjs
  ```
- yarn
  ```
  yarn add dayjs
  ```
- pnpm
  ```
  pnpm add dayjs
  ```

## 3. 제공되는 기능

### 3-1. 통합기능

| 이름             | 설명                                                                 |                    공식문서                    |
| :--------------- | :------------------------------------------------------------------- | :--------------------------------------------: |
| dateBoardOfMonth | 전달한 기준 월의 시작/끝 주를 포함한 2차원 날짜 보드를 반환하는 함수 | [공식문서](./docs/ko/func_dateBoardOfMonth.md) |
| weekOfMonth      | 전달한 기준 월이 총 몇 주로 구성되는지 반환하는 함수                 |   [공식문서](./docs/ko/func_weekOfMonth.md)    |

### 3-2. Types

| 이름          | 설명                          |                  공식문서                   |
| :------------ | :---------------------------- | :-----------------------------------------: |
| DateBoardItem | 날짜 보드의 각 셀 데이터 타입 | [공식문서](./docs/ko/type_dateboarditem.md) |
````

---

# 예시 2) 추가 패키지·안내 블록·Provider가 있는 패키지

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

|  프레임워크  | 사용가능여부 | 최소버전 |
| :----------: | :----------: | :------: |
|    React     |      ⭕      |   >=19   |
|   Next.js    |      ❌      |          |

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
</FEToolkitProvider>
```

## 3. 제공되는 기능

### 3-1. 컴포넌트

| 이름    | 설명   |       공식문서       |
| :------ | :----- | :------------------: |
| {이름}  | {요약} | [공식문서](./docs/ko/...) |

### 3-2. Hook

| 이름    | 설명   |       공식문서       |
| :------ | :----- | :------------------: |
| {이름}  | {요약} | [공식문서](./docs/ko/...) |
````
