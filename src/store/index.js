import {createStore} from "vuex"
import auth from "./modules/auth"
import asyncRouter from "./modules/async-router."
import getters from "./getters"

export default createStore({
    modules: {
        auth,
        asyncRouter
    },
    getters
})
