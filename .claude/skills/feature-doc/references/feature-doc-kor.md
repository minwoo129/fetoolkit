# 한국어버전 기능 문서 기본 템플릿

> ### 참고
>
> - 아래 마크다운 블록 상에 적용되어 있는 상대경로 링크는 예시로 적용한 것으로 프롬프트 실행 시 읽지 말것(오류 발생 가능성 있음)

````md
# {기능 명}

[English](../en/{doc-file}.md) | 한국어

- 기능 설명
- 개조식으로 작성

```ts
// 실제 기능의 타입스크립트 코드
// import 구문 미포함
// 만약 컴포넌트 설명 문서인 경우 해당 블록은 작성하지 않음
```

## 기본 사용 예시

```ts
// 타입스크립트 코드 블록 생성 후 실제 사용자가 호출할 때의 코드를 작성
// import 구문 포함 필요
```

## API 설명

> #### 참고
>
> - 유틸리티 타입 문서인 경우 API Reference 블록을 작성하지 않고 타이틀을 삭제한다.
> - API 문서 작성시에는 input 또는 output 타입, 컴포넌트의 Props가 제네릭 타입에 영향을 받는지 반드시 확인해야 함.
> - 컴포넌트의 경우에는 prop의 타입 작성 시 타입스크립트 코드와 같은 제네릭 코드 작성방식을 사용하면 됨.
> - 만약 Hook, 유틸리티 타입인 경우 H3 타이틀을 사용하여 "Input", "Output"으로 구분하여 표 형식으로 작성한다.
> - 아래 표 제목 설명
>   - Name: Props 또는 함수의 인수명(Example 상단 또는 하단 코드블록에서 참고)
>   - Type: Props 또는 함수의 인수 타입(Example 상단 또는 하단 코드블록에서 참고)
>   - Required: 해당 값이 필수인지 여부(boolean)
>   - Description: 해당 값의 기본 역할 및 설명
>     | Name | Type | Required | Description |
>     | :----------- | :--- | :------- | :------------ |
>     | ... | ... | ... | ... |
````

# 예시

- [컴포넌트 문서](../examples/feature-docs-components-kor.md)
- [유틸리티 함수 문서](../examples/utility-function-docs-kor.md)
- [Hook 문서](../examples/hook-docs-kor.md)
- [유틸리티 타입 문서](../examples/utility-type-docs-kor.md)
- [HOC 문서](../examples/hoc-docs-kor.md)
