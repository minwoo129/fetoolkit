import { AdminDropdown } from '@fetoolkit/admin-react';
import React, { useState } from 'react';
import '../css/testPage.css';

const DropdownTestPage = () => {
  const [printData, setPrintData] = useState('');
  return (
    <div className="mainLayer">
      <div className="row-items-grid">
        <AdminDropdown
          title="Product"
          dataTestId="e2e-test-dropdown1"
          align="left"
          menus={[
            {
              title: 'Storefront',
              type: 'button',
              onClick: () => {
                setPrintData('Storefront');
              },
            },
            {
              title: 'Warehouse',
              type: 'button',
              onClick: () => {
                setPrintData('Warehouse');
              },
            },
            {
              title: 'Stock',
              type: 'button',
              onClick: () => {
                setPrintData('Stock');
              },
            },
            {
              title: 'Delete',
              type: 'button',
              styleType: 'delete',
              onClick: () => {
                setPrintData('Delete');
              },
            },
          ]}
        />
        <AdminDropdown
          title="Product"
          className="ml-16"
          dataTestId="e2e-test-dropdown2"
          menus={[
            {
              title: 'General',
              type: 'group',
              menus: [
                { title: 'Storefront' },
                { title: 'Warehouse' },
                { title: 'Stock' },
              ],
            },
            {
              title: 'Actions',
              type: 'group',
              menus: [{ title: 'Delete', styleType: 'delete' }],
            },
          ]}
        />
      </div>
      <div className="row-items-grid">
        <h3 data-testid="print-value">{printData}</h3>
      </div>
    </div>
  );
};

export default DropdownTestPage;
