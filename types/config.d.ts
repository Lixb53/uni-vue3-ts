export interface ProjectConfig {
  // 权限相关信息的存储位置
  permissionCacheType: CacheTypeEnum;
  // 是否显示配置按钮
  showSettingButton: boolean;
  // 是否显示主题切换按钮
  showDarkModeToggle: boolean;
  // 配置按钮的显示位置
  settingButtonPosition: SettingButtonPositionEnum;
  // 权限模式
  permissionMode: PermissionModeEnum;
  // 网站灰色模式，为可能的哀悼日期打开
  grayMode: boolean;
  // 是否开启颜色弱模式
  colorWeak: boolean;
  // Theme color
  themeColor: string;
  // 是否显示徽标
  showLogo: boolean;
  // Animation configuration
  transitionSetting: TransitionSetting;
  // 使用错误处理程序插件
  useErrorHandle: boolean;
  // 切换接口时是否删除未关闭的消息并通知
  closeMessageOnSwitch: boolean;
  // 切换接口时是否取消已发送但未响应的 http 请求。
  removeAllHttpPending: boolean;
}

export interface GlobConfig {
  // Site title
  title: string;
  // Service interface url
  apiUrl: string;
  // Upload url
  uploadUrl?: string;
  //  Service interface url prefix
  urlPrefix?: string;
  // Project abbreviation
  shortName: string;
}

export interface GlobEnvConfig {
  // Site title
  VITE_GLOB_APP_TITLE: string;
  // Service interface url
  VITE_GLOB_API_URL: string;
  // Service interface url prefix
  VITE_GLOB_API_URL_PREFIX?: string;
  // Project abbreviation
  VITE_GLOB_APP_SHORT_NAME: string;
  // Upload url
  VITE_GLOB_UPLOAD_URL?: string;
}
