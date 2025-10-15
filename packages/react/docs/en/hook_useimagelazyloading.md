# useImageLazyLoading

English | [한국어](../ko/hook_useimagelazyloading.md)

- A Hook for handling image lazy loading.

## Example

```tsx
import { useImageLazyLoading } from '@fetoolkit/react';
 ...
 const [imgRef, realSrc] = useImageLazyLoading({ src: 'image url' });
 ...
 return <img ref={imgRef} src={realSrc} alt="Lazy loaded image" />;
```

## API Reference

### Input(object)

```typescript
{
  src: string;
  options?: IntersectionObserverInit;
}
```

| Name    | Type                     | Required | default            | Description                           |
| :------ | :----------------------- | :------- | :----------------- | :------------------------------------ |
| src     | string                   | true     | -                  | Image URL                             |
| options | IntersectionObserverInit | false    | `{threshold: 0.1}` | IntersectionObserver detailed options |

### Output(tuple)

```typescript
[imgRef: React.Ref<HTMLImageElement | null>, realSrc: string]
```

| Name    | Type                                | Description                                                                                                                                              |
| ------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| imgRef  | React.Ref<HTMLImageElement \| null> | Ref to be used in img tag <br> - Apply this value to the ref props of the `<img>` tag as shown in the example above.                                     |
| realSrc | string                              | Actual image URL to be used in `<img>` tag <br> - Since this URL reflects lazy loading processing, apply this value to the src props of the `<img>` tag. |
