import { createApp } from "vue"
import App from "./App.vue"

import "@wj/theme-chalk/src/index.scss"
import Icon from "@wj/components/icon"
import Tree from "@wj/components/tree"

const plugins = [Icon, Tree]

const app = createApp(App)

plugins.forEach((plugin) => app.use(plugin))

app.mount("#app")
