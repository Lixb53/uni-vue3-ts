import { UserInfo } from '/#/store';

import {
  TOKEN_KEY,
  USER_INFO_KEY,
  ROLES_KEY,
} from '/@/enums/cacheEnum';

export type BasicKeys = keyof BasicStore;

interface BasicStore {
  [TOKEN_KEY]: string | number | null | undefined;
  [USER_INFO_KEY]: UserInfo;
  [ROLES_KEY]: string[];
}

export function getToken() {
  const data = uni.getStorageSync(TOKEN_KEY);

  if (data) {
    return data
  } else {
    return []
  }
}

export function setToken(key: BasicKeys, value) {
  uni.setStorageSync(key, value);
}

export function removeToken() {
  uni.clearStorageSync();
}
