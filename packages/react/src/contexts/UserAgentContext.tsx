import { getUserAgent, type AgentInfo } from '@fetoolkit/user-agent';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import type { ProviderType } from './types';

export type UserAgentContextsType = {
  agent: AgentInfo | null;
};

const UserAgentContexts = createContext<UserAgentContextsType>({
  agent: null,
});

export const UserAgentContextsProvider: ProviderType = ({ children }) => {
  const [agent, setAgent] = useState<UserAgentContextsType['agent']>(null);

  useEffect(() => {
    getAgent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAgent = useCallback(async () => {
    try {
      const agent = await getUserAgent();
      setAgent(agent);
      // eslint-disable-next-line no-empty, @typescript-eslint/no-unused-vars, no-unused-vars
    } catch (e) {}
  }, []);
  return (
    <UserAgentContexts.Provider value={{ agent }}>
      {children}
    </UserAgentContexts.Provider>
  );
};

export default UserAgentContexts;
