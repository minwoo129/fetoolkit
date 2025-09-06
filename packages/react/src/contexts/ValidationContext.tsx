import React, { createContext, useMemo } from 'react';

export type ValidatorType<K extends string = string> = Record<
  K,
  ValidatorActionType
>;

export type ValidatorActionType = {
  /** 유효성검사 메서드 */
  // eslint-disable-next-line no-unused-vars
  validator: (value: string) => boolean;
  /**
   * 유효성검사 에러 정보
   * - 유효성검사 결과 유효하지 않은 경우 함께 노출할 에러코드와 메시지
   */
  errorStatus: {
    /** 에러 코드 */
    errorCode: string;
    /** 에러 메시지 */
    errorMessage: string;
  };
};

type ValidationContextsType<K extends string = string> = {
  appValidators: ValidatorType<K>;
};

const ValidationContexts = createContext<ValidationContextsType>({
  appValidators: {},
});

type ProviderArgs<K extends string = string> = {
  validators: ValidatorType<K>;
  children: React.JSX.Element;
};

export type ValidationStatusType = {
  /** 유효성검사 통과여부 */
  isPassed: boolean;
  /** 유효성검사 실패시 에러코드 */
  errorCode?: string;
  /** 유효성검사 실패시 에러메시지 */
  errorMessage?: string;
};

export const ValidationContextsProvider = <K extends string = string>({
  validators,
  children,
}: ProviderArgs<K>) => {
  const appValidators = useMemo(() => {
    return validators;
  }, [validators]);

  return (
    <ValidationContexts.Provider value={{ appValidators }}>
      {children}
    </ValidationContexts.Provider>
  );
};

export default ValidationContexts;
