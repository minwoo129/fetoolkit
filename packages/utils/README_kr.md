# FEToolkit/Utils

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(해당 썸네일은 Chat GPT를 통해 생성한 이미지입니다.)

[English](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/README.md) | 한국어

FEToolkit은 Frontend 개발 시 유용하게 사용할 수 있는 기능들을 제공하는 툴킷 라이브러리입니다. 라이브러리는 React, Vue 등 프레임워크에 따라서 구분하여 제공되며, 프레임워크와 무관하게 공통적으로 사용할 수 있는 기능은 별도의 라이브러리로 배포될 예정입니다.  
현재는 제공되고 있는 기능이 많이 없을지 몰라도 지속적인 업데이트를 통해 기능을 추가해나갈 예정입니다.

> ### 알려드립니다
>
> 이 패키지는 기존에 배포된 [fetoolkit-utils](https://github.com/minwoo129/fetoolkit-utils)와 동일한 프로젝트입니다. 관리의 효율화를 위해 작업환경을 이전한 것이오니 이 점 참고 부탁드립니다.

## Documentation

- 이 라이브러리는 유틸리티 함수만 모아놓은 라이브러리입니다.
  - 프레임워크에 제한 없이 모든 환경에서 제약없이 사용하실 수 있습니다.

## 초기 설정 절차

### 1. 설치 방법

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

## 제공되는 유틸리티 함수

## 1. Array

| 이름      | 설명                                                                                                     |                 공식문서                 |
| :-------- | :------------------------------------------------------------------------------------------------------- | :--------------------------------------: |
| at        | 배열에서 특정 인덱스에 있는 요소를 반환하는 함수<br> (파이썬처럼 음수 인덱스도 지원)                     |    [공식문서](./docs/ko/array_at.md)     |
| first     | 배열의 첫번째 요소를 꺼내오는 함수                                                                       |   [공식문서](./docs/ko/array_first.md)   |
| last      | 배열의 마지막 요소를 꺼내오는 함수                                                                       |   [공식문서](./docs/ko/array_last.md)    |
| filter    | Array에서 조건에 맞는 값들만 필터링하는 함수입니다.                                                      |  [공식문서](./docs/ko/array_filter.md)   |
| mapByKey  | 객체 타입 요소를 갖는 Array에서 특정 속성(어트리뷰트)에 <br>해당하는 값만 매핑해서 Array로 반환하는 함수 | [공식문서](./docs/ko/array_mapbykey.md)  |
| chunk     | 배열을 정해진 길이에 맞게 더 작은 배열로 나누는 함수                                                     |   [공식문서](./docs/ko/array_chunk.md)   |
| count     | 배열의 길이를 반환하는 함수                                                                              |   [공식문서](./docs/ko/array_count.md)   |
| countBy   | 배열에 속해있는 요소를 mapper 함수가 반환하는 값에 따라 분류하고 개수를 반환하는 함수                    |  [공식문서](./docs/ko/array_countby.md)  |
| countOf   | 배열에 속해있는 요소 중에서 특정 조건을 만족하는 요소들의 개수를 카운팅하는 함수                         |  [공식문서](./docs/ko/array_countof.md)  |
| find      | 배열에서 조건에 맞는 첫번째 요소를 반환하는 함수                                                         |   [공식문서](./docs/ko/array_find.md)    |
| findIndex | 배열에서 조건에 맞는 첫번째 요소의 index를 반환하는 함수                                                 | [공식문서](./docs/ko/array_findindex.md) |
| groupBy   | 주어진 키 생성 함수에 따라서 배열의 요소를 분류하는 함수                                                 |  [공식문서](./docs/ko/array_groupby.md)  |
| isSameArr | 두 배열에 들어가있는 요소가 순서까지 모두 동일한지 여부를 반환하는 함수                                  | [공식문서](./docs/ko/array_issamearr.md) |
| uniqArray | 배열에 들어가있는 중복 요소를 제거한 새로운 배열을 반환하는 함수                                         | [공식문서](./docs/ko/array_uniqarray.md) |

## 2. Number

| 이름              | 설명                                                      |                                                       공식문서                                                        |
| :---------------- | :-------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------: |
| commaizeNumber    | 주어진 숫자를 콤마로 구분하는 함수입니다.                 |                                    [공식문서](./docs/ko/number_commaizenumber.md)                                     |
| decommaizeNumber  | 콤마로 구분된 숫자에서 콤마만 제거하는 함수입니다.        |                                   [공식문서](./docs/ko/number_decommaizenumber.md)                                    |
| formatPhoneNumber | 전화번호를 하이픈(-)이 들어간 형태로 변환하는 함수입니다. | [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/formatPhoneNumber_kr.md) |
| percent           | 나눗셈 결과를 퍼센트로 계산해주는 함수입니다.             |      [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/percent_kr.md)      |
| sum               | 배열에 저장된 모든 숫자들을 더하는 함수입니다.            |        [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/sum_kr.md)        |
| isInteger         | 값이 정수인지 여부를 반환하는 함수입니다.                 |     [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/isInteger_kr.md)     |
| isPositiveInteger | 값이 양의 정수인지 여부를 반환하는 함수입니다.(0 제외)    | [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/isPositiveInteger_kr.md) |
| isNegativeInteger | 값이 음의 정수인지 여부를 반환하는 함수입니다.(0 제외)    | [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/number/isNegativeInteger_kr.md) |

## 3. Mask

| 이름            | 설명                                 |                                                공식문서                                                 |
| :-------------- | :----------------------------------- | :-----------------------------------------------------------------------------------------------------: |
| maskName        | 이름을 마스킹하는 함수입니다.        | [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/mask/maskName.md) |
| maskPhoneNumber | 휴대폰 번호를 마스킹하는 함수입니다. | [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/mask/maskName.md) |

## 4. Object

| 이름      | 설명                                                           |                                                   공식문서                                                    |
| :-------- | :------------------------------------------------------------- | :-----------------------------------------------------------------------------------------------------------: |
| forIn     | 객체를 순회하면서 각 속성에 대해 iteratee 함수를 호출하는 함수 |   [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/forIn_kr.md)   |
| keys      | 객체의 열거가능한 프로퍼티 이름들을 반환하는 함수              |   [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/keys_kr.md)    |
| values    | 객체의 열거가능한 프로퍼티 값들을 반환하는 함수                |  [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/values_kr.md)   |
| omit      | 객체에서 특정 키를 생략한 새로운 객체를 생성하는 함수          |   [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/omit_kr.md)    |
| pick      | 객체에서 특정 키만 포함한 새로운 객체를 생성하는 함수          |   [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/pick_kr.md)    |
| isSameObj | 두 객체가 동일한 객체인지 여부를 반환하는 함수                 | [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/object/isSameObj_kr.md) |

## 5. Utility Types

| 이름         | 설명                                       |                                                    공식문서                                                     |
| :----------- | :----------------------------------------- | :-------------------------------------------------------------------------------------------------------------: |
| PartialPath  | 특정 경로상의 프로퍼티를 optional로 처리   | [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/types/partialPath_kr.md)  |
| RequiredPath | 특정 경로상의 프로퍼티를 optional로 처리   | [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/types/requiredPath_kr.md) |
| Path         | 객체타입의 key 값들을 리터럴 타입으로 변환 |     [공식문서](https://github.com/minwoo129/fetoolkit/tree/master/packages/utils/src/docs/types/path_kr.md)     |
