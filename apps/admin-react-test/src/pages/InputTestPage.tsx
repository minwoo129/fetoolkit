import { AdminInput, AdminInputLabelBasic } from '@fetoolkit/admin-react';
import { useInput } from '@fetoolkit/react';
import React from 'react';
import '../css/testPage.css';

const InputTestPage = () => {
  const [input1, setInput1] = useInput('');
  const [input2, setInput2] = useInput('');
  return (
    <div className="mainLayer">
      <AdminInput
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        className="input-test"
        data-testid="input1"
      />

      <AdminInputLabelBasic
        label="입력 라벨(테스트)"
        className="mt-20"
        htmlFor="Email1"
      >
        <AdminInput
          type="email"
          id="Email1"
          labelType="basic"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          data-testid="input2"
        />
      </AdminInputLabelBasic>
    </div>
  );
};

export default InputTestPage;
