import React from 'react';
import type { ContextProviderType } from './types';
import { UserAgentContextsProvider } from './UserAgentContext';
import {
  ValidationContextsProvider,
  type ValidatorType,
} from './ValidationContext';

const ContextProvider: ContextProviderType = ({ contexts, children }) =>
  contexts.reduce(
    (prev, context) => React.createElement(context, { children: prev }),
    children,
  );

export const FEToolkitProvider = <ValidatorKeys extends string = string>({
  validators = {} as ValidatorType<ValidatorKeys>,
  children,
}: {
  children: React.ReactNode;
  validators?: ValidatorType<ValidatorKeys>;
}) => {
  return (
    <ValidationContextsProvider validators={validators}>
      <ContextProvider contexts={[UserAgentContextsProvider]}>
        {children}
      </ContextProvider>
    </ValidationContextsProvider>
  );
};
