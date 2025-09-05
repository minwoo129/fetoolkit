import { useContext, useMemo } from 'react';
import UserAgentContexts from '../contexts/UserAgentContext';

export const useUserAgent = () => {
  const { agent } = useContext(UserAgentContexts);

  return useMemo(
    () => ({
      agent,
      /**
       * 브라우저 정보
       */
      browser: agent?.browser ?? null,
      /**
       * 운영체제 정보
       */
      os: agent?.os ?? null,
      /**
       * 모바일에서 실행되고 있는지 여부
       */
      isMobile: agent?.isMobile ?? false,
    }),
    [agent],
  );
};
