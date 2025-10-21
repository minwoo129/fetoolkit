import {
  BROWSER_PRESETS,
  CHROMIUM_PRESETS,
  OS_PRESETS,
  WEBKIT_PRESETS,
  WEBVIEW_PRESETS,
} from './preset';
import type { AgentBrowserInfo, AgentInfo, AgentOSInfo } from './types';
import {
  convertVersion,
  find,
  findBrand,
  findPreset,
  findPresetBrand,
  getUserAgentString,
  hasUserAgentData,
  isWebView,
  some,
} from './utils';

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

function getClientHintsAgent(
  userAgentData: NavigatorUAData,
  osData: UADataValues,
): AgentInfo {
  const brands = [...userAgentData.brands];
  const fullVersionList = osData.fullVersionList;
  const isMobile = userAgentData.mobile || false;
  const firstBrand = brands[0];
  const platform = (osData.platform || userAgentData.platform).toLowerCase();
  const browser: AgentBrowserInfo = {
    name: firstBrand.brand,
    version: firstBrand.version,
    majorVersion: -1,
    webkit: false,
    webkitVersion: '-1',
    chromium: false,
    chromiumVersion: '-1',
    webview:
      !!findPresetBrand(WEBVIEW_PRESETS, brands).brand ||
      isWebView(getUserAgentString()),
  };
  const os: AgentOSInfo = {
    name: 'unknown',
    version: '-1',
    majorVersion: -1,
  };
  browser.webkit =
    !browser.chromium &&
    some(WEBKIT_PRESETS, (preset) => findBrand(brands, preset));

  const chromiumBrand = findPresetBrand(CHROMIUM_PRESETS, brands);

  browser.chromium = !!chromiumBrand.brand;
  browser.chromiumVersion = chromiumBrand.version || '-1';
  if (!browser.chromium) {
    const webkitBrand = findPresetBrand(WEBKIT_PRESETS, brands);

    browser.webkit = !!webkitBrand.brand;
    browser.webkitVersion = webkitBrand.version || '-1';
  }

  const platfomResult = find(OS_PRESETS, (preset) => {
    return new RegExp(`${preset.test}`, 'g').exec(platform);
  });
  os.name = platfomResult ? platfomResult.id : '';

  if (osData) {
    os.version = osData.platformVersion || '-1';
  }
  if (fullVersionList?.length) {
    const browserBrandByFullVersionList = findPresetBrand(
      BROWSER_PRESETS,
      fullVersionList,
    );

    browser.name = browserBrandByFullVersionList.brand || browser.name;
    browser.version = browserBrandByFullVersionList.version || browser.version;
  }
  if (browser.webkit) {
    os.name = isMobile ? 'ios' : 'mac';
  }
  if (os.name === 'ios' && browser.webview) {
    browser.version = '-1';
  }

  os.version = convertVersion(os.version);
  browser.version = convertVersion(browser.version);
  os.majorVersion = parseInt(os.version, 10);
  browser.majorVersion = parseInt(browser.version, 10);

  return {
    browser,
    os,
    isMobile,
  };
}

function getFallbackAgentInfo(): AgentInfo {
  const userAgent = getUserAgentString();
  const isMobile =
    /mobile|android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent,
    );

  // 브라우저 정보 파싱
  const browserResult = findPreset(BROWSER_PRESETS, userAgent);
  const browser: AgentBrowserInfo = {
    name: browserResult.preset?.id || 'unknown',
    version: browserResult.version,
    majorVersion: -1,
    webkit: false,
    webkitVersion: '-1',
    chromium: false,
    chromiumVersion: '-1',
    webview: isWebView(userAgent),
  };

  // WebKit/Chromium 정보 파싱
  const webkitResult = findPreset(WEBKIT_PRESETS, userAgent);
  const chromiumResult = findPreset(CHROMIUM_PRESETS, userAgent);

  browser.webkit = !!webkitResult.preset;
  browser.webkitVersion = webkitResult.version;
  browser.chromium = !!chromiumResult.preset;
  browser.chromiumVersion = chromiumResult.version;

  // OS 정보 파싱
  const osResult = findPreset(OS_PRESETS, userAgent);
  const os: AgentOSInfo = {
    name: osResult.preset?.id || 'unknown',
    version: osResult.version,
    majorVersion: -1,
  };

  // WebKit 기반 브라우저의 경우 OS 정보 수정
  if (browser.webkit) {
    os.name = isMobile ? 'ios' : 'mac';
  }

  // 버전 정보 정리
  os.version = convertVersion(os.version);
  browser.version = convertVersion(browser.version);
  os.majorVersion = parseInt(os.version, 10);
  browser.majorVersion = parseInt(browser.version, 10);

  return {
    browser,
    os,
    isMobile,
  };
}
