import {
  AdminTextArea,
  AdminTextAreaFeaturedLayout,
} from '@fetoolkit/admin-react';
import { useInput } from '@fetoolkit/react';
import React, { useState } from 'react';
import '../css/testPage.css';

const TextareaTestPage = () => {
  const [textarea, setTextarea] = useInput('');
  const [printData, setPrintData] = useState('');

  return (
    <div className="mainLayer">
      <AdminTextAreaFeaturedLayout
        buttons={[
          {
            type: 'clear',
            title: 'Clear',
            onClick: () => setPrintData('Clear'),
          },
          { type: 'save', title: 'Save', onClick: () => setPrintData('Save') },
          {
            type: 'delete',
            title: 'Delete',
            onClick: () => setPrintData('Delete'),
          },
        ]}
        dataTestId="textarea-layout"
      >
        <AdminTextArea
          value={textarea}
          onChange={(e) => setTextarea(e.target.value)}
          className="textarea-test"
          dataTestId="textarea"
        />
      </AdminTextAreaFeaturedLayout>

      <div className="row-items-grid">
        <h3 data-testid="print-value">{printData}</h3>
      </div>
    </div>
  );
};

export default TextareaTestPage;
