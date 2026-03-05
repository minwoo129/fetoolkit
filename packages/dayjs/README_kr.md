# FEToolkit/Dayjs

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(해당 썸네일은 Chat GPT를 통해 생성한 이미지입니다.)

[English](./README.md) | 한국어

FEToolkit Dayjs는 `dayjs` 기반으로 캘린더 UI 구현에 자주 필요한 날짜 계산 기능을 제공하는 유틸리티 패키지입니다.  
월 단위 날짜 보드(2차원 주차 배열) 생성과 월의 주차 수 계산 기능을 제공해, 달력 데이터 가공 코드를 간결하게 작성할 수 있습니다.

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

| 이름             | 설명                                                                 | 공식문서 |
| :--------------- | :------------------------------------------------------------------- | :------: |
| dateBoardOfMonth | 전달한 기준 월의 시작/끝 주를 포함한 2차원 날짜 보드를 반환하는 함수 | 공식문서 |
| weekOfMonth      | 전달한 기준 월이 총 몇 주로 구성되는지 반환하는 함수                 | 공식문서 |

### 3-2. Types

| 이름          | 설명                                   | 공식문서 |
| :------------ | :------------------------------------- | :------: |
| DateBoardItem | 날짜 보드의 각 셀 데이터 타입          | 공식문서 |
| DayType       | 요일 인덱스/한글/영문 정보를 담는 타입 | 공식문서 |
