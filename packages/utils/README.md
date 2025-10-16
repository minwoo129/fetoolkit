# FEToolkit/Utils

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/README_kr.md)

FEToolkit is a toolkit library that provides useful functions for Frontend development. The library is divided according to frameworks such as React and Vue, and functions that can be used in common regardless of the framework will be distributed as separate libraries.

## Documentation

- This library is a collection of utility functions only.
  - You can use it in any environment.

## Getting Started

### 1. Installation

- npm
  ```
  npm i @fetoolkit/utils
  ```
- yarn
  ```
  yarn add @fetoolkit/utils
  ```
- pnpm
  ```
  pnpm add @fetoolkit/utils
  ```

## Features

## 1. Array

| Name      | Description                                                                               |                   Docs                   |
| :-------- | :---------------------------------------------------------------------------------------- | :--------------------------------------: |
| at        | Return element in a particular index in an array.<br>(include negative index like Python) |    [Document](./docs/en/array_at.md)     |
| first     | Return first element of array.                                                            |   [Document](./docs/en/array_first.md)   |
| last      | Return last element of array.                                                             |   [Document](./docs/en/array_last.md)    |
| filter    | Return filtered elements in array.                                                        |  [Document](./docs/en/array_filter.md)   |
| mapByKey  | Return array of elements that mapped to particular key in object array.                   | [Document](./docs/en/array_mapbykey.md)  |
| chunk     | Chunk an array to a specific length.                                                      |   [Document](./docs/en/array_chunk.md)   |
| count     | Count a length of array.                                                                  |   [Document](./docs/en/array_count.md)   |
| countBy   | Classify and counting number of array values according to result of mapper Function.      |  [Document](./docs/en/array_countby.md)  |
| countOf   | count a number of array values satisfied by specific condition.                           |  [Document](./docs/en/array_countof.md)  |
| find      | return first element satisfied by specific condition.                                     |   [Document](./docs/en/array_find.md)    |
| findIndex | return first element's index satisfied by specific condition.                             | [Document](./docs/en/array_findindex.md) |
| groupBy   | classify elements in an array according to given key generation function.                 |  [Document](./docs/en/array_groupby.md)  |
| isSameArr | chaek that whether the elements in both arrays are same until the order.                  | [Document](./docs/en/array_issamearr.md) |
| uniqArray | returns a new array that removes duplicate elements.                                      | [Document](./docs/en/array_uniqarray.md) |

## 2. Number

| Name              | Description                                       |                       Docs                        |
| :---------------- | :------------------------------------------------ | :-----------------------------------------------: |
| commaizeNumber    | generate number seperated by comma.               |  [Document](./docs/en/number_commaizenumber.md)   |
| decommaizeNumber  | remove comma from number                          | [Document](./docs/en/number_decommaizenumber.md)  |
| formatPhoneNumber | convert a phone number into a hyphen type.        | [Document](./docs/en/number_formatphonenumber.md) |
| percent           | Calculate the result of division as a percentage. |      [Document](./docs/en/number_percent.md)      |
| sum               | add all the numbers of values in an array.        |        [Document](./docs/en/number_sum.md)        |
| isInteger         | check the value is integer.                       |     [Document](./docs/en/number_isinteger.md)     |
| isPositiveInteger | check the value is positive integer.(except 0)    |              [Document](./docs/en/)               |
| isNegativeInteger | check the value is negative integer.(except 0)    |              [Document](./docs/en/)               |

## 3. Mask

| Name            | Description          |          Docs          |
| :-------------- | :------------------- | :--------------------: |
| maskName        | masking user name    | [Document](./docs/en/) |
| maskPhoneNumber | masking phone number | [Document](./docs/en/) |

## 4. Object

| Name      | Description                                                            |          Docs          |
| :-------- | :--------------------------------------------------------------------- | :--------------------: |
| forIn     | call iteratee function for each attribute while traversing the object. | [Document](./docs/en/) |
| keys      | return keys of object.                                                 | [Document](./docs/en/) |
| values    | return values of object.                                               | [Document](./docs/en/) |
| omit      | generates a new object that omits a particular key from the object.    | [Document](./docs/en/) |
| pick      | creates a new object containing only a specific key in the object.     | [Document](./docs/en/) |
| isSameObj | check that whether both object is same                                 | [Document](./docs/en/) |

## 5. Utility Types

| Name         | Description                               |          Docs          |
| :----------- | :---------------------------------------- | :--------------------: |
| PartialPath  | Make specific properties optional         | [Document](./docs/en/) |
| RequiredPath | Make specific properties required         | [Document](./docs/en/) |
| Path         | Convert object type keys to literal types | [Document](./docs/en/) |
