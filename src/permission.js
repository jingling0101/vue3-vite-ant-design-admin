import router from "@/router"
import store from "./store"
import {ADMIN_INFO_RESULT, ROUTERS_GENERATE} from "@/store/mutation-types"

const whiteList = ["/login", "/auth-redirect"]
const num0 = 0
const numN1 = -1


router.beforeEach(async (to, from, next) => {
    const token = localStorage.getItem("admin-token")
    if (token) {
        // 判断是否有token
        if (to.path === "/login") {
            next({path: "/"})
        } else {
            const hasRoles = store.getters.roles && store.getters.roles.length > num0
            if (hasRoles) {
                next()
            } else {
                let data = await store.dispatch(ADMIN_INFO_RESULT, token)
                const accessedRoutes = await store.dispatch(ROUTERS_GENERATE, data.data.roles)

                if (accessedRoutes.length > num0) {
                    accessedRoutes.forEach(item => {
                        router.addRoute(item)
                    })
                    next({
                        ...to,
                        replace: true
                    })
                }
            }
        }
    } else if (!token && whiteList.indexOf(to.path) !== numN1) {
        next()
    } else {
        next("/login")
    }

})