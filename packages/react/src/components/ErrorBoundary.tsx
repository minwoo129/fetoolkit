/* eslint-disable no-unused-vars */
import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import type {
  ErrorInfo,
  ReactNode,
  ComponentProps,
  PropsWithChildren,
  ComponentType,
} from 'react';

type RenderFallbackProps<ErrorType extends Error = Error> = {
  error: ErrorType;
  reset: () => void;
};
type RenderFallbackType = <ErrorType extends Error>(
  props: RenderFallbackProps<ErrorType>,
) => ReactNode;
type Props<ErrorType extends Error = Error> = {
  /** 에러 발생시 반환할 Fallback UI Element */
  renderFallback: RenderFallbackType;
  /**
   * 에러 발생시 로그 기록 등 데이터 처리를 위한 함수
   * - sentry, firebase 등 외부 서비스에 에러를 기록할 때 사용
   */
  onError?: (error: ErrorType, info: ErrorInfo) => void;
  /**
   * 에러가 초기화되면 호출되는 함수
   */
  onReset?: () => void;
  /**
   * 잡힌 에러를 무시하고 다시 throw할지 여부를 판단
   * - 사용 예시
   *     ```tsx
   *      <ErrorBoundary
   *        {...}
   *        ignoreError={(error) => error.message.includes('어쩌구저쩌구')}
   *      >
   *      ...
   *     ```
   */
  ignoreError?: (error: ErrorType) => boolean;
};

interface State<ErrorType extends Error = Error> {
  error: ErrorType | null;
}

const initialState: State = {
  error: null,
};

class BaseErrorBoundary extends React.Component<
  PropsWithChildren<Props>,
  State
> {
  constructor(props: PropsWithChildren<Props>) {
    super(props);
    this.state = initialState;

    this.resetErrorBoundary = this.resetErrorBoundary.bind(this);
  }

  /** 에러가 발생한 뒤 Fallback UI를 출력시키는 곳 */
  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  /** 에러가 발생한 뒤, 에러사항을 기록하기 위한 곳 */
  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    const { onError, ignoreError } = this.props;

    if (ignoreError?.(error)) {
      throw error;
    }

    onError?.(error, errorInfo);
  }

  resetErrorBoundary = () => {
    const { onReset } = this.props;
    onReset?.();
    this.setState(initialState);
  };

  render(): ReactNode {
    const { children, renderFallback } = this.props;
    const { error } = this.state;

    if (error) {
      return renderFallback({
        error,
        reset: this.resetErrorBoundary,
      });
    }

    return children;
  }
}

export const ErrorBoundary = forwardRef<
  { reset(): void },
  ComponentProps<typeof BaseErrorBoundary>
>((props, resetRef) => {
  const ref = useRef<BaseErrorBoundary>(null);

  useImperativeHandle(resetRef, () => ({
    reset: () => ref.current?.resetErrorBoundary(),
  }));

  return <BaseErrorBoundary ref={ref} {...props} />;
});

// eslint-disable-next-line react-refresh/only-export-components
export const withErrorBoundary = <
  Props extends Record<string, unknown> = Record<string, never>,
>(
  Component: ComponentType<Props>,
  errorBoundaryProps: Omit<ComponentProps<typeof ErrorBoundary>, 'children'>,
) => {
  const componentName = Component.displayName || 'Component';
  const WrappedComponent = (props: Props) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  );

  if (!import.meta.env.PROD) {
    WrappedComponent.displayName = `withErrorBoundary(${componentName})`;
  }

  return WrappedComponent;
};
