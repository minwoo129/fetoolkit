# 🚀 FEToolkit v1.2.1 Release Notes

## 📦 패키지 공개 및 설정 개선

**릴리즈 날짜**: 2025년 9월 6일  
**릴리즈 타입**: Patch Release

---

## 🔄 주요 변경사항

### 📦 패키지 공개 설정 변경

- **@fetoolkit/react**: `private: true` → `private: false`로 변경하여 npm에 공개
- **@fetoolkit/utils**: `private: true` → `private: false`로 변경하여 npm에 공개

### 🔗 홈페이지 경로 개선

- **@fetoolkit/react**: 홈페이지 경로를 구체적인 패키지 경로로 수정
  - `https://github.com/minwoo129/fetoolkit` → `https://github.com/minwoo129/fetoolkit/tree/main/packages/react`
- **@fetoolkit/utils**: 홈페이지 경로를 구체적인 패키지 경로로 수정
  - `https://github.com/minwoo129/fetoolkit` → `https://github.com/minwoo129/fetoolkit/tree/main/packages/utils`

### 📈 버전 업데이트

- **lerna.json**: 1.2.0 → 1.2.1
- **@fetoolkit/react**: 1.2.0 → 1.2.1
- **@fetoolkit/utils**: 1.2.0 → 1.2.1

---

## 📋 패키지 정보

### @fetoolkit/react v1.2.1

- **설명**: React 전용 툴킷 라이브러리
- **요구사항**: React 19 이상
- **주요 기능**:
  - 4개의 컴포넌트 (ErrorBoundary, Flatlist, InfiniteScroll, ContextMenu)
  - 12개의 커스텀 훅
  - 1개의 유틸리티 함수 (getUserAgent)

### @fetoolkit/utils v1.2.1

- **설명**: 프레임워크 독립적인 유틸리티 함수 라이브러리
- **주요 기능**:
  - Array 유틸리티 (14개 함수)
  - Number 유틸리티 (7개 함수)
  - Mask 유틸리티 (2개 함수)
  - Object 유틸리티 (6개 함수)

---

## 🔧 설치 방법

```bash
# React 패키지
npm install @fetoolkit/react
# 또는
yarn add @fetoolkit/react
# 또는
pnpm add @fetoolkit/react

# Utils 패키지
npm install @fetoolkit/utils
# 또는
yarn add @fetoolkit/utils
# 또는
pnpm add @fetoolkit/utils
```

---

## 📚 문서 및 링크

- **메인 저장소**: [https://github.com/minwoo129/fetoolkit](https://github.com/minwoo129/fetoolkit)
- **React 패키지 문서**: [https://github.com/minwoo129/fetoolkit/tree/main/packages/react](https://github.com/minwoo129/fetoolkit/tree/main/packages/react)
- **Utils 패키지 문서**: [https://github.com/minwoo129/fetoolkit/tree/main/packages/utils](https://github.com/minwoo129/fetoolkit/tree/main/packages/utils)
- **NPM 패키지**:
  - [@fetoolkit/react](https://www.npmjs.com/package/@fetoolkit/react)
  - [@fetoolkit/utils](https://www.npmjs.com/package/@fetoolkit/utils)

---

## 🎯 이번 릴리즈의 의미

v1.2.1은 FEToolkit의 중요한 마일스톤입니다. 이번 릴리즈를 통해:

1. **공개 배포**: 두 패키지 모두 npm에 공개되어 더 많은 개발자들이 쉽게 사용할 수 있게 되었습니다.
2. **문서 개선**: 각 패키지별로 구체적인 홈페이지 경로를 제공하여 사용자 경험이 향상되었습니다.
3. **안정성**: 기존 기능을 유지하면서 패키지 설정만 개선하여 안정적인 릴리즈를 제공합니다.

---

## 🔄 마이그레이션 가이드

기존에 사용 중인 개발자분들은 **마이그레이션이 필요하지 않습니다**. 이번 릴리즈는 기능 변경 없이 패키지 설정만 개선된 버전입니다.

---

## 🙏 감사합니다

FEToolkit을 사용해주시는 모든 개발자분들께 감사드립니다. 앞으로도 지속적인 업데이트를 통해 더 유용한 기능들을 제공하겠습니다.

**문의사항이나 버그 리포트는 [GitHub Issues](https://github.com/minwoo129/fetoolkit/issues)를 통해 알려주세요.**
