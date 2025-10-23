/// <reference types="vite/client" />

// CSS 모듈 타입 선언
declare module '*.css' {
  const content: string;
  export default content;
}

// CSS 파일을 모듈로 import할 때 사용
declare module '*.css?inline' {
  const content: string;
  export default content;
}
