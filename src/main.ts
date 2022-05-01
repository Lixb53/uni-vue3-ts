import { createSSRApp } from "vue";
import App from "./App.vue";

import './styles/icon.css';
import './styles/main.css';

import { setupStore } from '/@/store';
export function createApp() {
  const app = createSSRApp(App);
  setupStore(app);
  return {
    app,
  };
}
