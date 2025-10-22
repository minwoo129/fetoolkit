export interface AgentInfo {
  /**
   * Browser information
   *
   * -----------------------
   *
   * 브라우저 정보
   */
  browser: AgentBrowserInfo;
  /**
   * OS information
   *
   * -----------------------
   *
   * 운영체제 정보
   */
  os: AgentOSInfo;
  /**
   * Whether the user agent is mobile
   *
   * -----------------------
   *
   * 사용자 에이전트가 모바일인지 여부
   */
  isMobile: boolean;
}

export interface AgentBrowserInfo {
  /**
   * Browser name(chrome, firefox, safari, etc.)
   *
   * -----------------------
   *
   * 브라우저 이름(chrome, firefox, safari 등)
   */
  name: string;
  /**
   * Browser version
   *
   * -----------------------
   *
   * 브라우저 버전
   */
  version: string;
  /**
   * Major version number
   *
   * -----------------------
   *
   * 메이저 버전 번호
   */
  majorVersion: number;
  /**
   * Whether it's a WebKit-based browser
   *
   * -----------------------
   *
   * WebKit 기반 브라우저 여부
   */
  webkit: boolean;
  /**
   * WebKit version
   *
   * -----------------------
   *
   * WebKit 버전
   */
  webkitVersion: string;
  /**
   * Whether it's a Chromium-based browser
   *
   * -----------------------
   *
   * Chromium 기반 브라우저 여부
   */
  chromium: boolean;
  /**
   * Chromium version
   *
   * -----------------------
   *
   * Chromium 버전
   */
  chromiumVersion: string;
  /**
   * Whether it's a WebView environment
   *
   * -----------------------
   *
   * WebView 환경 여부
   */
  webview: boolean;
  /**
   * Whether it's an Edge browser
   *
   * -----------------------
   *
   * Edge 브라우저 여부
   */
  isEdgeBrowser: boolean;
}

export interface AgentOSInfo {
  /**
   * Operating system name (window, mac, ios, android, etc.)
   *
   * -----------------------
   *
   * 운영체제 이름(window, mac, ios, android 등)
   */
  name: string;
  /**
   * Operating system version
   *
   * -----------------------
   *
   * 운영체제 버전
   */
  version: string;
  /**
   * Major version number
   *
   * -----------------------
   *
   * 메이저 버전 번호
   */
  majorVersion: number;
}

export interface PresetInfo {
  test: string;
  id: string;
  brand?: boolean;
  versionTest?: string;
  versionAlias?: string;
}

export interface PresetResult {
  preset: PresetInfo | null;
  version: string;
}
