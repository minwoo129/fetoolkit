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

| Name      | Description                                                                               |                                                   Docs                                                    |
| :-------- | :---------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------: |
| at        | Return element in a particular index in an array.<br>(include negative index like Python) |    [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/at.md)     |
| first     | Return first element of array.                                                            |   [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/first.md)   |
| last      | Return last element of array.                                                             |   [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/last.md)    |
| filter    | Return filtered elements in array.                                                        |  [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/filter.md)   |
| mapByKey  | Return array of elements that mapped to particular key in object array.                   | [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/mapByKey.md)  |
| chunk     | Chunk an array to a specific length.                                                      |   [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/chunk.md)   |
| count     | Count a length of array.                                                                  |   [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/count.md)   |
| countBy   | Classify and counting number of array values according to result of mapper Function.      |  [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/countBy.md)  |
| countOf   | count a number of array values satisfied by specific condition.                           |  [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/countOf.md)  |
| find      | return first element satisfied by specific condition.                                     |   [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/find.md)    |
| findIndex | return first element's index satisfied by specific condition.                             | [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/findIndex.md) |
| groupBy   | classify elements in an array according to given key generation function.                 |  [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/groupBy.md)  |
| isSameArr | chaek that whether the elements in both arrays are same until the order.                  | [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/isSameArr.md) |
| uniqArray | returns a new array that removes duplicate elements.                                      | [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/array/uniqArray.md) |

## 2. Number

| Name              | Description                                       |                                                        Docs                                                        |
| :---------------- | :------------------------------------------------ | :----------------------------------------------------------------------------------------------------------------: |
| commaizeNumber    | generate number seperated by comma.               |  [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/commaizeNumber.md)   |
| decommaizeNumber  | remove comma from number                          | [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/decommaizeNumber.md)  |
| formatPhoneNumber | convert a phone number into a hyphen type.        | [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/formatPhoneNumber.md) |
| percent           | Calculate the result of division as a percentage. |      [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/percent.md)      |
| sum               | add all the numbers of values in an array.        |        [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/sum.md)        |
| isInteger         | check the value is integer.                       |     [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/isInteger.md)     |
| isPositiveInteger | check the value is positive integer.(except 0)    | [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/isPositiveInteger.md) |
| isNegativeInteger | check the value is negative integer.(except 0)    | [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/isNegativeInteger.md) |

## 3. Mask

| Name            | Description          |                                                  Docs                                                   |
| :-------------- | :------------------- | :-----------------------------------------------------------------------------------------------------: |
| maskName        | masking user name    | [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/mask/maskName.md) |
| maskPhoneNumber | masking phone number | [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/mask/maskName.md) |

## 4. Object

| Name      | Description                                                            |                                                    Docs                                                    |
| :-------- | :--------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------: |
| forIn     | call iteratee function for each attribute while traversing the object. |   [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/forIn.md)   |
| keys      | return keys of object.                                                 |   [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/keys.md)    |
| values    | return values of object.                                               |  [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/values.md)   |
| omit      | generates a new object that omits a particular key from the object.    |   [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/omit.md)    |
| pick      | creates a new object containing only a specific key in the object.     |   [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/pick.md)    |
| isSameObj | check that whether both object is same                                 | [Document](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/isSameObj.md) |
