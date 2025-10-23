import { AgentInfo, getUserAgent } from '@fetoolkit/user-agent';
import React, { useEffect, useState } from 'react';

const App = () => {
  const [userAgentData, setUserAgentData] = useState<AgentInfo | null>(null);

  useEffect(() => {
    getUAData();
  }, []);

  const getUAData = async () => {
    try {
      const result = await getUserAgent();
      setUserAgentData(result);
    } catch (e) {
      console.log('error; ', e);
    }
  };
  return (
    <div>
      <h4 data-testid="user-agent-data">
        {userAgentData ? JSON.stringify(userAgentData) : ''}
      </h4>
    </div>
  );
};

export default App;
