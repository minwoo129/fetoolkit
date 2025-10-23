import { useContextMenu } from '@fetoolkit/context-menu-react';
import React, { useEffect, useState } from 'react';

const ContextMenuTestPage2 = () => {
  const [printValue, setPrintValue] = useState('');
  const { onClickedContextMenuItem } = useContextMenu();
  useEffect(() => {
    const unsubscribe = onClickedContextMenuItem((data) => {
      if (data) {
        setPrintValue(`${data.menuId}-${data.value}`);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [onClickedContextMenuItem]);
  return (
    <div className="mainLayer">
      <div className="row-items-grid">
        <div className="test-element" context-menu-id="test-menu-2">
          Test Element
        </div>
      </div>
      <div className="row-items-grid">
        <h3 data-testid="print-value">{printValue}</h3>
      </div>
    </div>
  );
};

export default ContextMenuTestPage2;
