# README 문서 예시(의존성이 단순한 패키지 (`@fetoolkit/dayjs`의 `README.md` 기준))(ENG)

> ### 참고
>
> - 아래 마크다운 블록에 적용된 상대경로·패키지명·이미지 URL은 예시이며, 프롬프트 실행 시 실제 파일을 읽지 말 것(오류 발생 가능성 있음).

````md
# FEToolkit/Dayjs

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](./README_kr.md)

FEToolkit Dayjs is a utility package that provides date calculation features commonly needed when building calendar UIs with `dayjs`.  
It helps you write cleaner calendar data logic by offering functions for generating a month-based date board (2D weekly array) and calculating the number of weeks in a month.

## 1. Compatibility

|       Framework       | enabled | version |
| :-------------------: | :-----: | :-----: |
| JavaScript/TypeScript |   ⭕    |    -    |
|         dayjs         |   ⭕    |  >=1.x  |

## 2. Getting Started

### 2-1. Installation

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

#### 2-1-1. Additional Required Packages

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

## 3. Features

### 3-1. Integrated Features

| Name             | Description                                                                    |                      Docs                      |
| :--------------- | :----------------------------------------------------------------------------- | :--------------------------------------------: |
| dateBoardOfMonth | Returns a 2D date board including the first and last weeks of the target month | [Document](./docs/en/func_dateBoardOfMonth.md) |
| weekOfMonth      | Returns how many weeks the target month spans                                  |   [Document](./docs/en/func_weekOfMonth.md)    |

### 3-2. Types

| Name          | Description                        |                    Docs                     |
| :------------ | :--------------------------------- | :-----------------------------------------: |
| DateBoardItem | Data type for each date board cell | [Document](./docs/en/type_dateboarditem.md) |
````
