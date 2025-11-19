import { getClientHintsAgent, getFallbackAgentInfo } from './convert';
import { hasUserAgentData } from './utils';

export const getUserAgent = async () => {
  const userAgentData = hasUserAgentData();

  // User-Agent Client Hints API가 지원되지 않는 경우 fallback 사용
  if (!userAgentData) {
    return getFallbackAgentInfo();
  }

  try {
    const result = await userAgentData.getHighEntropyValues([
      'architecture',
      'model',
      'platform',
      'platformVersion',
      'uaFullVersion',
      'fullVersionList',
    ]);

    const agentInfo = getClientHintsAgent(userAgentData, result);

    return agentInfo;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  } catch (e) {
    throw new Error('userAgentData.getHighEntropyValues error');
  }
};
