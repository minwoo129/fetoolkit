# useImageLazyLoading

[English](./useImageLazyLoading.md) | 한국어

- 이미지의 Lazy Loading을 처리하기 위한 hook 입니다.

## 기본 사용 예시

```tsx
import { useImageLazyLoading } from '@fetoolkit/react';
 ...
 const [imgRef, realSrc] = useImageLazyLoading({ src: 'image url' });
 ...
 return <img ref={imgRef} src={realSrc} alt="Lazy loaded image" />;
```

## API 설명

### Input(객체)

```typescript
{
  src: string;
  options?: IntersectionObserverInit;
}
```

| Name    | Type                     | Required | default            | Description                    |
| :------ | :----------------------- | :------- | :----------------- | :----------------------------- |
| src     | string                   | true     | -                  | 이미지 URL                     |
| options | IntersectionObserverInit | false    | `{threshold: 0.1}` | IntersectionObserver 세부 옵션 |

### Output(튜플)

```typescript
[imgRef: React.Ref<HTMLImageElement | null>, realSrc: string]
```

| Name    | Type                                | Description                                                                                                                                    |
| ------- | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| imgRef  | React.Ref<HTMLImageElement \| null> | img 태그에 들어갈 ref <br> - 이 값을 위 예시와 같이 `<img>` 태그의 ref props에 적용해주세요.                                                   |
| realSrc | string                              | `<img>` 태그에 들어갈 실제 이미지 URL <br> - Lazy Loading 처리가 반영된 URL이기 때문에 `<img>` 태그의 src props에는 이 값을 적용해주면 됩니다. |
