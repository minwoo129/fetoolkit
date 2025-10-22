/**
 * @deprecated
 */
export interface AgentInfo {
  browser: AgentBrowserInfo;
  os: AgentOSInfo;
  isMobile: boolean;
}

/**
 * @deprecated
 */
export interface AgentBrowserInfo extends AgentVersionInfo {
  webkit: boolean;
  webkitVersion: string;
  chromium: boolean;
  chromiumVersion: string;
  webview: boolean;
}

/**
 * @deprecated
 */
export interface AgentVersionInfo {
  name: string;
  version: string;
  majorVersion: number;
}

/**
 * @deprecated
 */
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AgentOSInfo extends AgentVersionInfo {}

/**
 * @deprecated
 */
export interface AgentBrowserInfo extends AgentVersionInfo {
  webkit: boolean;
  webkitVersion: string;
  chromium: boolean;
  chromiumVersion: string;
  webview: boolean;
}

/**
 * @deprecated
 */
export interface PresetInfo {
  test: string;
  id: string;
  brand?: boolean;
  versionTest?: string;
  versionAlias?: string;
}

/**
 * @deprecated
 */
export interface PresetResult {
  preset: PresetInfo | null;
  version: string;
}
