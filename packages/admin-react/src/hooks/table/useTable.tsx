import React, { useMemo } from 'react';
import type { AdminTableRef } from '../../components';

export const useTable = (
  ref: React.RefObject<AdminTableRef | null | undefined>,
) => {
  return useMemo(
    () => ({
      getSelectedIds: () => {
        return ref.current?.getSelectedIds() ?? [];
      },
    }),
    [ref],
  );
};
