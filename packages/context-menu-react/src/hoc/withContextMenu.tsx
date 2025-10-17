import React from 'react';
import { PageLayoutContextProvider } from '../contexts/PageLayoutContext';

export const withContextMenu = (
  children: React.ReactNode,
  menuComponent?: React.ReactNode,
) => {
  return (
    <PageLayoutContextProvider menuComponent={menuComponent}>
      {children}
    </PageLayoutContextProvider>
  );
};
