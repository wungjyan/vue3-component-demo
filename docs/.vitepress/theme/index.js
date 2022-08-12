import DefaultTheme from "vitepress/theme"

import "@wj/theme-chalk/src/index.scss"
import WIcon from "@wj/components/icon"

import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(WIcon)
    app.use(ElementPlus)
  },
}
