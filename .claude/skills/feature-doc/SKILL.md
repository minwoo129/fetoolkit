---
name: feature-doc
description: 각 기능 별 문서 작성을 위한 스킬입니다. rules를 사용할 때보다 조금더 엄격한 룰을 적용하기 위해 적용하였습니다.
argument-hint: [select(component,hook,hoc,util_func,util_type)] [project name] [filename]
---

# 1. 문서 파일명

- $0 == `component`
  - 문서 파일명(doc-file): `component_$2.md`
- $0 == `hook`
  - 문서 파일명(doc-file): `hook_$2.md`
- $0 == `hoc`
  - 문서 파일명(doc-file): `hoc_$2.md`
- $0 == `util_func`
  - 문서 파일명(doc-file): `func_$2.md`
- $0 == `util_type`
  - 문서 파일명(doc-file): `type_$2.md`

> ### 세부조건
>
> - 파일명은 스네이크 표기법(Snake Case)로 작성
> - filename($2) 부분은 소문자로 전환
> - ex) withComponent라는 hoc의 문서인 경우 => `hoc_withcomponent.md`

# 2. 문서파일 생성 경로

```
└─ packages/$1/
   ├─ docs/
   │  ├─ en/
   │  │  └─ {doc-file}.md
   │  └─ ko/
   │  │  └─ {doc-file}.md
   └─ ...
```

# 3. 참고자료

문서 작성 시 필요한 언어별 템플릿은 아래의 참고자료를 참고할 것

- [영어버전 문서](./references/feature-doc-eng.md)
- [한국어버전 문서](./references/feature-doc-kor.md)
