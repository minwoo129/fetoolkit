---
name: version-up
description: 전체 패키지의 버전을 일괄 업데이트하는 스킬입니다. 업데이트할 버전의 정보는 프롬프트 실행시 변수로 제공됩니다.
---

# 1. 버전 업데이트 명령어 실행

```
yarn lerna version $ARGUMENTS --yes --no-git-tag-version --force-publish
```

# 2. peer 버전 업데이트

`packages/` 하위에 있는 모든 프로젝트의 `package.json` 파일을 조회해 `peerDependencies`에 fetoolkit 패키지가 등록되어 있는 경우 해당 버전을 $ARGUMENTS로 변경한다.

ex) `@fetoolkit/react` 프로젝트 `package.json`

```json
{
  ...
  "peerDependencies": {
    "@fetoolkit/user-agent": "$ARGUMENTS"
  },
  ...
}

```

# 3. `yarn install` 실행

패키지 버전 변경 후 설치된 패키지들의 의존성 정보 업데이트가 필요해 `yarn install`을 반드시 실행할 것

```
yarn install --mode=update-lockfile --no-immutable

```
