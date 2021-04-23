import { createApp } from "vue"
import App from "./App.vue"
import router from  "./router"
import store from "./store"
import "./permission"
import {setupAn} from "./ant-design"

import mockServe from "../mock/mock"
mockServe()

const app = createApp(App)

setupAn(app)

app.use(store)
app.use(router)
app.mount("#app")
