import { AdminCheckbox, AdminInput, AdminSwitch } from '@fetoolkit/admin-react';
import { useInput, useToggle } from '@fetoolkit/react';
import React from 'react';
import '../css/Main.css';

const Main = () => {
  const [input, setInput] = useInput('');
  const [checkbox1, setCheckbox1] = useToggle(false);
  const [checkbox2, setCheckbox2] = useToggle(false);
  const [checkbox3, setCheckbox3] = useToggle(false);
  const [checkbox4, setCheckbox4] = useToggle(false);
  const [checkbox5, setCheckbox5] = useToggle(false);
  const [switchValue1, setSwitchValue1] = useToggle(false);
  const [switchValue2, setSwitchValue2] = useToggle(false);
  const [switchValue3, setSwitchValue3] = useToggle(false);

  return (
    <div className="main">
      Main
      <AdminInput
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="input-test"
      />
      <div className="checkbox-grid">
        <AdminCheckbox checked={checkbox1} onChange={setCheckbox1} size="xs" />
        <AdminCheckbox checked={checkbox2} onChange={setCheckbox2} size="sm" />
        <AdminCheckbox checked={checkbox3} onChange={setCheckbox3} size="md" />
        <AdminCheckbox checked={checkbox4} onChange={setCheckbox4} size="lg" />
        <AdminCheckbox checked={checkbox5} onChange={setCheckbox5} size="xl" />
      </div>
      <div className="checkbox-grid">
        <AdminSwitch
          checked={switchValue1}
          onChange={setSwitchValue1}
          size="sm"
        />
        <AdminSwitch
          checked={switchValue2}
          onChange={setSwitchValue2}
          size="md"
          className="switch2"
        />
        <AdminSwitch
          checked={switchValue3}
          onChange={setSwitchValue3}
          size="lg"
          className="switch3"
        />
      </div>
    </div>
  );
};

export default Main;
