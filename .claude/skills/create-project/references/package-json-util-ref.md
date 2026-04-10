# package.json 파일 템플릿(유틸리티 라이브러리)

> ### 참고
>
> - Skills 변수 참조 코드가 있는 경우 해당파일이 연결된 스킬의 변수참조를 그대로 적용할 것
> - 수정 후 파일 내용(기존에 작성된 내용을 모두 지우고 아래와 같이 작성할 것)

```json
{
  "name": "@fetoolkit/$0",
  "version": "{version}", // 이 버전 정보는 프로젝트 생성될 때 버전정보를 그대로 적용할 것
  "type": "module",
  "author": "minwoo129 <key0129mw@naver.com>",
  "license": "MIT",
  "main": "./dist/index.umd.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "homepage": "https://github.com/minwoo129/fetoolkit",
  "repository": {
    "type": "git",
    "url": "https://github.com/minwoo129/fetoolkit.git",
    "directory": "packages/$0"
  },
  "files": ["dist"],
  "keywords": ["fetoolkit"],
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.es.js",
      "require": "./dist/index.umd.cjs"
    }
  },
  "scripts": {
    "build": "tsc && vite build",
    "test:unit": "vitest"
  }
}
```
