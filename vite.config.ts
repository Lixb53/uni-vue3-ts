import type { UserConfig, ConfigEnv } from "vite";
import { loadEnv } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './build/vite/plugin';
import { wrapperEnv } from "./build/utils";
import { createProxy } from "./build/vite/proxy";
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);

  const { VITE_PORT, VITE_PROXY } = viteEnv;
  const isBuild = command === 'build';

  return {
    base: '/',
    root,
    resolve: {
      alias: [
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        }
      ]
    },
    server: {
      port: VITE_PORT,
      // 从 .env 加载代理配置
      proxy: createProxy(VITE_PROXY),
    },
    plugins: createVitePlugins(viteEnv, isBuild)
  }
}
