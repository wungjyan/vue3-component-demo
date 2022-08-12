import { createApp } from "vue"
import App from "./App.vue"

import "@wj/theme-chalk/src/index.scss"
import Icon from "@wj/components/icon"

const plugins = [Icon]

const app = createApp(App)

plugins.forEach((plugin) => app.use(plugin))

app.mount("#app")
