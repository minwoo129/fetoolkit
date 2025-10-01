import {
  AdminCheckbox,
  AdminInput,
  AdminSwitch,
  useInput,
} from '@fetoolkit/admin-react';
import React, { useState } from 'react';
import '../css/Main.css';

const Main = () => {
  const [input, setInput] = useInput('');
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const [checkbox3, setCheckbox3] = useState(false);
  const [checkbox4, setCheckbox4] = useState(false);
  const [checkbox5, setCheckbox5] = useState(false);
  const [switchValue1, setSwitchValue1] = useState(false);
  const [switchValue2, setSwitchValue2] = useState(false);
  const [switchValue3, setSwitchValue3] = useState(false);

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
