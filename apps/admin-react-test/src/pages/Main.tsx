import {
  AdminCheckbox,
  AdminDropdown,
  AdminInput,
  AdminSwitch,
  AdminTable,
  AdminTextArea,
  AdminTextAreaFeaturedLayout,
  BasicInputLabel,
  useTable,
} from '@fetoolkit/admin-react';
import { useInput, useToggle } from '@fetoolkit/react';
import { commaizeNumber } from '@fetoolkit/utils';
import React, { useEffect } from 'react';
import {
  defaultData,
  testTableDatas,
  TestTableDataType,
} from '../constants/table';
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
  const { basicProps, controlTableDataStatus, initializeColumns } =
    useTable<TestTableDataType>(defaultData);
  const [email1, setEmail1] = useInput('');
  const [textarea, setTextarea] = useInput('');

  useEffect(() => {
    controlTableDataStatus({
      type: 'add',
      data: testTableDatas,
    });
    initializeColumns({
      name: {
        title: '이름',
        print: (item) => item,
        sortOrder: 0,
      },
      dob: {
        title: '생년월일',
        print: (item) => item,
        sortOrder: 1,
      },
      role: {
        title: '역할',
        print: (item) => item,
        sortOrder: 4,
      },
      salary: {
        title: '급여',
        print: (item) => `$${commaizeNumber(item)}`,
        sortOrder: 3,
      },
    });
  }, []);

  return (
    <div className="main">
      <h1>Main</h1>
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
      <div className="checkbox-grid">
        <AdminTable {...basicProps} className="table-test" />
      </div>
      <div className="checkbox-grid right-align">
        <AdminDropdown
          title="Product"
          menus={[
            { title: 'Storefront', type: 'button' },
            { title: 'Warehouse', type: 'button' },
            { title: 'Stock', type: 'button' },
            { title: 'Delete', type: 'button', styleType: 'delete' },
          ]}
        />
        <AdminDropdown
          title="Product"
          className="dropdown1"
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
      <div className="checkbox-grid">
        <BasicInputLabel label="Email" className="basic-label" htmlFor="Email1">
          <AdminInput
            type="email"
            id="Email1"
            labelType="basic"
            value={email1}
            onChange={(e) => setEmail1(e.target.value)}
          />
        </BasicInputLabel>
      </div>
      <div className="checkbox-grid">
        <AdminTextAreaFeaturedLayout
          buttons={[
            { type: 'delete', title: 'Delete' },
            { type: 'clear', title: 'Clear' },
            { type: 'save', title: 'Save' },
          ]}
        >
          <AdminTextArea
            value={textarea}
            onChange={(e) => setTextarea(e.target.value)}
            className="textarea-test"
          />
        </AdminTextAreaFeaturedLayout>
      </div>
    </div>
  );
};

export default Main;
