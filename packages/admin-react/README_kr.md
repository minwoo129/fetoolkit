# FEToolkit/Admin-React

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(해당 썸네일은 Chat GPT를 통해 생성한 이미지입니다.)

[English](./README.md) | 한국어

이 프로젝트는 Admin(관리자 페이지) 개발시 유용하게 사용할 수 있는 컴포넌트들과 Hook, 유틸리티 함수들을 제공하는 패키지입니다. React 환경 내에서 관리자 페이지 개발시 유용하게 사용하실 수 있습니다.

> ### 알려드립니다
>
> 해당 버전은 현재 알파 및 베타 테스트 목적으로 배포된 버전입니다. 기능상 불안정한 기능이 존재할 수 있으니 정식 배포 전에는 설치하지 마세요!!!

## 의존성

- react: 19 이상
- classnames: 2 이상
- uuid: 13 이상

## 초기 설정 절차

### 1. 설치 방법

- npm
  ```
  npm i @fetoolkit/admin-react
  ```
- yarn
  ```
  yarn add @fetoolkit/admin-react
  ```
- pnpm
  ```
  pnpm add @fetoolkit/admin-react
  ```

#### 1-1. 추가 설치 패키지(필수)

- npm
  ```
  npm i classnames uuid
  ```
- yarn
  ```
  yarn add classnames uuid
  ```
- pnpm
  ```
  pnpm add classnames uuid
  ```

### 2. 기본 사용법

```tsx
import { AdminTable, AdminInput, AdminSwitch } from '@fetoolkit/admin-react';

function App() {
  return (
    <div>
      <AdminInput placeholder="입력하세요" />
      <AdminSwitch />
      <AdminTable columns={columns} data={data} />
    </div>
  );
}
```

## 제공되는 기능

### 3-1. 컴포넌트

| 이름                   | 설명                                             |                      공식문서                       |
| :--------------------- | :----------------------------------------------- | :-------------------------------------------------: |
| AdminTable             | 데이터 테이블 컴포넌트 (정렬, 페이지네이션 지원) |      [공식문서](./docs/ko/component_table.md)       |
| AdminInput             | 기본 입력 필드 컴포넌트                          |      [공식문서](./docs/ko/component_input.md)       |
| AdminTextArea          | 텍스트 영역 컴포넌트                             |     [공식문서](./docs/ko/component_textarea.md)     |
| AdminInputLabelBasic   | 입력 필드 라벨 컴포넌트                          | [공식문서](./docs/ko/component_inputlabel_basic.md) |
| AdminCheckbox          | 체크박스 컴포넌트                                |     [공식문서](./docs/ko/component_checkbox.md)     |
| AdminRadio             | 라디오 버튼 컴포넌트                             |      [공식문서](./docs/ko/component_radio.md)       |
| AdminSwitch            | 스위치 토글 컴포넌트                             |      [공식문서](./docs/ko/component_switch.md)      |
| AdminDropdown          | 드롭다운 선택 컴포넌트                           |     [공식문서](./docs/ko/component_dropdown.md)     |
| AdminPagination        | 페이지네이션 컴포넌트                            |    [공식문서](./docs/ko/component_pagination.md)    |
| AdminRouteMenuTemplate | 메뉴 템플릿 컴포넌트                             |   [공식문서](./docs/ko/component_menutemplate.md)   |

### 3-2. Hooks

| 이름     | 설명                |                공식문서                |
| :------- | :------------------ | :------------------------------------: |
| useTable | 테이블 상태 관리 훅 | [공식문서](./docs/ko/hook_useTable.md) |

### 3-3. 유틸리티 함수

| 이름              | 설명                        |                    공식문서                     |
| :---------------- | :-------------------------- | :---------------------------------------------: |
| convertTableDatas | 테이블 데이터 변환 유틸리티 | [공식문서](./docs/ko/util_convertTableDatas.md) |
