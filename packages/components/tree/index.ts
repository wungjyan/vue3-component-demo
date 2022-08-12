import _Tree from "./src/tree.vue"

import { withInstall } from "@wj/utils/with-install"

const Tree = withInstall(_Tree)

export default Tree

export * from "./src/tree"

// 这里添加的类型 可以再模版中被解析
declare module "vue" {
  export interface GlobalComponents {
    // 我们的接口可以自动合并
    WTree: typeof Tree
  }
}
