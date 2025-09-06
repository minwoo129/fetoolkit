# 🚀 FEToolkit v1.2.0 릴리즈

## 📋 주요 변경사항

### 🔧 CI/CD 파이프라인 개선
- **자동 배포 파이프라인 추가**: GitHub Actions를 통한 자동 배포 시스템 구축
- **유닛 테스트 CI/CD 파이프라인**: React 및 Utils 패키지별 테스트 자동화
- **배포 파이프라인 안정화**: 여러 차례의 파이프라인 수정 및 최적화
- **이슈 자동 닫힘 파이프라인**: 이슈 관리 자동화 시스템 구축

### 📚 문서화 개선
- **README 업데이트**: 프로젝트 루트 및 각 패키지별 README 개선
- **문서 구조화**: 더 나은 사용자 경험을 위한 문서 정리
- **안내사항 추가**: 마이그레이션 가이드 및 사용법 안내 강화

### 🛠️ 개발 환경 개선
- **Cursor Ruleset 설정**: React 및 Utils 프로젝트별 개발 규칙 설정
- **GitHub 워크플로우 최적화**: PR 룰셋, 태그 관리, 이슈 관리 자동화
- **코드 품질 관리**: ESLint, Prettier 설정 및 pre-commit 훅 설정

## 📦 패키지 정보

### @fetoolkit/react v1.2.0
- **React 19 호환성**: 최신 React 버전 지원
- **컴포넌트**: ErrorBoundary, Flatlist, InfiniteScroll, ContextMenu
- **훅**: 13개의 유용한 커스텀 훅 제공
- **유틸리티**: getUserAgent 함수 포함

### @fetoolkit/utils v1.2.0
- **프레임워크 독립적**: 모든 환경에서 사용 가능
- **Array 유틸리티**: 15개의 배열 처리 함수
- **Number 유틸리티**: 8개의 숫자 처리 함수
- **Mask 유틸리티**: 2개의 마스킹 함수
- **Object 유틸리티**: 6개의 객체 처리 함수

## 🔄 마이그레이션 가이드

기존 `fetoolkit-react` 및 `fetoolkit-utils` 사용자는 다음 패키지로 마이그레이션하시기 바랍니다:

```bash
# 기존 패키지 제거
npm uninstall fetoolkit-react fetoolkit-utils

# 새 패키지 설치
npm install @fetoolkit/react @fetoolkit/utils
```

## 📈 다운로드 통계

- **@fetoolkit/react**: [NPM 다운로드](https://www.npmjs.com/package/@fetoolkit/react)
- **@fetoolkit/utils**: [NPM 다운로드](https://www.npmjs.com/package/@fetoolkit/utils)

## 🎯 다음 버전 계획

- Vue.js 지원 패키지 추가 예정
- 더 많은 유틸리티 함수 추가
- TypeScript 지원 강화
- 성능 최적화

---

**감사합니다!** 🎉  
지속적인 피드백과 기여를 부탁드립니다.