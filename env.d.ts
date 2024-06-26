/// <reference types="vite/client" />

/**
 * vue文件在ts中导入会报错的解决代码
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
