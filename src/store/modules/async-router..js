import {asyncRoutes, constantRoutes} from "@/router"
import {ROUTERS_SET, ROUTERS_GENERATE} from "../mutation-types"


const hasPermission = (roles, route) => {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.includes(role))
    }
        return true

}

export function filterAsyncRoutes(routes, roles) {
    const res = []

    routes.forEach(route => {
        const tmp = {...route}
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            res.push(tmp)
        }
    })
    return res
}


const asyncRouter = {
    state: {
        routes: [],
        addRoutes: []
    },

    mutations: {
        [ROUTERS_SET]: (state, routes) => {
            state.addRoutes = routes
            state.routes = constantRoutes.concat(routes)
        }
    },
    actions: {
        [ROUTERS_GENERATE]({commit}, roles) {
            return new Promise(resolve => {
                let accessedRoutes = []
                if (roles.includes("admin")) {
                    accessedRoutes = asyncRoutes
                } else {
                    accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
                }
                commit(ROUTERS_SET, accessedRoutes)
                resolve(accessedRoutes)
            })
        }
    }
}

export default asyncRouter