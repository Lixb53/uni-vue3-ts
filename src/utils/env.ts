import type { GlobEnvConfig } from '/#/config';

import { warn } from '/@/utils/log';
import pkg from '../../package.json';
import { getConfigFileName } from '../../build/getConfigFileName';

// 获取通用存储前缀
export function getCommonStoragePrefix() {
  const { VITE_GLOB_APP_SHORT_NAME } = getAppEnvConfig();
  return `${VITE_GLOB_APP_SHORT_NAME}__${getEnv()}`.toUpperCase();
}

// 根据版本生成缓存密钥
export function getStorageShortName() {
  return `${getCommonStoragePrefix()}${`__${pkg.version}`}__`.toUpperCase();
}

// 获取应用程序 ENV 配置
export function getAppEnvConfig() {
  const ENV_NAME = getConfigFileName(import.meta.env);

  const ENV = (import.meta.env.DEV
    ? // 获取全局配置
    (import.meta.env as unknown as GlobEnvConfig)
    : window[ENV_NAME as any]) as unknown as GlobEnvConfig || {};

  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
  } = ENV;

  if (!/^[a-zA-Z\_]*$/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn(
      `VITE_GLOB_APP_SHORT_NAME变量只能是字符/下划线，请在环境变量中修改并重新运行。`,
    );
  }

  return {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
  };
}

/**
 * @description：开发模式
 */
export const devMode = 'development';

/**
 * @description：生产模式
 */
export const prodMode = 'production';

/**
 * @description：获取环境变量
 * @returns：
 * @example：
 */
export function getEnv(): string {
  return import.meta.env.MODE;
}

/**
 * @description：是开发模式吗
 * @returns：
 * @example：
 */
export function isDevMode(): boolean {
  return import.meta.env.DEV;
}

/**
 * @description：是生产模式吗
 * @returns：
 * @example：
 */
export function isProdMode(): boolean {
  return import.meta.env.PROD;
}
