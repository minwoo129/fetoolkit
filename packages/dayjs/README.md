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

| Name          | Description                                               |                    Docs                     |
| :------------ | :-------------------------------------------------------- | :-----------------------------------------: |
| DateBoardItem | Data type for each date board cell                        | [Document](./docs/en/type_dateboarditem.md) |
| DayType       | Type containing day index, Korean, and English day labels |           [Document](./docs/en/)            |
