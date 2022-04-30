import type { PluginOption } from 'vite';
import uni from "@dcloudio/vite-plugin-uni";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    uni()
  ]

  return vitePlugins
}
