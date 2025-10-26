import { AdminRadio } from '@fetoolkit/admin-react';
import React from 'react';
import '../css/testPage.css';

const RadioTestPage = () => {
  return (
    <div className="mainLayer">
      <div className="row-items-grid">
        <AdminRadio name="radio1" dataTestId="radio1-1" />
        <AdminRadio name="radio1" dataTestId="radio1-2" />
      </div>
      <div className="row-items-grid">
        <AdminRadio name="radio2" size="sm" dataTestId="radio2-1" />
        <AdminRadio name="radio2" size="md" dataTestId="radio2-2" />
        <AdminRadio name="radio2" size="lg" dataTestId="radio2-3" />
        <AdminRadio name="radio2" size="xl" dataTestId="radio2-4" />
      </div>
      <div className="row-items-grid">
        <AdminRadio name="radio3" color="primary" dataTestId="radio3-1" />
        <AdminRadio name="radio3" color="secondary" dataTestId="radio3-2" />
        <AdminRadio name="radio3" color="success" dataTestId="radio3-3" />
        <AdminRadio name="radio3" color="warning" dataTestId="radio3-4" />
        <AdminRadio name="radio3" color="danger" dataTestId="radio3-5" />
      </div>
    </div>
  );
};

export default RadioTestPage;
