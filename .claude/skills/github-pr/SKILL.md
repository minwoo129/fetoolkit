---
name: github-pr
description: GitHub에 올라갈 PR 작성시 사용할 스킬입니다. base 브랜치에 따라서 PR 본문의 구조가 달라지며, base 브랜치에 대한 정보는 프롬프트 실행시 변수로 제공됩니다.(0번 인덱스는 필수로 적용되)
argument-hint: [dev|master|release|issue] [issue-number]
---

# 1. 기본 수칙(필수)

- Pull Request 내용을 작성하면 프롬프트 상에 다음과 같이 보여주며 반드시 사용자의 업로드 승인을 받아야 한다.(사용자가 승인하지 않으면 PR을 업로드하면 안된다.)

# 1. 참고사항

- 이 프로젝트의 브랜치명 패턴은 다음과 같다.
  - `master`(고정)
  - `release`(고정)
  - `dev-v(버전명)`
  - `{feature,bug,docs}/issue-(이슈번호)/...`
- 프롬프트 실행 시 0번 인덱스의 변수는 반드시 들어오지만, 1번 인덱스의 경우 상황에 따라 안들어올 수도 있다.

# 2. 세부 실행 절차

## 2-1. base 브랜치 정보 조회

프롬프트 실행시 입력한 변수에 따라 base 브랜치의 패턴은 다음과 같다.  
`git branch -a` 명령어를 실행하여 아래의 패턴과 일치하는 브랜치명을 찾는다. 참고로 `master`, `release`의 경우 상시 존재하는 브랜치로 브랜치명이 바뀔 가능성은 없다.

- $0 == master | release
  - base 브랜치 패턴 = $0
- $0 == dev
  - base 브랜치 패턴 = `dev-v(버전명)`
- $0 == issue
  - base 브랜치 패턴 = `{feature,bug,docs}/issue-$1/...`

## 2-2. PR 본문 작성

- $0 == issue | dev
  - PR 형식: [링크](./references/pr-template-type1.md)
- $0 == master
  - PR 형식: [링크](./references/pr-template-type2.md)
- $0 == release
  - PR 형식: [링크](./references/pr-template-type3.md)

## 2-3. 작성 내용 확인

내용 작성이 완료되면 아래와 같은 형식으로 작성한 내용을 보여준다.

- PR 제목
- {Head 브랜치} → {base 브랜치}
- PR 본문(프롬프트 창 내에서 하단에 마크다운 형식으로 제공, 별도의 마크다운 파일 생성 금지)

내용을 보여주고 사용자에게 PR 업로드 여부를 물어보고 프롬프트 실행을 종료한다.
(사용자가 업로드를 승인할 시 PR을 업로드한다.)
