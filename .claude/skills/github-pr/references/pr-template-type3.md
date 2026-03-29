# GitHub PR 본문 템플릿

- 해당 템플릿은 `master` 브랜치에서 `release` 브랜치로 향하는 PR 본문 템플릿

## PR 제목

- 제목: `Release of v{버전명}`
  - `package/react` 프로젝트의 `package.json` 파일을 조회하여 그 안에 적용된 버전 정보를 사용할 것.

## PR 본문 템플릿

```md
# Release of v{버전명}

Released at {배포날짜(ex, 2025-10-20)}

## Changes

// Github MCP의 'list_issues' 툴을 사용하여 PR 제목에 적혀있는 버전명과 이슈 제목에 적혀있는 버전명이 일치하는 이슈들을 모두 가져온다.
// 그 중에서 이미 release 브랜치에 반영이 된 이슈들은 제외한다.
// 제외하고 남은 이슈들의 이슈번호를 개조식으로 작성한다.
// ex)
// - #{이슈번호}
```
