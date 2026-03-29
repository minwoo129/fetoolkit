# 영어버전 패키지 README 기본 템플릿

> ### 참고
>
> - 아래 마크다운 블록에 적용된 상대경로·패키지명·이미지 URL은 예시이며, 프롬프트 실행 시 실제 파일을 읽지 말 것(오류 발생 가능성 있음).
> - 패키지 루트에 `README.md`(영어), `README_kr.md`(한국어)를 둔다. 작성 순서는 한국어 문서를 먼저 완성한 뒤 영어 문서를 번역하는 것을 권장한다.

````md
# FEToolkit/{패키지 식별명}

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](./README_kr.md)

// 패키지가 무엇을 하는지, 어떤 환경에서 쓰는지 5줄 이내로 요약한다.
// 개조식이 아니라 짧은 문단으로 작성해도 된다.

> ### Notice // 선택. 마이그레이션·deprecated·주의사항이 있을 때만 블록 전체를 넣는다.

## 1. Compatibility

|     Framework / runtime     | enabled | version |
| :-------------------------: | :-----: | :-----: |
| JavaScript/TypeScript, etc. | ⭕ / ❌ |   x.x   |

## 2. Getting Started

### 2-1. Installation

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

#### 2-1-1. Additional Required Packages

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

### 2-2. {선택 제목: 예) Provider setup, 환경 설정}

// 앱 루트에 Provider가 필요하거나, 초기화 코드가 있을 때만 작성한다. 불필요하면 이 소제목 전체를 삭제한다.

```tsx
// import 포함한 실제 설정 예시
```

## 3. Features

### 3-1. {하위 섹션 제목: 예) Integrated Features, Components, Hooks, Types}

| Name     | Description  |               Docs                |
| :------- | :----------- | :-------------------------------: |
| {기능명} | {한 줄 설명} | [Document](./docs/en/{파일명}.md) |

// 기능 종류가 여러 가지면 3-2, 3-3 … 으로 나누고 표를 추가한다.
````

---

## 섹션별 설명

| 섹션               | 역할                                                                                                                                                                              |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 제목 `FEToolkit/…` | 모노레포에서 패키지를 구분하기 쉬운 표기. npm 패키지 전체 이름과 동일할 필요는 없으나, 기존 패키지들과 톤을 맞출 것.                                                              |
| 썸네일·언어 링크   | 썸네일 URL·캡션 문구는 저장소 표준을 따른다. 영어 README에서는 `English \| [한국어](./README_kr.md)`, 한국어 README에서는 `[English](./README.md) \| 한국어`로 상호 링크.         |
| 본문 요약          | 사용자가 “이 패키지를 써야 하는지” 판단할 수 있을 정도로 한 번에 읽히게 쓴다(영어 README이므로 본문은 영어로 번역).                                                               |
| Notice             | 선택. breaking change, 패키지 분리, 대체 경로를 안내할 때만 사용(영어 README 본문은 영어).                                                                                        |
| 1. Compatibility   | 지원하는 프레임워크·런타임·주요 의존성 최소 버전. 사용 불가인 항목은 ❌와 빈 버전으로 표기 가능.                                                                                  |
| 2. Getting Started | 설치 명령은 npm / yarn / pnpm 세 가지 모두 적는다. peer 등 추가 패키지가 없으면 2-1-1은 비우거나 생략.                                                                            |
| 2-2 이하           | Provider·글로벌 설정 등 “설치만으로 끝나지 않는” 단계가 있을 때만 추가.                                                                                                           |
| 3. Features        | 공개 API·타입·문서를 표로 정리한다. Docs 열에는 기능별 상세 문서(예: `docs/en/…`)로의 상대경로 링크를 둔다. 하위 제목(Integrated Features, Types 등)은 패키지 성격에 맞게 나눈다. |

---

# 예시

- [의존성이 단순한 패키지 (`@fetoolkit/dayjs`의 `README.md` 기준)](../examples/readme-type1-eng.md)
- [추가 패키지·안내 블록·Provider가 있는 패키지 (`@fetoolkit/react`의 `README.md` 기준)](../examples/readme-type2-eng.md)
