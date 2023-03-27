import type { PluginOption } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import Unocss from 'unocss/vite';

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  console.log(viteEnv, isBuild);
  const vitePlugins: (PluginOption | PluginOption[])[] = [uni(), Unocss()];

  return vitePlugins;
}
