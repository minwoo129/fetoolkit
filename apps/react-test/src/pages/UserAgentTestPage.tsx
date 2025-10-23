import { useUserAgent } from '@fetoolkit/react';
import React from 'react';

const UserAgentTestPage = () => {
  const UAData = useUserAgent();
  return (
    <div>
      <h3 data-testid="user-agent-data">{JSON.stringify(UAData)}</h3>
    </div>
  );
};

export default UserAgentTestPage;
