export interface AgentInfo {
  browser: AgentBrowserInfo;
  os: AgentOSInfo;
  isMobile: boolean;
}

export interface AgentBrowserInfo extends AgentVersionInfo {
  webkit: boolean;
  webkitVersion: string;
  chromium: boolean;
  chromiumVersion: string;
  webview: boolean;
}

export interface AgentVersionInfo {
  name: string;
  version: string;
  majorVersion: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface AgentOSInfo extends AgentVersionInfo {}

export interface AgentBrowserInfo extends AgentVersionInfo {
  webkit: boolean;
  webkitVersion: string;
  chromium: boolean;
  chromiumVersion: string;
  webview: boolean;
  isEdgeBrowser: boolean;
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
