import type { UserConfig, ConfigEnv } from "vite";
import { loadEnv } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './build/vite/plugin';
import { wrapperEnv } from "./build/utils";
function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);

  const { VITE_PORT } = viteEnv;
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
      port: VITE_PORT
    },
    plugins: createVitePlugins(viteEnv, isBuild)
  }
}
