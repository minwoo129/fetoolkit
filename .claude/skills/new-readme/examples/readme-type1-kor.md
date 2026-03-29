# README 문서 예시(의존성이 단순한 패키지 (`@fetoolkit/dayjs`의 `README.md` 기준))(KOR)

> ### 참고
>
> - 아래 마크다운 블록에 적용된 상대경로·패키지명·이미지 URL은 예시이며, 프롬프트 실행 시 실제 파일을 읽지 말 것(오류 발생 가능성 있음).

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
