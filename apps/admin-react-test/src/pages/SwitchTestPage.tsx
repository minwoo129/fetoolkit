import { AdminSwitch } from '@fetoolkit/admin-react';
import { useToggle } from '@fetoolkit/react';
import React from 'react';
import '../css/testPage.css';

const SwitchTestPage = () => {
  const [switchValue1, setSwitchValue1] = useToggle(false);
  const [switchValue2, setSwitchValue2] = useToggle(false);
  const [switchValue3, setSwitchValue3] = useToggle(false);
  const [switchValue4, setSwitchValue4] = useToggle(false);
  return (
    <div className="mainLayer">
      <div className="row-items-grid">
        <AdminSwitch
          checked={switchValue1}
          onChange={setSwitchValue1}
          size="sm"
          dataTestId="switch1"
        />
        <AdminSwitch
          checked={switchValue2}
          onChange={setSwitchValue2}
          size="md"
          className="ml-16"
          dataTestId="switch2"
        />
        <AdminSwitch
          checked={switchValue3}
          onChange={setSwitchValue3}
          size="lg"
          className="ml-16"
          dataTestId="switch3"
        />
        <AdminSwitch
          checked={switchValue4}
          onChange={setSwitchValue4}
          className="ml-16"
          dataTestId="switch4"
          enabledColor="#1a8ec0"
        />
      </div>
    </div>
  );
};

export default SwitchTestPage;
