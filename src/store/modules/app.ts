import { defineStore } from 'pinia';
import { store } from '/@/store';

import { darkMode } from '/@/setting/projectSetting';
import { ThemeEnum } from '/@/enums/appEnum';

interface AppState {
  darkMode?: string;
  pageLoading: boolean;
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    darkMode: undefined,
    pageLoading: false
  }),
  getters: {
    getPageLoading(): boolean {
      return this.pageLoading
    },
    getDarkMode(): 'light' | 'dark' | string {
      return this.darkMode || darkMode;
    }
  },
  actions: {
    setPageLoading(loading: boolean): void {
      this.pageLoading = loading;
    },
    setDarkMode(mode: ThemeEnum): void {
      this.darkMode = mode;
    }
  }
})

export function useAppStoreWithOut() {
  return useAppStore(store)
}
