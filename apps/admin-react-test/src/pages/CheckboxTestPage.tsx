import { AdminCheckbox } from '@fetoolkit/admin-react';
import { useToggle } from '@fetoolkit/react';
import React from 'react';
import '../css/testPage.css';

const CheckboxTestPage = () => {
  const [checkbox1, setCheckbox1] = useToggle(false);
  const [checkbox2, setCheckbox2] = useToggle(false);
  const [checkbox3, setCheckbox3] = useToggle(false);
  const [checkbox4, setCheckbox4] = useToggle(false);
  const [checkbox5, setCheckbox5] = useToggle(false);

  return (
    <div className="mainLayer">
      <div className="row-items-grid">
        <AdminCheckbox
          checked={checkbox1}
          onChange={setCheckbox1}
          size="xs"
          dataTestId="checkbox1"
        />
        <AdminCheckbox
          checked={checkbox2}
          onChange={setCheckbox2}
          size="sm"
          className="ml-16"
          dataTestId="checkbox2"
        />
        <AdminCheckbox
          checked={checkbox3}
          onChange={setCheckbox3}
          size="md"
          className="ml-16"
          dataTestId="checkbox3"
        />
        <AdminCheckbox
          checked={checkbox4}
          onChange={setCheckbox4}
          size="lg"
          className="ml-16"
          dataTestId="checkbox4"
        />
        <AdminCheckbox
          checked={checkbox5}
          onChange={setCheckbox5}
          size="xl"
          className="ml-16"
          dataTestId="checkbox5"
        />
      </div>
    </div>
  );
};

export default CheckboxTestPage;
