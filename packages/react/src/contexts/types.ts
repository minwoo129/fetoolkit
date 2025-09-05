/* eslint-disable no-unused-vars */
import React from 'react';

export type ProviderType = (args: ProviderArgs) => React.JSX.Element;
type ProviderArgs = {
  children: React.ReactNode;
};

export type ContextProviderType = (
  args: ContextProviderProps,
) => React.JSX.Element;
export type ContextProviderProps = {
  contexts: ProviderType[];
  children: React.JSX.Element;
};
