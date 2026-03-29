# GitHub PR 본문 형식

- 해당 파일에 적혀있는 PR 형식은 다음과 같은 조건일 때 사용된다.
  - head 브랜치(패턴): `{feature,bug,docs}/issue-(이슈번호)/...`
  - base 브랜치(패턴): `dev-v(버전명)` 또는 `{feature,bug,docs}/issue-(이슈번호)/...`

> ### 참고
>
> - 아래 제목 형식 및 템플릿에서 사용되는 이슈번호는 head 브랜치명에서 가져온다.
>   - ex) 브랜치명이 "feature/issue-123/test"인 경우 이슈번호는 123번

## PR 제목

- 제목형식: `{head 브랜치에 연결된 이슈와 동일한 제목}`

## PR 본문 템플릿

```md
## Issue Numbers

- #{이슈번호}

## Description

// 연결된 이슈 본문에서 "description" 영역 내용을 그대로 작성할것

## Changes

// 올라간 커밋 메세지 내에서 이슈번호만 삭제하여 개조식으로 작성할 것(head 브랜치에 올라간 모든 커밋들을 대상으로 작성해야 함)
// ex) 커밋 메세지가 "feat: #123 test commit message"인 경우 아래와 같이 작성할 것
// - feat: test commit message
// 만약 head 브랜치의 이슈번호와 커밋 메세지의 이슈번호가 다른 경우 아래와 같이 작성할 것
// - feat: test commit message (sub issue: #{해당 커밋 메세지 내 이슈번호})
```
