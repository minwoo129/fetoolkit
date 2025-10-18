import { useContextMenu } from '@fetoolkit/context-menu-react';
import React, { useEffect, useState } from 'react';
import '../css/testPage1.css';

const ContextMenuTestPage1 = () => {
  const [printValue, setPrintValue] = useState('');
  const { onClickedContextMenuItem } = useContextMenu();
  useEffect(() => {
    const unsubscribe = onClickedContextMenuItem((data) => {
      if (data) {
        setPrintValue(JSON.stringify(data));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [onClickedContextMenuItem]);
  return (
    <div className="mainLayer">
      <div className="row-items-grid">
        <div className="test-element" context-menu-id="test-menu-1">
          Test Element1
        </div>
        <div className="test-element" context-menu-id="test-menu-2">
          Test Element2
        </div>
        <div className="test-element" context-menu-id="test-menu-3">
          Test Element3
        </div>
      </div>
      <div className="row-items-grid">
        <h3 data-testid="print-value">{printValue}</h3>
      </div>
    </div>
  );
};

export default ContextMenuTestPage1;
