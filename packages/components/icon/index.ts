// 整合组件，最终实现导出组件

import { withInstall } from "@wj/utils/with-install";

import _Icon from "./src/icon.vue";

const Icon = withInstall(_Icon);

export default Icon;

export * from "./src/icon";

// 这里添加的类型 可以再模版中被解析
declare module "vue" {
  export interface GlobalComponents {
    // 我们的接口可以自动合并
    WIcon: typeof Icon;
  }
}
