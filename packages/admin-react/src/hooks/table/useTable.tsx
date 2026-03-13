'use client';
import React from 'react';
import type { AdminTableRef } from '../../components';

export const useTable = (
  ref: React.RefObject<AdminTableRef | null | undefined>,
) => {
  return {
    getSelectedIds: () => {
      return ref.current?.getSelectedIds() ?? [];
    },
  };
};
