# FEToolkit/Utils

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(This thumbnail was created by Chat GPT)

English | [한국어](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/README_kr.md)

FEToolkit utils is a library that provides utility functions that can be used during feature development.

> ### Notice
>
> - This version is currently distributed for beta testing purposes. There may be unstable features, so please do not install before the official release!!!

## 1. Getting Started

### 1-1. Installation

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

## 2. Features

### 2-1. Array

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

### 2-2. Number

| Name              | Description                                       |                       Docs                        |
| :---------------- | :------------------------------------------------ | :-----------------------------------------------: |
| commaizeNumber    | generate number seperated by comma.               |  [Document](./docs/en/number_commaizenumber.md)   |
| decommaizeNumber  | remove comma from number                          | [Document](./docs/en/number_decommaizenumber.md)  |
| formatPhoneNumber | convert a phone number into a hyphen type.        | [Document](./docs/en/number_formatphonenumber.md) |
| percent           | Calculate the result of division as a percentage. |      [Document](./docs/en/number_percent.md)      |
| sum               | add all the numbers of values in an array.        |        [Document](./docs/en/number_sum.md)        |
| isInteger         | check the value is integer.                       |     [Document](./docs/en/number_isinteger.md)     |
| isPositiveInteger | check the value is positive integer.(except 0)    | [Document](./docs/en/number_ispositiveinteger.md) |
| isNegativeInteger | check the value is negative integer.(except 0)    | [Document](./docs/en/number_isnegativeinteger.md) |

### 2-3. Mask

> ### Notice
>
> In the case of these functions, they play some role as utility functions, but they were judged to be insufficient in usability as utility functions that can only be used in Korea. Also, there was a function that provided the same function in toth-slash, so we decided to process it Deprecated. Please note that the function will continue to be provided, but no updates will be provided.

| Name                                                              | Description                                                            |   Docs   |
| :---------------------------------------------------------------- | :--------------------------------------------------------------------- | :------: |
| ~~maskName~~<br><span style="color: red">Deprecated</span>        | ~~masking user name~~<br><span style="color: red">Deprecated</span>    | Document |
| ~~maskPhoneNumber~~<br><span style="color: red">Deprecated</span> | ~~masking phone number~~<br><span style="color: red">Deprecated</span> | Document |

### 2-4. Object

| Name      | Description                                                            |                   Docs                    |
| :-------- | :--------------------------------------------------------------------- | :---------------------------------------: |
| forIn     | call iteratee function for each attribute while traversing the object. |   [Document](./docs/en/object_forin.md)   |
| keys      | return keys of object.                                                 |   [Document](./docs/en/object_keys.md)    |
| values    | return values of object.                                               |  [Document](./docs/en/object_values.md)   |
| omit      | generates a new object that omits a particular key from the object.    |   [Document](./docs/en/object_omit.md)    |
| pick      | creates a new object containing only a specific key in the object.     |   [Document](./docs/en/object_pick.md)    |
| isSameObj | check that whether both object is same                                 | [Document](./docs/en/object_issameobj.md) |

### 2-5. Utility Types

| Name         | Description                               |                    Docs                    |
| :----------- | :---------------------------------------- | :----------------------------------------: |
| PartialPath  | Make specific properties optional         | [Document](./docs/en/type_partialpath.md)  |
| RequiredPath | Make specific properties required         | [Document](./docs/en/type_requiredpath.md) |
| Path         | Convert object type keys to literal types |     [Document](./docs/en/type_path.md)     |
