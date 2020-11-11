export interface InterfaceEnvironment {
  production: boolean;
  hmr: boolean;
  version: string | null;
  serverUrl: string;
  defaultLanguage: string;
  supportedLanguages: [string];
  firebase: object;
}
