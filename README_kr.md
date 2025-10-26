# FEToolkit

![](https://fejumvuajiwc28287693.gcdn.ntruss.com/fetoolkit/fetoolkit_thumbnail.png)
(해당 썸네일은 Chat GPT를 통해 생성한 이미지입니다.)

[English](./README.md) | 한국어

FEToolkit은 Frontend 개발 시 유용하게 사용할 수 있는 기능들을 제공하는 툴킷 라이브러리입니다. 라이브러리는 React, Vue 등 프레임워크에 따라서 구분하여 제공되며, 프레임워크와 무관하게 공통적으로 사용할 수 있는 기능은 별도의 라이브러리로 배포될 예정입니다.

> ## V2 업데이트 안내!!!
>
> fetoolkit의 V2 버전이 정식 출시되었습니다.  
> 이번 업데이트를 통해 유용하게 사용할 수 있는 다양한 패키지들이 추가됬으며, 기존에 배포된 패키지들의 경우 일부 기능들을 별도의 패키지로 분리하거나 사용성을 개선하는 등의 업데이트를 진행하였습니다.
>
> 💁‍♂️ 기존의 V1 버전을 사용 중인 경우 일부 기능의 코드베이스가 달라진 부분이 있으니 V2 버전으로 마이그레이션시 주의하시기 바랍니다.

## 제공 모듈

| Name               | Description                                                                              |                                Downloads                                 |                  GitHub                  |
| :----------------- | :--------------------------------------------------------------------------------------- | :----------------------------------------------------------------------: | :--------------------------------------: |
| react              | react 전용 패키지입니다.                                                                 |       [Downloads](https://www.npmjs.com/package/@fetoolkit/react)        |       [GitHub](./packages/react/)        |
| utils              | 유틸리티 함수 전용 패키지입니다.                                                         |       [Downloads](https://www.npmjs.com/package/@fetoolkit/utils)        |       [GitHub](./packages/utils/)        |
| admin-react        | 관리자 페이지 개발시 유용한 컴포넌트, hook, 함수 등을 제공하는 패키지입니다.(react 전용) |    [Downloads](https://www.npmjs.com/package/@fetoolkit/admin-react)     |    [GitHub](./packages/admin-react/)     |
| context-menu-react | React 프로젝트 내에서 ContextMenu 기능을 제공하는 패키지입니다.                          | [Downloads](https://www.npmjs.com/package/@fetoolkit/context-menu-react) | [GitHub](./packages/context-menu-react/) |
| user-agent         | UserAgent 데이터를 조회하는 패키지입니다.                                                |     [Downloads](https://www.npmjs.com/package/@fetoolkit/user-agent)     |     [GitHub](./packages/user-agent/)     |
